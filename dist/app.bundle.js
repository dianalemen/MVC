/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.ts":
/*!********************!*
  !*** ./app/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar independent_1 = __webpack_require__(/*! ./model/independent */ \"./app/model/independent.ts\");\r\nvar sliders_1 = __webpack_require__(/*! ./view/sliders */ \"./app/view/sliders.ts\");\r\nvar controller_1 = __webpack_require__(/*! ./controller/controller */ \"./app/controller/controller.ts\");\r\nwindow.addEventListener('load', function () {\r\n    var model = new independent_1.Independent();\r\n    var view = new sliders_1.SlidersView(model);\r\n    new controller_1.Controller(view, model);\r\n});\r\n\n\n//# sourceURL=webpack://currencyconverter/./app/app.ts?");

/***/ }),

/***/ "./app/controller/controller.ts":
/*!**************************************!*
  !*** ./app/controller/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Controller = void 0;\r\nvar Controller = /** @class */ (function () {\r\n    function Controller(view, model) {\r\n        this.view = view;\r\n        this.model = model;\r\n    }\r\n    return Controller;\r\n}());\r\nexports.Controller = Controller;\r\n\n\n//# sourceURL=webpack://currencyconverter/./app/controller/controller.ts?");

/***/ }),

/***/ "./app/mock/mock.ts":
/*!**************************!*
  !*** ./app/mock/mock.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.currencies = void 0;\r\nexports.currencies = [\r\n    {\r\n        name: 'DM',\r\n        rate: 1.96\r\n    },\r\n    {\r\n        name: 'BF',\r\n        rate: 40.34\r\n    },\r\n    {\r\n        name: 'FF',\r\n        rate: 6.56\r\n    },\r\n    {\r\n        name: 'IP',\r\n        rate: 0.79\r\n    },\r\n    {\r\n        name: 'IL',\r\n        rate: 1936.27\r\n    },\r\n    {\r\n        name: 'US',\r\n        rate: 1.06\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://currencyconverter/./app/mock/mock.ts?");

/***/ }),

/***/ "./app/model/independent.ts":
/*!**********************************!*
  !*** ./app/model/independent.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Independent = void 0;\r\nvar mock_1 = __webpack_require__(/*! ../mock/mock */ \"./app/mock/mock.ts\");\r\nvar Independent = /** @class */ (function () {\r\n    function Independent() {\r\n        this.currencies = this.getCurrencies();\r\n    }\r\n    Independent.prototype.getCurrencies = function () {\r\n        return mock_1.currencies;\r\n    };\r\n    return Independent;\r\n}());\r\nexports.Independent = Independent;\r\n\n\n//# sourceURL=webpack://currencyconverter/./app/model/independent.ts?");

/***/ }),

/***/ "./app/view/sliders.ts":
/*!*****************************!*
  !*** ./app/view/sliders.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SlidersView = void 0;\r\nvar SlidersView = /** @class */ (function () {\r\n    function SlidersView(model) {\r\n        this.model = model;\r\n        this.createMockUp();\r\n    }\r\n    SlidersView.prototype.createMockUp = function () {\r\n        this.app = document.getElementById('app');\r\n        this.form = document.createElement('form');\r\n        this.currentExchangeRateInput = document.createElement('input');\r\n        this.currentExchangeRateInput.setAttribute('type', 'range');\r\n        this.currentExchangeRateInput.setAttribute('id', \"current-rate-\" + 1);\r\n        this.euroInput = document.createElement('input');\r\n        this.euroInput.setAttribute('type', 'range');\r\n        this.euroInput.setAttribute('id', \"euro-\" + 1);\r\n        this.dMInput = document.createElement('input');\r\n        this.dMInput.setAttribute('type', 'range');\r\n        this.dMInput.setAttribute('id', \"dMInput\");\r\n        this.currentExchangeLabel = document.createElement('label');\r\n        this.currentExchangeLabel.setAttribute('for', \"current-rate--\" + 1);\r\n        this.currentExchangeLabel.appendChild(document.createTextNode('Euro is'));\r\n        this.euroInputLabel = document.createElement('label');\r\n        this.euroInputLabel.setAttribute('for', \"euro-\" + 1);\r\n        this.euroInputLabel.appendChild(document.createTextNode('Euro'));\r\n        this.dMInputLabel = document.createElement('label');\r\n        this.dMInputLabel.setAttribute('for', \"dm-\" + 1);\r\n        this.dMInputLabel.appendChild(document.createTextNode(\"\" + 1));\r\n        this.form.append(this.currentExchangeRateInput, this.euroInput, this.dMInput, this.currentExchangeLabel, this.euroInputLabel, this.dMInputLabel);\r\n        this.app && this.app.append(this.form);\r\n    };\r\n    return SlidersView;\r\n}());\r\nexports.SlidersView = SlidersView;\r\n\n\n//# sourceURL=webpack://currencyconverter/./app/view/sliders.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app/app.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;