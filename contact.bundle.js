"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _pal_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pal.jpg */ "./src/pal.jpg");


function contact() {
    const content = document.querySelector('#content');

    const header = document.createElement('h1')
    header.textContent = 'Get In Touch With Pal';
    content.appendChild(header);

    const contactInfo = document.createElement('div');
    contactInfo.classList.toggle('contact-info');

    const title = document.createElement('h3');
    title.innerText = 'General Manager: George "Pal" Costanza';
    contactInfo.appendChild(title);

    const phoneNumber = document.createElement('h4');
    phoneNumber.innerText = 'Phone: (555)555-5555';
    contactInfo.appendChild(phoneNumber);

    const emailAddress = document.createElement('h4');
    emailAddress.innerText = 'Email: paltheman@notFake.com';
    contactInfo.appendChild(emailAddress);

    const contactImg = document.createElement('img');
    contactImg.src = _pal_jpg__WEBPACK_IMPORTED_MODULE_0__;
    contactInfo.appendChild(contactImg);

    content.appendChild(contactInfo);
};

/***/ }),

/***/ "./src/pal.jpg":
/*!*********************!*\
  !*** ./src/pal.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991f47fd3a3ed784bc38.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRWhCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIscUNBQU07QUFDM0I7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWxJbWcgZnJvbSAnLi9wYWwuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnR2V0IEluIFRvdWNoIFdpdGggUGFsJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdHZW5lcmFsIE1hbmFnZXI6IEdlb3JnZSBcIlBhbFwiIENvc3RhbnphJztcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJUZXh0ID0gJ1Bob25lOiAoNTU1KTU1NS01NTU1JztcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGVtYWlsQWRkcmVzcy5pbm5lclRleHQgPSAnRW1haWw6IHBhbHRoZW1hbkBub3RGYWtlLmNvbSc7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZW1haWxBZGRyZXNzKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb250YWN0SW1nLnNyYyA9IHBhbEltZztcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0SW1nKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=