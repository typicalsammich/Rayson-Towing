const ham=document.querySelector('.hamb'), nav=document.querySelector('.navlinks');
if(ham){ham.addEventListener('click',()=>{nav.classList.toggle('open');ham.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('.dropbtn').forEach(btn=>btn.addEventListener('click',e=>{if(innerWidth<981){e.preventDefault();btn.parentElement.classList.toggle('open')}}));
const mc=document.querySelector('.mobile-call'); if(mc){const t=()=>mc.classList.toggle('show',scrollY>150); addEventListener('scroll',t,{passive:true});t()}
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const b=f.querySelector('button'); if(b){const old=b.textContent;b.textContent='REQUEST RECEIVED';setTimeout(()=>b.textContent=old,2200)}}));
