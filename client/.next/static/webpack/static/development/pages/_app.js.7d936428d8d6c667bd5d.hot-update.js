webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/lib/UserContext.tsx":
/*!*********************************!*\
  !*** ./src/lib/UserContext.tsx ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ \"./api/index.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  currentToken: null,\n  currentUser: null,\n  setToken: null,\n  api: null\n});\n\nclass UserProvider extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"setToken\", async token => {\n      if (token === null) {\n        this.setState({\n          api: new _api__WEBPACK_IMPORTED_MODULE_1__[\"DefaultApi\"](),\n          currentToken: null,\n          currentUser: null\n        });\n        return;\n      }\n\n      try {\n        const api = new _api__WEBPACK_IMPORTED_MODULE_1__[\"DefaultApi\"]({\n          accessToken: token\n        });\n        const user = await api.getUser();\n        this.setState({\n          api,\n          currentToken: token,\n          currentUser: user\n        });\n      } catch (err) {\n        console.error(err);\n      }\n    });\n\n    _defineProperty(this, \"state\", {\n      currentToken: null,\n      currentUser: null,\n      setToken: this.setToken,\n      api: new _api__WEBPACK_IMPORTED_MODULE_1__[\"DefaultApi\"]()\n    });\n\n    _defineProperty(this, \"componentDidMount\", async () => {\n      if (this.state.currentUser !== null) {\n        try {\n          const body = await this.state.api.login({\n            email: this.state.currentUser.email,\n            password: this.state.currentUser.password\n          });\n          this.setToken(body.data);\n        } catch (err) {\n          console.error(err);\n        }\n      }\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {\n      value: this.state\n    }, this.props.children);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProvider);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL1VzZXJDb250ZXh0LnRzeD9kNzg0Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImN1cnJlbnRUb2tlbiIsImN1cnJlbnRVc2VyIiwic2V0VG9rZW4iLCJhcGkiLCJVc2VyUHJvdmlkZXIiLCJDb21wb25lbnQiLCJ0b2tlbiIsInNldFN0YXRlIiwiRGVmYXVsdEFwaSIsImFjY2Vzc1Rva2VuIiwidXNlciIsImdldFVzZXIiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0ZSIsImJvZHkiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSUE7QUFTTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUF3QjtBQUM1REMsY0FBWSxFQUFFLElBRDhDO0FBRTVEQyxhQUFXLEVBQUUsSUFGK0M7QUFHNURDLFVBQVEsRUFBRSxJQUhrRDtBQUk1REMsS0FBRyxFQUFFO0FBSnVELENBQXhCLENBQWpDOztBQU1QLE1BQU1DLFlBQU4sU0FBMkJDLCtDQUEzQixDQUFxQztBQUFBO0FBQUE7O0FBQUEsc0NBQ3RCLE1BQU9DLEtBQVAsSUFBZ0M7QUFDdkMsVUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDaEIsYUFBS0MsUUFBTCxDQUFjO0FBQUNKLGFBQUcsRUFBRSxJQUFJSywrQ0FBSixFQUFOO0FBQXdCUixzQkFBWSxFQUFFLElBQXRDO0FBQTRDQyxxQkFBVyxFQUFFO0FBQXpELFNBQWQ7QUFDQTtBQUNIOztBQUNELFVBQUk7QUFDQSxjQUFNRSxHQUFHLEdBQUcsSUFBSUssK0NBQUosQ0FBZTtBQUFDQyxxQkFBVyxFQUFFSDtBQUFkLFNBQWYsQ0FBWjtBQUNBLGNBQU1JLElBQUksR0FBRyxNQUFNUCxHQUFHLENBQUNRLE9BQUosRUFBbkI7QUFDQSxhQUFLSixRQUFMLENBQWM7QUFBQ0osYUFBRDtBQUFNSCxzQkFBWSxFQUFFTSxLQUFwQjtBQUEyQkwscUJBQVcsRUFBRVM7QUFBeEMsU0FBZDtBQUNILE9BSkQsQ0FJRSxPQUFPRSxHQUFQLEVBQVk7QUFDVkMsZUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSDtBQUNKLEtBYmdDOztBQUFBLG1DQWV6QjtBQUNKWixrQkFBWSxFQUFFLElBRFY7QUFFSkMsaUJBQVcsRUFBRSxJQUZUO0FBR0pDLGNBQVEsRUFBRSxLQUFLQSxRQUhYO0FBSUpDLFNBQUcsRUFBRSxJQUFJSywrQ0FBSjtBQUpELEtBZnlCOztBQUFBLCtDQXNCYixZQUFZO0FBQzVCLFVBQUksS0FBS08sS0FBTCxDQUFXZCxXQUFYLEtBQTJCLElBQS9CLEVBQXFDO0FBQ2pDLFlBQUk7QUFDQSxnQkFBTWUsSUFBSSxHQUFHLE1BQU0sS0FBS0QsS0FBTCxDQUFXWixHQUFYLENBQWVjLEtBQWYsQ0FBcUI7QUFBQ0MsaUJBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdkLFdBQVgsQ0FBdUJpQixLQUEvQjtBQUFzQ0Msb0JBQVEsRUFBRSxLQUFLSixLQUFMLENBQVdkLFdBQVgsQ0FBdUJrQjtBQUF2RSxXQUFyQixDQUFuQjtBQUNBLGVBQUtqQixRQUFMLENBQWNjLElBQUksQ0FBQ0ksSUFBbkI7QUFDSCxTQUhELENBR0UsT0FBT1IsR0FBUCxFQUFZO0FBQ1ZDLGlCQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNIO0FBQ0o7QUFDSixLQS9CZ0M7QUFBQTs7QUFpQ2pDUyxRQUFNLEdBQUc7QUFDTCx3QkFDQSwyREFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUUsS0FBS047QUFBbEMsT0FDSyxLQUFLTyxLQUFMLENBQVdDLFFBRGhCLENBREE7QUFLSDs7QUF2Q2dDOztBQXlDdEJuQiwyRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvVXNlckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciwge3dpdGhSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHttZXNzYWdlfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgTmV4dFBhZ2UsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHtVc2VyLCBEZWZhdWx0QXBpfSBmcm9tICcuLi8uLi9hcGknXG5cbmludGVyZmFjZSBDb250ZXh0UHJvcHMge1xuICBjdXJyZW50VG9rZW4/OiBzdHJpbmcsXG4gIGN1cnJlbnRVc2VyPzogVXNlcixcbiAgYXBpPzogRGVmYXVsdEFwaVxuICBzZXRUb2tlbjogKHRva2VuOiBzdHJpbmcgfCBudWxsKSA9PiBQcm9taXNlPHZvaWQ+XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGFydGlhbDxDb250ZXh0UHJvcHM+Pih7XG4gICAgY3VycmVudFRva2VuOiBudWxsLFxuICAgIGN1cnJlbnRVc2VyOiBudWxsLFxuICAgIHNldFRva2VuOiBudWxsLFxuICAgIGFwaTogbnVsbFxufSk7XG5jbGFzcyBVc2VyUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHNldFRva2VuID0gYXN5bmMgKHRva2VuOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXBpOiBuZXcgRGVmYXVsdEFwaSgpLCBjdXJyZW50VG9rZW46IG51bGwsIGN1cnJlbnRVc2VyOiBudWxsfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcGkgPSBuZXcgRGVmYXVsdEFwaSh7YWNjZXNzVG9rZW46IHRva2VufSlcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuZ2V0VXNlcigpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthcGksIGN1cnJlbnRUb2tlbjogdG9rZW4sIGN1cnJlbnRVc2VyOiB1c2VyfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjdXJyZW50VG9rZW46IG51bGwsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBudWxsLFxuICAgICAgICBzZXRUb2tlbjogdGhpcy5zZXRUb2tlbixcbiAgICAgICAgYXBpOiBuZXcgRGVmYXVsdEFwaSgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRVc2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLnN0YXRlLmFwaS5sb2dpbih7ZW1haWw6IHRoaXMuc3RhdGUuY3VycmVudFVzZXIuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLnBhc3N3b3JkfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKGJvZHkuZGF0YSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlclByb3ZpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/UserContext.tsx\n");

/***/ })

})