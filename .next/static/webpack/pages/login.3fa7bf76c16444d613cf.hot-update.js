webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/Formulario */ "./components/ui/Formulario.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useValidacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useValidacion */ "./hooks/useValidacion.js");
/* harmony import */ var _validacion_validarIniciarSesion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validacion/validarIniciarSesion */ "./validacion/validarIniciarSesion.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 //Importando el firebase para iniciar la conexion 

 //Utilizando el hooks validacion



var STATE_INICIAL = {
  nombre: "",
  email: "",
  password: ""
};

var Login = function Login() {
  _s();

  //Error al crear cuenta
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState[0],
      guardarError = _useState[1];

  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_7__["default"])(STATE_INICIAL, validarCrearCuenta, crearCuenta),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      submitForm = _useValidacion.submitForm,
      handleSubmit = _useValidacion.handleSubmit,
      handleChange = _useValidacion.handleChange,
      handleBlur = _useValidacion.handleBlur;

  var nombre = valores.nombre,
      email = valores.email,
      password = valores.password;

  function crearCuenta() {
    return _crearCuenta.apply(this, arguments);
  }

  function _crearCuenta() {
    _crearCuenta = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].registrar(nombre, email, password);

            case 3:
              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.error("Hubo un error al crear el usuario ", _context.t0.message);
              guardarError(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));
    return _crearCuenta.apply(this, arguments);
  }

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Login"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Correo"), __jsx("input", {
    type: "email",
    id: "email",
    placeholder: "Ingresa tu correo",
    name: "email",
    onChange: handleChange,
    onBlur: handleBlur,
    value: email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })), errores.email && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 35
    }
  }, errores.email), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("input", {
    type: "password",
    id: "password",
    placeholder: "Contrase\xF1a",
    name: "password",
    onChange: handleChange,
    onBlur: handleBlur,
    value: password,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })), errores.password && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 38
    }
  }, errores.password), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["InputSubmit"], {
    type: "submit",
    value: "Iniciar Sesion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })));
};

_s(Login, "PFEfMyqXcLNcUFSeKgUVRVurV3A=", false, function () {
  return [_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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

/***/ }),

/***/ "./validacion/validarCrearCuenta.js":
false,

/***/ "./validacion/validarIniciarSesion.js":
/*!********************************************!*\
  !*** ./validacion/validarIniciarSesion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validarIniciarSesion; });
function validarIniciarSesion(valores) {
  var errores = {}; //Validar el email

  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no valido";
  } //Validar el password


  if (!valores.password) {
    errores.password = "La contraseña es obligatorio";
  } else if (valores.password.length < 6) {
    errores.password = "La contraseña debe tener minimo 6 caracteres";
  }

  return errores;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3ZhbGlkYWNpb24vdmFsaWRhckluaWNpYXJTZXNpb24uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsIm5vbWJyZSIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJndWFyZGFyRXJyb3IiLCJ1c2VWYWxpZGFjaW9uIiwidmFsaWRhckNyZWFyQ3VlbnRhIiwiY3JlYXJDdWVudGEiLCJ2YWxvcmVzIiwiZXJyb3JlcyIsInN1Ym1pdEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiZmlyZWJhc2UiLCJyZWdpc3RyYXIiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJ2YWxpZGFySW5pY2lhclNlc2lvbiIsInRlc3QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsRUFEVTtBQUVsQkMsT0FBSyxFQUFFLEVBRlc7QUFHbEJDLFVBQVEsRUFBRTtBQUhRLENBQXRCOztBQU1BLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFZjtBQUZlLGtCQUdlQyxzREFBUSxDQUFDLEtBQUQsQ0FIdkI7QUFBQSxNQUdSQyxLQUhRO0FBQUEsTUFHREMsWUFIQzs7QUFBQSx1QkFLa0VDLG9FQUFhLENBQUNSLGFBQUQsRUFBZ0JTLGtCQUFoQixFQUFvQ0MsV0FBcEMsQ0FML0U7QUFBQSxNQUtQQyxPQUxPLGtCQUtQQSxPQUxPO0FBQUEsTUFLRUMsT0FMRixrQkFLRUEsT0FMRjtBQUFBLE1BS1dDLFVBTFgsa0JBS1dBLFVBTFg7QUFBQSxNQUt1QkMsWUFMdkIsa0JBS3VCQSxZQUx2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aEZKLEs7QUFrRVNBLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBZSxTQUFTbUIsb0JBQVQsQ0FBOEJaLE9BQTlCLEVBQXNDO0FBRWpELE1BQUlDLE9BQU8sR0FBRyxFQUFkLENBRmlELENBS2pEOztBQUNBLE1BQUcsQ0FBQ0QsT0FBTyxDQUFDVCxLQUFaLEVBQWtCO0FBQ2RVLFdBQU8sQ0FBQ1YsS0FBUixHQUFnQix5QkFBaEI7QUFDSCxHQUZELE1BRU0sSUFBRyxDQUFDLDJDQUEyQ3NCLElBQTNDLENBQWdEYixPQUFPLENBQUNULEtBQXhELENBQUosRUFBbUU7QUFDckVVLFdBQU8sQ0FBQ1YsS0FBUixHQUFnQixpQkFBaEI7QUFDSCxHQVZnRCxDQVlqRDs7O0FBRUEsTUFBRyxDQUFDUyxPQUFPLENBQUNSLFFBQVosRUFBcUI7QUFDakJTLFdBQU8sQ0FBQ1QsUUFBUixHQUFtQiw4QkFBbkI7QUFDSCxHQUZELE1BRU0sSUFBR1EsT0FBTyxDQUFDUixRQUFSLENBQWlCc0IsTUFBakIsR0FBMEIsQ0FBN0IsRUFBK0I7QUFDakNiLFdBQU8sQ0FBQ1QsUUFBUixHQUFtQiw4Q0FBbkI7QUFDSDs7QUFFRCxTQUFPUyxPQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uM2ZhN2JmNzZjMTY0NDRkNjEzY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZvcm11bGFyaW8sIENhbXBvLCBJbnB1dFN1Ym1pdCwgVGl0dWxvLCBFcnJvcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5cclxuLy9JbXBvcnRhbmRvIGVsIGZpcmViYXNlIHBhcmEgaW5pY2lhciBsYSBjb25leGlvbiBcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5cclxuLy9VdGlsaXphbmRvIGVsIGhvb2tzIHZhbGlkYWNpb25cclxuaW1wb3J0IHVzZVZhbGlkYWNpb24gZnJvbSBcIi4uL2hvb2tzL3VzZVZhbGlkYWNpb25cIjtcclxuaW1wb3J0IHZhbGlkYXJJbmljaWFyU2VzaW9uIGZyb20gXCIuLi92YWxpZGFjaW9uL3ZhbGlkYXJJbmljaWFyU2VzaW9uXCI7XHJcblxyXG5jb25zdCBTVEFURV9JTklDSUFMID0ge1xyXG4gICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIlxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICAgLy9FcnJvciBhbCBjcmVhciBjdWVudGFcclxuICAgICBjb25zdCBbZXJyb3IsIGd1YXJkYXJFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgIGNvbnN0IHsgdmFsb3JlcywgZXJyb3Jlcywgc3VibWl0Rm9ybSwgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIgfSA9IHVzZVZhbGlkYWNpb24oU1RBVEVfSU5JQ0lBTCwgdmFsaWRhckNyZWFyQ3VlbnRhLCBjcmVhckN1ZW50YSk7XHJcbiBcclxuICAgICBjb25zdCB7bm9tYnJlLCBlbWFpbCwgcGFzc3dvcmR9ID0gdmFsb3JlcztcclxuICAgICBcclxuICAgICBhc3luYyBmdW5jdGlvbiBjcmVhckN1ZW50YSgpe1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ3JlYW5kbyBjdWVudGEuLi5cIik7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICBhd2FpdCBmaXJlYmFzZS5yZWdpc3RyYXIobm9tYnJlLCBlbWFpbCwgcGFzc3dvcmQpOyAgIFxyXG4gICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkh1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgZWwgdXN1YXJpbyBcIiAsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgZ3VhcmRhckVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VGl0dWxvPkxvZ2luPC9UaXR1bG8+XHJcbiAgICAgICAgICAgIDxGb3JtdWxhcmlvXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+Q29ycmVvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSB0dSBjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yZXMuZW1haWwgJiYgPEVycm9yPntlcnJvcmVzLmVtYWlsfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Db250cmFzZcOxYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcmVzLnBhc3N3b3JkICYmIDxFcnJvcj57ZXJyb3Jlcy5wYXNzd29yZH08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJbmljaWFyIFNlc2lvblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm11bGFyaW8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXJJbmljaWFyU2VzaW9uKHZhbG9yZXMpe1xyXG5cclxuICAgIGxldCBlcnJvcmVzID0ge307XHJcblxyXG5cclxuICAgIC8vVmFsaWRhciBlbCBlbWFpbFxyXG4gICAgaWYoIXZhbG9yZXMuZW1haWwpe1xyXG4gICAgICAgIGVycm9yZXMuZW1haWwgPSBcIkVsIGVtYWlsIGVzIG9ibGlnYXRvcmlvXCJcclxuICAgIH1lbHNlIGlmKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsb3Jlcy5lbWFpbCkpe1xyXG4gICAgICAgIGVycm9yZXMuZW1haWwgPSBcIkVtYWlsIG5vIHZhbGlkb1wiXHJcbiAgICB9XHJcblxyXG4gICAgLy9WYWxpZGFyIGVsIHBhc3N3b3JkXHJcblxyXG4gICAgaWYoIXZhbG9yZXMucGFzc3dvcmQpe1xyXG4gICAgICAgIGVycm9yZXMucGFzc3dvcmQgPSBcIkxhIGNvbnRyYXNlw7FhIGVzIG9ibGlnYXRvcmlvXCJcclxuICAgIH1lbHNlIGlmKHZhbG9yZXMucGFzc3dvcmQubGVuZ3RoIDwgNil7XHJcbiAgICAgICAgZXJyb3Jlcy5wYXNzd29yZCA9IFwiTGEgY29udHJhc2XDsWEgZGViZSB0ZW5lciBtaW5pbW8gNiBjYXJhY3RlcmVzXCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JlcztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=