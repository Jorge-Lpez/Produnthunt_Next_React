webpackHotUpdate_N_E("pages/nuevo-producto",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./firebase/config.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");





 //Habilitamos la autentificacion

 //Habilitamos el firebasestore para guardar archivos en la base de datos

 //Habilitamos el storage



var Firebase = /*#__PURE__*/function () {
  function Firebase() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Firebase);

    if (!firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.apps.length) {
      firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }

    this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.auth();
    this.db = firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.firestore();
    this.storage = firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.storage();
  } //Registrar unn usuario 


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Firebase, [{
    key: "registrar",
    value: function () {
      var _registrar = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(nombre, email, password) {
        var nuevoUsuario;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.auth.createUserWithEmailAndPassword(email, password);

              case 2:
                nuevoUsuario = _context.sent;
                _context.next = 5;
                return nuevoUsuario.user.updateProfile({
                  displayName: nombre
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function registrar(_x, _x2, _x3) {
        return _registrar.apply(this, arguments);
      }

      return registrar;
    }() //Inicia sesion del usuario 

  }, {
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.auth.signInWithEmailAndPassword(email, password));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x4, _x5) {
        return _login.apply(this, arguments);
      }

      return login;
    }() //Cerrar sesion 

  }, {
    key: "cerrarSesion",
    value: function () {
      var _cerrarSesion = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.auth.signOut();

              case 2:
                ;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function cerrarSesion() {
        return _cerrarSesion.apply(this, arguments);
      }

      return cerrarSesion;
    }()
  }]);

  return Firebase;
}();

var firebase = new Firebase();
/* harmony default export */ __webpack_exports__["default"] = (firebase);

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

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: registerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            if (this.serverResponse_) {
                return this.message_ + '\n' + this.serverResponse_;
            }
            else {
                return this.message_;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: false,
        configurable: true
    });
    return FirebaseStorageError;
}());
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw ('Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].');
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
    return StringData;
}());
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    var b = [];
    for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    var bytes;
    try {
        bytes = atob(value);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isInteger(p) {
    return isNumber(p) && Number.isInteger(p);
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function () {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function () {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (isDef(headers)) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (isDef(body)) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
    };
    return XhrIoPool;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
        }
        else {
            var uint8Arrays = args.map(function (val) {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "isRoot", {
        get: function () {
            return this.path.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = { bucket: 1, path: 3 };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = { bucket: 1, path: 2 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    };
    return Location;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length === 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) { return component.length > 0; })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(urlPart) {
    return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
    return Mapping;
}());
var mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (isDef(size)) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return service.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(service, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            var val = p[key];
            if (key === 'customMetadata') {
                if (!isObject(val)) {
                    throw 'Expected object for \'customMetadata\' mapping.';
                }
            }
            else {
                if (isNonNullObject(val)) {
                    throw "Mapping for '" + key + "' cannot be an object.";
                }
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_RESULTS_KEY = 'maxResults';
var MAX_MAX_RESULTS = 1000;
var PAGE_TOKEN_KEY = 'pageToken';
var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = service.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromBackendResponse(service, bucket, resource);
}
function listOptionsValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected ListOptions object.';
    }
    for (var key in p) {
        if (key === MAX_RESULTS_KEY) {
            if (!isInteger(p[MAX_RESULTS_KEY]) ||
                p[MAX_RESULTS_KEY] <= 0) {
                throw 'Expected maxResults to be a positive number.';
            }
            if (p[MAX_RESULTS_KEY] > 1000) {
                throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
            }
        }
        else if (key === PAGE_TOKEN_KEY) {
            if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
                throw 'Expected pageToken to be string.';
            }
        }
        else {
            throw 'Unknown option: ' + key;
        }
    }
}

var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        var listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list(service, location, delimiter, pageToken, maxResults) {
    var urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    var urlPart = location.bucketOnlyServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(service, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(service, location) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'DELETE';
    var timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) { }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    var metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata_ = metadataForUpload_(location, blob, metadata);
    var metadataString = toResourceString(metadata_, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    var urlParams = { name: metadata_['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());
function checkResumeHeader_(xhr, allowed) {
    var status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadataForUpload = metadataForUpload_(location, blob, metadata);
    var urlParams = { name: metadataForUpload['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadataForUpload, mappings);
    var timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(service, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    var bytesLeft = status_.total - status_.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status_.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) ||
            isDef(error) ||
            isDef(complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error || null;
            this.complete = complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());

var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    return UploadTaskSnapshot;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw invalidArgument(i, name, e.message);
            }
            else {
                throw invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!optional;
    }
    return ArgSpec;
}());
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(validator, optional) {
    function stringValidator(p) {
        if (!isString(p)) {
            throw 'Expected string.';
        }
    }
    var chainedValidator;
    if (validator) {
        chainedValidator = and_(stringValidator, validator);
    }
    else {
        chainedValidator = stringValidator;
    }
    return new ArgSpec(chainedValidator, optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (isNativeBlobDefined() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(optional) {
    return new ArgSpec(metadataValidator, optional);
}
function listOptionSpec(optional) {
    return new ArgSpec(listOptionsValidator, optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(validator, optional) {
    function isLooseObjectValidator(p) {
        var isLooseObject = p === null || (isDef(p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (validator !== undefined && validator !== null) {
            validator(p);
        }
    }
    return new ArgSpec(isLooseObjectValidator, optional);
}
function nullFunctionSpec(optional) {
    function validator(p) {
        var valid = p === null || isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, optional);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(function () { return f.apply(void 0, argsToForward); });
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, service, location, mappings, blob, metadata) {
        var _this = this;
        if (metadata === void 0) { metadata = null; }
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.service_ = service;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(Code.CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded) { return _this.updateProgress_(sizeBefore + loaded); };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.service_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case InternalTaskState.CANCELING:
                    _this.transition_(InternalTaskState.CANCELED);
                    break;
                case InternalTaskState.PAUSING:
                    _this.transition_(InternalTaskState.PAUSED);
                    break;
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.service_, _this.location_, url, _this.blob_);
            var statusRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this.location_, _this.service_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(InternalTaskState.SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.service_, _this.location_, _this.mappings_);
            var metadataRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case InternalTaskState.PAUSING:
                this.transition_(InternalTaskState.PAUSED);
                break;
            case InternalTaskState.CANCELING:
                this.transition_(InternalTaskState.CANCELED);
                break;
            case InternalTaskState.RUNNING:
                this.start_();
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        function typeValidator() {
            if (type !== TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = isJustDef(p['next']) ||
                    isJustDef(p['error']) ||
                    isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            stringSpec(typeValidator),
            looseObjectSpec(nextOrObserverValidator, true),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, complete) {
                if (specs !== null) {
                    validate('on', specs, arguments);
                }
                var observer = new Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            looseObjectSpec(binderNextOrObserverValidator),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        var typeOnly = !(isJustDef(nextOrObserver) ||
            isJustDef(error) ||
            isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        var i = this.observers_.indexOf(observer);
        if (i !== -1) {
            this.observers_.splice(i, 1);
        }
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = this.observers_.slice();
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (taskStateFromInternalTaskState(this.state_)) {
                case TaskState.SUCCESS:
                    async(this.resolve_.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this.reject_;
                    async(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(service, location) {
        this.service = service;
        if (location instanceof Location) {
            this.location = location;
        }
        else {
            this.location = Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (service, location) {
        return new Reference(service, location);
    };
    Reference.prototype.mappings = function () {
        return getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.service, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return lastComponent(this.location.path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.service;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param value The string to upload.
     * @param format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (value, format, metadata) {
        if (format === void 0) { format = StringFormat.RAW; }
        validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object.assign({}, metadata);
        if (!isDef(metadataClone['contentType']) &&
            isDef(data.contentType)) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        var _this = this;
        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(_this.service, _this.location);
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @return A Promise that resolves with all the items and prefixes under
     *      the current storage reference. `prefixes` contains references to
     *      sub-directories and `items` contains references to objects in this
     *      folder. `nextPageToken` is never returned.
     */
    Reference.prototype.listAll = function () {
        validate('listAll', [], arguments);
        var accumulator = {
            prefixes: [],
            items: []
        };
        return this.listAllHelper(accumulator).then(function () { return accumulator; });
    };
    Reference.prototype.listAllHelper = function (accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var opt, nextPage;
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = {
                            // maxResults is 1000 by default.
                            pageToken: pageToken
                        };
                        return [4 /*yield*/, this.list(opt)];
                    case 1:
                        nextPage = _c.sent();
                        (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                        (_b = accumulator.items).push.apply(_b, nextPage.items);
                        if (!(nextPage.nextPageToken != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.listAllHelper(accumulator, nextPage.nextPageToken)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure.
     * Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options See ListOptions for details.
     * @return A Promise that resolves with the items and prefixes.
     *      `prefixes` contains references to sub-folders and `items`
     *      contains references to objects in this folder. `nextPageToken`
     *      can be used to get the rest of the results.
     */
    Reference.prototype.list = function (options) {
        validate('list', [listOptionSpec(true)], arguments);
        var self = this;
        return this.service.getAuthToken().then(function (authToken) {
            var op = options || {};
            var requestInfo = list(self.service, self.location, 
            /*delimiter= */ '/', op.pageToken, op.maxResults);
            return self.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        var _this = this;
        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(_this.service, _this.location, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        var _this = this;
        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(_this.service, _this.location, metadata, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        var _this = this;
        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(_this.service, _this.location, _this.mappings());
            return _this.service
                .makeRequest(requestInfo, authToken)
                .getPromise()
                .then(function (url) {
                if (url === null) {
                    throw noDownloadURL();
                }
                return url;
            });
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return Reference;
}());

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (_appDelete) {
    };
    return FailRequest;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function triggerCallback() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handler(success) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = self.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        var err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
    }
    return RequestEndStatus;
}());
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
/**
 * @template T
 */
function makeRequest(requestInfo, appId, authToken, pool) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var StorageService = /** @class */ (function () {
    function StorageService(app, authProvider, pool, url) {
        var _a;
        this.bucket_ = null;
        this.appId_ = null;
        this.deleted_ = false;
        this.app_ = app;
        this.authProvider_ = authProvider;
        this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this.requests_ = new Set();
        this.pool_ = pool;
        if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
        }
        else {
            this.bucket_ = StorageService.extractBucket_((_a = this.app_) === null || _a === void 0 ? void 0 : _a.options);
        }
        this.internals_ = new ServiceInternals(this);
    }
    StorageService.extractBucket_ = function (config) {
        var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
        if (bucketString == null) {
            return null;
        }
        return Location.makeFromBucketSpec(bucketString);
    };
    StorageService.prototype.getAuthToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var auth, tokenData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = this.authProvider_.getImmediate({ optional: true });
                        if (!auth) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth.getToken()];
                    case 1:
                        tokenData = _a.sent();
                        if (tokenData !== null) {
                            return [2 /*return*/, tokenData.accessToken];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    StorageService.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requests_.forEach(function (request) { return request.cancel(); });
        this.requests_.clear();
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     * @param loc The Location.
     * @return A firebaseStorage.Reference.
     */
    StorageService.prototype.makeStorageReference = function (loc) {
        return new Reference(this, loc);
    };
    StorageService.prototype.makeRequest = function (requestInfo, authToken) {
        var _this = this;
        if (!this.deleted_) {
            var request_1 = makeRequest(requestInfo, this.appId_, authToken, this.pool_);
            this.requests_.add(request_1);
            // Request removes itself from set when complete.
            request_1.getPromise().then(function () { return _this.requests_.delete(request_1); }, function () { return _this.requests_.delete(request_1); });
            return request_1;
        }
        else {
            return new FailRequest(appDeleted());
        }
    };
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    StorageService.prototype.ref = function (path) {
        function validator(path) {
            if (typeof path !== 'string') {
                throw 'Path is not a string.';
            }
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        validate('ref', [stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new Reference(this, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    StorageService.prototype.refFromURL = function (url) {
        function validator(p) {
            if (typeof p !== 'string') {
                throw 'Path is not a string.';
            }
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                Location.makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this, url);
    };
    Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.maxUploadRetryTime_;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxUploadRetryTime_ = time;
    };
    Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.maxOperationRetryTime_;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxOperationRetryTime_ = time;
    };
    Object.defineProperty(StorageService.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: false,
        configurable: true
    });
    return StorageService;
}());
/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.deleteApp();
        return Promise.resolve();
    };
    return ServiceInternals;
}());

var name = "@firebase/storage";
var version = "0.3.43";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(container, url) {
    // Dependencies
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    return new StorageService(app, authProvider, new XhrIoPool(), url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: StorageService,
        Reference: Reference
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL3N0b3JhZ2UvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiRmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXV0aCIsImRiIiwiZmlyZXN0b3JlIiwic3RvcmFnZSIsIm5vbWJyZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJudWV2b1VzdWFyaW8iLCJ1c2VyIiwidXBkYXRlUHJvZmlsZSIsImRpc3BsYXlOYW1lIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZmlyZWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTs7SUFFTUEsUTtBQUNGLHNCQUFjO0FBQUE7O0FBRVYsUUFBRyxDQUFDQyxtREFBRyxDQUFDQyxJQUFKLENBQVNDLE1BQWIsRUFBb0I7QUFDaEJGLHlEQUFHLENBQUNHLGFBQUosQ0FBa0JDLCtDQUFsQjtBQUNIOztBQUVELFNBQUtDLElBQUwsR0FBWUwsbURBQUcsQ0FBQ0ssSUFBSixFQUFaO0FBQ0EsU0FBS0MsRUFBTCxHQUFVTixtREFBRyxDQUFDTyxTQUFKLEVBQVY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLG1EQUFHLENBQUNRLE9BQUosRUFBZjtBQUNILEcsQ0FFRDs7Ozs7O3lOQUNnQkMsTSxFQUFRQyxLLEVBQU9DLFE7Ozs7Ozs7dUJBQ0EsS0FBS04sSUFBTCxDQUFVTyw4QkFBVixDQUF5Q0YsS0FBekMsRUFBK0NDLFFBQS9DLEM7OztBQUFyQkUsNEI7O3VCQUVPQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JDLGFBQWxCLENBQWdDO0FBQ3pDQyw2QkFBVyxFQUFHUDtBQUQyQixpQkFBaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS2pCOzs7OztzTkFDWUMsSyxFQUFPQyxROzs7OztrREFDUixLQUFLTixJQUFMLENBQVVZLDBCQUFWLENBQXFDUCxLQUFyQyxFQUEyQ0MsUUFBM0MsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7Ozs7Ozs7O3VCQUVVLEtBQUtOLElBQUwsQ0FBVWEsT0FBVixFOzs7QUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQyxJQUFNQyxRQUFRLEdBQUcsSUFBSXBCLFFBQUosRUFBakI7QUFFZW9CLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDMEI7QUFDZjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxhQUFhLDJEQUEyRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw2QkFBNkIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVDQUF1QyxFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhDQUE4QyxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFtRDtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLG9CQUFvQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBUSxtQkFBbUIsb0RBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0EsZ0VBQWdFLGlCQUFpQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQseUJBQXlCLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwwQ0FBMEMsRUFBRSxlQUFlLDBDQUEwQyxFQUFFO0FBQzVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkRBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7O0FBRUc7QUFDM0I7Ozs7Ozs7Ozs7Ozs7QUMzNkdBO0FBQUE7QUFBMkI7QUFDM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm8tcHJvZHVjdG8uYTdhNzQwM2NjNWY0MDM2YzkwZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHAgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcbi8vSGFiaWxpdGFtb3MgbGEgYXV0ZW50aWZpY2FjaW9uXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuLy9IYWJpbGl0YW1vcyBlbCBmaXJlYmFzZXN0b3JlIHBhcmEgZ3VhcmRhciBhcmNoaXZvcyBlbiBsYSBiYXNlIGRlIGRhdG9zXHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG4vL0hhYmlsaXRhbW9zIGVsIHN0b3JhZ2VcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY2xhc3MgRmlyZWJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGlmKCFhcHAuYXBwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBhcHAuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF1dGggPSBhcHAuYXV0aCgpO1xyXG4gICAgICAgIHRoaXMuZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gYXBwLnN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1JlZ2lzdHJhciB1bm4gdXN1YXJpbyBcclxuICAgIGFzeW5jIHJlZ2lzdHJhcihub21icmUsIGVtYWlsLCBwYXNzd29yZCl7XHJcbiAgICAgICAgY29uc3QgbnVldm9Vc3VhcmlvID0gYXdhaXQgdGhpcy5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCxwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBudWV2b1VzdWFyaW8udXNlci51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICAgICAgZGlzcGxheU5hbWUgOiBub21icmVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vSW5pY2lhIHNlc2lvbiBkZWwgdXN1YXJpbyBcclxuICAgIGFzeW5jIGxvZ2luKGVtYWlsLCBwYXNzd29yZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCxwYXNzd29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DZXJyYXIgc2VzaW9uIFxyXG4gICAgYXN5bmMgY2VycmFyU2VzaW9uKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXV0aC5zaWduT3V0KCk7O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IG5ldyBGaXJlYmFzZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX3NwcmVhZEFycmF5cyB9IGZyb20gJ3RzbGliJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBDb25zdGFudHMgdXNlZCBpbiB0aGUgRmlyZWJhc2UgU3RvcmFnZSBsaWJyYXJ5LlxyXG4gKi9cclxuLyoqXHJcbiAqIERvbWFpbiBuYW1lIGZvciBmaXJlYmFzZSBzdG9yYWdlLlxyXG4gKi9cclxudmFyIERFRkFVTFRfSE9TVCA9ICdmaXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20nO1xyXG4vKipcclxuICogVGhlIGtleSBpbiBGaXJlYmFzZSBjb25maWcganNvbiBmb3IgdGhlIHN0b3JhZ2UgYnVja2V0LlxyXG4gKi9cclxudmFyIENPTkZJR19TVE9SQUdFX0JVQ0tFVF9LRVkgPSAnc3RvcmFnZUJ1Y2tldCc7XHJcbi8qKlxyXG4gKiAyIG1pbnV0ZXNcclxuICpcclxuICogVGhlIHRpbWVvdXQgZm9yIGFsbCBvcGVyYXRpb25zIGV4Y2VwdCB1cGxvYWQuXHJcbiAqL1xyXG52YXIgREVGQVVMVF9NQVhfT1BFUkFUSU9OX1JFVFJZX1RJTUUgPSAyICogNjAgKiAxMDAwO1xyXG4vKipcclxuICogMTAgbWludXRlc1xyXG4gKlxyXG4gKiBUaGUgdGltZW91dCBmb3IgdXBsb2FkLlxyXG4gKi9cclxudmFyIERFRkFVTFRfTUFYX1VQTE9BRF9SRVRSWV9USU1FID0gMTAgKiA2MCAqIDEwMDA7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRmlyZWJhc2VTdG9yYWdlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGaXJlYmFzZVN0b3JhZ2VFcnJvcihjb2RlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlXyA9IHByZXBlbmRDb2RlKGNvZGUpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZV8gPSAnRmlyZWJhc2UgU3RvcmFnZTogJyArIG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXNwb25zZV8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmFtZV8gPSAnRmlyZWJhc2VFcnJvcic7XHJcbiAgICB9XHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuY29kZVByb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZTtcclxuICAgIH07XHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuY29kZUVxdWFscyA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXBlbmRDb2RlKGNvZGUpID09PSB0aGlzLmNvZGVQcm9wKCk7XHJcbiAgICB9O1xyXG4gICAgRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLnNlcnZlclJlc3BvbnNlUHJvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJSZXNwb25zZV87XHJcbiAgICB9O1xyXG4gICAgRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLnNldFNlcnZlclJlc3BvbnNlUHJvcCA9IGZ1bmN0aW9uIChzZXJ2ZXJSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyUmVzcG9uc2VfID0gc2VydmVyUmVzcG9uc2U7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZSwgXCJjb2RlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29kZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZSwgXCJtZXNzYWdlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyUmVzcG9uc2VfKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlXyArICdcXG4nICsgdGhpcy5zZXJ2ZXJSZXNwb25zZV87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlXztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUsIFwic2VydmVyUmVzcG9uc2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJSZXNwb25zZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEZpcmViYXNlU3RvcmFnZUVycm9yO1xyXG59KCkpO1xyXG52YXIgQ29kZSA9IHtcclxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIGFsbCBwbGF0Zm9ybXNcclxuICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICAgIEJVQ0tFVF9OT1RfRk9VTkQ6ICdidWNrZXQtbm90LWZvdW5kJyxcclxuICAgIFBST0pFQ1RfTk9UX0ZPVU5EOiAncHJvamVjdC1ub3QtZm91bmQnLFxyXG4gICAgUVVPVEFfRVhDRUVERUQ6ICdxdW90YS1leGNlZWRlZCcsXHJcbiAgICBVTkFVVEhFTlRJQ0FURUQ6ICd1bmF1dGhlbnRpY2F0ZWQnLFxyXG4gICAgVU5BVVRIT1JJWkVEOiAndW5hdXRob3JpemVkJyxcclxuICAgIFJFVFJZX0xJTUlUX0VYQ0VFREVEOiAncmV0cnktbGltaXQtZXhjZWVkZWQnLFxyXG4gICAgSU5WQUxJRF9DSEVDS1NVTTogJ2ludmFsaWQtY2hlY2tzdW0nLFxyXG4gICAgQ0FOQ0VMRUQ6ICdjYW5jZWxlZCcsXHJcbiAgICAvLyBKUyBzcGVjaWZpY1xyXG4gICAgSU5WQUxJRF9FVkVOVF9OQU1FOiAnaW52YWxpZC1ldmVudC1uYW1lJyxcclxuICAgIElOVkFMSURfVVJMOiAnaW52YWxpZC11cmwnLFxyXG4gICAgSU5WQUxJRF9ERUZBVUxUX0JVQ0tFVDogJ2ludmFsaWQtZGVmYXVsdC1idWNrZXQnLFxyXG4gICAgTk9fREVGQVVMVF9CVUNLRVQ6ICduby1kZWZhdWx0LWJ1Y2tldCcsXHJcbiAgICBDQU5OT1RfU0xJQ0VfQkxPQjogJ2Nhbm5vdC1zbGljZS1ibG9iJyxcclxuICAgIFNFUlZFUl9GSUxFX1dST05HX1NJWkU6ICdzZXJ2ZXItZmlsZS13cm9uZy1zaXplJyxcclxuICAgIE5PX0RPV05MT0FEX1VSTDogJ25vLWRvd25sb2FkLXVybCcsXHJcbiAgICBJTlZBTElEX0FSR1VNRU5UOiAnaW52YWxpZC1hcmd1bWVudCcsXHJcbiAgICBJTlZBTElEX0FSR1VNRU5UX0NPVU5UOiAnaW52YWxpZC1hcmd1bWVudC1jb3VudCcsXHJcbiAgICBBUFBfREVMRVRFRDogJ2FwcC1kZWxldGVkJyxcclxuICAgIElOVkFMSURfUk9PVF9PUEVSQVRJT046ICdpbnZhbGlkLXJvb3Qtb3BlcmF0aW9uJyxcclxuICAgIElOVkFMSURfRk9STUFUOiAnaW52YWxpZC1mb3JtYXQnLFxyXG4gICAgSU5URVJOQUxfRVJST1I6ICdpbnRlcm5hbC1lcnJvcidcclxufTtcclxuZnVuY3Rpb24gcHJlcGVuZENvZGUoY29kZSkge1xyXG4gICAgcmV0dXJuICdzdG9yYWdlLycgKyBjb2RlO1xyXG59XHJcbmZ1bmN0aW9uIHVua25vd24oKSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgY2hlY2sgdGhlIGVycm9yIHBheWxvYWQgZm9yICcgK1xyXG4gICAgICAgICdzZXJ2ZXIgcmVzcG9uc2UuJztcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5VTktOT1dOLCBtZXNzYWdlKTtcclxufVxyXG5mdW5jdGlvbiBvYmplY3ROb3RGb3VuZChwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuT0JKRUNUX05PVF9GT1VORCwgXCJPYmplY3QgJ1wiICsgcGF0aCArIFwiJyBkb2VzIG5vdCBleGlzdC5cIik7XHJcbn1cclxuZnVuY3Rpb24gcXVvdGFFeGNlZWRlZChidWNrZXQpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5RVU9UQV9FWENFRURFRCwgXCJRdW90YSBmb3IgYnVja2V0ICdcIiArXHJcbiAgICAgICAgYnVja2V0ICtcclxuICAgICAgICBcIicgZXhjZWVkZWQsIHBsZWFzZSB2aWV3IHF1b3RhIG9uIFwiICtcclxuICAgICAgICAnaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3ByaWNpbmcvLicpO1xyXG59XHJcbmZ1bmN0aW9uIHVuYXV0aGVudGljYXRlZCgpIHtcclxuICAgIHZhciBtZXNzYWdlID0gJ1VzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQsIHBsZWFzZSBhdXRoZW50aWNhdGUgdXNpbmcgRmlyZWJhc2UgJyArXHJcbiAgICAgICAgJ0F1dGhlbnRpY2F0aW9uIGFuZCB0cnkgYWdhaW4uJztcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5VTkFVVEhFTlRJQ0FURUQsIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIHVuYXV0aG9yaXplZChwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuVU5BVVRIT1JJWkVELCBcIlVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyAnXCIgKyBwYXRoICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiByZXRyeUxpbWl0RXhjZWVkZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuUkVUUllfTElNSVRfRVhDRUVERUQsICdNYXggcmV0cnkgdGltZSBmb3Igb3BlcmF0aW9uIGV4Y2VlZGVkLCBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbmNlbGVkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLkNBTkNFTEVELCAnVXNlciBjYW5jZWxlZCB0aGUgdXBsb2FkL2Rvd25sb2FkLicpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWRVcmwodXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuSU5WQUxJRF9VUkwsIFwiSW52YWxpZCBVUkwgJ1wiICsgdXJsICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiBpbnZhbGlkRGVmYXVsdEJ1Y2tldChidWNrZXQpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlZBTElEX0RFRkFVTFRfQlVDS0VULCBcIkludmFsaWQgZGVmYXVsdCBidWNrZXQgJ1wiICsgYnVja2V0ICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiBjYW5ub3RTbGljZUJsb2IoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuQ0FOTk9UX1NMSUNFX0JMT0IsICdDYW5ub3Qgc2xpY2UgYmxvYiBmb3IgdXBsb2FkLiBQbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC4nKTtcclxufVxyXG5mdW5jdGlvbiBzZXJ2ZXJGaWxlV3JvbmdTaXplKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLlNFUlZFUl9GSUxFX1dST05HX1NJWkUsICdTZXJ2ZXIgcmVjb3JkZWQgaW5jb3JyZWN0IHVwbG9hZCBmaWxlIHNpemUsIHBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLicpO1xyXG59XHJcbmZ1bmN0aW9uIG5vRG93bmxvYWRVUkwoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuTk9fRE9XTkxPQURfVVJMLCAnVGhlIGdpdmVuIGZpbGUgZG9lcyBub3QgaGF2ZSBhbnkgZG93bmxvYWQgVVJMcy4nKTtcclxufVxyXG5mdW5jdGlvbiBpbnZhbGlkQXJndW1lbnQoaW5kZXgsIGZuTmFtZSwgbWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVkFMSURfQVJHVU1FTlQsICdJbnZhbGlkIGFyZ3VtZW50IGluIGAnICsgZm5OYW1lICsgJ2AgYXQgaW5kZXggJyArIGluZGV4ICsgJzogJyArIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWRBcmd1bWVudENvdW50KGFyZ01pbiwgYXJnTWF4LCBmbk5hbWUsIHJlYWwpIHtcclxuICAgIHZhciBjb3VudFBhcnQ7XHJcbiAgICB2YXIgcGx1cmFsO1xyXG4gICAgaWYgKGFyZ01pbiA9PT0gYXJnTWF4KSB7XHJcbiAgICAgICAgY291bnRQYXJ0ID0gYXJnTWluO1xyXG4gICAgICAgIHBsdXJhbCA9IGFyZ01pbiA9PT0gMSA/ICdhcmd1bWVudCcgOiAnYXJndW1lbnRzJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvdW50UGFydCA9ICdiZXR3ZWVuICcgKyBhcmdNaW4gKyAnIGFuZCAnICsgYXJnTWF4O1xyXG4gICAgICAgIHBsdXJhbCA9ICdhcmd1bWVudHMnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVkFMSURfQVJHVU1FTlRfQ09VTlQsICdJbnZhbGlkIGFyZ3VtZW50IGNvdW50IGluIGAnICtcclxuICAgICAgICBmbk5hbWUgK1xyXG4gICAgICAgICdgOiBFeHBlY3RlZCAnICtcclxuICAgICAgICBjb3VudFBhcnQgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgcGx1cmFsICtcclxuICAgICAgICAnLCByZWNlaXZlZCAnICtcclxuICAgICAgICByZWFsICtcclxuICAgICAgICAnLicpO1xyXG59XHJcbmZ1bmN0aW9uIGFwcERlbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuQVBQX0RFTEVURUQsICdUaGUgRmlyZWJhc2UgYXBwIHdhcyBkZWxldGVkLicpO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIGludmFsaWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuSU5WQUxJRF9ST09UX09QRVJBVElPTiwgXCJUaGUgb3BlcmF0aW9uICdcIiArXHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgXCInIGNhbm5vdCBiZSBwZXJmb3JtZWQgb24gYSByb290IHJlZmVyZW5jZSwgY3JlYXRlIGEgbm9uLXJvb3QgXCIgK1xyXG4gICAgICAgIFwicmVmZXJlbmNlIHVzaW5nIGNoaWxkLCBzdWNoIGFzIC5jaGlsZCgnZmlsZS5wbmcnKS5cIik7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGZvcm1hdCB0aGF0IHdhcyBub3QgdmFsaWQuXHJcbiAqIEBwYXJhbSBtZXNzYWdlIEEgbWVzc2FnZSBkZXNjcmliaW5nIHRoZSBmb3JtYXQgdmlvbGF0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gaW52YWxpZEZvcm1hdChmb3JtYXQsIG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlZBTElEX0ZPUk1BVCwgXCJTdHJpbmcgZG9lcyBub3QgbWF0Y2ggZm9ybWF0ICdcIiArIGZvcm1hdCArIFwiJzogXCIgKyBtZXNzYWdlKTtcclxufVxyXG4vKipcclxuICogQHBhcmFtIG1lc3NhZ2UgQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxyXG4gKi9cclxuZnVuY3Rpb24gaW50ZXJuYWxFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlRFUk5BTF9FUlJPUiwgJ0ludGVybmFsIGVycm9yOiAnICsgbWVzc2FnZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBTdHJpbmdGb3JtYXQgPSB7XHJcbiAgICBSQVc6ICdyYXcnLFxyXG4gICAgQkFTRTY0OiAnYmFzZTY0JyxcclxuICAgIEJBU0U2NFVSTDogJ2Jhc2U2NHVybCcsXHJcbiAgICBEQVRBX1VSTDogJ2RhdGFfdXJsJ1xyXG59O1xyXG5mdW5jdGlvbiBmb3JtYXRWYWxpZGF0b3Ioc3RyaW5nRm9ybWF0KSB7XHJcbiAgICBzd2l0Y2ggKHN0cmluZ0Zvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LlJBVzpcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjQ6XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0VVJMOlxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkRBVEFfVVJMOlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgKCdFeHBlY3RlZCBvbmUgb2YgdGhlIGV2ZW50IHR5cGVzOiBbJyArXHJcbiAgICAgICAgICAgICAgICBTdHJpbmdGb3JtYXQuUkFXICtcclxuICAgICAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nRm9ybWF0LkJBU0U2NCArXHJcbiAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkwgK1xyXG4gICAgICAgICAgICAgICAgJywgJyArXHJcbiAgICAgICAgICAgICAgICBTdHJpbmdGb3JtYXQuREFUQV9VUkwgK1xyXG4gICAgICAgICAgICAgICAgJ10uJyk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBTdHJpbmdEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyaW5nRGF0YShkYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nRGF0YTtcclxufSgpKTtcclxuZnVuY3Rpb24gZGF0YUZyb21TdHJpbmcoZm9ybWF0LCBzdHJpbmdEYXRhKSB7XHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LlJBVzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKHV0ZjhCeXRlc18oc3RyaW5nRGF0YSkpO1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDpcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkw6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShiYXNlNjRCeXRlc18oZm9ybWF0LCBzdHJpbmdEYXRhKSk7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuREFUQV9VUkw6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShkYXRhVVJMQnl0ZXNfKHN0cmluZ0RhdGEpLCBkYXRhVVJMQ29udGVudFR5cGVfKHN0cmluZ0RhdGEpKTtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICAvLyBhc3NlcnQoZmFsc2UpO1xyXG4gICAgdGhyb3cgdW5rbm93bigpO1xyXG59XHJcbmZ1bmN0aW9uIHV0ZjhCeXRlc18odmFsdWUpIHtcclxuICAgIHZhciBiID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDw9IDEyNykge1xyXG4gICAgICAgICAgICBiLnB1c2goYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYyA8PSAyMDQ3KSB7XHJcbiAgICAgICAgICAgICAgICBiLnB1c2goMTkyIHwgKGMgPj4gNiksIDEyOCB8IChjICYgNjMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTUyOTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgb2YgYSBzdXJyb2dhdGUgcGFpci5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSBpIDwgdmFsdWUubGVuZ3RoIC0gMSAmJiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgJiA2NDUxMikgPT09IDU2MzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBzdXJyb2dhdGUgd2Fzbid0IHRoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjM5LCAxOTEsIDE4OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGkgPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG8gPSB2YWx1ZS5jaGFyQ29kZUF0KCsraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSA2NTUzNiB8ICgoaGkgJiAxMDIzKSA8PCAxMCkgfCAobG8gJiAxMDIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5wdXNoKDI0MCB8IChjID4+IDE4KSwgMTI4IHwgKChjID4+IDEyKSAmIDYzKSwgMTI4IHwgKChjID4+IDYpICYgNjMpLCAxMjggfCAoYyAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjICYgNjQ1MTIpID09PSA1NjMyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIGxvdyBzdXJyb2dhdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMzksIDE5MSwgMTg5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMjQgfCAoYyA+PiAxMiksIDEyOCB8ICgoYyA+PiA2KSAmIDYzKSwgMTI4IHwgKGMgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShiKTtcclxufVxyXG5mdW5jdGlvbiBwZXJjZW50RW5jb2RlZEJ5dGVzXyh2YWx1ZSkge1xyXG4gICAgdmFyIGRlY29kZWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCwgJ01hbGZvcm1lZCBkYXRhIFVSTC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1dGY4Qnl0ZXNfKGRlY29kZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGJhc2U2NEJ5dGVzXyhmb3JtYXQsIHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDoge1xyXG4gICAgICAgICAgICB2YXIgaGFzTWludXMgPSB2YWx1ZS5pbmRleE9mKCctJykgIT09IC0xO1xyXG4gICAgICAgICAgICB2YXIgaGFzVW5kZXIgPSB2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xO1xyXG4gICAgICAgICAgICBpZiAoaGFzTWludXMgfHwgaGFzVW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnZhbGlkQ2hhciA9IGhhc01pbnVzID8gJy0nIDogJ18nO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ2hhciArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInIGZvdW5kOiBpcyBpdCBiYXNlNjR1cmwgZW5jb2RlZD9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDoge1xyXG4gICAgICAgICAgICB2YXIgaGFzUGx1cyA9IHZhbHVlLmluZGV4T2YoJysnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIHZhciBoYXNTbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIGlmIChoYXNQbHVzIHx8IGhhc1NsYXNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW52YWxpZENoYXIgPSBoYXNQbHVzID8gJysnIDogJy8nO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICsgaW52YWxpZENoYXIgKyBcIicgZm91bmQ6IGlzIGl0IGJhc2U2NCBlbmNvZGVkP1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICB2YXIgYnl0ZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJ5dGVzID0gYXRvYih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCAnSW52YWxpZCBjaGFyYWN0ZXIgZm91bmQnKTtcclxuICAgIH1cclxuICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBieXRlcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcbi8qKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgRGF0YVVSTFBhcnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0YVVSTFBhcnRzKGRhdGFVUkwpIHtcclxuICAgICAgICB0aGlzLmJhc2U2NCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gZGF0YVVSTC5tYXRjaCgvXmRhdGE6KFteLF0rKT8sLyk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChTdHJpbmdGb3JtYXQuREFUQV9VUkwsIFwiTXVzdCBiZSBmb3JtYXR0ZWQgJ2RhdGE6WzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtaWRkbGUgPSBtYXRjaGVzWzFdIHx8IG51bGw7XHJcbiAgICAgICAgaWYgKG1pZGRsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZTY0ID0gZW5kc1dpdGgobWlkZGxlLCAnO2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gdGhpcy5iYXNlNjRcclxuICAgICAgICAgICAgICAgID8gbWlkZGxlLnN1YnN0cmluZygwLCBtaWRkbGUubGVuZ3RoIC0gJztiYXNlNjQnLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIDogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3QgPSBkYXRhVVJMLnN1YnN0cmluZyhkYXRhVVJMLmluZGV4T2YoJywnKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERhdGFVUkxQYXJ0cztcclxufSgpKTtcclxuZnVuY3Rpb24gZGF0YVVSTEJ5dGVzXyhkYXRhVXJsKSB7XHJcbiAgICB2YXIgcGFydHMgPSBuZXcgRGF0YVVSTFBhcnRzKGRhdGFVcmwpO1xyXG4gICAgaWYgKHBhcnRzLmJhc2U2NCkge1xyXG4gICAgICAgIHJldHVybiBiYXNlNjRCeXRlc18oU3RyaW5nRm9ybWF0LkJBU0U2NCwgcGFydHMucmVzdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGVyY2VudEVuY29kZWRCeXRlc18ocGFydHMucmVzdCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGF0YVVSTENvbnRlbnRUeXBlXyhkYXRhVXJsKSB7XHJcbiAgICB2YXIgcGFydHMgPSBuZXcgRGF0YVVSTFBhcnRzKGRhdGFVcmwpO1xyXG4gICAgcmV0dXJuIHBhcnRzLmNvbnRlbnRUeXBlO1xyXG59XHJcbmZ1bmN0aW9uIGVuZHNXaXRoKHMsIGVuZCkge1xyXG4gICAgdmFyIGxvbmdFbm91Z2ggPSBzLmxlbmd0aCA+PSBlbmQubGVuZ3RoO1xyXG4gICAgaWYgKCFsb25nRW5vdWdoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuc3Vic3RyaW5nKHMubGVuZ3RoIC0gZW5kLmxlbmd0aCkgPT09IGVuZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFRhc2tFdmVudCA9IHtcclxuICAgIC8qKiBUcmlnZ2VyZWQgd2hlbmV2ZXIgdGhlIHRhc2sgY2hhbmdlcyBvciBwcm9ncmVzcyBpcyB1cGRhdGVkLiAqL1xyXG4gICAgU1RBVEVfQ0hBTkdFRDogJ3N0YXRlX2NoYW5nZWQnXHJcbn07XHJcbnZhciBJbnRlcm5hbFRhc2tTdGF0ZSA9IHtcclxuICAgIFJVTk5JTkc6ICdydW5uaW5nJyxcclxuICAgIFBBVVNJTkc6ICdwYXVzaW5nJyxcclxuICAgIFBBVVNFRDogJ3BhdXNlZCcsXHJcbiAgICBTVUNDRVNTOiAnc3VjY2VzcycsXHJcbiAgICBDQU5DRUxJTkc6ICdjYW5jZWxpbmcnLFxyXG4gICAgQ0FOQ0VMRUQ6ICdjYW5jZWxlZCcsXHJcbiAgICBFUlJPUjogJ2Vycm9yJ1xyXG59O1xyXG52YXIgVGFza1N0YXRlID0ge1xyXG4gICAgLyoqIFRoZSB0YXNrIGlzIGN1cnJlbnRseSB0cmFuc2ZlcnJpbmcgZGF0YS4gKi9cclxuICAgIFJVTk5JTkc6ICdydW5uaW5nJyxcclxuICAgIC8qKiBUaGUgdGFzayB3YXMgcGF1c2VkIGJ5IHRoZSB1c2VyLiAqL1xyXG4gICAgUEFVU0VEOiAncGF1c2VkJyxcclxuICAgIC8qKiBUaGUgdGFzayBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LiAqL1xyXG4gICAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxyXG4gICAgLyoqIFRoZSB0YXNrIHdhcyBjYW5jZWxlZC4gKi9cclxuICAgIENBTkNFTEVEOiAnY2FuY2VsZWQnLFxyXG4gICAgLyoqIFRoZSB0YXNrIGZhaWxlZCB3aXRoIGFuIGVycm9yLiAqL1xyXG4gICAgRVJST1I6ICdlcnJvcidcclxufTtcclxuZnVuY3Rpb24gdGFza1N0YXRlRnJvbUludGVybmFsVGFza1N0YXRlKHN0YXRlKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HOlxyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORzpcclxuICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLlBBVVNFRDtcclxuICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuU1VDQ0VTUztcclxuICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkNBTkNFTEVEO1xyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuRVJST1I7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydChmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuRVJST1I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAcmV0dXJuIEZhbHNlIGlmIHRoZSBvYmplY3QgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRydWUgb3RoZXJ3aXNlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNEZWYocCkge1xyXG4gICAgcmV0dXJuIHAgIT0gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBpc0p1c3REZWYocCkge1xyXG4gICAgcmV0dXJuIHAgIT09IHZvaWQgMDtcclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHApIHtcclxuICAgIHJldHVybiB0eXBlb2YgcCA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5mdW5jdGlvbiBpc09iamVjdChwKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHAgPT09ICdvYmplY3QnO1xyXG59XHJcbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdChwKSB7XHJcbiAgICByZXR1cm4gaXNPYmplY3QocCkgJiYgcCAhPT0gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBpc05vbkFycmF5T2JqZWN0KHApIHtcclxuICAgIHJldHVybiBpc09iamVjdChwKSAmJiAhQXJyYXkuaXNBcnJheShwKTtcclxufVxyXG5mdW5jdGlvbiBpc1N0cmluZyhwKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHAgPT09ICdzdHJpbmcnIHx8IHAgaW5zdGFuY2VvZiBTdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gaXNJbnRlZ2VyKHApIHtcclxuICAgIHJldHVybiBpc051bWJlcihwKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKHApO1xyXG59XHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHApIHtcclxuICAgIHJldHVybiB0eXBlb2YgcCA9PT0gJ251bWJlcicgfHwgcCBpbnN0YW5jZW9mIE51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBpc05hdGl2ZUJsb2IocCkge1xyXG4gICAgcmV0dXJuIGlzTmF0aXZlQmxvYkRlZmluZWQoKSAmJiBwIGluc3RhbmNlb2YgQmxvYjtcclxufVxyXG5mdW5jdGlvbiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBlbnVte251bWJlcn1cclxuICovXHJcbnZhciBFcnJvckNvZGU7XHJcbihmdW5jdGlvbiAoRXJyb3JDb2RlKSB7XHJcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiTk9fRVJST1JcIl0gPSAwXSA9IFwiTk9fRVJST1JcIjtcclxuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJORVRXT1JLX0VSUk9SXCJdID0gMV0gPSBcIk5FVFdPUktfRVJST1JcIjtcclxuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJBQk9SVFwiXSA9IDJdID0gXCJBQk9SVFwiO1xyXG59KShFcnJvckNvZGUgfHwgKEVycm9yQ29kZSA9IHt9KSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogV2UgdXNlIHRoaXMgaW5zdGVhZCBvZiBnb29nLm5ldC5YaHJJbyBiZWNhdXNlIGdvb2cubmV0LlhocklvIGlzIGh5dXV1dWdlIGFuZFxyXG4gKiBkb2Vzbid0IHdvcmsgaW4gUmVhY3QgTmF0aXZlIG9uIEFuZHJvaWQuXHJcbiAqL1xyXG52YXIgTmV0d29ya1hocklvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV0d29ya1hocklvKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZW50XyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueGhyXyA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5OT19FUlJPUjtcclxuICAgICAgICB0aGlzLnNlbmRQcm9taXNlXyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLkFCT1JUO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy54aHJfLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5ORVRXT1JLX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy54aHJfLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMpIHtcclxuICAgICAgICBpZiAodGhpcy5zZW50Xykge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLnNlbmQoKSBtb3JlIHRoYW4gb25jZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbnRfID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnhocl8ub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzRGVmKGhlYWRlcnMpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHJfLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRGVmKGJvZHkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyXy5zZW5kKGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFByb21pc2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuZ2V0RXJyb3JDb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZW50Xykge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLmdldEVycm9yQ29kZSgpIGJlZm9yZSBzZW5kaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yQ29kZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0U3RhdHVzKCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5nZXRSZXNwb25zZVRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0UmVzcG9uc2VUZXh0KCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5yZXNwb25zZVRleHQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnhocl8uYWJvcnQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKGhlYWRlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnhocl8uZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmFkZFVwbG9hZFByb2dyZXNzTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAoaXNEZWYodGhpcy54aHJfLnVwbG9hZCkpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5yZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKGlzRGVmKHRoaXMueGhyXy51cGxvYWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyXy51cGxvYWQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBOZXR3b3JrWGhySW87XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRmFjdG9yeS1saWtlIGNsYXNzIGZvciBjcmVhdGluZyBYaHJJbyBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgWGhySW9Qb29sID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gWGhySW9Qb29sKCkge1xyXG4gICAgfVxyXG4gICAgWGhySW9Qb29sLnByb3RvdHlwZS5jcmVhdGVYaHJJbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtYaHJJbygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBYaHJJb1Bvb2w7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCbG9iQnVpbGRlcigpIHtcclxuICAgIGlmICh0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIEJsb2JCdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBXZWJLaXRCbG9iQnVpbGRlcjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyBvbmUgb3IgbW9yZSB2YWx1ZXMgdG9nZXRoZXIgYW5kIGNvbnZlcnRzIHRoZW0gdG8gYSBCbG9iLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXJncyBUaGUgdmFsdWVzIHRoYXQgd2lsbCBtYWtlIHVwIHRoZSByZXN1bHRpbmcgYmxvYi5cclxuICogQHJldHVybiBUaGUgYmxvYi5cclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2IoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnZXRCbG9iQnVpbGRlcigpO1xyXG4gICAgaWYgKEJsb2JCdWlsZGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmIuYXBwZW5kKGFyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmIuZ2V0QmxvYigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBjcmVhdGluZyBCbG9ic1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFNsaWNlcyB0aGUgYmxvYi4gVGhlIHJldHVybmVkIGJsb2IgY29udGFpbnMgZGF0YSBmcm9tIHRoZSBzdGFydCBieXRlXHJcbiAqIChpbmNsdXNpdmUpIHRpbGwgdGhlIGVuZCBieXRlIChleGNsdXNpdmUpLiBOZWdhdGl2ZSBpbmRpY2VzIGNhbm5vdCBiZSB1c2VkLlxyXG4gKlxyXG4gKiBAcGFyYW0gYmxvYiBUaGUgYmxvYiB0byBiZSBzbGljZWQuXHJcbiAqIEBwYXJhbSBzdGFydCBJbmRleCBvZiB0aGUgc3RhcnRpbmcgYnl0ZS5cclxuICogQHBhcmFtIGVuZCBJbmRleCBvZiB0aGUgZW5kaW5nIGJ5dGUuXHJcbiAqIEByZXR1cm4gVGhlIGJsb2Igc2xpY2Ugb3IgbnVsbCBpZiBub3Qgc3VwcG9ydGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gc2xpY2VCbG9iKGJsb2IsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGlmIChibG9iLndlYmtpdFNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iud2Via2l0U2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChibG9iLm1velNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2IubW96U2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChibG9iLnNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBwYXJhbSBvcHRfZWxpZGVDb3B5IElmIHRydWUsIGRvZXNuJ3QgY29weSBtdXRhYmxlIGlucHV0IGRhdGFcclxuICogICAgIChlLmcuIFVpbnQ4QXJyYXlzKS4gUGFzcyB0cnVlIG9ubHkgaWYgeW91IGtub3cgdGhlIG9iamVjdHMgd2lsbCBub3QgYmVcclxuICogICAgIG1vZGlmaWVkIGFmdGVyIHRoaXMgYmxvYidzIGNvbnN0cnVjdGlvbi5cclxuICovXHJcbnZhciBGYnNCbG9iID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmJzQmxvYihkYXRhLCBlbGlkZUNvcHkpIHtcclxuICAgICAgICB2YXIgc2l6ZSA9IDA7XHJcbiAgICAgICAgdmFyIGJsb2JUeXBlID0gJyc7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYihkYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFfID0gZGF0YTtcclxuICAgICAgICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcclxuICAgICAgICAgICAgYmxvYlR5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAoZWxpZGVDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5ieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8uc2V0KG5ldyBVaW50OEFycmF5KGRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaXplID0gdGhpcy5kYXRhXy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGlkZUNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXyA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8uc2V0KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpemUgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaXplXyA9IHNpemU7XHJcbiAgICAgICAgdGhpcy50eXBlXyA9IGJsb2JUeXBlO1xyXG4gICAgfVxyXG4gICAgRmJzQmxvYi5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplXztcclxuICAgIH07XHJcbiAgICBGYnNCbG9iLnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVfO1xyXG4gICAgfTtcclxuICAgIEZic0Jsb2IucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0Qnl0ZSwgZW5kQnl0ZSkge1xyXG4gICAgICAgIGlmIChpc05hdGl2ZUJsb2IodGhpcy5kYXRhXykpIHtcclxuICAgICAgICAgICAgdmFyIHJlYWxCbG9iID0gdGhpcy5kYXRhXztcclxuICAgICAgICAgICAgdmFyIHNsaWNlZCA9IHNsaWNlQmxvYihyZWFsQmxvYiwgc3RhcnRCeXRlLCBlbmRCeXRlKTtcclxuICAgICAgICAgICAgaWYgKHNsaWNlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKHNsaWNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgc2xpY2UgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGFfLmJ1ZmZlciwgc3RhcnRCeXRlLCBlbmRCeXRlIC0gc3RhcnRCeXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKHNsaWNlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRmJzQmxvYi5nZXRCbG9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYXRpdmVCbG9iRGVmaW5lZCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9iYnkgPSBhcmdzLm1hcChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmJzQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZGF0YV87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKGdldEJsb2IuYXBwbHkobnVsbCwgYmxvYmJ5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdWludDhBcnJheXMgPSBhcmdzLm1hcChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhRnJvbVN0cmluZyhTdHJpbmdGb3JtYXQuUkFXLCB2YWwpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBCbG9icyBkb24ndCBleGlzdCwgc28gdGhpcyBoYXMgdG8gYmUgYSBVaW50OEFycmF5LlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZGF0YV87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgZmluYWxMZW5ndGhfMSA9IDA7XHJcbiAgICAgICAgICAgIHVpbnQ4QXJyYXlzLmZvckVhY2goZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbExlbmd0aF8xICs9IGFycmF5LmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgbWVyZ2VkXzEgPSBuZXcgVWludDhBcnJheShmaW5hbExlbmd0aF8xKTtcclxuICAgICAgICAgICAgdmFyIGluZGV4XzEgPSAwO1xyXG4gICAgICAgICAgICB1aW50OEFycmF5cy5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZF8xW2luZGV4XzErK10gPSBhcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmJzQmxvYihtZXJnZWRfMSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZic0Jsb2IucHJvdG90eXBlLnVwbG9hZERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YV87XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZic0Jsb2I7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIExvY2F0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTG9jYXRpb24oYnVja2V0LCBwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5idWNrZXQgPSBidWNrZXQ7XHJcbiAgICAgICAgdGhpcy5wYXRoXyA9IHBhdGg7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9jYXRpb24ucHJvdG90eXBlLCBcInBhdGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXRoXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9jYXRpb24ucHJvdG90eXBlLCBcImlzUm9vdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhdGgubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5mdWxsU2VydmVyVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICAgICAgcmV0dXJuICcvYi8nICsgZW5jb2RlKHRoaXMuYnVja2V0KSArICcvby8nICsgZW5jb2RlKHRoaXMucGF0aCk7XHJcbiAgICB9O1xyXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgICAgICByZXR1cm4gJy9iLycgKyBlbmNvZGUodGhpcy5idWNrZXQpICsgJy9vJztcclxuICAgIH07XHJcbiAgICBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWMgPSBmdW5jdGlvbiAoYnVja2V0U3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGJ1Y2tldExvY2F0aW9uO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGJ1Y2tldExvY2F0aW9uID0gTG9jYXRpb24ubWFrZUZyb21VcmwoYnVja2V0U3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gTm90IHZhbGlkIFVSTCwgdXNlIGFzLWlzLiBUaGlzIGxldHMgeW91IHB1dCBiYXJlIGJ1Y2tldCBuYW1lcyBpblxyXG4gICAgICAgICAgICAvLyBjb25maWcuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYXRpb24oYnVja2V0U3RyaW5nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidWNrZXRMb2NhdGlvbi5wYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVja2V0TG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkRGVmYXVsdEJ1Y2tldChidWNrZXRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMb2NhdGlvbi5tYWtlRnJvbVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHZhciBidWNrZXREb21haW4gPSAnKFtBLVphLXowLTkuXFxcXC1fXSspJztcclxuICAgICAgICBmdW5jdGlvbiBnc01vZGlmeShsb2MpIHtcclxuICAgICAgICAgICAgaWYgKGxvYy5wYXRoLmNoYXJBdChsb2MucGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICBsb2MucGF0aF8gPSBsb2MucGF0aF8uc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnc1BhdGggPSAnKC8oLiopKT8kJztcclxuICAgICAgICB2YXIgZ3NSZWdleCA9IG5ldyBSZWdFeHAoJ15nczovLycgKyBidWNrZXREb21haW4gKyBnc1BhdGgsICdpJyk7XHJcbiAgICAgICAgdmFyIGdzSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gaHR0cE1vZGlmeShsb2MpIHtcclxuICAgICAgICAgICAgbG9jLnBhdGhfID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvYy5wYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSAndltBLVphLXowLTlfXSsnO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VIb3N0ID0gREVGQVVMVF9IT1NULnJlcGxhY2UoL1suXS9nLCAnXFxcXC4nKTtcclxuICAgICAgICB2YXIgZmlyZWJhc2VTdG9yYWdlUGF0aCA9ICcoLyhbXj8jXSopLiopPyQnO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXmh0dHBzPzovL1wiICsgZmlyZWJhc2VTdG9yYWdlSG9zdCArIFwiL1wiICsgdmVyc2lvbiArIFwiL2IvXCIgKyBidWNrZXREb21haW4gKyBcIi9vXCIgKyBmaXJlYmFzZVN0b3JhZ2VQYXRoLCAnaScpO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDMgfTtcclxuICAgICAgICB2YXIgY2xvdWRTdG9yYWdlSG9zdCA9ICcoPzpzdG9yYWdlLmdvb2dsZWFwaXMuY29tfHN0b3JhZ2UuY2xvdWQuZ29vZ2xlLmNvbSknO1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VQYXRoID0gJyhbXj8jXSopJztcclxuICAgICAgICB2YXIgY2xvdWRTdG9yYWdlUmVnRXhwID0gbmV3IFJlZ0V4cChcIl5odHRwcz86Ly9cIiArIGNsb3VkU3RvcmFnZUhvc3QgKyBcIi9cIiArIGJ1Y2tldERvbWFpbiArIFwiL1wiICsgY2xvdWRTdG9yYWdlUGF0aCwgJ2knKTtcclxuICAgICAgICB2YXIgY2xvdWRTdG9yYWdlSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAyIH07XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IFtcclxuICAgICAgICAgICAgeyByZWdleDogZ3NSZWdleCwgaW5kaWNlczogZ3NJbmRpY2VzLCBwb3N0TW9kaWZ5OiBnc01vZGlmeSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWdleDogZmlyZWJhc2VTdG9yYWdlUmVnRXhwLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogZmlyZWJhc2VTdG9yYWdlSW5kaWNlcyxcclxuICAgICAgICAgICAgICAgIHBvc3RNb2RpZnk6IGh0dHBNb2RpZnlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVnZXg6IGNsb3VkU3RvcmFnZVJlZ0V4cCxcclxuICAgICAgICAgICAgICAgIGluZGljZXM6IGNsb3VkU3RvcmFnZUluZGljZXMsXHJcbiAgICAgICAgICAgICAgICBwb3N0TW9kaWZ5OiBodHRwTW9kaWZ5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBncm91cCA9IGdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgdmFyIGNhcHR1cmVzID0gZ3JvdXAucmVnZXguZXhlYyh1cmwpO1xyXG4gICAgICAgICAgICBpZiAoY2FwdHVyZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBidWNrZXRWYWx1ZSA9IGNhcHR1cmVzW2dyb3VwLmluZGljZXMuYnVja2V0XTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoVmFsdWUgPSBjYXB0dXJlc1tncm91cC5pbmRpY2VzLnBhdGhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKGJ1Y2tldFZhbHVlLCBwYXRoVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAucG9zdE1vZGlmeShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkVXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9jYXRpb247XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyB0aGUgT2JqZWN0IHJlc3VsdGluZyBmcm9tIHBhcnNpbmcgdGhlIGdpdmVuIEpTT04sIG9yIG51bGwgaWYgdGhlXHJcbiAqIGdpdmVuIHN0cmluZyBkb2VzIG5vdCByZXByZXNlbnQgYSBKU09OIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIGpzb25PYmplY3RPck51bGwocykge1xyXG4gICAgdmFyIG9iajtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgb2JqID0gSlNPTi5wYXJzZShzKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOb25BcnJheU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBDb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHBhdGhzLlxyXG4gKi9cclxuLyoqXHJcbiAqIEByZXR1cm4gTnVsbCBpZiB0aGUgcGF0aCBpcyBhbHJlYWR5IGF0IHRoZSByb290LlxyXG4gKi9cclxuZnVuY3Rpb24gcGFyZW50KHBhdGgpIHtcclxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHZhciBuZXdQYXRoID0gcGF0aC5zbGljZSgwLCBpbmRleCk7XHJcbiAgICByZXR1cm4gbmV3UGF0aDtcclxufVxyXG5mdW5jdGlvbiBjaGlsZChwYXRoLCBjaGlsZFBhdGgpIHtcclxuICAgIHZhciBjYW5vbmljYWxDaGlsZFBhdGggPSBjaGlsZFBhdGhcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50Lmxlbmd0aCA+IDA7IH0pXHJcbiAgICAgICAgLmpvaW4oJy8nKTtcclxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjYW5vbmljYWxDaGlsZFBhdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aCArICcvJyArIGNhbm9uaWNhbENoaWxkUGF0aDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbGFzdCBjb21wb25lbnQgb2YgYSBwYXRoLlxyXG4gKiAnL2Zvby9iYXInIC0+ICdiYXInXHJcbiAqICcvZm9vL2Jhci9iYXovJyAtPiAnYmF6LydcclxuICogJy9hJyAtPiAnYSdcclxuICovXHJcbmZ1bmN0aW9uIGxhc3RDb21wb25lbnQocGF0aCkge1xyXG4gICAgdmFyIGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycsIHBhdGgubGVuZ3RoIC0gMik7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aC5zbGljZShpbmRleCArIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlVXJsKHVybFBhcnQpIHtcclxuICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyBERUZBVUxUX0hPU1QgKyBcIi92MFwiICsgdXJsUGFydDtcclxufVxyXG5mdW5jdGlvbiBtYWtlUXVlcnlTdHJpbmcocGFyYW1zKSB7XHJcbiAgICB2YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgdmFyIHF1ZXJ5UGFydCA9ICc/JztcclxuICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiByZW1vdmUgb25jZSB0eXBlc2NyaXB0IGlzIHVwZ3JhZGVkIHRvIDMuNS54XHJcbiAgICAgICAgICAgIHZhciBuZXh0UGFydCA9IGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHBhcmFtc1trZXldKTtcclxuICAgICAgICAgICAgcXVlcnlQYXJ0ID0gcXVlcnlQYXJ0ICsgbmV4dFBhcnQgKyAnJic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hvcCBvZmYgdGhlIGV4dHJhICcmJyBvciAnPycgb24gdGhlIGVuZFxyXG4gICAgcXVlcnlQYXJ0ID0gcXVlcnlQYXJ0LnNsaWNlKDAsIC0xKTtcclxuICAgIHJldHVybiBxdWVyeVBhcnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIG5vWGZvcm1fKG1ldGFkYXRhLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbi8qKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgTWFwcGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hcHBpbmcoc2VydmVyLCBsb2NhbCwgd3JpdGFibGUsIHhmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy5sb2NhbCA9IGxvY2FsIHx8IHNlcnZlcjtcclxuICAgICAgICB0aGlzLndyaXRhYmxlID0gISF3cml0YWJsZTtcclxuICAgICAgICB0aGlzLnhmb3JtID0geGZvcm0gfHwgbm9YZm9ybV87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFwcGluZztcclxufSgpKTtcclxudmFyIG1hcHBpbmdzXyA9IG51bGw7XHJcbmZ1bmN0aW9uIHhmb3JtUGF0aChmdWxsUGF0aCkge1xyXG4gICAgaWYgKCFpc1N0cmluZyhmdWxsUGF0aCkgfHwgZnVsbFBhdGgubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybiBmdWxsUGF0aDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBsYXN0Q29tcG9uZW50KGZ1bGxQYXRoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRNYXBwaW5ncygpIHtcclxuICAgIGlmIChtYXBwaW5nc18pIHtcclxuICAgICAgICByZXR1cm4gbWFwcGluZ3NfO1xyXG4gICAgfVxyXG4gICAgdmFyIG1hcHBpbmdzID0gW107XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdidWNrZXQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdnZW5lcmF0aW9uJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWV0YWdlbmVyYXRpb24nKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCduYW1lJywgJ2Z1bGxQYXRoJywgdHJ1ZSkpO1xyXG4gICAgZnVuY3Rpb24gbWFwcGluZ3NYZm9ybVBhdGgoX21ldGFkYXRhLCBmdWxsUGF0aCkge1xyXG4gICAgICAgIHJldHVybiB4Zm9ybVBhdGgoZnVsbFBhdGgpO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWVNYXBwaW5nID0gbmV3IE1hcHBpbmcoJ25hbWUnKTtcclxuICAgIG5hbWVNYXBwaW5nLnhmb3JtID0gbWFwcGluZ3NYZm9ybVBhdGg7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5hbWVNYXBwaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICogQ29lcmNlcyB0aGUgc2Vjb25kIHBhcmFtIHRvIGEgbnVtYmVyLCBpZiBpdCBpcyBkZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB4Zm9ybVNpemUoX21ldGFkYXRhLCBzaXplKSB7XHJcbiAgICAgICAgaWYgKGlzRGVmKHNpemUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgc2l6ZU1hcHBpbmcgPSBuZXcgTWFwcGluZygnc2l6ZScpO1xyXG4gICAgc2l6ZU1hcHBpbmcueGZvcm0gPSB4Zm9ybVNpemU7XHJcbiAgICBtYXBwaW5ncy5wdXNoKHNpemVNYXBwaW5nKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ3RpbWVDcmVhdGVkJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygndXBkYXRlZCcpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ21kNUhhc2gnLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjYWNoZUNvbnRyb2wnLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjb250ZW50RGlzcG9zaXRpb24nLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjb250ZW50RW5jb2RpbmcnLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjb250ZW50TGFuZ3VhZ2UnLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjb250ZW50VHlwZScsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ21ldGFkYXRhJywgJ2N1c3RvbU1ldGFkYXRhJywgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3NfID0gbWFwcGluZ3M7XHJcbiAgICByZXR1cm4gbWFwcGluZ3NfO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFJlZihtZXRhZGF0YSwgc2VydmljZSkge1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSZWYoKSB7XHJcbiAgICAgICAgdmFyIGJ1Y2tldCA9IG1ldGFkYXRhWydidWNrZXQnXTtcclxuICAgICAgICB2YXIgcGF0aCA9IG1ldGFkYXRhWydmdWxsUGF0aCddO1xyXG4gICAgICAgIHZhciBsb2MgPSBuZXcgTG9jYXRpb24oYnVja2V0LCBwYXRoKTtcclxuICAgICAgICByZXR1cm4gc2VydmljZS5tYWtlU3RvcmFnZVJlZmVyZW5jZShsb2MpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1ldGFkYXRhLCAncmVmJywgeyBnZXQ6IGdlbmVyYXRlUmVmIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNvdXJjZShzZXJ2aWNlLCByZXNvdXJjZSwgbWFwcGluZ3MpIHtcclxuICAgIHZhciBtZXRhZGF0YSA9IHt9O1xyXG4gICAgbWV0YWRhdGFbJ3R5cGUnXSA9ICdmaWxlJztcclxuICAgIHZhciBsZW4gPSBtYXBwaW5ncy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcclxuICAgICAgICBtZXRhZGF0YVttYXBwaW5nLmxvY2FsXSA9IG1hcHBpbmcueGZvcm0obWV0YWRhdGEsIHJlc291cmNlW21hcHBpbmcuc2VydmVyXSk7XHJcbiAgICB9XHJcbiAgICBhZGRSZWYobWV0YWRhdGEsIHNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCByZXNvdXJjZVN0cmluZywgbWFwcGluZ3MpIHtcclxuICAgIHZhciBvYmogPSBqc29uT2JqZWN0T3JOdWxsKHJlc291cmNlU3RyaW5nKTtcclxuICAgIGlmIChvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciByZXNvdXJjZSA9IG9iajtcclxuICAgIHJldHVybiBmcm9tUmVzb3VyY2Uoc2VydmljZSwgcmVzb3VyY2UsIG1hcHBpbmdzKTtcclxufVxyXG5mdW5jdGlvbiBkb3dubG9hZFVybEZyb21SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgcmVzb3VyY2VTdHJpbmcpIHtcclxuICAgIHZhciBvYmogPSBqc29uT2JqZWN0T3JOdWxsKHJlc291cmNlU3RyaW5nKTtcclxuICAgIGlmIChvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghaXNTdHJpbmcob2JqWydkb3dubG9hZFRva2VucyddKSkge1xyXG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiBvYmplY3RzIGFyZSB1cGxvYWRlZCB0aHJvdWdoIEdDUyBhbmQgcmV0cmlldmVkXHJcbiAgICAgICAgLy8gdGhyb3VnaCBsaXN0LCBzbyB3ZSBkb24ndCB3YW50IHRvIHRocm93IGFuIEVycm9yLlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIHRva2VucyA9IG9ialsnZG93bmxvYWRUb2tlbnMnXTtcclxuICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgdmFyIHRva2Vuc0xpc3QgPSB0b2tlbnMuc3BsaXQoJywnKTtcclxuICAgIHZhciB1cmxzID0gdG9rZW5zTGlzdC5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgdmFyIGJ1Y2tldCA9IG1ldGFkYXRhWydidWNrZXQnXTtcclxuICAgICAgICB2YXIgcGF0aCA9IG1ldGFkYXRhWydmdWxsUGF0aCddO1xyXG4gICAgICAgIHZhciB1cmxQYXJ0ID0gJy9iLycgKyBlbmNvZGUoYnVja2V0KSArICcvby8nICsgZW5jb2RlKHBhdGgpO1xyXG4gICAgICAgIHZhciBiYXNlID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBtYWtlUXVlcnlTdHJpbmcoe1xyXG4gICAgICAgICAgICBhbHQ6ICdtZWRpYScsXHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBiYXNlICsgcXVlcnlTdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1cmxzWzBdO1xyXG59XHJcbmZ1bmN0aW9uIHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgcmVzb3VyY2UgPSB7fTtcclxuICAgIHZhciBsZW4gPSBtYXBwaW5ncy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcclxuICAgICAgICBpZiAobWFwcGluZy53cml0YWJsZSkge1xyXG4gICAgICAgICAgICByZXNvdXJjZVttYXBwaW5nLnNlcnZlcl0gPSBtZXRhZGF0YVttYXBwaW5nLmxvY2FsXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzb3VyY2UpO1xyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhVmFsaWRhdG9yKHApIHtcclxuICAgIGlmICghaXNPYmplY3QocCkgfHwgIXApIHtcclxuICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgTWV0YWRhdGEgb2JqZWN0Lic7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcCkge1xyXG4gICAgICAgIGlmIChwLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IHBba2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2N1c3RvbU1ldGFkYXRhJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc09iamVjdCh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIG9iamVjdCBmb3IgXFwnY3VzdG9tTWV0YWRhdGFcXCcgbWFwcGluZy4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTm9uTnVsbE9iamVjdCh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJNYXBwaW5nIGZvciAnXCIgKyBrZXkgKyBcIicgY2Fubm90IGJlIGFuIG9iamVjdC5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIE1BWF9SRVNVTFRTX0tFWSA9ICdtYXhSZXN1bHRzJztcclxudmFyIE1BWF9NQVhfUkVTVUxUUyA9IDEwMDA7XHJcbnZhciBQQUdFX1RPS0VOX0tFWSA9ICdwYWdlVG9rZW4nO1xyXG52YXIgUFJFRklYRVNfS0VZID0gJ3ByZWZpeGVzJztcclxudmFyIElURU1TX0tFWSA9ICdpdGVtcyc7XHJcbmZ1bmN0aW9uIGZyb21CYWNrZW5kUmVzcG9uc2Uoc2VydmljZSwgYnVja2V0LCByZXNvdXJjZSkge1xyXG4gICAgdmFyIGxpc3RSZXN1bHQgPSB7XHJcbiAgICAgICAgcHJlZml4ZXM6IFtdLFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICBuZXh0UGFnZVRva2VuOiByZXNvdXJjZVsnbmV4dFBhZ2VUb2tlbiddXHJcbiAgICB9O1xyXG4gICAgaWYgKHJlc291cmNlW1BSRUZJWEVTX0tFWV0pIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcmVzb3VyY2VbUFJFRklYRVNfS0VZXTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHZhciBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2ggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XHJcbiAgICAgICAgICAgIHZhciByZWZlcmVuY2UgPSBzZXJ2aWNlLm1ha2VTdG9yYWdlUmVmZXJlbmNlKG5ldyBMb2NhdGlvbihidWNrZXQsIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCkpO1xyXG4gICAgICAgICAgICBsaXN0UmVzdWx0LnByZWZpeGVzLnB1c2gocmVmZXJlbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocmVzb3VyY2VbSVRFTVNfS0VZXSkge1xyXG4gICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSByZXNvdXJjZVtJVEVNU19LRVldOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9jW19iXTtcclxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZSA9IHNlcnZpY2UubWFrZVN0b3JhZ2VSZWZlcmVuY2UobmV3IExvY2F0aW9uKGJ1Y2tldCwgaXRlbVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIGxpc3RSZXN1bHQuaXRlbXMucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0UmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNwb25zZVN0cmluZyhzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlU3RyaW5nKSB7XHJcbiAgICB2YXIgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XHJcbiAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzb3VyY2UgPSBvYmo7XHJcbiAgICByZXR1cm4gZnJvbUJhY2tlbmRSZXNwb25zZShzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlKTtcclxufVxyXG5mdW5jdGlvbiBsaXN0T3B0aW9uc1ZhbGlkYXRvcihwKSB7XHJcbiAgICBpZiAoIWlzT2JqZWN0KHApIHx8ICFwKSB7XHJcbiAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIExpc3RPcHRpb25zIG9iamVjdC4nO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIHApIHtcclxuICAgICAgICBpZiAoa2V5ID09PSBNQVhfUkVTVUxUU19LRVkpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0ludGVnZXIocFtNQVhfUkVTVUxUU19LRVldKSB8fFxyXG4gICAgICAgICAgICAgICAgcFtNQVhfUkVTVUxUU19LRVldIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBtYXhSZXN1bHRzIHRvIGJlIGEgcG9zaXRpdmUgbnVtYmVyLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBbTUFYX1JFU1VMVFNfS0VZXSA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IFwiRXhwZWN0ZWQgbWF4UmVzdWx0cyB0byBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gXCIgKyBNQVhfTUFYX1JFU1VMVFMgKyBcIi5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXkgPT09IFBBR0VfVE9LRU5fS0VZKSB7XHJcbiAgICAgICAgICAgIGlmIChwW1BBR0VfVE9LRU5fS0VZXSAmJiAhaXNTdHJpbmcocFtQQUdFX1RPS0VOX0tFWV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgcGFnZVRva2VuIHRvIGJlIHN0cmluZy4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyAnVW5rbm93biBvcHRpb246ICcgKyBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgUmVxdWVzdEluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHdpdGggd2hpY2ggdG8gcmVzb2x2ZSB0aGUgcmVxdWVzdCdzIHByb21pc2UuIE9ubHkgY2FsbGVkXHJcbiAgICAgKiBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsLiBUaHJvdyBmcm9tIHRoaXMgZnVuY3Rpb24gdG8gcmVqZWN0IHRoZVxyXG4gICAgICogcmV0dXJuZWQgUmVxdWVzdCdzIHByb21pc2Ugd2l0aCB0aGUgdGhyb3duIGVycm9yLlxyXG4gICAgICogTm90ZTogVGhlIFhocklvIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIG1heSBiZSByZXVzZWQgYWZ0ZXIgdGhpcyBjYWxsYmFja1xyXG4gICAgICogcmV0dXJucy4gRG8gbm90IGtlZXAgYSByZWZlcmVuY2UgdG8gaXQgaW4gYW55IHdheS5cclxuICAgICAqL1xyXG4gICAgaGFuZGxlciwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICB0aGlzLnVybFBhcmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm9keSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxlZCB3aXRoIHRoZSBjdXJyZW50IG51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBhbmQgdG90YWwgc2l6ZSAoLTEgaWYgbm90XHJcbiAgICAgICAgICogY29tcHV0YWJsZSkgb2YgdGhlIHJlcXVlc3QgYm9keSAoaS5lLiB1c2VkIHRvIHJlcG9ydCB1cGxvYWQgcHJvZ3Jlc3MpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzQ29kZXMgPSBbMjAwXTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxSZXRyeUNvZGVzID0gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVxdWVzdEluZm87XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhyb3dzIHRoZSBVTktOT1dOIEZpcmViYXNlU3RvcmFnZUVycm9yIGlmIGNuZG4gaXMgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVyQ2hlY2soY25kbikge1xyXG4gICAgaWYgKCFjbmRuKSB7XHJcbiAgICAgICAgdGhyb3cgdW5rbm93bigpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcclxuICAgICAgICB2YXIgbWV0YWRhdGEgPSBmcm9tUmVzb3VyY2VTdHJpbmcoc2VydmljZSwgdGV4dCwgbWFwcGluZ3MpO1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayhtZXRhZGF0YSAhPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gbGlzdEhhbmRsZXIoc2VydmljZSwgYnVja2V0KSB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIHZhciBsaXN0UmVzdWx0ID0gZnJvbVJlc3BvbnNlU3RyaW5nKHNlcnZpY2UsIGJ1Y2tldCwgdGV4dCk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKGxpc3RSZXN1bHQgIT09IG51bGwpO1xyXG4gICAgICAgIHJldHVybiBsaXN0UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gZG93bmxvYWRVcmxIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YSA9IGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIHRleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcclxuICAgICAgICB2YXIgbmV3RXJyO1xyXG4gICAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMSkge1xyXG4gICAgICAgICAgICBuZXdFcnIgPSB1bmF1dGhlbnRpY2F0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMikge1xyXG4gICAgICAgICAgICAgICAgbmV3RXJyID0gcXVvdGFFeGNlZWRlZChsb2NhdGlvbi5idWNrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RXJyID0gdW5hdXRob3JpemVkKGxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RXJyID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0Vyci5zZXRTZXJ2ZXJSZXNwb25zZVByb3AoZXJyLnNlcnZlclJlc3BvbnNlUHJvcCgpKTtcclxuICAgICAgICByZXR1cm4gbmV3RXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ySGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pIHtcclxuICAgIHZhciBzaGFyZWQgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKHhociwgZXJyKSB7XHJcbiAgICAgICAgdmFyIG5ld0VyciA9IHNoYXJlZCh4aHIsIGVycik7XHJcbiAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgIG5ld0VyciA9IG9iamVjdE5vdEZvdW5kKGxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdFcnIuc2V0U2VydmVyUmVzcG9uc2VQcm9wKGVyci5zZXJ2ZXJSZXNwb25zZVByb3AoKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0VycjtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvckhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgbWV0YWRhdGFIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGxpc3Qoc2VydmljZSwgbG9jYXRpb24sIGRlbGltaXRlciwgcGFnZVRva2VuLCBtYXhSZXN1bHRzKSB7XHJcbiAgICB2YXIgdXJsUGFyYW1zID0ge307XHJcbiAgICBpZiAobG9jYXRpb24uaXNSb290KSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9ICcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9IGxvY2F0aW9uLnBhdGggKyAnLyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVsaW1pdGVyICYmIGRlbGltaXRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydkZWxpbWl0ZXInXSA9IGRlbGltaXRlcjtcclxuICAgIH1cclxuICAgIGlmIChwYWdlVG9rZW4pIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3BhZ2VUb2tlbiddID0gcGFnZVRva2VuO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heFJlc3VsdHMpIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ21heFJlc3VsdHMnXSA9IG1heFJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgbGlzdEhhbmRsZXIoc2VydmljZSwgbG9jYXRpb24uYnVja2V0KSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGdldERvd25sb2FkVXJsKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnR0VUJztcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGRvd25sb2FkVXJsSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gb2JqZWN0RXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVNZXRhZGF0YShzZXJ2aWNlLCBsb2NhdGlvbiwgbWV0YWRhdGEsIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdQQVRDSCc7XHJcbiAgICB2YXIgYm9keSA9IHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIG1hcHBpbmdzKTtcclxuICAgIHZhciBoZWFkZXJzID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnIH07XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdChzZXJ2aWNlLCBsb2NhdGlvbikge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnREVMRVRFJztcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKF94aHIsIF90ZXh0KSB7IH1cclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5zdWNjZXNzQ29kZXMgPSBbMjAwLCAyMDRdO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gb2JqZWN0RXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5mdW5jdGlvbiBkZXRlcm1pbmVDb250ZW50VHlwZV8obWV0YWRhdGEsIGJsb2IpIHtcclxuICAgIHJldHVybiAoKG1ldGFkYXRhICYmIG1ldGFkYXRhWydjb250ZW50VHlwZSddKSB8fFxyXG4gICAgICAgIChibG9iICYmIGJsb2IudHlwZSgpKSB8fFxyXG4gICAgICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKTtcclxufVxyXG5mdW5jdGlvbiBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgbWV0YWRhdGFDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGFkYXRhKTtcclxuICAgIG1ldGFkYXRhQ2xvbmVbJ2Z1bGxQYXRoJ10gPSBsb2NhdGlvbi5wYXRoO1xyXG4gICAgbWV0YWRhdGFDbG9uZVsnc2l6ZSddID0gYmxvYi5zaXplKCk7XHJcbiAgICBpZiAoIW1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10pIHtcclxuICAgICAgICBtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID0gZGV0ZXJtaW5lQ29udGVudFR5cGVfKG51bGwsIGJsb2IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1ldGFkYXRhQ2xvbmU7XHJcbn1cclxuZnVuY3Rpb24gbXVsdGlwYXJ0VXBsb2FkKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXBwaW5ncywgYmxvYiwgbWV0YWRhdGEpIHtcclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uYnVja2V0T25seVNlcnZlclVybCgpO1xyXG4gICAgdmFyIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtUHJvdG9jb2wnOiAnbXVsdGlwYXJ0J1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGdlbkJvdW5kYXJ5KCkge1xyXG4gICAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICB2YXIgYm91bmRhcnkgPSBnZW5Cb3VuZGFyeSgpO1xyXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnbXVsdGlwYXJ0L3JlbGF0ZWQ7IGJvdW5kYXJ5PScgKyBib3VuZGFyeTtcclxuICAgIHZhciBtZXRhZGF0YV8gPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcclxuICAgIHZhciBtZXRhZGF0YVN0cmluZyA9IHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGFfLCBtYXBwaW5ncyk7XHJcbiAgICB2YXIgcHJlQmxvYlBhcnQgPSAnLS0nICtcclxuICAgICAgICBib3VuZGFyeSArXHJcbiAgICAgICAgJ1xcclxcbicgK1xyXG4gICAgICAgICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcXHJcXG5cXHJcXG4nICtcclxuICAgICAgICBtZXRhZGF0YVN0cmluZyArXHJcbiAgICAgICAgJ1xcclxcbi0tJyArXHJcbiAgICAgICAgYm91bmRhcnkgK1xyXG4gICAgICAgICdcXHJcXG4nICtcclxuICAgICAgICAnQ29udGVudC1UeXBlOiAnICtcclxuICAgICAgICBtZXRhZGF0YV9bJ2NvbnRlbnRUeXBlJ10gK1xyXG4gICAgICAgICdcXHJcXG5cXHJcXG4nO1xyXG4gICAgdmFyIHBvc3RCbG9iUGFydCA9ICdcXHJcXG4tLScgKyBib3VuZGFyeSArICctLSc7XHJcbiAgICB2YXIgYm9keSA9IEZic0Jsb2IuZ2V0QmxvYihwcmVCbG9iUGFydCwgYmxvYiwgcG9zdEJsb2JQYXJ0KTtcclxuICAgIGlmIChib2R5ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgY2Fubm90U2xpY2VCbG9iKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsUGFyYW1zID0geyBuYW1lOiBtZXRhZGF0YV9bJ2Z1bGxQYXRoJ10gfTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keS51cGxvYWREYXRhKCk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gY3VycmVudCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgaGF2ZSBiZWVuIHVwbG9hZGVkIHNvIGZhci5cclxuICogQHBhcmFtIHRvdGFsIFRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgaW4gdGhlIHVwbG9hZC5cclxuICogQHBhcmFtIG9wdF9maW5hbGl6ZWQgVHJ1ZSBpZiB0aGUgc2VydmVyIGhhcyBmaW5pc2hlZCB0aGUgdXBsb2FkLlxyXG4gKiBAcGFyYW0gb3B0X21ldGFkYXRhIFRoZSB1cGxvYWQgbWV0YWRhdGEsIHNob3VsZFxyXG4gKiAgICAgb25seSBiZSBwYXNzZWQgaWYgb3B0X2ZpbmFsaXplZCBpcyB0cnVlLlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgUmVzdW1hYmxlVXBsb2FkU3RhdHVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVzdW1hYmxlVXBsb2FkU3RhdHVzKGN1cnJlbnQsIHRvdGFsLCBmaW5hbGl6ZWQsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWw7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSAhIWZpbmFsaXplZDtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGEgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXN1bWFibGVVcGxvYWRTdGF0dXM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIGFsbG93ZWQpIHtcclxuICAgIHZhciBzdGF0dXMgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdGF0dXMgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtU3RhdHVzJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYWxsb3dlZFN0YXR1cyA9IGFsbG93ZWQgfHwgWydhY3RpdmUnXTtcclxuICAgIGhhbmRsZXJDaGVjayghIXN0YXR1cyAmJiBhbGxvd2VkU3RhdHVzLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTEpO1xyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVSZXN1bWFibGVVcGxvYWQoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzLCBibG9iLCBtZXRhZGF0YSkge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5idWNrZXRPbmx5U2VydmVyVXJsKCk7XHJcbiAgICB2YXIgbWV0YWRhdGFGb3JVcGxvYWQgPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcclxuICAgIHZhciB1cmxQYXJhbXMgPSB7IG5hbWU6IG1ldGFkYXRhRm9yVXBsb2FkWydmdWxsUGF0aCddIH07XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnUE9TVCc7XHJcbiAgICB2YXIgaGVhZGVycyA9IHtcclxuICAgICAgICAnWC1Hb29nLVVwbG9hZC1Qcm90b2NvbCc6ICdyZXN1bWFibGUnLFxyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLUNvbW1hbmQnOiAnc3RhcnQnLFxyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLUhlYWRlci1Db250ZW50LUxlbmd0aCc6IGJsb2Iuc2l6ZSgpLFxyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLUhlYWRlci1Db250ZW50LVR5cGUnOiBtZXRhZGF0YUZvclVwbG9hZFsnY29udGVudFR5cGUnXSxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICB9O1xyXG4gICAgdmFyIGJvZHkgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhRm9yVXBsb2FkLCBtYXBwaW5ncyk7XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4VXBsb2FkUmV0cnlUaW1lO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIpIHtcclxuICAgICAgICBjaGVja1Jlc3VtZUhlYWRlcl8oeGhyKTtcclxuICAgICAgICB2YXIgdXJsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVybCA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1Hb29nLVVwbG9hZC1VUkwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKGlzU3RyaW5nKHVybCkpO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSB1cmwgRnJvbSBhIGNhbGwgdG8gZmJzLnJlcXVlc3RzLmNyZWF0ZVJlc3VtYWJsZVVwbG9hZC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhzZXJ2aWNlLCBsb2NhdGlvbiwgdXJsLCBibG9iKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IHsgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdxdWVyeScgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyKSB7XHJcbiAgICAgICAgdmFyIHN0YXR1cyA9IGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIFsnYWN0aXZlJywgJ2ZpbmFsJ10pO1xyXG4gICAgICAgIHZhciBzaXplU3RyaW5nID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzaXplU3RyaW5nID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVNpemUtUmVjZWl2ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaXplU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIG51bGwgb3IgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaXplID0gTnVtYmVyKHNpemVTdHJpbmcpO1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayghaXNOYU4oc2l6ZSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKHNpemUsIGJsb2Iuc2l6ZSgpLCBzdGF0dXMgPT09ICdmaW5hbCcpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbi8qKlxyXG4gKiBBbnkgdXBsb2FkcyB2aWEgdGhlIHJlc3VtYWJsZSB1cGxvYWQgQVBJIG11c3QgdHJhbnNmZXIgYSBudW1iZXIgb2YgYnl0ZXNcclxuICogdGhhdCBpcyBhIG11bHRpcGxlIG9mIHRoaXMgbnVtYmVyLlxyXG4gKi9cclxudmFyIHJlc3VtYWJsZVVwbG9hZENodW5rU2l6ZSA9IDI1NiAqIDEwMjQ7XHJcbi8qKlxyXG4gKiBAcGFyYW0gdXJsIEZyb20gYSBjYWxsIHRvIGZicy5yZXF1ZXN0cy5jcmVhdGVSZXN1bWFibGVVcGxvYWQuXHJcbiAqIEBwYXJhbSBjaHVua1NpemUgTnVtYmVyIG9mIGJ5dGVzIHRvIHVwbG9hZC5cclxuICogQHBhcmFtIHN0YXR1cyBUaGUgcHJldmlvdXMgc3RhdHVzLlxyXG4gKiAgICAgSWYgbm90IHBhc3NlZCBvciBudWxsLCB3ZSBzdGFydCBmcm9tIHRoZSBiZWdpbm5pbmcuXHJcbiAqIEB0aHJvd3MgZmJzLkVycm9yIElmIHRoZSB1cGxvYWQgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlIHBhc3NlZCBpbiBzdGF0dXNcclxuICogICAgIGhhcyBhIGZpbmFsIHNpemUgaW5jb25zaXN0ZW50IHdpdGggdGhlIGJsb2IsIG9yIHRoZSBibG9iIGNhbm5vdCBiZSBzbGljZWRcclxuICogICAgIGZvciB1cGxvYWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChsb2NhdGlvbiwgc2VydmljZSwgdXJsLCBibG9iLCBjaHVua1NpemUsIG1hcHBpbmdzLCBzdGF0dXMsIHByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBzdGFuZGFyZGl6ZSBvbiBpbnRlcm5hbCBhc3NlcnRzXHJcbiAgICAvLyBhc3NlcnQoIShvcHRfc3RhdHVzICYmIG9wdF9zdGF0dXMuZmluYWxpemVkKSk7XHJcbiAgICB2YXIgc3RhdHVzXyA9IG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMoMCwgMCk7XHJcbiAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgc3RhdHVzXy5jdXJyZW50ID0gc3RhdHVzLmN1cnJlbnQ7XHJcbiAgICAgICAgc3RhdHVzXy50b3RhbCA9IHN0YXR1cy50b3RhbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0YXR1c18uY3VycmVudCA9IDA7XHJcbiAgICAgICAgc3RhdHVzXy50b3RhbCA9IGJsb2Iuc2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2Iuc2l6ZSgpICE9PSBzdGF0dXNfLnRvdGFsKSB7XHJcbiAgICAgICAgdGhyb3cgc2VydmVyRmlsZVdyb25nU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIGJ5dGVzTGVmdCA9IHN0YXR1c18udG90YWwgLSBzdGF0dXNfLmN1cnJlbnQ7XHJcbiAgICB2YXIgYnl0ZXNUb1VwbG9hZCA9IGJ5dGVzTGVmdDtcclxuICAgIGlmIChjaHVua1NpemUgPiAwKSB7XHJcbiAgICAgICAgYnl0ZXNUb1VwbG9hZCA9IE1hdGgubWluKGJ5dGVzVG9VcGxvYWQsIGNodW5rU2l6ZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3RhcnRCeXRlID0gc3RhdHVzXy5jdXJyZW50O1xyXG4gICAgdmFyIGVuZEJ5dGUgPSBzdGFydEJ5dGUgKyBieXRlc1RvVXBsb2FkO1xyXG4gICAgdmFyIHVwbG9hZENvbW1hbmQgPSBieXRlc1RvVXBsb2FkID09PSBieXRlc0xlZnQgPyAndXBsb2FkLCBmaW5hbGl6ZScgOiAndXBsb2FkJztcclxuICAgIHZhciBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLUNvbW1hbmQnOiB1cGxvYWRDb21tYW5kLFxyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLU9mZnNldCc6IHN0YXR1c18uY3VycmVudFxyXG4gICAgfTtcclxuICAgIHZhciBib2R5ID0gYmxvYi5zbGljZShzdGFydEJ5dGUsIGVuZEJ5dGUpO1xyXG4gICAgaWYgKGJvZHkgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBjYW5ub3RTbGljZUJsb2IoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IFZlcmlmeSB0aGUgTUQ1IG9mIGVhY2ggdXBsb2FkZWQgcmFuZ2U6XHJcbiAgICAgICAgLy8gdGhlICd4LXJhbmdlLW1kNScgaGVhZGVyIGNvbWVzIGJhY2sgd2l0aCBzdGF0dXMgY29kZSAzMDggcmVzcG9uc2VzLlxyXG4gICAgICAgIC8vIFdlJ2xsIG9ubHkgYmUgYWJsZSB0byBiYWlsIG91dCB0aG91Z2gsIGJlY2F1c2UgeW91IGNhbid0IHJlLXVwbG9hZCBhXHJcbiAgICAgICAgLy8gcmFuZ2UgdGhhdCB5b3UgcHJldmlvdXNseSB1cGxvYWRlZC5cclxuICAgICAgICB2YXIgdXBsb2FkU3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XHJcbiAgICAgICAgdmFyIG5ld0N1cnJlbnQgPSBzdGF0dXNfLmN1cnJlbnQgKyBieXRlc1RvVXBsb2FkO1xyXG4gICAgICAgIHZhciBzaXplID0gYmxvYi5zaXplKCk7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhO1xyXG4gICAgICAgIGlmICh1cGxvYWRTdGF0dXMgPT09ICdmaW5hbCcpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEgPSBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpKHhociwgdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRhZGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKG5ld0N1cnJlbnQsIHNpemUsIHVwbG9hZFN0YXR1cyA9PT0gJ2ZpbmFsJywgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keS51cGxvYWREYXRhKCk7XHJcbiAgICByZXF1ZXN0SW5mby5wcm9ncmVzc0NhbGxiYWNrID0gcHJvZ3Jlc3NDYWxsYmFjayB8fCBudWxsO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICB2YXIgYXNGdW5jdGlvbnMgPSBpc0Z1bmN0aW9uKG5leHRPck9ic2VydmVyKSB8fFxyXG4gICAgICAgICAgICBpc0RlZihlcnJvcikgfHxcclxuICAgICAgICAgICAgaXNEZWYoY29tcGxldGUpO1xyXG4gICAgICAgIGlmIChhc0Z1bmN0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yIHx8IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZSB8fCBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IG9ic2VydmVyLm5leHQgfHwgbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG9ic2VydmVyLmVycm9yIHx8IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZSB8fCBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBPYnNlcnZlcjtcclxufSgpKTtcclxuXHJcbnZhciBVcGxvYWRUYXNrU25hcHNob3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVcGxvYWRUYXNrU25hcHNob3QoYnl0ZXNUcmFuc2ZlcnJlZCwgdG90YWxCeXRlcywgc3RhdGUsIG1ldGFkYXRhLCB0YXNrLCByZWYpIHtcclxuICAgICAgICB0aGlzLmJ5dGVzVHJhbnNmZXJyZWQgPSBieXRlc1RyYW5zZmVycmVkO1xyXG4gICAgICAgIHRoaXMudG90YWxCeXRlcyA9IHRvdGFsQnl0ZXM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgIHRoaXMucmVmID0gcmVmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVwbG9hZFRhc2tTbmFwc2hvdDtcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBmdW5jdGlvbi5cclxuICogQHBhcmFtIHNwZWNzIEFyZ3VtZW50IHNwZWNzLlxyXG4gKiBAcGFyYW0gcGFzc2VkIFRoZSBhY3R1YWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcbiAqIEB0aHJvd3Mge2Zicy5FcnJvcn0gSWYgdGhlIGFyZ3VtZW50cyBhcmUgaW52YWxpZC5cclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlKG5hbWUsIHNwZWNzLCBwYXNzZWQpIHtcclxuICAgIHZhciBtaW5BcmdzID0gc3BlY3MubGVuZ3RoO1xyXG4gICAgdmFyIG1heEFyZ3MgPSBzcGVjcy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwZWNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNwZWNzW2ldLm9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgIG1pbkFyZ3MgPSBpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdmFsaWRMZW5ndGggPSBtaW5BcmdzIDw9IHBhc3NlZC5sZW5ndGggJiYgcGFzc2VkLmxlbmd0aCA8PSBtYXhBcmdzO1xyXG4gICAgaWYgKCF2YWxpZExlbmd0aCkge1xyXG4gICAgICAgIHRocm93IGludmFsaWRBcmd1bWVudENvdW50KG1pbkFyZ3MsIG1heEFyZ3MsIG5hbWUsIHBhc3NlZC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXNzZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzcGVjc1tpXS52YWxpZGF0b3IocGFzc2VkW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KGksIG5hbWUsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbnZhbGlkQXJndW1lbnQoaSwgbmFtZSwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBBcmdTcGVjID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJnU3BlYyh2YWxpZGF0b3IsIG9wdGlvbmFsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9uYWwgJiYgIWlzSnVzdERlZihwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcihwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSAhIW9wdGlvbmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFyZ1NwZWM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGFuZF8odjEsIHYyKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICB2MShwKTtcclxuICAgICAgICB2MihwKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5nU3BlYyh2YWxpZGF0b3IsIG9wdGlvbmFsKSB7XHJcbiAgICBmdW5jdGlvbiBzdHJpbmdWYWxpZGF0b3IocCkge1xyXG4gICAgICAgIGlmICghaXNTdHJpbmcocCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIHN0cmluZy4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBjaGFpbmVkVmFsaWRhdG9yO1xyXG4gICAgaWYgKHZhbGlkYXRvcikge1xyXG4gICAgICAgIGNoYWluZWRWYWxpZGF0b3IgPSBhbmRfKHN0cmluZ1ZhbGlkYXRvciwgdmFsaWRhdG9yKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNoYWluZWRWYWxpZGF0b3IgPSBzdHJpbmdWYWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWMoY2hhaW5lZFZhbGlkYXRvciwgb3B0aW9uYWwpO1xyXG59XHJcbmZ1bmN0aW9uIHVwbG9hZERhdGFTcGVjKCkge1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdG9yKHApIHtcclxuICAgICAgICB2YXIgdmFsaWQgPSBwIGluc3RhbmNlb2YgVWludDhBcnJheSB8fFxyXG4gICAgICAgICAgICBwIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHxcclxuICAgICAgICAgICAgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSAmJiBwIGluc3RhbmNlb2YgQmxvYik7XHJcbiAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgQmxvYiBvciBGaWxlLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBcmdTcGVjKHZhbGlkYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gbWV0YWRhdGFTcGVjKG9wdGlvbmFsKSB7XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWMobWV0YWRhdGFWYWxpZGF0b3IsIG9wdGlvbmFsKTtcclxufVxyXG5mdW5jdGlvbiBsaXN0T3B0aW9uU3BlYyhvcHRpb25hbCkge1xyXG4gICAgcmV0dXJuIG5ldyBBcmdTcGVjKGxpc3RPcHRpb25zVmFsaWRhdG9yLCBvcHRpb25hbCk7XHJcbn1cclxuZnVuY3Rpb24gbm9uTmVnYXRpdmVOdW1iZXJTcGVjKCkge1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdG9yKHApIHtcclxuICAgICAgICB2YXIgdmFsaWQgPSBpc051bWJlcihwKSAmJiBwID49IDA7XHJcbiAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgYSBudW1iZXIgMCBvciBncmVhdGVyLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBcmdTcGVjKHZhbGlkYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gbG9vc2VPYmplY3RTcGVjKHZhbGlkYXRvciwgb3B0aW9uYWwpIHtcclxuICAgIGZ1bmN0aW9uIGlzTG9vc2VPYmplY3RWYWxpZGF0b3IocCkge1xyXG4gICAgICAgIHZhciBpc0xvb3NlT2JqZWN0ID0gcCA9PT0gbnVsbCB8fCAoaXNEZWYocCkgJiYgcCBpbnN0YW5jZW9mIE9iamVjdCk7XHJcbiAgICAgICAgaWYgKCFpc0xvb3NlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBhbiBPYmplY3QuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIHZhbGlkYXRvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IocCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBcmdTcGVjKGlzTG9vc2VPYmplY3RWYWxpZGF0b3IsIG9wdGlvbmFsKTtcclxufVxyXG5mdW5jdGlvbiBudWxsRnVuY3Rpb25TcGVjKG9wdGlvbmFsKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0b3IocCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHAgPT09IG51bGwgfHwgaXNGdW5jdGlvbihwKTtcclxuICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBhIEZ1bmN0aW9uLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBcmdTcGVjKHZhbGlkYXRvciwgb3B0aW9uYWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBmIHdpdGggaXRzIGFyZ3VtZW50cyBhc3luY2hyb25vdXNseSBhcyBhXHJcbiAqIG1pY3JvdGFzaywgaS5lLiBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHRoZSBjdXJyZW50IHNjcmlwdCByZXR1cm5zIGJhY2tcclxuICogaW50byBicm93c2VyIGNvZGUuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5mdW5jdGlvbiBhc3luYyhmKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzVG9Gb3J3YXJkID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1RvRm9yd2FyZFtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBmLmFwcGx5KHZvaWQgMCwgYXJnc1RvRm9yd2FyZCk7IH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBibG9iIGJlaW5nIHVwbG9hZGVkLiBDYW4gYmUgdXNlZCB0byBwYXVzZS9yZXN1bWUvY2FuY2VsIHRoZVxyXG4gKiB1cGxvYWQgYW5kIG1hbmFnZSBjYWxsYmFja3MgZm9yIHZhcmlvdXMgZXZlbnRzLlxyXG4gKi9cclxudmFyIFVwbG9hZFRhc2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSByZWYgVGhlIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2Ugb2JqZWN0IHRoaXMgdGFzayBjYW1lXHJcbiAgICAgKiAgICAgZnJvbSwgdW50eXBlZCB0byBhdm9pZCBjeWNsaWMgZGVwZW5kZW5jaWVzLlxyXG4gICAgICogQHBhcmFtIGJsb2IgVGhlIGJsb2IgdG8gdXBsb2FkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBVcGxvYWRUYXNrKHJlZiwgc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzLCBibG9iLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhID09PSB2b2lkIDApIHsgbWV0YWRhdGEgPSBudWxsOyB9XHJcbiAgICAgICAgdGhpcy50cmFuc2ZlcnJlZF8gPSAwO1xyXG4gICAgICAgIHRoaXMubmVlZFRvRmV0Y2hTdGF0dXNfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZWVkVG9GZXRjaE1ldGFkYXRhXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVwbG9hZFVybF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2h1bmtNdWx0aXBsaWVyXyA9IDE7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWplY3RfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlZl8gPSByZWY7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXyA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbl8gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmJsb2JfID0gYmxvYjtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhXyA9IG1ldGFkYXRhO1xyXG4gICAgICAgIHRoaXMubWFwcGluZ3NfID0gbWFwcGluZ3M7XHJcbiAgICAgICAgdGhpcy5yZXN1bWFibGVfID0gdGhpcy5zaG91bGREb1Jlc3VtYWJsZV8odGhpcy5ibG9iXyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZV8gPSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgIF90aGlzLmNodW5rTXVsdGlwbGllcl8gPSAxO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZUVxdWFscyhDb2RlLkNBTkNFTEVEKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubmVlZFRvRmV0Y2hTdGF0dXNfID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvcl8gPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLkVSUk9SKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YUVycm9ySGFuZGxlcl8gPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZUVxdWFscyhDb2RlLkNBTkNFTEVEKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yXyA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuRVJST1IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlXyA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJlamVjdF8gPSByZWplY3Q7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0XygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFByZXZlbnQgdW5jYXVnaHQgcmVqZWN0aW9ucyBvbiB0aGUgaW50ZXJuYWwgcHJvbWlzZSBmcm9tIGJ1YmJsaW5nIG91dFxyXG4gICAgICAgIC8vIHRvIHRoZSB0b3AgbGV2ZWwgd2l0aCBhIGR1bW15IGhhbmRsZXIuXHJcbiAgICAgICAgdGhpcy5wcm9taXNlXy50aGVuKG51bGwsIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5tYWtlUHJvZ3Jlc3NDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc2l6ZUJlZm9yZSA9IHRoaXMudHJhbnNmZXJyZWRfO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobG9hZGVkKSB7IHJldHVybiBfdGhpcy51cGRhdGVQcm9ncmVzc18oc2l6ZUJlZm9yZSArIGxvYWRlZCk7IH07XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuc2hvdWxkRG9SZXN1bWFibGVfID0gZnVuY3Rpb24gKGJsb2IpIHtcclxuICAgICAgICByZXR1cm4gYmxvYi5zaXplKCkgPiAyNTYgKiAxMDI0O1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnN0YXJ0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZV8gIT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHNvbWVvbmUgcGF1c2VzIHVzIGluIGEgcmVzdW1lIGNhbGxiYWNrLCBmb3IgZXhhbXBsZS5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0XyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlc3VtYWJsZV8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkVXJsXyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSZXN1bWFibGVfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZWVkVG9GZXRjaFN0YXR1c18pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoU3RhdHVzXygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmVlZFRvRmV0Y2hNZXRhZGF0YV8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFwcGVucyBpZiB3ZSBtaXNzIHRoZSBtZXRhZGF0YSBvbiB1cGxvYWQgY29tcGxldGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE1ldGFkYXRhXygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250aW51ZVVwbG9hZF8oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25lU2hvdFVwbG9hZF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucmVzb2x2ZVRva2VuXyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMuc2VydmljZV8uZ2V0QXV0aFRva2VuKCkudGhlbihmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX3RoaXMuc3RhdGVfKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORzpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydCBmYWxzZVxyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuY3JlYXRlUmVzdW1hYmxlXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVRva2VuXyhmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IGNyZWF0ZVJlc3VtYWJsZVVwbG9hZChfdGhpcy5zZXJ2aWNlXywgX3RoaXMubG9jYXRpb25fLCBfdGhpcy5tYXBwaW5nc18sIF90aGlzLmJsb2JfLCBfdGhpcy5tZXRhZGF0YV8pO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRlUmVxdWVzdCA9IF90aGlzLnNlcnZpY2VfLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IGNyZWF0ZVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBsb2FkVXJsXyA9IHVybDtcclxuICAgICAgICAgICAgICAgIF90aGlzLm5lZWRUb0ZldGNoU3RhdHVzXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfSwgX3RoaXMuZXJyb3JIYW5kbGVyXyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuZmV0Y2hTdGF0dXNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydCh0aGlzLnVwbG9hZFVybF8gIT09IG51bGwpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVwbG9hZFVybF87XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKF90aGlzLnNlcnZpY2VfLCBfdGhpcy5sb2NhdGlvbl8sIHVybCwgX3RoaXMuYmxvYl8pO1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzUmVxdWVzdCA9IF90aGlzLnNlcnZpY2VfLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IHN0YXR1c1JlcXVlc3Q7XHJcbiAgICAgICAgICAgIHN0YXR1c1JlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUHJvZ3Jlc3NfKHN0YXR1cy5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLm5lZWRUb0ZldGNoU3RhdHVzXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5uZWVkVG9GZXRjaE1ldGFkYXRhXyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5lcnJvckhhbmRsZXJfKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jb250aW51ZVVwbG9hZF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY2h1bmtTaXplID0gcmVzdW1hYmxlVXBsb2FkQ2h1bmtTaXplICogdGhpcy5jaHVua011bHRpcGxpZXJfO1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKHRoaXMudHJhbnNmZXJyZWRfLCB0aGlzLmJsb2JfLnNpemUoKSk7XHJcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydCh0aGlzLnVwbG9hZFVybF8gIT09IG51bGwpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVwbG9hZFVybF87XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEluZm8gPSBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChfdGhpcy5sb2NhdGlvbl8sIF90aGlzLnNlcnZpY2VfLCB1cmwsIF90aGlzLmJsb2JfLCBjaHVua1NpemUsIF90aGlzLm1hcHBpbmdzXywgc3RhdHVzLCBfdGhpcy5tYWtlUHJvZ3Jlc3NDYWxsYmFja18oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yXyA9IGU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHVwbG9hZFJlcXVlc3QgPSBfdGhpcy5zZXJ2aWNlXy5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSB1cGxvYWRSZXF1ZXN0O1xyXG4gICAgICAgICAgICB1cGxvYWRSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAuZ2V0UHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmNyZWFzZU11bHRpcGxpZXJfKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQcm9ncmVzc18obmV3U3RhdHVzLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1N0YXR1cy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tZXRhZGF0YV8gPSBuZXdTdGF0dXMubWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBfdGhpcy5lcnJvckhhbmRsZXJfKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5pbmNyZWFzZU11bHRpcGxpZXJfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHJlc3VtYWJsZVVwbG9hZENodW5rU2l6ZSAqIHRoaXMuY2h1bmtNdWx0aXBsaWVyXztcclxuICAgICAgICAvLyBNYXggY2h1bmsgc2l6ZSBpcyAzMk0uXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaXplIDwgMzIgKiAxMDI0ICogMTAyNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNodW5rTXVsdGlwbGllcl8gKj0gMjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuZmV0Y2hNZXRhZGF0YV8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlc29sdmVUb2tlbl8oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBnZXRNZXRhZGF0YShfdGhpcy5zZXJ2aWNlXywgX3RoaXMubG9jYXRpb25fLCBfdGhpcy5tYXBwaW5nc18pO1xyXG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFSZXF1ZXN0ID0gX3RoaXMuc2VydmljZV8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbWV0YWRhdGFSZXF1ZXN0O1xyXG4gICAgICAgICAgICBtZXRhZGF0YVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tZXRhZGF0YV8gPSBtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5tZXRhZGF0YUVycm9ySGFuZGxlcl8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLm9uZVNob3RVcGxvYWRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gbXVsdGlwYXJ0VXBsb2FkKF90aGlzLnNlcnZpY2VfLCBfdGhpcy5sb2NhdGlvbl8sIF90aGlzLm1hcHBpbmdzXywgX3RoaXMuYmxvYl8sIF90aGlzLm1ldGFkYXRhXyk7XHJcbiAgICAgICAgICAgIHZhciBtdWx0aXBhcnRSZXF1ZXN0ID0gX3RoaXMuc2VydmljZV8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbXVsdGlwYXJ0UmVxdWVzdDtcclxuICAgICAgICAgICAgbXVsdGlwYXJ0UmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAobWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIF90aGlzLm1ldGFkYXRhXyA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUHJvZ3Jlc3NfKF90aGlzLmJsb2JfLnNpemUoKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTKTtcclxuICAgICAgICAgICAgfSwgX3RoaXMuZXJyb3JIYW5kbGVyXyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUudXBkYXRlUHJvZ3Jlc3NfID0gZnVuY3Rpb24gKHRyYW5zZmVycmVkKSB7XHJcbiAgICAgICAgdmFyIG9sZCA9IHRoaXMudHJhbnNmZXJyZWRfO1xyXG4gICAgICAgIHRoaXMudHJhbnNmZXJyZWRfID0gdHJhbnNmZXJyZWQ7XHJcbiAgICAgICAgLy8gQSBwcm9ncmVzcyB1cGRhdGUgY2FuIG1ha2UgdGhlIFwidHJhbnNmZXJyZWRcIiB2YWx1ZSBzbWFsbGVyIChlLmcuIGFcclxuICAgICAgICAvLyBwYXJ0aWFsIHVwbG9hZCBub3QgY29tcGxldGVkIGJ5IHNlcnZlciwgYWZ0ZXIgd2hpY2ggdGhlIFwidHJhbnNmZXJyZWRcIlxyXG4gICAgICAgIC8vIHZhbHVlIG1heSByZXNldCB0byB0aGUgdmFsdWUgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgcmVxdWVzdCkuXHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmZXJyZWRfICE9PSBvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnRyYW5zaXRpb25fID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVfID09PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkc6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXF1ZXN0XyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdF8uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0Xy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdhc1BhdXNlZCA9IHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdhc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxFRDpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JfID0gY2FuY2VsZWQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyc18oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkVSUk9SOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyc18oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jb21wbGV0ZVRyYW5zaXRpb25zXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGVfKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORzpcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORzpcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVwbG9hZFRhc2sucHJvdG90eXBlLCBcInNuYXBzaG90XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGV4dGVybmFsU3RhdGUgPSB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUodGhpcy5zdGF0ZV8pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVwbG9hZFRhc2tTbmFwc2hvdCh0aGlzLnRyYW5zZmVycmVkXywgdGhpcy5ibG9iXy5zaXplKCksIGV4dGVybmFsU3RhdGUsIHRoaXMubWV0YWRhdGFfLCB0aGlzLCB0aGlzLnJlZl8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGNhbGxiYWNrIGZvciBhbiBldmVudC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGUsIG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGVkKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdHlwZVZhbGlkYXRvcigpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IFRhc2tFdmVudC5TVEFURV9DSEFOR0VEKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkV4cGVjdGVkIG9uZSBvZiB0aGUgZXZlbnQgdHlwZXM6IFtcIiArIFRhc2tFdmVudC5TVEFURV9DSEFOR0VEICsgXCJdLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuZXh0T3JPYnNlcnZlck1lc3NhZ2UgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbiBvciBhbiBPYmplY3Qgd2l0aCBvbmUgb2YgJyArXHJcbiAgICAgICAgICAgICdgbmV4dGAsIGBlcnJvcmAsIGBjb21wbGV0ZWAgcHJvcGVydGllcy4nO1xyXG4gICAgICAgIHZhciBuZXh0VmFsaWRhdG9yID0gbnVsbEZ1bmN0aW9uU3BlYyh0cnVlKS52YWxpZGF0b3I7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyVmFsaWRhdG9yID0gbG9vc2VPYmplY3RTcGVjKG51bGwsIHRydWUpLnZhbGlkYXRvcjtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIGZ1bmN0aW9uIG5leHRPck9ic2VydmVyVmFsaWRhdG9yKHApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG5leHRWYWxpZGF0b3IocCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJWYWxpZGF0b3IocCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW55RGVmaW5lZCA9IGlzSnVzdERlZihwWyduZXh0J10pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXNKdXN0RGVmKHBbJ2Vycm9yJ10pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXNKdXN0RGVmKHBbJ2NvbXBsZXRlJ10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbnlEZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5leHRPck9ic2VydmVyTWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3BlY3MgPSBbXHJcbiAgICAgICAgICAgIHN0cmluZ1NwZWModHlwZVZhbGlkYXRvciksXHJcbiAgICAgICAgICAgIGxvb3NlT2JqZWN0U3BlYyhuZXh0T3JPYnNlcnZlclZhbGlkYXRvciwgdHJ1ZSksXHJcbiAgICAgICAgICAgIG51bGxGdW5jdGlvblNwZWModHJ1ZSksXHJcbiAgICAgICAgICAgIG51bGxGdW5jdGlvblNwZWModHJ1ZSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhbGlkYXRlKCdvbicsIHNwZWNzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiBtYWtlQmluZGVyKHNwZWNzKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJpbmRlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSgnb24nLCBzcGVjcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBPYnNlcnZlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFkZE9ic2VydmVyXyhvYnNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlT2JzZXJ2ZXJfKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gYmluZGVyTmV4dE9yT2JzZXJ2ZXJWYWxpZGF0b3IocCkge1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV4dE9yT2JzZXJ2ZXJNZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHRPck9ic2VydmVyVmFsaWRhdG9yKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYmluZGVyU3BlY3MgPSBbXHJcbiAgICAgICAgICAgIGxvb3NlT2JqZWN0U3BlYyhiaW5kZXJOZXh0T3JPYnNlcnZlclZhbGlkYXRvciksXHJcbiAgICAgICAgICAgIG51bGxGdW5jdGlvblNwZWModHJ1ZSksXHJcbiAgICAgICAgICAgIG51bGxGdW5jdGlvblNwZWModHJ1ZSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciB0eXBlT25seSA9ICEoaXNKdXN0RGVmKG5leHRPck9ic2VydmVyKSB8fFxyXG4gICAgICAgICAgICBpc0p1c3REZWYoZXJyb3IpIHx8XHJcbiAgICAgICAgICAgIGlzSnVzdERlZihjb21wbGV0ZWQpKTtcclxuICAgICAgICBpZiAodHlwZU9ubHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ha2VCaW5kZXIoYmluZGVyU3BlY3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ha2VCaW5kZXIobnVsbCkobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgb2JqZWN0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UsIGFuZCByZXNvbHZlcyB3aXRoIGl0cyBzbmFwc2hvdCBkYXRhXHJcbiAgICAgKiB3aGVuIHRoZSB1cGxvYWQgY29tcGxldGVzLlxyXG4gICAgICogQHBhcmFtIG9uRnVsZmlsbGVkIFRoZSBmdWxmaWxsbWVudCBjYWxsYmFjay4gUHJvbWlzZSBjaGFpbmluZyB3b3JrcyBhcyBub3JtYWwuXHJcbiAgICAgKiBAcGFyYW0gb25SZWplY3RlZCBUaGUgcmVqZWN0aW9uIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XHJcbiAgICAgICAgLy8gVGhlc2UgY2FzdHMgYXJlIG5lZWRlZCBzbyB0aGF0IFR5cGVTY3JpcHQgY2FuIGluZmVyIHRoZSB0eXBlcyBvZiB0aGVcclxuICAgICAgICAvLyByZXN1bHRpbmcgUHJvbWlzZS5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlXy50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVxdWl2YWxlbnQgdG8gY2FsbGluZyBgdGhlbihudWxsLCBvblJlamVjdGVkKWAuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gb2JzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmFkZE9ic2VydmVyXyA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyXyhvYnNlcnZlcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBvYnNlcnZlci5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXJfID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLm5vdGlmeU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmZpbmlzaFByb21pc2VfKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5zbGljZSgpO1xyXG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcl8ob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmZpbmlzaFByb21pc2VfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc29sdmVfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLnN0YXRlXykpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlNVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmModGhpcy5yZXNvbHZlXy5iaW5kKG51bGwsIHRoaXMuc25hcHNob3QpKSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5FUlJPUjpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9DYWxsID0gdGhpcy5yZWplY3RfO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKHRvQ2FsbC5iaW5kKG51bGwsIHRoaXMuZXJyb3JfKSkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlXyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdF8gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLm5vdGlmeU9ic2VydmVyXyA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBleHRlcm5hbFN0YXRlID0gdGFza1N0YXRlRnJvbUludGVybmFsVGFza1N0YXRlKHRoaXMuc3RhdGVfKTtcclxuICAgICAgICBzd2l0Y2ggKGV4dGVybmFsU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuUlVOTklORzpcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuUEFVU0VEOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyhvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIsIHRoaXMuc25hcHNob3QpKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlNVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyhvYnNlcnZlci5jb21wbGV0ZS5iaW5kKG9ic2VydmVyKSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5DQU5DRUxFRDpcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuRVJST1I6XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyhvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyLCB0aGlzLmVycm9yXykpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciwgdGhpcy5lcnJvcl8pKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlc3VtZXMgYSBwYXVzZWQgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIGN1cnJlbnRseSBydW5uaW5nIG9yIGZhaWxlZCB0YXNrLlxyXG4gICAgICogQHJldHVybiBUcnVlIGlmIHRoZSBvcGVyYXRpb24gdG9vayBlZmZlY3QsIGZhbHNlIGlmIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgncmVzdW1lJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORztcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUGF1c2VzIGEgY3VycmVudGx5IHJ1bm5pbmcgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIHBhdXNlZCBvciBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIHRvb2sgZWZmZWN0LCBmYWxzZSBpZiBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgncGF1c2UnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORztcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VscyBhIGN1cnJlbnRseSBydW5uaW5nIG9yIHBhdXNlZCB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgY29tcGxldGUgb3JcclxuICAgICAqIGZhaWxlZCB0YXNrLlxyXG4gICAgICogQHJldHVybiBUcnVlIGlmIHRoZSBvcGVyYXRpb24gdG9vayBlZmZlY3QsIGZhbHNlIGlmIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnY2FuY2VsJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkc7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVcGxvYWRUYXNrO1xyXG59KCkpO1xyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGVzIG1ldGhvZHMgdG8gaW50ZXJhY3Qgd2l0aCBhIGJ1Y2tldCBpbiB0aGUgRmlyZWJhc2UgU3RvcmFnZSBzZXJ2aWNlLlxyXG4gKiBAcGFyYW0gbG9jYXRpb24gQW4gZmJzLmxvY2F0aW9uLCBvciB0aGUgVVJMIGF0XHJcbiAqICAgICB3aGljaCB0byBiYXNlIHRoaXMgb2JqZWN0LCBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtczpcclxuICogICAgICAgICBnczovLzxidWNrZXQ+LzxvYmplY3QtcGF0aD5cclxuICogICAgICAgICBodHRwW3NdOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL1xyXG4gKiAgICAgICAgICAgICAgICAgICAgIDxhcGktdmVyc2lvbj4vYi88YnVja2V0Pi9vLzxvYmplY3QtcGF0aD5cclxuICogICAgIEFueSBxdWVyeSBvciBmcmFnbWVudCBzdHJpbmdzIHdpbGwgYmUgaWdub3JlZCBpbiB0aGUgaHR0cFtzXVxyXG4gKiAgICAgZm9ybWF0LiBJZiBubyB2YWx1ZSBpcyBwYXNzZWQsIHRoZSBzdG9yYWdlIG9iamVjdCB3aWxsIHVzZSBhIFVSTCBiYXNlZCBvblxyXG4gKiAgICAgdGhlIHByb2plY3QgSUQgb2YgdGhlIGJhc2UgZmlyZWJhc2UuQXBwIGluc3RhbmNlLlxyXG4gKi9cclxudmFyIFJlZmVyZW5jZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZShzZXJ2aWNlLCBsb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IExvY2F0aW9uLm1ha2VGcm9tVXJsKGxvY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gVGhlIFVSTCBmb3IgdGhlIGJ1Y2tldCBhbmQgcGF0aCB0aGlzIG9iamVjdCByZWZlcmVuY2VzLFxyXG4gICAgICogICAgIGluIHRoZSBmb3JtIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3RvU3RyaW5nJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuICdnczovLycgKyB0aGlzLmxvY2F0aW9uLmJ1Y2tldCArICcvJyArIHRoaXMubG9jYXRpb24ucGF0aDtcclxuICAgIH07XHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLm5ld1JlZiA9IGZ1bmN0aW9uIChzZXJ2aWNlLCBsb2NhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHNlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgIH07XHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLm1hcHBpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRNYXBwaW5ncygpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiBBIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IG9idGFpbmVkIGJ5XHJcbiAgICAgKiAgICAgYXBwZW5kaW5nIGNoaWxkUGF0aCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZSwgYmVnaW5uaW5nLCBvciB0cmFpbGluZ1xyXG4gICAgICogICAgIHNsYXNoZXMuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUuY2hpbGQgPSBmdW5jdGlvbiAoY2hpbGRQYXRoKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ2NoaWxkJywgW3N0cmluZ1NwZWMoKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIG5ld1BhdGggPSBjaGlsZCh0aGlzLmxvY2F0aW9uLnBhdGgsIGNoaWxkUGF0aCk7XHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMubG9jYXRpb24uYnVja2V0LCBuZXdQYXRoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXdSZWYodGhpcy5zZXJ2aWNlLCBsb2NhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJuIEEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgb2YgdGhlXHJcbiAgICAgICAgICogICAgIGN1cnJlbnQgb2JqZWN0LCBvciBudWxsIGlmIHRoZSBjdXJyZW50IG9iamVjdCBpcyB0aGUgcm9vdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1BhdGggPSBwYXJlbnQodGhpcy5sb2NhdGlvbi5wYXRoKTtcclxuICAgICAgICAgICAgaWYgKG5ld1BhdGggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbih0aGlzLmxvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1JlZih0aGlzLnNlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJyb290XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJuIEFuIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBvZiB0aGlzXHJcbiAgICAgICAgICogICAgIG9iamVjdCdzIGJ1Y2tldC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMubG9jYXRpb24uYnVja2V0LCAnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1JlZih0aGlzLnNlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJidWNrZXRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5idWNrZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwiZnVsbFBhdGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5wYXRoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWZlcmVuY2UucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGFzdENvbXBvbmVudCh0aGlzLmxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWZlcmVuY2UucHJvdG90eXBlLCBcInN0b3JhZ2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyBhIGJsb2IgdG8gdGhpcyBvYmplY3QncyBsb2NhdGlvbi5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBibG9iIHRvIHVwbG9hZC5cclxuICAgICAqIEByZXR1cm4gQW4gVXBsb2FkVGFzayB0aGF0IGxldHMgeW91IGNvbnRyb2wgYW5kXHJcbiAgICAgKiAgICAgb2JzZXJ2ZSB0aGUgdXBsb2FkLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChkYXRhLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIGlmIChtZXRhZGF0YSA9PT0gdm9pZCAwKSB7IG1ldGFkYXRhID0gbnVsbDsgfVxyXG4gICAgICAgIHZhbGlkYXRlKCdwdXQnLCBbdXBsb2FkRGF0YVNwZWMoKSwgbWV0YWRhdGFTcGVjKHRydWUpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygncHV0Jyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcGxvYWRUYXNrKHRoaXMsIHRoaXMuc2VydmljZSwgdGhpcy5sb2NhdGlvbiwgdGhpcy5tYXBwaW5ncygpLCBuZXcgRmJzQmxvYihkYXRhKSwgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyBhIHN0cmluZyB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdG8gdXBsb2FkLlxyXG4gICAgICogQHBhcmFtIGZvcm1hdCBUaGUgZm9ybWF0IG9mIHRoZSBzdHJpbmcgdG8gdXBsb2FkLlxyXG4gICAgICogQHJldHVybiBBbiBVcGxvYWRUYXNrIHRoYXQgbGV0cyB5b3UgY29udHJvbCBhbmRcclxuICAgICAqICAgICBvYnNlcnZlIHRoZSB1cGxvYWQuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUucHV0U3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXQsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IFN0cmluZ0Zvcm1hdC5SQVc7IH1cclxuICAgICAgICB2YWxpZGF0ZSgncHV0U3RyaW5nJywgW3N0cmluZ1NwZWMoKSwgc3RyaW5nU3BlYyhmb3JtYXRWYWxpZGF0b3IsIHRydWUpLCBtZXRhZGF0YVNwZWModHJ1ZSldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMudGhyb3dJZlJvb3RfKCdwdXRTdHJpbmcnKTtcclxuICAgICAgICB2YXIgZGF0YSA9IGRhdGFGcm9tU3RyaW5nKGZvcm1hdCwgdmFsdWUpO1xyXG4gICAgICAgIHZhciBtZXRhZGF0YUNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIGlmICghaXNEZWYobWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSkgJiZcclxuICAgICAgICAgICAgaXNEZWYoZGF0YS5jb250ZW50VHlwZSkpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSA9IGRhdGEuY29udGVudFR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVXBsb2FkVGFzayh0aGlzLCB0aGlzLnNlcnZpY2UsIHRoaXMubG9jYXRpb24sIHRoaXMubWFwcGluZ3MoKSwgbmV3IEZic0Jsb2IoZGF0YS5kYXRhLCB0cnVlKSwgbWV0YWRhdGFDbG9uZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIHRoZSBvYmplY3QgYXQgdGhpcyBsb2NhdGlvbi5cclxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGRlbGV0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhbGlkYXRlKCdkZWxldGUnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygnZGVsZXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZGVsZXRlT2JqZWN0KF90aGlzLnNlcnZpY2UsIF90aGlzLmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNlcnZpY2UubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbikuZ2V0UHJvbWlzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBhbGwgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXHJcbiAgICAgKiBubyBtb3JlIHJlc3VsdHMuIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gc2l6ZSBpcyAxMDAwLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcclxuICAgICAqIG9wZXJhdGlvbiBpcyBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqIFdhcm5pbmc6IGxpc3RBbGwgbWF5IHBvdGVudGlhbGx5IGNvbnN1bWUgdG9vIG1hbnkgcmVzb3VyY2VzIGlmIHRoZXJlIGFyZVxyXG4gICAgICogdG9vIG1hbnkgcmVzdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYWxsIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMgdW5kZXJcclxuICAgICAqICAgICAgdGhlIGN1cnJlbnQgc3RvcmFnZSByZWZlcmVuY2UuIGBwcmVmaXhlc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0b1xyXG4gICAgICogICAgICBzdWItZGlyZWN0b3JpZXMgYW5kIGBpdGVtc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXNcclxuICAgICAqICAgICAgZm9sZGVyLiBgbmV4dFBhZ2VUb2tlbmAgaXMgbmV2ZXIgcmV0dXJuZWQuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubGlzdEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnbGlzdEFsbCcsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBhY2N1bXVsYXRvciA9IHtcclxuICAgICAgICAgICAgcHJlZml4ZXM6IFtdLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RBbGxIZWxwZXIoYWNjdW11bGF0b3IpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYWNjdW11bGF0b3I7IH0pO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubGlzdEFsbEhlbHBlciA9IGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgcGFnZVRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0LCBuZXh0UGFnZTtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4UmVzdWx0cyBpcyAxMDAwIGJ5IGRlZmF1bHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVG9rZW46IHBhZ2VUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxpc3Qob3B0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gYWNjdW11bGF0b3IucHJlZml4ZXMpLnB1c2guYXBwbHkoX2EsIG5leHRQYWdlLnByZWZpeGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gYWNjdW11bGF0b3IuaXRlbXMpLnB1c2guYXBwbHkoX2IsIG5leHRQYWdlLml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobmV4dFBhZ2UubmV4dFBhZ2VUb2tlbiAhPSBudWxsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubGlzdEFsbEhlbHBlcihhY2N1bXVsYXRvciwgbmV4dFBhZ2UubmV4dFBhZ2VUb2tlbildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxyXG4gICAgICpcclxuICAgICAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xyXG4gICAgICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuXHJcbiAgICAgKiBSZWZlciB0byBHQ1MncyBMaXN0IEFQSSBpZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlLlxyXG4gICAgICpcclxuICAgICAqIFRvIGFkaGVyZSB0byBGaXJlYmFzZSBSdWxlcydzIFNlbWFudGljcywgRmlyZWJhc2UgU3RvcmFnZSBkb2VzIG5vdFxyXG4gICAgICogc3VwcG9ydCBvYmplY3RzIHdob3NlIHBhdGhzIGVuZCB3aXRoIFwiL1wiIG9yIGNvbnRhaW4gdHdvIGNvbnNlY3V0aXZlXHJcbiAgICAgKiBcIi9cInMuIEZpcmViYXNlIFN0b3JhZ2UgTGlzdCBBUEkgd2lsbCBmaWx0ZXIgdGhlc2UgdW5zdXBwb3J0ZWQgb2JqZWN0cy5cclxuICAgICAqIGxpc3QoKSBtYXkgZmFpbCBpZiB0aGVyZSBhcmUgdG9vIG1hbnkgdW5zdXBwb3J0ZWQgb2JqZWN0cyBpbiB0aGUgYnVja2V0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFNlZSBMaXN0T3B0aW9ucyBmb3IgZGV0YWlscy5cclxuICAgICAqIEByZXR1cm4gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaXRlbXMgYW5kIHByZWZpeGVzLlxyXG4gICAgICogICAgICBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gc3ViLWZvbGRlcnMgYW5kIGBpdGVtc2BcclxuICAgICAqICAgICAgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXMgZm9sZGVyLiBgbmV4dFBhZ2VUb2tlbmBcclxuICAgICAqICAgICAgY2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSByZXN0IG9mIHRoZSByZXN1bHRzLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhbGlkYXRlKCdsaXN0JywgW2xpc3RPcHRpb25TcGVjKHRydWUpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIG9wID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gbGlzdChzZWxmLnNlcnZpY2UsIHNlbGYubG9jYXRpb24sIFxyXG4gICAgICAgICAgICAvKmRlbGltaXRlcj0gKi8gJy8nLCBvcC5wYWdlVG9rZW4sIG9wLm1heFJlc3VsdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5zZXJ2aWNlLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pLmdldFByb21pc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqICAgICBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuIElmIHRoaXNcclxuICAgICAqICAgICBvYmplY3QgZG9lc24ndCBleGlzdCBvciBtZXRhZGF0YSBjYW5ub3QgYmUgcmV0cmVpdmVkLCB0aGUgcHJvbWlzZSBpc1xyXG4gICAgICogICAgIHJlamVjdGVkLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLmdldE1ldGFkYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFsaWRhdGUoJ2dldE1ldGFkYXRhJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ2dldE1ldGFkYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZ2V0TWV0YWRhdGEoX3RoaXMuc2VydmljZSwgX3RoaXMubG9jYXRpb24sIF90aGlzLm1hcHBpbmdzKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2VydmljZS5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKS5nZXRQcm9taXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGEgVGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhlIG9iamVjdC5cclxuICAgICAqICAgICBPbmx5IHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBleHBsaWNpdGx5IHNldCB3aWxsIGJlIGNoYW5nZWQuIEV4cGxpY2l0bHlcclxuICAgICAqICAgICBzZXR0aW5nIGEgdmFsdWUgdG8gbnVsbCB3aWxsIHJlbW92ZSB0aGUgbWV0YWRhdGEuXHJcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzXHJcbiAgICAgKiAgICAgd2l0aCB0aGUgbmV3IG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAqICAgICBAc2VlIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UucHJvdG90eXBlLmdldE1ldGFkYXRhXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudXBkYXRlTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhbGlkYXRlKCd1cGRhdGVNZXRhZGF0YScsIFttZXRhZGF0YVNwZWMoKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ3VwZGF0ZU1ldGFkYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gdXBkYXRlTWV0YWRhdGEoX3RoaXMuc2VydmljZSwgX3RoaXMubG9jYXRpb24sIG1ldGFkYXRhLCBfdGhpcy5tYXBwaW5ncygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNlcnZpY2UubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbikuZ2V0UHJvbWlzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZFxyXG4gICAgICogICAgIFVSTCBmb3IgdGhpcyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUuZ2V0RG93bmxvYWRVUkwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YWxpZGF0ZSgnZ2V0RG93bmxvYWRVUkwnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygnZ2V0RG93bmxvYWRVUkwnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBnZXREb3dubG9hZFVybChfdGhpcy5zZXJ2aWNlLCBfdGhpcy5sb2NhdGlvbiwgX3RoaXMubWFwcGluZ3MoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbilcclxuICAgICAgICAgICAgICAgIC5nZXRQcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBub0Rvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLnRocm93SWZSb290XyA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24ucGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZFJvb3RPcGVyYXRpb24obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWZlcmVuY2U7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQSByZXF1ZXN0IHdob3NlIHByb21pc2UgYWx3YXlzIGZhaWxzLlxyXG4gKiBAc3RydWN0XHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqL1xyXG52YXIgRmFpbFJlcXVlc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGYWlsUmVxdWVzdChlcnJvcikge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZV8gPSBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIEZhaWxSZXF1ZXN0LnByb3RvdHlwZS5nZXRQcm9taXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VfO1xyXG4gICAgfTtcclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgRmFpbFJlcXVlc3QucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uIChfYXBwRGVsZXRlKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZhaWxSZXF1ZXN0O1xyXG59KCkpO1xyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBwYXJhbSBmIE1heSBiZSBpbnZva2VkXHJcbiAqICAgICBiZWZvcmUgdGhlIGZ1bmN0aW9uIHJldHVybnMuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBHZXQgYWxsIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAgICAgcGFzc2VkIHRvIGYsIGluY2x1ZGluZyB0aGUgaW5pdGlhbCBib29sZWFuLlxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnQoZiwgXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmNhbGxiYWNrLCB0aW1lb3V0KSB7XHJcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogbWFrZSB0aGlzIGNvZGUgY2xlYW5lciAocHJvYmFibHkgcmVmYWN0b3IgaW50byBhbiBhY3R1YWxcclxuICAgIC8vIHR5cGUgaW5zdGVhZCBvZiBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyB3aXRoIHN0YXRlIHNoYXJlZCBpbiB0aGUgY2xvc3VyZSlcclxuICAgIHZhciB3YWl0U2Vjb25kcyA9IDE7XHJcbiAgICAvLyBXb3VsZCB0eXBlIHRoaXMgYXMgXCJudW1iZXJcIiBidXQgdGhhdCBkb2Vzbid0IHdvcmsgZm9yIE5vZGUgc28gwq9cXF8o44OEKV8vwq9cclxuICAgIC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gZXhjbHVkZSBOb2RlIHR5cGUgZGVmaW5pdGlvbiBmb3Igc3RvcmFnZSBiZWNhdXNlIHN0b3JhZ2Ugb25seSB3b3JrcyBpbiBicm93c2VyXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgdmFyIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICB2YXIgaGl0VGltZW91dCA9IGZhbHNlO1xyXG4gICAgdmFyIGNhbmNlbFN0YXRlID0gMDtcclxuICAgIGZ1bmN0aW9uIGNhbmNlbGVkKCkge1xyXG4gICAgICAgIHJldHVybiBjYW5jZWxTdGF0ZSA9PT0gMjtcclxuICAgIH1cclxuICAgIHZhciB0cmlnZ2VyZWRDYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgLy8gVE9ETzogVGhpcyBkaXNhYmxlIGNhbiBiZSByZW1vdmVkIGFuZCB0aGUgJ2lnbm9yZVJlc3RBcmdzJyBvcHRpb24gYWRkZWQgdG9cclxuICAgIC8vIHRoZSBuby1leHBsaWNpdC1hbnkgcnVsZSB3aGVuIEVTbGludCByZWxlYXNlcyBpdC5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdHJpZ2dlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdHJpZ2dlcmVkQ2FsbGJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxsV2l0aERlbGF5KG1pbGxpcykge1xyXG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICBmKGhhbmRsZXIsIGNhbmNlbGVkKCkpO1xyXG4gICAgICAgIH0sIG1pbGxpcyk7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiBUaGlzIGRpc2FibGUgY2FuIGJlIHJlbW92ZWQgYW5kIHRoZSAnaWdub3JlUmVzdEFyZ3MnIG9wdGlvbiBhZGRlZCB0b1xyXG4gICAgLy8gdGhlIG5vLWV4cGxpY2l0LWFueSBydWxlIHdoZW4gRVNsaW50IHJlbGVhc2VzIGl0LlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoc3VjY2Vzcykge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyaWdnZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckNhbGxiYWNrLmNhbGwuYXBwbHkodHJpZ2dlckNhbGxiYWNrLCBfX3NwcmVhZEFycmF5cyhbbnVsbCwgc3VjY2Vzc10sIGFyZ3MpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXVzdFN0b3AgPSBjYW5jZWxlZCgpIHx8IGhpdFRpbWVvdXQ7XHJcbiAgICAgICAgaWYgKG11c3RTdG9wKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJDYWxsYmFjay5jYWxsLmFwcGx5KHRyaWdnZXJDYWxsYmFjaywgX19zcHJlYWRBcnJheXMoW251bGwsIHN1Y2Nlc3NdLCBhcmdzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdhaXRTZWNvbmRzIDwgNjQpIHtcclxuICAgICAgICAgICAgLyogVE9ETyhhbmR5c290byk6IGRvbid0IGJhY2sgb2ZmIHNvIHF1aWNrbHkgaWYgd2Uga25vdyB3ZSdyZSBvZmZsaW5lLiAqL1xyXG4gICAgICAgICAgICB3YWl0U2Vjb25kcyAqPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd2FpdE1pbGxpcztcclxuICAgICAgICBpZiAoY2FuY2VsU3RhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgY2FuY2VsU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICB3YWl0TWlsbGlzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdhaXRNaWxsaXMgPSAod2FpdFNlY29uZHMgKyBNYXRoLnJhbmRvbSgpKSAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxXaXRoRGVsYXkod2FpdE1pbGxpcyk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gc3RvcCh3YXNUaW1lb3V0KSB7XHJcbiAgICAgICAgaWYgKHN0b3BwZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodHJpZ2dlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZW91dElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghd2FzVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICBjYWxsV2l0aERlbGF5KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF3YXNUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWxsV2l0aERlbGF5KDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaGl0VGltZW91dCA9IHRydWU7XHJcbiAgICAgICAgc3RvcCh0cnVlKTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgcmV0dXJuIHN0b3A7XHJcbn1cclxuLyoqXHJcbiAqIFN0b3BzIHRoZSByZXRyeSBsb29wIGZyb20gcmVwZWF0aW5nLlxyXG4gKiBJZiB0aGUgZnVuY3Rpb24gaXMgY3VycmVudGx5IFwiaW4gYmV0d2VlblwiIHJldHJpZXMsIGl0IGlzIGludm9rZWQgaW1tZWRpYXRlbHlcclxuICogd2l0aCB0aGUgc2Vjb25kIHBhcmFtZXRlciBhcyBcInRydWVcIi4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGludm9rZWQgb25jZSBtb3JlXHJcbiAqIGFmdGVyIHRoZSBjdXJyZW50IGludm9jYXRpb24gZmluaXNoZXMgaWZmIHRoZSBjdXJyZW50IGludm9jYXRpb24gd291bGQgaGF2ZVxyXG4gKiB0cmlnZ2VyZWQgYW5vdGhlciByZXRyeS5cclxuICovXHJcbmZ1bmN0aW9uIHN0b3AoaWQpIHtcclxuICAgIGlkKGZhbHNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICogQHRlbXBsYXRlIFRcclxuICovXHJcbnZhciBOZXR3b3JrUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ldHdvcmtSZXF1ZXN0KHVybCwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBzdWNjZXNzQ29kZXMsIGFkZGl0aW9uYWxSZXRyeUNvZGVzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgdGltZW91dCwgcHJvZ3Jlc3NDYWxsYmFjaywgcG9vbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nWGhyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iYWNrb2ZmSWRfID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhbmNlbGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwRGVsZXRlXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXJsXyA9IHVybDtcclxuICAgICAgICB0aGlzLm1ldGhvZF8gPSBtZXRob2Q7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzXyA9IGhlYWRlcnM7XHJcbiAgICAgICAgdGhpcy5ib2R5XyA9IGJvZHk7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzQ29kZXNfID0gc3VjY2Vzc0NvZGVzLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18gPSBhZGRpdGlvbmFsUmV0cnlDb2Rlcy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrXyA9IGVycm9yQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrXyA9IHByb2dyZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0XyA9IHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5wb29sXyA9IHBvb2w7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlXyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVzb2x2ZV8gPSByZXNvbHZlO1xyXG4gICAgICAgICAgICBfdGhpcy5yZWplY3RfID0gcmVqZWN0O1xyXG4gICAgICAgICAgICBfdGhpcy5zdGFydF8oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWN0dWFsbHkgc3RhcnRzIHRoZSByZXRyeSBsb29wLlxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuc3RhcnRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiBkb1RoZVJlcXVlc3QoYmFja29mZkNhbGxiYWNrLCBjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICBpZiAoY2FuY2VsZWQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tvZmZDYWxsYmFjayhmYWxzZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoZmFsc2UsIG51bGwsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgeGhyID0gc2VsZi5wb29sXy5jcmVhdGVYaHJJbygpO1xyXG4gICAgICAgICAgICBzZWxmLnBlbmRpbmdYaHJfID0geGhyO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2FkZWQgPSBwcm9ncmVzc0V2ZW50LmxvYWRlZDtcclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHByb2dyZXNzRXZlbnQubGVuZ3RoQ29tcHV0YWJsZSA/IHByb2dyZXNzRXZlbnQudG90YWwgOiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9ncmVzc0NhbGxiYWNrXyhsb2FkZWQsIHRvdGFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5wcm9ncmVzc0NhbGxiYWNrXyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgeGhyLmFkZFVwbG9hZFByb2dyZXNzTGlzdGVuZXIocHJvZ3Jlc3NMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICB4aHJcclxuICAgICAgICAgICAgICAgIC5zZW5kKHNlbGYudXJsXywgc2VsZi5tZXRob2RfLCBzZWxmLmJvZHlfLCBzZWxmLmhlYWRlcnNfKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvZ3Jlc3NDYWxsYmFja18gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIucmVtb3ZlVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1hocl8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgeGhyID0geGhyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhpdFNlcnZlciA9IHhoci5nZXRFcnJvckNvZGUoKSA9PT0gRXJyb3JDb2RlLk5PX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5nZXRTdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghaGl0U2VydmVyIHx8IHNlbGYuaXNSZXRyeVN0YXR1c0NvZGVfKHN0YXR1cykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2FzQ2FuY2VsZWQgPSB4aHIuZ2V0RXJyb3JDb2RlKCkgPT09IEVycm9yQ29kZS5BQk9SVDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2soZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB3YXNDYW5jZWxlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzQ29kZSA9IHNlbGYuc3VjY2Vzc0NvZGVzXy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgYmFja29mZkNhbGxiYWNrKHRydWUsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKHN1Y2Nlc3NDb2RlLCB4aHIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSByZXF1ZXN0V2VudFRocm91Z2ggVHJ1ZSBpZiB0aGUgcmVxdWVzdCBldmVudHVhbGx5IHdlbnRcclxuICAgICAgICAgKiAgICAgdGhyb3VnaCwgZmFsc2UgaWYgaXQgaGl0IHRoZSByZXRyeSBsaW1pdCBvciB3YXMgY2FuY2VsZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYmFja29mZkRvbmUocmVxdWVzdFdlbnRUaHJvdWdoLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgdmFyIHJlc29sdmUgPSBzZWxmLnJlc29sdmVfO1xyXG4gICAgICAgICAgICB2YXIgcmVqZWN0ID0gc2VsZi5yZWplY3RfO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gc3RhdHVzLnhocjtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cy53YXNTdWNjZXNzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gc2VsZi5jYWxsYmFja18oeGhyLCB4aHIuZ2V0UmVzcG9uc2VUZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0p1c3REZWYocmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHVua25vd24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnIuc2V0U2VydmVyUmVzcG9uc2VQcm9wKHhoci5nZXRSZXNwb25zZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXJyb3JDYWxsYmFja18pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNlbGYuZXJyb3JDYWxsYmFja18oeGhyLCBlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuY2FuY2VsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHNlbGYuYXBwRGVsZXRlXyA/IGFwcERlbGV0ZWQoKSA6IGNhbmNlbGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJldHJ5TGltaXRFeGNlZWRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuY2VsZWRfKSB7XHJcbiAgICAgICAgICAgIGJhY2tvZmZEb25lKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmSWRfID0gc3RhcnQoZG9UaGVSZXF1ZXN0LCBiYWNrb2ZmRG9uZSwgdGhpcy50aW1lb3V0Xyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgTmV0d29ya1JlcXVlc3QucHJvdG90eXBlLmdldFByb21pc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKGFwcERlbGV0ZSkge1xyXG4gICAgICAgIHRoaXMuY2FuY2VsZWRfID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcERlbGV0ZV8gPSBhcHBEZWxldGUgfHwgZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja29mZklkXyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdG9wKHRoaXMuYmFja29mZklkXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdYaHJfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1hocl8uYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTmV0d29ya1JlcXVlc3QucHJvdG90eXBlLmlzUmV0cnlTdGF0dXNDb2RlXyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAvLyBUaGUgY29kZXMgZm9yIHdoaWNoIHRvIHJldHJ5IGNhbWUgZnJvbSB0aGlzIHBhZ2U6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL3N0b3JhZ2UvZG9jcy9leHBvbmVudGlhbC1iYWNrb2ZmXHJcbiAgICAgICAgdmFyIGlzRml2ZUh1bmRyZWRDb2RlID0gc3RhdHVzID49IDUwMCAmJiBzdGF0dXMgPCA2MDA7XHJcbiAgICAgICAgdmFyIGV4dHJhUmV0cnlDb2RlcyA9IFtcclxuICAgICAgICAgICAgLy8gUmVxdWVzdCBUaW1lb3V0OiB3ZWIgc2VydmVyIGRpZG4ndCByZWNlaXZlIGZ1bGwgcmVxdWVzdCBpbiB0aW1lLlxyXG4gICAgICAgICAgICA0MDgsXHJcbiAgICAgICAgICAgIC8vIFRvbyBNYW55IFJlcXVlc3RzOiB5b3UncmUgZ2V0dGluZyByYXRlLWxpbWl0ZWQsIGJhc2ljYWxseS5cclxuICAgICAgICAgICAgNDI5XHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgaXNFeHRyYVJldHJ5Q29kZSA9IGV4dHJhUmV0cnlDb2Rlcy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xyXG4gICAgICAgIHZhciBpc1JlcXVlc3RTcGVjaWZpY1JldHJ5Q29kZSA9IHRoaXMuYWRkaXRpb25hbFJldHJ5Q29kZXNfLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgcmV0dXJuIGlzRml2ZUh1bmRyZWRDb2RlIHx8IGlzRXh0cmFSZXRyeUNvZGUgfHwgaXNSZXF1ZXN0U3BlY2lmaWNSZXRyeUNvZGU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5ldHdvcmtSZXF1ZXN0O1xyXG59KCkpO1xyXG4vKipcclxuICogQSBjb2xsZWN0aW9uIG9mIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXN1bHQgb2YgYSBuZXR3b3JrIHJlcXVlc3QuXHJcbiAqIEBwYXJhbSBvcHRfY2FuY2VsZWQgRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBSZXF1ZXN0RW5kU3RhdHVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVxdWVzdEVuZFN0YXR1cyh3YXNTdWNjZXNzQ29kZSwgeGhyLCBjYW5jZWxlZCkge1xyXG4gICAgICAgIHRoaXMud2FzU3VjY2Vzc0NvZGUgPSB3YXNTdWNjZXNzQ29kZTtcclxuICAgICAgICB0aGlzLnhociA9IHhocjtcclxuICAgICAgICB0aGlzLmNhbmNlbGVkID0gISFjYW5jZWxlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXF1ZXN0RW5kU3RhdHVzO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBhZGRBdXRoSGVhZGVyXyhoZWFkZXJzLCBhdXRoVG9rZW4pIHtcclxuICAgIGlmIChhdXRoVG9rZW4gIT09IG51bGwgJiYgYXV0aFRva2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnRmlyZWJhc2UgJyArIGF1dGhUb2tlbjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzKSB7XHJcbiAgICB2YXIgdmVyc2lvbiA9IHR5cGVvZiBmaXJlYmFzZSAhPT0gJ3VuZGVmaW5lZCcgPyBmaXJlYmFzZS5TREtfVkVSU0lPTiA6ICdBcHBNYW5hZ2VyJztcclxuICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtU3RvcmFnZS1WZXJzaW9uJ10gPSAnd2VianMvJyArIHZlcnNpb247XHJcbn1cclxuZnVuY3Rpb24gYWRkR21waWRIZWFkZXJfKGhlYWRlcnMsIGFwcElkKSB7XHJcbiAgICBpZiAoYXBwSWQpIHtcclxuICAgICAgICBoZWFkZXJzWydYLUZpcmViYXNlLUdNUElEJ10gPSBhcHBJZDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhcHBJZCwgYXV0aFRva2VuLCBwb29sKSB7XHJcbiAgICB2YXIgcXVlcnlQYXJ0ID0gbWFrZVF1ZXJ5U3RyaW5nKHJlcXVlc3RJbmZvLnVybFBhcmFtcyk7XHJcbiAgICB2YXIgdXJsID0gcmVxdWVzdEluZm8udXJsICsgcXVlcnlQYXJ0O1xyXG4gICAgdmFyIGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0SW5mby5oZWFkZXJzKTtcclxuICAgIGFkZEdtcGlkSGVhZGVyXyhoZWFkZXJzLCBhcHBJZCk7XHJcbiAgICBhZGRBdXRoSGVhZGVyXyhoZWFkZXJzLCBhdXRoVG9rZW4pO1xyXG4gICAgYWRkVmVyc2lvbkhlYWRlcl8oaGVhZGVycyk7XHJcbiAgICByZXR1cm4gbmV3IE5ldHdvcmtSZXF1ZXN0KHVybCwgcmVxdWVzdEluZm8ubWV0aG9kLCBoZWFkZXJzLCByZXF1ZXN0SW5mby5ib2R5LCByZXF1ZXN0SW5mby5zdWNjZXNzQ29kZXMsIHJlcXVlc3RJbmZvLmFkZGl0aW9uYWxSZXRyeUNvZGVzLCByZXF1ZXN0SW5mby5oYW5kbGVyLCByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIsIHJlcXVlc3RJbmZvLnRpbWVvdXQsIHJlcXVlc3RJbmZvLnByb2dyZXNzQ2FsbGJhY2ssIHBvb2wpO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQSBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBpbnN0YW5jZXMuXHJcbiAqIEBwYXJhbSBvcHRfdXJsIGdzOi8vIHVybCB0byBhIGN1c3RvbSBTdG9yYWdlIEJ1Y2tldFxyXG4gKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgU3RvcmFnZVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdG9yYWdlU2VydmljZShhcHAsIGF1dGhQcm92aWRlciwgcG9vbCwgdXJsKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMuYnVja2V0XyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hcHBJZF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlZF8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcF8gPSBhcHA7XHJcbiAgICAgICAgdGhpcy5hdXRoUHJvdmlkZXJfID0gYXV0aFByb3ZpZGVyO1xyXG4gICAgICAgIHRoaXMubWF4T3BlcmF0aW9uUmV0cnlUaW1lXyA9IERFRkFVTFRfTUFYX09QRVJBVElPTl9SRVRSWV9USU1FO1xyXG4gICAgICAgIHRoaXMubWF4VXBsb2FkUmV0cnlUaW1lXyA9IERFRkFVTFRfTUFYX1VQTE9BRF9SRVRSWV9USU1FO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdHNfID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMucG9vbF8gPSBwb29sO1xyXG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1Y2tldF8gPSBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWModXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVja2V0XyA9IFN0b3JhZ2VTZXJ2aWNlLmV4dHJhY3RCdWNrZXRfKChfYSA9IHRoaXMuYXBwXykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmludGVybmFsc18gPSBuZXcgU2VydmljZUludGVybmFscyh0aGlzKTtcclxuICAgIH1cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLmV4dHJhY3RCdWNrZXRfID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBidWNrZXRTdHJpbmcgPSBjb25maWcgPT09IG51bGwgfHwgY29uZmlnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25maWdbQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWV07XHJcbiAgICAgICAgaWYgKGJ1Y2tldFN0cmluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKGJ1Y2tldFN0cmluZyk7XHJcbiAgICB9O1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmdldEF1dGhUb2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhdXRoLCB0b2tlbkRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGggPSB0aGlzLmF1dGhQcm92aWRlcl8uZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXV0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF1dGguZ2V0VG9rZW4oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkRhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbkRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0b2tlbkRhdGEuYWNjZXNzVG9rZW5dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHJ1bm5pbmcgcmVxdWVzdHMgYW5kIHByZXZlbnQgbW9yZSBmcm9tIGJlaW5nIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVBcHAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkXyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHBfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RzXy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1ZXN0KSB7IHJldHVybiByZXF1ZXN0LmNhbmNlbCgpOyB9KTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RzXy5jbGVhcigpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIG9iamVjdCByZWZlcmVuY2luZyB0aGlzIFN0b3JhZ2VTZXJ2aWNlXHJcbiAgICAgKiBhdCB0aGUgZ2l2ZW4gTG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbG9jIFRoZSBMb2NhdGlvbi5cclxuICAgICAqIEByZXR1cm4gQSBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlLlxyXG4gICAgICovXHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUubWFrZVN0b3JhZ2VSZWZlcmVuY2UgPSBmdW5jdGlvbiAobG9jKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UodGhpcywgbG9jKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUubWFrZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxdWVzdEluZm8sIGF1dGhUb2tlbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZWRfKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0XzEgPSBtYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgdGhpcy5hcHBJZF8sIGF1dGhUb2tlbiwgdGhpcy5wb29sXyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdHNfLmFkZChyZXF1ZXN0XzEpO1xyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IHJlbW92ZXMgaXRzZWxmIGZyb20gc2V0IHdoZW4gY29tcGxldGUuXHJcbiAgICAgICAgICAgIHJlcXVlc3RfMS5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZXF1ZXN0c18uZGVsZXRlKHJlcXVlc3RfMSk7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlcXVlc3RzXy5kZWxldGUocmVxdWVzdF8xKTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0XzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZhaWxSZXF1ZXN0KGFwcERlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UgZm9yIHRoZSBnaXZlbiBwYXRoIGluIHRoZSBkZWZhdWx0XHJcbiAgICAgKiBidWNrZXQuXHJcbiAgICAgKi9cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRvcihwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdQYXRoIGlzIG5vdCBhIHN0cmluZy4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgvXltBLVphLXpdKzpcXC9cXC8vLnRlc3QocGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBjaGlsZCBwYXRoIGJ1dCBnb3QgYSBVUkwsIHVzZSByZWZGcm9tVVJMIGluc3RlYWQuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YWxpZGF0ZSgncmVmJywgW3N0cmluZ1NwZWModmFsaWRhdG9yLCB0cnVlKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVja2V0XyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gU3RvcmFnZSBCdWNrZXQgZGVmaW5lZCBpbiBGaXJlYmFzZSBPcHRpb25zLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVmID0gbmV3IFJlZmVyZW5jZSh0aGlzLCB0aGlzLmJ1Y2tldF8pO1xyXG4gICAgICAgIGlmIChwYXRoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZi5jaGlsZChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2Ugb2JqZWN0IGZvciB0aGUgZ2l2ZW4gYWJzb2x1dGUgVVJMLFxyXG4gICAgICogd2hpY2ggbXVzdCBiZSBhIGdzOi8vIG9yIGh0dHBbc106Ly8gVVJMLlxyXG4gICAgICovXHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUucmVmRnJvbVVSTCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0b3IocCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnUGF0aCBpcyBub3QgYSBzdHJpbmcuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIS9eW0EtWmEtel0rOlxcL1xcLy8udGVzdChwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGZ1bGwgVVJMIGJ1dCBnb3QgYSBjaGlsZCBwYXRoLCB1c2UgcmVmIGluc3RlYWQuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgTG9jYXRpb24ubWFrZUZyb21VcmwocCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCB2YWxpZCBmdWxsIFVSTCBidXQgZ290IGFuIGludmFsaWQgb25lLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsaWRhdGUoJ3JlZkZyb21VUkwnLCBbc3RyaW5nU3BlYyh2YWxpZGF0b3IsIGZhbHNlKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UodGhpcywgdXJsKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLCBcIm1heFVwbG9hZFJldHJ5VGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heFVwbG9hZFJldHJ5VGltZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnNldE1heFVwbG9hZFJldHJ5VGltZSA9IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3NldE1heFVwbG9hZFJldHJ5VGltZScsIFtub25OZWdhdGl2ZU51bWJlclNwZWMoKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5tYXhVcGxvYWRSZXRyeVRpbWVfID0gdGltZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLCBcIm1heE9wZXJhdGlvblJldHJ5VGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heE9wZXJhdGlvblJldHJ5VGltZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnNldE1heE9wZXJhdGlvblJldHJ5VGltZSA9IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3NldE1heE9wZXJhdGlvblJldHJ5VGltZScsIFtub25OZWdhdGl2ZU51bWJlclNwZWMoKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5tYXhPcGVyYXRpb25SZXRyeVRpbWVfID0gdGltZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLCBcImFwcFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcF87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZSwgXCJJTlRFUk5BTFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsc187XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFN0b3JhZ2VTZXJ2aWNlO1xyXG59KCkpO1xyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFNlcnZpY2VJbnRlcm5hbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZXJ2aWNlSW50ZXJuYWxzKHNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VfID0gc2VydmljZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGFzc29jaWF0ZWQgYXBwIGlzIGRlbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIFNlcnZpY2VJbnRlcm5hbHMucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VfLmRlbGV0ZUFwcCgpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VydmljZUludGVybmFscztcclxufSgpKTtcclxuXHJcbnZhciBuYW1lID0gXCJAZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG52YXIgdmVyc2lvbiA9IFwiMC4zLjQzXCI7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVHlwZSBjb25zdGFudCBmb3IgRmlyZWJhc2UgU3RvcmFnZS5cclxuICovXHJcbnZhciBTVE9SQUdFX1RZUEUgPSAnc3RvcmFnZSc7XHJcbmZ1bmN0aW9uIGZhY3RvcnkoY29udGFpbmVyLCB1cmwpIHtcclxuICAgIC8vIERlcGVuZGVuY2llc1xyXG4gICAgdmFyIGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICB2YXIgYXV0aFByb3ZpZGVyID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhdXRoLWludGVybmFsJyk7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VTZXJ2aWNlKGFwcCwgYXV0aFByb3ZpZGVyLCBuZXcgWGhySW9Qb29sKCksIHVybCk7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJTdG9yYWdlKGluc3RhbmNlKSB7XHJcbiAgICB2YXIgbmFtZXNwYWNlRXhwb3J0cyA9IHtcclxuICAgICAgICAvLyBuby1pbmxpbmVcclxuICAgICAgICBUYXNrU3RhdGU6IFRhc2tTdGF0ZSxcclxuICAgICAgICBUYXNrRXZlbnQ6IFRhc2tFdmVudCxcclxuICAgICAgICBTdHJpbmdGb3JtYXQ6IFN0cmluZ0Zvcm1hdCxcclxuICAgICAgICBTdG9yYWdlOiBTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBSZWZlcmVuY2U6IFJlZmVyZW5jZVxyXG4gICAgfTtcclxuICAgIGluc3RhbmNlLklOVEVSTkFMLnJlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoU1RPUkFHRV9UWVBFLCBmYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLylcclxuICAgICAgICAuc2V0U2VydmljZVByb3BzKG5hbWVzcGFjZUV4cG9ydHMpXHJcbiAgICAgICAgLnNldE11bHRpcGxlSW5zdGFuY2VzKHRydWUpKTtcclxuICAgIGluc3RhbmNlLnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uKTtcclxufVxyXG5yZWdpc3RlclN0b3JhZ2UoZmlyZWJhc2UpO1xyXG5cclxuZXhwb3J0IHsgcmVnaXN0ZXJTdG9yYWdlIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcclxuIiwiaW1wb3J0ICdAZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==