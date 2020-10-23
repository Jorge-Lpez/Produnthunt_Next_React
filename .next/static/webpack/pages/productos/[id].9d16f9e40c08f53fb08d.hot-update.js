webpackHotUpdate_N_E("pages/productos/[id]",{

/***/ "./pages/productos/[id].js":
/*!*********************************!*\
  !*** ./pages/productos/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_layout_404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/404 */ "./components/layout/404.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_layout_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Spinner */ "./components/layout/Spinner.js");
/* harmony import */ var _components_ui_Formulario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ui/Formulario */ "./components/ui/Formulario.js");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jorge\\Documents\\Programacion Web\\Curso udemy React js\\React js app\\produnthuntnext\\pages\\productos\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    margin: 2rem 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    text-align: center;\n    margin-top: 5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    @media (min-width: 768px) {\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        column-gap: 2rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var ContenedorProducto = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c = ContenedorProducto;
var Nombre = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].h1(_templateObject2());
_c2 = Nombre;
var Titulo2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].h2(_templateObject3());
_c3 = Titulo2;

var Producto = function Producto() {
  _s();

  //Routing para obtener el id actual 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id; //Creando estate para guardar el resultado de la busqueda

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      producto = _useState[0],
      guardarProducto = _useState[1]; //state para el error en la consulta 


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      error = _useState2[0],
      guardarError = _useState2[1]; //State para activar el spinner 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      activar = _useState3[0],
      guardarActivar = _useState3[1]; // Extrayendo firebase de firebasecontext para llamar a la funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (id) {
      var obtenerProducto = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var productoQuery, producto;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                    }, 2000);
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
  }, [id]); //guardarActivar(true);
  //if(Object.keys(producto).length === 0)return <Spinner/>;

  console.log("   Este es el producto" + producto);
  var comentarios = producto.comentarios,
      creado = producto.creado,
      descripcion = producto.descripcion,
      empresa = producto.empresa,
      nombre = producto.nombre,
      url = producto.url,
      urlimagen = producto.urlimagen,
      votos = producto.votos;
  console.log(producto);
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, activar ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 49
    }
  }, "Publicado hace: "), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 49
    }
  }, descripcion), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 49
    }
  }, "Agrega tu comentario"), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 49
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_10__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 53
    }
  }, __jsx("input", {
    type: "text",
    name: "mensaje",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 57
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_10__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  })), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.map(function (comentario) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 58
      }
    }, comentario);
  })), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, "2"))))));
};

_s(Producto, "I/xCYb7VcDM9HBNl9r00LLLWDLc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c4 = Producto;
/* harmony default export */ __webpack_exports__["default"] = (Producto);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ContenedorProducto");
$RefreshReg$(_c2, "Nombre");
$RefreshReg$(_c3, "Titulo2");
$RefreshReg$(_c4, "Producto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIlByb2R1Y3RvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0byIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInByb2R1Y3RvUXVlcnkiLCJnZXQiLCJleGlzdHMiLCJkYXRhIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwibWFwIiwiY29tZW50YXJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQXhCO0tBQU1GLGtCO0FBUU4sSUFBTUcsTUFBTSxHQUFHRix1REFBTSxDQUFDRyxFQUFWLG9CQUFaO01BQU1ELE07QUFLTixJQUFNRSxPQUFPLEdBQUdKLHVEQUFNLENBQUNLLEVBQVYsb0JBQWI7TUFBTUQsTzs7QUFJTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFH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RDs7O01BSGJGLFE7QUEyRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9baWRdLjlkMTZmOWU0MGMwOGY1M2ZiMDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LzQwNFwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IENhbXBvLCBJbnB1dFN1Ym1pdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1wiO1xyXG5pbXBvcnQgeyBlcyB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuXHJcbmNvbnN0IENvbnRlbmVkb3JQcm9kdWN0byA9IHN0eWxlZC5kaXZgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9tYnJlID0gc3R5bGVkLmgxYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdHVsbzIgPSBzdHlsZWQuaDJgXHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vUm91dGluZyBwYXJhIG9idGVuZXIgZWwgaWQgYWN0dWFsIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHF1ZXJ5OiB7IGlkIH0gfSA9IHJvdXRlcjtcclxuXHJcbiAgICAvL0NyZWFuZG8gZXN0YXRlIHBhcmEgZ3VhcmRhciBlbCByZXN1bHRhZG8gZGUgbGEgYnVzcXVlZGFcclxuICAgIGNvbnN0IFtwcm9kdWN0bywgZ3VhcmRhclByb2R1Y3RvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgLy9zdGF0ZSBwYXJhIGVsIGVycm9yIGVuIGxhIGNvbnN1bHRhIFxyXG4gICAgY29uc3QgW2Vycm9yLCBndWFyZGFyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9TdGF0ZSBwYXJhIGFjdGl2YXIgZWwgc3Bpbm5lciBcclxuICAgIGNvbnN0IFthY3RpdmFyLCBndWFyZGFyQWN0aXZhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBFeHRyYXllbmRvIGZpcmViYXNlIGRlIGZpcmViYXNlY29udGV4dCBwYXJhIGxsYW1hciBhIGxhIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG8gPSBhc3luYyAoKSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG9RdWVyeSA9IGF3YWl0IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RvID0gYXdhaXQgcHJvZHVjdG9RdWVyeS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RvLmV4aXN0cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2R1Y3RvKHByb2R1Y3RvLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnRlbmVyUHJvZHVjdG8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICAvL2d1YXJkYXJBY3RpdmFyKHRydWUpO1xyXG4gICAgLy9pZihPYmplY3Qua2V5cyhwcm9kdWN0bykubGVuZ3RoID09PSAwKXJldHVybiA8U3Bpbm5lci8+O1xyXG4gICAgY29uc29sZS5sb2coXCIgICBFc3RlIGVzIGVsIHByb2R1Y3RvXCIgKyBwcm9kdWN0byk7XHJcbiAgICBjb25zdCB7Y29tZW50YXJpb3MsIGNyZWFkbywgZGVzY3JpcGNpb24sIGVtcHJlc2EsIG5vbWJyZSwgdXJsLCB1cmxpbWFnZW4sIHZvdG9zfSA9IHByb2R1Y3RvO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdG8pO1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPEVycm9yNDA0Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmFyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb21icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTm9tYnJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVuZWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlB1YmxpY2FkbyBoYWNlOiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxpbWFnZW59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXBjaW9ufTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZ3JlZ2EgdHUgY29tZW50YXJpbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW5zYWplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBDb21lbnRhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdHVsbzI+Q29tZW50YXJpb3M8L1RpdHVsbzI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWVudGFyaW9zLm1hcCggY29tZW50YXJpbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57Y29tZW50YXJpb308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVuZWRvclByb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=