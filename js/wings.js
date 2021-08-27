const face = document.querySelectorAll('.wings__card--face');
const links = document.querySelectorAll('.wings__card--links');
const buttons = document.querySelectorAll('.wings__card--button');
let open = [0, 0, 0];
buttons.forEach((button, index) => {
    button.addEventListener('click', e => {
        if (open[index] === 0) {
            e.target.style.transform = 'scale(2) rotateZ(180deg)';
            open[index] = 1;
        } else {
            e.target.style.transform = 'scale(2) rotateZ(0deg)';
            open[index] = 0;
        }
        face[index].classList.toggle('face--gone');
        links[index].classList.toggle('links--gone');
    });
});