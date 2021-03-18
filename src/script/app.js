import SmoothScroll from 'smooth-scroll';

import { openCloseMobileMenu } from './modules/openCloseMobileMenu';
import { slidersInit } from './modules/slidersInit';
import { openLightGallery } from './modules/openLightGallery';
import { initScrollHeader, headerScroll } from './modules/initScrollHeader';

document.addEventListener('DOMContentLoaded', function() {
  openCloseMobileMenu();
  slidersInit();
  openLightGallery();
  initScrollHeader();
  let scroll = new SmoothScroll('a[href*="#"]');
});

window.addEventListener('scroll', headerScroll);
