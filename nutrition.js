/* 份量与营养计算不依赖模型、DOM 或网络，可在浏览器及 Node 中复用。 */
(function (root) {
  'use strict';
  const keys = ['kcal', 'p', 'f', 'c'];
  function validAmount(value) {
    return typeof value === 'number' && Number.isFinite(value) && value > 0 && value <= 5000;
  }
  function unitOf(food) { return /ml/i.test(food.unit || '') ? 'ml' : 'g'; }
  function nutrients(food, amount) {
    if (!validAmount(amount)) throw new Error('食用量应大于 0，且不超过 5000 克 / 毫升。');
    const result = {};
    for (const key of keys) {
      if (typeof food[key] !== 'number' || !Number.isFinite(food[key]) || food[key] < 0) {
        throw new Error('食物营养数据不完整，请重新选择食物。');
      }
      result[key] = Math.round(food[key] * amount / 100);
    }
    return result;
  }
  function matchFood(name, unit, database) {
    // 只做确定的名称/单位匹配，未知菜品交由用户选择，避免错配营养值。
    return database.findIndex(food => food.name === name && unitOf(food) === unit);
  }
  function sumItems(items, database) {
    const total = {kcal: 0, p: 0, f: 0, c: 0, minKcal: 0, maxKcal: 0, unmatched: 0};
    for (const item of items) {
      const food = database[item.foodIndex];
      if (!food || !validAmount(item.grams)) { total.unmatched++; continue; }
      const value = nutrients(food, item.grams);
      for (const key of keys) total[key] += value[key];
      const low = item.manual ? item.grams : item.minGrams;
      const high = item.manual ? item.grams : item.maxGrams;
      if (!validAmount(low) || !validAmount(high) || low > item.grams || high < item.grams) {
        total.unmatched++;
        continue;
      }
      total.minKcal += nutrients(food, low).kcal;
      total.maxKcal += nutrients(food, high).kcal;
    }
    return total;
  }
  const api = Object.freeze({validAmount, unitOf, nutrients, matchFood, sumItems});
  root.Nutrition = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
