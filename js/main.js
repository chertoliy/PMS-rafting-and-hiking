// Desktop version screen width check
window.onload = () => {
   if (window.innerWidth < 501) {
      window.location = "index-mobile.html";
   };
};

// Popup search menu for desktop version
const searchMenu = document.querySelector('.popup-search');
const openSearchMenuBtn = document.querySelector('.menu__search-btn');
const closeSearchMenuBtn = document.querySelector('.popup-search__menu-btn');

openSearchMenuBtn.onclick = () => {
   searchMenu.classList.remove('popup-search--closed');
};

closeSearchMenuBtn.onclick = () => {
   searchMenu.classList.add('popup-search--closed');
};