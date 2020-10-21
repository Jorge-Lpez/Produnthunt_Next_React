webpackHotUpdate_N_E("pages/nuevo-producto",{

/***/ "./node_modules/react-firebase-file-uploader/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-firebase-file-uploader/lib/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _v = __webpack_require__(/*! uuid/v4 */ "./node_modules/react-firebase-file-uploader/node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

var _image = __webpack_require__(/*! ./utils/image */ "./node_modules/react-firebase-file-uploader/lib/utils/image.js");

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FirebaseFileUploader for React
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var generateRandomFilename = function generateRandomFilename() {
  return (0, _v2.default)();
};

function extractExtension(filename) {
  var ext = /(?:\.([^.]+))?$/.exec(filename);
  if (ext != null && ext[0] != null) {
    return ext[0];
  } else {
    return '';
  }
}

var FirebaseFileUploader = function (_Component) {
  _inherits(FirebaseFileUploader, _Component);

  function FirebaseFileUploader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FirebaseFileUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FirebaseFileUploader.__proto__ || Object.getPrototypeOf(FirebaseFileUploader)).call.apply(_ref, [this].concat(args))), _this), _this.uploadTasks = [], _this.handleFileSelection = function (event) {
      var files = event.target.files;

      for (var i = 0; i < files.length; i++) {
        _this.startUpload(files[i]);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FirebaseFileUploader, [{
    key: 'componentWillUnmount',


    // Cancel all running uploads before unmount
    value: function componentWillUnmount() {
      this.cancelRunningUploads();
    }
  }, {
    key: 'cancelRunningUploads',
    value: function cancelRunningUploads() {
      while (this.uploadTasks.length > 0) {
        var _task = this.uploadTasks.pop();
        if (_task.snapshot.state === 'running') {
          _task.cancel();
        }
      }
    }

    // Remove a specific task from the uploadTasks

  }, {
    key: 'removeTask',
    value: function removeTask(task) {
      for (var i = 0; i < this.uploadTasks.length; i++) {
        if (this.uploadTasks[i] === task) {
          this.uploadTasks.splice(i, 1);
          return;
        }
      }
    }
  }, {
    key: 'startUpload',
    value: function startUpload(file) {
      var _this2 = this;

      var _props = this.props,
          onUploadStart = _props.onUploadStart,
          onProgress = _props.onProgress,
          onUploadError = _props.onUploadError,
          onUploadSuccess = _props.onUploadSuccess,
          storageRef = _props.storageRef,
          metadata = _props.metadata,
          randomizeFilename = _props.randomizeFilename,
          filename = _props.filename;


      var filenameToUse = void 0;
      if (filename) {
        filenameToUse = typeof filename === 'function' ? filename(file) : filename;
      } else {
        filenameToUse = randomizeFilename ? generateRandomFilename() : file.name;
      }

      // Ensure there is an extension in the filename
      if (!extractExtension(filenameToUse)) {
        filenameToUse += extractExtension(file.name);
      }

      Promise.resolve().then(function () {
        var shouldResize = file.type.match(/image.*/) && (_this2.props.maxWidth || _this2.props.maxHeight);
        if (shouldResize) {
          return (0, _image2.default)(file, _this2.props.maxWidth, _this2.props.maxHeight);
        }
        return file;
      }).then(function (file) {
        var task = storageRef.child(filenameToUse).put(file, metadata);

        if (onUploadStart) {
          onUploadStart(file, task);
        }

        task.on('state_changed', function (snapshot) {
          return onProgress && onProgress(Math.round(100 * snapshot.bytesTransferred / snapshot.totalBytes), task);
        }, function (error) {
          return onUploadError && onUploadError(error, task);
        }, function () {
          _this2.removeTask(task);
          return onUploadSuccess && onUploadSuccess(task.snapshot.metadata.name, task);
        });
        _this2.uploadTasks.push(task);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          storageRef = _props2.storageRef,
          onUploadStart = _props2.onUploadStart,
          onProgress = _props2.onProgress,
          onUploadSuccess = _props2.onUploadSuccess,
          onUploadError = _props2.onUploadError,
          randomizeFilename = _props2.randomizeFilename,
          metadata = _props2.metadata,
          filename = _props2.filename,
          maxWidth = _props2.maxWidth,
          maxHeight = _props2.maxHeight,
          hidden = _props2.hidden,
          _props2$as = _props2.as,
          Input = _props2$as === undefined ? 'input' : _props2$as,
          props = _objectWithoutProperties(_props2, ['storageRef', 'onUploadStart', 'onProgress', 'onUploadSuccess', 'onUploadError', 'randomizeFilename', 'metadata', 'filename', 'maxWidth', 'maxHeight', 'hidden', 'as']);

      var inputStyle = hidden ? Object.assign({}, props.style, {
        width: '0.1px',
        height: '0.1px',
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1
      }) : props.style;

      return _react2.default.createElement(Input, _extends({
        type: 'file',
        onChange: this.handleFileSelection
      }, props, {
        style: inputStyle
      }));
    }
  }]);

  return FirebaseFileUploader;
}(_react.Component);

exports.default = FirebaseFileUploader;

/***/ }),

/***/ "./node_modules/react-firebase-file-uploader/lib/utils/image.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-firebase-file-uploader/lib/utils/image.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resizeAndCropImage;

var _polyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/react-firebase-file-uploader/lib/utils/polyfill.js");

var _polyfill2 = _interopRequireDefault(_polyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resizeAndCropImage(file, w, h) {
  if (!HTMLCanvasElement.prototype.toBlob) {
    (0, _polyfill2.default)();
  }
  return new Promise(function (resolve, reject) {
    // Create file reader
    var reader = new FileReader();
    reader.onload = function (readerEvent) {
      // Create image object
      var image = new Image();
      image.onload = function (imageEvent) {
        // Create canvas or use provided canvas
        var canvas = document.createElement('canvas');
        var maxWidth = w || image.width;
        var maxHeight = h || image.height;
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        // Calculate scaling
        var horizontalScale = maxWidth / image.width;
        var verticalScale = maxHeight / image.height;
        var scale = Math.max(horizontalScale, verticalScale);
        // Calculate cropping
        var width = scale * image.width,
            height = scale * image.height;

        var verticalOffset = Math.min((maxHeight - height) / 2, 0);
        var horizontalOffset = Math.min((maxWidth - width) / 2, 0);
        // Obtain the context for a 2d drawing
        var context = canvas.getContext('2d');
        if (!context) {
          return reject('Could not get the context of the canvas element');
        }
        // Draw the resized and cropped image
        context.drawImage(image, horizontalOffset, verticalOffset, width, height);
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, file.type);
      };
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/***/ }),

/***/ "./node_modules/react-firebase-file-uploader/lib/utils/polyfill.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-firebase-file-uploader/lib/utils/polyfill.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addToBlobPolyfill;
function addToBlobPolyfill() {
  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
    value: function value(callback, type, quality) {
      var binStr = atob(this.toDataURL(type, quality).split(',')[1]),
          len = binStr.length,
          arr = new Uint8Array(len);

      for (var i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
      }

      callback(new Blob([arr], { type: type || 'image/png' }));
    }
  });
}

/***/ }),

/***/ "./node_modules/react-firebase-file-uploader/node_modules/uuid/lib/bytesToUuid.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-firebase-file-uploader/node_modules/uuid/lib/bytesToUuid.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/react-firebase-file-uploader/node_modules/uuid/lib/rng-browser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-firebase-file-uploader/node_modules/uuid/lib/rng-browser.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/react-firebase-file-uploader/node_modules/uuid/v4.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-firebase-file-uploader/node_modules/uuid/v4.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/react-firebase-file-uploader/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/react-firebase-file-uploader/node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./pages/nuevo-producto.js":
/*!*********************************!*\
  !*** ./pages/nuevo-producto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-file-uploader */ "./node_modules/react-firebase-file-uploader/lib/index.js");
/* harmony import */ var react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/Formulario */ "./components/ui/Formulario.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useValidacion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useValidacion */ "./hooks/useValidacion.js");
/* harmony import */ var _validacion_validarCrearProducto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validacion/validarCrearProducto */ "./validacion/validarCrearProducto.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\nuevo-producto.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




 //Importando el firebase para iniciar la conexion 

 //Utilizando el hooks validacion



var STATE_INICIAL = {
  nombre: "",
  empresa: "",
  imagen: "",
  url: "",
  descripcion: ""
};

var NuevoProducto = function NuevoProducto() {
  _s();

  //Error al crear cuenta
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState[0],
      guardarError = _useState[1];

  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_8__["default"])(STATE_INICIAL, _validacion_validarCrearProducto__WEBPACK_IMPORTED_MODULE_9__["default"], crearProducto),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      submitForm = _useValidacion.submitForm,
      handleSubmit = _useValidacion.handleSubmit,
      handleChange = _useValidacion.handleChange,
      handleBlur = _useValidacion.handleBlur;

  var nombre = valores.nombre,
      empresa = valores.empresa,
      imagen = valores.imagen,
      url = valores.url,
      descripcion = valores.descripcion; //HOOK  de routing para rideccionar 

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); //Context con las operaciones crud de firebase 

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseContext"]),
      usuario = _useContext.usuario,
      firebase = _useContext.firebase;

  function crearProducto() {
    return _crearProducto.apply(this, arguments);
  }

  function _crearProducto() {
    _crearProducto = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var producto;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (usuario) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", router.push("/login"));

            case 2:
              //Crear el objeto de nuevo producto
              producto = {
                nombre: nombre,
                empresa: empresa,
                url: url,
                descripcion: descripcion,
                votos: 0,
                comentarios: [],
                creado: Date.now()
              }; //Insertarlo en la base de datos

              firebase.db.collection("productos").add(producto);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _crearProducto.apply(this, arguments);
  }

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Titulo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Nuevo Producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Formulario"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Informacion General"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, "Nombre"), __jsx("input", {
    type: "text",
    id: "nombre",
    placeholder: "Tu Nombre",
    name: "nombre",
    onChange: handleChange,
    onBlur: handleBlur,
    value: nombre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  })), errores.nombre && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 44
    }
  }, errores.nombre), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Empresa: "), __jsx("input", {
    type: "text",
    id: "empresa",
    placeholder: "Empresa",
    name: "empresa",
    onChange: handleChange,
    onBlur: handleBlur,
    value: empresa,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  })), errores.empresa && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 45
    }
  }, errores.empresa), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "imagen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, "Imagen"), __jsx(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_5___default.a, {
    accept: "image/*",
    id: "imagen",
    name: "imagen",
    onChange: handleChange,
    onBlur: handleBlur,
    value: imagen,
    randomizeFilename: true,
    storageRef: firebase.storage().ref("productos"),
    onUploadStart: handleUploadStart,
    onUploadError: handleUploadError,
    onUploadSuccess: handleUploadSuccess,
    onProgress: handleProgress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  })), errores.imagen && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 44
    }
  }, errores.imagen), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "url",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, "URL"), __jsx("input", {
    type: "url",
    id: "url",
    name: "url",
    onChange: handleChange,
    onBlur: handleBlur,
    value: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  })), errores.url && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 41
    }
  }, errores.url)), __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "Sobre tu producto"), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "descripcion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, "Descripcion"), __jsx("textarea", {
    id: "descripcion",
    name: "descripcion",
    onChange: handleChange,
    onBlur: handleBlur,
    value: descripcion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  })), errores.descripcion && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, errores.descripcion)), error && __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["Error"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 27
    }
  }, error), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_6__["InputSubmit"], {
    type: "submit",
    value: "Crear Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  })));
};

_s(NuevoProducto, "/AYPcn1u8Rhb5QJML5tYtmLVsTo=", false, function () {
  return [_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_8__["default"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = NuevoProducto;
/* harmony default export */ __webpack_exports__["default"] = (NuevoProducto);

var _c;

$RefreshReg$(_c, "NuevoProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZpcmViYXNlLWZpbGUtdXBsb2FkZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmlyZWJhc2UtZmlsZS11cGxvYWRlci9saWIvdXRpbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXJlYmFzZS1maWxlLXVwbG9hZGVyL2xpYi91dGlscy9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZpcmViYXNlLWZpbGUtdXBsb2FkZXIvbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmlyZWJhc2UtZmlsZS11cGxvYWRlci9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXJlYmFzZS1maWxlLXVwbG9hZGVyL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9udWV2by1wcm9kdWN0by5qcyJdLCJuYW1lcyI6WyJTVEFURV9JTklDSUFMIiwibm9tYnJlIiwiZW1wcmVzYSIsImltYWdlbiIsInVybCIsImRlc2NyaXBjaW9uIiwiTnVldm9Qcm9kdWN0byIsInVzZVN0YXRlIiwiZXJyb3IiLCJndWFyZGFyRXJyb3IiLCJ1c2VWYWxpZGFjaW9uIiwidmFsaWRhckNyZWFyUHJvZHVjdG8iLCJjcmVhclByb2R1Y3RvIiwidmFsb3JlcyIsImVycm9yZXMiLCJzdWJtaXRGb3JtIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJ1c3VhcmlvIiwiZmlyZWJhc2UiLCJwdXNoIiwicHJvZHVjdG8iLCJ2b3RvcyIsImNvbWVudGFyaW9zIiwiY3JlYWRvIiwiRGF0ZSIsIm5vdyIsImRiIiwiY29sbGVjdGlvbiIsImFkZCIsInN0b3JhZ2UiLCJyZWYiLCJoYW5kbGVVcGxvYWRTdGFydCIsImhhbmRsZVVwbG9hZEVycm9yIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyIsImhhbmRsZVByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUI7O0FBRUEsU0FBUyxtQkFBTyxDQUFDLG9GQUFTOztBQUUxQjs7QUFFQSxhQUFhLG1CQUFPLENBQUMscUZBQWU7O0FBRXBDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SCxFQUFFO0FBQzllO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFF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QTtBQUFBO0FBQUEsS0FDUTtBQUFPLFdBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFIsRUFFUTtBQUNJLE1BQUUsRUFBQyxhQURQO0FBRUksUUFBSSxFQUFDLGFBRlQ7QUFHSSxZQUFRLEVBQUVhLFlBSGQ7QUFJSSxVQUFNLEVBQUlDLFVBSmQ7QUFLSSxTQUFLLEVBQUViLFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLENBRkosRUFZS1MsT0FBTyxDQUFDVCxXQUFSLElBQXVCLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRUyxPQUFPLENBQUNULFdBQWhCLENBWjVCLENBaEVKLEVBK0VLRyxLQUFLLElBQUksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQVIsQ0EvRWQsRUFnRkksTUFBQyxxRUFBRDtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksU0FBSyxFQUFDLGdCQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoRkosQ0FGSixDQURKO0FBMEZILENBN0hEOztHQUFNRixhO1VBSytFSSw0RCxFQUtsRVUscUQ7OztLQVZiZCxhO0FBOEhTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9udWV2by1wcm9kdWN0by45MjlkNDFjY2Y5ZTUwMmY4N2Q3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdiA9IHJlcXVpcmUoJ3V1aWQvdjQnKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3YpO1xuXG52YXIgX2ltYWdlID0gcmVxdWlyZSgnLi91dGlscy9pbWFnZScpO1xuXG52YXIgX2ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRmlyZWJhc2VGaWxlVXBsb2FkZXIgZm9yIFJlYWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgZ2VuZXJhdGVSYW5kb21GaWxlbmFtZSA9IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tRmlsZW5hbWUoKSB7XG4gIHJldHVybiAoMCwgX3YyLmRlZmF1bHQpKCk7XG59O1xuXG5mdW5jdGlvbiBleHRyYWN0RXh0ZW5zaW9uKGZpbGVuYW1lKSB7XG4gIHZhciBleHQgPSAvKD86XFwuKFteLl0rKSk/JC8uZXhlYyhmaWxlbmFtZSk7XG4gIGlmIChleHQgIT0gbnVsbCAmJiBleHRbMF0gIT0gbnVsbCkge1xuICAgIHJldHVybiBleHRbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbnZhciBGaXJlYmFzZUZpbGVVcGxvYWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaXJlYmFzZUZpbGVVcGxvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmlyZWJhc2VGaWxlVXBsb2FkZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpcmViYXNlRmlsZVVwbG9hZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBGaXJlYmFzZUZpbGVVcGxvYWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZpcmViYXNlRmlsZVVwbG9hZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMudXBsb2FkVGFza3MgPSBbXSwgX3RoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF90aGlzLnN0YXJ0VXBsb2FkKGZpbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaXJlYmFzZUZpbGVVcGxvYWRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cblxuICAgIC8vIENhbmNlbCBhbGwgcnVubmluZyB1cGxvYWRzIGJlZm9yZSB1bm1vdW50XG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jYW5jZWxSdW5uaW5nVXBsb2FkcygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbmNlbFJ1bm5pbmdVcGxvYWRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsUnVubmluZ1VwbG9hZHMoKSB7XG4gICAgICB3aGlsZSAodGhpcy51cGxvYWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBfdGFzayA9IHRoaXMudXBsb2FkVGFza3MucG9wKCk7XG4gICAgICAgIGlmIChfdGFzay5zbmFwc2hvdC5zdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgICAgX3Rhc2suY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYSBzcGVjaWZpYyB0YXNrIGZyb20gdGhlIHVwbG9hZFRhc2tzXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZVRhc2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy51cGxvYWRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy51cGxvYWRUYXNrc1tpXSA9PT0gdGFzaykge1xuICAgICAgICAgIHRoaXMudXBsb2FkVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0VXBsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRVcGxvYWQoZmlsZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uVXBsb2FkU3RhcnQgPSBfcHJvcHMub25VcGxvYWRTdGFydCxcbiAgICAgICAgICBvblByb2dyZXNzID0gX3Byb3BzLm9uUHJvZ3Jlc3MsXG4gICAgICAgICAgb25VcGxvYWRFcnJvciA9IF9wcm9wcy5vblVwbG9hZEVycm9yLFxuICAgICAgICAgIG9uVXBsb2FkU3VjY2VzcyA9IF9wcm9wcy5vblVwbG9hZFN1Y2Nlc3MsXG4gICAgICAgICAgc3RvcmFnZVJlZiA9IF9wcm9wcy5zdG9yYWdlUmVmLFxuICAgICAgICAgIG1ldGFkYXRhID0gX3Byb3BzLm1ldGFkYXRhLFxuICAgICAgICAgIHJhbmRvbWl6ZUZpbGVuYW1lID0gX3Byb3BzLnJhbmRvbWl6ZUZpbGVuYW1lLFxuICAgICAgICAgIGZpbGVuYW1lID0gX3Byb3BzLmZpbGVuYW1lO1xuXG5cbiAgICAgIHZhciBmaWxlbmFtZVRvVXNlID0gdm9pZCAwO1xuICAgICAgaWYgKGZpbGVuYW1lKSB7XG4gICAgICAgIGZpbGVuYW1lVG9Vc2UgPSB0eXBlb2YgZmlsZW5hbWUgPT09ICdmdW5jdGlvbicgPyBmaWxlbmFtZShmaWxlKSA6IGZpbGVuYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZW5hbWVUb1VzZSA9IHJhbmRvbWl6ZUZpbGVuYW1lID8gZ2VuZXJhdGVSYW5kb21GaWxlbmFtZSgpIDogZmlsZS5uYW1lO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmUgdGhlcmUgaXMgYW4gZXh0ZW5zaW9uIGluIHRoZSBmaWxlbmFtZVxuICAgICAgaWYgKCFleHRyYWN0RXh0ZW5zaW9uKGZpbGVuYW1lVG9Vc2UpKSB7XG4gICAgICAgIGZpbGVuYW1lVG9Vc2UgKz0gZXh0cmFjdEV4dGVuc2lvbihmaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNob3VsZFJlc2l6ZSA9IGZpbGUudHlwZS5tYXRjaCgvaW1hZ2UuKi8pICYmIChfdGhpczIucHJvcHMubWF4V2lkdGggfHwgX3RoaXMyLnByb3BzLm1heEhlaWdodCk7XG4gICAgICAgIGlmIChzaG91bGRSZXNpemUpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9pbWFnZTIuZGVmYXVsdCkoZmlsZSwgX3RoaXMyLnByb3BzLm1heFdpZHRoLCBfdGhpczIucHJvcHMubWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgdmFyIHRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKGZpbGVuYW1lVG9Vc2UpLnB1dChmaWxlLCBtZXRhZGF0YSk7XG5cbiAgICAgICAgaWYgKG9uVXBsb2FkU3RhcnQpIHtcbiAgICAgICAgICBvblVwbG9hZFN0YXJ0KGZpbGUsIHRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFzay5vbignc3RhdGVfY2hhbmdlZCcsIGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgICAgICAgIHJldHVybiBvblByb2dyZXNzICYmIG9uUHJvZ3Jlc3MoTWF0aC5yb3VuZCgxMDAgKiBzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcyksIHRhc2spO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gb25VcGxvYWRFcnJvciAmJiBvblVwbG9hZEVycm9yKGVycm9yLCB0YXNrKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgIHJldHVybiBvblVwbG9hZFN1Y2Nlc3MgJiYgb25VcGxvYWRTdWNjZXNzKHRhc2suc25hcHNob3QubWV0YWRhdGEubmFtZSwgdGFzayk7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczIudXBsb2FkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdG9yYWdlUmVmID0gX3Byb3BzMi5zdG9yYWdlUmVmLFxuICAgICAgICAgIG9uVXBsb2FkU3RhcnQgPSBfcHJvcHMyLm9uVXBsb2FkU3RhcnQsXG4gICAgICAgICAgb25Qcm9ncmVzcyA9IF9wcm9wczIub25Qcm9ncmVzcyxcbiAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3MgPSBfcHJvcHMyLm9uVXBsb2FkU3VjY2VzcyxcbiAgICAgICAgICBvblVwbG9hZEVycm9yID0gX3Byb3BzMi5vblVwbG9hZEVycm9yLFxuICAgICAgICAgIHJhbmRvbWl6ZUZpbGVuYW1lID0gX3Byb3BzMi5yYW5kb21pemVGaWxlbmFtZSxcbiAgICAgICAgICBtZXRhZGF0YSA9IF9wcm9wczIubWV0YWRhdGEsXG4gICAgICAgICAgZmlsZW5hbWUgPSBfcHJvcHMyLmZpbGVuYW1lLFxuICAgICAgICAgIG1heFdpZHRoID0gX3Byb3BzMi5tYXhXaWR0aCxcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcHJvcHMyLm1heEhlaWdodCxcbiAgICAgICAgICBoaWRkZW4gPSBfcHJvcHMyLmhpZGRlbixcbiAgICAgICAgICBfcHJvcHMyJGFzID0gX3Byb3BzMi5hcyxcbiAgICAgICAgICBJbnB1dCA9IF9wcm9wczIkYXMgPT09IHVuZGVmaW5lZCA/ICdpbnB1dCcgOiBfcHJvcHMyJGFzLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsnc3RvcmFnZVJlZicsICdvblVwbG9hZFN0YXJ0JywgJ29uUHJvZ3Jlc3MnLCAnb25VcGxvYWRTdWNjZXNzJywgJ29uVXBsb2FkRXJyb3InLCAncmFuZG9taXplRmlsZW5hbWUnLCAnbWV0YWRhdGEnLCAnZmlsZW5hbWUnLCAnbWF4V2lkdGgnLCAnbWF4SGVpZ2h0JywgJ2hpZGRlbicsICdhcyddKTtcblxuICAgICAgdmFyIGlucHV0U3R5bGUgPSBoaWRkZW4gPyBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5zdHlsZSwge1xuICAgICAgICB3aWR0aDogJzAuMXB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMC4xcHgnLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB6SW5kZXg6IC0xXG4gICAgICB9KSA6IHByb3BzLnN0eWxlO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9leHRlbmRzKHtcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uXG4gICAgICB9LCBwcm9wcywge1xuICAgICAgICBzdHlsZTogaW5wdXRTdHlsZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaXJlYmFzZUZpbGVVcGxvYWRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZpcmViYXNlRmlsZVVwbG9hZGVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlc2l6ZUFuZENyb3BJbWFnZTtcblxudmFyIF9wb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxudmFyIF9wb2x5ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2x5ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlc2l6ZUFuZENyb3BJbWFnZShmaWxlLCB3LCBoKSB7XG4gIGlmICghSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYikge1xuICAgICgwLCBfcG9seWZpbGwyLmRlZmF1bHQpKCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBDcmVhdGUgZmlsZSByZWFkZXJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKHJlYWRlckV2ZW50KSB7XG4gICAgICAvLyBDcmVhdGUgaW1hZ2Ugb2JqZWN0XG4gICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChpbWFnZUV2ZW50KSB7XG4gICAgICAgIC8vIENyZWF0ZSBjYW52YXMgb3IgdXNlIHByb3ZpZGVkIGNhbnZhc1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBtYXhXaWR0aCA9IHcgfHwgaW1hZ2Uud2lkdGg7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBoIHx8IGltYWdlLmhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBzY2FsaW5nXG4gICAgICAgIHZhciBob3Jpem9udGFsU2NhbGUgPSBtYXhXaWR0aCAvIGltYWdlLndpZHRoO1xuICAgICAgICB2YXIgdmVydGljYWxTY2FsZSA9IG1heEhlaWdodCAvIGltYWdlLmhlaWdodDtcbiAgICAgICAgdmFyIHNjYWxlID0gTWF0aC5tYXgoaG9yaXpvbnRhbFNjYWxlLCB2ZXJ0aWNhbFNjYWxlKTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGNyb3BwaW5nXG4gICAgICAgIHZhciB3aWR0aCA9IHNjYWxlICogaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBzY2FsZSAqIGltYWdlLmhlaWdodDtcblxuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSBNYXRoLm1pbigobWF4SGVpZ2h0IC0gaGVpZ2h0KSAvIDIsIDApO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbE9mZnNldCA9IE1hdGgubWluKChtYXhXaWR0aCAtIHdpZHRoKSAvIDIsIDApO1xuICAgICAgICAvLyBPYnRhaW4gdGhlIGNvbnRleHQgZm9yIGEgMmQgZHJhd2luZ1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdDb3VsZCBub3QgZ2V0IHRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgZWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgdGhlIHJlc2l6ZWQgYW5kIGNyb3BwZWQgaW1hZ2VcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY2FudmFzLnRvQmxvYihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgIHJlc29sdmUoYmxvYik7XG4gICAgICAgIH0sIGZpbGUudHlwZSk7XG4gICAgICB9O1xuICAgICAgaW1hZ2Uuc3JjID0gcmVhZGVyRXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRUb0Jsb2JQb2x5ZmlsbDtcbmZ1bmN0aW9uIGFkZFRvQmxvYlBvbHlmaWxsKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLCAndG9CbG9iJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgdmFyIGJpblN0ciA9IGF0b2IodGhpcy50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkuc3BsaXQoJywnKVsxXSksXG4gICAgICAgICAgbGVuID0gYmluU3RyLmxlbmd0aCxcbiAgICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShsZW4pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFycltpXSA9IGJpblN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhuZXcgQmxvYihbYXJyXSwgeyB0eXBlOiB0eXBlIHx8ICdpbWFnZS9wbmcnIH0pKTtcbiAgICB9XG4gIH0pO1xufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXVxuICBdKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tIFwicmVhY3QtZmlyZWJhc2UtZmlsZS11cGxvYWRlclwiXHJcbmltcG9ydCB7IEZvcm11bGFyaW8sIENhbXBvLCBJbnB1dFN1Ym1pdCwgVGl0dWxvLCBFcnJvcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvRm9ybXVsYXJpb1wiO1xyXG5cclxuLy9JbXBvcnRhbmRvIGVsIGZpcmViYXNlIHBhcmEgaW5pY2lhciBsYSBjb25leGlvbiBcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcblxyXG4vL1V0aWxpemFuZG8gZWwgaG9va3MgdmFsaWRhY2lvblxyXG5pbXBvcnQgdXNlVmFsaWRhY2lvbiBmcm9tIFwiLi4vaG9va3MvdXNlVmFsaWRhY2lvblwiO1xyXG5pbXBvcnQgdmFsaWRhckNyZWFyUHJvZHVjdG8gZnJvbSBcIi4uL3ZhbGlkYWNpb24vdmFsaWRhckNyZWFyUHJvZHVjdG9cIjtcclxuXHJcbmNvbnN0IFNUQVRFX0lOSUNJQUwgPSB7XHJcbiAgICBub21icmU6IFwiXCIsXHJcbiAgICBlbXByZXNhOiBcIlwiLFxyXG4gICAgaW1hZ2VuOiBcIlwiLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gICAgZGVzY3JpcGNpb246IFwiXCJcclxufVxyXG5cclxuY29uc3QgTnVldm9Qcm9kdWN0byA9ICgpID0+IHtcclxuXHJcbiAgICAvL0Vycm9yIGFsIGNyZWFyIGN1ZW50YVxyXG4gICAgY29uc3QgW2Vycm9yLCBndWFyZGFyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgdmFsb3JlcywgZXJyb3Jlcywgc3VibWl0Rm9ybSwgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIgfSA9IHVzZVZhbGlkYWNpb24oU1RBVEVfSU5JQ0lBTCwgdmFsaWRhckNyZWFyUHJvZHVjdG8sIGNyZWFyUHJvZHVjdG8pO1xyXG5cclxuICAgIGNvbnN0IHtub21icmUsIGVtcHJlc2EsIGltYWdlbiwgdXJsLCBkZXNjcmlwY2lvbn0gPSB2YWxvcmVzO1xyXG5cclxuICAgIC8vSE9PSyAgZGUgcm91dGluZyBwYXJhIHJpZGVjY2lvbmFyIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy9Db250ZXh0IGNvbiBsYXMgb3BlcmFjaW9uZXMgY3J1ZCBkZSBmaXJlYmFzZSBcclxuICAgIGNvbnN0IHsgdXN1YXJpbywgZmlyZWJhc2UgfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXJQcm9kdWN0bygpe1xyXG4gICAgICAgIC8vU2kgZWwgdXN1YXJpbyBubyBlc3RhIGF1dGVudGljYWRvIGxsZXZhciBhbCBsb2dpblxyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DcmVhciBlbCBvYmpldG8gZGUgbnVldm8gcHJvZHVjdG9cclxuICAgICAgICBjb25zdCBwcm9kdWN0byA9IHtcclxuICAgICAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgICAgICBlbXByZXNhLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICAgICAgICB2b3RvczogMCxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IFtdLFxyXG4gICAgICAgICAgICBjcmVhZG86IERhdGUubm93KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbnNlcnRhcmxvIGVuIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmFkZChwcm9kdWN0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRpdHVsbz5OdWV2byBQcm9kdWN0bzwvVGl0dWxvPlxyXG4gICAgICAgICAgICA8Rm9ybXVsYXJpb1xyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5JbmZvcm1hY2lvbiBHZW5lcmFsPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9tYnJlXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUdSBOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLm5vbWJyZSAmJiA8RXJyb3I+e2Vycm9yZXMubm9tYnJlfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcHJlc2FcIj5FbXByZXNhOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wcmVzYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLmVtcHJlc2EgJiYgPEVycm9yPntlcnJvcmVzLmVtcHJlc2F9PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VuXCI+SW1hZ2VuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXIgPSB7aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW1hZ2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbWl6ZUZpbGVuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVJlZj17ZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZihcInByb2R1Y3Rvc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN0YXJ0PXtoYW5kbGVVcGxvYWRTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZEVycm9yPXtoYW5kbGVVcGxvYWRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3M9e2hhbmRsZVVwbG9hZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17aGFuZGxlUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5pbWFnZW4gJiYgPEVycm9yPntlcnJvcmVzLmltYWdlbn08L0Vycm9yPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1cmxcIj5VUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyID0ge2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcmVzLnVybCAmJiA8RXJyb3I+e2Vycm9yZXMudXJsfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+U29icmUgdHUgcHJvZHVjdG88L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FtcG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXBjaW9uXCI+RGVzY3JpcGNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYW1wbz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3Jlcy5kZXNjcmlwY2lvbiAmJiA8RXJyb3I+e2Vycm9yZXMuZGVzY3JpcGNpb259PC9FcnJvcj59XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3I+e2Vycm9yfTwvRXJyb3I+fVxyXG4gICAgICAgICAgICAgICAgPElucHV0U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm11bGFyaW8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOdWV2b1Byb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=