module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/logo-8e53439da2f011f1e2a2cc2bb8fa41d5.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nP2M3MmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tOGU1MzQzOWRhMmYwMTFmMWUyYTJjYzJiYjhmYTQxZDUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/images/logo.png\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_areas_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/areas/MainPage */ \"./src/areas/MainPage/index.tsx\");\n\n\n\n\nconst Index = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"MasterSeats\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_areas_MainPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQWUsR0FBRyxNQUFNO0FBQzFCLHNCQUNJLHFJQUNJLDJEQUFDLGdEQUFELHFCQUNJLHdGQURKLENBREosZUFJSSwyREFBQywyREFBRCxPQUpKLENBREo7QUFRSCxDQVREOztBQVdlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuLi9zcmMvYXJlYXMvTWFpblBhZ2UnXG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk1hc3RlclNlYXRzPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxNYWluUGFnZS8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/areas/MainPage/Sections.styled/Universal.tsx":
/*!**********************************************************!*\
  !*** ./src/areas/MainPage/Sections.styled/Universal.tsx ***!
  \**********************************************************/
/*! exports provided: TitleStyled, SubtitleStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleStyled\", function() { return TitleStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubtitleStyled\", function() { return SubtitleStyled; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  Title,\n  Paragraph\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"];\nconst TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Title).withConfig({\n  displayName: \"Universal__TitleStyled\",\n  componentId: \"sc-105fmkb-0\"\n})([\"text-align:center;font-family:'Mark Pro Bold';margin-bottom:5px !important;\"]);\nconst SubtitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TitleStyled).withConfig({\n  displayName: \"Universal__SubtitleStyled\",\n  componentId: \"sc-105fmkb-1\"\n})([\"font-family:'Mark Pro Medium';margin-bottom:10px !important;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvTWFpblBhZ2UvU2VjdGlvbnMuc3R5bGVkL1VuaXZlcnNhbC50c3g/NmQwMSJdLCJuYW1lcyI6WyJUaXRsZSIsIlBhcmFncmFwaCIsIlR5cG9ncmFwaHkiLCJUaXRsZVN0eWxlZCIsInN0eWxlZCIsIlN1YnRpdGxlU3R5bGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxNQUFNO0FBQUNBLE9BQUQ7QUFBUUM7QUFBUixJQUFxQkMsK0NBQTNCO0FBRU8sTUFBTUMsV0FBVyxHQUFHQyx3REFBTSxDQUFDSixLQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsbUZBQWpCO0FBTUEsTUFBTUssY0FBYyxHQUFHRCx3REFBTSxDQUFDRCxXQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0VBQXBCIiwiZmlsZSI6Ii4vc3JjL2FyZWFzL01haW5QYWdlL1NlY3Rpb25zLnN0eWxlZC9Vbml2ZXJzYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFR5cG9ncmFwaHksIExheW91dCwgQnV0dG9uLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7VGl0bGUsIFBhcmFncmFwaH0gPSBUeXBvZ3JhcGh5XG5cbmV4cG9ydCBjb25zdCBUaXRsZVN0eWxlZCA9IHN0eWxlZChUaXRsZSlgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8gQm9sZCc7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG5gXG5cbmV4cG9ydCBjb25zdCBTdWJ0aXRsZVN0eWxlZCA9IHN0eWxlZChUaXRsZVN0eWxlZClgXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyBNZWRpdW0nO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/areas/MainPage/Sections.styled/Universal.tsx\n");

/***/ }),

/***/ "./src/areas/MainPage/Sections/Greetings.tsx":
/*!***************************************************!*\
  !*** ./src/areas/MainPage/Sections/Greetings.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Sections_styled_Universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sections.styled/Universal */ \"./src/areas/MainPage/Sections.styled/Universal.tsx\");\n\n\n\n\nconst {\n  Content\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"];\nconst {\n  Title,\n  Paragraph\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"];\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Space\"]).withConfig({\n  displayName: \"Greetings__Container\",\n  componentId: \"sc-57f5gw-0\"\n})([\"display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%;margin-top:-7%;\"]);\nconst GetStartedButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"]).withConfig({\n  displayName: \"Greetings__GetStartedButton\",\n  componentId: \"sc-57f5gw-1\"\n})([\"font-family:'Mark Pro Bold';color:#FFCB05;background-color:#00274c;font-size:17px;\"]);\n\nconst Greetings = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {\n    size: \"middle\",\n    direction: \"vertical\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_styled_Universal__WEBPACK_IMPORTED_MODULE_3__[\"TitleStyled\"], null, \"The Sports Ticket Marketplace of the Future\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_styled_Universal__WEBPACK_IMPORTED_MODULE_3__[\"SubtitleStyled\"], {\n    level: 4\n  }, \"We make it both easier and safer to buy and sell Michigan Football tickets!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GetStartedButton, null, \"Get Started\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Greetings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvTWFpblBhZ2UvU2VjdGlvbnMvR3JlZXRpbmdzLnRzeD9iNjEwIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJMYXlvdXQiLCJUaXRsZSIsIlBhcmFncmFwaCIsIlR5cG9ncmFwaHkiLCJDb250YWluZXIiLCJzdHlsZWQiLCJTcGFjZSIsIkdldFN0YXJ0ZWRCdXR0b24iLCJCdXR0b24iLCJHcmVldGluZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFjQywyQ0FBcEI7QUFDQSxNQUFNO0FBQUNDLE9BQUQ7QUFBUUM7QUFBUixJQUFxQkMsK0NBQTNCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQyx3REFBTSxDQUFDQywwQ0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdIQUFmO0FBU0EsTUFBTUMsZ0JBQWdCLEdBQUdGLHdEQUFNLENBQUNHLDJDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMEZBQXRCOztBQU9BLE1BQU1DLFNBQW1CLEdBQUcsTUFBTTtBQUM5QixzQkFDSSwyREFBQyxTQUFEO0FBQVcsUUFBSSxFQUFDLFFBQWhCO0FBQXlCLGFBQVMsRUFBQztBQUFuQyxrQkFDSSwyREFBQyxzRUFBRCxzREFESixlQUVJLDJEQUFDLHlFQUFEO0FBQWdCLFNBQUssRUFBRTtBQUF2QixtRkFGSixlQUdJLDJEQUFDLGdCQUFELHNCQUhKLENBREo7QUFPSCxDQVJEOztBQVVlQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9hcmVhcy9NYWluUGFnZS9TZWN0aW9ucy9HcmVldGluZ3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgTGF5b3V0LCBCdXR0b24sIFNwYWNlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtUaXRsZVN0eWxlZCwgU3VidGl0bGVTdHlsZWR9IGZyb20gJy4uL1NlY3Rpb25zLnN0eWxlZC9Vbml2ZXJzYWwnXG5cbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0XG5jb25zdCB7VGl0bGUsIFBhcmFncmFwaH0gPSBUeXBvZ3JhcGh5XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChTcGFjZSlgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC03JTtcbmBcblxuY29uc3QgR2V0U3RhcnRlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8gQm9sZCc7XG4gICAgY29sb3I6ICNGRkNCMDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0YztcbiAgICBmb250LXNpemU6IDE3cHg7XG5gXG5cbmNvbnN0IEdyZWV0aW5nczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBzaXplPVwibWlkZGxlXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxUaXRsZVN0eWxlZD5UaGUgU3BvcnRzIFRpY2tldCBNYXJrZXRwbGFjZSBvZiB0aGUgRnV0dXJlPC9UaXRsZVN0eWxlZD5cbiAgICAgICAgICAgIDxTdWJ0aXRsZVN0eWxlZCBsZXZlbD17NH0+V2UgbWFrZSBpdCBib3RoIGVhc2llciBhbmQgc2FmZXIgdG8gYnV5IGFuZCBzZWxsIE1pY2hpZ2FuIEZvb3RiYWxsIHRpY2tldHMhPC9TdWJ0aXRsZVN0eWxlZD5cbiAgICAgICAgICAgIDxHZXRTdGFydGVkQnV0dG9uPkdldCBTdGFydGVkPC9HZXRTdGFydGVkQnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyZWV0aW5ncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/areas/MainPage/Sections/Greetings.tsx\n");

/***/ }),

/***/ "./src/areas/MainPage/Sections/HowItWorks.tsx":
/*!****************************************************!*\
  !*** ./src/areas/MainPage/Sections/HowItWorks.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Sections_styled_Universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sections.styled/Universal */ \"./src/areas/MainPage/Sections.styled/Universal.tsx\");\n\n\n\n\nconst DividerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"]).withConfig({\n  displayName: \"HowItWorks__DividerStyled\",\n  componentId: \"sc-1wl6iik-0\"\n})([\"border-top-color:rgba(0,39,76,0.75);\"]);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"]).withConfig({\n  displayName: \"HowItWorks__Container\",\n  componentId: \"sc-1wl6iik-1\"\n})([\"display:flex;flex-direction:column;height:100%;padding-top:10%;background-color:rgba(0,0,0,0);\"]);\nconst MiniContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"HowItWorks__MiniContainer\",\n  componentId: \"sc-1wl6iik-2\"\n})([\"display:flex;flex-direction:column;padding-left:40px;padding-right:40px;\"]);\nconst SubtitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Sections_styled_Universal__WEBPACK_IMPORTED_MODULE_3__[\"SubtitleStyled\"]).withConfig({\n  displayName: \"HowItWorks__SubtitleStyled\",\n  componentId: \"sc-1wl6iik-3\"\n})([\"text-align:left;\"]);\n\nconst HowItWorks = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_styled_Universal__WEBPACK_IMPORTED_MODULE_3__[\"TitleStyled\"], {\n    level: 2\n  }, \"How It Works\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividerStyled, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MiniContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubtitleStyled, {\n    level: 4\n  }, \"Buying\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HowItWorks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvTWFpblBhZ2UvU2VjdGlvbnMvSG93SXRXb3Jrcy50c3g/Zjk3OSJdLCJuYW1lcyI6WyJEaXZpZGVyU3R5bGVkIiwic3R5bGVkIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxheW91dCIsIk1pbmlDb250YWluZXIiLCJkaXYiLCJTdWJ0aXRsZVN0eWxlZCIsIlN1YnRpdGxlIiwiSG93SXRXb3JrcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQyx3REFBTSxDQUFDQyw0Q0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRDQUFuQjtBQUlBLE1BQU1DLFNBQVMsR0FBR0Ysd0RBQU0sQ0FBQ0csMkNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxzR0FBZjtBQVFBLE1BQU1DLGFBQWEsR0FBR0osd0RBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSxnRkFBbkI7QUFPQSxNQUFNQyxjQUFjLEdBQUdOLHdEQUFNLENBQUNPLHlFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0JBQXBCOztBQUlBLE1BQU1DLFVBQW9CLEdBQUcsTUFBTTtBQUMvQixzQkFDSSwyREFBQyxTQUFELHFCQUNJLDJEQUFDLHNFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQXBCLG9CQURKLGVBRUksMkRBQUMsYUFBRCxPQUZKLGVBR0ksMkRBQUMsYUFBRCxxQkFDSSwyREFBQyxjQUFEO0FBQWdCLFNBQUssRUFBRTtBQUF2QixjQURKLENBSEosQ0FESjtBQVNILENBVkQ7O0FBWWVBLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2FyZWFzL01haW5QYWdlL1NlY3Rpb25zL0hvd0l0V29ya3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgTGF5b3V0LCBCdXR0b24sIFNwYWNlLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtUaXRsZVN0eWxlZCwgU3VidGl0bGVTdHlsZWQgYXMgU3VidGl0bGV9IGZyb20gJy4uL1NlY3Rpb25zLnN0eWxlZC9Vbml2ZXJzYWwnXG5cbmNvbnN0IERpdmlkZXJTdHlsZWQgPSBzdHlsZWQoRGl2aWRlcilgXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDM5LDc2LCAwLjc1KTtcbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKExheW91dClgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG5gXG5cbmNvbnN0IE1pbmlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbmBcblxuY29uc3QgU3VidGl0bGVTdHlsZWQgPSBzdHlsZWQoU3VidGl0bGUpYFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5gXG5cbmNvbnN0IEhvd0l0V29ya3M6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8VGl0bGVTdHlsZWQgbGV2ZWw9ezJ9PkhvdyBJdCBXb3JrczwvVGl0bGVTdHlsZWQ+XG4gICAgICAgICAgICA8RGl2aWRlclN0eWxlZC8+XG4gICAgICAgICAgICA8TWluaUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U3VidGl0bGVTdHlsZWQgbGV2ZWw9ezR9PkJ1eWluZzwvU3VidGl0bGVTdHlsZWQ+XG4gICAgICAgICAgICA8L01pbmlDb250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG93SXRXb3JrcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/areas/MainPage/Sections/HowItWorks.tsx\n");

/***/ }),

/***/ "./src/areas/MainPage/index.tsx":
/*!**************************************!*\
  !*** ./src/areas/MainPage/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Sections_Greetings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sections/Greetings */ \"./src/areas/MainPage/Sections/Greetings.tsx\");\n/* harmony import */ var _components_BackgroundPolygons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BackgroundPolygons */ \"./src/components/BackgroundPolygons.tsx\");\n/* harmony import */ var _Sections_HowItWorks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sections/HowItWorks */ \"./src/areas/MainPage/Sections/HowItWorks.tsx\");\n\n\n\n\n\n\n\nconst LayoutStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"]).withConfig({\n  displayName: \"MainPage__LayoutStyled\",\n  componentId: \"sc-1qylr5m-0\"\n})([\"background:rgba(0,0,0,0);\"]);\nconst FULL_SCREEN_WITH_BAR = {\n  height: \"100vh\",\n  marginTop: -90,\n  paddingTop: 90\n};\nconst FULL_SCREEN = {\n  height: \"100vh\"\n};\n\nconst Page = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: props.style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    span: 4\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    style: props.style,\n    span: 16\n  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    span: 4\n  }));\n};\n\nconst MainPage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LayoutStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BackgroundPolygons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {\n    style: FULL_SCREEN_WITH_BAR\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_Greetings__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {\n    style: FULL_SCREEN\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_HowItWorks__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvTWFpblBhZ2UvaW5kZXgudHN4PzhjNzQiXSwibmFtZXMiOlsiTGF5b3V0U3R5bGVkIiwic3R5bGVkIiwiTGF5b3V0IiwiRlVMTF9TQ1JFRU5fV0lUSF9CQVIiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwiRlVMTF9TQ1JFRU4iLCJQYWdlIiwicHJvcHMiLCJzdHlsZSIsImNoaWxkcmVuIiwiTWFpblBhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBR0Msd0RBQU0sQ0FBQ0MsMkNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpQ0FBbEI7QUFJQSxNQUFNQyxvQkFBb0IsR0FBRztBQUFDQyxRQUFNLEVBQUMsT0FBUjtBQUFpQkMsV0FBUyxFQUFFLENBQUMsRUFBN0I7QUFBaUNDLFlBQVUsRUFBRTtBQUE3QyxDQUE3QjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFDSCxRQUFNLEVBQUM7QUFBUixDQUFwQjs7QUFPQSxNQUFNSSxJQUF5QixHQUFJQyxLQUFELElBQVc7QUFDekMsc0JBQ0ksMkRBQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUVBLEtBQUssQ0FBQ0M7QUFBbEIsa0JBQ1EsMkRBQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxJQURSLGVBRVEsMkRBQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FBbEI7QUFBeUIsUUFBSSxFQUFFO0FBQS9CLEtBQ0tELEtBQUssQ0FBQ0UsUUFEWCxDQUZSLGVBS1EsMkRBQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxJQUxSLENBREo7QUFTSCxDQVZEOztBQVlBLE1BQU1DLFFBQWtCLEdBQUcsTUFBTTtBQUM3QixzQkFDSSwyREFBQyxZQUFELHFCQUNJLDJEQUFDLDBEQUFELE9BREosZUFFSSwyREFBQyxzRUFBRCxPQUZKLGVBR0ksMkRBQUMsSUFBRDtBQUFNLFNBQUssRUFBRVQ7QUFBYixrQkFDSSwyREFBQywyREFBRCxPQURKLENBSEosZUFNSSwyREFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFSTtBQUFiLGtCQUNJLDJEQUFDLDREQUFELE9BREosQ0FOSixDQURKO0FBYUgsQ0FkRDs7QUFnQmVLLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2FyZWFzL01haW5QYWdlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCwgUm93LCBDb2wsIERpdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEdyZWV0aW5ncyBmcm9tICcuL1NlY3Rpb25zL0dyZWV0aW5ncydcbmltcG9ydCBCYWNrZ3JvdW5kUG9seWdvbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrZ3JvdW5kUG9seWdvbnMnO1xuaW1wb3J0IFBhZ2VEaXZpZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZURpdmlkZXInXG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICcuL1NlY3Rpb25zL0hvd0l0V29ya3MnXG5cbmNvbnN0IExheW91dFN0eWxlZCA9IHN0eWxlZChMYXlvdXQpYFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG5gXG5cbmNvbnN0IEZVTExfU0NSRUVOX1dJVEhfQkFSID0ge2hlaWdodDpcIjEwMHZoXCIsIG1hcmdpblRvcDogLTkwLCBwYWRkaW5nVG9wOiA5MH1cbmNvbnN0IEZVTExfU0NSRUVOID0ge2hlaWdodDpcIjEwMHZoXCJ9XG5cbmludGVyZmFjZSBQYWdlUHJvcHMge1xuICAgIHN0eWxlOiBPYmplY3RcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBQYWdlOiBSZWFjdC5GQzxQYWdlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0vPlxuICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3Byb3BzLnN0eWxlfSBzcGFuPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9Lz5cbiAgICAgICAgPC9Sb3c+XG4gICAgKVxufVxuXG5jb25zdCBNYWluUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dFN0eWxlZD5cbiAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgPEJhY2tncm91bmRQb2x5Z29ucy8+XG4gICAgICAgICAgICA8UGFnZSBzdHlsZT17RlVMTF9TQ1JFRU5fV0lUSF9CQVJ9PlxuICAgICAgICAgICAgICAgIDxHcmVldGluZ3MvPlxuICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgPFBhZ2Ugc3R5bGU9e0ZVTExfU0NSRUVOfT5cbiAgICAgICAgICAgICAgICA8SG93SXRXb3Jrcy8+XG4gICAgICAgICAgICA8L1BhZ2U+XG5cbiAgICAgICAgPC9MYXlvdXRTdHlsZWQ+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/areas/MainPage/index.tsx\n");

/***/ }),

/***/ "./src/components/BackgroundPolygons.tsx":
/*!***********************************************!*\
  !*** ./src/components/BackgroundPolygons.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ \"react-particles-js\");\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst BackgroundPolygons = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    style: {\n      backgroundColor: \"#FFCB05\",\n      position: \"absolute\",\n      height: '100vh',\n      width: '100%',\n      marginTop: -90,\n      paddingTop: 90\n    },\n    params: {\n      \"particles\": {\n        \"number\": {\n          \"value\": 160,\n          \"density\": {\n            \"enable\": false\n          }\n        },\n        \"size\": {\n          \"value\": 3,\n          \"random\": true,\n          \"anim\": {\n            \"speed\": 4,\n            \"size_min\": 0.3\n          }\n        },\n        \"line_linked\": {\n          \"enable\": false\n        },\n        \"move\": {\n          \"random\": true,\n          \"speed\": 1\n        }\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundPolygons);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYWNrZ3JvdW5kUG9seWdvbnMudHN4PzY5ZTciXSwibmFtZXMiOlsiQmFja2dyb3VuZFBvbHlnb25zIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGtCQUE0QixHQUFHLE1BQU07QUFDdkMsc0JBQ0ksMkRBQUMseURBQUQ7QUFDSSxTQUFLLEVBQUU7QUFDSEMscUJBQWUsRUFBRSxTQURkO0FBRUhDLGNBQVEsRUFBRSxVQUZQO0FBR0hDLFlBQU0sRUFBRSxPQUhMO0FBSUhDLFdBQUssRUFBRSxNQUpKO0FBS0hDLGVBQVMsRUFBRSxDQUFDLEVBTFQ7QUFNSEMsZ0JBQVUsRUFBRTtBQU5ULEtBRFg7QUFTSSxVQUFNLEVBQUU7QUFDUixtQkFBYTtBQUNULGtCQUFVO0FBQ04sbUJBQVMsR0FESDtBQUVOLHFCQUFXO0FBQ1Asc0JBQVU7QUFESDtBQUZMLFNBREQ7QUFPVCxnQkFBUTtBQUNKLG1CQUFTLENBREw7QUFFSixvQkFBVSxJQUZOO0FBR0osa0JBQVE7QUFDSixxQkFBUyxDQURMO0FBRUosd0JBQVk7QUFGUjtBQUhKLFNBUEM7QUFlVCx1QkFBZTtBQUNYLG9CQUFVO0FBREMsU0FmTjtBQWtCVCxnQkFBUTtBQUNKLG9CQUFVLElBRE47QUFFSixtQkFBUztBQUZMO0FBbEJDO0FBREw7QUFUWixJQURKO0FBb0NILENBckNEOztBQXVDZU4saUZBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYWNrZ3JvdW5kUG9seWdvbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmNvbnN0IEJhY2tncm91bmRQb2x5Z29uczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhcnRpY2xlcyBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkNCMDVcIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTkwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDkwXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGFyYW1zPXt7IFxuICAgICAgICAgICAgXCJwYXJ0aWNsZXNcIjoge1xuICAgICAgICAgICAgICAgIFwibnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVuc2l0eVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInNpemVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiYW5pbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVfbWluXCI6IDAuM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic3BlZWRcIjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfX0vPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZFBvbHlnb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BackgroundPolygons.tsx\n");

/***/ }),

/***/ "./src/components/Navbar.styled.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar.styled.tsx ***!
  \******************************************/
/*! exports provided: StyledHeader, MenuLogoContainer, MenuStyled, NavBarItemMain, NavBarItem, LogoBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledHeader\", function() { return StyledHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuLogoContainer\", function() { return MenuLogoContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuStyled\", function() { return MenuStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBarItemMain\", function() { return NavBarItemMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBarItem\", function() { return NavBarItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoBackground\", function() { return LogoBackground; });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  Header\n} = antd__WEBPACK_IMPORTED_MODULE_0__[\"Layout\"];\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Header).withConfig({\n  displayName: \"Navbarstyled__StyledHeader\",\n  componentId: \"sc-11aozs7-0\"\n})([\"display:flex;padding:12px;padding-left:30px;padding-right:30px;height:90px;width:100%;position:sticky;z-index:5;top:0;transition:0.3s;\"]);\nconst MenuLogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"Navbarstyled__MenuLogoContainer\",\n  componentId: \"sc-11aozs7-1\"\n})([\"display:flex;flex-direction:row;flex:1;justify-content:space-between;width:100%;align-items:center;\"]);\nconst MenuStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]).withConfig({\n  displayName: \"Navbarstyled__MenuStyled\",\n  componentId: \"sc-11aozs7-2\"\n})([\"display:flex;flex-direction:row;flex:1;justify-content:flex-end;\"]);\nconst NavBarItemMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].Item).withConfig({\n  displayName: \"Navbarstyled__NavBarItemMain\",\n  componentId: \"sc-11aozs7-3\"\n})([\"font-family:'Mark Pro Bold';background-color:#00274c !important;color:#FFCB05;border-radius:15px;transition:0.3s;&:hover{color:#FFCB05;opacity:0.7;}\"]);\nconst NavBarItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(NavBarItemMain).withConfig({\n  displayName: \"Navbarstyled__NavBarItem\",\n  componentId: \"sc-11aozs7-4\"\n})([\"background-color:rgba(0,0,0,0) !important;color:#00274c !important;font-family:'Mark Pro Medium';\"]);\nconst LogoBackground = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({\n  displayName: \"Navbarstyled__LogoBackground\",\n  componentId: \"sc-11aozs7-5\"\n})([\"border-radius:15px;padding-left:15px;padding-right:15px;transition:0.3s;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuc3R5bGVkLnRzeD9kNjYzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkxheW91dCIsIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsIk1lbnVMb2dvQ29udGFpbmVyIiwiZGl2IiwiTWVudVN0eWxlZCIsIk1lbnUiLCJOYXZCYXJJdGVtTWFpbiIsIkl0ZW0iLCJOYXZCYXJJdGVtIiwiTG9nb0JhY2tncm91bmQiLCJhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFhQywyQ0FBbkI7QUFFTyxNQUFNQyxZQUFZLEdBQUdDLHdEQUFNLENBQUNILE1BQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4SUFBbEI7QUFhQSxNQUFNSSxpQkFBaUIsR0FBR0Qsd0RBQU0sQ0FBQ0UsR0FBVjtBQUFBO0FBQUE7QUFBQSwyR0FBdkI7QUFTQSxNQUFNQyxVQUFVLEdBQUdILHdEQUFNLENBQUNJLHlDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0VBQWhCO0FBT0EsTUFBTUMsY0FBYyxHQUFHTCx3REFBTSxDQUFDSSx5Q0FBSSxDQUFDRSxJQUFOLENBQVQ7QUFBQTtBQUFBO0FBQUEsNEpBQXBCO0FBV0EsTUFBTUMsVUFBVSxHQUFHUCx3REFBTSxDQUFDSyxjQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEseUdBQWhCO0FBTUEsTUFBTUcsY0FBYyxHQUFHUix3REFBTSxDQUFDUyxDQUFWO0FBQUE7QUFBQTtBQUFBLGdGQUFwQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci5zdHlsZWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkKEhlYWRlcilgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHotaW5kZXg6IDU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUxvZ29Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVTdHlsZWQgPSBzdHlsZWQoTWVudSlgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmBcblxuZXhwb3J0IGNvbnN0IE5hdkJhckl0ZW1NYWluID0gc3R5bGVkKE1lbnUuSXRlbSlgXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyBCb2xkJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNzRjICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGRkNCMDU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI0ZGQ0IwNTtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbmBcbmV4cG9ydCBjb25zdCBOYXZCYXJJdGVtID0gc3R5bGVkKE5hdkJhckl0ZW1NYWluKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDI3NGMgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvIE1lZGl1bSc7XG5gXG5cbmV4cG9ydCBjb25zdCBMb2dvQmFja2dyb3VuZCA9IHN0eWxlZC5hYFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.styled.tsx\n");

/***/ }),

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.styled */ \"./src/components/Navbar.styled.tsx\");\n\n\n\nconst Navbar = () => {\n  const [isAtTop, setIsAtTop] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const handleScroll = () => {\n      const currentScrollY = window.scrollY;\n\n      if (currentScrollY == 0) {\n        setIsAtTop(true);\n      }\n\n      if (currentScrollY > 0) {\n        setIsAtTop(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", handleScroll, {\n      passive: true\n    });\n    return () => window.removeEventListener(\"scroll\", handleScroll);\n  }, [isAtTop]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"StyledHeader\"], {\n    style: {\n      backgroundColor: isAtTop ? '#FFCB05' : 'rgba(255,255,255,0.85)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"MenuLogoContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"LogoBackground\"], {\n    style: {\n      visibility: isAtTop ? 'hidden' : 'visible',\n      opacity: isAtTop ? 0 : 1\n    },\n    href: '/'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    height: 42,\n    src: __webpack_require__(/*! ../../assets/images/logo.png */ \"./assets/images/logo.png\"),\n    alt: \"MasterSeats Logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"MenuStyled\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"NavBarItemMain\"], null, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: 20\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"NavBarItem\"], null, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__[\"NavBarItem\"], null, \"Sign Up\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzgwNWYiXSwibmFtZXMiOlsiTmF2YmFyIiwiaXNBdFRvcCIsInNldElzQXRUb3AiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJhY2tncm91bmRDb2xvciIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwicmVxdWlyZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxNQUFNO0FBQzNCLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekIsWUFBTUMsY0FBYyxHQUFHQyxNQUFNLENBQUNDLE9BQTlCOztBQUNBLFVBQUlGLGNBQWMsSUFBSSxDQUF0QixFQUF5QjtBQUNyQkosa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDSDs7QUFDRCxVQUFJSSxjQUFjLEdBQUcsQ0FBckIsRUFBd0I7QUFDcEJKLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7QUFDRixLQVJEOztBQVVBSyxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQyxFQUFnRDtBQUFFSyxhQUFPLEVBQUU7QUFBWCxLQUFoRDtBQUVBLFdBQU8sTUFBTUgsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sWUFBckMsQ0FBYjtBQUNELEdBZFEsRUFjTixDQUFDSixPQUFELENBZE0sQ0FBVDtBQWdCQSxzQkFDSSwyREFBQywyREFBRDtBQUFjLFNBQUssRUFBRTtBQUFDVyxxQkFBZSxFQUFFWCxPQUFPLEdBQUcsU0FBSCxHQUFlO0FBQXhDO0FBQXJCLGtCQUNJLDJEQUFDLGdFQUFELHFCQUNJLDJEQUFDLDZEQUFEO0FBQWdCLFNBQUssRUFBRTtBQUFDWSxnQkFBVSxFQUFFWixPQUFPLEdBQUcsUUFBSCxHQUFjLFNBQWxDO0FBQ0NhLGFBQU8sRUFBRWIsT0FBTyxHQUFHLENBQUgsR0FBTztBQUR4QixLQUF2QjtBQUV5QixRQUFJLEVBQUU7QUFGL0Isa0JBR0k7QUFBSyxVQUFNLEVBQUUsRUFBYjtBQUFpQixPQUFHLEVBQUVjLG1CQUFPLENBQUMsOERBQUQsQ0FBN0I7QUFBK0QsT0FBRyxFQUFFO0FBQXBFLElBSEosQ0FESixlQU1JLDJEQUFDLHlEQUFELHFCQUNJLDJEQUFDLDZEQUFELGVBREosZUFJSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUjtBQUFaLElBSkosZUFLSSwyREFBQyx5REFBRCxnQkFMSixlQVFJO0FBQUssU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBRTtBQUFSO0FBQVosSUFSSixlQVNJLDJEQUFDLHlEQUFELGtCQVRKLENBTkosQ0FESixDQURKO0FBd0JILENBM0NEOztBQTZDZWhCLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1N0eWxlZEhlYWRlciwgTWVudUxvZ29Db250YWluZXIsIExvZ29CYWNrZ3JvdW5kLCBNZW51U3R5bGVkLCBOYXZCYXJJdGVtTWFpbiwgTmF2QmFySXRlbX0gZnJvbSAnLi9OYXZiYXIuc3R5bGVkJ1xuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0F0VG9wLCBzZXRJc0F0VG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFkgPT0gMCkge1xuICAgICAgICAgICAgc2V0SXNBdFRvcCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiAwKSB7XG4gICAgICAgICAgICBzZXRJc0F0VG9wKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9LCBbaXNBdFRvcF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEhlYWRlciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNBdFRvcCA/ICcjRkZDQjA1JyA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuODUpJ319PlxuICAgICAgICAgICAgPE1lbnVMb2dvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMb2dvQmFja2dyb3VuZCBzdHlsZT17e3Zpc2liaWxpdHk6IGlzQXRUb3AgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc0F0VG9wID8gMCA6IDF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnLyd9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD17NDJ9IHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZycpfSBhbHQ9e1wiTWFzdGVyU2VhdHMgTG9nb1wifS8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvQmFja2dyb3VuZD5cbiAgICAgICAgICAgICAgICA8TWVudVN0eWxlZD5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhckl0ZW1NYWluPlxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICA8L05hdkJhckl0ZW1NYWluPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDIwfX0vPlxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFySXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2QmFySXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiA1fX0vPlxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFySXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZCYXJJdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudVN0eWxlZD5cbiAgICAgICAgICAgIDwvTWVudUxvZ29Db250YWluZXI+XG4gICAgICAgIDwvU3R5bGVkSGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/insanity/Documents/MasterSeats/masterseats-redone/client/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-particles-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYXJ0aWNsZXMtanNcIj8yZGJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXBhcnRpY2xlcy1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBhcnRpY2xlcy1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-particles-js\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });