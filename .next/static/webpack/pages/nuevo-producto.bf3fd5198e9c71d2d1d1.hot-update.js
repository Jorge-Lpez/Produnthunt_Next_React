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
      guardarUrlImagen = _useState4[1];

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
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Nuevo Producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Informacion General"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 29
    }
  })), errores.nombre && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 44
    }
  }, errores.nombre), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 29
    }
  })), errores.empresa && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 45
    }
  }, errores.empresa), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "imagen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 131,
      columnNumber: 29
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "url",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 146,
      columnNumber: 29
    }
  })), errores.url && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  }, errores.url)), __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, "Sobre tu producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "descripcion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 162,
      columnNumber: 29
    }
  })), errores.descripcion && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 45
    }
  }, errores.descripcion)), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["InputSubmit"], {
    type: "submit",
    value: "Crear Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  })));
};

_s(NuevoProducto, "LwrVcBZTZ+No9+MKdCiiAUBE1MM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm8tcHJvZHVjdG8uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsIm5vbWJyZSIsImVtcHJlc2EiLCJpbWFnZW4iLCJ1cmwiLCJkZXNjcmlwY2lvbiIsIk51ZXZvUHJvZHVjdG8iLCJ1c2VTdGF0ZSIsIm5vbWJyZWltYWdlbiIsImd1YXJkYXJOb21icmUiLCJzdWJpZW5kbyIsImd1YXJkYXJTdWJpZW5kbyIsInByb2dyZXNvIiwiZ3VhcmRhclByb2dyZXNvIiwidXJsaW1hZ2VuIiwiZ3VhcmRhclVybEltYWdlbiIsInVzZVZhbGlkYWNpb24iLCJ2YWxpZGFyQ3JlYXJQcm9kdWN0byIsImNyZWFyUHJvZHVjdG8iLCJ2YWxvcmVzIiwiZXJyb3JlcyIsInN1Ym1pdEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsInVzdWFyaW8iLCJmaXJlYmFzZSIsInB1c2giLCJwcm9kdWN0byIsInZvdG9zIiwiY29tZW50YXJpb3MiLCJjcmVhZG8iLCJEYXRlIiwibm93IiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiaGFuZGxlVXBsb2FkU3RhcnQiLCJoYW5kbGVQcm9ncmVzcyIsImhhbmRsZVVwbG9hZEVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsRUFEVTtBQUVsQkMsU0FBTyxFQUFFLEVBRlM7QUFHbEJDLFFBQU0sRUFBRSxF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QUlDLFVBSmQ7QUFLSSxTQUFLLEVBQUVuQixXQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUixDQUZKLEVBWUtlLE9BQU8sQ0FBQ2YsV0FBUixJQUF1QixNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUWUsT0FBTyxDQUFDZixXQUFoQixDQVo1QixDQTdESixFQTRFS3VDLEtBQUssSUFBSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBUixDQTVFZCxFQTZFSSxNQUFDLHFFQUFEO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxTQUFLLEVBQUMsZ0JBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdFSixDQUZKLENBREo7QUF1RkgsQ0EvSkQ7O0dBQU10QyxhO1VBVytFVSw0RCxFQUtsRVUscUQ7OztLQWhCYnBCLGE7QUFnS1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL251ZXZvLXByb2R1Y3RvLmJmM2ZkNTE5OGU5YzcxZDJkMWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSBcInJlYWN0LWZpcmViYXNlLWZpbGUtdXBsb2FkZXJcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXVsYXJpbywgQ2FtcG8sIElucHV0U3VibWl0LCBUaXR1bG8sIEVycm9yfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9Gb3JtdWxhcmlvXCI7XHJcblxyXG4vL0ltcG9ydGFuZG8gZWwgZmlyZWJhc2UgcGFyYSBpbmljaWFyIGxhIGNvbmV4aW9uIFxyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuXHJcbi8vVXRpbGl6YW5kbyBlbCBob29rcyB2YWxpZGFjaW9uXHJcbmltcG9ydCB1c2VWYWxpZGFjaW9uIGZyb20gXCIuLi9ob29rcy91c2VWYWxpZGFjaW9uXCI7XHJcbmltcG9ydCB2YWxpZGFyQ3JlYXJQcm9kdWN0byBmcm9tIFwiLi4vdmFsaWRhY2lvbi92YWxpZGFyQ3JlYXJQcm9kdWN0b1wiO1xyXG5cclxuY29uc3QgU1RBVEVfSU5JQ0lBTCA9IHtcclxuICAgIG5vbWJyZTogXCJcIixcclxuICAgIGVtcHJlc2E6IFwiXCIsXHJcbiAgICBpbWFnZW46IFwiXCIsXHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgICBkZXNjcmlwY2lvbjogXCJcIlxyXG59XHJcblxyXG5jb25zdCBOdWV2b1Byb2R1Y3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vU3RhdGUgZGUgbGFzIGltYWdlbmVzIFxyXG4gICAgY29uc3QgW25vbWJyZWltYWdlbiwgZ3VhcmRhck5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdWJpZW5kbywgZ3VhcmRhclN1YmllbmRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzbywgZ3VhcmRhclByb2dyZXNvXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3VybGltYWdlbiwgZ3VhcmRhclVybEltYWdlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gICBcclxuXHJcbiAgICBjb25zdCB7IHZhbG9yZXMsIGVycm9yZXMsIHN1Ym1pdEZvcm0sIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVCbHVyIH0gPSB1c2VWYWxpZGFjaW9uKFNUQVRFX0lOSUNJQUwsIHZhbGlkYXJDcmVhclByb2R1Y3RvLCBjcmVhclByb2R1Y3RvKTtcclxuXHJcbiAgICBjb25zdCB7bm9tYnJlLCBlbXByZXNhLCBpbWFnZW4sIHVybCwgZGVzY3JpcGNpb259ID0gdmFsb3JlcztcclxuXHJcbiAgICAvL0hPT0sgIGRlIHJvdXRpbmcgcGFyYSByaWRlY2Npb25hciBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vQ29udGV4dCBjb24gbGFzIG9wZXJhY2lvbmVzIGNydWQgZGUgZmlyZWJhc2UgXHJcbiAgICBjb25zdCB7IHVzdWFyaW8sIGZpcmViYXNlIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWFyUHJvZHVjdG8oKXtcclxuICAgICAgICAvL1NpIGVsIHVzdWFyaW8gbm8gZXN0YSBhdXRlbnRpY2FkbyBsbGV2YXIgYWwgbG9naW5cclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXIgZWwgb2JqZXRvIGRlIG51ZXZvIHByb2R1Y3RvXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG8gPSB7XHJcbiAgICAgICAgICAgIG5vbWJyZSxcclxuICAgICAgICAgICAgZW1wcmVzYSxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB1cmxpbWFnZW4sXHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICAgICAgICB2b3RvczogMCxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IFtdLFxyXG4gICAgICAgICAgICBjcmVhZG86IERhdGUubm93KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbnNlcnRhcmxvIGVuIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmFkZChwcm9kdWN0byk7XHJcblxyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GdW5jaW9uZXMgcGFyYSBjYXJnYXIgbGEgaW1hZ2VuIHkgbW9zdHJhciBpbmZvcm1hY2lvbiBsbGVuYW5kbyBsb3Mgc3RhdGVcclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJQcm9ncmVzbygwKTtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IHByb2dyZXNvID0+IGd1YXJkYXJQcm9ncmVzbyggeyBwcm9ncmVzbyB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRFcnJvciA9IGVycm9yID0+IHtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8oZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRTdWNjZXNzID0gbm9tYnJlID0+IHtcclxuICAgICAgICBndWFyZGFyUHJvZ3Jlc28oMTAwKTtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8oZmFsc2UpO1xyXG4gICAgICAgIGd1YXJkYXJOb21icmUobm9tYnJlKTtcclxuICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKFwicHJvZHVjdG9zXCIpXHJcbiAgICAgICAgICAgIC5jaGlsZChub21icmUpXHJcbiAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpXHJcbiAgICAgICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgZ3VhcmRhclVybEltYWdlbih1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRpdHVsbz5OdWV2byBQcm9kdWN0bzwvVGl0dWxvPlxyXG4gICAgICAgICAgICA8Rm9ybXVsYXJpb1xyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5JbmZvcm1hY2lvbiBHZW5lcmFsPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9tYnJlXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUdSBOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLm5vbWJyZSAmJiA8RXJyb3I+e2Vycm9yZXMubm9tYnJlfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcHJlc2FcIj5FbXByZXNhOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wcmVzYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLmVtcHJlc2EgJiYgPEVycm9yPntlcnJvcmVzLmVtcHJlc2F9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VuXCI+SW1hZ2VuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9taXplRmlsZW5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUmVmPXtmaXJlYmFzZS5zdG9yYWdlLnJlZihcInByb2R1Y3Rvc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN0YXJ0PXtoYW5kbGVVcGxvYWRTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZEVycm9yPXtoYW5kbGVVcGxvYWRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3M9e2hhbmRsZVVwbG9hZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17aGFuZGxlUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVybFwiPlVSTDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMudXJsICYmIDxFcnJvcj57ZXJyb3Jlcy51cmx9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5Tb2JyZSB0dSBwcm9kdWN0bzwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcGNpb25cIj5EZXNjcmlwY2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcGNpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXBjaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLmRlc2NyaXBjaW9uICYmIDxFcnJvcj57ZXJyb3Jlcy5kZXNjcmlwY2lvbn08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvcj57ZXJyb3J9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNyZWFyIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybXVsYXJpbz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE51ZXZvUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==