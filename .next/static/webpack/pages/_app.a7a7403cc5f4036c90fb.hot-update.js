webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL3N0b3JhZ2UvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiRmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXV0aCIsImRiIiwiZmlyZXN0b3JlIiwic3RvcmFnZSIsIm5vbWJyZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJudWV2b1VzdWFyaW8iLCJ1c2VyIiwidXBkYXRlUHJvZmlsZSIsImRpc3BsYXlOYW1lIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZmlyZWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTs7SUFFTUEsUTtBQUNGLHNCQUFjO0FBQUE7O0FBRVYsUUFBRyxDQUFDQyxtREFBRyxDQUFDQyxJQUFKLENBQVNDLE1BQWIsRUFBb0I7QUFDaEJGLHlEQUFHLENBQUNHLGFBQUosQ0FBa0JDLCtDQUFsQjtBQUNIOztBQUVELFNBQUtDLElBQUwsR0FBWUwsbURBQUcsQ0FBQ0ssSUFBSixFQUFaO0FBQ0EsU0FBS0MsRUFBTCxHQUFVTixtREFBRyxDQUFDTyxTQUFKLEVBQVY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLG1EQUFHLENBQUNRLE9BQUosRUFBZjtBQUNILEcsQ0FFRDs7Ozs7O3lOQUNnQkMsTSxFQUFRQyxLLEVBQU9DLFE7Ozs7Ozs7dUJBQ0EsS0FBS04sSUFBTCxDQUFVTyw4QkFBVixDQUF5Q0YsS0FBekMsRUFBK0NDLFFBQS9DLEM7OztBQUFyQkUsNEI7O3VCQUVPQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JDLGFBQWxCLENBQWdDO0FBQ3pDQyw2QkFBVyxFQUFHUDtBQUQyQixpQkFBaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS2pCOzs7OztzTkFDWUMsSyxFQUFPQyxROzs7OztrREFDUixLQUFLTixJQUFMLENBQVVZLDBCQUFWLENBQXFDUCxLQUFyQyxFQUEyQ0MsUUFBM0MsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7Ozs7Ozs7O3VCQUVVLEtBQUtOLElBQUwsQ0FBVWEsT0FBVixFOzs7QUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQyxJQUFNQyxRQUFRLEdBQUcsSUFBSXBCLFFBQUosRUFBakI7QUFFZW9CLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDMEI7QUFDZjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxhQUFhLDJEQUEyRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw2QkFBNkIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVDQUF1QyxFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhDQUE4QyxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFtRDtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLG9CQUFvQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBUSxtQkFBbUIsb0RBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0EsZ0VBQWdFLGlCQUFpQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQseUJBQXlCLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwwQ0FBMEMsRUFBRSxlQUFlLDBDQUEwQyxFQUFFO0FBQzVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkRBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7O0FBRUc7QUFDM0I7Ozs7Ozs7Ozs7Ozs7QUMzNkdBO0FBQUE7QUFBMkI7QUFDM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hN2E3NDAzY2M1ZjQwMzZjOTBmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuLy9IYWJpbGl0YW1vcyBsYSBhdXRlbnRpZmljYWNpb25cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG4vL0hhYmlsaXRhbW9zIGVsIGZpcmViYXNlc3RvcmUgcGFyYSBndWFyZGFyIGFyY2hpdm9zIGVuIGxhIGJhc2UgZGUgZGF0b3NcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbi8vSGFiaWxpdGFtb3MgZWwgc3RvcmFnZVxyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jbGFzcyBGaXJlYmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgaWYoIWFwcC5hcHBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGFwcC5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aCA9IGFwcC5hdXRoKCk7XHJcbiAgICAgICAgdGhpcy5kYiA9IGFwcC5maXJlc3RvcmUoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBhcHAuc3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUmVnaXN0cmFyIHVubiB1c3VhcmlvIFxyXG4gICAgYXN5bmMgcmVnaXN0cmFyKG5vbWJyZSwgZW1haWwsIHBhc3N3b3JkKXtcclxuICAgICAgICBjb25zdCBudWV2b1VzdWFyaW8gPSBhd2FpdCB0aGlzLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLHBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG51ZXZvVXN1YXJpby51c2VyLnVwZGF0ZVByb2ZpbGUoe1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZSA6IG5vbWJyZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9JbmljaWEgc2VzaW9uIGRlbCB1c3VhcmlvIFxyXG4gICAgYXN5bmMgbG9naW4oZW1haWwsIHBhc3N3b3JkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLHBhc3N3b3JkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0NlcnJhciBzZXNpb24gXHJcbiAgICBhc3luYyBjZXJyYXJTZXNpb24oKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRoLnNpZ25PdXQoKTs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpcmViYXNlID0gbmV3IEZpcmViYXNlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnQGZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSAndHNsaWInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnN0YW50cyB1c2VkIGluIHRoZSBGaXJlYmFzZSBTdG9yYWdlIGxpYnJhcnkuXHJcbiAqL1xyXG4vKipcclxuICogRG9tYWluIG5hbWUgZm9yIGZpcmViYXNlIHN0b3JhZ2UuXHJcbiAqL1xyXG52YXIgREVGQVVMVF9IT1NUID0gJ2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbSc7XHJcbi8qKlxyXG4gKiBUaGUga2V5IGluIEZpcmViYXNlIGNvbmZpZyBqc29uIGZvciB0aGUgc3RvcmFnZSBidWNrZXQuXHJcbiAqL1xyXG52YXIgQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWSA9ICdzdG9yYWdlQnVja2V0JztcclxuLyoqXHJcbiAqIDIgbWludXRlc1xyXG4gKlxyXG4gKiBUaGUgdGltZW91dCBmb3IgYWxsIG9wZXJhdGlvbnMgZXhjZXB0IHVwbG9hZC5cclxuICovXHJcbnZhciBERUZBVUxUX01BWF9PUEVSQVRJT05fUkVUUllfVElNRSA9IDIgKiA2MCAqIDEwMDA7XHJcbi8qKlxyXG4gKiAxMCBtaW51dGVzXHJcbiAqXHJcbiAqIFRoZSB0aW1lb3V0IGZvciB1cGxvYWQuXHJcbiAqL1xyXG52YXIgREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUUgPSAxMCAqIDYwICogMTAwMDtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBGaXJlYmFzZVN0b3JhZ2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZpcmViYXNlU3RvcmFnZUVycm9yKGNvZGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLmNvZGVfID0gcHJlcGVuZENvZGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXyA9ICdGaXJlYmFzZSBTdG9yYWdlOiAnICsgbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNlcnZlclJlc3BvbnNlXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lXyA9ICdGaXJlYmFzZUVycm9yJztcclxuICAgIH1cclxuICAgIEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZS5jb2RlUHJvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2RlO1xyXG4gICAgfTtcclxuICAgIEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZS5jb2RlRXF1YWxzID0gZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgICByZXR1cm4gcHJlcGVuZENvZGUoY29kZSkgPT09IHRoaXMuY29kZVByb3AoKTtcclxuICAgIH07XHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuc2VydmVyUmVzcG9uc2VQcm9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlclJlc3BvbnNlXztcclxuICAgIH07XHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuc2V0U2VydmVyUmVzcG9uc2VQcm9wID0gZnVuY3Rpb24gKHNlcnZlclJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXNwb25zZV8gPSBzZXJ2ZXJSZXNwb25zZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLCBcImNvZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2RlXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLCBcIm1lc3NhZ2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJSZXNwb25zZV8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VfICsgJ1xcbicgKyB0aGlzLnNlcnZlclJlc3BvbnNlXztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VfO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZSwgXCJzZXJ2ZXJSZXNwb25zZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZlclJlc3BvbnNlXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRmlyZWJhc2VTdG9yYWdlRXJyb3I7XHJcbn0oKSk7XHJcbnZhciBDb2RlID0ge1xyXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gYWxsIHBsYXRmb3Jtc1xyXG4gICAgVU5LTk9XTjogJ3Vua25vd24nLFxyXG4gICAgT0JKRUNUX05PVF9GT1VORDogJ29iamVjdC1ub3QtZm91bmQnLFxyXG4gICAgQlVDS0VUX05PVF9GT1VORDogJ2J1Y2tldC1ub3QtZm91bmQnLFxyXG4gICAgUFJPSkVDVF9OT1RfRk9VTkQ6ICdwcm9qZWN0LW5vdC1mb3VuZCcsXHJcbiAgICBRVU9UQV9FWENFRURFRDogJ3F1b3RhLWV4Y2VlZGVkJyxcclxuICAgIFVOQVVUSEVOVElDQVRFRDogJ3VuYXV0aGVudGljYXRlZCcsXHJcbiAgICBVTkFVVEhPUklaRUQ6ICd1bmF1dGhvcml6ZWQnLFxyXG4gICAgUkVUUllfTElNSVRfRVhDRUVERUQ6ICdyZXRyeS1saW1pdC1leGNlZWRlZCcsXHJcbiAgICBJTlZBTElEX0NIRUNLU1VNOiAnaW52YWxpZC1jaGVja3N1bScsXHJcbiAgICBDQU5DRUxFRDogJ2NhbmNlbGVkJyxcclxuICAgIC8vIEpTIHNwZWNpZmljXHJcbiAgICBJTlZBTElEX0VWRU5UX05BTUU6ICdpbnZhbGlkLWV2ZW50LW5hbWUnLFxyXG4gICAgSU5WQUxJRF9VUkw6ICdpbnZhbGlkLXVybCcsXHJcbiAgICBJTlZBTElEX0RFRkFVTFRfQlVDS0VUOiAnaW52YWxpZC1kZWZhdWx0LWJ1Y2tldCcsXHJcbiAgICBOT19ERUZBVUxUX0JVQ0tFVDogJ25vLWRlZmF1bHQtYnVja2V0JyxcclxuICAgIENBTk5PVF9TTElDRV9CTE9COiAnY2Fubm90LXNsaWNlLWJsb2InLFxyXG4gICAgU0VSVkVSX0ZJTEVfV1JPTkdfU0laRTogJ3NlcnZlci1maWxlLXdyb25nLXNpemUnLFxyXG4gICAgTk9fRE9XTkxPQURfVVJMOiAnbm8tZG93bmxvYWQtdXJsJyxcclxuICAgIElOVkFMSURfQVJHVU1FTlQ6ICdpbnZhbGlkLWFyZ3VtZW50JyxcclxuICAgIElOVkFMSURfQVJHVU1FTlRfQ09VTlQ6ICdpbnZhbGlkLWFyZ3VtZW50LWNvdW50JyxcclxuICAgIEFQUF9ERUxFVEVEOiAnYXBwLWRlbGV0ZWQnLFxyXG4gICAgSU5WQUxJRF9ST09UX09QRVJBVElPTjogJ2ludmFsaWQtcm9vdC1vcGVyYXRpb24nLFxyXG4gICAgSU5WQUxJRF9GT1JNQVQ6ICdpbnZhbGlkLWZvcm1hdCcsXHJcbiAgICBJTlRFUk5BTF9FUlJPUjogJ2ludGVybmFsLWVycm9yJ1xyXG59O1xyXG5mdW5jdGlvbiBwcmVwZW5kQ29kZShjb2RlKSB7XHJcbiAgICByZXR1cm4gJ3N0b3JhZ2UvJyArIGNvZGU7XHJcbn1cclxuZnVuY3Rpb24gdW5rbm93bigpIHtcclxuICAgIHZhciBtZXNzYWdlID0gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSBjaGVjayB0aGUgZXJyb3IgcGF5bG9hZCBmb3IgJyArXHJcbiAgICAgICAgJ3NlcnZlciByZXNwb25zZS4nO1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLlVOS05PV04sIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIG9iamVjdE5vdEZvdW5kKHBhdGgpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5PQkpFQ1RfTk9UX0ZPVU5ELCBcIk9iamVjdCAnXCIgKyBwYXRoICsgXCInIGRvZXMgbm90IGV4aXN0LlwiKTtcclxufVxyXG5mdW5jdGlvbiBxdW90YUV4Y2VlZGVkKGJ1Y2tldCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLlFVT1RBX0VYQ0VFREVELCBcIlF1b3RhIGZvciBidWNrZXQgJ1wiICtcclxuICAgICAgICBidWNrZXQgK1xyXG4gICAgICAgIFwiJyBleGNlZWRlZCwgcGxlYXNlIHZpZXcgcXVvdGEgb24gXCIgK1xyXG4gICAgICAgICdodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vcHJpY2luZy8uJyk7XHJcbn1cclxuZnVuY3Rpb24gdW5hdXRoZW50aWNhdGVkKCkge1xyXG4gICAgdmFyIG1lc3NhZ2UgPSAnVXNlciBpcyBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGF1dGhlbnRpY2F0ZSB1c2luZyBGaXJlYmFzZSAnICtcclxuICAgICAgICAnQXV0aGVudGljYXRpb24gYW5kIHRyeSBhZ2Fpbi4nO1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLlVOQVVUSEVOVElDQVRFRCwgbWVzc2FnZSk7XHJcbn1cclxuZnVuY3Rpb24gdW5hdXRob3JpemVkKHBhdGgpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5VTkFVVEhPUklaRUQsIFwiVXNlciBkb2VzIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzICdcIiArIHBhdGggKyBcIicuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHJ5TGltaXRFeGNlZWRlZCgpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5SRVRSWV9MSU1JVF9FWENFRURFRCwgJ01heCByZXRyeSB0aW1lIGZvciBvcGVyYXRpb24gZXhjZWVkZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbn1cclxuZnVuY3Rpb24gY2FuY2VsZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuQ0FOQ0VMRUQsICdVc2VyIGNhbmNlbGVkIHRoZSB1cGxvYWQvZG93bmxvYWQuJyk7XHJcbn1cclxuZnVuY3Rpb24gaW52YWxpZFVybCh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlZBTElEX1VSTCwgXCJJbnZhbGlkIFVSTCAnXCIgKyB1cmwgKyBcIicuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWREZWZhdWx0QnVja2V0KGJ1Y2tldCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVkFMSURfREVGQVVMVF9CVUNLRVQsIFwiSW52YWxpZCBkZWZhdWx0IGJ1Y2tldCAnXCIgKyBidWNrZXQgKyBcIicuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbm5vdFNsaWNlQmxvYigpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5DQU5OT1RfU0xJQ0VfQkxPQiwgJ0Nhbm5vdCBzbGljZSBibG9iIGZvciB1cGxvYWQuIFBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLicpO1xyXG59XHJcbmZ1bmN0aW9uIHNlcnZlckZpbGVXcm9uZ1NpemUoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuU0VSVkVSX0ZJTEVfV1JPTkdfU0laRSwgJ1NlcnZlciByZWNvcmRlZCBpbmNvcnJlY3QgdXBsb2FkIGZpbGUgc2l6ZSwgcGxlYXNlIHJldHJ5IHRoZSB1cGxvYWQuJyk7XHJcbn1cclxuZnVuY3Rpb24gbm9Eb3dubG9hZFVSTCgpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5OT19ET1dOTE9BRF9VUkwsICdUaGUgZ2l2ZW4gZmlsZSBkb2VzIG5vdCBoYXZlIGFueSBkb3dubG9hZCBVUkxzLicpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWRBcmd1bWVudChpbmRleCwgZm5OYW1lLCBtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuSU5WQUxJRF9BUkdVTUVOVCwgJ0ludmFsaWQgYXJndW1lbnQgaW4gYCcgKyBmbk5hbWUgKyAnYCBhdCBpbmRleCAnICsgaW5kZXggKyAnOiAnICsgbWVzc2FnZSk7XHJcbn1cclxuZnVuY3Rpb24gaW52YWxpZEFyZ3VtZW50Q291bnQoYXJnTWluLCBhcmdNYXgsIGZuTmFtZSwgcmVhbCkge1xyXG4gICAgdmFyIGNvdW50UGFydDtcclxuICAgIHZhciBwbHVyYWw7XHJcbiAgICBpZiAoYXJnTWluID09PSBhcmdNYXgpIHtcclxuICAgICAgICBjb3VudFBhcnQgPSBhcmdNaW47XHJcbiAgICAgICAgcGx1cmFsID0gYXJnTWluID09PSAxID8gJ2FyZ3VtZW50JyA6ICdhcmd1bWVudHMnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY291bnRQYXJ0ID0gJ2JldHdlZW4gJyArIGFyZ01pbiArICcgYW5kICcgKyBhcmdNYXg7XHJcbiAgICAgICAgcGx1cmFsID0gJ2FyZ3VtZW50cyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuSU5WQUxJRF9BUkdVTUVOVF9DT1VOVCwgJ0ludmFsaWQgYXJndW1lbnQgY291bnQgaW4gYCcgK1xyXG4gICAgICAgIGZuTmFtZSArXHJcbiAgICAgICAgJ2A6IEV4cGVjdGVkICcgK1xyXG4gICAgICAgIGNvdW50UGFydCArXHJcbiAgICAgICAgJyAnICtcclxuICAgICAgICBwbHVyYWwgK1xyXG4gICAgICAgICcsIHJlY2VpdmVkICcgK1xyXG4gICAgICAgIHJlYWwgK1xyXG4gICAgICAgICcuJyk7XHJcbn1cclxuZnVuY3Rpb24gYXBwRGVsZXRlZCgpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5BUFBfREVMRVRFRCwgJ1RoZSBGaXJlYmFzZSBhcHAgd2FzIGRlbGV0ZWQuJyk7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBvcGVyYXRpb24gdGhhdCB3YXMgaW52YWxpZC5cclxuICovXHJcbmZ1bmN0aW9uIGludmFsaWRSb290T3BlcmF0aW9uKG5hbWUpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlZBTElEX1JPT1RfT1BFUkFUSU9OLCBcIlRoZSBvcGVyYXRpb24gJ1wiICtcclxuICAgICAgICBuYW1lICtcclxuICAgICAgICBcIicgY2Fubm90IGJlIHBlcmZvcm1lZCBvbiBhIHJvb3QgcmVmZXJlbmNlLCBjcmVhdGUgYSBub24tcm9vdCBcIiArXHJcbiAgICAgICAgXCJyZWZlcmVuY2UgdXNpbmcgY2hpbGQsIHN1Y2ggYXMgLmNoaWxkKCdmaWxlLnBuZycpLlwiKTtcclxufVxyXG4vKipcclxuICogQHBhcmFtIGZvcm1hdCBUaGUgZm9ybWF0IHRoYXQgd2FzIG5vdCB2YWxpZC5cclxuICogQHBhcmFtIG1lc3NhZ2UgQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGZvcm1hdCB2aW9sYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZhbGlkRm9ybWF0KGZvcm1hdCwgbWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVkFMSURfRk9STUFULCBcIlN0cmluZyBkb2VzIG5vdCBtYXRjaCBmb3JtYXQgJ1wiICsgZm9ybWF0ICsgXCInOiBcIiArIG1lc3NhZ2UpO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gbWVzc2FnZSBBIG1lc3NhZ2UgZGVzY3JpYmluZyB0aGUgaW50ZXJuYWwgZXJyb3IuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnRlcm5hbEVycm9yKG1lc3NhZ2UpIHtcclxuICAgIHRocm93IG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVEVSTkFMX0VSUk9SLCAnSW50ZXJuYWwgZXJyb3I6ICcgKyBtZXNzYWdlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFN0cmluZ0Zvcm1hdCA9IHtcclxuICAgIFJBVzogJ3JhdycsXHJcbiAgICBCQVNFNjQ6ICdiYXNlNjQnLFxyXG4gICAgQkFTRTY0VVJMOiAnYmFzZTY0dXJsJyxcclxuICAgIERBVEFfVVJMOiAnZGF0YV91cmwnXHJcbn07XHJcbmZ1bmN0aW9uIGZvcm1hdFZhbGlkYXRvcihzdHJpbmdGb3JtYXQpIHtcclxuICAgIHN3aXRjaCAoc3RyaW5nRm9ybWF0KSB7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuUkFXOlxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDpcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkw6XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuREFUQV9VUkw6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyAoJ0V4cGVjdGVkIG9uZSBvZiB0aGUgZXZlbnQgdHlwZXM6IFsnICtcclxuICAgICAgICAgICAgICAgIFN0cmluZ0Zvcm1hdC5SQVcgK1xyXG4gICAgICAgICAgICAgICAgJywgJyArXHJcbiAgICAgICAgICAgICAgICBTdHJpbmdGb3JtYXQuQkFTRTY0ICtcclxuICAgICAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTCArXHJcbiAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgIFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCArXHJcbiAgICAgICAgICAgICAgICAnXS4nKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFN0cmluZ0RhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdHJpbmdEYXRhKGRhdGEsIGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmdEYXRhO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBkYXRhRnJvbVN0cmluZyhmb3JtYXQsIHN0cmluZ0RhdGEpIHtcclxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuUkFXOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0RhdGEodXRmOEJ5dGVzXyhzdHJpbmdEYXRhKSk7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0OlxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKGJhc2U2NEJ5dGVzXyhmb3JtYXQsIHN0cmluZ0RhdGEpKTtcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5EQVRBX1VSTDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKGRhdGFVUkxCeXRlc18oc3RyaW5nRGF0YSksIGRhdGFVUkxDb250ZW50VHlwZV8oc3RyaW5nRGF0YSkpO1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIC8vIGFzc2VydChmYWxzZSk7XHJcbiAgICB0aHJvdyB1bmtub3duKCk7XHJcbn1cclxuZnVuY3Rpb24gdXRmOEJ5dGVzXyh2YWx1ZSkge1xyXG4gICAgdmFyIGIgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgYyA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKGMgPD0gMTI3KSB7XHJcbiAgICAgICAgICAgIGIucHVzaChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjIDw9IDIwNDcpIHtcclxuICAgICAgICAgICAgICAgIGIucHVzaCgxOTIgfCAoYyA+PiA2KSwgMTI4IHwgKGMgJiA2MykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKChjICYgNjQ1MTIpID09PSA1NTI5Nikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBzdGFydCBvZiBhIHN1cnJvZ2F0ZSBwYWlyLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZCA9IGkgPCB2YWx1ZS5sZW5ndGggLSAxICYmICh2YWx1ZS5jaGFyQ29kZUF0KGkgKyAxKSAmIDY0NTEyKSA9PT0gNTYzMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc2Vjb25kIHN1cnJvZ2F0ZSB3YXNuJ3QgdGhlcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMzksIDE5MSwgMTg5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaSA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsbyA9IHZhbHVlLmNoYXJDb2RlQXQoKytpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IDY1NTM2IHwgKChoaSAmIDEwMjMpIDw8IDEwKSB8IChsbyAmIDEwMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjQwIHwgKGMgPj4gMTgpLCAxMjggfCAoKGMgPj4gMTIpICYgNjMpLCAxMjggfCAoKGMgPj4gNikgJiA2MyksIDEyOCB8IChjICYgNjMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGMgJiA2NDUxMikgPT09IDU2MzIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgbG93IHN1cnJvZ2F0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5wdXNoKDIzOSwgMTkxLCAxODkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5wdXNoKDIyNCB8IChjID4+IDEyKSwgMTI4IHwgKChjID4+IDYpICYgNjMpLCAxMjggfCAoYyAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGIpO1xyXG59XHJcbmZ1bmN0aW9uIHBlcmNlbnRFbmNvZGVkQnl0ZXNfKHZhbHVlKSB7XHJcbiAgICB2YXIgZGVjb2RlZDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoU3RyaW5nRm9ybWF0LkRBVEFfVVJMLCAnTWFsZm9ybWVkIGRhdGEgVVJMLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV0ZjhCeXRlc18oZGVjb2RlZCk7XHJcbn1cclxuZnVuY3Rpb24gYmFzZTY0Qnl0ZXNfKGZvcm1hdCwgdmFsdWUpIHtcclxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0OiB7XHJcbiAgICAgICAgICAgIHZhciBoYXNNaW51cyA9IHZhbHVlLmluZGV4T2YoJy0nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIHZhciBoYXNVbmRlciA9IHZhbHVlLmluZGV4T2YoJ18nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIGlmIChoYXNNaW51cyB8fCBoYXNVbmRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGludmFsaWRDaGFyID0gaGFzTWludXMgPyAnLScgOiAnXyc7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KGZvcm1hdCwgXCJJbnZhbGlkIGNoYXJhY3RlciAnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRDaGFyICtcclxuICAgICAgICAgICAgICAgICAgICBcIicgZm91bmQ6IGlzIGl0IGJhc2U2NHVybCBlbmNvZGVkP1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0VVJMOiB7XHJcbiAgICAgICAgICAgIHZhciBoYXNQbHVzID0gdmFsdWUuaW5kZXhPZignKycpICE9PSAtMTtcclxuICAgICAgICAgICAgdmFyIGhhc1NsYXNoID0gdmFsdWUuaW5kZXhPZignLycpICE9PSAtMTtcclxuICAgICAgICAgICAgaWYgKGhhc1BsdXMgfHwgaGFzU2xhc2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnZhbGlkQ2hhciA9IGhhc1BsdXMgPyAnKycgOiAnLyc7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KGZvcm1hdCwgXCJJbnZhbGlkIGNoYXJhY3RlciAnXCIgKyBpbnZhbGlkQ2hhciArIFwiJyBmb3VuZDogaXMgaXQgYmFzZTY0IGVuY29kZWQ/XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIHZhciBieXRlcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYnl0ZXMgPSBhdG9iKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsICdJbnZhbGlkIGNoYXJhY3RlciBmb3VuZCcpO1xyXG4gICAgfVxyXG4gICAgdmFyIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhcnJheVtpXSA9IGJ5dGVzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBEYXRhVVJMUGFydHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEYXRhVVJMUGFydHMoZGF0YVVSTCkge1xyXG4gICAgICAgIHRoaXMuYmFzZTY0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IG51bGw7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkYXRhVVJMLm1hdGNoKC9eZGF0YTooW14sXSspPywvKTtcclxuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCwgXCJNdXN0IGJlIGZvcm1hdHRlZCAnZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1pZGRsZSA9IG1hdGNoZXNbMV0gfHwgbnVsbDtcclxuICAgICAgICBpZiAobWlkZGxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlNjQgPSBlbmRzV2l0aChtaWRkbGUsICc7YmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFR5cGUgPSB0aGlzLmJhc2U2NFxyXG4gICAgICAgICAgICAgICAgPyBtaWRkbGUuc3Vic3RyaW5nKDAsIG1pZGRsZS5sZW5ndGggLSAnO2Jhc2U2NCcubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzdCA9IGRhdGFVUkwuc3Vic3RyaW5nKGRhdGFVUkwuaW5kZXhPZignLCcpICsgMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRGF0YVVSTFBhcnRzO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBkYXRhVVJMQnl0ZXNfKGRhdGFVcmwpIHtcclxuICAgIHZhciBwYXJ0cyA9IG5ldyBEYXRhVVJMUGFydHMoZGF0YVVybCk7XHJcbiAgICBpZiAocGFydHMuYmFzZTY0KSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NEJ5dGVzXyhTdHJpbmdGb3JtYXQuQkFTRTY0LCBwYXJ0cy5yZXN0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50RW5jb2RlZEJ5dGVzXyhwYXJ0cy5yZXN0KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkYXRhVVJMQ29udGVudFR5cGVfKGRhdGFVcmwpIHtcclxuICAgIHZhciBwYXJ0cyA9IG5ldyBEYXRhVVJMUGFydHMoZGF0YVVybCk7XHJcbiAgICByZXR1cm4gcGFydHMuY29udGVudFR5cGU7XHJcbn1cclxuZnVuY3Rpb24gZW5kc1dpdGgocywgZW5kKSB7XHJcbiAgICB2YXIgbG9uZ0Vub3VnaCA9IHMubGVuZ3RoID49IGVuZC5sZW5ndGg7XHJcbiAgICBpZiAoIWxvbmdFbm91Z2gpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcocy5sZW5ndGggLSBlbmQubGVuZ3RoKSA9PT0gZW5kO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVGFza0V2ZW50ID0ge1xyXG4gICAgLyoqIFRyaWdnZXJlZCB3aGVuZXZlciB0aGUgdGFzayBjaGFuZ2VzIG9yIHByb2dyZXNzIGlzIHVwZGF0ZWQuICovXHJcbiAgICBTVEFURV9DSEFOR0VEOiAnc3RhdGVfY2hhbmdlZCdcclxufTtcclxudmFyIEludGVybmFsVGFza1N0YXRlID0ge1xyXG4gICAgUlVOTklORzogJ3J1bm5pbmcnLFxyXG4gICAgUEFVU0lORzogJ3BhdXNpbmcnLFxyXG4gICAgUEFVU0VEOiAncGF1c2VkJyxcclxuICAgIFNVQ0NFU1M6ICdzdWNjZXNzJyxcclxuICAgIENBTkNFTElORzogJ2NhbmNlbGluZycsXHJcbiAgICBDQU5DRUxFRDogJ2NhbmNlbGVkJyxcclxuICAgIEVSUk9SOiAnZXJyb3InXHJcbn07XHJcbnZhciBUYXNrU3RhdGUgPSB7XHJcbiAgICAvKiogVGhlIHRhc2sgaXMgY3VycmVudGx5IHRyYW5zZmVycmluZyBkYXRhLiAqL1xyXG4gICAgUlVOTklORzogJ3J1bm5pbmcnLFxyXG4gICAgLyoqIFRoZSB0YXNrIHdhcyBwYXVzZWQgYnkgdGhlIHVzZXIuICovXHJcbiAgICBQQVVTRUQ6ICdwYXVzZWQnLFxyXG4gICAgLyoqIFRoZSB0YXNrIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuICovXHJcbiAgICBTVUNDRVNTOiAnc3VjY2VzcycsXHJcbiAgICAvKiogVGhlIHRhc2sgd2FzIGNhbmNlbGVkLiAqL1xyXG4gICAgQ0FOQ0VMRUQ6ICdjYW5jZWxlZCcsXHJcbiAgICAvKiogVGhlIHRhc2sgZmFpbGVkIHdpdGggYW4gZXJyb3IuICovXHJcbiAgICBFUlJPUjogJ2Vycm9yJ1xyXG59O1xyXG5mdW5jdGlvbiB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUoc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLlJVTk5JTkc7XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuUEFVU0VEO1xyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5TVUNDRVNTO1xyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuQ0FOQ0VMRUQ7XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5FUlJPUjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5FUlJPUjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEByZXR1cm4gRmFsc2UgaWYgdGhlIG9iamVjdCBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdHJ1ZSBvdGhlcndpc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0RlZihwKSB7XHJcbiAgICByZXR1cm4gcCAhPSBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGlzSnVzdERlZihwKSB7XHJcbiAgICByZXR1cm4gcCAhPT0gdm9pZCAwO1xyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHApIHtcclxuICAgIHJldHVybiB0eXBlb2YgcCA9PT0gJ29iamVjdCc7XHJcbn1cclxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHApIHtcclxuICAgIHJldHVybiBpc09iamVjdChwKSAmJiBwICE9PSBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGlzTm9uQXJyYXlPYmplY3QocCkge1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHApICYmICFBcnJheS5pc0FycmF5KHApO1xyXG59XHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHApIHtcclxuICAgIHJldHVybiB0eXBlb2YgcCA9PT0gJ3N0cmluZycgfHwgcCBpbnN0YW5jZW9mIFN0cmluZztcclxufVxyXG5mdW5jdGlvbiBpc0ludGVnZXIocCkge1xyXG4gICAgcmV0dXJuIGlzTnVtYmVyKHApICYmIE51bWJlci5pc0ludGVnZXIocCk7XHJcbn1cclxuZnVuY3Rpb24gaXNOdW1iZXIocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnbnVtYmVyJyB8fCBwIGluc3RhbmNlb2YgTnVtYmVyO1xyXG59XHJcbmZ1bmN0aW9uIGlzTmF0aXZlQmxvYihwKSB7XHJcbiAgICByZXR1cm4gaXNOYXRpdmVCbG9iRGVmaW5lZCgpICYmIHAgaW5zdGFuY2VvZiBCbG9iO1xyXG59XHJcbmZ1bmN0aW9uIGlzTmF0aXZlQmxvYkRlZmluZWQoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGVudW17bnVtYmVyfVxyXG4gKi9cclxudmFyIEVycm9yQ29kZTtcclxuKGZ1bmN0aW9uIChFcnJvckNvZGUpIHtcclxuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJOT19FUlJPUlwiXSA9IDBdID0gXCJOT19FUlJPUlwiO1xyXG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk5FVFdPUktfRVJST1JcIl0gPSAxXSA9IFwiTkVUV09SS19FUlJPUlwiO1xyXG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIkFCT1JUXCJdID0gMl0gPSBcIkFCT1JUXCI7XHJcbn0pKEVycm9yQ29kZSB8fCAoRXJyb3JDb2RlID0ge30pKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIGdvb2cubmV0LlhocklvIGJlY2F1c2UgZ29vZy5uZXQuWGhySW8gaXMgaHl1dXV1Z2UgYW5kXHJcbiAqIGRvZXNuJ3Qgd29yayBpbiBSZWFjdCBOYXRpdmUgb24gQW5kcm9pZC5cclxuICovXHJcbnZhciBOZXR3b3JrWGhySW8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXR3b3JrWGhySW8oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNlbnRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54aHJfID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5PX0VSUk9SO1xyXG4gICAgICAgIHRoaXMuc2VuZFByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgX3RoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yQ29kZV8gPSBFcnJvckNvZGUuQUJPUlQ7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5FVFdPUktfRVJST1I7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuc2VuZCgpIG1vcmUgdGhhbiBvbmNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VudF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMueGhyXy5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgICAgICBpZiAoaXNEZWYoaGVhZGVycykpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhocl8uc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNEZWYoYm9keSkpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8uc2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUHJvbWlzZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5nZXRFcnJvckNvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0RXJyb3JDb2RlKCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JDb2RlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRTdGF0dXMoKSBiZWZvcmUgc2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHJfLnN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFJlc3BvbnNlVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRSZXNwb25zZVRleHQoKSBiZWZvcmUgc2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy54aHJfLnJlc3BvbnNlVGV4dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueGhyXy5hYm9ydCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAoaGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmIChpc0RlZih0aGlzLnhocl8udXBsb2FkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8udXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLnJlbW92ZVVwbG9hZFByb2dyZXNzTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAoaXNEZWYodGhpcy54aHJfLnVwbG9hZCkpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnVwbG9hZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5ldHdvcmtYaHJJbztcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBGYWN0b3J5LWxpa2UgY2xhc3MgZm9yIGNyZWF0aW5nIFhocklvIGluc3RhbmNlcy5cclxuICovXHJcbnZhciBYaHJJb1Bvb2wgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBYaHJJb1Bvb2woKSB7XHJcbiAgICB9XHJcbiAgICBYaHJJb1Bvb2wucHJvdG90eXBlLmNyZWF0ZVhocklvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmV0d29ya1hocklvKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFhocklvUG9vbDtcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2JCdWlsZGVyKCkge1xyXG4gICAgaWYgKHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gQmxvYkJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIFdlYktpdEJsb2JCdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ29uY2F0ZW5hdGVzIG9uZSBvciBtb3JlIHZhbHVlcyB0b2dldGhlciBhbmQgY29udmVydHMgdGhlbSB0byBhIEJsb2IuXHJcbiAqXHJcbiAqIEBwYXJhbSBhcmdzIFRoZSB2YWx1ZXMgdGhhdCB3aWxsIG1ha2UgdXAgdGhlIHJlc3VsdGluZyBibG9iLlxyXG4gKiBAcmV0dXJuIFRoZSBibG9iLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QmxvYigpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBCbG9iQnVpbGRlciA9IGdldEJsb2JCdWlsZGVyKCk7XHJcbiAgICBpZiAoQmxvYkJ1aWxkZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhciBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiYi5hcHBlbmQoYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYi5nZXRCbG9iKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoaXNOYXRpdmVCbG9iRGVmaW5lZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmxvYihhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IGNyZWF0aW5nIEJsb2JzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogU2xpY2VzIHRoZSBibG9iLiBUaGUgcmV0dXJuZWQgYmxvYiBjb250YWlucyBkYXRhIGZyb20gdGhlIHN0YXJ0IGJ5dGVcclxuICogKGluY2x1c2l2ZSkgdGlsbCB0aGUgZW5kIGJ5dGUgKGV4Y2x1c2l2ZSkuIE5lZ2F0aXZlIGluZGljZXMgY2Fubm90IGJlIHVzZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBibG9iIFRoZSBibG9iIHRvIGJlIHNsaWNlZC5cclxuICogQHBhcmFtIHN0YXJ0IEluZGV4IG9mIHRoZSBzdGFydGluZyBieXRlLlxyXG4gKiBAcGFyYW0gZW5kIEluZGV4IG9mIHRoZSBlbmRpbmcgYnl0ZS5cclxuICogQHJldHVybiBUaGUgYmxvYiBzbGljZSBvciBudWxsIGlmIG5vdCBzdXBwb3J0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzbGljZUJsb2IoYmxvYiwgc3RhcnQsIGVuZCkge1xyXG4gICAgaWYgKGJsb2Iud2Via2l0U2xpY2UpIHtcclxuICAgICAgICByZXR1cm4gYmxvYi53ZWJraXRTbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGJsb2IubW96U2xpY2UpIHtcclxuICAgICAgICByZXR1cm4gYmxvYi5tb3pTbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGJsb2Iuc2xpY2UpIHtcclxuICAgICAgICByZXR1cm4gYmxvYi5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIG9wdF9lbGlkZUNvcHkgSWYgdHJ1ZSwgZG9lc24ndCBjb3B5IG11dGFibGUgaW5wdXQgZGF0YVxyXG4gKiAgICAgKGUuZy4gVWludDhBcnJheXMpLiBQYXNzIHRydWUgb25seSBpZiB5b3Uga25vdyB0aGUgb2JqZWN0cyB3aWxsIG5vdCBiZVxyXG4gKiAgICAgbW9kaWZpZWQgYWZ0ZXIgdGhpcyBibG9iJ3MgY29uc3RydWN0aW9uLlxyXG4gKi9cclxudmFyIEZic0Jsb2IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGYnNCbG9iKGRhdGEsIGVsaWRlQ29weSkge1xyXG4gICAgICAgIHZhciBzaXplID0gMDtcclxuICAgICAgICB2YXIgYmxvYlR5cGUgPSAnJztcclxuICAgICAgICBpZiAoaXNOYXRpdmVCbG9iKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBkYXRhO1xyXG4gICAgICAgICAgICBzaXplID0gZGF0YS5zaXplO1xyXG4gICAgICAgICAgICBibG9iVHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGlkZUNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5zZXQobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpemUgPSB0aGlzLmRhdGFfLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKGVsaWRlQ29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXyA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5zZXQoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2l6ZSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpemVfID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnR5cGVfID0gYmxvYlR5cGU7XHJcbiAgICB9XHJcbiAgICBGYnNCbG9iLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemVfO1xyXG4gICAgfTtcclxuICAgIEZic0Jsb2IucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZV87XHJcbiAgICB9O1xyXG4gICAgRmJzQmxvYi5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnRCeXRlLCBlbmRCeXRlKSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYih0aGlzLmRhdGFfKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVhbEJsb2IgPSB0aGlzLmRhdGFfO1xyXG4gICAgICAgICAgICB2YXIgc2xpY2VkID0gc2xpY2VCbG9iKHJlYWxCbG9iLCBzdGFydEJ5dGUsIGVuZEJ5dGUpO1xyXG4gICAgICAgICAgICBpZiAoc2xpY2VkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2Ioc2xpY2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBzbGljZSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YV8uYnVmZmVyLCBzdGFydEJ5dGUsIGVuZEJ5dGUgLSBzdGFydEJ5dGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2Ioc2xpY2UsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBGYnNCbG9iLmdldEJsb2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05hdGl2ZUJsb2JEZWZpbmVkKCkpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2JieSA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGYnNCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5kYXRhXztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2IoZ2V0QmxvYi5hcHBseShudWxsLCBibG9iYnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB1aW50OEFycmF5cyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFGcm9tU3RyaW5nKFN0cmluZ0Zvcm1hdC5SQVcsIHZhbCkuZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJsb2JzIGRvbid0IGV4aXN0LCBzbyB0aGlzIGhhcyB0byBiZSBhIFVpbnQ4QXJyYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5kYXRhXztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBmaW5hbExlbmd0aF8xID0gMDtcclxuICAgICAgICAgICAgdWludDhBcnJheXMuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsTGVuZ3RoXzEgKz0gYXJyYXkuYnl0ZUxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBtZXJnZWRfMSA9IG5ldyBVaW50OEFycmF5KGZpbmFsTGVuZ3RoXzEpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXhfMSA9IDA7XHJcbiAgICAgICAgICAgIHVpbnQ4QXJyYXlzLmZvckVhY2goZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkXzFbaW5kZXhfMSsrXSA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKG1lcmdlZF8xLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRmJzQmxvYi5wcm90b3R5cGUudXBsb2FkRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXztcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmJzQmxvYjtcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgTG9jYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMb2NhdGlvbihidWNrZXQsIHBhdGgpIHtcclxuICAgICAgICB0aGlzLmJ1Y2tldCA9IGJ1Y2tldDtcclxuICAgICAgICB0aGlzLnBhdGhfID0gcGF0aDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2NhdGlvbi5wcm90b3R5cGUsIFwicGF0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhdGhfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2NhdGlvbi5wcm90b3R5cGUsIFwiaXNSb290XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGF0aC5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmZ1bGxTZXJ2ZXJVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgICAgICByZXR1cm4gJy9iLycgKyBlbmNvZGUodGhpcy5idWNrZXQpICsgJy9vLycgKyBlbmNvZGUodGhpcy5wYXRoKTtcclxuICAgIH07XHJcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuYnVja2V0T25seVNlcnZlclVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgICAgIHJldHVybiAnL2IvJyArIGVuY29kZSh0aGlzLmJ1Y2tldCkgKyAnL28nO1xyXG4gICAgfTtcclxuICAgIExvY2F0aW9uLm1ha2VGcm9tQnVja2V0U3BlYyA9IGZ1bmN0aW9uIChidWNrZXRTdHJpbmcpIHtcclxuICAgICAgICB2YXIgYnVja2V0TG9jYXRpb247XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYnVja2V0TG9jYXRpb24gPSBMb2NhdGlvbi5tYWtlRnJvbVVybChidWNrZXRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBOb3QgdmFsaWQgVVJMLCB1c2UgYXMtaXMuIFRoaXMgbGV0cyB5b3UgcHV0IGJhcmUgYnVja2V0IG5hbWVzIGluXHJcbiAgICAgICAgICAgIC8vIGNvbmZpZy5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbihidWNrZXRTdHJpbmcsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ1Y2tldExvY2F0aW9uLnBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidWNrZXRMb2NhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWREZWZhdWx0QnVja2V0KGJ1Y2tldFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExvY2F0aW9uLm1ha2VGcm9tVXJsID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdmFyIGJ1Y2tldERvbWFpbiA9ICcoW0EtWmEtejAtOS5cXFxcLV9dKyknO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdzTW9kaWZ5KGxvYykge1xyXG4gICAgICAgICAgICBpZiAobG9jLnBhdGguY2hhckF0KGxvYy5wYXRoLmxlbmd0aCAtIDEpID09PSAnLycpIHtcclxuICAgICAgICAgICAgICAgIGxvYy5wYXRoXyA9IGxvYy5wYXRoXy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdzUGF0aCA9ICcoLyguKikpPyQnO1xyXG4gICAgICAgIHZhciBnc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXmdzOi8vJyArIGJ1Y2tldERvbWFpbiArIGdzUGF0aCwgJ2knKTtcclxuICAgICAgICB2YXIgZ3NJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDMgfTtcclxuICAgICAgICBmdW5jdGlvbiBodHRwTW9kaWZ5KGxvYykge1xyXG4gICAgICAgICAgICBsb2MucGF0aF8gPSBkZWNvZGVVUklDb21wb25lbnQobG9jLnBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVyc2lvbiA9ICd2W0EtWmEtejAtOV9dKyc7XHJcbiAgICAgICAgdmFyIGZpcmViYXNlU3RvcmFnZUhvc3QgPSBERUZBVUxUX0hPU1QucmVwbGFjZSgvWy5dL2csICdcXFxcLicpO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VQYXRoID0gJygvKFtePyNdKikuKik/JCc7XHJcbiAgICAgICAgdmFyIGZpcmViYXNlU3RvcmFnZVJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeaHR0cHM/Oi8vXCIgKyBmaXJlYmFzZVN0b3JhZ2VIb3N0ICsgXCIvXCIgKyB2ZXJzaW9uICsgXCIvYi9cIiArIGJ1Y2tldERvbWFpbiArIFwiL29cIiArIGZpcmViYXNlU3RvcmFnZVBhdGgsICdpJyk7XHJcbiAgICAgICAgdmFyIGZpcmViYXNlU3RvcmFnZUluZGljZXMgPSB7IGJ1Y2tldDogMSwgcGF0aDogMyB9O1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VIb3N0ID0gJyg/OnN0b3JhZ2UuZ29vZ2xlYXBpcy5jb218c3RvcmFnZS5jbG91ZC5nb29nbGUuY29tKSc7XHJcbiAgICAgICAgdmFyIGNsb3VkU3RvcmFnZVBhdGggPSAnKFtePyNdKiknO1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXmh0dHBzPzovL1wiICsgY2xvdWRTdG9yYWdlSG9zdCArIFwiL1wiICsgYnVja2V0RG9tYWluICsgXCIvXCIgKyBjbG91ZFN0b3JhZ2VQYXRoLCAnaScpO1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDIgfTtcclxuICAgICAgICB2YXIgZ3JvdXBzID0gW1xyXG4gICAgICAgICAgICB7IHJlZ2V4OiBnc1JlZ2V4LCBpbmRpY2VzOiBnc0luZGljZXMsIHBvc3RNb2RpZnk6IGdzTW9kaWZ5IH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAsXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiBmaXJlYmFzZVN0b3JhZ2VJbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgcG9zdE1vZGlmeTogaHR0cE1vZGlmeVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWdleDogY2xvdWRTdG9yYWdlUmVnRXhwLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogY2xvdWRTdG9yYWdlSW5kaWNlcyxcclxuICAgICAgICAgICAgICAgIHBvc3RNb2RpZnk6IGh0dHBNb2RpZnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ3JvdXBzW2ldO1xyXG4gICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBncm91cC5yZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgICAgIGlmIChjYXB0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1Y2tldFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5idWNrZXRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhWYWx1ZSA9IGNhcHR1cmVzW2dyb3VwLmluZGljZXMucGF0aF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24oYnVja2V0VmFsdWUsIHBhdGhWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBncm91cC5wb3N0TW9kaWZ5KGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRVcmwodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2NhdGlvbjtcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBPYmplY3QgcmVzdWx0aW5nIGZyb20gcGFyc2luZyB0aGUgZ2l2ZW4gSlNPTiwgb3IgbnVsbCBpZiB0aGVcclxuICogZ2l2ZW4gc3RyaW5nIGRvZXMgbm90IHJlcHJlc2VudCBhIEpTT04gb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbk9iamVjdE9yTnVsbChzKSB7XHJcbiAgICB2YXIgb2JqO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBvYmogPSBKU09OLnBhcnNlKHMpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChpc05vbkFycmF5T2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBtYW5pcHVsYXRpbmcgcGF0aHMuXHJcbiAqL1xyXG4vKipcclxuICogQHJldHVybiBOdWxsIGlmIHRoZSBwYXRoIGlzIGFscmVhZHkgYXQgdGhlIHJvb3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJlbnQocGF0aCkge1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIG5ld1BhdGggPSBwYXRoLnNsaWNlKDAsIGluZGV4KTtcclxuICAgIHJldHVybiBuZXdQYXRoO1xyXG59XHJcbmZ1bmN0aW9uIGNoaWxkKHBhdGgsIGNoaWxkUGF0aCkge1xyXG4gICAgdmFyIGNhbm9uaWNhbENoaWxkUGF0aCA9IGNoaWxkUGF0aFxyXG4gICAgICAgIC5zcGxpdCgnLycpXHJcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoY29tcG9uZW50KSB7IHJldHVybiBjb21wb25lbnQubGVuZ3RoID4gMDsgfSlcclxuICAgICAgICAuam9pbignLycpO1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbm9uaWNhbENoaWxkUGF0aDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nICsgY2Fub25pY2FsQ2hpbGRQYXRoO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBsYXN0IGNvbXBvbmVudCBvZiBhIHBhdGguXHJcbiAqICcvZm9vL2JhcicgLT4gJ2JhcidcclxuICogJy9mb28vYmFyL2Jhei8nIC0+ICdiYXovJ1xyXG4gKiAnL2EnIC0+ICdhJ1xyXG4gKi9cclxuZnVuY3Rpb24gbGFzdENvbXBvbmVudChwYXRoKSB7XHJcbiAgICB2YXIgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJywgcGF0aC5sZW5ndGggLSAyKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwYXRoLnNsaWNlKGluZGV4ICsgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VVcmwodXJsUGFydCkge1xyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9cIiArIERFRkFVTFRfSE9TVCArIFwiL3YwXCIgKyB1cmxQYXJ0O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VRdWVyeVN0cmluZyhwYXJhbXMpIHtcclxuICAgIHZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICB2YXIgcXVlcnlQYXJ0ID0gJz8nO1xyXG4gICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IHJlbW92ZSBvbmNlIHR5cGVzY3JpcHQgaXMgdXBncmFkZWQgdG8gMy41LnhcclxuICAgICAgICAgICAgdmFyIG5leHRQYXJ0ID0gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUocGFyYW1zW2tleV0pO1xyXG4gICAgICAgICAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQgKyBuZXh0UGFydCArICcmJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaG9wIG9mZiB0aGUgZXh0cmEgJyYnIG9yICc/JyBvbiB0aGUgZW5kXHJcbiAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQuc2xpY2UoMCwgLTEpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5UGFydDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbm9YZm9ybV8obWV0YWRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBNYXBwaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWFwcGluZyhzZXJ2ZXIsIGxvY2FsLCB3cml0YWJsZSwgeGZvcm0pIHtcclxuICAgICAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcclxuICAgICAgICB0aGlzLmxvY2FsID0gbG9jYWwgfHwgc2VydmVyO1xyXG4gICAgICAgIHRoaXMud3JpdGFibGUgPSAhIXdyaXRhYmxlO1xyXG4gICAgICAgIHRoaXMueGZvcm0gPSB4Zm9ybSB8fCBub1hmb3JtXztcclxuICAgIH1cclxuICAgIHJldHVybiBNYXBwaW5nO1xyXG59KCkpO1xyXG52YXIgbWFwcGluZ3NfID0gbnVsbDtcclxuZnVuY3Rpb24geGZvcm1QYXRoKGZ1bGxQYXRoKSB7XHJcbiAgICBpZiAoIWlzU3RyaW5nKGZ1bGxQYXRoKSB8fCBmdWxsUGF0aC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bGxQYXRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RDb21wb25lbnQoZnVsbFBhdGgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldE1hcHBpbmdzKCkge1xyXG4gICAgaWYgKG1hcHBpbmdzXykge1xyXG4gICAgICAgIHJldHVybiBtYXBwaW5nc187XHJcbiAgICB9XHJcbiAgICB2YXIgbWFwcGluZ3MgPSBbXTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2J1Y2tldCcpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2dlbmVyYXRpb24nKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZXRhZ2VuZXJhdGlvbicpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ25hbWUnLCAnZnVsbFBhdGgnLCB0cnVlKSk7XHJcbiAgICBmdW5jdGlvbiBtYXBwaW5nc1hmb3JtUGF0aChfbWV0YWRhdGEsIGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHhmb3JtUGF0aChmdWxsUGF0aCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbmFtZU1hcHBpbmcgPSBuZXcgTWFwcGluZygnbmFtZScpO1xyXG4gICAgbmFtZU1hcHBpbmcueGZvcm0gPSBtYXBwaW5nc1hmb3JtUGF0aDtcclxuICAgIG1hcHBpbmdzLnB1c2gobmFtZU1hcHBpbmcpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2VyY2VzIHRoZSBzZWNvbmQgcGFyYW0gdG8gYSBudW1iZXIsIGlmIGl0IGlzIGRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHhmb3JtU2l6ZShfbWV0YWRhdGEsIHNpemUpIHtcclxuICAgICAgICBpZiAoaXNEZWYoc2l6ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBzaXplTWFwcGluZyA9IG5ldyBNYXBwaW5nKCdzaXplJyk7XHJcbiAgICBzaXplTWFwcGluZy54Zm9ybSA9IHhmb3JtU2l6ZTtcclxuICAgIG1hcHBpbmdzLnB1c2goc2l6ZU1hcHBpbmcpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygndGltZUNyZWF0ZWQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCd1cGRhdGVkJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWQ1SGFzaCcsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NhY2hlQ29udHJvbCcsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnREaXNwb3NpdGlvbicsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRFbmNvZGluZycsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRMYW5ndWFnZScsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRUeXBlJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWV0YWRhdGEnLCAnY3VzdG9tTWV0YWRhdGEnLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5nc18gPSBtYXBwaW5ncztcclxuICAgIHJldHVybiBtYXBwaW5nc187XHJcbn1cclxuZnVuY3Rpb24gYWRkUmVmKG1ldGFkYXRhLCBzZXJ2aWNlKSB7XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJlZigpIHtcclxuICAgICAgICB2YXIgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xyXG4gICAgICAgIHZhciBwYXRoID0gbWV0YWRhdGFbJ2Z1bGxQYXRoJ107XHJcbiAgICAgICAgdmFyIGxvYyA9IG5ldyBMb2NhdGlvbihidWNrZXQsIHBhdGgpO1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlLm1ha2VTdG9yYWdlUmVmZXJlbmNlKGxvYyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWV0YWRhdGEsICdyZWYnLCB7IGdldDogZ2VuZXJhdGVSZWYgfSk7XHJcbn1cclxuZnVuY3Rpb24gZnJvbVJlc291cmNlKHNlcnZpY2UsIHJlc291cmNlLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIG1ldGFkYXRhID0ge307XHJcbiAgICBtZXRhZGF0YVsndHlwZSddID0gJ2ZpbGUnO1xyXG4gICAgdmFyIGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xyXG4gICAgICAgIG1ldGFkYXRhW21hcHBpbmcubG9jYWxdID0gbWFwcGluZy54Zm9ybShtZXRhZGF0YSwgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdKTtcclxuICAgIH1cclxuICAgIGFkZFJlZihtZXRhZGF0YSwgc2VydmljZSk7XHJcbiAgICByZXR1cm4gbWV0YWRhdGE7XHJcbn1cclxuZnVuY3Rpb24gZnJvbVJlc291cmNlU3RyaW5nKHNlcnZpY2UsIHJlc291cmNlU3RyaW5nLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc291cmNlID0gb2JqO1xyXG4gICAgcmV0dXJuIGZyb21SZXNvdXJjZShzZXJ2aWNlLCByZXNvdXJjZSwgbWFwcGluZ3MpO1xyXG59XHJcbmZ1bmN0aW9uIGRvd25sb2FkVXJsRnJvbVJlc291cmNlU3RyaW5nKG1ldGFkYXRhLCByZXNvdXJjZVN0cmluZykge1xyXG4gICAgdmFyIG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0cmluZyhvYmpbJ2Rvd25sb2FkVG9rZW5zJ10pKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIG9iamVjdHMgYXJlIHVwbG9hZGVkIHRocm91Z2ggR0NTIGFuZCByZXRyaWV2ZWRcclxuICAgICAgICAvLyB0aHJvdWdoIGxpc3QsIHNvIHdlIGRvbid0IHdhbnQgdG8gdGhyb3cgYW4gRXJyb3IuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgdG9rZW5zID0gb2JqWydkb3dubG9hZFRva2VucyddO1xyXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICB2YXIgdG9rZW5zTGlzdCA9IHRva2Vucy5zcGxpdCgnLCcpO1xyXG4gICAgdmFyIHVybHMgPSB0b2tlbnNMaXN0Lm1hcChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICB2YXIgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xyXG4gICAgICAgIHZhciBwYXRoID0gbWV0YWRhdGFbJ2Z1bGxQYXRoJ107XHJcbiAgICAgICAgdmFyIHVybFBhcnQgPSAnL2IvJyArIGVuY29kZShidWNrZXQpICsgJy9vLycgKyBlbmNvZGUocGF0aCk7XHJcbiAgICAgICAgdmFyIGJhc2UgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgICAgIHZhciBxdWVyeVN0cmluZyA9IG1ha2VRdWVyeVN0cmluZyh7XHJcbiAgICAgICAgICAgIGFsdDogJ21lZGlhJyxcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGJhc2UgKyBxdWVyeVN0cmluZztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVybHNbMF07XHJcbn1cclxuZnVuY3Rpb24gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgbWFwcGluZ3MpIHtcclxuICAgIHZhciByZXNvdXJjZSA9IHt9O1xyXG4gICAgdmFyIGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xyXG4gICAgICAgIGlmIChtYXBwaW5nLndyaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJlc291cmNlW21hcHBpbmcuc2VydmVyXSA9IG1ldGFkYXRhW21hcHBpbmcubG9jYWxdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXNvdXJjZSk7XHJcbn1cclxuZnVuY3Rpb24gbWV0YWRhdGFWYWxpZGF0b3IocCkge1xyXG4gICAgaWYgKCFpc09iamVjdChwKSB8fCAhcCkge1xyXG4gICAgICAgIHRocm93ICdFeHBlY3RlZCBNZXRhZGF0YSBvYmplY3QuJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGtleSBpbiBwKSB7XHJcbiAgICAgICAgaWYgKHAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gcFtrZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnY3VzdG9tTWV0YWRhdGEnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzT2JqZWN0KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgb2JqZWN0IGZvciBcXCdjdXN0b21NZXRhZGF0YVxcJyBtYXBwaW5nLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk1hcHBpbmcgZm9yICdcIiArIGtleSArIFwiJyBjYW5ub3QgYmUgYW4gb2JqZWN0LlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgTUFYX1JFU1VMVFNfS0VZID0gJ21heFJlc3VsdHMnO1xyXG52YXIgTUFYX01BWF9SRVNVTFRTID0gMTAwMDtcclxudmFyIFBBR0VfVE9LRU5fS0VZID0gJ3BhZ2VUb2tlbic7XHJcbnZhciBQUkVGSVhFU19LRVkgPSAncHJlZml4ZXMnO1xyXG52YXIgSVRFTVNfS0VZID0gJ2l0ZW1zJztcclxuZnVuY3Rpb24gZnJvbUJhY2tlbmRSZXNwb25zZShzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlKSB7XHJcbiAgICB2YXIgbGlzdFJlc3VsdCA9IHtcclxuICAgICAgICBwcmVmaXhlczogW10sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIG5leHRQYWdlVG9rZW46IHJlc291cmNlWyduZXh0UGFnZVRva2VuJ11cclxuICAgIH07XHJcbiAgICBpZiAocmVzb3VyY2VbUFJFRklYRVNfS0VZXSkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSByZXNvdXJjZVtQUkVGSVhFU19LRVldOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IF9hW19pXTtcclxuICAgICAgICAgICAgdmFyIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcclxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZSA9IHNlcnZpY2UubWFrZVN0b3JhZ2VSZWZlcmVuY2UobmV3IExvY2F0aW9uKGJ1Y2tldCwgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoKSk7XHJcbiAgICAgICAgICAgIGxpc3RSZXN1bHQucHJlZml4ZXMucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChyZXNvdXJjZVtJVEVNU19LRVldKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHJlc291cmNlW0lURU1TX0tFWV07IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2NbX2JdO1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gc2VydmljZS5tYWtlU3RvcmFnZVJlZmVyZW5jZShuZXcgTG9jYXRpb24oYnVja2V0LCBpdGVtWyduYW1lJ10pKTtcclxuICAgICAgICAgICAgbGlzdFJlc3VsdC5pdGVtcy5wdXNoKHJlZmVyZW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3RSZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gZnJvbVJlc3BvbnNlU3RyaW5nKHNlcnZpY2UsIGJ1Y2tldCwgcmVzb3VyY2VTdHJpbmcpIHtcclxuICAgIHZhciBvYmogPSBqc29uT2JqZWN0T3JOdWxsKHJlc291cmNlU3RyaW5nKTtcclxuICAgIGlmIChvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciByZXNvdXJjZSA9IG9iajtcclxuICAgIHJldHVybiBmcm9tQmFja2VuZFJlc3BvbnNlKHNlcnZpY2UsIGJ1Y2tldCwgcmVzb3VyY2UpO1xyXG59XHJcbmZ1bmN0aW9uIGxpc3RPcHRpb25zVmFsaWRhdG9yKHApIHtcclxuICAgIGlmICghaXNPYmplY3QocCkgfHwgIXApIHtcclxuICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgTGlzdE9wdGlvbnMgb2JqZWN0Lic7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcCkge1xyXG4gICAgICAgIGlmIChrZXkgPT09IE1BWF9SRVNVTFRTX0tFWSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzSW50ZWdlcihwW01BWF9SRVNVTFRTX0tFWV0pIHx8XHJcbiAgICAgICAgICAgICAgICBwW01BWF9SRVNVTFRTX0tFWV0gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIG1heFJlc3VsdHMgdG8gYmUgYSBwb3NpdGl2ZSBudW1iZXIuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocFtNQVhfUkVTVUxUU19LRVldID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJFeHBlY3RlZCBtYXhSZXN1bHRzIHRvIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBcIiArIE1BWF9NQVhfUkVTVUxUUyArIFwiLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gUEFHRV9UT0tFTl9LRVkpIHtcclxuICAgICAgICAgICAgaWYgKHBbUEFHRV9UT0tFTl9LRVldICYmICFpc1N0cmluZyhwW1BBR0VfVE9LRU5fS0VZXSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBwYWdlVG9rZW4gdG8gYmUgc3RyaW5nLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93ICdVbmtub3duIG9wdGlvbjogJyArIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBSZXF1ZXN0SW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgd2l0aCB3aGljaCB0byByZXNvbHZlIHRoZSByZXF1ZXN0J3MgcHJvbWlzZS4gT25seSBjYWxsZWRcclxuICAgICAqIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuIFRocm93IGZyb20gdGhpcyBmdW5jdGlvbiB0byByZWplY3QgdGhlXHJcbiAgICAgKiByZXR1cm5lZCBSZXF1ZXN0J3MgcHJvbWlzZSB3aXRoIHRoZSB0aHJvd24gZXJyb3IuXHJcbiAgICAgKiBOb3RlOiBUaGUgWGhySW8gcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gbWF5IGJlIHJldXNlZCBhZnRlciB0aGlzIGNhbGxiYWNrXHJcbiAgICAgKiByZXR1cm5zLiBEbyBub3Qga2VlcCBhIHJlZmVyZW5jZSB0byBpdCBpbiBhbnkgd2F5LlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMudXJsUGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVycm9ySGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgbnVtYmVyIG9mIGJ5dGVzIHVwbG9hZGVkIGFuZCB0b3RhbCBzaXplICgtMSBpZiBub3RcclxuICAgICAgICAgKiBjb21wdXRhYmxlKSBvZiB0aGUgcmVxdWVzdCBib2R5IChpLmUuIHVzZWQgdG8gcmVwb3J0IHVwbG9hZCBwcm9ncmVzcykuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN1Y2Nlc3NDb2RlcyA9IFsyMDBdO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFJldHJ5Q29kZXMgPSBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXF1ZXN0SW5mbztcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgdGhlIFVOS05PV04gRmlyZWJhc2VTdG9yYWdlRXJyb3IgaWYgY25kbiBpcyBmYWxzZS5cclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZXJDaGVjayhjbmRuKSB7XHJcbiAgICBpZiAoIWNuZG4pIHtcclxuICAgICAgICB0aHJvdyB1bmtub3duKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWV0YWRhdGFIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YSA9IGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBsaXN0SGFuZGxlcihzZXJ2aWNlLCBidWNrZXQpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGxpc3RSZXN1bHQgPSBmcm9tUmVzcG9uc2VTdHJpbmcoc2VydmljZSwgYnVja2V0LCB0ZXh0KTtcclxuICAgICAgICBoYW5kbGVyQ2hlY2sobGlzdFJlc3VsdCAhPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBkb3dubG9hZFVybEhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gZnJvbVJlc291cmNlU3RyaW5nKHNlcnZpY2UsIHRleHQsIG1hcHBpbmdzKTtcclxuICAgICAgICBoYW5kbGVyQ2hlY2sobWV0YWRhdGEgIT09IG51bGwpO1xyXG4gICAgICAgIHJldHVybiBkb3dubG9hZFVybEZyb21SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgdGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pIHtcclxuICAgIGZ1bmN0aW9uIGVycm9ySGFuZGxlcih4aHIsIGVycikge1xyXG4gICAgICAgIHZhciBuZXdFcnI7XHJcbiAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIG5ld0VyciA9IHVuYXV0aGVudGljYXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdFcnIgPSBxdW90YUV4Y2VlZGVkKGxvY2F0aW9uLmJ1Y2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFcnIgPSB1bmF1dGhvcml6ZWQobG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFcnIgPSBlcnI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3RXJyLnNldFNlcnZlclJlc3BvbnNlUHJvcChlcnIuc2VydmVyUmVzcG9uc2VQcm9wKCkpO1xyXG4gICAgICAgIHJldHVybiBuZXdFcnI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JIYW5kbGVyO1xyXG59XHJcbmZ1bmN0aW9uIG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbikge1xyXG4gICAgdmFyIHNoYXJlZCA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcclxuICAgICAgICB2YXIgbmV3RXJyID0gc2hhcmVkKHhociwgZXJyKTtcclxuICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDQpIHtcclxuICAgICAgICAgICAgbmV3RXJyID0gb2JqZWN0Tm90Rm91bmQobG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0Vyci5zZXRTZXJ2ZXJSZXNwb25zZVByb3AoZXJyLnNlcnZlclJlc3BvbnNlUHJvcCgpKTtcclxuICAgICAgICByZXR1cm4gbmV3RXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ySGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBnZXRNZXRhZGF0YShzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MpIHtcclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gbGlzdChzZXJ2aWNlLCBsb2NhdGlvbiwgZGVsaW1pdGVyLCBwYWdlVG9rZW4sIG1heFJlc3VsdHMpIHtcclxuICAgIHZhciB1cmxQYXJhbXMgPSB7fTtcclxuICAgIGlmIChsb2NhdGlvbi5pc1Jvb3QpIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3ByZWZpeCddID0gJyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3ByZWZpeCddID0gbG9jYXRpb24ucGF0aCArICcvJztcclxuICAgIH1cclxuICAgIGlmIChkZWxpbWl0ZXIgJiYgZGVsaW1pdGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ2RlbGltaXRlciddID0gZGVsaW1pdGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2VUb2tlbikge1xyXG4gICAgICAgIHVybFBhcmFtc1sncGFnZVRva2VuJ10gPSBwYWdlVG9rZW47XHJcbiAgICB9XHJcbiAgICBpZiAobWF4UmVzdWx0cykge1xyXG4gICAgICAgIHVybFBhcmFtc1snbWF4UmVzdWx0cyddID0gbWF4UmVzdWx0cztcclxuICAgIH1cclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uYnVja2V0T25seVNlcnZlclVybCgpO1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBsaXN0SGFuZGxlcihzZXJ2aWNlLCBsb2NhdGlvbi5idWNrZXQpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG93bmxvYWRVcmwoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgZG93bmxvYWRVcmxIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZU1ldGFkYXRhKHNlcnZpY2UsIGxvY2F0aW9uLCBtZXRhZGF0YSwgbWFwcGluZ3MpIHtcclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BBVENIJztcclxuICAgIHZhciBib2R5ID0gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgbWFwcGluZ3MpO1xyXG4gICAgdmFyIGhlYWRlcnMgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcgfTtcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KHNlcnZpY2UsIGxvY2F0aW9uKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdERUxFVEUnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoX3hociwgX3RleHQpIHsgfVxyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcyA9IFsyMDAsIDIwNF07XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGRldGVybWluZUNvbnRlbnRUeXBlXyhtZXRhZGF0YSwgYmxvYikge1xyXG4gICAgcmV0dXJuICgobWV0YWRhdGEgJiYgbWV0YWRhdGFbJ2NvbnRlbnRUeXBlJ10pIHx8XHJcbiAgICAgICAgKGJsb2IgJiYgYmxvYi50eXBlKCkpIHx8XHJcbiAgICAgICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpIHtcclxuICAgIHZhciBtZXRhZGF0YUNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YWRhdGEpO1xyXG4gICAgbWV0YWRhdGFDbG9uZVsnZnVsbFBhdGgnXSA9IGxvY2F0aW9uLnBhdGg7XHJcbiAgICBtZXRhZGF0YUNsb25lWydzaXplJ10gPSBibG9iLnNpemUoKTtcclxuICAgIGlmICghbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSkge1xyXG4gICAgICAgIG1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10gPSBkZXRlcm1pbmVDb250ZW50VHlwZV8obnVsbCwgYmxvYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWV0YWRhdGFDbG9uZTtcclxufVxyXG5mdW5jdGlvbiBtdWx0aXBhcnRVcGxvYWQoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzLCBibG9iLCBtZXRhZGF0YSkge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5idWNrZXRPbmx5U2VydmVyVXJsKCk7XHJcbiAgICB2YXIgaGVhZGVycyA9IHtcclxuICAgICAgICAnWC1Hb29nLVVwbG9hZC1Qcm90b2NvbCc6ICdtdWx0aXBhcnQnXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZ2VuQm91bmRhcnkoKSB7XHJcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHN0ciArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zbGljZSgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHZhciBib3VuZGFyeSA9IGdlbkJvdW5kYXJ5KCk7XHJcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdtdWx0aXBhcnQvcmVsYXRlZDsgYm91bmRhcnk9JyArIGJvdW5kYXJ5O1xyXG4gICAgdmFyIG1ldGFkYXRhXyA9IG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpO1xyXG4gICAgdmFyIG1ldGFkYXRhU3RyaW5nID0gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YV8sIG1hcHBpbmdzKTtcclxuICAgIHZhciBwcmVCbG9iUGFydCA9ICctLScgK1xyXG4gICAgICAgIGJvdW5kYXJ5ICtcclxuICAgICAgICAnXFxyXFxuJyArXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFxcclxcblxcclxcbicgK1xyXG4gICAgICAgIG1ldGFkYXRhU3RyaW5nICtcclxuICAgICAgICAnXFxyXFxuLS0nICtcclxuICAgICAgICBib3VuZGFyeSArXHJcbiAgICAgICAgJ1xcclxcbicgK1xyXG4gICAgICAgICdDb250ZW50LVR5cGU6ICcgK1xyXG4gICAgICAgIG1ldGFkYXRhX1snY29udGVudFR5cGUnXSArXHJcbiAgICAgICAgJ1xcclxcblxcclxcbic7XHJcbiAgICB2YXIgcG9zdEJsb2JQYXJ0ID0gJ1xcclxcbi0tJyArIGJvdW5kYXJ5ICsgJy0tJztcclxuICAgIHZhciBib2R5ID0gRmJzQmxvYi5nZXRCbG9iKHByZUJsb2JQYXJ0LCBibG9iLCBwb3N0QmxvYlBhcnQpO1xyXG4gICAgaWYgKGJvZHkgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBjYW5ub3RTbGljZUJsb2IoKTtcclxuICAgIH1cclxuICAgIHZhciB1cmxQYXJhbXMgPSB7IG5hbWU6IG1ldGFkYXRhX1snZnVsbFBhdGgnXSB9O1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgbWV0YWRhdGFIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5LnVwbG9hZERhdGEoKTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBjdXJyZW50IFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCBoYXZlIGJlZW4gdXBsb2FkZWQgc28gZmFyLlxyXG4gKiBAcGFyYW0gdG90YWwgVGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBpbiB0aGUgdXBsb2FkLlxyXG4gKiBAcGFyYW0gb3B0X2ZpbmFsaXplZCBUcnVlIGlmIHRoZSBzZXJ2ZXIgaGFzIGZpbmlzaGVkIHRoZSB1cGxvYWQuXHJcbiAqIEBwYXJhbSBvcHRfbWV0YWRhdGEgVGhlIHVwbG9hZCBtZXRhZGF0YSwgc2hvdWxkXHJcbiAqICAgICBvbmx5IGJlIHBhc3NlZCBpZiBvcHRfZmluYWxpemVkIGlzIHRydWUuXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBSZXN1bWFibGVVcGxvYWRTdGF0dXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXN1bWFibGVVcGxvYWRTdGF0dXMoY3VycmVudCwgdG90YWwsIGZpbmFsaXplZCwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9ICEhZmluYWxpemVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc3VtYWJsZVVwbG9hZFN0YXR1cztcclxufSgpKTtcclxuZnVuY3Rpb24gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgYWxsb3dlZCkge1xyXG4gICAgdmFyIHN0YXR1cyA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0YXR1cyA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1Hb29nLVVwbG9hZC1TdGF0dXMnKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBhbGxvd2VkU3RhdHVzID0gYWxsb3dlZCB8fCBbJ2FjdGl2ZSddO1xyXG4gICAgaGFuZGxlckNoZWNrKCEhc3RhdHVzICYmIGFsbG93ZWRTdGF0dXMuaW5kZXhPZihzdGF0dXMpICE9PSAtMSk7XHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc3VtYWJsZVVwbG9hZChzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciBtZXRhZGF0YUZvclVwbG9hZCA9IG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpO1xyXG4gICAgdmFyIHVybFBhcmFtcyA9IHsgbmFtZTogbWV0YWRhdGFGb3JVcGxvYWRbJ2Z1bGxQYXRoJ10gfTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ3Jlc3VtYWJsZScsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdzdGFydCcsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtTGVuZ3RoJzogYmxvYi5zaXplKCksXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtVHlwZSc6IG1ldGFkYXRhRm9yVXBsb2FkWydjb250ZW50VHlwZSddLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgIH07XHJcbiAgICB2YXIgYm9keSA9IHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGFGb3JVcGxvYWQsIG1hcHBpbmdzKTtcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhocikge1xyXG4gICAgICAgIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIpO1xyXG4gICAgICAgIHZhciB1cmw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXJsID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVVSTCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVyQ2hlY2soaXNTdHJpbmcodXJsKSk7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5O1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG4vKipcclxuICogQHBhcmFtIHVybCBGcm9tIGEgY2FsbCB0byBmYnMucmVxdWVzdHMuY3JlYXRlUmVzdW1hYmxlVXBsb2FkLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKHNlcnZpY2UsIGxvY2F0aW9uLCB1cmwsIGJsb2IpIHtcclxuICAgIHZhciBoZWFkZXJzID0geyAnWC1Hb29nLVVwbG9hZC1Db21tYW5kJzogJ3F1ZXJ5JyB9O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIpIHtcclxuICAgICAgICB2YXIgc3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XHJcbiAgICAgICAgdmFyIHNpemVTdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNpemVTdHJpbmcgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtU2l6ZS1SZWNlaXZlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpemVTdHJpbmcpIHtcclxuICAgICAgICAgICAgLy8gbnVsbCBvciBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpemUgPSBOdW1iZXIoc2l6ZVN0cmluZyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKCFpc05hTihzaXplKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMoc2l6ZSwgYmxvYi5zaXplKCksIHN0YXR1cyA9PT0gJ2ZpbmFsJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuLyoqXHJcbiAqIEFueSB1cGxvYWRzIHZpYSB0aGUgcmVzdW1hYmxlIHVwbG9hZCBBUEkgbXVzdCB0cmFuc2ZlciBhIG51bWJlciBvZiBieXRlc1xyXG4gKiB0aGF0IGlzIGEgbXVsdGlwbGUgb2YgdGhpcyBudW1iZXIuXHJcbiAqL1xyXG52YXIgcmVzdW1hYmxlVXBsb2FkQ2h1bmtTaXplID0gMjU2ICogMTAyNDtcclxuLyoqXHJcbiAqIEBwYXJhbSB1cmwgRnJvbSBhIGNhbGwgdG8gZmJzLnJlcXVlc3RzLmNyZWF0ZVJlc3VtYWJsZVVwbG9hZC5cclxuICogQHBhcmFtIGNodW5rU2l6ZSBOdW1iZXIgb2YgYnl0ZXMgdG8gdXBsb2FkLlxyXG4gKiBAcGFyYW0gc3RhdHVzIFRoZSBwcmV2aW91cyBzdGF0dXMuXHJcbiAqICAgICBJZiBub3QgcGFzc2VkIG9yIG51bGwsIHdlIHN0YXJ0IGZyb20gdGhlIGJlZ2lubmluZy5cclxuICogQHRocm93cyBmYnMuRXJyb3IgSWYgdGhlIHVwbG9hZCBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGUgcGFzc2VkIGluIHN0YXR1c1xyXG4gKiAgICAgaGFzIGEgZmluYWwgc2l6ZSBpbmNvbnNpc3RlbnQgd2l0aCB0aGUgYmxvYiwgb3IgdGhlIGJsb2IgY2Fubm90IGJlIHNsaWNlZFxyXG4gKiAgICAgZm9yIHVwbG9hZC5cclxuICovXHJcbmZ1bmN0aW9uIGNvbnRpbnVlUmVzdW1hYmxlVXBsb2FkKGxvY2F0aW9uLCBzZXJ2aWNlLCB1cmwsIGJsb2IsIGNodW5rU2l6ZSwgbWFwcGluZ3MsIHN0YXR1cywgcHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgLy8gVE9ETyhhbmR5c290byk6IHN0YW5kYXJkaXplIG9uIGludGVybmFsIGFzc2VydHNcclxuICAgIC8vIGFzc2VydCghKG9wdF9zdGF0dXMgJiYgb3B0X3N0YXR1cy5maW5hbGl6ZWQpKTtcclxuICAgIHZhciBzdGF0dXNfID0gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cygwLCAwKTtcclxuICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICBzdGF0dXNfLmN1cnJlbnQgPSBzdGF0dXMuY3VycmVudDtcclxuICAgICAgICBzdGF0dXNfLnRvdGFsID0gc3RhdHVzLnRvdGFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhdHVzXy5jdXJyZW50ID0gMDtcclxuICAgICAgICBzdGF0dXNfLnRvdGFsID0gYmxvYi5zaXplKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvYi5zaXplKCkgIT09IHN0YXR1c18udG90YWwpIHtcclxuICAgICAgICB0aHJvdyBzZXJ2ZXJGaWxlV3JvbmdTaXplKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgYnl0ZXNMZWZ0ID0gc3RhdHVzXy50b3RhbCAtIHN0YXR1c18uY3VycmVudDtcclxuICAgIHZhciBieXRlc1RvVXBsb2FkID0gYnl0ZXNMZWZ0O1xyXG4gICAgaWYgKGNodW5rU2l6ZSA+IDApIHtcclxuICAgICAgICBieXRlc1RvVXBsb2FkID0gTWF0aC5taW4oYnl0ZXNUb1VwbG9hZCwgY2h1bmtTaXplKTtcclxuICAgIH1cclxuICAgIHZhciBzdGFydEJ5dGUgPSBzdGF0dXNfLmN1cnJlbnQ7XHJcbiAgICB2YXIgZW5kQnl0ZSA9IHN0YXJ0Qnl0ZSArIGJ5dGVzVG9VcGxvYWQ7XHJcbiAgICB2YXIgdXBsb2FkQ29tbWFuZCA9IGJ5dGVzVG9VcGxvYWQgPT09IGJ5dGVzTGVmdCA/ICd1cGxvYWQsIGZpbmFsaXplJyA6ICd1cGxvYWQnO1xyXG4gICAgdmFyIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6IHVwbG9hZENvbW1hbmQsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtT2Zmc2V0Jzogc3RhdHVzXy5jdXJyZW50XHJcbiAgICB9O1xyXG4gICAgdmFyIGJvZHkgPSBibG9iLnNsaWNlKHN0YXJ0Qnl0ZSwgZW5kQnl0ZSk7XHJcbiAgICBpZiAoYm9keSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IGNhbm5vdFNsaWNlQmxvYigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogVmVyaWZ5IHRoZSBNRDUgb2YgZWFjaCB1cGxvYWRlZCByYW5nZTpcclxuICAgICAgICAvLyB0aGUgJ3gtcmFuZ2UtbWQ1JyBoZWFkZXIgY29tZXMgYmFjayB3aXRoIHN0YXR1cyBjb2RlIDMwOCByZXNwb25zZXMuXHJcbiAgICAgICAgLy8gV2UnbGwgb25seSBiZSBhYmxlIHRvIGJhaWwgb3V0IHRob3VnaCwgYmVjYXVzZSB5b3UgY2FuJ3QgcmUtdXBsb2FkIGFcclxuICAgICAgICAvLyByYW5nZSB0aGF0IHlvdSBwcmV2aW91c2x5IHVwbG9hZGVkLlxyXG4gICAgICAgIHZhciB1cGxvYWRTdGF0dXMgPSBjaGVja1Jlc3VtZUhlYWRlcl8oeGhyLCBbJ2FjdGl2ZScsICdmaW5hbCddKTtcclxuICAgICAgICB2YXIgbmV3Q3VycmVudCA9IHN0YXR1c18uY3VycmVudCArIGJ5dGVzVG9VcGxvYWQ7XHJcbiAgICAgICAgdmFyIHNpemUgPSBibG9iLnNpemUoKTtcclxuICAgICAgICB2YXIgbWV0YWRhdGE7XHJcbiAgICAgICAgaWYgKHVwbG9hZFN0YXR1cyA9PT0gJ2ZpbmFsJykge1xyXG4gICAgICAgICAgICBtZXRhZGF0YSA9IG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykoeGhyLCB0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMobmV3Q3VycmVudCwgc2l6ZSwgdXBsb2FkU3RhdHVzID09PSAnZmluYWwnLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5LnVwbG9hZERhdGEoKTtcclxuICAgIHJlcXVlc3RJbmZvLnByb2dyZXNzQ2FsbGJhY2sgPSBwcm9ncmVzc0NhbGxiYWNrIHx8IG51bGw7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIE9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2JzZXJ2ZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xyXG4gICAgICAgIHZhciBhc0Z1bmN0aW9ucyA9IGlzRnVuY3Rpb24obmV4dE9yT2JzZXJ2ZXIpIHx8XHJcbiAgICAgICAgICAgIGlzRGVmKGVycm9yKSB8fFxyXG4gICAgICAgICAgICBpc0RlZihjb21wbGV0ZSk7XHJcbiAgICAgICAgaWYgKGFzRnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IgfHwgbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlIHx8IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gb2JzZXJ2ZXIubmV4dCB8fCBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gb2JzZXJ2ZXIuZXJyb3IgfHwgbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IG9ic2VydmVyLmNvbXBsZXRlIHx8IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9ic2VydmVyO1xyXG59KCkpO1xyXG5cclxudmFyIFVwbG9hZFRhc2tTbmFwc2hvdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVwbG9hZFRhc2tTbmFwc2hvdChieXRlc1RyYW5zZmVycmVkLCB0b3RhbEJ5dGVzLCBzdGF0ZSwgbWV0YWRhdGEsIHRhc2ssIHJlZikge1xyXG4gICAgICAgIHRoaXMuYnl0ZXNUcmFuc2ZlcnJlZCA9IGJ5dGVzVHJhbnNmZXJyZWQ7XHJcbiAgICAgICAgdGhpcy50b3RhbEJ5dGVzID0gdG90YWxCeXRlcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XHJcbiAgICAgICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVXBsb2FkVGFza1NuYXBzaG90O1xyXG59KCkpO1xyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gc3BlY3MgQXJndW1lbnQgc3BlY3MuXHJcbiAqIEBwYXJhbSBwYXNzZWQgVGhlIGFjdHVhbCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuICogQHRocm93cyB7ZmJzLkVycm9yfSBJZiB0aGUgYXJndW1lbnRzIGFyZSBpbnZhbGlkLlxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGUobmFtZSwgc3BlY3MsIHBhc3NlZCkge1xyXG4gICAgdmFyIG1pbkFyZ3MgPSBzcGVjcy5sZW5ndGg7XHJcbiAgICB2YXIgbWF4QXJncyA9IHNwZWNzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BlY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3BlY3NbaV0ub3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgbWluQXJncyA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciB2YWxpZExlbmd0aCA9IG1pbkFyZ3MgPD0gcGFzc2VkLmxlbmd0aCAmJiBwYXNzZWQubGVuZ3RoIDw9IG1heEFyZ3M7XHJcbiAgICBpZiAoIXZhbGlkTGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50Q291bnQobWluQXJncywgbWF4QXJncywgbmFtZSwgcGFzc2VkLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhc3NlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNwZWNzW2ldLnZhbGlkYXRvcihwYXNzZWRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbnZhbGlkQXJndW1lbnQoaSwgbmFtZSwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGludmFsaWRBcmd1bWVudChpLCBuYW1lLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIEFyZ1NwZWMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcmdTcGVjKHZhbGlkYXRvciwgb3B0aW9uYWwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25hbCAmJiAhaXNKdXN0RGVmKHApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsaWRhdG9yKHApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9ICEhb3B0aW9uYWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJnU3BlYztcclxufSgpKTtcclxuZnVuY3Rpb24gYW5kXyh2MSwgdjIpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHYxKHApO1xyXG4gICAgICAgIHYyKHApO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdTcGVjKHZhbGlkYXRvciwgb3B0aW9uYWwpIHtcclxuICAgIGZ1bmN0aW9uIHN0cmluZ1ZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0cmluZyhwKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgc3RyaW5nLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGNoYWluZWRWYWxpZGF0b3I7XHJcbiAgICBpZiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgY2hhaW5lZFZhbGlkYXRvciA9IGFuZF8oc3RyaW5nVmFsaWRhdG9yLCB2YWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2hhaW5lZFZhbGlkYXRvciA9IHN0cmluZ1ZhbGlkYXRvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQXJnU3BlYyhjaGFpbmVkVmFsaWRhdG9yLCBvcHRpb25hbCk7XHJcbn1cclxuZnVuY3Rpb24gdXBsb2FkRGF0YVNwZWMoKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0b3IocCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHAgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8XHJcbiAgICAgICAgICAgIHAgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fFxyXG4gICAgICAgICAgICAoaXNOYXRpdmVCbG9iRGVmaW5lZCgpICYmIHAgaW5zdGFuY2VvZiBCbG9iKTtcclxuICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBCbG9iIG9yIEZpbGUuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWModmFsaWRhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBtZXRhZGF0YVNwZWMob3B0aW9uYWwpIHtcclxuICAgIHJldHVybiBuZXcgQXJnU3BlYyhtZXRhZGF0YVZhbGlkYXRvciwgb3B0aW9uYWwpO1xyXG59XHJcbmZ1bmN0aW9uIGxpc3RPcHRpb25TcGVjKG9wdGlvbmFsKSB7XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWMobGlzdE9wdGlvbnNWYWxpZGF0b3IsIG9wdGlvbmFsKTtcclxufVxyXG5mdW5jdGlvbiBub25OZWdhdGl2ZU51bWJlclNwZWMoKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0b3IocCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IGlzTnVtYmVyKHApICYmIHAgPj0gMDtcclxuICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBhIG51bWJlciAwIG9yIGdyZWF0ZXIuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWModmFsaWRhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBsb29zZU9iamVjdFNwZWModmFsaWRhdG9yLCBvcHRpb25hbCkge1xyXG4gICAgZnVuY3Rpb24gaXNMb29zZU9iamVjdFZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgdmFyIGlzTG9vc2VPYmplY3QgPSBwID09PSBudWxsIHx8IChpc0RlZihwKSAmJiBwIGluc3RhbmNlb2YgT2JqZWN0KTtcclxuICAgICAgICBpZiAoIWlzTG9vc2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGFuIE9iamVjdC4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsaWRhdG9yICE9PSB1bmRlZmluZWQgJiYgdmFsaWRhdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcihwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWMoaXNMb29zZU9iamVjdFZhbGlkYXRvciwgb3B0aW9uYWwpO1xyXG59XHJcbmZ1bmN0aW9uIG51bGxGdW5jdGlvblNwZWMob3B0aW9uYWwpIHtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gcCA9PT0gbnVsbCB8fCBpc0Z1bmN0aW9uKHApO1xyXG4gICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGEgRnVuY3Rpb24uJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWModmFsaWRhdG9yLCBvcHRpb25hbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGYgd2l0aCBpdHMgYXJndW1lbnRzIGFzeW5jaHJvbm91c2x5IGFzIGFcclxuICogbWljcm90YXNrLCBpLmUuIGFzIHNvb24gYXMgcG9zc2libGUgYWZ0ZXIgdGhlIGN1cnJlbnQgc2NyaXB0IHJldHVybnMgYmFja1xyXG4gKiBpbnRvIGJyb3dzZXIgY29kZS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGFzeW5jKGYpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3NUb0ZvcndhcmQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzVG9Gb3J3YXJkW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuYXBwbHkodm9pZCAwLCBhcmdzVG9Gb3J3YXJkKTsgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGJsb2IgYmVpbmcgdXBsb2FkZWQuIENhbiBiZSB1c2VkIHRvIHBhdXNlL3Jlc3VtZS9jYW5jZWwgdGhlXHJcbiAqIHVwbG9hZCBhbmQgbWFuYWdlIGNhbGxiYWNrcyBmb3IgdmFyaW91cyBldmVudHMuXHJcbiAqL1xyXG52YXIgVXBsb2FkVGFzayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHJlZiBUaGUgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgdGhpcyB0YXNrIGNhbWVcclxuICAgICAqICAgICBmcm9tLCB1bnR5cGVkIHRvIGF2b2lkIGN5Y2xpYyBkZXBlbmRlbmNpZXMuXHJcbiAgICAgKiBAcGFyYW0gYmxvYiBUaGUgYmxvYiB0byB1cGxvYWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFVwbG9hZFRhc2socmVmLCBzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAobWV0YWRhdGEgPT09IHZvaWQgMCkgeyBtZXRhZGF0YSA9IG51bGw7IH1cclxuICAgICAgICB0aGlzLnRyYW5zZmVycmVkXyA9IDA7XHJcbiAgICAgICAgdGhpcy5uZWVkVG9GZXRjaFN0YXR1c18gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lZWRUb0ZldGNoTWV0YWRhdGFfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNfID0gW107XHJcbiAgICAgICAgdGhpcy5lcnJvcl8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXBsb2FkVXJsXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaHVua011bHRpcGxpZXJfID0gMTtcclxuICAgICAgICB0aGlzLnJlc29sdmVfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlamVjdF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVmXyA9IHJlZjtcclxuICAgICAgICB0aGlzLnNlcnZpY2VfID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uXyA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuYmxvYl8gPSBibG9iO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGFfID0gbWV0YWRhdGE7XHJcbiAgICAgICAgdGhpcy5tYXBwaW5nc18gPSBtYXBwaW5ncztcclxuICAgICAgICB0aGlzLnJlc3VtYWJsZV8gPSB0aGlzLnNob3VsZERvUmVzdW1hYmxlXyh0aGlzLmJsb2JfKTtcclxuICAgICAgICB0aGlzLnN0YXRlXyA9IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc7XHJcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXJfID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbnVsbDtcclxuICAgICAgICAgICAgX3RoaXMuY2h1bmtNdWx0aXBsaWVyXyA9IDE7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5jb2RlRXF1YWxzKENvZGUuQ0FOQ0VMRUQpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5uZWVkVG9GZXRjaFN0YXR1c18gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yXyA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuRVJST1IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhRXJyb3JIYW5kbGVyXyA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5jb2RlRXF1YWxzKENvZGUuQ0FOQ0VMRUQpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZXJyb3JfID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZV8gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlc29sdmVfID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgX3RoaXMucmVqZWN0XyA9IHJlamVjdDtcclxuICAgICAgICAgICAgX3RoaXMuc3RhcnRfKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUHJldmVudCB1bmNhdWdodCByZWplY3Rpb25zIG9uIHRoZSBpbnRlcm5hbCBwcm9taXNlIGZyb20gYnViYmxpbmcgb3V0XHJcbiAgICAgICAgLy8gdG8gdGhlIHRvcCBsZXZlbCB3aXRoIGEgZHVtbXkgaGFuZGxlci5cclxuICAgICAgICB0aGlzLnByb21pc2VfLnRoZW4obnVsbCwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH1cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLm1ha2VQcm9ncmVzc0NhbGxiYWNrXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzaXplQmVmb3JlID0gdGhpcy50cmFuc2ZlcnJlZF87XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsb2FkZWQpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZVByb2dyZXNzXyhzaXplQmVmb3JlICsgbG9hZGVkKTsgfTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5zaG91bGREb1Jlc3VtYWJsZV8gPSBmdW5jdGlvbiAoYmxvYikge1xyXG4gICAgICAgIHJldHVybiBibG9iLnNpemUoKSA+IDI1NiAqIDEwMjQ7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuc3RhcnRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlXyAhPT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORykge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgc29tZW9uZSBwYXVzZXMgdXMgaW4gYSByZXN1bWUgY2FsbGJhY2ssIGZvciBleGFtcGxlLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmVzdW1hYmxlXykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51cGxvYWRVcmxfID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJlc3VtYWJsZV8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5lZWRUb0ZldGNoU3RhdHVzXykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hTdGF0dXNfKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uZWVkVG9GZXRjaE1ldGFkYXRhXykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYXBwZW5zIGlmIHdlIG1pc3MgdGhlIG1ldGFkYXRhIG9uIHVwbG9hZCBjb21wbGV0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoTWV0YWRhdGFfKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRpbnVlVXBsb2FkXygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbmVTaG90VXBsb2FkXygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5yZXNvbHZlVG9rZW5fID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXy5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfdGhpcy5zdGF0ZV8pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORzpcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlBBVVNFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0IGZhbHNlXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jcmVhdGVSZXN1bWFibGVfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gY3JlYXRlUmVzdW1hYmxlVXBsb2FkKF90aGlzLnNlcnZpY2VfLCBfdGhpcy5sb2NhdGlvbl8sIF90aGlzLm1hcHBpbmdzXywgX3RoaXMuYmxvYl8sIF90aGlzLm1ldGFkYXRhXyk7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGVSZXF1ZXN0ID0gX3RoaXMuc2VydmljZV8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gY3JlYXRlUmVxdWVzdDtcclxuICAgICAgICAgICAgY3JlYXRlUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGxvYWRVcmxfID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubmVlZFRvRmV0Y2hTdGF0dXNfID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5lcnJvckhhbmRsZXJfKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5mZXRjaFN0YXR1c18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMudXBsb2FkVXJsXztcclxuICAgICAgICB0aGlzLnJlc29sdmVUb2tlbl8oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBnZXRSZXN1bWFibGVVcGxvYWRTdGF0dXMoX3RoaXMuc2VydmljZV8sIF90aGlzLmxvY2F0aW9uXywgdXJsLCBfdGhpcy5ibG9iXyk7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNSZXF1ZXN0ID0gX3RoaXMuc2VydmljZV8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gc3RhdHVzUmVxdWVzdDtcclxuICAgICAgICAgICAgc3RhdHVzUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQcm9ncmVzc18oc3RhdHVzLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubmVlZFRvRmV0Y2hTdGF0dXNfID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5lZWRUb0ZldGNoTWV0YWRhdGFfID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgIH0sIF90aGlzLmVycm9ySGFuZGxlcl8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNvbnRpbnVlVXBsb2FkXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjaHVua1NpemUgPSByZXN1bWFibGVVcGxvYWRDaHVua1NpemUgKiB0aGlzLmNodW5rTXVsdGlwbGllcl87XHJcbiAgICAgICAgdmFyIHN0YXR1cyA9IG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXModGhpcy50cmFuc2ZlcnJlZF8sIHRoaXMuYmxvYl8uc2l6ZSgpKTtcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMudXBsb2FkVXJsXztcclxuICAgICAgICB0aGlzLnJlc29sdmVUb2tlbl8oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm87XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SW5mbyA9IGNvbnRpbnVlUmVzdW1hYmxlVXBsb2FkKF90aGlzLmxvY2F0aW9uXywgX3RoaXMuc2VydmljZV8sIHVybCwgX3RoaXMuYmxvYl8sIGNodW5rU2l6ZSwgX3RoaXMubWFwcGluZ3NfLCBzdGF0dXMsIF90aGlzLm1ha2VQcm9ncmVzc0NhbGxiYWNrXygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZXJyb3JfID0gZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLkVSUk9SKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdXBsb2FkUmVxdWVzdCA9IF90aGlzLnNlcnZpY2VfLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IHVwbG9hZFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHVwbG9hZFJlcXVlc3RcclxuICAgICAgICAgICAgICAgIC5nZXRQcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChuZXdTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmluY3JlYXNlTXVsdGlwbGllcl8oKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVByb2dyZXNzXyhuZXdTdGF0dXMuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RhdHVzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1ldGFkYXRhXyA9IG5ld1N0YXR1cy5tZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIF90aGlzLmVycm9ySGFuZGxlcl8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmluY3JlYXNlTXVsdGlwbGllcl8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTaXplID0gcmVzdW1hYmxlVXBsb2FkQ2h1bmtTaXplICogdGhpcy5jaHVua011bHRpcGxpZXJfO1xyXG4gICAgICAgIC8vIE1heCBjaHVuayBzaXplIGlzIDMyTS5cclxuICAgICAgICBpZiAoY3VycmVudFNpemUgPCAzMiAqIDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2h1bmtNdWx0aXBsaWVyXyAqPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5mZXRjaE1ldGFkYXRhXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVRva2VuXyhmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IGdldE1ldGFkYXRhKF90aGlzLnNlcnZpY2VfLCBfdGhpcy5sb2NhdGlvbl8sIF90aGlzLm1hcHBpbmdzXyk7XHJcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YVJlcXVlc3QgPSBfdGhpcy5zZXJ2aWNlXy5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBtZXRhZGF0YVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAobWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIF90aGlzLm1ldGFkYXRhXyA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgIH0sIF90aGlzLm1ldGFkYXRhRXJyb3JIYW5kbGVyXyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUub25lU2hvdFVwbG9hZF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlc29sdmVUb2tlbl8oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBtdWx0aXBhcnRVcGxvYWQoX3RoaXMuc2VydmljZV8sIF90aGlzLmxvY2F0aW9uXywgX3RoaXMubWFwcGluZ3NfLCBfdGhpcy5ibG9iXywgX3RoaXMubWV0YWRhdGFfKTtcclxuICAgICAgICAgICAgdmFyIG11bHRpcGFydFJlcXVlc3QgPSBfdGhpcy5zZXJ2aWNlXy5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBtdWx0aXBhcnRSZXF1ZXN0O1xyXG4gICAgICAgICAgICBtdWx0aXBhcnRSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubWV0YWRhdGFfID0gbWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQcm9ncmVzc18oX3RoaXMuYmxvYl8uc2l6ZSgpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5lcnJvckhhbmRsZXJfKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS51cGRhdGVQcm9ncmVzc18gPSBmdW5jdGlvbiAodHJhbnNmZXJyZWQpIHtcclxuICAgICAgICB2YXIgb2xkID0gdGhpcy50cmFuc2ZlcnJlZF87XHJcbiAgICAgICAgdGhpcy50cmFuc2ZlcnJlZF8gPSB0cmFuc2ZlcnJlZDtcclxuICAgICAgICAvLyBBIHByb2dyZXNzIHVwZGF0ZSBjYW4gbWFrZSB0aGUgXCJ0cmFuc2ZlcnJlZFwiIHZhbHVlIHNtYWxsZXIgKGUuZy4gYVxyXG4gICAgICAgIC8vIHBhcnRpYWwgdXBsb2FkIG5vdCBjb21wbGV0ZWQgYnkgc2VydmVyLCBhZnRlciB3aGljaCB0aGUgXCJ0cmFuc2ZlcnJlZFwiXHJcbiAgICAgICAgLy8gdmFsdWUgbWF5IHJlc2V0IHRvIHRoZSB2YWx1ZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXF1ZXN0KS5cclxuICAgICAgICBpZiAodGhpcy50cmFuc2ZlcnJlZF8gIT09IG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyc18oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUudHJhbnNpdGlvbl8gPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZV8gPT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0Xy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlBBVVNJTkc6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWVzdF8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RfLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2FzUGF1c2VkID0gdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAod2FzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydF8oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlBBVVNFRDpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyc18oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcl8gPSBjYW5jZWxlZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuRVJST1I6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNvbXBsZXRlVHJhbnNpdGlvbnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZV8pIHtcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxFRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydF8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVXBsb2FkVGFzay5wcm90b3R5cGUsIFwic25hcHNob3RcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLnN0YXRlXyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBsb2FkVGFza1NuYXBzaG90KHRoaXMudHJhbnNmZXJyZWRfLCB0aGlzLmJsb2JfLnNpemUoKSwgZXh0ZXJuYWxTdGF0ZSwgdGhpcy5tZXRhZGF0YV8sIHRoaXMsIHRoaXMucmVmXyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgY2FsbGJhY2sgZm9yIGFuIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvci5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZSwgbmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZWQpIHtcclxuICAgICAgICBmdW5jdGlvbiB0eXBlVmFsaWRhdG9yKCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IFwiRXhwZWN0ZWQgb25lIG9mIHRoZSBldmVudCB0eXBlczogW1wiICsgVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQgKyBcIl0uXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5leHRPck9ic2VydmVyTWVzc2FnZSA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uIG9yIGFuIE9iamVjdCB3aXRoIG9uZSBvZiAnICtcclxuICAgICAgICAgICAgJ2BuZXh0YCwgYGVycm9yYCwgYGNvbXBsZXRlYCBwcm9wZXJ0aWVzLic7XHJcbiAgICAgICAgdmFyIG5leHRWYWxpZGF0b3IgPSBudWxsRnVuY3Rpb25TcGVjKHRydWUpLnZhbGlkYXRvcjtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJWYWxpZGF0b3IgPSBsb29zZU9iamVjdFNwZWMobnVsbCwgdHJ1ZSkudmFsaWRhdG9yO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgZnVuY3Rpb24gbmV4dE9yT2JzZXJ2ZXJWYWxpZGF0b3IocCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFZhbGlkYXRvcihwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlclZhbGlkYXRvcihwKTtcclxuICAgICAgICAgICAgICAgIHZhciBhbnlEZWZpbmVkID0gaXNKdXN0RGVmKHBbJ25leHQnXSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBpc0p1c3REZWYocFsnZXJyb3InXSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBpc0p1c3REZWYocFsnY29tcGxldGUnXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFueURlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV4dE9yT2JzZXJ2ZXJNZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzcGVjcyA9IFtcclxuICAgICAgICAgICAgc3RyaW5nU3BlYyh0eXBlVmFsaWRhdG9yKSxcclxuICAgICAgICAgICAgbG9vc2VPYmplY3RTcGVjKG5leHRPck9ic2VydmVyVmFsaWRhdG9yLCB0cnVlKSxcclxuICAgICAgICAgICAgbnVsbEZ1bmN0aW9uU3BlYyh0cnVlKSxcclxuICAgICAgICAgICAgbnVsbEZ1bmN0aW9uU3BlYyh0cnVlKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFsaWRhdGUoJ29uJywgc3BlY3MsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VCaW5kZXIoc3BlY3MpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYmluZGVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKCdvbicsIHNwZWNzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYWRkT2JzZXJ2ZXJfKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVPYnNlcnZlcl8ob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYmluZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBiaW5kZXJOZXh0T3JPYnNlcnZlclZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgICAgIGlmIChwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXh0T3JPYnNlcnZlck1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV4dE9yT2JzZXJ2ZXJWYWxpZGF0b3IocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiaW5kZXJTcGVjcyA9IFtcclxuICAgICAgICAgICAgbG9vc2VPYmplY3RTcGVjKGJpbmRlck5leHRPck9ic2VydmVyVmFsaWRhdG9yKSxcclxuICAgICAgICAgICAgbnVsbEZ1bmN0aW9uU3BlYyh0cnVlKSxcclxuICAgICAgICAgICAgbnVsbEZ1bmN0aW9uU3BlYyh0cnVlKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIHR5cGVPbmx5ID0gIShpc0p1c3REZWYobmV4dE9yT2JzZXJ2ZXIpIHx8XHJcbiAgICAgICAgICAgIGlzSnVzdERlZihlcnJvcikgfHxcclxuICAgICAgICAgICAgaXNKdXN0RGVmKGNvbXBsZXRlZCkpO1xyXG4gICAgICAgIGlmICh0eXBlT25seSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUJpbmRlcihiaW5kZXJTcGVjcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUJpbmRlcihudWxsKShuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBvYmplY3QgYmVoYXZlcyBsaWtlIGEgUHJvbWlzZSwgYW5kIHJlc29sdmVzIHdpdGggaXRzIHNuYXBzaG90IGRhdGFcclxuICAgICAqIHdoZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb25GdWxmaWxsZWQgVGhlIGZ1bGZpbGxtZW50IGNhbGxiYWNrLiBQcm9taXNlIGNoYWluaW5nIHdvcmtzIGFzIG5vcm1hbC5cclxuICAgICAqIEBwYXJhbSBvblJlamVjdGVkIFRoZSByZWplY3Rpb24gY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuICAgICAgICAvLyBUaGVzZSBjYXN0cyBhcmUgbmVlZGVkIHNvIHRoYXQgVHlwZVNjcmlwdCBjYW4gaW5mZXIgdGhlIHR5cGVzIG9mIHRoZVxyXG4gICAgICAgIC8vIHJlc3VsdGluZyBQcm9taXNlLlxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VfLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRXF1aXZhbGVudCB0byBjYWxsaW5nIGB0aGVuKG51bGwsIG9uUmVqZWN0ZWQpYC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBvYnNlcnZlci5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuYWRkT2JzZXJ2ZXJfID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJfKG9ic2VydmVyKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIG9ic2VydmVyLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlcl8gPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXMub2JzZXJ2ZXJzXy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUubm90aWZ5T2JzZXJ2ZXJzXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmluaXNoUHJvbWlzZV8oKTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfLnNsaWNlKCk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVyXyhvYnNlcnZlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuZmluaXNoUHJvbWlzZV8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzb2x2ZV8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGFza1N0YXRlRnJvbUludGVybmFsVGFza1N0YXRlKHRoaXMuc3RhdGVfKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyh0aGlzLnJlc29sdmVfLmJpbmQobnVsbCwgdGhpcy5zbmFwc2hvdCkpKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5DQU5DRUxFRDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLkVSUk9SOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0NhbGwgPSB0aGlzLnJlamVjdF87XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmModG9DYWxsLmJpbmQobnVsbCwgdGhpcy5lcnJvcl8pKSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJpZ2dlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVfID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVqZWN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUubm90aWZ5T2JzZXJ2ZXJfID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIGV4dGVybmFsU3RhdGUgPSB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUodGhpcy5zdGF0ZV8pO1xyXG4gICAgICAgIHN3aXRjaCAoZXh0ZXJuYWxTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5SVU5OSU5HOlxyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5QQVVTRUQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciwgdGhpcy5zbmFwc2hvdCkpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLkNBTkNFTEVEOlxyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5FUlJPUjpcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIsIHRoaXMuZXJyb3JfKSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyhvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyLCB0aGlzLmVycm9yXykpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVzdW1lcyBhIHBhdXNlZCB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgY3VycmVudGx5IHJ1bm5pbmcgb3IgZmFpbGVkIHRhc2suXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhbGlkYXRlKCdyZXN1bWUnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZXMgYSBjdXJyZW50bHkgcnVubmluZyB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgcGF1c2VkIG9yIGZhaWxlZCB0YXNrLlxyXG4gICAgICogQHJldHVybiBUcnVlIGlmIHRoZSBvcGVyYXRpb24gdG9vayBlZmZlY3QsIGZhbHNlIGlmIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhbGlkYXRlKCdwYXVzZScsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIGEgY3VycmVudGx5IHJ1bm5pbmcgb3IgcGF1c2VkIHRhc2suIEhhcyBubyBlZmZlY3Qgb24gYSBjb21wbGV0ZSBvclxyXG4gICAgICogZmFpbGVkIHRhc2suXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhbGlkYXRlKCdjYW5jZWwnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORztcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVwbG9hZFRhc2s7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUHJvdmlkZXMgbWV0aG9kcyB0byBpbnRlcmFjdCB3aXRoIGEgYnVja2V0IGluIHRoZSBGaXJlYmFzZSBTdG9yYWdlIHNlcnZpY2UuXHJcbiAqIEBwYXJhbSBsb2NhdGlvbiBBbiBmYnMubG9jYXRpb24sIG9yIHRoZSBVUkwgYXRcclxuICogICAgIHdoaWNoIHRvIGJhc2UgdGhpcyBvYmplY3QsIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1zOlxyXG4gKiAgICAgICAgIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxyXG4gKiAgICAgICAgIGh0dHBbc106Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vXHJcbiAqICAgICAgICAgICAgICAgICAgICAgPGFwaS12ZXJzaW9uPi9iLzxidWNrZXQ+L28vPG9iamVjdC1wYXRoPlxyXG4gKiAgICAgQW55IHF1ZXJ5IG9yIGZyYWdtZW50IHN0cmluZ3Mgd2lsbCBiZSBpZ25vcmVkIGluIHRoZSBodHRwW3NdXHJcbiAqICAgICBmb3JtYXQuIElmIG5vIHZhbHVlIGlzIHBhc3NlZCwgdGhlIHN0b3JhZ2Ugb2JqZWN0IHdpbGwgdXNlIGEgVVJMIGJhc2VkIG9uXHJcbiAqICAgICB0aGUgcHJvamVjdCBJRCBvZiB0aGUgYmFzZSBmaXJlYmFzZS5BcHAgaW5zdGFuY2UuXHJcbiAqL1xyXG52YXIgUmVmZXJlbmNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVmZXJlbmNlKHNlcnZpY2UsIGxvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBMb2NhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gTG9jYXRpb24ubWFrZUZyb21VcmwobG9jYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiBUaGUgVVJMIGZvciB0aGUgYnVja2V0IGFuZCBwYXRoIHRoaXMgb2JqZWN0IHJlZmVyZW5jZXMsXHJcbiAgICAgKiAgICAgaW4gdGhlIGZvcm0gZ3M6Ly88YnVja2V0Pi88b2JqZWN0LXBhdGg+XHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgndG9TdHJpbmcnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gJ2dzOi8vJyArIHRoaXMubG9jYXRpb24uYnVja2V0ICsgJy8nICsgdGhpcy5sb2NhdGlvbi5wYXRoO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubmV3UmVmID0gZnVuY3Rpb24gKHNlcnZpY2UsIGxvY2F0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2Uoc2VydmljZSwgbG9jYXRpb24pO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubWFwcGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldE1hcHBpbmdzKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIEEgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3Qgb2J0YWluZWQgYnlcclxuICAgICAqICAgICBhcHBlbmRpbmcgY2hpbGRQYXRoLCByZW1vdmluZyBhbnkgZHVwbGljYXRlLCBiZWdpbm5pbmcsIG9yIHRyYWlsaW5nXHJcbiAgICAgKiAgICAgc2xhc2hlcy5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5jaGlsZCA9IGZ1bmN0aW9uIChjaGlsZFBhdGgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnY2hpbGQnLCBbc3RyaW5nU3BlYygpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgbmV3UGF0aCA9IGNoaWxkKHRoaXMubG9jYXRpb24ucGF0aCwgY2hpbGRQYXRoKTtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24odGhpcy5sb2NhdGlvbi5idWNrZXQsIG5ld1BhdGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ld1JlZih0aGlzLnNlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm4gQSByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBvZiB0aGVcclxuICAgICAgICAgKiAgICAgY3VycmVudCBvYmplY3QsIG9yIG51bGwgaWYgdGhlIGN1cnJlbnQgb2JqZWN0IGlzIHRoZSByb290LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9IHBhcmVudCh0aGlzLmxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobmV3UGF0aCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMubG9jYXRpb24uYnVja2V0LCBuZXdQYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3UmVmKHRoaXMuc2VydmljZSwgbG9jYXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWZlcmVuY2UucHJvdG90eXBlLCBcInJvb3RcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm4gQW4gcmVmZXJlbmNlIHRvIHRoZSByb290IG9mIHRoaXNcclxuICAgICAgICAgKiAgICAgb2JqZWN0J3MgYnVja2V0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24odGhpcy5sb2NhdGlvbi5idWNrZXQsICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3UmVmKHRoaXMuc2VydmljZSwgbG9jYXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWZlcmVuY2UucHJvdG90eXBlLCBcImJ1Y2tldFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLmJ1Y2tldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJmdWxsUGF0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnBhdGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXN0Q29tcG9uZW50KHRoaXMubG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwic3RvcmFnZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWRzIGEgYmxvYiB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGJsb2IgdG8gdXBsb2FkLlxyXG4gICAgICogQHJldHVybiBBbiBVcGxvYWRUYXNrIHRoYXQgbGV0cyB5b3UgY29udHJvbCBhbmRcclxuICAgICAqICAgICBvYnNlcnZlIHRoZSB1cGxvYWQuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGRhdGEsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhID09PSB2b2lkIDApIHsgbWV0YWRhdGEgPSBudWxsOyB9XHJcbiAgICAgICAgdmFsaWRhdGUoJ3B1dCcsIFt1cGxvYWREYXRhU3BlYygpLCBtZXRhZGF0YVNwZWModHJ1ZSldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMudGhyb3dJZlJvb3RfKCdwdXQnKTtcclxuICAgICAgICByZXR1cm4gbmV3IFVwbG9hZFRhc2sodGhpcywgdGhpcy5zZXJ2aWNlLCB0aGlzLmxvY2F0aW9uLCB0aGlzLm1hcHBpbmdzKCksIG5ldyBGYnNCbG9iKGRhdGEpLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWRzIGEgc3RyaW5nIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byB1cGxvYWQuXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFRoZSBmb3JtYXQgb2YgdGhlIHN0cmluZyB0byB1cGxvYWQuXHJcbiAgICAgKiBAcmV0dXJuIEFuIFVwbG9hZFRhc2sgdGhhdCBsZXRzIHlvdSBjb250cm9sIGFuZFxyXG4gICAgICogICAgIG9ic2VydmUgdGhlIHVwbG9hZC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5wdXRTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIGZvcm1hdCwgbWV0YWRhdGEpIHtcclxuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gU3RyaW5nRm9ybWF0LlJBVzsgfVxyXG4gICAgICAgIHZhbGlkYXRlKCdwdXRTdHJpbmcnLCBbc3RyaW5nU3BlYygpLCBzdHJpbmdTcGVjKGZvcm1hdFZhbGlkYXRvciwgdHJ1ZSksIG1ldGFkYXRhU3BlYyh0cnVlKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ3B1dFN0cmluZycpO1xyXG4gICAgICAgIHZhciBkYXRhID0gZGF0YUZyb21TdHJpbmcoZm9ybWF0LCB2YWx1ZSk7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgaWYgKCFpc0RlZihtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddKSAmJlxyXG4gICAgICAgICAgICBpc0RlZihkYXRhLmNvbnRlbnRUeXBlKSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID0gZGF0YS5jb250ZW50VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcGxvYWRUYXNrKHRoaXMsIHRoaXMuc2VydmljZSwgdGhpcy5sb2NhdGlvbiwgdGhpcy5tYXBwaW5ncygpLCBuZXcgRmJzQmxvYihkYXRhLmRhdGEsIHRydWUpLCBtZXRhZGF0YUNsb25lKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgdGhlIG9iamVjdCBhdCB0aGlzIGxvY2F0aW9uLlxyXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgZGVsZXRpb24gc3VjY2VlZHMuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFsaWRhdGUoJ2RlbGV0ZScsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMudGhyb3dJZlJvb3RfKCdkZWxldGUnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBkZWxldGVPYmplY3QoX3RoaXMuc2VydmljZSwgX3RoaXMubG9jYXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2VydmljZS5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKS5nZXRQcm9taXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IGFsbCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCBmb3IgY2FsbGluZyBsaXN0KCkgcmVwZWF0ZWRseSB1bnRpbCB0aGVyZSBhcmVcclxuICAgICAqIG5vIG1vcmUgcmVzdWx0cy4gVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBzaXplIGlzIDEwMDAuXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhlIHJlc3VsdHMgbWF5IG5vdCBiZSBjb25zaXN0ZW50IGlmIG9iamVjdHMgYXJlIGNoYW5nZWQgd2hpbGUgdGhpc1xyXG4gICAgICogb3BlcmF0aW9uIGlzIHJ1bm5pbmcuXHJcbiAgICAgKlxyXG4gICAgICogV2FybmluZzogbGlzdEFsbCBtYXkgcG90ZW50aWFsbHkgY29uc3VtZSB0b28gbWFueSByZXNvdXJjZXMgaWYgdGhlcmUgYXJlXHJcbiAgICAgKiB0b28gbWFueSByZXN1bHRzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwgdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcyB1bmRlclxyXG4gICAgICogICAgICB0aGUgY3VycmVudCBzdG9yYWdlIHJlZmVyZW5jZS4gYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvXHJcbiAgICAgKiAgICAgIHN1Yi1kaXJlY3RvcmllcyBhbmQgYGl0ZW1zYCBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpc1xyXG4gICAgICogICAgICBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYCBpcyBuZXZlciByZXR1cm5lZC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5saXN0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhbGlkYXRlKCdsaXN0QWxsJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIGFjY3VtdWxhdG9yID0ge1xyXG4gICAgICAgICAgICBwcmVmaXhlczogW10sXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEFsbEhlbHBlcihhY2N1bXVsYXRvcikudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBhY2N1bXVsYXRvcjsgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5saXN0QWxsSGVscGVyID0gZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBwYWdlVG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQsIG5leHRQYWdlO1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXhSZXN1bHRzIGlzIDEwMDAgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VUb2tlbjogcGFnZVRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubGlzdChvcHQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBhY2N1bXVsYXRvci5wcmVmaXhlcykucHVzaC5hcHBseShfYSwgbmV4dFBhZ2UucHJlZml4ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBhY2N1bXVsYXRvci5pdGVtcykucHVzaC5hcHBseShfYiwgbmV4dFBhZ2UuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShuZXh0UGFnZS5uZXh0UGFnZVRva2VuICE9IG51bGwpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5saXN0QWxsSGVscGVyKGFjY3VtdWxhdG9yLCBuZXh0UGFnZS5uZXh0UGFnZVRva2VuKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IGl0ZW1zIChmaWxlcykgYW5kIHByZWZpeGVzIChmb2xkZXJzKSB1bmRlciB0aGlzIHN0b3JhZ2UgcmVmZXJlbmNlLlxyXG4gICAgICpcclxuICAgICAqIExpc3QgQVBJIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBGaXJlYmFzZSBSdWxlcyBWZXJzaW9uIDIuXHJcbiAgICAgKlxyXG4gICAgICogR0NTIGlzIGEga2V5LWJsb2Igc3RvcmUuIEZpcmViYXNlIFN0b3JhZ2UgaW1wb3NlcyB0aGUgc2VtYW50aWMgb2YgJy8nXHJcbiAgICAgKiBkZWxpbWl0ZWQgZm9sZGVyIHN0cnVjdHVyZS5cclxuICAgICAqIFJlZmVyIHRvIEdDUydzIExpc3QgQVBJIGlmIHlvdSB3YW50IHRvIGxlYXJuIG1vcmUuXHJcbiAgICAgKlxyXG4gICAgICogVG8gYWRoZXJlIHRvIEZpcmViYXNlIFJ1bGVzJ3MgU2VtYW50aWNzLCBGaXJlYmFzZSBTdG9yYWdlIGRvZXMgbm90XHJcbiAgICAgKiBzdXBwb3J0IG9iamVjdHMgd2hvc2UgcGF0aHMgZW5kIHdpdGggXCIvXCIgb3IgY29udGFpbiB0d28gY29uc2VjdXRpdmVcclxuICAgICAqIFwiL1wicy4gRmlyZWJhc2UgU3RvcmFnZSBMaXN0IEFQSSB3aWxsIGZpbHRlciB0aGVzZSB1bnN1cHBvcnRlZCBvYmplY3RzLlxyXG4gICAgICogbGlzdCgpIG1heSBmYWlsIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1bnN1cHBvcnRlZCBvYmplY3RzIGluIHRoZSBidWNrZXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgU2VlIExpc3RPcHRpb25zIGZvciBkZXRhaWxzLlxyXG4gICAgICogQHJldHVybiBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMuXHJcbiAgICAgKiAgICAgIGBwcmVmaXhlc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBzdWItZm9sZGVycyBhbmQgYGl0ZW1zYFxyXG4gICAgICogICAgICBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpcyBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYFxyXG4gICAgICogICAgICBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIHJlc3Qgb2YgdGhlIHJlc3VsdHMuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ2xpc3QnLCBbbGlzdE9wdGlvblNwZWModHJ1ZSldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgb3AgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBsaXN0KHNlbGYuc2VydmljZSwgc2VsZi5sb2NhdGlvbiwgXHJcbiAgICAgICAgICAgIC8qZGVsaW1pdGVyPSAqLyAnLycsIG9wLnBhZ2VUb2tlbiwgb3AubWF4UmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnNlcnZpY2UubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbikuZ2V0UHJvbWlzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogICAgIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC4gSWYgdGhpc1xyXG4gICAgICogICAgIG9iamVjdCBkb2Vzbid0IGV4aXN0IG9yIG1ldGFkYXRhIGNhbm5vdCBiZSByZXRyZWl2ZWQsIHRoZSBwcm9taXNlIGlzXHJcbiAgICAgKiAgICAgcmVqZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUuZ2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YWxpZGF0ZSgnZ2V0TWV0YWRhdGEnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygnZ2V0TWV0YWRhdGEnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBnZXRNZXRhZGF0YShfdGhpcy5zZXJ2aWNlLCBfdGhpcy5sb2NhdGlvbiwgX3RoaXMubWFwcGluZ3MoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXJ2aWNlLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pLmdldFByb21pc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBtZXRhZGF0YSBUaGUgbmV3IG1ldGFkYXRhIGZvciB0aGUgb2JqZWN0LlxyXG4gICAgICogICAgIE9ubHkgdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIGV4cGxpY2l0bHkgc2V0IHdpbGwgYmUgY2hhbmdlZC4gRXhwbGljaXRseVxyXG4gICAgICogICAgIHNldHRpbmcgYSB2YWx1ZSB0byBudWxsIHdpbGwgcmVtb3ZlIHRoZSBtZXRhZGF0YS5cclxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXNcclxuICAgICAqICAgICB3aXRoIHRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxyXG4gICAgICogICAgIEBzZWUgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZS5wcm90b3R5cGUuZ2V0TWV0YWRhdGFcclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS51cGRhdGVNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3VwZGF0ZU1ldGFkYXRhJywgW21ldGFkYXRhU3BlYygpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygndXBkYXRlTWV0YWRhdGEnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSB1cGRhdGVNZXRhZGF0YShfdGhpcy5zZXJ2aWNlLCBfdGhpcy5sb2NhdGlvbiwgbWV0YWRhdGEsIF90aGlzLm1hcHBpbmdzKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc2VydmljZS5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKS5nZXRQcm9taXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkXHJcbiAgICAgKiAgICAgVVJMIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5nZXREb3dubG9hZFVSTCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhbGlkYXRlKCdnZXREb3dubG9hZFVSTCcsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMudGhyb3dJZlJvb3RfKCdnZXREb3dubG9hZFVSTCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0QXV0aFRva2VuKCkudGhlbihmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IGdldERvd25sb2FkVXJsKF90aGlzLnNlcnZpY2UsIF90aGlzLmxvY2F0aW9uLCBfdGhpcy5tYXBwaW5ncygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKVxyXG4gICAgICAgICAgICAgICAgLmdldFByb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5vRG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudGhyb3dJZlJvb3RfID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbi5wYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZmVyZW5jZTtcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBBIHJlcXVlc3Qgd2hvc2UgcHJvbWlzZSBhbHdheXMgZmFpbHMuXHJcbiAqIEBzdHJ1Y3RcclxuICogQHRlbXBsYXRlIFRcclxuICovXHJcbnZhciBGYWlsUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZhaWxSZXF1ZXN0KGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlXyA9IFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgRmFpbFJlcXVlc3QucHJvdG90eXBlLmdldFByb21pc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBGYWlsUmVxdWVzdC5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKF9hcHBEZWxldGUpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmFpbFJlcXVlc3Q7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIGYgTWF5IGJlIGludm9rZWRcclxuICogICAgIGJlZm9yZSB0aGUgZnVuY3Rpb24gcmV0dXJucy5cclxuICogQHBhcmFtIGNhbGxiYWNrIEdldCBhbGwgdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqICAgICBwYXNzZWQgdG8gZiwgaW5jbHVkaW5nIHRoZSBpbml0aWFsIGJvb2xlYW4uXHJcbiAqL1xyXG5mdW5jdGlvbiBzdGFydChmLCBcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuY2FsbGJhY2ssIHRpbWVvdXQpIHtcclxuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBtYWtlIHRoaXMgY29kZSBjbGVhbmVyIChwcm9iYWJseSByZWZhY3RvciBpbnRvIGFuIGFjdHVhbFxyXG4gICAgLy8gdHlwZSBpbnN0ZWFkIG9mIGEgYnVuY2ggb2YgZnVuY3Rpb25zIHdpdGggc3RhdGUgc2hhcmVkIGluIHRoZSBjbG9zdXJlKVxyXG4gICAgdmFyIHdhaXRTZWNvbmRzID0gMTtcclxuICAgIC8vIFdvdWxkIHR5cGUgdGhpcyBhcyBcIm51bWJlclwiIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBmb3IgTm9kZSBzbyDCr1xcXyjjg4QpXy/Cr1xyXG4gICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBleGNsdWRlIE5vZGUgdHlwZSBkZWZpbml0aW9uIGZvciBzdG9yYWdlIGJlY2F1c2Ugc3RvcmFnZSBvbmx5IHdvcmtzIGluIGJyb3dzZXJcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICB2YXIgdGltZW91dElkID0gbnVsbDtcclxuICAgIHZhciBoaXRUaW1lb3V0ID0gZmFsc2U7XHJcbiAgICB2YXIgY2FuY2VsU3RhdGUgPSAwO1xyXG4gICAgZnVuY3Rpb24gY2FuY2VsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbmNlbFN0YXRlID09PSAyO1xyXG4gICAgfVxyXG4gICAgdmFyIHRyaWdnZXJlZENhbGxiYWNrID0gZmFsc2U7XHJcbiAgICAvLyBUT0RPOiBUaGlzIGRpc2FibGUgY2FuIGJlIHJlbW92ZWQgYW5kIHRoZSAnaWdub3JlUmVzdEFyZ3MnIG9wdGlvbiBhZGRlZCB0b1xyXG4gICAgLy8gdGhlIG5vLWV4cGxpY2l0LWFueSBydWxlIHdoZW4gRVNsaW50IHJlbGVhc2VzIGl0LlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0cmlnZ2VyZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0cmlnZ2VyZWRDYWxsYmFjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGxXaXRoRGVsYXkobWlsbGlzKSB7XHJcbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGYoaGFuZGxlciwgY2FuY2VsZWQoKSk7XHJcbiAgICAgICAgfSwgbWlsbGlzKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE86IFRoaXMgZGlzYWJsZSBjYW4gYmUgcmVtb3ZlZCBhbmQgdGhlICdpZ25vcmVSZXN0QXJncycgb3B0aW9uIGFkZGVkIHRvXHJcbiAgICAvLyB0aGUgbm8tZXhwbGljaXQtYW55IHJ1bGUgd2hlbiBFU2xpbnQgcmVsZWFzZXMgaXQuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcihzdWNjZXNzKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJpZ2dlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQ2FsbGJhY2suY2FsbC5hcHBseSh0cmlnZ2VyQ2FsbGJhY2ssIF9fc3ByZWFkQXJyYXlzKFtudWxsLCBzdWNjZXNzXSwgYXJncykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtdXN0U3RvcCA9IGNhbmNlbGVkKCkgfHwgaGl0VGltZW91dDtcclxuICAgICAgICBpZiAobXVzdFN0b3ApIHtcclxuICAgICAgICAgICAgdHJpZ2dlckNhbGxiYWNrLmNhbGwuYXBwbHkodHJpZ2dlckNhbGxiYWNrLCBfX3NwcmVhZEFycmF5cyhbbnVsbCwgc3VjY2Vzc10sIGFyZ3MpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2FpdFNlY29uZHMgPCA2NCkge1xyXG4gICAgICAgICAgICAvKiBUT0RPKGFuZHlzb3RvKTogZG9uJ3QgYmFjayBvZmYgc28gcXVpY2tseSBpZiB3ZSBrbm93IHdlJ3JlIG9mZmxpbmUuICovXHJcbiAgICAgICAgICAgIHdhaXRTZWNvbmRzICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3YWl0TWlsbGlzO1xyXG4gICAgICAgIGlmIChjYW5jZWxTdGF0ZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBjYW5jZWxTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHdhaXRNaWxsaXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2FpdE1pbGxpcyA9ICh3YWl0U2Vjb25kcyArIE1hdGgucmFuZG9tKCkpICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbFdpdGhEZWxheSh3YWl0TWlsbGlzKTtcclxuICAgIH1cclxuICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiBzdG9wKHdhc1RpbWVvdXQpIHtcclxuICAgICAgICBpZiAoc3RvcHBlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lb3V0SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCF3YXNUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIGNhbGxXaXRoRGVsYXkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdhc1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFN0YXRlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbGxXaXRoRGVsYXkoMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBoaXRUaW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgICBzdG9wKHRydWUpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgICByZXR1cm4gc3RvcDtcclxufVxyXG4vKipcclxuICogU3RvcHMgdGhlIHJldHJ5IGxvb3AgZnJvbSByZXBlYXRpbmcuXHJcbiAqIElmIHRoZSBmdW5jdGlvbiBpcyBjdXJyZW50bHkgXCJpbiBiZXR3ZWVuXCIgcmV0cmllcywgaXQgaXMgaW52b2tlZCBpbW1lZGlhdGVseVxyXG4gKiB3aXRoIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGFzIFwidHJ1ZVwiLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaW52b2tlZCBvbmNlIG1vcmVcclxuICogYWZ0ZXIgdGhlIGN1cnJlbnQgaW52b2NhdGlvbiBmaW5pc2hlcyBpZmYgdGhlIGN1cnJlbnQgaW52b2NhdGlvbiB3b3VsZCBoYXZlXHJcbiAqIHRyaWdnZXJlZCBhbm90aGVyIHJldHJ5LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RvcChpZCkge1xyXG4gICAgaWQoZmFsc2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKi9cclxudmFyIE5ldHdvcmtSZXF1ZXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV0d29ya1JlcXVlc3QodXJsLCBtZXRob2QsIGhlYWRlcnMsIGJvZHksIHN1Y2Nlc3NDb2RlcywgYWRkaXRpb25hbFJldHJ5Q29kZXMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCB0aW1lb3V0LCBwcm9ncmVzc0NhbGxiYWNrLCBwb29sKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnBlbmRpbmdYaHJfID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJhY2tvZmZJZF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsZWRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHBEZWxldGVfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cmxfID0gdXJsO1xyXG4gICAgICAgIHRoaXMubWV0aG9kXyA9IG1ldGhvZDtcclxuICAgICAgICB0aGlzLmhlYWRlcnNfID0gaGVhZGVycztcclxuICAgICAgICB0aGlzLmJvZHlfID0gYm9keTtcclxuICAgICAgICB0aGlzLnN1Y2Nlc3NDb2Rlc18gPSBzdWNjZXNzQ29kZXMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxSZXRyeUNvZGVzXyA9IGFkZGl0aW9uYWxSZXRyeUNvZGVzLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2tfID0gZXJyb3JDYWxsYmFjaztcclxuICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfID0gcHJvZ3Jlc3NDYWxsYmFjaztcclxuICAgICAgICB0aGlzLnRpbWVvdXRfID0gdGltZW91dDtcclxuICAgICAgICB0aGlzLnBvb2xfID0gcG9vbDtcclxuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlXyA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJlamVjdF8gPSByZWplY3Q7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0XygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3R1YWxseSBzdGFydHMgdGhlIHJldHJ5IGxvb3AuXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtSZXF1ZXN0LnByb3RvdHlwZS5zdGFydF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGhlUmVxdWVzdChiYWNrb2ZmQ2FsbGJhY2ssIGNhbmNlbGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICAgICAgYmFja29mZkNhbGxiYWNrKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBzZWxmLnBvb2xfLmNyZWF0ZVhocklvKCk7XHJcbiAgICAgICAgICAgIHNlbGYucGVuZGluZ1hocl8gPSB4aHI7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByb2dyZXNzTGlzdGVuZXIocHJvZ3Jlc3NFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRlZCA9IHByb2dyZXNzRXZlbnQubG9hZGVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsID0gcHJvZ3Jlc3NFdmVudC5sZW5ndGhDb21wdXRhYmxlID8gcHJvZ3Jlc3NFdmVudC50b3RhbCA6IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvZ3Jlc3NDYWxsYmFja18gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2dyZXNzQ2FsbGJhY2tfKGxvYWRlZCwgdG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIHhoclxyXG4gICAgICAgICAgICAgICAgLnNlbmQoc2VsZi51cmxfLCBzZWxmLm1ldGhvZF8sIHNlbGYuYm9keV8sIHNlbGYuaGVhZGVyc18pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9ncmVzc0NhbGxiYWNrXyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5yZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nWGhyXyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB4aHIgPSB4aHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGl0U2VydmVyID0geGhyLmdldEVycm9yQ29kZSgpID09PSBFcnJvckNvZGUuTk9fRVJST1I7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0geGhyLmdldFN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoaXRTZXJ2ZXIgfHwgc2VsZi5pc1JldHJ5U3RhdHVzQ29kZV8oc3RhdHVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YXNDYW5jZWxlZCA9IHhoci5nZXRFcnJvckNvZGUoKSA9PT0gRXJyb3JDb2RlLkFCT1JUO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tvZmZDYWxsYmFjayhmYWxzZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoZmFsc2UsIG51bGwsIHdhc0NhbmNlbGVkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDb2RlID0gc2VsZi5zdWNjZXNzQ29kZXNfLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2sodHJ1ZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoc3VjY2Vzc0NvZGUsIHhocikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHJlcXVlc3RXZW50VGhyb3VnaCBUcnVlIGlmIHRoZSByZXF1ZXN0IGV2ZW50dWFsbHkgd2VudFxyXG4gICAgICAgICAqICAgICB0aHJvdWdoLCBmYWxzZSBpZiBpdCBoaXQgdGhlIHJldHJ5IGxpbWl0IG9yIHdhcyBjYW5jZWxlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBiYWNrb2ZmRG9uZShyZXF1ZXN0V2VudFRocm91Z2gsIHN0YXR1cykge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHNlbGYucmVzb2x2ZV87XHJcbiAgICAgICAgICAgIHZhciByZWplY3QgPSBzZWxmLnJlamVjdF87XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBzdGF0dXMueGhyO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzLndhc1N1Y2Nlc3NDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZWxmLmNhbGxiYWNrXyh4aHIsIHhoci5nZXRSZXNwb25zZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSnVzdERlZihyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gdW5rbm93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVyci5zZXRTZXJ2ZXJSZXNwb25zZVByb3AoeGhyLmdldFJlc3BvbnNlVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lcnJvckNhbGxiYWNrXykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc2VsZi5lcnJvckNhbGxiYWNrXyh4aHIsIGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jYW5jZWxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gc2VsZi5hcHBEZWxldGVfID8gYXBwRGVsZXRlZCgpIDogY2FuY2VsZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmV0cnlMaW1pdEV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYW5jZWxlZF8pIHtcclxuICAgICAgICAgICAgYmFja29mZkRvbmUoZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmZJZF8gPSBzdGFydChkb1RoZVJlcXVlc3QsIGJhY2tvZmZEb25lLCB0aGlzLnRpbWVvdXRfKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuZ2V0UHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcclxuICAgIH07XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIE5ldHdvcmtSZXF1ZXN0LnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoYXBwRGVsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwRGVsZXRlXyA9IGFwcERlbGV0ZSB8fCBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmSWRfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0b3AodGhpcy5iYWNrb2ZmSWRfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1hocl8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nWGhyXy5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuaXNSZXRyeVN0YXR1c0NvZGVfID0gZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgIC8vIFRoZSBjb2RlcyBmb3Igd2hpY2ggdG8gcmV0cnkgY2FtZSBmcm9tIHRoaXMgcGFnZTpcclxuICAgICAgICAvLyBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vc3RvcmFnZS9kb2NzL2V4cG9uZW50aWFsLWJhY2tvZmZcclxuICAgICAgICB2YXIgaXNGaXZlSHVuZHJlZENvZGUgPSBzdGF0dXMgPj0gNTAwICYmIHN0YXR1cyA8IDYwMDtcclxuICAgICAgICB2YXIgZXh0cmFSZXRyeUNvZGVzID0gW1xyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IFRpbWVvdXQ6IHdlYiBzZXJ2ZXIgZGlkbid0IHJlY2VpdmUgZnVsbCByZXF1ZXN0IGluIHRpbWUuXHJcbiAgICAgICAgICAgIDQwOCxcclxuICAgICAgICAgICAgLy8gVG9vIE1hbnkgUmVxdWVzdHM6IHlvdSdyZSBnZXR0aW5nIHJhdGUtbGltaXRlZCwgYmFzaWNhbGx5LlxyXG4gICAgICAgICAgICA0MjlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBpc0V4dHJhUmV0cnlDb2RlID0gZXh0cmFSZXRyeUNvZGVzLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgdmFyIGlzUmVxdWVzdFNwZWNpZmljUmV0cnlDb2RlID0gdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18uaW5kZXhPZihzdGF0dXMpICE9PSAtMTtcclxuICAgICAgICByZXR1cm4gaXNGaXZlSHVuZHJlZENvZGUgfHwgaXNFeHRyYVJldHJ5Q29kZSB8fCBpc1JlcXVlc3RTcGVjaWZpY1JldHJ5Q29kZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV0d29ya1JlcXVlc3Q7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3VsdCBvZiBhIG5ldHdvcmsgcmVxdWVzdC5cclxuICogQHBhcmFtIG9wdF9jYW5jZWxlZCBEZWZhdWx0cyB0byBmYWxzZS5cclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFJlcXVlc3RFbmRTdGF0dXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0RW5kU3RhdHVzKHdhc1N1Y2Nlc3NDb2RlLCB4aHIsIGNhbmNlbGVkKSB7XHJcbiAgICAgICAgdGhpcy53YXNTdWNjZXNzQ29kZSA9IHdhc1N1Y2Nlc3NDb2RlO1xyXG4gICAgICAgIHRoaXMueGhyID0geGhyO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsZWQgPSAhIWNhbmNlbGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlcXVlc3RFbmRTdGF0dXM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbikge1xyXG4gICAgaWYgKGF1dGhUb2tlbiAhPT0gbnVsbCAmJiBhdXRoVG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdGaXJlYmFzZSAnICsgYXV0aFRva2VuO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFZlcnNpb25IZWFkZXJfKGhlYWRlcnMpIHtcclxuICAgIHZhciB2ZXJzaW9uID0gdHlwZW9mIGZpcmViYXNlICE9PSAndW5kZWZpbmVkJyA/IGZpcmViYXNlLlNES19WRVJTSU9OIDogJ0FwcE1hbmFnZXInO1xyXG4gICAgaGVhZGVyc1snWC1GaXJlYmFzZS1TdG9yYWdlLVZlcnNpb24nXSA9ICd3ZWJqcy8nICsgdmVyc2lvbjtcclxufVxyXG5mdW5jdGlvbiBhZGRHbXBpZEhlYWRlcl8oaGVhZGVycywgYXBwSWQpIHtcclxuICAgIGlmIChhcHBJZCkge1xyXG4gICAgICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtR01QSUQnXSA9IGFwcElkO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGFwcElkLCBhdXRoVG9rZW4sIHBvb2wpIHtcclxuICAgIHZhciBxdWVyeVBhcnQgPSBtYWtlUXVlcnlTdHJpbmcocmVxdWVzdEluZm8udXJsUGFyYW1zKTtcclxuICAgIHZhciB1cmwgPSByZXF1ZXN0SW5mby51cmwgKyBxdWVyeVBhcnQ7XHJcbiAgICB2YXIgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3RJbmZvLmhlYWRlcnMpO1xyXG4gICAgYWRkR21waWRIZWFkZXJfKGhlYWRlcnMsIGFwcElkKTtcclxuICAgIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbik7XHJcbiAgICBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzKTtcclxuICAgIHJldHVybiBuZXcgTmV0d29ya1JlcXVlc3QodXJsLCByZXF1ZXN0SW5mby5tZXRob2QsIGhlYWRlcnMsIHJlcXVlc3RJbmZvLmJvZHksIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcywgcmVxdWVzdEluZm8uYWRkaXRpb25hbFJldHJ5Q29kZXMsIHJlcXVlc3RJbmZvLmhhbmRsZXIsIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciwgcmVxdWVzdEluZm8udGltZW91dCwgcmVxdWVzdEluZm8ucHJvZ3Jlc3NDYWxsYmFjaywgcG9vbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBBIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIGluc3RhbmNlcy5cclxuICogQHBhcmFtIG9wdF91cmwgZ3M6Ly8gdXJsIHRvIGEgY3VzdG9tIFN0b3JhZ2UgQnVja2V0XHJcbiAqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBTdG9yYWdlU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0b3JhZ2VTZXJ2aWNlKGFwcCwgYXV0aFByb3ZpZGVyLCBwb29sLCB1cmwpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5idWNrZXRfID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFwcElkXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwXyA9IGFwcDtcclxuICAgICAgICB0aGlzLmF1dGhQcm92aWRlcl8gPSBhdXRoUHJvdmlkZXI7XHJcbiAgICAgICAgdGhpcy5tYXhPcGVyYXRpb25SZXRyeVRpbWVfID0gREVGQVVMVF9NQVhfT1BFUkFUSU9OX1JFVFJZX1RJTUU7XHJcbiAgICAgICAgdGhpcy5tYXhVcGxvYWRSZXRyeVRpbWVfID0gREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUU7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0c18gPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5wb29sXyA9IHBvb2w7XHJcbiAgICAgICAgaWYgKHVybCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVja2V0XyA9IExvY2F0aW9uLm1ha2VGcm9tQnVja2V0U3BlYyh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idWNrZXRfID0gU3RvcmFnZVNlcnZpY2UuZXh0cmFjdEJ1Y2tldF8oKF9hID0gdGhpcy5hcHBfKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXyA9IG5ldyBTZXJ2aWNlSW50ZXJuYWxzKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgU3RvcmFnZVNlcnZpY2UuZXh0cmFjdEJ1Y2tldF8gPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGJ1Y2tldFN0cmluZyA9IGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmZpZ1tDT05GSUdfU1RPUkFHRV9CVUNLRVRfS0VZXTtcclxuICAgICAgICBpZiAoYnVja2V0U3RyaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWMoYnVja2V0U3RyaW5nKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0QXV0aFRva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGF1dGgsIHRva2VuRGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aCA9IHRoaXMuYXV0aFByb3ZpZGVyXy5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhdXRoKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXV0aC5nZXRUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRva2VuRGF0YS5hY2Nlc3NUb2tlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3AgcnVubmluZyByZXF1ZXN0cyBhbmQgcHJldmVudCBtb3JlIGZyb20gYmVpbmcgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUFwcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZWRfID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwcF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdHNfLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlc3QpIHsgcmV0dXJuIHJlcXVlc3QuY2FuY2VsKCk7IH0pO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdHNfLmNsZWFyKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2Ugb2JqZWN0IHJlZmVyZW5jaW5nIHRoaXMgU3RvcmFnZVNlcnZpY2VcclxuICAgICAqIGF0IHRoZSBnaXZlbiBMb2NhdGlvbi5cclxuICAgICAqIEBwYXJhbSBsb2MgVGhlIExvY2F0aW9uLlxyXG4gICAgICogQHJldHVybiBBIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UuXHJcbiAgICAgKi9cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5tYWtlU3RvcmFnZVJlZmVyZW5jZSA9IGZ1bmN0aW9uIChsb2MpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZSh0aGlzLCBsb2MpO1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5tYWtlUmVxdWVzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuZGVsZXRlZF8pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RfMSA9IG1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCB0aGlzLmFwcElkXywgYXV0aFRva2VuLCB0aGlzLnBvb2xfKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0c18uYWRkKHJlcXVlc3RfMSk7XHJcbiAgICAgICAgICAgIC8vIFJlcXVlc3QgcmVtb3ZlcyBpdHNlbGYgZnJvbSBzZXQgd2hlbiBjb21wbGV0ZS5cclxuICAgICAgICAgICAgcmVxdWVzdF8xLmdldFByb21pc2UoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlcXVlc3RzXy5kZWxldGUocmVxdWVzdF8xKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVxdWVzdHNfLmRlbGV0ZShyZXF1ZXN0XzEpOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RfMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmFpbFJlcXVlc3QoYXBwRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHBhdGggaW4gdGhlIGRlZmF1bHRcclxuICAgICAqIGJ1Y2tldC5cclxuICAgICAqL1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdG9yKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ1BhdGggaXMgbm90IGEgc3RyaW5nLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9eW0EtWmEtel0rOlxcL1xcLy8udGVzdChwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGNoaWxkIHBhdGggYnV0IGdvdCBhIFVSTCwgdXNlIHJlZkZyb21VUkwgaW5zdGVhZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbGlkYXRlKCdyZWYnLCBbc3RyaW5nU3BlYyh2YWxpZGF0b3IsIHRydWUpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICBpZiAodGhpcy5idWNrZXRfID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTdG9yYWdlIEJ1Y2tldCBkZWZpbmVkIGluIEZpcmViYXNlIE9wdGlvbnMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWYgPSBuZXcgUmVmZXJlbmNlKHRoaXMsIHRoaXMuYnVja2V0Xyk7XHJcbiAgICAgICAgaWYgKHBhdGggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVmLmNoaWxkKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgZm9yIHRoZSBnaXZlbiBhYnNvbHV0ZSBVUkwsXHJcbiAgICAgKiB3aGljaCBtdXN0IGJlIGEgZ3M6Ly8gb3IgaHR0cFtzXTovLyBVUkwuXHJcbiAgICAgKi9cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5yZWZGcm9tVVJMID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdQYXRoIGlzIG5vdCBhIHN0cmluZy4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghL15bQS1aYS16XSs6XFwvXFwvLy50ZXN0KHApKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgZnVsbCBVUkwgYnV0IGdvdCBhIGNoaWxkIHBhdGgsIHVzZSByZWYgaW5zdGVhZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBMb2NhdGlvbi5tYWtlRnJvbVVybChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIHZhbGlkIGZ1bGwgVVJMIGJ1dCBnb3QgYW4gaW52YWxpZCBvbmUuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YWxpZGF0ZSgncmVmRnJvbVVSTCcsIFtzdHJpbmdTcGVjKHZhbGlkYXRvciwgZmFsc2UpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZSh0aGlzLCB1cmwpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yYWdlU2VydmljZS5wcm90b3R5cGUsIFwibWF4VXBsb2FkUmV0cnlUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4VXBsb2FkUmV0cnlUaW1lXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0TWF4VXBsb2FkUmV0cnlUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnc2V0TWF4VXBsb2FkUmV0cnlUaW1lJywgW25vbk5lZ2F0aXZlTnVtYmVyU3BlYygpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLm1heFVwbG9hZFJldHJ5VGltZV8gPSB0aW1lO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yYWdlU2VydmljZS5wcm90b3R5cGUsIFwibWF4T3BlcmF0aW9uUmV0cnlUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4T3BlcmF0aW9uUmV0cnlUaW1lXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0TWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnc2V0TWF4T3BlcmF0aW9uUmV0cnlUaW1lJywgW25vbk5lZ2F0aXZlTnVtYmVyU3BlYygpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLm1heE9wZXJhdGlvblJldHJ5VGltZV8gPSB0aW1lO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yYWdlU2VydmljZS5wcm90b3R5cGUsIFwiYXBwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLCBcIklOVEVSTkFMXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxzXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2U7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgU2VydmljZUludGVybmFscyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNlcnZpY2VJbnRlcm5hbHMoc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZV8gPSBzZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYXNzb2NpYXRlZCBhcHAgaXMgZGVsZXRlZC5cclxuICAgICAqL1xyXG4gICAgU2VydmljZUludGVybmFscy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZV8uZGVsZXRlQXBwKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZXJ2aWNlSW50ZXJuYWxzO1xyXG59KCkpO1xyXG5cclxudmFyIG5hbWUgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbnZhciB2ZXJzaW9uID0gXCIwLjMuNDNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUeXBlIGNvbnN0YW50IGZvciBGaXJlYmFzZSBTdG9yYWdlLlxyXG4gKi9cclxudmFyIFNUT1JBR0VfVFlQRSA9ICdzdG9yYWdlJztcclxuZnVuY3Rpb24gZmFjdG9yeShjb250YWluZXIsIHVybCkge1xyXG4gICAgLy8gRGVwZW5kZW5jaWVzXHJcbiAgICB2YXIgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgIHZhciBhdXRoUHJvdmlkZXIgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2F1dGgtaW50ZXJuYWwnKTtcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZVNlcnZpY2UoYXBwLCBhdXRoUHJvdmlkZXIsIG5ldyBYaHJJb1Bvb2woKSwgdXJsKTtcclxufVxyXG5mdW5jdGlvbiByZWdpc3RlclN0b3JhZ2UoaW5zdGFuY2UpIHtcclxuICAgIHZhciBuYW1lc3BhY2VFeHBvcnRzID0ge1xyXG4gICAgICAgIC8vIG5vLWlubGluZVxyXG4gICAgICAgIFRhc2tTdGF0ZTogVGFza1N0YXRlLFxyXG4gICAgICAgIFRhc2tFdmVudDogVGFza0V2ZW50LFxyXG4gICAgICAgIFN0cmluZ0Zvcm1hdDogU3RyaW5nRm9ybWF0LFxyXG4gICAgICAgIFN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIFJlZmVyZW5jZTogUmVmZXJlbmNlXHJcbiAgICB9O1xyXG4gICAgaW5zdGFuY2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChTVE9SQUdFX1RZUEUsIGZhY3RvcnksIFwiUFVCTElDXCIgLyogUFVCTElDICovKVxyXG4gICAgICAgIC5zZXRTZXJ2aWNlUHJvcHMobmFtZXNwYWNlRXhwb3J0cylcclxuICAgICAgICAuc2V0TXVsdGlwbGVJbnN0YW5jZXModHJ1ZSkpO1xyXG4gICAgaW5zdGFuY2UucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xyXG59XHJcbnJlZ2lzdGVyU3RvcmFnZShmaXJlYmFzZSk7XHJcblxyXG5leHBvcnQgeyByZWdpc3RlclN0b3JhZ2UgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxyXG4iLCJpbXBvcnQgJ0BmaXJlYmFzZS9zdG9yYWdlJztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxyXG4iXSwic291cmNlUm9vdCI6IiJ9