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
var Color = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].ul(_templateObject3());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVuZWRvclByaW5jaXBhbCIsInN0eWxlZCIsImRpdiIsIkNvbnRlbmVkb3IiLCJDb2xvciIsInVsIiwiSG9tZSIsInVzZVN0YXRlIiwicHJvZHVjdG9zIiwiZ3VhcmRhclByb2R1Y3RvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsInByb2R1Y3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBekI7S0FBTUYsbUI7QUFLTixJQUFNRyxVQUFVLEdBQUdGLHVEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1DLFU7QUFPTixJQUFNQyxLQUFLLEdBQUdILHVEQUFNLENBQUNJLEVBQVYsb0JBQVg7TUFBTUQsSzs7QUFJTixJQUFPRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FGNUI7QUFBQSxNQUVYQyxTQUZXO0FBQUEsTUFFQUMsZ0JBRkE7O0FBQUEsb0JBR0lDLHdEQUFVLENBQUNDLHlEQUFELENBSGQ7QUFBQSxNQUdWQyxRQUhVLGVBR1ZBLFFBSFU7O0FBS2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JGLGNBQVEsQ0FBQ0csRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0QyxRQUE1QyxFQUFzRCxNQUF0RCxFQUE4REMsVUFBOUQsQ0FBeUVDLGVBQXpFO0FBQ0QsS0FGRDs7QUFHQUwsb0JBQWdCO0FBQ2pCLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsV0FBU0ssZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDakMsUUFBTVosU0FBUyxHQUFHWSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUc7QUFDeEM7QUFDRUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFYsU0FFS0QsR0FBRyxDQUFDRSxJQUFKLEVBRkw7QUFJRCxLQUxpQixDQUFsQjtBQU9BaEIsb0JBQWdCLENBQUNELFNBQUQsQ0FBaEI7QUFDRDs7QUFFRCxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUFJLFFBQVE7QUFBQSxXQUNwQixNQUFDLG9FQUFEO0FBQ0csU0FBRyxFQUFFQSxRQUFRLENBQUNGLEVBRGpCO0FBRUcsY0FBUSxFQUFFRSxRQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEb0I7QUFBQSxHQUF0QixDQURMLENBREosQ0FESixDQURGLENBREosQ0FESjtBQWtCRCxDQXpDRDs7R0FBT3BCLEk7O01BQUFBLEk7QUEyQ1FBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxY2Y4MjA4YTE4YmEyZTQ0MDA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZpcmViYXNlQ29udGV4dCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0b3NcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5jb25zdCBDb250ZW5lZG9yUHJpbmNpcGFsID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IENvbG9yID0gc3R5bGVkLnVsYFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5gO1xyXG5cclxuY29uc3QgIEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0b3MsIGd1YXJkYXJQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgZmlyZWJhc2UgfSA9ICB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLm9yZGVyQnkoXCJjcmVhZG9cIiwgXCJkZXNjXCIpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KTtcclxuICAgIH1cclxuICAgIG9idGVuZXJQcm9kdWN0b3MoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT57XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZ3VhcmRhclByb2R1Y3Rvcyhwcm9kdWN0b3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb250ZW5lZG9yUHJpbmNpcGFsPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0by5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG89e3Byb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbG9yPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW5lZG9yPlxyXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3JQcmluY2lwYWw+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=