import SmoothScroll from 'smooth-scroll';

import { openCloseMobileMenu } from './modules/openCloseMobileMenu';
import { slidersInit } from './modules/slidersInit';
import { openLightGallery } from './modules/openLightGallery';

document.addEventListener('DOMContentLoaded', function() {
  openCloseMobileMenu();
  slidersInit();
  openLightGallery();
  let scroll = new SmoothScroll('a[href*="#"]');
});
