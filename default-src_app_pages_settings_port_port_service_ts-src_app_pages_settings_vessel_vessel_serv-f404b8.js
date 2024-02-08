"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_pages_settings_port_port_service_ts-src_app_pages_settings_vessel_vessel_serv-f404b8"],{

/***/ 14239:
/*!*****************************************************!*\
  !*** ./src/app/pages/settings/port/port.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortService": () => (/* binding */ PortService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var PortService = /*#__PURE__*/function () {
  function PortService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PortService);
    this.http = http;
    this.PortUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PortService, [{
    key: "addPortDetail",
    value: function addPortDetail(PortData) {
      return this.http.post(this.PortUrl + 'InsertPort', PortData);
    }
  }, {
    key: "updatePortDetail",
    value: function updatePortDetail(PortData) {
      ////debugger;
      return this.http.put(this.PortUrl + 'UpdatePort', PortData);
    }
  }, {
    key: "deletePort",
    value: function deletePort(PortData) {
      ////debugger;
      return this.http["delete"](this.PortUrl + 'DeletePort/' + PortData.PortId);
    }
  }, {
    key: "getPortList",
    value: function getPortList(cpage, nRows, filter) {
      return this.http.get(this.PortUrl + "PortList?c=".concat(cpage, "&p=").concat(nRows, "&filter=").concat(filter));
    }
  }]);
  return PortService;
}();
_class = PortService;
_class.ɵfac = function PortService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1511:
/*!*********************************************************!*\
  !*** ./src/app/pages/settings/vessel/vessel.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VesselService": () => (/* binding */ VesselService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var VesselService = /*#__PURE__*/function () {
  function VesselService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VesselService);
    this.http = http;
    this.vesselUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VesselService, [{
    key: "addVesselDetail",
    value: function addVesselDetail(vesselData) {
      return this.http.post(this.vesselUrl + 'InsertVessel', vesselData);
    }
  }, {
    key: "updateVesselDetail",
    value: function updateVesselDetail(vesselData) {
      ////debugger;
      return this.http.put(this.vesselUrl + 'UpdateVessel', vesselData);
    }
  }, {
    key: "deleteVessel",
    value: function deleteVessel(vesselData) {
      ////debugger;
      return this.http["delete"](this.vesselUrl + 'DeleteVessel/' + vesselData.VesselId);
    }
  }, {
    key: "getVesselList",
    value: function getVesselList(cpage, nRows, filter) {
      return this.http.get(this.vesselUrl + "VesselList?c=".concat(cpage, "&p=").concat(nRows, "&filter=").concat(filter));
    }
    // dropdownFleetList(){
    //   return this.http.get(this.vesselUrl+'FleetList')
    // }
  }, {
    key: "dropdownFleetTypeList",
    value: function dropdownFleetTypeList(cpage, nRows, filter) {
      return this.http.get(this.vesselUrl + "FleetTypeList?c=".concat(cpage, "&p=").concat(nRows, "&filter=").concat(filter));
    }
  }, {
    key: "dropdownFleetList",
    value: function dropdownFleetList(cpage, nRows, filter) {
      return this.http.get(this.vesselUrl + "FleetList?c=".concat(cpage, "&p=").concat(nRows, "&filter=").concat(filter));
    }
  }, {
    key: "manageLicense",
    value: function manageLicense(licenseDetails) {
      return this.http.post(this.vesselUrl + 'InsertLicense', licenseDetails);
    }
  }, {
    key: "getLicense",
    value: function getLicense(id) {
      return this.http.get(this.vesselUrl + 'LicenseLog/' + id);
    }
  }, {
    key: "updateLicenseDetail",
    value: function updateLicenseDetail(licenseData) {
      ////debugger;
      return this.http.put(this.vesselUrl + 'UpdateLicense', licenseData);
    }
  }, {
    key: "geLicenseList",
    value: function geLicenseList(licenseId) {
      return this.http.get(this.vesselUrl + 'LicenseLog/' + licenseId.VesselId);
    }
  }]);
  return VesselService;
}();
_class = VesselService;
_class.ɵfac = function VesselService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 47329:
/*!*************************************************************!*\
  !*** ./src/app/pages/shared/dynamic-dialog/custom-error.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomStateError": () => (/* binding */ CustomStateError)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);


// import { ErrorStateMatcher } from "@angular/material/core";
var CustomStateError = /*#__PURE__*/function () {
  function CustomStateError() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomStateError);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomStateError, [{
    key: "WhitespacesInvalid",
    value:
    // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //     const isSubmitted = form && form.submitted;
    //     return control?.dirty&& control.errors?.['required'];
    //     // return !!(control && control.invalid);class="btn-sm"
    // }
    function WhitespacesInvalid() {
      //debugger
      return function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        if (isValid) {
          return isValid ? null : {
            'whitespaceInvalid': true
          };
        } else {
          return null;
        }
      };
    }
  }, {
    key: "trimFormValues",
    value: function trimFormValues(nbform) {
      var formValues = nbform.value;
      Object.keys(formValues).forEach(function (key) {
        var controlValue = formValues[key];
        if (typeof controlValue === 'string') {
          formValues[key] = controlValue.trim();
        }
      });
    }
  }, {
    key: "duplicateValidator",
    value: function duplicateValidator(Data, name, initialVal) {
      debugger;
      return function (control) {
        //debugger
        console.log(Data, "valuse");
        if (Data !== undefined || initialVal !== null) {
          var _control$value;
          debugger;
          var value = (_control$value = control.value) === null || _control$value === void 0 ? void 0 : _control$value.toLowerCase().trim();
          if (value !== (initialVal === null || initialVal === void 0 ? void 0 : initialVal.toLowerCase().trim()) && value !== null) {
            debugger;
            var isDuplicate = Data.some(function (list) {
              var _list$name;
              return ((_list$name = list[name]) === null || _list$name === void 0 ? void 0 : _list$name.toLowerCase().trim()) == (value === null || value === void 0 ? void 0 : value.toLowerCase().trim());
            });
            return isDuplicate ? {
              'duplicateValue': true
            } : null;
          }
        } else {
          return null;
        }
      };
    }
  }, {
    key: "dateRangeValidator",
    value: function dateRangeValidator(startedDate, endedDate) {
      return function (control) {
        //debugger
        var startDate = new Date(control.get(startedDate).value);
        var endDate = new Date(control.get(endedDate).value);
        if (!endDate) {
          control.get(endedDate).setErrors({
            invalidDateRange: false,
            required: true
          });
          return {
            required: true
          };
        }
        if (startDate && endDate && startDate >= endDate) {
          control.get(endedDate).setErrors({
            invalidDateRange: true,
            required: false
          });
          return {
            invalidDateRange: true
          };
        }
        control.get(endedDate).setErrors(null);
        return null;
      };
    }
  }, {
    key: "duplicateValidatorNumber",
    value: function duplicateValidatorNumber(Data, name, initialVal) {
      //debugger
      return function (control) {
        console.log(Data, "valuse");
        if (Data !== undefined) {
          var value = control.value;
          if (value !== initialVal && value !== null) {
            var isDuplicate = Data.some(function (list) {
              return list[name] == value;
            });
            return isDuplicate ? {
              'duplicateValue': true
            } : null;
          }
        } else {
          return null;
        }
      };
    }
  }, {
    key: "filterDateRangeList",
    value: function filterDateRangeList(event, listArr, filterBy) {
      var startDate = new Date(event.start);
      var timeZoneOffset = startDate.getTimezoneOffset();
      startDate.setMinutes(startDate.getMinutes() - timeZoneOffset);
      var splitValue = startDate.toISOString().split('T');
      var dataPickVoyageCommenceStartDate = splitValue[0] + 'T00:00:00';
      var endDate = new Date(event.end);
      var timeZoneOffsets = endDate.getTimezoneOffset();
      endDate.setMinutes(endDate.getMinutes() - timeZoneOffsets);
      var splitValueend = endDate.toISOString().split('T');
      var dataPickVoyageCommenceEndDate = splitValueend[0] + 'T00:00:00';
      if (startDate && endDate) {
        listArr = listArr.filter(function (item) {
          return item[filterBy].toString() >= dataPickVoyageCommenceStartDate && item[filterBy].toString() <= dataPickVoyageCommenceEndDate;
        });
        return listArr;
      }
    }
  }, {
    key: "changeDateTimeZone",
    value: function changeDateTimeZone(changeDate) {
      var selectedDate = new Date(changeDate);
      var timeZoneOffset = selectedDate.getTimezoneOffset();
      selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
      var updatedDate = selectedDate.toISOString().split('T')[0];
      return updatedDate;
    }
  }]);
  return CustomStateError;
}();

/***/ })

}]);