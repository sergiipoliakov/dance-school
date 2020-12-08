import 'flickity';

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
});
flkty.on('eventName', listener);

// const sliderEl = document.querySelectorAll('[data-slide]');

// autoSlider();
// console.log(sliderEl[0].classList);

// let active = false;

// let interval;
// let curr = 0;

// function autoSlider() {
//   interval = setTimeout(() => {
//     sliderEl[curr].classList.add('is-active');
//     // const expanded = sliderEl.getAttribute('aria-expanded') === 'true' || false;

//     curr = curr === sliderEl.length - 1 ? 0 : curr + 1;
//     // sliderEl.setAttribute('aria-expanded', !expanded);

//     if (sliderEl[0].classList === 'is-active') {
//       sliderEl[curr].classList.remove('is-active');
//     }

//     autoSlider();
//   }, 500);
// }
