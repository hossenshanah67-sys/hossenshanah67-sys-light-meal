(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.VisionContract = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const MAX_BODY_CHARS = 1024 * 1024;
  const MAX_ITEMS = 20;
  const MAX_PORTION = 5000;
  const MAX_NOTE_CHARS = 500;
  const MAX_NOTES = 20;

  function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function fail(message) {
    throw new Error(message);
  }

  function parseJson(value, description) {
    if (typeof value !== 'string') {
      if (isObject(value)) return value;
      fail(description + '格式不正确，请重新识别。');
    }
    if (!value.trim() || value.length > MAX_BODY_CHARS) {
      fail(description + '为空或过长，请重新识别。');
    }
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch (_) {
      fail(description + '不是完整的 JSON，请重新识别。');
    }
    if (!isObject(parsed)) fail(description + '必须是 JSON 对象，请重新识别。');
    return parsed;
  }

  function note(value, description) {
    if (typeof value !== 'string') fail(description + '格式不正确，请重新识别。');
    return value.trim().slice(0, MAX_NOTE_CHARS);
  }

  function validateResult(value) {
    const result = parseJson(value, '识别结果');
    if (!Array.isArray(result.items) || result.items.length > MAX_ITEMS) {
      fail('识别结果中的食物列表无效，单次最多识别 20 种食物。');
    }
    if (!Array.isArray(result.notes) || result.notes.length > MAX_NOTES) {
      fail('识别结果中的说明列表无效，请重新识别。');
    }

    const items = result.items.map(function (item, index) {
      const label = '第 ' + (index + 1) + ' 种食物';
      if (!isObject(item)) fail(label + '的结果格式不正确，请重新识别。');
      if (typeof item.name !== 'string' || !item.name.trim() || item.name.trim().length > 80) {
        fail(label + '的名称无效，请重新识别。');
      }
      if (item.unit !== 'g' && item.unit !== 'ml') {
        fail(label + '的计量单位无效，仅支持克或毫升。');
      }
      const portions = [item.minGrams, item.grams, item.maxGrams];
      if (portions.some(function (amount) {
        return typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0 || amount > MAX_PORTION;
      })) {
        fail(label + '的份量无效，请重新识别或手动输入份量。');
      }
      if (item.minGrams > item.grams || item.grams > item.maxGrams) {
        fail(label + '的份量区间不包含估算值，请重新识别。');
      }
      const confidence = ['low', 'medium', 'high'].includes(item.confidence) ? item.confidence : 'low';
      return {
        name: item.name.trim(),
        grams: item.grams,
        minGrams: item.minGrams,
        maxGrams: item.maxGrams,
        unit: item.unit,
        confidence: confidence,
        notes: note(item.notes, label + '的说明')
      };
    });

    return {
      items: items,
      notes: result.notes.map(function (value) { return note(value, '整体说明'); }),
      source: 'vision-model'
    };
  }

  function parseProvider(body) {
    const response = parseJson(body, '识别服务返回的数据');
    if (response.error) fail('识别服务未能完成请求，请检查 API Key、模型权限或账户额度。');
    if (!Object.prototype.hasOwnProperty.call(response, 'choices')) return validateResult(response);
    if (!Array.isArray(response.choices) || response.choices.length < 1 || !isObject(response.choices[0])) {
      fail('识别服务没有返回有效结果，请重新识别。');
    }
    const choice = response.choices[0];
    if (choice.finish_reason !== undefined && choice.finish_reason !== null &&
        choice.finish_reason !== '' && choice.finish_reason !== 'stop') {
      fail(choice.finish_reason === 'length'
        ? '识别结果因长度限制被截断，请减少照片中的食物后重试。'
        : '识别服务未能完整返回结果，请更换照片后重试。');
    }
    if (!isObject(choice.message) || typeof choice.message.content !== 'string') {
      fail('识别服务的回复格式不正确，请重新识别。');
    }
    return validateResult(choice.message.content);
  }

  return Object.freeze({ parseProvider: parseProvider, validateResult: validateResult });
});
