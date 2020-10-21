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
      return console.log(url);
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Nuevo Producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Informacion General"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 29
    }
  })), errores.nombre && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 44
    }
  }, errores.nombre), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 29
    }
  })), errores.empresa && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 45
    }
  }, errores.empresa), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "imagen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 126,
      columnNumber: 29
    }
  })), errores.imagen && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 44
    }
  }, errores.imagen), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "url",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 144,
      columnNumber: 29
    }
  })), errores.url && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }, errores.url)), __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, "Sobre tu producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "descripcion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 29
    }
  })), errores.descripcion && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 45
    }
  }, errores.descripcion)), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["InputSubmit"], {
    type: "submit",
    value: "Crear Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm8tcHJvZHVjdG8uanMiXSwibmFtZXMiOlsiU1RBVEVfSU5JQ0lBTCIsIm5vbWJyZSIsImVtcHJlc2EiLCJpbWFnZW4iLCJ1cmwiLCJkZXNjcmlwY2lvbiIsIk51ZXZvUHJvZHVjdG8iLCJ1c2VTdGF0ZSIsIm5vbWJyZWltYWdlbiIsImd1YXJkYXJOb21icmUiLCJzdWJpZW5kbyIsImd1YXJkYXJTdWJpZW5kbyIsInByb2dyZXNvIiwiZ3VhcmRhclByb2dyZXNvIiwidXJsaW1hZ2VuIiwiZ3VhcmRhclVybEltYWdlbiIsImVycm9yIiwiZ3VhcmRhckVycm9yIiwidXNlVmFsaWRhY2lvbiIsInZhbGlkYXJDcmVhclByb2R1Y3RvIiwiY3JlYXJQcm9kdWN0byIsInZhbG9yZXMiLCJlcnJvcmVzIiwic3VibWl0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwidXN1YXJpbyIsImZpcmViYXNlIiwicHVzaCIsInByb2R1Y3RvIiwidm90b3MiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsIkRhdGUiLCJub3ciLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJoYW5kbGVVcGxvYWRTdGFydCIsImhhbmRsZVByb2dyZXNzIiwiaGFuZGxlVXBsb2FkRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsRUFEVTtBQUVsQkMsU0FBTyxFQUFFLEVBRlM7QUFH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eUJBREosRUFFSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFPLFdBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFIsRUFFUTtBQUNJLE1BQUUsRUFBQyxhQURQO0FBRUksUUFBSSxFQUFDLGFBRlQ7QUFHSSxZQUFRLEVBQUVxQixZQUhkO0FBSUksVUFBTSxFQUFJQyxVQUpkO0FBS0ksU0FBSyxFQUFFckIsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlIsQ0FGSixFQVlLaUIsT0FBTyxDQUFDakIsV0FBUixJQUF1QixNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUWlCLE9BQU8sQ0FBQ2pCLFdBQWhCLENBWjVCLENBaEVKLEVBK0VLVyxLQUFLLElBQUksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQVIsQ0EvRWQsRUFnRkksTUFBQyxxRUFBRDtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksU0FBSyxFQUFDLGdCQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoRkosQ0FGSixDQURKO0FBMEZILENBN0pEOztHQUFNVixhO1VBWStFWSw0RCxFQUtsRVUscUQ7OztLQWpCYnRCLGE7QUE4SlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL251ZXZvLXByb2R1Y3RvLmRmMzM4NzQ5Nzc3YmU2ZTVlZmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSBcInJlYWN0LWZpcmViYXNlLWZpbGUtdXBsb2FkZXJcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXVsYXJpbywgQ2FtcG8sIElucHV0U3VibWl0LCBUaXR1bG8sIEVycm9yfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9Gb3JtdWxhcmlvXCI7XHJcblxyXG4vL0ltcG9ydGFuZG8gZWwgZmlyZWJhc2UgcGFyYSBpbmljaWFyIGxhIGNvbmV4aW9uIFxyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuXHJcbi8vVXRpbGl6YW5kbyBlbCBob29rcyB2YWxpZGFjaW9uXHJcbmltcG9ydCB1c2VWYWxpZGFjaW9uIGZyb20gXCIuLi9ob29rcy91c2VWYWxpZGFjaW9uXCI7XHJcbmltcG9ydCB2YWxpZGFyQ3JlYXJQcm9kdWN0byBmcm9tIFwiLi4vdmFsaWRhY2lvbi92YWxpZGFyQ3JlYXJQcm9kdWN0b1wiO1xyXG5cclxuY29uc3QgU1RBVEVfSU5JQ0lBTCA9IHtcclxuICAgIG5vbWJyZTogXCJcIixcclxuICAgIGVtcHJlc2E6IFwiXCIsXHJcbiAgICBpbWFnZW46IFwiXCIsXHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgICBkZXNjcmlwY2lvbjogXCJcIlxyXG59XHJcblxyXG5jb25zdCBOdWV2b1Byb2R1Y3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vU3RhdGUgZGUgbGFzIGltYWdlbmVzIFxyXG4gICAgY29uc3QgW25vbWJyZWltYWdlbiwgZ3VhcmRhck5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdWJpZW5kbywgZ3VhcmRhclN1YmllbmRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzbywgZ3VhcmRhclByb2dyZXNvXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3VybGltYWdlbiwgZ3VhcmRhclVybEltYWdlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gICAgLy9FcnJvciBhbCBjcmVhciBjdWVudGFcclxuICAgIGNvbnN0IFtlcnJvciwgZ3VhcmRhckVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7IHZhbG9yZXMsIGVycm9yZXMsIHN1Ym1pdEZvcm0sIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVCbHVyIH0gPSB1c2VWYWxpZGFjaW9uKFNUQVRFX0lOSUNJQUwsIHZhbGlkYXJDcmVhclByb2R1Y3RvLCBjcmVhclByb2R1Y3RvKTtcclxuXHJcbiAgICBjb25zdCB7bm9tYnJlLCBlbXByZXNhLCBpbWFnZW4sIHVybCwgZGVzY3JpcGNpb259ID0gdmFsb3JlcztcclxuXHJcbiAgICAvL0hPT0sgIGRlIHJvdXRpbmcgcGFyYSByaWRlY2Npb25hciBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vQ29udGV4dCBjb24gbGFzIG9wZXJhY2lvbmVzIGNydWQgZGUgZmlyZWJhc2UgXHJcbiAgICBjb25zdCB7IHVzdWFyaW8sIGZpcmViYXNlIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWFyUHJvZHVjdG8oKXtcclxuICAgICAgICAvL1NpIGVsIHVzdWFyaW8gbm8gZXN0YSBhdXRlbnRpY2FkbyBsbGV2YXIgYWwgbG9naW5cclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXIgZWwgb2JqZXRvIGRlIG51ZXZvIHByb2R1Y3RvXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG8gPSB7XHJcbiAgICAgICAgICAgIG5vbWJyZSxcclxuICAgICAgICAgICAgZW1wcmVzYSxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB1cmxpbWFnZW4sXHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICAgICAgICB2b3RvczogMCxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IFtdLFxyXG4gICAgICAgICAgICBjcmVhZG86IERhdGUubm93KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbnNlcnRhcmxvIGVuIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmFkZChwcm9kdWN0byk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GdW5jaW9uZXMgcGFyYSBjYXJnYXIgbGEgaW1hZ2VuIHkgbW9zdHJhciBpbmZvcm1hY2lvbiBsbGVuYW5kbyBsb3Mgc3RhdGVcclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJQcm9ncmVzbygwKTtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9IHByb2dyZXNvID0+IGd1YXJkYXJQcm9ncmVzbyggeyBwcm9ncmVzbyB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRFcnJvciA9IGVycm9yID0+IHtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8oZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRTdWNjZXNzID0gbm9tYnJlID0+IHtcclxuICAgICAgICBndWFyZGFyUHJvZ3Jlc28oMTAwKTtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8oZmFsc2UpO1xyXG4gICAgICAgIGd1YXJkYXJOb21icmUobm9tYnJlKTtcclxuICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKFwicHJvZHVjdG9zXCIpXHJcbiAgICAgICAgICAgIC5jaGlsZChub21icmUpXHJcbiAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpXHJcbiAgICAgICAgICAgIC50aGVuKHVybCA9PiBjb25zb2xlLmxvZyh1cmwpIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VGl0dWxvPk51ZXZvIFByb2R1Y3RvPC9UaXR1bG8+XHJcbiAgICAgICAgICAgIDxGb3JtdWxhcmlvXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkluZm9ybWFjaW9uIEdlbmVyYWw8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR1IE5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMubm9tYnJlICYmIDxFcnJvcj57ZXJyb3Jlcy5ub21icmV9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wcmVzYVwiPkVtcHJlc2E6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXByZXNhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yZXMuZW1wcmVzYSAmJiA8RXJyb3I+e2Vycm9yZXMuZW1wcmVzYX08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZW5cIj5JbWFnZW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbWFnZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9taXplRmlsZW5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUmVmPXtmaXJlYmFzZS5zdG9yYWdlLnJlZihcInByb2R1Y3Rvc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN0YXJ0PXtoYW5kbGVVcGxvYWRTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZEVycm9yPXtoYW5kbGVVcGxvYWRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3M9e2hhbmRsZVVwbG9hZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17aGFuZGxlUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5pbWFnZW4gJiYgPEVycm9yPntlcnJvcmVzLmltYWdlbn08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1cmxcIj5VUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLnVybCAmJiA8RXJyb3I+e2Vycm9yZXMudXJsfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+U29icmUgdHUgcHJvZHVjdG88L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXBjaW9uXCI+RGVzY3JpcGNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5kZXNjcmlwY2lvbiAmJiA8RXJyb3I+e2Vycm9yZXMuZGVzY3JpcGNpb259PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm11bGFyaW8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOdWV2b1Byb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=