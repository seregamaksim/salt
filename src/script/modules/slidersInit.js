import Swiper from 'swiper/bundle';

const slidersOption = {
  mainSlider: {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.main-head__pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="main-head__slider-bullet ' + className + '"></span>';
      },
    },
  }
};

export function slidersInit() {
  const sliders = document.querySelectorAll('.js-slider');
  if(sliders.length > 0) {
    sliders.forEach(slider => {
      if(slider.classList.contains('js-slider--main')) {
        const swiper = new Swiper(slider, slidersOption.mainSlider);
      }
    });
  }
}