import Glide from '@glidejs/glide';

const slidersOption = {
  mainSlider: {
    autoplay: 3000,
    classes: {
      activeNav: 'main-head__slider-bullet--active',
    }
  }
};

export function slidersInit() {
  const sliders = document.querySelectorAll('.js-slider');
  if(sliders.length > 0) {
    sliders.forEach(slider => {
      if(slider.classList.contains('js-slider--main')) {
        let myGlide = new Glide(slider, slidersOption.mainSlider);
        createBullets(myGlide);
        myGlide.mount().update();
      }
    });
  }
}

function createBullets(glide) {
  const slider = glide.selector;
  const bulletCount = slider.querySelectorAll('.glide__slide').length;
  const bulletWrapper = slider.querySelector('.glide__bullets');
  for (let index = 0; index < bulletCount; index++) {
    const button = document.createElement('button');
    button.classList.add('glide__bullet', 'main-head__slider-bullet');
    button.setAttribute('data-glide-dir', '=' + index);
    bulletWrapper.appendChild(button);
  }
}