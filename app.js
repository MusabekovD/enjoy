// Selectors 
let open = document.getElementById('open');
let close = document.getElementById('close');
let responsiveNavbar = document.querySelector('.responsive-navbar'); 

open.addEventListener('click', ()=>{
    responsiveNavbar.classList.add('active');
})
close.addEventListener('click', ()=>{
    responsiveNavbar.classList.remove('active');
})