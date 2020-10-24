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
              if (usuario) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", router.push("/login"));

            case 2:
              if (!(creador.id !== usuario.uid)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", router.push("/"));

            case 4:
              try {} catch (error) {
                console.log(error);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function eliminarProducto() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, activar || !producto ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 49
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_14__["es"]
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 49
    }
  }, "Por ", creador.nombre, " de ", empresa), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 49
    }
  }, descripcion), usuario && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 57
    }
  }, "Agrega tu comentario"), __jsx("form", {
    onSubmit: onsubmitComentario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 57
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 201,
      columnNumber: 65
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 61
    }
  }))), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.length === 0 ? "Aun no hay comentarios" : __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 53
    }
  }, comentarios.map(function (comentario, i) {
    return __jsx("li", {
      key: "".concat(comentario.usuarioId, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 61
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 65
      }
    }, comentario.mensaje), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 65
      }
    }, "Escrito por:", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 69
      }
    }, "  ".concat(comentario.usuarioNombre))), origenCreador(comentario.usuarioId) && __jsx(CreadorProducto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 69
      }
    }, "Es creador"));
  }))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 45
    }
  }, __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    target: "_blank",
    bgColor: "true",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 49
    }
  }, "Visitar Url"), __jsx("div", {
    className: "campo-votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 53
    }
  }, votos, " Votos"), usuario && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: votarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 57
    }
  }, "Votar")))), borrarCreador() && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: eliminarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIkNyZWFkb3JQcm9kdWN0byIsInAiLCJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvbnN1bHRhckRCIiwiZ3VhcmRhckNvbnN1bHRhckRCIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsIm1lbnNhamUiLCJudWV2b3NDb21lbnRhcmlvcyIsImd1YXJkYXJDb21lbnRhcmlvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG8iLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0b1F1ZXJ5IiwiZ2V0IiwiZXhpc3RzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwiY3JlYWRvciIsImhhVm90YWRvIiwidm90YXJQcm9kdWN0byIsInB1c2giLCJOdWV2b1ZvdG9zIiwiaW5jbHVkZXMiLCJ1aWQiLCJoYW52b3RhZG8iLCJ1cGRhdGUiLCJoYW5kbGVDb21lbnRhcmlvcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvcmlnZW5DcmVhZG9yIiwib25zdWJtaXRDb21lbnRhcmlvIiwicHJldmVudERlZmF1bHQiLCJ1c3VhcmlvSWQiLCJ1c3VhcmlvTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJudWV2b3NDb21lbnRhcmlvIiwiYm9ycmFyQ3JlYWRvciIsInVzdWFyaW91aWQiLCJlbGltaW5hclByb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJEYXRlIiwibG9jYWxlIiwiZXMiLCJsZW5ndGgiLCJtYXAiLCJjb21lbnRhcmlvIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHdEQUFNLENBQUNDLEdBQVYsbUJBQXhCO0tBQU1GLGtCO0FBUU4sSUFBTUcsTUFBTSxHQUFHRix3REFBTSxDQUFDRyxFQUFWLG9CQUFaO01BQU1ELE07QUFLTixJQUFNRSxPQUFPLEdBQUdKLHdEQUFNLENBQUNLLEVBQVYsb0JBQWI7TUFBTUQsTztBQUlOLElBQU1FLGVBQWUsR0FBR04sd0RBQU0sQ0FBQ08sQ0FBVixvQkFBckI7TUFBTUQsZTs7QUFVTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhtQixNQUlGQyxFQUpFLEdBSU9GLE1BSlAsQ0FJWEcsS0FKVyxDQUlGRCxFQUpFLEVBTW5COztBQU5tQixrQkFPc0JFLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT2JDLFdBUGE7QUFBQSxNQU9BQyxrQkFQQSxpQkFRbkI7OztBQVJtQixtQkFTaUJGLHNEQUFRLENBQUMsRUFBRCxDQVR6QjtBQUFBLE1BU1pHLFFBVFk7QUFBQSxNQVNGQyxlQVRFLGtCQVVuQjs7O0FBVm1CLG1CQVdXSixzREFBUSxDQUFDLEtBQUQsQ0FYbkI7QUFBQSxNQVdaSyxLQVhZO0FBQUEsTUFXTEMsWUFYSyxrQkFZbkI7OztBQVptQixtQkFhZU4sc0RBQVEsQ0FBQyxLQUFELENBYnZCO0FBQUEs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RyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSUixDQURjO0FBQUEsR0FBakIsQ0FETCxDQTVCWCxDQURMLEVBOENRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQ0ksVUFBTSxFQUFDLFFBRFg7QUFFSSxXQUFPLEVBQUMsTUFGWjtBQUdJLFFBQUksRUFBRXBCLEdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQVFJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkUsS0FBdEIsV0FESixFQUVLbEIsT0FBTyxJQUNKLE1BQUMsNkRBQUQ7QUFDSSxXQUFPLEVBQUVxQixhQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIUixDQVJKLENBOUNSLENBSk4sRUFzRVFtQixhQUFhLE1BQ1gsTUFBQyw2REFBRDtBQUNJLFdBQU8sRUFBRUUsZ0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2RVYsQ0FITixDQUhaLENBREosQ0FESjtBQTRGSCxDQXBPRDs7R0FBTTlELFE7VUFHYUUscUQ7OztNQUhiRixRO0FBc09TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW2lkXS42NGYwMDlkZDk4OGZiMTg0OTI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC80MDRcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBDYW1wbywgSW5wdXRTdWJtaXR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0Zvcm11bGFyaW9cIjtcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dcIjtcclxuaW1wb3J0IHsgZXMgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCBCb3RvbiAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvQm90b25cIjtcclxuXHJcbmNvbnN0IENvbnRlbmVkb3JQcm9kdWN0byA9IHN0eWxlZC5kaXZgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9tYnJlID0gc3R5bGVkLmgxYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdHVsbzIgPSBzdHlsZWQuaDJgXHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuYDtcclxuXHJcbmNvbnN0IENyZWFkb3JQcm9kdWN0byA9IHN0eWxlZC5wYFxyXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQTU1MkY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vUm91dGluZyBwYXJhIG9idGVuZXIgZWwgaWQgYWN0dWFsIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHF1ZXJ5OiB7IGlkIH0gfSA9IHJvdXRlcjtcclxuXHJcbiAgICAvL0NyYW5kbyBzdGF0ZSBwYXJhIGNhbWJpbyBkZSBwcm9kdWN0byB5IG5vIGNpY2xhciBsYSBhcGxpY2FjaW9uXHJcbiAgICBjb25zdFtjb25zdWx0YXJEQiwgZ3VhcmRhckNvbnN1bHRhckRCXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy9DcmVhbmRvIGVzdGF0ZSBwYXJhIGd1YXJkYXIgZWwgcmVzdWx0YWRvIGRlIGxhIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbcHJvZHVjdG8sIGd1YXJkYXJQcm9kdWN0b10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIC8vc3RhdGUgcGFyYSBlbCBlcnJvciBlbiBsYSBjb25zdWx0YSBcclxuICAgIGNvbnN0IFtlcnJvciwgZ3VhcmRhckVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vU3RhdGUgcGFyYSBhY3RpdmFyIGVsIHNwaW5uZXIgXHJcbiAgICBjb25zdCBbYWN0aXZhciwgZ3VhcmRhckFjdGl2YXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9DcmVhbmRvIHN0YXRlIHBhcmEgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IFtudWV2b3NDb21lbnRhcmlvcywgZ3VhcmRhckNvbWVudGFyaW9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZW5zYWplOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFeHRyYXllbmRvIGZpcmViYXNlIGRlIGZpcmViYXNlY29udGV4dCBwYXJhIGxsYW1hciBhIGxhIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQgJiYgY29uc3VsdGFyREIpe1xyXG4gICAgICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG8gPSBhc3luYyAoKSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG9RdWVyeSA9IGF3YWl0IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RvID0gYXdhaXQgcHJvZHVjdG9RdWVyeS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RvLmV4aXN0cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2R1Y3RvKHByb2R1Y3RvLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckNvbnN1bHRhckRCKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJDb25zdWx0YXJEQihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2J0ZW5lclByb2R1Y3RvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy9ndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgIC8vaWYoT2JqZWN0LmtleXMocHJvZHVjdG8pLmxlbmd0aCA9PT0gMClyZXR1cm4gPFNwaW5uZXIvPjtcclxuICAgIGNvbnN0IHtjb21lbnRhcmlvcywgY3JlYWRvLCBkZXNjcmlwY2lvbiwgZW1wcmVzYSwgbm9tYnJlLCB1cmwsIHVybGltYWdlbiwgdm90b3MsIGNyZWFkb3IsIGhhVm90YWRvfSA9IHByb2R1Y3RvO1xyXG5cclxuICAgIGNvbnN0IHZvdGFyUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBOdWV2b1ZvdG9zID0gdm90b3MgKyAxO1xyXG5cclxuICAgICAgICAvL1ZlcmZpY2FyIHNpIGVsIHVzdWFyaW8gaGEgdm90YWRvIFxyXG4gICAgICAgIGlmKGhhVm90YWRvLmluY2x1ZGVzKHVzdWFyaW8udWlkKSlyZXR1cm47XHJcbiAgICAgICAgLy9HdWFyZGFyIGVsIElEIGRlbCB1c3VhcmlvIHF1ZSBoYSB2b3RhZG9cclxuICAgICAgICBjb25zdCBoYW52b3RhZG8gPSBbLi4uaGFWb3RhZG8sIHVzdWFyaW8udWlkXTtcclxuICAgICAgICAvL0FncmVnYW5kbyBhIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHt2b3RvczogTnVldm9Wb3RvcywgaGFWb3RhZG86IGhhbnZvdGFkb30pOyAgICBcclxuXHJcbiAgICAgICAgLy9BZ3JlZ2FuZG8gYWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgdm90b3M6IE51ZXZvVm90b3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DcmVhbmRvIGZ1bmNpb24gcGFyYSBsbGVuYXIgZWwgc3RhdGUgZGUgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IGhhbmRsZUNvbWVudGFyaW9zID0gKGUpID0+e1xyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIC4uLm51ZXZvc0NvbWVudGFyaW9zLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnVuY2lvbiB2ZXdyaWZpY2Egc2kgZXMgZWwgY3JlYWRvciBlbCBxdWUgZXNjcmliZSBlbCBjb21lZW50YXJpb1xyXG4gICAgY29uc3Qgb3JpZ2VuQ3JlYWRvciA9IGlkID0+IHtcclxuICAgICAgICBpZihjcmVhZG9yLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWFuZG8gZnVuY2lvbiBib3RvbiBjb21lbnRhciBlbiBlbCBmb3JtdWxhcmlvIHBhcmEgYWdyZWdhciBmb3JtdWxhcmlcclxuICAgIGNvbnN0IG9uc3VibWl0Q29tZW50YXJpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbmZvcm1hY2lvbiBleHRyYSBhbCBjb21lbnRhcmlvIFxyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9JZCA9IHVzdWFyaW8udWlkO1xyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9Ob21icmUgPSB1c3VhcmlvLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIC8vVG9tYXIgY29waWEgZGUgY29tZW50YXJpbyB5IGFncmVnYXJsb3MgYWwgYXJyZWdsb1xyXG4gICAgICAgIGNvbnN0IG51ZXZvc0NvbWVudGFyaW8gPSBbLi4uY29tZW50YXJpb3MsIG51ZXZvc0NvbWVudGFyaW9zXTtcclxuICAgICAgICAvL0FjdHVhbGl6YXIgbGEgQkRcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEFjdHVhbGl6YXIgZWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIG1lbnNhamU6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9WZXJpZmljYXIgc2kgZWwgY2xpZW50ZSBlcyBlbCBtaXNtbyBxdWUgZWwgdXN1YXJpbyByZWdpc3RyYWRvXHJcbiAgICBjb25zdCBib3JyYXJDcmVhZG9yID0gKCkgPT57XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjcmVhZG9yLmlkID09PSB1c3VhcmlvdWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vRWxpbWluYXIgdW4gcHJvZHVjdG8gZGUgbGEgYmRcclxuICAgIGNvbnN0IGVsaW1pbmFyUHJvZHVjdG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNyZWFkb3IuaWQgIT09IHVzdWFyaW8udWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8RXJyb3I0MDQvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2YXIgfHwgIXByb2R1Y3RvID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb21icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTm9tYnJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVuZWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlB1YmxpY2FkbyBoYWNlOiB7IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoY3JlYWRvKSwgeyBsb2NhbGU6IGVzIH0pfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBvciB7Y3JlYWRvci5ub21icmV9IGRlIHtlbXByZXNhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybGltYWdlbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXN1YXJpbyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QWdyZWdhIHR1IGNvbWVudGFyaW88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvbnN1Ym1pdENvbWVudGFyaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnNhamVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb21lbnRhcmlvc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVldm9zQ29tZW50YXJpb3MubWVuc2FqZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFncmVnYXIgQ29tZW50YXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXR1bG8yPkNvbWVudGFyaW9zPC9UaXR1bG8yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tZW50YXJpb3MubGVuZ3RoID09PSAwID8gXCJBdW4gbm8gaGF5IGNvbWVudGFyaW9zXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21lbnRhcmlvcy5tYXAoIChjb21lbnRhcmlvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb21lbnRhcmlvLnVzdWFyaW9JZH0tJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb21lbnRhcmlvLm1lbnNhamV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXNjcml0byBwb3I6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgICAke2NvbWVudGFyaW8udXN1YXJpb05vbWJyZX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmlnZW5DcmVhZG9yKGNvbWVudGFyaW8udXN1YXJpb0lkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhZG9yUHJvZHVjdG8+RXMgY3JlYWRvcjwvQ3JlYWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdGFyIFVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbXBvLXZvdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2b3Rvc1wiPnt2b3Rvc30gVm90b3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXN1YXJpbyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt2b3RhclByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbmVkb3JQcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBib3JyYXJDcmVhZG9yKCkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbGltaW5hclByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsaW1pbmFyIFByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==