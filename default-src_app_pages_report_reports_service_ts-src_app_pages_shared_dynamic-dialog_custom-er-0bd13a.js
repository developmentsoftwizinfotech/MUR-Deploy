"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_pages_report_reports_service_ts-src_app_pages_shared_dynamic-dialog_custom-er-0bd13a"],{

/***/ 3980:
/*!*************************************************!*\
  !*** ./src/app/pages/report/reports.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsService": () => (/* binding */ ReportsService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var ReportsService = /*#__PURE__*/function () {
  function ReportsService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReportsService);
    this.http = http;
    this.reportUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReportsService, [{
    key: "getReportVessels",
    value: function getReportVessels() {
      return this.http.get(this.reportUrl + "VesselNameList");
    }
  }, {
    key: "getOtherDropdownList",
    value: function getOtherDropdownList() {
      return this.http.get(this.reportUrl + "GetFilterValueList");
    }
  }, {
    key: "getFixtureAndRequisitionListDropdownList",
    value: function getFixtureAndRequisitionListDropdownList() {
      return this.http.get(this.reportUrl + "GetFixtureAndRequisitionList");
    }
  }, {
    key: "getVendorAndMakerList",
    value: function getVendorAndMakerList() {
      return this.http.get(this.reportUrl + "GetVendorAndVendorMakerList");
    }
  }, {
    key: "getCategoryAndEquipmentList",
    value: function getCategoryAndEquipmentList() {
      return this.http.get(this.reportUrl + "GetEquipmentAndCategoryList");
    }
  }, {
    key: "getMURDropdownList",
    value: function getMURDropdownList() {
      return this.http.get(this.reportUrl + "GetAnalysisTemplateFilterValueList");
    }
  }, {
    key: "getPortDropdownList",
    value: function getPortDropdownList() {
      return this.http.get(this.reportUrl + "GetPortFilterValueList");
    }
  }, {
    key: "getDetailsReports",
    value: function getDetailsReports(filterDetails) {
      return this.http.post("".concat(this.reportUrl, "GetVoyageSummary"), filterDetails);
    }
  }, {
    key: "getAnalysisDetailsReports",
    value: function getAnalysisDetailsReports(filterDetails) {
      return this.http.post("".concat(this.reportUrl, "VoyageAnalysisiTemplate"), filterDetails);
    }
  }, {
    key: "getDetailsMisReports",
    value: function getDetailsMisReports(filterDetails) {
      return this.http.post("".concat(this.reportUrl, "GetMonthlySummary"), filterDetails);
    }
  }, {
    key: "getDetailsYTDReports",
    value: function getDetailsYTDReports(filterDetails) {
      return this.http.post("".concat(this.reportUrl, "YTDYearlySummary"), filterDetails);
    }
  }, {
    key: "getDetailsQSReports",
    value: function getDetailsQSReports(filterDetails) {
      return this.http.post("".concat(this.reportUrl, "GetQuarterlySummary"), filterDetails);
    }
  }, {
    key: "getFilterDropdown",
    value: function getFilterDropdown(controlName, controlList, setValues, indexControl, mapKeyIndex, formName) {
      var formControl = formName.get(controlName);
      var targetControlName = "".concat(controlName.slice(0, -indexControl), "Ids");
      console.log(targetControlName, "khokhn");
      if (formControl) {
        if (setValues === 'all') {
          formName.get(controlName).setValue(controlList);
          formName.get(targetControlName).setValue(controlList.map(function (x) {
            return x["".concat(targetControlName.slice(0, -mapKeyIndex))];
          }));
        } else if (formControl.value) {
          formName.get(targetControlName).setValue(formControl.value.map(function (x) {
            return x["".concat(targetControlName.slice(0, -mapKeyIndex))];
          }));
        }
      }
    }
  }, {
    key: "getPlannedFilterDropdown",
    value: function getPlannedFilterDropdown(controlName, controlList, setValues, indexControl, mapKeyIndex, formName) {
      var formControl = formName.get(controlName);
      var targetControlName = "".concat(controlName.slice(0, -indexControl), "Ids");
      console.log(targetControlName, "khokhn");
      if (formControl) {
        if (setValues === 'all') {
          formName.get(controlName).setValue(controlList);
          formName.get(targetControlName).setValue(controlList.map(function (x) {
            return x.PlanStatusId;
          }));
        } else if (formControl.value) {
          formName.get(targetControlName).setValue(formControl.value.map(function (x) {
            return x.PlanStatusId;
          }));
        }
      }
    }
  }, {
    key: "getNameFilterDropdown",
    value: function getNameFilterDropdown(controlName, controlList, setValues, indexControl, mapKeyIndex, formName) {
      var formControl = formName.get(controlName);
      var targetControlName = "".concat(controlName.slice(0, -indexControl));
      console.log(targetControlName, "khokhn");
      if (formControl) {
        if (setValues === 'all') {
          formName.get(controlName).setValue(controlList);
          formName.get(targetControlName).setValue(controlList.map(function (x) {
            return x["".concat(targetControlName.slice(0, -mapKeyIndex))];
          }));
        } else if (formControl.value) {
          formName.get(targetControlName).setValue(formControl.value.map(function (x) {
            return x["".concat(targetControlName.slice(0, -mapKeyIndex))];
          }));
        }
      }
    }
  }, {
    key: "getSpecialFilterDropdown",
    value: function getSpecialFilterDropdown(controlName, controlList, setValues, fromControlName, mapKeyName, formName) {
      var formControl = formName.get(controlName);
      var targetControlName = fromControlName;
      console.log(targetControlName, "new form");
      if (formControl) {
        if (setValues === 'all') {
          formName.get(controlName).setValue(controlList);
          formName.get(targetControlName).setValue(controlList.map(function (x) {
            return x[mapKeyName];
          }));
        } else if (formControl.value) {
          formName.get(targetControlName).setValue(formControl.value.map(function (x) {
            return x[mapKeyName];
          }));
        }
      }
    }
  }]);
  return ReportsService;
}();
_class = ReportsService;
_class.ɵfac = function ReportsService_Factory(t) {
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

/***/ }),

/***/ 49671:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}]);