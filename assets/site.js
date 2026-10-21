(()=>{
 const root=document.documentElement,menu=document.getElementById('menu'),nav=document.getElementById('book-nav');root.classList.add('js');
 const store={get(k){try{return localStorage.getItem('capm-guide-'+k)}catch{return null}},set(k,v){try{localStorage.setItem('capm-guide-'+k,v)}catch{}}};
 const saved=store.get('theme');if(saved==='dark'||saved==='light')root.dataset.theme=saved;
 document.getElementById('theme').addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;store.set('theme',next)});
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);if(open)document.getElementById('nav-search').focus()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}});
 const search=document.getElementById('nav-search');search.addEventListener('input',()=>{const term=search.value.toLocaleLowerCase().trim();let count=0;nav.querySelectorAll('.nav-group').forEach(group=>{let n=0;group.querySelectorAll('li').forEach(li=>{const show=li.textContent.toLocaleLowerCase().includes(term);li.hidden=!show;if(show)n++});group.hidden=n===0;count+=n});document.getElementById('nav-empty').hidden=count!==0});
 // Wrap wide tables without altering their semantic table structure.
 document.querySelectorAll('article table').forEach(table=>{const wrap=document.createElement('div');wrap.className='table-scroll';wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label','Scrollable table');table.before(wrap);wrap.append(table)});
 function reveal(){let target;try{target=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch{return}if(!target)return;let el=target;while(el){if(el.tagName==='DETAILS')el.open=true;el=el.parentElement}requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}
 addEventListener('hashchange',reveal);reveal();
})();
