import 'lightgallery.js';
import 'lg-video.js';

export function openLightGallery() {
  const links =  document.querySelectorAll('.js-lightgallery');
  if(links.length > 0) {
    links.forEach(item => {
      lightGallery(item, {
        selector: 'a'
      }); 
    });
  }
}
