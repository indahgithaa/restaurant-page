/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/homepage.js":
/*!*****************************!*\
  !*** ./src/app/homepage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
    const content = document.querySelector('#content');

    const homepage = document.createElement('div')
    const welcomingWrap = document.createElement('div');
    const welcoming = document.createElement('h1');
    const exploreBtn = document.createElement('button');

    homepage.setAttribute('class', 'homepage');
    exploreBtn.setAttribute('id', 'expBtn');
    welcomingWrap.setAttribute('id', 'welcomingWrap');
    welcoming.setAttribute('id', 'welcoming');

    welcoming.innerHTML = 'The Goodness of <span> Real Foods </span> for Your Healthier Life';
    exploreBtn.textContent = 'Explore Our Menu'

    welcomingWrap.appendChild(welcoming);
    welcoming.appendChild(exploreBtn);
    homepage.appendChild(welcomingWrap);

    content.appendChild(homepage);
}

 // const coverImg = document.createElement('img');
    // coverImg.setAttribute('src', cover)
    // coverImg.setAttribute('id', 'coverImg');
    // homepage.appendChild(coverImg);

/***/ }),

/***/ "./src/app/menupage.js":
/*!*****************************!*\
  !*** ./src/app/menupage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {
    const content = document.querySelector('#content');

    const menuHeader = document.createElement('h1');

    menuHeader.textContent = 'Our Menu. Empty. Like my soul';

    content.appendChild(menuHeader)
}

/***/ }),

/***/ "./src/app/switchtab.js":
/*!******************************!*\
  !*** ./src/app/switchtab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchTab)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/app/homepage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ "./src/app/menupage.js");



function switchTab() {
    const content = document.querySelector('#content');

    const switchDiv = document.createElement('div');
    const navbar = document.createElement('ul');
    const homeNav = document.createElement('li');
    const menuNav = document.createElement('li');
    const contactNav = document.createElement('li');
    const promoNav = document.createElement('li');
    const restoName = document.createElement('h1');
    const leafImg = document.createElement('img');

    navbar.setAttribute('class', 'navbar-container');
    switchDiv.setAttribute('id', 'switchdiv');
    restoName.setAttribute('id', 'restoname');
    leafImg.setAttribute('id', 'leaf');

    homeNav.textContent = 'Home';
    menuNav.textContent = 'Menu';
    contactNav.textContent = 'Contact';
    promoNav.textContent = 'Promo';
    restoName.textContent = 'PureHut';
    leafImg.src = '../assets/leaf.png';

    switchDiv.appendChild(homeNav);
    switchDiv.appendChild(menuNav);
    switchDiv.appendChild(contactNav);
    switchDiv.appendChild(promoNav);
    navbar.appendChild(switchDiv)
    navbar.appendChild(restoName);
    navbar.appendChild(leafImg);

    content.appendChild(navbar);

    menuNav.addEventListener('click', () => {
        content.innerHTML = '';
        (0,_menupage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app_switchtab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/switchtab */ "./src/app/switchtab.js");
/* harmony import */ var _app_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/homepage */ "./src/app/homepage.js");
/* harmony import */ var _app_menupage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/menupage */ "./src/app/menupage.js");






const content = document.querySelector('#content');



(0,_app_switchtab__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_app_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])();


})();

/******/ })()
;