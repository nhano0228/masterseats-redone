webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_theme_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/theme.less */ \"./assets/theme.less\");\n/* harmony import */ var _assets_theme_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_theme_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-media-query */ \"./node_modules/styled-media-query/dist/styled-media-query.es.js\");\n/* harmony import */ var _src_lib_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/UserContext */ \"./src/lib/UserContext.tsx\");\n\n\n\n\n\n\n\nconst GlobalInjection = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"]`\n    .ant-table-cell {\n        font-family: 'Mark Pro Bold';\n    }\n\n    .ant-table {\n        background: rgba(0,0,0,0);\n        color: #000;\n    }\n\n    .ant-table tbody > tr > th {\n        border-bottom: 0px solid #DAE2EF;\n    }\n\n    tbody {\n        background: rgba(0,0,0,0);\n    }\n    .ant-menu {\n        background: rgba(0,0,0,0);\n    }\n    .ant-menu-vertical {\n        border-right: 0px solid #fff;\n    }\n\n    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {\n        background-color: rgba(0,0,0,0);\n        border-radius: 15px;\n    }\n\n    h1.ant-typography {\n        color: rgba(0,39,76, 0.85);\n    }\n\n    h2.ant-typography {\n        color: rgba(0,39,76, 0.85);\n    }\n\n    h3.ant-typography {\n        color: rgba(0,39,76, 0.85);\n    }\n\n    h4.ant-typography {\n        color: rgba(0,39,76, 0.65);\n    }\n\n    .ant-carousel .slick-dots li button {\n        background: rgb(0,39,76);\n    }\n\n    .ant-carousel .slick-dots li.slick-active button {\n        background: rgb(0,39,76);\n    }\n\n    .ant-btn {\n        font-family: 'Mark Pro Medium';\n        border: none;\n        border-radius: 15px;\n        padding: 15px;\n        padding-left: 20px;\n        padding-right: 20px;\n        height: auto !important;\n        display: inline-block;\n        margin-left:auto;\n        margin-right:auto;\n\n        ${styled_media_query__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lessThan(\"small\")`\n            padding-top: 12px !important;\n            padding-bottom: 12px !important;\n        `}\n    }\n\n    .ant-card-head {\n        display: -webkit-flex;\n        justify-content: center;\n        padding-top: 16px;\n        padding-bottom: 18px;\n        border-bottom-width: 0px;\n    }\n\n    .ant-form-item-has-error .ant-input:focus {\n        box-shadow: none;\n    }\n\n    .ant-form-item-label {\n        font-family: 'Mark Pro';\n        font-weight: bold;\n        opacity: 0.8;\n    }\n\n    .ant-input {\n        font-family: 'Mark Pro';\n        border: none;\n        background-color: rgba(0,0,0,0) !important;\n        color: #000;\n        padding: 2px 11px;\n        border-bottom: 1px solid #DAE2EF;\n\n        &:focus {\n            box-shadow: none;\n        }\n    }\n\n    .ant-tabs-top > .ant-tabs-nav::before {\n        border-bottom: 0px;\n    }\n\n    .ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {\n        font-size: 20px;\n    }\n\n`;\n_c = GlobalInjection;\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"icon\",\n    type: \"image/png\",\n    href: \"/favicon.png\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"NextSeo\"], {\n    title: \"MasterSeats\",\n    description: \"A marketplace for all student tickets!\",\n    openGraph: {\n      url: 'https://masterseats.com',\n      title: 'MasterSeats',\n      description: `A marketplace for all student tickets!`,\n      site_name: 'MasterSeats'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalInjection, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_lib_UserContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)));\n}\n_c2 = App;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"GlobalInjection\");\n$RefreshReg$(_c2, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkdsb2JhbEluamVjdGlvbiIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibWVkaWEiLCJsZXNzVGhhbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzaXRlX25hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsZUFBZSxHQUFHQyxtRUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBaUVoQ0MsMERBQUssQ0FBQ0MsUUFBTixDQUFlLE9BQWYsQ0FBd0I7OztTQUd4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcEVWO0tBQU1ILGU7QUFnSFMsU0FBU0ksR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ2xELHNCQUNJLHFJQUNJLDJEQUFDLGdEQUFELHFCQUNJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFdBQXRCO0FBQWtDLFFBQUksRUFBQztBQUF2QyxJQURKLENBREosZUFJSSwyREFBQyxnREFBRDtBQUNJLFNBQUssRUFBQyxhQURWO0FBRUksZUFBVyxFQUFDLHdDQUZoQjtBQUdJLGFBQVMsRUFBRTtBQUNQQyxTQUFHLEVBQUUseUJBREU7QUFFUEMsV0FBSyxFQUFFLGFBRkE7QUFHUEMsaUJBQVcsRUFBRyx3Q0FIUDtBQUlQQyxlQUFTLEVBQUU7QUFKSjtBQUhmLElBSkosZUFjSSwyREFBQyxlQUFELE9BZEosZUFlSSwyREFBQyw0REFBRCxxQkFDSSwyREFBQyxTQUFELEVBQWVKLFNBQWYsQ0FESixDQWZKLENBREo7QUFxQkg7TUF0QnVCRixHIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICcuLi9hc3NldHMvdGhlbWUubGVzcydcbmltcG9ydCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCBtZWRpYSBmcm9tICdzdHlsZWQtbWVkaWEtcXVlcnknXG5pbXBvcnQgVXNlclByb3ZpZGVyIGZyb20gJy4uL3NyYy9saWIvVXNlckNvbnRleHQnXG5cbmNvbnN0IEdsb2JhbEluamVjdGlvbiA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgIC5hbnQtdGFibGUtY2VsbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8gQm9sZCc7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUgdGJvZHkgPiB0ciA+IHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNEQUUyRUY7XG4gICAgfVxuXG4gICAgdGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIH1cbiAgICAuYW50LW1lbnUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIH1cbiAgICAuYW50LW1lbnUtdmVydGljYWwge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjZmZmO1xuICAgIH1cblxuICAgIC5hbnQtbWVudTpub3QoLmFudC1tZW51LWhvcml6b250YWwpIC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG5cbiAgICBoMS5hbnQtdHlwb2dyYXBoeSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMzksNzYsIDAuODUpO1xuICAgIH1cblxuICAgIGgyLmFudC10eXBvZ3JhcGh5IHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwzOSw3NiwgMC44NSk7XG4gICAgfVxuXG4gICAgaDMuYW50LXR5cG9ncmFwaHkge1xuICAgICAgICBjb2xvcjogcmdiYSgwLDM5LDc2LCAwLjg1KTtcbiAgICB9XG5cbiAgICBoNC5hbnQtdHlwb2dyYXBoeSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMzksNzYsIDAuNjUpO1xuICAgIH1cblxuICAgIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsMzksNzYpO1xuICAgIH1cblxuICAgIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLDM5LDc2KTtcbiAgICB9XG5cbiAgICAuYW50LWJ0biB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8gTWVkaXVtJztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuXG4gICAgICAgICR7bWVkaWEubGVzc1RoYW4oXCJzbWFsbFwiKWBcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBgfVxuICAgIH1cblxuICAgIC5hbnQtY2FyZC1oZWFkIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gICAgfVxuXG4gICAgLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yIC5hbnQtaW5wdXQ6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDJweCAxMXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RBRTJFRjtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LXRhYnMtdG9wID4gLmFudC10YWJzLW5hdjo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIC5hbnQtdGFicy1sYXJnZSA+IC5hbnQtdGFicy1uYXYgLmFudC10YWJzLXRhYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5leHRTZW8gXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJNYXN0ZXJTZWF0c1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBIG1hcmtldHBsYWNlIGZvciBhbGwgc3R1ZGVudCB0aWNrZXRzIVwiXG4gICAgICAgICAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWFzdGVyc2VhdHMuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNYXN0ZXJTZWF0cycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQSBtYXJrZXRwbGFjZSBmb3IgYWxsIHN0dWRlbnQgdGlja2V0cyFgLFxuICAgICAgICAgICAgICAgICAgICBzaXRlX25hbWU6ICdNYXN0ZXJTZWF0cycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8R2xvYmFsSW5qZWN0aW9uLz5cbiAgICAgICAgICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Vc2VyUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cgeyBhbmFseXRpY3M6IGFueTsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/lib/UserContext.tsx":
/*!*********************************!*\
  !*** ./src/lib/UserContext.tsx ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ \"./api/index.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  currentToken: null,\n  currentUser: null\n});\n\nclass UserProvider extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"addToken\", token => {\n      console.log('This is current: ' + token);\n      this.setState({\n        currentToken: token\n      });\n    });\n\n    _defineProperty(this, \"state\", {\n      loading: false,\n      currentToken: null,\n      currentUser: null,\n      addToken: this.addToken\n    });\n\n    _defineProperty(this, \"componentDidMount\", async () => {\n      if (this.state.currentUser !== null) {\n        try {\n          const body = await new _api__WEBPACK_IMPORTED_MODULE_1__[\"DefaultApi\"]().login({\n            email: this.state.currentUser.email,\n            password: this.state.currentUser.password\n          });\n          this.addToken(body.data);\n        } catch (err) {\n          console.error(err);\n        }\n      }\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {\n      value: this.state\n    }, this.props.children);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProvider);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL1VzZXJDb250ZXh0LnRzeD9kNzg0Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImN1cnJlbnRUb2tlbiIsImN1cnJlbnRVc2VyIiwiVXNlclByb3ZpZGVyIiwiQ29tcG9uZW50IiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiYWRkVG9rZW4iLCJzdGF0ZSIsImJvZHkiLCJEZWZhdWx0QXBpIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsImVyciIsImVycm9yIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSUE7QUFPTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUF3QjtBQUM1REMsY0FBWSxFQUFFLElBRDhDO0FBRTVEQyxhQUFXLEVBQUU7QUFGK0MsQ0FBeEIsQ0FBakM7O0FBSVAsTUFBTUMsWUFBTixTQUEyQkMsK0NBQTNCLENBQXFDO0FBQUE7QUFBQTs7QUFBQSxzQ0FDckJDLEtBQUQsSUFBbUI7QUFDMUJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFzQkYsS0FBbEM7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFBQ1Asb0JBQVksRUFBRUk7QUFBZixPQUFkO0FBQ0gsS0FKZ0M7O0FBQUEsbUNBTXpCO0FBQ0pJLGFBQU8sRUFBRSxLQURMO0FBRUpSLGtCQUFZLEVBQUUsSUFGVjtBQUdKQyxpQkFBVyxFQUFFLElBSFQ7QUFJSlEsY0FBUSxFQUFFLEtBQUtBO0FBSlgsS0FOeUI7O0FBQUEsK0NBYWIsWUFBWTtBQUM1QixVQUFJLEtBQUtDLEtBQUwsQ0FBV1QsV0FBWCxLQUEyQixJQUEvQixFQUFxQztBQUNqQyxZQUFJO0FBQ0EsZ0JBQU1VLElBQUksR0FBRyxNQUFNLElBQUlDLCtDQUFKLEdBQWlCQyxLQUFqQixDQUF1QjtBQUFDQyxpQkFBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV1QsV0FBWCxDQUF1QmEsS0FBL0I7QUFBc0NDLG9CQUFRLEVBQUUsS0FBS0wsS0FBTCxDQUFXVCxXQUFYLENBQXVCYztBQUF2RSxXQUF2QixDQUFuQjtBQUNBLGVBQUtOLFFBQUwsQ0FBY0UsSUFBSSxDQUFDSyxJQUFuQjtBQUNILFNBSEQsQ0FHRSxPQUFPQyxHQUFQLEVBQVk7QUFDVlosaUJBQU8sQ0FBQ2EsS0FBUixDQUFjRCxHQUFkO0FBQ0g7QUFDSjtBQUNKLEtBdEJnQztBQUFBOztBQXdCakNFLFFBQU0sR0FBRztBQUNMLHdCQUNBLDJEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRSxLQUFLVDtBQUFsQyxPQUNLLEtBQUtVLEtBQUwsQ0FBV0MsUUFEaEIsQ0FEQTtBQUtIOztBQTlCZ0M7O0FBZ0N0Qm5CLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9Vc2VyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7d2l0aFJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBOZXh0UGFnZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQge1VzZXIsIERlZmF1bHRBcGl9IGZyb20gJy4uLy4uL2FwaSdcblxuaW50ZXJmYWNlIENvbnRleHRQcm9wcyB7XG4gIGN1cnJlbnRUb2tlbj86IHN0cmluZyxcbiAgY3VycmVudFVzZXI/OiBVc2VyXG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGFydGlhbDxDb250ZXh0UHJvcHM+Pih7XG4gICAgY3VycmVudFRva2VuOiBudWxsLFxuICAgIGN1cnJlbnRVc2VyOiBudWxsXG59KTtcbmNsYXNzIFVzZXJQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgYWRkVG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBjdXJyZW50OiAnICsgdG9rZW4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRUb2tlbjogdG9rZW59KVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgY3VycmVudFRva2VuOiBudWxsLFxuICAgICAgICBjdXJyZW50VXNlcjogbnVsbCxcbiAgICAgICAgYWRkVG9rZW46IHRoaXMuYWRkVG9rZW5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IG5ldyBEZWZhdWx0QXBpKCkubG9naW4oe2VtYWlsOiB0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLmVtYWlsLCBwYXNzd29yZDogdGhpcy5zdGF0ZS5jdXJyZW50VXNlci5wYXNzd29yZH0pXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihib2R5LmRhdGEpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm92aWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/UserContext.tsx\n");

/***/ })

})