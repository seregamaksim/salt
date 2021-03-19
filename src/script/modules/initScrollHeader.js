let lastScrollTop = 0;
let flag = true;
// Пришлось сделать этот трюк с флагом только ради IE11, в других браузерах и без него прекрасно работало
export function headerScroll() {
  const header = document.querySelector('.page-header');
  const body = document.body;

  let currentScroll = window.pageYOffset; 
  if(currentScroll === 0) {
    header.classList.remove('page-header--transform', 'page-header--active');
    return;
  }
  if (currentScroll > lastScrollTop ) {
    header.classList.add('page-header--transform');
    header.classList.remove('page-header--active');
    flag = false;
  } else if(currentScroll < lastScrollTop && !flag && body.getBoundingClientRect().top < 0) {
    header.classList.add('page-header--active');
    header.classList.remove('page-header--transform');
    flag = true;
  }
  
  lastScrollTop = currentScroll;
  
}

export function initScrollHeader() {
  const header = document.querySelector('.page-header');
  const body = document.body;
  if(body.getBoundingClientRect().top !== 0) {
    header.classList.add('page-header--active');
  }
}


