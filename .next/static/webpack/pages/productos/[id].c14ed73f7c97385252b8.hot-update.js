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

  var comentarios = producto.comentarios,
      creado = producto.creado,
      descripcion = producto.descripcion,
      empresa = producto.empresa,
      nombre = producto.nombre,
      url = producto.url,
      urlimagen = producto.urlimagen,
      votos = producto.votos;
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, activar ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  })))));
};

_s(Producto, "I/xCYb7VcDM9HBNl9r00LLLWDLc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c3 = Producto;
/* harmony default export */ __webpack_exports__["default"] = (Producto);

var _c, _c2, _c3;

$RefreshReg$(_c, "ContenedorProducto");
$RefreshReg$(_c2, "Nombre");
$RefreshReg$(_c3, "Producto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIlByb2R1Y3RvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0byIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInByb2R1Y3RvUXVlcnkiLCJnZXQiLCJleGlzdHMiLCJkYXRhIiwic2V0VGltZW91dCIsImNvbWVudGFyaW9zIiwiY3JlYWRvIiwiZGVzY3JpcGNpb24iLCJlbXByZXNhIiwibm9tYnJlIiwidXJsIiwidXJsaW1hZ2VuIiwidm90b3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG1CQUF4QjtLQUFNRixrQjtBQVFOLElBQU1HLE1BQU0sR0FBR0YsdURBQU0sQ0FBQ0csRUFBVixvQkFBWjtNQUFNRCxNO0FBS04sSUFBTUUsT0FBTyxHQUFHSix1REFBTSxDQUFDSyxFQUFWLG9CQUFiOztBQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSG1CLE1BSUZDLEVBSkUsR0FJT0YsTUFKUCxDQUlYRyxLQUpXLENBSUZELEVBSkUsRUFNbkI7O0FBTm1CLGtCQU9pQkUsc0RBQVEsQ0FBQyxFQUFELENBUHpCO0FBQUEsTUFPWkMsUUFQWTtBQUFBLE1BT0ZDLGVBUEUsaUJBUW5COzs7QUFSbUIsbUJBU1dGLHNEQUFRLENBQUMsS0FBRCxDQVRuQjtBQUFBLE1BU1pHLEtBVFk7QUFBQSxNQVNMQyxZQVRLLGtCQVVuQjs7O0FBVm1CLG1CQVdlSixzREFBUSxDQUFDLEtBQUQsQ0FYdkI7QUFBQSxNQVdaSyxPQVhZO0FBQUEsTUFXSEMsY0FYRyxrQkFZbkI7OztBQVptQixvQkFhRUMsd0RBQVUsQ0FBQ0MseURBQUQsQ0FiWjtBQUFBLE1BYVhDLFFBYlcsZUFhWEEsUUFiVzs7QUFlbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdaLEVBQUgsRUFBTTtBQUNGLFVBQU1hLGVBQWU7QUFBQSxvTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNRRixRQUFRLENBQUNHLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsR0FBcEMsQ0FBd0NoQixFQUF4QyxDQURSOztBQUFBO0FBQ2RpQiwrQkFEYztBQUFBO0FBQUEseUJBRUdBLGFBQWEsQ0FBQ0MsR0FBZCxFQUZIOztBQUFBO0FBRWRmLDBCQUZjOztBQUdwQixzQkFBR0EsUUFBUSxDQUFDZ0IsTUFBWixFQUFtQjtBQUNmZixtQ0FBZSxDQUFDRCxRQUFRLENBQUNpQixJQUFULEVBQUQsQ0FBZjtBQUNBWixrQ0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNBYSw4QkFBVSxDQUFDLFlBQU07QUFDYmIsb0NBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSCxxQkFGUyxFQUVQLElBRk8sQ0FBVjtBQUdILG1CQU5ELE1BTUs7QUFDREYsZ0NBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFYbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSDs7QUFBQSx3QkFBZk8sZUFBZTtBQUFBO0FBQUE7QUFBQSxTQUFyQjs7QUFhQUEscUJBQWU7QUFDbEI7QUFDSixHQWpCUSxFQWlCTixDQUFDYixFQUFELENBakJNLENBQVQsQ0FmbUIsQ0FrQ25CO0FBQ0E7O0FBbkNtQixNQW9DWnNCLFdBcENZLEdBb0NnRW5CLFFBcENoRSxDQW9DWm1CLFdBcENZO0FBQUEsTUFvQ0NDLE1BcENELEdBb0NnRXBCLFFBcENoRSxDQW9DQ29CLE1BcENEO0FBQUEsTUFvQ1NDLFdBcENULEdBb0NnRXJCLFFBcENoRSxDQW9DU3FCLFdBcENUO0FBQUEsTUFvQ3NCQyxPQXBDdEIsR0FvQ2dFdEIsUUFwQ2hFLENBb0NzQnNCLE9BcEN0QjtBQUFBLE1Bb0MrQkMsTUFwQy9CLEdBb0NnRXZCLFFBcENoRSxDQW9DK0J1QixNQXBDL0I7QUFBQSxNQW9DdUNDLEdBcEN2QyxHQW9DZ0V4QixRQXBDaEUsQ0FvQ3VDd0IsR0FwQ3ZDO0FBQUEsTUFvQzRDQyxTQXBDNUMsR0FvQ2dFekIsUUFwQ2hFLENBb0M0Q3lCLFNBcEM1QztBQUFBLE1Bb0N1REMsS0FwQ3ZELEdBb0NnRTFCLFFBcENoRSxDQW9DdUQwQixLQXBDdkQ7QUFxQ25CLFNBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksbUVBQ1N4QixLQUFLLEdBQUcsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FFRjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsT0FBTyxHQUNKLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURJLEdBRU4sbUVBQ00sTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ21CLE1BREQsQ0FETixFQUlNLE1BQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpOLENBSE4sQ0FIWixDQURKLENBREo7QUFzQkgsQ0EzREQ7O0dBQU03QixRO1VBR2FFLHFEOzs7TUFIYkYsUTtBQTZEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tpZF0uYzE0ZWQ3M2Y3Yzk3Mzg1MjUyYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBFcnJvcjQwNCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvNDA0XCI7XHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgQ2FtcG8sIElucHV0U3VibWl0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9Gb3JtdWxhcmlvXCI7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93IGZyb20gXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93XCI7XHJcbmltcG9ydCB7IGVzIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5cclxuY29uc3QgQ29udGVuZWRvclByb2R1Y3RvID0gc3R5bGVkLmRpdmBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBOb21icmUgPSBzdHlsZWQuaDFgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0dWxvMiA9IHN0eWxlZC5oMmBcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9Sb3V0aW5nIHBhcmEgb2J0ZW5lciBlbCBpZCBhY3R1YWwgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcXVlcnk6IHsgaWQgfSB9ID0gcm91dGVyO1xyXG5cclxuICAgIC8vQ3JlYW5kbyBlc3RhdGUgcGFyYSBndWFyZGFyIGVsIHJlc3VsdGFkbyBkZSBsYSBidXNxdWVkYVxyXG4gICAgY29uc3QgW3Byb2R1Y3RvLCBndWFyZGFyUHJvZHVjdG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICAvL3N0YXRlIHBhcmEgZWwgZXJyb3IgZW4gbGEgY29uc3VsdGEgXHJcbiAgICBjb25zdCBbZXJyb3IsIGd1YXJkYXJFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL1N0YXRlIHBhcmEgYWN0aXZhciBlbCBzcGlubmVyIFxyXG4gICAgY29uc3QgW2FjdGl2YXIsIGd1YXJkYXJBY3RpdmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIEV4dHJheWVuZG8gZmlyZWJhc2UgZGUgZmlyZWJhc2Vjb250ZXh0IHBhcmEgbGxhbWFyIGEgbGEgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0byA9IGFzeW5jICgpICA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0b1F1ZXJ5ID0gYXdhaXQgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG8gPSBhd2FpdCBwcm9kdWN0b1F1ZXJ5LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdG8uZXhpc3RzKXtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZHVjdG8ocHJvZHVjdG8uZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9idGVuZXJQcm9kdWN0bygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIC8vZ3VhcmRhckFjdGl2YXIodHJ1ZSk7XHJcbiAgICAvL2lmKE9iamVjdC5rZXlzKHByb2R1Y3RvKS5sZW5ndGggPT09IDApcmV0dXJuIDxTcGlubmVyLz47XHJcbiAgICBjb25zdCB7Y29tZW50YXJpb3MsIGNyZWFkbywgZGVzY3JpcGNpb24sIGVtcHJlc2EsIG5vbWJyZSwgdXJsLCB1cmxpbWFnZW4sIHZvdG9zfSA9IHByb2R1Y3RvO1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8RXJyb3I0MDQvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2YXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vbWJyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob21icmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW5lZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW5lZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==