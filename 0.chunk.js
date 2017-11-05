webpackJsonp([0],{

/***/ "../../../../../src/app/shared/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/shared/point.ts");
/* unused harmony export Data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatedData; });

var Data = (function () {
    function Data() {
        this.x = [];
        this.y = [];
        this.z = [];
        this.ax = [];
        this.ay = [];
        this.az = [];
        this.rx = [];
        this.ry = [];
        this.rz = [];
        this.q0 = [];
        this.q1 = [];
        this.q2 = [];
        this.q3 = [];
        this.newPositionData = false;
        this.newIMUData = false;
        this.newQuaternionData = false;
    }
    Data.prototype.reset = function () {
        this.newPositionData = false;
        this.newIMUData = false;
        this.newQuaternionData = false;
    };
    Data.parseLine = function (outputArray, line, type, channel) {
        if (line[1] == type) {
            outputArray.push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](line[0] / 1000.0, line[1 + channel]));
            return true;
        }
        return false;
    };
    Data.prototype.loadData = function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i] = parseFloat(data[i]);
        }
        this.newIMUData = Data.parseLine(this.ax, data, 2, 1);
        Data.parseLine(this.ay, data, 2, 2);
        Data.parseLine(this.az, data, 2, 3);
        Data.parseLine(this.rx, data, 2, 4);
        Data.parseLine(this.ry, data, 2, 5);
        Data.parseLine(this.rz, data, 2, 6);
        this.newPositionData = Data.parseLine(this.x, data, 1, 1);
        Data.parseLine(this.y, data, 1, 2);
        Data.parseLine(this.z, data, 1, 3);
        this.newQuaternionData = Data.parseLine(this.q0, data, 3, 1);
        Data.parseLine(this.q1, data, 3, 2);
        Data.parseLine(this.q2, data, 3, 3);
        Data.parseLine(this.q3, data, 3, 4);
    };
    return Data;
}());

var CalculatedData = (function () {
    function CalculatedData() {
        this.boardReference = new Data();
        this.integral = new Data();
        this.worldReference = new Data();
    }
    CalculatedData.prototype.loadData = function (data) {
        this.boardReference.loadData(data);
        if (this.boardReference.newQuaternionData) {
            if (this.boardReference.ax.length > 0 && this.boardReference.rx.length > 0) {
                var xArr = this.boardReference.ax;
                var ax = xArr[xArr.length - 1].y;
                var yArr = this.boardReference.ay;
                var ay = yArr[yArr.length - 1].y;
                var zArr = this.boardReference.az;
                var az = zArr[zArr.length - 1].y;
                var rxArr = this.boardReference.rx;
                var rx = rxArr[rxArr.length - 1].y;
                var ryArr = this.boardReference.ry;
                var ry = ryArr[ryArr.length - 1].y;
                var rzArr = this.boardReference.rz;
                var rz = rzArr[rzArr.length - 1].y;
                var q0Arr = this.boardReference.q0;
                var q0 = q0Arr[q0Arr.length - 1].y;
                var q1Arr = this.boardReference.q1;
                var q1 = q1Arr[q1Arr.length - 1].y;
                var q2Arr = this.boardReference.q2;
                var q2 = q2Arr[q2Arr.length - 1].y;
                var q3Arr = this.boardReference.q3;
                var q3 = q3Arr[q3Arr.length - 1].y;
                var accelerationVector = [ax, ay, az];
                var angularAccelerationVector = [rx, ry, rz];
                var quaternion = [q0, q1, q2, q3];
                this.convertToWorldReference(q0Arr[q0Arr.length - 1].x, accelerationVector, quaternion, [this.worldReference.ax, this.worldReference.ay, this.worldReference.az]);
                this.convertToWorldReference(q0Arr[q0Arr.length - 1].x, angularAccelerationVector, quaternion, [this.worldReference.rx, this.worldReference.ry, this.worldReference.rz]);
                this.worldReference.newIMUData = true;
            }
        }
        else {
            this.worldReference.newIMUData = false;
        }
    };
    CalculatedData.prototype.integrate = function (any) {
        var lastX = any[0].x;
        var lastY = any[0].y;
        var output = [];
        var last = 0;
        any.forEach(function (element) {
            var diff = ((parseFloat(element.y) + lastY) * (parseFloat(element.x) - lastX) / 2.0);
            if (isNaN(diff)) {
                diff = 0;
            }
            output.push({ x: element.x, y: last + diff });
            last = last + diff;
            lastX = parseFloat(element.x);
            lastY = parseFloat(element.y);
        });
        return output;
    };
    CalculatedData.prototype.convertToWorldReference = function (time, vector, quaternion, output) {
        var correctedVector = this.toWorldReference(vector, quaternion);
        output[0].push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](time, correctedVector[0]));
        output[1].push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](time, correctedVector[1]));
        output[2].push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](time, correctedVector[2]));
    };
    CalculatedData.prototype.convertDataToWorldReference = function (data, quaternion) {
        var output = [[], [], []];
        var endIndex = data[0].length;
        if (quaternion[0].length < endIndex) {
            endIndex = quaternion[0].length;
        }
        for (var i = 0; i < endIndex; i++) {
            var vector = [parseFloat(data[0][i].y), parseFloat(data[1][i].y), parseFloat(data[2][i].y)];
            var thisQuaternion = [parseFloat(quaternion[0][i].y), parseFloat(quaternion[1][i].y), parseFloat(quaternion[2][i].y), parseFloat(quaternion[3][i].y)];
            var correctedVector = this.toWorldReference(vector, thisQuaternion);
            output[0].push({ x: data[0][i].x, y: correctedVector[0] });
            output[1].push({ x: data[0][i].x, y: correctedVector[1] });
            output[2].push({ x: data[0][i].x, y: correctedVector[2] });
        }
        return output;
    };
    CalculatedData.prototype.toWorldReference = function (vector, quaternion) {
        var outputVector = [0.0, vector[0], vector[1], vector[2]];
        outputVector = this.hamiltonian(quaternion, outputVector);
        outputVector = this.hamiltonian(outputVector, this.quaternionConjugate(quaternion));
        outputVector = [outputVector[1], outputVector[2], outputVector[3]];
        return outputVector;
    };
    CalculatedData.prototype.quaternionConjugate = function (q) {
        var output = [];
        output.push(q[0]);
        output.push(-q[1]);
        output.push(-q[2]);
        output.push(-q[3]);
        return output;
    };
    CalculatedData.prototype.hamiltonian = function (q, r) {
        var output = [];
        output.push(q[0] * r[0] - q[1] * r[1] - q[2] * r[2] - q[3] * r[3]);
        output.push(q[0] * r[1] + r[0] * q[1] + q[2] * r[3] - q[3] * r[2]);
        output.push(q[0] * r[2] + r[0] * q[2] + q[3] * r[1] - q[1] * r[3]);
        output.push(q[0] * r[3] + r[0] * q[3] + q[1] * r[2] - q[2] * r[1]);
        return output;
    };
    return CalculatedData;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map