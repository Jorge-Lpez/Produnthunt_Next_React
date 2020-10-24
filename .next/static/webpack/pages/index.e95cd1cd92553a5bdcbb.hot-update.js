webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useProductos.js":
/*!*******************************!*\
  !*** ./hooks/useProductos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useProductos = function useProductos(orden) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productos = _useState[0],
      guardarProductos = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_2__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection("productos").orderBy(orden, "desc").onSnapshot(manejarSnapshot);
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

  return {
    productos: productos
  };
};

_s(useProductos, "BZ71q/IUN5GInL3sCVNh5R0BbJY=");

/* harmony default export */ __webpack_exports__["default"] = (useProductos);

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_layout_Productos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Productos */ "./components/layout/Productos.js");
/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useProductos */ "./hooks/useProductos.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Home = function Home() {
  _s();

  var productos = Object(_hooks_useProductos__WEBPACK_IMPORTED_MODULE_3__["default"])("creado");
  console.log(productos);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, productos.map(function (producto) {
    return __jsx(_components_layout_Productos__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: producto.id,
      producto: producto,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 28
      }
    });
  }))))));
};

_s(Home, "o6dNg9VDAY2DzLWerURvqcUZ+p0=", false, function () {
  return [_hooks_useProductos__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdG9zLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VQcm9kdWN0b3MiLCJvcmRlbiIsInVzZVN0YXRlIiwicHJvZHVjdG9zIiwiZ3VhcmRhclByb2R1Y3RvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsIkhvbWUiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQyxFQUFELENBRnBCO0FBQUEsTUFFbkJDLFNBRm1CO0FBQUEsTUFFUkMsZ0JBRlE7O0FBQUEsb0JBR0pDLHdEQUFVLENBQUNDLHlEQUFELENBSE47QUFBQSxNQUdsQkMsUUFIa0IsZUFHbEJBLFFBSGtCOztBQUsxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCRixjQUFRLENBQUNHLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixXQUF2QixFQUFvQ0MsT0FBcEMsQ0FBNENYLEtBQTVDLEVBQW1ELE1BQW5ELEVBQTJEWSxVQUEzRCxDQUFzRUMsZUFBdEU7QUFDRCxLQUZEOztBQUdBTCxvQkFBZ0I7QUFDakIsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxXQUFTSyxlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUMvQixRQUFNWixTQUFTLEdBQUdZLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEdBQUcsRUFBRztBQUN4QztBQUNFQyxVQUFFLEVBQUVELEdBQUcsQ0FBQ0M7QUFEVixTQUVLRCxHQUFHLENBQUNFLElBQUosRUFGTDtBQUlILEtBTG1CLENBQWxCO0FBTUFoQixvQkFBZ0IsQ0FBQ0QsU0FBRCxDQUFoQjtBQUNEOztBQUVILFNBQU87QUFDSEEsYUFBUyxFQUFUQTtBQURHLEdBQVA7QUFHSCxDQXpCRDs7R0FBTUgsWTs7QUEyQlNBLDJFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFPcUIsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVsQixNQUFPbEIsU0FBUyxHQUFJSCxtRUFBWSxDQUFDLFFBQUQsQ0FBaEM7QUFFQXNCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsU0FBWjtBQUVBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsU0FBUyxDQUFDYyxHQUFWLENBQWMsVUFBQU8sUUFBUTtBQUFBLFdBQ3BCLE1BQUMsb0VBQUQ7QUFDRyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0wsRUFEakI7QUFFRyxjQUFRLEVBQUVLLFFBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURvQjtBQUFBLEdBQXRCLENBREwsQ0FESixDQURKLENBREYsQ0FESixDQURKO0FBa0JELENBeEJEOztHQUFPSCxJO1VBRWVyQiwyRDs7O0tBRmZxQixJO0FBMEJRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOTVjZDFjZDkyNTUzYTViZGNiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0ZpcmViYXNlQ29udGV4dH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcblxyXG5jb25zdCB1c2VQcm9kdWN0b3MgPSBvcmRlbiA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RvcywgZ3VhcmRhclByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB7IGZpcmViYXNlIH0gPSAgdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLm9yZGVyQnkob3JkZW4sIFwiZGVzY1wiKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdCk7XHJcbiAgICAgIH1cclxuICAgICAgb2J0ZW5lclByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT57XHJcbiAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICAgZ3VhcmRhclByb2R1Y3Rvcyhwcm9kdWN0b3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0b3NcclxuICAgIH07XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCB1c2VQcm9kdWN0b3M7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L1Byb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgdXNlUHJvZHVjdG9zIGZyb20gXCIuLi9ob29rcy91c2VQcm9kdWN0b3NcIjtcclxuXHJcbmNvbnN0ICBIb21lID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCAgcHJvZHVjdG9zICA9IHVzZVByb2R1Y3RvcyhcImNyZWFkb1wiKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdG9zKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGFkby1wcm9kdWN0b3NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0by5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG89e3Byb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9