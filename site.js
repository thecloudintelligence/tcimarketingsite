
document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
        var answer = this.nextElementSibling;
        var icon = this.querySelector('.toggle-icon');
        var faqSection = answer.closest('.faq-item');
        var faqQuestion = this.querySelector('.div-194');

        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        icon.src = (answer.style.display === 'block') ? './img/minus-icon.png' : './img/plus-icon.png';

        if (faqSection) {
            if (answer.style.display === "block") {
                faqSection.classList.add("active");
                faqQuestion.classList.add("active");
            } else {
                faqSection.classList.remove("active");
                faqQuestion.classList.remove("active");
            }
        }
    });
});


const allAnswers = document.querySelectorAll('.div-94');


for (let i = 1; i < allAnswers.length; i++) {
    allAnswers[i].style.display = 'none';
}

document.querySelectorAll('.div-93').forEach(function (question) {
    question.addEventListener('click', function () {
        var answer = this.nextElementSibling;


        document.querySelectorAll('.div-94').forEach(function (otherAnswer) {
            if (otherAnswer !== answer && otherAnswer.style.display === 'block') {
                otherAnswer.style.display = 'none';
            }
        });

        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});


window.onscroll = function () { changeNavbarBackground() };

function changeNavbarBackground() {
    var stickyBtn = document.getElementById("button")
    var navbar = document.querySelector('.navbar');
    var navLink = document.querySelectorAll('.nav-link');
    var navLogo = document.querySelector('.img-2');
    var navGetTouch = document.getElementById('getTouch');
    var getInTouchLink = document.querySelector('#getTouch a');
    var navToggler = document.querySelector(".navbar-toggler")
    var hamBurger = document.querySelector(".homepage")

    var scrollThreshold = 50;

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        stickyBtn.style.display = "block"
        navbar.classList.add("scrolled");
        navLogo.src = "./img/tci-logo-color.svg";
        navGetTouch.style.backgroundColor = "#265bb7";
        getInTouchLink.style.color = "#ffff";
        navToggler.style.borderColor = "#265bb7";
        hamBurger.style.filter = "none"

        navLink.forEach(function (link) {
            link.classList.add("scrollMenu");
            link.style.color = "#265bb7";
        });
    } else {
        stickyBtn.style.display = "none"
        navbar.classList.remove("scrolled");
        navLogo.src = "./img/tci-logo.png";
        navGetTouch.style.backgroundColor = "#ffff";
        getInTouchLink.style.color = "#02040A";
        navToggler.style.borderColor = "#ffff";
        hamBurger.style.filter = "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(324deg) brightness(105%) contrast(101%)"

        navLink.forEach(function (link) {
            link.classList.remove("scrollMenu");
            link.style.color = "#d4ddf2";
        });
    }
}
