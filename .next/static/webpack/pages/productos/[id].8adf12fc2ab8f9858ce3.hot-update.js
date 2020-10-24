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
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }, activar || !producto ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 49
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_14__["es"]
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 49
    }
  }, "Por ", creador.nombre, " de ", empresa), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 49
    }
  }, descripcion), usuario && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 57
    }
  }, "Agrega tu comentario"), __jsx("form", {
    onSubmit: onsubmitComentario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 57
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 174,
      columnNumber: 65
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 61
    }
  }))), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.length === 0 ? "Aun no hay comentarios" : __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 53
    }
  }, comentarios.map(function (comentario, i) {
    return __jsx("li", {
      key: "".concat(comentario.usuarioId, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 61
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 65
      }
    }, comentario.mensaje), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 65
      }
    }, "Escrito por:", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 69
      }
    }, "  ".concat(comentario.usuarioNombre))), origenCreador(comentario.usuarioId) && __jsx(CreadorProducto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 69
      }
    }, "Es creador"));
  }))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  }, __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    target: "_blank",
    bgColor: "true",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 49
    }
  }, "Visitar Url"), __jsx("div", {
    className: "campo-votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 53
    }
  }, votos, " Votos"), usuario && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: votarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIkNyZWFkb3JQcm9kdWN0byIsInAiLCJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvbnN1bHRhckRCIiwiZ3VhcmRhckNvbnN1bHRhckRCIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsIm1lbnNhamUiLCJudWV2b3NDb21lbnRhcmlvcyIsImd1YXJkYXJDb21lbnRhcmlvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG8iLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0b1F1ZXJ5IiwiZ2V0IiwiZXhpc3RzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwiY3JlYWRvciIsImhhVm90YWRvIiwidm90YXJQcm9kdWN0byIsInB1c2giLCJOdWV2b1ZvdG9zIiwiaW5jbHVkZXMiLCJ1aWQiLCJoYW52b3RhZG8iLCJ1cGRhdGUiLCJoYW5kbGVDb21lbnRhcmlvcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvcmlnZW5DcmVhZG9yIiwib25zdWJtaXRDb21lbnRhcmlvIiwicHJldmVudERlZmF1bHQiLCJ1c3VhcmlvSWQiLCJ1c3VhcmlvTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJudWV2b3NDb21lbnRhcmlvIiwiZm9ybWF0RGlzdGFuY2VUb05vdyIs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VSxDQUFDcEQsT0FBZixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZb0QsVUFBVSxDQUFDVCxhQUF2QixFQURKLENBSkosRUFPS0osYUFBYSxDQUFDYSxVQUFVLENBQUNWLFNBQVosQ0FBYixJQUNHLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJSLENBRGM7QUFBQSxHQUFqQixDQURMLENBNUJYLENBREwsRUE4Q1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFDSSxVQUFNLEVBQUMsUUFEWDtBQUVJLFdBQU8sRUFBQyxNQUZaO0FBR0ksUUFBSSxFQUFFcEIsR0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBUUk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCRSxLQUF0QixXQURKLEVBRUtsQixPQUFPLElBQ0osTUFBQyw2REFBRDtBQUNJLFdBQU8sRUFBRXFCLGFBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhSLENBUkosQ0E5Q1IsQ0FKTixDQUhOLENBSFosQ0FESixDQURKO0FBcUZILENBbE1EOztHQUFNekMsUTtVQUdhRSxxRDs7O01BSGJGLFE7QUFvTVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9baWRdLjhhZGYxMmZjMmFiOGY5ODU4Y2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LzQwNFwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IENhbXBvLCBJbnB1dFN1Ym1pdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1wiO1xyXG5pbXBvcnQgeyBlcyB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IEJvdG9uICBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9Cb3RvblwiO1xyXG5cclxuY29uc3QgQ29udGVuZWRvclByb2R1Y3RvID0gc3R5bGVkLmRpdmBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBOb21icmUgPSBzdHlsZWQuaDFgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0dWxvMiA9IHN0eWxlZC5oMmBcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ3JlYWRvclByb2R1Y3RvID0gc3R5bGVkLnBgXHJcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RBNTUyRjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9Sb3V0aW5nIHBhcmEgb2J0ZW5lciBlbCBpZCBhY3R1YWwgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcXVlcnk6IHsgaWQgfSB9ID0gcm91dGVyO1xyXG5cclxuICAgIC8vQ3JhbmRvIHN0YXRlIHBhcmEgY2FtYmlvIGRlIHByb2R1Y3RvIHkgbm8gY2ljbGFyIGxhIGFwbGljYWNpb25cclxuICAgIGNvbnN0W2NvbnN1bHRhckRCLCBndWFyZGFyQ29uc3VsdGFyREJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvL0NyZWFuZG8gZXN0YXRlIHBhcmEgZ3VhcmRhciBlbCByZXN1bHRhZG8gZGUgbGEgYnVzcXVlZGFcclxuICAgIGNvbnN0IFtwcm9kdWN0bywgZ3VhcmRhclByb2R1Y3RvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgLy9zdGF0ZSBwYXJhIGVsIGVycm9yIGVuIGxhIGNvbnN1bHRhIFxyXG4gICAgY29uc3QgW2Vycm9yLCBndWFyZGFyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9TdGF0ZSBwYXJhIGFjdGl2YXIgZWwgc3Bpbm5lciBcclxuICAgIGNvbnN0IFthY3RpdmFyLCBndWFyZGFyQWN0aXZhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL0NyZWFuZG8gc3RhdGUgcGFyYSBjb21lbnRhcmlvc1xyXG4gICAgY29uc3QgW251ZXZvc0NvbWVudGFyaW9zLCBndWFyZGFyQ29tZW50YXJpb3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG1lbnNhamU6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV4dHJheWVuZG8gZmlyZWJhc2UgZGUgZmlyZWJhc2Vjb250ZXh0IHBhcmEgbGxhbWFyIGEgbGEgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpZCAmJiBjb25zdWx0YXJEQil7XHJcbiAgICAgICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0byA9IGFzeW5jICgpICA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0b1F1ZXJ5ID0gYXdhaXQgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG8gPSBhd2FpdCBwcm9kdWN0b1F1ZXJ5LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdG8uZXhpc3RzKXtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZHVjdG8ocHJvZHVjdG8uZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckNvbnN1bHRhckRCKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnRlbmVyUHJvZHVjdG8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICAvL2d1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgLy9pZihPYmplY3Qua2V5cyhwcm9kdWN0bykubGVuZ3RoID09PSAwKXJldHVybiA8U3Bpbm5lci8+O1xyXG4gICAgY29uc3Qge2NvbWVudGFyaW9zLCBjcmVhZG8sIGRlc2NyaXBjaW9uLCBlbXByZXNhLCBub21icmUsIHVybCwgdXJsaW1hZ2VuLCB2b3RvcywgY3JlYWRvciwgaGFWb3RhZG99ID0gcHJvZHVjdG87XHJcblxyXG4gICAgY29uc3Qgdm90YXJQcm9kdWN0byA9ICgpID0+IHtcclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IE51ZXZvVm90b3MgPSB2b3RvcyArIDE7XHJcblxyXG4gICAgICAgIC8vVmVyZmljYXIgc2kgZWwgdXN1YXJpbyBoYSB2b3RhZG8gXHJcbiAgICAgICAgaWYoaGFWb3RhZG8uaW5jbHVkZXModXN1YXJpby51aWQpKXJldHVybjtcclxuICAgICAgICAvL0d1YXJkYXIgZWwgSUQgZGVsIHVzdWFyaW8gcXVlIGhhIHZvdGFkb1xyXG4gICAgICAgIGNvbnN0IGhhbnZvdGFkbyA9IFsuLi5oYVZvdGFkbywgdXN1YXJpby51aWRdO1xyXG4gICAgICAgIC8vQWdyZWdhbmRvIGEgbGEgYmFzZSBkZSBkYXRvc1xyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKS51cGRhdGUoe3ZvdG9zOiBOdWV2b1ZvdG9zLCBoYVZvdGFkbzogaGFudm90YWRvfSk7ICAgIFxyXG5cclxuICAgICAgICAvL0FncmVnYW5kbyBhbCBzdGF0ZVxyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0byh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvLFxyXG4gICAgICAgICAgICB2b3RvczogTnVldm9Wb3Rvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ3JlYW5kbyBmdW5jaW9uIHBhcmEgbGxlbmFyIGVsIHN0YXRlIGRlIGNvbWVudGFyaW9zXHJcbiAgICBjb25zdCBoYW5kbGVDb21lbnRhcmlvcyA9IChlKSA9PntcclxuICAgICAgICBndWFyZGFyQ29tZW50YXJpb3Moe1xyXG4gICAgICAgICAgICAuLi5udWV2b3NDb21lbnRhcmlvcyxcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Z1bmNpb24gdmV3cmlmaWNhIHNpIGVzIGVsIGNyZWFkb3IgZWwgcXVlIGVzY3JpYmUgZWwgY29tZWVudGFyaW9cclxuICAgIGNvbnN0IG9yaWdlbkNyZWFkb3IgPSBpZCA9PiB7XHJcbiAgICAgICAgaWYoY3JlYWRvci5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9DcmVhbmRvIGZ1bmNpb24gYm90b24gY29tZW50YXIgZW4gZWwgZm9ybXVsYXJpbyBwYXJhIGFncmVnYXIgZm9ybXVsYXJpXHJcbiAgICBjb25zdCBvbnN1Ym1pdENvbWVudGFyaW8gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighdXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vSW5mb3JtYWNpb24gZXh0cmEgYWwgY29tZW50YXJpbyBcclxuICAgICAgICBudWV2b3NDb21lbnRhcmlvcy51c3VhcmlvSWQgPSB1c3VhcmlvLnVpZDtcclxuICAgICAgICBudWV2b3NDb21lbnRhcmlvcy51c3VhcmlvTm9tYnJlID0gdXN1YXJpby5kaXNwbGF5TmFtZTtcclxuICAgICAgICAvL1RvbWFyIGNvcGlhIGRlIGNvbWVudGFyaW8geSBhZ3JlZ2FybG9zIGFsIGFycmVnbG9cclxuICAgICAgICBjb25zdCBudWV2b3NDb21lbnRhcmlvID0gWy4uLmNvbWVudGFyaW9zLCBudWV2b3NDb21lbnRhcmlvc107XHJcbiAgICAgICAgLy9BY3R1YWxpemFyIGxhIEJEXHJcbiAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5kb2MoaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbWVudGFyaW9zOiBudWV2b3NDb21lbnRhcmlvXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBBY3R1YWxpemFyIGVsIHN0YXRlXHJcbiAgICAgICAgZ3VhcmRhclByb2R1Y3RvKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG8sXHJcbiAgICAgICAgICAgIGNvbWVudGFyaW9zOiBudWV2b3NDb21lbnRhcmlvXHJcbiAgICAgICAgfSlcclxuICAgICAgICBndWFyZGFyQ29tZW50YXJpb3Moe1xyXG4gICAgICAgICAgICBtZW5zYWplOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3VhcmRhckNvbnN1bHRhckRCKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPEVycm9yNDA0Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmFyIHx8ICFwcm9kdWN0byA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9tYnJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05vbWJyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbmVkb3JQcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QdWJsaWNhZG8gaGFjZTogeyBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGNyZWFkbyksIHsgbG9jYWxlOiBlcyB9KX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3Ige2NyZWFkb3Iubm9tYnJlfSBkZSB7ZW1wcmVzYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxpbWFnZW59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW8gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFncmVnYSB0dSBjb21lbnRhcmlvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25zdWJtaXRDb21lbnRhcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW5zYWplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29tZW50YXJpb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251ZXZvc0NvbWVudGFyaW9zLm1lbnNhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIENvbWVudGFyaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0dWxvMj5Db21lbnRhcmlvczwvVGl0dWxvMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLmxlbmd0aCA9PT0gMCA/IFwiQXVuIG5vIGhheSBjb21lbnRhcmlvc1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tZW50YXJpb3MubWFwKCAoY29tZW50YXJpbywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29tZW50YXJpby51c3VhcmlvSWR9LSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29tZW50YXJpby5tZW5zYWplfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVzY3JpdG8gcG9yOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCAgJHtjb21lbnRhcmlvLnVzdWFyaW9Ob21icmV9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JpZ2VuQ3JlYWRvcihjb21lbnRhcmlvLnVzdWFyaW9JZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYWRvclByb2R1Y3RvPkVzIGNyZWFkb3I8L0NyZWFkb3JQcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzaXRhciBVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1wby12b3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidm90b3NcIj57dm90b3N9IFZvdG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW8gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dm90YXJQcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW5lZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==