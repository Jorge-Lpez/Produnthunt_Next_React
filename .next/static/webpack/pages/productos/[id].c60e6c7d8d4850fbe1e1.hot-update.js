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
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }, activar || !producto ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 49
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_14__["es"]
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 49
    }
  }, "Por ", creador.nombre, " de ", empresa), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 49
    }
  }, descripcion), usuario && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 57
    }
  }, "Agrega tu comentario"), __jsx("form", {
    onSubmit: onsubmitComentario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 57
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 65
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 61
    }
  }))), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.length === 0 ? "Aun no hay comentarios" : __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 53
    }
  }, comentarios.map(function (comentario, i) {
    return __jsx("li", {
      key: "".concat(comentario.usuarioId, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 61
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 65
      }
    }, comentario.mensaje), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 65
      }
    }, "Escrito por:", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 69
      }
    }, "  ".concat(comentario.usuarioNombre))), origenCreador(comentario.usuarioId) && __jsx(CreadorProducto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 69
      }
    }, "Es creador"));
  }))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 45
    }
  }, __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    target: "_blank",
    bgColor: "true",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 49
    }
  }, "Visitar Url"), __jsx("div", {
    className: "campo-votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 53
    }
  }, votos, " Votos"), usuario && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: votarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 57
    }
  }, "Votar"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIkNyZWFkb3JQcm9kdWN0byIsInAiLCJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvbnN1bHRhckRCIiwiZ3VhcmRhckNvbnN1bHRhckRCIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsIm1lbnNhamUiLCJudWV2b3NDb21lbnRhcmlvcyIsImd1YXJkYXJDb21lbnRhcmlvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG8iLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0b1F1ZXJ5IiwiZ2V0IiwiZXhpc3RzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwiY3JlYWRvciIsImhhVm90YWRvIiwidm90YXJQcm9kdWN0byIsInB1c2giLCJOdWV2b1ZvdG9zIiwiaW5jbHVkZXMiLCJ1aWQiLCJoYW52b3RhZG8iLCJ1cGRhdGUiLCJoYW5kbGVDb21lbnRhcmlvcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvcmlnZW5DcmVhZG9yIiwib25zdWJtaXRDb21lbnRhcmlvIiwicHJldmVudERlZmF1bHQiLCJ1c3VhcmlvSWQiLCJ1c3VhcmlvTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJudWV2b3NDb21lbnRhcmlvIiwiZm9ybWF0RGlzdGFuY2VUb05vdyIs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELFVBQVUsQ0FBQ3BELE9BQWYsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWW9ELFVBQVUsQ0FBQ1QsYUFBdkIsRUFESixDQUpKLEVBT0tKLGFBQWEsQ0FBQ2EsVUFBVSxDQUFDVixTQUFaLENBQWIsSUFDRyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSUixDQURjO0FBQUEsR0FBakIsQ0FETCxDQTVCWCxDQURMLEVBOENRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQ0ksVUFBTSxFQUFDLFFBRFg7QUFFSSxXQUFPLEVBQUMsTUFGWjtBQUdJLFFBQUksRUFBRXBCLEdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQVFJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkUsS0FBdEIsV0FESixFQUVLbEIsT0FBTyxJQUNKLE1BQUMsNkRBQUQ7QUFDSSxXQUFPLEVBQUVxQixhQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIUixDQVJKLENBOUNSLENBSk4sQ0FITixDQUhaLENBREosQ0FESjtBQXFGSCxDQW5NRDs7R0FBTXpDLFE7VUFHYUUscUQ7OztNQUhiRixRO0FBcU1TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW2lkXS5jNjBlNmM3ZDhkNDg1MGZiZTFlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC80MDRcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBDYW1wbywgSW5wdXRTdWJtaXR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0Zvcm11bGFyaW9cIjtcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dcIjtcclxuaW1wb3J0IHsgZXMgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCBCb3RvbiAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvQm90b25cIjtcclxuXHJcbmNvbnN0IENvbnRlbmVkb3JQcm9kdWN0byA9IHN0eWxlZC5kaXZgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9tYnJlID0gc3R5bGVkLmgxYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdHVsbzIgPSBzdHlsZWQuaDJgXHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuYDtcclxuXHJcbmNvbnN0IENyZWFkb3JQcm9kdWN0byA9IHN0eWxlZC5wYFxyXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQTU1MkY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vUm91dGluZyBwYXJhIG9idGVuZXIgZWwgaWQgYWN0dWFsIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHF1ZXJ5OiB7IGlkIH0gfSA9IHJvdXRlcjtcclxuXHJcbiAgICAvL0NyYW5kbyBzdGF0ZSBwYXJhIGNhbWJpbyBkZSBwcm9kdWN0byB5IG5vIGNpY2xhciBsYSBhcGxpY2FjaW9uXHJcbiAgICBjb25zdFtjb25zdWx0YXJEQiwgZ3VhcmRhckNvbnN1bHRhckRCXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy9DcmVhbmRvIGVzdGF0ZSBwYXJhIGd1YXJkYXIgZWwgcmVzdWx0YWRvIGRlIGxhIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbcHJvZHVjdG8sIGd1YXJkYXJQcm9kdWN0b10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIC8vc3RhdGUgcGFyYSBlbCBlcnJvciBlbiBsYSBjb25zdWx0YSBcclxuICAgIGNvbnN0IFtlcnJvciwgZ3VhcmRhckVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vU3RhdGUgcGFyYSBhY3RpdmFyIGVsIHNwaW5uZXIgXHJcbiAgICBjb25zdCBbYWN0aXZhciwgZ3VhcmRhckFjdGl2YXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9DcmVhbmRvIHN0YXRlIHBhcmEgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IFtudWV2b3NDb21lbnRhcmlvcywgZ3VhcmRhckNvbWVudGFyaW9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZW5zYWplOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFeHRyYXllbmRvIGZpcmViYXNlIGRlIGZpcmViYXNlY29udGV4dCBwYXJhIGxsYW1hciBhIGxhIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQgJiYgY29uc3VsdGFyREIpe1xyXG4gICAgICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG8gPSBhc3luYyAoKSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG9RdWVyeSA9IGF3YWl0IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RvID0gYXdhaXQgcHJvZHVjdG9RdWVyeS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RvLmV4aXN0cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2R1Y3RvKHByb2R1Y3RvLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckNvbnN1bHRhckRCKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJDb25zdWx0YXJEQihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2J0ZW5lclByb2R1Y3RvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy9ndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgIC8vaWYoT2JqZWN0LmtleXMocHJvZHVjdG8pLmxlbmd0aCA9PT0gMClyZXR1cm4gPFNwaW5uZXIvPjtcclxuICAgIGNvbnN0IHtjb21lbnRhcmlvcywgY3JlYWRvLCBkZXNjcmlwY2lvbiwgZW1wcmVzYSwgbm9tYnJlLCB1cmwsIHVybGltYWdlbiwgdm90b3MsIGNyZWFkb3IsIGhhVm90YWRvfSA9IHByb2R1Y3RvO1xyXG5cclxuICAgIGNvbnN0IHZvdGFyUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBOdWV2b1ZvdG9zID0gdm90b3MgKyAxO1xyXG5cclxuICAgICAgICAvL1ZlcmZpY2FyIHNpIGVsIHVzdWFyaW8gaGEgdm90YWRvIFxyXG4gICAgICAgIGlmKGhhVm90YWRvLmluY2x1ZGVzKHVzdWFyaW8udWlkKSlyZXR1cm47XHJcbiAgICAgICAgLy9HdWFyZGFyIGVsIElEIGRlbCB1c3VhcmlvIHF1ZSBoYSB2b3RhZG9cclxuICAgICAgICBjb25zdCBoYW52b3RhZG8gPSBbLi4uaGFWb3RhZG8sIHVzdWFyaW8udWlkXTtcclxuICAgICAgICAvL0FncmVnYW5kbyBhIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHt2b3RvczogTnVldm9Wb3RvcywgaGFWb3RhZG86IGhhbnZvdGFkb30pOyAgICBcclxuXHJcbiAgICAgICAgLy9BZ3JlZ2FuZG8gYWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgdm90b3M6IE51ZXZvVm90b3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DcmVhbmRvIGZ1bmNpb24gcGFyYSBsbGVuYXIgZWwgc3RhdGUgZGUgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IGhhbmRsZUNvbWVudGFyaW9zID0gKGUpID0+e1xyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIC4uLm51ZXZvc0NvbWVudGFyaW9zLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnVuY2lvbiB2ZXdyaWZpY2Egc2kgZXMgZWwgY3JlYWRvciBlbCBxdWUgZXNjcmliZSBlbCBjb21lZW50YXJpb1xyXG4gICAgY29uc3Qgb3JpZ2VuQ3JlYWRvciA9IGlkID0+IHtcclxuICAgICAgICBpZihjcmVhZG9yLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWFuZG8gZnVuY2lvbiBib3RvbiBjb21lbnRhciBlbiBlbCBmb3JtdWxhcmlvIHBhcmEgYWdyZWdhciBmb3JtdWxhcmlcclxuICAgIGNvbnN0IG9uc3VibWl0Q29tZW50YXJpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbmZvcm1hY2lvbiBleHRyYSBhbCBjb21lbnRhcmlvIFxyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9JZCA9IHVzdWFyaW8udWlkO1xyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9Ob21icmUgPSB1c3VhcmlvLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIC8vVG9tYXIgY29waWEgZGUgY29tZW50YXJpbyB5IGFncmVnYXJsb3MgYWwgYXJyZWdsb1xyXG4gICAgICAgIGNvbnN0IG51ZXZvc0NvbWVudGFyaW8gPSBbLi4uY29tZW50YXJpb3MsIG51ZXZvc0NvbWVudGFyaW9zXTtcclxuICAgICAgICAvL0FjdHVhbGl6YXIgbGEgQkRcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEFjdHVhbGl6YXIgZWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIG1lbnNhamU6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8RXJyb3I0MDQvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2YXIgfHwgIXByb2R1Y3RvID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb21icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTm9tYnJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVuZWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlB1YmxpY2FkbyBoYWNlOiB7IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoY3JlYWRvKSwgeyBsb2NhbGU6IGVzIH0pfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBvciB7Y3JlYWRvci5ub21icmV9IGRlIHtlbXByZXNhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybGltYWdlbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXN1YXJpbyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QWdyZWdhIHR1IGNvbWVudGFyaW88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvbnN1Ym1pdENvbWVudGFyaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnNhamVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb21lbnRhcmlvc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVldm9zQ29tZW50YXJpb3MubWVuc2FqZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFncmVnYXIgQ29tZW50YXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXR1bG8yPkNvbWVudGFyaW9zPC9UaXR1bG8yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tZW50YXJpb3MubGVuZ3RoID09PSAwID8gXCJBdW4gbm8gaGF5IGNvbWVudGFyaW9zXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21lbnRhcmlvcy5tYXAoIChjb21lbnRhcmlvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb21lbnRhcmlvLnVzdWFyaW9JZH0tJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb21lbnRhcmlvLm1lbnNhamV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXNjcml0byBwb3I6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgICAke2NvbWVudGFyaW8udXN1YXJpb05vbWJyZX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmlnZW5DcmVhZG9yKGNvbWVudGFyaW8udXN1YXJpb0lkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhZG9yUHJvZHVjdG8+RXMgY3JlYWRvcjwvQ3JlYWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdGFyIFVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbXBvLXZvdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2b3Rvc1wiPnt2b3Rvc30gVm90b3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXN1YXJpbyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt2b3RhclByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbmVkb3JQcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9