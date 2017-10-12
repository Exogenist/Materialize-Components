window.onload = function(){
    var closeBtn = document.querySelector(".close");
    var sideNav = document.querySelector(".sidenav");
    var hamburger = document.querySelector(".ham-box");
    var logo = document.querySelector(".sideNavLogo h1");
    var links = document.querySelector(".sidenav a");
    var background = document.querySelector("body");

    closeBtn.addEventListener("click", function(event){
        event.preventDefault();
        sideNav.style.width = "0px";
//        sideNav.style.overflow = "hidden";
//        sideNav.style.whiteSpace = "nowrap";
        logo.style.opacity = "0";       
    });
    
    hamburger.addEventListener("click", function(event){
        event.preventDefault();
        sideNav.style.width = "280px";
        logo.style.opacity = "1";
    });
}
