webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_areas_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/areas/DashboardPage */ \"./src/areas/DashboardPage/index.tsx\");\n/* harmony import */ var _src_areas_OpenPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/areas/OpenPage */ \"./src/areas/OpenPage.tsx\");\n/* harmony import */ var _src_lib_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/UserContext */ \"./src/lib/UserContext.tsx\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Dashboard = () => {\n  _s();\n\n  const onFinish = () => {};\n\n  const {\n    api,\n    setToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_src_lib_UserContext__WEBPACK_IMPORTED_MODULE_4__[\"UserContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const email = localStorage.getItem('email');\n    const password = localStorage.getItem('password');\n\n    const seeIfLogin = async () => {\n      if (email !== null && email !== '') {\n        try {\n          const body = await api.login({\n            email: email,\n            password: password\n          });\n          setToken(body.data);\n        } catch (err) {\n          console.error(err);\n        }\n      } else {\n        Object(_src_areas_OpenPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('/');\n      }\n    };\n\n    seeIfLogin();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"MasterSeats \\u2022 Dashboard\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_areas_DashboardPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n_s(Dashboard, \"nbu7yp9YZ97iRYhgeK2T7+HqVmk=\");\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQudHN4PzQ2NGMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwib25GaW5pc2giLCJhcGkiLCJzZXRUb2tlbiIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImVtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhc3N3b3JkIiwic2VlSWZMb2dpbiIsImJvZHkiLCJsb2dpbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJPcGVuUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBbUIsR0FBRyxNQUFNO0FBQUE7O0FBQzlCLFFBQU1DLFFBQVEsR0FBRyxNQUFNLENBQUUsQ0FBekI7O0FBQ0EsUUFBTTtBQUFFQyxPQUFGO0FBQU9DO0FBQVAsTUFBb0JDLHdEQUFVLENBQUNDLGdFQUFELENBQXBDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQSxVQUFNQyxRQUFRLEdBQUdGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFqQjs7QUFDQSxVQUFNRSxVQUFVLEdBQUcsWUFBWTtBQUMzQixVQUFJSixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEVBQWhDLEVBQW9DO0FBQ2hDLFlBQUk7QUFDQSxnQkFBTUssSUFBSSxHQUFHLE1BQU1WLEdBQUcsQ0FBQ1csS0FBSixDQUFVO0FBQUNOLGlCQUFLLEVBQUVBLEtBQVI7QUFBZUcsb0JBQVEsRUFBRUE7QUFBekIsV0FBVixDQUFuQjtBQUNBUCxrQkFBUSxDQUFDUyxJQUFJLENBQUNFLElBQU4sQ0FBUjtBQUNILFNBSEQsQ0FHRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkMsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0g7QUFDSixPQVBELE1BT087QUFDSEcsMkVBQVEsQ0FBQyxHQUFELENBQVI7QUFDSDtBQUNKLEtBWEQ7O0FBYUFQLGNBQVU7QUFDYixHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBLHNCQUNJLHFJQUNJLDJEQUFDLGdEQUFELHFCQUNJLHlHQURKLENBREosZUFJSSwyREFBQyxnRUFBRCxPQUpKLENBREo7QUFRSCxDQS9CRDs7R0FBTVgsUzs7S0FBQUEsUztBQWlDU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRGFzaGJvYXJkUGFnZSBmcm9tICcuLi9zcmMvYXJlYXMvRGFzaGJvYXJkUGFnZSdcbmltcG9ydCBPcGVuUGFnZSBmcm9tICcuLi9zcmMvYXJlYXMvT3BlblBhZ2UnXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9zcmMvbGliL1VzZXJDb250ZXh0J1xuXG5jb25zdCBEYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IG9uRmluaXNoID0gKCkgPT4ge31cbiAgICBjb25zdCB7IGFwaSwgc2V0VG9rZW4gfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJylcbiAgICAgICAgY29uc3Qgc2VlSWZMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbWFpbCAhPT0gbnVsbCAmJiBlbWFpbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgYXBpLmxvZ2luKHtlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRva2VuKGJvZHkuZGF0YSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPcGVuUGFnZSgnLycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWVJZkxvZ2luKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TWFzdGVyU2VhdHMg4oCiIERhc2hib2FyZDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8RGFzaGJvYXJkUGFnZSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n");

/***/ })

})