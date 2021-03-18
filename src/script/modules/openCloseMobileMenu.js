export function openCloseMobileMenu() {
  const openBtn = document.querySelector('.js-open-menu');
  const closeBtn = document.querySelector('.js-close-menu');
  const menuNav = document.querySelector('.page-header__nav');
  const body = document.body;
  if(openBtn && closeBtn) {
    openBtn.addEventListener('click', function() {
      menuNav.classList.add('page-header__nav--active');
      body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', function() {
      menuNav.classList.remove('page-header__nav--active');
      body.style.overflow = '';
    });
  }
}


