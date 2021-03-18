// import Swiper from 'swiper/bundle';
// import Splide from '@splidejs/splide';
import Glide from '@glidejs/glide';

const slidersOption = {
  mainSlider: {
    type: 'fade',
    arrows: false,
    classes: {
      pagination: 'splide__pagination main-head__pagination',
    }

  }
};

export function slidersInit() {
  const sliders = document.querySelectorAll('.js-slider');
  if(sliders.length > 0) {
    sliders.forEach(slider => {
      if(slider.classList.contains('js-slider--main')) {
        let myGlide = new Glide(slider);
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
  console.log(bulletCount);
  for (let index = 0; index < bulletCount; index++) {
    const button = document.createElement('button');
    button.className = 'glide__bullet';
    button.setAttribute('data-glide-dir', '=' + index);
    bulletWrapper.appendChild(button);
  }
}