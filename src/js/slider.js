// const refs = {
//     slide1: document.querySelector('[data-slide1]'),
//     slide2: document.querySelector('[data-slide2]'),
//     slide3: document.querySelector('[data-slide3]'),


// }

const sliderEl = document.querySelectorAll('[data-slide]');

autoSlider()
console.log(sliderEl[0].classList)

let active = false;

let interval;
let curr = 0;

function autoSlider() {

    interval = setTimeout(() => { 
        sliderEl[curr].classList.add('is-active');
         const expanded = sliderEl.getAttribute('aria-expanded') === 'true' || false;
       
        
        curr = (curr === sliderEl.length - 1) ? 0 : curr + 1;
        sliderEl.setAttribute('aria-expanded', !expanded);

        if (sliderEl[0].classList === 'is-active') {
            
            sliderEl[curr].classList.remove('is-active');
        }
        

    autoSlider()
        
    },500)
       
    
 }
