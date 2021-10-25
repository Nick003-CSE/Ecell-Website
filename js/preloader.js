const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const logoAside = document.querySelector('.logo-aside');
const content = document.querySelector('.home-content');
const gif = document.querySelector('.preload');
const sections = document.querySelectorAll('section');
const home = document.querySelector('#home');
const background = document.querySelector('.background');
const explore = document.querySelector('.home-explore');
const wave = document.querySelector('.middle');
const circle1 = document.querySelector('.top');
const circle2 = document.querySelector('.bottom');


scrollTo(0, 0);

const logoReveal = () => {
    logo.style.opacity = '1';
    logo.style.transform = 'translateX(0)';
    logoAside.style.opacity = '1';
    logoAside.style.transform = 'translateX(0)';
};

const contentReveal = () => {
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
}

const navReveal = () => {
    nav.style.opacity = '1';
    nav.style.pointerEvents = 'auto';
    explore.style.opacity = '1';
    explore.classList.add('bounce-up');
};

const allowScroll = () => {
    document.body.classList.toggle('scroll-none');
    // sections.forEach(section => {
    //     section.style.display = 'block';
    // });
    home.classList.add('home-bg');
};

const bgShow = () => {
    wave.classList.toggle('wave-show');
    circle1.style.width = '300px';
    circle2.style.width = '350px';
};

window.addEventListener('load', () => {
    gif.style.opacity = '0';
    gif.style.pointerEvents = 'none';
    logoReveal();
    setTimeout(contentReveal, 1000);
    setTimeout(bgShow, 2000);
    setTimeout(navReveal, 2500);
    setTimeout(allowScroll, 3000);
});