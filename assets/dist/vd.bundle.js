/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vd.js":
/*!**********************!*\
  !*** ./src/js/vd.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scss_vd_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/vd.scss */ \"./src/scss/vd.scss\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar DEBUG = false;\nvar vd = /*#__PURE__*/function () {\n  function vd() {\n    var _this = this;\n    _classCallCheck(this, vd);\n    this._mainScroll = null;\n    this._version = '1.0.0';\n    // Begin website initialization\n    if (DEBUG === true) {\n      console.log(\"valentinedondon.fr v\".concat(this._version, \" : Begin website initialization\"));\n    }\n    this._buildPage().then(this._events.bind(this)).then(this._finalizeInit.bind(this))[\"catch\"](function (err) {\n      // Error are displayed even if DEBUG is set to false, to notify end user to contact support\n      console.error(\"valentinedondon.fr v\".concat(_this._version, \" : Fatal error during initialization, please contact support :\\n\"), err);\n    })[\"finally\"](function () {\n      if (DEBUG === true) {\n        console.log(\"valentinedondon.fr v\".concat(_this._version, \" : Website initialization done\"));\n      }\n    });\n  }\n  return _createClass(vd, [{\n    key: \"_buildPage\",\n    value: function _buildPage() {\n      var _this2 = this;\n      if (DEBUG === true) {\n        console.log(\"5. Build HTML DOM depending on the page type\");\n      }\n      return new Promise(function (resolve) {\n        document.querySelector('#info-modal').addEventListener('click', _this2._infoModal.bind(_this2));\n        resolve();\n      });\n    }\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      // Blur modal event\n      document.getElementById('modal-overlay').addEventListener('click', this._closeModal.bind(this));\n      document.getElementById('nav-about').addEventListener('click', this._scrollToView.bind(this));\n      document.getElementById('nav-book').addEventListener('click', this._scrollToView.bind(this));\n      document.getElementById('nav-contact').addEventListener('click', this._scrollToView.bind(this));\n      document.getElementById('bw-switch').addEventListener('click', this._switchPhotosBW.bind(this));\n      var photos = document.querySelector('#gallery').children;\n      for (var i = 0; i < photos.length; ++i) {\n        photos[i].addEventListener('click', this._slideshowModal.bind(this, i));\n      }\n    }\n  }, {\n    key: \"_finalizeInit\",\n    value: function _finalizeInit() {\n      var _this3 = this;\n      return new Promise(function (resolve) {\n        document.querySelector('#loading-overlay').style.opacity = 0;\n        setTimeout(function () {\n          document.querySelector('#loading-overlay').style.display = 'none';\n          _this3._mainScroll = new window.ScrollBar({\n            target: document.querySelector('#page-content'),\n            minSize: 200,\n            style: {\n              color: '#758C78'\n            }\n          });\n          // Force raf after scroll creation to make scrollbar properly visible\n          requestAnimationFrame(function () {\n            _this3._mainScroll.updateScrollbar();\n            resolve();\n          });\n        }, 400);\n      });\n    }\n\n    // Event callback\n  }, {\n    key: \"_scrollToView\",\n    value: function _scrollToView(e) {\n      var target = e.target.id.split('-')[1];\n      document.getElementById(target).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  }, {\n    key: \"_switchPhotosBW\",\n    value: function _switchPhotosBW(e) {\n      var imageSrc = ['vd5', 'vd2', 'vd1', 'vd3', 'vd7', 'vd4', 'vd6', 'vd8', 'vd9', 'vd11', 'vd10'];\n      var photos = document.querySelector('#gallery').children;\n      for (var i = 0; i < photos.length; ++i) {\n        if (e.target.checked === true) {\n          photos[i].src = \"./assets/img/photos/\".concat(imageSrc[i], \"-nb.webp\");\n        } else {\n          photos[i].src = \"./assets/img/photos/\".concat(imageSrc[i], \".webp\");\n        }\n      }\n    }\n\n    // Modal related methods\n  }, {\n    key: \"_infoModal\",\n    value: function _infoModal() {\n      var overlay = document.getElementById('modal-overlay');\n      // Open modal event\n      fetch(\"assets/html/infomodal.html\").then(function (data) {\n        overlay.style.display = 'flex';\n        data.text().then(function (htmlString) {\n          var container = document.createRange().createContextualFragment(htmlString);\n          overlay.appendChild(container);\n          setTimeout(function () {\n            return overlay.style.opacity = 1;\n          }, 50);\n        });\n      })[\"catch\"](function (e) {\n        return console.error(e);\n      });\n    }\n  }, {\n    key: \"_slideshowModal\",\n    value: function _slideshowModal(index) {\n      var _this4 = this;\n      var overlay = document.getElementById('modal-overlay');\n      var photos = document.querySelector('#gallery').children;\n      fetch(\"assets/html/slideshowmodal.html\").then(function (data) {\n        overlay.style.display = 'flex';\n        data.text().then(function (htmlString) {\n          var container = document.createRange().createContextualFragment(htmlString);\n          container.querySelector('#slideshow-image').src = photos[index].src;\n          // Internal method to update curently selected photo\n          var currentIndex = index;\n          var timeoutId = -1;\n          var updateSelection = function updateSelection(newIndex) {\n            var selectors = overlay.querySelector('#slide-selector').children;\n            for (var i = 0; i < selectors.length; ++i) {\n              selectors[i].classList.remove('selected');\n              if (i === newIndex) {\n                selectors[i].classList.add('selected');\n              }\n            }\n            overlay.querySelector('#slideshow-image').src = photos[newIndex].src;\n            overlay.querySelector('#slideshow-image').className = photos[newIndex].className;\n            currentIndex = newIndex;\n            overlay.querySelector('#slide-selector').style.opacity = 1;\n            clearTimeout(timeoutId);\n            timeoutId = setTimeout(function () {\n              overlay.querySelector('#slide-selector').style.opacity = .3;\n            }, 1000);\n          };\n          // Iterate over photos to create slide selectors and make them interactive\n          for (var i = 0; i < photos.length; ++i) {\n            var selector = document.createElement('DIV');\n            selector.classList.add('selector');\n            if (i === index) {\n              selector.classList.add('selected');\n            }\n            selector.addEventListener('click', updateSelection.bind(_this4, i));\n            container.querySelector('#slide-selector').appendChild(selector);\n          }\n          // Handle next and previous buttons\n          container.querySelector('#previous').addEventListener('click', function () {\n            currentIndex = ((currentIndex - 1) % photos.length + photos.length) % photos.length;\n            updateSelection(currentIndex);\n          });\n          container.querySelector('#next').addEventListener('click', function () {\n            currentIndex = (currentIndex + 1) % photos.length;\n            updateSelection(currentIndex);\n          });\n          // Then creating the modal\n          overlay.appendChild(container);\n          setTimeout(function () {\n            return overlay.style.opacity = 1;\n          }, 50);\n        });\n      })[\"catch\"](function (e) {\n        return console.error(e);\n      });\n    }\n  }, {\n    key: \"_closeModal\",\n    value: function _closeModal(e) {\n      if (e.srcElement.id !== 'modal-overlay' && e.srcElement.className !== 'close-modal') {\n        return;\n      }\n      var overlay = document.getElementById('modal-overlay');\n      if (overlay.style.display === 'flex') {\n        overlay.style.opacity = 0;\n        setTimeout(function () {\n          overlay.innerHTML = '';\n          overlay.style = '';\n        }, 400);\n      }\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vd);\n\n//# sourceURL=webpack://vd/./src/js/vd.js?");

/***/ }),

/***/ "./src/scss/vd.scss":
/*!**************************!*\
  !*** ./src/scss/vd.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vd/./src/scss/vd.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/vd.js");
/******/ 	window.vd = __webpack_exports__["default"];
/******/ 	
/******/ })()
;