/* 每日减脂餐生成器：只使用本地食物库，不联网，不把推荐当作医疗建议。 */
(function (root) {
  'use strict';
  const mealTemplates = [
    {name:'早餐',icon:'☀️',ratio:.28,choices:[[['燕麦片',45],['希腊酸奶（无糖）',180],['蓝莓',80]],[['鸡蛋',100],['全麦面包',55],['番茄',150]],[['无糖豆浆',300],['红薯',180],['蛋清',100]]]},
    {name:'午餐',icon:'🥗',ratio:.39,choices:[[['水煮鸡胸肉',150],['糙米饭',150],['西兰花',250]],[['牛里脊',140],['红薯',220],['西葫芦',250]],[['虾仁',180],['白米饭',150],['彩椒',220]]]},
    {name:'晚餐',icon:'🌙',ratio:.33,choices:[[['鳕鱼',180],['土豆',180],['菠菜',250]],[['鸡腿肉（去皮）',150],['玉米',160],['菜花',250]],[['豆腐',230],['荞麦面（熟）',180],['菌菇',250]]]}];
  function seedOf(date){return String(date||'').split('').reduce((sum,char)=>sum+char.charCodeAt(0),0)}
  function calculate(items,byName){return items.reduce((total,item)=>{const food=byName[item.name];for(const key of ['kcal','p','f','c'])total[key]+=Math.round(food[key]*item.amount/100);return total},{kcal:0,p:0,f:0,c:0})}
  function generate(foods,options={}){if(!Array.isArray(foods))throw new Error('需要可用的食物库。');const byName=Object.fromEntries(foods.map(food=>[food.name,food])),blocked=new Set((options.excluded||[]).map(String)),goal=Math.max(800,Math.min(6000,Math.round(Number.isFinite(options.goal)?options.goal:1800)));const meals=mealTemplates.map((template,index)=>{const available=template.choices.filter(choice=>choice.every(([name])=>byName[name]&&!blocked.has(name))),choice=available[(seedOf(options.date)+index)%available.length]||template.choices.find(choice=>choice.every(([name])=>byName[name]));if(!choice)throw new Error('食物库不完整，无法生成餐单。');const raw=choice.map(([name,amount])=>({name,amount})),scale=Math.max(.55,Math.min(1.8,goal*template.ratio/calculate(raw,byName).kcal)),items=raw.map(item=>({...byName[item.name],amount:Math.max(20,Math.round(item.amount*scale/5)*5),recordSource:'meal-plan'}));return {name:template.name,icon:template.icon,items,nutrition:calculate(items,byName)}});const total=meals.reduce((sum,meal)=>{for(const key of ['kcal','p','f','c'])sum[key]+=meal.nutrition[key];return sum},{kcal:0,p:0,f:0,c:0});return {goal,meals,total,disclaimer:'食材重量与营养为估算；烹饪油、调味料、包装食品请按实际另行记录。'}}
  const api=Object.freeze({generate,calculate});root.MealPlan=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
