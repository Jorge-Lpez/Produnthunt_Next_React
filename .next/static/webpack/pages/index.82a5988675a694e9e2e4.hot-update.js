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


var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\components\\layout\\Productos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 200px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Imagen = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject());
_c = Imagen;
var Comentario = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject2());

var Productos = function Productos(producto) {
  console.log(producto);
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
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(Imagen, {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, nombre), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, descripcion), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "img/comentario.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, comentarios.length, " comentarios")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Publicado hace: ", creado))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
};

_c2 = Productos;
/* harmony default export */ __webpack_exports__["default"] = (Productos);

var _c, _c2;

$RefreshReg$(_c, "Imagen");
$RefreshReg$(_c2, "Productos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdG9zLmpzIl0sIm5hbWVzIjpbIkltYWdlbiIsInN0eWxlZCIsImltZyIsIkNvbWVudGFyaW8iLCJQcm9kdWN0b3MiLCJwcm9kdWN0byIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImNvbWVudGFyaW9zIiwiY3JlYWRvIiwiZGVzY3JpcGNpb24iLCJlbXByZXNhIiwibm9tYnJlIiwidXJsIiwidXJsaW1hZ2VuIiwidm90b3MiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQVo7S0FBTUYsTTtBQUlOLElBQU1HLFVBQVUsR0FBR0YsdURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7O0FBS0EsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFjO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUQ0QiwyQkFFMkRBLFFBQVEsQ0FBQ0EsUUFGcEU7QUFBQSxNQUVyQkcsRUFGcUIsc0JBRXJCQSxFQUZxQjtBQUFBLE1BRWpCQyxXQUZpQixzQkFFakJBLFdBRmlCO0FBQUEsTUFFSkMsTUFGSSxzQkFFSkEsTUFGSTtBQUFBLE1BRUlDLFdBRkosc0JBRUlBLFdBRko7QUFBQSxNQUVpQkMsT0FGakIsc0JBRWlCQSxPQUZqQjtBQUFBLE1BRTBCQyxNQUYxQixzQkFFMEJBLE1BRjFCO0FBQUEsTUFFa0NDLEdBRmxDLHNCQUVrQ0EsR0FGbEM7QUFBQSxNQUV1Q0MsU0FGdkMsc0JBRXVDQSxTQUZ2QztBQUFBLE1BRWtEQyxLQUZsRCxzQkFFa0RBLEtBRmxEO0FBRzVCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxNQUFEO0FBQVEsT0FBRyxFQUFFRCxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsTUFBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixXQUFKLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixXQUFXLENBQUNRLE1BQWhCLGlCQUZKLENBSEosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFvQlAsTUFBcEIsQ0FSSixDQUpKLENBREosRUFpQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSixDQURKO0FBdUJILENBMUJEOztNQUFNTixTO0FBNEJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MmE1OTg4Njc1YTY5NGU5ZTJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5jb25zdCBJbWFnZW4gPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tZW50YXJpbyA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogNTBweDtcclxuYDtcclxuXHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvZHVjdG8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RvKTtcclxuICAgIGNvbnN0IHtpZCwgY29tZW50YXJpb3MsIGNyZWFkbywgZGVzY3JpcGNpb24sIGVtcHJlc2EsIG5vbWJyZSwgdXJsLCB1cmxpbWFnZW4sIHZvdG9zfSA9IHByb2R1Y3RvLnByb2R1Y3RvO1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VuIHNyYz17dXJsaW1hZ2VufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57bm9tYnJlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jb21lbnRhcmlvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb21lbnRhcmlvcy5sZW5ndGh9IGNvbWVudGFyaW9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5QdWJsaWNhZG8gaGFjZToge2NyZWFkb308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvczsiXSwic291cmNlUm9vdCI6IiJ9