webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Productos.js":
/*!****************************************!*\
  !*** ./components/layout/Productos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\jorge\\Documents\\Programacion Web\\Curso udemy React js\\React js app\\produnthuntnext\\components\\layout\\Productos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex: 0 0 auto;\n    text-align: center;\n    border: 1px solid #e1e1e1;\n    padding: 1rem 3rem;\n\n    div{\n        font-size: 2rem;\n    }\n\n    p{\n        margin: 0;\n        font-size: 2rem;\n        font-weight: 700;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    div{\n        display: flex;\n        align-items: center;\n        border: 1px solid #e1e1e1;\n        padding: .3rem 1rem;\n        margin-right: 2rem;\n    }\n    img{\n        width: 2rem;\n        margin-right: 2rem;\n    }\n    p{\n        font-size: 1.6rem;\n        margin-right: 1rem;\n        font-weight: 700;\n        &:last-of-type{\n            margin: 0;\n        }\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 200px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 1.6rem;\n    margin: 0;\n    color: #888;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 2rem;\n    font-weight: bold;\n    margin: 0;\n\n    :hover{\n        cursor: pointer;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex: 0 1 600px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    column-gap: 2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 4rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #e1e1e1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Producto = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject());
_c = Producto;
var DescripcionProducto = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
_c2 = DescripcionProducto;
var Titulo = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject3());
_c3 = Titulo;
var TextoDescripcion = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject4());
_c4 = TextoDescripcion;
var Imagen = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject5());
_c5 = Imagen;
var Comentarios = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
_c6 = Comentarios;
var Votos = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
_c7 = Votos;

var Productos = function Productos(producto) {
  //console.log(producto);
  var _producto$producto = producto.producto,
      id = _producto$producto.id,
      comentarios = _producto$producto.comentarios,
      creado = _producto$producto.creado,
      descripcion = _producto$producto.descripcion,
      empresa = _producto$producto.empresa,
      nombre = _producto$producto.nombre,
      url = _producto$producto.url,
      urlimagen = _producto$producto.urlimagen,
      votos = _producto$producto.votos;
  return __jsx(Producto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(DescripcionProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(Imagen, {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/productos/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 24
    }
  }, nombre)), __jsx(TextoDescripcion, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, descripcion), __jsx(Comentarios, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "img/comentario.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, comentarios.length, " comentarios"))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__["es"]
  })))), __jsx(Votos, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, " \u25B2 "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, votos)));
};

_c8 = Productos;
/* harmony default export */ __webpack_exports__["default"] = (Productos);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Producto");
$RefreshReg$(_c2, "DescripcionProducto");
$RefreshReg$(_c3, "Titulo");
$RefreshReg$(_c4, "TextoDescripcion");
$RefreshReg$(_c5, "Imagen");
$RefreshReg$(_c6, "Comentarios");
$RefreshReg$(_c7, "Votos");
$RefreshReg$(_c8, "Productos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdG9zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvIiwic3R5bGVkIiwibGkiLCJEZXNjcmlwY2lvblByb2R1Y3RvIiwiZGl2IiwiVGl0dWxvIiwiYSIsIlRleHRvRGVzY3JpcGNpb24iLCJwIiwiSW1hZ2VuIiwiaW1nIiwiQ29tZW50YXJpb3MiLCJWb3RvcyIsIlByb2R1Y3RvcyIsInByb2R1Y3RvIiwiaWQiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwibGVuZ3RoIiwiZm9ybWF0RGlzdGFuY2VUb05vdyIsIkRhdGUiLCJsb2NhbGUiLCJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFFBQVEsR0FBR0MsdURBQU0sQ0FBQ0MsRUFBVixtQkFBZDtLQUFNRixRO0FBUU4sSUFBTUcsbUJBQW1CLEdBQUdGLHVEQUFNLENBQUNHLEdBQVYsb0JBQXpCO01BQU1ELG1CO0FBT04sSUFBTUUsTUFBTSxHQUFHSix1REFBTSxDQUFDSyxDQUFWLG9CQUFaO01BQU1ELE07QUFVTixJQUFNRSxnQkFBZ0IsR0FBR04sdURBQU0sQ0FBQ08sQ0FBVixvQkFBdEI7TUFBTUQsZ0I7QUFNTixJQUFNRSxNQUFNLEdBQUdSLHVEQUFNLENBQUNTLEdBQVYsb0JBQVo7TUFBTUQsTTtBQUlOLElBQU1FLFdBQVcsR0FBR1YsdURBQU0sQ0FBQ0csR0FBVixvQkFBakI7TUFBTU8sVztBQXlCTixJQUFNQyxLQUFLLEdBQUdYLHVEQUFNLENBQUNHLEdBQVYsb0JBQVg7TUFBTVEsSzs7QUFrQk4sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFjO0FBQzVCO0FBRDRCLDJCQUUyREEsUUFBUSxDQUFDQSxRQUZwRTtBQUFBLE1BRXJCQyxFQUZxQixzQkFFckJBLEVBRnFCO0FBQUEsTUFFakJDLFdBRmlCLHNCQUVqQkEsV0FGaUI7QUFBQSxNQUVKQyxNQUZJLHNCQUVKQSxNQUZJO0FBQUEsTUFFSUMsV0FGSixzQkFFSUEsV0FGSjtBQUFBLE1BRWlCQyxPQUZqQixzQkFFaUJBLE9BRmpCO0FBQUEsTUFFMEJDLE1BRjFCLHNCQUUwQkEsTUFGMUI7QUFBQSxNQUVrQ0MsR0FGbEMsc0JBRWtDQSxHQUZsQztBQUFBLE1BRXVDQyxTQUZ2QyxzQkFFdUNBLFNBRnZDO0FBQUEsTUFFa0RDLEtBRmxELHNCQUVrREEsS0FGbEQ7QUFHNUIsU0FDSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUVELFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFPLFFBQUksdUJBQWdCUCxFQUFoQixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTSyxNQUFULENBREgsQ0FESixFQUlJLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQkYsV0FBbkIsQ0FKSixFQUtJLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLG9CQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUYsV0FBVyxDQUFDUSxNQUFoQixpQkFGSixDQURKLENBTEosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFxQkMsNEVBQW1CLENBQUMsSUFBSUMsSUFBSixDQUFTVCxNQUFULENBQUQsRUFBbUI7QUFBRVUsVUFBTSxFQUFFQyxrREFBRUE7QUFBWixHQUFuQixDQUF4QyxDQVpKLENBSkosQ0FESixFQXFCSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlMLEtBQUosQ0FGSixDQXJCSixDQURKO0FBNEJILENBL0JEOztNQUFNVixTO0FBaUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NmY1MDkzNWNmYTc0YmI3MGE5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93IGZyb20gXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93XCI7XHJcbmltcG9ydCB7IGVzIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuY29uc3QgUHJvZHVjdG8gPSBzdHlsZWQubGlgXHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXBjaW9uUHJvZHVjdG8gPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleDogMCAxIDYwMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcbmA7XHJcblxyXG5jb25zdCBUaXR1bG8gPSBzdHlsZWQuYWBcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIDpob3ZlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0b0Rlc2NyaXBjaW9uID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VuID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAyMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbWVudGFyaW9zID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgICAgICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICY6bGFzdC1vZi10eXBle1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVm90b3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG5cclxuICAgIGRpdntcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3RvKTtcclxuICAgIGNvbnN0IHtpZCwgY29tZW50YXJpb3MsIGNyZWFkbywgZGVzY3JpcGNpb24sIGVtcHJlc2EsIG5vbWJyZSwgdXJsLCB1cmxpbWFnZW4sIHZvdG9zfSA9IHByb2R1Y3RvLnByb2R1Y3RvO1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPFByb2R1Y3RvPlxyXG4gICAgICAgICAgICA8RGVzY3JpcGNpb25Qcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlbiBzcmM9e3VybGltYWdlbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17YC9wcm9kdWN0b3MvJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8VGl0dWxvPntub21icmV9PC9UaXR1bG8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0b0Rlc2NyaXBjaW9uPntkZXNjcmlwY2lvbn08L1RleHRvRGVzY3JpcGNpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbWVudGFyaW9zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY29tZW50YXJpby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbWVudGFyaW9zLmxlbmd0aH0gY29tZW50YXJpb3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29tZW50YXJpb3M+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlB1YmxpY2FkbyBoYWNlOiB7IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoY3JlYWRvKSwgeyBsb2NhbGU6IGVzIH0pfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXBjaW9uUHJvZHVjdG8+XHJcblxyXG4gICAgICAgICAgICA8Vm90b3M+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAmIzk2NTA7IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+e3ZvdG9zfTwvcD5cclxuICAgICAgICAgICAgPC9Wb3Rvcz5cclxuICAgICAgICA8L1Byb2R1Y3RvPlxyXG4gICAgKVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9zOyJdLCJzb3VyY2VSb290IjoiIn0=