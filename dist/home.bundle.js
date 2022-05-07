"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _pizza_main_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza-main.jpg */ "./src/pizza-main.jpg");


function home() {
    const body = document.querySelector('body');
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Pal\'s Pizza Parlor';
    content.appendChild(heading);


    const pizzaImage = document.createElement('img');
    pizzaImage.src = _pizza_main_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pizzaImage.classList.toggle('main-img');
    content.appendChild(pizzaImage);
     
    const descriptionHeader = document.createElement('h2');
    descriptionHeader.textContent = 'Come on down to Pal\'s Pizza Party for a slice of our welcoming atmosphere, sensational flavors, and friendly service.';
    content.appendChild(descriptionHeader);

    const description = document.createElement('p');
    description.innerHTML = 'We\'ve been serving up good memories since 1986, when George "Pal" Costanza made his dream of sharing his family\'s delicious pies with the world a reality. Pal\'s pizza parlor is a proud supporter of our local Boys and Girls Club.';
    content.appendChild(description);
}

/***/ }),

/***/ "./src/pizza-main.jpg":
/*!****************************!*\
  !*** ./src/pizza-main.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbbd7a6a545355549d0d.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHFCQUFxQiw0Q0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGl6emEgZnJvbSAnLi9waXp6YS1tYWluLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGFsXFwncyBQaXp6YSBQYXJsb3InO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cblxuICAgIGNvbnN0IHBpenphSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IHBpenphO1xuICAgIHBpenphSW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1pbWcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGVzY3JpcHRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnQ29tZSBvbiBkb3duIHRvIFBhbFxcJ3MgUGl6emEgUGFydHkgZm9yIGEgc2xpY2Ugb2Ygb3VyIHdlbGNvbWluZyBhdG1vc3BoZXJlLCBzZW5zYXRpb25hbCBmbGF2b3JzLCBhbmQgZnJpZW5kbHkgc2VydmljZS4nO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25IZWFkZXIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ1dlXFwndmUgYmVlbiBzZXJ2aW5nIHVwIGdvb2QgbWVtb3JpZXMgc2luY2UgMTk4Niwgd2hlbiBHZW9yZ2UgXCJQYWxcIiBDb3N0YW56YSBtYWRlIGhpcyBkcmVhbSBvZiBzaGFyaW5nIGhpcyBmYW1pbHlcXCdzIGRlbGljaW91cyBwaWVzIHdpdGggdGhlIHdvcmxkIGEgcmVhbGl0eS4gUGFsXFwncyBwaXp6YSBwYXJsb3IgaXMgYSBwcm91ZCBzdXBwb3J0ZXIgb2Ygb3VyIGxvY2FsIEJveXMgYW5kIEdpcmxzIENsdWIuJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=