
var menubtn = document.querySelector('.menu-btn');
var navlinks = document.querySelector('.nav-links');
if (menubtn){
    menubtn.addEventListener('click',()=>{ navlinks.classList.toggle("mobile-menu") });
}


var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}