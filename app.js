const foods=[
 {name:'水煮鸡胸肉',emoji:'🍗',kcal:133,p:29,f:2,c:0,unit:'100 g',type:'protein'},
 {name:'鸡蛋',emoji:'🥚',kcal:144,p:13,f:10,c:1,unit:'100 g',type:'protein'},
 {name:'糙米饭',emoji:'🍚',kcal:116,p:3,f:1,c:25,unit:'100 g',type:'staple'},
 {name:'西兰花',emoji:'🥦',kcal:34,p:3,f:0,c:7,unit:'100 g',type:'vegetable'},
 {name:'希腊酸奶（无糖）',emoji:'🥣',kcal:97,p:10,f:5,c:4,unit:'100 g',type:'protein'},
 {name:'香蕉',emoji:'🍌',kcal:93,p:1,f:0,c:23,unit:'100 g',type:'staple'},
 {name:'三文鱼',emoji:'🐟',kcal:208,p:20,f:13,c:0,unit:'100 g',type:'protein'},
 {name:'番茄',emoji:'🍅',kcal:18,p:1,f:0,c:4,unit:'100 g',type:'vegetable'}
];
// 常见食物库：均为可食部每 100 g 的便捷估算值，实际应以包装营养成分表或权威数据库为准。
foods.push(
 {name:'白米饭',emoji:'🍚',kcal:116,p:3,f:0,c:26,unit:'100 g',type:'staple'},
 {name:'玉米',emoji:'🌽',kcal:112,p:4,f:2,c:22,unit:'100 g',type:'staple'},
 {name:'红薯',emoji:'🍠',kcal:99,p:1,f:0,c:24,unit:'100 g',type:'staple'},
 {name:'土豆',emoji:'🥔',kcal:77,p:2,f:0,c:17,unit:'100 g',type:'staple'},
 {name:'全麦面包',emoji:'🍞',kcal:254,p:13,f:4,c:42,unit:'100 g',type:'staple'},
 {name:'燕麦片',emoji:'🥣',kcal:367,p:15,f:7,c:61,unit:'100 g',type:'staple'},
 {name:'意大利面（熟）',emoji:'🍝',kcal:157,p:6,f:1,c:31,unit:'100 g',type:'staple'},
 {name:'荞麦面（熟）',emoji:'🍜',kcal:99,p:5,f:1,c:20,unit:'100 g',type:'staple'},
 {name:'馒头',emoji:'🥯',kcal:223,p:7,f:1,c:46,unit:'100 g',type:'staple'},
 {name:'南瓜',emoji:'🎃',kcal:26,p:1,f:0,c:7,unit:'100 g',type:'staple'},
 {name:'鸡腿肉（去皮）',emoji:'🍗',kcal:146,p:20,f:7,c:0,unit:'100 g',type:'protein'},
 {name:'牛里脊',emoji:'🥩',kcal:125,p:22,f:4,c:0,unit:'100 g',type:'protein'},
 {name:'瘦猪肉',emoji:'🥩',kcal:143,p:20,f:6,c:0,unit:'100 g',type:'protein'},
 {name:'虾仁',emoji:'🦐',kcal:93,p:19,f:1,c:1,unit:'100 g',type:'protein'},
 {name:'鳕鱼',emoji:'🐟',kcal:88,p:20,f:1,c:0,unit:'100 g',type:'protein'},
 {name:'金枪鱼（水浸）',emoji:'🐟',kcal:116,p:26,f:1,c:0,unit:'100 g',type:'protein'},
 {name:'豆腐',emoji:'◻️',kcal:81,p:8,f:5,c:2,unit:'100 g',type:'protein'},
 {name:'豆干',emoji:'🟫',kcal:140,p:16,f:8,c:4,unit:'100 g',type:'protein'},
 {name:'无糖豆浆',emoji:'🥛',kcal:31,p:3,f:2,c:1,unit:'100 ml',type:'protein'},
 {name:'脱脂牛奶',emoji:'🥛',kcal:35,p:3,f:0,c:5,unit:'100 ml',type:'protein'},
 {name:'低脂奶酪',emoji:'🧀',kcal:173,p:25,f:7,c:3,unit:'100 g',type:'protein'},
 {name:'蛋清',emoji:'🥚',kcal:48,p:11,f:0,c:1,unit:'100 g',type:'protein'},
 {name:'毛豆',emoji:'🫛',kcal:123,p:13,f:5,c:10,unit:'100 g',type:'protein'},
 {name:'西葫芦',emoji:'🥒',kcal:19,p:1,f:0,c:4,unit:'100 g',type:'vegetable'},
 {name:'黄瓜',emoji:'🥒',kcal:15,p:1,f:0,c:4,unit:'100 g',type:'vegetable'},
 {name:'生菜',emoji:'🥬',kcal:15,p:1,f:0,c:3,unit:'100 g',type:'vegetable'},
 {name:'菠菜',emoji:'🥬',kcal:23,p:3,f:0,c:4,unit:'100 g',type:'vegetable'},
 {name:'芦笋',emoji:'🥬',kcal:20,p:2,f:0,c:4,unit:'100 g',type:'vegetable'},
 {name:'菜花',emoji:'🥦',kcal:25,p:2,f:0,c:5,unit:'100 g',type:'vegetable'},
 {name:'胡萝卜',emoji:'🥕',kcal:41,p:1,f:0,c:10,unit:'100 g',type:'vegetable'},
 {name:'彩椒',emoji:'🫑',kcal:26,p:1,f:0,c:6,unit:'100 g',type:'vegetable'},
 {name:'菌菇',emoji:'🍄',kcal:22,p:3,f:0,c:3,unit:'100 g',type:'vegetable'},
 {name:'海带',emoji:'🌿',kcal:17,p:1,f:0,c:4,unit:'100 g',type:'vegetable'},
 {name:'冬瓜',emoji:'🥒',kcal:11,p:0,f:0,c:3,unit:'100 g',type:'vegetable'},
 {name:'苹果',emoji:'🍎',kcal:53,p:0,f:0,c:14,unit:'100 g',type:'fruit'},
 {name:'橙子',emoji:'🍊',kcal:48,p:1,f:0,c:12,unit:'100 g',type:'fruit'},
 {name:'蓝莓',emoji:'🫐',kcal:57,p:1,f:0,c:14,unit:'100 g',type:'fruit'},
 {name:'草莓',emoji:'🍓',kcal:32,p:1,f:0,c:8,unit:'100 g',type:'fruit'},
 {name:'猕猴桃',emoji:'🥝',kcal:61,p:1,f:1,c:15,unit:'100 g',type:'fruit'},
 {name:'西瓜',emoji:'🍉',kcal:30,p:1,f:0,c:8,unit:'100 g',type:'fruit'},
 {name:'葡萄',emoji:'🍇',kcal:44,p:0,f:0,c:11,unit:'100 g',type:'fruit'},
 {name:'牛油果',emoji:'🥑',kcal:160,p:2,f:15,c:9,unit:'100 g',type:'fruit'},
 {name:'杏仁',emoji:'🌰',kcal:578,p:21,f:50,c:22,unit:'100 g',type:'snack'},
 {name:'核桃',emoji:'🌰',kcal:654,p:15,f:65,c:14,unit:'100 g',type:'snack'},
 {name:'花生',emoji:'🥜',kcal:567,p:26,f:49,c:16,unit:'100 g',type:'snack'},
 {name:'黑巧克力（70%）',emoji:'🍫',kcal:598,p:8,f:43,c:46,unit:'100 g',type:'snack'},
 {name:'蛋白棒',emoji:'🍫',kcal:350,p:30,f:10,c:35,unit:'100 g',type:'snack'},
 {name:'美式咖啡',emoji:'☕',kcal:2,p:0,f:0,c:0,unit:'100 ml',type:'drink'},
 {name:'拿铁（不加糖）',emoji:'☕',kcal:48,p:3,f:2,c:5,unit:'100 ml',type:'drink'},
 {name:'无糖可乐',emoji:'🥤',kcal:0,p:0,f:0,c:0,unit:'100 ml',type:'drink'},
 {name:'鲜榨橙汁',emoji:'🧃',kcal:45,p:1,f:0,c:10,unit:'100 ml',type:'drink'},
 {name:'鸡肉蔬菜沙拉',emoji:'🥗',kcal:110,p:10,f:5,c:7,unit:'100 g',type:'meal'},
 {name:'牛肉饭',emoji:'🍱',kcal:160,p:9,f:5,c:20,unit:'100 g',type:'meal'},
 {name:'番茄鸡蛋面',emoji:'🍜',kcal:132,p:5,f:4,c:20,unit:'100 g',type:'meal'},
 {name:'麻辣烫（清汤）',emoji:'🍲',kcal:75,p:5,f:3,c:8,unit:'100 g',type:'meal'},
 {name:'寿司',emoji:'🍣',kcal:150,p:5,f:2,c:28,unit:'100 g',type:'meal'},
 {name:'汉堡',emoji:'🍔',kcal:264,p:12,f:10,c:31,unit:'100 g',type:'meal'},
 {name:'炸鸡',emoji:'🍗',kcal:280,p:20,f:18,c:10,unit:'100 g',type:'meal'},
 {name:'披萨',emoji:'🍕',kcal:266,p:11,f:10,c:33,unit:'100 g',type:'meal'},
 {name:'食用油',emoji:'🫙',kcal:900,p:0,f:100,c:0,unit:'100 g',type:'seasoning'},
 {name:'沙拉酱（蛋黄酱）',emoji:'🫙',kcal:680,p:1,f:75,c:1,unit:'100 g',type:'seasoning'}
);
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const storageKey='qingshiji-journal-v1';
let goal=1800,selectedFood=null,diary=[],activeDate='',storageBlocked=false;
let savedState={version:1,goal:1800,days:{}};
function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
let toastTimer;
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.remove('hidden');toastTimer=setTimeout(()=>$('#toast').classList.add('hidden'),5000)}
function dateKey(){const date=new Date();return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-')}
function loadState(){try{const raw=localStorage.getItem(storageKey);if(raw){const parsed=JSON.parse(raw);if(parsed.version!==1||!parsed.days||typeof parsed.days!=='object'||Array.isArray(parsed.days))throw new Error();for(const entries of Object.values(parsed.days)){if(!Array.isArray(entries))throw new Error();for(const entry of entries){if(!entry||typeof entry.name!=='string'||typeof entry.emoji!=='string'||typeof entry.unit!=='string')throw new Error();Nutrition.nutrients(entry,entry.amount)}}savedState=parsed;goal=Number.isFinite(parsed.goal)&&parsed.goal>=800&&parsed.goal<=6000?parsed.goal:1800;}}catch{storageBlocked=true;toast('无法读取本地记录，原数据已保留。本次新增记录只能暂存在当前会话。')}switchDay()}
function switchDay(){const today=dateKey();if(today===activeDate)return;activeDate=today;diary=Array.isArray(savedState.days[today])?[...savedState.days[today]]:[];const date=new Date();$('#date-label').textContent=`${date.getMonth()+1}月${date.getDate()}日 · 今天`}
function saveState(){savedState.goal=goal;savedState.days[activeDate]=diary;if(storageBlocked)return false;try{localStorage.setItem(storageKey,JSON.stringify(savedState));return true}catch{toast('本地保存失败，请勿关闭应用；本次记录暂保存在当前会话。');return false}}
function amountFood(food,amount=100){return Nutrition.nutrients(food,amount)}
function total(){return diary.reduce((a,x)=>{const n=amountFood(x,x.amount);return {kcal:a.kcal+n.kcal,p:a.p+n.p,f:a.f+n.f,c:a.c+n.c}},{kcal:0,p:0,f:0,c:0})}
function macroHTML(t,compact=false){const targets={p:Math.round(goal*.3/4),f:Math.round(goal*.25/9),c:Math.round(goal*.45/4)};return [['p','蛋白质','var(--green)'],['f','脂肪','var(--orange)'],['c','碳水','var(--pink)']].map(([k,n,color])=>`<div class="macro"><div class="macro-top"><span>${n}</span><b>${t[k]}g</b></div><i style="--percent:${Math.min(100,t[k]/targets[k]*100)}%;--color:${color}"></i><small>目标 ${targets[k]}g</small></div>`).join('')}
function refresh(){switchDay();const t=total(),remain=Math.max(0,goal-t.kcal),percent=Math.min(100,t.kcal/goal*100);$('#remaining-calories').textContent=remain.toLocaleString();$('#daily-goal').textContent=goal.toLocaleString();$('#consumed-calories').textContent=t.kcal;$('#calorie-ring').style.background=`conic-gradient(var(--green) 0 ${percent}%,#c9dfac ${percent}% 100%)`;$('#calorie-progress').style.width=percent+'%';$('#macro-summary').innerHTML=macroHTML(t);$('#diary-total').textContent=t.kcal;$('#diary-macros').innerHTML=macroHTML(t,true);$('#diary-list').innerHTML=diary.length?diary.map((x,i)=>{const n=amountFood(x,x.amount);return `<div class="diary-item"><span class="emoji">${escapeHTML(x.emoji)}</span><div><b>${escapeHTML(x.name)}</b><small>${x.amount} ${Nutrition.unitOf(x)} · 蛋白质 ${n.p}g / 脂肪 ${n.f}g / 碳水 ${n.c}g${x.recordSource==='vision-model'?' · 拍照估算':''}</small></div><strong>${n.kcal} 千卡</strong><button class="add-food" aria-label="删除 ${escapeHTML(x.name)}" data-delete="${i}">×</button></div>`}).join(''):'<p class="empty-diary">今天还没有饮食记录。拍照估算，或搜索食物后添加。</p>'}
function commitEntries(entries){switchDay();for(const entry of entries)Nutrition.nutrients(entry,entry.amount);diary.push(...entries);const persisted=saveState();refresh();return persisted}
function showPage(id){refresh();if(id==='recommend-page')renderDailyPlan();$$('.page').forEach(p=>p.classList.toggle('active',p.id===id));$$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.go===id));window.scrollTo(0,0)}
function foodRow(f){return `<article class="food-row"><span class="emoji">${f.emoji}</span><div class="food-info"><b>${f.name}</b><small>每 ${f.unit} · 蛋白质 ${f.p}g / 脂肪 ${f.f}g / 碳水 ${f.c}g</small></div><strong>${f.kcal}<small> 千卡</small></strong><button class="add-food" data-food="${foods.indexOf(f)}">＋</button></article>`}
function renderSearch(query=''){const list=foods.filter(x=>x.name.includes(query));$('#search-results').innerHTML=list.length?list.map(foodRow).join(''):'<p class="muted">未找到相关食物，试试更短的关键词。</p>'}
function renderRecs(filter='all'){const list=filter==='all'?foods:foods.filter(x=>x.type===filter);$('#recommend-list').innerHTML=list.map(foodRow).join('')}
function planExcluded(){const values=$('#plan-exclusions').value.split(/[，,、\s]+/).map(x=>x.trim()).filter(Boolean).slice(0,3);return values.flatMap(value=>foods.filter(food=>food.name===value||food.name.includes(value)).map(food=>food.name))}
function renderDailyPlan(){const target=$('#daily-plan'),goalLabel=$('#plan-goal-label');if(!target||!window.MealPlan)return;goalLabel.textContent=goal.toLocaleString();try{const plan=MealPlan.generate(foods,{goal,date:activeDate||dateKey(),excluded:planExcluded()});target.innerHTML=`<div class="plan-summary"><b>今日餐单约 ${plan.total.kcal} 千卡</b><p>蛋白质 ${plan.total.p}g · 脂肪 ${plan.total.f}g · 碳水 ${plan.total.c}g</p></div>${plan.meals.map((meal,index)=>`<article class="meal-plan-card"><div class="meal-plan-head"><span>${meal.icon}</span><div><b>${meal.name}</b><small>约 ${meal.nutrition.kcal} 千卡 · 蛋白质 ${meal.nutrition.p}g</small></div><button class="add-meal" data-plan-meal="${index}">加入这餐</button></div><div class="meal-plan-items">${meal.items.map(item=>`<span>${escapeHTML(item.emoji)} ${escapeHTML(item.name)} ${item.amount}${Nutrition.unitOf(item)}</span>`).join('')}</div></article>`).join('')}<p class="plan-disclaimer">${plan.disclaimer}</p>`;window.currentMealPlan=plan}catch(error){target.innerHTML='<p class="empty-diary">当前条件无法生成餐单，请减少忌口食材后重试。</p>';window.currentMealPlan=null}}
function openFood(food){selectedFood=food;$('#modal-title').textContent=`加入「${food.name}」`;$('#modal-meta').textContent=`营养数据按每 ${food.unit} 估算`;$('#food-amount-label').textContent=`食用量（${Nutrition.unitOf(food)==='ml'?'毫升':'克'}）`;$('#food-amount').value=100;updateModal();$('#food-modal').classList.remove('hidden')}
function updateModal(){if(!selectedFood)return;const amount=Number($('#food-amount').value);$('#confirm-add-food').disabled=!Nutrition.validAmount(amount);if(!Nutrition.validAmount(amount)){$('#modal-nutrients').textContent='请输入大于 0 且不超过 5000 的食用量。';return}const n=amountFood(selectedFood,amount);$('#modal-nutrients').innerHTML=`<span>热量<b>${n.kcal} 千卡</b></span><span>蛋白质<b>${n.p} g</b></span><span>脂肪<b>${n.f} g</b></span><span>碳水<b>${n.c} g</b></span>`}
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.go)));
document.addEventListener('click',e=>{const btn=e.target.closest('[data-food]');if(btn)openFood(foods[+btn.dataset.food]);const del=e.target.closest('[data-delete]');if(del){switchDay();diary.splice(+del.dataset.delete,1);saveState();refresh()}const mealButton=e.target.closest('[data-plan-meal]');if(mealButton&&window.currentMealPlan){const meal=window.currentMealPlan.meals[+mealButton.dataset.planMeal],persisted=commitEntries(meal.items);toast(persisted?`${meal.name}已加入今日饮食。`:`${meal.name}已加入本次会话，本地保存不可用。`);showPage('diary-page')}const close=e.target.closest('[data-close]');if(close)$('#'+close.dataset.close).classList.add('hidden')});
$('#food-search').addEventListener('input',e=>renderSearch(e.target.value.trim()));$('#clear-search').addEventListener('click',()=>{$('#food-search').value='';renderSearch()});
$('#quick-searches').innerHTML=['鸡蛋','米饭','鸡胸肉','香蕉'].map(x=>`<button data-query="${x}">${x}</button>`).join('');$('#quick-searches').addEventListener('click',e=>{if(e.target.dataset.query){$('#food-search').value=e.target.dataset.query;renderSearch(e.target.dataset.query)}});
$('#recommend-tabs').addEventListener('click',e=>{if(e.target.dataset.filter){$$('#recommend-tabs button').forEach(b=>b.classList.toggle('selected',b===e.target));renderRecs(e.target.dataset.filter)}});
$('#generate-plan').addEventListener('click',()=>{renderDailyPlan();toast('已按当前目标生成今日餐单。')});
$('#food-amount').addEventListener('input',updateModal);$('#confirm-add-food').addEventListener('click',()=>{if(!selectedFood||!Nutrition.validAmount(Number($('#food-amount').value)))return;const persisted=commitEntries([{...selectedFood,amount:Number($('#food-amount').value),recordSource:'manual'}]);$('#food-modal').classList.add('hidden');showPage('diary-page');toast(persisted?'已加入今日饮食并保存在本机。':'已加入本次会话，本地保存不可用。')});$('#open-add-food').addEventListener('click',()=>showPage('search-page'));
$('#edit-goal').addEventListener('click',()=>{$('#goal-input').value=goal;$('#goal-modal').classList.remove('hidden')});$('#save-goal').addEventListener('click',()=>{const value=Number($('#goal-input').value);if(!Number.isFinite(value)||value<800||value>6000){toast('请输入 800 至 6000 之间的自定热量目标。');return}goal=Math.round(value);saveState();$('#goal-modal').classList.add('hidden');refresh();renderDailyPlan()});
$('#home-recommendations').innerHTML=foods.slice(0,4).map(f=>`<button class="recommend-tile" data-food="${foods.indexOf(f)}"><div class="food-art">${f.emoji}</div><div><b>${f.name}</b><small>${f.kcal} 千卡 / ${f.unit}</small></div></button>`).join('');
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
window.App={foods,commitEntries,showPage,toast,handleBack(){const modal=document.querySelector('.modal:not(.hidden)');if(modal){modal.classList.add('hidden');return true}if(!$('#home-page').classList.contains('active')){showPage('home-page');return true}return false}};
loadState();refresh();renderSearch();renderRecs();renderDailyPlan();
