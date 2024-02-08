"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["main"],{

/***/ 43127:
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "NB_CORE_PROVIDERS": () => (/* binding */ NB_CORE_PROVIDERS),
/* harmony export */   "NbSimpleRoleProvider": () => (/* binding */ NbSimpleRoleProvider)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 45479);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits.js */ 6360);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper.js */ 24288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/auth */ 29766);
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/security */ 13856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-import-guard */ 65239);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ 89535);
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/users */ 63288);
/* harmony import */ var _data_user_activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/user-activity */ 74345);
/* harmony import */ var _mock_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/users.service */ 33167);
/* harmony import */ var _mock_user_activity_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/user-activity.service */ 41922);
/* harmony import */ var _mock_mock_data_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/mock-data.module */ 68206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 94650);





var _class;












var socialLinks = [
  // {
  //   url: 'https://github.com/akveo/nebular',
  //   target: '_blank',
  //   icon: 'github',
  // },
  // {
  //   url: 'https://www.facebook.com/akveo/',
  //   target: '_blank',
  //   icon: 'facebook',
  // },
  // {
  //   url: 'https://twitter.com/akveo_inc',
  //   target: '_blank',
  //   icon: 'twitter',
  // },
];
var DATA_SERVICES = [{
  provide: _data_users__WEBPACK_IMPORTED_MODULE_7__.UserData,
  useClass: _mock_users_service__WEBPACK_IMPORTED_MODULE_9__.UserService
},
// { provide: ElectricityData, useClass: ElectricityService },
// { provide: SmartTableData, useClass: SmartTableService },
{
  provide: _data_user_activity__WEBPACK_IMPORTED_MODULE_8__.UserActivityData,
  useClass: _mock_user_activity_service__WEBPACK_IMPORTED_MODULE_10__.UserActivityService
}
// { provide: OrdersChartData, useClass: OrdersChartService },
// { provide: ProfitChartData, useClass: ProfitChartService },
// { provide: TrafficListData, useClass: TrafficListService },
// { provide: EarningData, useClass: EarningService },
// { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
// { provide: TrafficBarData, useClass: TrafficBarService },
// { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
// { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
// { provide: SolarData, useClass: SolarService },
// { provide: TrafficChartData, useClass: TrafficChartService },
// { provide: StatsBarData, useClass: StatsBarService },
// { provide: CountryOrderData, useClass: CountryOrderService },
// { provide: StatsProgressBarData, useClass: StatsProgressBarService },
// { provide: SecurityCamerasData, useClass: SecurityCamerasService },
];

var NbSimpleRoleProvider = /*#__PURE__*/function (_NbRoleProvider) {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(NbSimpleRoleProvider, _NbRoleProvider);
  var _super = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(NbSimpleRoleProvider);
  function NbSimpleRoleProvider() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NbSimpleRoleProvider);
    return _super.apply(this, arguments);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NbSimpleRoleProvider, [{
    key: "getRole",
    value: function getRole() {
      // here you could provide any role based on any auth flow
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)('guest');
    }
  }]);
  return NbSimpleRoleProvider;
}(_nebular_security__WEBPACK_IMPORTED_MODULE_13__.NbRoleProvider);
var NB_CORE_PROVIDERS = [].concat((0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_mock_mock_data_module__WEBPACK_IMPORTED_MODULE_11__.MockDataModule.forRoot().providers), DATA_SERVICES, (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_nebular_auth__WEBPACK_IMPORTED_MODULE_14__.NbAuthModule.forRoot({
  strategies: [_nebular_auth__WEBPACK_IMPORTED_MODULE_14__.NbDummyAuthStrategy.setup({
    name: 'email',
    delay: 3000
  })],
  forms: {
    login: {
      socialLinks: socialLinks
    },
    register: {
      socialLinks: socialLinks
    }
  }
}).providers), [_nebular_security__WEBPACK_IMPORTED_MODULE_13__.NbSecurityModule.forRoot({
  accessControl: {
    guest: {
      view: '*'
    },
    user: {
      parent: 'guest',
      create: '*',
      edit: '*',
      remove: '*'
    }
  }
}).providers, {
  provide: _nebular_security__WEBPACK_IMPORTED_MODULE_13__.NbRoleProvider,
  useClass: NbSimpleRoleProvider
}, _utils__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService, _utils__WEBPACK_IMPORTED_MODULE_6__.LayoutService, _utils__WEBPACK_IMPORTED_MODULE_6__.PlayerService, _utils__WEBPACK_IMPORTED_MODULE_6__.SeoService, _utils__WEBPACK_IMPORTED_MODULE_6__.StateService]);
var CoreModule = /*#__PURE__*/function () {
  function CoreModule(parentModule) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreModule);
    (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_5__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreModule, null, [{
    key: "forRoot",
    value: function forRoot() {
      return {
        ngModule: CoreModule,
        providers: (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NB_CORE_PROVIDERS)
      };
    }
  }]);
  return CoreModule;
}();
_class = CoreModule;
_class.ɵfac = function CoreModule_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_class, 12));
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _nebular_auth__WEBPACK_IMPORTED_MODULE_14__.NbAuthModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule],
    exports: [_nebular_auth__WEBPACK_IMPORTED_MODULE_14__.NbAuthModule]
  });
})();

/***/ }),

/***/ 74345:
/*!*********************************************!*\
  !*** ./src/app/@core/data/user-activity.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityData": () => (/* binding */ UserActivityData)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);


var UserActivityData = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UserActivityData() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserActivityData);
});

/***/ }),

/***/ 63288:
/*!*************************************!*\
  !*** ./src/app/@core/data/users.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);


var UserData = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UserData() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserData);
});

/***/ }),

/***/ 68206:
/*!************************************************!*\
  !*** ./src/app/@core/mock/mock-data.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockDataModule": () => (/* binding */ MockDataModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ 33167);
/* harmony import */ var _user_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-activity.service */ 41922);
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./periods.service */ 67168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;





var SERVICES = [_users_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _user_activity_service__WEBPACK_IMPORTED_MODULE_3__.UserActivityService, _periods_service__WEBPACK_IMPORTED_MODULE_4__.PeriodsService];
var MockDataModule = /*#__PURE__*/function () {
  function MockDataModule() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MockDataModule);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MockDataModule, null, [{
    key: "forRoot",
    value: function forRoot() {
      return {
        ngModule: MockDataModule,
        providers: [].concat(SERVICES)
      };
    }
  }]);
  return MockDataModule;
}();
_class = MockDataModule;
_class.ɵfac = function MockDataModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [].concat(SERVICES),
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MockDataModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
  });
})();

/***/ }),

/***/ 67168:
/*!***********************************************!*\
  !*** ./src/app/@core/mock/periods.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodsService": () => (/* binding */ PeriodsService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var PeriodsService = /*#__PURE__*/function () {
  function PeriodsService() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PeriodsService);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PeriodsService, [{
    key: "getYears",
    value: function getYears() {
      return ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    }
  }, {
    key: "getMonths",
    value: function getMonths() {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  }, {
    key: "getWeeks",
    value: function getWeeks() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  }]);
  return PeriodsService;
}();
_class = PeriodsService;
_class.ɵfac = function PeriodsService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 41922:
/*!*****************************************************!*\
  !*** ./src/app/@core/mock/user-activity.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityService": () => (/* binding */ UserActivityService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits.js */ 6360);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper.js */ 24288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var _data_user_activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/user-activity */ 74345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./periods.service */ 67168);




var _class;




var UserActivityService = /*#__PURE__*/function (_UserActivityData) {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(UserActivityService, _UserActivityData);
  var _super = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(UserActivityService);
  function UserActivityService(periods) {
    var _this;
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserActivityService);
    _this = _super.call(this);
    _this.periods = periods;
    _this.getRandom = function (roundTo) {
      return Math.round(Math.random() * roundTo);
    };
    _this.data = {};
    _this.data = {
      week: _this.getDataWeek(),
      month: _this.getDataMonth(),
      year: _this.getDataYear()
    };
    return _this;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserActivityService, [{
    key: "generateUserActivityRandomData",
    value: function generateUserActivityRandomData(date) {
      return {
        date: date,
        pagesVisitCount: this.getRandom(1000),
        deltaUp: this.getRandom(1) % 2 === 0,
        newVisits: this.getRandom(100)
      };
    }
  }, {
    key: "getDataWeek",
    value: function getDataWeek() {
      var _this2 = this;
      return this.periods.getWeeks().map(function (week) {
        return _this2.generateUserActivityRandomData(week);
      });
    }
  }, {
    key: "getDataMonth",
    value: function getDataMonth() {
      var _this3 = this;
      var currentDate = new Date();
      var days = currentDate.getDate();
      var month = this.periods.getMonths()[currentDate.getMonth()];
      return Array.from(Array(days)).map(function (_, index) {
        var date = "".concat(index + 1, " ").concat(month);
        return _this3.generateUserActivityRandomData(date);
      });
    }
  }, {
    key: "getDataYear",
    value: function getDataYear() {
      var _this4 = this;
      return this.periods.getYears().map(function (year) {
        return _this4.generateUserActivityRandomData(year);
      });
    }
  }, {
    key: "getUserActivityData",
    value: function getUserActivityData(period) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.data[period]);
    }
  }]);
  return UserActivityService;
}(_data_user_activity__WEBPACK_IMPORTED_MODULE_4__.UserActivityData);
_class = UserActivityService;
_class.ɵfac = function UserActivityService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_5__.PeriodsService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 33167:
/*!*********************************************!*\
  !*** ./src/app/@core/mock/users.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits.js */ 6360);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper.js */ 24288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/users */ 63288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);




var _class;



var UserService = /*#__PURE__*/function (_UserData) {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(UserService, _UserData);
  var _super = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(UserService);
  function UserService() {
    var _this;
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserService);
    _this = _super.apply(this, arguments);
    _this.time = new Date();
    _this.users = {
      nick: {
        name: 'Nick Jones',
        picture: 'assets/images/nick.png'
      },
      eva: {
        name: 'Eva Moor',
        picture: 'assets/images/eva.png'
      },
      jack: {
        name: 'Jack Williams',
        picture: 'assets/images/jack.png'
      },
      lee: {
        name: 'Lee Wong',
        picture: 'assets/images/lee.png'
      },
      alan: {
        name: 'Alan Thompson',
        picture: 'assets/images/alan.png'
      },
      kate: {
        name: 'Kate Martinez',
        picture: 'assets/images/kate.png'
      }
    };
    _this.types = {
      mobile: 'mobile',
      home: 'home',
      work: 'work'
    };
    _this.contacts = [{
      user: _this.users.nick,
      type: _this.types.mobile
    }, {
      user: _this.users.eva,
      type: _this.types.home
    }, {
      user: _this.users.jack,
      type: _this.types.mobile
    }, {
      user: _this.users.lee,
      type: _this.types.mobile
    }, {
      user: _this.users.alan,
      type: _this.types.home
    }, {
      user: _this.users.kate,
      type: _this.types.work
    }];
    _this.recentUsers = [{
      user: _this.users.alan,
      type: _this.types.home,
      time: _this.time.setHours(21, 12)
    }, {
      user: _this.users.eva,
      type: _this.types.home,
      time: _this.time.setHours(17, 45)
    }, {
      user: _this.users.nick,
      type: _this.types.mobile,
      time: _this.time.setHours(5, 29)
    }, {
      user: _this.users.lee,
      type: _this.types.mobile,
      time: _this.time.setHours(11, 24)
    }, {
      user: _this.users.jack,
      type: _this.types.mobile,
      time: _this.time.setHours(10, 45)
    }, {
      user: _this.users.kate,
      type: _this.types.work,
      time: _this.time.setHours(9, 42)
    }, {
      user: _this.users.kate,
      type: _this.types.work,
      time: _this.time.setHours(9, 31)
    }, {
      user: _this.users.jack,
      type: _this.types.mobile,
      time: _this.time.setHours(8, 0)
    }];
    return _this;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserService, [{
    key: "getUsers",
    value: function getUsers() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.users);
    }
  }, {
    key: "getContacts",
    value: function getContacts() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.contacts);
    }
  }, {
    key: "getRecentUsers",
    value: function getRecentUsers() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.recentUsers);
    }
  }]);
  return UserService;
}(_data_users__WEBPACK_IMPORTED_MODULE_4__.UserData);
_class = UserService;
_class.ɵfac = /*@__PURE__*/function () {
  var ɵUserService_BaseFactory;
  return function UserService_Factory(t) {
    return (ɵUserService_BaseFactory || (ɵUserService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 65239:
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
  if (parentModule) {
    throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
  }
}

/***/ }),

/***/ 30553:
/*!**************************************************!*\
  !*** ./src/app/@core/utils/analytics.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);


var _class;





var AnalyticsService = /*#__PURE__*/function () {
  function AnalyticsService(location, router) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnalyticsService);
    this.location = location;
    this.router = router;
    this.enabled = false;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AnalyticsService, [{
    key: "trackPageViews",
    value: function trackPageViews() {
      var _this = this;
      if (this.enabled) {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
        })).subscribe(function () {
          ga('send', {
            hitType: 'pageview',
            page: _this.location.path()
          });
        });
      }
    }
  }, {
    key: "trackEvent",
    value: function trackEvent(eventName) {
      if (this.enabled) {
        ga('send', 'event', eventName);
      }
    }
  }]);
  return AnalyticsService;
}();
_class = AnalyticsService;
_class.ɵfac = function AnalyticsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 89535:
/*!**************************************!*\
  !*** ./src/app/@core/utils/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* reexport safe */ _analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService),
/* harmony export */   "LayoutService": () => (/* reexport safe */ _layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService),
/* harmony export */   "PlayerService": () => (/* reexport safe */ _player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService),
/* harmony export */   "SeoService": () => (/* reexport safe */ _seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService),
/* harmony export */   "StateService": () => (/* reexport safe */ _state_service__WEBPACK_IMPORTED_MODULE_3__.StateService)
/* harmony export */ });
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.service */ 65915);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.service */ 30553);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ 74169);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ 19366);
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seo.service */ 93285);







/***/ }),

/***/ 65915:
/*!***********************************************!*\
  !*** ./src/app/@core/utils/layout.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5154);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 40943);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;



var LayoutService = /*#__PURE__*/function () {
  function LayoutService() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutService);
    this.layoutSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.layoutSizeChange$ = this.layoutSize$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      refCount: true
    }));
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LayoutService, [{
    key: "changeLayoutSize",
    value: function changeLayoutSize() {
      this.layoutSize$.next();
    }
  }, {
    key: "onChangeLayoutSize",
    value: function onChangeLayoutSize() {
      return this.layoutSizeChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(1));
    }
  }, {
    key: "onSafeChangeLayoutSize",
    value: function onSafeChangeLayoutSize() {
      return this.layoutSizeChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(350));
    }
  }]);
  return LayoutService;
}();
_class = LayoutService;
_class.ɵfac = function LayoutService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 74169:
/*!***********************************************!*\
  !*** ./src/app/@core/utils/player.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerService": () => (/* binding */ PlayerService),
/* harmony export */   "Track": () => (/* binding */ Track)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var Track = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Track() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Track);
});
var PlayerService = /*#__PURE__*/function () {
  function PlayerService() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PlayerService);
    this.playlist = [{
      name: 'Don\'t Wanna Fight',
      artist: 'Alabama Shakes',
      url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
      cover: 'assets/images/cover1.jpg'
    }, {
      name: 'Harder',
      artist: 'Daft Punk',
      url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
      cover: 'assets/images/cover2.jpg'
    }, {
      name: 'Come Together',
      artist: 'Beatles',
      url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
      cover: 'assets/images/cover3.jpg'
    }];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerService, [{
    key: "random",
    value: function random() {
      this.current = Math.floor(Math.random() * this.playlist.length);
      return this.playlist[this.current];
    }
  }, {
    key: "next",
    value: function next() {
      return this.getNextTrack();
    }
  }, {
    key: "prev",
    value: function prev() {
      return this.getPrevTrack();
    }
  }, {
    key: "getNextTrack",
    value: function getNextTrack() {
      if (this.current === this.playlist.length - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
      return this.playlist[this.current];
    }
  }, {
    key: "getPrevTrack",
    value: function getPrevTrack() {
      if (this.current === 0) {
        this.current = this.playlist.length - 1;
      } else {
        this.current--;
      }
      return this.playlist[this.current];
    }
  }]);
  return PlayerService;
}();
_class = PlayerService;
_class.ɵfac = function PlayerService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 93285:
/*!********************************************!*\
  !*** ./src/app/@core/utils/seo.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8929);


var _class;








var SeoService = /*#__PURE__*/function () {
  function SeoService(router, document, platformId) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SeoService);
    this.router = router;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(platformId);
    this.dom = document;
    if (this.isBrowser) {
      this.createCanonicalTag();
    }
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SeoService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }, {
    key: "createCanonicalTag",
    value: function createCanonicalTag() {
      this.linkCanonical = this.dom.createElement('link');
      this.linkCanonical.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(this.linkCanonical);
      this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    }
  }, {
    key: "trackCanonicalChanges",
    value: function trackCanonicalChanges() {
      var _this = this;
      if (!this.isBrowser) {
        return;
      }
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(function () {
        _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
      });
    }
  }, {
    key: "getCanonicalUrl",
    value: function getCanonicalUrl() {
      return this.dom.location.origin + this.dom.location.pathname;
    }
  }]);
  return SeoService;
}();
_class = SeoService;
_class.ɵfac = function SeoService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NB_DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 19366:
/*!**********************************************!*\
  !*** ./src/app/@core/utils/state.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 37451);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 21086);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44290);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);



var _class;





var StateService = /*#__PURE__*/function () {
  function StateService(directionService) {
    var _this = this;
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StateService);
    this.layouts = [{
      name: 'One Column',
      icon: 'nb-layout-default',
      id: 'one-column',
      selected: true
    }, {
      name: 'Two Column',
      icon: 'nb-layout-two-column',
      id: 'two-column'
    }, {
      name: 'Center Column',
      icon: 'nb-layout-centre',
      id: 'center-column'
    }];
    this.sidebars = [{
      name: 'Sidebar at layout start',
      icon: 'nb-layout-sidebar-left',
      id: 'start',
      selected: true
    }, {
      name: 'Sidebar at layout end',
      icon: 'nb-layout-sidebar-right',
      id: 'end'
    }];
    this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.layouts[0]);
    this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.sidebars[0]);
    this.alive = true;
    directionService.onDirectionChange().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(function () {
      return _this.alive;
    })).subscribe(function (direction) {
      return _this.updateSidebarIcons(direction);
    });
    this.updateSidebarIcons(directionService.getDirection());
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(StateService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.alive = false;
    }
  }, {
    key: "updateSidebarIcons",
    value: function updateSidebarIcons(direction) {
      var _this$sidebars = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.sidebars, 2),
        startSidebar = _this$sidebars[0],
        endSidebar = _this$sidebars[1];
      var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutDirection.LTR;
      var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
      var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
      startSidebar.icon = startIconClass;
      endSidebar.icon = endIconClass;
    }
  }, {
    key: "setLayoutState",
    value: function setLayoutState(state) {
      this.layoutState$.next(state);
    }
  }, {
    key: "getLayoutStates",
    value: function getLayoutStates() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.layouts);
    }
  }, {
    key: "onLayoutState",
    value: function onLayoutState() {
      return this.layoutState$.asObservable();
    }
  }, {
    key: "setSidebarState",
    value: function setSidebarState(state) {
      this.sidebarState$.next(state);
    }
  }, {
    key: "getSidebarStates",
    value: function getSidebarStates() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.sidebars);
    }
  }, {
    key: "onSidebarState",
    value: function onSidebarState() {
      return this.sidebarState$.asObservable();
    }
  }]);
  return StateService;
}();
_class = StateService;
_class.ɵfac = function StateService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutDirectionService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 73747:
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var FooterComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterComponent);
});
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-footer"]],
  decls: 6,
  vars: 0,
  consts: [[1, "created-by"], ["href", "https://www.murship.com/", "target", "_blank"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Created with \u2665 by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b")(3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "MUR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " 2023 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  color: var(--text-hint-color);\n  transition: color ease-out 0.1s;\n}\n[_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}"]
});

/***/ }),

/***/ 77842:
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 37451);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8929);
/* harmony import */ var _app_pages_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/shared/notification-dialog/notification-dialog.component */ 57286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_core_data_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-core/data/users */ 63288);
/* harmony import */ var _app_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-core/utils */ 89535);
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.service */ 1655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/security */ 13856);



var _class;










function HeaderComponent_nb_action_14_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-action", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_nb_action_14_Template_nb_action_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.checkMenufunction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "nb-user", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbContextMenu", ctx_r1.userMenu)("onlyPicture", ctx_r1.userPictureOnly)("name", ctx_r1.user == null ? null : ctx_r1.user.name)("picture", ctx_r1.user == null ? null : ctx_r1.user.picture);
  }
}
function HeaderComponent_nb_card_15_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 22)(1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_nb_card_15_ul_5_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.notification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var menu_r7 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nbTooltip", ctx_r6.activeUser.email === "Admin" ? menu_r7.ReqNotificationRemark : menu_r7.NotificationRemark);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.activeUser.email === "Admin" ? menu_r7.ReqNotificationRemark : menu_r7.NotificationRemark, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menu_r7.Time);
  }
}
function HeaderComponent_nb_card_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card", 16, 17)(2, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HeaderComponent_nb_card_15_ul_5_Template, 8, 3, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_nb_card_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.allNotificaion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Show All Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.notificationMenuDetails);
  }
}
var _c0 = function _c0() {
  return ["view", "user"];
};
var HeaderComponent = /*#__PURE__*/function () {
  // @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  // @ViewChild('menu') menu: ElementRef;
  function HeaderComponent(sidebarService, menuService, themeService, userService, dialogService, layoutService, breakpointService, headerService, el, renderer) {
    var _this = this;
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HeaderComponent);
    this.sidebarService = sidebarService;
    this.menuService = menuService;
    this.themeService = themeService;
    this.userService = userService;
    this.dialogService = dialogService;
    this.layoutService = layoutService;
    this.breakpointService = breakpointService;
    this.headerService = headerService;
    this.el = el;
    this.renderer = renderer;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.userPictureOnly = false;
    this.showThemeIcon = false;
    this.isMenuOpen = false;
    this.themes = [{
      value: 'default',
      name: 'Light'
      // primeng:'saga-blue',
    }, {
      value: 'dark',
      name: 'Dark'
      // primeng:'md-dark-indigo',
    }, {
      value: 'cosmic',
      name: 'Cosmic',
      primeng: 'saga-blue'
    }, {
      value: 'corporate',
      name: 'Corporate'
      // primeng:'saga-blue',
    }, {
      value: 'material-light',
      name: 'material-light'
      // primeng:'saga-blue',
    }];

    this.currentTheme = 'default';
    this.userMenu = [{
      title: 'Profile'
    }, {
      title: 'Log out'
    }];
    this.badge = {
      text: '',
      status: 'danger'
    };
    this.renderer.listen('window', 'click', function (e) {
      if (e.target.toString() !== '[object SVGRectElement]' && e.target.toString() !== '[object SVGPathElement]') {
        _this.isMenuOpen = false;
      }
    });
    this.checkMenufunction();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HeaderComponent, [{
    key: "openWithScroll",
    value: function openWithScroll() {
      this.open(true);
    }
  }, {
    key: "open",
    value: function open(hasScroll) {
      this.dialogService.open(_app_pages_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__.NotificationDialogComponent, {
        hasScroll: hasScroll
      });
    }
  }, {
    key: "getUsers",
    value: function getUsers(data) {
      this.user = data;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;
      var currentUser = localStorage.getItem('currentUser');
      this.activeUser = JSON.parse(currentUser);
      if (this.activeUser.email == 'Admin') {
        var newUser = {
          name: 'MUR Admin',
          picture: '../../../../assets/images/MUR_logo.png'
        };
        this.getUsers(newUser);
      } else {
        var _newUser = {
          name: 'MUR Vendor',
          picture: '../../../../assets/images/MUR_logo.png'
        };
        this.getUsers(_newUser);
      }
      this.currentTheme = localStorage.getItem("themeName");
      if (this.currentTheme == "" || this.currentTheme == null) {
        this.currentTheme = "default";
        this.changeTheme(this.currentTheme);
      } else {
        this.changeTheme(this.currentTheme);
      }
      // this.getUsers();
      // this.userService.getUsers()
      //   .pipe(takeUntil(this.destroy$))
      //   .subscribe((users: any) => this.user = users.nick);
      var _this$breakpointServi = this.breakpointService.getBreakpointsMap(),
        xl = _this$breakpointServi.xl;
      this.themeService.onMediaQueryChange().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref) {
        var _ref2 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          currentBreakpoint = _ref2[1];
        return currentBreakpoint.width < xl;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function (isLessThanXl) {
        return _this2.userPictureOnly = isLessThanXl;
      });
      this.themeService.onThemeChange().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref3) {
        var name = _ref3.name;
        return name;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function (themeName) {
        return _this2.currentTheme = themeName;
      });
      //Notification Check hits
      this.getNotification();
      setInterval(function () {
        return _this2.getNotification();
      }, 20000);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }, {
    key: "notification",
    value: function notification() {
      // this.notificationMenu = [
      //   { icon: 'person-outline', title: 'Notification 1', data: { id: 1 } },
      //   { icon: 'person-outline', title: 'Nitesh Comes from Vendor', data: { id: 2 } },
      //   { icon: 'person-outline', title: 'Notification 3', data: { id: 3 } },
      //   { icon: 'person-outline', title: 'Notification 4', data: { id: 4 } },
      //   { title: 'View All Notification', data: { id: 'notification' } },
      // ]
      alert('new men');
    }
  }, {
    key: "changeTheme",
    value: function changeTheme(themeName) {
      var themeValue = themeName;
      if (themeValue === 'dark') {
        this.headerService.switchTheme("md-dark-indigo");
      } else {
        this.headerService.switchTheme("saga-blue");
      }
      localStorage.setItem('themeName', themeName);
      this.themeService.changeTheme(themeName);
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.layoutService.changeLayoutSize();
      return false;
    }
  }, {
    key: "navigateHome",
    value: function navigateHome() {
      this.menuService.navigateHome();
      return false;
    }
    // Logout() {
    //   this.menuService.onItemClick().subscribe((res) => {
    //     console.log(res.item.title, "menu works")
    //     // .... do what you want
    //     if (res.item.title === 'Log out') {
    //       localStorage.removeItem('currentUser');
    //       // Redirect to the login page
    //       this.router.navigate(['/login']);
    //     }
    //   });
    // }
  }, {
    key: "checkMenufunction",
    value: function checkMenufunction() {
      var _this3 = this;
      this.menuService.onItemClick().subscribe(function (res) {
        var selectedItem = res.item;
        // .... do what you want
        if (selectedItem.title === 'Log out') {
          _this3.headerService.Logout(res.item.title);
        } else {
          _this3.headerService.notificationMenu(selectedItem.data.id);
        }
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.getNotification();
    }
  }, {
    key: "getNotification",
    value: function getNotification() {
      var _this4 = this;
      if (this.activeUser.VendorId) {
        this.headerService.getNotificationMenu(this.activeUser.VendorId).subscribe(function (res) {
          if (res.length > 0) {
            _this4.notificationMenuDetails = res;
            _this4.badge.text = res[0].CountNotification;
          }
          console.log(res, _this4.badge, 'notification');
        });
      } else {
        this.headerService.getRequisitionNotification().subscribe(function (res) {
          if (res) {
            _this4.notificationMenuDetails = res;
            _this4.badge.text = res.length;
          }
        });
      }
    }
  }, {
    key: "allNotificaion",
    value: function allNotificaion() {
      this.headerService.moveToAllNotificationMenu(this.activeUser.VendorId);
    }
  }]);
  return HeaderComponent;
}();
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_data_users__WEBPACK_IMPORTED_MODULE_4__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_utils__WEBPACK_IMPORTED_MODULE_5__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbMediaBreakpointsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_6__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-header"]],
  decls: 16,
  vars: 6,
  consts: [[1, "header-container"], [1, "logo-container"], ["href", "#", 1, "sidebar-toggle", 3, "click"], ["icon", "menu-2-outline"], ["href", "#", 1, "logo", 3, "click"], ["src", "../../../../assets/images/MUR_logo.png", "width", "75", "alt", "logo-MUR"], ["size", "small"], ["badgeStatus", "danger", 1, "control-item", "mb-2", "mr-2", 2, "text-align", "start !important", 3, "badgeText"], ["toggleButton", ""], ["icon", "email-outline", 1, "mt-2", "p-0", 2, "cursor", "pointer", 3, "click"], ["icon", "sun-outline", "nbTooltip", "Change to dark theme", "nbTooltipStatus", "info", "nbTooltipPlacement", "left", 1, "control-item", 3, "hidden", "click"], ["icon", "moon-outline", "nbTooltip", "Change to light theme", "nbTooltipStatus", "info", "nbTooltipPlacement", "left", 1, "control-item", 3, "hidden", "click"], ["class", "user-action", 3, "click", 4, "nbIsGranted"], ["class", "notifaction-menu", 4, "ngIf"], [1, "user-action", 3, "click"], [3, "nbContextMenu", "onlyPicture", "name", "picture"], [1, "notifaction-menu"], ["menu", ""], [1, "px-2", "py-3", "mb-0", "text-center"], [1, "", 2, "overflow", "auto", "max-height", "300px"], ["class", "p-0 mb-0", 4, "ngFor", "ngForOf"], ["id", "buttonMenu", "nbButton", "", "status", "primary", 2, "border-radius", "0px !important", 3, "click"], [1, "p-0", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-start", "p-2", "m-0", 3, "click"], ["icon", "person"], [1, "p-2", 3, "nbTooltip"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "nb-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
        return ctx.navigateHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 0)(7, "nb-actions", 6)(8, "nb-action", 7)(9, "div", null, 8)(11, "nb-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_nb_icon_click_11_listener() {
        return ctx.openMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nb-action", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_nb_action_click_12_listener() {
        return ctx.changeTheme("dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "nb-action", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_nb_action_click_13_listener() {
        return ctx.changeTheme("default");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, HeaderComponent_nb_action_14_Template, 2, 4, "nb-action", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, HeaderComponent_nb_card_15_Template, 8, 1, "nb-card", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("badgeText", ctx.badge.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.currentTheme === "dark" ? true : false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.currentTheme === "dark" ? false : true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbIsGranted", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbUserComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbActionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbContextMenuDirective, _nebular_security__WEBPACK_IMPORTED_MODULE_13__.NbIsGrantedDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(var(--sidebar-width) - var(--header-padding));\n}\n[_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n[_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n[_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--text-hint-color);\n}\n[dir=ltr]   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n[_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n[_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--divider-color);\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--divider-color);\n}\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  nb-menu.context-menu {\n  text-align: left;\n}\n\n  nb-menu.context-menu li:nth-child(5) {\n  text-align: center;\n  background: #3366ff;\n  color: white;\n}\n\n  .notifaction-menu {\n  position: absolute;\n  top: 68px;\n  right: 205px;\n  user-select: none;\n  background: var(--layout-background-color);\n  border: 1px solid #c7d8e2;\n  width: 350px;\n  height: auto;\n  display: none;\n  border-bottom: none;\n  border-left: none;\n  border-radius: 3px;\n  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.125), -10px -10px 35px rgba(0, 0, 0, 0.125);\n}\n  .notifaction-menu span {\n  white-space: nowrap;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n  .notifaction-menu h6 {\n  position: sticky;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.125), -10px -10px 35px rgba(0, 0, 0, 0.125);\n  background: var(--card-background-color);\n}\n  .notifaction-menu li {\n  cursor: pointer;\n  border-bottom: 1px solid #d2d2d2;\n  font-weight: 500;\n}"]
});

/***/ }),

/***/ 1655:
/*!************************************************************!*\
  !*** ./src/app/@theme/components/header/header.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderService": () => (/* binding */ HeaderService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;





var HeaderService = /*#__PURE__*/function () {
  function HeaderService(document, router, http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderService);
    this.document = document;
    this.router = router;
    this.http = http;
    this.baseUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderService, [{
    key: "switchTheme",
    value: function switchTheme(theme) {
      var themeLink = this.document.getElementById('app-theme');
      if (themeLink) {
        themeLink.href = theme + '.css';
      }
    }
  }, {
    key: "notificationMenu",
    value: function notificationMenu(menuItems) {
      alert(menuItems);
    }
  }, {
    key: "Logout",
    value: function Logout(menuItems) {
      var currentUser = localStorage.getItem('currentUser');
      var activeUser = JSON.parse(currentUser);
      if (activeUser.email == 'Admin') {
        if (menuItems === 'Log out') {
          localStorage.removeItem('currentUser');
          // Redirect to the login page
          this.router.navigate(['/login']);
        }
      } else {
        if (menuItems === 'Log out') {
          localStorage.removeItem('currentUser');
          // Redirect to the login page
          this.router.navigate(['/vendor-login']);
        }
      }
      // if (menuItems === 'Log out') {
      //   localStorage.removeItem('currentUser');
      //   // Redirect to the login page
      //   this.router.navigate(['/login']);
      // }
    }
  }, {
    key: "getNotificationMenu",
    value: function getNotificationMenu(vendorId) {
      return this.http.get(this.baseUrl + "VendorNotificationListWithVendorId?vendorId=".concat(vendorId));
    }
  }, {
    key: "moveToAllNotificationMenu",
    value: function moveToAllNotificationMenu(vendorId) {
      this.router.navigate(['/pages/notification/' + vendorId]);
    }
  }, {
    key: "getRequisitionNotification",
    value: function getRequisitionNotification() {
      return this.http.get(this.baseUrl + "GetOwnerNotificationList");
    }
  }]);
  return HeaderService;
}();
_class = HeaderService;
_class.ɵfac = function HeaderService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1213:
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent),
/* harmony export */   "SearchInputComponent": () => (/* reexport safe */ _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__.SearchInputComponent),
/* harmony export */   "TinyMCEComponent": () => (/* reexport safe */ _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__.TinyMCEComponent)
/* harmony export */ });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 77842);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 73747);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ 39631);
/* harmony import */ var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-mce/tiny-mce.component */ 49030);





/***/ }),

/***/ 39631:
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInputComponent": () => (/* binding */ SearchInputComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;


var _c0 = ["input"];
var SearchInputComponent = /*#__PURE__*/function () {
  function SearchInputComponent() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchInputComponent);
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.isInputShown = false;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchInputComponent, [{
    key: "showInput",
    value: function showInput() {
      this.isInputShown = true;
      this.input.nativeElement.focus();
    }
  }, {
    key: "hideInput",
    value: function hideInput() {
      this.isInputShown = false;
    }
  }, {
    key: "onInput",
    value: function onInput(val) {
      this.search.emit(val);
    }
  }]);
  return SearchInputComponent;
}();
_class = SearchInputComponent;
_class.ɵfac = function SearchInputComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-search-input"]],
  viewQuery: function SearchInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  outputs: {
    search: "search"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "control-icon", "ion", "ion-ios-search", 3, "click"], ["placeholder", "Type your search request here...", 3, "blur", "input"], ["input", ""]],
  template: function SearchInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchInputComponent_Template_i_click_0_listener() {
        return ctx.showInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function SearchInputComponent_Template_input_blur_1_listener() {
        return ctx.hideInput();
      })("input", function SearchInputComponent_Template_input_input_1_listener($event) {
        return ctx.onInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", !ctx.isInputShown);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]::before {\n  font-size: 2.3rem;\n}\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  margin-left: 1rem;\n  width: 15rem;\n  transition: width 0.2s ease;\n}\n[_nghost-%COMP%]   input.hidden[_ngcontent-%COMP%] {\n  width: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]     search-input input {\n  background: transparent;\n}"]
});

/***/ }),

/***/ 49030:
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinyMCEComponent": () => (/* binding */ TinyMCEComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);


var _class;



var TinyMCEComponent = /*#__PURE__*/function () {
  function TinyMCEComponent(host, locationStrategy) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TinyMCEComponent);
    this.host = host;
    this.locationStrategy = locationStrategy;
    this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TinyMCEComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      tinymce.init({
        target: this.host.nativeElement,
        plugins: ['link', 'paste', 'table'],
        skin_url: "".concat(this.locationStrategy.getBaseHref(), "assets/skins/lightgray"),
        setup: function setup(editor) {
          _this.editor = editor;
          editor.on('keyup', function () {
            _this.editorKeyup.emit(editor.getContent());
          });
        },
        height: '320'
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      tinymce.remove(this.editor);
    }
  }]);
  return TinyMCEComponent;
}();
_class = TinyMCEComponent;
_class.ɵfac = function TinyMCEComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.LocationStrategy));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-tiny-mce"]],
  outputs: {
    editorKeyup: "editorKeyup"
  },
  decls: 0,
  vars: 0,
  template: function TinyMCEComponent_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 38203:
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneColumnLayoutComponent": () => (/* reexport safe */ _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__.OneColumnLayoutComponent),
/* harmony export */   "ThreeColumnsLayoutComponent": () => (/* reexport safe */ _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__.ThreeColumnsLayoutComponent),
/* harmony export */   "TwoColumnsLayoutComponent": () => (/* reexport safe */ _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__.TwoColumnsLayoutComponent)
/* harmony export */ });
/* harmony import */ var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-column/one-column.layout */ 6405);
/* harmony import */ var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-columns/two-columns.layout */ 3247);
/* harmony import */ var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-columns/three-columns.layout */ 60839);




/***/ }),

/***/ 6405:
/*!****************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneColumnLayoutComponent": () => (/* binding */ OneColumnLayoutComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ 77842);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ 73747);


var _class;




var _c0 = [[["nb-menu"]], [["router-outlet"]]];
var _c1 = ["nb-menu", "router-outlet"];
var OneColumnLayoutComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function OneColumnLayoutComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, OneColumnLayoutComponent);
});
_class = OneColumnLayoutComponent;
_class.ɵfac = function OneColumnLayoutComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-one-column-layout"]],
  ngContentSelectors: _c1,
  decls: 9,
  vars: 0,
  consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"]],
  template: function OneColumnLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-layout", 0)(1, "nb-layout-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ngx-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nb-layout-column");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nb-layout-footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngx-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSidebarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  styles: ["[_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: var(--layout-padding-top);\n}"]
});

/***/ }),

/***/ 60839:
/*!**********************************************************************!*\
  !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeColumnsLayoutComponent": () => (/* binding */ ThreeColumnsLayoutComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ 77842);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ 73747);


var _class;




var _c0 = [[["nb-menu"]], [["router-outlet"]]];
var _c1 = ["nb-menu", "router-outlet"];
var ThreeColumnsLayoutComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ThreeColumnsLayoutComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ThreeColumnsLayoutComponent);
});
_class = ThreeColumnsLayoutComponent;
_class.ɵfac = function ThreeColumnsLayoutComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-three-columns-layout"]],
  ngContentSelectors: _c1,
  decls: 11,
  vars: 0,
  consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]],
  template: function ThreeColumnsLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-layout", 0)(1, "nb-layout-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ngx-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nb-layout-column", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-layout-column");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](7, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "nb-layout-column", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nb-layout-footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ngx-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSidebarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  styles: ["[_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: var(--layout-padding-top);\n}"]
});

/***/ }),

/***/ 3247:
/*!******************************************************************!*\
  !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoColumnsLayoutComponent": () => (/* binding */ TwoColumnsLayoutComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ 77842);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ 73747);


var _class;




var _c0 = [[["nb-menu"]], [["router-outlet"]]];
var _c1 = ["nb-menu", "router-outlet"];
var TwoColumnsLayoutComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TwoColumnsLayoutComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TwoColumnsLayoutComponent);
});
_class = TwoColumnsLayoutComponent;
_class.ɵfac = function TwoColumnsLayoutComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-two-columns-layout"]],
  ngContentSelectors: _c1,
  decls: 10,
  vars: 0,
  consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]],
  template: function TwoColumnsLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-layout", 0)(1, "nb-layout-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ngx-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nb-layout-column", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-layout-column");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](7, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nb-layout-footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ngx-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSidebarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  styles: ["[_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: var(--layout-padding-top);\n}"]
});

/***/ }),

/***/ 5180:
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizePipe": () => (/* binding */ CapitalizePipe)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var CapitalizePipe = /*#__PURE__*/function () {
  function CapitalizePipe() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CapitalizePipe);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CapitalizePipe, [{
    key: "transform",
    value: function transform(input) {
      return input && input.length ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase() : input;
    }
  }]);
  return CapitalizePipe;
}();
_class = CapitalizePipe;
_class.ɵfac = function CapitalizePipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "ngxCapitalize",
  type: _class,
  pure: true
});

/***/ }),

/***/ 34896:
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizePipe": () => (/* reexport safe */ _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__.CapitalizePipe),
/* harmony export */   "NumberWithCommasPipe": () => (/* reexport safe */ _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__.NumberWithCommasPipe),
/* harmony export */   "PluralPipe": () => (/* reexport safe */ _plural_pipe__WEBPACK_IMPORTED_MODULE_1__.PluralPipe),
/* harmony export */   "RoundPipe": () => (/* reexport safe */ _round_pipe__WEBPACK_IMPORTED_MODULE_2__.RoundPipe),
/* harmony export */   "TimingPipe": () => (/* reexport safe */ _timing_pipe__WEBPACK_IMPORTED_MODULE_3__.TimingPipe)
/* harmony export */ });
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ 5180);
/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ 94681);
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ 47315);
/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ 36244);
/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-with-commas.pipe */ 34138);






/***/ }),

/***/ 34138:
/*!*********************************************************!*\
  !*** ./src/app/@theme/pipes/number-with-commas.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberWithCommasPipe": () => (/* binding */ NumberWithCommasPipe)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var NumberWithCommasPipe = /*#__PURE__*/function () {
  function NumberWithCommasPipe() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumberWithCommasPipe);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NumberWithCommasPipe, [{
    key: "transform",
    value: function transform(input) {
      return new Intl.NumberFormat().format(input);
    }
  }]);
  return NumberWithCommasPipe;
}();
_class = NumberWithCommasPipe;
_class.ɵfac = function NumberWithCommasPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "ngxNumberWithCommas",
  type: _class,
  pure: true
});

/***/ }),

/***/ 94681:
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluralPipe": () => (/* binding */ PluralPipe)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var PluralPipe = /*#__PURE__*/function () {
  function PluralPipe() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PluralPipe);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PluralPipe, [{
    key: "transform",
    value: function transform(input, label) {
      var pluralLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      input = input || 0;
      return input === 1 ? "".concat(input, " ").concat(label) : pluralLabel ? "".concat(input, " ").concat(pluralLabel) : "".concat(input, " ").concat(label, "s");
    }
  }]);
  return PluralPipe;
}();
_class = PluralPipe;
_class.ɵfac = function PluralPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "ngxPlural",
  type: _class,
  pure: true
});

/***/ }),

/***/ 47315:
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundPipe": () => (/* binding */ RoundPipe)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var RoundPipe = /*#__PURE__*/function () {
  function RoundPipe() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RoundPipe);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RoundPipe, [{
    key: "transform",
    value: function transform(input) {
      return Math.round(input);
    }
  }]);
  return RoundPipe;
}();
_class = RoundPipe;
_class.ɵfac = function RoundPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "ngxRound",
  type: _class,
  pure: true
});

/***/ }),

/***/ 36244:
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimingPipe": () => (/* binding */ TimingPipe)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var TimingPipe = /*#__PURE__*/function () {
  function TimingPipe() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimingPipe);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TimingPipe, [{
    key: "transform",
    value: function transform(time) {
      if (time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return "".concat(this.initZero(minutes)).concat(minutes, ":").concat(this.initZero(seconds)).concat(seconds);
      }
      return '00:00';
    }
  }, {
    key: "initZero",
    value: function initZero(time) {
      return time < 10 ? '0' : '';
    }
  }]);
  return TimingPipe;
}();
_class = TimingPipe;
_class.ɵfac = function TimingPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "timing",
  type: _class,
  pure: true
});

/***/ }),

/***/ 50439:
/*!**************************************************!*\
  !*** ./src/app/@theme/styles/theme.corporate.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORPORATE_THEME": () => (/* binding */ CORPORATE_THEME)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ 23243);

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.CORPORATE_THEME.variables;
var CORPORATE_THEME = {
  name: 'corporate',
  base: 'corporate',
  variables: {
    temperature: {
      arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: baseThemeVariables.bg2,
      thumbBorder: '#ffa36b'
    },
    solar: {
      gradientLeft: baseThemeVariables.primary,
      gradientRight: baseThemeVariables.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: baseThemeVariables.bg2,
      radius: ['80%', '90%']
    },
    traffic: {
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      yAxisSplitLine: 'rgba(0, 0, 0, 0)',
      lineBg: baseThemeVariables.primary,
      lineShadowBlur: '0',
      itemColor: baseThemeVariables.border4,
      itemBorderColor: baseThemeVariables.border4,
      itemEmphasisBorderColor: baseThemeVariables.primaryLight,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: baseThemeVariables.bg,
      gradTo: baseThemeVariables.bg
    },
    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: baseThemeVariables.primary,
      lineGradTo: baseThemeVariables.primary,
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: 'rgba(0, 0, 0, 0)',
      areaGradTo: 'rgba(0, 0, 0, 0)',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
    },
    bubbleMap: {
      titleColor: baseThemeVariables.fgText,
      areaColor: baseThemeVariables.bg4,
      areaHoverColor: baseThemeVariables.fgHighlight,
      areaBorderColor: baseThemeVariables.border5
    },
    profitBarAnimationEchart: {
      textColor: baseThemeVariables.fgText,
      firstAnimationBarColor: baseThemeVariables.primary,
      secondAnimationBarColor: baseThemeVariables.success,
      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: baseThemeVariables.separator,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    },
    trafficBarEchart: {
      gradientFrom: baseThemeVariables.warningLight,
      gradientTo: baseThemeVariables.warning,
      shadow: baseThemeVariables.warningLight,
      shadowBlur: '0',
      axisTextColor: baseThemeVariables.fgText,
      axisFontSize: '12',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal'
    },
    countryOrders: {
      countryBorderColor: baseThemeVariables.border4,
      countryFillColor: baseThemeVariables.bg4,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: baseThemeVariables.primary,
      hoveredCountryFillColor: baseThemeVariables.primaryLight,
      hoveredCountryBorderWidth: '1',
      chartAxisLineColor: baseThemeVariables.border4,
      chartAxisTextColor: baseThemeVariables.fg,
      chartAxisFontSize: '16',
      chartGradientTo: baseThemeVariables.primary,
      chartGradientFrom: baseThemeVariables.primaryLight,
      chartAxisSplitLine: baseThemeVariables.separator,
      chartShadowLineColor: baseThemeVariables.primaryLight,
      chartLineBottomShadowColor: baseThemeVariables.primary,
      chartInnerLineColor: baseThemeVariables.bg2
    },
    echarts: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.fgText,
      splitLineColor: baseThemeVariables.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: baseThemeVariables.primary,
      areaOpacity: '0.7'
    },
    chartjs: {
      axisLineColor: baseThemeVariables.separator,
      textColor: baseThemeVariables.fgText
    },
    orders: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      // first line
      firstAreaGradFrom: baseThemeVariables.bg3,
      firstAreaGradTo: baseThemeVariables.bg3,
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      // second line
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
      secondAreaGradTo: 'rgba(0, 0, 0, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      // third line
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
      thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
    },
    profit: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.border4,
      splitLineColor: baseThemeVariables.separator,
      areaOpacity: '1',
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      // first bar
      firstLineGradFrom: baseThemeVariables.bg3,
      firstLineGradTo: baseThemeVariables.bg3,
      firstLineShadow: 'rgba(0, 0, 0, 0)',
      // second bar
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondLineShadow: 'rgba(0, 0, 0, 0)',
      // third bar
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.success,
      thirdLineShadow: 'rgba(0, 0, 0, 0)'
    },
    orderProfitLegend: {
      firstItem: baseThemeVariables.success,
      secondItem: baseThemeVariables.primary,
      thirdItem: baseThemeVariables.bg3
    },
    visitors: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '1',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: baseThemeVariables.primary,
      areaGradTo: baseThemeVariables.primaryLight,
      innerLineStyle: 'solid',
      innerLineWidth: '1',
      innerAreaGradFrom: baseThemeVariables.success,
      innerAreaGradTo: baseThemeVariables.success
    },
    visitorsLegend: {
      firstIcon: baseThemeVariables.success,
      secondIcon: baseThemeVariables.primary
    },
    visitorsPie: {
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['65%', '90%'],
      secondPieGradientLeft: baseThemeVariables.warning,
      secondPieGradientRight: baseThemeVariables.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['63%', '92%'],
      shadowOffsetX: '-4',
      shadowOffsetY: '-4'
    },
    visitorsPieLegend: {
      firstSection: baseThemeVariables.warning,
      secondSection: baseThemeVariables.success
    },
    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],
      fontSize: '22',
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieGradientLeft: baseThemeVariables.primary,
      secondPieGradientRight: baseThemeVariables.primary,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      thirdPieGradientLeft: baseThemeVariables.warning,
      thirdPieGradientRight: baseThemeVariables.warning,
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
    },
    earningLine: {
      gradFrom: baseThemeVariables.primary,
      gradTo: baseThemeVariables.primary,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    }
  }
};

/***/ }),

/***/ 25838:
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COSMIC_THEME": () => (/* binding */ COSMIC_THEME)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ 23243);

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.COSMIC_THEME.variables;
var COSMIC_THEME = {
  name: 'cosmic',
  base: 'cosmic',
  variables: {
    temperature: {
      arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: '#ffffff',
      thumbBorder: '#ffffff'
    },
    solar: {
      gradientLeft: baseThemeVariables.primary,
      gradientRight: baseThemeVariables.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: baseThemeVariables.bg2,
      radius: ['70%', '90%']
    },
    traffic: {
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      yAxisSplitLine: baseThemeVariables.separator,
      lineBg: baseThemeVariables.border2,
      lineShadowBlur: '14',
      itemColor: baseThemeVariables.border2,
      itemBorderColor: baseThemeVariables.border2,
      itemEmphasisBorderColor: baseThemeVariables.primary,
      shadowLineDarkBg: baseThemeVariables.border3,
      shadowLineShadow: baseThemeVariables.border3,
      gradFrom: baseThemeVariables.bg,
      gradTo: baseThemeVariables.bg2
    },
    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.border2,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: baseThemeVariables.success,
      lineGradTo: baseThemeVariables.warning,
      lineShadow: baseThemeVariables.bg4,
      areaGradFrom: baseThemeVariables.bg2,
      areaGradTo: baseThemeVariables.bg3,
      shadowLineDarkBg: baseThemeVariables.bg3
    },
    bubbleMap: {
      titleColor: baseThemeVariables.fgText,
      areaColor: baseThemeVariables.bg4,
      areaHoverColor: baseThemeVariables.fgHighlight,
      areaBorderColor: baseThemeVariables.border5
    },
    profitBarAnimationEchart: {
      textColor: baseThemeVariables.fgText,
      firstAnimationBarColor: baseThemeVariables.primary,
      secondAnimationBarColor: baseThemeVariables.success,
      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: baseThemeVariables.border2,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    },
    trafficBarEchart: {
      gradientFrom: baseThemeVariables.warningLight,
      gradientTo: baseThemeVariables.warning,
      shadow: baseThemeVariables.warningLight,
      shadowBlur: '5',
      axisTextColor: baseThemeVariables.fgText,
      axisFontSize: '12',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal'
    },
    countryOrders: {
      countryBorderColor: baseThemeVariables.border4,
      countryFillColor: baseThemeVariables.bg3,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: baseThemeVariables.primary,
      hoveredCountryFillColor: baseThemeVariables.primaryLight,
      hoveredCountryBorderWidth: '1',
      chartAxisLineColor: baseThemeVariables.border4,
      chartAxisTextColor: baseThemeVariables.fg,
      chartAxisFontSize: '16',
      chartGradientTo: baseThemeVariables.primary,
      chartGradientFrom: baseThemeVariables.primaryLight,
      chartAxisSplitLine: baseThemeVariables.separator,
      chartShadowLineColor: baseThemeVariables.primaryLight,
      chartLineBottomShadowColor: baseThemeVariables.primary,
      chartInnerLineColor: baseThemeVariables.bg2
    },
    echarts: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.fgText,
      splitLineColor: baseThemeVariables.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: baseThemeVariables.primary,
      areaOpacity: '1'
    },
    chartjs: {
      axisLineColor: baseThemeVariables.separator,
      textColor: baseThemeVariables.fgText
    },
    orders: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      // first line
      firstAreaGradFrom: baseThemeVariables.bg2,
      firstAreaGradTo: baseThemeVariables.bg2,
      firstShadowLineDarkBg: baseThemeVariables.bg2,
      // second line
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
      secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
      secondShadowLineDarkBg: baseThemeVariables.primary,
      // third line
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
      thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
      thirdShadowLineDarkBg: baseThemeVariables.success
    },
    profit: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.border4,
      splitLineColor: baseThemeVariables.separator,
      areaOpacity: '1',
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      // first bar
      firstLineGradFrom: baseThemeVariables.bg2,
      firstLineGradTo: baseThemeVariables.bg2,
      firstLineShadow: 'rgba(0, 0, 0, 0)',
      // second bar
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondLineShadow: 'rgba(0, 0, 0, 0)',
      // third bar
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdLineShadow: 'rgba(0, 0, 0, 0)'
    },
    orderProfitLegend: {
      firstItem: baseThemeVariables.success,
      secondItem: baseThemeVariables.primary,
      thirdItem: baseThemeVariables.bg2
    },
    visitors: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '1',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: baseThemeVariables.primary,
      areaGradTo: baseThemeVariables.primaryLight,
      innerLineStyle: 'solid',
      innerLineWidth: '1',
      innerAreaGradFrom: baseThemeVariables.success,
      innerAreaGradTo: baseThemeVariables.success
    },
    visitorsLegend: {
      firstIcon: baseThemeVariables.success,
      secondIcon: baseThemeVariables.primary
    },
    visitorsPie: {
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.successLight,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],
      secondPieGradientLeft: baseThemeVariables.warning,
      secondPieGradientRight: baseThemeVariables.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '95%'],
      shadowOffsetX: '0',
      shadowOffsetY: '3'
    },
    visitorsPieLegend: {
      firstSection: baseThemeVariables.warning,
      secondSection: baseThemeVariables.success
    },
    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],
      fontSize: '22',
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieGradientLeft: baseThemeVariables.primary,
      secondPieGradientRight: baseThemeVariables.primary,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      thirdPieGradientLeft: baseThemeVariables.warning,
      thirdPieGradientRight: baseThemeVariables.warning,
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
    },
    earningLine: {
      gradFrom: baseThemeVariables.primary,
      gradTo: baseThemeVariables.primary,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    }
  }
};

/***/ }),

/***/ 95497:
/*!*********************************************!*\
  !*** ./src/app/@theme/styles/theme.dark.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DARK_THEME": () => (/* binding */ DARK_THEME)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ 23243);

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME.variables;
var DARK_THEME = {
  name: 'dark',
  base: 'dark',
  variables: {
    temperature: {
      arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: baseThemeVariables.bg2,
      thumbBorder: baseThemeVariables.primary
    },
    solar: {
      gradientLeft: baseThemeVariables.primary,
      gradientRight: baseThemeVariables.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: baseThemeVariables.bg2,
      radius: ['80%', '90%']
    },
    traffic: {
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      yAxisSplitLine: baseThemeVariables.separator,
      lineBg: baseThemeVariables.border4,
      lineShadowBlur: '1',
      itemColor: baseThemeVariables.border4,
      itemBorderColor: baseThemeVariables.border4,
      itemEmphasisBorderColor: baseThemeVariables.primary,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: baseThemeVariables.bg2,
      gradTo: baseThemeVariables.bg2
    },
    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: baseThemeVariables.primary,
      lineGradTo: baseThemeVariables.primary,
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: baseThemeVariables.bg2,
      areaGradTo: baseThemeVariables.bg2,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
    },
    bubbleMap: {
      titleColor: baseThemeVariables.fgText,
      areaColor: baseThemeVariables.bg4,
      areaHoverColor: baseThemeVariables.fgHighlight,
      areaBorderColor: baseThemeVariables.border5
    },
    profitBarAnimationEchart: {
      textColor: baseThemeVariables.fgText,
      firstAnimationBarColor: baseThemeVariables.primary,
      secondAnimationBarColor: baseThemeVariables.success,
      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: baseThemeVariables.separator,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    },
    trafficBarEchart: {
      gradientFrom: baseThemeVariables.warningLight,
      gradientTo: baseThemeVariables.warning,
      shadow: baseThemeVariables.warningLight,
      shadowBlur: '0',
      axisTextColor: baseThemeVariables.fgText,
      axisFontSize: '12',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal'
    },
    countryOrders: {
      countryBorderColor: baseThemeVariables.border4,
      countryFillColor: baseThemeVariables.bg3,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: baseThemeVariables.primary,
      hoveredCountryFillColor: baseThemeVariables.primaryLight,
      hoveredCountryBorderWidth: '1',
      chartAxisLineColor: baseThemeVariables.border4,
      chartAxisTextColor: baseThemeVariables.fg,
      chartAxisFontSize: '16',
      chartGradientTo: baseThemeVariables.primary,
      chartGradientFrom: baseThemeVariables.primaryLight,
      chartAxisSplitLine: baseThemeVariables.separator,
      chartShadowLineColor: baseThemeVariables.primaryLight,
      chartLineBottomShadowColor: baseThemeVariables.primary,
      chartInnerLineColor: baseThemeVariables.bg2
    },
    echarts: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.fgText,
      splitLineColor: baseThemeVariables.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: baseThemeVariables.primary,
      areaOpacity: '0.7'
    },
    chartjs: {
      axisLineColor: baseThemeVariables.separator,
      textColor: baseThemeVariables.fgText
    },
    orders: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      // first line
      firstAreaGradFrom: baseThemeVariables.bg3,
      firstAreaGradTo: baseThemeVariables.bg3,
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      // second line
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
      secondAreaGradTo: 'rgba(51, 102, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      // third line
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
      thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
    },
    profit: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.border4,
      splitLineColor: baseThemeVariables.separator,
      areaOpacity: '1',
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      // first bar
      firstLineGradFrom: baseThemeVariables.bg3,
      firstLineGradTo: baseThemeVariables.bg3,
      firstLineShadow: 'rgba(0, 0, 0, 0)',
      // second bar
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondLineShadow: 'rgba(0, 0, 0, 0)',
      // third bar
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdLineShadow: 'rgba(0, 0, 0, 0)'
    },
    orderProfitLegend: {
      firstItem: baseThemeVariables.success,
      secondItem: baseThemeVariables.primary,
      thirdItem: baseThemeVariables.bg3
    },
    visitors: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: baseThemeVariables.primary,
      areaGradTo: baseThemeVariables.primaryLight,
      innerLineStyle: 'solid',
      innerLineWidth: '1',
      innerAreaGradFrom: baseThemeVariables.success,
      innerAreaGradTo: baseThemeVariables.success
    },
    visitorsLegend: {
      firstIcon: baseThemeVariables.success,
      secondIcon: baseThemeVariables.primary
    },
    visitorsPie: {
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],
      secondPieGradientLeft: baseThemeVariables.warning,
      secondPieGradientRight: baseThemeVariables.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '97%'],
      shadowOffsetX: '0',
      shadowOffsetY: '0'
    },
    visitorsPieLegend: {
      firstSection: baseThemeVariables.warning,
      secondSection: baseThemeVariables.success
    },
    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],
      fontSize: '22',
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieGradientLeft: baseThemeVariables.primary,
      secondPieGradientRight: baseThemeVariables.primary,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      thirdPieGradientLeft: baseThemeVariables.warning,
      thirdPieGradientRight: baseThemeVariables.warning,
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
    },
    earningLine: {
      gradFrom: baseThemeVariables.primary,
      gradTo: baseThemeVariables.primary,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    }
  }
};

/***/ }),

/***/ 20546:
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_THEME": () => (/* binding */ DEFAULT_THEME)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ 23243);

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME.variables;
var DEFAULT_THEME = {
  name: 'default',
  base: 'default',
  variables: {
    temperature: {
      arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: baseThemeVariables.bg2,
      thumbBorder: baseThemeVariables.primary
    },
    solar: {
      gradientLeft: baseThemeVariables.primary,
      gradientRight: baseThemeVariables.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: baseThemeVariables.bg2,
      radius: ['80%', '90%']
    },
    traffic: {
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      yAxisSplitLine: baseThemeVariables.separator,
      lineBg: baseThemeVariables.border4,
      lineShadowBlur: '1',
      itemColor: baseThemeVariables.border4,
      itemBorderColor: baseThemeVariables.border4,
      itemEmphasisBorderColor: baseThemeVariables.primary,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: baseThemeVariables.bg2,
      gradTo: baseThemeVariables.bg2
    },
    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: baseThemeVariables.primary,
      lineGradTo: baseThemeVariables.primary,
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: baseThemeVariables.bg2,
      areaGradTo: baseThemeVariables.bg2,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
    },
    bubbleMap: {
      titleColor: baseThemeVariables.fgText,
      areaColor: baseThemeVariables.bg4,
      areaHoverColor: baseThemeVariables.fgHighlight,
      areaBorderColor: baseThemeVariables.border5
    },
    profitBarAnimationEchart: {
      textColor: baseThemeVariables.fgText,
      firstAnimationBarColor: baseThemeVariables.primary,
      secondAnimationBarColor: baseThemeVariables.success,
      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: baseThemeVariables.separator,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    },
    trafficBarEchart: {
      gradientFrom: baseThemeVariables.warningLight,
      gradientTo: baseThemeVariables.warning,
      shadow: baseThemeVariables.warningLight,
      shadowBlur: '0',
      axisTextColor: baseThemeVariables.fgText,
      axisFontSize: '12',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal'
    },
    countryOrders: {
      countryBorderColor: baseThemeVariables.border4,
      countryFillColor: baseThemeVariables.bg3,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: baseThemeVariables.primary,
      hoveredCountryFillColor: baseThemeVariables.primaryLight,
      hoveredCountryBorderWidth: '1',
      chartAxisLineColor: baseThemeVariables.border4,
      chartAxisTextColor: baseThemeVariables.fg,
      chartAxisFontSize: '16',
      chartGradientTo: baseThemeVariables.primary,
      chartGradientFrom: baseThemeVariables.primaryLight,
      chartAxisSplitLine: baseThemeVariables.separator,
      chartShadowLineColor: baseThemeVariables.primaryLight,
      chartLineBottomShadowColor: baseThemeVariables.primary,
      chartInnerLineColor: baseThemeVariables.bg2
    },
    echarts: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.fgText,
      splitLineColor: baseThemeVariables.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: baseThemeVariables.primary,
      areaOpacity: '0.7'
    },
    chartjs: {
      axisLineColor: baseThemeVariables.separator,
      textColor: baseThemeVariables.fgText
    },
    orders: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      // first line
      firstAreaGradFrom: baseThemeVariables.bg3,
      firstAreaGradTo: baseThemeVariables.bg3,
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      // second line
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
      secondAreaGradTo: 'rgba(51, 102, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      // third line
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
      thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
    },
    profit: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.border4,
      splitLineColor: baseThemeVariables.separator,
      areaOpacity: '1',
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      // first bar
      firstLineGradFrom: baseThemeVariables.bg3,
      firstLineGradTo: baseThemeVariables.bg3,
      firstLineShadow: 'rgba(0, 0, 0, 0)',
      // second bar
      secondLineGradFrom: baseThemeVariables.primary,
      secondLineGradTo: baseThemeVariables.primary,
      secondLineShadow: 'rgba(0, 0, 0, 0)',
      // third bar
      thirdLineGradFrom: baseThemeVariables.success,
      thirdLineGradTo: baseThemeVariables.successLight,
      thirdLineShadow: 'rgba(0, 0, 0, 0)'
    },
    orderProfitLegend: {
      firstItem: baseThemeVariables.success,
      secondItem: baseThemeVariables.primary,
      thirdItem: baseThemeVariables.bg3
    },
    visitors: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '1',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',
      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,
      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(0, 0, 0, 0)',
      areaGradFrom: baseThemeVariables.primary,
      areaGradTo: baseThemeVariables.primaryLight,
      innerLineStyle: 'solid',
      innerLineWidth: '1',
      innerAreaGradFrom: baseThemeVariables.success,
      innerAreaGradTo: baseThemeVariables.success
    },
    visitorsLegend: {
      firstIcon: baseThemeVariables.success,
      secondIcon: baseThemeVariables.primary
    },
    visitorsPie: {
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],
      secondPieGradientLeft: baseThemeVariables.warning,
      secondPieGradientRight: baseThemeVariables.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '97%'],
      shadowOffsetX: '0',
      shadowOffsetY: '0'
    },
    visitorsPieLegend: {
      firstSection: baseThemeVariables.warning,
      secondSection: baseThemeVariables.success
    },
    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],
      fontSize: '22',
      firstPieGradientLeft: baseThemeVariables.success,
      firstPieGradientRight: baseThemeVariables.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieGradientLeft: baseThemeVariables.primary,
      secondPieGradientRight: baseThemeVariables.primary,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      thirdPieGradientLeft: baseThemeVariables.warning,
      thirdPieGradientRight: baseThemeVariables.warning,
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
    },
    earningLine: {
      gradFrom: baseThemeVariables.primary,
      gradTo: baseThemeVariables.primary,
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
    }
  }
};

/***/ }),

/***/ 80268:
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": () => (/* binding */ ThemeModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 45479);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/eva-icons */ 98405);
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/security */ 13856);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 1213);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes */ 34896);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts */ 38203);
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/theme.default */ 20546);
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/theme.cosmic */ 25838);
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/theme.corporate */ 50439);
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.dark */ 95497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94650);



var _class;












var NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbLayoutModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSearchModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSidebarModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbContextMenuModule, _nebular_security__WEBPACK_IMPORTED_MODULE_11__.NbSecurityModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_12__.NbEvaIconsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule];
var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_3__.SearchInputComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TinyMCEComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.OneColumnLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.ThreeColumnsLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.TwoColumnsLayoutComponent];
var PIPES = [_pipes__WEBPACK_IMPORTED_MODULE_4__.CapitalizePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PluralPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.TimingPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.NumberWithCommasPipe];
var ThemeModule = /*#__PURE__*/function () {
  function ThemeModule() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ThemeModule);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ThemeModule, null, [{
    key: "forRoot",
    value: function forRoot() {
      return {
        ngModule: ThemeModule,
        providers: (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbThemeModule.forRoot({
          name: 'default'
        }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_THEME, _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_7__.COSMIC_THEME, _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_8__.CORPORATE_THEME, _styles_theme_dark__WEBPACK_IMPORTED_MODULE_9__.DARK_THEME]).providers)
      };
    }
  }]);
  return ThemeModule;
}();
_class = ThemeModule;
_class.ɵfac = function ThemeModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, NB_MODULES, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ThemeModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_3__.SearchInputComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TinyMCEComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.OneColumnLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.ThreeColumnsLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.TwoColumnsLayoutComponent, _pipes__WEBPACK_IMPORTED_MODULE_4__.CapitalizePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PluralPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.TimingPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.NumberWithCommasPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbLayoutModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSearchModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSidebarModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbContextMenuModule, _nebular_security__WEBPACK_IMPORTED_MODULE_11__.NbSecurityModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_12__.NbEvaIconsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _pipes__WEBPACK_IMPORTED_MODULE_4__.CapitalizePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PluralPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.TimingPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.NumberWithCommasPipe, _components__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_3__.SearchInputComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TinyMCEComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.OneColumnLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.ThreeColumnsLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_5__.TwoColumnsLayoutComponent]
  });
})();

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ 29766);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ 78146);
/* harmony import */ var _auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/auth.guard */ 25167);
/* harmony import */ var _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor-login/vendor-login.component */ 73805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;







// import { AuthGuardReverseGuard } from './auth/login/auth-guard-reverse.guard';
var routes = [{
  path: 'pages',
  canActivate: [_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(function (m) {
      return m.PagesModule;
    });
  }
}, {
  path: 'auth',
  // canActivate: [AuthGuardReverseGuard],
  component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbAuthComponent,
  children: [{
    path: '',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbLoginComponent
  }, {
    path: 'login',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbLoginComponent
  }, {
    path: 'register',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbRegisterComponent
  }, {
    path: 'logout',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbLogoutComponent
  }, {
    path: 'request-password',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbRequestPasswordComponent
  }, {
    path: 'reset-password',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbResetPasswordComponent
  }]
}, {
  path: '',
  redirectTo: 'pages',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: 'vendor-login',
  component: _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_4__.VendorLoginComponent
}];
var config = {
  useHash: false
};
var AppRoutingModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, config), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;



var AppComponent = /*#__PURE__*/function () {
  function AppComponent(titleService, router) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);
    this.titleService = titleService;
    this.router = router;
    this.title = 'MUR_FrontEnd';
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log(this.router.url);
      var currentTitle = localStorage.getItem('title');
      if (currentTitle) {
        this.titleService.setTitle(currentTitle);
      }
    }
  }]);
  return AppComponent;
}();
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-app"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 84934);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@core/core.module */ 43127);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@theme/theme.module */ 80268);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nebular/auth */ 29766);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ 78146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 82210);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 65765);
/* harmony import */ var _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor-login/vendor-login.component */ 73805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;





















// import {  MessageService } from 'primeng/api';
var AppModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
  console.log("App Module");
});
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.HashLocationStrategy
  }, {
    provide: 'useHash',
    useValue: false
  }
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: CacheInterceptor,
  //   multi: true
  // }
  ],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbSidebarModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbMenuModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDialogModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDatepickerModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbWindowModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbToastrModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbChatModule.forRoot({
    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
  }), _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule.forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule.forRoot(), _nebular_auth__WEBPACK_IMPORTED_MODULE_17__.NbAuthModule.forRoot({
    strategies: [_nebular_auth__WEBPACK_IMPORTED_MODULE_17__.NbPasswordAuthStrategy.setup({
      name: 'email'
    })]
  }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_7__.VendorLoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbSidebarModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDialogModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbWindowModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbToastrModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbChatModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _nebular_auth__WEBPACK_IMPORTED_MODULE_17__.NbAuthModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule]
  });
})();

/***/ }),

/***/ 25167:
/*!******************************************!*\
  !*** ./src/app/auth/login/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var AuthGuard = /*#__PURE__*/function () {
  function AuthGuard(router) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthGuard);
    this.router = router;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthGuard, [{
    key: "canActivate",
    value: function canActivate() {
      var currentUser = localStorage.getItem('currentUser');
      var activeUser = JSON.parse(currentUser);
      if (activeUser) {
        if (activeUser.email == 'Admin') {
          if (currentUser) {
            return true; // Allow access to the protected modules
          } else {
            this.router.navigate(['/login']);
            return false; // Redirect to the login page
          }
        } else {
          if (currentUser) {
            // this.router.navigate(['/pages/inventory/requisition']);
            return true; // Allow access to the protected modules
          } else {
            this.router.navigate(['/vendor-login']);
            return false; // Redirect to the login page
          }
        }
      } else {
        this.router.navigate(['/login']);
        return false; // Redirect to the login page
      }
    }
  }]);
  return AuthGuard;
}();
_class = AuthGuard;
_class.ɵfac = function AuthGuard_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ 29766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);


var _class;





var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(authService, router, titleService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginComponent);
    this.authService = authService;
    this.router = router;
    this.titleService = titleService;
    this.titleService.setTitle('MUR Office-Site');
    localStorage.setItem('title', 'MUR Office-Site');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // Check if the user is already logged in
      var currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        this.router.navigate(['/pages']); // Redirect to the dashboard if logged in
      }
    }
  }, {
    key: "login",
    value: function login() {
      // Perform authentication logic, e.g., calling an API or validating credentials
      // Simulate a successful login for demonstration purposes
      var user = {
        email: this.email,
        password: this.password
      };
      if (user.email === 'Admin' && user.password === 'admin@') {
        // Store the authenticated user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to a protected route or any desired location
        this.router.navigate(['/pages']);
      } else {
        alert("Invalid Record");
        console.log('Invalid credentials');
      }
    }
  }]);
  return LoginComponent;
}();
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__.NbAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-login"]],
  decls: 19,
  vars: 2,
  consts: [[1, "container", "col-8"], [1, "row", "col-12", "justify-content-center", "align-items-center", "vh-100"], [1, "col-6", "d-flex", "justify-content-center", "align-items-center", "p-5", 2, "box-shadow", "0px 3px 6px rgba(255,255,255,0.45), 0px 3px 6px rgba(94,104,121,0.3)"], [1, "col-11"], [3, "ngSubmit"], [1, "text-center", "col-12", 2, "font-weight", "100"], [1, "form-outline", "mb-4"], ["for", "form2Example1", 1, "form-label"], ["type", "email", "name", "email", "placeholder", "User Name", "required", "", "id", "form2Example1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "form2Example2", 1, "form-label"], ["type", "password", "id", "form2Example2", "name", "Password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mb-4"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-4"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "MUR LOGIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: [".card[_ngcontent-%COMP%] {\n  width: 50vw;\n}"]
});

/***/ }),

/***/ 57286:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/shared/notification-dialog/notification-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDialogComponent": () => (/* binding */ NotificationDialogComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;


var NotificationDialogComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NotificationDialogComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotificationDialogComponent);
});
_class = NotificationDialogComponent;
_class.ɵfac = function NotificationDialogComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-notification-dialog"]],
  decls: 5,
  vars: 0,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-6", "col-9"]],
  template: function NotificationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "All Notifications Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent]
});

/***/ }),

/***/ 73805:
/*!********************************************************!*\
  !*** ./src/app/vendor-login/vendor-login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorLoginComponent": () => (/* binding */ VendorLoginComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ 29766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);


var _class;







var VendorLoginComponent = /*#__PURE__*/function () {
  function VendorLoginComponent(titleService, authService, router, http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VendorLoginComponent);
    this.titleService = titleService;
    this.authService = authService;
    this.router = router;
    this.http = http;
    this.baseUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VendorLoginComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.titleService.setTitle('MUR Vendor-Site');
      localStorage.setItem('title', 'MUR Vendor-Site');
      var currentUser = localStorage.getItem('currentUser');
      // if (currentUser) {
      //   this.router.navigate(['/pages']);
      // }
    }
  }, {
    key: "Vendorlogin",
    value: function Vendorlogin() {
      var _this = this;
      var user = {
        email: this.email,
        password: this.password
      };
      // this.http.get(`${this.baseUrl}VendorLoginJWT?username=${user.email}&password=${user.password}`).subscribe(res=>{
      this.http.get("".concat(this.baseUrl, "/VendorLogin?username=").concat(user.email, "&password=").concat(user.password)).subscribe(function (res) {
        if (res !== null) {
          localStorage.setItem('currentUser', JSON.stringify(res));
          _this.router.navigate(['/pages/inventory/vendor-requisition']);
        }
        console.log(res, "value if veb");
      });
      // this.http.get(this.baseUrl +` VendorLogin?username=${user.email}&password=${user.password}`).subscribe(res=>{
      //   console.log(res,"value if veb")
      // })
      // console.log(user.email,user.password,'vendorLoginDetails')
      // if (user.email === 'Admin' && user.password === 'Passw0rd') {
      //   localStorage.setItem('currentUser', JSON.stringify(user));
      //   this.router.navigate(['/pages']);
      // } else {
      //   alert("Invalid Record")
      //   console.log('Invalid credentials');
      // }
    }
  }]);
  return VendorLoginComponent;
}();
_class = VendorLoginComponent;
_class.ɵfac = function VendorLoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_5__.NbAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-vendor-login"]],
  decls: 19,
  vars: 2,
  consts: [[1, "container", "col-8"], [1, "row", "col-12", "justify-content-center", "align-items-center", "vh-100"], [1, "col-6", "d-flex", "justify-content-center", "align-items-center", "p-5", 2, "box-shadow", "0px 3px 6px rgba(255,255,255,0.45), 0px 3px 6px rgba(94,104,121,0.3)"], [1, "col-11"], [3, "ngSubmit"], [1, "text-center", "m-3", "col-12", 2, "font-weight", "100"], [1, "form-outline", "mb-4"], ["for", "form2Example1", 1, "form-label"], ["type", "email", "name", "email", "placeholder", "User Name", "required", "", "id", "form2Example1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "form2Example2", 1, "form-label"], ["type", "password", "id", "form2Example2", "name", "Password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mb-4"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-4"]],
  template: function VendorLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function VendorLoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.Vendorlogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "VENDOR LOGIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VendorLoginComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VendorLoginComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm]
});

/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var environment = {
  production: true,
  //Develop URLs
  //  baseApiUrl: 'http://localhost:59948/',
  // basePDFUrl: 'http://localhost:59948/',
  baseApplicationUrl: 'https://api.veslink.com/',
  //Client URLs
  //   baseApiUrl: 'https://cleanx7.murship.com/API/',
  //  basePDFUrl: 'https://cleanx7.murship.com/API/',
  // baseApplicationUrl: 'https://api.veslink.com/',
  //Local URL
  //For FTP URL
  baseApiUrl: 'http://dev-softwiz-002:9078/',
  basePDFUrl: 'http://dev-softwiz-002:9078/'
  // baseApiUrl: 'http://mur-api.clientportal.net.in/',
  // basePDFUrl: 'http://mur-api.clientportal.net.in/',
};

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/// <reference types="@angular/localize" />

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
  return console.error(err);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(80020), __webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);