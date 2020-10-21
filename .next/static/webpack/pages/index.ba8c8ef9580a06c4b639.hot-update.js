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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productos = _useState[0],
      guardarProductos = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_3__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Inicio")));
};

_s(Home, "BZ71q/IUN5GInL3sCVNh5R0BbJY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicHJvZHVjdG9zIiwiZ3VhcmRhclByb2R1Y3RvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFPQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FGNUI7QUFBQSxNQUVYQyxTQUZXO0FBQUEsTUFFQUMsZ0JBRkE7O0FBQUEsb0JBR0lDLHdEQUFVLENBQUNDLHlEQUFELENBSGQ7QUFBQSxNQUdWQyxRQUhVLGVBR1ZBLFFBSFU7O0FBS2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JGLGNBQVEsQ0FBQ0csRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0QyxRQUE1QyxFQUFzRCxNQUF0RCxFQUE4REMsVUFBOUQsQ0FBeUVDLGVBQXpFO0FBQ0QsS0FGRDs7QUFHQUwsb0JBQWdCO0FBQ2pCLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsV0FBU0ssZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDakMsUUFBTVosU0FBUyxHQUFHWSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUc7QUFDeEM7QUFDRUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFYsU0FFS0QsR0FBRyxDQUFDRSxJQUZUO0FBSUQsS0FMaUIsQ0FBbEI7QUFPQWhCLG9CQUFnQixDQUFDRCxTQUFELENBQWhCO0FBQ0Q7O0FBRUQsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBREosQ0FESjtBQU9ELENBOUJEOztHQUFPRixJOztLQUFBQSxJO0FBZ0NRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYThjOGVmOTU4MGEwNmM0YjYzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuXHJcbmNvbnN0ICBIb21lID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbcHJvZHVjdG9zLCBndWFyZGFyUHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IGZpcmViYXNlIH0gPSAgdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5vcmRlckJ5KFwiY3JlYWRvXCIsIFwiZGVzY1wiKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdCk7XHJcbiAgICB9XHJcbiAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgY29uc3QgcHJvZHVjdG9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+e1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBndWFyZGFyUHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgxPkluaWNpbzwvaDE+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=