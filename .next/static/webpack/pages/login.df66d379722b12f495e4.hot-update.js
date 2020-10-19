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
  email: "",
  password: ""
};

var Login = function Login() {
  _s();

  //Error al crear cuenta
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState[0],
      guardarError = _useState[1];

  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_7__["default"])(STATE_INICIAL, _validacion_validarIniciarSesion__WEBPACK_IMPORTED_MODULE_8__["default"], iniciarSesion),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      submitForm = _useValidacion.submitForm,
      handleSubmit = _useValidacion.handleSubmit,
      handleChange = _useValidacion.handleChange,
      handleBlur = _useValidacion.handleBlur;

  var nombre = valores.nombre,
      email = valores.email,
      password = valores.password;

  function iniciarSesion() {
    return _iniciarSesion.apply(this, arguments);
  }

  function _iniciarSesion() {
    _iniciarSesion = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //console.log("Creando cuenta...");
              try {
                //await firebase.registrar(nombre, email, password);   
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
              } catch (error) {
                console.error("Hubo un error al crear el usuario ", error.message);
                guardarError(error.message);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _iniciarSesion.apply(this, arguments);
  }

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Login"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 21
    }
  })), errores.email && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 35
    }
  }, errores.email), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 21
    }
  })), errores.password && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 38
    }
  }, errores.password), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["InputSubmit"], {
    type: "submit",
    value: "Iniciar Sesion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJndWFyZGFyRXJyb3IiLCJ1c2VWYWxpZGFjaW9uIiwidmFsaWRhckluaWNpYXJTZXNpb24iLCJpbmljaWFyU2VzaW9uIiwidmFsb3JlcyIsImVycm9yZXMiLCJzdWJtaXRGb3JtIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsIm5vbWJyZSIsIlJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxFQURXO0FBRWxCQyxVQUFRLEVBQUU7QUFGUSxDQUF0Qjs7QUFLQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRWY7QUFGZSxrQkFHZUMsc0RBQVEsQ0FBQyxLQUFELENBSHZCO0FBQUEsTUFHUkMsS0FIUTtBQUFBLE1BR0RDLFlBSEM7O0FBQUEsdUJBS2tFQyxvRUFBYSxDQUFDUCxhQUFELEVBQWdCUSx3RUFBaEIsRUFBc0NDLGFBQXRDLENBTC9FO0FBQUEsTUFLUEMsT0FMTyxrQkFLUEEsT0FMTztBQUFBLE1BS0VDLE9BTEYsa0JBS0VBLE9BTEY7QUFBQSxNQUtXQyxVQUxYLGtCQUtXQSxVQUxYO0FBQUEsTUFLdUJDLFlBTHZCLGtCQUt1QkEsWUFMdkI7QUFBQSxNQUtxQ0MsWUFMckMsa0JBS3FDQSxZQUxyQztBQUFBLE1BS21EQyxVQUxuRCxrQkFLbURBLFVBTG5EOztBQUFBLE1BT1JDLE1BUFEsR0FPbUJOLE9BUG5CLENBT1JNLE1BUFE7QUFBQSxNQU9BZixLQVBBLEdBT21CUyxPQVBuQixDQU9BVCxLQVBBO0FBQUEsTUFPT0MsUUFQUCxHQU9tQlEsT0FQbkIsQ0FPT1IsUUFQUDs7QUFBQSxXQVNBTyxhQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNNQVNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUNBLGtCQUFJO0FBQ0E7QUFDQVEsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSCxlQUhELENBR0UsT0FBT2IsS0FBUCxFQUFjO0FBQ1pjLHVCQUFPLENBQUNkLEtBQVIsQ0FBYyxvQ0FBZCxFQUFxREEsS0FBSyxDQUFDZSxPQUEzRDtBQUNBZCw0QkFBWSxDQUFDRCxLQUFLLENBQUNlLE9BQVAsQ0FBWjtBQUNIOztBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVGU7QUFBQTtBQUFBOztBQXVCaEIsU0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJLE1BQUMsb0VBQUQ7QUFDSSxZQUFRLEVBQUlQLFlBRGhCO0FBRUksY0FBVSxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQ0ksUUFBSSxFQUFDLE9BRFQ7QUFFSSxNQUFFLEVBQUMsT0FGUDtBQUdJLGVBQVcsRUFBQyxtQkFIaEI7QUFJSSxRQUFJLEVBQUMsT0FKVDtBQUtJLFlBQVEsRUFBRUMsWUFMZDtBQU1JLFVBQU0sRUFBSUMsVUFOZDtBQU9JLFNBQUssRUFBRWQsS0FQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FKSixFQWdCS1UsT0FBTyxDQUFDVixLQUFSLElBQWlCLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRVSxPQUFPLENBQUNWLEtBQWhCLENBaEJ0QixFQWlCSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSTtBQUNJLFFBQUksRUFBQyxVQURUO0FBRUksTUFBRSxFQUFDLFVBRlA7QUFHSSxlQUFXLEVBQUMsZUFIaEI7QUFJSSxRQUFJLEVBQUMsVUFKVDtBQUtJLFlBQVEsRUFBRWEsWUFMZDtBQU1JLFVBQU0sRUFBSUMsVUFOZDtBQU9JLFNBQUssRUFBRWIsUUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FqQkosRUE2QktTLE9BQU8sQ0FBQ1QsUUFBUixJQUFvQixNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVMsT0FBTyxDQUFDVCxRQUFoQixDQTdCekIsRUE4QktHLEtBQUssSUFBSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBUixDQTlCZCxFQStCSSxNQUFDLHFFQUFEO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxTQUFLLEVBQUMsZ0JBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSixDQUZKLENBREo7QUF5Q0gsQ0FoRUQ7O0dBQU1GLEs7VUFLZ0ZJLDREOzs7S0FMaEZKLEs7QUFrRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmRmNjZkMzc5NzIyYjEyZjQ5NWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyBGb3JtdWxhcmlvLCBDYW1wbywgSW5wdXRTdWJtaXQsIFRpdHVsbywgRXJyb3J9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Zvcm11bGFyaW9cIjtcclxuXHJcbi8vSW1wb3J0YW5kbyBlbCBmaXJlYmFzZSBwYXJhIGluaWNpYXIgbGEgY29uZXhpb24gXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuXHJcbi8vVXRpbGl6YW5kbyBlbCBob29rcyB2YWxpZGFjaW9uXHJcbmltcG9ydCB1c2VWYWxpZGFjaW9uIGZyb20gXCIuLi9ob29rcy91c2VWYWxpZGFjaW9uXCI7XHJcbmltcG9ydCB2YWxpZGFySW5pY2lhclNlc2lvbiBmcm9tIFwiLi4vdmFsaWRhY2lvbi92YWxpZGFySW5pY2lhclNlc2lvblwiO1xyXG5cclxuY29uc3QgU1RBVEVfSU5JQ0lBTCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCJcclxufVxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgIC8vRXJyb3IgYWwgY3JlYXIgY3VlbnRhXHJcbiAgICAgY29uc3QgW2Vycm9yLCBndWFyZGFyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICBjb25zdCB7IHZhbG9yZXMsIGVycm9yZXMsIHN1Ym1pdEZvcm0sIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVCbHVyIH0gPSB1c2VWYWxpZGFjaW9uKFNUQVRFX0lOSUNJQUwsIHZhbGlkYXJJbmljaWFyU2VzaW9uLCBpbmljaWFyU2VzaW9uKTtcclxuIFxyXG4gICAgIGNvbnN0IHtub21icmUsIGVtYWlsLCBwYXNzd29yZH0gPSB2YWxvcmVzO1xyXG4gICAgIFxyXG4gICAgIGFzeW5jIGZ1bmN0aW9uIGluaWNpYXJTZXNpb24oKXtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNyZWFuZG8gY3VlbnRhLi4uXCIpO1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgLy9hd2FpdCBmaXJlYmFzZS5yZWdpc3RyYXIobm9tYnJlLCBlbWFpbCwgcGFzc3dvcmQpOyAgIFxyXG4gICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkh1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgZWwgdXN1YXJpbyBcIiAsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgZ3VhcmRhckVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VGl0dWxvPkxvZ2luPC9UaXR1bG8+XHJcbiAgICAgICAgICAgIDxGb3JtdWxhcmlvXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+Q29ycmVvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSB0dSBjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yZXMuZW1haWwgJiYgPEVycm9yPntlcnJvcmVzLmVtYWlsfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Db250cmFzZcOxYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcmVzLnBhc3N3b3JkICYmIDxFcnJvcj57ZXJyb3Jlcy5wYXNzd29yZH08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJbmljaWFyIFNlc2lvblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm11bGFyaW8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=