// ⁡⁢⁣⁣​‌‍‌D͟e͟s͟k͟t͟o͟p v͟e͟r͟s͟i͟o͟n s͟c͟r͟e͟e͟n w͟i͟d͟t͟h c͟h͟e͟c͟k​⁡

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;

function checkScreenWidth() {
   if (window.innerWidth < 1025 &&
      (window.location == window.location.href ||
         window.location == window.location.origin + "/index.html" ||
         window.location == window.location.origin + "/PMS-rafting-and-hiking/" ||
         window.location == window.location.origin + "/PMS-rafting-and-hiking/index.html")) {
      window.location = "index-mobile.html";
   };
   if (window.innerWidth < 1025 &&
      (window.location == window.location.origin + "/rafting.html" ||
         window.location == window.location.origin + "/PMS-rafting-and-hiking/rafting.html")) {
      window.location = "rafting-mobile.html";
   };
   if (window.innerWidth < 1025 &&
      (window.location == window.location.origin + "/hiking.html" ||
         window.location == window.location.origin + "/PMS-rafting-and-hiking/hiking.html")) {
      window.location = "hiking-mobile.html";
   };
   if (window.innerWidth < 1025 &&
      (window.location == window.location.origin + "/news.html" ||
         window.location == window.location.origin + "/PMS-rafting-and-hiking/news.html")) {
      window.location = "news-mobile.html";
   };
};

// ⁡⁢⁣⁣​‌‍‌P͟o͟p͟u͟p s͟e͟a͟r͟c͟h m͟e͟n͟u f͟o͟r d͟e͟s͟k͟t͟o͟p v͟e͟r͟s͟i͟o͟n​⁡

const searchMenu = document.querySelector('.popup-search');
const openSearchMenuBtn = document.querySelector('.menu__search-btn');
const closeSearchMenuBtn = document.querySelector('.popup-search__menu-btn');

openSearchMenuBtn.onclick = () => {
   searchMenu.classList.remove('popup-search--closed');
};

closeSearchMenuBtn.onclick = () => {
   searchMenu.classList.add('popup-search--closed');
};

// ⁡⁢⁣⁣​‌‍‌P͟o͟p͟u͟p a͟b͟o͟u͟t m͟e͟n͟u​⁡

const aboutMenu = document.querySelector('.popup-about');
const openAboutMenuBtn = document.querySelector('.menu__about-btn');
const closeAboutMenuBtn = document.querySelector('.popup-about__menu-btn');

openAboutMenuBtn.onclick = () => {
   aboutMenu.classList.remove('popup-about--closed');
};

closeAboutMenuBtn.onclick = () => {
   aboutMenu.classList.add('popup-about--closed');
};

// ⁡⁢⁣⁣​‌‍‌P͟o͟p͟u͟p c͟o͟n͟t͟a͟c͟t͟s m͟e͟n͟u​⁡

const contactsMenu = document.querySelector('.popup-contacts');
const openContactsMenuBtn = document.querySelector('.menu__contacts-btn');
const closeContactsMenuBtn = document.querySelector('.popup-contacts__menu-btn');

openContactsMenuBtn.onclick = () => {
   contactsMenu.classList.remove('popup-contacts--closed');
};

closeContactsMenuBtn.onclick = () => {
   contactsMenu.classList.add('popup-contacts--closed');
};