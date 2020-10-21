webpackHotUpdate_N_E("pages/nuevo-producto",{

/***/ "./validacion/validarCrearProducto.js":
/*!********************************************!*\
  !*** ./validacion/validarCrearProducto.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validarCrearProducto; });
function validarCrearProducto(valores) {
  var errores = {};

  if (!valores.nombre) {
    errores.nombre = "El nombre del producto es obligatorio";
  }

  if (!valores.empresa) {
    errores.empresa = "El nombre de la empresa es obligatorio ";
  }

  if (!valores.imagen) {
    errores.imagen = "La imagen es indispensable para el producto";
  }

  if (!valores.url) {
    errores.url = "La url de tu producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "Tu url no es valida, Ingresa una URL valida";
  }

  if (!valores.descripcion) {
    errores.descripcion = "La descripcion es importante para conocer tu producto";
  }

  return errores;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmFsaWRhY2lvbi92YWxpZGFyQ3JlYXJQcm9kdWN0by5qcyJdLCJuYW1lcyI6WyJ2YWxpZGFyQ3JlYXJQcm9kdWN0byIsInZhbG9yZXMiLCJlcnJvcmVzIiwibm9tYnJlIiwiZW1wcmVzYSIsImltYWdlbiIsInVybCIsInRlc3QiLCJkZXNjcmlwY2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZSxTQUFTQSxvQkFBVCxDQUE4QkMsT0FBOUIsRUFBc0M7QUFFakQsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7O0FBRUEsTUFBRyxDQUFDRCxPQUFPLENBQUNFLE1BQVosRUFBbUI7QUFDZkQsV0FBTyxDQUFDQyxNQUFSLEdBQWlCLHVDQUFqQjtBQUNIOztBQUVELE1BQUcsQ0FBQ0YsT0FBTyxDQUFDRyxPQUFaLEVBQW9CO0FBQ2hCRixXQUFPLENBQUNFLE9BQVIsR0FBa0IseUNBQWxCO0FBQ0g7O0FBRUQsTUFBRyxDQUFDSCxPQUFPLENBQUNJLE1BQVosRUFBbUI7QUFDZkgsV0FBTyxDQUFDRyxNQUFSLEdBQWlCLDZDQUFqQjtBQUNIOztBQUVELE1BQUcsQ0FBQ0osT0FBTyxDQUFDSyxHQUFaLEVBQWdCO0FBQ1pKLFdBQU8sQ0FBQ0ksR0FBUixHQUFjLHNDQUFkO0FBQ0gsR0FGRCxNQUVNLElBQUcsQ0FBQyxnQ0FBZ0NDLElBQWhDLENBQXFDTixPQUFPLENBQUNLLEdBQTdDLENBQUosRUFBdUQ7QUFDekRKLFdBQU8sQ0FBQ0ksR0FBUixHQUFjLDZDQUFkO0FBQ0g7O0FBRUQsTUFBRyxDQUFDTCxPQUFPLENBQUNPLFdBQVosRUFBd0I7QUFDcEJOLFdBQU8sQ0FBQ00sV0FBUixHQUFzQix1REFBdEI7QUFDSDs7QUFFRCxTQUFPTixPQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm8tcHJvZHVjdG8uOTUzNGNlNDJlOTMyMjc1Nzg1Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXJDcmVhclByb2R1Y3RvKHZhbG9yZXMpe1xyXG5cclxuICAgIGxldCBlcnJvcmVzID0ge307XHJcblxyXG4gICAgaWYoIXZhbG9yZXMubm9tYnJlKXtcclxuICAgICAgICBlcnJvcmVzLm5vbWJyZSA9IFwiRWwgbm9tYnJlIGRlbCBwcm9kdWN0byBlcyBvYmxpZ2F0b3Jpb1wiXHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXZhbG9yZXMuZW1wcmVzYSl7XHJcbiAgICAgICAgZXJyb3Jlcy5lbXByZXNhID0gXCJFbCBub21icmUgZGUgbGEgZW1wcmVzYSBlcyBvYmxpZ2F0b3JpbyBcIlxyXG4gICAgfVxyXG5cclxuICAgIGlmKCF2YWxvcmVzLmltYWdlbil7XHJcbiAgICAgICAgZXJyb3Jlcy5pbWFnZW4gPSBcIkxhIGltYWdlbiBlcyBpbmRpc3BlbnNhYmxlIHBhcmEgZWwgcHJvZHVjdG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGlmKCF2YWxvcmVzLnVybCl7XHJcbiAgICAgICAgZXJyb3Jlcy51cmwgPSBcIkxhIHVybCBkZSB0dSBwcm9kdWN0byBlcyBvYmxpZ2F0b3JpYVwiXHJcbiAgICB9ZWxzZSBpZighL14oZnRwfGh0dHB8aHR0cHMpOlxcL1xcL1teIFwiXSskLy50ZXN0KHZhbG9yZXMudXJsKSkge1xyXG4gICAgICAgIGVycm9yZXMudXJsID0gXCJUdSB1cmwgbm8gZXMgdmFsaWRhLCBJbmdyZXNhIHVuYSBVUkwgdmFsaWRhXCJcclxuICAgIH1cclxuXHJcbiAgICBpZighdmFsb3Jlcy5kZXNjcmlwY2lvbil7XHJcbiAgICAgICAgZXJyb3Jlcy5kZXNjcmlwY2lvbiA9IFwiTGEgZGVzY3JpcGNpb24gZXMgaW1wb3J0YW50ZSBwYXJhIGNvbm9jZXIgdHUgcHJvZHVjdG9cIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JlcztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=