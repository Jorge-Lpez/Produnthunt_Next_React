webpackHotUpdate_N_E("pages/crear-cuenta",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./firebase/config.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");





 //Habilitamos la autentificacion



var Firebase = /*#__PURE__*/function () {
  function Firebase() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Firebase);

    if (!firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.apps.length) {
      firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }

    this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.auth();
  } //Registrar unn usuario 


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Firebase, [{
    key: "registrar",
    value: function () {
      var _registrar = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(nombre, email, password) {
        var nuevoUsuario;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.auth.createUserWithEmailAndPassword(email, password);

              case 2:
                nuevoUsuario = _context.sent;
                _context.next = 5;
                return nuevoUsuario.user.updateProfile({
                  displayName: nombre
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function registrar(_x, _x2, _x3) {
        return _registrar.apply(this, arguments);
      }

      return registrar;
    }() //Inicia sesion del usuario 

  }, {
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, createUserWithEmailAndPassword) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x4, _x5) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return Firebase;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiRmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXV0aCIsIm5vbWJyZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJudWV2b1VzdWFyaW8iLCJ1c2VyIiwidXBkYXRlUHJvZmlsZSIsImRpc3BsYXlOYW1lIiwiZmlyZWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0lBRU1BLFE7QUFDRixzQkFBYztBQUFBOztBQUNWLFFBQUcsQ0FBQ0MsbURBQUcsQ0FBQ0MsSUFBSixDQUFTQyxNQUFiLEVBQW9CO0FBQ2hCRix5REFBRyxDQUFDRyxhQUFKLENBQWtCQywrQ0FBbEI7QUFDSDs7QUFDRCxTQUFLQyxJQUFMLEdBQVlMLG1EQUFHLENBQUNLLElBQUosRUFBWjtBQUNILEcsQ0FFRDs7Ozs7O3lOQUNnQkMsTSxFQUFRQyxLLEVBQU9DLFE7Ozs7Ozs7dUJBQ0EsS0FBS0gsSUFBTCxDQUFVSSw4QkFBVixDQUF5Q0YsS0FBekMsRUFBK0NDLFFBQS9DLEM7OztBQUFyQkUsNEI7O3VCQUVPQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JDLGFBQWxCLENBQWdDO0FBQ3pDQyw2QkFBVyxFQUFHUDtBQUQyQixpQkFBaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS2pCOzs7OztzTkFDWUMsSyxFQUFPRSw4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkIsSUFBTUssUUFBUSxHQUFHLElBQUlmLFFBQUosRUFBakI7QUFFZWUsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXItY3VlbnRhLjc2Mjc0ZjI1MWE5ZjlmMTkwN2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG4vL0hhYmlsaXRhbW9zIGxhIGF1dGVudGlmaWNhY2lvblxyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jbGFzcyBGaXJlYmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZighYXBwLmFwcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgYXBwLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGggPSBhcHAuYXV0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUmVnaXN0cmFyIHVubiB1c3VhcmlvIFxyXG4gICAgYXN5bmMgcmVnaXN0cmFyKG5vbWJyZSwgZW1haWwsIHBhc3N3b3JkKXtcclxuICAgICAgICBjb25zdCBudWV2b1VzdWFyaW8gPSBhd2FpdCB0aGlzLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLHBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG51ZXZvVXN1YXJpby51c2VyLnVwZGF0ZVByb2ZpbGUoe1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZSA6IG5vbWJyZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9JbmljaWEgc2VzaW9uIGRlbCB1c3VhcmlvIFxyXG4gICAgYXN5bmMgbG9naW4oZW1haWwsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCl7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IG5ldyBGaXJlYmFzZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==