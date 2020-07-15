webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/areas/DashboardPage/BuySellTab.tsx":
/*!************************************************!*\
  !*** ./src/areas/DashboardPage/BuySellTab.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Sections_Sell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sections/Sell */ \"./src/areas/Sections/Sell.tsx\");\n/* harmony import */ var _Sections_Buy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sections/Buy */ \"./src/areas/Sections/Buy.tsx\");\n/* harmony import */ var _Sections_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/Profile */ \"./src/areas/Sections/Profile.tsx\");\n/* harmony import */ var _lib_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/UserContext */ \"./src/lib/UserContext.tsx\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst {\n  TabPane\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"];\n\nconst BuySellTab = () => {\n  _s();\n\n  const {\n    api\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_lib_UserContext__WEBPACK_IMPORTED_MODULE_5__[\"UserContext\"]);\n  const [tickets, setTickets] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [ticketWallet, setTicketWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const getTickets = async sortTicketBody => {\n    const body = await api.sortTickets(sortTicketBody);\n    setTickets(body.data);\n  };\n\n  const getTicketWallet = async () => {\n    const body = await api.getTicketWallet();\n    setTicketWallet(body.data);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getTickets();\n    getTicketWallet();\n  }, [tickets, ticketWallet]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], {\n    style: {\n      borderBottom: 0,\n      fontFamily: 'Mark Pro Bold',\n      textAlign: 'center'\n    },\n    defaultActiveKey: \"1\",\n    centered: true,\n    size: \"large\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {\n    tab: \"Buy\",\n    key: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_Buy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    tickets: tickets,\n    getTickets: getTicketWallet\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {\n    tab: \"Sell\",\n    key: \"2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_Sell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    tickets: ticketWallet\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {\n    tab: \"Profile\",\n    key: \"3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_Profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\n_s(BuySellTab, \"b7uLFCkm6Tl2WouhqPm3jfuySns=\");\n\n_c = BuySellTab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuySellTab);\n\nvar _c;\n\n$RefreshReg$(_c, \"BuySellTab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvRGFzaGJvYXJkUGFnZS9CdXlTZWxsVGFiLnRzeD80YmYwIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiQnV5U2VsbFRhYiIsImFwaSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInRpY2tldHMiLCJzZXRUaWNrZXRzIiwidXNlU3RhdGUiLCJ0aWNrZXRXYWxsZXQiLCJzZXRUaWNrZXRXYWxsZXQiLCJnZXRUaWNrZXRzIiwic29ydFRpY2tldEJvZHkiLCJib2R5Iiwic29ydFRpY2tldHMiLCJkYXRhIiwiZ2V0VGlja2V0V2FsbGV0IiwidXNlRWZmZWN0IiwiYm9yZGVyQm90dG9tIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFjQyx5Q0FBcEI7O0FBRUEsTUFBTUMsVUFBb0IsR0FBRyxNQUFNO0FBQUE7O0FBQy9CLFFBQU07QUFBQ0M7QUFBRCxNQUFRQyx3REFBVSxDQUFDQyw0REFBRCxDQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCQyxzREFBUSxDQUFXLEVBQVgsQ0FBdEM7QUFDQSxRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ0Ysc0RBQVEsQ0FBVyxFQUFYLENBQWhEOztBQUVBLFFBQU1HLFVBQVUsR0FBRyxNQUFPQyxjQUFQLElBQTRDO0FBQzNELFVBQU1DLElBQUksR0FBRyxNQUFNVixHQUFHLENBQUNXLFdBQUosQ0FBZ0JGLGNBQWhCLENBQW5CO0FBQ0FMLGNBQVUsQ0FBQ00sSUFBSSxDQUFDRSxJQUFOLENBQVY7QUFDSCxHQUhEOztBQUlBLFFBQU1DLGVBQWUsR0FBRyxZQUFZO0FBQ2hDLFVBQU1ILElBQUksR0FBRyxNQUFNVixHQUFHLENBQUNhLGVBQUosRUFBbkI7QUFDQU4sbUJBQWUsQ0FBQ0csSUFBSSxDQUFDRSxJQUFOLENBQWY7QUFDSCxHQUhEOztBQUtBRSx5REFBUyxDQUFDLE1BQU07QUFDWk4sY0FBVTtBQUNWSyxtQkFBZTtBQUNsQixHQUhRLEVBR04sQ0FBQ1YsT0FBRCxFQUFVRyxZQUFWLENBSE0sQ0FBVDtBQUtBLHNCQUNJLDJEQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQ1RTLGtCQUFZLEVBQUUsQ0FETDtBQUVUQyxnQkFBVSxFQUFFLGVBRkg7QUFHVEMsZUFBUyxFQUFFO0FBSEYsS0FBYjtBQUlHLG9CQUFnQixFQUFDLEdBSnBCO0FBSXdCLFlBQVEsRUFBRSxJQUpsQztBQUl3QyxRQUFJLEVBQUM7QUFKN0Msa0JBS0ksMkRBQUMsT0FBRDtBQUFTLE9BQUcsRUFBQyxLQUFiO0FBQW1CLE9BQUcsRUFBQztBQUF2QixrQkFDSSwyREFBQyxxREFBRDtBQUFZLFdBQU8sRUFBRWQsT0FBckI7QUFBOEIsY0FBVSxFQUFFVTtBQUExQyxJQURKLENBTEosZUFRSSwyREFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLE1BQWI7QUFBb0IsT0FBRyxFQUFDO0FBQXhCLGtCQUNJLDJEQUFDLHNEQUFEO0FBQWEsV0FBTyxFQUFFUDtBQUF0QixJQURKLENBUkosZUFXSSwyREFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLFNBQWI7QUFBdUIsT0FBRyxFQUFDO0FBQTNCLGtCQUNJLDJEQUFDLHlEQUFELE9BREosQ0FYSixDQURKO0FBaUJILENBcENEOztHQUFNUCxVOztLQUFBQSxVO0FBc0NTQSx5RUFBZiIsImZpbGUiOiIuL3NyYy9hcmVhcy9EYXNoYm9hcmRQYWdlL0J1eVNlbGxUYWIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlbGxTZWN0aW9uIGZyb20gJy4uL1NlY3Rpb25zL1NlbGwnXG5pbXBvcnQgQnV5U2VjdGlvbiBmcm9tICcuLi9TZWN0aW9ucy9CdXknXG5pbXBvcnQgUHJvZmlsZVNlY3Rpb24gZnJvbSAnLi4vU2VjdGlvbnMvUHJvZmlsZSdcbmltcG9ydCB7VGlja2V0LCBTb3J0VGlja2V0c0JvZHl9IGZyb20gJy4uLy4uLy4uL2FwaSdcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gJy4uLy4uL2xpYi9Vc2VyQ29udGV4dCdcblxuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xuXG5jb25zdCBCdXlTZWxsVGFiOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7YXBpfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gICAgY29uc3QgW3RpY2tldHMsIHNldFRpY2tldHNdID0gdXNlU3RhdGU8VGlja2V0W10+KFtdKVxuICAgIGNvbnN0IFt0aWNrZXRXYWxsZXQsIHNldFRpY2tldFdhbGxldF0gPSB1c2VTdGF0ZTxUaWNrZXRbXT4oW10pXG5cbiAgICBjb25zdCBnZXRUaWNrZXRzID0gYXN5bmMgKHNvcnRUaWNrZXRCb2R5PzogU29ydFRpY2tldHNCb2R5KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCBhcGkuc29ydFRpY2tldHMoc29ydFRpY2tldEJvZHkpXG4gICAgICAgIHNldFRpY2tldHMoYm9keS5kYXRhKVxuICAgIH1cbiAgICBjb25zdCBnZXRUaWNrZXRXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCBhcGkuZ2V0VGlja2V0V2FsbGV0KClcbiAgICAgICAgc2V0VGlja2V0V2FsbGV0KGJvZHkuZGF0YSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRUaWNrZXRzKClcbiAgICAgICAgZ2V0VGlja2V0V2FsbGV0KClcbiAgICB9LCBbdGlja2V0cywgdGlja2V0V2FsbGV0XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJzIHN0eWxlPXt7XG4gICAgICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnTWFyayBQcm8gQm9sZCcsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIxXCIgY2VudGVyZWQ9e3RydWV9IHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQnV5XCIga2V5PVwiMVwiPlxuICAgICAgICAgICAgICAgIDxCdXlTZWN0aW9uIHRpY2tldHM9e3RpY2tldHN9IGdldFRpY2tldHM9e2dldFRpY2tldFdhbGxldH0vPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiU2VsbFwiIGtleT1cIjJcIj5cbiAgICAgICAgICAgICAgICA8U2VsbFNlY3Rpb24gdGlja2V0cz17dGlja2V0V2FsbGV0fSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiUHJvZmlsZVwiIGtleT1cIjNcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZVNlY3Rpb24gLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPC9UYWJzPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV5U2VsbFRhYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/areas/DashboardPage/BuySellTab.tsx\n");

/***/ })

})