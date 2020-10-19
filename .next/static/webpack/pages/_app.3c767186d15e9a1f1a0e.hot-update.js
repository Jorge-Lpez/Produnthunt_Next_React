webpackHotUpdate_N_E("pages/_app",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./firebase/config.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


 //Habilitamos la autentificacion



var Firebase = function Firebase() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Firebase);

  if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth();
};

var firebase = new Firebase();
/* harmony default export */ __webpack_exports__["default"] = (firebase);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiRmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXV0aCIsImZpcmViYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0lBRU1BLFEsR0FDRixvQkFBYztBQUFBOztBQUNWLE1BQUcsQ0FBQ0MsbURBQUcsQ0FBQ0MsSUFBSixDQUFTQyxNQUFiLEVBQW9CO0FBQ2hCRix1REFBRyxDQUFDRyxhQUFKLENBQWtCQywrQ0FBbEI7QUFDSDs7QUFDRCxPQUFLQyxJQUFMLEdBQVlMLG1EQUFHLENBQUNLLElBQUosRUFBWjtBQUNILEM7O0FBR0wsSUFBTUMsUUFBUSxHQUFHLElBQUlQLFFBQUosRUFBakI7QUFFZU8sdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYzc2NzE4NmQxNWU5YTFmMWEwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuLy9IYWJpbGl0YW1vcyBsYSBhdXRlbnRpZmljYWNpb25cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuY2xhc3MgRmlyZWJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYoIWFwcC5hcHBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGFwcC5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoID0gYXBwLmF1dGgoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZmlyZWJhc2UgPSBuZXcgRmlyZWJhc2UoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=