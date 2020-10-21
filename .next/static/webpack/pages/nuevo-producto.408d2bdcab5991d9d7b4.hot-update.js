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
                urlimagen: urlimagen,
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

  var handleUploadError = function handleUploadError(error) {
    guardarSubiendo(error);
    console.log(error);
  };

  var handleUploadSuccess = function handleUploadSuccess(nombre) {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage.ref("productos").child(nombre).getDownloadURL().then(function (url) {
      console.log(url);
      guardarUrlImagen(url);
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Nuevo Producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Informacion General"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 29
    }
  })), errores.nombre && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 44
    }
  }, errores.nombre), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 29
    }
  })), errores.empresa && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 45
    }
  }, errores.empresa), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "imagen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, "Imagen"), __jsx(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    accept: "image/*",
    id: "imagen",
    name: "imagen",
    randomizeFilename: true,
    storageRef: firebase.storage.ref("productos"),
    onUploadStart: handleUploadStart,
    onUploadError: handleUploadError,
    onUploadSuccess: handleUploadSuccess,
    onProgress: handleProgress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "url",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 145,
      columnNumber: 29
    }
  })), errores.url && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, errores.url)), __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "Sobre tu producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "descripcion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 29
    }
  })), errores.descripcion && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }, errores.descripcion)), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["InputSubmit"], {
    type: "submit",
    value: "Crear Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm8tcHJvZHVjdG8uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsIm5vbWJyZSIsImVtcHJlc2EiLCJpbWFnZW4iLCJ1cmwiLCJkZXNjcmlwY2lvbiIsIk51ZXZvUHJvZHVjdG8iLCJ1c2VTdGF0ZSIsIm5vbWJyZWltYWdlbiIsImd1YXJkYXJOb21icmUiLCJzdWJpZW5kbyIsImd1YXJkYXJTdWJpZW5kbyIsInByb2dyZXNvIiwiZ3VhcmRhclByb2dyZXNvIiwidXJsaW1hZ2VuIiwiZ3VhcmRhclVybEltYWdlbiIsImVycm9yIiwiZ3VhcmRhckVycm9yIiwidXNlVmFsaWRhY2lvbiIsInZhbGlkYXJDcmVhclByb2R1Y3RvIiwiY3JlYXJQcm9kdWN0byIsInZhbG9yZXMiLCJlcnJvcmVzIiwic3VibWl0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwidXN1YXJpbyIsImZpcmViYXNlIiwicHVzaCIsInByb2R1Y3RvIiwidm90b3MiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsIkRhdGUiLCJub3ciLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJoYW5kbGVVcGxvYWRTdGFydCIsImhhbmRsZVByb2dyZXNzIiwiaGFuZGxlVXBsb2FkRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsRUFEVTtBQUVsQkMsU0FBTyxFQUFFLEVBRlM7QUFH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QUFFSSxRQUFJLEVBQUMsYUFGVDtBQUdJLFlBQVEsRUFBRXFCLFlBSGQ7QUFJSSxVQUFNLEVBQUlDLFVBSmQ7QUFLSSxTQUFLLEVBQUVyQixXQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUixDQUZKLEVBWUtpQixPQUFPLENBQUNqQixXQUFSLElBQXVCLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRaUIsT0FBTyxDQUFDakIsV0FBaEIsQ0FaNUIsQ0E3REosRUE0RUtXLEtBQUssSUFBSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBUixDQTVFZCxFQTZFSSxNQUFDLHFFQUFEO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxTQUFLLEVBQUMsZ0JBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdFSixDQUZKLENBREo7QUF1RkgsQ0E5SkQ7O0dBQU1WLGE7VUFZK0VZLDRELEVBS2xFVSxxRDs7O0tBakJidEIsYTtBQStKU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm8tcHJvZHVjdG8uNDA4ZDJiZGNhYjU5OTFkOWQ3YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tIFwicmVhY3QtZmlyZWJhc2UtZmlsZS11cGxvYWRlclwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtdWxhcmlvLCBDYW1wbywgSW5wdXRTdWJtaXQsIFRpdHVsbywgRXJyb3J9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Zvcm11bGFyaW9cIjtcclxuXHJcbi8vSW1wb3J0YW5kbyBlbCBmaXJlYmFzZSBwYXJhIGluaWNpYXIgbGEgY29uZXhpb24gXHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5cclxuLy9VdGlsaXphbmRvIGVsIGhvb2tzIHZhbGlkYWNpb25cclxuaW1wb3J0IHVzZVZhbGlkYWNpb24gZnJvbSBcIi4uL2hvb2tzL3VzZVZhbGlkYWNpb25cIjtcclxuaW1wb3J0IHZhbGlkYXJDcmVhclByb2R1Y3RvIGZyb20gXCIuLi92YWxpZGFjaW9uL3ZhbGlkYXJDcmVhclByb2R1Y3RvXCI7XHJcblxyXG5jb25zdCBTVEFURV9JTklDSUFMID0ge1xyXG4gICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgZW1wcmVzYTogXCJcIixcclxuICAgIGltYWdlbjogXCJcIixcclxuICAgIHVybDogXCJcIixcclxuICAgIGRlc2NyaXBjaW9uOiBcIlwiXHJcbn1cclxuXHJcbmNvbnN0IE51ZXZvUHJvZHVjdG8gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9TdGF0ZSBkZSBsYXMgaW1hZ2VuZXMgXHJcbiAgICBjb25zdCBbbm9tYnJlaW1hZ2VuLCBndWFyZGFyTm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N1YmllbmRvLCBndWFyZGFyU3ViaWVuZG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNvLCBndWFyZGFyUHJvZ3Jlc29dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdXJsaW1hZ2VuLCBndWFyZGFyVXJsSW1hZ2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICAvL0Vycm9yIGFsIGNyZWFyIGN1ZW50YVxyXG4gICAgY29uc3QgW2Vycm9yLCBndWFyZGFyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgdmFsb3JlcywgZXJyb3Jlcywgc3VibWl0Rm9ybSwgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIgfSA9IHVzZVZhbGlkYWNpb24oU1RBVEVfSU5JQ0lBTCwgdmFsaWRhckNyZWFyUHJvZHVjdG8sIGNyZWFyUHJvZHVjdG8pO1xyXG5cclxuICAgIGNvbnN0IHtub21icmUsIGVtcHJlc2EsIGltYWdlbiwgdXJsLCBkZXNjcmlwY2lvbn0gPSB2YWxvcmVzO1xyXG5cclxuICAgIC8vSE9PSyAgZGUgcm91dGluZyBwYXJhIHJpZGVjY2lvbmFyIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy9Db250ZXh0IGNvbiBsYXMgb3BlcmFjaW9uZXMgY3J1ZCBkZSBmaXJlYmFzZSBcclxuICAgIGNvbnN0IHsgdXN1YXJpbywgZmlyZWJhc2UgfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXJQcm9kdWN0bygpe1xyXG4gICAgICAgIC8vU2kgZWwgdXN1YXJpbyBubyBlc3RhIGF1dGVudGljYWRvIGxsZXZhciBhbCBsb2dpblxyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DcmVhciBlbCBvYmpldG8gZGUgbnVldm8gcHJvZHVjdG9cclxuICAgICAgICBjb25zdCBwcm9kdWN0byA9IHtcclxuICAgICAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgICAgICBlbXByZXNhLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHVybGltYWdlbixcclxuICAgICAgICAgICAgZGVzY3JpcGNpb24sXHJcbiAgICAgICAgICAgIHZvdG9zOiAwLFxyXG4gICAgICAgICAgICBjb21lbnRhcmlvczogW10sXHJcbiAgICAgICAgICAgIGNyZWFkbzogRGF0ZS5ub3coKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL0luc2VydGFybG8gZW4gbGEgYmFzZSBkZSBkYXRvc1xyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuYWRkKHByb2R1Y3RvKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Z1bmNpb25lcyBwYXJhIGNhcmdhciBsYSBpbWFnZW4geSBtb3N0cmFyIGluZm9ybWFjaW9uIGxsZW5hbmRvIGxvcyBzdGF0ZVxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhclByb2dyZXNvKDApO1xyXG4gICAgICAgIGd1YXJkYXJTdWJpZW5kbyh0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gcHJvZ3Jlc28gPT4gZ3VhcmRhclByb2dyZXNvKCB7IHByb2dyZXNvIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZEVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJTdWJpZW5kbyhlcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZFN1Y2Nlc3MgPSBub21icmUgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJQcm9ncmVzbygxMDApO1xyXG4gICAgICAgIGd1YXJkYXJTdWJpZW5kbyhmYWxzZSk7XHJcbiAgICAgICAgZ3VhcmRhck5vbWJyZShub21icmUpO1xyXG4gICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5zdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoXCJwcm9kdWN0b3NcIilcclxuICAgICAgICAgICAgLmNoaWxkKG5vbWJyZSlcclxuICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKClcclxuICAgICAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyVXJsSW1hZ2VuKHVybCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VGl0dWxvPk51ZXZvIFByb2R1Y3RvPC9UaXR1bG8+XHJcbiAgICAgICAgICAgIDxGb3JtdWxhcmlvXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkluZm9ybWFjaW9uIEdlbmVyYWw8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR1IE5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMubm9tYnJlICYmIDxFcnJvcj57ZXJyb3Jlcy5ub21icmV9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wcmVzYVwiPkVtcHJlc2E6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXByZXNhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMuZW1wcmVzYSAmJiA8RXJyb3I+e2Vycm9yZXMuZW1wcmVzYX08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZW5cIj5JbWFnZW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21pemVGaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VSZWY9e2ZpcmViYXNlLnN0b3JhZ2UucmVmKFwicHJvZHVjdG9zXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3RhcnQ9e2hhbmRsZVVwbG9hZFN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkRXJyb3I9e2hhbmRsZVVwbG9hZEVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3VjY2Vzcz17aGFuZGxlVXBsb2FkU3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzPXtoYW5kbGVQcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXJsXCI+VVJMPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy51cmwgJiYgPEVycm9yPntlcnJvcmVzLnVybH08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNvYnJlIHR1IHByb2R1Y3RvPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwY2lvblwiPkRlc2NyaXBjaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcGNpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMuZGVzY3JpcGNpb24gJiYgPEVycm9yPntlcnJvcmVzLmRlc2NyaXBjaW9ufTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yPntlcnJvcn08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgIDxJbnB1dFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQ3JlYXIgUHJvZHVjdG9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtdWxhcmlvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTnVldm9Qcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9