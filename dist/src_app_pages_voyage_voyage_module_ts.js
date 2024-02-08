"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_voyage_voyage_module_ts"],{

/***/ 13091:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-annual-budget/add-voyage-budget/add-voyage-budget.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVoyageBudgetComponent": () => (/* binding */ AddVoyageBudgetComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal-compatibility */ 50797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _voyage_budget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../voyage-budget.service */ 50747);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 70585);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);




var _class;














function AddVoyageBudgetComponent_small_22_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVoyageBudgetComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVoyageBudgetComponent_small_22_nb_hint_1_Template, 2, 0, "nb-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.nbForm.get("BudgetYear")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageBudgetComponent_small_29_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVoyageBudgetComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVoyageBudgetComponent_small_29_nb_hint_1_Template, 2, 0, "nb-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.nbForm.get("TotalBudgetCost")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageBudgetComponent_ng_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r6.CostHeadId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r6 == null ? null : option_r6.CostHeadName);
  }
}
function AddVoyageBudgetComponent_small_37_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVoyageBudgetComponent_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVoyageBudgetComponent_small_37_nb_hint_1_Template, 2, 0, "nb-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.nbForm.get("CostHeadId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
var AddVoyageBudgetComponent = /*#__PURE__*/function () {
  function AddVoyageBudgetComponent(formBuilder, voyageBudgetService, dialogRef, router, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddVoyageBudgetComponent);
    this.formBuilder = formBuilder;
    this.voyageBudgetService = voyageBudgetService;
    this.dialogRef = dialogRef;
    this.router = router;
    this.messageService = messageService;
    this.loading = false;
    this.formTitle = "Add";
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_4__.CustomStateError();
    this.existingValues = ['apple', 'banana', 'cherry'];
    this.nbForm = this.formBuilder.group({
      AnualBudgetId: [0],
      CostHeadId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      BudgetYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      Active: [true],
      TotalBudgetCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.getstatusListRecords();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AddVoyageBudgetComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getCostHeadsList();
      if (this.selectedItem !== undefined) {
        this.formTitle = "Update";
        this.nbForm.setValue({
          AnualBudgetId: this.selectedItem.AnualBudgetId,
          CostHeadId: this.selectedItem.CostHeadId.toString(),
          Active: this.selectedItem.Active,
          TotalBudgetCost: this.selectedItem.TotalBudgetCost,
          BudgetYear: new Date(this.selectedItem.BudgetYear)
        });
      }
    }
  }, {
    key: "getCostHeadsList",
    value: function () {
      var _getCostHeadsList = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var _this = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.voyageBudgetService.getCostHeaderList().subscribe(function (res) {
                _this.costDropDown = res;
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getCostHeadsList() {
        return _getCostHeadsList.apply(this, arguments);
      }
      return getCostHeadsList;
    }()
  }, {
    key: "getstatusListRecords",
    value: function getstatusListRecords() {
      var _this2 = this;
      this.voyageBudgetService.getList('').subscribe(function (res) {
        console.log(res);
        _this2.status = res;
        if (_this2.selectedItem !== undefined) {
          // this.nbForm.get('StatusName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.status, 'StatusName', this.selectedItem.StatusName)]);
          // this.nbForm.get('StatusName').updateValueAndValidity();
        } else {
          // this.nbForm.get('StatusName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50), this.customErrorStateMatcher.duplicateValidator(this.status, 'StatusName', null)]);
          // this.nbForm.get('StatusName').updateValueAndValidity();
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _this3 = this;
        var yearDate, updatedDate, statusDetails, _statusDetails;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.nbForm.valid) {
                _context2.next = 11;
                break;
              }
              this.loading = true;
              yearDate = this.nbForm.value.BudgetYear;
              _context2.next = 5;
              return this.customErrorStateMatcher.changeDateTimeZone(yearDate);
            case 5:
              updatedDate = _context2.sent;
              this.nbForm.value.BudgetYear = updatedDate;
              this.customErrorStateMatcher.trimFormValues(this.nbForm);
              if (this.selectedItem !== undefined) {
                this.nbForm.get('AnualBudgetId').setValue(this.selectedItem.AnualBudgetId);
                statusDetails = this.nbForm.value;
                this.voyageBudgetService.updateDetail(statusDetails).subscribe(function (res) {
                  if (res == true) {
                    _this3.loading = false;
                    _this3.dialogRef.close(statusDetails);
                    // this.close();
                  } else {
                    _this3.loading = false;
                    _this3.showPop('warn', 'Alert', 'Somthing went wrong');
                  }
                }, function (error) {
                  if (error.status === 404 || error.status === 500) {
                    _this3.router.navigate(['/error']);
                  }
                });
              } else {
                _statusDetails = this.nbForm.value;
                this.voyageBudgetService.addDetail(_statusDetails).subscribe(function (res) {
                  if (res == true) {
                    _this3.loading = false;
                    _this3.dialogRef.close(_statusDetails);
                    // this.close();
                  } else {
                    _this3.loading = false;
                    _this3.showPop('warn', 'Alert', 'Somthing went wrong');
                  }
                }, function (error) {
                  if (error.status === 404 || error.status === 500) {
                    _this3.router.navigate(['/error']);
                  }
                });
              }
              _context2.next = 12;
              break;
            case 11:
              this.nbForm.markAllAsTouched();
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function submit() {
        return _submit.apply(this, arguments);
      }
      return submit;
    }()
  }, {
    key: "showPop",
    value: function showPop(status, summary, detail) {
      this.messageService.add({
        severity: status,
        summary: summary,
        detail: detail
      });
    }
  }]);
  return AddVoyageBudgetComponent;
}();
_class = AddVoyageBudgetComponent;
_class.ɵfac = function AddVoyageBudgetComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_voyage_budget_service__WEBPACK_IMPORTED_MODULE_5__.VoyageBudgetService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-voyage-budget"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_11__.root,
    useClass: _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_4__.CustomStateError
  }, primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService])],
  decls: 38,
  vars: 9,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "px-3", "container", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "basic", "type", "reset", 1, "mr-2"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2"], [1, "example-items-rows"], [1, "row", "px-3"], [1, "col-6", "mb-3"], ["for", "BudgetYear", 1, "form-label"], [2, "color", "red"], ["view", "year", "formControlName", "BudgetYear", "dateFormat", "yy", "placeholder", "Select Year", 1, "py-3", 3, "readonlyInput"], [4, "ngIf"], ["for", "TotalBudgetCost", 1, "form-label"], ["type", "text", "formControlName", "TotalBudgetCost", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Enter Annual Budget"], [1, "col-12", "mb-3"], ["for", "CostHeadId", 1, "form-label"], ["formControlName", "CostHeadId", "placeholder", "Select Cost Heads", "fullWidth", "", "fieldSize", "medium", 1, "fixed-dropdown-size", 3, "appendTo"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color: red", 4, "ngIf"], [3, "value"]],
  template: function AddVoyageBudgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card", 0)(2, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AddVoyageBudgetComponent_Template_form_ngSubmit_2_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nb-card-header", 2)(4, "div")(5, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddVoyageBudgetComponent_Template_button_click_8_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Clear Form ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "nb-card-body", 6)(15, "div", 7)(16, "div", 8)(17, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Select Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "p-calendar", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AddVoyageBudgetComponent_small_22_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 8)(24, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Annual Budget (in $)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AddVoyageBudgetComponent_small_29_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Cost Heads");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "ng-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, AddVoyageBudgetComponent_ng_option_36_Template, 2, 2, "ng-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AddVoyageBudgetComponent_small_37_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      var tmp_4_0;
      var tmp_5_0;
      var tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Annually Budget");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonlyInput", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.nbForm.get("BudgetYear")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.nbForm.get("BudgetYear")) == null ? null : tmp_4_0.touched) || ((tmp_4_0 = ctx.nbForm.get("BudgetYear")) == null ? null : tmp_4_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.nbForm.get("TotalBudgetCost")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.nbForm.get("TotalBudgetCost")) == null ? null : tmp_5_0.touched) || ((tmp_5_0 = ctx.nbForm.get("TotalBudgetCost")) == null ? null : tmp_5_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.costDropDown);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.nbForm.get("CostHeadId")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.nbForm.get("CostHeadId")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.nbForm.get("CostHeadId")) == null ? null : tmp_8_0.dirty)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.Toast, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSpinnerDirective],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 50vw;\n}"]
});

/***/ }),

/***/ 61600:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-annual-budget/voyage-annual-budget.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageAnnualBudgetComponent": () => (/* binding */ VoyageAnnualBudgetComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _add_voyage_budget_add_voyage_budget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-voyage-budget/add-voyage-budget.component */ 13091);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _voyage_budget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voyage-budget.service */ 50747);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 70585);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;














function VoyageAnnualBudgetComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "span", 14)(2, "p-calendar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function VoyageAnnualBudgetComponent_ng_template_12_Template_p_calendar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.yearDate = $event);
    })("ngModelChange", function VoyageAnnualBudgetComponent_ng_template_12_Template_p_calendar_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.getFormValue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 16)(4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function VoyageAnnualBudgetComponent_ng_template_12_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.yearDate)("readonlyInput", true);
  }
}
function VoyageAnnualBudgetComponent_ng_template_13_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Total Budget - ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r10.annualBudgetYear, "yyyy"), " ");
  }
}
function VoyageAnnualBudgetComponent_ng_template_13_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VoyageAnnualBudgetComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cost Heads");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, VoyageAnnualBudgetComponent_ng_template_13_th_4_Template, 4, 4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VoyageAnnualBudgetComponent_ng_template_13_th_5_Template, 3, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.annualBudgetYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.annualBudgetYear);
  }
}
function VoyageAnnualBudgetComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 23)(1, "td")(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "div", 26)(11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VoyageAnnualBudgetComponent_ng_template_14_Template_button_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      var product_r15 = restoredCtx.$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.editDetails(product_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VoyageAnnualBudgetComponent_ng_template_14_Template_button_click_12_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      var product_r15 = restoredCtx.$implicit;
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.deleteDetails(product_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r12 = ctx.$implicit;
    var index_r14 = ctx.rowIndex;
    var product_r15 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pReorderableRow", index_r14)("pEditableRow", product_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r12.CostHeadName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r12.TotalBudgetCost, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function VoyageAnnualBudgetComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["StatusName"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var VoyageAnnualBudgetComponent = /*#__PURE__*/function () {
  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];
  function VoyageAnnualBudgetComponent(voyageBudgetService, dialogService, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VoyageAnnualBudgetComponent);
    this.voyageBudgetService = voyageBudgetService;
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.checkListRecord = false;
    this.customDatePicker = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_4__.CustomStateError();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VoyageAnnualBudgetComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.getListRecords('');
      // this.productService.getProducts().then((data) => {
      //   this.vessel = data});
      this.items = [{
        label: "ADD NEW CLENING STAGE"
      }];
      this.cols = [{
        field: "CostHeads",
        header: "Cost Heads"
      }, {
        field: "TotalBudget",
        header: "Total Budget"
      }];
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "getListRecords",
    value: function getListRecords(selectedYear) {
      var _this2 = this;
      this.checkListRecord = false;
      this.voyageBudgetService.getList(selectedYear).subscribe(function (res) {
        var _res$;
        _this2.voyageBudget = res;
        _this2.annualBudgetYear = (_res$ = res[0]) === null || _res$ === void 0 ? void 0 : _res$.BudgetYear;
        if (res.length === 0) {
          _this2.emptymessage = 'No Record Found';
        }
        setTimeout(function () {
          _this2.checkListRecord = true;
        }, 200);
      });
    }
  }, {
    key: "openWithoutBackdrop",
    value: function openWithoutBackdrop() {
      this.open(false, false);
    }
  }, {
    key: "open",
    value: function open(closeOnBackdropClick, autoFocus) {
      var _this3 = this;
      this.dialogService.open(_add_voyage_budget_add_voyage_budget_component__WEBPACK_IMPORTED_MODULE_2__.AddVoyageBudgetComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        console.log(data, "value of ");
        if (data !== undefined) {
          _this3.showPop('success', 'Success', 'Record Saved');
          _this3.getFormValue();
        }
      });
      ;
    }
  }, {
    key: "editDetails",
    value: function editDetails(_editDetails) {
      var _this4 = this;
      this.dialogService.open(_add_voyage_budget_add_voyage_budget_component__WEBPACK_IMPORTED_MODULE_2__.AddVoyageBudgetComponent, {
        context: {
          selectedItem: _editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this4.getFormValue();
          _this4.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
      console.log(_editDetails, "edits details");
      // this.open(false);
      // this.product = { ...product };
      // this.productDialog = true;
    }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this5 = this;
      var dialogRef = this.dialogService.open(_app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogComponent, {
        context: {
          title: "Dynamic Dialog",
          message: 'Are You Sure Want To Delete',
          buttons: [{
            label: 'Cancel',
            value: false,
            status: 'basic'
          }, {
            label: 'Delete',
            value: true,
            status: 'danger'
          }]
        }
      });
      ////debugger;
      dialogRef.onClose.subscribe(function (result) {
        if (result === true) {
          // User clicked "Yes", perform the desired action
          _this5.voyageBudgetService["delete"](deleteRecord).subscribe(function (res) {
            if (res == true) {
              _this5.getFormValue();
              _this5.showPop('error', 'Delete', 'Record Deleted');
            }
          });
        } else if (result === false) {
          // User clicked "No", perform a different action
        } else {
          // Handle other possible button values or dialog closure
        }
      });
    }
  }, {
    key: "hideRow",
    value: function hideRow(id) {
      console.log(id);
    }
  }, {
    key: "showPop",
    value: function showPop(status, summary, detail) {
      this.messageService.add({
        severity: status,
        summary: summary,
        detail: detail
      });
    }
  }, {
    key: "getFormValue",
    value: function getFormValue() {
      var yearValue = this.customDatePicker.changeDateTimeZone(this.yearDate);
      this.getListRecords(yearValue);
      console.log(yearValue, "changes in date");
    }
  }]);
  return VoyageAnnualBudgetComponent;
}();
_class = VoyageAnnualBudgetComponent;
_class.ɵfac = function VoyageAnnualBudgetComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_voyage_budget_service__WEBPACK_IMPORTED_MODULE_5__.VoyageBudgetService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-voyage-annual-budget"]],
  decls: 17,
  vars: 10,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-6", "col-9"], [1, "col-md-6", "col-3", "d-flex", "justify-content-end", "align-items-center"], ["nbButton", "", 1, "d-md-flex", "d-none", 3, "click"], ["icon", "plus", 1, "d-md-none", "d-flex", 3, "click"], [1, "card", "mt-4"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle", "columns"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex", "justify-content-between"], [1, "mr-auto"], ["view", "year", "dateFormat", "yy", "placeholder", "Voyage Completed Date", 3, "ngModel", "readonlyInput", "ngModelChange"], [1, "ml-auto"], ["type", "text", "nbInput", "", "placeholder", "Search keyword", 3, "input"], ["pReorderableColumn", "", "pSortableColumn", "StatusName"], ["field", "StatusName"], ["pReorderableColumn", "", "pSortableColumn", "StatusName", 4, "ngIf"], [4, "ngIf"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function VoyageAnnualBudgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Voyage Annual Budget Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VoyageAnnualBudgetComponent_Template_button_click_6_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Add Cost Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "nb-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VoyageAnnualBudgetComponent_Template_nb_icon_click_8_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "p-table", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, VoyageAnnualBudgetComponent_ng_template_12_Template, 5, 2, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, VoyageAnnualBudgetComponent_ng_template_13_Template, 8, 2, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, VoyageAnnualBudgetComponent_ng_template_14_Template, 14, 10, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, VoyageAnnualBudgetComponent_ng_template_15_Template, 3, 1, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.voyageBudget)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c1))("columns", ctx.cols)("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.ReorderableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_14__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe]
});

/***/ }),

/***/ 50747:
/*!****************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-annual-budget/voyage-budget.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageBudgetService": () => (/* binding */ VoyageBudgetService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var VoyageBudgetService = /*#__PURE__*/function () {
  function VoyageBudgetService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VoyageBudgetService);
    this.http = http;
    this.budgetUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VoyageBudgetService, [{
    key: "addDetail",
    value: function addDetail(budgetData) {
      return this.http.post(this.budgetUrl + 'InsertVoyageBudget', budgetData);
    }
  }, {
    key: "updateDetail",
    value: function updateDetail(budgetData) {
      ////debugger;
      return this.http.put(this.budgetUrl + 'UpdateVoyageBudget', budgetData);
    }
  }, {
    key: "delete",
    value: function _delete(budgetData) {
      ////debugger;
      return this.http["delete"](this.budgetUrl + 'DeleteVoyageBudget/' + budgetData.AnualBudgetId);
    }
  }, {
    key: "getList",
    value: function getList(yearDate) {
      return this.http.post(this.budgetUrl + 'GetAnualBudgetByYear', {
        "YearDate": yearDate
      });
    }
  }, {
    key: "getCostHeaderList",
    value: function getCostHeaderList() {
      return this.http.get(this.budgetUrl + 'GetCostHeadList');
    }
  }]);
  return VoyageBudgetService;
}();
_class = VoyageBudgetService;
_class.ɵfac = function VoyageBudgetService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 72286:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-list/view-voyage/view-voyage.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewVoyageComponent": () => (/* binding */ ViewVoyageComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;


var ViewVoyageComponent = /*#__PURE__*/function () {
  function ViewVoyageComponent(dialogRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewVoyageComponent);
    this.dialogRef = dialogRef;
    this.dialogVisible = true;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewVoyageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.dialogVisible = true;
      console.log(this.selectedItem, "nilesh");
      // selectedItem
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "showDialog",
    value: function showDialog() {
      this.dialogVisible = true;
    }
  }]);
  return ViewVoyageComponent;
}();
_class = ViewVoyageComponent;
_class.ɵfac = function ViewVoyageComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-view-voyage"]],
  decls: 1,
  vars: 0,
  consts: [[1, "px-3", "mb-0", "border-bottom-0", "container"]],
  template: function ViewVoyageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nb-card", 0);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 70vw;\n  height: 90vh;\n  overflow-y: auto;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}"]
});

/***/ }),

/***/ 49422:
/*!*******************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-list/voyage-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageListComponent": () => (/* binding */ VoyageListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-voyage/add-voyage.component */ 75702);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_settings_cargo_cargo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-pages/settings/cargo/cargo.service */ 62856);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _voyage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./voyage.service */ 72780);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/paginator */ 1997);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);




var _class;





















var _c0 = ["dt"];
function VoyageListComponent_ng_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r59.VesselName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r59.VesselName);
  }
}
function VoyageListComponent_ng_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r60.PortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r60.PortName);
  }
}
function VoyageListComponent_ng_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r61.CargoName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r61.CargoName);
  }
}
function VoyageListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r63.onSort("VesselName"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Vessel Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r65.onSort("StatusName"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Status Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "p-sortIcon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r66.onSort("VoyageCommenceDate"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Voyage Commence date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "p-sortIcon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r67.onSort("VesselVoyageCompletingDate"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Voyage Completed date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "p-sortIcon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r68.onSort("VayageNo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " Voyage No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r69.onSort("Fixture"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " Fixture");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "p-sortIcon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r70.onSort("LoadToPort"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Load Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "p-sortIcon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r71.onSort("CargoToLoad"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " Cargo to Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "p-sortIcon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r72.onSort("PreviousCargo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, " Previous Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "p-sortIcon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r73.onSort("ITDBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, " ITD (days)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "p-sortIcon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r74.onSort("ITCBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " ITC (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "p-sortIcon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r75.onSort("ITBBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, " ITB (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "p-sortIcon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r76.onSort("SCGBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " SCG (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "p-sortIcon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r77.onSort("SHABudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " SHA (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "p-sortIcon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r78.onSort("HCEBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, " HCE (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "p-sortIcon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r79.onSort("HCCBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " HCC (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "p-sortIcon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r80.onSort("HCXBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, " HCX (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "p-sortIcon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_38_Template_th_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r81.onSort("HCBBudget"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, " HCB (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "p-sortIcon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("order", ctx_r5.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("order", ctx_r5.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("order", ctx_r5.sortOrder);
  }
}
function VoyageListComponent_ng_template_39_button_78_Template(rf, ctx) {
  if (rf & 1) {
    var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_39_button_78_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r88);
      var rowData_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r86.viewHold(rowData_r82.VId, rowData_r82.IMONumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function VoyageListComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 79)(1, "td", 80)(2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td")(6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td")(10, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "td")(15, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td")(20, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td")(24, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "td")(28, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "td")(32, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "td")(36, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "td")(40, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "td")(44, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "td")(48, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "td")(52, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "td")(56, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](58, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "td")(60, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "td")(64, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](66, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "td")(68, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](70, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "td")(72, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](74, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "td", 78)(76, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "ngx-skeleton-loader", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, VoyageListComponent_ng_template_39_button_78_Template, 1, 0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_39_Template_button_click_79_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r90);
      var rowData_r82 = restoredCtx.$implicit;
      var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r89.viewDetails(rowData_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_39_Template_button_click_80_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r90);
      var rowData_r82 = restoredCtx.$implicit;
      var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r91.editDetials(rowData_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_39_Template_button_click_81_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r90);
      var rowData_r82 = restoredCtx.$implicit;
      var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r92.deleteDetails(rowData_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var rowData_r82 = ctx.$implicit;
    var product_r84 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pEditableRow", product_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.StatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 58, rowData_r82.VoyageCommenceDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 61, rowData_r82.VesselVoyageCompletedDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.VayageNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.Fixture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.LoadToPort, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.CargotoLoad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.PreviousCargo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.ITDBudget - rowData_r82.ITDActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.ITCBudget - rowData_r82.ITCActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.ITBBudget - rowData_r82.ITBActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.SCGBudget - rowData_r82.SCGActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.SHABudget - rowData_r82.SHAActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.HCEBudget - rowData_r82.HCEActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.HCCBudget - rowData_r82.HCCActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.HCXBudget - rowData_r82.HCXActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", rowData_r82.HCBBudget - rowData_r82.HCBActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r6.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", rowData_r82.IsMerged === true);
  }
}
function VoyageListComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.emptymessage);
  }
}
function VoyageListComponent_p_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r8.selectedItem.VesselName);
  }
}
function VoyageListComponent_p_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r9.selectedItem.LTCMURName);
  }
}
function VoyageListComponent_p_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r10.selectedItem.OwnerName);
  }
}
function VoyageListComponent_p_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r11.selectedItem.TradeAreaName);
  }
}
function VoyageListComponent_p_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r12.selectedItem.VayageNo);
  }
}
function VoyageListComponent_p_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r13.selectedItem.VoyageCommenceDate, "dd-MMM-yyyy"), " ");
  }
}
function VoyageListComponent_p_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r14.selectedItem.VesselVoyageCompletedDate, "dd-MMM-yyyy"), " ");
  }
}
function VoyageListComponent_p_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r15.selectedItem.VesselVoyageCompletingDate, "dd-MMM-yyyy"), " ");
  }
}
function VoyageListComponent_p_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r16.selectedItem.Fixture);
  }
}
function VoyageListComponent_p_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r17.selectedItem.OprTypeName);
  }
}
function VoyageListComponent_p_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r18.selectedItem.LoadToPort);
  }
}
function VoyageListComponent_p_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r19.selectedItem.DischargePort);
  }
}
function VoyageListComponent_p_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r20.selectedItem.CargotoLoad);
  }
}
function VoyageListComponent_p_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r21.selectedItem.PreviousCargo);
  }
}
function VoyageListComponent_p_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r22.selectedItem.HoldPassName);
  }
}
function VoyageListComponent_p_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r23.selectedItem.TCCBudgetUSD);
  }
}
function VoyageListComponent_p_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r24.selectedItem.TCCActual);
  }
}
function VoyageListComponent_p_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r25.selectedItem.TCCBudgetUSD - ctx_r25.selectedItem.TCCActual, " ");
  }
}
function VoyageListComponent_p_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r26.selectedItem.PlanStatusName);
  }
}
function VoyageListComponent_p_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r27.selectedItem.ITDBudget);
  }
}
function VoyageListComponent_p_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r28.selectedItem.ITDActual);
  }
}
function VoyageListComponent_p_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r29.selectedItem.ITDBudget - ctx_r29.selectedItem.ITDActual, " ");
  }
}
function VoyageListComponent_p_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r30.selectedItem.ITCBudget);
  }
}
function VoyageListComponent_p_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r31.selectedItem.ITCActual);
  }
}
function VoyageListComponent_p_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r32.selectedItem.ITCBudget - ctx_r32.selectedItem.ITCActual, " ");
  }
}
function VoyageListComponent_p_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r33.selectedItem.ITBBudget);
  }
}
function VoyageListComponent_p_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r34.selectedItem.ITBActual);
  }
}
function VoyageListComponent_p_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r35.selectedItem.ITBBudget - ctx_r35.selectedItem.ITBActual, " ");
  }
}
function VoyageListComponent_p_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r36.selectedItem.HCBBudget);
  }
}
function VoyageListComponent_p_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r37.selectedItem.HCBActual);
  }
}
function VoyageListComponent_p_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r38.selectedItem.HCBBudget - ctx_r38.selectedItem.HCBActual, " ");
  }
}
function VoyageListComponent_p_215_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r39.selectedItem.PlanStatusName);
  }
}
function VoyageListComponent_p_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r40.selectedItem.SCGBudget);
  }
}
function VoyageListComponent_p_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r41.selectedItem.SCGActual);
  }
}
function VoyageListComponent_p_230_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r42.selectedItem.SCGBudget - ctx_r42.selectedItem.SCGActual, " ");
  }
}
function VoyageListComponent_p_235_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r43.selectedItem.SHABudget);
  }
}
function VoyageListComponent_p_240_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r44.selectedItem.SHAActual);
  }
}
function VoyageListComponent_p_245_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r45.selectedItem.SHABudget - ctx_r45.selectedItem.SHAActual, " ");
  }
}
function VoyageListComponent_p_250_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r46.selectedItem.HCEBudget);
  }
}
function VoyageListComponent_p_255_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r47.selectedItem.HCEActual);
  }
}
function VoyageListComponent_p_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r48.selectedItem.HCEBudget - ctx_r48.selectedItem.HCEActual, " ");
  }
}
function VoyageListComponent_p_265_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r49.selectedItem.HCCBudget);
  }
}
function VoyageListComponent_p_270_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r50.selectedItem.HCCActual);
  }
}
function VoyageListComponent_p_275_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r51.selectedItem.HCCBudget - ctx_r51.selectedItem.HCCActual, " ");
  }
}
function VoyageListComponent_p_280_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r52.selectedItem.HCXBudget);
  }
}
function VoyageListComponent_p_285_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r53.selectedItem.HCXActual);
  }
}
function VoyageListComponent_p_290_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r54.selectedItem.HCXBudget - ctx_r54.selectedItem.HCXActual, " ");
  }
}
function VoyageListComponent_p_295_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, ctx_r55.selectedItem.BudgetedDetailsDate, "dd-MMM-yyyy"), " ");
  }
}
function VoyageListComponent_p_300_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r56.selectedItem.Remark);
  }
}
function VoyageListComponent_p_305_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r57.selectedItem.FinalRemarks);
  }
}
function VoyageListComponent_ng_template_306_Template(rf, ctx) {
  if (rf & 1) {
    var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_ng_template_306_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r94);
      var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r93.dialogVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
var _c1 = function _c1() {
  return {
    "clear": true
  };
};
var _c2 = function _c2() {
  return {
    "min-width": "50rem"
  };
};
var _c3 = function _c3() {
  return ["LoadToPortName", "CargoToLoadName", "VesselName", "VoyageCommenceDate"];
};
var _c4 = function _c4() {
  return {
    width: "75vw"
  };
};
var _c5 = function _c5() {
  return {
    height: "300px"
  };
};
var VoyageListComponent = /*#__PURE__*/function () {
  function VoyageListComponent(router, cargoService, portService, voyageService, vesselService, messageService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VoyageListComponent);
    this.router = router;
    this.cargoService = cargoService;
    this.portService = portService;
    this.voyageService = voyageService;
    this.vesselService = vesselService;
    this.messageService = messageService;
    this.dialogService = dialogService;
    this.checkListRecord = false;
    // VoyageList
    this.activeIndex = 0;
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_6__.CustomStateError();
    this.firstCount = 1;
    this.totalRows = 0;
    this.dialogVisible = false;
    this.sortOrder = 1; // 1 for ascending, -1 for descending
    this.currentSortField = ''; // Track the currently sorted field
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(VoyageListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.selectedRows = "25";
      this.nextCount = 25;
      this.currentPage = 1;
      this.totalRows = 10;
      this.voyageService.getAllVoyageDataList().subscribe(function (res) {
        console.log(res, 'vessel according voyage');
      });
      this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced");
      this.cols = [{
        field: "VesselName",
        header: "VESSEL Name"
      }, {
        field: "StatusName",
        header: "Status Name"
      }, {
        field: "ecDate",
        header: "Expected Completed date"
      }, {
        field: "fixture",
        header: "Fixture"
      }, {
        field: "loadPort",
        header: "Load Port"
      }, {
        field: "cargoToLoad",
        header: "Cargo to Load"
      }, {
        field: "previousLoad",
        header: "Previous Cargo"
      }, {
        field: "ITD",
        header: "ITD (days)"
      }, {
        field: "ITC",
        header: "ITC (USD)"
      }, {
        field: "ITB",
        header: "ITB (USD)"
      }, {
        field: "SCG",
        header: "SCG (USD)"
      }, {
        field: "SHA",
        header: "SHA (USD)"
      }, {
        field: "HCE",
        header: "HCE (USD)"
      }, {
        field: "HCC",
        header: "HCC (USD)"
      }, {
        field: "HCX",
        header: "HCX (USD)"
      }, {
        field: "HCB",
        header: "HCB (USD)"
      }];
      this.items = [{
        label: 'COMMENCED'
      }, {
        label: 'COMPLETED VOYAGES'
      }];
      this.activeItem = this.items[0];
      this.exportColumns = this.cols.map(function (col) {
        return {
          title: col.header,
          dataKey: col.field
        };
      });
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
      this.getAllDropDownData(1, 100, "");
    }
  }, {
    key: "getVesselList",
    value: function getVesselList(cPage, nRows, filter) {
      // this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      //   this.vesselDropdown = res.VesselData;
      // })
      this.changeVoyageList(this.currentPage, this.selectedRows, filter, "Commenced");
    }
  }, {
    key: "getPortList",
    value: function getPortList(cPage, nRows, filter) {
      var _this2 = this;
      this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
        _this2.port = res.PortData;
      });
    }
  }, {
    key: "getCargoList",
    value: function getCargoList(cPage, nRows, filter) {
      var _this3 = this;
      this.cargoService.getCargoList(cPage, nRows, filter).subscribe(function (res) {
        _this3.cargo = res.CargoData;
      });
    }
  }, {
    key: "filterData",
    value: function filterData(selectedVal) {
      var _this4 = this;
      switch (selectedVal) {
        case 'vesselName':
          // this.vesselService.getVesselList().subscribe((res: Vessel) => {
          //   this.vesselDropdown = res
          // })
          this.vesselService.getVesselList(1, 100, '').subscribe(function (res) {
            debugger;
            _this4.vesselDropdown = res.VesselData;
          });
          break;
        case 'portName':
          // this.portService.changeVoyageList(1,100,'').subscribe((res: Port[]) => {
          //   this.port = res;
          // })
          this.portService.getPortList(1, 100, '').subscribe(function (res) {
            _this4.port = res.PortData;
          });
          break;
        case 'cargoName':
          this.cargoService.getCargoList(1, 10, "").subscribe(function (res) {
            _this4.cargo = res.CargoData;
          });
          break;
      }
    }
  }, {
    key: "getAllDropDownData",
    value: function () {
      var _getAllDropDownData = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(cPage, nRows, filter) {
        var _this5 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
                _this5.vesselDropdown = res.VesselData;
              });
            case 2:
              _context.next = 4;
              return this.cargoService.getCargoList(cPage, nRows, filter).subscribe(function (res) {
                _this5.cargo = res.CargoData;
              });
            case 4:
              _context.next = 6;
              return this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
                _this5.port = res.PortData;
              });
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getAllDropDownData(_x, _x2, _x3) {
        return _getAllDropDownData.apply(this, arguments);
      }
      return getAllDropDownData;
    }() // getAllVoyageData() {
    //   this.voyageService.getVoyageList().subscribe((res: VoyageList) => {
    //     this.voyageList = res.VoyageData
    //     if (res == null) {
    //       this.emptymessage = 'No Record Found'
    //     } else {
    //       setTimeout(() => { this.checkListRecord = true }, 200);
    //     }
    //     console.log(res, "voyageList")
    //   })
    // }
  }, {
    key: "changeVoyageList",
    value: function () {
      var _changeVoyageList = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (cPage, nRows, filter, value) {
        var _this6 = this;
        var columnFilter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
        var orderBy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
        return /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
          return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                ////debugger;
                _this6.checkListRecord = false;
                if (!(value == "Completed")) {
                  _context2.next = 8;
                  break;
                }
                _this6.status = value;
                _this6.activeIndex = 1;
                _context2.next = 6;
                return _this6.voyageService.getCompletedList(cPage, nRows, filter, columnFilter, orderBy).subscribe(function (res) {
                  debugger;
                  if (_this6.nextCount > _this6.totalCount) {
                    _this6.nextCount = _this6.totalCount;
                  }
                  // else{
                  //   this.nextCount= 25
                  // }
                  if (res.length === 0) {
                    _this6.emptymessage = 'No Record Found';
                  } else {
                    setTimeout(function () {
                      _this6.checkListRecord = true;
                    }, 1000);
                    _this6.voyageList = res.VoyageData;
                    _this6.totalCount = res.Count;
                  }
                });
              case 6:
                _context2.next = 12;
                break;
              case 8:
                _this6.status = 'Commenced';
                _this6.activeIndex = 0;
                _context2.next = 12;
                return _this6.voyageService.getCommencedList(cPage, nRows, filter, columnFilter, orderBy).subscribe(function (res) {
                  if (_this6.nextCount > _this6.totalCount) {
                    _this6.nextCount = _this6.totalCount;
                  }
                  // if (+res.Count < 25) {
                  //   this.nextCount = this.totalCount
                  // }else{
                  //   this.nextCount= 25
                  // }
                  if (res.length === 0) {
                    _this6.emptymessage = 'No Record Found';
                  } else {
                    _this6.voyageList = res.VoyageData;
                    _this6.totalCount = res.Count;
                    setTimeout(function () {
                      _this6.checkListRecord = true;
                    }, 1000);
                  }
                });
              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })();
      });
      function changeVoyageList(_x4, _x5, _x6, _x7) {
        return _changeVoyageList.apply(this, arguments);
      }
      return changeVoyageList;
    }()
  }, {
    key: "exportExcel",
    value: function exportExcel() {
      var _this7 = this;
      __webpack_require__.e(/*! import() */ "node_modules_xlsx_xlsx_mjs").then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 80574)).then(function (xlsx) {
        var worksheet = xlsx.utils.json_to_sheet(_this7.voyageList);
        var workbook = {
          Sheets: {
            data: worksheet
          },
          SheetNames: ["data"]
        };
        var excelBuffer = xlsx.write(workbook, {
          bookType: "xlsx",
          type: "array"
        });
        _this7.saveAsExcelFile(excelBuffer, "products");
      });
    }
  }, {
    key: "exportPdf",
    value: function exportPdf() {
      var _this8 = this;
      __webpack_require__.e(/*! import() */ "default-node_modules_jspdf_dist_jspdf_es_min_js").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 20114)).then(function (jsPDF) {
        Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! jspdf-autotable */ 12983, 23)).then(function (x) {
          var doc = new jsPDF["default"]('p', 'px', 'a4');
          doc.autoTable(_this8.exportColumns, _this8.voyageList);
          doc.save('products.pdf');
        });
      });
    }
  }, {
    key: "saveAsExcelFile",
    value: function saveAsExcelFile(buffer, fileName) {
      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      var EXCEL_EXTENSION = '.xlsx';
      var data = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      var anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(data);
      anchor.download = fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION;
      // Check if the download attribute is supported
      if (typeof anchor.download !== 'undefined') {
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      } else {
        // Fallback for browsers that do not support the download attribute
        window.open(URL.createObjectURL(data));
      }
    }
  }, {
    key: "openWithoutBackdrop",
    value: function openWithoutBackdrop() {
      this.open(false, false);
    }
  }, {
    key: "open",
    value: function open(closeOnBackdropClick, autoFocus) {
      var _this9 = this;
      this.dialogService.open(_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_4__.AddVoyageComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        if (data == "Completed") {
          console.log(data, "valiudfughg");
          _this9.changeVoyageList(_this9.currentPage, _this9.selectedRows, "", "Completed");
          _this9.showPop('success', 'Success', 'Record Saved');
        }
        if (data == "Commenced" || data == "Proposed") {
          _this9.changeVoyageList(_this9.currentPage, _this9.selectedRows, "", "Commenced");
          _this9.showPop('success', 'Success', 'Record Saved');
        }
      });
    }
  }, {
    key: "editDetials",
    value: function editDetials(editDetails) {
      var _this10 = this;
      console.log(editDetails, "editDetailslist");
      this.dialogService.open(_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_4__.AddVoyageComponent, {
        context: {
          selectedItem: editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data == "Completed") {
          console.log(data, "valiudfughg");
          _this10.changeVoyageList(_this10.currentPage, _this10.selectedRows, "", "Completed");
          _this10.showPop('success', 'Success', 'Record Saved');
        }
        if (data == "Commenced" || data == "Proposed") {
          _this10.changeVoyageList(_this10.currentPage, _this10.selectedRows, "", "Commenced");
          _this10.showPop('success', 'Success', 'Record Saved');
        }
      });
      console.log(editDetails, "edits details");
    }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this11 = this;
      var dialogRef = this.dialogService.open(_app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogComponent, {
        context: {
          title: "Dynamic Dialog",
          message: 'Are You Sure Want To Delete',
          buttons: [{
            label: 'Cancel',
            value: false,
            status: 'basic'
          }, {
            label: 'Delete',
            value: true,
            status: 'danger'
          }]
        }
      });
      ////debugger;
      dialogRef.onClose.subscribe(function (result) {
        if (result === true) {
          _this11.voyageService.deleteVoyage(deleteRecord).subscribe(function (res) {
            ////debugger;
            if (res) {
              _this11.changeVoyageList(_this11.currentPage, _this11.selectedRows, "", deleteRecord.StatusName);
              _this11.showPop('error', 'Delete', 'Record Deleted');
            }
          });
        } else if (result === false) {} else {}
      });
    }
  }, {
    key: "viewDetails",
    value: function viewDetails(selectedRow) {
      //debugger
      this.selectedItem = selectedRow;
      this.dialogVisible = true;
    }
  }, {
    key: "dateFilter",
    value: function dateFilter(event) {
      this.voyageList = this.customErrorStateMatcher.filterDateRangeList(event, this.voyageList, 'VoyageCommenceDate');
    }
  }, {
    key: "clearDateRange",
    value: function clearDateRange(value) {
      debugger;
      var clearDate = value.target.value;
      if (clearDate.length === 1) {
        if (this.activeIndex === 1) {
          this.changeVoyageList(this.currentPage, this.selectedRows, "", "Completed");
        } else {
          this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced");
        }
      }
    }
  }, {
    key: "showPop",
    value: function showPop(status, summary, detail) {
      this.messageService.add({
        severity: status,
        summary: summary,
        detail: detail
      });
    }
  }, {
    key: "close",
    value: function close() {
      // this.dialogRef.close();
    }
    // Pagination Code here
  }, {
    key: "paginate",
    value: function paginate(pagiNo) {
      console.log(pagiNo);
      this.firstCount = pagiNo.first + 1;
      this.nextCount = pagiNo.first + +pagiNo.rows;
      this.currentPage = pagiNo.page;
      var status = this.status;
      this.changeVoyageList(this.currentPage, +pagiNo.rows, "", status);
    }
  }, {
    key: "filterBy",
    value: function filterBy(inputVal) {
      console.log(inputVal.target.value);
      var filterValue = inputVal.target.value;
      var status = this.status;
      this.changeVoyageList(this.currentPage, this.totalRows, filterValue, status);
    }
  }, {
    key: "getChangeRows",
    value: function getChangeRows(totalRows) {
      debugger;
      this.firstCount = this.firstCount;
      this.nextCount = this.firstCount + +totalRows - 1;
      var status = this.status;
      this.changeVoyageList(this.currentPage, totalRows, "", status);
    }
  }, {
    key: "viewHold",
    value: function viewHold(voyageId, IMONumber) {
      this.router.navigate(['/pages/report/hold-cleaning-reports'], {
        queryParams: {
          id: voyageId,
          IMONumber: IMONumber
        }
      });
    }
  }, {
    key: "onSort",
    value: function onSort(field) {
      debugger;
      if (this.currentSortField === field) {
        this.sortOrder = -this.sortOrder;
        this.orderBy = this.sortOrder === 1 ? 'asc' : 'desc';
        this.changeVoyageList(this.currentPage, this.selectedRows, "", this.status, field, this.orderBy);
      } else {
        this.currentSortField = field;
        this.sortOrder = 1;
        this.orderBy = this.sortOrder === 1 ? 'asc' : 'desc';
        this.changeVoyageList(this.currentPage, this.selectedRows, "", this.status, field, this.orderBy);
      }
      console.log("Sorting by ".concat(this.currentSortField, " in ").concat(this.sortOrder === 1 ? 'ascending' : 'descending', " order."));
    }
  }]);
  return VoyageListComponent;
}();
_class = VoyageListComponent;
_class.ɵfac = function VoyageListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_pages_settings_cargo_cargo_service__WEBPACK_IMPORTED_MODULE_7__.CargoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_8__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_voyage_service__WEBPACK_IMPORTED_MODULE_9__.VoyageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_10__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-voyage-list"]],
  viewQuery: function VoyageListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_13__.ConfirmationService])],
  decls: 307,
  vars: 88,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-2"], [1, "row", "col-8", "justify-content-between"], [1, "p-1", "col-3"], ["placeholder", "VESSEL", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "ngClass", "appendTo", "keyup", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "placeholder", "YOY. DATE RANGE", 3, "nbDatepicker", "keydown"], [3, "rangeChange"], ["formpicker", ""], ["placeholder", "LOAD PORT", "fullWidth", "", "fieldSize", "medium", 1, "fixed-dropdown-size", 3, "appendTo", "keyup", "change"], ["placeholder", "CARGO", "fullWidth", "", "fieldSize", "medium", 1, "fixed-dropdown-size", 3, "appendTo", "keyup", "change"], ["nbButton", "", 3, "click"], [1, "d-flex", "justify-content-between", "py-3"], ["nbButton", "", "label", "", 1, "mr-2", 3, "status", "ngClass", "click"], ["nbButton", "", "label", "", 3, "status", "ngClass", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file", "nbTooltip", "CSV", "nbTooltipPlacement", "top", 1, "mr-2", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file-excel", "nbTooltip", "XLS", "nbTooltipPlacement", "top", 1, "p-button-success", "mr-2", 3, "click"], [1, "mt-4"], [1, "row", "p-3", "justify-content-end", "align-items-center"], [1, "col-4", "p-0", "text-right"], ["type", "text", "placeholder", "Search By Vessel Name", "nbInput", "", 3, "ngModel", "keyup", "ngModelChange"], ["styleClass", "p-datatable-gridlines", "dataKey", "id", 3, "columns", "value", "scrollable", "selection", "tableStyle", "showCurrentPageReport", "globalFilterFields", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "px-3", "row", "align-items-center", "justify-content-between"], [2, "color", "--card-text-color", "font-family", "Poppins, sans-serif", "font-weight", "normal", "font-size", "0.8125rem"], [1, "row", "px-3", "align-items-center"], [3, "rows", "totalRecords", "onPageChange"], ["placeholder", "", 3, "selected", "selectedChange"], ["value", "25"], ["value", "50"], ["value", "100"], ["header", "Voyage Details", "appendTo", "body", 1, "container", 3, "resizable", "modal", "maximizable", "visible", "contentStyle", "visibleChange"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-4", "col-lg-4", "col-sm-12"], [4, "ngIf"], [1, "col-12"], ["pTemplate", "footer"], [3, "value"], ["pFrozenColumn", "", "pSortableColumn", "VesselNames", 2, "min-width", "170px", 3, "click"], ["field", "VesselNames", 3, "order"], ["pSortableColumn", "StatusNames", 3, "click"], ["field", "StatusNames", 3, "order"], ["pSortableColumn", "VoyageCommenceDates", 2, "min-width", "120px", 3, "click"], ["field", "VoyageCommenceDates", 3, "order"], ["pSortableColumn", "VesselVoyageCompletingDate", 2, "min-width", "120px", 3, "click"], ["field", "VesselVoyageCompletingDate"], ["pSortableColumn", "VayageNo", 3, "click"], ["field", "VayageNo"], ["pSortableColumn", "Fixture", 3, "click"], ["field", "Fixture"], ["pSortableColumn", "LoadToPortName", 3, "click"], ["field", "LoadToPortName"], ["pSortableColumn", "CargoToLoadName", 3, "click"], ["field", "CargoToLoadName"], ["pSortableColumn", "PreviousCargoName", 3, "click"], ["field", "PreviousCargoName"], ["pSortableColumn", "ITDBudget", 3, "click"], ["field", "ITDBudget"], ["pSortableColumn", "ITCBudget", 3, "click"], ["field", "ITCBudget"], ["pSortableColumn", "ITBBudget", 3, "click"], ["field", "ITBBudget"], ["pSortableColumn", "SCGBudget", 3, "click"], ["field", "SCGBudget"], ["pSortableColumn", "SHABudget", 3, "click"], ["field", "SHABudget"], ["pSortableColumn", "HCEBudget", 3, "click"], ["field", "HCEBudget"], ["pSortableColumn", "HCCBudget", 3, "click"], ["field", "HCCBudget"], ["pSortableColumn", "HCXBudget", 3, "click"], ["field", "HCXBudget"], ["pSortableColumn", "HCBBudget", 3, "click"], ["field", "HCBBudget"], ["pFrozenColumn", ""], [3, "pEditableRow"], ["pFrozenColumn", "", 2, "width", "300px"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-send", "class", "p-button-primary mr-2", "nbTooltip", "View Hold Reports", "nbTooltipPlacement", "top", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "View", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "p-button-primary", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-send", "nbTooltip", "View Hold Reports", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["colspan", "18"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-times", "label", "Dismiss", 1, "p-button-text", 3, "click"]],
  template: function VoyageListComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Voyage Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "ng-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function VoyageListComponent_Template_ng_select_keyup_7_listener($event) {
        return ctx.getVesselList(1, 100, $event.target.value);
      })("change", function VoyageListComponent_Template_ng_select_change_7_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r95);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](37);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r4.filterGlobal($event, "contains"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, VoyageListComponent_ng_option_8_Template, 2, 2, "ng-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 4)(10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown", function VoyageListComponent_Template_input_keydown_10_listener($event) {
        return ctx.clearDateRange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "nb-rangepicker", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("rangeChange", function VoyageListComponent_Template_nb_rangepicker_rangeChange_11_listener($event) {
        return ctx.dateFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 4)(14, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function VoyageListComponent_Template_ng_select_keyup_14_listener($event) {
        return ctx.getPortList(1, 100, $event.target.value);
      })("change", function VoyageListComponent_Template_ng_select_change_14_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r95);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](37);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r4.filterGlobal($event, "contains"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, VoyageListComponent_ng_option_15_Template, 2, 2, "ng-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 4)(17, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function VoyageListComponent_Template_ng_select_keyup_17_listener($event) {
        return ctx.getCargoList(1, 100, $event.target.value);
      })("change", function VoyageListComponent_Template_ng_select_change_17_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r95);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](37);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r4.filterGlobal($event, "contains"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, VoyageListComponent_ng_option_18_Template, 2, 2, "ng-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div")(20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_Template_button_click_20_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Add Voyage");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 13)(23, "div")(24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_Template_button_click_24_listener() {
        return ctx.changeVoyageList(ctx.currentPage, ctx.selectedRows, "", "Commenced");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " COMMENCED ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_Template_button_click_26_listener() {
        return ctx.changeVoyageList(ctx.currentPage, ctx.selectedRows, "", "Completed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " COMPLETED VOYAGES ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div")(29, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_Template_button_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r95);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](37);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r4.exportCSV());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VoyageListComponent_Template_button_click_30_listener() {
        return ctx.exportExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "nb-card", 18)(32, "nb-card-body")(33, "div", 19)(34, "div", 20)(35, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function VoyageListComponent_Template_input_keyup_35_listener($event) {
        return ctx.filterBy($event);
      })("ngModelChange", function VoyageListComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.filterTableValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "p-table", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function VoyageListComponent_Template_p_table_selectionChange_36_listener($event) {
        return ctx.selectedProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, VoyageListComponent_ng_template_38_Template, 57, 3, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, VoyageListComponent_ng_template_39_Template, 82, 64, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, VoyageListComponent_ng_template_40_Template, 3, 1, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 27)(42, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 29)(45, "p-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onPageChange", function VoyageListComponent_Template_p_paginator_onPageChange_45_listener($event) {
        return ctx.paginate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "nb-select", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectedChange", function VoyageListComponent_Template_nb_select_selectedChange_46_listener($event) {
        return ctx.getChangeRows($event);
      })("selectedChange", function VoyageListComponent_Template_nb_select_selectedChange_46_listener($event) {
        return ctx.selectedRows = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "nb-option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "nb-option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "nb-option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "p-dialog", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("visibleChange", function VoyageListComponent_Template_p_dialog_visibleChange_54_listener($event) {
        return ctx.dialogVisible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 36)(56, "div", 37)(57, "label")(58, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "Vessel Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, VoyageListComponent_p_60_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 37)(62, "label")(63, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "LTC/MUR Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, VoyageListComponent_p_65_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 37)(67, "label")(68, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "Owner Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, VoyageListComponent_p_70_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 37)(72, "label")(73, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "Trade Area Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, VoyageListComponent_p_75_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 37)(77, "label")(78, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, "Voyage Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](80, VoyageListComponent_p_80_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 37)(82, "label")(83, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, "Voyage Commence Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, VoyageListComponent_p_85_Template, 3, 4, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 37)(87, "label")(88, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, "Vessel Voyage Completed Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, VoyageListComponent_p_90_Template, 3, 4, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 37)(92, "label")(93, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "Veson Entry Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, VoyageListComponent_p_95_Template, 3, 4, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 37)(97, "label")(98, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "Fixture");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](100, VoyageListComponent_p_100_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "div", 37)(102, "label")(103, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](104, "Opr");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, VoyageListComponent_p_105_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "div", 37)(107, "label")(108, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, "Load To Port Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, VoyageListComponent_p_110_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "div", 37)(112, "label")(113, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114, "Discharge Port Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](115, VoyageListComponent_p_115_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 37)(117, "label")(118, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119, "Cargo To Load Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, VoyageListComponent_p_120_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 37)(122, "label")(123, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124, "Previous Cargo Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](125, VoyageListComponent_p_125_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 37)(127, "label")(128, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, "Hold Pass/Fail Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](130, VoyageListComponent_p_130_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "div", 37)(132, "label")(133, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "TCC Budget USD");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](135, VoyageListComponent_p_135_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "div", 37)(137, "label")(138, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, "TCC Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](140, VoyageListComponent_p_140_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "div", 37)(142, "label")(143, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](144, "TCC Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](145, VoyageListComponent_p_145_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "div", 37)(147, "label")(148, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, "ITD Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](150, VoyageListComponent_p_150_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "div", 37)(152, "label")(153, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154, "ITD Budget");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](155, VoyageListComponent_p_155_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "div", 37)(157, "label")(158, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](159, "ITD Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](160, VoyageListComponent_p_160_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "div", 37)(162, "label")(163, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164, "ITD Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](165, VoyageListComponent_p_165_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "div", 37)(167, "label")(168, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](169, "ITC Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](170, VoyageListComponent_p_170_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "div", 37)(172, "label")(173, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](174, "ITC Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](175, VoyageListComponent_p_175_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "div", 37)(177, "label")(178, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "ITC Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](180, VoyageListComponent_p_180_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "div", 37)(182, "label")(183, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184, "ITB Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](185, VoyageListComponent_p_185_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "div", 37)(187, "label")(188, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](189, "ITB Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](190, VoyageListComponent_p_190_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "div", 37)(192, "label")(193, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, "ITB Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](195, VoyageListComponent_p_195_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](196, "div", 37)(197, "label")(198, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](199, "HCB Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](200, VoyageListComponent_p_200_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](201, "div", 37)(202, "label")(203, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](204, "HCB Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](205, VoyageListComponent_p_205_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "div", 37)(207, "label")(208, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209, "HCB Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](210, VoyageListComponent_p_210_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](211, "div", 37)(212, "label")(213, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](214, "SCG Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](215, VoyageListComponent_p_215_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "div", 37)(217, "label")(218, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](219, "SCG Budget");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](220, VoyageListComponent_p_220_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "div", 37)(222, "label")(223, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](224, "SCG Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](225, VoyageListComponent_p_225_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "div", 37)(227, "label")(228, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](229, "SCG Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](230, VoyageListComponent_p_230_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "div", 37)(232, "label")(233, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](234, "SHA Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](235, VoyageListComponent_p_235_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "div", 37)(237, "label")(238, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](239, "SHA Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](240, VoyageListComponent_p_240_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "div", 37)(242, "label")(243, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, "SHA Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](245, VoyageListComponent_p_245_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](246, "div", 37)(247, "label")(248, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](249, "HCE Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](250, VoyageListComponent_p_250_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](251, "div", 37)(252, "label")(253, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](254, "HCE Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](255, VoyageListComponent_p_255_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](256, "div", 37)(257, "label")(258, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](259, "HCE Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](260, VoyageListComponent_p_260_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](261, "div", 37)(262, "label")(263, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](264, "HCC Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](265, VoyageListComponent_p_265_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](266, "div", 37)(267, "label")(268, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](269, "HCC Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](270, VoyageListComponent_p_270_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "div", 37)(272, "label")(273, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](274, "HCC Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](275, VoyageListComponent_p_275_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](276, "div", 37)(277, "label")(278, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](279, "HCX Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](280, VoyageListComponent_p_280_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](281, "div", 37)(282, "label")(283, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](284, "HCX Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](285, VoyageListComponent_p_285_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](286, "div", 37)(287, "label")(288, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](289, "HCX Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](290, VoyageListComponent_p_290_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](291, "div", 39)(292, "label")(293, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](294, "Budgeted details date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](295, VoyageListComponent_p_295_Template, 3, 4, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](296, "div", 39)(297, "label")(298, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](299, "Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](300, VoyageListComponent_p_300_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](301, "div", 39)(302, "label")(303, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](304, "Final Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](305, VoyageListComponent_p_305_Template, 2, 1, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](306, VoyageListComponent_ng_template_306_Template, 1, 0, "ng-template", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](83, _c1))("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.vesselDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nbDatepicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.port);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.cargo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("status", ctx.activeIndex === 0 ? "primary" : "control")("ngClass", ctx.activeIndex === 0 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("status", ctx.activeIndex === 1 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.filterTableValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.voyageList)("scrollable", true)("selection", ctx.selectedProducts)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](84, _c2))("showCurrentPageReport", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](85, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"]("Showing ", ctx.firstCount, " to ", ctx.nextCount, " of ", ctx.totalCount, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", ctx.selectedRows)("totalRecords", ctx.totalCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selected", ctx.selectedRows);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](86, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("resizable", false)("modal", true)("maximizable", true)("visible", ctx.dialogVisible)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](87, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedItem);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_17__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.Dialog, primeng_paginator__WEBPACK_IMPORTED_MODULE_20__.Paginator, primeng_table__WEBPACK_IMPORTED_MODULE_21__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_21__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_21__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_21__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_21__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.Toast, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbRangepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe]
});

/***/ }),

/***/ 73021:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-merge/merge-voyage/merge-voyage.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MergeVoyageComponent": () => (/* binding */ MergeVoyageComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/voyage/voyage-list/voyage.service */ 72780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/theme */ 23243);




var _class;











function MergeVoyageComponent_ng_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r7.VesselName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r7.VesselName, "");
  }
}
function MergeVoyageComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Vessel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Voyage Commence Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Voyage Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Fixture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Load Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Discharge Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MergeVoyageComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", product_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r8.VesselName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 7, product_r8.VoyageCommenceDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r8.VayageNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r8.Fixture);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r8.LoadToPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r8.DischargePort);
  }
}
function MergeVoyageComponent_30_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.emptymessage1);
  }
}
function MergeVoyageComponent_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MergeVoyageComponent_30_ng_template_0_Template, 3, 1, "ng-template", 21);
  }
}
function MergeVoyageComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Vessel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Voyage Commence Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Voyage Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Fixture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Load Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Discharge Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MergeVoyageComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var product_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", product_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r10.VesselName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 7, product_r10.VoyageCommenceDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r10.VoyageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r10.Fixture);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r10.LoadPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r10.DischargePort);
  }
}
function MergeVoyageComponent_37_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.emptymessage2);
  }
}
function MergeVoyageComponent_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MergeVoyageComponent_37_ng_template_0_Template, 3, 1, "ng-template", 21);
  }
}
var _c0 = function _c0() {
  return {
    "min-width": "100%"
  };
};
var MergeVoyageComponent = /*#__PURE__*/function () {
  function MergeVoyageComponent(router, vesselService, voyageService, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MergeVoyageComponent);
    this.router = router;
    this.vesselService = vesselService;
    this.voyageService = voyageService;
    this.messageService = messageService;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(MergeVoyageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.getVesselListRecords(1, 100, "");
      setTimeout(function () {
        _this.emptymessage1 = "Select Vessel Name";
        _this.emptymessage2 = "Select Vessel Name";
      }, 200);
    }
  }, {
    key: "backToList",
    value: function backToList() {
      this.router.navigate(['/pages/voyage/voyage-merge-list']);
    }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this2 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        _this2.vesselDropdown = res.VesselData;
        console.log(_this2.vesselDropdown, 'vesselDropdown');
      });
    }
  }, {
    key: "mergeVoyage",
    value: function mergeVoyage() {
      var _this3 = this;
      if (this.selectedVoyageDesktop !== undefined) {
        var _this$selectedVoyageW, _this$selectedVoyageD;
        var voyageWebID = (_this$selectedVoyageW = this.selectedVoyageWeb) === null || _this$selectedVoyageW === void 0 ? void 0 : _this$selectedVoyageW.VoyageId;
        var voyageDestopID = (_this$selectedVoyageD = this.selectedVoyageDesktop) === null || _this$selectedVoyageD === void 0 ? void 0 : _this$selectedVoyageD.VoyageId;
        this.voyageService.getMergedVoyageList(voyageWebID, voyageDestopID).subscribe(function (res) {
          if (res) {
            console.log(res, voyageWebID, voyageDestopID, "code");
            _this3.showPop('success', 'Success', 'Record Saved');
            // this.getVoyageDesktopList(vesselId);
            // this.getVoyageWebOfficeList(vesselId);
            _this3.vesselNameget(_this3.vesselSelected);
          }
        });
      } else {
        this.showPop('error', 'Alert', 'Select Voyage For Match');
      }
    }
  }, {
    key: "vesselNameget",
    value: function vesselNameget(selectVessel) {
      this.vesselSelected = selectVessel;
      console.log(selectVessel, 'sekjksjdf');
      if (!selectVessel) {
        this.voyageWeb = null;
        this.voyageDesktop = null;
      } else {
        this.getVoyageWebOfficeList(selectVessel);
        this.getVoyageDesktopList(selectVessel);
      }
    }
  }, {
    key: "getVoyageWebOfficeList",
    value: function () {
      var _getVoyageWebOfficeList = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(vesselId) {
        var _this4 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.voyageService.getVoyageWebOfficeList(vesselId).subscribe(function (res) {
                if (res.length === 0) {
                  console.log('null');
                  _this4.emptymessage1 = 'Record Not Found';
                  _this4.voyageWeb = null;
                } else {
                  _this4.voyageWeb = res;
                }
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getVoyageWebOfficeList(_x) {
        return _getVoyageWebOfficeList.apply(this, arguments);
      }
      return getVoyageWebOfficeList;
    }()
  }, {
    key: "getVoyageDesktopList",
    value: function () {
      var _getVoyageDesktopList = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(vesselId) {
        var _this5 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.voyageService.getVoyageDesktopList(vesselId).subscribe(function (res) {
                if (res.length === 0) {
                  _this5.voyageDesktop = null;
                  _this5.emptymessage2 = 'Record Not Found';
                } else {
                  _this5.voyageDesktop = res;
                }
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getVoyageDesktopList(_x2) {
        return _getVoyageDesktopList.apply(this, arguments);
      }
      return getVoyageDesktopList;
    }()
  }, {
    key: "showPop",
    value: function showPop(status, summary, detail) {
      this.messageService.add({
        severity: status,
        summary: summary,
        detail: detail
      });
    }
  }]);
  return MergeVoyageComponent;
}();
_class = MergeVoyageComponent;
_class.ɵfac = function MergeVoyageComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_4__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_5__.VoyageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-merge-voyage"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService])],
  decls: 39,
  vars: 12,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "primary", 1, "ml-3", 3, "click"], [1, "col-9"], [1, "mb-0", 2, "font-weight", "700", "text-transform", "uppercase"], [1, "col-3"], ["for", "VesselId", 1, "form-label"], [2, "color", "red"], ["placeholder", "Select Vessel", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo", "change", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [1, "text-center", 2, "font-weight", "700", "text-transform", "uppercase"], ["selectionMode", "single", "dataKey", "VoyageId", 3, "value", "selection", "tableStyle", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngIf"], [1, "col-6", "mergeTable"], [3, "value"], [3, "pSelectableRow"], ["pTemplate", "emptymessage"], ["colspan", "6"]],
  template: function MergeVoyageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Voyage Merge");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MergeVoyageComponent_Template_button_click_6_listener() {
        return ctx.backToList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Back To List");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MergeVoyageComponent_Template_button_click_8_listener() {
        return ctx.mergeVoyage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Merge Voyage");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nb-card")(11, "nb-card-header", 1)(12, "div", 4)(13, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Voyage Merge Right To Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6)(16, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Vessel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ng-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MergeVoyageComponent_Template_ng_select_change_20_listener($event) {
        return ctx.vesselNameget($event);
      })("keyup", function MergeVoyageComponent_Template_ng_select_keyup_20_listener($event) {
        return ctx.getVesselListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, MergeVoyageComponent_ng_option_21_Template, 2, 2, "ng-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "nb-card-body", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 12)(25, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Voyage Web Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p-table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function MergeVoyageComponent_Template_p_table_selectionChange_27_listener($event) {
        return ctx.selectedVoyageWeb = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, MergeVoyageComponent_ng_template_28_Template, 13, 0, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, MergeVoyageComponent_ng_template_29_Template, 14, 10, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, MergeVoyageComponent_30_Template, 1, 0, null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 18)(32, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Voyage Desktop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p-table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function MergeVoyageComponent_Template_p_table_selectionChange_34_listener($event) {
        return ctx.selectedVoyageDesktop = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, MergeVoyageComponent_ng_template_35_Template, 13, 0, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, MergeVoyageComponent_ng_template_36_Template, 14, 10, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, MergeVoyageComponent_37_Template, 1, 0, null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.vesselDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.voyageWeb)("selection", ctx.selectedVoyageWeb)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.voyageDesktop || ctx.voyageDesktop.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.voyageDesktop)("selection", ctx.selectedVoyageDesktop)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.voyageDesktop || ctx.voyageDesktop.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe]
});

/***/ }),

/***/ 46393:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-merge/voyage-merge-list/voyage-merge-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageMergeListComponent": () => (/* binding */ VoyageMergeListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/voyage/voyage-list/voyage.service */ 72780);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;












function VoyageMergeListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "span", 10)(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function VoyageMergeListComponent_ng_template_11_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function VoyageMergeListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Vessel Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Status Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Voyage Commence date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Voyage Completed date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Fixture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Load Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Cargo to Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Previous Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " ITD (days)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " ITC (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " ITB (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " SCG (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " SHA (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "p-sortIcon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " HCE (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "p-sortIcon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " HCC (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "p-sortIcon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " HCX (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " HCB (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "p-sortIcon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VoyageMergeListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 46)(1, "td")(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td")(20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td")(28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td")(32, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td")(36, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "td")(40, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "td")(44, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "td")(48, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td")(52, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td")(56, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td")(60, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td")(64, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "td")(68, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td")(72, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoyageMergeListComponent_ng_template_13_Template_button_click_74_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      var rowData_r8 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.deleteDetails(rowData_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.StatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 54, rowData_r8.VoyageCommenceDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 57, rowData_r8.VesselVoyageCompletedDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.Fixture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.LoadToPort, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.CargotoLoad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.PreviousCargo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.ITDBudget - rowData_r8.ITDActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.ITCBudget - rowData_r8.ITCActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.ITBBudget - rowData_r8.ITBActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.SCGBudget - rowData_r8.SCGActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.SHABudget - rowData_r8.SHAActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.HCEBudget - rowData_r8.HCEActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.HCCBudget - rowData_r8.HCCActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.HCXBudget - rowData_r8.HCXActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.HCBBudget - rowData_r8.HCBActual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function VoyageMergeListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["CircularCategoryName", "ApplicableName", "VesselName", "CreatedDate"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var VoyageMergeListComponent = /*#__PURE__*/function () {
  function VoyageMergeListComponent(router, voyageService, messageService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VoyageMergeListComponent);
    this.router = router;
    this.voyageService = voyageService;
    this.messageService = messageService;
    this.dialogService = dialogService;
    this.checkListRecord = true;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VoyageMergeListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getMergeList();
    }
  }, {
    key: "getMergeList",
    value: function getMergeList() {
      var _this = this;
      this.voyageService.getMergedList().subscribe(function (res) {
        if (res.length === 0) {
          _this.emptymessage = 'No Record Found';
        } else {
          _this.voyageMergeList = res;
        }
      });
    }
  }, {
    key: "mergeVoyage",
    value: function mergeVoyage() {
      this.router.navigate(['/pages/voyage/merge-voyage']);
    }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this2 = this;
      var dialogRef = this.dialogService.open(_app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogComponent, {
        context: {
          title: "Dynamic Dialog",
          message: 'Are You Sure Want To Delete',
          buttons: [{
            label: 'Cancel',
            value: false,
            status: 'basic'
          }, {
            label: 'Delete',
            value: true,
            status: 'danger'
          }]
        }
      });
      ////debugger;
      dialogRef.onClose.subscribe(function (result) {
        if (result === true) {
          _this2.voyageService.deleteVoyage(deleteRecord).subscribe(function (res) {
            ////debugger;
            if (res) {
              _this2.getMergeList();
              _this2.showPop('error', 'Delete', 'Record Deleted');
            }
          });
        } else if (result === false) {} else {}
      });
    }
  }, {
    key: "showPop",
    value: function showPop(status, summary, detail) {
      this.messageService.add({
        severity: status,
        summary: summary,
        detail: detail
      });
    }
  }]);
  return VoyageMergeListComponent;
}();
_class = VoyageMergeListComponent;
_class.ɵfac = function VoyageMergeListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_3__.VoyageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-voyage-merge-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService])],
  decls: 16,
  vars: 8,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["nbInput", "", "type", "text", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "VesselName"], ["field", "VesselName"], ["pSortableColumn", "StatusName"], ["field", "StatusName"], ["pSortableColumn", "VoyageCommenceDate", 2, "min-width", "120px"], ["field", "VoyageCommenceDate"], ["pSortableColumn", "VesselVoyageCompletingDate", 2, "min-width", "120px"], ["field", "VesselVoyageCompletingDate"], ["pSortableColumn", "Fixture"], ["field", "Fixture"], ["pSortableColumn", "LoadToPortName"], ["field", "LoadToPortName"], ["pSortableColumn", "CargoToLoadName"], ["field", "CargoToLoadName"], ["pSortableColumn", "PreviousCargoName"], ["field", "PreviousCargoName"], ["pSortableColumn", "ITDBudget"], ["field", "ITDBudget"], ["pSortableColumn", "ITCBudget"], ["field", "ITCBudget"], ["pSortableColumn", "ITBBudget"], ["field", "ITNBudget"], ["pSortableColumn", "SCGBudget"], ["field", "SCGBudget"], ["pSortableColumn", "SHABudget"], ["field", "SHABudget"], ["pSortableColumn", "HCEBudget"], ["field", "HCEBudget"], ["pSortableColumn", "HCCBudget"], ["field", "HCCBudget"], ["pSortableColumn", "HCXBudget"], ["field", "HCXBudget"], ["pSortableColumn", "HCBBudget"], ["field", "HCBBudget"], [3, "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "p-button-primary", 3, "click"], ["colspan", "18"]],
  template: function VoyageMergeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Voyage Merge List Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoyageMergeListComponent_Template_button_click_6_listener() {
        return ctx.mergeVoyage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Add Voyage Merge");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nb-card")(9, "p-table", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VoyageMergeListComponent_ng_template_11_Template, 3, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VoyageMergeListComponent_ng_template_12_Template, 54, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, VoyageMergeListComponent_ng_template_13_Template, 75, 60, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, VoyageMergeListComponent_ng_template_14_Template, 3, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.voyageMergeList)("rows", 10)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_11__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe]
});

/***/ }),

/***/ 80527:
/*!*******************************************************!*\
  !*** ./src/app/pages/voyage/voyage-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageRoutingModule": () => (/* binding */ VoyageRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _voyage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voyage.component */ 87068);
/* harmony import */ var _voyage_list_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voyage-list/add-voyage/add-voyage.component */ 75702);
/* harmony import */ var _voyage_list_voyage_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voyage-list/voyage-list.component */ 49422);
/* harmony import */ var _voyage_merge_voyage_merge_list_voyage_merge_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voyage-merge/voyage-merge-list/voyage-merge-list.component */ 46393);
/* harmony import */ var _voyage_merge_merge_voyage_merge_voyage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voyage-merge/merge-voyage/merge-voyage.component */ 73021);
/* harmony import */ var _voyage_annual_budget_voyage_annual_budget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voyage-annual-budget/voyage-annual-budget.component */ 61600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;









var routes = [{
  path: '',
  component: _voyage_component__WEBPACK_IMPORTED_MODULE_2__.VoyageComponent,
  children: [{
    path: 'add-voyage',
    component: _voyage_list_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_3__.AddVoyageComponent
  }, {
    path: 'voyage-list',
    component: _voyage_list_voyage_list_component__WEBPACK_IMPORTED_MODULE_4__.VoyageListComponent
  }, {
    path: 'voyage-merge-list',
    component: _voyage_merge_voyage_merge_list_voyage_merge_list_component__WEBPACK_IMPORTED_MODULE_5__.VoyageMergeListComponent
  }, {
    path: 'merge-voyage',
    component: _voyage_merge_merge_voyage_merge_voyage_component__WEBPACK_IMPORTED_MODULE_6__.MergeVoyageComponent
  }, {
    path: 'voyage-budget',
    component: _voyage_annual_budget_voyage_annual_budget_component__WEBPACK_IMPORTED_MODULE_7__.VoyageAnnualBudgetComponent
  }]
}];
var VoyageRoutingModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VoyageRoutingModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VoyageRoutingModule);
});
_class = VoyageRoutingModule;
_class.ɵfac = function VoyageRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](VoyageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 87068:
/*!**************************************************!*\
  !*** ./src/app/pages/voyage/voyage.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageComponent": () => (/* binding */ VoyageComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var VoyageComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VoyageComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VoyageComponent);
});
_class = VoyageComponent;
_class.ɵfac = function VoyageComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-voyage"]],
  decls: 1,
  vars: 0,
  template: function VoyageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 48614:
/*!***********************************************!*\
  !*** ./src/app/pages/voyage/voyage.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageModule": () => (/* binding */ VoyageModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _voyage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voyage-routing.module */ 80527);
/* harmony import */ var _voyage_list_voyage_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voyage-list/voyage-list.component */ 49422);
/* harmony import */ var _voyage_list_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voyage-list/add-voyage/add-voyage.component */ 75702);
/* harmony import */ var _voyage_list_view_voyage_view_voyage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voyage-list/view-voyage/view-voyage.component */ 72286);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/accordion */ 32174);
/* harmony import */ var primeng_animate__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! primeng/animate */ 25291);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/autocomplete */ 3631);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/avatar */ 68271);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/badge */ 68639);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/blockui */ 17456);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/breadcrumb */ 78676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/calendar */ 70585);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! primeng/card */ 94247);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/carousel */ 75700);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/cascadeselect */ 61118);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/checkbox */ 61989);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/chip */ 67147);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/chips */ 16022);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/colorpicker */ 5369);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/confirmdialog */ 32137);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/contextmenu */ 34076);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/dataview */ 77900);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/divider */ 15108);
/* harmony import */ var primeng_dock__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/dock */ 16600);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/dragdrop */ 34937);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/dropdown */ 82210);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/dynamicdialog */ 74325);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/fieldset */ 52946);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/fileupload */ 13388);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/galleria */ 15569);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/image */ 25054);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/inplace */ 89073);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/inputmask */ 23520);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/inputnumber */ 25047);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/inputswitch */ 17913);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/inputtext */ 51740);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/inputtextarea */ 63054);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/knob */ 47261);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/listbox */ 38433);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/megamenu */ 70450);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/menu */ 21327);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/menubar */ 40615);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/message */ 92665);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/messages */ 57772);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/multiselect */ 65722);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/orderlist */ 65900);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/overlaypanel */ 32435);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/paginator */ 1997);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/panel */ 9764);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/panelmenu */ 17919);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/password */ 73425);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/picklist */ 37198);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/progressbar */ 78235);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/progressspinner */ 97932);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/radiobutton */ 50613);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/rating */ 6408);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/scroller */ 93718);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/scrollpanel */ 83930);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/scrolltop */ 54216);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/selectbutton */ 85362);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/sidebar */ 23214);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/skeleton */ 17489);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/slidemenu */ 68861);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/slider */ 78177);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/speeddial */ 27963);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/spinner */ 73238);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/splitbutton */ 47463);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/splitter */ 83111);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/steps */ 1236);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/tabmenu */ 56163);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/tabview */ 58783);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/tag */ 86679);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/terminal */ 62922);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/tieredmenu */ 79512);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/timeline */ 540);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/togglebutton */ 31167);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! primeng/toolbar */ 1383);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! primeng/tree */ 14323);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! primeng/treeselect */ 56186);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! primeng/treetable */ 36237);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! primeng/tristatecheckbox */ 80630);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/virtualscroller */ 35779);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-smart-table */ 54526);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var _voyage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voyage.component */ 87068);
/* harmony import */ var _voyage_merge_voyage_merge_list_voyage_merge_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voyage-merge/voyage-merge-list/voyage-merge-list.component */ 46393);
/* harmony import */ var _voyage_merge_merge_voyage_merge_voyage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./voyage-merge/merge-voyage/merge-voyage.component */ 73021);
/* harmony import */ var _voyage_annual_budget_voyage_annual_budget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voyage-annual-budget/voyage-annual-budget.component */ 61600);
/* harmony import */ var _voyage_annual_budget_add_voyage_budget_add_voyage_budget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./voyage-annual-budget/add-voyage-budget/add-voyage-budget.component */ 13091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;




































































































var NB_Module = [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbMenuModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbTabsetModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbAutocompleteModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbStepperModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSpinnerModule];
var NG_Prime = [primeng_avatar__WEBPACK_IMPORTED_MODULE_15__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_18__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_20__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_21__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_22__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_24__.CascadeSelectModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_26__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_27__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_28__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_29__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_30__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_32__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_33__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_34__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_35__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_37__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_38__.DynamicDialogModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_39__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_40__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_41__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_42__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_43__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_44__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_45__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_46__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_47__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_48__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_49__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_50__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_51__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_52__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_53__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_54__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_55__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_56__.MultiSelectModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_57__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_58__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_59__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_60__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_61__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_62__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_63__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_64__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_65__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_66__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_67__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_68__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_69__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_70__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_71__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_72__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_73__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_74__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_75__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_76__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_77__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_78__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_79__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_80__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_81__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_82__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_83__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_84__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_85__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_86__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_87__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_88__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_89__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_90__.ToolbarModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_91__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_92__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_93__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_94__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_95__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_96__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_97__.CardModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_98__.NgSelectModule];
var VoyageModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VoyageModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VoyageModule);
});
_class = VoyageModule;
_class.ɵfac = function VoyageModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_99__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_99__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_100__.CommonModule, _voyage_routing_module__WEBPACK_IMPORTED_MODULE_2__.VoyageRoutingModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__.ThemeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_101__.NgxSkeletonLoaderModule, NG_Prime, NB_Module]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_99__["ɵɵsetNgModuleScope"](VoyageModule, {
    declarations: [_voyage_list_voyage_list_component__WEBPACK_IMPORTED_MODULE_3__.VoyageListComponent, _voyage_list_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_4__.AddVoyageComponent, _voyage_list_view_voyage_view_voyage_component__WEBPACK_IMPORTED_MODULE_5__.ViewVoyageComponent, _voyage_component__WEBPACK_IMPORTED_MODULE_7__.VoyageComponent, _voyage_merge_voyage_merge_list_voyage_merge_list_component__WEBPACK_IMPORTED_MODULE_8__.VoyageMergeListComponent, _voyage_merge_merge_voyage_merge_voyage_component__WEBPACK_IMPORTED_MODULE_9__.MergeVoyageComponent, _voyage_annual_budget_voyage_annual_budget_component__WEBPACK_IMPORTED_MODULE_10__.VoyageAnnualBudgetComponent, _voyage_annual_budget_add_voyage_budget_add_voyage_budget_component__WEBPACK_IMPORTED_MODULE_11__.AddVoyageBudgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_100__.CommonModule, _voyage_routing_module__WEBPACK_IMPORTED_MODULE_2__.VoyageRoutingModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_6__.ThemeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_101__.NgxSkeletonLoaderModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_15__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_18__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_19__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_20__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_21__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_22__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_24__.CascadeSelectModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_26__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_27__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_28__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_29__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_30__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_32__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_33__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_34__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_35__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_37__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_38__.DynamicDialogModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_39__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_40__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_41__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_42__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_43__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_44__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_45__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_46__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_47__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_48__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_49__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_50__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_51__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_52__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_53__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_54__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_55__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_56__.MultiSelectModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_57__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_58__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_59__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_60__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_61__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_62__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_63__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_64__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_65__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_66__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_67__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_68__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_69__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_70__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_71__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_72__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_73__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_74__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_75__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_76__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_77__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_78__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_79__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_80__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_81__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_82__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_83__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_84__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_85__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_86__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_87__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_88__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_89__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_90__.ToolbarModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_91__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_92__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_93__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_94__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_95__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_96__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_97__.CardModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_98__.NgSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbMenuModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbTabsetModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbAutocompleteModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbStepperModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSpinnerModule]
  });
})();

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