const open = document.querySelector('#nav-menu-open');
const close = document.querySelector('#nav-menu-close');
const menu = document.querySelector('.nav-menu');


open.addEventListener('click', () => {
    open.classList.toggle('nav-show');
    close.classList.toggle('nav-show');
    open.style.pointerEvents = 'none';
    close.style.pointerEvents = 'auto';
    menu.style.right = '-190px';
    console.log('open');
});

close.addEventListener('click', () => {
    open.classList.toggle('nav-show');
    close.classList.toggle('nav-show');
    close.style.pointerEvents = 'none';
    open.style.pointerEvents = 'auto';
    menu.style.right = '20px';
    console.log('close');
});