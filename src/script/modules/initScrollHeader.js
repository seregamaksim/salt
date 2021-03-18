let lastScrollTop = 0;
export function headerScroll() {
  const header = document.querySelector('.page-header');
  const body = document.body;

  let st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop) {
    if((body.getBoundingClientRect().top < 0)) {
      header.classList.add('page-header--transform');
    } 
  } else {
    if(body.getBoundingClientRect().top !== 0) {
      header.classList.remove('page-header--transform','page-header--active');
      header.classList.add('page-header--active');
      
    } else if(body.getBoundingClientRect().top >= -100) {
      header.classList.remove('page-header--transform', 'page-header--active');
    }
    
  }
  
  lastScrollTop = st <= 0 ? 0 : st;
  
}

export function initScrollHeader() {
  const header = document.querySelector('.page-header');
  const body = document.body;
  if(body.getBoundingClientRect().top !== 0) {
    header.classList.add('page-header--active');
  }
}


