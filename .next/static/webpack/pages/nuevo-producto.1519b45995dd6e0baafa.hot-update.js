webpackHotUpdate_N_E("pages/nuevo-producto",{

/***/ "./pages/nuevo-producto.js":
/*!*********************************!*\
  !*** ./pages/nuevo-producto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-file-uploader */ "./node_modules/react-firebase-file-uploader/lib/index.js");
/* harmony import */ var react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/Formulario */ "./components/ui/Formulario.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useValidacion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useValidacion */ "./hooks/useValidacion.js");
/* harmony import */ var _validacion_validarCrearProducto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validacion/validarCrearProducto */ "./validacion/validarCrearProducto.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\nuevo-producto.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




 //Importando el firebase para iniciar la conexion 

 //Utilizando el hooks validacion



var STATE_INICIAL = {
  nombre: "",
  empresa: "",
  imagen: "",
  url: "",
  descripcion: ""
};

var NuevoProducto = function NuevoProducto() {
  _s();

  //State de las imagenes 
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      nombreimagen = _useState[0],
      guardarNombre = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      subiendo = _useState2[0],
      guardarSubiendo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      progreso = _useState3[0],
      guardarProgreso = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      urlimagen = _useState4[0],
      guardarUrlImagen = _useState4[1]; //Error al crear cuenta


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState5[0],
      guardarError = _useState5[1];

  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_8__["default"])(STATE_INICIAL, _validacion_validarCrearProducto__WEBPACK_IMPORTED_MODULE_9__["default"], crearProducto),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      submitForm = _useValidacion.submitForm,
      handleSubmit = _useValidacion.handleSubmit,
      handleChange = _useValidacion.handleChange,
      handleBlur = _useValidacion.handleBlur;

  var nombre = valores.nombre,
      empresa = valores.empresa,
      imagen = valores.imagen,
      url = valores.url,
      descripcion = valores.descripcion; //HOOK  de routing para rideccionar 

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //Context con las operaciones crud de firebase 

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseContext"]),
      usuario = _useContext.usuario,
      firebase = _useContext.firebase;

  function crearProducto() {
    return _crearProducto.apply(this, arguments);
  } //Funciones para cargar la imagen y mostrar informacion llenando los state


  function _crearProducto() {
    _crearProducto = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var producto;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (usuario) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", router.push("/login"));

            case 2:
              //Crear el objeto de nuevo producto
              producto = {
                nombre: nombre,
                empresa: empresa,
                url: url,
                descripcion: descripcion,
                votos: 0,
                comentarios: [],
                creado: Date.now()
              }; //Insertarlo en la base de datos

              firebase.db.collection("productos").add(producto);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _crearProducto.apply(this, arguments);
  }

  var handleUploadStart = function handleUploadStart() {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  var handleProgress = function handleProgress(progreso) {
    return guardarProgreso({
      progreso: progreso
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Nuevo Producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "Informacion General"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Nombre"), __jsx("input", {
    type: "text",
    id: "nombre",
    placeholder: "Tu Nombre",
    name: "nombre",
    onChange: handleChange,
    onBlur: handleBlur,
    value: nombre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  })), errores.nombre && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 44
    }
  }, errores.nombre), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, "Empresa: "), __jsx("input", {
    type: "text",
    id: "empresa",
    placeholder: "Empresa",
    name: "empresa",
    onChange: handleChange,
    onBlur: handleBlur,
    value: empresa,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  })), errores.empresa && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  }, errores.empresa), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "imagen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, "Imagen"), __jsx(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    accept: "image/*",
    id: "imagen",
    name: "imagen",
    onChange: handleChange,
    onBlur: handleBlur,
    value: imagen,
    randomizeFilename: true,
    storageRef: firebase.storage.ref("productos"),
    onUploadStart: handleUploadStart,
    onUploadError: handleUploadError,
    onUploadSuccess: handleUploadSuccess,
    onProgress: handleProgress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  })), errores.imagen && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 44
    }
  }, errores.imagen), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "url",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, "URL"), __jsx("input", {
    type: "url",
    id: "url",
    name: "url",
    onChange: handleChange,
    onBlur: handleBlur,
    value: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  })), errores.url && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }, errores.url)), __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, "Sobre tu producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "descripcion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, "Descripcion"), __jsx("textarea", {
    id: "descripcion",
    name: "descripcion",
    onChange: handleChange,
    onBlur: handleBlur,
    value: descripcion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  })), errores.descripcion && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 45
    }
  }, errores.descripcion)), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["InputSubmit"], {
    type: "submit",
    value: "Crear Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  })));
};

_s(NuevoProducto, "s2045g2UhaKtf5/lOaLCvBEqwGo=", false, function () {
  return [_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_8__["default"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = NuevoProducto;
/* harmony default export */ __webpack_exports__["default"] = (NuevoProducto);

var _c;

$RefreshReg$(_c, "NuevoProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm8tcHJvZHVjdG8uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsIm5vbWJyZSIsImVtcHJlc2EiLCJpbWFnZW4iLCJ1cmwiLCJkZXNjcmlwY2lvbiIsIk51ZXZvUHJvZHVjdG8iLCJ1c2VTdGF0ZSIsIm5vbWJyZWltYWdlbiIsImd1YXJkYXJOb21icmUiLCJzdWJpZW5kbyIsImd1YXJkYXJTdWJpZW5kbyIsInByb2dyZXNvIiwiZ3VhcmRhclByb2dyZXNvIiwidXJsaW1hZ2VuIiwiZ3VhcmRhclVybEltYWdlbiIsImVycm9yIiwiZ3VhcmRhckVycm9yIiwidXNlVmFsaWRhY2lvbiIsInZhbGlkYXJDcmVhclByb2R1Y3RvIiwiY3JlYXJQcm9kdWN0byIsInZhbG9yZXMiLCJlcnJvcmVzIiwic3VibWl0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwidXN1YXJpbyIsImZpcmViYXNlIiwicHVzaCIsInByb2R1Y3RvIiwidm90b3MiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsIkRhdGUiLCJub3ciLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJoYW5kbGVVcGxvYWRTdGFydCIsImhhbmRsZVByb2dyZXNzIiwic3RvcmFnZSIsInJlZiIsImhhbmRsZVVwbG9hZEVycm9yIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsRUFEVTtBQUVsQkMsU0FBTyxFQUFFLEVBRlM7QUFHbEJDLFFBQU0sRUFBRSxFQUhVO0FBSWxCQyxLQUFHLEVBQUUsRUFKYTtBQUtsQkMs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QUssRUFBQyxnQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZKLENBRkosQ0FESjtBQTBGSCxDQTNJRDs7R0FBTVYsYTtVQVkrRVksNEQsRUFLbEVVLHFEOzs7S0FqQmJ0QixhO0FBNElTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9udWV2by1wcm9kdWN0by4xNTE5YjQ1OTk1ZGQ2ZTBiYWFmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gXCJyZWFjdC1maXJlYmFzZS1maWxlLXVwbG9hZGVyXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm11bGFyaW8sIENhbXBvLCBJbnB1dFN1Ym1pdCwgVGl0dWxvLCBFcnJvcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5cclxuLy9JbXBvcnRhbmRvIGVsIGZpcmViYXNlIHBhcmEgaW5pY2lhciBsYSBjb25leGlvbiBcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcblxyXG4vL1V0aWxpemFuZG8gZWwgaG9va3MgdmFsaWRhY2lvblxyXG5pbXBvcnQgdXNlVmFsaWRhY2lvbiBmcm9tIFwiLi4vaG9va3MvdXNlVmFsaWRhY2lvblwiO1xyXG5pbXBvcnQgdmFsaWRhckNyZWFyUHJvZHVjdG8gZnJvbSBcIi4uL3ZhbGlkYWNpb24vdmFsaWRhckNyZWFyUHJvZHVjdG9cIjtcclxuXHJcbmNvbnN0IFNUQVRFX0lOSUNJQUwgPSB7XHJcbiAgICBub21icmU6IFwiXCIsXHJcbiAgICBlbXByZXNhOiBcIlwiLFxyXG4gICAgaW1hZ2VuOiBcIlwiLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gICAgZGVzY3JpcGNpb246IFwiXCJcclxufVxyXG5cclxuY29uc3QgTnVldm9Qcm9kdWN0byA9ICgpID0+IHtcclxuXHJcbiAgICAvL1N0YXRlIGRlIGxhcyBpbWFnZW5lcyBcclxuICAgIGNvbnN0IFtub21icmVpbWFnZW4sIGd1YXJkYXJOb21icmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3ViaWVuZG8sIGd1YXJkYXJTdWJpZW5kb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc28sIGd1YXJkYXJQcm9ncmVzb10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt1cmxpbWFnZW4sIGd1YXJkYXJVcmxJbWFnZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICAgIC8vRXJyb3IgYWwgY3JlYXIgY3VlbnRhXHJcbiAgICBjb25zdCBbZXJyb3IsIGd1YXJkYXJFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgeyB2YWxvcmVzLCBlcnJvcmVzLCBzdWJtaXRGb3JtLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciB9ID0gdXNlVmFsaWRhY2lvbihTVEFURV9JTklDSUFMLCB2YWxpZGFyQ3JlYXJQcm9kdWN0bywgY3JlYXJQcm9kdWN0byk7XHJcblxyXG4gICAgY29uc3Qge25vbWJyZSwgZW1wcmVzYSwgaW1hZ2VuLCB1cmwsIGRlc2NyaXBjaW9ufSA9IHZhbG9yZXM7XHJcblxyXG4gICAgLy9IT09LICBkZSByb3V0aW5nIHBhcmEgcmlkZWNjaW9uYXIgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvL0NvbnRleHQgY29uIGxhcyBvcGVyYWNpb25lcyBjcnVkIGRlIGZpcmViYXNlIFxyXG4gICAgY29uc3QgeyB1c3VhcmlvLCBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhclByb2R1Y3RvKCl7XHJcbiAgICAgICAgLy9TaSBlbCB1c3VhcmlvIG5vIGVzdGEgYXV0ZW50aWNhZG8gbGxldmFyIGFsIGxvZ2luXHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NyZWFyIGVsIG9iamV0byBkZSBudWV2byBwcm9kdWN0b1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvID0ge1xyXG4gICAgICAgICAgICBub21icmUsXHJcbiAgICAgICAgICAgIGVtcHJlc2EsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGVzY3JpcGNpb24sXHJcbiAgICAgICAgICAgIHZvdG9zOiAwLFxyXG4gICAgICAgICAgICBjb21lbnRhcmlvczogW10sXHJcbiAgICAgICAgICAgIGNyZWFkbzogRGF0ZS5ub3coKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL0luc2VydGFybG8gZW4gbGEgYmFzZSBkZSBkYXRvc1xyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuYWRkKHByb2R1Y3RvKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Z1bmNpb25lcyBwYXJhIGNhcmdhciBsYSBpbWFnZW4geSBtb3N0cmFyIGluZm9ybWFjaW9uIGxsZW5hbmRvIGxvcyBzdGF0ZVxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhclByb2dyZXNvKDApO1xyXG4gICAgICAgIGd1YXJkYXJTdWJpZW5kbyh0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gcHJvZ3Jlc28gPT4gZ3VhcmRhclByb2dyZXNvKCB7IHByb2dyZXNvIH0pO1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUaXR1bG8+TnVldm8gUHJvZHVjdG88L1RpdHVsbz5cclxuICAgICAgICAgICAgPEZvcm11bGFyaW9cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+SW5mb3JtYWNpb24gR2VuZXJhbDwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiPk5vbWJyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHUgTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5ub21icmUgJiYgPEVycm9yPntlcnJvcmVzLm5vbWJyZX08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXByZXNhXCI+RW1wcmVzYTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcHJlc2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5lbXByZXNhICYmIDxFcnJvcj57ZXJyb3Jlcy5lbXByZXNhfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlblwiPkltYWdlbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ltYWdlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21pemVGaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VSZWY9e2ZpcmViYXNlLnN0b3JhZ2UucmVmKFwicHJvZHVjdG9zXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3RhcnQ9e2hhbmRsZVVwbG9hZFN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkRXJyb3I9e2hhbmRsZVVwbG9hZEVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3VjY2Vzcz17aGFuZGxlVXBsb2FkU3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzPXtoYW5kbGVQcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLmltYWdlbiAmJiA8RXJyb3I+e2Vycm9yZXMuaW1hZ2VufTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVybFwiPlVSTDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMudXJsICYmIDxFcnJvcj57ZXJyb3Jlcy51cmx9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5Tb2JyZSB0dSBwcm9kdWN0bzwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcGNpb25cIj5EZXNjcmlwY2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcGNpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXBjaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLmRlc2NyaXBjaW9uICYmIDxFcnJvcj57ZXJyb3Jlcy5kZXNjcmlwY2lvbn08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvcj57ZXJyb3J9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNyZWFyIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybXVsYXJpbz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE51ZXZvUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==