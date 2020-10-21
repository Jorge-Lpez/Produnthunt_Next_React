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
      }, doc.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVuZWRvclByaW5jaXBhbCIsInN0eWxlZCIsImRpdiIsIkNvbnRlbmVkb3IiLCJDb2xvciIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2R1Y3RvcyIsImd1YXJkYXJQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG9zIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJwcm9kdWN0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQXpCO0tBQU1GLG1CO0FBS04sSUFBTUcsVUFBVSxHQUFHRix1REFBTSxDQUFDQyxHQUFWLG9CQUFoQjtNQUFNQyxVO0FBT04sSUFBTUMsS0FBSyxHQUFHSCx1REFBTSxDQUFDQyxHQUFWLG9CQUFYO01BQU1FLEs7O0FBSU4sSUFBT0MsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQyxFQUFELENBRjVCO0FBQUEsTUFFWEMsU0FGVztBQUFBLE1BRUFDLGdCQUZBOztBQUFBLG9CQUdJQyx3REFBVSxDQUFDQyx5REFBRCxDQUhkO0FBQUEsTUFHVkMsUUFIVSxlQUdWQSxRQUhVOztBQUtsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCRixjQUFRLENBQUNHLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsT0FBcEMsQ0FBNEMsUUFBNUMsRUFBc0QsTUFBdEQsRUFBOERDLFVBQTlELENBQXlFQyxlQUF6RTtBQUNELEtBRkQ7O0FBR0FMLG9CQUFnQjtBQUNqQixHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLFdBQVNLLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2pDLFFBQU1aLFNBQVMsR0FBR1ksUUFBUSxDQUFDQyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFHO0FBQ3hDO0FBQ0VDLFVBQUUsRUFBRUQsR0FBRyxDQUFDQztBQURWLFNBRUtELEdBQUcsQ0FBQ0UsSUFGVDtBQUlELEtBTGlCLENBQWxCO0FBT0FoQixvQkFBZ0IsQ0FBQ0QsU0FBRCxDQUFoQjtBQUNEOztBQUVELFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsU0FBUyxDQUFDYyxHQUFWLENBQWMsVUFBQUksUUFBUTtBQUFBLFdBQ3BCLE1BQUMsb0VBQUQ7QUFDRyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0YsRUFEakI7QUFFRyxjQUFRLEVBQUVFLFFBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURvQjtBQUFBLEdBQXRCLENBREwsQ0FESixDQURKLENBREYsQ0FESixDQURKO0FBa0JELENBekNEOztHQUFPcEIsSTs7TUFBQUEsSTtBQTJDUUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTdmY2VmYTUzN2U0OGEzN2UxYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L1Byb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IENvbnRlbmVkb3JQcmluY2lwYWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuYDtcclxuXHJcblxyXG5jb25zdCBDb250ZW5lZG9yID0gc3R5bGVkLmRpdmBcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgQ29sb3IgPSBzdHlsZWQuZGl2YFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5gO1xyXG5cclxuY29uc3QgIEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0b3MsIGd1YXJkYXJQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgZmlyZWJhc2UgfSA9ICB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLm9yZGVyQnkoXCJjcmVhZG9cIiwgXCJkZXNjXCIpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KTtcclxuICAgIH1cclxuICAgIG9idGVuZXJQcm9kdWN0b3MoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT57XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGd1YXJkYXJQcm9kdWN0b3MocHJvZHVjdG9zKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29udGVuZWRvclByaW5jaXBhbD5cclxuICAgICAgICAgICAgICAgIDxDb250ZW5lZG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvPXtwcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xvcj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuICAgICAgICAgICAgPC9Db250ZW5lZG9yUHJpbmNpcGFsPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9