const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav1');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
});