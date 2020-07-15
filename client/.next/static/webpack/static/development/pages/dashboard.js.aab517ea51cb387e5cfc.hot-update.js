webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/areas/Sections/Sell.tsx":
/*!*************************************!*\
  !*** ./src/areas/Sections/Sell.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DashboardPage/DashboardPage.styled */ \"./src/areas/DashboardPage/DashboardPage.styled.tsx\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ \"./src/lib/index.ts\");\n/* harmony import */ var _DashboardPage_AddTicketModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DashboardPage/AddTicketModal */ \"./src/areas/DashboardPage/AddTicketModal.tsx\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst {\n  useBreakpoint\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"];\n\nconst Sell = () => {\n  _s();\n\n  const [visible, setVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const screens = useBreakpoint();\n  const [screenSize, setScreenSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    Object.entries(screens).filter(screen => !!screen[1]).map(screen => {\n      if (screen[0] !== _lib__WEBPACK_IMPORTED_MODULE_3__[\"ScreenSize\"][screenSize]) {\n        setScreenSize(_lib__WEBPACK_IMPORTED_MODULE_3__[\"ScreenSize\"][screen[0]]);\n      }\n    });\n  }, [screens]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_AddTicketModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    visible: visible,\n    onCancel: () => setVisibility(false)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"AddTicketContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"GenButton\"], {\n    onClick: () => setVisibility(true),\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"PlusCircleAdjustedOutline\"], null)\n  }, screenSize >= 1 ? \"Add Ticket\" : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    columns: [{\n      title: 'Game',\n      key: 'game',\n      dataIndex: 'game',\n      render: (text, data) => Object(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"returnEmojiString\"])(data.game)\n    }, {\n      title: 'Section',\n      key: 'section',\n      dataIndex: 'section'\n    }, {\n      title: 'Price ($)',\n      key: 'price',\n      dataIndex: 'price'\n    }, {\n      title: '',\n      key: 'remove',\n      dataIndex: 'ticketId',\n      render: (text, data) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          display: 'flex',\n          justifyContent: 'flex-end'\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"GenIconButton\"], {\n        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardPage_DashboardPage_styled__WEBPACK_IMPORTED_MODULE_2__[\"CloseAdjustedOutline\"], null),\n        onClick: () => {}\n      }, screenSize > 0 ? \"Remove\" : null))\n    }],\n    dataSource: DATA,\n    pagination: {\n      position: ['bottomCenter']\n    }\n  }));\n};\n\n_s(Sell, \"mCcIZmvXvUqWXmTLtNyoIBSVOWs=\", false, function () {\n  return [useBreakpoint];\n});\n\n_c = Sell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sell);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sell\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvU2VjdGlvbnMvU2VsbC50c3g/YjgyZiJdLCJuYW1lcyI6WyJ1c2VCcmVha3BvaW50IiwiR3JpZCIsIlNlbGwiLCJ2aXNpYmxlIiwic2V0VmlzaWJpbGl0eSIsInVzZVN0YXRlIiwic2NyZWVucyIsInNjcmVlblNpemUiLCJzZXRTY3JlZW5TaXplIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0IiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsInNjcmVlbiIsIm1hcCIsIlNjcmVlblNpemUiLCJ0aXRsZSIsImtleSIsImRhdGFJbmRleCIsInJlbmRlciIsInRleHQiLCJkYXRhIiwicmV0dXJuRW1vamlTdHJpbmciLCJnYW1lIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiREFUQSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTTtBQUFDQTtBQUFELElBQWtCQyx5Q0FBeEI7O0FBTUEsTUFBTUMsSUFBYyxHQUFHLE1BQU07QUFBQTs7QUFDekIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLGFBQVYsSUFBMkJDLHNEQUFRLENBQUMsS0FBRCxDQUF6QztBQUVBLFFBQU1DLE9BQU8sR0FBR04sYUFBYSxFQUE3QjtBQUNBLFFBQU0sQ0FBQ08sVUFBRCxFQUFhQyxhQUFiLElBQThCSCxzREFBUSxDQUFhSSxTQUFiLENBQTVDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxVQUFNLENBQUNDLE9BQVAsQ0FBZU4sT0FBZixFQUNDTyxNQURELENBQ1FDLE1BQU0sSUFBSSxDQUFDLENBQUNBLE1BQU0sQ0FBQyxDQUFELENBRDFCLEVBRUNDLEdBRkQsQ0FFS0QsTUFBTSxJQUFJO0FBQ1gsVUFBSUEsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjRSwrQ0FBVSxDQUFDVCxVQUFELENBQTVCLEVBQTBDO0FBQ3RDQyxxQkFBYSxDQUFDUSwrQ0FBVSxDQUFDRixNQUFNLENBQUMsQ0FBRCxDQUFQLENBQVgsQ0FBYjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUlEsRUFRTixDQUFDUixPQUFELENBUk0sQ0FBVDtBQVVBLHNCQUNJLDJEQUFDLDZFQUFELHFCQUNJLDJEQUFDLHFFQUFEO0FBQWdCLFdBQU8sRUFBRUgsT0FBekI7QUFDZ0IsWUFBUSxFQUFFLE1BQU1DLGFBQWEsQ0FBQyxLQUFEO0FBRDdDLElBREosZUFHSSwyREFBQyxzRkFBRCxxQkFDSSwyREFBQyw2RUFBRDtBQUFXLFdBQU8sRUFBRSxNQUFNQSxhQUFhLENBQUMsSUFBRCxDQUF2QztBQUErQyxRQUFJLGVBQUUsMkRBQUMsNkZBQUQ7QUFBckQsS0FDS0csVUFBVSxJQUFJLENBQWQsR0FBa0IsWUFBbEIsR0FBaUMsSUFEdEMsQ0FESixDQUhKLGVBUUksMkRBQUMsMENBQUQ7QUFBTyxXQUFPLEVBQUUsQ0FDWjtBQUNJVSxXQUFLLEVBQUUsTUFEWDtBQUVJQyxTQUFHLEVBQUUsTUFGVDtBQUdJQyxlQUFTLEVBQUUsTUFIZjtBQUlJQyxZQUFNLEVBQUUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEtBQWdCQyw2RkFBaUIsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFOO0FBSjdDLEtBRFksRUFPWjtBQUNJUCxXQUFLLEVBQUUsU0FEWDtBQUVJQyxTQUFHLEVBQUUsU0FGVDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQVBZLEVBWVo7QUFDSUYsV0FBSyxFQUFFLFdBRFg7QUFFSUMsU0FBRyxFQUFFLE9BRlQ7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FaWSxFQWlCWjtBQUNJRixXQUFLLEVBQUUsRUFEWDtBQUVJQyxTQUFHLEVBQUUsUUFGVDtBQUdJQyxlQUFTLEVBQUUsVUFIZjtBQUlJQyxZQUFNLEVBQUUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLGtCQUNKO0FBQUssYUFBSyxFQUFFO0FBQUNHLGlCQUFPLEVBQUUsTUFBVjtBQUFrQkMsd0JBQWMsRUFBRTtBQUFsQztBQUFaLHNCQUNJLDJEQUFDLGlGQUFEO0FBQWUsWUFBSSxlQUFFLDJEQUFDLHdGQUFELE9BQXJCO0FBQStDLGVBQU8sRUFBRSxNQUFNLENBQUU7QUFBaEUsU0FDS25CLFVBQVUsR0FBRyxDQUFiLEdBQWlCLFFBQWpCLEdBQTRCLElBRGpDLENBREo7QUFMUixLQWpCWSxDQUFoQjtBQTZCRyxjQUFVLEVBQUVvQixJQTdCZjtBQTZCcUIsY0FBVSxFQUFFO0FBQUVDLGNBQVEsRUFBRSxDQUFDLGNBQUQ7QUFBWjtBQTdCakMsSUFSSixDQURKO0FBeUNILENBekREOztHQUFNMUIsSTtVQUdjRixhOzs7S0FIZEUsSTtBQTJEU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvYXJlYXMvU2VjdGlvbnMvU2VsbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7VGFibGUsIE1vZGFsLCBHcmlkfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHtDb250YWluZXIsIENsb3NlQWRqdXN0ZWRPdXRsaW5lLCByZXR1cm5FbW9qaVN0cmluZywgR2VuSWNvbkJ1dHRvbiwgR2VuQnV0dG9uLCBBZGRUaWNrZXRDb250YWluZXIsIFBsdXNDaXJjbGVBZGp1c3RlZE91dGxpbmV9IGZyb20gJy4uL0Rhc2hib2FyZFBhZ2UvRGFzaGJvYXJkUGFnZS5zdHlsZWQnXG5pbXBvcnQge01pY2hpZ2FuRm9vdGJhbGxHYW1lLCBUaWNrZXQsIFRpY2tldFN0YXR1c30gZnJvbSAnLi4vLi4vLi4vYXBpJ1xuaW1wb3J0IHtTY3JlZW5TaXplfSBmcm9tICcuLi8uLi9saWInXG5pbXBvcnQgQWRkVGlja2V0TW9kYWwgZnJvbSAnLi4vRGFzaGJvYXJkUGFnZS9BZGRUaWNrZXRNb2RhbCdcblxuY29uc3Qge3VzZUJyZWFrcG9pbnR9ID0gR3JpZFxuXG5pbnRlcmZhY2UgU2VsbFByb3BzIHtcbiAgICB0aWNrZXRzOiBUaWNrZXRbXVxufVxuXG5jb25zdCBTZWxsOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHNjcmVlbnMgPSB1c2VCcmVha3BvaW50KClcbiAgICBjb25zdCBbc2NyZWVuU2l6ZSwgc2V0U2NyZWVuU2l6ZV0gPSB1c2VTdGF0ZTxTY3JlZW5TaXplPih1bmRlZmluZWQpXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc2NyZWVucylcbiAgICAgICAgLmZpbHRlcihzY3JlZW4gPT4gISFzY3JlZW5bMV0pXG4gICAgICAgIC5tYXAoc2NyZWVuID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JlZW5bMF0gIT09IFNjcmVlblNpemVbc2NyZWVuU2l6ZV0pIHtcbiAgICAgICAgICAgICAgICBzZXRTY3JlZW5TaXplKFNjcmVlblNpemVbc2NyZWVuWzBdXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbc2NyZWVuc10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEFkZFRpY2tldE1vZGFsIHZpc2libGU9e3Zpc2libGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaXNpYmlsaXR5KGZhbHNlKX0vPlxuICAgICAgICAgICAgPEFkZFRpY2tldENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8R2VuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFZpc2liaWxpdHkodHJ1ZSl9IGljb249ezxQbHVzQ2lyY2xlQWRqdXN0ZWRPdXRsaW5lIC8+fT5cbiAgICAgICAgICAgICAgICAgICAge3NjcmVlblNpemUgPj0gMSA/IFwiQWRkIFRpY2tldFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0dlbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvQWRkVGlja2V0Q29udGFpbmVyPlxuICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR2FtZScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2dhbWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6ICdnYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgZGF0YSkgPT4gcmV0dXJuRW1vamlTdHJpbmcoZGF0YS5nYW1lKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiAnc2VjdGlvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQcmljZSAoJCknLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogJ3RpY2tldElkJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgZGF0YSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2VuSWNvbkJ1dHRvbiBpY29uPXs8Q2xvc2VBZGp1c3RlZE91dGxpbmUgLz59IG9uQ2xpY2s9eygpID0+IHt9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjcmVlblNpemUgPiAwID8gXCJSZW1vdmVcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HZW5JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfSBkYXRhU291cmNlPXtEQVRBfSBwYWdpbmF0aW9uPXt7IHBvc2l0aW9uOiBbJ2JvdHRvbUNlbnRlciddIH19IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/areas/Sections/Sell.tsx\n");

/***/ })

})