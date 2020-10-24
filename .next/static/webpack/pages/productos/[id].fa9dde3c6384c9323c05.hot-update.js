webpackHotUpdate_N_E("pages/productos/[id]",{

/***/ "./pages/productos/[id].js":
/*!*********************************!*\
  !*** ./pages/productos/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_layout_404__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/404 */ "./components/layout/404.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Spinner */ "./components/layout/Spinner.js");
/* harmony import */ var _components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ui/Formulario */ "./components/ui/Formulario.js");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/ui/Boton */ "./components/ui/Boton.js");






var _this = undefined,
    _jsxFileName = "C:\\Users\\jorge\\Documents\\Programacion Web\\Curso udemy React js\\React js app\\produnthuntnext\\pages\\productos\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    padding: .5rem 2rem;\n    background-color: #DA552F;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    display: inline-block;\n    text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    margin: 2rem 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    text-align: center;\n    margin-top: 5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    @media (min-width: 768px) {\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        column-gap: 2rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var ContenedorProducto = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
_c = ContenedorProducto;
var Nombre = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].h1(_templateObject2());
_c2 = Nombre;
var Titulo2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].h2(_templateObject3());
_c3 = Titulo2;
var CreadorProducto = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].p(_templateObject4());
_c4 = CreadorProducto;

var Producto = function Producto() {
  _s();

  //Routing para obtener el id actual 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var id = router.query.id; //Crando state para cambio de producto y no ciclar la aplicacion

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      consultarDB = _useState[0],
      guardarConsultarDB = _useState[1]; //Creando estate para guardar el resultado de la busqueda


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      producto = _useState2[0],
      guardarProducto = _useState2[1]; //state para el error en la consulta 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      error = _useState3[0],
      guardarError = _useState3[1]; //State para activar el spinner 


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      activar = _useState4[0],
      guardarActivar = _useState4[1]; //Creando state para comentarios


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    mensaje: ""
  }),
      nuevosComentarios = _useState5[0],
      guardarComentarios = _useState5[1]; // Extrayendo firebase de firebasecontext para llamar a la funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_9__["FirebaseContext"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (id) {
      var obtenerProducto = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
          var productoQuery, producto;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return firebase.db.collection("productos").doc(id);

                case 2:
                  productoQuery = _context.sent;
                  _context.next = 5;
                  return productoQuery.get();

                case 5:
                  producto = _context.sent;

                  if (producto.exists) {
                    guardarProducto(producto.data());
                    guardarActivar(true);
                    setTimeout(function () {
                      guardarActivar(false);
                    }, 1000);
                  } else {
                    guardarError(true);
                  }

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function obtenerProducto() {
          return _ref.apply(this, arguments);
        };
      }();

      obtenerProducto();
    }
  }, [id, cambio]); //guardarActivar(true);
  //if(Object.keys(producto).length === 0)return <Spinner/>;

  var comentarios = producto.comentarios,
      creado = producto.creado,
      descripcion = producto.descripcion,
      empresa = producto.empresa,
      nombre = producto.nombre,
      url = producto.url,
      urlimagen = producto.urlimagen,
      votos = producto.votos,
      creador = producto.creador,
      haVotado = producto.haVotado;

  var votarProducto = function votarProducto() {
    if (!usuario) {
      return router.push("/");
    }

    var NuevoVotos = votos + 1; //Verficar si el usuario ha votado 

    if (haVotado.includes(usuario.uid)) return; //Guardar el ID del usuario que ha votado

    var hanvotado = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(haVotado), [usuario.uid]); //Agregando a la base de datos

    firebase.db.collection("productos").doc(id).update({
      votos: NuevoVotos,
      haVotado: hanvotado
    }); //Agregando al state

    guardarProducto(_objectSpread(_objectSpread({}, producto), {}, {
      votos: NuevoVotos
    }));
    guardarCambio("Cambio");
  }; //Creando funcion para llenar el state de comentarios


  var handleComentarios = function handleComentarios(e) {
    guardarComentarios(_objectSpread(_objectSpread({}, nuevosComentarios), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  }; //Funcion vewrifica si es el creador el que escribe el comeentario


  var origenCreador = function origenCreador(id) {
    if (creador.id === id) {
      return true;
    }
  }; //Creando funcion boton comentar en el formulario para agregar formulari


  var onsubmitComentario = function onsubmitComentario(e) {
    e.preventDefault();

    if (!usuario) {
      return router.push("/");
    } //Informacion extra al comentario 


    nuevosComentarios.usuarioId = usuario.uid;
    nuevosComentarios.usuarioNombre = usuario.displayName; //Tomar copia de comentario y agregarlos al arreglo

    var nuevosComentario = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(comentarios), [nuevosComentarios]); //Actualizar la BD

    firebase.db.collection("productos").doc(id).update({
      comentarios: nuevosComentario
    }); // Actualizar el state

    guardarProducto(_objectSpread(_objectSpread({}, producto), {}, {
      comentarios: nuevosComentario
    }));
    guardarComentarios({
      mensaje: ""
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, activar || !producto ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 49
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_14__["es"]
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 49
    }
  }, "Por ", creador.nombre, " de ", empresa), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 49
    }
  }, descripcion), usuario && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 57
    }
  }, "Agrega tu comentario"), __jsx("form", {
    onSubmit: onsubmitComentario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 57
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 61
    }
  }, __jsx("input", {
    type: "text",
    name: "mensaje",
    onChange: handleComentarios,
    value: nuevosComentarios.mensaje,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 65
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 61
    }
  }))), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.length === 0 ? "Aun no hay comentarios" : __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 53
    }
  }, comentarios.map(function (comentario, i) {
    return __jsx("li", {
      key: "".concat(comentario.usuarioId, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 61
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 65
      }
    }, comentario.mensaje), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 65
      }
    }, "Escrito por:", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 69
      }
    }, "  ".concat(comentario.usuarioNombre))), origenCreador(comentario.usuarioId) && __jsx(CreadorProducto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 69
      }
    }, "Es creador"));
  }))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 45
    }
  }, __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    target: "_blank",
    bgColor: "true",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 49
    }
  }, "Visitar Url"), __jsx("div", {
    className: "campo-votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 53
    }
  }, votos, " Votos"), usuario && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: votarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 57
    }
  }, "Votar"))))))));
};

_s(Producto, "OaqDGNV147H2xnz5ePdiLr7ZesI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c5 = Producto;
/* harmony default export */ __webpack_exports__["default"] = (Producto);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ContenedorProducto");
$RefreshReg$(_c2, "Nombre");
$RefreshReg$(_c3, "Titulo2");
$RefreshReg$(_c4, "CreadorProducto");
$RefreshReg$(_c5, "Producto");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIkNyZWFkb3JQcm9kdWN0byIsInAiLCJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvbnN1bHRhckRCIiwiZ3VhcmRhckNvbnN1bHRhckRCIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsIm1lbnNhamUiLCJudWV2b3NDb21lbnRhcmlvcyIsImd1YXJkYXJDb21lbnRhcmlvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG8iLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0b1F1ZXJ5IiwiZ2V0IiwiZXhpc3RzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjYW1iaW8iLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwiY3JlYWRvciIsImhhVm90YWRvIiwidm90YXJQcm9kdWN0byIsInB1c2giLCJOdWV2b1ZvdG9zIiwiaW5jbHVkZXMiLCJ1aWQiLCJoYW52b3RhZG8iLCJ1cGRhdGUiLCJndWFyZGFyQ2FtYmlvIiwiaGFuZGxlQ29tZW50YXJpb3MiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib3JpZ2VuQ3JlYWRvciIsIm9uc3VibWl0Q29tZW50YXJpbyIsInByZXZlbnREZWZhdWx0IiwidXN1YXJpb0lkIiwidXN1YXJpb05vbWJyZSIsImRpc3BsYXlOYW1lIiwibnVldm9zQ29tZW50YXJpbyIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJEYXRlIiwibG9jYWxlIiwiZXMiLCJsZW5ndGgiLCJtYXAiLCJjb21lbnRhcmlvIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHdEQUFNLENBQUNDLEdBQVYsbUJBQXhCO0tBQU1GLGtCO0FBUU4sSUFBTUcsTUFBTSxHQUFHRix3REFBTSxDQUFDRyxFQUFWLG9CQUFaO01BQU1ELE07QUFLTixJQUFNRSxPQUFPLEdBQUdKLHdEQUFNLENBQUNLLEVBQVYsb0JBQWI7TUFBTUQsTztBQUlOLElBQU1FLGVBQWUsR0FBR04sd0RBQU0sQ0FBQ08sQ0FBVixvQkFBckI7TUFBTUQsZTs7QUFVTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhtQixNQUlGQyxFQUpFLEdBSU9GLE1BSlAsQ0FJWEcsS0FKVyxDQUlGRCxFQUpFLEVBTW5COztBQU5tQixrQkFPc0JFLHNEQUFRLENBQUMsRUFBRCxDQVA5QjtBQUFBLE1BT2JDLFdBUGE7QUFBQSxNQU9BQyxrQkFQQSxpQkFRbkI7OztBQVJtQixtQkFTaUJGLHNEQUFRLENBQUMsRUFBRCxDQVR6QjtBQUFBLE1BU1pHLFFBVFk7QUFBQSxNQVNGQyxlQVRFLGtCQVVuQjs7O0FBVm1CLG1CQVdXSixzREFBUSxDQUFDLEtBQUQsQ0FYbkI7QUFBQSxNQVdaSyxLQVhZO0FBQUEsTUFXTEMsWUFYSyxrQkFZbkI7OztBQVptQixtQkFhZU4sc0RBQVEsQ0FBQyxLQUFELENBYnZCO0FBQUEsTUFhWk8sT0FiWTtBQUFBLE1BYUhDLGNBYkcsa0JBY25COzs7QUFk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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlzRCxVQUFVLENBQUNULGFBQXZCLEVBREosQ0FKSixFQU9LSixhQUFhLENBQUNhLFVBQVUsQ0FBQ1YsU0FBWixDQUFiLElBQ0csTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUlIsQ0FEYztBQUFBLEdBQWpCLENBREwsQ0E1QlgsQ0FETCxFQThDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUNJLFVBQU0sRUFBQyxRQURYO0FBRUksV0FBTyxFQUFDLE1BRlo7QUFHSSxRQUFJLEVBQUVyQixHQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFRSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JFLEtBQXRCLFdBREosRUFFS25CLE9BQU8sSUFDSixNQUFDLDZEQUFEO0FBQ0ksV0FBTyxFQUFFc0IsYUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFIsQ0FSSixDQTlDUixDQUpOLENBSE4sQ0FIWixDQURKLENBREo7QUFxRkgsQ0FoTUQ7O0dBQU0xQyxRO1VBR2FFLHFEOzs7TUFIYkYsUTtBQWtNU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tpZF0uZmE5ZGRlM2M2Mzg0YzkzMjNjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBFcnJvcjQwNCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvNDA0XCI7XHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgQ2FtcG8sIElucHV0U3VibWl0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9Gb3JtdWxhcmlvXCI7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93IGZyb20gXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93XCI7XHJcbmltcG9ydCB7IGVzIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQgQm90b24gIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0JvdG9uXCI7XHJcblxyXG5jb25zdCBDb250ZW5lZG9yUHJvZHVjdG8gPSBzdHlsZWQuZGl2YFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMnJlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE5vbWJyZSA9IHN0eWxlZC5oMWBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbmA7XHJcblxyXG5jb25zdCBUaXR1bG8yID0gc3R5bGVkLmgyYFxyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbmA7XHJcblxyXG5jb25zdCBDcmVhZG9yUHJvZHVjdG8gPSBzdHlsZWQucGBcclxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREE1NTJGO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0byA9ICgpID0+IHtcclxuXHJcbiAgICAvL1JvdXRpbmcgcGFyYSBvYnRlbmVyIGVsIGlkIGFjdHVhbCBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBxdWVyeTogeyBpZCB9IH0gPSByb3V0ZXI7XHJcblxyXG4gICAgLy9DcmFuZG8gc3RhdGUgcGFyYSBjYW1iaW8gZGUgcHJvZHVjdG8geSBubyBjaWNsYXIgbGEgYXBsaWNhY2lvblxyXG4gICAgY29uc3RbY29uc3VsdGFyREIsIGd1YXJkYXJDb25zdWx0YXJEQl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIC8vQ3JlYW5kbyBlc3RhdGUgcGFyYSBndWFyZGFyIGVsIHJlc3VsdGFkbyBkZSBsYSBidXNxdWVkYVxyXG4gICAgY29uc3QgW3Byb2R1Y3RvLCBndWFyZGFyUHJvZHVjdG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICAvL3N0YXRlIHBhcmEgZWwgZXJyb3IgZW4gbGEgY29uc3VsdGEgXHJcbiAgICBjb25zdCBbZXJyb3IsIGd1YXJkYXJFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL1N0YXRlIHBhcmEgYWN0aXZhciBlbCBzcGlubmVyIFxyXG4gICAgY29uc3QgW2FjdGl2YXIsIGd1YXJkYXJBY3RpdmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vQ3JlYW5kbyBzdGF0ZSBwYXJhIGNvbWVudGFyaW9zXHJcbiAgICBjb25zdCBbbnVldm9zQ29tZW50YXJpb3MsIGd1YXJkYXJDb21lbnRhcmlvc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVuc2FqZTogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXh0cmF5ZW5kbyBmaXJlYmFzZSBkZSBmaXJlYmFzZWNvbnRleHQgcGFyYSBsbGFtYXIgYSBsYSBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlkKXtcclxuICAgICAgICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvID0gYXN5bmMgKCkgID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RvUXVlcnkgPSBhd2FpdCBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0byA9IGF3YWl0IHByb2R1Y3RvUXVlcnkuZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9kdWN0by5leGlzdHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJQcm9kdWN0byhwcm9kdWN0by5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2J0ZW5lclByb2R1Y3RvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkLCBjYW1iaW9dKTtcclxuXHJcbiAgICAvL2d1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgLy9pZihPYmplY3Qua2V5cyhwcm9kdWN0bykubGVuZ3RoID09PSAwKXJldHVybiA8U3Bpbm5lci8+O1xyXG4gICAgY29uc3Qge2NvbWVudGFyaW9zLCBjcmVhZG8sIGRlc2NyaXBjaW9uLCBlbXByZXNhLCBub21icmUsIHVybCwgdXJsaW1hZ2VuLCB2b3RvcywgY3JlYWRvciwgaGFWb3RhZG99ID0gcHJvZHVjdG87XHJcblxyXG4gICAgY29uc3Qgdm90YXJQcm9kdWN0byA9ICgpID0+IHtcclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IE51ZXZvVm90b3MgPSB2b3RvcyArIDE7XHJcblxyXG4gICAgICAgIC8vVmVyZmljYXIgc2kgZWwgdXN1YXJpbyBoYSB2b3RhZG8gXHJcbiAgICAgICAgaWYoaGFWb3RhZG8uaW5jbHVkZXModXN1YXJpby51aWQpKXJldHVybjtcclxuICAgICAgICAvL0d1YXJkYXIgZWwgSUQgZGVsIHVzdWFyaW8gcXVlIGhhIHZvdGFkb1xyXG4gICAgICAgIGNvbnN0IGhhbnZvdGFkbyA9IFsuLi5oYVZvdGFkbywgdXN1YXJpby51aWRdO1xyXG4gICAgICAgIC8vQWdyZWdhbmRvIGEgbGEgYmFzZSBkZSBkYXRvc1xyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKS51cGRhdGUoe3ZvdG9zOiBOdWV2b1ZvdG9zLCBoYVZvdGFkbzogaGFudm90YWRvfSk7ICAgIFxyXG5cclxuICAgICAgICAvL0FncmVnYW5kbyBhbCBzdGF0ZVxyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0byh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvLFxyXG4gICAgICAgICAgICB2b3RvczogTnVldm9Wb3Rvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1YXJkYXJDYW1iaW8oXCJDYW1iaW9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DcmVhbmRvIGZ1bmNpb24gcGFyYSBsbGVuYXIgZWwgc3RhdGUgZGUgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IGhhbmRsZUNvbWVudGFyaW9zID0gKGUpID0+e1xyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIC4uLm51ZXZvc0NvbWVudGFyaW9zLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnVuY2lvbiB2ZXdyaWZpY2Egc2kgZXMgZWwgY3JlYWRvciBlbCBxdWUgZXNjcmliZSBlbCBjb21lZW50YXJpb1xyXG4gICAgY29uc3Qgb3JpZ2VuQ3JlYWRvciA9IGlkID0+IHtcclxuICAgICAgICBpZihjcmVhZG9yLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWFuZG8gZnVuY2lvbiBib3RvbiBjb21lbnRhciBlbiBlbCBmb3JtdWxhcmlvIHBhcmEgYWdyZWdhciBmb3JtdWxhcmlcclxuICAgIGNvbnN0IG9uc3VibWl0Q29tZW50YXJpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbmZvcm1hY2lvbiBleHRyYSBhbCBjb21lbnRhcmlvIFxyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9JZCA9IHVzdWFyaW8udWlkO1xyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9Ob21icmUgPSB1c3VhcmlvLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIC8vVG9tYXIgY29waWEgZGUgY29tZW50YXJpbyB5IGFncmVnYXJsb3MgYWwgYXJyZWdsb1xyXG4gICAgICAgIGNvbnN0IG51ZXZvc0NvbWVudGFyaW8gPSBbLi4uY29tZW50YXJpb3MsIG51ZXZvc0NvbWVudGFyaW9zXTtcclxuICAgICAgICAvL0FjdHVhbGl6YXIgbGEgQkRcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEFjdHVhbGl6YXIgZWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIG1lbnNhamU6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxFcnJvcjQwNC8+IDpcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZhciB8fCAhcHJvZHVjdG8gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vbWJyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob21icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW5lZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHVibGljYWRvIGhhY2U6IHsgZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShjcmVhZG8pLCB7IGxvY2FsZTogZXMgfSl9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9yIHtjcmVhZG9yLm5vbWJyZX0gZGUge2VtcHJlc2F9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsaW1hZ2VufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZ3JlZ2EgdHUgY29tZW50YXJpbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e29uc3VibWl0Q29tZW50YXJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVuc2FqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbWVudGFyaW9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudWV2b3NDb21lbnRhcmlvcy5tZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBDb21lbnRhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdHVsbzI+Q29tZW50YXJpb3M8L1RpdHVsbzI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21lbnRhcmlvcy5sZW5ndGggPT09IDAgPyBcIkF1biBubyBoYXkgY29tZW50YXJpb3NcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLm1hcCggKGNvbWVudGFyaW8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvbWVudGFyaW8udXN1YXJpb0lkfS0ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbWVudGFyaW8ubWVuc2FqZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Fc2NyaXRvIHBvcjogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2AgICR7Y29tZW50YXJpby51c3VhcmlvTm9tYnJlfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yaWdlbkNyZWFkb3IoY29tZW50YXJpby51c3VhcmlvSWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWFkb3JQcm9kdWN0bz5FcyBjcmVhZG9yPC9DcmVhZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0YXIgVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtcG8tdm90b3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZvdG9zXCI+e3ZvdG9zfSBWb3RvczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ZvdGFyUHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3RhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVuZWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=