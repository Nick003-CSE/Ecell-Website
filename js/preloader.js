const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const logoAside = document.querySelector('.logo-aside');
const content = document.querySelector('.content');
const gif = document.querySelector('.preload');

window.addEventListener('load', () => {
    gif.style.opacity = '0';
    gif.style.pointerEvents = 'none';
    nav.style.opacity = '1';
    nav.style.pointerEvents = 'auto';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
    logo.style.opacity = '1';
    logo.style.transform = 'translateX(0)';
    logoAside.style.opacity = '1';
    logoAside.style.transform = 'translateX(0)';
    document.body.style.overflow = 'auto';
});