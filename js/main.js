const navBtn = document.querySelector('.nav-button');
const mobileMenu = document.querySelector('.mobile__menu');
const body = document.body;

navBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile__menu-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
});