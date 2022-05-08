"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _chicken_garlic_ranch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chicken-garlic-ranch.jpg */ "./src/chicken-garlic-ranch.jpg");
/* harmony import */ var _bacon_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bacon-cheeseburger.jpg */ "./src/bacon-cheeseburger.jpg");
/* harmony import */ var _pepperoni_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pepperoni.jpg */ "./src/pepperoni.jpg");
/* harmony import */ var _cheese_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheese.jpg */ "./src/cheese.jpg");
/* harmony import */ var _cheesy_breadsticks_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cheesy-breadsticks.jpg */ "./src/cheesy-breadsticks.jpg");
/* harmony import */ var _wings_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wings.jpg */ "./src/wings.jpg");
/* harmony import */ var _fountain_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fountain.jpg */ "./src/fountain.jpg");
/* harmony import */ var _milkshake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./milkshake.jpg */ "./src/milkshake.jpg");
/* harmony import */ var _margherita_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./margherita.jpg */ "./src/margherita.jpg");










function menu() {
    const content = document.querySelector('#content');

    class menuItem {
        constructor (name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        addToMenu() {
            const itemName = document.createElement('h3');
            itemName.textContent = this.name;
            itemName.classList.toggle('name');
            const itemDescription = document.createElement('p');
            itemDescription.innerHTML = this.description;
            const itemPrice = document.createElement('h3');
            itemPrice.textContent = this.price;
            itemPrice.classList.toggle('price');
            const itemImg = document.createElement('img');
            itemImg.src = this.image;
            const itemContainer = document.createElement('div');
            itemContainer.classList.toggle('menu-item');
            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemDescription);
            itemContainer.appendChild(itemPrice);
            itemContainer.appendChild(itemImg);
            content.appendChild(itemContainer);
        }
    }

    const header = document.createElement('h1');
    header.textContent = 'Our Menu';
    content.appendChild(header);


    const specialties = document.createElement('h2');
    specialties.textContent = 'Pal\'s Specialty Pizzas';
    content.appendChild(specialties);

    const chickenGarlicRanch = new menuItem('Chicken Garlic Ranch', 'Garlic ranch sauce base, grilled chicken, green peppers, red onions', '$13.99', _chicken_garlic_ranch_jpg__WEBPACK_IMPORTED_MODULE_0__);
    chickenGarlicRanch.addToMenu();

    const baconCheeseburger = new menuItem('Bacon Cheeseburger Pizza ', 'Ground beef, bacon, onion, cheddar', '$12.99', _bacon_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_1__);
    baconCheeseburger.addToMenu();


    const pies = document.createElement('h2');
    pies.textContent = 'Pal\'s Pies';
    content.appendChild(pies);

    const margherita = new menuItem('Margherita', 'Fresh mozzarella cheese, basil, tomato sauce', '$10.99', _margherita_jpg__WEBPACK_IMPORTED_MODULE_8__);
    margherita.addToMenu();

    const pepperoni = new menuItem('Pepperoni', 'Mozzarella cheese, tomato sauce, pepperoni', '$11.49', _pepperoni_jpg__WEBPACK_IMPORTED_MODULE_2__);
    pepperoni.addToMenu();

    const cheese = new menuItem('Cheese', 'Mozzarella cheese, tomato sauce', '$9.99', _cheese_jpg__WEBPACK_IMPORTED_MODULE_3__);
    cheese.addToMenu();


    const sides = document.createElement('h2');
    sides.textContent = 'Sides';
    content.appendChild(sides);

    const breadsticks = new menuItem('Cheesy Breadsticks', 'Garlic bread covered in mozzarella cheese, marinara dipping sauce', '$5.99', _cheesy_breadsticks_jpg__WEBPACK_IMPORTED_MODULE_4__);
    breadsticks.addToMenu();

    const wings = new menuItem('Buffalo Wings', 'Crispy chicken wings, buffalo sauce, ranch dipping sauce', '$8.99', _wings_jpg__WEBPACK_IMPORTED_MODULE_5__);
    wings.addToMenu();


    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';
    content.appendChild(drinks);

    const fountainDrink = new menuItem('Fountain Drink', '20 oz. Coca-cola, Sprite, Dr. Pepper, Root Beer, or Lemonade', '$2.49', _fountain_jpg__WEBPACK_IMPORTED_MODULE_6__);
    fountainDrink.addToMenu();

    const milkshake = new menuItem('Milkshake', 'Chocolate, Vanilla, or Strawberry', '$5.99', _milkshake_jpg__WEBPACK_IMPORTED_MODULE_7__);
    milkshake.addToMenu();
}

/***/ }),

/***/ "./src/bacon-cheeseburger.jpg":
/*!************************************!*\
  !*** ./src/bacon-cheeseburger.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caed0dc95d1d0b011f8f.jpg";

/***/ }),

/***/ "./src/cheese.jpg":
/*!************************!*\
  !*** ./src/cheese.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20ad248c16cd22dbb3d3.jpg";

/***/ }),

/***/ "./src/cheesy-breadsticks.jpg":
/*!************************************!*\
  !*** ./src/cheesy-breadsticks.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4da2575804cf10741c4.jpg";

/***/ }),

/***/ "./src/chicken-garlic-ranch.jpg":
/*!**************************************!*\
  !*** ./src/chicken-garlic-ranch.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34b80051453c47843faa.jpg";

/***/ }),

/***/ "./src/fountain.jpg":
/*!**************************!*\
  !*** ./src/fountain.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90a75d2e16042b83afaf.jpg";

/***/ }),

/***/ "./src/margherita.jpg":
/*!****************************!*\
  !*** ./src/margherita.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1075c8753d5ecd51a9cd.jpg";

/***/ }),

/***/ "./src/milkshake.jpg":
/*!***************************!*\
  !*** ./src/milkshake.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ba235e2529f7b13f05e.jpg";

/***/ }),

/***/ "./src/pepperoni.jpg":
/*!***************************!*\
  !*** ./src/pepperoni.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea08288fcfc2e25221d8.jpg";

/***/ }),

/***/ "./src/wings.jpg":
/*!***********************!*\
  !*** ./src/wings.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c30a2b8a28ab1b1f643.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNIO0FBQ2pCO0FBQ047QUFDaUI7QUFDbkI7QUFDVztBQUNIO0FBQ0U7O0FBRTlCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxxSkFBcUosc0RBQXFCO0FBQzFLOztBQUVBLHdIQUF3SCxvREFBb0I7QUFDNUk7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSw0R0FBNEcsNENBQWE7QUFDekg7O0FBRUEsd0dBQXdHLDJDQUFZO0FBQ3BIOztBQUVBLHNGQUFzRix3Q0FBUztBQUMvRjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHlJQUF5SSxvREFBYztBQUN2Sjs7QUFFQSxxSEFBcUgsdUNBQVE7QUFDN0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxrSUFBa0ksMENBQWdCO0FBQ2xKOztBQUVBLDhGQUE4RiwyQ0FBWTtBQUMxRztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoaWNrZW5HYXJsaWNSYW5jaEltZyBmcm9tICcuL2NoaWNrZW4tZ2FybGljLXJhbmNoLmpwZyc7XG5pbXBvcnQgYmFjb25DaGVlc2VidXJnZXJJbWcgZnJvbSAnLi9iYWNvbi1jaGVlc2VidXJnZXIuanBnJztcbmltcG9ydCBwZXBwZXJvbmlJbWcgZnJvbSAnLi9wZXBwZXJvbmkuanBnJztcbmltcG9ydCBjaGVlc2VJbWcgZnJvbSAnLi9jaGVlc2UuanBnJztcbmltcG9ydCBicmVhZHN0aWNrc0ltZyBmcm9tICcuL2NoZWVzeS1icmVhZHN0aWNrcy5qcGcnO1xuaW1wb3J0IHdpbmdzSW1nIGZyb20gJy4vd2luZ3MuanBnJztcbmltcG9ydCBmb3VudGFpbkRyaW5rSW1nIGZyb20gJy4vZm91bnRhaW4uanBnJztcbmltcG9ydCBtaWxrc2hha2VJbWcgZnJvbSAnLi9taWxrc2hha2UuanBnJztcbmltcG9ydCBtYXJnaGVyaXRhSW1nIGZyb20gJy4vbWFyZ2hlcml0YS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY2xhc3MgbWVudUl0ZW0ge1xuICAgICAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvTWVudSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gdGhpcy5wcmljZTtcbiAgICAgICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QudG9nZ2xlKCdwcmljZScpO1xuICAgICAgICAgICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaXRlbUltZy5zcmMgPSB0aGlzLmltYWdlO1xuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cbiAgICBjb25zdCBzcGVjaWFsdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3BlY2lhbHRpZXMudGV4dENvbnRlbnQgPSAnUGFsXFwncyBTcGVjaWFsdHkgUGl6emFzJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwZWNpYWx0aWVzKTtcblxuICAgIGNvbnN0IGNoaWNrZW5HYXJsaWNSYW5jaCA9IG5ldyBtZW51SXRlbSgnQ2hpY2tlbiBHYXJsaWMgUmFuY2gnLCAnR2FybGljIHJhbmNoIHNhdWNlIGJhc2UsIGdyaWxsZWQgY2hpY2tlbiwgZ3JlZW4gcGVwcGVycywgcmVkIG9uaW9ucycsICckMTMuOTknLCBjaGlja2VuR2FybGljUmFuY2hJbWcpO1xuICAgIGNoaWNrZW5HYXJsaWNSYW5jaC5hZGRUb01lbnUoKTtcblxuICAgIGNvbnN0IGJhY29uQ2hlZXNlYnVyZ2VyID0gbmV3IG1lbnVJdGVtKCdCYWNvbiBDaGVlc2VidXJnZXIgUGl6emEgJywgJ0dyb3VuZCBiZWVmLCBiYWNvbiwgb25pb24sIGNoZWRkYXInLCAnJDEyLjk5JywgYmFjb25DaGVlc2VidXJnZXJJbWcpO1xuICAgIGJhY29uQ2hlZXNlYnVyZ2VyLmFkZFRvTWVudSgpO1xuXG5cbiAgICBjb25zdCBwaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwaWVzLnRleHRDb250ZW50ID0gJ1BhbFxcJ3MgUGllcyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaWVzKTtcblxuICAgIGNvbnN0IG1hcmdoZXJpdGEgPSBuZXcgbWVudUl0ZW0oJ01hcmdoZXJpdGEnLCAnRnJlc2ggbW96emFyZWxsYSBjaGVlc2UsIGJhc2lsLCB0b21hdG8gc2F1Y2UnLCAnJDEwLjk5JywgbWFyZ2hlcml0YUltZyk7XG4gICAgbWFyZ2hlcml0YS5hZGRUb01lbnUoKTtcblxuICAgIGNvbnN0IHBlcHBlcm9uaSA9IG5ldyBtZW51SXRlbSgnUGVwcGVyb25pJywgJ01venphcmVsbGEgY2hlZXNlLCB0b21hdG8gc2F1Y2UsIHBlcHBlcm9uaScsICckMTEuNDknLCBwZXBwZXJvbmlJbWcpO1xuICAgIHBlcHBlcm9uaS5hZGRUb01lbnUoKTtcblxuICAgIGNvbnN0IGNoZWVzZSA9IG5ldyBtZW51SXRlbSgnQ2hlZXNlJywgJ01venphcmVsbGEgY2hlZXNlLCB0b21hdG8gc2F1Y2UnLCAnJDkuOTknLCBjaGVlc2VJbWcpO1xuICAgIGNoZWVzZS5hZGRUb01lbnUoKTtcblxuXG4gICAgY29uc3Qgc2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNpZGVzLnRleHRDb250ZW50ID0gJ1NpZGVzJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVzKTtcblxuICAgIGNvbnN0IGJyZWFkc3RpY2tzID0gbmV3IG1lbnVJdGVtKCdDaGVlc3kgQnJlYWRzdGlja3MnLCAnR2FybGljIGJyZWFkIGNvdmVyZWQgaW4gbW96emFyZWxsYSBjaGVlc2UsIG1hcmluYXJhIGRpcHBpbmcgc2F1Y2UnLCAnJDUuOTknLCBicmVhZHN0aWNrc0ltZyk7XG4gICAgYnJlYWRzdGlja3MuYWRkVG9NZW51KCk7XG5cbiAgICBjb25zdCB3aW5ncyA9IG5ldyBtZW51SXRlbSgnQnVmZmFsbyBXaW5ncycsICdDcmlzcHkgY2hpY2tlbiB3aW5ncywgYnVmZmFsbyBzYXVjZSwgcmFuY2ggZGlwcGluZyBzYXVjZScsICckOC45OScsIHdpbmdzSW1nKTtcbiAgICB3aW5ncy5hZGRUb01lbnUoKTtcblxuXG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkcmlua3MudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgICBjb25zdCBmb3VudGFpbkRyaW5rID0gbmV3IG1lbnVJdGVtKCdGb3VudGFpbiBEcmluaycsICcyMCBvei4gQ29jYS1jb2xhLCBTcHJpdGUsIERyLiBQZXBwZXIsIFJvb3QgQmVlciwgb3IgTGVtb25hZGUnLCAnJDIuNDknLCBmb3VudGFpbkRyaW5rSW1nKTtcbiAgICBmb3VudGFpbkRyaW5rLmFkZFRvTWVudSgpO1xuXG4gICAgY29uc3QgbWlsa3NoYWtlID0gbmV3IG1lbnVJdGVtKCdNaWxrc2hha2UnLCAnQ2hvY29sYXRlLCBWYW5pbGxhLCBvciBTdHJhd2JlcnJ5JywgJyQ1Ljk5JywgbWlsa3NoYWtlSW1nKTtcbiAgICBtaWxrc2hha2UuYWRkVG9NZW51KCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9