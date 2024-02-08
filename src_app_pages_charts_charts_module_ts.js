"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_charts_charts_module_ts"],{

/***/ 36968:
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsBarHorizontalComponent": () => (/* binding */ ChartjsBarHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);


var _class;



var ChartjsBarHorizontalComponent = /*#__PURE__*/function () {
  function ChartjsBarHorizontalComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartjsBarHorizontalComponent);
    this.theme = theme;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      var chartjs = config.variables.chartjs;
      _this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: colors.infoLight,
          borderWidth: 1,
          data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()]
        }, {
          label: 'Dataset 2',
          backgroundColor: colors.successLight,
          data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()]
        }]
      };
      _this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }]
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor
          }
        }
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartjsBarHorizontalComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }, {
    key: "random",
    value: function random() {
      return Math.round(Math.random() * 100);
    }
  }]);
  return ChartjsBarHorizontalComponent;
}();
_class = ChartjsBarHorizontalComponent;
_class.ɵfac = function ChartjsBarHorizontalComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs-bar-horizontal"]],
  decls: 1,
  vars: 2,
  consts: [["type", "horizontalBar", 3, "data", "options"]],
  template: function ChartjsBarHorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 29124:
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsBarComponent": () => (/* binding */ ChartjsBarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);


var _class;




var ChartjsBarComponent = /*#__PURE__*/function () {
  function ChartjsBarComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartjsBarComponent);
    this.theme = theme;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      var chartjs = config.variables.chartjs;
      _this.data = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.primaryLight, 0.8)
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.infoLight, 0.8)
        }]
      };
      _this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }]
        }
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartjsBarComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return ChartjsBarComponent;
}();
_class = ChartjsBarComponent;
_class.ɵfac = function ChartjsBarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs-bar"]],
  decls: 1,
  vars: 2,
  consts: [["type", "bar", 3, "data", "options"]],
  template: function ChartjsBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 60205:
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-line.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsLineComponent": () => (/* binding */ ChartjsLineComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);


var _class;




var ChartjsLineComponent = /*#__PURE__*/function () {
  function ChartjsLineComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartjsLineComponent);
    this.theme = theme;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      var chartjs = config.variables.chartjs;
      _this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger
        }, {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info
        }]
      };
      _this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }]
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor
          }
        }
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartjsLineComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return ChartjsLineComponent;
}();
_class = ChartjsLineComponent;
_class.ɵfac = function ChartjsLineComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs-line"]],
  decls: 1,
  vars: 2,
  consts: [["type", "line", 3, "data", "options"]],
  template: function ChartjsLineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 41747:
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsMultipleXaxisComponent": () => (/* binding */ ChartjsMultipleXaxisComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);


var _class;



var ChartjsMultipleXaxisComponent = /*#__PURE__*/function () {
  function ChartjsMultipleXaxisComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartjsMultipleXaxisComponent);
    this.theme = theme;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      var chartjs = config.variables.chartjs;
      _this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'dataset - big points',
          data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 8,
          pointHoverRadius: 10
        }, {
          label: 'dataset - individual point sizes',
          data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
          borderColor: colors.dangerLight,
          backgroundColor: colors.dangerLight,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 8,
          pointHoverRadius: 10
        }, {
          label: 'dataset - large pointHoverRadius',
          data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
          borderColor: colors.info,
          backgroundColor: colors.info,
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10
        }, {
          label: 'dataset - large pointHitRadius',
          data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
          borderColor: colors.success,
          backgroundColor: colors.success,
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10
        }]
      };
      _this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor
          }
        },
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            },
            gridLines: {
              display: true,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            gridLines: {
              display: true,
              color: chartjs.axisLineColor
            },
            ticks: {
              fontColor: chartjs.textColor
            }
          }]
        }
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartjsMultipleXaxisComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }, {
    key: "random",
    value: function random() {
      return Math.round(Math.random() * 100);
    }
  }]);
  return ChartjsMultipleXaxisComponent;
}();
_class = ChartjsMultipleXaxisComponent;
_class.ɵfac = function ChartjsMultipleXaxisComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs-multiple-xaxis"]],
  decls: 1,
  vars: 2,
  consts: [["type", "line", 3, "data", "options"]],
  template: function ChartjsMultipleXaxisComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 43844:
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-pie.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsPieComponent": () => (/* binding */ ChartjsPieComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);


var _class;



var ChartjsPieComponent = /*#__PURE__*/function () {
  function ChartjsPieComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartjsPieComponent);
    this.theme = theme;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      var chartjs = config.variables.chartjs;
      _this.data = {
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        datasets: [{
          data: [300, 500, 100],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight]
        }]
      };
      _this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor
          }
        }
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartjsPieComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return ChartjsPieComponent;
}();
_class = ChartjsPieComponent;
_class.ɵfac = function ChartjsPieComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs-pie"]],
  decls: 1,
  vars: 2,
  consts: [["type", "pie", 3, "data", "options"]],
  template: function ChartjsPieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 89810:
/*!*****************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-radar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsRadarComponent": () => (/* binding */ ChartjsRadarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);


var _class;




var ChartjsRadarComponent = /*#__PURE__*/function () {
  function ChartjsRadarComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartjsRadarComponent);
    this.theme = theme;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      var chartjs = config.variables.chartjs;
      _this.data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: colors.danger,
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.dangerLight, 0.5)
        }, {
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B',
          borderColor: colors.warning,
          backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbColorHelper.hexToRgbA(colors.warningLight, 0.5)
        }]
      };
      _this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scaleFontColor: 'white',
        legend: {
          labels: {
            fontColor: chartjs.textColor
          }
        },
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor
          },
          gridLines: {
            color: chartjs.axisLineColor
          },
          angleLines: {
            color: chartjs.axisLineColor
          }
        }
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartjsRadarComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return ChartjsRadarComponent;
}();
_class = ChartjsRadarComponent;
_class.ɵfac = function ChartjsRadarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs-radar"]],
  decls: 1,
  vars: 2,
  consts: [["type", "radar", 3, "data", "options"]],
  template: function ChartjsRadarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    }
  },
  dependencies: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 65337:
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsComponent": () => (/* binding */ ChartjsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _chartjs_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjs-bar.component */ 29124);
/* harmony import */ var _chartjs_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs-line.component */ 60205);
/* harmony import */ var _chartjs_pie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartjs-pie.component */ 43844);
/* harmony import */ var _chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs-multiple-xaxis.component */ 41747);
/* harmony import */ var _chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chartjs-bar-horizontal.component */ 36968);
/* harmony import */ var _chartjs_radar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjs-radar.component */ 89810);


var _class;








var ChartjsComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChartjsComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChartjsComponent);
});
_class = ChartjsComponent;
_class.ɵfac = function ChartjsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-chartjs"]],
  decls: 37,
  vars: 0,
  consts: [[1, "row"], [1, "col-lg-6"]],
  template: function ChartjsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ngx-chartjs-pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 1)(8, "nb-card")(9, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ngx-chartjs-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 1)(14, "nb-card")(15, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Line");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ngx-chartjs-line");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 1)(20, "nb-card")(21, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Multiple x-axis");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "ngx-chartjs-multiple-xaxis");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 1)(26, "nb-card")(27, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Bar Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "ngx-chartjs-bar-horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 1)(32, "nb-card")(33, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Radar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "ngx-chartjs-radar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _chartjs_bar_component__WEBPACK_IMPORTED_MODULE_2__.ChartjsBarComponent, _chartjs_line_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsLineComponent, _chartjs_pie_component__WEBPACK_IMPORTED_MODULE_4__.ChartjsPieComponent, _chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsMultipleXaxisComponent, _chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_6__.ChartjsBarHorizontalComponent, _chartjs_radar_component__WEBPACK_IMPORTED_MODULE_7__.ChartjsRadarComponent],
  styles: ["[_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: var(--card-height-medium);\n  width: 100%;\n}\n[_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}"]
});

/***/ }),

/***/ 64889:
/*!*******************************************************!*\
  !*** ./src/app/pages/charts/charts-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsRoutingModule": () => (/* binding */ ChartsRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts.component */ 52864);
/* harmony import */ var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./echarts/echarts.component */ 1241);
/* harmony import */ var _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3/d3.component */ 28707);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 65337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;







var routes = [{
  path: '',
  component: _charts_component__WEBPACK_IMPORTED_MODULE_2__.ChartsComponent,
  children: [{
    path: 'echarts',
    component: _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__.EchartsComponent
  }, {
    path: 'd3',
    component: _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__.D3Component
  }, {
    path: 'chartjs',
    component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsComponent
  }]
}];
var ChartsRoutingModule = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChartsRoutingModule() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChartsRoutingModule);
});
_class = ChartsRoutingModule;
_class.ɵfac = function ChartsRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChartsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();
var routedComponents = [_charts_component__WEBPACK_IMPORTED_MODULE_2__.ChartsComponent, _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__.EchartsComponent, _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__.D3Component, _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsComponent];

/***/ }),

/***/ 52864:
/*!**************************************************!*\
  !*** ./src/app/pages/charts/charts.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsComponent": () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var ChartsComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChartsComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChartsComponent);
});
_class = ChartsComponent;
_class.ɵfac = function ChartsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-charts"]],
  decls: 1,
  vars: 0,
  template: function ChartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 29313:
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsModule": () => (/* binding */ ChartsModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-echarts */ 85446);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts-routing.module */ 64889);
/* harmony import */ var _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs/chartjs-bar.component */ 29124);
/* harmony import */ var _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chartjs/chartjs-line.component */ 60205);
/* harmony import */ var _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjs/chartjs-pie.component */ 43844);
/* harmony import */ var _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chartjs/chartjs-multiple-xaxis.component */ 41747);
/* harmony import */ var _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chartjs/chartjs-bar-horizontal.component */ 36968);
/* harmony import */ var _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chartjs/chartjs-radar.component */ 89810);
/* harmony import */ var _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./d3/d3-bar.component */ 90461);
/* harmony import */ var _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./d3/d3-line.component */ 30921);
/* harmony import */ var _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./d3/d3-pie.component */ 85680);
/* harmony import */ var _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./d3/d3-area-stack.component */ 67979);
/* harmony import */ var _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./d3/d3-polar.component */ 85742);
/* harmony import */ var _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./d3/d3-advanced-pie.component */ 60567);
/* harmony import */ var _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./echarts/echarts-line.component */ 48625);
/* harmony import */ var _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./echarts/echarts-pie.component */ 43771);
/* harmony import */ var _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./echarts/echarts-bar.component */ 99401);
/* harmony import */ var _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./echarts/echarts-multiple-xaxis.component */ 4581);
/* harmony import */ var _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./echarts/echarts-area-stack.component */ 25752);
/* harmony import */ var _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./echarts/echarts-bar-animation.component */ 82019);
/* harmony import */ var _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./echarts/echarts-radar.component */ 97685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./charts.component */ 52864);
/* harmony import */ var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./echarts/echarts.component */ 1241);
/* harmony import */ var _d3_d3_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./d3/d3.component */ 28707);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 65337);


var _class;






























var components = [_chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsBarComponent, _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_6__.ChartjsLineComponent, _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_7__.ChartjsPieComponent, _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_8__.ChartjsMultipleXaxisComponent, _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__.ChartjsBarHorizontalComponent, _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_10__.ChartjsRadarComponent, _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_11__.D3BarComponent, _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_12__.D3LineComponent, _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_13__.D3PieComponent, _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_14__.D3AreaStackComponent, _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_15__.D3PolarComponent, _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_16__.D3AdvancedPieComponent, _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_17__.EchartsLineComponent, _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_18__.EchartsPieComponent, _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_19__.EchartsBarComponent, _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_20__.EchartsMultipleXaxisComponent, _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_21__.EchartsAreaStackComponent, _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_22__.EchartsBarAnimationComponent, _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_23__.EchartsRadarComponent];
var ChartsModule = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChartsModule() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChartsModule);
});
_class = ChartsModule;
_class.ɵfac = function ChartsModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
  imports: [_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_4__.ChartsRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_29__.NgxEchartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__.NgxChartsModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_31__.NbCardModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](ChartsModule, {
    declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_24__.ChartsComponent, _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_25__.EchartsComponent, _d3_d3_component__WEBPACK_IMPORTED_MODULE_26__.D3Component, _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_27__.ChartjsComponent, _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsBarComponent, _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_6__.ChartjsLineComponent, _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_7__.ChartjsPieComponent, _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_8__.ChartjsMultipleXaxisComponent, _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__.ChartjsBarHorizontalComponent, _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_10__.ChartjsRadarComponent, _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_11__.D3BarComponent, _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_12__.D3LineComponent, _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_13__.D3PieComponent, _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_14__.D3AreaStackComponent, _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_15__.D3PolarComponent, _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_16__.D3AdvancedPieComponent, _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_17__.EchartsLineComponent, _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_18__.EchartsPieComponent, _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_19__.EchartsBarComponent, _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_20__.EchartsMultipleXaxisComponent, _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_21__.EchartsAreaStackComponent, _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_22__.EchartsBarAnimationComponent, _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_23__.EchartsRadarComponent],
    imports: [_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_4__.ChartsRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_29__.NgxEchartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_30__.NgxChartsModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_31__.NbCardModule]
  });
})();

/***/ }),

/***/ 60567:
/*!**************************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-advanced-pie.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3AdvancedPieComponent": () => (/* binding */ D3AdvancedPieComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);


var _class;



var D3AdvancedPieComponent = /*#__PURE__*/function () {
  function D3AdvancedPieComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, D3AdvancedPieComponent);
    this.theme = theme;
    this.single = [{
      name: 'Germany',
      value: 8940000
    }, {
      name: 'USA',
      value: 5000000
    }, {
      name: 'France',
      value: 7200000
    }];
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      _this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(D3AdvancedPieComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return D3AdvancedPieComponent;
}();
_class = D3AdvancedPieComponent;
_class.ɵfac = function D3AdvancedPieComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3-advanced-pie"]],
  decls: 1,
  vars: 2,
  consts: [[3, "scheme", "results"]],
  template: function D3AdvancedPieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-advanced-pie-chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
    }
  },
  dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.AdvancedPieChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 67979:
/*!************************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-area-stack.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3AreaStackComponent": () => (/* binding */ D3AreaStackComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);


var _class;



var D3AreaStackComponent = /*#__PURE__*/function () {
  function D3AreaStackComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, D3AreaStackComponent);
    this.theme = theme;
    this.multi = [{
      name: 'Germany',
      series: [{
        name: '2010',
        value: 7300000
      }, {
        name: '2011',
        value: 8940000
      }]
    }, {
      name: 'USA',
      series: [{
        name: '2010',
        value: 7870000
      }, {
        name: '2011',
        value: 8270000
      }]
    }, {
      name: 'France',
      series: [{
        name: '2010',
        value: 5000002
      }, {
        name: '2011',
        value: 5800000
      }]
    }];
    this.showLegend = true;
    this.autoScale = true;
    this.showXAxis = true;
    this.showYAxis = true;
    this.showXAxisLabel = true;
    this.showYAxisLabel = true;
    this.xAxisLabel = 'Country';
    this.yAxisLabel = 'Population';
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      _this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(D3AreaStackComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return D3AreaStackComponent;
}();
_class = D3AreaStackComponent;
_class.ɵfac = function D3AreaStackComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3-area-stack"]],
  decls: 1,
  vars: 10,
  consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]],
  template: function D3AreaStackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-area-chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
    }
  },
  dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.AreaChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 90461:
/*!*****************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-bar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3BarComponent": () => (/* binding */ D3BarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);


var _class;



var D3BarComponent = /*#__PURE__*/function () {
  function D3BarComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, D3BarComponent);
    this.theme = theme;
    this.results = [{
      name: 'Germany',
      value: 8940
    }, {
      name: 'USA',
      value: 5000
    }, {
      name: 'France',
      value: 7200
    }];
    this.showLegend = true;
    this.showXAxis = true;
    this.showYAxis = true;
    this.xAxisLabel = 'Country';
    this.yAxisLabel = 'Population';
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      _this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(D3BarComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return D3BarComponent;
}();
_class = D3BarComponent;
_class.ɵfac = function D3BarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3-bar"]],
  decls: 1,
  vars: 7,
  consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "xAxisLabel", "yAxisLabel"]],
  template: function D3BarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-bar-vertical", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.results)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
    }
  },
  dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.BarVerticalComponent],
  encapsulation: 2
});

/***/ }),

/***/ 30921:
/*!******************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-line.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3LineComponent": () => (/* binding */ D3LineComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);


var _class;



var D3LineComponent = /*#__PURE__*/function () {
  function D3LineComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, D3LineComponent);
    this.theme = theme;
    this.multi = [{
      name: 'Germany',
      series: [{
        name: '2010',
        value: 7300
      }, {
        name: '2011',
        value: 8940
      }]
    }, {
      name: 'USA',
      series: [{
        name: '2010',
        value: 7870
      }, {
        name: '2011',
        value: 8270
      }]
    }, {
      name: 'France',
      series: [{
        name: '2010',
        value: 5002
      }, {
        name: '2011',
        value: 5800
      }]
    }];
    this.showLegend = true;
    this.showXAxis = true;
    this.showYAxis = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Country';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Population';
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      _this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(D3LineComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return D3LineComponent;
}();
_class = D3LineComponent;
_class.ɵfac = function D3LineComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3-line"]],
  decls: 1,
  vars: 9,
  consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel"]],
  template: function D3LineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-line-chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
    }
  },
  dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.LineChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 85680:
/*!*****************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-pie.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3PieComponent": () => (/* binding */ D3PieComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);


var _class;



var D3PieComponent = /*#__PURE__*/function () {
  function D3PieComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, D3PieComponent);
    this.theme = theme;
    this.results = [{
      name: 'Germany',
      value: 8940
    }, {
      name: 'USA',
      value: 5000
    }, {
      name: 'France',
      value: 7200
    }];
    this.showLegend = true;
    this.showLabels = true;
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      _this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(D3PieComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return D3PieComponent;
}();
_class = D3PieComponent;
_class.ɵfac = function D3PieComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3-pie"]],
  decls: 1,
  vars: 4,
  consts: [[3, "scheme", "results", "legend", "labels"]],
  template: function D3PieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-pie-chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.results)("legend", ctx.showLegend)("labels", ctx.showLabels);
    }
  },
  dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.PieChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 85742:
/*!*******************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-polar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3PolarComponent": () => (/* binding */ D3PolarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);


var _class;



var D3PolarComponent = /*#__PURE__*/function () {
  function D3PolarComponent(theme) {
    var _this = this;
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, D3PolarComponent);
    this.theme = theme;
    this.multi = [{
      name: 'Germany',
      series: [{
        name: '1990',
        value: 31476
      }, {
        name: '2000',
        value: 36953
      }, {
        name: '2010',
        value: 40632
      }]
    }, {
      name: 'USA',
      series: [{
        name: '1990',
        value: 37060
      }, {
        name: '2000',
        value: 45986
      }, {
        name: '2010',
        value: 49737
      }]
    }, {
      name: 'France',
      series: [{
        name: '1990',
        value: 29476
      }, {
        name: '2000',
        value: 34774
      }, {
        name: '2010',
        value: 36240
      }]
    }];
    this.showLegend = true;
    this.autoScale = true;
    this.showXAxis = true;
    this.showYAxis = true;
    this.showXAxisLabel = true;
    this.showYAxisLabel = true;
    this.xAxisLabel = 'Country';
    this.yAxisLabel = 'Population';
    this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
      var colors = config.variables;
      _this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
      };
    });
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(D3PolarComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return D3PolarComponent;
}();
_class = D3PolarComponent;
_class.ɵfac = function D3PolarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3-polar"]],
  decls: 1,
  vars: 10,
  consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]],
  template: function D3PolarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-polar-chart", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
    }
  },
  dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.PolarChartComponent],
  encapsulation: 2
});

/***/ }),

/***/ 28707:
/*!*************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3Component": () => (/* binding */ D3Component)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _d3_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./d3-bar.component */ 90461);
/* harmony import */ var _d3_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3-line.component */ 30921);
/* harmony import */ var _d3_pie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3-pie.component */ 85680);
/* harmony import */ var _d3_area_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./d3-area-stack.component */ 67979);
/* harmony import */ var _d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./d3-advanced-pie.component */ 60567);


var _class;







var D3Component = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function D3Component() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, D3Component);
});
_class = D3Component;
_class.ɵfac = function D3Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-d3"]],
  decls: 31,
  vars: 0,
  consts: [[1, "row"], [1, "col-lg-6"]],
  template: function D3Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ngx-d3-pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 1)(8, "nb-card")(9, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ngx-d3-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 1)(14, "nb-card")(15, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Line");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "ngx-d3-line");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 1)(20, "nb-card")(21, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Advanced Pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ngx-d3-advanced-pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 1)(26, "nb-card")(27, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Area Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "ngx-d3-area-stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _d3_bar_component__WEBPACK_IMPORTED_MODULE_2__.D3BarComponent, _d3_line_component__WEBPACK_IMPORTED_MODULE_3__.D3LineComponent, _d3_pie_component__WEBPACK_IMPORTED_MODULE_4__.D3PieComponent, _d3_area_stack_component__WEBPACK_IMPORTED_MODULE_5__.D3AreaStackComponent, _d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_6__.D3AdvancedPieComponent],
  styles: ["[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: var(--card-height-medium);\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: var(--text-basic-color);\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: var(--text-hint-color);\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: var(--background-basic-color-2);\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: var(--text-hint-color);\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}"]
});

/***/ }),

/***/ 25752:
/*!**********************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-area-stack.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsAreaStackComponent": () => (/* binding */ EchartsAreaStackComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsAreaStackComponent = /*#__PURE__*/function () {
  function EchartsAreaStackComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsAreaStackComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsAreaStackComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: echarts.tooltipBackgroundColor
              }
            }
          },
          legend: {
            data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
            textStyle: {
              color: echarts.textColor
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          series: [{
            name: 'Mail marketing',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {
              normal: {
                opacity: echarts.areaOpacity
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          }, {
            name: 'Affiliate advertising',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {
              normal: {
                opacity: echarts.areaOpacity
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }, {
            name: 'Video ad',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {
              normal: {
                opacity: echarts.areaOpacity
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          }, {
            name: 'Direct interview',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {
              normal: {
                opacity: echarts.areaOpacity
              }
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          }, {
            name: 'Search engine',
            type: 'line',
            stack: 'Total amount',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: echarts.textColor
                }
              }
            },
            areaStyle: {
              normal: {
                opacity: echarts.areaOpacity
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }]
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsAreaStackComponent;
}();
_class = EchartsAreaStackComponent;
_class.ɵfac = function EchartsAreaStackComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-area-stack"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsAreaStackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 82019:
/*!*************************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-bar-animation.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsBarAnimationComponent": () => (/* binding */ EchartsBarAnimationComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsBarAnimationComponent = /*#__PURE__*/function () {
  function EchartsBarAnimationComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsBarAnimationComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsBarAnimationComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight, colors.infoLight],
          legend: {
            data: ['bar', 'bar2'],
            align: 'left',
            textStyle: {
              color: echarts.textColor
            }
          },
          xAxis: [{
            data: xAxisData,
            silent: false,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          yAxis: [{
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          series: [{
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function animationDelay(idx) {
              return idx * 10;
            }
          }, {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function animationDelay(idx) {
              return idx * 10 + 100;
            }
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function animationDelayUpdate(idx) {
            return idx * 5;
          }
        };
        for (var i = 0; i < 100; i++) {
          xAxisData.push('Category ' + i);
          data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
          data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsBarAnimationComponent;
}();
_class = EchartsBarAnimationComponent;
_class.ɵfac = function EchartsBarAnimationComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-bar-animation"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsBarAnimationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 99401:
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsBarComponent": () => (/* binding */ EchartsBarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsBarComponent = /*#__PURE__*/function () {
  function EchartsBarComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsBarComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsBarComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          series: [{
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }]
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsBarComponent;
}();
_class = EchartsBarComponent;
_class.ɵfac = function EchartsBarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-bar"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 48625:
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-line.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsLineComponent": () => (/* binding */ EchartsLineComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsLineComponent = /*#__PURE__*/function () {
  function EchartsLineComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsLineComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsLineComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.danger, colors.primary, colors.info],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
          },
          legend: {
            left: 'left',
            data: ['Line 1', 'Line 2', 'Line 3'],
            textStyle: {
              color: echarts.textColor
            }
          },
          xAxis: [{
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          yAxis: [{
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          series: [{
            name: 'Line 1',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
          }, {
            name: 'Line 2',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
          }, {
            name: 'Line 3',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
          }]
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsLineComponent;
}();
_class = EchartsLineComponent;
_class.ɵfac = function EchartsLineComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-line"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsLineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 4581:
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsMultipleXaxisComponent": () => (/* binding */ EchartsMultipleXaxisComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsMultipleXaxisComponent = /*#__PURE__*/function () {
  function EchartsMultipleXaxisComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsMultipleXaxisComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsMultipleXaxisComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.success, colors.info],
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['2015 Precipitation', '2016 Precipitation'],
            textStyle: {
              color: echarts.textColor
            }
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.info
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            },
            axisPointer: {
              label: {
                formatter: function formatter(params) {
                  return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
          }, {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            },
            axisPointer: {
              label: {
                formatter: function formatter(params) {
                  return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor
              }
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor
              }
            }
          }],
          series: [{
            name: '2015 Precipitation',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          }, {
            name: '2016 Precipitation',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
          }]
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsMultipleXaxisComponent;
}();
_class = EchartsMultipleXaxisComponent;
_class.ɵfac = function EchartsMultipleXaxisComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-multiple-xaxis"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsMultipleXaxisComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 43771:
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-pie.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsPieComponent": () => (/* binding */ EchartsPieComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsPieComponent = /*#__PURE__*/function () {
  function EchartsPieComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsPieComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsPieComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
            textStyle: {
              color: echarts.textColor
            }
          },
          series: [{
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [{
              value: 335,
              name: 'Germany'
            }, {
              value: 310,
              name: 'France'
            }, {
              value: 234,
              name: 'Canada'
            }, {
              value: 135,
              name: 'Russia'
            }, {
              value: 1548,
              name: 'USA'
            }],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor
              }
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor
                }
              }
            }
          }]
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsPieComponent;
}();
_class = EchartsPieComponent;
_class.ɵfac = function EchartsPieComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-pie"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsPieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 97685:
/*!*****************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-radar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsRadarComponent": () => (/* binding */ EchartsRadarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 85446);


var _class;



var EchartsRadarComponent = /*#__PURE__*/function () {
  function EchartsRadarComponent(theme) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EchartsRadarComponent);
    this.theme = theme;
    this.options = {};
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EchartsRadarComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this.options = {
          backgroundColor: echarts.bg,
          color: [colors.danger, colors.warning],
          tooltip: {},
          legend: {
            data: ['Allocated Budget', 'Actual Spending'],
            textStyle: {
              color: echarts.textColor
            }
          },
          radar: {
            name: {
              textStyle: {
                color: echarts.textColor
              }
            },
            indicator: [{
              name: 'Sales',
              max: 6500
            }, {
              name: 'Administration',
              max: 16000
            }, {
              name: 'Information Techology',
              max: 30000
            }, {
              name: 'Customer Support',
              max: 38000
            }, {
              name: 'Development',
              max: 52000
            }, {
              name: 'Marketing',
              max: 25000
            }],
            splitArea: {
              areaStyle: {
                color: 'transparent'
              }
            }
          },
          series: [{
            name: 'Budget vs Spending',
            type: 'radar',
            data: [{
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: 'Allocated Budget'
            }, {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: 'Actual Spending'
            }]
          }]
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }
  }]);
  return EchartsRadarComponent;
}();
_class = EchartsRadarComponent;
_class.ɵfac = function EchartsRadarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbThemeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts-radar"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "echart", 3, "options"]],
  template: function EchartsRadarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"]],
  encapsulation: 2
});

/***/ }),

/***/ 1241:
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EchartsComponent": () => (/* binding */ EchartsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _echarts_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./echarts-line.component */ 48625);
/* harmony import */ var _echarts_pie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./echarts-pie.component */ 43771);
/* harmony import */ var _echarts_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./echarts-bar.component */ 99401);
/* harmony import */ var _echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./echarts-multiple-xaxis.component */ 4581);
/* harmony import */ var _echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./echarts-area-stack.component */ 25752);
/* harmony import */ var _echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./echarts-bar-animation.component */ 82019);
/* harmony import */ var _echarts_radar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./echarts-radar.component */ 97685);


var _class;









var EchartsComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EchartsComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EchartsComponent);
});
_class = EchartsComponent;
_class.ɵfac = function EchartsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-echarts"]],
  decls: 43,
  vars: 0,
  consts: [[1, "row"], [1, "col-lg-6"]],
  template: function EchartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ngx-echarts-pie");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 1)(8, "nb-card")(9, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ngx-echarts-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 1)(14, "nb-card")(15, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Line");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ngx-echarts-line");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 1)(20, "nb-card")(21, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Multiple x-axis");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "ngx-echarts-multiple-xaxis");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 1)(26, "nb-card")(27, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Area Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "ngx-echarts-area-stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 1)(32, "nb-card")(33, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Bar Animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "ngx-echarts-bar-animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 1)(38, "nb-card")(39, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Radar");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "ngx-echarts-radar");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardHeaderComponent, _echarts_line_component__WEBPACK_IMPORTED_MODULE_2__.EchartsLineComponent, _echarts_pie_component__WEBPACK_IMPORTED_MODULE_3__.EchartsPieComponent, _echarts_bar_component__WEBPACK_IMPORTED_MODULE_4__.EchartsBarComponent, _echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_5__.EchartsMultipleXaxisComponent, _echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_6__.EchartsAreaStackComponent, _echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_7__.EchartsBarAnimationComponent, _echarts_radar_component__WEBPACK_IMPORTED_MODULE_8__.EchartsRadarComponent],
  styles: ["[_nghost-%COMP%]   ngx-echarts-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-multiple-xaxis[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-area-stack[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-bar-animation[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: var(--card-height-medium);\n  width: 100%;\n}\n[_nghost-%COMP%]     .echart {\n  height: 100%;\n  width: 100%;\n}"]
});

/***/ })

}]);