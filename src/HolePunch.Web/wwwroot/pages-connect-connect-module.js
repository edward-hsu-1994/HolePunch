(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-connect-connect-module"],{

/***/ "++1n":
/*!******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js ***!
  \******************************************************************/
/*! exports provided: MessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),

/***/ "1/4N":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js ***!
  \*********************************************************************/
/*! exports provided: FetchHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchHttpClient", function() { return FetchHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "9BRb");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "Rlqr");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FetchHttpClient = /** @class */ (function (_super) {
    __extends(FetchHttpClient, _super);
    function FetchHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        if (typeof fetch === "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            var requireFunc =  true ? require : undefined;
            // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
            _this.jar = new (requireFunc("tough-cookie")).CookieJar();
            _this.fetchType = requireFunc("node-fetch");
            // node-fetch doesn't have a nice API for getting and setting cookies
            // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
            _this.fetchType = requireFunc("fetch-cookie")(_this.fetchType, _this.jar);
            // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
            _this.abortControllerType = requireFunc("abort-controller");
        }
        else {
            _this.fetchType = fetch.bind(self);
            _this.abortControllerType = AbortController;
        }
        return _this;
    }
    /** @inheritDoc */
    FetchHttpClient.prototype.send = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var abortController, error, timeoutId, msTimeout, response, e_1, content, payload;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Check that abort was not signaled before calling send
                        if (request.abortSignal && request.abortSignal.aborted) {
                            throw new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]();
                        }
                        if (!request.method) {
                            throw new Error("No method defined.");
                        }
                        if (!request.url) {
                            throw new Error("No url defined.");
                        }
                        abortController = new this.abortControllerType();
                        // Hook our abortSignal into the abort controller
                        if (request.abortSignal) {
                            request.abortSignal.onabort = function () {
                                abortController.abort();
                                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]();
                            };
                        }
                        timeoutId = null;
                        if (request.timeout) {
                            msTimeout = request.timeout;
                            timeoutId = setTimeout(function () {
                                abortController.abort();
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]();
                            }, msTimeout);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.fetchType(request.url, {
                                body: request.content,
                                cache: "no-cache",
                                credentials: request.withCredentials === true ? "include" : "same-origin",
                                headers: __assign({ "Content-Type": "text/plain;charset=UTF-8", "X-Requested-With": "XMLHttpRequest" }, request.headers),
                                method: request.method,
                                mode: "cors",
                                redirect: "manual",
                                signal: abortController.signal,
                            })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        if (error) {
                            throw error;
                        }
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + e_1 + ".");
                        throw e_1;
                    case 4:
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                        if (request.abortSignal) {
                            request.abortSignal.onabort = null;
                        }
                        return [7 /*endfinally*/];
                    case 5:
                        if (!response.ok) {
                            throw new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](response.statusText, response.status);
                        }
                        content = deserializeContent(response, request.responseType);
                        return [4 /*yield*/, content];
                    case 6:
                        payload = _a.sent();
                        return [2 /*return*/, new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](response.status, response.statusText, payload)];
                }
            });
        });
    };
    FetchHttpClient.prototype.getCookieString = function (url) {
        var cookies = "";
        if (_Utils__WEBPACK_IMPORTED_MODULE_3__["Platform"].isNode && this.jar) {
            // @ts-ignore: unused variable
            this.jar.getCookies(url, function (e, c) { return cookies = c.join("; "); });
        }
        return cookies;
    };
    return FetchHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

function deserializeContent(response, responseType) {
    var content;
    switch (responseType) {
        case "arraybuffer":
            content = response.arrayBuffer();
            break;
        case "text":
            content = response.text();
            break;
        case "blob":
        case "document":
        case "json":
            throw new Error(responseType + " is not supported.");
        default:
            content = response.text();
            break;
    }
    return content;
}
//# sourceMappingURL=FetchHttpClient.js.map

/***/ }),

/***/ "2lgH":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpConnection.js ***!
  \********************************************************************/
/*! exports provided: HttpConnection, TransportSendQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConnection", function() { return HttpConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportSendQueue", function() { return TransportSendQueue; });
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHttpClient */ "Ysxs");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "qFkC");
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LongPollingTransport */ "C/dI");
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServerSentEventsTransport */ "qIXe");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "ftFU");
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebSocketTransport */ "6xqK");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MAX_REDIRECTS = 100;
/** @private */
var HttpConnection = /** @class */ (function () {
    function HttpConnection(url, options) {
        if (options === void 0) { options = {}; }
        this.features = {};
        this.negotiateVersion = 1;
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url, "url");
        this.logger = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);
        this.baseUrl = this.resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
            options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
        }
        else {
            throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        var webSocketModule = null;
        var eventSourceModule = null;
        if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && "function" !== "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            var requireFunc =  true ? require : undefined;
            webSocketModule = requireFunc("ws");
            eventSourceModule = requireFunc("eventsource");
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && !options.WebSocket) {
            if (webSocketModule) {
                options.WebSocket = webSocketModule;
            }
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isNode && !options.EventSource) {
            if (typeof eventSourceModule !== "undefined") {
                options.EventSource = eventSourceModule;
            }
        }
        this.httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);
        this.connectionState = "Disconnected" /* Disconnected */;
        this.connectionStarted = false;
        this.options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    HttpConnection.prototype.start = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var message, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;
                        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Starting connection with transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat] + "'.");
                        if (this.connectionState !== "Disconnected" /* Disconnected */) {
                            return [2 /*return*/, Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."))];
                        }
                        this.connectionState = "Connecting" /* Connecting */;
                        this.startInternalPromise = this.startInternal(transferFormat);
                        return [4 /*yield*/, this.startInternalPromise];
                    case 1:
                        _a.sent();
                        if (!(this.connectionState === "Disconnecting" /* Disconnecting */)) return [3 /*break*/, 3];
                        message = "Failed to start the HttpConnection before stop() was called.";
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, message);
                        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                        return [4 /*yield*/, this.stopPromise];
                    case 2:
                        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                        _a.sent();
                        return [2 /*return*/, Promise.reject(new Error(message))];
                    case 3:
                        if (this.connectionState !== "Connected" /* Connected */) {
                            message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, message);
                            return [2 /*return*/, Promise.reject(new Error(message))];
                        }
                        _a.label = 4;
                    case 4:
                        this.connectionStarted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.send = function (data) {
        if (this.connectionState !== "Connected" /* Connected */) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this.sendQueue) {
            this.sendQueue = new TransportSendQueue(this.transport);
        }
        // Transport will not be null if state is connected
        return this.sendQueue.send(data);
    };
    HttpConnection.prototype.stop = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState === "Disconnected" /* Disconnected */) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                            return [2 /*return*/, Promise.resolve()];
                        }
                        if (this.connectionState === "Disconnecting" /* Disconnecting */) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                            return [2 /*return*/, this.stopPromise];
                        }
                        this.connectionState = "Disconnecting" /* Disconnecting */;
                        this.stopPromise = new Promise(function (resolve) {
                            // Don't complete stop() until stopConnection() completes.
                            _this.stopPromiseResolver = resolve;
                        });
                        // stopInternal should never throw so just observe it.
                        return [4 /*yield*/, this.stopInternal(error)];
                    case 1:
                        // stopInternal should never throw so just observe it.
                        _a.sent();
                        return [4 /*yield*/, this.stopPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.stopInternal = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Set error as soon as possible otherwise there is a race between
                        // the transport closing and providing an error and the error from a close message
                        // We would prefer the close message error.
                        this.stopError = error;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startInternalPromise];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.transport) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.transport.stop()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "HttpConnection.transport.stop() threw error '" + e_2 + "'.");
                        this.stopConnection();
                        return [3 /*break*/, 8];
                    case 8:
                        this.transport = undefined;
                        return [3 /*break*/, 10];
                    case 9:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                        this.stopConnection();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.startInternal = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var url, negotiateResponse, redirects, _loop_1, this_1, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUrl;
                        this.accessTokenFactory = this.options.accessTokenFactory;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        if (!this.options.skipNegotiation) return [3 /*break*/, 5];
                        if (!(this.options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets)) return [3 /*break*/, 3];
                        // No need to add a connection ID in this case
                        this.transport = this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        return [4 /*yield*/, this.startTransport(url, transferFormat)];
                    case 2:
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        negotiateResponse = null;
                        redirects = 0;
                        _loop_1 = function () {
                            var accessToken_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                                    case 1:
                                        negotiateResponse = _a.sent();
                                        // the user tries to stop the connection when it is being started
                                        if (this_1.connectionState === "Disconnecting" /* Disconnecting */ || this_1.connectionState === "Disconnected" /* Disconnected */) {
                                            throw new Error("The connection was stopped during negotiation.");
                                        }
                                        if (negotiateResponse.error) {
                                            throw new Error(negotiateResponse.error);
                                        }
                                        if (negotiateResponse.ProtocolVersion) {
                                            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                        }
                                        if (negotiateResponse.url) {
                                            url = negotiateResponse.url;
                                        }
                                        if (negotiateResponse.accessToken) {
                                            accessToken_1 = negotiateResponse.accessToken;
                                            this_1.accessTokenFactory = function () { return accessToken_1; };
                                        }
                                        redirects++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 6;
                    case 6: return [5 /*yield**/, _loop_1()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
                        _a.label = 9;
                    case 9:
                        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                            throw new Error("Negotiate redirection limit exceeded.");
                        }
                        return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]) {
                            this.features.inherentKeepAlive = true;
                        }
                        if (this.connectionState === "Connecting" /* Connecting */) {
                            // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                            // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "The HttpConnection connected successfully.");
                            this.connectionState = "Connected" /* Connected */;
                        }
                        return [3 /*break*/, 13];
                    case 12:
                        e_3 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the connection: " + e_3);
                        this.connectionState = "Disconnected" /* Disconnected */;
                        this.transport = undefined;
                        return [2 /*return*/, Promise.reject(e_3)];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.getNegotiationResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, token, _a, name, value, negotiateUrl, response, negotiateResponse, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = {};
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers["Authorization"] = "Bearer " + token;
                        }
                        _b.label = 2;
                    case 2:
                        _a = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["getUserAgentHeader"])(), name = _a[0], value = _a[1];
                        headers[name] = value;
                        negotiateUrl = this.resolveNegotiateUrl(url);
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Sending negotiation request: " + negotiateUrl + ".");
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
                                content: "",
                                headers: __assign({}, headers, this.options.headers),
                                withCredentials: this.options.withCredentials,
                            })];
                    case 4:
                        response = _b.sent();
                        if (response.statusCode !== 200) {
                            return [2 /*return*/, Promise.reject(new Error("Unexpected status code returned from negotiate '" + response.statusCode + "'"))];
                        }
                        negotiateResponse = JSON.parse(response.content);
                        if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                            // Negotiate version 0 doesn't use connectionToken
                            // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
                            negotiateResponse.connectionToken = negotiateResponse.connectionId;
                        }
                        return [2 /*return*/, negotiateResponse];
                    case 5:
                        e_4 = _b.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to complete negotiation with the server: " + e_4);
                        return [2 /*return*/, Promise.reject(e_4)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.createConnectUrl = function (url, connectionToken) {
        if (!connectionToken) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionToken);
    };
    HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var connectUrl, transportExceptions, transports, negotiate, _i, transports_1, endpoint, transportOrError, ex_1, ex_2, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionToken);
                        if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Connection was provided an instance of ITransport, using that directly.");
                        this.transport = requestedTransport;
                        return [4 /*yield*/, this.startTransport(connectUrl, requestedTransferFormat)];
                    case 1:
                        _a.sent();
                        this.connectionId = negotiateResponse.connectionId;
                        return [2 /*return*/];
                    case 2:
                        transportExceptions = [];
                        transports = negotiateResponse.availableTransports || [];
                        negotiate = negotiateResponse;
                        _i = 0, transports_1 = transports;
                        _a.label = 3;
                    case 3:
                        if (!(_i < transports_1.length)) return [3 /*break*/, 13];
                        endpoint = transports_1[_i];
                        transportOrError = this.resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
                        if (!(transportOrError instanceof Error)) return [3 /*break*/, 4];
                        // Store the error and continue, we don't want to cause a re-negotiate in these cases
                        transportExceptions.push(endpoint.transport + " failed: " + transportOrError);
                        return [3 /*break*/, 12];
                    case 4:
                        if (!this.isITransport(transportOrError)) return [3 /*break*/, 12];
                        this.transport = transportOrError;
                        if (!!negotiate) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.getNegotiationResponse(url)];
                    case 6:
                        negotiate = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        ex_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(ex_1)];
                    case 8:
                        connectUrl = this.createConnectUrl(url, negotiate.connectionToken);
                        _a.label = 9;
                    case 9:
                        _a.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, this.startTransport(connectUrl, requestedTransferFormat)];
                    case 10:
                        _a.sent();
                        this.connectionId = negotiate.connectionId;
                        return [2 /*return*/];
                    case 11:
                        ex_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the transport '" + endpoint.transport + "': " + ex_2);
                        negotiate = undefined;
                        transportExceptions.push(endpoint.transport + " failed: " + ex_2);
                        if (this.connectionState !== "Connecting" /* Connecting */) {
                            message = "Failed to select transport before stop() was called.";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, message);
                            return [2 /*return*/, Promise.reject(new Error(message))];
                        }
                        return [3 /*break*/, 12];
                    case 12:
                        _i++;
                        return [3 /*break*/, 3];
                    case 13:
                        if (transportExceptions.length > 0) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" ")))];
                        }
                        return [2 /*return*/, Promise.reject(new Error("None of the transports supported by the client are supported by the server."))];
                }
            });
        });
    };
    HttpConnection.prototype.constructTransport = function (transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:
                if (!this.options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket, this.options.headers || {});
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:
                if (!this.options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource, this.options.withCredentials, this.options.headers || {});
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.withCredentials, this.options.headers || {});
            default:
                throw new Error("Unknown transport: " + transport + ".");
        }
    };
    HttpConnection.prototype.startTransport = function (url, transferFormat) {
        var _this = this;
        this.transport.onreceive = this.onreceive;
        this.transport.onclose = function (e) { return _this.stopConnection(e); };
        return this.transport.connect(url, transferFormat);
    };
    HttpConnection.prototype.resolveTransportOrError = function (endpoint, requestedTransport, requestedTransferFormat) {
        var transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];
        if (transport === null || transport === undefined) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
            return new Error("Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        }
        else {
            if (transportMatches(requestedTransport, transport)) {
                var transferFormats = endpoint.transferFormats.map(function (s) { return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s]; });
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets && !this.options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents && !this.options.EventSource)) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it is not supported in your environment.'");
                        return new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' is not supported in your environment.");
                    }
                    else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Selecting transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "'.");
                        try {
                            return this.constructTransport(transport);
                        }
                        catch (ex) {
                            return ex;
                        }
                    }
                }
                else {
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it does not support the requested transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + "'.");
                    return new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' does not support " + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + ".");
                }
            }
            else {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it was disabled by the client.");
                return new Error("'" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' is disabled by the client.");
            }
        }
    };
    HttpConnection.prototype.isITransport = function (transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    };
    HttpConnection.prototype.stopConnection = function (error) {
        var _this = this;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this.connectionState + ".");
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this.stopError || error;
        this.stopError = undefined;
        if (this.connectionState === "Disconnected" /* Disconnected */) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
            return;
        }
        if (this.connectionState === "Connecting" /* Connecting */) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is still in the connecting state.");
            throw new Error("HttpConnection.stopConnection(" + error + ") was called while the connection is still in the connecting state.");
        }
        if (this.connectionState === "Disconnecting" /* Disconnecting */) {
            // A call to stop() induced this call to stopConnection and needs to be completed.
            // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
            this.stopPromiseResolver();
        }
        if (error) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Connection disconnected with error '" + error + "'.");
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Connection disconnected.");
        }
        if (this.sendQueue) {
            this.sendQueue.stop().catch(function (e) {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "TransportSendQueue.stop() threw error '" + e + "'.");
            });
            this.sendQueue = undefined;
        }
        this.connectionId = undefined;
        this.connectionState = "Disconnected" /* Disconnected */;
        if (this.connectionStarted) {
            this.connectionStarted = false;
            try {
                if (this.onclose) {
                    this.onclose(error);
                }
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
            }
        }
    };
    HttpConnection.prototype.resolveUrl = function (url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_5__["Platform"].isBrowser || !window.document) {
            throw new Error("Cannot resolve '" + url + "'.");
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        var aTag = window.document.createElement("a");
        aTag.href = url;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
        return aTag.href;
    };
    HttpConnection.prototype.resolveNegotiateUrl = function (url) {
        var index = url.indexOf("?");
        var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        if (negotiateUrl.indexOf("negotiateVersion") === -1) {
            negotiateUrl += index === -1 ? "?" : "&";
            negotiateUrl += "negotiateVersion=" + this.negotiateVersion;
        }
        return negotiateUrl;
    };
    return HttpConnection;
}());

function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
/** @private */
var TransportSendQueue = /** @class */ (function () {
    function TransportSendQueue(transport) {
        this.transport = transport;
        this.buffer = [];
        this.executing = true;
        this.sendBufferedData = new PromiseSource();
        this.transportResult = new PromiseSource();
        this.sendLoopPromise = this.sendLoop();
    }
    TransportSendQueue.prototype.send = function (data) {
        this.bufferData(data);
        if (!this.transportResult) {
            this.transportResult = new PromiseSource();
        }
        return this.transportResult.promise;
    };
    TransportSendQueue.prototype.stop = function () {
        this.executing = false;
        this.sendBufferedData.resolve();
        return this.sendLoopPromise;
    };
    TransportSendQueue.prototype.bufferData = function (data) {
        if (this.buffer.length && typeof (this.buffer[0]) !== typeof (data)) {
            throw new Error("Expected data to be of type " + typeof (this.buffer) + " but was of type " + typeof (data));
        }
        this.buffer.push(data);
        this.sendBufferedData.resolve();
    };
    TransportSendQueue.prototype.sendLoop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transportResult, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (false) {}
                        return [4 /*yield*/, this.sendBufferedData.promise];
                    case 1:
                        _a.sent();
                        if (!this.executing) {
                            if (this.transportResult) {
                                this.transportResult.reject("Connection stopped.");
                            }
                            return [3 /*break*/, 6];
                        }
                        this.sendBufferedData = new PromiseSource();
                        transportResult = this.transportResult;
                        this.transportResult = undefined;
                        data = typeof (this.buffer[0]) === "string" ?
                            this.buffer.join("") :
                            TransportSendQueue.concatBuffers(this.buffer);
                        this.buffer.length = 0;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.transport.send(data)];
                    case 3:
                        _a.sent();
                        transportResult.resolve();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        transportResult.reject(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 0];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TransportSendQueue.concatBuffers = function (arrayBuffers) {
        var totalLength = arrayBuffers.map(function (b) { return b.byteLength; }).reduce(function (a, b) { return a + b; });
        var result = new Uint8Array(totalLength);
        var offset = 0;
        for (var _i = 0, arrayBuffers_1 = arrayBuffers; _i < arrayBuffers_1.length; _i++) {
            var item = arrayBuffers_1[_i];
            result.set(new Uint8Array(item), offset);
            offset += item.byteLength;
        }
        return result.buffer;
    };
    return TransportSendQueue;
}());

var PromiseSource = /** @class */ (function () {
    function PromiseSource() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            var _a;
            return _a = [resolve, reject], _this.resolver = _a[0], _this.rejecter = _a[1], _a;
        });
    }
    PromiseSource.prototype.resolve = function () {
        this.resolver();
    };
    PromiseSource.prototype.reject = function (reason) {
        this.rejecter(reason);
    };
    return PromiseSource;
}());
//# sourceMappingURL=HttpConnection.js.map

/***/ }),

/***/ "2zAs":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js ***!
  \*********************************************************************/
/*! exports provided: JsonHubProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return JsonHubProtocol; });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IHubProtocol */ "++1n");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "qFkC");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loggers */ "v3Fn");
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextMessageFormat */ "PMyv");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





var JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */ (function () {
    function JsonHubProtocol() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text;
    }
    /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    JsonHubProtocol.prototype.parseMessages = function (input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance;
        }
        // Parse the messages
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);
        var hubMessages = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:
                    this.isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:
                    this.isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:
                    this.isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    };
    /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    JsonHubProtocol.prototype.writeMessage = function (message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message));
    };
    JsonHubProtocol.prototype.isInvocationMessage = function (message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    };
    JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
        this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    };
    JsonHubProtocol.prototype.isCompletionMessage = function (message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    };
    JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    };
    return JsonHubProtocol;
}());

//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),

/***/ "5/gN":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/AbortController.js ***!
  \*********************************************************************/
/*! exports provided: AbortController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */ (function () {
    function AbortController() {
        this.isAborted = false;
        this.onabort = null;
    }
    AbortController.prototype.abort = function () {
        if (!this.isAborted) {
            this.isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    };
    Object.defineProperty(AbortController.prototype, "signal", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortController.prototype, "aborted", {
        get: function () {
            return this.isAborted;
        },
        enumerable: true,
        configurable: true
    });
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "6HpG":
/*!***********************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: AbortError, HttpError, TimeoutError, HttpClient, HttpResponse, DefaultHttpClient, HubConnection, HubConnectionState, HubConnectionBuilder, MessageType, LogLevel, HttpTransportType, TransferFormat, NullLogger, JsonHubProtocol, Subject, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "9BRb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]; });

/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "Rlqr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; });

/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ "Ysxs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__["DefaultHttpClient"]; });

/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubConnection */ "mLhb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"]; });

/* harmony import */ var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnectionBuilder */ "utQ/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]; });

/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IHubProtocol */ "++1n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__["MessageType"]; });

/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _ILogger__WEBPACK_IMPORTED_MODULE_6__["LogLevel"]; });

/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ITransport */ "qFkC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["HttpTransportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["TransferFormat"]; });

/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loggers */ "v3Fn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return _Loggers__WEBPACK_IMPORTED_MODULE_8__["NullLogger"]; });

/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JsonHubProtocol */ "2zAs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__["JsonHubProtocol"]; });

/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Subject */ "z2YZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]; });

/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "ftFU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _Utils__WEBPACK_IMPORTED_MODULE_11__["VERSION"]; });

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6d4Q":
/*!*********************************************************!*\
  !*** ./src/app/pages/connect/connect-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ConnectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectRoutingModule", function() { return ConnectRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connect/connect.component */ "qoYh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_1__["ConnectComponent"]
    }
];
class ConnectRoutingModule {
}
ConnectRoutingModule.ɵfac = function ConnectRoutingModule_Factory(t) { return new (t || ConnectRoutingModule)(); };
ConnectRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConnectRoutingModule });
ConnectRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConnectRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6xqK":
/*!************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js ***!
  \************************************************************************/
/*! exports provided: WebSocketTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketTransport", function() { return WebSocketTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "qFkC");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var WebSocketTransport = /** @class */ (function () {
    function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this.logger = logger;
        this.accessTokenFactory = accessTokenFactory;
        this.logMessageContent = logMessageContent;
        this.webSocketConstructor = webSocketConstructor;
        this.httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this.headers = headers;
    }
    WebSocketTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) Connecting.");
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket;
                            var cookies = _this.httpClient.getCookieString(url);
                            var opened = false;
                            if (_Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isNode) {
                                var headers = {};
                                var _a = Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getUserAgentHeader"])(), name_1 = _a[0], value = _a[1];
                                headers[name_1] = value;
                                if (cookies) {
                                    headers["Cookie"] = "" + cookies;
                                }
                                // Only pass headers when in non-browser environments
                                webSocket = new _this.webSocketConstructor(url, undefined, {
                                    headers: __assign({}, headers, _this.headers),
                                });
                            }
                            if (!webSocket) {
                                // Chrome is not happy with passing 'undefined' as protocol
                                webSocket = new _this.webSocketConstructor(url);
                            }
                            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary) {
                                webSocket.binaryType = "arraybuffer";
                            }
                            // tslint:disable-next-line:variable-name
                            webSocket.onopen = function (_event) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "WebSocket connected to " + url + ".");
                                _this.webSocket = webSocket;
                                opened = true;
                                resolve();
                            };
                            webSocket.onerror = function (event) {
                                var error = null;
                                // ErrorEvent is a browser only type we need to check if the type exists before using it
                                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                    error = event.error;
                                }
                                else {
                                    error = new Error("There was an error with the transport.");
                                }
                                reject(error);
                            };
                            webSocket.onmessage = function (message) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data, _this.logMessageContent) + ".");
                                if (_this.onreceive) {
                                    try {
                                        _this.onreceive(message.data);
                                    }
                                    catch (error) {
                                        _this.close(error);
                                        return;
                                    }
                                }
                            };
                            webSocket.onclose = function (event) {
                                // Don't call close handler if connection was never established
                                // We'll reject the connect call instead
                                if (opened) {
                                    _this.close(event);
                                }
                                else {
                                    var error = null;
                                    // ErrorEvent is a browser only type we need to check if the type exists before using it
                                    if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                        error = event.error;
                                    }
                                    else {
                                        error = new Error("There was an error with the transport.");
                                    }
                                    reject(error);
                                }
                            };
                        })];
                }
            });
        });
    };
    WebSocketTransport.prototype.send = function (data) {
        if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) sending data. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data, this.logMessageContent) + ".");
            this.webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    };
    WebSocketTransport.prototype.stop = function () {
        if (this.webSocket) {
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this.close(undefined);
        }
        return Promise.resolve();
    };
    WebSocketTransport.prototype.close = function (event) {
        // webSocket will be null if the transport did not start successfully
        if (this.webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this.webSocket.onclose = function () { };
            this.webSocket.onmessage = function () { };
            this.webSocket.onerror = function () { };
            this.webSocket.close();
            this.webSocket = undefined;
        }
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (this.isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
            }
            else if (event instanceof Error) {
                this.onclose(event);
            }
            else {
                this.onclose();
            }
        }
    };
    WebSocketTransport.prototype.isCloseEvent = function (event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
    };
    return WebSocketTransport;
}());

//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),

/***/ "9BRb":
/*!************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Errors.js ***!
  \************************************************************/
/*! exports provided: HttpError, TimeoutError, AbortError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    function HttpError(errorMessage, statusCode) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        _this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return HttpError;
}(Error));

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function TimeoutError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return TimeoutError;
}(Error));

/** Error thrown when an action is aborted. */
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function AbortError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "An abort occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return AbortError;
}(Error));

//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "C/dI":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js ***!
  \**************************************************************************/
/*! exports provided: LongPollingTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPollingTransport", function() { return LongPollingTransport; });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ "5/gN");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "9BRb");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ "qFkC");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// Not exported from 'index', this type is internal.
/** @private */
var LongPollingTransport = /** @class */ (function () {
    function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent, withCredentials, headers) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"]();
        this.logMessageContent = logMessageContent;
        this.withCredentials = withCredentials;
        this.headers = headers;
        this.running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        // This is an internal type, not exported from 'index' so this is really just internal.
        get: function () {
            return this.pollAbort.aborted;
        },
        enumerable: true,
        configurable: true
    });
    LongPollingTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, name, value, headers, pollOptions, token, pollUrl, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"], "transferFormat");
                        this.url = url;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Connecting.");
                        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary &&
                            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        _b = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getUserAgentHeader"])(), name = _b[0], value = _b[1];
                        headers = __assign((_a = {}, _a[name] = value, _a), this.headers);
                        pollOptions = {
                            abortSignal: this.pollAbort.signal,
                            headers: headers,
                            timeout: 100000,
                            withCredentials: this.withCredentials,
                        };
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary) {
                            pollOptions.responseType = "arraybuffer";
                        }
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        token = _c.sent();
                        this.updateHeaderToken(pollOptions, token);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 2:
                        response = _c.sent();
                        if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            this.running = true;
                        }
                        this.receiving = this.poll(this.url, pollOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
        if (!request.headers) {
            request.headers = {};
        }
        if (token) {
            // tslint:disable-next-line:no-string-literal
            request.headers["Authorization"] = "Bearer " + token;
            return;
        }
        // tslint:disable-next-line:no-string-literal
        if (request.headers["Authorization"]) {
            // tslint:disable-next-line:no-string-literal
            delete request.headers["Authorization"];
        }
    };
    LongPollingTransport.prototype.poll = function (url, pollOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var token, pollUrl, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 8, 9]);
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 4:
                        response = _a.sent();
                        if (response.statusCode === 204) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "(LongPolling transport) Poll terminated by server.");
                            this.running = false;
                        }
                        else if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Unexpected status code
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            // Process the response
                            if (response.content) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content, this.logMessageContent) + ".");
                                if (this.onreceive) {
                                    this.onreceive(response.content);
                                }
                            }
                            else {
                                // This is another way timeout manifest.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!this.running) {
                            // Log but disregard errors that occur after stopping
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                        }
                        else {
                            if (e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]) {
                                // Ignore timeouts and reissue the poll.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                            else {
                                // Close the connection with the error as the result.
                                this.closeError = e_1;
                                this.running = false;
                            }
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Polling complete.");
                        // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                        if (!this.pollAborted) {
                            this.raiseOnClose();
                        }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.running) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent, this.withCredentials, this.headers)];
            });
        });
    };
    LongPollingTransport.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers, _a, name_1, value, deleteOptions, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stopping polling.");
                        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                        this.running = false;
                        this.pollAbort.abort();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, this.receiving];
                    case 2:
                        _b.sent();
                        // Send DELETE to clean up long polling on the server
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                        headers = {};
                        _a = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getUserAgentHeader"])(), name_1 = _a[0], value = _a[1];
                        headers[name_1] = value;
                        deleteOptions = {
                            headers: __assign({}, headers, this.headers),
                            withCredentials: this.withCredentials,
                        };
                        return [4 /*yield*/, this.getAccessToken()];
                    case 3:
                        token = _b.sent();
                        this.updateHeaderToken(deleteOptions, token);
                        return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
                    case 4:
                        _b.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) DELETE request sent.");
                        return [3 /*break*/, 6];
                    case 5:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stop finished.");
                        // Raise close event here instead of in polling
                        // It needs to happen after the DELETE request is sent
                        this.raiseOnClose();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.raiseOnClose = function () {
        if (this.onclose) {
            var logMessage = "(LongPolling transport) Firing onclose event.";
            if (this.closeError) {
                logMessage += " Error: " + this.closeError;
            }
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, logMessage);
            this.onclose(this.closeError);
        }
    };
    return LongPollingTransport;
}());

//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),

/***/ "Id6e":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js ***!
  \*******************************************************************/
/*! exports provided: XhrHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrHttpClient", function() { return XhrHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "9BRb");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "Rlqr");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "M+GD");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var XhrHttpClient = /** @class */ (function (_super) {
    __extends(XhrHttpClient, _super);
    function XhrHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    /** @inheritDoc */
    XhrHttpClient.prototype.send = function (request) {
        var _this = this;
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            var headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach(function (header) {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = function () {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
            };
            xhr.send(request.content || "");
        });
    };
    return XhrHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=XhrHttpClient.js.map

/***/ }),

/***/ "M+GD":
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ILogger.js ***!
  \*************************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "Mean":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-result.js ***!
  \**********************************************************************************/
/*! exports provided: NzResultComponent, NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultModule, NzResultSubtitleDirective, NzResultTitleDirective, ɵNzResultNotFoundComponent, ɵNzResultServerErrorComponent, ɵNzResultUnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultComponent", function() { return NzResultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultContentDirective", function() { return NzResultContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultExtraDirective", function() { return NzResultExtraDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultIconDirective", function() { return NzResultIconDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultModule", function() { return NzResultModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultSubtitleDirective", function() { return NzResultSubtitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResultTitleDirective", function() { return NzResultTitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzResultNotFoundComponent", function() { return NzResultNotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzResultServerErrorComponent", function() { return NzResultServerErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzResultUnauthorizedComponent", function() { return NzResultUnauthorizedComponent; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






function NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", icon_r12);
} }
function NzResultComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r9.icon);
} }
function NzResultComponent_ng_container_1_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 1, ["*ngIf", "!icon"]);
} }
function NzResultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzResultComponent_ng_container_1_ng_content_2_Template, 1, 0, "ng-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.icon);
} }
function NzResultComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.nzTitle, " ");
} }
function NzResultComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_ng_container_2_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzResultComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 2, ["*ngIf", "!nzTitle"]);
} }
function NzResultComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.nzSubTitle, " ");
} }
function NzResultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_ng_container_4_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzSubTitle);
} }
function NzResultComponent_ng_content_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngIf", "!nzSubTitle"]);
} }
function NzResultComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.nzExtra, " ");
} }
function NzResultComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_div_7_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.nzExtra);
} }
function NzResultComponent_ng_content_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 4, ["*ngIf", "!nzExtra"]);
} }
function NzResultComponent_ng_template_9_nz_result_not_found_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-result-not-found");
} }
function NzResultComponent_ng_template_9_nz_result_server_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-result-server-error");
} }
function NzResultComponent_ng_template_9_nz_result_unauthorized_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-result-unauthorized");
} }
function NzResultComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_ng_template_9_nz_result_not_found_1_Template, 1, 0, "nz-result-not-found", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzResultComponent_ng_template_9_nz_result_server_error_2_Template, 1, 0, "nz-result-server-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzResultComponent_ng_template_9_nz_result_unauthorized_3_Template, 1, 0, "nz-result-unauthorized", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r8.nzStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "404");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "500");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "403");
} }
const _c0 = [[["nz-result-content"], ["", "nz-result-content", ""]], [["", "nz-result-icon", ""]], [["div", "nz-result-title", ""]], [["div", "nz-result-subtitle", ""]], [["div", "nz-result-extra", ""]]];
const _c1 = ["nz-result-content, [nz-result-content]", "[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "div[nz-result-extra]"];
class NzResultTitleDirective {
}
NzResultTitleDirective.ɵfac = function NzResultTitleDirective_Factory(t) { return new (t || NzResultTitleDirective)(); };
NzResultTitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzResultTitleDirective, selectors: [["div", "nz-result-title", ""]], hostAttrs: [1, "ant-result-title"], exportAs: ["nzResultTitle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultTitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'div[nz-result-title]',
                exportAs: 'nzResultTitle',
                host: {
                    class: 'ant-result-title'
                }
            }]
    }], null, null); })();
class NzResultSubtitleDirective {
}
NzResultSubtitleDirective.ɵfac = function NzResultSubtitleDirective_Factory(t) { return new (t || NzResultSubtitleDirective)(); };
NzResultSubtitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzResultSubtitleDirective, selectors: [["div", "nz-result-subtitle", ""]], hostAttrs: [1, "ant-result-subtitle"], exportAs: ["nzResultSubtitle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultSubtitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'div[nz-result-subtitle]',
                exportAs: 'nzResultSubtitle',
                host: {
                    class: 'ant-result-subtitle'
                }
            }]
    }], null, null); })();
class NzResultIconDirective {
}
NzResultIconDirective.ɵfac = function NzResultIconDirective_Factory(t) { return new (t || NzResultIconDirective)(); };
NzResultIconDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzResultIconDirective, selectors: [["i", "nz-result-icon", ""], ["div", "nz-result-icon", ""]], exportAs: ["nzResultIcon"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultIconDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'i[nz-result-icon], div[nz-result-icon]',
                exportAs: 'nzResultIcon'
            }]
    }], null, null); })();
class NzResultContentDirective {
}
NzResultContentDirective.ɵfac = function NzResultContentDirective_Factory(t) { return new (t || NzResultContentDirective)(); };
NzResultContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzResultContentDirective, selectors: [["div", "nz-result-content", ""]], hostAttrs: [1, "ant-result-content"], exportAs: ["nzResultContent"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'div[nz-result-content]',
                exportAs: 'nzResultContent',
                host: {
                    class: 'ant-result-content'
                }
            }]
    }], null, null); })();
class NzResultExtraDirective {
}
NzResultExtraDirective.ɵfac = function NzResultExtraDirective_Factory(t) { return new (t || NzResultExtraDirective)(); };
NzResultExtraDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzResultExtraDirective, selectors: [["div", "nz-result-extra", ""]], hostAttrs: [1, "ant-result-extra"], exportAs: ["nzResultExtra"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultExtraDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'div[nz-result-extra]',
                exportAs: 'nzResultExtra',
                host: {
                    class: 'ant-result-extra'
                }
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
const ExceptionStatus = ['404', '500', '403'];
class NzResultComponent {
    constructor(elementRef, cdr, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzStatus = 'info';
        this.isException = false;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-result');
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges() {
        this.setStatusIcon();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusIcon() {
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[icon] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[this.nzStatus];
    }
}
NzResultComponent.ɵfac = function NzResultComponent_Factory(t) { return new (t || NzResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
NzResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzResultComponent, selectors: [["nz-result"]], hostVars: 10, hostBindings: function NzResultComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-result-success", ctx.nzStatus === "success")("ant-result-error", ctx.nzStatus === "error")("ant-result-info", ctx.nzStatus === "info")("ant-result-warning", ctx.nzStatus === "warning")("ant-result-rtl", ctx.dir === "rtl");
    } }, inputs: { nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubTitle: "nzSubTitle", nzExtra: "nzExtra" }, exportAs: ["nzResult"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 11, vars: 8, consts: [[1, "ant-result-icon"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "ant-result-extra", 4, "ngIf"], ["exceptionTpl", ""], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"], ["class", "ant-result-title", 4, "nzStringTemplateOutlet"], [1, "ant-result-title"], ["class", "ant-result-subtitle", 4, "nzStringTemplateOutlet"], [1, "ant-result-subtitle"], [1, "ant-result-extra"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function NzResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzResultComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzResultComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzResultComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzResultComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzResultComponent_ng_content_5_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzResultComponent_div_7_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzResultComponent_ng_content_8_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzResultComponent_ng_template_9_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isException)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzSubTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzSubTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzExtra);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent]; }, encapsulation: 2, changeDetection: 0 });
NzResultComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSubTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: `
    <div class="ant-result-icon">
      <ng-container *ngIf="!isException; else exceptionTpl">
        <ng-container *ngIf="icon">
          <ng-container *nzStringTemplateOutlet="icon; let icon">
            <i nz-icon [nzType]="icon" nzTheme="fill"></i>
          </ng-container>
        </ng-container>
        <ng-content *ngIf="!icon" select="[nz-result-icon]"></ng-content>
      </ng-container>
    </div>
    <ng-container *ngIf="nzTitle">
      <div class="ant-result-title" *nzStringTemplateOutlet="nzTitle">
        {{ nzTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzTitle" select="div[nz-result-title]"></ng-content>
    <ng-container *ngIf="nzSubTitle">
      <div class="ant-result-subtitle" *nzStringTemplateOutlet="nzSubTitle">
        {{ nzSubTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzSubTitle" select="div[nz-result-subtitle]"></ng-content>
    <ng-content select="nz-result-content, [nz-result-content]"></ng-content>
    <div class="ant-result-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">
        {{ nzExtra }}
      </ng-container>
    </div>
    <ng-content *ngIf="!nzExtra" select="div[nz-result-extra]"></ng-content>

    <ng-template #exceptionTpl>
      <ng-container [ngSwitch]="nzStatus">
        <nz-result-not-found *ngSwitchCase="'404'"></nz-result-not-found>
        <nz-result-server-error *ngSwitchCase="'500'"></nz-result-server-error>
        <nz-result-unauthorized *ngSwitchCase="'403'"></nz-result-unauthorized>
      </ng-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-result-success]': `nzStatus === 'success'`,
                    '[class.ant-result-error]': `nzStatus === 'error'`,
                    '[class.ant-result-info]': `nzStatus === 'info'`,
                    '[class.ant-result-warning]': `nzStatus === 'warning'`,
                    '[class.ant-result-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResultNotFoundComponent {
}
NzResultNotFoundComponent.ɵfac = function NzResultNotFoundComponent_Factory(t) { return new (t || NzResultNotFoundComponent)(); };
NzResultNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzResultNotFoundComponent, selectors: [["nz-result-not-found"]], exportAs: ["nzResultNotFound"], decls: 62, vars: 0, consts: [["width", "252", "height", "294"], ["d", "M0 .387h251.772v251.772H0z"], ["fill", "none", "fillRule", "evenodd"], ["transform", "translate(0 .012)"], ["fill", "#fff"], ["d", "M0 127.32v-2.095C0 56.279 55.892.387 124.838.387h2.096c68.946 0 124.838 55.892 124.838 124.838v2.096c0 68.946-55.892 124.838-124.838 124.838h-2.096C55.892 252.16 0 196.267 0 127.321", "fill", "#E4EBF7", "mask", "url(#b)"], ["d", "M39.755 130.84a8.276 8.276 0 1 1-16.468-1.66 8.276 8.276 0 0 1 16.468 1.66", "fill", "#FFF"], ["d", "M36.975 134.297l10.482 5.943M48.373 146.508l-12.648 10.788", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M39.875 159.352a5.667 5.667 0 1 1-11.277-1.136 5.667 5.667 0 0 1 11.277 1.136M57.588 143.247a5.708 5.708 0 1 1-11.358-1.145 5.708 5.708 0 0 1 11.358 1.145M99.018 26.875l29.82-.014a4.587 4.587 0 1 0-.003-9.175l-29.82.013a4.587 4.587 0 1 0 .003 9.176M110.424 45.211l29.82-.013a4.588 4.588 0 0 0-.004-9.175l-29.82.013a4.587 4.587 0 1 0 .004 9.175", "fill", "#FFF"], ["d", "M112.798 26.861v-.002l15.784-.006a4.588 4.588 0 1 0 .003 9.175l-15.783.007v-.002a4.586 4.586 0 0 0-.004-9.172M184.523 135.668c-.553 5.485-5.447 9.483-10.931 8.93-5.485-.553-9.483-5.448-8.93-10.932.552-5.485 5.447-9.483 10.932-8.93 5.485.553 9.483 5.447 8.93 10.932", "fill", "#FFF"], ["d", "M179.26 141.75l12.64 7.167M193.006 156.477l-15.255 13.011", "par", "", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M184.668 170.057a6.835 6.835 0 1 1-13.6-1.372 6.835 6.835 0 0 1 13.6 1.372M203.34 153.325a6.885 6.885 0 1 1-13.7-1.382 6.885 6.885 0 0 1 13.7 1.382", "fill", "#FFF"], ["d", "M151.931 192.324a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0zM225.27 116.056a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0zM216.38 151.08a2.223 2.223 0 1 1-4.446-.001 2.223 2.223 0 0 1 4.446 0zM176.917 107.636a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM195.291 92.165a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM202.058 180.711a2.223 2.223 0 1 1-4.446 0 2.223 2.223 0 0 1 4.446 0z", "stroke", "#FFF", "strokeWidth", "2"], ["stroke", "#FFF", "strokeWidth", "2", "d", "M214.404 153.302l-1.912 20.184-10.928 5.99M173.661 174.792l-6.356 9.814h-11.36l-4.508 6.484M174.941 125.168v-15.804M220.824 117.25l-12.84 7.901-15.31-7.902V94.39"], ["d", "M166.588 65.936h-3.951a4.756 4.756 0 0 1-4.743-4.742 4.756 4.756 0 0 1 4.743-4.743h3.951a4.756 4.756 0 0 1 4.743 4.743 4.756 4.756 0 0 1-4.743 4.742", "fill", "#FFF"], ["d", "M174.823 30.03c0-16.281 13.198-29.48 29.48-29.48 16.28 0 29.48 13.199 29.48 29.48 0 16.28-13.2 29.48-29.48 29.48-16.282 0-29.48-13.2-29.48-29.48", "fill", "#1890FF"], ["d", "M205.952 38.387c.5.5.785 1.142.785 1.928s-.286 1.465-.785 1.964c-.572.5-1.214.75-2 .75-.785 0-1.429-.285-1.929-.785-.572-.5-.82-1.143-.82-1.929s.248-1.428.82-1.928c.5-.5 1.144-.75 1.93-.75.785 0 1.462.25 1.999.75m4.285-19.463c1.428 1.249 2.143 2.963 2.143 5.142 0 1.712-.427 3.13-1.219 4.25-.067.096-.137.18-.218.265-.416.429-1.41 1.346-2.956 2.699a5.07 5.07 0 0 0-1.428 1.75 5.207 5.207 0 0 0-.536 2.357v.5h-4.107v-.5c0-1.357.215-2.536.714-3.5.464-.964 1.857-2.464 4.178-4.536l.43-.5c.643-.785.964-1.643.964-2.535 0-1.18-.358-2.108-1-2.785-.678-.68-1.643-1.001-2.858-1.001-1.536 0-2.642.464-3.357 1.43-.37.5-.621 1.135-.76 1.904a1.999 1.999 0 0 1-1.971 1.63h-.004c-1.277 0-2.257-1.183-1.98-2.43.337-1.518 1.02-2.78 2.073-3.784 1.536-1.5 3.607-2.25 6.25-2.25 2.32 0 4.214.607 5.642 1.894", "fill", "#FFF"], ["d", "M52.04 76.131s21.81 5.36 27.307 15.945c5.575 10.74-6.352 9.26-15.73 4.935-10.86-5.008-24.7-11.822-11.577-20.88", "fill", "#FFB594"], ["d", "M90.483 67.504l-.449 2.893c-.753.49-4.748-2.663-4.748-2.663l-1.645.748-1.346-5.684s6.815-4.589 8.917-5.018c2.452-.501 9.884.94 10.7 2.278 0 0 1.32.486-2.227.69-3.548.203-5.043.447-6.79 3.132-1.747 2.686-2.412 3.624-2.412 3.624", "fill", "#FFC6A0"], ["d", "M128.055 111.367c-2.627-7.724-6.15-13.18-8.917-15.478-3.5-2.906-9.34-2.225-11.366-4.187-1.27-1.231-3.215-1.197-3.215-1.197s-14.98-3.158-16.828-3.479c-2.37-.41-2.124-.714-6.054-1.405-1.57-1.907-2.917-1.122-2.917-1.122l-7.11-1.383c-.853-1.472-2.423-1.023-2.423-1.023l-2.468-.897c-1.645 9.976-7.74 13.796-7.74 13.796 1.795 1.122 15.703 8.3 15.703 8.3l5.107 37.11s-3.321 5.694 1.346 9.109c0 0 19.883-3.743 34.921-.329 0 0 3.047-2.546.972-8.806.523-3.01 1.394-8.263 1.736-11.622.385.772 2.019 1.918 3.14 3.477 0 0 9.407-7.365 11.052-14.012-.832-.723-1.598-1.585-2.267-2.453-.567-.736-.358-2.056-.765-2.717-.669-1.084-1.804-1.378-1.907-1.682", "fill", "#FFF"], ["d", "M101.09 289.998s4.295 2.041 7.354 1.021c2.821-.94 4.53.668 7.08 1.178 2.55.51 6.874 1.1 11.686-1.26-.103-5.51-6.889-3.98-11.96-6.713-2.563-1.38-3.784-4.722-3.598-8.799h-9.402s-1.392 10.52-1.16 14.573", "fill", "#CBD1D1"], ["d", "M101.067 289.826s2.428 1.271 6.759.653c3.058-.437 3.712.481 7.423 1.031 3.712.55 10.724-.069 11.823-.894.413 1.1-.343 2.063-.343 2.063s-1.512.603-4.812.824c-2.03.136-5.8.291-7.607-.503-1.787-1.375-5.247-1.903-5.728-.241-3.918.95-7.355-.286-7.355-.286l-.16-2.647z", "fill", "#2B0849"], ["d", "M108.341 276.044h3.094s-.103 6.702 4.536 8.558c-4.64.618-8.558-2.303-7.63-8.558", "fill", "#A4AABA"], ["d", "M57.542 272.401s-2.107 7.416-4.485 12.306c-1.798 3.695-4.225 7.492 5.465 7.492 6.648 0 8.953-.48 7.423-6.599-1.53-6.12.266-13.199.266-13.199h-8.669z", "fill", "#CBD1D1"], ["d", "M51.476 289.793s2.097 1.169 6.633 1.169c6.083 0 8.249-1.65 8.249-1.65s.602 1.114-.619 2.165c-.993.855-3.597 1.591-7.39 1.546-4.145-.048-5.832-.566-6.736-1.168-.825-.55-.687-1.58-.137-2.062", "fill", "#2B0849"], ["d", "M58.419 274.304s.033 1.519-.314 2.93c-.349 1.42-1.078 3.104-1.13 4.139-.058 1.151 4.537 1.58 5.155.034.62-1.547 1.294-6.427 1.913-7.252.619-.825-4.903-2.119-5.624.15", "fill", "#A4AABA"], ["d", "M99.66 278.514l13.378.092s1.298-54.52 1.853-64.403c.554-9.882 3.776-43.364 1.002-63.128l-12.547-.644-22.849.78s-.434 3.966-1.195 9.976c-.063.496-.682.843-.749 1.365-.075.585.423 1.354.32 1.966-2.364 14.08-6.377 33.104-8.744 46.677-.116.666-1.234 1.009-1.458 2.691-.04.302.211 1.525.112 1.795-6.873 18.744-10.949 47.842-14.277 61.885l14.607-.014s2.197-8.57 4.03-16.97c2.811-12.886 23.111-85.01 23.111-85.01l3.016-.521 1.043 46.35s-.224 1.234.337 2.02c.56.785-.56 1.123-.392 2.244l.392 1.794s-.449 7.178-.898 11.89c-.448 4.71-.092 39.165-.092 39.165", "fill", "#7BB2F9"], ["d", "M76.085 221.626c1.153.094 4.038-2.019 6.955-4.935M106.36 225.142s2.774-1.11 6.103-3.883", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M107.275 222.1s2.773-1.11 6.102-3.884", "stroke", "#648BD8", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M74.74 224.767s2.622-.591 6.505-3.365M86.03 151.634c-.27 3.106.3 8.525-4.336 9.123M103.625 149.88s.11 14.012-1.293 15.065c-2.219 1.664-2.99 1.944-2.99 1.944M99.79 150.438s.035 12.88-1.196 24.377M93.673 175.911s7.212-1.664 9.431-1.664M74.31 205.861a212.013 212.013 0 0 1-.979 4.56s-1.458 1.832-1.009 3.776c.449 1.944-.947 2.045-4.985 15.355-1.696 5.59-4.49 18.591-6.348 27.597l-.231 1.12M75.689 197.807a320.934 320.934 0 0 1-.882 4.754M82.591 152.233L81.395 162.7s-1.097.15-.5 2.244c.113 1.346-2.674 15.775-5.18 30.43M56.12 274.418h13.31", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M116.241 148.22s-17.047-3.104-35.893.2c.158 2.514-.003 4.15-.003 4.15s14.687-2.818 35.67-.312c.252-2.355.226-4.038.226-4.038", "fill", "#192064"], ["d", "M106.322 151.165l.003-4.911a.81.81 0 0 0-.778-.815c-2.44-.091-5.066-.108-7.836-.014a.818.818 0 0 0-.789.815l-.003 4.906a.81.81 0 0 0 .831.813c2.385-.06 4.973-.064 7.73.017a.815.815 0 0 0 .842-.81", "fill", "#FFF"], ["d", "M105.207 150.233l.002-3.076a.642.642 0 0 0-.619-.646 94.321 94.321 0 0 0-5.866-.01.65.65 0 0 0-.63.647v3.072a.64.64 0 0 0 .654.644 121.12 121.12 0 0 1 5.794.011c.362.01.665-.28.665-.642", "fill", "#192064"], ["d", "M100.263 275.415h12.338M101.436 270.53c.006 3.387.042 5.79.111 6.506M101.451 264.548a915.75 915.75 0 0 0-.015 4.337M100.986 174.965l.898 44.642s.673 1.57-.225 2.692c-.897 1.122 2.468.673.898 2.243-1.57 1.57.897 1.122 0 3.365-.596 1.489-.994 21.1-1.096 35.146", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M46.876 83.427s-.516 6.045 7.223 5.552c11.2-.712 9.218-9.345 31.54-21.655-.786-2.708-2.447-4.744-2.447-4.744s-11.068 3.11-22.584 8.046c-6.766 2.9-13.395 6.352-13.732 12.801M104.46 91.057l.941-5.372-8.884-11.43-5.037 5.372-1.74 7.834a.321.321 0 0 0 .108.32c.965.8 6.5 5.013 14.347 3.544a.332.332 0 0 0 .264-.268", "fill", "#FFC6A0"], ["d", "M93.942 79.387s-4.533-2.853-2.432-6.855c1.623-3.09 4.513 1.133 4.513 1.133s.52-3.642 3.121-3.642c.52-1.04 1.561-4.162 1.561-4.162s11.445 2.601 13.526 3.121c0 5.203-2.304 19.424-7.84 19.861-8.892.703-12.449-9.456-12.449-9.456", "fill", "#FFC6A0"], ["d", "M113.874 73.446c2.601-2.081 3.47-9.722 3.47-9.722s-2.479-.49-6.64-2.05c-4.683-2.081-12.798-4.747-17.48.976-9.668 3.223-2.05 19.823-2.05 19.823l2.713-3.021s-3.935-3.287-2.08-6.243c2.17-3.462 3.92 1.073 3.92 1.073s.637-2.387 3.581-3.342c.355-.71 1.036-2.674 1.432-3.85a1.073 1.073 0 0 1 1.263-.704c2.4.558 8.677 2.019 11.356 2.662.522.125.871.615.82 1.15l-.305 3.248z", "fill", "#520038"], ["d", "M104.977 76.064c-.103.61-.582 1.038-1.07.956-.489-.083-.801-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.644.698 1.254M112.132 77.694c-.103.61-.582 1.038-1.07.956-.488-.083-.8-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.643.698 1.254", "fill", "#552950"], ["stroke", "#DB836E", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round", "d", "M110.13 74.84l-.896 1.61-.298 4.357h-2.228"], ["d", "M110.846 74.481s1.79-.716 2.506.537", "stroke", "#5C2552", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M92.386 74.282s.477-1.114 1.113-.716c.637.398 1.274 1.433.558 1.99-.717.556.159 1.67.159 1.67", "stroke", "#DB836E", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M103.287 72.93s1.83 1.113 4.137.954", "stroke", "#5C2552", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M103.685 81.762s2.227 1.193 4.376 1.193M104.64 84.308s.954.398 1.511.318M94.693 81.205s2.308 7.4 10.424 7.639", "stroke", "#DB836E", "strokeWidth", "1.118", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M81.45 89.384s.45 5.647-4.935 12.787M69 82.654s-.726 9.282-8.204 14.206", "stroke", "#E4EBF7", "strokeWidth", "1.101", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M129.405 122.865s-5.272 7.403-9.422 10.768", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M119.306 107.329s.452 4.366-2.127 32.062", "stroke", "#E4EBF7", "strokeWidth", "1.101", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M150.028 151.232h-49.837a1.01 1.01 0 0 1-1.01-1.01v-31.688c0-.557.452-1.01 1.01-1.01h49.837c.558 0 1.01.453 1.01 1.01v31.688a1.01 1.01 0 0 1-1.01 1.01", "fill", "#F2D7AD"], ["d", "M150.29 151.232h-19.863v-33.707h20.784v32.786a.92.92 0 0 1-.92.92", "fill", "#F4D19D"], ["d", "M123.554 127.896H92.917a.518.518 0 0 1-.425-.816l6.38-9.113c.193-.277.51-.442.85-.442h31.092l-7.26 10.371z", "fill", "#F2D7AD"], ["fill", "#CC9B6E", "d", "M123.689 128.447H99.25v-.519h24.169l7.183-10.26.424.298z"], ["d", "M158.298 127.896h-18.669a2.073 2.073 0 0 1-1.659-.83l-7.156-9.541h19.965c.49 0 .95.23 1.244.622l6.69 8.92a.519.519 0 0 1-.415.83", "fill", "#F4D19D"], ["fill", "#CC9B6E", "d", "M157.847 128.479h-19.384l-7.857-10.475.415-.31 7.7 10.266h19.126zM130.554 150.685l-.032-8.177.519-.002.032 8.177z"], ["fill", "#CC9B6E", "d", "M130.511 139.783l-.08-21.414.519-.002.08 21.414zM111.876 140.932l-.498-.143 1.479-5.167.498.143zM108.437 141.06l-2.679-2.935 2.665-3.434.41.318-2.397 3.089 2.384 2.612zM116.607 141.06l-.383-.35 2.383-2.612-2.397-3.089.41-.318 2.665 3.434z"], ["d", "M154.316 131.892l-3.114-1.96.038 3.514-1.043.092c-1.682.115-3.634.23-4.789.23-1.902 0-2.693 2.258 2.23 2.648l-2.645-.596s-2.168 1.317.504 2.3c0 0-1.58 1.217.561 2.58-.584 3.504 5.247 4.058 7.122 3.59 1.876-.47 4.233-2.359 4.487-5.16.28-3.085-.89-5.432-3.35-7.238", "fill", "#FFC6A0"], ["d", "M153.686 133.577s-6.522.47-8.36.372c-1.836-.098-1.904 2.19 2.359 2.264 3.739.15 5.451-.044 5.451-.044", "stroke", "#DB836E", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M145.16 135.877c-1.85 1.346.561 2.355.561 2.355s3.478.898 6.73.617", "stroke", "#DB836E", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M151.89 141.71s-6.28.111-6.73-2.132c-.223-1.346.45-1.402.45-1.402M146.114 140.868s-1.103 3.16 5.44 3.533M151.202 129.932v3.477M52.838 89.286c3.533-.337 8.423-1.248 13.582-7.754", "stroke", "#DB836E", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M168.567 248.318a6.647 6.647 0 0 1-6.647-6.647v-66.466a6.647 6.647 0 1 1 13.294 0v66.466a6.647 6.647 0 0 1-6.647 6.647", "fill", "#5BA02E"], ["d", "M176.543 247.653a6.647 6.647 0 0 1-6.646-6.647v-33.232a6.647 6.647 0 1 1 13.293 0v33.232a6.647 6.647 0 0 1-6.647 6.647", "fill", "#92C110"], ["d", "M186.443 293.613H158.92a3.187 3.187 0 0 1-3.187-3.187v-46.134a3.187 3.187 0 0 1 3.187-3.187h27.524a3.187 3.187 0 0 1 3.187 3.187v46.134a3.187 3.187 0 0 1-3.187 3.187", "fill", "#F2D7AD"], ["d", "M88.979 89.48s7.776 5.384 16.6 2.842", "stroke", "#E4EBF7", "strokeWidth", "1.101", "strokeLinecap", "round", "strokeLinejoin", "round"]], template: function NzResultNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mask", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'nz-result-not-found',
                exportAs: 'nzResultNotFound',
                template: `
    <svg width="252" height="294">
      <defs>
        <path d="M0 .387h251.772v251.772H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 .012)">
          <mask fill="#fff" />
          <path
            d="M0 127.32v-2.095C0 56.279 55.892.387 124.838.387h2.096c68.946 0 124.838 55.892 124.838 124.838v2.096c0 68.946-55.892 124.838-124.838 124.838h-2.096C55.892 252.16 0 196.267 0 127.321"
            fill="#E4EBF7"
            mask="url(#b)"
          />
        </g>
        <path d="M39.755 130.84a8.276 8.276 0 1 1-16.468-1.66 8.276 8.276 0 0 1 16.468 1.66" fill="#FFF" />
        <path d="M36.975 134.297l10.482 5.943M48.373 146.508l-12.648 10.788" stroke="#FFF" strokeWidth="2" />
        <path
          d="M39.875 159.352a5.667 5.667 0 1 1-11.277-1.136 5.667 5.667 0 0 1 11.277 1.136M57.588 143.247a5.708 5.708 0 1 1-11.358-1.145 5.708 5.708 0 0 1 11.358 1.145M99.018 26.875l29.82-.014a4.587 4.587 0 1 0-.003-9.175l-29.82.013a4.587 4.587 0 1 0 .003 9.176M110.424 45.211l29.82-.013a4.588 4.588 0 0 0-.004-9.175l-29.82.013a4.587 4.587 0 1 0 .004 9.175"
          fill="#FFF"
        />
        <path
          d="M112.798 26.861v-.002l15.784-.006a4.588 4.588 0 1 0 .003 9.175l-15.783.007v-.002a4.586 4.586 0 0 0-.004-9.172M184.523 135.668c-.553 5.485-5.447 9.483-10.931 8.93-5.485-.553-9.483-5.448-8.93-10.932.552-5.485 5.447-9.483 10.932-8.93 5.485.553 9.483 5.447 8.93 10.932"
          fill="#FFF"
        />
        <path d="M179.26 141.75l12.64 7.167M193.006 156.477l-15.255 13.011" par stroke="#FFF" strokeWidth="2" />
        <path
          d="M184.668 170.057a6.835 6.835 0 1 1-13.6-1.372 6.835 6.835 0 0 1 13.6 1.372M203.34 153.325a6.885 6.885 0 1 1-13.7-1.382 6.885 6.885 0 0 1 13.7 1.382"
          fill="#FFF"
        />
        <path
          d="M151.931 192.324a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0zM225.27 116.056a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0zM216.38 151.08a2.223 2.223 0 1 1-4.446-.001 2.223 2.223 0 0 1 4.446 0zM176.917 107.636a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM195.291 92.165a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM202.058 180.711a2.223 2.223 0 1 1-4.446 0 2.223 2.223 0 0 1 4.446 0z"
          stroke="#FFF"
          strokeWidth="2"
        />
        <path
          stroke="#FFF"
          strokeWidth="2"
          d="M214.404 153.302l-1.912 20.184-10.928 5.99M173.661 174.792l-6.356 9.814h-11.36l-4.508 6.484M174.941 125.168v-15.804M220.824 117.25l-12.84 7.901-15.31-7.902V94.39"
        />
        <path
          d="M166.588 65.936h-3.951a4.756 4.756 0 0 1-4.743-4.742 4.756 4.756 0 0 1 4.743-4.743h3.951a4.756 4.756 0 0 1 4.743 4.743 4.756 4.756 0 0 1-4.743 4.742"
          fill="#FFF"
        />
        <path
          d="M174.823 30.03c0-16.281 13.198-29.48 29.48-29.48 16.28 0 29.48 13.199 29.48 29.48 0 16.28-13.2 29.48-29.48 29.48-16.282 0-29.48-13.2-29.48-29.48"
          fill="#1890FF"
        />
        <path
          d="M205.952 38.387c.5.5.785 1.142.785 1.928s-.286 1.465-.785 1.964c-.572.5-1.214.75-2 .75-.785 0-1.429-.285-1.929-.785-.572-.5-.82-1.143-.82-1.929s.248-1.428.82-1.928c.5-.5 1.144-.75 1.93-.75.785 0 1.462.25 1.999.75m4.285-19.463c1.428 1.249 2.143 2.963 2.143 5.142 0 1.712-.427 3.13-1.219 4.25-.067.096-.137.18-.218.265-.416.429-1.41 1.346-2.956 2.699a5.07 5.07 0 0 0-1.428 1.75 5.207 5.207 0 0 0-.536 2.357v.5h-4.107v-.5c0-1.357.215-2.536.714-3.5.464-.964 1.857-2.464 4.178-4.536l.43-.5c.643-.785.964-1.643.964-2.535 0-1.18-.358-2.108-1-2.785-.678-.68-1.643-1.001-2.858-1.001-1.536 0-2.642.464-3.357 1.43-.37.5-.621 1.135-.76 1.904a1.999 1.999 0 0 1-1.971 1.63h-.004c-1.277 0-2.257-1.183-1.98-2.43.337-1.518 1.02-2.78 2.073-3.784 1.536-1.5 3.607-2.25 6.25-2.25 2.32 0 4.214.607 5.642 1.894"
          fill="#FFF"
        />
        <path
          d="M52.04 76.131s21.81 5.36 27.307 15.945c5.575 10.74-6.352 9.26-15.73 4.935-10.86-5.008-24.7-11.822-11.577-20.88"
          fill="#FFB594"
        />
        <path
          d="M90.483 67.504l-.449 2.893c-.753.49-4.748-2.663-4.748-2.663l-1.645.748-1.346-5.684s6.815-4.589 8.917-5.018c2.452-.501 9.884.94 10.7 2.278 0 0 1.32.486-2.227.69-3.548.203-5.043.447-6.79 3.132-1.747 2.686-2.412 3.624-2.412 3.624"
          fill="#FFC6A0"
        />
        <path
          d="M128.055 111.367c-2.627-7.724-6.15-13.18-8.917-15.478-3.5-2.906-9.34-2.225-11.366-4.187-1.27-1.231-3.215-1.197-3.215-1.197s-14.98-3.158-16.828-3.479c-2.37-.41-2.124-.714-6.054-1.405-1.57-1.907-2.917-1.122-2.917-1.122l-7.11-1.383c-.853-1.472-2.423-1.023-2.423-1.023l-2.468-.897c-1.645 9.976-7.74 13.796-7.74 13.796 1.795 1.122 15.703 8.3 15.703 8.3l5.107 37.11s-3.321 5.694 1.346 9.109c0 0 19.883-3.743 34.921-.329 0 0 3.047-2.546.972-8.806.523-3.01 1.394-8.263 1.736-11.622.385.772 2.019 1.918 3.14 3.477 0 0 9.407-7.365 11.052-14.012-.832-.723-1.598-1.585-2.267-2.453-.567-.736-.358-2.056-.765-2.717-.669-1.084-1.804-1.378-1.907-1.682"
          fill="#FFF"
        />
        <path
          d="M101.09 289.998s4.295 2.041 7.354 1.021c2.821-.94 4.53.668 7.08 1.178 2.55.51 6.874 1.1 11.686-1.26-.103-5.51-6.889-3.98-11.96-6.713-2.563-1.38-3.784-4.722-3.598-8.799h-9.402s-1.392 10.52-1.16 14.573"
          fill="#CBD1D1"
        />
        <path
          d="M101.067 289.826s2.428 1.271 6.759.653c3.058-.437 3.712.481 7.423 1.031 3.712.55 10.724-.069 11.823-.894.413 1.1-.343 2.063-.343 2.063s-1.512.603-4.812.824c-2.03.136-5.8.291-7.607-.503-1.787-1.375-5.247-1.903-5.728-.241-3.918.95-7.355-.286-7.355-.286l-.16-2.647z"
          fill="#2B0849"
        />
        <path d="M108.341 276.044h3.094s-.103 6.702 4.536 8.558c-4.64.618-8.558-2.303-7.63-8.558" fill="#A4AABA" />
        <path
          d="M57.542 272.401s-2.107 7.416-4.485 12.306c-1.798 3.695-4.225 7.492 5.465 7.492 6.648 0 8.953-.48 7.423-6.599-1.53-6.12.266-13.199.266-13.199h-8.669z"
          fill="#CBD1D1"
        />
        <path
          d="M51.476 289.793s2.097 1.169 6.633 1.169c6.083 0 8.249-1.65 8.249-1.65s.602 1.114-.619 2.165c-.993.855-3.597 1.591-7.39 1.546-4.145-.048-5.832-.566-6.736-1.168-.825-.55-.687-1.58-.137-2.062"
          fill="#2B0849"
        />
        <path
          d="M58.419 274.304s.033 1.519-.314 2.93c-.349 1.42-1.078 3.104-1.13 4.139-.058 1.151 4.537 1.58 5.155.034.62-1.547 1.294-6.427 1.913-7.252.619-.825-4.903-2.119-5.624.15"
          fill="#A4AABA"
        />
        <path
          d="M99.66 278.514l13.378.092s1.298-54.52 1.853-64.403c.554-9.882 3.776-43.364 1.002-63.128l-12.547-.644-22.849.78s-.434 3.966-1.195 9.976c-.063.496-.682.843-.749 1.365-.075.585.423 1.354.32 1.966-2.364 14.08-6.377 33.104-8.744 46.677-.116.666-1.234 1.009-1.458 2.691-.04.302.211 1.525.112 1.795-6.873 18.744-10.949 47.842-14.277 61.885l14.607-.014s2.197-8.57 4.03-16.97c2.811-12.886 23.111-85.01 23.111-85.01l3.016-.521 1.043 46.35s-.224 1.234.337 2.02c.56.785-.56 1.123-.392 2.244l.392 1.794s-.449 7.178-.898 11.89c-.448 4.71-.092 39.165-.092 39.165"
          fill="#7BB2F9"
        />
        <path
          d="M76.085 221.626c1.153.094 4.038-2.019 6.955-4.935M106.36 225.142s2.774-1.11 6.103-3.883"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M107.275 222.1s2.773-1.11 6.102-3.884" stroke="#648BD8" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M74.74 224.767s2.622-.591 6.505-3.365M86.03 151.634c-.27 3.106.3 8.525-4.336 9.123M103.625 149.88s.11 14.012-1.293 15.065c-2.219 1.664-2.99 1.944-2.99 1.944M99.79 150.438s.035 12.88-1.196 24.377M93.673 175.911s7.212-1.664 9.431-1.664M74.31 205.861a212.013 212.013 0 0 1-.979 4.56s-1.458 1.832-1.009 3.776c.449 1.944-.947 2.045-4.985 15.355-1.696 5.59-4.49 18.591-6.348 27.597l-.231 1.12M75.689 197.807a320.934 320.934 0 0 1-.882 4.754M82.591 152.233L81.395 162.7s-1.097.15-.5 2.244c.113 1.346-2.674 15.775-5.18 30.43M56.12 274.418h13.31"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M116.241 148.22s-17.047-3.104-35.893.2c.158 2.514-.003 4.15-.003 4.15s14.687-2.818 35.67-.312c.252-2.355.226-4.038.226-4.038"
          fill="#192064"
        />
        <path
          d="M106.322 151.165l.003-4.911a.81.81 0 0 0-.778-.815c-2.44-.091-5.066-.108-7.836-.014a.818.818 0 0 0-.789.815l-.003 4.906a.81.81 0 0 0 .831.813c2.385-.06 4.973-.064 7.73.017a.815.815 0 0 0 .842-.81"
          fill="#FFF"
        />
        <path
          d="M105.207 150.233l.002-3.076a.642.642 0 0 0-.619-.646 94.321 94.321 0 0 0-5.866-.01.65.65 0 0 0-.63.647v3.072a.64.64 0 0 0 .654.644 121.12 121.12 0 0 1 5.794.011c.362.01.665-.28.665-.642"
          fill="#192064"
        />
        <path
          d="M100.263 275.415h12.338M101.436 270.53c.006 3.387.042 5.79.111 6.506M101.451 264.548a915.75 915.75 0 0 0-.015 4.337M100.986 174.965l.898 44.642s.673 1.57-.225 2.692c-.897 1.122 2.468.673.898 2.243-1.57 1.57.897 1.122 0 3.365-.596 1.489-.994 21.1-1.096 35.146"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.876 83.427s-.516 6.045 7.223 5.552c11.2-.712 9.218-9.345 31.54-21.655-.786-2.708-2.447-4.744-2.447-4.744s-11.068 3.11-22.584 8.046c-6.766 2.9-13.395 6.352-13.732 12.801M104.46 91.057l.941-5.372-8.884-11.43-5.037 5.372-1.74 7.834a.321.321 0 0 0 .108.32c.965.8 6.5 5.013 14.347 3.544a.332.332 0 0 0 .264-.268"
          fill="#FFC6A0"
        />
        <path
          d="M93.942 79.387s-4.533-2.853-2.432-6.855c1.623-3.09 4.513 1.133 4.513 1.133s.52-3.642 3.121-3.642c.52-1.04 1.561-4.162 1.561-4.162s11.445 2.601 13.526 3.121c0 5.203-2.304 19.424-7.84 19.861-8.892.703-12.449-9.456-12.449-9.456"
          fill="#FFC6A0"
        />
        <path
          d="M113.874 73.446c2.601-2.081 3.47-9.722 3.47-9.722s-2.479-.49-6.64-2.05c-4.683-2.081-12.798-4.747-17.48.976-9.668 3.223-2.05 19.823-2.05 19.823l2.713-3.021s-3.935-3.287-2.08-6.243c2.17-3.462 3.92 1.073 3.92 1.073s.637-2.387 3.581-3.342c.355-.71 1.036-2.674 1.432-3.85a1.073 1.073 0 0 1 1.263-.704c2.4.558 8.677 2.019 11.356 2.662.522.125.871.615.82 1.15l-.305 3.248z"
          fill="#520038"
        />
        <path
          d="M104.977 76.064c-.103.61-.582 1.038-1.07.956-.489-.083-.801-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.644.698 1.254M112.132 77.694c-.103.61-.582 1.038-1.07.956-.488-.083-.8-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.643.698 1.254"
          fill="#552950"
        />
        <path
          stroke="#DB836E"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M110.13 74.84l-.896 1.61-.298 4.357h-2.228"
        />
        <path d="M110.846 74.481s1.79-.716 2.506.537" stroke="#5C2552" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M92.386 74.282s.477-1.114 1.113-.716c.637.398 1.274 1.433.558 1.99-.717.556.159 1.67.159 1.67"
          stroke="#DB836E"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M103.287 72.93s1.83 1.113 4.137.954" stroke="#5C2552" strokeWidth="1.118" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M103.685 81.762s2.227 1.193 4.376 1.193M104.64 84.308s.954.398 1.511.318M94.693 81.205s2.308 7.4 10.424 7.639"
          stroke="#DB836E"
          strokeWidth="1.118"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M81.45 89.384s.45 5.647-4.935 12.787M69 82.654s-.726 9.282-8.204 14.206"
          stroke="#E4EBF7"
          strokeWidth="1.101"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M129.405 122.865s-5.272 7.403-9.422 10.768"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119.306 107.329s.452 4.366-2.127 32.062"
          stroke="#E4EBF7"
          strokeWidth="1.101"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M150.028 151.232h-49.837a1.01 1.01 0 0 1-1.01-1.01v-31.688c0-.557.452-1.01 1.01-1.01h49.837c.558 0 1.01.453 1.01 1.01v31.688a1.01 1.01 0 0 1-1.01 1.01"
          fill="#F2D7AD"
        />
        <path d="M150.29 151.232h-19.863v-33.707h20.784v32.786a.92.92 0 0 1-.92.92" fill="#F4D19D" />
        <path
          d="M123.554 127.896H92.917a.518.518 0 0 1-.425-.816l6.38-9.113c.193-.277.51-.442.85-.442h31.092l-7.26 10.371z"
          fill="#F2D7AD"
        />
        <path fill="#CC9B6E" d="M123.689 128.447H99.25v-.519h24.169l7.183-10.26.424.298z" />
        <path
          d="M158.298 127.896h-18.669a2.073 2.073 0 0 1-1.659-.83l-7.156-9.541h19.965c.49 0 .95.23 1.244.622l6.69 8.92a.519.519 0 0 1-.415.83"
          fill="#F4D19D"
        />
        <path
          fill="#CC9B6E"
          d="M157.847 128.479h-19.384l-7.857-10.475.415-.31 7.7 10.266h19.126zM130.554 150.685l-.032-8.177.519-.002.032 8.177z"
        />
        <path
          fill="#CC9B6E"
          d="M130.511 139.783l-.08-21.414.519-.002.08 21.414zM111.876 140.932l-.498-.143 1.479-5.167.498.143zM108.437 141.06l-2.679-2.935 2.665-3.434.41.318-2.397 3.089 2.384 2.612zM116.607 141.06l-.383-.35 2.383-2.612-2.397-3.089.41-.318 2.665 3.434z"
        />
        <path
          d="M154.316 131.892l-3.114-1.96.038 3.514-1.043.092c-1.682.115-3.634.23-4.789.23-1.902 0-2.693 2.258 2.23 2.648l-2.645-.596s-2.168 1.317.504 2.3c0 0-1.58 1.217.561 2.58-.584 3.504 5.247 4.058 7.122 3.59 1.876-.47 4.233-2.359 4.487-5.16.28-3.085-.89-5.432-3.35-7.238"
          fill="#FFC6A0"
        />
        <path
          d="M153.686 133.577s-6.522.47-8.36.372c-1.836-.098-1.904 2.19 2.359 2.264 3.739.15 5.451-.044 5.451-.044"
          stroke="#DB836E"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M145.16 135.877c-1.85 1.346.561 2.355.561 2.355s3.478.898 6.73.617"
          stroke="#DB836E"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M151.89 141.71s-6.28.111-6.73-2.132c-.223-1.346.45-1.402.45-1.402M146.114 140.868s-1.103 3.16 5.44 3.533M151.202 129.932v3.477M52.838 89.286c3.533-.337 8.423-1.248 13.582-7.754"
          stroke="#DB836E"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M168.567 248.318a6.647 6.647 0 0 1-6.647-6.647v-66.466a6.647 6.647 0 1 1 13.294 0v66.466a6.647 6.647 0 0 1-6.647 6.647"
          fill="#5BA02E"
        />
        <path
          d="M176.543 247.653a6.647 6.647 0 0 1-6.646-6.647v-33.232a6.647 6.647 0 1 1 13.293 0v33.232a6.647 6.647 0 0 1-6.647 6.647"
          fill="#92C110"
        />
        <path
          d="M186.443 293.613H158.92a3.187 3.187 0 0 1-3.187-3.187v-46.134a3.187 3.187 0 0 1 3.187-3.187h27.524a3.187 3.187 0 0 1 3.187 3.187v46.134a3.187 3.187 0 0 1-3.187 3.187"
          fill="#F2D7AD"
        />
        <path d="M88.979 89.48s7.776 5.384 16.6 2.842" stroke="#E4EBF7" strokeWidth="1.101" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResultServerErrorComponent {
}
NzResultServerErrorComponent.ɵfac = function NzResultServerErrorComponent_Factory(t) { return new (t || NzResultServerErrorComponent)(); };
NzResultServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzResultServerErrorComponent, selectors: [["nz-result-server-error"]], exportAs: ["nzResultServerError"], decls: 69, vars: 0, consts: [["width", "254", "height", "294"], ["d", "M0 .335h253.49v253.49H0z"], ["d", "M0 293.665h253.49V.401H0z"], ["fill", "none", "fillRule", "evenodd"], ["transform", "translate(0 .067)"], ["fill", "#fff"], ["d", "M0 128.134v-2.11C0 56.608 56.273.334 125.69.334h2.11c69.416 0 125.69 56.274 125.69 125.69v2.11c0 69.417-56.274 125.69-125.69 125.69h-2.11C56.273 253.824 0 197.551 0 128.134", "fill", "#E4EBF7", "mask", "url(#b)"], ["d", "M39.989 132.108a8.332 8.332 0 1 1-16.581-1.671 8.332 8.332 0 0 1 16.58 1.671", "fill", "#FFF"], ["d", "M37.19 135.59l10.553 5.983M48.665 147.884l-12.734 10.861", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M40.11 160.816a5.706 5.706 0 1 1-11.354-1.145 5.706 5.706 0 0 1 11.354 1.145M57.943 144.6a5.747 5.747 0 1 1-11.436-1.152 5.747 5.747 0 0 1 11.436 1.153M99.656 27.434l30.024-.013a4.619 4.619 0 1 0-.004-9.238l-30.024.013a4.62 4.62 0 0 0 .004 9.238M111.14 45.896l30.023-.013a4.62 4.62 0 1 0-.004-9.238l-30.024.013a4.619 4.619 0 1 0 .004 9.238", "fill", "#FFF"], ["d", "M113.53 27.421v-.002l15.89-.007a4.619 4.619 0 1 0 .005 9.238l-15.892.007v-.002a4.618 4.618 0 0 0-.004-9.234M150.167 70.091h-3.979a4.789 4.789 0 0 1-4.774-4.775 4.788 4.788 0 0 1 4.774-4.774h3.979a4.789 4.789 0 0 1 4.775 4.774 4.789 4.789 0 0 1-4.775 4.775", "fill", "#FFF"], ["d", "M171.687 30.234c0-16.392 13.289-29.68 29.681-29.68 16.392 0 29.68 13.288 29.68 29.68 0 16.393-13.288 29.681-29.68 29.681s-29.68-13.288-29.68-29.68", "fill", "#FF603B"], ["d", "M203.557 19.435l-.676 15.035a1.514 1.514 0 0 1-3.026 0l-.675-15.035a2.19 2.19 0 1 1 4.377 0m-.264 19.378c.513.477.77 1.1.77 1.87s-.257 1.393-.77 1.907c-.55.476-1.21.733-1.943.733a2.545 2.545 0 0 1-1.87-.77c-.55-.514-.806-1.136-.806-1.87 0-.77.256-1.393.806-1.87.513-.513 1.137-.733 1.87-.733.77 0 1.43.22 1.943.733", "fill", "#FFF"], ["d", "M119.3 133.275c4.426-.598 3.612-1.204 4.079-4.778.675-5.18-3.108-16.935-8.262-25.118-1.088-10.72-12.598-11.24-12.598-11.24s4.312 4.895 4.196 16.199c1.398 5.243.804 14.45.804 14.45s5.255 11.369 11.78 10.487", "fill", "#FFB594"], ["d", "M100.944 91.61s1.463-.583 3.211.582c8.08 1.398 10.368 6.706 11.3 11.368 1.864 1.282 1.864 2.33 1.864 3.496.365.777 1.515 3.03 1.515 3.03s-7.225 1.748-10.954 6.758c-1.399-6.41-6.936-25.235-6.936-25.235", "fill", "#FFF"], ["d", "M94.008 90.5l1.019-5.815-9.23-11.874-5.233 5.581-2.593 9.863s8.39 5.128 16.037 2.246", "fill", "#FFB594"], ["d", "M82.931 78.216s-4.557-2.868-2.445-6.892c1.632-3.107 4.537 1.139 4.537 1.139s.524-3.662 3.139-3.662c.523-1.046 1.569-4.184 1.569-4.184s11.507 2.615 13.6 3.138c-.001 5.23-2.317 19.529-7.884 19.969-8.94.706-12.516-9.508-12.516-9.508", "fill", "#FFC6A0"], ["d", "M102.971 72.243c2.616-2.093 3.489-9.775 3.489-9.775s-2.492-.492-6.676-2.062c-4.708-2.092-12.867-4.771-17.575.982-9.54 4.41-2.062 19.93-2.062 19.93l2.729-3.037s-3.956-3.304-2.092-6.277c2.183-3.48 3.943 1.08 3.943 1.08s.64-2.4 3.6-3.36c.356-.714 1.04-2.69 1.44-3.872a1.08 1.08 0 0 1 1.27-.707c2.41.56 8.723 2.03 11.417 2.676.524.126.876.619.825 1.156l-.308 3.266z", "fill", "#520038"], ["d", "M101.22 76.514c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.961.491.083.805.647.702 1.26M94.26 75.074c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.96.491.082.805.646.702 1.26", "fill", "#552950"], ["stroke", "#DB836E", "strokeWidth", "1.063", "strokeLinecap", "round", "strokeLinejoin", "round", "d", "M99.206 73.644l-.9 1.62-.3 4.38h-2.24"], ["d", "M99.926 73.284s1.8-.72 2.52.54", "stroke", "#5C2552", "strokeWidth", "1.117", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M81.367 73.084s.48-1.12 1.12-.72c.64.4 1.28 1.44.56 2s.16 1.68.16 1.68", "stroke", "#DB836E", "strokeWidth", "1.117", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M92.326 71.724s1.84 1.12 4.16.96", "stroke", "#5C2552", "strokeWidth", "1.117", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M92.726 80.604s2.24 1.2 4.4 1.2M93.686 83.164s.96.4 1.52.32M83.687 80.044s1.786 6.547 9.262 7.954", "stroke", "#DB836E", "strokeWidth", "1.063", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M95.548 91.663s-1.068 2.821-8.298 2.105c-7.23-.717-10.29-5.044-10.29-5.044", "stroke", "#E4EBF7", "strokeWidth", "1.136", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M78.126 87.478s6.526 4.972 16.47 2.486c0 0 9.577 1.02 11.536 5.322 5.36 11.77.543 36.835 0 39.962 3.496 4.055-.466 8.483-.466 8.483-15.624-3.548-35.81-.6-35.81-.6-4.849-3.546-1.223-9.044-1.223-9.044L62.38 110.32c-2.485-15.227.833-19.803 3.549-20.743 3.03-1.049 8.04-1.282 8.04-1.282.496-.058 1.08-.076 1.37-.233 2.36-1.282 2.787-.583 2.787-.583", "fill", "#FFF"], ["d", "M65.828 89.81s-6.875.465-7.59 8.156c-.466 8.857 3.03 10.954 3.03 10.954s6.075 22.102 16.796 22.957c8.39-2.176 4.758-6.702 4.661-11.42-.233-11.304-7.108-16.897-7.108-16.897s-4.212-13.75-9.789-13.75", "fill", "#FFC6A0"], ["d", "M71.716 124.225s.855 11.264 9.828 6.486c4.765-2.536 7.581-13.828 9.789-22.568 1.456-5.768 2.58-12.197 2.58-12.197l-4.973-1.709s-2.408 5.516-7.769 12.275c-4.335 5.467-9.144 11.11-9.455 17.713", "fill", "#FFC6A0"], ["d", "M108.463 105.191s1.747 2.724-2.331 30.535c2.376 2.216 1.053 6.012-.233 7.51", "stroke", "#E4EBF7", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M123.262 131.527s-.427 2.732-11.77 1.981c-15.187-1.006-25.326-3.25-25.326-3.25l.933-5.8s.723.215 9.71-.068c11.887-.373 18.714-6.07 24.964-1.022 4.039 3.263 1.489 8.16 1.489 8.16", "fill", "#FFC6A0"], ["d", "M70.24 90.974s-5.593-4.739-11.054 2.68c-3.318 7.223.517 15.284 2.664 19.578-.31 3.729 2.33 4.311 2.33 4.311s.108.895 1.516 2.68c4.078-7.03 6.72-9.166 13.711-12.546-.328-.656-1.877-3.265-1.825-3.767.175-1.69-1.282-2.623-1.282-2.623s-.286-.156-1.165-2.738c-.788-2.313-2.036-5.177-4.895-7.575", "fill", "#FFF"], ["d", "M90.232 288.027s4.855 2.308 8.313 1.155c3.188-1.063 5.12.755 8.002 1.331 2.881.577 7.769 1.243 13.207-1.424-.117-6.228-7.786-4.499-13.518-7.588-2.895-1.56-4.276-5.336-4.066-9.944H91.544s-1.573 11.89-1.312 16.47", "fill", "#CBD1D1"], ["d", "M90.207 287.833s2.745 1.437 7.639.738c3.456-.494 3.223.66 7.418 1.282 4.195.621 13.092-.194 14.334-1.126.466 1.242-.388 2.33-.388 2.33s-1.709.682-5.438.932c-2.295.154-8.098.276-10.14-.621-2.02-1.554-4.894-1.515-6.06-.234-4.427 1.075-7.184-.31-7.184-.31l-.181-2.991z", "fill", "#2B0849"], ["d", "M98.429 272.257h3.496s-.117 7.574 5.127 9.671c-5.244.7-9.672-2.602-8.623-9.671", "fill", "#A4AABA"], ["d", "M44.425 272.046s-2.208 7.774-4.702 12.899c-1.884 3.874-4.428 7.854 5.729 7.854 6.97 0 9.385-.503 7.782-6.917-1.604-6.415.279-13.836.279-13.836h-9.088z", "fill", "#CBD1D1"], ["d", "M38.066 290.277s2.198 1.225 6.954 1.225c6.376 0 8.646-1.73 8.646-1.73s.63 1.168-.649 2.27c-1.04.897-3.77 1.668-7.745 1.621-4.347-.05-6.115-.593-7.062-1.224-.864-.577-.72-1.657-.144-2.162", "fill", "#2B0849"], ["d", "M45.344 274.041s.035 1.592-.329 3.07c-.365 1.49-1.13 3.255-1.184 4.34-.061 1.206 4.755 1.657 5.403.036.65-1.622 1.357-6.737 2.006-7.602.648-.865-5.14-2.222-5.896.156", "fill", "#A4AABA"], ["d", "M89.476 277.57l13.899.095s1.349-56.643 1.925-66.909c.576-10.267 3.923-45.052 1.042-65.585l-13.037-.669-23.737.81s-.452 4.12-1.243 10.365c-.065.515-.708.874-.777 1.417-.078.608.439 1.407.332 2.044-2.455 14.627-5.797 32.736-8.256 46.837-.121.693-1.282 1.048-1.515 2.796-.042.314.22 1.584.116 1.865-7.14 19.473-12.202 52.601-15.66 67.19l15.176-.015s2.282-10.145 4.185-18.871c2.922-13.389 24.012-88.32 24.012-88.32l3.133-.954-.158 48.568s-.233 1.282.35 2.098c.583.815-.581 1.167-.408 2.331l.408 1.864s-.466 7.458-.932 12.352c-.467 4.895 1.145 40.69 1.145 40.69", "fill", "#7BB2F9"], ["d", "M64.57 218.881c1.197.099 4.195-2.097 7.225-5.127M96.024 222.534s2.881-1.152 6.34-4.034", "stroke", "#648BD8", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M96.973 219.373s2.882-1.153 6.34-4.034", "stroke", "#648BD8", "strokeWidth", "1.032", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M63.172 222.144s2.724-.614 6.759-3.496M74.903 146.166c-.281 3.226.31 8.856-4.506 9.478M93.182 144.344s.115 14.557-1.344 15.65c-2.305 1.73-3.107 2.02-3.107 2.02M89.197 144.923s.269 13.144-1.01 25.088M83.525 170.71s6.81-1.051 9.116-1.051M46.026 270.045l-.892 4.538M46.937 263.289l-.815 4.157M62.725 202.503c-.33 1.618-.102 1.904-.449 3.438 0 0-2.756 1.903-2.29 3.923.466 2.02-.31 3.424-4.505 17.252-1.762 5.807-4.233 18.922-6.165 28.278-.03.144-.521 2.646-1.14 5.8M64.158 194.136c-.295 1.658-.6 3.31-.917 4.938M71.33 146.787l-1.244 10.877s-1.14.155-.519 2.33c.117 1.399-2.778 16.39-5.382 31.615M44.242 273.727H58.07", "stroke", "#648BD8", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M106.18 142.117c-3.028-.489-18.825-2.744-36.219.2a.625.625 0 0 0-.518.644c.063 1.307.044 2.343.015 2.995a.617.617 0 0 0 .716.636c3.303-.534 17.037-2.412 35.664-.266.347.04.66-.214.692-.56.124-1.347.16-2.425.17-3.029a.616.616 0 0 0-.52-.62", "fill", "#192064"], ["d", "M96.398 145.264l.003-5.102a.843.843 0 0 0-.809-.847 114.104 114.104 0 0 0-8.141-.014.85.85 0 0 0-.82.847l-.003 5.097c0 .476.388.857.864.845 2.478-.064 5.166-.067 8.03.017a.848.848 0 0 0 .876-.843", "fill", "#FFF"], ["d", "M95.239 144.296l.002-3.195a.667.667 0 0 0-.643-.672c-1.9-.061-3.941-.073-6.094-.01a.675.675 0 0 0-.654.672l-.002 3.192c0 .376.305.677.68.669 1.859-.042 3.874-.043 6.02.012.376.01.69-.291.691-.668", "fill", "#192064"], ["d", "M90.102 273.522h12.819M91.216 269.761c.006 3.519-.072 5.55 0 6.292M90.923 263.474c-.009 1.599-.016 2.558-.016 4.505M90.44 170.404l.932 46.38s.7 1.631-.233 2.796c-.932 1.166 2.564.7.932 2.33-1.63 1.633.933 1.166 0 3.497-.618 1.546-1.031 21.921-1.138 36.513", "stroke", "#648BD8", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M73.736 98.665l2.214 4.312s2.098.816 1.865 2.68l.816 2.214M64.297 116.611c.233-.932 2.176-7.147 12.585-10.488M77.598 90.042s7.691 6.137 16.547 2.72", "stroke", "#E4EBF7", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M91.974 86.954s5.476-.816 7.574-4.545c1.297-.345.72 2.212-.33 3.671-.7.971-1.01 1.554-1.01 1.554s.194.31.155.816c-.053.697-.175.653-.272 1.048-.081.335.108.657 0 1.049-.046.17-.198.5-.382.878-.12.249-.072.687-.2.948-.231.469-1.562 1.87-2.622 2.855-3.826 3.554-5.018 1.644-6.001-.408-.894-1.865-.661-5.127-.874-6.875-.35-2.914-2.622-3.03-1.923-4.429.343-.685 2.87.69 3.263 1.748.757 2.04 2.952 1.807 2.622 1.69", "fill", "#FFC6A0"], ["d", "M99.8 82.429c-.465.077-.35.272-.97 1.243-.622.971-4.817 2.932-6.39 3.224-2.589.48-2.278-1.56-4.254-2.855-1.69-1.107-3.562-.638-1.398 1.398.99.932.932 1.107 1.398 3.205.335 1.506-.64 3.67.7 5.593", "stroke", "#DB836E", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M79.543 108.673c-2.1 2.926-4.266 6.175-5.557 8.762", "stroke", "#E59788", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M87.72 124.768s-2.098-1.942-5.127-2.719c-3.03-.777-3.574-.155-5.516.078-1.942.233-3.885-.932-3.652.7.233 1.63 5.05 1.01 5.206 2.097.155 1.087-6.37 2.796-8.313 2.175-.777.777.466 1.864 2.02 2.175.233 1.554 2.253 1.554 2.253 1.554s.699 1.01 2.641 1.088c2.486 1.32 8.934-.7 10.954-1.554 2.02-.855-.466-5.594-.466-5.594", "fill", "#FFC6A0"], ["d", "M73.425 122.826s.66 1.127 3.167 1.418c2.315.27 2.563.583 2.563.583s-2.545 2.894-9.07 2.272M72.416 129.274s3.826.097 4.933-.718M74.98 130.75s1.961.136 3.36-.505M77.232 131.916s1.748.019 2.914-.505M73.328 122.321s-.595-1.032 1.262-.427c1.671.544 2.833.055 5.128.155 1.389.061 3.067-.297 3.982.15 1.606.784 3.632 2.181 3.632 2.181s10.526 1.204 19.033-1.127M78.864 108.104s-8.39 2.758-13.168 12.12", "stroke", "#E59788", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M109.278 112.533s3.38-3.613 7.575-4.662", "stroke", "#E4EBF7", "strokeWidth", "1.085", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M107.375 123.006s9.697-2.745 11.445-.88", "stroke", "#E59788", "strokeWidth", ".774", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M194.605 83.656l3.971-3.886M187.166 90.933l3.736-3.655M191.752 84.207l-4.462-4.56M198.453 91.057l-4.133-4.225M129.256 163.074l3.718-3.718M122.291 170.039l3.498-3.498M126.561 163.626l-4.27-4.27M132.975 170.039l-3.955-3.955", "stroke", "#BFCDDD", "strokeWidth", "2", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M190.156 211.779h-1.604a4.023 4.023 0 0 1-4.011-4.011V175.68a4.023 4.023 0 0 1 4.01-4.01h1.605a4.023 4.023 0 0 1 4.011 4.01v32.088a4.023 4.023 0 0 1-4.01 4.01", "fill", "#A3B4C6"], ["d", "M237.824 212.977a4.813 4.813 0 0 1-4.813 4.813h-86.636a4.813 4.813 0 0 1 0-9.626h86.636a4.813 4.813 0 0 1 4.813 4.813", "fill", "#A3B4C6"], ["fill", "#A3B4C6", "mask", "url(#d)", "d", "M154.098 190.096h70.513v-84.617h-70.513z"], ["d", "M224.928 190.096H153.78a3.219 3.219 0 0 1-3.208-3.209V167.92a3.219 3.219 0 0 1 3.208-3.21h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.219 3.219 0 0 1-3.21 3.209M224.928 130.832H153.78a3.218 3.218 0 0 1-3.208-3.208v-18.968a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.218 3.218 0 0 1-3.21 3.208", "fill", "#BFCDDD", "mask", "url(#d)"], ["d", "M159.563 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 120.546h-22.461a.802.802 0 0 1-.802-.802v-3.208c0-.443.359-.803.802-.803h22.46c.444 0 .803.36.803.803v3.208c0 .443-.36.802-.802.802", "fill", "#FFF", "mask", "url(#d)"], ["d", "M224.928 160.464H153.78a3.218 3.218 0 0 1-3.208-3.209v-18.967a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.209v18.967a3.218 3.218 0 0 1-3.21 3.209", "fill", "#BFCDDD", "mask", "url(#d)"], ["d", "M173.455 130.832h49.301M164.984 130.832h6.089M155.952 130.832h6.75M173.837 160.613h49.3M165.365 160.613h6.089M155.57 160.613h6.751", "stroke", "#7C90A5", "strokeWidth", "1.124", "strokeLinecap", "round", "strokeLinejoin", "round", "mask", "url(#d)"], ["d", "M159.563 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M166.98 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M174.397 151.038a2.407 2.407 0 1 1 .001-4.814 2.407 2.407 0 0 1 0 4.814M222.539 151.038h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802M159.563 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 179.987h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802", "fill", "#FFF", "mask", "url(#d)"], ["d", "M203.04 221.108h-27.372a2.413 2.413 0 0 1-2.406-2.407v-11.448a2.414 2.414 0 0 1 2.406-2.407h27.372a2.414 2.414 0 0 1 2.407 2.407V218.7a2.413 2.413 0 0 1-2.407 2.407", "fill", "#BFCDDD", "mask", "url(#d)"], ["d", "M177.259 207.217v11.52M201.05 207.217v11.52", "stroke", "#A3B4C6", "strokeWidth", "1.124", "strokeLinecap", "round", "strokeLinejoin", "round", "mask", "url(#d)"], ["d", "M162.873 267.894a9.422 9.422 0 0 1-9.422-9.422v-14.82a9.423 9.423 0 0 1 18.845 0v14.82a9.423 9.423 0 0 1-9.423 9.422", "fill", "#5BA02E", "mask", "url(#d)"], ["d", "M171.22 267.83a9.422 9.422 0 0 1-9.422-9.423v-3.438a9.423 9.423 0 0 1 18.845 0v3.438a9.423 9.423 0 0 1-9.422 9.423", "fill", "#92C110", "mask", "url(#d)"], ["d", "M181.31 293.666h-27.712a3.209 3.209 0 0 1-3.209-3.21V269.79a3.209 3.209 0 0 1 3.209-3.21h27.711a3.209 3.209 0 0 1 3.209 3.21v20.668a3.209 3.209 0 0 1-3.209 3.209", "fill", "#F2D7AD", "mask", "url(#d)"]], template: function NzResultServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mask", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "mask", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'nz-result-server-error',
                exportAs: 'nzResultServerError',
                template: `
    <svg width="254" height="294">
      <defs>
        <path d="M0 .335h253.49v253.49H0z" />
        <path d="M0 293.665h253.49V.401H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 .067)">
          <mask fill="#fff" />
          <path
            d="M0 128.134v-2.11C0 56.608 56.273.334 125.69.334h2.11c69.416 0 125.69 56.274 125.69 125.69v2.11c0 69.417-56.274 125.69-125.69 125.69h-2.11C56.273 253.824 0 197.551 0 128.134"
            fill="#E4EBF7"
            mask="url(#b)"
          />
        </g>
        <path d="M39.989 132.108a8.332 8.332 0 1 1-16.581-1.671 8.332 8.332 0 0 1 16.58 1.671" fill="#FFF" />
        <path d="M37.19 135.59l10.553 5.983M48.665 147.884l-12.734 10.861" stroke="#FFF" strokeWidth="2" />
        <path
          d="M40.11 160.816a5.706 5.706 0 1 1-11.354-1.145 5.706 5.706 0 0 1 11.354 1.145M57.943 144.6a5.747 5.747 0 1 1-11.436-1.152 5.747 5.747 0 0 1 11.436 1.153M99.656 27.434l30.024-.013a4.619 4.619 0 1 0-.004-9.238l-30.024.013a4.62 4.62 0 0 0 .004 9.238M111.14 45.896l30.023-.013a4.62 4.62 0 1 0-.004-9.238l-30.024.013a4.619 4.619 0 1 0 .004 9.238"
          fill="#FFF"
        />
        <path
          d="M113.53 27.421v-.002l15.89-.007a4.619 4.619 0 1 0 .005 9.238l-15.892.007v-.002a4.618 4.618 0 0 0-.004-9.234M150.167 70.091h-3.979a4.789 4.789 0 0 1-4.774-4.775 4.788 4.788 0 0 1 4.774-4.774h3.979a4.789 4.789 0 0 1 4.775 4.774 4.789 4.789 0 0 1-4.775 4.775"
          fill="#FFF"
        />
        <path
          d="M171.687 30.234c0-16.392 13.289-29.68 29.681-29.68 16.392 0 29.68 13.288 29.68 29.68 0 16.393-13.288 29.681-29.68 29.681s-29.68-13.288-29.68-29.68"
          fill="#FF603B"
        />
        <path
          d="M203.557 19.435l-.676 15.035a1.514 1.514 0 0 1-3.026 0l-.675-15.035a2.19 2.19 0 1 1 4.377 0m-.264 19.378c.513.477.77 1.1.77 1.87s-.257 1.393-.77 1.907c-.55.476-1.21.733-1.943.733a2.545 2.545 0 0 1-1.87-.77c-.55-.514-.806-1.136-.806-1.87 0-.77.256-1.393.806-1.87.513-.513 1.137-.733 1.87-.733.77 0 1.43.22 1.943.733"
          fill="#FFF"
        />
        <path
          d="M119.3 133.275c4.426-.598 3.612-1.204 4.079-4.778.675-5.18-3.108-16.935-8.262-25.118-1.088-10.72-12.598-11.24-12.598-11.24s4.312 4.895 4.196 16.199c1.398 5.243.804 14.45.804 14.45s5.255 11.369 11.78 10.487"
          fill="#FFB594"
        />
        <path
          d="M100.944 91.61s1.463-.583 3.211.582c8.08 1.398 10.368 6.706 11.3 11.368 1.864 1.282 1.864 2.33 1.864 3.496.365.777 1.515 3.03 1.515 3.03s-7.225 1.748-10.954 6.758c-1.399-6.41-6.936-25.235-6.936-25.235"
          fill="#FFF"
        />
        <path d="M94.008 90.5l1.019-5.815-9.23-11.874-5.233 5.581-2.593 9.863s8.39 5.128 16.037 2.246" fill="#FFB594" />
        <path
          d="M82.931 78.216s-4.557-2.868-2.445-6.892c1.632-3.107 4.537 1.139 4.537 1.139s.524-3.662 3.139-3.662c.523-1.046 1.569-4.184 1.569-4.184s11.507 2.615 13.6 3.138c-.001 5.23-2.317 19.529-7.884 19.969-8.94.706-12.516-9.508-12.516-9.508"
          fill="#FFC6A0"
        />
        <path
          d="M102.971 72.243c2.616-2.093 3.489-9.775 3.489-9.775s-2.492-.492-6.676-2.062c-4.708-2.092-12.867-4.771-17.575.982-9.54 4.41-2.062 19.93-2.062 19.93l2.729-3.037s-3.956-3.304-2.092-6.277c2.183-3.48 3.943 1.08 3.943 1.08s.64-2.4 3.6-3.36c.356-.714 1.04-2.69 1.44-3.872a1.08 1.08 0 0 1 1.27-.707c2.41.56 8.723 2.03 11.417 2.676.524.126.876.619.825 1.156l-.308 3.266z"
          fill="#520038"
        />
        <path
          d="M101.22 76.514c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.961.491.083.805.647.702 1.26M94.26 75.074c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.96.491.082.805.646.702 1.26"
          fill="#552950"
        />
        <path stroke="#DB836E" strokeWidth="1.063" strokeLinecap="round" strokeLinejoin="round" d="M99.206 73.644l-.9 1.62-.3 4.38h-2.24" />
        <path d="M99.926 73.284s1.8-.72 2.52.54" stroke="#5C2552" strokeWidth="1.117" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M81.367 73.084s.48-1.12 1.12-.72c.64.4 1.28 1.44.56 2s.16 1.68.16 1.68"
          stroke="#DB836E"
          strokeWidth="1.117"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M92.326 71.724s1.84 1.12 4.16.96" stroke="#5C2552" strokeWidth="1.117" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M92.726 80.604s2.24 1.2 4.4 1.2M93.686 83.164s.96.4 1.52.32M83.687 80.044s1.786 6.547 9.262 7.954"
          stroke="#DB836E"
          strokeWidth="1.063"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95.548 91.663s-1.068 2.821-8.298 2.105c-7.23-.717-10.29-5.044-10.29-5.044"
          stroke="#E4EBF7"
          strokeWidth="1.136"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.126 87.478s6.526 4.972 16.47 2.486c0 0 9.577 1.02 11.536 5.322 5.36 11.77.543 36.835 0 39.962 3.496 4.055-.466 8.483-.466 8.483-15.624-3.548-35.81-.6-35.81-.6-4.849-3.546-1.223-9.044-1.223-9.044L62.38 110.32c-2.485-15.227.833-19.803 3.549-20.743 3.03-1.049 8.04-1.282 8.04-1.282.496-.058 1.08-.076 1.37-.233 2.36-1.282 2.787-.583 2.787-.583"
          fill="#FFF"
        />
        <path
          d="M65.828 89.81s-6.875.465-7.59 8.156c-.466 8.857 3.03 10.954 3.03 10.954s6.075 22.102 16.796 22.957c8.39-2.176 4.758-6.702 4.661-11.42-.233-11.304-7.108-16.897-7.108-16.897s-4.212-13.75-9.789-13.75"
          fill="#FFC6A0"
        />
        <path
          d="M71.716 124.225s.855 11.264 9.828 6.486c4.765-2.536 7.581-13.828 9.789-22.568 1.456-5.768 2.58-12.197 2.58-12.197l-4.973-1.709s-2.408 5.516-7.769 12.275c-4.335 5.467-9.144 11.11-9.455 17.713"
          fill="#FFC6A0"
        />
        <path
          d="M108.463 105.191s1.747 2.724-2.331 30.535c2.376 2.216 1.053 6.012-.233 7.51"
          stroke="#E4EBF7"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M123.262 131.527s-.427 2.732-11.77 1.981c-15.187-1.006-25.326-3.25-25.326-3.25l.933-5.8s.723.215 9.71-.068c11.887-.373 18.714-6.07 24.964-1.022 4.039 3.263 1.489 8.16 1.489 8.16"
          fill="#FFC6A0"
        />
        <path
          d="M70.24 90.974s-5.593-4.739-11.054 2.68c-3.318 7.223.517 15.284 2.664 19.578-.31 3.729 2.33 4.311 2.33 4.311s.108.895 1.516 2.68c4.078-7.03 6.72-9.166 13.711-12.546-.328-.656-1.877-3.265-1.825-3.767.175-1.69-1.282-2.623-1.282-2.623s-.286-.156-1.165-2.738c-.788-2.313-2.036-5.177-4.895-7.575"
          fill="#FFF"
        />
        <path
          d="M90.232 288.027s4.855 2.308 8.313 1.155c3.188-1.063 5.12.755 8.002 1.331 2.881.577 7.769 1.243 13.207-1.424-.117-6.228-7.786-4.499-13.518-7.588-2.895-1.56-4.276-5.336-4.066-9.944H91.544s-1.573 11.89-1.312 16.47"
          fill="#CBD1D1"
        />
        <path
          d="M90.207 287.833s2.745 1.437 7.639.738c3.456-.494 3.223.66 7.418 1.282 4.195.621 13.092-.194 14.334-1.126.466 1.242-.388 2.33-.388 2.33s-1.709.682-5.438.932c-2.295.154-8.098.276-10.14-.621-2.02-1.554-4.894-1.515-6.06-.234-4.427 1.075-7.184-.31-7.184-.31l-.181-2.991z"
          fill="#2B0849"
        />
        <path d="M98.429 272.257h3.496s-.117 7.574 5.127 9.671c-5.244.7-9.672-2.602-8.623-9.671" fill="#A4AABA" />
        <path
          d="M44.425 272.046s-2.208 7.774-4.702 12.899c-1.884 3.874-4.428 7.854 5.729 7.854 6.97 0 9.385-.503 7.782-6.917-1.604-6.415.279-13.836.279-13.836h-9.088z"
          fill="#CBD1D1"
        />
        <path
          d="M38.066 290.277s2.198 1.225 6.954 1.225c6.376 0 8.646-1.73 8.646-1.73s.63 1.168-.649 2.27c-1.04.897-3.77 1.668-7.745 1.621-4.347-.05-6.115-.593-7.062-1.224-.864-.577-.72-1.657-.144-2.162"
          fill="#2B0849"
        />
        <path
          d="M45.344 274.041s.035 1.592-.329 3.07c-.365 1.49-1.13 3.255-1.184 4.34-.061 1.206 4.755 1.657 5.403.036.65-1.622 1.357-6.737 2.006-7.602.648-.865-5.14-2.222-5.896.156"
          fill="#A4AABA"
        />
        <path
          d="M89.476 277.57l13.899.095s1.349-56.643 1.925-66.909c.576-10.267 3.923-45.052 1.042-65.585l-13.037-.669-23.737.81s-.452 4.12-1.243 10.365c-.065.515-.708.874-.777 1.417-.078.608.439 1.407.332 2.044-2.455 14.627-5.797 32.736-8.256 46.837-.121.693-1.282 1.048-1.515 2.796-.042.314.22 1.584.116 1.865-7.14 19.473-12.202 52.601-15.66 67.19l15.176-.015s2.282-10.145 4.185-18.871c2.922-13.389 24.012-88.32 24.012-88.32l3.133-.954-.158 48.568s-.233 1.282.35 2.098c.583.815-.581 1.167-.408 2.331l.408 1.864s-.466 7.458-.932 12.352c-.467 4.895 1.145 40.69 1.145 40.69"
          fill="#7BB2F9"
        />
        <path
          d="M64.57 218.881c1.197.099 4.195-2.097 7.225-5.127M96.024 222.534s2.881-1.152 6.34-4.034"
          stroke="#648BD8"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96.973 219.373s2.882-1.153 6.34-4.034"
          stroke="#648BD8"
          strokeWidth="1.032"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.172 222.144s2.724-.614 6.759-3.496M74.903 146.166c-.281 3.226.31 8.856-4.506 9.478M93.182 144.344s.115 14.557-1.344 15.65c-2.305 1.73-3.107 2.02-3.107 2.02M89.197 144.923s.269 13.144-1.01 25.088M83.525 170.71s6.81-1.051 9.116-1.051M46.026 270.045l-.892 4.538M46.937 263.289l-.815 4.157M62.725 202.503c-.33 1.618-.102 1.904-.449 3.438 0 0-2.756 1.903-2.29 3.923.466 2.02-.31 3.424-4.505 17.252-1.762 5.807-4.233 18.922-6.165 28.278-.03.144-.521 2.646-1.14 5.8M64.158 194.136c-.295 1.658-.6 3.31-.917 4.938M71.33 146.787l-1.244 10.877s-1.14.155-.519 2.33c.117 1.399-2.778 16.39-5.382 31.615M44.242 273.727H58.07"
          stroke="#648BD8"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M106.18 142.117c-3.028-.489-18.825-2.744-36.219.2a.625.625 0 0 0-.518.644c.063 1.307.044 2.343.015 2.995a.617.617 0 0 0 .716.636c3.303-.534 17.037-2.412 35.664-.266.347.04.66-.214.692-.56.124-1.347.16-2.425.17-3.029a.616.616 0 0 0-.52-.62"
          fill="#192064"
        />
        <path
          d="M96.398 145.264l.003-5.102a.843.843 0 0 0-.809-.847 114.104 114.104 0 0 0-8.141-.014.85.85 0 0 0-.82.847l-.003 5.097c0 .476.388.857.864.845 2.478-.064 5.166-.067 8.03.017a.848.848 0 0 0 .876-.843"
          fill="#FFF"
        />
        <path
          d="M95.239 144.296l.002-3.195a.667.667 0 0 0-.643-.672c-1.9-.061-3.941-.073-6.094-.01a.675.675 0 0 0-.654.672l-.002 3.192c0 .376.305.677.68.669 1.859-.042 3.874-.043 6.02.012.376.01.69-.291.691-.668"
          fill="#192064"
        />
        <path
          d="M90.102 273.522h12.819M91.216 269.761c.006 3.519-.072 5.55 0 6.292M90.923 263.474c-.009 1.599-.016 2.558-.016 4.505M90.44 170.404l.932 46.38s.7 1.631-.233 2.796c-.932 1.166 2.564.7.932 2.33-1.63 1.633.933 1.166 0 3.497-.618 1.546-1.031 21.921-1.138 36.513"
          stroke="#648BD8"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M73.736 98.665l2.214 4.312s2.098.816 1.865 2.68l.816 2.214M64.297 116.611c.233-.932 2.176-7.147 12.585-10.488M77.598 90.042s7.691 6.137 16.547 2.72"
          stroke="#E4EBF7"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M91.974 86.954s5.476-.816 7.574-4.545c1.297-.345.72 2.212-.33 3.671-.7.971-1.01 1.554-1.01 1.554s.194.31.155.816c-.053.697-.175.653-.272 1.048-.081.335.108.657 0 1.049-.046.17-.198.5-.382.878-.12.249-.072.687-.2.948-.231.469-1.562 1.87-2.622 2.855-3.826 3.554-5.018 1.644-6.001-.408-.894-1.865-.661-5.127-.874-6.875-.35-2.914-2.622-3.03-1.923-4.429.343-.685 2.87.69 3.263 1.748.757 2.04 2.952 1.807 2.622 1.69"
          fill="#FFC6A0"
        />
        <path
          d="M99.8 82.429c-.465.077-.35.272-.97 1.243-.622.971-4.817 2.932-6.39 3.224-2.589.48-2.278-1.56-4.254-2.855-1.69-1.107-3.562-.638-1.398 1.398.99.932.932 1.107 1.398 3.205.335 1.506-.64 3.67.7 5.593"
          stroke="#DB836E"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M79.543 108.673c-2.1 2.926-4.266 6.175-5.557 8.762"
          stroke="#E59788"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.72 124.768s-2.098-1.942-5.127-2.719c-3.03-.777-3.574-.155-5.516.078-1.942.233-3.885-.932-3.652.7.233 1.63 5.05 1.01 5.206 2.097.155 1.087-6.37 2.796-8.313 2.175-.777.777.466 1.864 2.02 2.175.233 1.554 2.253 1.554 2.253 1.554s.699 1.01 2.641 1.088c2.486 1.32 8.934-.7 10.954-1.554 2.02-.855-.466-5.594-.466-5.594"
          fill="#FFC6A0"
        />
        <path
          d="M73.425 122.826s.66 1.127 3.167 1.418c2.315.27 2.563.583 2.563.583s-2.545 2.894-9.07 2.272M72.416 129.274s3.826.097 4.933-.718M74.98 130.75s1.961.136 3.36-.505M77.232 131.916s1.748.019 2.914-.505M73.328 122.321s-.595-1.032 1.262-.427c1.671.544 2.833.055 5.128.155 1.389.061 3.067-.297 3.982.15 1.606.784 3.632 2.181 3.632 2.181s10.526 1.204 19.033-1.127M78.864 108.104s-8.39 2.758-13.168 12.12"
          stroke="#E59788"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M109.278 112.533s3.38-3.613 7.575-4.662"
          stroke="#E4EBF7"
          strokeWidth="1.085"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M107.375 123.006s9.697-2.745 11.445-.88"
          stroke="#E59788"
          strokeWidth=".774"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M194.605 83.656l3.971-3.886M187.166 90.933l3.736-3.655M191.752 84.207l-4.462-4.56M198.453 91.057l-4.133-4.225M129.256 163.074l3.718-3.718M122.291 170.039l3.498-3.498M126.561 163.626l-4.27-4.27M132.975 170.039l-3.955-3.955"
          stroke="#BFCDDD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M190.156 211.779h-1.604a4.023 4.023 0 0 1-4.011-4.011V175.68a4.023 4.023 0 0 1 4.01-4.01h1.605a4.023 4.023 0 0 1 4.011 4.01v32.088a4.023 4.023 0 0 1-4.01 4.01"
          fill="#A3B4C6"
        />
        <path
          d="M237.824 212.977a4.813 4.813 0 0 1-4.813 4.813h-86.636a4.813 4.813 0 0 1 0-9.626h86.636a4.813 4.813 0 0 1 4.813 4.813"
          fill="#A3B4C6"
        />
        <mask fill="#fff" />
        <path fill="#A3B4C6" mask="url(#d)" d="M154.098 190.096h70.513v-84.617h-70.513z" />
        <path
          d="M224.928 190.096H153.78a3.219 3.219 0 0 1-3.208-3.209V167.92a3.219 3.219 0 0 1 3.208-3.21h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.219 3.219 0 0 1-3.21 3.209M224.928 130.832H153.78a3.218 3.218 0 0 1-3.208-3.208v-18.968a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.218 3.218 0 0 1-3.21 3.208"
          fill="#BFCDDD"
          mask="url(#d)"
        />
        <path
          d="M159.563 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 120.546h-22.461a.802.802 0 0 1-.802-.802v-3.208c0-.443.359-.803.802-.803h22.46c.444 0 .803.36.803.803v3.208c0 .443-.36.802-.802.802"
          fill="#FFF"
          mask="url(#d)"
        />
        <path
          d="M224.928 160.464H153.78a3.218 3.218 0 0 1-3.208-3.209v-18.967a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.209v18.967a3.218 3.218 0 0 1-3.21 3.209"
          fill="#BFCDDD"
          mask="url(#d)"
        />
        <path
          d="M173.455 130.832h49.301M164.984 130.832h6.089M155.952 130.832h6.75M173.837 160.613h49.3M165.365 160.613h6.089M155.57 160.613h6.751"
          stroke="#7C90A5"
          strokeWidth="1.124"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#d)"
        />
        <path
          d="M159.563 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M166.98 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M174.397 151.038a2.407 2.407 0 1 1 .001-4.814 2.407 2.407 0 0 1 0 4.814M222.539 151.038h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802M159.563 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 179.987h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802"
          fill="#FFF"
          mask="url(#d)"
        />
        <path
          d="M203.04 221.108h-27.372a2.413 2.413 0 0 1-2.406-2.407v-11.448a2.414 2.414 0 0 1 2.406-2.407h27.372a2.414 2.414 0 0 1 2.407 2.407V218.7a2.413 2.413 0 0 1-2.407 2.407"
          fill="#BFCDDD"
          mask="url(#d)"
        />
        <path
          d="M177.259 207.217v11.52M201.05 207.217v11.52"
          stroke="#A3B4C6"
          strokeWidth="1.124"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#d)"
        />
        <path
          d="M162.873 267.894a9.422 9.422 0 0 1-9.422-9.422v-14.82a9.423 9.423 0 0 1 18.845 0v14.82a9.423 9.423 0 0 1-9.423 9.422"
          fill="#5BA02E"
          mask="url(#d)"
        />
        <path
          d="M171.22 267.83a9.422 9.422 0 0 1-9.422-9.423v-3.438a9.423 9.423 0 0 1 18.845 0v3.438a9.423 9.423 0 0 1-9.422 9.423"
          fill="#92C110"
          mask="url(#d)"
        />
        <path
          d="M181.31 293.666h-27.712a3.209 3.209 0 0 1-3.209-3.21V269.79a3.209 3.209 0 0 1 3.209-3.21h27.711a3.209 3.209 0 0 1 3.209 3.21v20.668a3.209 3.209 0 0 1-3.209 3.209"
          fill="#F2D7AD"
          mask="url(#d)"
        />
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResultUnauthorizedComponent {
}
NzResultUnauthorizedComponent.ɵfac = function NzResultUnauthorizedComponent_Factory(t) { return new (t || NzResultUnauthorizedComponent)(); };
NzResultUnauthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzResultUnauthorizedComponent, selectors: [["nz-result-unauthorized"]], exportAs: ["nzResultUnauthorized"], decls: 56, vars: 0, consts: [["width", "251", "height", "294"], ["fill", "none", "fillRule", "evenodd"], ["d", "M0 129.023v-2.084C0 58.364 55.591 2.774 124.165 2.774h2.085c68.574 0 124.165 55.59 124.165 124.165v2.084c0 68.575-55.59 124.166-124.165 124.166h-2.085C55.591 253.189 0 197.598 0 129.023", "fill", "#E4EBF7"], ["d", "M41.417 132.92a8.231 8.231 0 1 1-16.38-1.65 8.231 8.231 0 0 1 16.38 1.65", "fill", "#FFF"], ["d", "M38.652 136.36l10.425 5.91M49.989 148.505l-12.58 10.73", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M41.536 161.28a5.636 5.636 0 1 1-11.216-1.13 5.636 5.636 0 0 1 11.216 1.13M59.154 145.261a5.677 5.677 0 1 1-11.297-1.138 5.677 5.677 0 0 1 11.297 1.138M100.36 29.516l29.66-.013a4.562 4.562 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 0 0 .005 9.126M111.705 47.754l29.659-.013a4.563 4.563 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 1 0 .005 9.126", "fill", "#FFF"], ["d", "M114.066 29.503V29.5l15.698-.007a4.563 4.563 0 1 0 .004 9.126l-15.698.007v-.002a4.562 4.562 0 0 0-.004-9.122M185.405 137.723c-.55 5.455-5.418 9.432-10.873 8.882-5.456-.55-9.432-5.418-8.882-10.873.55-5.455 5.418-9.432 10.873-8.882 5.455.55 9.432 5.418 8.882 10.873", "fill", "#FFF"], ["d", "M180.17 143.772l12.572 7.129M193.841 158.42L178.67 171.36", "stroke", "#FFF", "strokeWidth", "2"], ["d", "M185.55 171.926a6.798 6.798 0 1 1-13.528-1.363 6.798 6.798 0 0 1 13.527 1.363M204.12 155.285a6.848 6.848 0 1 1-13.627-1.375 6.848 6.848 0 0 1 13.626 1.375", "fill", "#FFF"], ["d", "M152.988 194.074a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0zM225.931 118.217a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM217.09 153.051a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.42 0zM177.84 109.842a2.21 2.21 0 1 1-4.422 0 2.21 2.21 0 0 1 4.421 0zM196.114 94.454a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM202.844 182.523a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0z", "stroke", "#FFF", "strokeWidth", "2"], ["stroke", "#FFF", "strokeWidth", "2", "d", "M215.125 155.262l-1.902 20.075-10.87 5.958M174.601 176.636l-6.322 9.761H156.98l-4.484 6.449M175.874 127.28V111.56M221.51 119.404l-12.77 7.859-15.228-7.86V96.668"], ["d", "M180.68 29.32C180.68 13.128 193.806 0 210 0c16.193 0 29.32 13.127 29.32 29.32 0 16.194-13.127 29.322-29.32 29.322-16.193 0-29.32-13.128-29.32-29.321", "fill", "#A26EF4"], ["d", "M221.45 41.706l-21.563-.125a1.744 1.744 0 0 1-1.734-1.754l.071-12.23a1.744 1.744 0 0 1 1.754-1.734l21.562.125c.964.006 1.74.791 1.735 1.755l-.071 12.229a1.744 1.744 0 0 1-1.754 1.734", "fill", "#FFF"], ["d", "M215.106 29.192c-.015 2.577-2.049 4.654-4.543 4.64-2.494-.014-4.504-2.115-4.489-4.693l.04-6.925c.016-2.577 2.05-4.654 4.543-4.64 2.494.015 4.504 2.116 4.49 4.693l-.04 6.925zm-4.53-14.074a6.877 6.877 0 0 0-6.916 6.837l-.043 7.368a6.877 6.877 0 0 0 13.754.08l.042-7.368a6.878 6.878 0 0 0-6.837-6.917zM167.566 68.367h-3.93a4.73 4.73 0 0 1-4.717-4.717 4.73 4.73 0 0 1 4.717-4.717h3.93a4.73 4.73 0 0 1 4.717 4.717 4.73 4.73 0 0 1-4.717 4.717", "fill", "#FFF"], ["d", "M168.214 248.838a6.611 6.611 0 0 1-6.61-6.611v-66.108a6.611 6.611 0 0 1 13.221 0v66.108a6.611 6.611 0 0 1-6.61 6.61", "fill", "#5BA02E"], ["d", "M176.147 248.176a6.611 6.611 0 0 1-6.61-6.61v-33.054a6.611 6.611 0 1 1 13.221 0v33.053a6.611 6.611 0 0 1-6.61 6.611", "fill", "#92C110"], ["d", "M185.994 293.89h-27.376a3.17 3.17 0 0 1-3.17-3.17v-45.887a3.17 3.17 0 0 1 3.17-3.17h27.376a3.17 3.17 0 0 1 3.17 3.17v45.886a3.17 3.17 0 0 1-3.17 3.17", "fill", "#F2D7AD"], ["d", "M81.972 147.673s6.377-.927 17.566-1.28c11.729-.371 17.57 1.086 17.57 1.086s3.697-3.855.968-8.424c1.278-12.077 5.982-32.827.335-48.273-1.116-1.339-3.743-1.512-7.536-.62-1.337.315-7.147-.149-7.983-.1l-15.311-.347s-3.487-.17-8.035-.508c-1.512-.113-4.227-1.683-5.458-.338-.406.443-2.425 5.669-1.97 16.077l8.635 35.642s-3.141 3.61 1.219 7.085", "fill", "#FFF"], ["d", "M75.768 73.325l-.9-6.397 11.982-6.52s7.302-.118 8.038 1.205c.737 1.324-5.616.993-5.616.993s-1.836 1.388-2.615 2.5c-1.654 2.363-.986 6.471-8.318 5.986-1.708.284-2.57 2.233-2.57 2.233", "fill", "#FFC6A0"], ["d", "M52.44 77.672s14.217 9.406 24.973 14.444c1.061.497-2.094 16.183-11.892 11.811-7.436-3.318-20.162-8.44-21.482-14.496-.71-3.258 2.543-7.643 8.401-11.76M141.862 80.113s-6.693 2.999-13.844 6.876c-3.894 2.11-10.137 4.704-12.33 7.988-6.224 9.314 3.536 11.22 12.947 7.503 6.71-2.651 28.999-12.127 13.227-22.367", "fill", "#FFB594"], ["d", "M76.166 66.36l3.06 3.881s-2.783 2.67-6.31 5.747c-7.103 6.195-12.803 14.296-15.995 16.44-3.966 2.662-9.754 3.314-12.177-.118-3.553-5.032.464-14.628 31.422-25.95", "fill", "#FFC6A0"], ["d", "M64.674 85.116s-2.34 8.413-8.912 14.447c.652.548 18.586 10.51 22.144 10.056 5.238-.669 6.417-18.968 1.145-20.531-.702-.208-5.901-1.286-8.853-2.167-.87-.26-1.611-1.71-3.545-.936l-1.98-.869zM128.362 85.826s5.318 1.956 7.325 13.734c-.546.274-17.55 12.35-21.829 7.805-6.534-6.94-.766-17.393 4.275-18.61 4.646-1.121 5.03-1.37 10.23-2.929", "fill", "#FFF"], ["d", "M78.18 94.656s.911 7.41-4.914 13.078", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M87.397 94.68s3.124 2.572 10.263 2.572c7.14 0 9.074-3.437 9.074-3.437", "stroke", "#E4EBF7", "strokeWidth", ".932", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M117.184 68.639l-6.781-6.177s-5.355-4.314-9.223-.893c-3.867 3.422 4.463 2.083 5.653 4.165 1.19 2.082.848 1.143-2.083.446-5.603-1.331-2.082.893 2.975 5.355 2.091 1.845 6.992.955 6.992.955l2.467-3.851z", "fill", "#FFC6A0"], ["d", "M105.282 91.315l-.297-10.937-15.918-.027-.53 10.45c-.026.403.17.788.515.999 2.049 1.251 9.387 5.093 15.799.424.287-.21.443-.554.431-.91", "fill", "#FFB594"], ["d", "M107.573 74.24c.817-1.147.982-9.118 1.015-11.928a1.046 1.046 0 0 0-.965-1.055l-4.62-.365c-7.71-1.044-17.071.624-18.253 6.346-5.482 5.813-.421 13.244-.421 13.244s1.963 3.566 4.305 6.791c.756 1.041.398-3.731 3.04-5.929 5.524-4.594 15.899-7.103 15.899-7.103", "fill", "#5C2552"], ["d", "M88.426 83.206s2.685 6.202 11.602 6.522c7.82.28 8.973-7.008 7.434-17.505l-.909-5.483c-6.118-2.897-15.478.54-15.478.54s-.576 2.044-.19 5.504c-2.276 2.066-1.824 5.618-1.824 5.618s-.905-1.922-1.98-2.321c-.86-.32-1.897.089-2.322 1.98-1.04 4.632 3.667 5.145 3.667 5.145", "fill", "#FFC6A0"], ["stroke", "#DB836E", "strokeWidth", "1.145", "strokeLinecap", "round", "strokeLinejoin", "round", "d", "M100.843 77.099l1.701-.928-1.015-4.324.674-1.406"], ["d", "M105.546 74.092c-.022.713-.452 1.279-.96 1.263-.51-.016-.904-.607-.882-1.32.021-.713.452-1.278.96-1.263.51.016.904.607.882 1.32M97.592 74.349c-.022.713-.452 1.278-.961 1.263-.509-.016-.904-.607-.882-1.32.022-.713.452-1.279.961-1.263.51.016.904.606.882 1.32", "fill", "#552950"], ["d", "M91.132 86.786s5.269 4.957 12.679 2.327", "stroke", "#DB836E", "strokeWidth", "1.145", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M99.776 81.903s-3.592.232-1.44-2.79c1.59-1.496 4.897-.46 4.897-.46s1.156 3.906-3.457 3.25", "fill", "#DB836E"], ["d", "M102.88 70.6s2.483.84 3.402.715M93.883 71.975s2.492-1.144 4.778-1.073", "stroke", "#5C2552", "strokeWidth", "1.526", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M86.32 77.374s.961.879 1.458 2.106c-.377.48-1.033 1.152-.236 1.809M99.337 83.719s1.911.151 2.509-.254", "stroke", "#DB836E", "strokeWidth", "1.145", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M87.782 115.821l15.73-3.012M100.165 115.821l10.04-2.008", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M66.508 86.763s-1.598 8.83-6.697 14.078", "stroke", "#E4EBF7", "strokeWidth", "1.114", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M128.31 87.934s3.013 4.121 4.06 11.785", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M64.09 84.816s-6.03 9.912-13.607 9.903", "stroke", "#DB836E", "strokeWidth", ".795", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M112.366 65.909l-.142 5.32s5.993 4.472 11.945 9.202c4.482 3.562 8.888 7.455 10.985 8.662 4.804 2.766 8.9 3.355 11.076 1.808 4.071-2.894 4.373-9.878-8.136-15.263-4.271-1.838-16.144-6.36-25.728-9.73", "fill", "#FFC6A0"], ["d", "M130.532 85.488s4.588 5.757 11.619 6.214", "stroke", "#DB836E", "strokeWidth", ".75", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M121.708 105.73s-.393 8.564-1.34 13.612", "stroke", "#E4EBF7", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M115.784 161.512s-3.57-1.488-2.678-7.14", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M101.52 290.246s4.326 2.057 7.408 1.03c2.842-.948 4.564.673 7.132 1.186 2.57.514 6.925 1.108 11.772-1.269-.104-5.551-6.939-4.01-12.048-6.763-2.582-1.39-3.812-4.757-3.625-8.863h-9.471s-1.402 10.596-1.169 14.68", "fill", "#CBD1D1"], ["d", "M101.496 290.073s2.447 1.281 6.809.658c3.081-.44 3.74.485 7.479 1.039 3.739.554 10.802-.07 11.91-.9.415 1.108-.347 2.077-.347 2.077s-1.523.608-4.847.831c-2.045.137-5.843.293-7.663-.507-1.8-1.385-5.286-1.917-5.77-.243-3.947.958-7.41-.288-7.41-.288l-.16-2.667z", "fill", "#2B0849"], ["d", "M108.824 276.19h3.116s-.103 6.751 4.57 8.62c-4.673.624-8.62-2.32-7.686-8.62", "fill", "#A4AABA"], ["d", "M57.65 272.52s-2.122 7.47-4.518 12.396c-1.811 3.724-4.255 7.548 5.505 7.548 6.698 0 9.02-.483 7.479-6.648-1.541-6.164.268-13.296.268-13.296H57.65z", "fill", "#CBD1D1"], ["d", "M51.54 290.04s2.111 1.178 6.682 1.178c6.128 0 8.31-1.662 8.31-1.662s.605 1.122-.624 2.18c-1 .862-3.624 1.603-7.444 1.559-4.177-.049-5.876-.57-6.786-1.177-.831-.554-.692-1.593-.138-2.078", "fill", "#2B0849"], ["d", "M58.533 274.438s.034 1.529-.315 2.95c-.352 1.431-1.087 3.127-1.139 4.17-.058 1.16 4.57 1.592 5.194.035.623-1.559 1.303-6.475 1.927-7.306.622-.831-4.94-2.135-5.667.15", "fill", "#A4AABA"], ["d", "M100.885 277.015l13.306.092s1.291-54.228 1.843-64.056c.552-9.828 3.756-43.13.997-62.788l-12.48-.64-22.725.776s-.433 3.944-1.19 9.921c-.062.493-.677.838-.744 1.358-.075.582.42 1.347.318 1.956-2.35 14.003-6.343 32.926-8.697 46.425-.116.663-1.227 1.004-1.45 2.677-.04.3.21 1.516.112 1.785-6.836 18.643-10.89 47.584-14.2 61.551l14.528-.014s2.185-8.524 4.008-16.878c2.796-12.817 22.987-84.553 22.987-84.553l3-.517 1.037 46.1s-.223 1.228.334 2.008c.558.782-.556 1.117-.39 2.233l.39 1.784s-.446 7.14-.892 11.826c-.446 4.685-.092 38.954-.092 38.954", "fill", "#7BB2F9"], ["d", "M77.438 220.434c1.146.094 4.016-2.008 6.916-4.91M107.55 223.931s2.758-1.103 6.069-3.862", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M108.459 220.905s2.759-1.104 6.07-3.863", "stroke", "#648BD8", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M76.099 223.557s2.608-.587 6.47-3.346M87.33 150.82c-.27 3.088.297 8.478-4.315 9.073M104.829 149.075s.11 13.936-1.286 14.983c-2.207 1.655-2.975 1.934-2.975 1.934M101.014 149.63s.035 12.81-1.19 24.245M94.93 174.965s7.174-1.655 9.38-1.655M75.671 204.754c-.316 1.55-.64 3.067-.973 4.535 0 0-1.45 1.822-1.003 3.756.446 1.934-.943 2.034-4.96 15.273-1.686 5.559-4.464 18.49-6.313 27.447-.078.38-4.018 18.06-4.093 18.423M77.043 196.743a313.269 313.269 0 0 1-.877 4.729M83.908 151.414l-1.19 10.413s-1.091.148-.496 2.23c.111 1.34-2.66 15.692-5.153 30.267M57.58 272.94h13.238", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"], ["d", "M117.377 147.423s-16.955-3.087-35.7.199c.157 2.501-.002 4.128-.002 4.128s14.607-2.802 35.476-.31c.251-2.342.226-4.017.226-4.017", "fill", "#192064"], ["d", "M107.511 150.353l.004-4.885a.807.807 0 0 0-.774-.81c-2.428-.092-5.04-.108-7.795-.014a.814.814 0 0 0-.784.81l-.003 4.88c0 .456.371.82.827.808a140.76 140.76 0 0 1 7.688.017.81.81 0 0 0 .837-.806", "fill", "#FFF"], ["d", "M106.402 149.426l.002-3.06a.64.64 0 0 0-.616-.643 94.135 94.135 0 0 0-5.834-.009.647.647 0 0 0-.626.643l-.001 3.056c0 .36.291.648.651.64 1.78-.04 3.708-.041 5.762.012.36.009.662-.279.662-.64", "fill", "#192064"], ["d", "M101.485 273.933h12.272M102.652 269.075c.006 3.368.04 5.759.11 6.47M102.667 263.125c-.009 1.53-.015 2.98-.016 4.313M102.204 174.024l.893 44.402s.669 1.561-.224 2.677c-.892 1.116 2.455.67.893 2.231-1.562 1.562.893 1.116 0 3.347-.592 1.48-.988 20.987-1.09 34.956", "stroke", "#648BD8", "strokeWidth", "1.051", "strokeLinecap", "round", "strokeLinejoin", "round"]], template: function NzResultUnauthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultUnauthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'nz-result-unauthorized',
                exportAs: 'nzResultUnauthorized',
                template: `
    <svg width="251" height="294">
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 129.023v-2.084C0 58.364 55.591 2.774 124.165 2.774h2.085c68.574 0 124.165 55.59 124.165 124.165v2.084c0 68.575-55.59 124.166-124.165 124.166h-2.085C55.591 253.189 0 197.598 0 129.023"
          fill="#E4EBF7"
        />
        <path d="M41.417 132.92a8.231 8.231 0 1 1-16.38-1.65 8.231 8.231 0 0 1 16.38 1.65" fill="#FFF" />
        <path d="M38.652 136.36l10.425 5.91M49.989 148.505l-12.58 10.73" stroke="#FFF" strokeWidth="2" />
        <path
          d="M41.536 161.28a5.636 5.636 0 1 1-11.216-1.13 5.636 5.636 0 0 1 11.216 1.13M59.154 145.261a5.677 5.677 0 1 1-11.297-1.138 5.677 5.677 0 0 1 11.297 1.138M100.36 29.516l29.66-.013a4.562 4.562 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 0 0 .005 9.126M111.705 47.754l29.659-.013a4.563 4.563 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 1 0 .005 9.126"
          fill="#FFF"
        />
        <path
          d="M114.066 29.503V29.5l15.698-.007a4.563 4.563 0 1 0 .004 9.126l-15.698.007v-.002a4.562 4.562 0 0 0-.004-9.122M185.405 137.723c-.55 5.455-5.418 9.432-10.873 8.882-5.456-.55-9.432-5.418-8.882-10.873.55-5.455 5.418-9.432 10.873-8.882 5.455.55 9.432 5.418 8.882 10.873"
          fill="#FFF"
        />
        <path d="M180.17 143.772l12.572 7.129M193.841 158.42L178.67 171.36" stroke="#FFF" strokeWidth="2" />
        <path
          d="M185.55 171.926a6.798 6.798 0 1 1-13.528-1.363 6.798 6.798 0 0 1 13.527 1.363M204.12 155.285a6.848 6.848 0 1 1-13.627-1.375 6.848 6.848 0 0 1 13.626 1.375"
          fill="#FFF"
        />
        <path
          d="M152.988 194.074a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0zM225.931 118.217a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM217.09 153.051a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.42 0zM177.84 109.842a2.21 2.21 0 1 1-4.422 0 2.21 2.21 0 0 1 4.421 0zM196.114 94.454a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM202.844 182.523a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0z"
          stroke="#FFF"
          strokeWidth="2"
        />
        <path
          stroke="#FFF"
          strokeWidth="2"
          d="M215.125 155.262l-1.902 20.075-10.87 5.958M174.601 176.636l-6.322 9.761H156.98l-4.484 6.449M175.874 127.28V111.56M221.51 119.404l-12.77 7.859-15.228-7.86V96.668"
        />
        <path
          d="M180.68 29.32C180.68 13.128 193.806 0 210 0c16.193 0 29.32 13.127 29.32 29.32 0 16.194-13.127 29.322-29.32 29.322-16.193 0-29.32-13.128-29.32-29.321"
          fill="#A26EF4"
        />
        <path
          d="M221.45 41.706l-21.563-.125a1.744 1.744 0 0 1-1.734-1.754l.071-12.23a1.744 1.744 0 0 1 1.754-1.734l21.562.125c.964.006 1.74.791 1.735 1.755l-.071 12.229a1.744 1.744 0 0 1-1.754 1.734"
          fill="#FFF"
        />
        <path
          d="M215.106 29.192c-.015 2.577-2.049 4.654-4.543 4.64-2.494-.014-4.504-2.115-4.489-4.693l.04-6.925c.016-2.577 2.05-4.654 4.543-4.64 2.494.015 4.504 2.116 4.49 4.693l-.04 6.925zm-4.53-14.074a6.877 6.877 0 0 0-6.916 6.837l-.043 7.368a6.877 6.877 0 0 0 13.754.08l.042-7.368a6.878 6.878 0 0 0-6.837-6.917zM167.566 68.367h-3.93a4.73 4.73 0 0 1-4.717-4.717 4.73 4.73 0 0 1 4.717-4.717h3.93a4.73 4.73 0 0 1 4.717 4.717 4.73 4.73 0 0 1-4.717 4.717"
          fill="#FFF"
        />
        <path
          d="M168.214 248.838a6.611 6.611 0 0 1-6.61-6.611v-66.108a6.611 6.611 0 0 1 13.221 0v66.108a6.611 6.611 0 0 1-6.61 6.61"
          fill="#5BA02E"
        />
        <path
          d="M176.147 248.176a6.611 6.611 0 0 1-6.61-6.61v-33.054a6.611 6.611 0 1 1 13.221 0v33.053a6.611 6.611 0 0 1-6.61 6.611"
          fill="#92C110"
        />
        <path
          d="M185.994 293.89h-27.376a3.17 3.17 0 0 1-3.17-3.17v-45.887a3.17 3.17 0 0 1 3.17-3.17h27.376a3.17 3.17 0 0 1 3.17 3.17v45.886a3.17 3.17 0 0 1-3.17 3.17"
          fill="#F2D7AD"
        />
        <path
          d="M81.972 147.673s6.377-.927 17.566-1.28c11.729-.371 17.57 1.086 17.57 1.086s3.697-3.855.968-8.424c1.278-12.077 5.982-32.827.335-48.273-1.116-1.339-3.743-1.512-7.536-.62-1.337.315-7.147-.149-7.983-.1l-15.311-.347s-3.487-.17-8.035-.508c-1.512-.113-4.227-1.683-5.458-.338-.406.443-2.425 5.669-1.97 16.077l8.635 35.642s-3.141 3.61 1.219 7.085"
          fill="#FFF"
        />
        <path
          d="M75.768 73.325l-.9-6.397 11.982-6.52s7.302-.118 8.038 1.205c.737 1.324-5.616.993-5.616.993s-1.836 1.388-2.615 2.5c-1.654 2.363-.986 6.471-8.318 5.986-1.708.284-2.57 2.233-2.57 2.233"
          fill="#FFC6A0"
        />
        <path
          d="M52.44 77.672s14.217 9.406 24.973 14.444c1.061.497-2.094 16.183-11.892 11.811-7.436-3.318-20.162-8.44-21.482-14.496-.71-3.258 2.543-7.643 8.401-11.76M141.862 80.113s-6.693 2.999-13.844 6.876c-3.894 2.11-10.137 4.704-12.33 7.988-6.224 9.314 3.536 11.22 12.947 7.503 6.71-2.651 28.999-12.127 13.227-22.367"
          fill="#FFB594"
        />
        <path
          d="M76.166 66.36l3.06 3.881s-2.783 2.67-6.31 5.747c-7.103 6.195-12.803 14.296-15.995 16.44-3.966 2.662-9.754 3.314-12.177-.118-3.553-5.032.464-14.628 31.422-25.95"
          fill="#FFC6A0"
        />
        <path
          d="M64.674 85.116s-2.34 8.413-8.912 14.447c.652.548 18.586 10.51 22.144 10.056 5.238-.669 6.417-18.968 1.145-20.531-.702-.208-5.901-1.286-8.853-2.167-.87-.26-1.611-1.71-3.545-.936l-1.98-.869zM128.362 85.826s5.318 1.956 7.325 13.734c-.546.274-17.55 12.35-21.829 7.805-6.534-6.94-.766-17.393 4.275-18.61 4.646-1.121 5.03-1.37 10.23-2.929"
          fill="#FFF"
        />
        <path d="M78.18 94.656s.911 7.41-4.914 13.078" stroke="#E4EBF7" strokeWidth="1.051" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M87.397 94.68s3.124 2.572 10.263 2.572c7.14 0 9.074-3.437 9.074-3.437"
          stroke="#E4EBF7"
          strokeWidth=".932"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M117.184 68.639l-6.781-6.177s-5.355-4.314-9.223-.893c-3.867 3.422 4.463 2.083 5.653 4.165 1.19 2.082.848 1.143-2.083.446-5.603-1.331-2.082.893 2.975 5.355 2.091 1.845 6.992.955 6.992.955l2.467-3.851z"
          fill="#FFC6A0"
        />
        <path
          d="M105.282 91.315l-.297-10.937-15.918-.027-.53 10.45c-.026.403.17.788.515.999 2.049 1.251 9.387 5.093 15.799.424.287-.21.443-.554.431-.91"
          fill="#FFB594"
        />
        <path
          d="M107.573 74.24c.817-1.147.982-9.118 1.015-11.928a1.046 1.046 0 0 0-.965-1.055l-4.62-.365c-7.71-1.044-17.071.624-18.253 6.346-5.482 5.813-.421 13.244-.421 13.244s1.963 3.566 4.305 6.791c.756 1.041.398-3.731 3.04-5.929 5.524-4.594 15.899-7.103 15.899-7.103"
          fill="#5C2552"
        />
        <path
          d="M88.426 83.206s2.685 6.202 11.602 6.522c7.82.28 8.973-7.008 7.434-17.505l-.909-5.483c-6.118-2.897-15.478.54-15.478.54s-.576 2.044-.19 5.504c-2.276 2.066-1.824 5.618-1.824 5.618s-.905-1.922-1.98-2.321c-.86-.32-1.897.089-2.322 1.98-1.04 4.632 3.667 5.145 3.667 5.145"
          fill="#FFC6A0"
        />
        <path
          stroke="#DB836E"
          strokeWidth="1.145"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M100.843 77.099l1.701-.928-1.015-4.324.674-1.406"
        />
        <path
          d="M105.546 74.092c-.022.713-.452 1.279-.96 1.263-.51-.016-.904-.607-.882-1.32.021-.713.452-1.278.96-1.263.51.016.904.607.882 1.32M97.592 74.349c-.022.713-.452 1.278-.961 1.263-.509-.016-.904-.607-.882-1.32.022-.713.452-1.279.961-1.263.51.016.904.606.882 1.32"
          fill="#552950"
        />
        <path
          d="M91.132 86.786s5.269 4.957 12.679 2.327"
          stroke="#DB836E"
          strokeWidth="1.145"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M99.776 81.903s-3.592.232-1.44-2.79c1.59-1.496 4.897-.46 4.897-.46s1.156 3.906-3.457 3.25" fill="#DB836E" />
        <path
          d="M102.88 70.6s2.483.84 3.402.715M93.883 71.975s2.492-1.144 4.778-1.073"
          stroke="#5C2552"
          strokeWidth="1.526"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86.32 77.374s.961.879 1.458 2.106c-.377.48-1.033 1.152-.236 1.809M99.337 83.719s1.911.151 2.509-.254"
          stroke="#DB836E"
          strokeWidth="1.145"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.782 115.821l15.73-3.012M100.165 115.821l10.04-2.008"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M66.508 86.763s-1.598 8.83-6.697 14.078"
          stroke="#E4EBF7"
          strokeWidth="1.114"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M128.31 87.934s3.013 4.121 4.06 11.785"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M64.09 84.816s-6.03 9.912-13.607 9.903" stroke="#DB836E" strokeWidth=".795" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M112.366 65.909l-.142 5.32s5.993 4.472 11.945 9.202c4.482 3.562 8.888 7.455 10.985 8.662 4.804 2.766 8.9 3.355 11.076 1.808 4.071-2.894 4.373-9.878-8.136-15.263-4.271-1.838-16.144-6.36-25.728-9.73"
          fill="#FFC6A0"
        />
        <path
          d="M130.532 85.488s4.588 5.757 11.619 6.214"
          stroke="#DB836E"
          strokeWidth=".75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M121.708 105.73s-.393 8.564-1.34 13.612"
          stroke="#E4EBF7"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M115.784 161.512s-3.57-1.488-2.678-7.14"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M101.52 290.246s4.326 2.057 7.408 1.03c2.842-.948 4.564.673 7.132 1.186 2.57.514 6.925 1.108 11.772-1.269-.104-5.551-6.939-4.01-12.048-6.763-2.582-1.39-3.812-4.757-3.625-8.863h-9.471s-1.402 10.596-1.169 14.68"
          fill="#CBD1D1"
        />
        <path
          d="M101.496 290.073s2.447 1.281 6.809.658c3.081-.44 3.74.485 7.479 1.039 3.739.554 10.802-.07 11.91-.9.415 1.108-.347 2.077-.347 2.077s-1.523.608-4.847.831c-2.045.137-5.843.293-7.663-.507-1.8-1.385-5.286-1.917-5.77-.243-3.947.958-7.41-.288-7.41-.288l-.16-2.667z"
          fill="#2B0849"
        />
        <path d="M108.824 276.19h3.116s-.103 6.751 4.57 8.62c-4.673.624-8.62-2.32-7.686-8.62" fill="#A4AABA" />
        <path
          d="M57.65 272.52s-2.122 7.47-4.518 12.396c-1.811 3.724-4.255 7.548 5.505 7.548 6.698 0 9.02-.483 7.479-6.648-1.541-6.164.268-13.296.268-13.296H57.65z"
          fill="#CBD1D1"
        />
        <path
          d="M51.54 290.04s2.111 1.178 6.682 1.178c6.128 0 8.31-1.662 8.31-1.662s.605 1.122-.624 2.18c-1 .862-3.624 1.603-7.444 1.559-4.177-.049-5.876-.57-6.786-1.177-.831-.554-.692-1.593-.138-2.078"
          fill="#2B0849"
        />
        <path
          d="M58.533 274.438s.034 1.529-.315 2.95c-.352 1.431-1.087 3.127-1.139 4.17-.058 1.16 4.57 1.592 5.194.035.623-1.559 1.303-6.475 1.927-7.306.622-.831-4.94-2.135-5.667.15"
          fill="#A4AABA"
        />
        <path
          d="M100.885 277.015l13.306.092s1.291-54.228 1.843-64.056c.552-9.828 3.756-43.13.997-62.788l-12.48-.64-22.725.776s-.433 3.944-1.19 9.921c-.062.493-.677.838-.744 1.358-.075.582.42 1.347.318 1.956-2.35 14.003-6.343 32.926-8.697 46.425-.116.663-1.227 1.004-1.45 2.677-.04.3.21 1.516.112 1.785-6.836 18.643-10.89 47.584-14.2 61.551l14.528-.014s2.185-8.524 4.008-16.878c2.796-12.817 22.987-84.553 22.987-84.553l3-.517 1.037 46.1s-.223 1.228.334 2.008c.558.782-.556 1.117-.39 2.233l.39 1.784s-.446 7.14-.892 11.826c-.446 4.685-.092 38.954-.092 38.954"
          fill="#7BB2F9"
        />
        <path
          d="M77.438 220.434c1.146.094 4.016-2.008 6.916-4.91M107.55 223.931s2.758-1.103 6.069-3.862"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M108.459 220.905s2.759-1.104 6.07-3.863" stroke="#648BD8" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M76.099 223.557s2.608-.587 6.47-3.346M87.33 150.82c-.27 3.088.297 8.478-4.315 9.073M104.829 149.075s.11 13.936-1.286 14.983c-2.207 1.655-2.975 1.934-2.975 1.934M101.014 149.63s.035 12.81-1.19 24.245M94.93 174.965s7.174-1.655 9.38-1.655M75.671 204.754c-.316 1.55-.64 3.067-.973 4.535 0 0-1.45 1.822-1.003 3.756.446 1.934-.943 2.034-4.96 15.273-1.686 5.559-4.464 18.49-6.313 27.447-.078.38-4.018 18.06-4.093 18.423M77.043 196.743a313.269 313.269 0 0 1-.877 4.729M83.908 151.414l-1.19 10.413s-1.091.148-.496 2.23c.111 1.34-2.66 15.692-5.153 30.267M57.58 272.94h13.238"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M117.377 147.423s-16.955-3.087-35.7.199c.157 2.501-.002 4.128-.002 4.128s14.607-2.802 35.476-.31c.251-2.342.226-4.017.226-4.017"
          fill="#192064"
        />
        <path
          d="M107.511 150.353l.004-4.885a.807.807 0 0 0-.774-.81c-2.428-.092-5.04-.108-7.795-.014a.814.814 0 0 0-.784.81l-.003 4.88c0 .456.371.82.827.808a140.76 140.76 0 0 1 7.688.017.81.81 0 0 0 .837-.806"
          fill="#FFF"
        />
        <path
          d="M106.402 149.426l.002-3.06a.64.64 0 0 0-.616-.643 94.135 94.135 0 0 0-5.834-.009.647.647 0 0 0-.626.643l-.001 3.056c0 .36.291.648.651.64 1.78-.04 3.708-.041 5.762.012.36.009.662-.279.662-.64"
          fill="#192064"
        />
        <path
          d="M101.485 273.933h12.272M102.652 269.075c.006 3.368.04 5.759.11 6.47M102.667 263.125c-.009 1.53-.015 2.98-.016 4.313M102.204 174.024l.893 44.402s.669 1.561-.224 2.677c-.892 1.116 2.455.67.893 2.231-1.562 1.562.893 1.116 0 3.347-.592 1.48-.988 20.987-1.09 34.956"
          stroke="#648BD8"
          strokeWidth="1.051"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
const cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
class NzResultModule {
}
NzResultModule.ɵfac = function NzResultModule_Factory(t) { return new (t || NzResultModule)(); };
NzResultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzResultModule });
NzResultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzResultModule, { declarations: function () { return [NzResultComponent, NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective, NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]; }, exports: function () { return [NzResultComponent, NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzResultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]],
                declarations: [NzResultComponent, ...cellDirectives, ...partial],
                exports: [NzResultComponent, ...cellDirectives]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-result.js.map

/***/ }),

/***/ "PMyv":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js ***!
  \***********************************************************************/
/*! exports provided: TextMessageFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageFormat", function() { return TextMessageFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */ (function () {
    function TextMessageFormat() {
    }
    TextMessageFormat.write = function (output) {
        return "" + output + TextMessageFormat.RecordSeparator;
    };
    TextMessageFormat.parse = function (input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        var messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    };
    TextMessageFormat.RecordSeparatorCode = 0x1e;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
    return TextMessageFormat;
}());

//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),

/***/ "Rlqr":
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpClient.js ***!
  \****************************************************************/
/*! exports provided: HttpResponse, HttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Represents an HTTP response. */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
    return HttpResponse;
}());

/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, options) {
        return this.send(__assign({}, options, { method: "GET", url: url }));
    };
    HttpClient.prototype.post = function (url, options) {
        return this.send(__assign({}, options, { method: "POST", url: url }));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.send(__assign({}, options, { method: "DELETE", url: url }));
    };
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    HttpClient.prototype.getCookieString = function (url) {
        return "";
    };
    return HttpClient;
}());

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "Ysxs":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js ***!
  \***********************************************************************/
/*! exports provided: DefaultHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return DefaultHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "9BRb");
/* harmony import */ var _FetchHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchHttpClient */ "1/4N");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpClient */ "Rlqr");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "ftFU");
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XhrHttpClient */ "Id6e");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/** Default implementation of {@link @microsoft/signalr.HttpClient}. */
var DefaultHttpClient = /** @class */ (function (_super) {
    __extends(DefaultHttpClient, _super);
    /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
    function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof fetch !== "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_3__["Platform"].isNode) {
            _this.httpClient = new _FetchHttpClient__WEBPACK_IMPORTED_MODULE_1__["FetchHttpClient"](logger);
        }
        else if (typeof XMLHttpRequest !== "undefined") {
            _this.httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_4__["XhrHttpClient"](logger);
        }
        else {
            throw new Error("No usable HttpClient found.");
        }
        return _this;
    }
    /** @inheritDoc */
    DefaultHttpClient.prototype.send = function (request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this.httpClient.send(request);
    };
    DefaultHttpClient.prototype.getCookieString = function (url) {
        return this.httpClient.getCookieString(url);
    };
    return DefaultHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));

//# sourceMappingURL=DefaultHttpClient.js.map

/***/ }),

/***/ "Z3rW":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js ***!
  \***********************************************************************/
/*! exports provided: HandshakeProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandshakeProtocol", function() { return HandshakeProtocol; });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ "PMyv");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.


/** @private */
var HandshakeProtocol = /** @class */ (function () {
    function HandshakeProtocol() {
    }
    // Handshake request is always JSON
    HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest));
    };
    HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
        var responseMessage;
        var messageData;
        var remainingData;
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(data) || (typeof Buffer !== "undefined" && data instanceof Buffer)) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            var textData = data;
            var separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);
        var response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    };
    return HandshakeProtocol;
}());

//# sourceMappingURL=HandshakeProtocol.js.map

/***/ }),

/***/ "ftFU":
/*!***********************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Utils.js ***!
  \***********************************************************/
/*! exports provided: VERSION, Arg, Platform, getDataDetail, formatArrayBuffer, isArrayBuffer, sendMessage, createLogger, SubjectSubscription, ConsoleLogger, getUserAgentHeader, constructUserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arg", function() { return Arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataDetail", function() { return getDataDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatArrayBuffer", function() { return formatArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgentHeader", function() { return getUserAgentHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructUserAgent", function() { return constructUserAgent; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "v3Fn");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
var VERSION = "5.0.4";
/** @private */
var Arg = /** @class */ (function () {
    function Arg() {
    }
    Arg.isRequired = function (val, name) {
        if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
        }
    };
    Arg.isNotEmpty = function (val, name) {
        if (!val || val.match(/^\s*$/)) {
            throw new Error("The '" + name + "' argument should not be empty.");
        }
    };
    Arg.isIn = function (val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
        }
    };
    return Arg;
}());

/** @private */
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Object.defineProperty(Platform, "isBrowser", {
        get: function () {
            return typeof window === "object";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platform, "isWebWorker", {
        get: function () {
            return typeof self === "object" && "importScripts" in self;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platform, "isNode", {
        get: function () {
            return !this.isBrowser && !this.isWebWorker;
        },
        enumerable: true,
        configurable: true
    });
    return Platform;
}());

/** @private */
function getDataDetail(data, includeContent) {
    var detail = "";
    if (isArrayBuffer(data)) {
        detail = "Binary data of length " + data.byteLength;
        if (includeContent) {
            detail += ". Content: '" + formatArrayBuffer(data) + "'";
        }
    }
    else if (typeof data === "string") {
        detail = "String data of length " + data.length;
        if (includeContent) {
            detail += ". Content: '" + data + "'";
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    var view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    var str = "";
    view.forEach(function (num) {
        var pad = num < 16 ? "0" : "";
        str += "0x" + pad + num.toString(16) + " ";
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent, withCredentials, defaultHeaders) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, headers, token, _b, name, value, responseType, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    headers = {};
                    if (!accessTokenFactory) return [3 /*break*/, 2];
                    return [4 /*yield*/, accessTokenFactory()];
                case 1:
                    token = _c.sent();
                    if (token) {
                        headers = (_a = {},
                            _a["Authorization"] = "Bearer " + token,
                            _a);
                    }
                    _c.label = 2;
                case 2:
                    _b = getUserAgentHeader(), name = _b[0], value = _b[1];
                    headers[name] = value;
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                    responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                    return [4 /*yield*/, httpClient.post(url, {
                            content: content,
                            headers: __assign({}, headers, defaultHeaders),
                            responseType: responseType,
                            withCredentials: withCredentials,
                        })];
                case 3:
                    response = _c.sent();
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                    return [2 /*return*/];
            }
        });
    });
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance;
    }
    if (logger.log) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
var SubjectSubscription = /** @class */ (function () {
    function SubjectSubscription(subject, observer) {
        this.subject = subject;
        this.observer = observer;
    }
    SubjectSubscription.prototype.dispose = function () {
        var index = this.subject.observers.indexOf(this.observer);
        if (index > -1) {
            this.subject.observers.splice(index, 1);
        }
        if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
            this.subject.cancelCallback().catch(function (_) { });
        }
    };
    return SubjectSubscription;
}());

/** @private */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel;
        this.outputConsole = console;
    }
    ConsoleLogger.prototype.log = function (logLevel, message) {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:
                    this.outputConsole.error("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:
                    this.outputConsole.warn("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:
                    this.outputConsole.info("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    this.outputConsole.log("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
            }
        }
    };
    return ConsoleLogger;
}());

/** @private */
function getUserAgentHeader() {
    var userAgentHeaderName = "X-SignalR-User-Agent";
    if (Platform.isNode) {
        userAgentHeaderName = "User-Agent";
    }
    return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
/** @private */
function constructUserAgent(version, os, runtime, runtimeVersion) {
    // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
    var userAgent = "Microsoft SignalR/";
    var majorAndMinor = version.split(".");
    userAgent += majorAndMinor[0] + "." + majorAndMinor[1];
    userAgent += " (" + version + "; ";
    if (os && os !== "") {
        userAgent += os + "; ";
    }
    else {
        userAgent += "Unknown OS; ";
    }
    userAgent += "" + runtime;
    if (runtimeVersion) {
        userAgent += "; " + runtimeVersion;
    }
    else {
        userAgent += "; Unknown Runtime Version";
    }
    userAgent += ")";
    return userAgent;
}
function getOsName() {
    if (Platform.isNode) {
        switch (process.platform) {
            case "win32":
                return "Windows NT";
            case "darwin":
                return "macOS";
            case "linux":
                return "Linux";
            default:
                return process.platform;
        }
    }
    else {
        return "";
    }
}
function getRuntimeVersion() {
    if (Platform.isNode) {
        return process.versions.node;
    }
    return undefined;
}
function getRuntime() {
    if (Platform.isNode) {
        return "NodeJS";
    }
    else {
        return "Browser";
    }
}
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "k+Ty":
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \****************************************************************************/
/*! exports provided: DefaultReconnectPolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultReconnectPolicy", function() { return DefaultReconnectPolicy; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// 0, 2, 10, 30 second delays before reconnect attempts.
var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
var DefaultReconnectPolicy = /** @class */ (function () {
    function DefaultReconnectPolicy(retryDelays) {
        this.retryDelays = retryDelays !== undefined ? retryDelays.concat([null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
    }
    DefaultReconnectPolicy.prototype.nextRetryDelayInMilliseconds = function (retryContext) {
        return this.retryDelays[retryContext.previousRetryCount];
    };
    return DefaultReconnectPolicy;
}());

//# sourceMappingURL=DefaultReconnectPolicy.js.map

/***/ }),

/***/ "mLhb":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnection.js ***!
  \*******************************************************************/
/*! exports provided: HubConnectionState, HubConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return HubConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return HubConnection; });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandshakeProtocol */ "Z3rW");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IHubProtocol */ "++1n");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subject */ "z2YZ");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState["Disconnected"] = "Disconnected";
    /** The hub connection is connecting. */
    HubConnectionState["Connecting"] = "Connecting";
    /** The hub connection is connected. */
    HubConnectionState["Connected"] = "Connected";
    /** The hub connection is disconnecting. */
    HubConnectionState["Disconnecting"] = "Disconnecting";
    /** The hub connection is reconnecting. */
    HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */ (function () {
    function HubConnection(connection, logger, protocol, reconnectPolicy) {
        var _this = this;
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this.logger = logger;
        this.protocol = protocol;
        this.connection = connection;
        this.reconnectPolicy = reconnectPolicy;
        this.handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"]();
        this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
        this.connection.onclose = function (error) { return _this.connectionClosed(error); };
        this.callbacks = {};
        this.methods = {};
        this.closedCallbacks = [];
        this.reconnectingCallbacks = [];
        this.reconnectedCallbacks = [];
        this.invocationId = 0;
        this.receivedHandshakeResponse = false;
        this.connectionState = HubConnectionState.Disconnected;
        this.connectionStarted = false;
        this.cachedPingMessage = this.protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping });
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    HubConnection.create = function (connection, logger, protocol, reconnectPolicy) {
        return new HubConnection(connection, logger, protocol, reconnectPolicy);
    };
    Object.defineProperty(HubConnection.prototype, "state", {
        /** Indicates the state of the {@link HubConnection} to the server. */
        get: function () {
            return this.connectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubConnection.prototype, "connectionId", {
        /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
         *  in the disconnected state or if the negotiation step was skipped.
         */
        get: function () {
            return this.connection ? (this.connection.connectionId || null) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubConnection.prototype, "baseUrl", {
        /** Indicates the url of the {@link HubConnection} to the server. */
        get: function () {
            return this.connection.baseUrl || "";
        },
        /**
         * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
         * Reconnecting states.
         * @param {string} url The url to connect to.
         */
        set: function (url) {
            if (this.connectionState !== HubConnectionState.Disconnected && this.connectionState !== HubConnectionState.Reconnecting) {
                throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
            }
            if (!url) {
                throw new Error("The HubConnection url must be a valid url.");
            }
            this.connection.baseUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    HubConnection.prototype.start = function () {
        this.startPromise = this.startWithStateTransitions();
        return this.startPromise;
    };
    HubConnection.prototype.startWithStateTransitions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState !== HubConnectionState.Disconnected) {
                            return [2 /*return*/, Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];
                        }
                        this.connectionState = HubConnectionState.Connecting;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Starting HubConnection.");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startInternal()];
                    case 2:
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        this.connectionStarted = true;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection connected successfully.");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.connectionState = HubConnectionState.Disconnected;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection failed to start successfully because of error '" + e_1 + "'.");
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.startInternal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handshakePromise, handshakeRequest, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stopDuringStartError = undefined;
                        this.receivedHandshakeResponse = false;
                        handshakePromise = new Promise(function (resolve, reject) {
                            _this.handshakeResolver = resolve;
                            _this.handshakeRejecter = reject;
                        });
                        return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        handshakeRequest = {
                            protocol: this.protocol.name,
                            version: this.protocol.version,
                        };
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Sending handshake request.");
                        return [4 /*yield*/, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                    case 3:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                        // defensively cleanup timeout in case we receive a message from the server before we finish start
                        this.cleanupTimeout();
                        this.resetTimeoutPeriod();
                        this.resetKeepAliveInterval();
                        return [4 /*yield*/, handshakePromise];
                    case 4:
                        _a.sent();
                        // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
                        // being rejected on close, because this continuation can run after both the handshake completed successfully
                        // and the connection was closed.
                        if (this.stopDuringStartError) {
                            // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
                            // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
                            // will cause the calling continuation to get scheduled to run later.
                            throw this.stopDuringStartError;
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Hub handshake failed with error '" + e_2 + "' during start(). Stopping HubConnection.");
                        this.cleanupTimeout();
                        this.cleanupPingTimer();
                        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                        return [4 /*yield*/, this.connection.stop(e_2)];
                    case 6:
                        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
                        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
                        _a.sent();
                        throw e_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    HubConnection.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startPromise, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPromise = this.startPromise;
                        this.stopPromise = this.stopInternal();
                        return [4 /*yield*/, this.stopPromise];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        // Awaiting undefined continues immediately
                        return [4 /*yield*/, startPromise];
                    case 3:
                        // Awaiting undefined continues immediately
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.stopInternal = function (error) {
        if (this.connectionState === HubConnectionState.Disconnected) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
            return Promise.resolve();
        }
        if (this.connectionState === HubConnectionState.Disconnecting) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
            return this.stopPromise;
        }
        this.connectionState = HubConnectionState.Disconnecting;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Stopping HubConnection.");
        if (this.reconnectDelayHandle) {
            // We're in a reconnect delay which means the underlying connection is currently already stopped.
            // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
            // fire the onclose callbacks.
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection stopped during reconnect delay. Done reconnecting.");
            clearTimeout(this.reconnectDelayHandle);
            this.reconnectDelayHandle = undefined;
            this.completeClose();
            return Promise.resolve();
        }
        this.cleanupTimeout();
        this.cleanupPingTimer();
        this.stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
        // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
        // or the onclose callback is invoked. The onclose callback will transition the HubConnection
        // to the disconnected state if need be before HttpConnection.stop() completes.
        return this.connection.stop(error);
    };
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    HubConnection.prototype.stream = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var invocationDescriptor = this.createStreamInvocation(methodName, args, streamIds);
        var promiseQueue;
        var subject = new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        subject.cancelCallback = function () {
            var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
            delete _this.callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(function () {
                return _this.sendWithProtocol(cancelInvocation);
            });
        };
        this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        promiseQueue = this.sendWithProtocol(invocationDescriptor)
            .catch(function (e) {
            subject.error(e);
            delete _this.callbacks[invocationDescriptor.invocationId];
        });
        this.launchStreams(streams, promiseQueue);
        return subject;
    };
    HubConnection.prototype.sendMessage = function (message) {
        this.resetKeepAliveInterval();
        return this.connection.send(message);
    };
    /**
     * Sends a js object to the server.
     * @param message The js object to serialize and send.
     */
    HubConnection.prototype.sendWithProtocol = function (message) {
        return this.sendMessage(this.protocol.writeMessage(message));
    };
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    HubConnection.prototype.send = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var sendPromise = this.sendWithProtocol(this.createInvocation(methodName, args, true, streamIds));
        this.launchStreams(streams, sendPromise);
        return sendPromise;
    };
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    HubConnection.prototype.invoke = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
        var invocationDescriptor = this.createInvocation(methodName, args, false, streamIds);
        var p = new Promise(function (resolve, reject) {
            // invocationId will always have a value for a non-blocking invocation
            _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error("Unexpected message type: " + invocationEvent.type));
                    }
                }
            };
            var promiseQueue = _this.sendWithProtocol(invocationDescriptor)
                .catch(function (e) {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
            _this.launchStreams(streams, promiseQueue);
        });
        return p;
    };
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    HubConnection.prototype.on = function (methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this.methods[methodName]) {
            this.methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this.methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this.methods[methodName].push(newMethod);
    };
    HubConnection.prototype.off = function (methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        var handlers = this.methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this.methods[methodName];
                }
            }
        }
        else {
            delete this.methods[methodName];
        }
    };
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    HubConnection.prototype.onclose = function (callback) {
        if (callback) {
            this.closedCallbacks.push(callback);
        }
    };
    /** Registers a handler that will be invoked when the connection starts reconnecting.
     *
     * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
     */
    HubConnection.prototype.onreconnecting = function (callback) {
        if (callback) {
            this.reconnectingCallbacks.push(callback);
        }
    };
    /** Registers a handler that will be invoked when the connection successfully reconnects.
     *
     * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
     */
    HubConnection.prototype.onreconnected = function (callback) {
        if (callback) {
            this.reconnectedCallbacks.push(callback);
        }
    };
    HubConnection.prototype.processIncomingData = function (data) {
        this.cleanupTimeout();
        if (!this.receivedHandshakeResponse) {
            data = this.processHandshakeResponse(data);
            this.receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            var messages = this.protocol.parseMessages(data, this.logger);
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:
                        this.invokeClientMethod(message);
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:
                        var callback = this.callbacks[message.invocationId];
                        if (callback) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                delete this.callbacks[message.invocationId];
                            }
                            callback(message);
                        }
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Close message received from server.");
                        var error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
                        if (message.allowReconnect === true) {
                            // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                            // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                            // tslint:disable-next-line:no-floating-promises
                            this.connection.stop(error);
                        }
                        else {
                            // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                            this.stopPromise = this.stopInternal(error);
                        }
                        break;
                    default:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Invalid message type: " + message.type + ".");
                        break;
                }
            }
        }
        this.resetTimeoutPeriod();
    };
    HubConnection.prototype.processHandshakeResponse = function (data) {
        var _a;
        var responseMessage;
        var remainingData;
        try {
            _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
        }
        catch (e) {
            var message = "Error parsing handshake response: " + e;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            this.handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            var message = "Server returned handshake error: " + responseMessage.error;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            this.handshakeRejecter(error);
            throw error;
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Server handshake complete.");
        }
        this.handshakeResolver();
        return remainingData;
    };
    HubConnection.prototype.resetKeepAliveInterval = function () {
        var _this = this;
        if (this.connection.features.inherentKeepAlive) {
            return;
        }
        this.cleanupPingTimer();
        this.pingServerHandle = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === HubConnectionState.Connected)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendMessage(this.cachedPingMessage)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        // We don't care about the error. It should be seen elsewhere in the client.
                        // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                        this.cleanupPingTimer();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, this.keepAliveIntervalInMilliseconds);
    };
    HubConnection.prototype.resetTimeoutPeriod = function () {
        var _this = this;
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
        }
    };
    HubConnection.prototype.serverTimeout = function () {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
        // tslint:disable-next-line:no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    };
    HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
        var _this = this;
        var methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            try {
                methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "A callback for the method " + invocationMessage.target.toLowerCase() + " threw error '" + e + "'.");
            }
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                var message = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                // We don't want to wait on the stop itself.
                this.stopPromise = this.stopInternal(new Error(message));
            }
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
        }
    };
    HubConnection.prototype.connectionClosed = function (error) {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this.connectionState + ".");
        // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
        this.stopDuringStartError = this.stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
        // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
        // If it has already completed, this should just noop.
        if (this.handshakeResolver) {
            this.handshakeResolver();
        }
        this.cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this.cleanupTimeout();
        this.cleanupPingTimer();
        if (this.connectionState === HubConnectionState.Disconnecting) {
            this.completeClose(error);
        }
        else if (this.connectionState === HubConnectionState.Connected && this.reconnectPolicy) {
            // tslint:disable-next-line:no-floating-promises
            this.reconnect(error);
        }
        else if (this.connectionState === HubConnectionState.Connected) {
            this.completeClose(error);
        }
        // If none of the above if conditions were true were called the HubConnection must be in either:
        // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
        // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
        //    and potentially continue the reconnect() loop.
        // 3. The Disconnected state in which case we're already done.
    };
    HubConnection.prototype.completeClose = function (error) {
        var _this = this;
        if (this.connectionStarted) {
            this.connectionState = HubConnectionState.Disconnected;
            this.connectionStarted = false;
            try {
                this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
            }
            catch (e) {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
            }
        }
    };
    HubConnection.prototype.reconnect = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var reconnectStartTime, previousReconnectAttempts, retryError, nextRetryDelay, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reconnectStartTime = Date.now();
                        previousReconnectAttempts = 0;
                        retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
                        nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
                        if (nextRetryDelay === null) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
                            this.completeClose(error);
                            return [2 /*return*/];
                        }
                        this.connectionState = HubConnectionState.Reconnecting;
                        if (error) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Connection reconnecting because of error '" + error + "'.");
                        }
                        else {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Connection reconnecting.");
                        }
                        if (this.onreconnecting) {
                            try {
                                this.reconnectingCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
                            }
                            catch (e) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
                            }
                            // Exit early if an onreconnecting callback called connection.stop().
                            if (this.connectionState !== HubConnectionState.Reconnecting) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                                return [2 /*return*/];
                            }
                        }
                        _a.label = 1;
                    case 1:
                        if (!(nextRetryDelay !== null)) return [3 /*break*/, 7];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                            })];
                    case 2:
                        _a.sent();
                        this.reconnectDelayHandle = undefined;
                        if (this.connectionState !== HubConnectionState.Reconnecting) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.startInternal()];
                    case 4:
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "HubConnection reconnected successfully.");
                        if (this.onreconnected) {
                            try {
                                this.reconnectedCallbacks.forEach(function (c) { return c.apply(_this, [_this.connection.connectionId]); });
                            }
                            catch (e) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
                            }
                        }
                        return [2 /*return*/];
                    case 5:
                        e_4 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect attempt failed because of error '" + e_4 + "'.");
                        if (this.connectionState !== HubConnectionState.Reconnecting) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Connection left the reconnecting state during reconnect attempt. Done reconnecting.");
                            return [2 /*return*/];
                        }
                        retryError = e_4 instanceof Error ? e_4 : new Error(e_4.toString());
                        nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
                        this.completeClose();
                        return [2 /*return*/];
                }
            });
        });
    };
    HubConnection.prototype.getNextRetryDelay = function (previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
            return this.reconnectPolicy.nextRetryDelayInMilliseconds({
                elapsedMilliseconds: elapsedMilliseconds,
                previousRetryCount: previousRetryCount,
                retryReason: retryReason,
            });
        }
        catch (e) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
            return null;
        }
    };
    HubConnection.prototype.cancelCallbacksWithError = function (error) {
        var callbacks = this.callbacks;
        this.callbacks = {};
        Object.keys(callbacks)
            .forEach(function (key) {
            var callback = callbacks[key];
            callback(null, error);
        });
    };
    HubConnection.prototype.cleanupPingTimer = function () {
        if (this.pingServerHandle) {
            clearTimeout(this.pingServerHandle);
        }
    };
    HubConnection.prototype.cleanupTimeout = function () {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
        }
    };
    HubConnection.prototype.createInvocation = function (methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
            if (streamIds.length !== 0) {
                return {
                    arguments: args,
                    streamIds: streamIds,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
                };
            }
            else {
                return {
                    arguments: args,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
                };
            }
        }
        else {
            var invocationId = this.invocationId;
            this.invocationId++;
            if (streamIds.length !== 0) {
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    streamIds: streamIds,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
                };
            }
            else {
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
                };
            }
        }
    };
    HubConnection.prototype.launchStreams = function (streams, promiseQueue) {
        var _this = this;
        if (streams.length === 0) {
            return;
        }
        // Synchronize stream data so they arrive in-order on the server
        if (!promiseQueue) {
            promiseQueue = Promise.resolve();
        }
        var _loop_1 = function (streamId) {
            streams[streamId].subscribe({
                complete: function () {
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId)); });
                },
                error: function (err) {
                    var message;
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    else if (err && err.toString) {
                        message = err.toString();
                    }
                    else {
                        message = "Unknown error";
                    }
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId, message)); });
                },
                next: function (item) {
                    promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createStreamItemMessage(streamId, item)); });
                },
            });
        };
        // We want to iterate over the keys, since the keys are the stream ids
        // tslint:disable-next-line:forin
        for (var streamId in streams) {
            _loop_1(streamId);
        }
    };
    HubConnection.prototype.replaceStreamingParams = function (args) {
        var streams = [];
        var streamIds = [];
        for (var i = 0; i < args.length; i++) {
            var argument = args[i];
            if (this.isObservable(argument)) {
                var streamId = this.invocationId;
                this.invocationId++;
                // Store the stream for later use
                streams[streamId] = argument;
                streamIds.push(streamId.toString());
                // remove stream from args
                args.splice(i, 1);
            }
        }
        return [streams, streamIds];
    };
    HubConnection.prototype.isObservable = function (arg) {
        // This allows other stream implementations to just work (like rxjs)
        return arg && arg.subscribe && typeof arg.subscribe === "function";
    };
    HubConnection.prototype.createStreamInvocation = function (methodName, args, streamIds) {
        var invocationId = this.invocationId;
        this.invocationId++;
        if (streamIds.length !== 0) {
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                streamIds: streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
            };
        }
        else {
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
            };
        }
    };
    HubConnection.prototype.createCancelInvocation = function (id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation,
        };
    };
    HubConnection.prototype.createStreamItemMessage = function (id, item) {
        return {
            invocationId: id,
            item: item,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem,
        };
    };
    HubConnection.prototype.createCompletionMessage = function (id, error, result) {
        if (error) {
            return {
                error: error,
                invocationId: id,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion,
            };
        }
        return {
            invocationId: id,
            result: result,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion,
        };
    };
    return HubConnection;
}());

//# sourceMappingURL=HubConnection.js.map

/***/ }),

/***/ "qFkC":
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ITransport.js ***!
  \****************************************************************/
/*! exports provided: HttpTransportType, TransferFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return HttpTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return TransferFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),

/***/ "qIXe":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \*******************************************************************************/
/*! exports provided: ServerSentEventsTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSentEventsTransport", function() { return ServerSentEventsTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "qFkC");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var ServerSentEventsTransport = /** @class */ (function () {
    function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor, withCredentials, headers) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.logMessageContent = logMessageContent;
        this.withCredentials = withCredentials;
        this.eventSourceConstructor = eventSourceConstructor;
        this.headers = headers;
        this.onreceive = null;
        this.onclose = null;
    }
    ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) Connecting.");
                        // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
                        this.url = url;
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var opened = false;
                            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text) {
                                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                return;
                            }
                            var eventSource;
                            if (_Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_2__["Platform"].isWebWorker) {
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: _this.withCredentials });
                            }
                            else {
                                // Non-browser passes cookies via the dictionary
                                var cookies = _this.httpClient.getCookieString(url);
                                var headers = {};
                                headers.Cookie = cookies;
                                var _a = Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getUserAgentHeader"])(), name_1 = _a[0], value = _a[1];
                                headers[name_1] = value;
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: _this.withCredentials, headers: __assign({}, headers, _this.headers) });
                            }
                            try {
                                eventSource.onmessage = function (e) {
                                    if (_this.onreceive) {
                                        try {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data, _this.logMessageContent) + ".");
                                            _this.onreceive(e.data);
                                        }
                                        catch (error) {
                                            _this.close(error);
                                            return;
                                        }
                                    }
                                };
                                eventSource.onerror = function (e) {
                                    var error = new Error(e.data || "Error occurred");
                                    if (opened) {
                                        _this.close(error);
                                    }
                                    else {
                                        reject(error);
                                    }
                                };
                                eventSource.onopen = function () {
                                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "SSE connected to " + _this.url);
                                    _this.eventSource = eventSource;
                                    opened = true;
                                    resolve();
                                };
                            }
                            catch (e) {
                                reject(e);
                                return;
                            }
                        })];
                }
            });
        });
    };
    ServerSentEventsTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.eventSource) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent, this.withCredentials, this.headers)];
            });
        });
    };
    ServerSentEventsTransport.prototype.stop = function () {
        this.close();
        return Promise.resolve();
    };
    ServerSentEventsTransport.prototype.close = function (e) {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    };
    return ServerSentEventsTransport;
}());

//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),

/***/ "qoYh":
/*!***********************************************************************!*\
  !*** ./src/app/pages/connect/components/connect/connect.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/sdk */ "fNiP");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/result */ "Mean");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
















function ConnectComponent_div_19_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", service_r5.name, "(", service_r5.realPort, "/", service_r5.protocol, ")");
} }
function ConnectComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConnectComponent_div_19_li_2_Template, 2, 3, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.services);
} }
function ConnectComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.showMyServices = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConnectComponent_ng_container_22_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_ng_container_22_ng_template_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.passwordVisible = !ctx_r10.passwordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r9.passwordVisible ? "eye-invisible" : "eye");
} }
function ConnectComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConnectComponent_ng_container_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConnectComponent_ng_container_22_ng_template_3_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSuffix", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r3.passwordVisible ? "text" : "password")("ngModel", ctx_r3.newPassword);
} }
class ConnectComponent {
    constructor(_modal, _router, _userService, _serviceService, _message) {
        this._modal = _modal;
        this._router = _router;
        this._userService = _userService;
        this._serviceService = _serviceService;
        this._message = _message;
        this.isAdmin = false;
        this.showMyServices = false;
        this.showChangePassword = false;
        this.passwordVisible = false;
        this.newPassword = '';
        this.services = [];
        this.icon = "api";
        this.statusTitle = "Connecting To Server";
        this.statusDesc = "Please waitting connecting.";
        if (!ConnectComponent.hubConnection) {
            ConnectComponent.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]()
                .withUrl('/session', { accessTokenFactory: () => sessionStorage.getItem('token') })
                .withAutomaticReconnect()
                .build();
        }
    }
    ngOnInit() {
        this._userService.isAdmin().subscribe(isAdmin => {
            this.isAdmin = isAdmin;
        });
        this.startSignalR();
    }
    startSignalR() {
        ConnectComponent.hubConnection
            .onreconnecting(() => {
            this.statusTitle = "Reconnecting To Server!";
            this.statusDesc = "Please keeping this window.";
            this.icon = 'exclamation-circle';
        });
        ConnectComponent.hubConnection
            .onreconnected(() => {
            this.statusTitle = "Successfully Connected To Server!";
            this.statusDesc = "Please keeping this window.";
            this.icon = 'check-circle';
        });
        ConnectComponent.hubConnection
            .onclose(() => {
            this.statusTitle = "Disconnected!";
            this.statusDesc = "Please relogin or check your network.";
            this.icon = "close-circle";
        });
        ConnectComponent.hubConnection
            .start()
            .then(() => {
            this.statusTitle = "Successfully Connected To Server!";
            this.statusDesc = "Please keeping this window.";
            this.icon = 'check-circle';
        })
            .catch(err => {
            this.statusTitle = "Unsuccessfully Connected To Server!";
            this.statusDesc = "Please relogin or check your network.";
            this.icon = "close-circle";
        });
    }
    goToDashboard() {
        this._router.navigateByUrl('/dashboard');
    }
    openMyServices() {
        const id = this._message.loading('Loading...', { nzDuration: 0 }).messageId;
        this._serviceService.listMyService().subscribe(services => {
            this._message.remove(id);
            this.services = services.filter(x => x.enabled).filter(x => x.status === 'Running');
            this.showMyServices = true;
        });
    }
    openChangePassword() {
        this.showChangePassword = true;
        this.newPassword = '';
    }
    changePassword() {
        const id = this._message.loading('Changing Password...', { nzDuration: 0 }).messageId;
        this._userService.changeCurrentUserPassword({ password: this.newPassword }).subscribe(() => {
            this._message.remove(id);
            this._message.create('success', `Changed Password`);
            this.newPassword = '';
            this.showChangePassword = false;
        });
    }
    logout() {
        this._modal.confirm({
            nzTitle: 'Do you Want to logout?',
            nzContent: 'When clicked the OK button, your connection will dispose.',
            nzOnOk: () => {
                ConnectComponent.hubConnection.stop().then(() => {
                    sessionStorage.clear();
                    this._router.navigateByUrl('/');
                });
            }
        });
    }
}
ConnectComponent.ɵfac = function ConnectComponent_Factory(t) { return new (t || ConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_sdk__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_sdk__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
ConnectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConnectComponent, selectors: [["app-connect"]], decls: 23, vars: 7, consts: [[1, "background"], [1, "login-form"], [3, "nzIcon", "nzTitle", "nzSubTitle"], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary", 3, "hidden", "click"], ["nz-button", "", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", "nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nzTitle", "My Services", 3, "nzVisible", "nzOnCancel"], [4, "nzModalContent"], [4, "nzModalFooter"], ["nzTitle", "Change Password", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], [3, "nzSuffix"], ["nz-input", "", "placeholder", "input password", 3, "type", "ngModel", "ngModelChange"], ["suffixTemplate", ""], ["nz-icon", "", 3, "nzType", "click"]], template: function ConnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-result", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_Template_button_click_4_listener() { return ctx.goToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Go Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_Template_button_click_6_listener() { return ctx.openMyServices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-dropdown-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_Template_li_click_14_listener() { return ctx.openChangePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_Template_li_click_16_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-modal", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function ConnectComponent_Template_nz_modal_nzOnCancel_18_listener() { return ctx.showMyServices = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ConnectComponent_div_19_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ConnectComponent_div_20_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-modal", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function ConnectComponent_Template_nz_modal_nzVisibleChange_21_listener($event) { return ctx.showChangePassword = $event; })("nzOnCancel", function ConnectComponent_Template_nz_modal_nzOnCancel_21_listener() { return ctx.showChangePassword = false; })("nzOnOk", function ConnectComponent_Template_nz_modal_nzOnOk_21_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ConnectComponent_ng_container_22_Template, 5, 3, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzIcon", ctx.icon)("nzTitle", ctx.statusTitle)("nzSubTitle", ctx.statusDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.showMyServices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.showChangePassword);
    } }, directives: [ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__["NzResultComponent"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_6__["NzResultExtraDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__["NzMenuItemDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalContentDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]], styles: [".login-form[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.login-form-margin[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.login-form-forgot[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.login-form-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  top: 50%;\n  position: absolute;\n  transform: translateY(-50%) translateX(-50%);\n  left: 50%;\n  padding: 25px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.7);\n}\n\n.background[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(/assets/background.jpg);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbm5lY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLG9DQUFBO0VBQ0EsMENBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtBQURGIiwiZmlsZSI6ImNvbm5lY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tbWFyZ2luIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1mb3Jnb3Qge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIHRvcDogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcGFkZGluZzogMjVweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIGJveC1zaGFkb3c6ICAwcHggMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2JhY2tncm91bmQuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "utQ/":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js ***!
  \**************************************************************************/
/*! exports provided: HubConnectionBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return HubConnectionBuilder; });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultReconnectPolicy */ "k+Ty");
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpConnection */ "2lgH");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HubConnection */ "mLhb");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "M+GD");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JsonHubProtocol */ "2zAs");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loggers */ "v3Fn");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







// tslint:disable:object-literal-sort-keys
var LogLevelNameMapping = {
    trace: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Trace,
    debug: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Debug,
    info: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information,
    information: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information,
    warn: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Warning,
    warning: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Warning,
    error: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Error,
    critical: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Critical,
    none: _ILogger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].None,
};
function parseLogLevel(name) {
    // Case-insensitive matching via lower-casing
    // Yes, I know case-folding is a complicated problem in Unicode, but we only support
    // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
    var mapping = LogLevelNameMapping[name.toLowerCase()];
    if (typeof mapping !== "undefined") {
        return mapping;
    }
    else {
        throw new Error("Unknown log level: " + name);
    }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */ (function () {
    function HubConnectionBuilder() {
    }
    HubConnectionBuilder.prototype.configureLogging = function (logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else if (typeof logging === "string") {
            var logLevel = parseLogLevel(logging);
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogger"](logLevel);
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogger"](logging);
        }
        return this;
    };
    HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isNotEmpty(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, transportTypeOrOptions);
        }
        else {
            this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, { transport: transportTypeOrOptions });
        }
        return this;
    };
    /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
     */
    HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_6__["Arg"].isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    };
    HubConnectionBuilder.prototype.withAutomaticReconnect = function (retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__["DefaultReconnectPolicy"]();
        }
        else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_0__["DefaultReconnectPolicy"](retryDelaysOrReconnectPolicy);
        }
        else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
    };
    /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
     */
    HubConnectionBuilder.prototype.build = function () {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        var httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        var connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_1__["HttpConnection"](this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_2__["HubConnection"].create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__["NullLogger"].instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_4__["JsonHubProtocol"](), this.reconnectPolicy);
    };
    return HubConnectionBuilder;
}());

function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),

/***/ "v3Fn":
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Loggers.js ***!
  \*************************************************************/
/*! exports provided: NullLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return NullLogger; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */ (function () {
    function NullLogger() {
    }
    /** @inheritDoc */
    // tslint:disable-next-line
    NullLogger.prototype.log = function (_logLevel, _message) {
    };
    /** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
    NullLogger.instance = new NullLogger();
    return NullLogger;
}());

//# sourceMappingURL=Loggers.js.map

/***/ }),

/***/ "wG4f":
/*!*************************************************!*\
  !*** ./src/app/pages/connect/connect.module.ts ***!
  \*************************************************/
/*! exports provided: ConnectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectModule", function() { return ConnectModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _connect_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect-routing.module */ "6d4Q");
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/connect/connect.component */ "qoYh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/result */ "Mean");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var src_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/sdk */ "fNiP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_jwt_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/jwt-http-interceptor.service */ "hHiL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__;
const icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
class ConnectModule {
}
ConnectModule.ɵfac = function ConnectModule_Factory(t) { return new (t || ConnectModule)(); };
ConnectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: ConnectModule });
ConnectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_services_jwt_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["JwtHttpInterceptorService"],
            multi: true
        },
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NZ_ICONS"], useValue: icons }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _connect_routing_module__WEBPACK_IMPORTED_MODULE_1__["ConnectRoutingModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_5__["NzResultModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"],
            src_sdk__WEBPACK_IMPORTED_MODULE_7__["SdkModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__["NzMessageModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](ConnectModule, { declarations: [_components_connect_connect_component__WEBPACK_IMPORTED_MODULE_2__["ConnectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _connect_routing_module__WEBPACK_IMPORTED_MODULE_1__["ConnectRoutingModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_5__["NzResultModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"],
        src_sdk__WEBPACK_IMPORTED_MODULE_7__["SdkModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__["NzMessageModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();


/***/ }),

/***/ "z2YZ":
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Subject.js ***!
  \*************************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "ftFU");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/** Stream implementation to stream items to the server. */
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.next = function (item) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.next(item);
        }
    };
    Subject.prototype.error = function (err) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.error) {
                observer.error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.complete) {
                observer.complete();
            }
        }
    };
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        return new _Utils__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscription"](this, observer);
    };
    return Subject;
}());

//# sourceMappingURL=Subject.js.map

/***/ })

}]);
//# sourceMappingURL=pages-connect-connect-module.js.map