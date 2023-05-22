const navMenu = document.querySelector('.mobile-menu');
// const openNavMenuBtn = document.querySelector('.header__menu-btn');
const openNavMenuBtn = document.querySelector('.header__menu-btn-open');
const closeNavMenuBtn = document.querySelector('.header__menu-btn-close');
// const closeNavMenuBtn = document.querySelector('.mobile-menu__header-btn');
const body = document.querySelector('body');

window.onload = () => {
   body.classList.remove('body-no-scroll');
   closeNavMenuBtn.classList.remove('header__menu-btn-close');
};

openNavMenuBtn.onclick = () => {
   navMenu.classList.remove('mobile-menu--closed');
   openNavMenuBtn.classList.remove('header__menu-btn-open');
   closeNavMenuBtn.classList.add('header__menu-btn-close');
   body.classList.add('body-no-scroll');
};

closeNavMenuBtn.onclick = () => {
   closeNavMenuBtn.classList.remove('header__menu-btn-close');
   openNavMenuBtn.classList.add('header__menu-btn-open');
   navMenu.classList.add('mobile-menu--closed');
   body.classList.remove('body-no-scroll');
};

const searchMenu = document.querySelector('.mobile-search');
const openSearchMenuBtn = document.querySelector('.mobile-menu__search-btn');
const closeSearchMenuBtn = document.querySelector('.mobile-search__header-btn-back');
const homeSearchMenuBtn = document.querySelector('.mobile-search__header-btn-home');

openSearchMenuBtn.onclick = () => {
   searchMenu.classList.remove('mobile-search--closed');
};

closeSearchMenuBtn.onclick = () => {
   searchMenu.classList.add('mobile-search--closed');
};