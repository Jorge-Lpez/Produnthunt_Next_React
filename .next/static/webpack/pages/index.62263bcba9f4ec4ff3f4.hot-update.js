webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _components_layout_Productos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Productos */ "./components/layout/Productos.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n   background-color: #FFF;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    max-width: 1200px;\n    width: 95%;\n    padding: 5rem 0;\n    margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background-color: #f3f3f3;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ContenedorPrincipal = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = ContenedorPrincipal;
var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
_c2 = Contenedor;
var Color = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3());
_c3 = Color;

var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      productos = _useState[0],
      guardarProductos = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_4__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection("productos").orderBy("creado", "desc").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    var productos = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    guardarProductos(productos);
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(ContenedorPrincipal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(Contenedor, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(Color, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, productos.map(function (producto) {
    return __jsx(_components_layout_Productos__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: producto.id,
      producto: producto,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 28
      }
    });
  }))))));
};

_s(Home, "BZ71q/IUN5GInL3sCVNh5R0BbJY=");

_c4 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ContenedorPrincipal");
$RefreshReg$(_c2, "Contenedor");
$RefreshReg$(_c3, "Color");
$RefreshReg$(_c4, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVuZWRvclByaW5jaXBhbCIsInN0eWxlZCIsImRpdiIsIkNvbnRlbmVkb3IiLCJDb2xvciIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2R1Y3RvcyIsImd1YXJkYXJQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG9zIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJwcm9kdWN0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQXpCO0tBQU1GLG1CO0FBS04sSUFBTUcsVUFBVSxHQUFHRix1REFBTSxDQUFDQyxHQUFWLG9CQUFoQjtNQUFNQyxVO0FBT04sSUFBTUMsS0FBSyxHQUFHSCx1REFBTSxDQUFDQyxHQUFWLG9CQUFYO01BQU1FLEs7O0FBSU4sSUFBT0MsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQyxFQUFELENBRjVCO0FBQUEsTUFFWEMsU0FGVztBQUFBLE1BRUFDLGdCQUZBOztBQUFBLG9CQUdJQyx3REFBVSxDQUFDQyx5REFBRCxDQUhkO0FBQUEsTUFHVkMsUUFIVSxlQUdWQSxRQUhVOztBQUtsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCRixjQUFRLENBQUNHLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsT0FBcEMsQ0FBNEMsUUFBNUMsRUFBc0QsTUFBdEQsRUFBOERDLFVBQTlELENBQXlFQyxlQUF6RTtBQUNELEtBRkQ7O0FBR0FMLG9CQUFnQjtBQUNqQixHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLFdBQVNLLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2pDLFFBQU1aLFNBQVMsR0FBR1ksUUFBUSxDQUFDQyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFHO0FBQ3hDO0FBQ0VDLFVBQUUsRUFBRUQsR0FBRyxDQUFDQztBQURWLFNBRUtELEdBQUcsQ0FBQ0UsSUFBSixFQUZMO0FBSUQsS0FMaUIsQ0FBbEI7QUFPQWhCLG9CQUFnQixDQUFDRCxTQUFELENBQWhCO0FBQ0Q7O0FBRUQsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxTQUFTLENBQUNjLEdBQVYsQ0FBYyxVQUFBSSxRQUFRO0FBQUEsV0FDcEIsTUFBQyxvRUFBRDtBQUNHLFNBQUcsRUFBRUEsUUFBUSxDQUFDRixFQURqQjtBQUVHLGNBQVEsRUFBRUUsUUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRG9CO0FBQUEsR0FBdEIsQ0FETCxDQURKLENBREosQ0FERixDQURKLENBREo7QUFrQkQsQ0F6Q0Q7O0dBQU9wQixJOztNQUFBQSxJO0FBMkNRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MjI2M2JjYmE5ZjRlYzRmZjNmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdG9zXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgQ29udGVuZWRvclByaW5jaXBhbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbmVkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBDb2xvciA9IHN0eWxlZC5kaXZgXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbmA7XHJcblxyXG5jb25zdCAgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3RvcywgZ3VhcmRhclByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgeyBmaXJlYmFzZSB9ID0gIHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikub3JkZXJCeShcImNyZWFkb1wiLCBcImRlc2NcIikub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpO1xyXG4gICAgfVxyXG4gICAgb2J0ZW5lclByb2R1Y3RvcygpO1xyXG4gIH0sIFtdKVxyXG5cclxuICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgIGNvbnN0IHByb2R1Y3RvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PntcclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBndWFyZGFyUHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbmVkb3JQcmluY2lwYWw+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0b3MubWFwKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Rvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0bz17cHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sb3I+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvclByaW5jaXBhbD5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==