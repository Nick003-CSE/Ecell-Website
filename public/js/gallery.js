const galleryS = document.querySelector('#portfolio');
const container = document.querySelector('.container-gallery');
const numberText = document.querySelector('.numbertext');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
// console.log(next);
// console.log(previous);


const photos = document.querySelectorAll('.photos');
// console.log(photos);
photos[0].classList.toggle('active');
let pact = 0;
const totalImg = photos.length;
// console.log(pact);

const updateCounter = () => {
    numberText.innerHTML = `${pact+1} / ${totalImg}`;
};
updateCounter();

// console.log(numberText.innerHTML);


next.addEventListener('click', () => {
    photos.item(pact).classList.toggle('active');
    pact = pact + 1 === totalImg ? 0 : pact + 1;
    photos.item(pact % totalImg).classList.toggle('active');
    updateCounter();
});

previous.addEventListener('click', () => {
    photos.item(pact).classList.toggle('active');
    pact = pact === 0 ? 28 : pact - 1;
    photos.item(pact % totalImg).classList.toggle('active');
    updateCounter();
});

const slideShow = () => {
    photos.item(pact).classList.toggle('active');
    pact = pact + 1 === totalImg ? 0 : pact + 1;
    photos.item(pact % totalImg).classList.toggle('active');
    updateCounter();
};

const galleryOptions = {
    rootMargin: "-50% 0px 0px 0px"
};
let autoScroll;
const galleryObserver = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            autoScroll = setInterval(slideShow, 3000);
        } else {
            clearInterval(autoScroll);
        }
    });
}, galleryOptions);

galleryObserver.observe(galleryS);