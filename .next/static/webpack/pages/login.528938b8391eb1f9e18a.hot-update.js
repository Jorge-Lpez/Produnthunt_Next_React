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

  var email = valores.email,
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
              console.log("Iniciando sesion...");

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
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Login"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 21
    }
  })), errores.email && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 35
    }
  }, errores.email), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 21
    }
  })), errores.password && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 38
    }
  }, errores.password), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_5__["InputSubmit"], {
    type: "submit",
    value: "Iniciar Sesion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJndWFyZGFyRXJyb3IiLCJ1c2VWYWxpZGFjaW9uIiwidmFsaWRhckluaWNpYXJTZXNpb24iLCJpbmljaWFyU2VzaW9uIiwidmFsb3JlcyIsImVycm9yZXMiLCJzdWJtaXRGb3JtIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsRUFEVztBQUVsQkMsVUFBUSxFQUFFO0FBRlEsQ0FBdEI7O0FBS0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVmO0FBRmUsa0JBR2VDLHNEQUFRLENBQUMsS0FBRCxDQUh2QjtBQUFBLE1BR1JDLEtBSFE7QUFBQSxNQUdEQyxZQUhDOztBQUFBLHVCQUtrRUMsb0VBQWEsQ0FBQ1AsYUFBRCxFQUFnQlEsd0VBQWhCLEVBQXNDQyxhQUF0QyxDQUwvRTtBQUFBLE1BS1BDLE9BTE8sa0JBS1BBLE9BTE87QUFBQSxNQUtFQyxPQUxGLGtCQUtFQSxPQUxGO0FBQUEsTUFLV0MsVUFMWCxrQkFLV0EsVUFMWDtBQUFBLE1BS3VCQyxZQUx2QixrQkFLdUJBLFlBTHZCO0FBQUEsTUFLcUNDLFlBTHJDLGtCQUtxQ0EsWUFMckM7QUFBQSxNQUttREMsVUFMbkQsa0JBS21EQSxVQUxuRDs7QUFBQSxNQU9QZCxLQVBPLEdBT2FTLE9BUGIsQ0FPUFQsS0FQTztBQUFBLE1BT0FDLFFBUEEsR0FPYVEsT0FQYixDQU9BUixRQVBBOztBQUFBLFdBU0FPLGFBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUEsc01BU2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHTyxxQkFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7O0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUZTtBQUFBO0FBQUE7O0FBZ0JoQixTQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUksTUFBQyxvRUFBRDtBQUNJLFlBQVEsRUFBSUosWUFEaEI7QUFFSSxjQUFVLE1BRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFDSSxRQUFJLEVBQUMsT0FEVDtBQUVJLE1BQUUsRUFBQyxPQUZQO0FBR0ksZUFBVyxFQUFDLG1CQUhoQjtBQUlJLFFBQUksRUFBQyxPQUpUO0FBS0ksWUFBUSxFQUFFQyxZQUxkO0FBTUksVUFBTSxFQUFJQyxVQU5kO0FBT0ksU0FBSyxFQUFFZCxLQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQUpKLEVBZ0JLVSxPQUFPLENBQUNWLEtBQVIsSUFBaUIsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFVLE9BQU8sQ0FBQ1YsS0FBaEIsQ0FoQnRCLEVBaUJJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQ0ksUUFBSSxFQUFDLFVBRFQ7QUFFSSxNQUFFLEVBQUMsVUFGUDtBQUdJLGVBQVcsRUFBQyxlQUhoQjtBQUlJLFFBQUksRUFBQyxVQUpUO0FBS0ksWUFBUSxFQUFFYSxZQUxkO0FBTUksVUFBTSxFQUFJQyxVQU5kO0FBT0ksU0FBSyxFQUFFYixRQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQWpCSixFQTZCS1MsT0FBTyxDQUFDVCxRQUFSLElBQW9CLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRUyxPQUFPLENBQUNULFFBQWhCLENBN0J6QixFQThCS0csS0FBSyxJQUFJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxLQUFSLENBOUJkLEVBK0JJLE1BQUMscUVBQUQ7QUFDSSxRQUFJLEVBQUMsUUFEVDtBQUVJLFNBQUssRUFBQyxnQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JKLENBRkosQ0FESjtBQXlDSCxDQXpERDs7R0FBTUYsSztVQUtnRkksNEQ7OztLQUxoRkosSztBQTJEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTI4OTM4YjgzOTFlYjFmOWUxOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZvcm11bGFyaW8sIENhbXBvLCBJbnB1dFN1Ym1pdCwgVGl0dWxvLCBFcnJvcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5cclxuLy9JbXBvcnRhbmRvIGVsIGZpcmViYXNlIHBhcmEgaW5pY2lhciBsYSBjb25leGlvbiBcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5cclxuLy9VdGlsaXphbmRvIGVsIGhvb2tzIHZhbGlkYWNpb25cclxuaW1wb3J0IHVzZVZhbGlkYWNpb24gZnJvbSBcIi4uL2hvb2tzL3VzZVZhbGlkYWNpb25cIjtcclxuaW1wb3J0IHZhbGlkYXJJbmljaWFyU2VzaW9uIGZyb20gXCIuLi92YWxpZGFjaW9uL3ZhbGlkYXJJbmljaWFyU2VzaW9uXCI7XHJcblxyXG5jb25zdCBTVEFURV9JTklDSUFMID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIlxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICAgLy9FcnJvciBhbCBjcmVhciBjdWVudGFcclxuICAgICBjb25zdCBbZXJyb3IsIGd1YXJkYXJFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgIGNvbnN0IHsgdmFsb3JlcywgZXJyb3Jlcywgc3VibWl0Rm9ybSwgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIgfSA9IHVzZVZhbGlkYWNpb24oU1RBVEVfSU5JQ0lBTCwgdmFsaWRhckluaWNpYXJTZXNpb24sIGluaWNpYXJTZXNpb24pO1xyXG4gXHJcbiAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHZhbG9yZXM7XHJcbiAgICAgXHJcbiAgICAgYXN5bmMgZnVuY3Rpb24gaW5pY2lhclNlc2lvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pY2lhbmRvIHNlc2lvbi4uLlwiKTtcclxuICAgICB9XHJcbiBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUaXR1bG8+TG9naW48L1RpdHVsbz5cclxuICAgICAgICAgICAgPEZvcm11bGFyaW9cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Db3JyZW88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNhIHR1IGNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5lbWFpbCAmJiA8RXJyb3I+e2Vycm9yZXMuZW1haWx9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yZXMucGFzc3dvcmQgJiYgPEVycm9yPntlcnJvcmVzLnBhc3N3b3JkfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvcj57ZXJyb3J9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkluaWNpYXIgU2VzaW9uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybXVsYXJpbz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==