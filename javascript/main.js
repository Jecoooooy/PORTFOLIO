
var nav = document.getElementById("navigation");
var navbar = document.getElementById("navbar");
var main = document.getElementById("main");
var welcome = document.getElementById("welcome");
var intro = document.getElementById("intro");
var introduction = document.getElementById("introduction");
setTimeout(() => {
    main.classList.remove('from-bottom')
    setTimeout(() => {
        navbar.classList.remove('from-top')
        main.style.paddingTop = "49px";
        setTimeout(() => {
            welcome.classList.remove('from-left')
            setTimeout(() => {
                intro.classList.remove('from-bottom')
                setTimeout(() => {
                    introduction.classList.remove('from-right')
                }, 100);
            }, 300);
        }, 300);
    }, 700);
}, 50);

function navButton() {

    if (navbar.style.height === "245px") {
        navbar.style.height = "49px";
    } else {
        navbar.style.height = "245px";
    }
}

const addTimelineClass = document.getElementById('timeline')

function removeClassOnResize() {
    if (window.innerWidth > 671 && navbar.style.height == "245px") { 
            navbar.style.height = "50px";
    }
    if (window.innerWidth < 921) {
        for (let index = 0; index < addTimelineClass.children.length; index++) {
            const element = addTimelineClass.children[index];
            element.classList.add('mobile_timeline')
        }
    }else{
        for (let index = 0; index < addTimelineClass.children.length; index++) {
            const element = addTimelineClass.children[index];
            element.classList.remove('mobile_timeline')
        }
    }
}
// 920px
window.addEventListener("resize", removeClassOnResize);

