$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });
    // toogle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});

// typed animation script
var typed = new Typed(".typing",{
    strings:["Programmer.", "Full Stack Developer.", "Software Engineer.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2",{
    strings:["Programmer.", "Full Stack Developer.", "Software.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click",navToggle);


function navToggle() {

    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");

    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style")
    }

}