const loader=document.getElementById('loader');window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),500));
const toggle=document.getElementById('toggle'),nav=document.getElementById('nav');toggle.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));