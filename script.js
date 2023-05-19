
var menubtn = document.querySelector('.menu-btn');
var navlinks = document.querySelector('.nav-links');
if (menubtn){
    menubtn.addEventListener('click',()=>{ navlinks.classList.toggle("mobile-menu") });
}
