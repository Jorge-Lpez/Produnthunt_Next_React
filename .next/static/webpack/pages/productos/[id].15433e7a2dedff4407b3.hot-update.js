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
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\productos\\[id].js",
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
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
    if (id && consultarDB) {
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
                    guardarConsultarDB(false);
                    guardarActivar(true);
                    setTimeout(function () {
                      guardarActivar(false);
                    }, 1000);
                  } else {
                    guardarError(true);
                    guardarConsultarDB(false);
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
  }, [id]); //guardarActivar(true);
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
    guardarConsultarDB(true);
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
    guardarConsultarDB(true);
  }; //Verificar si el cliente es el mismo que el usuario registrado


  var borrarCreador = function borrarCreador() {
    if (!usuario) {
      return false;
    }

    if (creador.id === usuariouid) {
      return true;
    }
  }; //Eliminar un producto de la bd


  var eliminarProducto = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (usuario) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", router.push("/login"));

            case 3:
              if (!(creador.id !== usuario.uid)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", true);

            case 5:
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function eliminarProducto() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, activar || !producto ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 49
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_14__["es"]
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 49
    }
  }, "Por ", creador.nombre, " de ", empresa), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 49
    }
  }, descripcion), usuario && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 57
    }
  }, "Agrega tu comentario"), __jsx("form", {
    onSubmit: onsubmitComentario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 57
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 200,
      columnNumber: 65
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 61
    }
  }))), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.length === 0 ? "Aun no hay comentarios" : __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 53
    }
  }, comentarios.map(function (comentario, i) {
    return __jsx("li", {
      key: "".concat(comentario.usuarioId, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 61
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 65
      }
    }, comentario.mensaje), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 65
      }
    }, "Escrito por:", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 69
      }
    }, "  ".concat(comentario.usuarioNombre))), origenCreador(comentario.usuarioId) && __jsx(CreadorProducto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 69
      }
    }, "Es creador"));
  }))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 45
    }
  }, __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    target: "_blank",
    bgColor: "true",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 49
    }
  }, "Visitar Url"), __jsx("div", {
    className: "campo-votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 53
    }
  }, votos, " Votos"), usuario && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: votarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 57
    }
  }, "Votar")))), borrarCreador() && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: eliminarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 41
    }
  }, "Eliminar Producto")))));
};

_s(Producto, "Vm2hNPEyjZhea7XP1652tv5N6aE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIkNyZWFkb3JQcm9kdWN0byIsInAiLCJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvbnN1bHRhckRCIiwiZ3VhcmRhckNvbnN1bHRhckRCIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsIm1lbnNhamUiLCJudWV2b3NDb21lbnRhcmlvcyIsImd1YXJkYXJDb21lbnRhcmlvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG8iLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0b1F1ZXJ5IiwiZ2V0IiwiZXhpc3RzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwiY3JlYWRvciIsImhhVm90YWRvIiwidm90YXJQcm9kdWN0byIsInB1c2giLCJOdWV2b1ZvdG9zIiwiaW5jbHVkZXMiLCJ1aWQiLCJoYW52b3RhZG8iLCJ1cGRhdGUiLCJoYW5kbGVDb21lbnRhcmlvcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvcmlnZW5DcmVhZG9yIiwib25zdWJtaXRDb21lbnRhcmlvIiwicHJldmVudERlZmF1bHQiLCJ1c3VhcmlvSWQiLCJ1c3VhcmlvTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJudWV2b3NDb21lbnRhcmlvIiwiYm9ycmFyQ3JlYWRvciIsInVzdWFyaW91aWQiLCJlbGltaW5hclByb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJEYXRlIiwibG9jYWxlIiwiZXMiLCJsZW5ndGgiLCJtYXAiLCJjb21lbnRhcmlvIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHdEQUFNLENBQUNDLEdBQVYsbUJBQXhCO0tBQU1GLGtCO0FBUU4sSUFBTUcsTUFBTSxHQUFHRix3REFBTSxDQUFDRyxFQUFWLG9CQUFaO01BQU1ELE07QUFLTixJQUFNRSxPQUFPLEdBQUdKLHdEQUFNLENBQUNLLEVBQVYsb0JBQWI7TUFBTUQsTztBQUlOLElBQU1FLGVBQWUsR0FBR04sd0RBQU0sQ0FBQ08sQ0FBVixvQkFBckI7TUFBTUQsZTs7QUFVTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhtQixNQUlGQyxFQUpFLEdBSU9GLE1BSlAsQ0FJWEcsS0FKVyxDQUlGRCxFQUpFLEVBTW5COztBQU5tQixrQkFPc0JFLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT2JDLFdBUGE7QUFBQSxNQU9BQyxrQkFQQSxpQkFRbkI7OztBQVJtQixtQkFTaUJGLHNEQUFRLENBQUMsRUFBRCxDQVR6QjtBQUFBLE1BU1pHLFFBVFk7QUFBQSxNQVNGQyxlQVRFLGtCQVVuQjs7O0FBVm1CLG1CQVdXSixzREFBUSxDQUFDLEtBQUQsQ0FYbkI7QUFBQSxNQVdaSyxLQVhZO0FBQUEsTUFXTEMsWUFYSyxrQkFZbkI7OztBQVptQixtQkFhZU4sc0RBQVEsQ0FBQyxLQUFELENBYnZCO0FBQUEs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QSxHQUFqQixDQURMLENBNUJYLENBREwsRUE4Q1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFDSSxVQUFNLEVBQUMsUUFEWDtBQUVJLFdBQU8sRUFBQyxNQUZaO0FBR0ksUUFBSSxFQUFFcEIsR0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBUUk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCRSxLQUF0QixXQURKLEVBRUtsQixPQUFPLElBQ0osTUFBQyw2REFBRDtBQUNJLFdBQU8sRUFBRXFCLGFBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhSLENBUkosQ0E5Q1IsQ0FKTixFQXNFUW1CLGFBQWEsTUFDWCxNQUFDLDZEQUFEO0FBQ0ksV0FBTyxFQUFFRSxnQkFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXZFVixDQUhOLENBSFosQ0FESixDQURKO0FBNEZILENBbk9EOztHQUFNOUQsUTtVQUdhRSxxRDs7O01BSGJGLFE7QUFxT1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9baWRdLjE1NDMzZTdhMmRlZGZmNDQwN2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LzQwNFwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IENhbXBvLCBJbnB1dFN1Ym1pdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1wiO1xyXG5pbXBvcnQgeyBlcyB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IEJvdG9uICBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9Cb3RvblwiO1xyXG5cclxuY29uc3QgQ29udGVuZWRvclByb2R1Y3RvID0gc3R5bGVkLmRpdmBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBOb21icmUgPSBzdHlsZWQuaDFgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0dWxvMiA9IHN0eWxlZC5oMmBcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ3JlYWRvclByb2R1Y3RvID0gc3R5bGVkLnBgXHJcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RBNTUyRjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9Sb3V0aW5nIHBhcmEgb2J0ZW5lciBlbCBpZCBhY3R1YWwgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcXVlcnk6IHsgaWQgfSB9ID0gcm91dGVyO1xyXG5cclxuICAgIC8vQ3JhbmRvIHN0YXRlIHBhcmEgY2FtYmlvIGRlIHByb2R1Y3RvIHkgbm8gY2ljbGFyIGxhIGFwbGljYWNpb25cclxuICAgIGNvbnN0W2NvbnN1bHRhckRCLCBndWFyZGFyQ29uc3VsdGFyREJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvL0NyZWFuZG8gZXN0YXRlIHBhcmEgZ3VhcmRhciBlbCByZXN1bHRhZG8gZGUgbGEgYnVzcXVlZGFcclxuICAgIGNvbnN0IFtwcm9kdWN0bywgZ3VhcmRhclByb2R1Y3RvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgLy9zdGF0ZSBwYXJhIGVsIGVycm9yIGVuIGxhIGNvbnN1bHRhIFxyXG4gICAgY29uc3QgW2Vycm9yLCBndWFyZGFyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9TdGF0ZSBwYXJhIGFjdGl2YXIgZWwgc3Bpbm5lciBcclxuICAgIGNvbnN0IFthY3RpdmFyLCBndWFyZGFyQWN0aXZhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL0NyZWFuZG8gc3RhdGUgcGFyYSBjb21lbnRhcmlvc1xyXG4gICAgY29uc3QgW251ZXZvc0NvbWVudGFyaW9zLCBndWFyZGFyQ29tZW50YXJpb3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnNhamU6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV4dHJheWVuZG8gZmlyZWJhc2UgZGUgZmlyZWJhc2Vjb250ZXh0IHBhcmEgbGxhbWFyIGEgbGEgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpZCAmJiBjb25zdWx0YXJEQil7XHJcbiAgICAgICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0byA9IGFzeW5jICgpICA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0b1F1ZXJ5ID0gYXdhaXQgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG8gPSBhd2FpdCBwcm9kdWN0b1F1ZXJ5LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdG8uZXhpc3RzKXtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZHVjdG8ocHJvZHVjdG8uZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckNvbnN1bHRhckRCKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnRlbmVyUHJvZHVjdG8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICAvL2d1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgLy9pZihPYmplY3Qua2V5cyhwcm9kdWN0bykubGVuZ3RoID09PSAwKXJldHVybiA8U3Bpbm5lci8+O1xyXG4gICAgY29uc3Qge2NvbWVudGFyaW9zLCBjcmVhZG8sIGRlc2NyaXBjaW9uLCBlbXByZXNhLCBub21icmUsIHVybCwgdXJsaW1hZ2VuLCB2b3RvcywgY3JlYWRvciwgaGFWb3RhZG99ID0gcHJvZHVjdG87XHJcblxyXG4gICAgY29uc3Qgdm90YXJQcm9kdWN0byA9ICgpID0+IHtcclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IE51ZXZvVm90b3MgPSB2b3RvcyArIDE7XHJcblxyXG4gICAgICAgIC8vVmVyZmljYXIgc2kgZWwgdXN1YXJpbyBoYSB2b3RhZG8gXHJcbiAgICAgICAgaWYoaGFWb3RhZG8uaW5jbHVkZXModXN1YXJpby51aWQpKXJldHVybjtcclxuICAgICAgICAvL0d1YXJkYXIgZWwgSUQgZGVsIHVzdWFyaW8gcXVlIGhhIHZvdGFkb1xyXG4gICAgICAgIGNvbnN0IGhhbnZvdGFkbyA9IFsuLi5oYVZvdGFkbywgdXN1YXJpby51aWRdO1xyXG4gICAgICAgIC8vQWdyZWdhbmRvIGEgbGEgYmFzZSBkZSBkYXRvc1xyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKS51cGRhdGUoe3ZvdG9zOiBOdWV2b1ZvdG9zLCBoYVZvdGFkbzogaGFudm90YWRvfSk7ICAgIFxyXG5cclxuICAgICAgICAvL0FncmVnYW5kbyBhbCBzdGF0ZVxyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0byh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvLFxyXG4gICAgICAgICAgICB2b3RvczogTnVldm9Wb3Rvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1YXJkYXJDb25zdWx0YXJEQih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWFuZG8gZnVuY2lvbiBwYXJhIGxsZW5hciBlbCBzdGF0ZSBkZSBjb21lbnRhcmlvc1xyXG4gICAgY29uc3QgaGFuZGxlQ29tZW50YXJpb3MgPSAoZSkgPT57XHJcbiAgICAgICAgZ3VhcmRhckNvbWVudGFyaW9zKHtcclxuICAgICAgICAgICAgLi4ubnVldm9zQ29tZW50YXJpb3MsXHJcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GdW5jaW9uIHZld3JpZmljYSBzaSBlcyBlbCBjcmVhZG9yIGVsIHF1ZSBlc2NyaWJlIGVsIGNvbWVlbnRhcmlvXHJcbiAgICBjb25zdCBvcmlnZW5DcmVhZG9yID0gaWQgPT4ge1xyXG4gICAgICAgIGlmKGNyZWFkb3IuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ3JlYW5kbyBmdW5jaW9uIGJvdG9uIGNvbWVudGFyIGVuIGVsIGZvcm11bGFyaW8gcGFyYSBhZ3JlZ2FyIGZvcm11bGFyaVxyXG4gICAgY29uc3Qgb25zdWJtaXRDb21lbnRhcmlvID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0luZm9ybWFjaW9uIGV4dHJhIGFsIGNvbWVudGFyaW8gXHJcbiAgICAgICAgbnVldm9zQ29tZW50YXJpb3MudXN1YXJpb0lkID0gdXN1YXJpby51aWQ7XHJcbiAgICAgICAgbnVldm9zQ29tZW50YXJpb3MudXN1YXJpb05vbWJyZSA9IHVzdWFyaW8uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgLy9Ub21hciBjb3BpYSBkZSBjb21lbnRhcmlvIHkgYWdyZWdhcmxvcyBhbCBhcnJlZ2xvXHJcbiAgICAgICAgY29uc3QgbnVldm9zQ29tZW50YXJpbyA9IFsuLi5jb21lbnRhcmlvcywgbnVldm9zQ29tZW50YXJpb3NdO1xyXG4gICAgICAgIC8vQWN0dWFsaXphciBsYSBCRFxyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICBjb21lbnRhcmlvczogbnVldm9zQ29tZW50YXJpb1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gQWN0dWFsaXphciBlbCBzdGF0ZVxyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0byh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvLFxyXG4gICAgICAgICAgICBjb21lbnRhcmlvczogbnVldm9zQ29tZW50YXJpb1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VhcmRhckNvbWVudGFyaW9zKHtcclxuICAgICAgICAgICAgbWVuc2FqZTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGd1YXJkYXJDb25zdWx0YXJEQih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1ZlcmlmaWNhciBzaSBlbCBjbGllbnRlIGVzIGVsIG1pc21vIHF1ZSBlbCB1c3VhcmlvIHJlZ2lzdHJhZG9cclxuICAgIGNvbnN0IGJvcnJhckNyZWFkb3IgPSAoKSA9PntcclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNyZWFkb3IuaWQgPT09IHVzdWFyaW91aWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9FbGltaW5hciB1biBwcm9kdWN0byBkZSBsYSBiZFxyXG4gICAgY29uc3QgZWxpbWluYXJQcm9kdWN0byA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY3JlYWRvci5pZCAhPT0gdXN1YXJpby51aWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxFcnJvcjQwNC8+IDpcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZhciB8fCAhcHJvZHVjdG8gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vbWJyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob21icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW5lZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHVibGljYWRvIGhhY2U6IHsgZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShjcmVhZG8pLCB7IGxvY2FsZTogZXMgfSl9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9yIHtjcmVhZG9yLm5vbWJyZX0gZGUge2VtcHJlc2F9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsaW1hZ2VufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZ3JlZ2EgdHUgY29tZW50YXJpbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e29uc3VibWl0Q29tZW50YXJpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVuc2FqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbWVudGFyaW9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudWV2b3NDb21lbnRhcmlvcy5tZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBDb21lbnRhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdHVsbzI+Q29tZW50YXJpb3M8L1RpdHVsbzI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21lbnRhcmlvcy5sZW5ndGggPT09IDAgPyBcIkF1biBubyBoYXkgY29tZW50YXJpb3NcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLm1hcCggKGNvbWVudGFyaW8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvbWVudGFyaW8udXN1YXJpb0lkfS0ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbWVudGFyaW8ubWVuc2FqZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Fc2NyaXRvIHBvcjogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2AgICR7Y29tZW50YXJpby51c3VhcmlvTm9tYnJlfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yaWdlbkNyZWFkb3IoY29tZW50YXJpby51c3VhcmlvSWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWFkb3JQcm9kdWN0bz5FcyBjcmVhZG9yPC9DcmVhZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0YXIgVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtcG8tdm90b3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZvdG9zXCI+e3ZvdG9zfSBWb3RvczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ZvdGFyUHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3RhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVuZWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvcnJhckNyZWFkb3IoKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VsaW1pbmFyUHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxpbWluYXIgUHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9