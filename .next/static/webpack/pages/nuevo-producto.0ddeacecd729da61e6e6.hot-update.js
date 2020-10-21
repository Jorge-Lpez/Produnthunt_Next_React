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
      guardarUrlImagen = _useState4[1]; //Error al crear Producto


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
              return _context.abrupt("return", router.push("/"));

            case 5:
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
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Nuevo Producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "Informacion General"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 29
    }
  })), errores.nombre && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 44
    }
  }, errores.nombre), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
      columnNumber: 29
    }
  })), errores.empresa && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 45
    }
  }, errores.empresa), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "imagen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 29
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "url",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 147,
      columnNumber: 29
    }
  })), errores.url && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 41
    }
  }, errores.url)), __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, "Sobre tu producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "descripcion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 163,
      columnNumber: 29
    }
  })), errores.descripcion && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 45
    }
  }, errores.descripcion)), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["InputSubmit"], {
    type: "submit",
    value: "Crear Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm8tcHJvZHVjdG8uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsIm5vbWJyZSIsImVtcHJlc2EiLCJpbWFnZW4iLCJ1cmwiLCJkZXNjcmlwY2lvbiIsIk51ZXZvUHJvZHVjdG8iLCJ1c2VTdGF0ZSIsIm5vbWJyZWltYWdlbiIsImd1YXJkYXJOb21icmUiLCJzdWJpZW5kbyIsImd1YXJkYXJTdWJpZW5kbyIsInByb2dyZXNvIiwiZ3VhcmRhclByb2dyZXNvIiwidXJsaW1hZ2VuIiwiZ3VhcmRhclVybEltYWdlbiIsImVycm9yIiwiZ3VhcmRhckVycm9yIiwidXNlVmFsaWRhY2lvbiIsInZhbGlkYXJDcmVhclByb2R1Y3RvIiwiY3JlYXJQcm9kdWN0byIsInZhbG9yZXMiLCJlcnJvcmVzIiwic3VibWl0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwidXN1YXJpbyIsImZpcmViYXNlIiwicHVzaCIsInByb2R1Y3RvIiwidm90b3MiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsIkRhdGUiLCJub3ciLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJoYW5kbGVVcGxvYWRTdGFydCIsImhhbmRsZVByb2dyZXNzIiwiaGFuZGxlVXBsb2FkRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsRUFEVTtBQUVsQkMsU0FBTyxFQUFFLEVBRlM7QUFH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QUFBO0FBQUE7QUFBQSxtQkFEUixFQUVRO0FBQ0ksTUFBRSxFQUFDLGFBRFA7QUFFSSxRQUFJLEVBQUMsYUFGVDtBQUdJLFlBQVEsRUFBRXFCLFlBSGQ7QUFJSSxVQUFNLEVBQUlDLFVBSmQ7QUFLSSxTQUFLLEVBQUVyQixXQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUixDQUZKLEVBWUtpQixPQUFPLENBQUNqQixXQUFSLElBQXVCLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRaUIsT0FBTyxDQUFDakIsV0FBaEIsQ0FaNUIsQ0E3REosRUE0RUtXLEtBQUssSUFBSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBUixDQTVFZCxFQTZFSSxNQUFDLHFFQUFEO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxTQUFLLEVBQUMsZ0JBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdFSixDQUZKLENBREo7QUF1RkgsQ0FoS0Q7O0dBQU1WLGE7VUFZK0VZLDRELEVBS2xFVSxxRDs7O0tBakJidEIsYTtBQWlLU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm8tcHJvZHVjdG8uMGRkZWFjZWNkNzI5ZGE2MWU2ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tIFwicmVhY3QtZmlyZWJhc2UtZmlsZS11cGxvYWRlclwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtdWxhcmlvLCBDYW1wbywgSW5wdXRTdWJtaXQsIFRpdHVsbywgRXJyb3J9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0Zvcm11bGFyaW9cIjtcclxuXHJcbi8vSW1wb3J0YW5kbyBlbCBmaXJlYmFzZSBwYXJhIGluaWNpYXIgbGEgY29uZXhpb24gXHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5cclxuLy9VdGlsaXphbmRvIGVsIGhvb2tzIHZhbGlkYWNpb25cclxuaW1wb3J0IHVzZVZhbGlkYWNpb24gZnJvbSBcIi4uL2hvb2tzL3VzZVZhbGlkYWNpb25cIjtcclxuaW1wb3J0IHZhbGlkYXJDcmVhclByb2R1Y3RvIGZyb20gXCIuLi92YWxpZGFjaW9uL3ZhbGlkYXJDcmVhclByb2R1Y3RvXCI7XHJcblxyXG5jb25zdCBTVEFURV9JTklDSUFMID0ge1xyXG4gICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgZW1wcmVzYTogXCJcIixcclxuICAgIGltYWdlbjogXCJcIixcclxuICAgIHVybDogXCJcIixcclxuICAgIGRlc2NyaXBjaW9uOiBcIlwiXHJcbn1cclxuXHJcbmNvbnN0IE51ZXZvUHJvZHVjdG8gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9TdGF0ZSBkZSBsYXMgaW1hZ2VuZXMgXHJcbiAgICBjb25zdCBbbm9tYnJlaW1hZ2VuLCBndWFyZGFyTm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N1YmllbmRvLCBndWFyZGFyU3ViaWVuZG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNvLCBndWFyZGFyUHJvZ3Jlc29dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdXJsaW1hZ2VuLCBndWFyZGFyVXJsSW1hZ2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICAvL0Vycm9yIGFsIGNyZWFyIFByb2R1Y3RvXHJcbiAgICBjb25zdCBbZXJyb3IsIGd1YXJkYXJFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgeyB2YWxvcmVzLCBlcnJvcmVzLCBzdWJtaXRGb3JtLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciB9ID0gdXNlVmFsaWRhY2lvbihTVEFURV9JTklDSUFMLCB2YWxpZGFyQ3JlYXJQcm9kdWN0bywgY3JlYXJQcm9kdWN0byk7XHJcblxyXG4gICAgY29uc3Qge25vbWJyZSwgZW1wcmVzYSwgaW1hZ2VuLCB1cmwsIGRlc2NyaXBjaW9ufSA9IHZhbG9yZXM7XHJcblxyXG4gICAgLy9IT09LICBkZSByb3V0aW5nIHBhcmEgcmlkZWNjaW9uYXIgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvL0NvbnRleHQgY29uIGxhcyBvcGVyYWNpb25lcyBjcnVkIGRlIGZpcmViYXNlIFxyXG4gICAgY29uc3QgeyB1c3VhcmlvLCBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhclByb2R1Y3RvKCl7XHJcbiAgICAgICAgLy9TaSBlbCB1c3VhcmlvIG5vIGVzdGEgYXV0ZW50aWNhZG8gbGxldmFyIGFsIGxvZ2luXHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NyZWFyIGVsIG9iamV0byBkZSBudWV2byBwcm9kdWN0b1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvID0ge1xyXG4gICAgICAgICAgICBub21icmUsXHJcbiAgICAgICAgICAgIGVtcHJlc2EsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgdXJsaW1hZ2VuLFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbixcclxuICAgICAgICAgICAgdm90b3M6IDAsXHJcbiAgICAgICAgICAgIGNvbWVudGFyaW9zOiBbXSxcclxuICAgICAgICAgICAgY3JlYWRvOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vSW5zZXJ0YXJsbyBlbiBsYSBiYXNlIGRlIGRhdG9zXHJcbiAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5hZGQocHJvZHVjdG8pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnVuY2lvbmVzIHBhcmEgY2FyZ2FyIGxhIGltYWdlbiB5IG1vc3RyYXIgaW5mb3JtYWNpb24gbGxlbmFuZG8gbG9zIHN0YXRlXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyUHJvZ3Jlc28oMCk7XHJcbiAgICAgICAgZ3VhcmRhclN1YmllbmRvKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBwcm9ncmVzbyA9PiBndWFyZGFyUHJvZ3Jlc28oIHsgcHJvZ3Jlc28gfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkRXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAgICAgZ3VhcmRhclN1YmllbmRvKGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkU3VjY2VzcyA9IG5vbWJyZSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhclByb2dyZXNvKDEwMCk7XHJcbiAgICAgICAgZ3VhcmRhclN1YmllbmRvKGZhbHNlKTtcclxuICAgICAgICBndWFyZGFyTm9tYnJlKG5vbWJyZSk7XHJcbiAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLnN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihcInByb2R1Y3Rvc1wiKVxyXG4gICAgICAgICAgICAuY2hpbGQobm9tYnJlKVxyXG4gICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJVcmxJbWFnZW4odXJsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUaXR1bG8+TnVldm8gUHJvZHVjdG88L1RpdHVsbz5cclxuICAgICAgICAgICAgPEZvcm11bGFyaW9cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+SW5mb3JtYWNpb24gR2VuZXJhbDwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiPk5vbWJyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHUgTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5ub21icmUgJiYgPEVycm9yPntlcnJvcmVzLm5vbWJyZX08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXByZXNhXCI+RW1wcmVzYTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcHJlc2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5lbXByZXNhICYmIDxFcnJvcj57ZXJyb3Jlcy5lbXByZXNhfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlblwiPkltYWdlbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbWl6ZUZpbGVuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVJlZj17ZmlyZWJhc2Uuc3RvcmFnZS5yZWYoXCJwcm9kdWN0b3NcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdGFydD17aGFuZGxlVXBsb2FkU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRFcnJvcj17aGFuZGxlVXBsb2FkRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdWNjZXNzPXtoYW5kbGVVcGxvYWRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M9e2hhbmRsZVByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1cmxcIj5VUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLnVybCAmJiA8RXJyb3I+e2Vycm9yZXMudXJsfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+U29icmUgdHUgcHJvZHVjdG88L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXBjaW9uXCI+RGVzY3JpcGNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5kZXNjcmlwY2lvbiAmJiA8RXJyb3I+e2Vycm9yZXMuZGVzY3JpcGNpb259PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm11bGFyaW8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOdWV2b1Byb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=