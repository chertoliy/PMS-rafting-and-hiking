// ⁡⁢⁣⁣​‌‍‌​‌‍‌M͟o͟b͟i͟l͟e v͟e͟r͟s͟i͟o͟n o͟n͟l͟o͟a͟d a͟n͟d r͟e͟s͟i͟z͟e c͟h͟e͟c͟k͟i͟n͟g a͟n͟d p͟r͟e͟s͟e͟t͟s⁡​⁡⁡⁡

const body = document.querySelector('body');
const navMenu = document.querySelector('.mobile-menu');
const openNavMenuBtn = document.querySelector('.header__menu-btn-open');
const closeNavMenuBtn = document.querySelector('.header__menu-btn-close');

window.onload = checkScreenWidth && menuToggle;
window.onresize = checkScreenWidth;

function checkScreenWidth() {
   if (window.innerWidth >= 1025 && window.location == window.location.origin + "/index-mobile.html") {
      window.location = "index.html";
   };
   if (window.innerWidth >= 1025 && window.location == window.location.origin + "/rafting-mobile.html") {
      window.location = "rafting.html";
   };
   if (window.innerWidth >= 1025 && window.location == window.location.origin + "/hiking-mobile.html") {
      window.location = "hiking.html";
   };
   if (window.innerWidth >= 1025 && window.location == window.location.origin + "/news-mobile.html") {
      window.location = "news.html";
   };
};

function menuToggle() {
   body.classList.remove('body-no-scroll');
   closeNavMenuBtn.classList.remove('header__menu-btn-close');
};

// ⁡⁢⁣⁢​‌‍‌⁡⁢⁣⁣⁡⁢⁣⁣M͟o͟b͟i͟l͟e b͟u͟r͟g͟e͟r m͟e͟n͟u⁡⁡​⁡

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

// ​‌‍‌⁡⁢⁣⁣M͟o͟b͟i͟l͟e s͟e͟a͟r͟c͟h m͟e͟n͟u⁡​

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