"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["common"],{

/***/ 6200:
/*!***********************************************************************!*\
  !*** ./src/app/pages/settings/applicability/applicability.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicabilityService": () => (/* binding */ ApplicabilityService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var ApplicabilityService = /*#__PURE__*/function () {
  function ApplicabilityService(http) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApplicabilityService);
    this.http = http;
    this.applicabilityUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ApplicabilityService, [{
    key: "addApplicabilityDetail",
    value: function addApplicabilityDetail(applicabilityData) {
      return this.http.post(this.applicabilityUrl + 'InsertApplicable', applicabilityData);
    }
  }, {
    key: "updateApplicabilityDetail",
    value: function updateApplicabilityDetail(applicabilityData) {
      ////debugger;
      return this.http.put(this.applicabilityUrl + 'UpdateApplicable', applicabilityData);
    }
  }, {
    key: "deleteApplicability",
    value: function deleteApplicability(applicabilityData) {
      ////debugger;
      return this.http["delete"](this.applicabilityUrl + 'DeleteApplicable/' + applicabilityData.ApplicableId);
    }
    //  getApplicabilityList() {
    //    return this.http.get(this.applicabilityUrl+'ApplicableList')
    //  }
  }, {
    key: "getApplicabilityList",
    value: function getApplicabilityList(cpage, nRows, filter) {
      return this.http.get(this.applicabilityUrl + "ApplicableList?c=".concat(cpage, "&p=").concat(nRows, "&filter=").concat(filter));
    }
  }]);
  return ApplicabilityService;
}();
_class = ApplicabilityService;
_class.ɵfac = function ApplicabilityService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);