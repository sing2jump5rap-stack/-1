// 澄序品牌顧問示範網站互動程式｜所有示範內容集中於此檔案，方便替換。
const projects = [
{id:'form-and-field',title:'形與序・生活選物',category:'identity',categoryName:'視覺識別',desc:'以自然材質與留白構築生活選物品牌的識別語言。',year:'2026',image:'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85',alt:'極簡生活選物與自然材質展示',challenge:'品牌需要在眾多生活風格品牌中建立清楚且耐看的辨識度。',solution:'以溫潤中性色、理性網格與簡潔字體建立識別系統，延伸至包裝與數位版面。',result:'完成一套可延展的示範識別方向；此為概念專案，無實際商業績效。'},
{id:'north-coast',title:'北岸・旅宿提案',category:'strategy',categoryName:'品牌策略',desc:'梳理地方旅宿定位，讓目的地故事成為品牌核心。',year:'2026',image:'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85',alt:'海岸旁的現代建築空間',challenge:'旅宿品牌需要整合地理特色、服務內容與目標旅客期待。',solution:'以訪客旅程與品牌敘事整理定位，提出內容主軸與服務溝通方向。',result:'提出品牌策略與體驗藍圖示範；非真實旅宿委託或成效數據。'},
{id:'atelier-digital',title:'Atelier・數位體驗',category:'digital',categoryName:'數位體驗',desc:'以清楚的資訊架構，呈現創意工作室的專業服務。',year:'2025',image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',alt:'簡約創意工作室與桌面設備',challenge:'服務內容多元，訪客難以快速理解工作室的服務範圍。',solution:'重新規劃導覽層級與服務敘事，設計以內容為核心的響應式網站體驗。',result:'建立網站資訊架構與介面概念；示範作品，不代表實際上線專案。'}
];
const articles = [
{id:'brand-clarity',date:'2026.11.12',category:'品牌觀點',title:'品牌定位不是一句標語，而是一連串選擇',summary:'從受眾、價值到行動，理解定位如何成為企業日常決策的依據。',body:['品牌定位常被誤解為一句精準的宣傳文字，但真正有效的定位，必須能幫助企業做出選擇。它回答的不只是「我們是誰」，也包含「我們為誰創造價值」以及「哪些事情選擇不做」。','當定位能夠連結產品、服務、溝通與組織文化，它才會從簡報中的句子，變成使用者可以感受到的品牌經驗。','因此，定位工作的起點不是急著想一句漂亮的話，而是先理解市場、受眾與企業自身的能力，再透過持續驗證，建立能夠實踐的方向。']},
{id:'digital-trust',date:'2026.10.28',category:'數位體驗',title:'好的企業網站，如何在第一眼建立信任？',summary:'資訊層級、內容可信度與細節一致性，是企業網站體驗的基本功。',body:['訪客進入企業網站後，會快速尋找幾個答案：這是誰、提供什麼、是否值得信任，以及下一步該怎麼做。網站設計應優先回應這些真實問題。','清楚的資訊架構能降低理解成本；具體而誠實的內容能建立可信度；一致的視覺語言則讓品牌感受更完整。這些基礎往往比炫目的動畫更重要。','網站不是一次性的視覺作品，而是持續更新的溝通工具。從一開始就規劃內容管理、效能與可近用性，才能讓體驗長期維持品質。']},
{id:'design-system',date:'2026.10.06',category:'設計筆記',title:'建立設計系統，讓品牌一致而不僵化',summary:'透過可重複使用的規則，讓不同媒介保有一致性，也保留創意彈性。',body:['設計系統不是把所有畫面做成一模一樣，而是先定義共同語言：色彩、字體、間距、元件與互動原則。','當基本規則清楚，團隊就能把更多心力放在真正需要思考的地方，而不是每次都重新決定按鈕大小或標題層級。','一套好的系統也應該能隨著品牌發展調整。它提供一致性的底層結構，同時允許不同內容依情境長出自己的表達方式。']}
];
const faqs=[
{q:'第一次合作需要準備什麼？',a:'可以先準備企業簡介、目前遇到的問題、預期目標與時程。若資料尚未完整，也可以先從初步交流開始。'},
{q:'可以只委託單一服務項目嗎？',a:'可以。品牌策略、視覺識別與數位體驗可依需求獨立合作，也能依專案目標整合規劃。'},
{q:'專案時程與費用如何評估？',a:'會依專案範圍、交付內容、協作方式與時程需求評估，初步交流後再提供具體規劃。'},
{q:'網站完成後可以自行更新嗎？',a:'可依實際需求規劃內容管理方式。本示範網站為靜態網站，若需要後台管理，需另行整合 CMS 或後端服務。'}
];
const $=(s,root=document)=>root.querySelector(s);
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// 手機導覽
const toggle=$('.menu-toggle'),nav=$('.primary-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'開啟導覽選單':'關閉導覽選單');nav.classList.toggle('is-open',!open);document.body.classList.toggle('menu-open',!open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle?.setAttribute('aria-expanded','false');nav.classList.remove('is-open');document.body.classList.remove('menu-open')}));

// 案例卡片與分類
const projectGrid=$('#portfolio-grid'),filters=$('#portfolio-filters');
const projectCard=p=>`<a class="project-card reveal" href="#portfolio" data-project="${p.id}"><div class="project-image"><img src="${p.image}" alt="${escapeHTML(p.alt)}" loading="lazy"><span class="project-view">VIEW PROJECT ↗</span></div><div class="project-meta"><span>${p.categoryName}</span><span>${p.year}</span></div><h3>${p.title}</h3><p>${p.desc}</p></a>`;
if(filters&&projectGrid){const options=[['all','全部案例'],['strategy','品牌策略'],['identity','視覺識別'],['digital','數位體驗']];filters.innerHTML=options.map(([id,label],i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${id}" aria-pressed="${i===0}">${label}</button>`).join('');const draw=f=>{projectGrid.innerHTML=projects.filter(p=>f==='all'||p.category===f).map(projectCard).join('');observeReveals()};draw('all');filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filters.querySelectorAll('button').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});draw(b.dataset.filter)});}

// 最新消息
const newsGrid=$('#news-grid');
if(newsGrid)newsGrid.innerHTML=articles.map(a=>`<a class="news-card reveal" href="#news" data-article="${a.id}"><div class="news-card-top"><span>${a.category}</span><time>${a.date}</time></div><h2>${a.title}</h2><p>${a.summary}</p><span class="under-link">閱讀文章 ↗</span></a>`).join('');

// 案例與文章以對話框呈現詳細內容，不需額外 HTML 檔
const dialog=$('#content-dialog'),dialogContent=$('#dialog-content');
function openDialog(markup){dialogContent.innerHTML=markup;dialog.showModal();}
document.addEventListener('click',e=>{const pc=e.target.closest('[data-project]');if(pc){e.preventDefault();const p=projects.find(x=>x.id===pc.dataset.project);if(p)openDialog(`<p class="eyebrow">${p.categoryName} / ${p.year} / CONCEPT PROJECT</p><h2>${p.title}</h2><img class="dialog-image" src="${p.image}" alt="${escapeHTML(p.alt)}"><div class="prose"><h3>專案挑戰</h3><p>${p.challenge}</p><h3>設計方向</h3><p>${p.solution}</p><h3>概念成果</h3><p>${p.result}</p><p class="notice">※ 此為虛構示範案例，並非真實客戶委託、合作紀錄或經營成果。</p></div>`)}const ac=e.target.closest('[data-article]');if(ac){e.preventDefault();const a=articles.find(x=>x.id===ac.dataset.article);if(a)openDialog(`<p class="eyebrow">${a.category} / ${a.date}</p><h2>${a.title}</h2><p class="large-copy">${a.summary}</p><p class="notice">※ 本文為示範網站的編輯內容。</p><div class="prose">${a.body.map(t=>`<p>${t}</p>`).join('')}</div>`)}});
$('.dialog-close')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

// FAQ
const faqList=$('#faq-list');if(faqList){faqList.innerHTML=faqs.map((f,i)=>`<article class="faq-item"><button aria-expanded="false" aria-controls="faq-answer-${i}"><span>${f.q}</span><b>+</b></button><div id="faq-answer-${i}" class="faq-answer" hidden><p>${f.a}</p></div></article>`).join('');faqList.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const opened=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!opened));b.querySelector('b').textContent=opened?'+':'−';b.nextElementSibling.hidden=opened})}

// 聯絡表單：只做前端驗證，不會寄送或儲存資料
const form=$('#contact-form'),status=$('#form-status');form?.addEventListener('submit',e=>{e.preventDefault();let valid=true;form.querySelectorAll('.error').forEach(x=>x.textContent='');form.querySelectorAll('[required]').forEach(field=>{let msg='';if(field.type==='checkbox'&&!field.checked)msg='請勾選同意項目。';else if(!field.value.trim())msg='此欄位為必填。';else if(field.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))msg='請輸入有效的電子郵件。';else if(field.name==='name'&&field.value.trim().length<2)msg='姓名至少需要 2 個字元。';else if(field.name==='message'&&field.value.trim().length<10)msg='詢問內容至少需要 10 個字元。';if(msg){valid=false;const err=field.closest('label')?.querySelector('.error');if(err)err.textContent=msg;field.setAttribute('aria-invalid','true')}else field.removeAttribute('aria-invalid')});if(valid){status.className='form-status success';status.textContent='表單欄位檢查完成！目前為展示模式，資料並未寄出或儲存。請透過示範信箱聯繫。'}else{status.className='form-status error-summary';status.textContent='請檢查並修正標示的欄位。';form.querySelector('[aria-invalid="true"]')?.focus()}});

// 回到頂端
const topButton=$('.to-top');const updateTop=()=>topButton?.classList.toggle('visible',window.scrollY>480);window.addEventListener('scroll',updateTop,{passive:true});updateTop();topButton?.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));

// 滾動進場與導覽目前區段
function observeReveals(){const els=document.querySelectorAll('.reveal:not(.shown)');if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(el=>el.classList.add('shown'));return}const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('shown');io.unobserve(en.target)}}),{threshold:.12});els.forEach(el=>io.observe(el))}
observeReveals();
const sections=[...document.querySelectorAll('main section[id]')],navLinks=[...document.querySelectorAll('.primary-nav a[href^="#"]')];if('IntersectionObserver'in window){const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>{if(a.getAttribute('href')==='#'+entry.target.id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}}),{rootMargin:'-25% 0px -65% 0px'});sections.forEach(s=>sectionObserver.observe(s))}
