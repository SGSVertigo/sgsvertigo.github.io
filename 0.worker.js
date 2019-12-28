/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@ngtools/webpack/src/index.js!./src/app/controls/loader/loader.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ngtools/webpack/src/index.js!./src/app/controls/loader/loader.worker.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src!./src/app/controls/loader/loader.worker.ts ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_processing_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/processing/data */ "./src/app/processing/data.ts");
/* harmony import */ var src_app_processing_vertigo_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/processing/vertigo-data */ "./src/app/processing/vertigo-data.ts");
/* harmony import */ var src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/processing/processes/rawdata */ "./src/app/processing/processes/rawdata.ts");
/* harmony import */ var _processing_vertigo_spec_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../processing/vertigo-spec.json */ "./src/app/processing/vertigo-spec.json");
var _processing_vertigo_spec_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../processing/vertigo-spec.json */ "./src/app/processing/vertigo-spec.json", 1);
/* harmony import */ var src_app_processing_processes_quat2euldata_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/processing/processes/quat2euldata.js */ "./src/app/processing/processes/quat2euldata.js");







/// <reference lib="webworker" />
addEventListener('message', function (_a) {
    var data = _a.data;
    var fileBlob = data;
    if (!fileBlob) {
        console.error('No file selected');
        return;
    }
    var reader = new FileReader();
    var rawData = new src_app_processing_vertigo_data__WEBPACK_IMPORTED_MODULE_3__["VertigoRawData"]();
    var types = _processing_vertigo_spec_json__WEBPACK_IMPORTED_MODULE_5__["dataTypes"];
    types.forEach(function (t) {
        var specIdentifier = t.identifier;
        var rawDataSpec = new src_app_processing_processes_rawdata__WEBPACK_IMPORTED_MODULE_4__["RawData"]();
        rawDataSpec.SetHeaders(t.columns.map(function (c) { return c.id; }));
        rawData.DataTypes.set(specIdentifier, rawDataSpec);
    });
    reader.onload = function (file) {
        var quatDataConverter = new src_app_processing_processes_quat2euldata_js__WEBPACK_IMPORTED_MODULE_6__["Quat2EulData"]();
        var contents = file.target;
        var fileText = contents.result;
        console.log('Loaded file, starting parsing');
        var lines = fileText.split('\n');
        var numberOfLines = lines.length;
        var linesProcessed = 0;
        var progressIncrement = Math.round(numberOfLines * 0.01);
        var lastQuat = null;
        lines.forEach(function (line) {
            linesProcessed = linesProcessed + 1;
            var result = Object(papaparse__WEBPACK_IMPORTED_MODULE_1__["parse"])(line);
            if (linesProcessed % progressIncrement === 0) {
                postMessage({
                    progress: linesProcessed / numberOfLines,
                    data: null
                });
            }
            if (result.data[0]) {
                if (result.data[0][1] === "3") {
                    lastQuat = result.data[0].slice(2, 6);
                    var rpy = src_app_processing_processes_quat2euldata_js__WEBPACK_IMPORTED_MODULE_6__["Quat2EulData"].toEuler(lastQuat);
                    result.data[0] = result.data[0].concat(rpy);
                }
                if (result.data[0][1] === "2") {
                    if (lastQuat) {
                        var worldacc = src_app_processing_processes_quat2euldata_js__WEBPACK_IMPORTED_MODULE_6__["Quat2EulData"].convertToWorldReference(result.data[0].slice(2, 5), lastQuat);
                        var worldAngVel = src_app_processing_processes_quat2euldata_js__WEBPACK_IMPORTED_MODULE_6__["Quat2EulData"].convertToWorldReference(result.data[0].slice(5, 8), lastQuat);
                        result.data[0] = result.data[0].concat(worldacc).concat(worldAngVel);
                    }
                    else {
                        result.data[0] = result.data[0].concat([0, 0, 0, 0, 0, 0]);
                    }
                }
                if (!Number.isInteger(+result.data[0][0])) {
                    result.data[0][0] = Date.parse(result.data[0][0]);
                }
                else {
                    result.data[0][0] = +result.data[0][0];
                }
                var identifier = +result.data[0][1];
                for (var i = 2; i < result.data[0].length; i++) {
                    result.data[0][i] = +result.data[0][i];
                }
                var loadedData = new src_app_processing_data__WEBPACK_IMPORTED_MODULE_2__["Data"](result.data[0]);
                rawData.DataTypes.get(identifier).Load(loadedData);
            }
        });
        console.log('Finished loading file');
        postMessage({
            progress: 1.0,
            data: rawData
        });
    };
    reader.readAsText(fileBlob);
});


/***/ }),

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.1.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;q(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!q(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=h++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,g=",",v="\r\n",s='"',a=s+s,r=!1,i=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(g=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s)}();var o=new RegExp(U(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,r);if("object"==typeof e[0])return u(i||h(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=g),i+=y(e[a],a);0<t.length&&(i+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=g);var m=n&&s?e[p]:p;i+=y(t[o][m],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=v)}}return i}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=e.toString().replace(o,a),i="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(r,b.BAD_DELIMITERS)||-1<r.indexOf(g)||" "===r.charAt(0)||" "===r.charAt(r.length-1);return i?s+r+s:r}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=m,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(q(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;u.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function m(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(q(g.step)){var p=g.step;g.step=function(e){if(c=e,_())m();else{if(m(),0===c.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():p(c,t)}}}function v(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function m(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){q(g.transformHeader)&&(e=g.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!g.header&&!g.dynamicTyping&&!g.transform)return c;function e(e,t){var r,i=g.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];g.header&&(n=r>=l.length?"__parsed_extra":l[r]),g.transform&&(s=g.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return g.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);g.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return g.header&&0===l.length}function y(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){c.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)q(g.delimiter)&&(g.delimiter=g.delimiter(e),c.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),m=0;m<p.data.length;m++)if(r&&v(p.data[m]))c++;else{var _=p.data[m].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(g.delimiter=s),bestDelimiter:s}}(e,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=b.DefaultDelimiter),c.meta.delimiter=g.delimiter}var s=w(g);return g.preview&&g.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),m(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,q(g.complete)&&g.complete(c),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,M=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(M=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var z=0,j=!1;this.parse=function(a,r,t){if("string"!=typeof a)throw new Error("Input must be a string");var i=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=z=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],z+=f.length,c!==l.length-1)z+=I.length;else if(t)return R();if(!T||f.substr(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,z),m=a.indexOf(I,z),_=new RegExp(U(M)+U(O),"g"),g=a.indexOf(O,z);;)if(a[z]!==O)if(T&&0===f.length&&a.substr(z,s)===T){if(-1===m)return R();z=m+n,m=a.indexOf(I,z),p=a.indexOf(D,z)}else{if(-1!==p&&(p<m||-1===m)){if(!(p<g)){f.push(a.substring(z,p)),z=p+e,p=a.indexOf(D,z);continue}var v=x(p,g,m);if(v&&void 0!==v.nextDelim){p=v.nextDelim,g=v.quoteSearch,f.push(a.substring(z,p)),z=p+e,p=a.indexOf(D,z);continue}}if(-1===m)break;if(f.push(a.substring(z,m)),C(m+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(g=z,z++;;){if(-1===(g=a.indexOf(O,g+1)))return t||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:z}),w();if(g===i-1)return w(a.substring(z,g).replace(_,O));if(O!==M||a[g+1]!==M){if(O===M||0===g||a[g-1]!==M){var y=E(-1===m?p:Math.min(p,m));if(a[g+1+y]===D){f.push(a.substring(z,g).replace(_,O)),a[z=g+1+y+e]!==O&&(g=a.indexOf(O,z)),p=a.indexOf(D,z),m=a.indexOf(I,z);break}var k=E(m);if(a.substr(g+1+k,n)===I){if(f.push(a.substring(z,g).replace(_,O)),C(g+1+k+n),p=a.indexOf(D,z),g=a.indexOf(O,z),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:z}),g++}}else g++}return w();function b(e){h.push(e),d=z}function E(e){var t=0;if(-1!==e){var r=a.substring(g+1,e);r&&""===r.trim()&&(t=r.length)}return t}function w(e){return t||(void 0===e&&(e=a.substr(z)),f.push(e),z=i,b(f),o&&S()),R()}function C(e){z=e,b(f),f=[],m=a.indexOf(I,z)}function R(e,t){return{data:t||!1?h[0]:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(r||0)}}}function S(){A(R(void 0,!0)),h=[],u=[]}function x(e,t,r){var i={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<r||-1===r)){var s=a.indexOf(D,n);if(-1===s)return i;n<s&&(n=a.indexOf(O,n+1)),i=x(s,n,r)}else i={nextDelim:e,quoteSearch:t};return i}},this.abort=function(){j=!0},this.getCharIndex=function(){return z}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else q(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&g(t.workerId,t.results)}function g(e,t){var r=a[e];q(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(u.prototype)).constructor=m,b});

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/processing/data.ts":
/*!************************************!*\
  !*** ./src/app/processing/data.ts ***!
  \************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Data = /** @class */ (function () {
    function Data(data) {
        this.Data = data.slice();
    }
    Data.prototype.AddData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] += data.Data[index];
        }
    };
    Data.prototype.SubtractData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] -= data.Data[index];
        }
    };
    Data.prototype.DivideData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] /= data.Data[index];
        }
    };
    Data.prototype.MultiplyData = function (data) {
        if (data.Data.length !== this.Data.length)
            throw new Error("Data arrays must be the same length");
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] *= data.Data[index];
        }
    };
    Data.prototype.Add = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] += data;
        }
    };
    Data.prototype.Subtract = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] -= data;
        }
    };
    Data.prototype.Divide = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] /= data;
        }
    };
    Data.prototype.Multiply = function (data) {
        for (var index = 2; index < this.Data.length; index++) {
            this.Data[index] *= data;
        }
    };
    Data.AddData = function (a, b) {
        var data = new Data(a.Data);
        data.AddData(b);
        return data;
    };
    Data.SubtractData = function (a, b) {
        var data = new Data(a.Data);
        data.SubtractData(b);
        return data;
    };
    Data.MultiplyData = function (a, b) {
        var data = new Data(a.Data);
        data.MultiplyData(b);
        return data;
    };
    Data.DivideData = function (a, b) {
        var data = new Data(a.Data);
        data.DivideData(b);
        return data;
    };
    Data.Add = function (a, b) {
        var data = new Data(a.Data);
        data.Add(b);
        return data;
    };
    Data.Subtract = function (a, b) {
        var data = new Data(a.Data);
        data.Subtract(b);
        return data;
    };
    Data.Multiply = function (a, b) {
        var data = new Data(a.Data);
        data.Multiply(b);
        return data;
    };
    Data.Divide = function (a, b) {
        var data = new Data(a.Data);
        data.Divide(b);
        return data;
    };
    return Data;
}());



/***/ }),

/***/ "./src/app/processing/processes/abstractdatablock.ts":
/*!***********************************************************!*\
  !*** ./src/app/processing/processes/abstractdatablock.ts ***!
  \***********************************************************/
/*! exports provided: AbstractDataBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDataBlock", function() { return AbstractDataBlock; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AbstractDataBlock = /** @class */ (function () {
    function AbstractDataBlock() {
        this.data = [];
        this.headers = [];
        this.listeners = [];
    }
    AbstractDataBlock.prototype.Headers = function () {
        return this.headers;
    };
    AbstractDataBlock.prototype.SetHeaders = function (headers) {
        this.headers = headers;
    };
    AbstractDataBlock.prototype.SetParams = function (params) {
    };
    AbstractDataBlock.prototype.Data = function () {
        return this.data;
    };
    AbstractDataBlock.prototype.AddListener = function (listener) {
        this.listeners.push(listener);
    };
    AbstractDataBlock.prototype.RemoveListener = function (listener) {
        this.listeners = this.listeners.filter(function (l) { return l != listener; });
    };
    AbstractDataBlock.prototype.notifyListeners = function (added, removed) {
        this.listeners.forEach(function (l) { return l(added, removed); });
    };
    AbstractDataBlock.prototype.Trim = function (min, max) {
        var minIdx = this.data.findIndex(function (v) { return v.Timestamp > min; });
        var maxIdx = this.data.findIndex(function (v) { return v.Timestamp > max; });
        if (minIdx === -1) {
            minIdx = 0;
        }
        if (maxIdx === -1) {
            maxIdx = this.data.length;
        }
        return this.data.slice(minIdx, maxIdx);
    };
    return AbstractDataBlock;
}());



/***/ }),

/***/ "./src/app/processing/processes/quat2euldata.js":
/*!******************************************************!*\
  !*** ./src/app/processing/processes/quat2euldata.js ***!
  \******************************************************/
/*! exports provided: Quat2EulData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quat2EulData", function() { return Quat2EulData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");



var Quat2EulData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Quat2EulData, _super);
    function Quat2EulData() {
        var _this = _super.call(this) || this;
        _this.quaternion = [1, 0, 0, 0];
        _this.headers = [
            'North Acceleration',
            'East Acceleration',
            'Down Acceleration',
            'North Angular Velocity',
            'East Angular Velocity',
            'Down Angular Velocity',
        ];
        return _this;
    }
    Quat2EulData.convertToWorldReference = function (vector, quaternion) {
        var correctedVector = Quat2EulData.toWorldReference(vector, quaternion);
        var output = [];
        output.push(correctedVector[0]);
        output.push(correctedVector[1]);
        output.push(correctedVector[2]);
        return output;
    };
    Quat2EulData.toWorldReference = function (vector, quaternion) {
        var outputVector = [0.0, vector[0], vector[1], vector[2]];
        outputVector = Quat2EulData.hamiltonian(quaternion, outputVector);
        outputVector = Quat2EulData.hamiltonian(outputVector, Quat2EulData.quaternionConjugate(quaternion));
        outputVector = [outputVector[1], outputVector[2], outputVector[3]];
        return outputVector;
    };
    Quat2EulData.quaternionConjugate = function (q) {
        var output = [];
        output.push(q[0]);
        output.push(-q[1]);
        output.push(-q[2]);
        output.push(-q[3]);
        return output;
    };
    Quat2EulData.hamiltonian = function (q, r) {
        var output = [];
        output.push(q[0] * r[0] - q[1] * r[1] - q[2] * r[2] - q[3] * r[3]);
        output.push(q[0] * r[1] + r[0] * q[1] + q[2] * r[3] - q[3] * r[2]);
        output.push(q[0] * r[2] + r[0] * q[2] + q[3] * r[1] - q[1] * r[3]);
        output.push(q[0] * r[3] + r[0] * q[3] + q[1] * r[2] - q[2] * r[1]);
        return output;
    };
    Quat2EulData.toEuler = function (q) {
        var t0 = -2 * (q[2] * q[2] + q[3] * q[3]) + 1;
        var t1 = 2 * (q[1] * q[2] - q[0] * q[3]);
        var t2 = -2 * (q[1] * q[3] + q[0] * q[2]);
        var t3 = 2 * (q[2] * q[3] - q[0] * q[1]);
        var t4 = -2 * (q[1] * q[1] + q[2] * q[2]) + 1;
        if (t2 > 1) {
            t2 = 1;
        }
        if (t2 < -1) {
            t2 = -1;
        }
        var pitch = Math.asin(t2) * 2;
        var roll = Math.atan2(t3, t4);
        var yaw = Math.atan2(t1, t0);
        pitch = pitch * (180.0 / Math.PI);
        roll = roll * (180.0 / Math.PI);
        yaw = yaw * (180.0 / Math.PI);
        return [pitch, roll, yaw];
    };
    Quat2EulData.prototype.add = function (data) {
        var accelInBoardFrame = data.Data.slice(2, 5);
        var angularVelocityInBoardFrame = data.Data.slice(5, 8);
        var accelInWorldFrame = Quat2EulData.convertToWorldReference(accelInBoardFrame, this.quaternion);
        var angularVelocityInWorldFrame = Quat2EulData.convertToWorldReference(angularVelocityInBoardFrame, this.quaternion);
        var resolvedData = new _data__WEBPACK_IMPORTED_MODULE_2__["Data"]([
            data.Data[0],
            data.Data[1],
            accelInWorldFrame[0],
            accelInWorldFrame[1],
            accelInWorldFrame[2],
            angularVelocityInWorldFrame[0],
            angularVelocityInWorldFrame[1],
            angularVelocityInWorldFrame[2]
        ]);
        this.data.push(resolvedData);
        return resolvedData;
    };
    Quat2EulData.prototype.SetQuaternion = function (data) {
        this.quaternion = data.Data.slice(2, 6);
    };
    Quat2EulData.prototype.Load = function (data) {
        var eulerData = this.add(data);
        this.notifyListeners([eulerData], []);
    };
    Quat2EulData.prototype.LoadAll = function (data) {
        var _this = this;
        var eulerDataArray = [];
        data.forEach(function (d) {
            var eulerData = _this.add(d);
            eulerDataArray.push(eulerData);
        });
        this.notifyListeners(eulerDataArray, []);
    };
    return Quat2EulData;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_1__["AbstractDataBlock"]));

//# sourceMappingURL=quat2euldata.js.map

/***/ }),

/***/ "./src/app/processing/processes/rawdata.js":
/*!*************************************************!*\
  !*** ./src/app/processing/processes/rawdata.js ***!
  \*************************************************/
/*! exports provided: RawData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawData", function() { return RawData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");



var RawData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RawData, _super);
    function RawData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawData.Cast = function (object) {
        var rd = new RawData();
        rd.SetHeaders = object.headers;
        rd.data = object.data.map(function (d) { return new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](d.Data); });
        rd.data.forEach(function (d) { return d.Timestamp = d.Data[0]; });
        return rd;
    };
    RawData.prototype.Load = function (data) {
        this.data.push(data);
        this.notifyListeners([data], []);
    };
    RawData.prototype.LoadAll = function (data) {
        var _this = this;
        data.forEach(function (d) {
            _this.data.push(d);
        });
        this.notifyListeners(data, []);
    };
    return RawData;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_2__["AbstractDataBlock"]));

//# sourceMappingURL=rawdata.js.map

/***/ }),

/***/ "./src/app/processing/processes/rawdata.ts":
/*!*************************************************!*\
  !*** ./src/app/processing/processes/rawdata.ts ***!
  \*************************************************/
/*! exports provided: RawData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawData", function() { return RawData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/processing/data.ts");
/* harmony import */ var _abstractdatablock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractdatablock */ "./src/app/processing/processes/abstractdatablock.ts");



var RawData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RawData, _super);
    function RawData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawData.Cast = function (object) {
        var rd = new RawData();
        rd.SetHeaders = object.headers;
        rd.data = object.data.map(function (d) { return new _data__WEBPACK_IMPORTED_MODULE_1__["Data"](d.Data); });
        rd.data.forEach(function (d) { return d.Timestamp = d.Data[0]; });
        return rd;
    };
    RawData.prototype.Load = function (data) {
        this.data.push(data);
        this.notifyListeners([data], []);
    };
    RawData.prototype.LoadAll = function (data) {
        var _this = this;
        data.forEach(function (d) {
            _this.data.push(d);
        });
        this.notifyListeners(data, []);
    };
    return RawData;
}(_abstractdatablock__WEBPACK_IMPORTED_MODULE_2__["AbstractDataBlock"]));



/***/ }),

/***/ "./src/app/processing/vertigo-data.ts":
/*!********************************************!*\
  !*** ./src/app/processing/vertigo-data.ts ***!
  \********************************************/
/*! exports provided: VertigoRawData, VertigoProcessedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertigoRawData", function() { return VertigoRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertigoProcessedData", function() { return VertigoProcessedData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _processes_rawdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processes/rawdata.js */ "./src/app/processing/processes/rawdata.js");


var VertigoRawData = /** @class */ (function () {
    function VertigoRawData() {
        this.DataTypes = new Map();
    }
    VertigoRawData.prototype.init = function (spec) {
        var _this = this;
        spec.Types.forEach(function (t) {
            var rd = new _processes_rawdata_js__WEBPACK_IMPORTED_MODULE_1__["RawData"]();
            rd.SetHeaders(t.Columns.map(function (c) { return c.Name; }));
            _this.DataTypes.set(t.Identifier, rd);
        });
    };
    return VertigoRawData;
}());

var VertigoProcessedData = /** @class */ (function () {
    function VertigoProcessedData() {
        this.DataTypes = new Map();
    }
    return VertigoProcessedData;
}());



/***/ }),

/***/ "./src/app/processing/vertigo-spec.json":
/*!**********************************************!*\
  !*** ./src/app/processing/vertigo-spec.json ***!
  \**********************************************/
/*! exports provided: dataTypes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dataTypes\":[{\"id\":\"gps\",\"name\":\"gps\",\"identifier\":1,\"columns\":[{\"identifier\":2,\"id\":\"lon\",\"name\":\"longitude\",\"units\":\"Decimal Degrees x 1e7\"},{\"identifier\":3,\"id\":\"lat\",\"name\":\"latitude\",\"units\":\"Decimal Degrees x 1e7\"},{\"identifier\":4,\"id\":\"alt\",\"name\":\"altitude\",\"units\":\"mm\"},{\"identifier\":5,\"id\":\"veln\",\"name\":\"north velocity\",\"units\":\"mm/s\"},{\"identifier\":6,\"id\":\"vele\",\"name\":\"east velocity\",\"units\":\"mm/s\"},{\"identifier\":7,\"id\":\"veld\",\"name\":\"down velocity\",\"units\":\"mm/s\"},{\"identifier\":8,\"id\":\"acch\",\"name\":\"horizontal accuracy\",\"units\":\"mm\"},{\"identifier\":9,\"id\":\"accv\",\"name\":\"vertical accuracy\",\"units\":\"mm\"}]},{\"id\":\"imu\",\"name\":\"imu\",\"identifier\":2,\"columns\":[{\"identifier\":2,\"id\":\"ax\",\"name\":\"ax\",\"units\":\"g\"},{\"identifier\":3,\"id\":\"ay\",\"name\":\"ay\",\"units\":\"g\"},{\"identifier\":4,\"id\":\"az\",\"name\":\"az\",\"units\":\"g\"},{\"identifier\":5,\"id\":\"rx\",\"name\":\"rx\",\"units\":\"deg/s\"},{\"identifier\":6,\"id\":\"ry\",\"name\":\"ry\",\"units\":\"deg/s\"},{\"identifier\":7,\"id\":\"rz\",\"name\":\"rz\",\"units\":\"deg/s\"},{\"identifier\":8,\"id\":\"wax\",\"name\":\"world frame ax\",\"units\":\"g\"},{\"identifier\":9,\"id\":\"way\",\"name\":\"world frame ay\",\"units\":\"g\"},{\"identifier\":10,\"id\":\"waz\",\"name\":\"world frame az\",\"units\":\"g\"},{\"identifier\":11,\"id\":\"wrx\",\"name\":\"world frame rx\",\"units\":\"deg/s\"},{\"identifier\":12,\"id\":\"wry\",\"name\":\"world frame ry\",\"units\":\"deg/s\"},{\"identifier\":13,\"id\":\"wrz\",\"name\":\"world frame rz\",\"units\":\"deg/s\"}]},{\"id\":\"ahrs\",\"name\":\"ahrs\",\"identifier\":3,\"columns\":[{\"identifier\":2,\"id\":\"q0\",\"name\":\"q0\",\"units\":\"1\"},{\"identifier\":3,\"id\":\"q1\",\"name\":\"q1\",\"units\":\"i\"},{\"identifier\":4,\"id\":\"q2\",\"name\":\"q2\",\"units\":\"j\"},{\"identifier\":5,\"id\":\"q3\",\"name\":\"q3\",\"units\":\"k\"},{\"identifier\":6,\"id\":\"r\",\"name\":\"roll\",\"units\":\"deg\"},{\"identifier\":7,\"id\":\"p\",\"name\":\"pitch\",\"units\":\"deg\"},{\"identifier\":8,\"id\":\"y\",\"name\":\"yaw\",\"units\":\"deg\"}]},{\"id\":\"atmospheric\",\"name\":\"atmospheric\",\"identifier\":4,\"columns\":[{\"identifier\":2,\"id\":\"press\",\"name\":\"pressure\",\"units\":\"kPa\"},{\"identifier\":3,\"id\":\"temperature\",\"name\":\"temperature\",\"units\":\"°C\"},{\"identifier\":4,\"id\":\"humidity\",\"name\":\"humidity\",\"units\":\"%\"}]}]}");

/***/ })

/******/ });
//# sourceMappingURL=0.worker.js.map