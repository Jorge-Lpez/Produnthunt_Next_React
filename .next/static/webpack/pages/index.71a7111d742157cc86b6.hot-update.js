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

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    max-width: 1200px;\n    width: 95%;\n    padding: 5rem 0;\n    margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = Contenedor;

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
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(Contenedor, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, productos.map(function (producto) {
    return __jsx(_components_layout_Productos__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: _components_layout_Productos__WEBPACK_IMPORTED_MODULE_5__["default"].id,
      producto: producto,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 28
      }
    });
  }))))));
};

_s(Home, "BZ71q/IUN5GInL3sCVNh5R0BbJY=");

_c2 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2;

$RefreshReg$(_c, "Contenedor");
$RefreshReg$(_c2, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVuZWRvciIsInN0eWxlZCIsImRpdiIsIkhvbWUiLCJ1c2VTdGF0ZSIsInByb2R1Y3RvcyIsImd1YXJkYXJQcm9kdWN0b3MiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG9zIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJwcm9kdWN0byIsIlByb2R1Y3RvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTs7QUFPTixJQUFPRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FGNUI7QUFBQSxNQUVYQyxTQUZXO0FBQUEsTUFFQUMsZ0JBRkE7O0FBQUEsb0JBR0lDLHdEQUFVLENBQUNDLHlEQUFELENBSGQ7QUFBQSxNQUdWQyxRQUhVLGVBR1ZBLFFBSFU7O0FBS2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JGLGNBQVEsQ0FBQ0csRUFBVCxDQUFZQyxVQUFaLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0QyxRQUE1QyxFQUFzRCxNQUF0RCxFQUE4REMsVUFBOUQsQ0FBeUVDLGVBQXpFO0FBQ0QsS0FGRDs7QUFHQUwsb0JBQWdCO0FBQ2pCLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsV0FBU0ssZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDakMsUUFBTVosU0FBUyxHQUFHWSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUc7QUFDeEM7QUFDRUMsVUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRFYsU0FFS0QsR0FBRyxDQUFDRSxJQUZUO0FBSUQsS0FMaUIsQ0FBbEI7QUFPQWhCLG9CQUFnQixDQUFDRCxTQUFELENBQWhCO0FBQ0Q7O0FBRUQsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUFJLFFBQVE7QUFBQSxXQUNwQixNQUFDLG9FQUFEO0FBQ0csU0FBRyxFQUFFQyxvRUFBUyxDQUFDSCxFQURsQjtBQUVHLGNBQVEsRUFBRUUsUUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRG9CO0FBQUEsR0FBdEIsQ0FETCxDQURKLENBREosQ0FERixDQURKLENBREo7QUFrQkQsQ0F6Q0Q7O0dBQU9wQixJOztNQUFBQSxJO0FBMkNRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MWE3MTExZDc0MjE1N2NjODZiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdG9zXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0ICBIb21lID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbcHJvZHVjdG9zLCBndWFyZGFyUHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IGZpcmViYXNlIH0gPSAgdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2R1Y3Rvc1wiKS5vcmRlckJ5KFwiY3JlYWRvXCIsIFwiZGVzY1wiKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdCk7XHJcbiAgICB9XHJcbiAgICBvYnRlbmVyUHJvZHVjdG9zKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgY29uc3QgcHJvZHVjdG9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+e1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBndWFyZGFyUHJvZHVjdG9zKHByb2R1Y3Rvcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0YWRvLXByb2R1Y3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtQcm9kdWN0b3MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvPXtwcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9