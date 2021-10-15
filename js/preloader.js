const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const logoAside = document.querySelector('.logo-aside');
const content = document.querySelector('.home-content');
const gif = document.querySelector('.preload');
const sections = document.querySelectorAll('section');
const home = document.querySelector('#home');
const background = document.querySelector('.background');
const explore = document.querySelector('.home-explore');

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
    document.body.style.overflow = 'auto';
    sections.forEach(section => {
        section.style.display = 'block';
    });
    home.classList.add('home-bg');
};

const bgShow = () => {
    background.classList.add('background-show');
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