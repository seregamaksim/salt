export function openCloseMobileMenu() {
  const openBtn = document.querySelector('.js-open-menu');
  const closeBtn = document.querySelector('.js-close-menu');
  const menuNav = document.querySelector('.page-header__nav');
  if(openBtn && closeBtn) {
    openBtn.addEventListener('click', function() {
      menuNav.classList.add('page-header__nav--active');
    });
    closeBtn.addEventListener('click', function() {
      menuNav.classList.remove('page-header__nav--active');
    });
  }
}
