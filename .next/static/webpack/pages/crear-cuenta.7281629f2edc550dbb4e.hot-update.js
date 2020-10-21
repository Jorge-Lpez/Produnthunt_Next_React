webpackHotUpdate_N_E("pages/crear-cuenta",{

/***/ "./components/ui/Formulario.js":
/*!*************************************!*\
  !*** ./components/ui/Formulario.js ***!
  \*************************************/
/*! exports provided: Formulario, Campo, InputSubmit, Titulo, Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formulario", function() { return Formulario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Campo", function() { return Campo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSubmit", function() { return InputSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Titulo", function() { return Titulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: red;\n    padding: 1rem;\n    color: white;\n    font-family: \"PT Sans\", sans-serif;\n    font-weight: 700;\n    font-size: 1.4rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin: 2rem 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n    margin-top: 5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background: var(--naranja);\n        width: 100%;\n        padding: 1.5rem;\n        text-align: center;\n        color: #fff;\n        font-size: 1.8rem;\n        text-transform: uppercase;\n        border: none;\n        font-family: \"PT Sans\", sans-serif;\n        font-weight: 700;\n\n        &:hover{\n            cursor: pointer;\n        }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        margin-bottom: 2rem;\n        display: flex;\n        align-items: center;\n\n        label{\n            flex: 0 0 150px;\n            font-size: 1.8rem;\n        }\n\n        input, textarea{\n            flex: 1;\n            padding: 1rem;\n        }\n\n        textarea {\n            height: 400px\n        }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 600px;\n    width: 95%;\n    margin: 5rem auto 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Formulario = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject());
var Campo = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var InputSubmit = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject3());
var Titulo = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject4());
var Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject5());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Gb3JtdWxhcmlvLmpzIl0sIm5hbWVzIjpbIkZvcm11bGFyaW8iLCJzdHlsZWQiLCJmb3JtIiwiQ2FtcG8iLCJkaXYiLCJJbnB1dFN1Ym1pdCIsImlucHV0IiwiVGl0dWxvIiwiaDEiLCJFcnJvciIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsSUFBVixtQkFBaEI7QUFNQSxJQUFNQyxLQUFLLEdBQUdGLHVEQUFNLENBQUNHLEdBQVYsb0JBQVg7QUFvQkEsSUFBTUMsV0FBVyxHQUFHSix1REFBTSxDQUFDSyxLQUFWLG9CQUFqQjtBQWlCQSxJQUFNQyxNQUFNLEdBQUVOLHVEQUFNLENBQUNPLEVBQVQsb0JBQVo7QUFLQSxJQUFNQyxLQUFLLEdBQUdSLHVEQUFNLENBQUNTLENBQVYsb0JBQVgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXItY3VlbnRhLjcyODE2MjlmMmVkYzU1MGRiYjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtdWxhcmlvID0gc3R5bGVkLmZvcm1gXHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogNXJlbSBhdXRvIDAgYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYW1wbyA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0U3VibWl0ID0gc3R5bGVkLmlucHV0YFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5hcmFuamEpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0dWxvPSBzdHlsZWQuaDFgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yID0gc3R5bGVkLnBgXHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=