"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_inventory_inventory_module_ts"],{

/***/ 96825:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/inventory/equipment-category/add-equipment-category/add-equipment-category.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEquipmentCategoryComponent": () => (/* binding */ AddEquipmentCategoryComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal-compatibility */ 50797);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_pages_settings_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/settings/unit/unit.service */ 89657);
/* harmony import */ var _app_pages_inventory_equipment_category_equipment_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/equipment-category/equipment-category.service */ 72006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;














function AddEquipmentCategoryComponent_small_21_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentCategoryComponent_small_21_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Equipment Category Name should have at most 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentCategoryComponent_small_21_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Equipment Category Name should have at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentCategoryComponent_small_21_nb_hint_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Equipment Category Name is duplicate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentCategoryComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEquipmentCategoryComponent_small_21_nb_hint_1_Template, 2, 0, "nb-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddEquipmentCategoryComponent_small_21_nb_hint_2_Template, 2, 0, "nb-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddEquipmentCategoryComponent_small_21_nb_hint_3_Template, 2, 0, "nb-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddEquipmentCategoryComponent_small_21_nb_hint_4_Template, 2, 0, "nb-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    var tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_3_0.dirty) && ((tmp_3_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r0.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.duplicateValue));
  }
}
function AddEquipmentCategoryComponent_ng_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r8.UnitId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r8.UnitName);
  }
}
function AddEquipmentCategoryComponent_small_29_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentCategoryComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEquipmentCategoryComponent_small_29_nb_hint_1_Template, 2, 0, "nb-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.nbForm.get("UnitId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddEquipmentCategoryComponent_small_40_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentCategoryComponent_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEquipmentCategoryComponent_small_40_nb_hint_1_Template, 2, 0, "nb-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.nbForm.get("ConsumptionType")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
var AddEquipmentCategoryComponent = /*#__PURE__*/function () {
  function AddEquipmentCategoryComponent(formBuilder, unitService, equipmentCategoryService, dialogRef, router, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddEquipmentCategoryComponent);
    this.formBuilder = formBuilder;
    this.unitService = unitService;
    this.equipmentCategoryService = equipmentCategoryService;
    this.dialogRef = dialogRef;
    this.router = router;
    this.messageService = messageService;
    this.formTitle = "Add";
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError();
    this.loading = false;
    this.nbForm = this.formBuilder.group({
      EquipmentCategoryId: [''],
      EquipmentCategoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      UnitId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      ConsumptionType: ['Consumables', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      Maker: [false],
      DateSupplied: [false],
      PortSupplied: [false],
      Condition: [false],
      DateofExpiry: [false]
    });
    // this.getSHAListRecords()
    this.getEquipmentListRecords();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddEquipmentCategoryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getDropdownList(1, 100, '');
      if (this.selectedItem !== undefined) {
        this.formTitle = "Update";
        this.nbForm.setValue({
          EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
          EquipmentCategoryName: this.selectedItem.EquipmentCategoryName,
          UnitId: this.selectedItem.UnitId,
          ConsumptionType: this.selectedItem.ConsumptionType,
          Maker: this.selectedItem.Maker,
          DateSupplied: this.selectedItem.DateSupplied,
          PortSupplied: this.selectedItem.PortSupplied,
          Condition: this.selectedItem.Condition,
          DateofExpiry: this.selectedItem.DateofExpiry
        });
      }
    }
  }, {
    key: "getEquipmentListRecords",
    value: function getEquipmentListRecords() {
      var _this = this;
      this.equipmentCategoryService.getEquipmentCategoryList().subscribe(function (res) {
        _this.equipmentCategory = res;
        if (_this.selectedItem !== undefined) {
          _this.nbForm.get('EquipmentCategoryName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _this.customErrorStateMatcher.duplicateValidator(_this.equipmentCategory, 'EquipmentCategoryName', _this.selectedItem.EquipmentCategoryName)]);
        } else {
          _this.nbForm.get('EquipmentCategoryName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _this.customErrorStateMatcher.duplicateValidator(_this.equipmentCategory, 'EquipmentCategoryName', null)]);
        }
      });
    }
  }, {
    key: "getDropdownList",
    value: function getDropdownList(cPage, nRows, filter) {
      var _this2 = this;
      this.unitService.getUnitList(cPage, nRows, filter).subscribe(function (res) {
        _this2.dropDownUnitlist = res.UnitData;
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      ////debugger;
      if (this.selectedItem !== undefined) {
        this.nbForm.reset({
          EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
          EquipmentCategoryName: null,
          UnitId: null,
          ConsumptionType: 'Consumables',
          Maker: false,
          DateSupplied: false,
          PortSupplied: false,
          Condition: false,
          DateofExpiry: false
        });
      } else {
        this.nbForm.reset({
          EquipmentCategoryId: '',
          EquipmentCategoryName: null,
          UnitId: null,
          ConsumptionType: 'Consumables',
          Maker: false,
          DateSupplied: false,
          PortSupplied: false,
          Condition: false,
          DateofExpiry: false
        });
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this3 = this;
      if (this.nbForm.valid) {
        this.customErrorStateMatcher.trimFormValues(this.nbForm);
        this.loading = true;
        if (this.selectedItem !== undefined) {
          var equipmentDetails = this.nbForm.value;
          //debugger
          this.equipmentCategoryService.updateEquipmentCategoryDetail(equipmentDetails).subscribe(function (res) {
            if (res == true) {
              _this3.loading = false;
              _this3.dialogRef.close(equipmentDetails);
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
          var _equipmentDetails = this.nbForm.value;
          this.equipmentCategoryService.addEquipmentCategoryDetail(_equipmentDetails).subscribe(function (res) {
            if (res == true) {
              _this3.loading = false;
              _this3.dialogRef.close(_equipmentDetails);
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
      } else {
        this.nbForm.markAllAsTouched();
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
  }]);
  return AddEquipmentCategoryComponent;
}();
_class = AddEquipmentCategoryComponent;
_class.ɵfac = function AddEquipmentCategoryComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_settings_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__.UnitService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_category_equipment_category_service__WEBPACK_IMPORTED_MODULE_4__.EquipmentCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-equipment-category"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_10__.root,
    useClass: _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError
  }, primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService])],
  decls: 56,
  vars: 9,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "px-3", "container", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "basic", "type", "button", 1, "mr-2", 3, "click"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2"], [1, "example-items-rows"], [1, "row", "px-2"], [1, "mb-3", "col-md-6", "col-lg-6", "col-sm-12"], ["for", "EquipmentCategoryName", 1, "form-label"], [2, "color", "red"], ["type", "text", "id", "EquipmentCategoryName", "formControlName", "EquipmentCategoryName", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Equipment Category Name"], [4, "ngIf"], ["for", "UnitId", 1, "form-label"], ["fullWidth", "", "formControlName", "UnitId", "placeholder", "Units", 1, "dropdown-top", 3, "appendTo", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "CountriesCovered", 1, "form-label"], ["formControlName", "ConsumptionType", "name", "reactive-forms-group", 1, "d-flex"], ["value", "Consumables"], ["value", "Hardware"], [1, "col-12"], ["formControlName", "Maker", "status", "basic", 1, "mr-2"], ["formControlName", "DateSupplied", "status", "basic", 1, "mr-2"], ["formControlName", "PortSupplied", "status", "basic", 1, "mr-2"], ["formControlName", "Condition", "status", "basic", 1, "mr-2"], ["formControlName", "DateofExpiry", "status", "basic", 1, "mr-2"], ["style", "color: red;", 4, "ngIf"], [3, "value"]],
  template: function AddEquipmentCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddEquipmentCategoryComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card-header", 2)(3, "div")(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEquipmentCategoryComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEquipmentCategoryComponent_Template_button_click_9_listener() {
        return ctx.clearForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Clear Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nb-card-body", 6)(14, "div", 7)(15, "div", 8)(16, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Equipment Category Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddEquipmentCategoryComponent_small_21_Template, 5, 4, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8)(23, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Units");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ng-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AddEquipmentCategoryComponent_Template_ng_select_keyup_27_listener($event) {
        return ctx.getDropdownList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddEquipmentCategoryComponent_ng_option_28_Template, 2, 2, "ng-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddEquipmentCategoryComponent_small_29_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 8)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Consumption Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "nb-radio-group", 17)(36, "nb-radio", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Consumables");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "nb-radio", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Hardware");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AddEquipmentCategoryComponent_small_40_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20)(42, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Field For this Equipment Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div")(45, "nb-checkbox", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Maker");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "nb-checkbox", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Date Supplied");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "nb-checkbox", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Port Supplied");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "nb-checkbox", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "nb-checkbox", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Date of Expiry");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "p-toast");
    }
    if (rf & 2) {
      var tmp_3_0;
      var tmp_7_0;
      var tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Equipment Category Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_3_0.touched) || ((tmp_3_0 = ctx.nbForm.get("EquipmentCategoryName")) == null ? null : tmp_3_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", "UnitId");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dropDownUnitlist);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.nbForm.get("UnitId")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.nbForm.get("UnitId")) == null ? null : tmp_7_0.touched) || ((tmp_7_0 = ctx.nbForm.get("UnitId")) == null ? null : tmp_7_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.nbForm.get("ConsumptionType")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.nbForm.get("ConsumptionType")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.nbForm.get("ConsumptionType")) == null ? null : tmp_8_0.dirty)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCheckboxComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbRadioComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbRadioGroupComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSpinnerDirective],
  styles: ["@media only screen and (max-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n@media only screen and (min-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n@media only screen and (min-width: 768px) and (min-width: 1200px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}"]
});

/***/ }),

/***/ 64983:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/inventory/equipment-category/equipment-category/equipment-category.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentCategoryComponent": () => (/* binding */ EquipmentCategoryComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_inventory_equipment_category_add_equipment_category_add_equipment_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/inventory/equipment-category/add-equipment-category/add-equipment-category.component */ 96825);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_pages_inventory_equipment_category_equipment_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/equipment-category/equipment-category.service */ 72006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;












function EquipmentCategoryComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "span", 11)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function EquipmentCategoryComponent_ng_template_11_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function EquipmentCategoryComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Equipment Category Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Unit Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Consumption Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function EquipmentCategoryComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 20)(1, "td")(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "div", 23)(15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipmentCategoryComponent_ng_template_13_Template_button_click_15_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.editDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipmentCategoryComponent_ng_template_13_Template_button_click_16_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.deleteDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.EquipmentCategoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.ConsumptionType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function EquipmentCategoryComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["EquipmentCategoryName", "UnitName", "ConsumptionType"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var EquipmentCategoryComponent = /*#__PURE__*/function () {
  function EquipmentCategoryComponent(dialogService, equipmentCategoryService, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EquipmentCategoryComponent);
    this.dialogService = dialogService;
    this.equipmentCategoryService = equipmentCategoryService;
    this.messageService = messageService;
    this.checkListRecord = false;
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EquipmentCategoryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.getEquipmentListRecords();
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "getEquipmentListRecords",
    value: function getEquipmentListRecords() {
      var _this2 = this;
      this.checkListRecord = false;
      this.equipmentCategoryService.getEquipmentCategoryList().subscribe(function (res) {
        _this2.equipmentCategory = res;
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
      this.dialogService.open(_app_pages_inventory_equipment_category_add_equipment_category_add_equipment_category_component__WEBPACK_IMPORTED_MODULE_2__.AddEquipmentCategoryComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        console.log(data, "value of ");
        if (data !== undefined) {
          _this3.showPop('success', 'Success', 'Record Saved');
          _this3.getEquipmentListRecords();
        }
      });
      ;
    }
  }, {
    key: "editDetails",
    value: function editDetails(_editDetails) {
      var _this4 = this;
      this.dialogService.open(_app_pages_inventory_equipment_category_add_equipment_category_add_equipment_category_component__WEBPACK_IMPORTED_MODULE_2__.AddEquipmentCategoryComponent, {
        context: {
          selectedItem: _editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this4.showPop('success', 'Success', 'Record Saved');
          _this4.getEquipmentListRecords();
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
          _this5.equipmentCategoryService.deleteEquipmentCategory(deleteRecord).subscribe(function (res) {
            if (res) {
              _this5.getEquipmentListRecords();
              _this5.showPop('error', 'Delete', 'Record Deleted');
            }
          });
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
  }]);
  return EquipmentCategoryComponent;
}();
_class = EquipmentCategoryComponent;
_class.ɵfac = function EquipmentCategoryComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_category_equipment_category_service__WEBPACK_IMPORTED_MODULE_4__.EquipmentCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-equipment-category"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 16,
  vars: 9,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "card", "mt-4"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["type", "text", "nbInput", "", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "EquipmentCategoryName"], ["field", "EquipmentCategoryName"], ["pSortableColumn", "UnitName"], ["field", "UnitName"], ["pSortableColumn", "ConsumptionType"], ["field", "ConsumptionType"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function EquipmentCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Equipment Category Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipmentCategoryComponent_Template_button_click_6_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Add Equipment Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3)(9, "p-table", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, EquipmentCategoryComponent_ng_template_11_Template, 3, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, EquipmentCategoryComponent_ng_template_12_Template, 12, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, EquipmentCategoryComponent_ng_template_13_Template, 18, 13, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EquipmentCategoryComponent_ng_template_14_Template, 3, 1, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.equipmentCategory)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c1))("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_11__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_11__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent]
});

/***/ }),

/***/ 60717:
/*!************************************************************************************!*\
  !*** ./src/app/pages/inventory/equipment/add-equipment/add-equipment.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEquipmentComponent": () => (/* binding */ AddEquipmentComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal-compatibility */ 50797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_equipment_category_equipment_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/inventory/equipment-category/equipment-category.service */ 72006);
/* harmony import */ var _app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/equipment/equipment.service */ 15657);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;














function AddEquipmentComponent_ng_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r4.EquipmentCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r4.EquipmentCategoryName);
  }
}
function AddEquipmentComponent_small_22_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEquipmentComponent_small_22_nb_hint_1_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.nbForm.get("EquipmentCategoryId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddEquipmentComponent_small_29_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_29_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Equipment Name should have at most 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_29_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Equipment Name should have at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_29_nb_hint_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Equipment Name is duplicate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEquipmentComponent_small_29_nb_hint_1_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddEquipmentComponent_small_29_nb_hint_2_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddEquipmentComponent_small_29_nb_hint_3_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddEquipmentComponent_small_29_nb_hint_4_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    var tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_3_0.dirty) && ((tmp_3_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.nbForm.get("EquipmentName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.duplicateValue));
  }
}
function AddEquipmentComponent_small_36_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_36_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Minimum Inventory Qty should have at most 50 digit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_36_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Minimum Inventory Qty should have at least 3 digit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddEquipmentComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddEquipmentComponent_small_36_nb_hint_1_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddEquipmentComponent_small_36_nb_hint_2_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddEquipmentComponent_small_36_nb_hint_3_Template, 2, 0, "nb-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.nbForm.get("MinOrderQty")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.nbForm.get("MinOrderQty")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r3.nbForm.get("MinOrderQty")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r3.nbForm.get("MinOrderQty")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r3.nbForm.get("MinOrderQty")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
  }
}
var AddEquipmentComponent = /*#__PURE__*/function () {
  function AddEquipmentComponent(router, messageService, formBuilder, equipmentCategoryService, equipmentService, dialogRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddEquipmentComponent);
    this.router = router;
    this.messageService = messageService;
    this.formBuilder = formBuilder;
    this.equipmentCategoryService = equipmentCategoryService;
    this.equipmentService = equipmentService;
    this.dialogRef = dialogRef;
    this.formTitle = "Add";
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError();
    this.loading = false;
    this.nbForm = this.formBuilder.group({
      EquipmentId: [''],
      // EquipmentCategoryName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
      EquipmentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      MinOrderQty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      EquipmentCategoryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      UnitName: ['']
    });
    this.getEquipmentListRecords();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddEquipmentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log(this.selectedItem, "selectedItem");
      this.getDropdownList();
      if (this.selectedItem !== undefined) {
        this.formTitle = "Update";
        this.nbForm.setValue({
          EquipmentId: this.selectedItem.EquipmentId,
          EquipmentName: this.selectedItem.EquipmentName,
          EquipmentCategoryId: this.selectedItem.EquipmentCategoryId,
          MinOrderQty: this.selectedItem.MinOrderQty,
          UnitName: this.selectedItem.UnitName
        });
      }
    }
  }, {
    key: "getEquipmentListRecords",
    value: function getEquipmentListRecords() {
      var _this = this;
      this.equipmentService.getEquipmentList().subscribe(function (res) {
        console.log(res);
        _this.equipmentCategory = res;
        if (_this.selectedItem !== undefined) {
          _this.nbForm.get('EquipmentName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _this.customErrorStateMatcher.duplicateValidator(_this.equipmentCategory, 'EquipmentName', _this.selectedItem.EquipmentName)]);
        } else {
          _this.nbForm.get('EquipmentName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _this.customErrorStateMatcher.duplicateValidator(_this.equipmentCategory, 'EquipmentName', null)]);
        }
      });
    }
  }, {
    key: "getDropdownList",
    value: function getDropdownList() {
      var _this2 = this;
      this.equipmentCategoryService.getEquipmentCategoryList().subscribe(function (res) {
        _this2.dropDownEquipmentlist = res;
      });
    }
  }, {
    key: "setValUnits",
    value: function setValUnits() {
      var _this3 = this;
      ////debugger;
      var equipmentCategoryId = this.nbForm.value.EquipmentCategoryId;
      this.equipmentService.getUnitByEquipmentList(equipmentCategoryId).subscribe(function (res) {
        _this3.nbForm.get('UnitName').setValue(res.UnitName);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this4 = this;
      ////debugger;
      if (this.nbForm.valid) {
        this.customErrorStateMatcher.trimFormValues(this.nbForm);
        this.loading = true;
        if (this.selectedItem !== undefined) {
          this.nbForm.get('EquipmentId').setValue(this.selectedItem.EquipmentId);
          var equipmentDetails = this.nbForm.value;
          console.log(equipmentDetails);
          this.equipmentService.updateEquipmentDetail(equipmentDetails).subscribe(function (res) {
            if (res == true) {
              _this4.loading = false;
              _this4.dialogRef.close(equipmentDetails);
              // this.close();
            } else {
              _this4.loading = false;
              _this4.showPop('warn', 'Alert', 'Somthing went wrong');
            }
          }, function (error) {
            if (error.status === 404 || error.status === 500) {
              _this4.router.navigate(['/error']);
            }
          });
        } else {
          var _equipmentDetails = this.nbForm.value;
          this.equipmentService.addEquipmentDetail(_equipmentDetails).subscribe(function (res) {
            if (res == true) {
              _this4.loading = false;
              _this4.dialogRef.close(_equipmentDetails);
              // this.close();
            } else {
              _this4.loading = false;
              _this4.showPop('warn', 'Alert', 'Somthing went wrong');
            }
          }, function (error) {
            if (error.status === 404 || error.status === 500) {
              _this4.router.navigate(['/error']);
            }
          });
        }
      } else {
        this.nbForm.markAllAsTouched();
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
  }]);
  return AddEquipmentComponent;
}();
_class = AddEquipmentComponent;
_class.ɵfac = function AddEquipmentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_category_equipment_category_service__WEBPACK_IMPORTED_MODULE_3__.EquipmentCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_4__.EquipmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-equipment"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService, {
    provide: rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_10__.root,
    useClass: _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError
  }])],
  decls: 42,
  vars: 9,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "px-3", "container", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "basic", "type", "reset", 1, "mr-2"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2"], [1, "example-items-rows"], [1, "row", "px-2"], [1, "mb-3", "col-md-6", "col-lg-6", "col-sm-12"], ["for", "EquipmentCategoryId", 1, "form-label"], [2, "color", "red"], ["fullWidth", "", "formControlName", "EquipmentCategoryId", "placeholder", "Select Equipment Category", 1, "dropdown-top", 3, "appendTo", "change"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "EquipmentName", 1, "form-label"], ["type", "text", "id", "EquipmentName", "formControlName", "EquipmentName", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Equipment  Name"], ["for", "MinOrderQty", 1, "form-label"], ["type", "number", "id", "MinOrderQty", "formControlName", "MinOrderQty", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Minimum Inventory Qty"], ["for", "UnitName", 1, "form-label"], ["type", "text", "id", "UnitName", "readonly", "", "formControlName", "UnitName", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Units"], [3, "value"], ["style", "color: red;", 4, "ngIf"]],
  template: function AddEquipmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddEquipmentComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card-header", 2)(3, "div")(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEquipmentComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Clear Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nb-card-body", 6)(14, "div", 7)(15, "div", 8)(16, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Equipment Category Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddEquipmentComponent_Template_ng_select_change_20_listener() {
        return ctx.setValUnits();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddEquipmentComponent_ng_option_21_Template, 2, 2, "ng-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddEquipmentComponent_small_22_Template, 2, 1, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 8)(24, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Equipment Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddEquipmentComponent_small_29_Template, 5, 4, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 8)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Minimum Inventory Qty");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AddEquipmentComponent_small_36_Template, 4, 3, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 8)(38, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Units ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "p-toast");
    }
    if (rf & 2) {
      var tmp_6_0;
      var tmp_7_0;
      var tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Equipment Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", "EquipmentCategoryId");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dropDownEquipmentlist);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.nbForm.get("EquipmentCategoryId")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.nbForm.get("EquipmentCategoryId")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx.nbForm.get("EquipmentCategoryId")) == null ? null : tmp_6_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.nbForm.get("EquipmentName")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.nbForm.get("EquipmentName")) == null ? null : tmp_7_0.touched) || ((tmp_7_0 = ctx.nbForm.get("EquipmentName")) == null ? null : tmp_7_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.nbForm.get("MinOrderQty")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.nbForm.get("MinOrderQty")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.nbForm.get("MinOrderQty")) == null ? null : tmp_8_0.dirty)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSpinnerDirective],
  styles: ["@media only screen and (max-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n@media only screen and (min-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n@media only screen and (min-width: 768px) and (min-width: 1200px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}"]
});

/***/ }),

/***/ 15657:
/*!****************************************************************!*\
  !*** ./src/app/pages/inventory/equipment/equipment.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentService": () => (/* binding */ EquipmentService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var EquipmentService = /*#__PURE__*/function () {
  function EquipmentService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EquipmentService);
    this.http = http;
    this.equipmentUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EquipmentService, [{
    key: "addEquipmentDetail",
    value: function addEquipmentDetail(equipmentData) {
      return this.http.post(this.equipmentUrl + 'InsertEquipment', equipmentData);
    }
  }, {
    key: "updateEquipmentDetail",
    value: function updateEquipmentDetail(equipmentData) {
      ////debugger;
      return this.http.put(this.equipmentUrl + 'UpdateEquipment', equipmentData);
    }
  }, {
    key: "deleteEquipment",
    value: function deleteEquipment(equipmentData) {
      ////debugger;
      return this.http["delete"](this.equipmentUrl + 'DeleteEquipment/' + equipmentData.EquipmentId);
    }
  }, {
    key: "getEquipmentList",
    value: function getEquipmentList() {
      return this.http.get(this.equipmentUrl + 'ReqEquipmentList');
    }
  }, {
    key: "getEditEquipmentList",
    value: function getEditEquipmentList(editEquipment) {
      return this.http.get(this.equipmentUrl + 'EditEquipment/' + editEquipment.EquipmentId);
    }
  }, {
    key: "getUnitByEquipmentList",
    value: function getUnitByEquipmentList(equipmentCategoryId) {
      return this.http.get(this.equipmentUrl + 'UnitByEquipment/' + equipmentCategoryId);
    }
  }]);
  return EquipmentService;
}();
_class = EquipmentService;
_class.ɵfac = function EquipmentService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 68325:
/*!****************************************************************************!*\
  !*** ./src/app/pages/inventory/equipment/equipment/equipment.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentComponent": () => (/* binding */ EquipmentComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_inventory_equipment_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/inventory/equipment/add-equipment/add-equipment.component */ 60717);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/equipment/equipment.service */ 15657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;












function EquipmentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "span", 11)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function EquipmentComponent_ng_template_11_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function EquipmentComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Equipment Category Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Equipment Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Minimum Inventory Qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function EquipmentComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 20)(1, "td")(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "div", 23)(15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipmentComponent_ng_template_13_Template_button_click_15_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.editDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipmentComponent_ng_template_13_Template_button_click_16_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.deleteDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.EquipmentCategoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.EquipmentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", rowData_r8.MinOrderQty, " ", rowData_r8.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function EquipmentComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["EquipmentName", "EquipmentCategoryName", "ConsumptionType"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var EquipmentComponent = /*#__PURE__*/function () {
  function EquipmentComponent(dialogService, equipmentService, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EquipmentComponent);
    this.dialogService = dialogService;
    this.equipmentService = equipmentService;
    this.messageService = messageService;
    this.checkListRecord = false;
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EquipmentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.getEquipmentListRecords();
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "getEquipmentListRecords",
    value: function getEquipmentListRecords() {
      var _this2 = this;
      this.checkListRecord = false;
      this.equipmentService.getEquipmentList().subscribe(function (res) {
        if (res.length === 0) {
          _this2.emptymessage = 'No Record Found';
        } else {
          _this2.equipment = res;
          setTimeout(function () {
            _this2.checkListRecord = true;
          }, 200);
        }
        // if (res.length===0) {
        //   this.emptymessage = 'No Record Found'
        // } else {
        //   this.voyageList = res.VoyageData
        //   this.totalCount = res.Count
        //   setTimeout(() => { this.checkListRecord = true }, 1000);
        // }
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
      this.dialogService.open(_app_pages_inventory_equipment_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_2__.AddEquipmentComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        console.log(data, "value of ");
        if (data !== undefined) {
          _this3.showPop('success', 'Success', 'Record Saved');
          _this3.getEquipmentListRecords();
        }
      });
      ;
    }
  }, {
    key: "editDetails",
    value: function editDetails(_editDetails) {
      var _this4 = this;
      console.log(_editDetails, "selectedItem");
      //debugger
      this.dialogService.open(_app_pages_inventory_equipment_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_2__.AddEquipmentComponent, {
        context: {
          selectedItem: _editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this4.showPop('success', 'Success', 'Record Saved');
          _this4.getEquipmentListRecords();
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
          _this5.equipmentService.deleteEquipment(deleteRecord).subscribe(function (res) {
            if (res) {
              _this5.getEquipmentListRecords();
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
  }]);
  return EquipmentComponent;
}();
_class = EquipmentComponent;
_class.ɵfac = function EquipmentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_4__.EquipmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-equipment"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 16,
  vars: 9,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "card", "mt-4"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["type", "text", "nbInput", "", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "EquipmentCategoryName"], ["field", "EquipmentCategoryName"], ["pSortableColumn", "EquipmentName"], ["field", "EquipmentName"], ["pSortableColumn", "MinOrderQty"], ["field", "MinOrderQty"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function EquipmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Equipment Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipmentComponent_Template_button_click_6_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Add Equipment ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3)(9, "p-table", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, EquipmentComponent_ng_template_11_Template, 3, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, EquipmentComponent_ng_template_12_Template, 12, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, EquipmentComponent_ng_template_13_Template, 18, 14, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EquipmentComponent_ng_template_14_Template, 3, 1, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.equipment)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c1))("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_11__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_11__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent]
});

/***/ }),

/***/ 73653:
/*!*************************************************************!*\
  !*** ./src/app/pages/inventory/inventory-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryRoutingModule": () => (/* binding */ InventoryRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ 83322);
/* harmony import */ var _vessel_inventory_vessel_inventory_list_vessel_inventory_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vessel-inventory/vessel-inventory-list/vessel-inventory-list.component */ 76104);
/* harmony import */ var _equipment_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipment/equipment/equipment.component */ 68325);
/* harmony import */ var _requisition_requisition_list_requisition_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requisition/requisition-list/requisition-list.component */ 87071);
/* harmony import */ var _vendor_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/vendor-list/vendor-list.component */ 70044);
/* harmony import */ var _equipment_category_equipment_category_equipment_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./equipment-category/equipment-category/equipment-category.component */ 64983);
/* harmony import */ var _vendor_requisition_vendor_requisition_list_vendor_requisition_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor-requisition/vendor-requisition-list/vendor-requisition-list.component */ 82559);
/* harmony import */ var _vendor_requisition_add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor-requisition/add-vendor-requisition/add-vendor-requisition.component */ 96407);
/* harmony import */ var _vendor_requisition_view_requisition_details_view_requisition_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor-requisition/view-requisition-details/view-requisition-details.component */ 37801);
/* harmony import */ var _vessel_inventory_detail_inventory_detail_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vessel-inventory/detail-inventory/detail-inventory.component */ 70929);
/* harmony import */ var _vessel_inventory_detail_equipment_detail_equipment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vessel-inventory/detail-equipment/detail-equipment.component */ 674);
/* harmony import */ var _vessel_inventory_consumption_log_consumption_log_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vessel-inventory/consumption-log/consumption-log.component */ 50979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;















var routes = [{
  path: '',
  component: _inventory_component__WEBPACK_IMPORTED_MODULE_2__.InventoryComponent,
  children: [{
    path: 'vessel-inventory',
    component: _vessel_inventory_vessel_inventory_list_vessel_inventory_list_component__WEBPACK_IMPORTED_MODULE_3__.VesselInventoryListComponent
  }, {
    path: 'vendor',
    component: _vendor_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_6__.VendorListComponent
  }, {
    path: 'requisition',
    component: _requisition_requisition_list_requisition_list_component__WEBPACK_IMPORTED_MODULE_5__.RequisitionListComponent
  }, {
    path: 'equipment',
    component: _equipment_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__.EquipmentComponent
  }, {
    path: 'equipment-category',
    component: _equipment_category_equipment_category_equipment_category_component__WEBPACK_IMPORTED_MODULE_7__.EquipmentCategoryComponent
  }, {
    path: 'vendor-requisition',
    component: _vendor_requisition_vendor_requisition_list_vendor_requisition_list_component__WEBPACK_IMPORTED_MODULE_8__.VendorRequisitionListComponent
  }, {
    path: 'add-vendor-requisition',
    component: _vendor_requisition_add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_9__.AddVendorRequisitionComponent
  }, {
    path: 'view-requisition-details',
    component: _vendor_requisition_view_requisition_details_view_requisition_details_component__WEBPACK_IMPORTED_MODULE_10__.ViewRequisitionDetailsComponent
  }, {
    path: 'vessel-inventory-details',
    component: _vessel_inventory_detail_inventory_detail_inventory_component__WEBPACK_IMPORTED_MODULE_11__.DetailInventoryComponent
  }, {
    path: 'equipment-details',
    component: _vessel_inventory_detail_equipment_detail_equipment_component__WEBPACK_IMPORTED_MODULE_12__.DetailEquipmentComponent
  }, {
    path: 'consumption-log',
    component: _vessel_inventory_consumption_log_consumption_log_component__WEBPACK_IMPORTED_MODULE_13__.ConsumptionLogComponent
  }]
}];
var InventoryRoutingModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InventoryRoutingModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InventoryRoutingModule);
});
_class = InventoryRoutingModule;
_class.ɵfac = function InventoryRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](InventoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 83322:
/*!********************************************************!*\
  !*** ./src/app/pages/inventory/inventory.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryComponent": () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var InventoryComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InventoryComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InventoryComponent);
});
_class = InventoryComponent;
_class.ɵfac = function InventoryComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-inventory"]],
  decls: 1,
  vars: 0,
  template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 45512:
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryModule": () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-routing.module */ 73653);
/* harmony import */ var _equipment_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipment/add-equipment/add-equipment.component */ 60717);
/* harmony import */ var _equipment_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipment/equipment/equipment.component */ 68325);
/* harmony import */ var _requisition_add_requisition_add_requisition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requisition/add-requisition/add-requisition.component */ 6660);
/* harmony import */ var _requisition_requisition_list_requisition_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requisition/requisition-list/requisition-list.component */ 87071);
/* harmony import */ var _requisition_view_requistion_view_requistion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requisition/view-requistion/view-requistion.component */ 2798);
/* harmony import */ var _vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/add-vendor/add-vendor.component */ 11321);
/* harmony import */ var _vendor_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor/vendor-list/vendor-list.component */ 70044);
/* harmony import */ var _vendor_view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/view-vendor/view-vendor.component */ 54129);
/* harmony import */ var _vessel_inventory_add_vessel_inventory_add_vessel_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vessel-inventory/add-vessel-inventory/add-vessel-inventory.component */ 39188);
/* harmony import */ var _vessel_inventory_vessel_inventory_list_vessel_inventory_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vessel-inventory/vessel-inventory-list/vessel-inventory-list.component */ 76104);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/accordion */ 32174);
/* harmony import */ var primeng_animate__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! primeng/animate */ 25291);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/autocomplete */ 3631);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/avatar */ 68271);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/badge */ 68639);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/blockui */ 17456);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/breadcrumb */ 78676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/calendar */ 70585);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! primeng/card */ 94247);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/carousel */ 75700);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/cascadeselect */ 61118);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/checkbox */ 61989);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/chip */ 67147);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/chips */ 16022);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/colorpicker */ 5369);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/confirmdialog */ 32137);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/contextmenu */ 34076);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/dataview */ 77900);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/divider */ 15108);
/* harmony import */ var primeng_dock__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/dock */ 16600);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/dragdrop */ 34937);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/dropdown */ 82210);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/dynamicdialog */ 74325);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/fieldset */ 52946);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/fileupload */ 13388);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/galleria */ 15569);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/image */ 25054);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/inplace */ 89073);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/inputmask */ 23520);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/inputnumber */ 25047);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/inputswitch */ 17913);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/inputtext */ 51740);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/inputtextarea */ 63054);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/knob */ 47261);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/listbox */ 38433);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/megamenu */ 70450);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/menu */ 21327);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/menubar */ 40615);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/message */ 92665);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/messages */ 57772);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/multiselect */ 65722);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/orderlist */ 65900);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/overlaypanel */ 32435);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/paginator */ 1997);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/panel */ 9764);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/panelmenu */ 17919);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/password */ 73425);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/picklist */ 37198);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/progressbar */ 78235);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/progressspinner */ 97932);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/radiobutton */ 50613);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/rating */ 6408);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/scroller */ 93718);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/scrollpanel */ 83930);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/scrolltop */ 54216);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/selectbutton */ 85362);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/sidebar */ 23214);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/skeleton */ 17489);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/slidemenu */ 68861);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/slider */ 78177);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/speeddial */ 27963);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/spinner */ 73238);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/splitbutton */ 47463);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/splitter */ 83111);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/steps */ 1236);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! primeng/tabmenu */ 56163);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! primeng/tabview */ 58783);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! primeng/tag */ 86679);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! primeng/terminal */ 62922);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! primeng/tieredmenu */ 79512);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! primeng/timeline */ 540);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! primeng/togglebutton */ 31167);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! primeng/toolbar */ 1383);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! primeng/tree */ 14323);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! primeng/treeselect */ 56186);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! primeng/treetable */ 36237);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! primeng/tristatecheckbox */ 80630);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/virtualscroller */ 35779);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ng2-ckeditor */ 76442);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ng2-smart-table */ 54526);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _app_pages_forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app-pages/forms/forms-routing.module */ 83173);
/* harmony import */ var _equipment_category_equipment_category_equipment_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./equipment-category/equipment-category/equipment-category.component */ 64983);
/* harmony import */ var _equipment_category_add_equipment_category_add_equipment_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./equipment-category/add-equipment-category/add-equipment-category.component */ 96825);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inventory.component */ 83322);
/* harmony import */ var _vendor_requisition_vendor_requisition_list_vendor_requisition_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vendor-requisition/vendor-requisition-list/vendor-requisition-list.component */ 82559);
/* harmony import */ var _vendor_requisition_add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vendor-requisition/add-vendor-requisition/add-vendor-requisition.component */ 96407);
/* harmony import */ var _vendor_requisition_view_requisition_details_view_requisition_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vendor-requisition/view-requisition-details/view-requisition-details.component */ 37801);
/* harmony import */ var _vessel_inventory_detail_inventory_detail_inventory_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vessel-inventory/detail-inventory/detail-inventory.component */ 70929);
/* harmony import */ var _vessel_inventory_detail_equipment_detail_equipment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vessel-inventory/detail-equipment/detail-equipment.component */ 674);
/* harmony import */ var _vessel_inventory_consumption_log_consumption_log_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vessel-inventory/consumption-log/consumption-log.component */ 50979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

















































































































var NG_Prime = [primeng_avatar__WEBPACK_IMPORTED_MODULE_24__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_25__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_27__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_28__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_29__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_30__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_31__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_32__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_33__.CascadeSelectModule,
// ChartModule,
primeng_checkbox__WEBPACK_IMPORTED_MODULE_34__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_35__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_36__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_38__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_39__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_40__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_41__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_42__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_43__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_44__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_45__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_46__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_47__.DynamicDialogModule,
// EditorModule,
primeng_fieldset__WEBPACK_IMPORTED_MODULE_48__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_49__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_50__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_51__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_52__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_53__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_54__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_55__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_56__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_57__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_58__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_59__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_60__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_61__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_62__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_63__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_64__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_65__.MultiSelectModule,
// OrganizationChartModule,
primeng_orderlist__WEBPACK_IMPORTED_MODULE_66__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_67__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_68__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_69__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_70__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_71__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_72__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_73__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_74__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_75__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_76__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_77__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_78__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_79__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_80__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_81__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_83__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_84__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_85__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_86__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_87__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_88__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_89__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_90__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_91__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_92__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_93__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_94__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_95__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_96__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_97__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_98__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_99__.ToolbarModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_100__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_101__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_102__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_103__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_104__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_105__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_106__.CardModule];
var NB_Module = [_nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbAutocompleteModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbAccordionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbSpinnerModule];
var InventoryModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InventoryModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InventoryModule);
});
_class = InventoryModule;
_class.ɵfac = function InventoryModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_108__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_108__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_109__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__.InventoryRoutingModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_110__.Ng2SmartTableModule, _app_pages_forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_14__.FormsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_111__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_112__.NgSelectModule, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_113__.CKEditorModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_114__.NgxSkeletonLoaderModule, NG_Prime, NB_Module]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_108__["ɵɵsetNgModuleScope"](InventoryModule, {
    declarations: [_vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_8__.AddVendorComponent, _vendor_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_9__.VendorListComponent, _vendor_view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_10__.ViewVendorComponent, _requisition_add_requisition_add_requisition_component__WEBPACK_IMPORTED_MODULE_5__.AddRequisitionComponent, _requisition_requisition_list_requisition_list_component__WEBPACK_IMPORTED_MODULE_6__.RequisitionListComponent, _requisition_view_requistion_view_requistion_component__WEBPACK_IMPORTED_MODULE_7__.ViewRequistionComponent, _equipment_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__.EquipmentComponent, _equipment_add_equipment_add_equipment_component__WEBPACK_IMPORTED_MODULE_3__.AddEquipmentComponent, _vessel_inventory_add_vessel_inventory_add_vessel_inventory_component__WEBPACK_IMPORTED_MODULE_11__.AddVesselInventoryComponent, _vessel_inventory_vessel_inventory_list_vessel_inventory_list_component__WEBPACK_IMPORTED_MODULE_12__.VesselInventoryListComponent, _equipment_category_equipment_category_equipment_category_component__WEBPACK_IMPORTED_MODULE_15__.EquipmentCategoryComponent, _equipment_category_add_equipment_category_add_equipment_category_component__WEBPACK_IMPORTED_MODULE_16__.AddEquipmentCategoryComponent, _inventory_component__WEBPACK_IMPORTED_MODULE_17__.InventoryComponent, _vendor_requisition_vendor_requisition_list_vendor_requisition_list_component__WEBPACK_IMPORTED_MODULE_18__.VendorRequisitionListComponent, _vendor_requisition_add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_19__.AddVendorRequisitionComponent, _vendor_requisition_view_requisition_details_view_requisition_details_component__WEBPACK_IMPORTED_MODULE_20__.ViewRequisitionDetailsComponent, _vessel_inventory_detail_inventory_detail_inventory_component__WEBPACK_IMPORTED_MODULE_21__.DetailInventoryComponent, _vessel_inventory_detail_equipment_detail_equipment_component__WEBPACK_IMPORTED_MODULE_22__.DetailEquipmentComponent, _vessel_inventory_consumption_log_consumption_log_component__WEBPACK_IMPORTED_MODULE_23__.ConsumptionLogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_109__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__.InventoryRoutingModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_13__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_110__.Ng2SmartTableModule, _app_pages_forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_14__.FormsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_111__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_112__.NgSelectModule, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_113__.CKEditorModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_114__.NgxSkeletonLoaderModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_24__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_25__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_27__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_28__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_29__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_30__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_31__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_32__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_33__.CascadeSelectModule,
    // ChartModule,
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_34__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_35__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_36__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_37__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_38__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_39__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_40__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_41__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_42__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_43__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_44__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_45__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_46__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_47__.DynamicDialogModule,
    // EditorModule,
    primeng_fieldset__WEBPACK_IMPORTED_MODULE_48__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_49__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_50__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_51__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_52__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_53__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_54__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_55__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_56__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_57__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_58__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_59__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_60__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_61__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_62__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_63__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_64__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_65__.MultiSelectModule,
    // OrganizationChartModule,
    primeng_orderlist__WEBPACK_IMPORTED_MODULE_66__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_67__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_68__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_69__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_70__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_71__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_72__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_73__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_74__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_75__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_76__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_77__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_78__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_79__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_80__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_81__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_83__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_84__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_85__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_86__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_87__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_88__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_89__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_90__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_91__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_92__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_93__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_94__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_95__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_96__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_97__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_98__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_99__.ToolbarModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_100__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_101__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_102__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_103__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_104__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_105__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_106__.CardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbAutocompleteModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbAccordionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_107__.NbSpinnerModule]
  });
})();

/***/ }),

/***/ 6660:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/inventory/requisition/add-requisition/add-requisition.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRequisitionComponent": () => (/* binding */ AddRequisitionComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal-compatibility */ 50797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/inventory/equipment/equipment.service */ 15657);
/* harmony import */ var _app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/vendor/vendor.service */ 83402);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _customerservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerservice */ 35240);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _app_pages_settings_supply_supply_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app-pages/settings/supply/supply.service */ 14202);
/* harmony import */ var _app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app-pages/inventory/requisition/requisition.service */ 76970);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;





















function AddRequisitionComponent_ng_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r13.VendorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r13.VendorName);
  }
}
function AddRequisitionComponent_small_21_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_small_21_nb_hint_1_Template, 2, 0, "nb-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.nbForm.get("VendorId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddRequisitionComponent_ng_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r15.VesselId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r15.VesselName);
  }
}
function AddRequisitionComponent_small_29_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_small_29_nb_hint_1_Template, 2, 0, "nb-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.nbForm.get("VesselId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddRequisitionComponent_ng_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r17.PortId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r17.PortName);
  }
}
function AddRequisitionComponent_small_37_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_small_37_nb_hint_1_Template, 2, 0, "nb-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.nbForm.get("PortId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddRequisitionComponent_small_47_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_small_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_small_47_nb_hint_1_Template, 2, 0, "nb-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r7.nbForm.get("SupplyDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddRequisitionComponent_ng_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r20.VoyageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r20.Fixture);
  }
}
function AddRequisitionComponent_small_55_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_small_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_small_55_nb_hint_1_Template, 2, 0, "nb-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r9.nbForm.get("MURFixtureNo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddRequisitionComponent_small_62_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_small_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_small_62_nb_hint_1_Template, 2, 0, "nb-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.nbForm.get("AgentAddress")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddRequisitionComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 29)(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Qty Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_1_ng_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r36.MakerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r36.MakerName);
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r26.RequisitionMaker = $event);
    })("blur", function AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_1_Template_ng_select_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.onMinOrderQtyChange(data_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_1_ng_option_1_Template, 2, 2, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r26.RequisitionMaker)("addTag", ctx_r33.CreateNew)("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r33.makerDropdown);
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r26.RequisitionMaker, " ");
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_1_Template, 2, 4, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_ng_template_2_Template, 1, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r26.RequisitionMaker, "");
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AddRequisitionComponent_ng_template_67_tr_3_ng_template_10_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r26.MinOrderQty = $event);
    })("blur", function AddRequisitionComponent_ng_template_67_tr_3_ng_template_10_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.onMinOrderQtyChange(data_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r26.MinOrderQty);
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r26.MinOrderQty, " ");
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AddRequisitionComponent_ng_template_67_tr_3_ng_template_14_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r54);
      var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r26.RequisitionRemarks = $event);
    })("blur", function AddRequisitionComponent_ng_template_67_tr_3_ng_template_14_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r54);
      var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.onMinOrderQtyChange(data_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r26.RequisitionRemarks);
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r26.RequisitionRemarks, " ");
  }
}
function AddRequisitionComponent_ng_template_67_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddRequisitionComponent_ng_template_67_tr_3_Template_tr_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60);
      var data_r26 = restoredCtx.$implicit;
      var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.getEquipmentId(data_r26.EquipmentId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AddRequisitionComponent_ng_template_67_tr_3_p_cellEditor_6_Template, 3, 0, "p-cellEditor", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddRequisitionComponent_ng_template_67_tr_3_ng_container_7_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td", 34)(9, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, AddRequisitionComponent_ng_template_67_tr_3_ng_template_10_Template, 1, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, AddRequisitionComponent_ng_template_67_tr_3_ng_template_11_Template, 1, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td", 34)(13, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AddRequisitionComponent_ng_template_67_tr_3_ng_template_14_Template, 1, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, AddRequisitionComponent_ng_template_67_tr_3_ng_template_15_Template, 1, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var data_r26 = ctx.$implicit;
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r26.EquipmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r26.UnitName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pEditableColumn", data_r26.RequisitionMaker)("ngClass", ctx_r25.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r25.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r25.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pEditableColumn", data_r26.MinOrderQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pEditableColumn", data_r26.MinOrderQty);
  }
}
function AddRequisitionComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 29)(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AddRequisitionComponent_ng_template_67_tr_3_Template, 16, 8, "tr", 31);
  }
  if (rf & 2) {
    var rowData_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](rowData_r23.EquipmentCategoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", rowData_r23.EquipmentList);
  }
}
var _c0 = function _c0() {
  return {
    "width": "100%"
  };
};
var AddRequisitionComponent = /*#__PURE__*/function () {
  function AddRequisitionComponent(router, messageService, equipmentService, vendorService, vesselService, customerService, portService, supplyService, requisitionService, formBuilder, dialogRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddRequisitionComponent);
    this.router = router;
    this.messageService = messageService;
    this.equipmentService = equipmentService;
    this.vendorService = vendorService;
    this.vesselService = vesselService;
    this.customerService = customerService;
    this.portService = portService;
    this.supplyService = supplyService;
    this.requisitionService = requisitionService;
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.formTitle = "Add";
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError();
    this.selectedCustomers = [];
    this.selectedVesselId = null;
    this.updatedMinOrderQtyValues = [];
    this.storeDataInArray = [];
    this.loading = false;
    this.nbForm = this.formBuilder.group({
      RequisitionId: "",
      VendorId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      VesselId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      PortId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      SupplyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      MURFixtureNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      AgentAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      // Contact: ['', Validators.required],
      // TypeOfSupplyId: [null, Validators.required],
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddRequisitionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // console.log(this.selectedItem,'this.selectedItem')
      this.getFixtureList();
      this.getVendorListRecords(1, 100, '');
      this.getVesselListRecords(1, 100, '');
      this.getPortList(1, 100, '');
      this.getSupplyListRecords(1, 100, '');
      if (this.selectedItem !== undefined) {
        this.getDataFromIdrequisitionManagement(this.selectedItem.RequisitionId);
        this.formTitle = "Update";
      } else {
        this.requisitionManagementList();
      }
    }
  }, {
    key: "getDataFromIdrequisitionManagement",
    value: function getDataFromIdrequisitionManagement(requisitionId) {
      var _this = this;
      this.requisitionService.getEditRequisitionWithEquipmentID(requisitionId).subscribe(function (res) {
        _this.requisitionData = res[0].EquipmentManagementList;
        _this.nbForm.setValue({
          RequisitionId: res[0].RequisitionId,
          VendorId: res[0].VendorId,
          VesselId: res[0].VesselId,
          PortId: res[0].PortId,
          SupplyDate: res[0].SupplyDate,
          MURFixtureNo: res[0].MURFixtureNo,
          AgentAddress: res[0].AgentAddress
          // Contact: res[0].Contact,
          // TypeOfSupplyId: res[0].TypeOfSupplyId,
        });
      });
    }
    // this.updateListForm = this.fb.group({
    //   CleaningStageId: [""],
    //   CleaningStageName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    //   ProgressWeightage: ["", [Validators.required, Validators.min(1), Validators.max(100)]],
    //   MinOrderQty: [null, [Validators.required]],
    // });
  }, {
    key: "onVesselSelectionChange",
    value: function onVesselSelectionChange() {
      // console.log('Selected VesselId:', this.selectedVesselId);
    }
  }, {
    key: "requisitionManagementList",
    value: function requisitionManagementList() {
      var _this2 = this;
      this.requisitionService.getRequisitionManagementList().subscribe(function (res) {
        _this2.requisitionData = res[0].EquipmentCategorylist;
      });
    }
  }, {
    key: "onFilter",
    value: function onFilter(data) {
      console.log(data);
    }
  }, {
    key: "onRowSelect",
    value: function onRowSelect(event) {
      console.log(event);
    }
  }, {
    key: "getVendorListRecords",
    value: function getVendorListRecords(cPage, nRows, filter) {
      var _this3 = this;
      this.vendorService.getVendorList(cPage, nRows, filter).subscribe(function (res) {
        _this3.dropDownVendorList = res.VendorData;
      });
    }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this4 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        // console.log(res, "getVesselListRecords")
        _this4.dropDownVesselList = res.VesselData;
        // this.dropDownVesselList.find((res:Vessel)=>{
        //  this.getFixtureRecods= res.VesselId
        // })
      });
    }
  }, {
    key: "getPortList",
    value: function getPortList(cPage, nRows, filter) {
      var _this5 = this;
      this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
        // console.log(res)
        _this5.dropDownPortList = res.PortData;
      });
    }
  }, {
    key: "getFixtureList",
    value: function getFixtureList() {
      var _this6 = this;
      // this.nbForm.get('MURFixtureNo').setValue(null);
      //debugger
      if (this.selectedItem !== undefined) {
        this.selectedValue = this.selectedItem.VesselId;
      } else {
        this.selectedValue = this.nbForm.get('VesselId').value;
      }
      this.requisitionService.getFixtureList(this.selectedValue).subscribe(function (res) {
        // console.log(res)
        _this6.dropDownfixtureList = res;
      });
    }
  }, {
    key: "getSupplyListRecords",
    value: function getSupplyListRecords(cPage, nRows, filter) {
      var _this7 = this;
      this.supplyService.getSupplyList(cPage, nRows, filter).subscribe(function (res) {
        // console.log(res)
        _this7.supply = res.SupplyTypeData;
        _this7.dropDownSupplyList = res.SupplyTypeData;
      });
    }
    // getRequisitionListRecords() {
    //   //debugger
    //   this.requisitionService.getRequisitionList().subscribe((res: Requisition[]) => {
    //     console.log(res)
    //     this.requisition = res;
    //   })
    // }
    // getRequisitionListRecords() {
    //   //debugger
    //   this.requisitionService.getRequisitionList().subscribe((res: Requisition[]) => {
    //     console.log(res)
    //     this.requisition = res;
    //     if (this.selectedItem !== undefined) {
    //       this.nbForm.get('requisitionName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.requisition, 'requisitionName',this.selectedItem.requisitionName)]);
    //       // this.nbForm.get('CargoName').updateValueAndValidity();
    //     } else {
    //       this.nbForm.get('requisitionName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.requisition, 'requisitionName', null)]);
    //       // this.nbForm.get('CargoName').updateValueAndValidity();
    //     }
    //   })
    // }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "onMinOrderQtyChange",
    value: function onMinOrderQtyChange(updatedValue) {
      debugger;
      console.log(updatedValue, "updatedValue");
      this.changeMinOrderQty = updatedValue;
      // this.equipment = this.editRequisitionListData
      //   .flatMap(category => category.EquipmentList)
      //   .find(equipment => equipment.EquipmentId === this.changeMinOrderQty?.EquipmentId);
      // if (this.equipment) {
      //   this.equipment.MinOrderQty = this.changeMinOrderQty.MinOrderQty;
      //   // this.editRequisitionListData = this.equipment
      // }
      // vbcvbgf
      // const equipment = this.requisitionData
      // .flatMap(category => category.EquipmentList)
      // .find(equipment => equipment.EquipmentId === updatedValue?.EquipmentId);
      // if (equipment) {
      // equipment.MinOrderQty = updatedValue.MinOrderQty;
      // }
      // this.equipmentService.updateEquipmentDetail(updatedValue).subscribe(res => {
      //   console.log(res,"res")
      //     })
      // console.log(updatedValue.MinOrderQty, "updatedValue")
      // this.updatedMinOrderQtyValues.push(updatedValue.MinOrderQty);
      // const category = this.requisitionData.EquipmentCategorylist.find(category => category.EquipmentCategoryId == updatedValue.equipmentCategoryId);
      //   if (category) {
      //     const equipment = category.EquipmentList.find(item => item.EquipmentId === updatedValue.equipmentId);
      //     if (equipment) {
      //       equipment.MinOrderQty = updatedValue.MinOrderQty;
      //       console.log(`MinOrderQty changed for EquipmentId ${updatedValue.equipmentId} in CategoryId ${updatedValue.equipmentCategoryId}`);
      //     }
      //   }
    }
  }, {
    key: "getValueVessel",
    value: function getValueVessel(VesselId) {
      this.nbForm.get('MURFixtureNo').setValue(null);
      // this.nbForm.value.MURFixtureNo = null
      console.log;
      this.selectedVesselId = VesselId;
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this8 = this;
      if (this.nbForm.valid) {
        this.loading = true;
        //set Vessel id and set for send recode
        this.requisitionData.forEach(function (category) {
          category.VesselId = _this8.nbForm.value.VesselId;
          category.EquipmentList.forEach(function (equipment) {
            equipment.VesselId = _this8.nbForm.value.VesselId;
          });
        });
        // get Equipment  data which edit
        var equipment = this.requisitionData.flatMap(function (category) {
          return category.EquipmentList;
        }).find(function (equipment) {
          var _this8$changeMinOrder;
          return equipment.EquipmentId === ((_this8$changeMinOrder = _this8.changeMinOrderQty) === null || _this8$changeMinOrder === void 0 ? void 0 : _this8$changeMinOrder.EquipmentId);
        });
        if (equipment) {
          equipment.MinOrderQty = this.changeMinOrderQty.MinOrderQty;
        }
        if (this.nbForm.value.SupplyDate !== null) {
          var selectedDate1 = new Date(this.nbForm.value.SupplyDate);
          ;
          var timeZoneOffset1 = selectedDate1.getTimezoneOffset();
          selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
          var dataPickSupplyDate = selectedDate1.toISOString().split('T')[0];
          this.nbForm.get('SupplyDate').setValue(dataPickSupplyDate);
          console.log(this.nbForm.get('SupplyDate').value, "second");
        }
        // // get data to send api this veriable
        // this.requisitionDataSave = {
        //   RequisitionId: this.nbForm.value.RequisitionId,
        //   VendorId: this.nbForm.value.VendorId,
        //   VesselId: this.nbForm.value.VesselId,
        //   PortId: this.nbForm.value.PortId,
        //   SupplyDate: this.nbForm.value.SupplyDate,
        //   MURFixtureNo: this.nbForm.value.MURFixtureNo,
        //   TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
        //   EquipmentManagementList: this.requisitionData,
        // };
        if (this.selectedItem !== undefined) {
          // editRequisitionListData
          debugger;
          this.requisitionDataSave = {
            RequisitionId: this.nbForm.value.RequisitionId,
            VendorId: this.nbForm.value.VendorId,
            VesselId: this.nbForm.value.VesselId,
            PortId: this.nbForm.value.PortId,
            SupplyDate: this.nbForm.value.SupplyDate,
            MURFixtureNo: this.nbForm.value.MURFixtureNo,
            AgentAddress: this.nbForm.value.AgentAddress,
            // Contact: this.nbForm.value.Contact,
            // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
            EquipmentManagementList: this.requisitionData
          };
          console.log(this.requisitionDataSave, "value oif edit");
          this.requisitionService.updateRequisitionDetail(this.requisitionDataSave).subscribe(function (res) {
            if (res == true) {
              _this8.dialogRef.close(_this8.requisitionDataSave);
            } else {
              _this8.loading = false;
              _this8.showPop('warn', 'Alert', 'Somthing went wrong');
            }
          }, function (error) {
            if (error.status === 404 || error.status === 500) {
              _this8.router.navigate(['/error']);
            }
          });
        } else {
          debugger;
          this.requisitionDataSave = {
            RequisitionId: this.nbForm.value.RequisitionId,
            VendorId: this.nbForm.value.VendorId,
            VesselId: this.nbForm.value.VesselId,
            PortId: this.nbForm.value.PortId,
            SupplyDate: this.nbForm.value.SupplyDate,
            MURFixtureNo: this.nbForm.value.MURFixtureNo,
            AgentAddress: this.nbForm.value.AgentAddress,
            // Contact: this.nbForm.value.Contact,
            // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
            EquipmentManagementList: this.requisitionData
          };
          var requisitionDetails = this.nbForm.value;
          this.requisitionService.addRequisitionDetail(this.requisitionDataSave).subscribe(function (res) {
            debugger;
            if (res == true) {
              _this8.dialogRef.close(requisitionDetails);
            } else {
              _this8.loading = false;
              _this8.showPop('warn', 'Alert', 'Somthing went wrong');
            }
          }, function (error) {
            if (error.status === 404 || error.status === 500) {
              _this8.router.navigate(['/error']);
            }
          });
        }
      } else {
        this.nbForm.markAllAsTouched();
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
    key: "getEquipmentId",
    value: function getEquipmentId(selectedRow) {
      var _this9 = this;
      console.log(selectedRow, "get id of quipment");
      this.requisitionService.getEquipmentMakerList(selectedRow).subscribe(function (res) {
        _this9.makerDropdown = res;
      });
    }
  }]);
  return AddRequisitionComponent;
}();
_class = AddRequisitionComponent;
_class.ɵfac = function AddRequisitionComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_3__.EquipmentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_4__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_5__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_customerservice__WEBPACK_IMPORTED_MODULE_6__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_7__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_supply_supply_service__WEBPACK_IMPORTED_MODULE_8__.SupplyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_9__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-requisition"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_13__.ConfirmationService, {
    provide: rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_15__.root,
    useClass: _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError
  }])],
  decls: 69,
  vars: 21,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "px-3", "W-100", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "basic", "type", "reset", 1, "mr-2"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2"], [1, "example-items-rows", "row"], [1, "col-4", "mb-3"], [1, "form-label"], [2, "color", "red"], ["fullWidth", "", "formControlName", "VendorId", "placeholder", "Select Vendor", 3, "appendTo", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fullWidth", "", "formControlName", "VesselId", "placeholder", "Select Vessel", 3, "appendTo", "keyup", "change"], ["fullWidth", "", "formControlName", "PortId", "placeholder", "Select Port", 3, "appendTo", "keyup"], [1, "mb-3", "col-4"], ["nbInput", "", "formControlName", "SupplyDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "nbDatepicker"], ["dateTimePicker3", ""], ["fullWidth", "", "formControlName", "MURFixtureNo", "placeholder", "Select MUR Fixture No", 3, "appendTo"], [1, "col-12"], ["for", "AgentAddress", 1, "form-label"], ["type", "text", "formControlName", "AgentAddress", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Agent Address"], [1, "col-12", "mb-4", "data-table"], [1, "card", "data-table"], ["dataKey", "EquipmentCategoryName", 3, "tableStyle", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "value"], ["style", "color: red;", 4, "ngIf"], [1, "data-table"], ["colspan", "3", 2, "font-weight", "600"], ["class", "data-table", 3, "click", 4, "ngFor", "ngForOf"], [1, "data-table", 3, "click"], ["pEditableColumnField", "RequisitionMaker", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "MinOrderQty", "ngClass", "nb-bgchange", 3, "pEditableColumn"], ["pTemplate", "input"], ["pTemplate", "output"], ["addTagText", "Add Item", "placeholder", "Select Maker", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "ngModel", "addTag", "appendTo", "ngModelChange", "blur"], ["nbInput", "", "type", "text", "fullWidth", "", 3, "ngModel", "ngModelChange", "blur"]],
  template: function AddRequisitionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-card", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AddRequisitionComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "nb-card-header", 2)(3, "div")(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddRequisitionComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Clear Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "nb-card-body", 6)(14, "div", 7)(15, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Vendor");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function AddRequisitionComponent_Template_ng_select_keyup_19_listener($event) {
        return ctx.getVendorListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, AddRequisitionComponent_ng_option_20_Template, 2, 2, "ng-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, AddRequisitionComponent_small_21_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 7)(23, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Vessel");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ng-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function AddRequisitionComponent_Template_ng_select_keyup_27_listener($event) {
        return ctx.getVesselListRecords(1, 100, $event.target.value);
      })("change", function AddRequisitionComponent_Template_ng_select_change_27_listener() {
        return ctx.getFixtureList();
      })("change", function AddRequisitionComponent_Template_ng_select_change_27_listener($event) {
        return ctx.getValueVessel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, AddRequisitionComponent_ng_option_28_Template, 2, 2, "ng-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, AddRequisitionComponent_small_29_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 7)(31, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Supply Port");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "ng-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function AddRequisitionComponent_Template_ng_select_keyup_35_listener($event) {
        return ctx.getPortList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, AddRequisitionComponent_ng_option_36_Template, 2, 2, "ng-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, AddRequisitionComponent_small_37_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 15)(39, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Supply Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "br")(44, "input", 16)(45, "nb-datepicker", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, AddRequisitionComponent_small_47_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 7)(49, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "MUR Fixture No");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "ng-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, AddRequisitionComponent_ng_option_54_Template, 2, 2, "ng-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, AddRequisitionComponent_small_55_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 19)(57, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Agent Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "textarea", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, AddRequisitionComponent_small_62_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 22)(64, "div", 23)(65, "p-table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, AddRequisitionComponent_ng_template_66_Template, 11, 0, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, AddRequisitionComponent_ng_template_67_Template, 4, 2, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "p-toast");
    }
    if (rf & 2) {
      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](46);
      var tmp_5_0;
      var tmp_8_0;
      var tmp_11_0;
      var tmp_13_0;
      var tmp_16_0;
      var tmp_17_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Requisition Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dropDownVendorList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.nbForm.get("VendorId")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.nbForm.get("VendorId")) == null ? null : tmp_5_0.touched) || ((tmp_5_0 = ctx.nbForm.get("VendorId")) == null ? null : tmp_5_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dropDownVesselList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_8_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dropDownPortList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.nbForm.get("PortId")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.nbForm.get("PortId")) == null ? null : tmp_11_0.touched) || ((tmp_11_0 = ctx.nbForm.get("PortId")) == null ? null : tmp_11_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nbDatepicker", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.nbForm.get("SupplyDate")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.nbForm.get("SupplyDate")) == null ? null : tmp_13_0.touched) || ((tmp_13_0 = ctx.nbForm.get("SupplyDate")) == null ? null : tmp_13_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dropDownfixtureList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.nbForm.get("MURFixtureNo")) == null ? null : tmp_16_0.invalid) && (((tmp_16_0 = ctx.nbForm.get("MURFixtureNo")) == null ? null : tmp_16_0.touched) || ((tmp_16_0 = ctx.nbForm.get("MURFixtureNo")) == null ? null : tmp_16_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.nbForm.get("AgentAddress")) == null ? null : tmp_17_0.invalid) && (((tmp_17_0 = ctx.nbForm.get("AgentAddress")) == null ? null : tmp_17_0.touched) || ((tmp_17_0 = ctx.nbForm.get("AgentAddress")) == null ? null : tmp_17_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](20, _c0))("value", ctx.requisitionData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgOptionComponent, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_18__.CellEditor, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSpinnerDirective],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 90vw;\n  max-height: 85vh;\n  overflow: scroll;\n}"]
});

/***/ }),

/***/ 35240:
/*!********************************************************************************!*\
  !*** ./src/app/pages/inventory/requisition/add-requisition/customerservice.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;


var CustomerService = /*#__PURE__*/function () {
  function CustomerService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomerService);
    this.http = http;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomerService, [{
    key: "getCustomersMedium",
    value: function getCustomersMedium() {
      return this.http.get('assets/customers-medium.json').toPromise().then(function (res) {
        return res.data;
      }).then(function (data) {
        return data;
      });
    }
  }]);
  return CustomerService;
}();
_class = CustomerService;
_class.ɵfac = function CustomerService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});
[{
  "RequisitionId": null,
  "VendorId": 1007,
  "VesselId": 2004,
  "PortId": 4220,
  "SupplyDate": "2023-09-13",
  "MURFixtureNo": 5007,
  "TypeOfSupplyId": 6,
  "EquipmentManagementList": [{
    "EquipmentCategoryId": 9011,
    "EquipmentCategoryName": "Chemicals",
    "VesselId": 0,
    "EquipmentList": [{
      "RequisitionId": 0,
      "EquipmentId": 5009,
      "UnitName": "KGS",
      "VesselId": 0,
      "MinOrderQty": 12345,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Cement Remover"
    }, {
      "RequisitionId": 0,
      "EquipmentId": 5011,
      "UnitName": "KGS",
      "VesselId": 0,
      "MinOrderQty": 3123,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Alkaline"
    }]
  }, {
    "EquipmentCategoryId": 9012,
    "EquipmentCategoryName": "Consumables",
    "VesselId": 0,
    "EquipmentList": [{
      "RequisitionId": 0,
      "EquipmentId": 5010,
      "UnitName": "Units",
      "VesselId": 0,
      "MinOrderQty": 4564,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Aluminium Poles"
    }]
  }, {
    "EquipmentCategoryId": 9013,
    "EquipmentCategoryName": "Equipment",
    "VesselId": 0,
    "EquipmentList": [{
      "RequisitionId": 0,
      "EquipmentId": 5012,
      "UnitName": "KGS",
      "VesselId": 0,
      "MinOrderQty": 3244,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Submersible Pump & Accessories"
    }]
  }, {
    "EquipmentCategoryId": 9009,
    "EquipmentCategoryName": "Paint & Chemicals",
    "VesselId": 0,
    "EquipmentList": [{
      "RequisitionId": 0,
      "EquipmentId": 5013,
      "UnitName": "LTS",
      "VesselId": 0,
      "MinOrderQty": 23343,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Blue"
    }, {
      "RequisitionId": 0,
      "EquipmentId": 6008,
      "UnitName": "LTS",
      "VesselId": 0,
      "MinOrderQty": 20,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Chemical"
    }]
  }, {
    "EquipmentCategoryId": 9010,
    "EquipmentCategoryName": "PPE",
    "VesselId": 0,
    "EquipmentList": [{
      "RequisitionId": 0,
      "EquipmentId": 5008,
      "UnitName": "Units",
      "VesselId": 0,
      "MinOrderQty": 100,
      "CreatedDate": "0001-01-01T00:00:00",
      "Active": false,
      "EquipmentName": "Face Mask"
    }]
  }]
}];

/***/ }),

/***/ 87071:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/inventory/requisition/requisition-list/requisition-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionListComponent": () => (/* binding */ RequisitionListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _app_pages_inventory_requisition_add_requisition_add_requisition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/inventory/requisition/add-requisition/add-requisition.component */ 6660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/requisition/requisition.service */ 76970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;














function RequisitionListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "span", 14)(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function RequisitionListComponent_ng_template_21_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function RequisitionListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Vendor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Vessel Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Supply Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Supply Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function RequisitionListComponent_ng_template_23_button_24_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_ng_template_23_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      var rowData_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.viewVendorRequisition(rowData_r8.RequisitionId, "RequisitionView"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RequisitionListComponent_ng_template_23_button_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_ng_template_23_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.editDetials(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RequisitionListComponent_ng_template_23_button_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_ng_template_23_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      var product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.deleteDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RequisitionListComponent_ng_template_23_button_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_ng_template_23_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      var rowData_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.viewDetails(rowData_r8.RequisitionId, "RequisitionView"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RequisitionListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 27)(1, "td")(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngx-skeleton-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngx-skeleton-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngx-skeleton-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ngx-skeleton-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td")(19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ngx-skeleton-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td")(23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, RequisitionListComponent_ng_template_23_button_24_Template, 1, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, RequisitionListComponent_ng_template_23_button_25_Template, 1, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, RequisitionListComponent_ng_template_23_button_26_Template, 1, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, RequisitionListComponent_ng_template_23_button_27_Template, 1, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ngx-skeleton-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.VendorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.PortName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 23, rowData_r8.SupplyDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.RequisitionStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.activeIndex === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.activeIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.activeIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.activeIndex === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function RequisitionListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["VendorName", "VesselName"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var RequisitionListComponent = /*#__PURE__*/function () {
  function RequisitionListComponent(router, primengConfig, requisitionService, fb, messageService, confirmationService, toastrService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RequisitionListComponent);
    this.router = router;
    this.primengConfig = primengConfig;
    this.requisitionService = requisitionService;
    this.fb = fb;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.checkListRecord = false;
    this.dataLoaded = false;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RequisitionListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.activeIndex = 0;
      this.getRequisitionListRecords('NewOrder');
      this.requisitionManagementList();
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "requisitionManagementList",
    value: function requisitionManagementList() {
      var _this2 = this;
      this.requisitionService.getRequisitionManagementList().subscribe(function (res) {
        _this2.requisitionData = res[0].EquipmentCategorylist;
        console.log(res, "dataapi");
        console.log(res[0], 'this.requisitionData.VendorName');
      });
    }
  }, {
    key: "getRequisitionListRecords",
    value: function getRequisitionListRecords(filter) {
      var _this3 = this;
      this.checkListRecord = false;
      //debugger
      this.requisitionService.getRequisitionList(filter).subscribe(function (res) {
        // this.requisitionService.getRequisitionManagementList().subscribe((res: any) => {
        _this3.requisitionListData = res;
        // const requisitionListData = res
        console.log(_this3.requisitionListData, "requisitionListData");
        console.log(res[0], "requisitionListData");
        // this.requisition = res
        if (res.length === 0) {
          _this3.emptymessage = 'No Record Found';
        }
        setTimeout(function () {
          _this3.checkListRecord = true;
        }, 200);
        // setTimeout(() => {
        //   // this.dataLoaded = true; // Set the flag to indicate data is loaded
        //   this.checkListRecord =true
        // }, 9000);
        // this.requisition = res;
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
      var _this4 = this;
      this.dialogService.open(_app_pages_inventory_requisition_add_requisition_add_requisition_component__WEBPACK_IMPORTED_MODULE_3__.AddRequisitionComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this4.getRequisitionListRecords('NewOrder');
          _this4.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
    }
  }, {
    key: "editDetials",
    value: function editDetials(editDetails) {
      var _this5 = this;
      //debugger
      this.dialogService.open(_app_pages_inventory_requisition_add_requisition_add_requisition_component__WEBPACK_IMPORTED_MODULE_3__.AddRequisitionComponent, {
        context: {
          selectedItem: editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this5.getRequisitionListRecords('NewOrder');
          _this5.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
    }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this6 = this;
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
          _this6.requisitionService.deleteRequisition(deleteRecord).subscribe(function (res) {
            if (res) {
              _this6.getRequisitionListRecords('NewOrder');
              _this6.showPop('error', 'Delete', 'Record Deleted');
            }
          });
        } else if (result === false) {} else {}
      });
    }
  }, {
    key: "viewVendorRequisition",
    value: function viewVendorRequisition(requisitionId, RequisitionView) {
      this.router.navigate(['/pages/inventory/add-vendor-requisition'], {
        queryParams: {
          ID: requisitionId,
          data: RequisitionView
        }
      });
    }
  }, {
    key: "viewDetails",
    value: function viewDetails(requisitionId, RequisitionView) {
      this.router.navigate(['/pages/inventory/view-requisition-details'], {
        queryParams: {
          ID: requisitionId,
          data: RequisitionView
        }
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
  }, {
    key: "changeStatusList",
    value: function changeStatusList(orderStatus) {
      this.filterStatus = orderStatus;
      this.getRequisitionListRecords(this.filterStatus);
      switch (orderStatus) {
        case "NewOrder":
          // Code to handle a new order
          this.activeIndex = 0;
          break;
        case "Ongoing":
          // Code to handle an order in progress
          this.activeIndex = 1;
          break;
        case "Completed":
          // Code to handle a completed order
          this.activeIndex = 2;
          break;
      }
    }
  }]);
  return RequisitionListComponent;
}();
_class = RequisitionListComponent;
_class.ɵfac = function RequisitionListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_4__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-requisition-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 25,
  vars: 16,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "d-flex", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "d-flex", "justify-content-between", "py-3"], ["nbButton", "", "label", "", 1, "mr-2", 3, "status", "ngClass", "click"], ["nbButton", "", "label", "", 3, "status", "ngClass", "click"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle", "columns"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["nbInput", "", "type", "text", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "VendorId"], ["field", "VendorId"], ["pSortableColumn", "VesselId"], ["field", "VesselId"], ["pSortableColumn", "PortId"], ["field", "PortId"], ["pSortableColumn", "SupplyDate"], ["field", "SupplyDate"], ["pSortableColumn", "Status"], ["field", "Status"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "View", "nbTooltipPlacement", "top", "class", " p-button-primary  mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", "class", " p-button-primary  mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", "class", " p-button-primary", 3, "click", 4, "ngIf"], ["pButton", "", "styleClass", "p-button-rounded", "nbTooltip", "Details", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-external-link", "class", " p-button-primary", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "View", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-primary", 3, "click"], ["pButton", "", "styleClass", "p-button-rounded", "nbTooltip", "Details", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-external-link", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function RequisitionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Requisition Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_Template_button_click_7_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Add Requisition");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4)(10, "div")(11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_Template_button_click_11_listener() {
        return ctx.changeStatusList("NewOrder");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "New Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_Template_button_click_13_listener() {
        return ctx.changeStatusList("Ongoing");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Ongoing");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequisitionListComponent_Template_button_click_15_listener() {
        return ctx.changeStatusList("Completed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "COMPLETED ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nb-card")(19, "p-table", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, RequisitionListComponent_ng_template_21_Template, 3, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, RequisitionListComponent_ng_template_22_Template, 18, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, RequisitionListComponent_ng_template_23_Template, 29, 26, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, RequisitionListComponent_ng_template_24_Template, 3, 1, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.activeIndex === 0 ? "primary" : "control")("ngClass", ctx.activeIndex === 0 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.activeIndex === 1 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.activeIndex === 2 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.requisitionListData)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c1))("columns", ctx.cols)("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_13__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_13__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe]
});

/***/ }),

/***/ 76970:
/*!********************************************************************!*\
  !*** ./src/app/pages/inventory/requisition/requisition.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionService": () => (/* binding */ RequisitionService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var RequisitionService = /*#__PURE__*/function () {
  function RequisitionService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RequisitionService);
    this.http = http;
    this.RequisitionUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  // addRequisitionDetail(RequisitionData: Requisition) {
  //   //debugger
  //   return this.http.post(this.RequisitionUrl + 'InsertRequisition', RequisitionData)
  // }
  // http://192.168.29.210/MUR.API/CreateRequisition
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RequisitionService, [{
    key: "addRequisitionDetail",
    value: function addRequisitionDetail(RequisitionData) {
      debugger;
      console.log(RequisitionData, "api data");
      return this.http.post(this.RequisitionUrl + 'CreateRequisition', RequisitionData);
    }
    // updateRequisitionDetail(RequisitionData: Requisition) {
    //   ////debugger;
    //   return this.http.put(this.RequisitionUrl + 'UpdateRequisition', RequisitionData)
    // }
  }, {
    key: "updateRequisitionDetail",
    value: function updateRequisitionDetail(RequisitionData) {
      debugger;
      ////debugger;
      // return this.http.put(this.RequisitionUrl + 'UpdateRequisitionWithEquipment', RequisitionData)
      return this.http.put(this.RequisitionUrl + 'UpdateRequisitionWithEquipment', RequisitionData);
    }
  }, {
    key: "updateVendorRequisitionDetail",
    value: function updateVendorRequisitionDetail(RequisitionData, selectedAction) {
      debugger;
      ////debugger;
      // return this.http.put(this.RequisitionUrl + 'UpdateRequisitionWithEquipment', RequisitionData)
      return this.http.put(this.RequisitionUrl + "VendorOnGoing?Actions=".concat(selectedAction), RequisitionData);
    }
  }, {
    key: "deleteRequisition",
    value: function deleteRequisition(RequisitionData) {
      ////debugger;
      return this.http["delete"](this.RequisitionUrl + 'DeleteRequisition/' + RequisitionData.RequisitionId);
    }
    // getRequisitionList() {
    //   //debugger
    //   return this.http.get(this.RequisitionUrl + 'RequisitionList')
    // }
  }, {
    key: "getRequisitionList",
    value: function getRequisitionList(filter) {
      //debugger
      return this.http.get(this.RequisitionUrl + "FilterByRequisition?filter=".concat(filter));
    }
  }, {
    key: "getRequisitionByVendorList",
    value: function getRequisitionByVendorList(filter) {
      //debugger
      return this.http.get(this.RequisitionUrl + "FilterByVendor?filter=".concat(filter));
    }
  }, {
    key: "getVendorLoginList",
    value: function getVendorLoginList(vendorId, filter) {
      //debugger
      return this.http.get(this.RequisitionUrl + "VendorLoginList?vId=".concat(vendorId, "&filter=").concat(filter));
    }
  }, {
    key: "getEquipmentMakerList",
    value: function getEquipmentMakerList(categoryId) {
      //debugger
      return this.http.get(this.RequisitionUrl + "EquipmentMaker/".concat(categoryId));
    }
  }, {
    key: "getFixtureList",
    value: function getFixtureList(fixture) {
      //debugger
      return this.http.get(this.RequisitionUrl + 'FixtureList/' + fixture);
    }
  }, {
    key: "getRequisitionManagementList",
    value: function getRequisitionManagementList() {
      return this.http.get(this.RequisitionUrl + 'RequisitionManagementList');
    }
  }, {
    key: "getEditRequisitionWithEquipmentID",
    value: function getEditRequisitionWithEquipmentID(RequisitionId) {
      return this.http.get(this.RequisitionUrl + "EditRequisitionWithEquipment?id=".concat(RequisitionId));
    }
  }, {
    key: "getVendorStatusList",
    value: function getVendorStatusList() {
      return this.http.get(this.RequisitionUrl + "VendorStatusList");
    }
  }, {
    key: "getProductsData",
    value: function getProductsData() {
      return [{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }, {
        id: '1001',
        name: 'Black Watch',
        code: 'nvklal433',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      }, {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      }, {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }, {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      }, {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'Product Description',
        image: 'chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      }, {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'Product Description',
        image: 'galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }, {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'Product Description',
        image: 'game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4
      }, {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'Product Description',
        image: 'gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3
      }, {
        id: '1010',
        code: 'plb34234v',
        name: 'Gold Phone Case',
        description: 'Product Description',
        image: 'gold-phone-case.jpg',
        price: 24,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      }, {
        id: '1011',
        code: '4920nnc2d',
        name: 'Green Earbuds',
        description: 'Product Description',
        image: 'green-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1012',
        code: '250vm23cc',
        name: 'Green T-Shirt',
        description: 'Product Description',
        image: 'green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 74,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }, {
        id: '1013',
        code: 'fldsmn31b',
        name: 'Grey T-Shirt',
        description: 'Product Description',
        image: 'grey-t-shirt.jpg',
        price: 48,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 3
      }, {
        id: '1014',
        code: 'waas1x2as',
        name: 'Headphones',
        description: 'Product Description',
        image: 'headphones.jpg',
        price: 175,
        category: 'Electronics',
        quantity: 8,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
      }, {
        id: '1015',
        code: 'vb34btbg5',
        name: 'Light Green T-Shirt',
        description: 'Product Description',
        image: 'light-green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 34,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1016',
        code: 'k8l6j58jl',
        name: 'Lime Band',
        description: 'Product Description',
        image: 'lime-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 12,
        inventoryStatus: 'INSTOCK',
        rating: 3
      }, {
        id: '1017',
        code: 'v435nn85n',
        name: 'Mini Speakers',
        description: 'Product Description',
        image: 'mini-speakers.jpg',
        price: 85,
        category: 'Clothing',
        quantity: 42,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1018',
        code: '09zx9c0zc',
        name: 'Painted Phone Case',
        description: 'Product Description',
        image: 'painted-phone-case.jpg',
        price: 56,
        category: 'Accessories',
        quantity: 41,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }, {
        id: '1019',
        code: 'mnb5mb2m5',
        name: 'Pink Band',
        description: 'Product Description',
        image: 'pink-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1020',
        code: 'r23fwf2w3',
        name: 'Pink Purse',
        description: 'Product Description',
        image: 'pink-purse.jpg',
        price: 110,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      }, {
        id: '1021',
        code: 'pxpzczo23',
        name: 'Purple Band',
        description: 'Product Description',
        image: 'purple-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 6,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      }, {
        id: '1022',
        code: '2c42cb5cb',
        name: 'Purple Gemstone Necklace',
        description: 'Product Description',
        image: 'purple-gemstone-necklace.jpg',
        price: 45,
        category: 'Accessories',
        quantity: 62,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1023',
        code: '5k43kkk23',
        name: 'Purple T-Shirt',
        description: 'Product Description',
        image: 'purple-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
      }, {
        id: '1024',
        code: 'lm2tny2k4',
        name: 'Shoes',
        description: 'Product Description',
        image: 'shoes.jpg',
        price: 64,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1025',
        code: 'nbm5mv45n',
        name: 'Sneakers',
        description: 'Product Description',
        image: 'sneakers.jpg',
        price: 78,
        category: 'Clothing',
        quantity: 52,
        inventoryStatus: 'INSTOCK',
        rating: 4
      }, {
        id: '1026',
        code: 'zx23zc42c',
        name: 'Teal T-Shirt',
        description: 'Product Description',
        image: 'teal-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 3,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      }, {
        id: '1027',
        code: 'acvx872gc',
        name: 'Yellow Earbuds',
        description: 'Product Description',
        image: 'yellow-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 35,
        inventoryStatus: 'INSTOCK',
        rating: 3
      }, {
        id: '1028',
        code: 'tx125ck42',
        name: 'Yoga Mat',
        description: 'Product Description',
        image: 'yoga-mat.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 15,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }, {
        id: '1029',
        code: 'gwuby345v',
        name: 'Yoga Set',
        description: 'Product Description',
        image: 'yoga-set.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 8
      }];
    }
  }, {
    key: "getProductsWithOrdersData",
    value: function getProductsWithOrdersData() {
      return [{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        orders: [{
          id: '1000-0',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 65,
          quantity: 1,
          customer: 'David James',
          status: 'PENDING'
        }, {
          id: '1000-1',
          productCode: 'f230fh0g3',
          date: '2020-05-14',
          amount: 130,
          quantity: 2,
          customer: 'Leon Rodrigues',
          status: 'DELIVERED'
        }, {
          id: '1000-2',
          productCode: 'f230fh0g3',
          date: '2019-01-04',
          amount: 65,
          quantity: 1,
          customer: 'Juan Alejandro',
          status: 'RETURNED'
        }, {
          id: '1000-3',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 195,
          quantity: 3,
          customer: 'Claire Morrow',
          status: 'CANCELLED'
        }]
      }, {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        orders: [{
          id: '1001-0',
          productCode: 'nvklal433',
          date: '2020-05-14',
          amount: 72,
          quantity: 1,
          customer: 'Maisha Jefferson',
          status: 'DELIVERED'
        }, {
          id: '1001-1',
          productCode: 'nvklal433',
          date: '2020-02-28',
          amount: 144,
          quantity: 2,
          customer: 'Octavia Murillo',
          status: 'PENDING'
        }]
      }, {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        orders: [{
          id: '1002-0',
          productCode: 'zz21cz3c1',
          date: '2020-07-05',
          amount: 79,
          quantity: 1,
          customer: 'Stacey Leja',
          status: 'DELIVERED'
        }, {
          id: '1002-1',
          productCode: 'zz21cz3c1',
          date: '2020-02-06',
          amount: 79,
          quantity: 1,
          customer: 'Ashley Wickens',
          status: 'DELIVERED'
        }]
      }, {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        orders: []
      }, {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        orders: [{
          id: '1004-0',
          productCode: 'h456wer53',
          date: '2020-09-05',
          amount: 60,
          quantity: 4,
          customer: 'Mayumi Misaki',
          status: 'PENDING'
        }, {
          id: '1004-1',
          productCode: 'h456wer53',
          date: '2019-04-16',
          amount: 2,
          quantity: 30,
          customer: 'Francesco Salvatore',
          status: 'DELIVERED'
        }]
      }, {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        orders: [{
          id: '1005-0',
          productCode: 'av2231fwg',
          date: '2020-01-25',
          amount: 120,
          quantity: 1,
          customer: 'Isabel Sinclair',
          status: 'RETURNED'
        }, {
          id: '1005-1',
          productCode: 'av2231fwg',
          date: '2019-03-12',
          amount: 240,
          quantity: 2,
          customer: 'Lionel Clifford',
          status: 'DELIVERED'
        }, {
          id: '1005-2',
          productCode: 'av2231fwg',
          date: '2019-05-05',
          amount: 120,
          quantity: 1,
          customer: 'Cody Chavez',
          status: 'DELIVERED'
        }]
      }, {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'Product Description',
        image: 'chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        orders: [{
          id: '1006-0',
          productCode: 'bib36pfvm',
          date: '2020-02-24',
          amount: 32,
          quantity: 1,
          customer: 'Arvin Darci',
          status: 'DELIVERED'
        }, {
          id: '1006-1',
          productCode: 'bib36pfvm',
          date: '2020-01-14',
          amount: 64,
          quantity: 2,
          customer: 'Izzy Jones',
          status: 'PENDING'
        }]
      }, {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'Product Description',
        image: 'galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        orders: [{
          id: '1007-0',
          productCode: 'mbvjkgip5',
          date: '2020-06-19',
          amount: 34,
          quantity: 1,
          customer: 'Jennifer Smith',
          status: 'DELIVERED'
        }]
      }, {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'Product Description',
        image: 'game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4,
        orders: [{
          id: '1008-0',
          productCode: 'vbb124btr',
          date: '2020-01-05',
          amount: 99,
          quantity: 1,
          customer: 'Jeanfrancois David',
          status: 'DELIVERED'
        }, {
          id: '1008-1',
          productCode: 'vbb124btr',
          date: '2020-01-19',
          amount: 198,
          quantity: 2,
          customer: 'Ivar Greenwood',
          status: 'RETURNED'
        }]
      }, {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'Product Description',
        image: 'gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3,
        orders: [{
          id: '1009-0',
          productCode: 'cm230f032',
          date: '2020-06-24',
          amount: 299,
          quantity: 1,
          customer: 'Kadeem Mujtaba',
          status: 'PENDING'
        }, {
          id: '1009-1',
          productCode: 'cm230f032',
          date: '2020-05-11',
          amount: 299,
          quantity: 1,
          customer: 'Ashley Wickens',
          status: 'DELIVERED'
        }, {
          id: '1009-2',
          productCode: 'cm230f032',
          date: '2019-02-07',
          amount: 299,
          quantity: 1,
          customer: 'Julie Johnson',
          status: 'DELIVERED'
        }, {
          id: '1009-3',
          productCode: 'cm230f032',
          date: '2020-04-26',
          amount: 299,
          quantity: 1,
          customer: 'Tony Costa',
          status: 'CANCELLED'
        }]
      }];
    }
  }, {
    key: "getProductsMini",
    value: function getProductsMini() {
      return Promise.resolve(this.getProductsData().slice(0, 2));
    }
  }, {
    key: "returnjsondataMini",
    value: function returnjsondataMini() {
      return Promise.resolve(this.returnjsondata());
    }
  }, {
    key: "returnjsondata",
    value: function returnjsondata() {
      return [{
        "RequisitionId": 120,
        "VendorId": 1002,
        "VesselId": 10,
        "PortId": 112,
        "SupplyDate": "Date",
        "MURFixtureNo": 987561,
        "TypeOfSupplyId": 12,
        "VendorName": "Vendor Demo",
        "VesselName": "Vessel Demo",
        "PortName": "Mumbai",
        "SupplyTypeName": "XYZ",
        "CreatedDate": "Date",
        "UpdatedDate": "Date",
        "DeletedDate": "Date",
        "Active": true,
        "Fixture": "ABC123",
        "EquipmentCategoryList": [{
          "EquipmentCategoryId": 1002,
          "EquipmentCategoryName": "Paint",
          "Equipmentlist": [{
            "EquipmentId": 1,
            "MinOrderQty": 20,
            "EquipmentName": "Chemical 123"
          }, {
            "EquipmentId": 2,
            "MinOrderQty": 10,
            "EquipmentName": "Chemical XYZ"
          }, {
            "EquipmentId": 3,
            "MinOrderQty": 40,
            "EquipmentName": "Chemical ABC"
          }]
        }, {
          "EquipmentCategoryId": 1002,
          "EquipmentCategoryName": "Paint",
          "Equipmentlist": [{
            "EquipmentId": 1,
            "MinOrderQty": 20,
            "EquipmentName": "Chemical 123"
          }, {
            "EquipmentId": 2,
            "MinOrderQty": 10,
            "EquipmentName": "Chemical XYZ"
          }, {
            "EquipmentId": 3,
            "MinOrderQty": 40,
            "EquipmentName": "Chemical ABC"
          }]
        }]
      }];
    }
  }, {
    key: "testdata",
    value: function testdata() {
      return [{
        "RequisitionId": null,
        "VendorId": 0,
        "VesselId": 0,
        "PortId": 0,
        "SupplyDate": "0001-01-01T00:00:00",
        "MURFixtureNo": 0,
        "TypeOfSupplyId": 0,
        "CreatedDate": "0001-01-01T00:00:00",
        "UpdatedDate": null,
        "DeletedDate": null,
        "Active": false,
        "VendorName": null,
        "VesselName": null,
        "PortName": null,
        "SupplyTypeName": null,
        "Fixture": null,
        "EquipmentCategoryId": 0,
        "EquipmentCategoryName": null,
        "Equipmentlist": null,
        "EquipmentCategorylist": [{
          "EquipmentCategoryId": 9010,
          "EquipmentCategoryName": "PPE",
          "Equipmentlist": [{
            "EquipmentId": 5008,
            "UnitName": "Units",
            "MinOrderQty": 100,
            "EquipmentName": "Face Mask"
          }]
        }, {
          "EquipmentCategoryId": 9011,
          "EquipmentCategoryName": "Chemicals",
          "Equipmentlist": [{
            "EquipmentId": 5009,
            "UnitName": "KGS",
            "MinOrderQty": 12345,
            "EquipmentName": "Cement Remover"
          }]
        }, {
          "EquipmentCategoryId": 9012,
          "EquipmentCategoryName": "Consumables",
          "Equipmentlist": [{
            "EquipmentId": 5010,
            "UnitName": "Units",
            "MinOrderQty": 4564,
            "EquipmentName": "Aluminium Poles"
          }]
        }, {
          "EquipmentCategoryId": 9011,
          "EquipmentCategoryName": "Chemicals",
          "Equipmentlist": [{
            "EquipmentId": 5011,
            "UnitName": "KGS",
            "MinOrderQty": 3123,
            "EquipmentName": "Alkaline"
          }]
        }, {
          "EquipmentCategoryId": 9013,
          "EquipmentCategoryName": "Equipment",
          "Equipmentlist": [{
            "EquipmentId": 5012,
            "UnitName": "KGS",
            "MinOrderQty": 3244,
            "EquipmentName": "Submersible Pump & Accessories"
          }]
        }, {
          "EquipmentCategoryId": 9009,
          "EquipmentCategoryName": "Paint & Chemicals",
          "Equipmentlist": [{
            "EquipmentId": 5013,
            "UnitName": "LTS",
            "MinOrderQty": 23343,
            "EquipmentName": "Blue"
          }]
        }, {
          "EquipmentCategoryId": 9009,
          "EquipmentCategoryName": "Paint & Chemicals",
          "Equipmentlist": [{
            "EquipmentId": 6008,
            "UnitName": "LTS",
            "MinOrderQty": 20,
            "EquipmentName": "Chemical"
          }]
        }]
      }];
    }
  }]);
  return RequisitionService;
}();
_class = RequisitionService;
_class.ɵfac = function RequisitionService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2798:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/inventory/requisition/view-requistion/view-requistion.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRequistionComponent": () => (/* binding */ ViewRequistionComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _requisition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requisition.service */ 76970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 41765);


var _class;









function ViewRequistionComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Qty Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ViewRequistionComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 9)(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var customer_r4 = ctx.$implicit;
    var expanded_r6 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pRowToggler", customer_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", expanded_r6 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r4.EquipmentCategoryName);
  }
}
function ViewRequistionComponent_ng_template_46_tr_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ViewRequistionComponent_ng_template_46_tr_0_ng_template_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      var data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](data_r11.MinOrderQty = $event);
    })("blur", function ViewRequistionComponent_ng_template_46_tr_0_ng_template_7_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      var data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.onMinOrderQtyChange(data_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", data_r11.MinOrderQty);
  }
}
function ViewRequistionComponent_ng_template_46_tr_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r11.MinOrderQty, " ");
  }
}
function ViewRequistionComponent_ng_template_46_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 14)(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ViewRequistionComponent_ng_template_46_tr_0_ng_template_7_Template, 1, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ViewRequistionComponent_ng_template_46_tr_0_ng_template_8_Template, 1, 1, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r11.EquipmentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r11.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pEditableColumn", data_r11.MinOrderQty);
  }
}
function ViewRequistionComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ViewRequistionComponent_ng_template_46_tr_0_Template, 9, 3, "tr", 13);
  }
  if (rf & 2) {
    var product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", product_r8.EquipmentList);
  }
}
function ViewRequistionComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewRequistionComponent_ng_template_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.close());
    })("click", function ViewRequistionComponent_ng_template_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.dialogVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
var _c0 = function _c0() {
  return {
    width: "75vw"
  };
};
var _c1 = function _c1() {
  return {
    height: "300px"
  };
};
var _c2 = function _c2() {
  return {
    "width": "100%"
  };
};
var ViewRequistionComponent = /*#__PURE__*/function () {
  function ViewRequistionComponent(dialogRef, requisitionService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewRequistionComponent);
    this.dialogRef = dialogRef;
    this.requisitionService = requisitionService;
    this.title = "Details";
    this.dialogVisible = false;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewRequistionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.requisitionManagementList(this.selectedItem.VesselId);
      this.dialogVisible = true;
    }
  }, {
    key: "requisitionManagementList",
    value: function requisitionManagementList(id) {
      var _this = this;
      this.requisitionService.getEditRequisitionWithEquipmentID(id).subscribe(function (res) {
        _this.requisitionData = res[0].EquipmentCategorylist;
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "onDialogHide",
    value: function onDialogHide() {
      this.dialogRef.close();
      this.dialogVisible = false;
    }
  }]);
  return ViewRequistionComponent;
}();
_class = ViewRequistionComponent;
_class.ɵfac = function ViewRequistionComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_requisition_service__WEBPACK_IMPORTED_MODULE_2__.RequisitionService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-view-requistion"]],
  decls: 48,
  vars: 20,
  consts: [["id", "dailogClose", "header", "Requisition Details", "appendTo", "body", 1, "px-3", "container", 3, "resizable", "maximizable", "visible", "contentStyle", "onHide", "visibleChange"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-4", "col-lg-4"], [1, ""], ["dataKey", "EquipmentCategoryName", "rowGroupMode", "subheader", "groupRowsBy", "EquipmentCategoryName", "expandableRowGroups", "true", 3, "tableStyle", "value"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], ["pTemplate", "footer"], ["colspan", "5"], ["type", "button", 3, "pRowToggler"], [1, "", 2, "font-size", "0.8rem", 3, "ngClass"], [1, "p-text-bold", "p-ml-2", "ml-2", "mb-1"], [4, "ngFor", "ngForOf"], ["pEditableColumnField", "MinOrderQty", 3, "pEditableColumn"], ["pTemplate", "input"], ["pTemplate", "output"], ["nbInput", "", "type", "text", "fullWidth", "", 3, "ngModel", "ngModelChange", "blur"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-times", "label", "Dismiss", 1, "p-button-text", 3, "click"]],
  template: function ViewRequistionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "p-dialog", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onHide", function ViewRequistionComponent_Template_p_dialog_onHide_1_listener() {
        return ctx.onDialogHide();
      })("visibleChange", function ViewRequistionComponent_Template_p_dialog_visibleChange_1_listener($event) {
        return ctx.dialogVisible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-body")(3, "div", 1)(4, "div", 2)(5, "label")(6, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Vendor Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "label")(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Vessel Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "label")(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Supply Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 2)(24, "label")(25, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "MUR Fixture No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 2)(30, "label")(31, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Port Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 2)(36, "label")(37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Supply Type Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 3)(42, "div")(43, "p-table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ViewRequistionComponent_ng_template_44_Template, 7, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ViewRequistionComponent_ng_template_45_Template, 6, 3, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ViewRequistionComponent_ng_template_46_Template, 1, 1, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ViewRequistionComponent_ng_template_47_Template, 1, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("resizable", false)("maximizable", true)("visible", ctx.dialogVisible)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedItem.VendorName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedItem.VesselName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 14, ctx.selectedItem.SupplyDate, "dd/MM/yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedItem.Fixture);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedItem.PortName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedItem.SupplyTypeName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c2))("value", ctx.requisitionData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_10__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.CellEditor, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["@media only screen and (max-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n@media only screen and (min-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n@media only screen and (min-width: 768px) and (min-width: 1200px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}"]
});

/***/ }),

/***/ 96407:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vendor-requisition/add-vendor-requisition/add-vendor-requisition.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVendorRequisitionComponent": () => (/* binding */ AddVendorRequisitionComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 5480);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-pages/inventory/equipment/equipment.service */ 15657);
/* harmony import */ var _app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-pages/inventory/vendor/vendor.service */ 83402);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _app_pages_inventory_requisition_add_requisition_customerservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app-pages/inventory/requisition/add-requisition/customerservice */ 35240);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _app_pages_settings_supply_supply_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app-pages/settings/supply/supply.service */ 14202);
/* harmony import */ var _app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app-pages/inventory/requisition/requisition.service */ 76970);
/* harmony import */ var _app_pages_inventory_vessel_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app-pages/inventory/vessel-inventory/inventory.service */ 32846);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fileupload */ 13388);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @nebular/theme */ 23243);





var _class;






















function AddVendorRequisitionComponent_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Mark Final Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Submit Quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.close("vendorRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_6_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.submit("OnGoing", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Dispatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_div_6_button_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_6_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r26.submit("OnGoing", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Submit Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r28.close("vendorRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AddVendorRequisitionComponent_div_6_button_3_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, AddVendorRequisitionComponent_div_6_button_4_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddVendorRequisitionComponent_div_6_button_5_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r2.requisitionOrderDetails == null ? null : ctx_r2.requisitionOrderDetails.RequisitionStatus) !== "Accepted" && (ctx_r2.requisitionOrderDetails == null ? null : ctx_r2.requisitionOrderDetails.RequisitionStatus) !== "Dispatched");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r2.requisitionOrderDetails == null ? null : ctx_r2.requisitionOrderDetails.RequisitionStatus) === "Accepted" && (ctx_r2.requisitionOrderDetails == null ? null : ctx_r2.requisitionOrderDetails.RequisitionStatus) !== "Dispatched");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r2.requisitionOrderDetails == null ? null : ctx_r2.requisitionOrderDetails.RequisitionStatus) !== "Accepted" && (ctx_r2.requisitionOrderDetails == null ? null : ctx_r2.requisitionOrderDetails.RequisitionStatus) !== "Dispatched");
  }
}
function AddVendorRequisitionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r30.close("backToRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_7_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r32.submit("OnGoing", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_7_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r33.submit("OnGoing", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function AddVendorRequisitionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35);
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r34.close("backToRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_8_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r36.submit("Completed", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Mark Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function AddVendorRequisitionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.close("backToRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function AddVendorRequisitionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r39.close("vendorRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function AddVendorRequisitionComponent_ng_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r41.VesselId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r41.VesselName);
  }
}
function AddVendorRequisitionComponent_small_17_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nb-hint", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_small_17_nb_hint_1_Template, 2, 0, "nb-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.nbForm.get("VesselId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVendorRequisitionComponent_ng_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r43.PortId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r43.PortName);
  }
}
function AddVendorRequisitionComponent_small_23_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nb-hint", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_small_23_nb_hint_1_Template, 2, 0, "nb-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.nbForm.get("PortId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVendorRequisitionComponent_small_29_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nb-hint", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_small_29_nb_hint_1_Template, 2, 0, "nb-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r11.nbForm.get("SupplyDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVendorRequisitionComponent_ng_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r46.VoyageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r46.Fixture);
  }
}
function AddVendorRequisitionComponent_small_35_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nb-hint", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_small_35_nb_hint_1_Template, 2, 0, "nb-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r13.nbForm.get("MURFixtureNo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVendorRequisitionComponent_div_51_ng_template_2_Template(rf, ctx) {}
function AddVendorRequisitionComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 40)(1, "p-fileUpload", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onSelect", function AddVendorRequisitionComponent_div_51_Template_p_fileUpload_onSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r49.onUpload($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_div_51_ng_template_2_Template, 0, 0, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("multiple", false);
  }
}
function AddVendorRequisitionComponent_a_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "View Uploaded Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("href", ctx_r15.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function AddVendorRequisitionComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "No Uploaded Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Owner Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Owner Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Qty Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Qty Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Vendor Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Qty Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddVendorRequisitionComponent_ng_template_58_th_7_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, AddVendorRequisitionComponent_ng_template_58_th_8_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, AddVendorRequisitionComponent_ng_template_58_th_9_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, AddVendorRequisitionComponent_ng_template_58_th_10_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Qty Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, AddVendorRequisitionComponent_ng_template_58_th_13_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, AddVendorRequisitionComponent_ng_template_58_th_14_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Price Per Unit (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Sub Total (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Delivery Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Custom/Other Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Total Price (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Vendor Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, AddVendorRequisitionComponent_ng_template_58_th_29_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, AddVendorRequisitionComponent_ng_template_58_th_30_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition === "RequisitionView" && ((ctx_r17.requisitionOrderDetails == null ? null : ctx_r17.requisitionOrderDetails.RequisitionStatus) === "Dispatched" || (ctx_r17.requisitionOrderDetails == null ? null : ctx_r17.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx_r17.requisitionOrderDetails == null ? null : ctx_r17.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition !== "RequisitionView" && ((ctx_r17.requisitionOrderDetails == null ? null : ctx_r17.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx_r17.requisitionOrderDetails == null ? null : ctx_r17.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.modeByRequisition !== "RequisitionView");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_1_ng_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r86.MakerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r86.MakerName);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.RequisitionMaker = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_1_Template_ng_select_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r90.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_1_ng_option_1_Template, 2, 2, "ng-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.RequisitionMaker)("addTag", ctx_r83.CreateNew)("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r83.makerDropdown);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.RequisitionMaker, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_1_Template, 2, 4, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.RequisitionMaker, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.RequisitionRemarks = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r100.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.RequisitionRemarks);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.RequisitionRemarks, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.RequisitionRemarks, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r109);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.QtyAvailable = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r109);
      var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r110.onSubChange("QtyAvailable"));
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r109);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r111.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.QtyAvailable);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.QtyAvailable, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.QtyAvailable, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r121);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.QtyReceived = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r121);
      var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r122.onSubChange("QtyReceived"));
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r121);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
      var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r123.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.QtyReceived);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.QtyReceived, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_p_cellEditor_1_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.QtyReceived)("ngClass", ctx_r69.modeByRequisition === "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r69.modeByRequisition === "RequisitionView");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.MinOrderQty, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r133);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.PricePerUnit = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r133);
      var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r134.onSubChange("QtyAvailable"));
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r133);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r135.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.PricePerUnit);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.PricePerUnit, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.PricePerUnit, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r144);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.DeliveryCharges = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r144);
      var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r145.onTotalChange($event));
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r144);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r146.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.DeliveryCharges);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.DeliveryCharges, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.DeliveryCharges, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r155);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.OtherCharges = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r155);
      var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r156.onTotalChange($event));
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r155);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r157.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.OtherCharges);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.OtherCharges, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.OtherCharges, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.Tax = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166);
      var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r167.onTotalChange($event));
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r168.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.Tax);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.Tax, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.Tax, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_1_ng_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r176.MakerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r176.MakerName);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r179);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.VendorMaker = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_1_Template_ng_select_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r179);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r180.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_1_ng_option_1_Template, 2, 2, "ng-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.VendorMaker)("addTag", ctx_r173.CreateNew)("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r173.makerDropdown);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.VendorMaker, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_1_Template, 2, 4, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.VendorMaker, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r189);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](data_r62.Remarks = $event);
    })("ngModelChange", function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_ng_template_1_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r189);
      var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r190.onMinOrderQtyChange(data_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r62.Remarks);
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.Remarks, " ");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_ng_template_1_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_ng_template_2_Template, 1, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var data_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.Remarks, "");
  }
}
function AddVendorRequisitionComponent_ng_template_59_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddVendorRequisitionComponent_ng_template_59_tr_3_Template_tr_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r196);
      var data_r62 = restoredCtx.$implicit;
      var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r195.getEquipmentId(data_r62.EquipmentId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_8_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_9_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_11_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_12_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_14_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_15_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, AddVendorRequisitionComponent_ng_template_59_tr_3_td_16_Template, 2, 3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, AddVendorRequisitionComponent_ng_template_59_tr_3_td_17_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_19_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_20_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_24_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_25_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_27_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_28_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_30_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_31_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_35_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_36_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, AddVendorRequisitionComponent_ng_template_59_tr_3_p_cellEditor_38_Template, 3, 0, "p-cellEditor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, AddVendorRequisitionComponent_ng_template_59_tr_3_ng_container_39_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var data_r62 = ctx.$implicit;
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.EquipmentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.MinOrderQty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.RequisitionMaker)("ngClass", ctx_r61.modeByRequisition === "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.RequisitionRemarks)("ngClass", ctx_r61.modeByRequisition === "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.QtyAvailable)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView" && ((ctx_r61.requisitionOrderDetails == null ? null : ctx_r61.requisitionOrderDetails.RequisitionStatus) === "Dispatched" || (ctx_r61.requisitionOrderDetails == null ? null : ctx_r61.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx_r61.requisitionOrderDetails == null ? null : ctx_r61.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView" && ((ctx_r61.requisitionOrderDetails == null ? null : ctx_r61.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx_r61.requisitionOrderDetails == null ? null : ctx_r61.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.PricePerUnit)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r62.Subtotal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.Subtotal)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.Subtotal)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.Subtotal)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", +data_r62.Total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.VendorMaker)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pEditableColumn", data_r62.Remarks)("ngClass", ctx_r61.modeByRequisition !== "RequisitionView" ? "nb-bgchange" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r61.modeByRequisition === "RequisitionView");
  }
}
function AddVendorRequisitionComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 45)(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AddVendorRequisitionComponent_ng_template_59_tr_3_Template, 40, 43, "tr", 47);
  }
  if (rf & 2) {
    var rowData_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](rowData_r59.EquipmentCategoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", rowData_r59.EquipmentList);
  }
}
var _c0 = function _c0() {
  return {
    "width": "100%"
  };
};
var AddVendorRequisitionComponent = /*#__PURE__*/function () {
  function AddVendorRequisitionComponent(route, router, equipmentService, vendorService, vesselService, customerService, portService, supplyService, requisitionService, inventoryService, formBuilder) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AddVendorRequisitionComponent);
    this.route = route;
    this.router = router;
    this.equipmentService = equipmentService;
    this.vendorService = vendorService;
    this.vesselService = vesselService;
    this.customerService = customerService;
    this.portService = portService;
    this.supplyService = supplyService;
    this.requisitionService = requisitionService;
    this.inventoryService = inventoryService;
    this.formBuilder = formBuilder;
    this.formTitle = "Add";
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_5__.CustomStateError();
    this.selectedCustomers = [];
    this.selectedVesselId = null;
    this.updatedMinOrderQtyValues = [];
    this.storeDataInArray = [];
    this.loading = false;
    this.nbForm = this.formBuilder.group({
      RequisitionId: "",
      VendorId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      VesselId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      PortId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      SupplyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      MURFixtureNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      AgentAddress: [''],
      Contact: [''],
      TotalCost: [''],
      // TypeOfSupplyId: [null, Validators.required],
      Invoice: [''],
      Attachment: [''],
      FilePath: [null]
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AddVendorRequisitionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // console.log(this.selectedItem,'this.selectedItem')
      this.route.queryParams.subscribe(function (params) {
        _this.selectedItem = params['ID'];
        _this.modeByRequisition = params['data'];
        console.log(_this.modeByRequisition);
        //        this.selectedItem = params['editDetails'];
        // Now you have both the ID and data in your component
      });
      // this.getDropdownList();
      this.getVendorListRecords(1, 100, '');
      this.getVesselListRecords(1, 100, '');
      this.getPortList(1, 100, '');
      this.getSupplyListRecords(1, 100, '');
      this.getVendorStatusList();
      if (this.selectedItem !== undefined) {
        this.getDataFromIdrequisitionManagement(this.selectedItem);
        if (this.modeByRequisition === 'RequisitionView') {
          this.formTitle = "Vendor";
        } else {
          this.formTitle = "Update";
        }
      } else {
        this.requisitionManagementList();
      }
    }
    // async getDropdownList() {
    //   await this.inventoryService.getMakerList().subscribe((res: Maker) => {
    //     this.makerDropdown = res
    //   })
    // }
  }, {
    key: "getDataFromIdrequisitionManagement",
    value: function () {
      var _getDataFromIdrequisitionManagement = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(requisitionId) {
        var _this2 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.requisitionService.getEditRequisitionWithEquipmentID(requisitionId).subscribe(function (res) {
                debugger;
                _this2.requisitionOrderDetails = res[0];
                if (_this2.requisitionOrderDetails.DeliveryChallan !== null) {
                  _this2.imageURL = _this2.requisitionService.RequisitionUrl + 'OrderChallan/' + _this2.requisitionOrderDetails.DeliveryChallan;
                } else {
                  _this2.imageURL = null;
                }
                var updatedData = {
                  "EquipmentManagementList": res[0].EquipmentManagementList.map(function (category) {
                    return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, category), {}, {
                      EquipmentList: category.EquipmentList.filter(function (equipment) {
                        return equipment.MinOrderQty > 0;
                      })
                    });
                  })
                };
                var filteredCategories = updatedData.EquipmentManagementList.filter(function (category) {
                  return category.EquipmentList.some(function (equipment) {
                    return equipment.MinOrderQty > 0;
                  });
                });
                console.log(updatedData, "this");
                _this2.requisitionData = filteredCategories;
                var totalList = _this2.requisitionData.flatMap(function (category) {
                  return category.EquipmentList;
                });
                var totalSum = 0;
                totalList.forEach(function (item) {
                  totalSum += item.Total;
                });
                _this2.nbForm.setValue({
                  RequisitionId: res[0].RequisitionId,
                  VendorId: res[0].VendorId,
                  VesselId: res[0].VesselId,
                  PortId: res[0].PortId,
                  SupplyDate: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatDate)(res[0].SupplyDate, 'MMM dd,yyyy', 'en')],
                  MURFixtureNo: res[0].MURFixtureNo,
                  AgentAddress: res[0].AgentAddress,
                  Contact: res[0].Contact,
                  // TypeOfSupplyId: res[0].TypeOfSupplyId,
                  // VendorStatusId: res[0].VendorStatusId,
                  Invoice: res[0].Invoice,
                  TotalCost: totalSum,
                  Attachment: "",
                  FilePath: null
                });
                _this2.getFixtureList(_this2.nbForm.value.VesselId);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getDataFromIdrequisitionManagement(_x) {
        return _getDataFromIdrequisitionManagement.apply(this, arguments);
      }
      return getDataFromIdrequisitionManagement;
    }() // this.updateListForm = this.fb.group({
    //   CleaningStageId: [""],
    //   CleaningStageName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    //   ProgressWeightage: ["", [Validators.required, Validators.min(1), Validators.max(100)]],
    //   MinOrderQty: [null, [Validators.required]],
    // });
  }, {
    key: "onVesselSelectionChange",
    value: function onVesselSelectionChange() {
      // console.log('Selected VesselId:', this.selectedVesselId);
    }
  }, {
    key: "requisitionManagementList",
    value: function requisitionManagementList() {
      var _this3 = this;
      this.requisitionService.getRequisitionManagementList().subscribe(function (res) {
        _this3.requisitionData = res[0].EquipmentCategorylist;
      });
    }
  }, {
    key: "onFilter",
    value: function onFilter(data) {
      console.log(data);
    }
  }, {
    key: "onRowSelect",
    value: function onRowSelect(event) {
      console.log(event);
    }
  }, {
    key: "getVendorListRecords",
    value: function getVendorListRecords(cPage, nRows, filter) {
      var _this4 = this;
      this.vendorService.getVendorList(cPage, nRows, filter).subscribe(function (res) {
        _this4.dropDownVendorList = res.VendorData;
      });
    }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this5 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        // console.log(res, "getVesselListRecords")
        _this5.dropDownVesselList = res.VesselData;
        // this.dropDownVesselList.find((res:Vessel)=>{
        //  this.getFixtureRecods= res.VesselId
        // })
      });
    }
  }, {
    key: "getPortList",
    value: function getPortList(cPage, nRows, filter) {
      var _this6 = this;
      this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
        // console.log(res)
        _this6.dropDownPortList = res.PortData;
      });
    }
  }, {
    key: "getFixtureList",
    value: function getFixtureList(vesselId) {
      var _this7 = this;
      // this.nbForm.get('MURFixtureNo').setValue(null);
      //debugger
      if (this.selectedItem !== undefined) {
        this.selectedValue = vesselId;
      } else {
        this.selectedValue = this.nbForm.get('VesselId').value;
      }
      this.requisitionService.getFixtureList(this.selectedValue).subscribe(function (res) {
        // console.log(res)
        _this7.dropDownfixtureList = res;
      });
    }
  }, {
    key: "getSupplyListRecords",
    value: function getSupplyListRecords(cPage, nRows, filter) {
      var _this8 = this;
      this.supplyService.getSupplyList(cPage, nRows, filter).subscribe(function (res) {
        // console.log(res)
        _this8.supply = res.SupplyTypeData;
        _this8.dropDownSupplyList = res.SupplyTypeData;
      });
    }
    // getRequisitionListRecords() {
    //   //debugger
    //   this.requisitionService.getRequisitionList().subscribe((res: Requisition[]) => {
    //     console.log(res)
    //     this.requisition = res;
    //   })
    // }
  }, {
    key: "getVendorStatusList",
    value: function getVendorStatusList() {
      var _this9 = this;
      this.requisitionService.getVendorStatusList().subscribe(function (res) {
        _this9.vendorStatus = res;
      });
    }
    // getRequisitionListRecords() {
    //   //debugger
    //   this.requisitionService.getRequisitionList().subscribe((res: Requisition[]) => {
    //     console.log(res)
    //     this.requisition = res;
    //     if (this.selectedItem !== undefined) {
    //       this.nbForm.get('requisitionName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.requisition, 'requisitionName',this.selectedItem.requisitionName)]);
    //       // this.nbForm.get('CargoName').updateValueAndValidity();
    //     } else {
    //       this.nbForm.get('requisitionName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.requisition, 'requisitionName', null)]);
    //       // this.nbForm.get('CargoName').updateValueAndValidity();
    //     }
    //   })
    // }
  }, {
    key: "close",
    value: function close(selectedBack) {
      // this.dialogRef.close();
      if (selectedBack === 'vendorRequisition') {
        this.router.navigate(['/pages/inventory/vendor-requisition']);
      } else {
        this.router.navigate(['/pages/inventory/requisition']);
      }
    }
  }, {
    key: "onMinOrderQtyChange",
    value: function onMinOrderQtyChange(updatedValue) {
      debugger;
      console.log(updatedValue, "updatedValue");
      this.changeMinOrderQty = updatedValue;
      // this.equipment = this.editRequisitionListData
      //   .flatMap(category => category.EquipmentList)
      //   .find(equipment => equipment.EquipmentId === this.changeMinOrderQty?.EquipmentId);
      // if (this.equipment) {
      //   this.equipment.MinOrderQty = this.changeMinOrderQty.MinOrderQty;
      //   // this.editRequisitionListData = this.equipment
      // }
      // vbcvbgf
      // const equipment = this.requisitionData
      // .flatMap(category => category.EquipmentList)
      // .find(equipment => equipment.EquipmentId === updatedValue?.EquipmentId);
      // if (equipment) {
      // equipment.MinOrderQty = updatedValue.MinOrderQty;
      // }
      // this.equipmentService.updateEquipmentDetail(updatedValue).subscribe(res => {
      //   console.log(res,"res")
      //     })
      // console.log(updatedValue.MinOrderQty, "updatedValue")
      // this.updatedMinOrderQtyValues.push(updatedValue.MinOrderQty);
      // const category = this.requisitionData.EquipmentCategorylist.find(category => category.EquipmentCategoryId == updatedValue.equipmentCategoryId);
      //   if (category) {
      //     const equipment = category.EquipmentList.find(item => item.EquipmentId === updatedValue.equipmentId);
      //     if (equipment) {
      //       equipment.MinOrderQty = updatedValue.MinOrderQty;
      //       console.log(`MinOrderQty changed for EquipmentId ${updatedValue.equipmentId} in CategoryId ${updatedValue.equipmentCategoryId}`);
      //     }
      //   }
    }
  }, {
    key: "getValueVessel",
    value: function getValueVessel(VesselId) {
      this.nbForm.get('MURFixtureNo').setValue(null);
      // this.nbForm.value.MURFixtureNo = null
      console.log;
      this.selectedVesselId = VesselId;
    }
  }, {
    key: "onSubChange",
    value: function onSubChange(selectedQty) {
      var _this10 = this;
      var equipment = this.requisitionData.flatMap(function (category) {
        return category.EquipmentList;
      }).find(function (equipment) {
        var _this10$changeMinOrde;
        return equipment.EquipmentId === ((_this10$changeMinOrde = _this10.changeMinOrderQty) === null || _this10$changeMinOrde === void 0 ? void 0 : _this10$changeMinOrde.EquipmentId);
      });
      if (equipment) {
        equipment.Subtotal = this.changeMinOrderQty.PricePerUnit * this.changeMinOrderQty[selectedQty];
      }
      console.log('hits changes');
      this.onTotalChange(equipment.Subtotal);
    }
  }, {
    key: "onTotalChange",
    value: function onTotalChange(taxVal) {
      var _this11 = this,
        _this$changeMinOrderQ;
      debugger;
      var totalList = this.requisitionData.flatMap(function (category) {
        return category.EquipmentList;
      });
      var equipment = totalList.find(function (equipment) {
        var _this11$changeMinOrde;
        return equipment.EquipmentId === ((_this11$changeMinOrde = _this11.changeMinOrderQty) === null || _this11$changeMinOrde === void 0 ? void 0 : _this11$changeMinOrde.EquipmentId);
      });
      // if (equipment && this.changeMinOrderQty?.Subtotal && this.changeMinOrderQty.DeliveryCharges && this.changeMinOrderQty.OtherCharges && this.changeMinOrderQty.Tax) {
      equipment.Total = +((_this$changeMinOrderQ = this.changeMinOrderQty) === null || _this$changeMinOrderQ === void 0 ? void 0 : _this$changeMinOrderQ.Subtotal) + +this.changeMinOrderQty.DeliveryCharges + +this.changeMinOrderQty.OtherCharges + +this.changeMinOrderQty.Tax;
      // }
      var totalSum = 0;
      totalList.forEach(function (item) {
        totalSum += item.Total;
      });
      this.nbForm.get('TotalCost').setValue(totalSum);
    }
  }, {
    key: "saveDraf",
    value: function saveDraf() {}
  }, {
    key: "submit",
    value: function submit(selectedAction, recentStatus) {
      var _this12 = this;
      debugger;
      var recentValue = recentStatus.target.innerHTML;
      if (this.nbForm.valid) {
        this.loading = true;
        //set Vessel id and set for send recode
        this.requisitionData.forEach(function (category) {
          category.VesselId = _this12.nbForm.value.VesselId;
          category.EquipmentList.forEach(function (equipment) {
            equipment.VesselId = _this12.nbForm.value.VesselId;
          });
        });
        // get Equipment  data which edit
        var equipment = this.requisitionData.flatMap(function (category) {
          return category.EquipmentList;
        }).find(function (equipment) {
          var _this12$changeMinOrde;
          return equipment.EquipmentId === ((_this12$changeMinOrde = _this12.changeMinOrderQty) === null || _this12$changeMinOrde === void 0 ? void 0 : _this12$changeMinOrde.EquipmentId);
        });
        if (equipment) {
          equipment.MinOrderQty = this.changeMinOrderQty.MinOrderQty;
        }
        if (this.nbForm.value.SupplyDate !== null) {
          var selectedDate1 = new Date(this.nbForm.value.SupplyDate);
          ;
          var timeZoneOffset1 = selectedDate1.getTimezoneOffset();
          selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
          var dataPickSupplyDate = selectedDate1.toISOString().split('T')[0];
          this.nbForm.get('SupplyDate').setValue(dataPickSupplyDate);
          console.log(this.nbForm.get('SupplyDate').value, "second");
        }
        // // get data to send api this veriable
        // this.requisitionDataSave = {
        //   RequisitionId: this.nbForm.value.RequisitionId,
        //   VendorId: this.nbForm.value.VendorId,
        //   VesselId: this.nbForm.value.VesselId,
        //   PortId: this.nbForm.value.PortId,
        //   SupplyDate: this.nbForm.value.SupplyDate,
        //   MURFixtureNo: this.nbForm.value.MURFixtureNo,
        //   TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
        //   EquipmentManagementList: this.requisitionData,
        // };
        if (this.selectedItem !== undefined) {
          // editRequisitionListData
          debugger;
          this.requisitionDataSave = {
            RequisitionId: this.nbForm.value.RequisitionId,
            VendorId: this.nbForm.value.VendorId,
            VesselId: this.nbForm.value.VesselId,
            PortId: this.nbForm.value.PortId,
            SupplyDate: this.nbForm.value.SupplyDate,
            MURFixtureNo: this.nbForm.value.MURFixtureNo,
            // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
            Invoice: this.nbForm.value.Invoice,
            // VendorStatusId: this.nbForm.value.VendorStatusId,
            FilePath: this.nbForm.value.FilePath,
            EquipmentManagementList: this.requisitionData
          };
          if (recentValue === 'Accepted' || recentValue === 'Rejected' || recentValue === 'Dispatch' || recentValue === 'Submit Quote') {
            if (recentValue === 'Accepted') {
              this.requisitionDataSave.RequisitionStatus = 'Accepted';
            } else if (recentValue === 'Dispatch') {
              this.requisitionDataSave.RequisitionStatus = 'Dispatched';
            } else if (recentValue === 'Submit Quote') {
              this.requisitionDataSave.RequisitionStatus = 'OnGoing';
            } else {
              this.requisitionDataSave.RequisitionStatus = recentValue;
            }
          } else {
            this.requisitionDataSave.RequisitionStatus = this.requisitionOrderDetails.RequisitionStatus;
          }
          console.log(this.requisitionDataSave, "value oif edit");
          this.requisitionService.updateVendorRequisitionDetail(this.requisitionDataSave, selectedAction).subscribe(function (res) {
            if (res == true) {
              // this.dialogRef.close(this.requisitionDataSave);
              if (recentValue === 'Accepted' || recentValue === 'Rejected' || recentValue === 'Mark Received') {
                _this12.router.navigate(['/pages/inventory/requisition']);
                _this12.loading = false;
              } else {
                _this12.router.navigate(['/pages/inventory/vendor-requisition']);
                _this12.loading = false;
              }
            }
          });
        } else {
          debugger;
          this.requisitionDataSave = {
            RequisitionId: this.nbForm.value.RequisitionId,
            VendorId: this.nbForm.value.VendorId,
            VesselId: this.nbForm.value.VesselId,
            PortId: this.nbForm.value.PortId,
            SupplyDate: this.nbForm.value.SupplyDate,
            MURFixtureNo: this.nbForm.value.MURFixtureNo,
            // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
            // VendorStatusId: this.nbForm.value.VendorStatusId,
            Invoice: this.nbForm.value.Invoice,
            FilePath: this.nbForm.value.FilePath,
            EquipmentManagementList: this.requisitionData
          };
          var requisitionDetails = this.nbForm.value;
          this.requisitionService.addRequisitionDetail(this.requisitionDataSave).subscribe(function (res) {
            debugger;
            if (res == true) {
              _this12.loading = false;
              // this.dialogRef.close(requisitionDetails);
            }
          });
        }
      } else {
        this.nbForm.markAllAsTouched();
      }
    }
  }, {
    key: "onUpload",
    value: function onUpload(event) {
      //debugger
      try {
        var file = event.files[0];
        console.log(file, "primeng");
        this.convertToBase64(file);
      } catch (error) {
        this.fileName = null;
        this.base64File = null;
      }
      console.log(this.nbForm.value.FilePath);
    }
  }, {
    key: "convertToBase64",
    value: function convertToBase64(file) {
      var _this$nbForm$get,
        _this13 = this;
      //debugger
      (_this$nbForm$get = this.nbForm.get('Attachment')) === null || _this$nbForm$get === void 0 ? void 0 : _this$nbForm$get.setValue(file.name);
      var reader = new FileReader();
      reader.onloadend = function () {
        var _this13$nbForm$get;
        var base64String = reader.result;
        // this.pdfSrc = base64String
        var base64Value = base64String.replace("data:application/pdf;base64,", "");
        (_this13$nbForm$get = _this13.nbForm.get('FilePath')) === null || _this13$nbForm$get === void 0 ? void 0 : _this13$nbForm$get.setValue(base64Value);
      };
      reader.readAsDataURL(file);
    }
  }, {
    key: "CreateNew",
    value: function CreateNew(city) {
      alert("Create New Clicked : " + city);
      return city;
    }
  }, {
    key: "getEquipmentId",
    value: function getEquipmentId(selectedRow) {
      var _this14 = this;
      console.log(selectedRow, "get id of quipment");
      this.requisitionService.getEquipmentMakerList(selectedRow).subscribe(function (res) {
        _this14.makerDropdown = res;
      });
    }
  }]);
  return AddVendorRequisitionComponent;
}();
_class = AddVendorRequisitionComponent;
_class.ɵfac = function AddVendorRequisitionComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_inventory_equipment_equipment_service__WEBPACK_IMPORTED_MODULE_6__.EquipmentService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_7__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_8__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_add_requisition_customerservice__WEBPACK_IMPORTED_MODULE_9__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_10__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_settings_supply_supply_service__WEBPACK_IMPORTED_MODULE_11__.SupplyService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_12__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_pages_inventory_vessel_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_13__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-vendor-requisition"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_18__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_18__.ConfirmationService])],
  decls: 60,
  vars: 33,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "card", "px-3", 3, "nbSpinner"], [3, "formGroup"], [1, "row", "align-items-center", "justify-content-between"], [4, "ngIf"], [1, "example-items-rows", "row"], [1, "col-4", "mb-3"], [1, "form-label"], ["fullWidth", "", "formControlName", "VesselId", "placeholder", "Select Vessel", 3, "readonly", "appendTo", "keyup", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["fullWidth", "", "formControlName", "PortId", "placeholder", "Select Port", 3, "readonly", "appendTo", "keyup"], [1, "mb-3", "col-4"], ["nbInput", "", "formControlName", "SupplyDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "readonly"], ["fullWidth", "", "formControlName", "MURFixtureNo", "placeholder", "Select MUR Fixture No", 3, "readonly", "appendTo"], [1, "col-4", 3, "ngClass"], ["for", "firstName", 1, "form-label"], ["type", "text", "formControlName", "Invoice", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Invoice Number", 3, "readonly"], [1, "col-12"], ["for", "AgentAddress", 1, "form-label"], ["type", "text", "formControlName", "AgentAddress", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Agent Address"], ["for", "Cost", 1, "form-label"], ["type", "text", "formControlName", "TotalCost", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Total Cost", 3, "readonly"], [1, "col-12", 3, "ngClass"], ["class", "mb-2", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["style", "font-weight: 600;", 4, "ngIf"], [1, "col-12", "mb-4"], [1, "card"], ["dataKey", "EquipmentCategoryName", 3, "tableStyle", "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["type", "button", "nbButton", "", "status", "basic", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "danger", "class", "mr-2", 3, "click", 4, "ngIf"], ["type", "button", "nbButton", "", "status", "primary", "type", "button", "class", " mr-2", 3, "click", 4, "ngIf"], ["type", "submit", "nbButton", "", "status", "primary", "class", " mr-2", 3, "click", 4, "ngIf"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "primary", "type", "button", 1, "mr-2", 3, "click"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], [3, "value"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"], [1, "mb-2"], ["type", "file", "formControlName", "Attachment", "accept", "image/*,.pdf", "maxFileSize", "2000000", 1, "px-0", 3, "multiple", "onSelect"], ["class", "py-0", "pTemplate", "content", "mode", "basic", "class", "custom-file-upload"], ["target", "_blank", 3, "href"], [2, "font-weight", "600"], [1, "data-table"], ["colspan", "13", 2, "font-weight", "600"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["pEditableColumnField", "RequisitionMaker", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "RequisitionRemarks", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "QtyAvailable", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "QtyReceived", 3, "pEditableColumn", "ngClass", 4, "ngIf"], ["pEditableColumnField", "PricePerUnit", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "DeliveryCharges", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "OtherCharges", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "Tax", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "VendorMaker", 3, "pEditableColumn", "ngClass"], ["pEditableColumnField", "Remarks", 3, "pEditableColumn", "ngClass"], ["pTemplate", "input"], ["pTemplate", "output"], ["addTagText", "Add Item", "placeholder", "Select Maker", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "ngModel", "addTag", "appendTo", "ngModelChange"], ["nbInput", "", "type", "text", "fullWidth", "", 3, "ngModel", "ngModelChange"], ["nbInput", "", "type", "number", "fullWidth", "", 3, "ngModel", "ngModelChange"], ["pEditableColumnField", "QtyReceived", 3, "pEditableColumn", "ngClass"]],
  template: function AddVendorRequisitionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "nb-card-header", 2)(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, AddVendorRequisitionComponent_h5_4_Template, 2, 0, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddVendorRequisitionComponent_h5_5_Template, 2, 0, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddVendorRequisitionComponent_div_6_Template, 6, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddVendorRequisitionComponent_div_7_Template, 7, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, AddVendorRequisitionComponent_div_8_Template, 5, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, AddVendorRequisitionComponent_div_9_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, AddVendorRequisitionComponent_div_10_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "nb-card-body", 4)(12, "div", 5)(13, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Vessel");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ng-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function AddVendorRequisitionComponent_Template_ng_select_keyup_15_listener($event) {
        return ctx.getVesselListRecords(1, 100, $event.target.value);
      })("change", function AddVendorRequisitionComponent_Template_ng_select_change_15_listener($event) {
        return ctx.getFixtureList($event);
      })("change", function AddVendorRequisitionComponent_Template_ng_select_change_15_listener($event) {
        return ctx.getValueVessel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, AddVendorRequisitionComponent_ng_option_16_Template, 2, 2, "ng-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, AddVendorRequisitionComponent_small_17_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 5)(19, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Supply Port");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "ng-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function AddVendorRequisitionComponent_Template_ng_select_keyup_21_listener($event) {
        return ctx.getPortList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, AddVendorRequisitionComponent_ng_option_22_Template, 2, 2, "ng-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, AddVendorRequisitionComponent_small_23_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 10)(25, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Supply Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "br")(28, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, AddVendorRequisitionComponent_small_29_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 5)(31, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "MUR Fixture No");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, AddVendorRequisitionComponent_ng_option_34_Template, 2, 2, "ng-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, AddVendorRequisitionComponent_small_35_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 13)(37, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Invoice Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 16)(41, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Agent Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](43, "textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 5)(45, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "Total Cost of All Equipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 21)(49, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "Invoice & Delivery Challan Upload ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, AddVendorRequisitionComponent_div_51_Template, 3, 1, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, AddVendorRequisitionComponent_a_53_Template, 2, 1, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, AddVendorRequisitionComponent_span_54_Template, 2, 0, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 25)(56, "div", 26)(57, "p-table", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, AddVendorRequisitionComponent_ng_template_58_Template, 31, 8, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, AddVendorRequisitionComponent_ng_template_59_Template, 4, 2, "ng-template", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      var tmp_12_0;
      var tmp_16_0;
      var tmp_18_0;
      var tmp_22_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition === "RequisitionView" && (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Dispatched");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition !== "RequisitionView");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition !== "RequisitionView" && ((ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) !== "Received Full" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) !== "Received Partial"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition === "RequisitionView" && ((ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "OnGoing" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "NewOrder" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Rejected" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Accepted"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition === "RequisitionView" && (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Dispatched");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition === "RequisitionView" && ((ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition !== "RequisitionView" && ((ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.dropDownVesselList);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_12_0.touched) || ((tmp_12_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_12_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.dropDownPortList);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.nbForm.get("PortId")) == null ? null : tmp_16_0.invalid) && (((tmp_16_0 = ctx.nbForm.get("PortId")) == null ? null : tmp_16_0.touched) || ((tmp_16_0 = ctx.nbForm.get("PortId")) == null ? null : tmp_16_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.nbForm.get("SupplyDate")) == null ? null : tmp_18_0.invalid) && (((tmp_18_0 = ctx.nbForm.get("SupplyDate")) == null ? null : tmp_18_0.touched) || ((tmp_18_0 = ctx.nbForm.get("SupplyDate")) == null ? null : tmp_18_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.dropDownfixtureList);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.nbForm.get("MURFixtureNo")) == null ? null : tmp_22_0.invalid) && (((tmp_22_0 = ctx.nbForm.get("MURFixtureNo")) == null ? null : tmp_22_0.touched) || ((tmp_22_0 = ctx.nbForm.get("MURFixtureNo")) == null ? null : tmp_22_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "NewOrder" ? "d-none" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", ctx.modeByRequisition === "RequisitionView" ? true : false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "NewOrder" ? "d-none" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition !== "RequisitionView");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.imageURL !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.modeByRequisition === "RequisitionView" && ctx.imageURL === null);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](32, _c0))("value", ctx.requisitionData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgOptionComponent, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__.FileUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_21__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_21__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_21__.CellEditor, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__.NbSpinnerDirective],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 100vw;\n  overflow-y: auto;\n}\n\n@media only screen and (max-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 80vw;\n    max-height: 90vh;\n    overflow-y: auto;\n  }\n}\n@media only screen and (min-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 90vw;\n    max-height: 90vh;\n    overflow-y: auto;\n  }\n}\n@media only screen and (min-width: 768px) and (min-width: 1200px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 50vw;\n    max-height: 90vh;\n    overflow-y: auto;\n  }\n}\n[_nghost-%COMP%]     .ck-editor__editable_inline {\n  min-height: 100px;\n}\n\n[_nghost-%COMP%]     .p-disabled, .p-component[_ngcontent-%COMP%]:disabled {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .p-fileupload-buttonbar p-button {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .p-fileupload .p-fileupload-buttonbar {\n  border: none !important;\n  padding-left: 0px;\n  \n  \n  \n  \n}\n[_nghost-%COMP%]     .p-fileupload .p-fileupload-buttonbar .p-fileupload-row .ng-star-inserted div:first-child {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .p-fileupload .p-fileupload-content {\n  border: none !important;\n  padding: 0px !important;\n}\n\n[_nghost-%COMP%]     .p-fileupload-content .p-progressbar {\n  width: 0% !important;\n}\n\n[_nghost-%COMP%]     .p-fileupload-files .p-fileupload-row div:first-child {\n  display: none;\n}"]
});

/***/ }),

/***/ 82559:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vendor-requisition/vendor-requisition-list/vendor-requisition-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorRequisitionListComponent": () => (/* binding */ VendorRequisitionListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-vendor-requisition/add-vendor-requisition.component */ 96407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/requisition/requisition.service */ 76970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;














function VendorRequisitionListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "span", 12)(2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function VendorRequisitionListComponent_ng_template_17_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function VendorRequisitionListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Vessel Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Supply Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Supply Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function VendorRequisitionListComponent_ng_template_19_button_20_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VendorRequisitionListComponent_ng_template_19_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.editDetials(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nbTooltip", ctx_r13.activeIndex === 0 ? "Submit Quote" : "Submit Dispatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.activeIndex === 0 ? "Submit Quote" : "Submit Dispatch");
  }
}
function VendorRequisitionListComponent_ng_template_19_button_21_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VendorRequisitionListComponent_ng_template_19_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      var product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.viewDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function VendorRequisitionListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 23)(1, "td")(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td")(15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td")(19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, VendorRequisitionListComponent_ng_template_19_button_20_Template, 2, 2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, VendorRequisitionListComponent_ng_template_19_button_21_Template, 1, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.PortName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 18, rowData_r8.SupplyDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r8.RequisitionStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.activeIndex === 1 || ctx_r3.activeIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.activeIndex === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function VendorRequisitionListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["VendorName", "VesselName"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var VendorRequisitionListComponent = /*#__PURE__*/function () {
  function VendorRequisitionListComponent(router, primengConfig, requisitionService, fb, messageService, confirmationService, toastrService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VendorRequisitionListComponent);
    this.router = router;
    this.primengConfig = primengConfig;
    this.requisitionService = requisitionService;
    this.fb = fb;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.checkListRecord = false;
    this.dataLoaded = false;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VendorRequisitionListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      var currentUser = localStorage.getItem('currentUser');
      var activeUserId = JSON.parse(currentUser);
      this.loginVendor = activeUserId.VendorId;
      this.activeIndex = 0;
      this.getRequisitionListRecords(this.loginVendor, 'NewOrder');
      this.requisitionManagementList();
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "requisitionManagementList",
    value: function requisitionManagementList() {
      var _this2 = this;
      this.requisitionService.getRequisitionManagementList().subscribe(function (res) {
        _this2.requisitionData = res[0].EquipmentCategorylist;
        console.log(res, "dataapi");
        console.log(res[0], 'this.requisitionData.VendorName');
      });
    }
  }, {
    key: "getRequisitionListRecords",
    value: function getRequisitionListRecords(vendorId, filter) {
      var _this3 = this;
      this.checkListRecord = false;
      //debugger
      this.requisitionService.getVendorLoginList(vendorId, filter).subscribe(function (res) {
        // this.requisitionService.getRequisitionManagementList().subscribe((res: any) => {
        _this3.requisitionListData = res;
        // const requisitionListData = res
        console.log(_this3.requisitionListData, "requisitionListData");
        console.log(res[0], "requisitionListData");
        // this.requisition = res
        if (res.length === 0) {
          _this3.emptymessage = 'No Record Found';
        }
        setTimeout(function () {
          _this3.checkListRecord = true;
        }, 200);
        // setTimeout(() => {
        //   // this.dataLoaded = true; // Set the flag to indicate data is loaded
        //   this.checkListRecord =true
        // }, 9000);
        // this.requisition = res;
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
      var _this4 = this;
      this.dialogService.open(_add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_3__.AddVendorRequisitionComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this4.getRequisitionListRecords(1, 'NewOrder');
          _this4.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
    }
  }, {
    key: "addRequisition",
    value: function addRequisition() {
      // this.router.navigate(['/pages/report/hold-cleaning-reports', voyageId]);
      this.router.navigate(['/pages/inventory/add-vendor-requisition']);
    }
  }, {
    key: "editDetials",
    value: function editDetials(editDetails) {
      //debugger
      console.log(editDetails.RequisitionId);
      var ID = editDetails.RequisitionId;
      this.router.navigate(['/pages/inventory/add-vendor-requisition'], {
        queryParams: {
          ID: ID
        }
      });
      // this.dialogService.open(AddVendorRequisitionComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      //   if (data !== undefined) {
      //     this.getRequisitionListRecords();
      //     this.showPop('success', 'Success', 'Record Saved');
      //   }
      // });;
    }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this5 = this;
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
          _this5.requisitionService.deleteRequisition(deleteRecord).subscribe(function (res) {
            if (res) {
              _this5.getRequisitionListRecords(_this5.loginVendor, 'NewOrder');
              _this5.showPop('error', 'Delete', 'Record Deleted');
            }
          });
        } else if (result === false) {} else {}
      });
    }
  }, {
    key: "viewLog",
    value: function viewLog(selectedRow) {
      this.dialogService.open(_add_vendor_requisition_add_vendor_requisition_component__WEBPACK_IMPORTED_MODULE_3__.AddVendorRequisitionComponent, {
        context: {
          selectedItem: selectedRow
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        // if (data !== undefined) {
        //   this.getRequisitionListRecords();
        //   this.showPop('success', 'Success', 'Record Saved');
        // }
      });
      ;
    }
  }, {
    key: "viewDetails",
    value: function viewDetails(selectedRow) {
      console.log(selectedRow.RequisitionId);
      this.router.navigate(['/pages/inventory/view-requisition-details'], {
        queryParams: {
          ID: selectedRow.RequisitionId
        }
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
  }, {
    key: "changeStatusList",
    value: function changeStatusList(orderStatus) {
      this.filterStatus = orderStatus;
      this.getRequisitionListRecords(this.loginVendor, this.filterStatus);
      switch (orderStatus) {
        case "NewOrder":
          // Code to handle a new order
          this.activeIndex = 0;
          break;
        case "Ongoing":
          // Code to handle an order in progress
          this.activeIndex = 1;
          break;
        case "Completed":
          // Code to handle a completed order
          this.activeIndex = 2;
          break;
      }
    }
  }]);
  return VendorRequisitionListComponent;
}();
_class = VendorRequisitionListComponent;
_class.ɵfac = function VendorRequisitionListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_4__.RequisitionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-vendor-requisition-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 21,
  vars: 16,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "d-flex", "justify-content-between", "py-3"], ["nbButton", "", "shape", "round", "label", "", 1, "mr-2", 3, "status", "ngClass", "click"], ["nbButton", "", "shape", "round", "label", "", 3, "status", "ngClass", "click"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle", "columns"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["nbInput", "", "type", "text", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "VesselId"], ["field", "VesselId"], ["pSortableColumn", "PortId"], ["field", "PortId"], ["pSortableColumn", "SupplyDate"], ["field", "SupplyDate"], ["pSortableColumn", "Status"], ["field", "Status"], [2, "width", "15%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "styleClass", "p-button-rounded", "pRipple", "", "nbTooltipPlacement", "top", "class", " p-button-primary  mr-2", 3, "nbTooltip", "click", 4, "ngIf"], ["pButton", "", "styleClass", "p-button-rounded", "nbTooltip", "Details", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-external-link", "class", " p-button-primary", 3, "click", 4, "ngIf"], ["pButton", "", "styleClass", "p-button-rounded", "pRipple", "", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "nbTooltip", "click"], ["pButton", "", "styleClass", "p-button-rounded", "nbTooltip", "Details", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-external-link", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function VendorRequisitionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Order List Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VendorRequisitionListComponent_Template_button_click_7_listener() {
        return ctx.changeStatusList("NewOrder");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "New Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VendorRequisitionListComponent_Template_button_click_9_listener() {
        return ctx.changeStatusList("Ongoing");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Ongoing");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VendorRequisitionListComponent_Template_button_click_11_listener() {
        return ctx.changeStatusList("Completed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "COMPLETED ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "nb-card")(15, "p-table", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, VendorRequisitionListComponent_ng_template_17_Template, 3, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, VendorRequisitionListComponent_ng_template_18_Template, 15, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, VendorRequisitionListComponent_ng_template_19_Template, 23, 21, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, VendorRequisitionListComponent_ng_template_20_Template, 3, 1, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.activeIndex === 0 ? "primary" : "control")("ngClass", ctx.activeIndex === 0 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.activeIndex === 1 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.activeIndex === 2 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.requisitionListData)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c1))("columns", ctx.cols)("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_13__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_13__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe]
});

/***/ }),

/***/ 37801:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vendor-requisition/view-requisition-details/view-requisition-details.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRequisitionDetailsComponent": () => (/* binding */ ViewRequisitionDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 5480);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/inventory/requisition/requisition.service */ 76970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 23243);





var _class;







function ViewRequisitionDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewRequisitionDetailsComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.close("backToRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ViewRequisitionDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewRequisitionDetailsComponent_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.close("vendorRequisition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ViewRequisitionDetailsComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "View Uploaded Invoice & Delivery Challan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r2.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ViewRequisitionDetailsComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Image Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewRequisitionDetailsComponent_ng_template_49_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Owner Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewRequisitionDetailsComponent_ng_template_49_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewRequisitionDetailsComponent_ng_template_49_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Vendor Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewRequisitionDetailsComponent_ng_template_49_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewRequisitionDetailsComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Qty Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ViewRequisitionDetailsComponent_ng_template_49_th_7_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ViewRequisitionDetailsComponent_ng_template_49_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Qty Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Qty Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Price Per Unit (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Sub Total (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Delivery Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Custom/Other Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Total Price (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Vendor Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ViewRequisitionDetailsComponent_ng_template_49_th_27_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ViewRequisitionDetailsComponent_ng_template_49_th_28_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.modeByRequisition !== "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.modeByRequisition === "RequisitionView");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.modeByRequisition !== "RequisitionView");
  }
}
function ViewRequisitionDetailsComponent_ng_template_50_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.EquipmentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.MinOrderQty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.RequisitionRemarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.RequisitionRemarks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.QtyReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.QtyReceived, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.QtyAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.QtyAvailable, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.PricePerUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.PricePerUnit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.Subtotal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.Subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.DeliveryCharges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.Subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.OtherCharges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.Subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.Tax, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", +data_r17.Total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.VendorMaker);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.VendorMaker, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pEditableColumn", data_r17.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.Remarks, "");
  }
}
function ViewRequisitionDetailsComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewRequisitionDetailsComponent_ng_template_50_tr_3_Template, 37, 23, "tr", 29);
  }
  if (rf & 2) {
    var rowData_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r14.EquipmentCategoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rowData_r14.EquipmentList);
  }
}
var _c0 = function _c0() {
  return {
    "width": "100%"
  };
};
var ViewRequisitionDetailsComponent = /*#__PURE__*/function () {
  function ViewRequisitionDetailsComponent(route, router, requisitionService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViewRequisitionDetailsComponent);
    this.route = route;
    this.router = router;
    this.requisitionService = requisitionService;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewRequisitionDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.route.queryParams.subscribe(function (params) {
        _this.selectedItem = params['ID'];
        _this.modeByRequisition = params['data'];
        console.log(_this.modeByRequisition, 'value of re view');
        //        this.selectedItem = params['editDetails'];
        // Now you have both the ID and data in your component
      });

      this.getDataFromIdrequisitionManagement(this.selectedItem);
    }
  }, {
    key: "getDataFromIdrequisitionManagement",
    value: function () {
      var _getDataFromIdrequisitionManagement = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(requisitionId) {
        var _this2 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.requisitionService.getEditRequisitionWithEquipmentID(requisitionId).subscribe(function (res) {
                debugger;
                _this2.requisitionOrderDetails = res[0];
                if (_this2.requisitionOrderDetails.DeliveryChallan !== null) {
                  _this2.imageURL = _this2.requisitionService.RequisitionUrl + 'OrderChallan/' + _this2.requisitionOrderDetails.DeliveryChallan;
                } else {
                  _this2.imageURL = null;
                }
                var updatedData = {
                  "EquipmentManagementList": res[0].EquipmentManagementList.map(function (category) {
                    return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, category), {}, {
                      EquipmentList: category.EquipmentList.filter(function (equipment) {
                        return equipment.MinOrderQty > 0;
                      })
                    });
                  })
                };
                var filteredCategories = updatedData.EquipmentManagementList.filter(function (category) {
                  return category.EquipmentList.some(function (equipment) {
                    return equipment.MinOrderQty > 0;
                  });
                });
                console.log(updatedData, "this");
                _this2.requisitionData = filteredCategories;
                var totalList = _this2.requisitionData.flatMap(function (category) {
                  return category.EquipmentList;
                });
                var totalSum = 0;
                totalList.forEach(function (item) {
                  totalSum += item.Total;
                });
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getDataFromIdrequisitionManagement(_x) {
        return _getDataFromIdrequisitionManagement.apply(this, arguments);
      }
      return getDataFromIdrequisitionManagement;
    }()
  }, {
    key: "close",
    value: function close(selectedBack) {
      // this.dialogRef.close();
      if (selectedBack === 'vendorRequisition') {
        this.router.navigate(['/pages/inventory/vendor-requisition']);
      } else {
        this.router.navigate(['/pages/inventory/requisition']);
      }
    }
  }]);
  return ViewRequisitionDetailsComponent;
}();
_class = ViewRequisitionDetailsComponent;
_class.ɵfac = function ViewRequisitionDetailsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_5__.RequisitionService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-view-requisition-details"]],
  decls: 51,
  vars: 14,
  consts: [[1, "px-2"], [1, "row", "align-items-end", "justify-content-between"], [1, "col-12", "mb-3"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-11"], [1, "col-12", "py-4", 2, "font-weight", "600", "text-transform", "capitalize"], [1, "col-1"], [4, "ngIf"], [1, "row", "col-6", "py-2"], [1, "col-12", "py-4", 2, "font-weight", "600"], [1, "col-6", 2, "font-weight", "200"], [1, "col-6", "text-left"], [1, "col-6"], [1, "my-2", 2, "border-top", "2px solid #00000029"], [1, "row", "px-3"], [1, "col-3"], [1, "col-9", "text-left"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "col-6", "mb-3"], [1, "col-12", 2, "font-weight", "600"], [1, "col-12", "mt-4", "mb-4"], [1, "card"], ["dataKey", "EquipmentCategoryName", 3, "tableStyle", "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["type", "button", "nbButton", "", "status", "basic", 1, "mr-2", 3, "click"], ["target", "_blank", 3, "href"], [1, "data-table"], ["colspan", "13", 2, "font-weight", "600"], [4, "ngFor", "ngForOf"], ["pEditableColumnField", "RequisitionRemarks", 3, "pEditableColumn"], ["pEditableColumnField", "QtyReceived", 3, "pEditableColumn"], ["pEditableColumnField", "QtyAvailable", 3, "pEditableColumn"], ["pEditableColumnField", "PricePerUnit", 3, "pEditableColumn"], ["pEditableColumnField", "DeliveryCharges", 3, "pEditableColumn"], ["pEditableColumnField", "OtherCharges", 3, "pEditableColumn"], ["pEditableColumnField", "Tax", 3, "pEditableColumn"], ["pEditableColumnField", "VendorMaker", 3, "pEditableColumn"], ["pEditableColumnField", "Remarks", 3, "pEditableColumn"]],
  template: function ViewRequisitionDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ViewRequisitionDetailsComponent_div_9_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ViewRequisitionDetailsComponent_div_10_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8)(12, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Order Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Invoice No. :");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "ABC12345");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "hr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14)(21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Supply Port :");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Supply Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Attachment :");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ViewRequisitionDetailsComponent_a_33_Template, 2, 1, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ViewRequisitionDetailsComponent_span_34_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 18)(36, "div", 8)(37, "h6", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Agent Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "hr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 14)(42, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Agent Address :");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 20)(47, "div", 21)(48, "p-table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, ViewRequisitionDetailsComponent_ng_template_49_Template, 29, 4, "ng-template", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ViewRequisitionDetailsComponent_ng_template_50_Template, 4, 2, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.requisitionOrderDetails.VesselName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modeByRequisition === "RequisitionView" && ((ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modeByRequisition !== "RequisitionView" && ((ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Full" || (ctx.requisitionOrderDetails == null ? null : ctx.requisitionOrderDetails.RequisitionStatus) === "Received Partial"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.requisitionOrderDetails.PortName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](29, 10, ctx.requisitionOrderDetails.SupplyDate, "dd/MM/yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageURL !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageURL === null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.requisitionOrderDetails.AgentAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0))("value", ctx.requisitionData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.EditableColumn, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe]
});

/***/ }),

/***/ 11321:
/*!***************************************************************************!*\
  !*** ./src/app/pages/inventory/vendor/add-vendor/add-vendor.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVendorComponent": () => (/* binding */ AddVendorComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal-compatibility */ 50797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_pages_settings_country_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/settings/country/country.service */ 52947);
/* harmony import */ var _app_pages_settings_shore_cleaning_shore_cleaning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/settings/shore-cleaning/shore-cleaning.service */ 37094);
/* harmony import */ var _app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/inventory/vendor/vendor.service */ 83402);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;
















function AddVendorComponent_small_21_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_21_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vendor Name should have at most 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_21_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vendor Name should have at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_21_nb_hint_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Vendor Name is duplicate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVendorComponent_small_21_nb_hint_1_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddVendorComponent_small_21_nb_hint_2_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddVendorComponent_small_21_nb_hint_3_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AddVendorComponent_small_21_nb_hint_4_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    var tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_3_0.dirty) && ((tmp_3_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r0.nbForm.get("VendorName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.duplicateValue));
  }
}
function AddVendorComponent_small_28_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_28_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vendor Address should have at most 250 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_28_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vendor Address should have at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVendorComponent_small_28_nb_hint_1_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddVendorComponent_small_28_nb_hint_2_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddVendorComponent_small_28_nb_hint_3_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.nbForm.get("VendorAddress")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.nbForm.get("VendorAddress")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.nbForm.get("VendorAddress")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r1.nbForm.get("VendorAddress")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.nbForm.get("VendorAddress")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
  }
}
function AddVendorComponent_ng_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r13.CountryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r13.CountryName);
  }
}
function AddVendorComponent_small_36_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVendorComponent_small_36_nb_hint_1_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.nbForm.get("CountryId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVendorComponent_small_43_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_43_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVendorComponent_small_43_nb_hint_1_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddVendorComponent_small_43_nb_hint_2_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.nbForm.get("VendorPrimaryEmail")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.nbForm.get("VendorPrimaryEmail")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r4.nbForm.get("VendorPrimaryEmail")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]));
  }
}
function AddVendorComponent_small_58_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_58_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PIC Name should have at most 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_58_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PIC Name should have at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddVendorComponent_small_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddVendorComponent_small_58_nb_hint_1_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddVendorComponent_small_58_nb_hint_2_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddVendorComponent_small_58_nb_hint_3_Template, 2, 0, "nb-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.nbForm.get("VendorPIC")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r5.nbForm.get("VendorPIC")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r5.nbForm.get("VendorPIC")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r5.nbForm.get("VendorPIC")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r5.nbForm.get("VendorPIC")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
  }
}
var AddVendorComponent = /*#__PURE__*/function () {
  function AddVendorComponent(countryService, shoreCleaningService, vendorService, formBuilder, dialogRef, router, messageService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddVendorComponent);
    this.countryService = countryService;
    this.shoreCleaningService = shoreCleaningService;
    this.vendorService = vendorService;
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.router = router;
    this.messageService = messageService;
    this.formTitle = "Add";
    this.showPassword = false;
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError();
    this.loading = false;
    this.getVendorListRecords();
    this.nbForm = this.formBuilder.group({
      VendorId: [null],
      VendorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50)]],
      VendorAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(250)]],
      CountryId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      VendorPrimaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
      VendorSecondaryEmail: [''],
      VendorPhonelines: [''],
      Password: [''],
      VendorPIC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50)]]
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddVendorComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getDropdownList(1, 100, '');
      if (this.selectedItem !== undefined) {
        this.formTitle = "Update";
        this.nbForm.setValue({
          VendorId: this.selectedItem.VendorId,
          VendorName: this.selectedItem.VendorName,
          VendorAddress: this.selectedItem.VendorAddress,
          CountryId: this.selectedItem.CountryId,
          VendorPrimaryEmail: this.selectedItem.VendorPrimaryEmail,
          VendorSecondaryEmail: this.selectedItem.VendorSecondaryEmail,
          VendorPhonelines: this.selectedItem.VendorPhonelines,
          VendorPIC: this.selectedItem.VendorPIC,
          Password: this.selectedItem.Password
        });
      }
    }
  }, {
    key: "getDropdownList",
    value: function getDropdownList(cPage, nRows, filter) {
      var _this = this;
      this.countryService.getCountryList(cPage, nRows, filter).subscribe(function (res) {
        _this.dropDownCountrylist = res.CountryData;
        console.log(_this.dropDownCountrylist);
      });
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      if (this.showPassword) {
        return 'text';
      }
      return 'password';
    }
  }, {
    key: "toggleShowPassword",
    value: function toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }, {
    key: "getVendorListRecords",
    value: function getVendorListRecords() {
      var _this2 = this;
      //debugger
      this.vendorService.getVendorList(1, 100, "").subscribe(function (res) {
        console.log(res);
        _this2.vendor = res.VendorData;
        if (_this2.selectedItem !== undefined) {
          _this2.nbForm.get('VendorName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50), _this2.customErrorStateMatcher.duplicateValidator(_this2.vendor, 'VendorName', _this2.selectedItem.VendorName)]);
          // this.nbForm.get('CargoName').updateValueAndValidity();
        } else {
          _this2.nbForm.get('VendorName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50), _this2.customErrorStateMatcher.duplicateValidator(_this2.vendor, 'VendorName', null)]);
          // this.nbForm.get('CargoName').updateValueAndValidity();
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
    value: function submit() {
      var _this3 = this;
      console.log(this.nbForm.value);
      if (this.nbForm.valid) {
        this.loading = true;
        this.customErrorStateMatcher.trimFormValues(this.nbForm);
        if (this.selectedItem !== undefined) {
          this.nbForm.get('VendorId').setValue(this.selectedItem.VendorId);
          var vendorDetails = this.nbForm.value;
          this.vendorService.updateVendorDetail(vendorDetails).subscribe(function (res) {
            if (res == true) {
              _this3.loading = false;
              _this3.dialogRef.close(vendorDetails);
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
          //debugger
          var _vendorDetails = this.nbForm.value;
          this.vendorService.addVendorDetail(_vendorDetails).subscribe(function (res) {
            //debugger
            if (res == true) {
              _this3.loading = false;
              _this3.dialogRef.close(_vendorDetails);
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
      } else {
        this.nbForm.markAllAsTouched();
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
  }]);
  return AddVendorComponent;
}();
_class = AddVendorComponent;
_class.ɵfac = function AddVendorComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_settings_country_country_service__WEBPACK_IMPORTED_MODULE_3__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_settings_shore_cleaning_shore_cleaning_service__WEBPACK_IMPORTED_MODULE_4__.ShoreCleaningService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_5__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-vendor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService, {
    provide: rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_11__.root,
    useClass: _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_2__.CustomStateError
  }])],
  decls: 78,
  vars: 15,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "px-3", "container", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "basic", "type", "reset", 1, "mr-2"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2"], [1, "example-items-rows"], [1, "row", "px-2"], [1, "mb-3", "col-md-6", "col-lg-6", "col-sm-12"], ["for", "VendorName", 1, "form-label"], [2, "color", "red"], ["type", "text", "formControlName", "VendorName", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", " Vendor Name"], [4, "ngIf"], ["for", "VendorAddress", 1, "form-label"], ["type", "text", "formControlName", "VendorAddress", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Vendor Address"], [1, "col-md-6", "col-lg-6", "col-sm-12", "mb-3"], ["for", "CountryId", 1, "form-label"], ["fullWidth", "", "formControlName", "CountryId", "placeholder", "Select Vendor Country", 3, "keyup"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "VendorPrimaryEmail", 1, "form-label"], ["type", "email", "formControlName", "VendorPrimaryEmail", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Vendor Primary Email", "nbEmailValidator", ""], [1, "mb-3", "col-12"], ["for", "VendorSecondaryEmail", 1, "form-label"], ["type", "text", "formControlName", "VendorSecondaryEmail", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Vendor Secondary Email"], ["for", "VendorPhonelines", 1, "form-label"], ["type", "text", "formControlName", "VendorPhonelines", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "0000000000,0000000000,0000000000"], ["for", "VendorPIC", 1, "form-label"], ["type", "text", "formControlName", "VendorPIC", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", " PIC Name"], ["for", "Password", 1, "form-label"], ["placeholder", "Enter Password", "fullWidth", "", "fieldSize", "medium", "formControlName", "Password", "nbInput", "", 3, "type"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click"], ["pack", "eva", 3, "icon"], ["fullWidth", "", "placeholder", "Enter Password", "fieldSize", "medium", "nbInput", "", 3, "type"], ["style", "color: red;", 4, "ngIf"], [3, "value"]],
  template: function AddVendorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AddVendorComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nb-card-header", 2)(3, "div")(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddVendorComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Clear Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "nb-card-body", 6)(14, "div", 7)(15, "div", 8)(16, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Vendor Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AddVendorComponent_small_21_Template, 5, 4, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8)(23, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Vendor Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddVendorComponent_small_28_Template, 4, 3, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 15)(30, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Vendor Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ng-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AddVendorComponent_Template_ng_select_keyup_34_listener($event) {
        return ctx.getDropdownList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, AddVendorComponent_ng_option_35_Template, 2, 2, "ng-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, AddVendorComponent_small_36_Template, 2, 1, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 8)(38, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Vendor Primary Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, AddVendorComponent_small_43_Template, 3, 2, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 21)(45, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Vendor Secondary Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 21)(49, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Vendor Phone Lines");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 21)(53, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "PIC Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AddVendorComponent_small_58_Template, 4, 3, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 8)(60, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "nb-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddVendorComponent_Template_button_click_66_listener() {
        return ctx.toggleShowPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "nb-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 8)(69, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "nb-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddVendorComponent_Template_button_click_75_listener() {
        return ctx.toggleShowPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "nb-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "p-toast");
    }
    if (rf & 2) {
      var tmp_3_0;
      var tmp_4_0;
      var tmp_6_0;
      var tmp_7_0;
      var tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Vendor Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.nbForm.get("VendorName")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.nbForm.get("VendorName")) == null ? null : tmp_3_0.touched) || ((tmp_3_0 = ctx.nbForm.get("VendorName")) == null ? null : tmp_3_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.nbForm.get("VendorAddress")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.nbForm.get("VendorAddress")) == null ? null : tmp_4_0.touched) || ((tmp_4_0 = ctx.nbForm.get("VendorAddress")) == null ? null : tmp_4_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.dropDownCountrylist);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.nbForm.get("CountryId")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.nbForm.get("CountryId")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx.nbForm.get("CountryId")) == null ? null : tmp_6_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.nbForm.get("VendorPrimaryEmail")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.nbForm.get("VendorPrimaryEmail")) == null ? null : tmp_7_0.touched) || ((tmp_7_0 = ctx.nbForm.get("VendorPrimaryEmail")) == null ? null : tmp_7_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.nbForm.get("VendorPIC")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.nbForm.get("VendorPIC")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.nbForm.get("VendorPIC")) == null ? null : tmp_8_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.getInputType());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.showPassword ? "eye-outline" : "eye-off-2-outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.showPassword ? "hide password" : "show password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.getInputType());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.showPassword ? "eye-outline" : "eye-off-2-outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.showPassword ? "hide password" : "show password");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbFormFieldComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSuffixDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSpinnerDirective],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 50vw;\n}"]
});

/***/ }),

/***/ 70044:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/inventory/vendor/vendor-list/vendor-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorListComponent": () => (/* binding */ VendorListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _app_pages_inventory_vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/inventory/vendor/add-vendor/add-vendor.component */ 11321);
/* harmony import */ var _app_pages_inventory_vendor_view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/vendor/view-vendor/view-vendor.component */ 54129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/inventory/vendor/vendor.service */ 83402);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/paginator */ 1997);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;















function VendorListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Vendor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Vendor Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Vendor Primary Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Vendor PIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function VendorListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 28)(1, "td")(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-skeleton-loader", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ngx-skeleton-loader", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ngx-skeleton-loader", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td")(14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "ngx-skeleton-loader", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td")(18, "div", 31)(19, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_ng_template_18_Template_button_click_19_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      var product_r8 = restoredCtx.$implicit;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.viewLog(product_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_ng_template_18_Template_button_click_20_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      var product_r8 = restoredCtx.$implicit;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.editDetials(product_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_ng_template_18_Template_button_click_21_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      var product_r8 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.deleteDetails(product_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ngx-skeleton-loader", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r5 = ctx.$implicit;
    var index_r7 = ctx.rowIndex;
    var product_r8 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pReorderableRow", index_r7)("pEditableRow", product_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r5.VendorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r5.CountryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r5.VendorPrimaryEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r5.VendorPIC, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.checkListRecord === true ? "d-none" : "");
  }
}
function VendorListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.emptymessage);
  }
}
var _c0 = function _c0() {
  return {
    "min-width": "50rem"
  };
};
var VendorListComponent = /*#__PURE__*/function () {
  function VendorListComponent(primengConfig, vendorService, fb, messageService, confirmationService, toastrService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VendorListComponent);
    this.primengConfig = primengConfig;
    this.vendorService = vendorService;
    this.fb = fb;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.checkListRecord = false;
    this.firstCount = 1;
    this.totalRows = 0;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VendorListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.selectedRows = "25";
      this.nextCount = 25;
      this.currentPage = 1;
      this.totalRows = 10;
      this.getVendorListRecords(this.currentPage, this.selectedRows, "");
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "getVendorListRecords",
    value: function getVendorListRecords(cPage, nRows, filter) {
      var _this2 = this;
      this.checkListRecord = false;
      //debugger
      this.vendorService.getVendorList(cPage, nRows, filter).subscribe(function (res) {
        _this2.vendor = res.VendorData;
        _this2.totalCount = res.Count;
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
      this.dialogService.open(_app_pages_inventory_vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_3__.AddVendorComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this3.getVendorListRecords(_this3.currentPage, _this3.selectedRows, "");
          _this3.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
    }
  }, {
    key: "editDetials",
    value: function editDetials(editDetails) {
      var _this4 = this;
      this.dialogService.open(_app_pages_inventory_vendor_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_3__.AddVendorComponent, {
        context: {
          selectedItem: editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this4.getVendorListRecords(_this4.currentPage, _this4.selectedRows, "");
          _this4.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
      console.log(editDetails, "edits details");
    }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this5 = this;
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
          _this5.vendorService.deleteVendor(deleteRecord).subscribe(function (res) {
            if (res) {
              _this5.getVendorListRecords(_this5.currentPage, _this5.selectedRows, "");
              _this5.showPop('error', 'Delete', 'Record Deleted');
            }
          });
        } else if (result === false) {} else {}
      });
    }
  }, {
    key: "viewLog",
    value: function viewLog(selectedRow) {
      var _this6 = this;
      this.dialogService.open(_app_pages_inventory_vendor_view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_4__.ViewVendorComponent, {
        context: {
          selectedItem: selectedRow
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this6.getVendorListRecords(_this6.currentPage, _this6.selectedRows, "");
          _this6.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
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
    // selectedTab: number = 1;
    // dataForTable1: any[] = [
    //   { column1: 'Data 1', column2: 'Data 2' },
    //   { column1: 'Data 3', column2: 'Data 4' },
    //   // Add more data objects for Table 1 if needed
    // ];
    // dataForTable2: any[] = [
    //   { columnA: 'Data A', columnB: 'Data B' },
    //   { columnA: 'Data C', columnB: 'Data D' },
    //   // Add more data objects for Table 2 if needed
    // ];
  }, {
    key: "exportExcel",
    value: function exportExcel() {
      var _this7 = this;
      __webpack_require__.e(/*! import() */ "node_modules_xlsx_xlsx_mjs").then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 80574)).then(function (xlsx) {
        var worksheet = xlsx.utils.json_to_sheet(_this7.vendor);
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
    key: "saveAsExcelFile",
    value: function saveAsExcelFile(buffer, fileName) {
      __webpack_require__.e(/*! import() */ "node_modules_file-saver_dist_FileSaver_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! file-saver */ 94327, 23)).then(function (FileSaver) {
        var EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        var EXCEL_EXTENSION = ".xlsx";
        var data = new Blob([buffer], {
          type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION);
      });
    }
    // Add code for Paginator...
  }, {
    key: "paginate",
    value: function paginate(pagiNo) {
      console.log(pagiNo);
      this.firstCount = pagiNo.first + 1;
      this.nextCount = pagiNo.first + +pagiNo.rows;
      this.currentPage = pagiNo.page;
      this.getVendorListRecords(this.currentPage, +pagiNo.rows, "");
    }
  }, {
    key: "filterBy",
    value: function filterBy(inputVal) {
      console.log(inputVal.target.value);
      var filterValue = inputVal.target.value;
      this.getVendorListRecords(this.currentPage, this.totalRows, filterValue);
    }
  }, {
    key: "getChangeRows",
    value: function getChangeRows(totalRows) {
      debugger;
      this.firstCount = this.firstCount;
      this.nextCount = this.firstCount + +totalRows - 1;
      this.getVendorListRecords(this.currentPage, totalRows, "");
    }
  }]);
  return VendorListComponent;
}();
_class = VendorListComponent;
_class.ɵfac = function VendorListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_5__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-vendor-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 31,
  vars: 14,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "d-flex", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "row", "p-3", "justify-content-end", "align-items-center"], [1, "col-3", "p-0", "text-right"], ["fullWidth", "", "type", "text", "placeholder", "Search By Vendor Name", "nbInput", "", 3, "ngModel", "keyup", "ngModelChange"], ["dataKey", "id", 3, "value", "rows", "showCurrentPageReport", "tableStyle", "columns"], ["dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "row", "align-items-center", "justify-content-center"], [2, "color", "--card-text-color", "font-family", "Poppins, sans-serif", "font-weight", "normal", "font-size", "0.8125rem"], [3, "rows", "totalRecords", "onPageChange"], ["placeholder", "", 3, "selected", "selectedChange"], ["value", "25"], ["value", "50"], ["value", "100"], ["pSortableColumn", "VendorName"], ["field", "VendorName"], ["pSortableColumn", "CountryName"], ["field", "CountryName"], ["pSortableColumn", "VendorPrimaryEmail"], ["field", "VendorPrimaryEmail"], ["pSortableColumn", "VendorPIC"], ["field", "VendorPIC"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "View", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function VendorListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Vendor Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_Template_button_click_7_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add Vendor");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nb-card")(11, "nb-card-body")(12, "div", 4)(13, "div", 5)(14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function VendorListComponent_Template_input_keyup_14_listener($event) {
        return ctx.filterBy($event);
      })("ngModelChange", function VendorListComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.filterTableValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p-table", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, VendorListComponent_ng_template_17_Template, 15, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, VendorListComponent_ng_template_18_Template, 23, 16, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VendorListComponent_ng_template_19_Template, 3, 1, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 12)(21, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p-paginator", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onPageChange", function VendorListComponent_Template_p_paginator_onPageChange_23_listener($event) {
        return ctx.paginate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "nb-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedChange", function VendorListComponent_Template_nb_select_selectedChange_24_listener($event) {
        return ctx.getChangeRows($event);
      })("selectedChange", function VendorListComponent_Template_nb_select_selectedChange_24_listener($event) {
        return ctx.selectedRows = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "nb-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "nb-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nb-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterTableValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.vendor)("rows", 5)("showCurrentPageReport", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0))("columns", ctx.cols)("showCurrentPageReport", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("Showing ", ctx.firstCount, " to ", ctx.nextCount, " of ", ctx.totalCount, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", ctx.selectedRows)("totalRecords", ctx.totalCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.selectedRows);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_paginator__WEBPACK_IMPORTED_MODULE_13__.Paginator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_14__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent]
});

/***/ }),

/***/ 83402:
/*!**********************************************************!*\
  !*** ./src/app/pages/inventory/vendor/vendor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorService": () => (/* binding */ VendorService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var VendorService = /*#__PURE__*/function () {
  function VendorService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VendorService);
    this.http = http;
    this.vendorUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VendorService, [{
    key: "addVendorDetail",
    value: function addVendorDetail(vendorData) {
      //debugger
      return this.http.post(this.vendorUrl + 'InsertVendor', vendorData);
    }
  }, {
    key: "updateVendorDetail",
    value: function updateVendorDetail(vendorData) {
      ////debugger;
      return this.http.put(this.vendorUrl + 'UpdateVendor', vendorData);
    }
  }, {
    key: "deleteVendor",
    value: function deleteVendor(vendorData) {
      ////debugger;
      return this.http["delete"](this.vendorUrl + 'DeleteVendor/' + vendorData.VendorId);
    }
  }, {
    key: "getVendorList",
    value: function getVendorList(cPage, nRows, filter) {
      //debugger
      return this.http.get(this.vendorUrl + "VendorList?c=".concat(cPage, "&p=").concat(nRows, "&filter=").concat(filter));
    }
  }]);
  return VendorService;
}();
_class = VendorService;
_class.ɵfac = function VendorService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 54129:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/inventory/vendor/view-vendor/view-vendor.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewVendorComponent": () => (/* binding */ ViewVendorComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 35593);


var _class;




function ViewVendorComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Vendor Phone lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.selectedItem.VendorPhonelines);
  }
}
function ViewVendorComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Vendor Secondary Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedItem.VendorSecondaryEmail);
  }
}
var ViewVendorComponent = /*#__PURE__*/function () {
  function ViewVendorComponent(dialogRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewVendorComponent);
    this.dialogRef = dialogRef;
    this.title = "Details";
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewVendorComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }]);
  return ViewVendorComponent;
}();
_class = ViewVendorComponent;
_class.ɵfac = function ViewVendorComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-view-vendor"]],
  decls: 41,
  vars: 8,
  consts: [[1, "px-3", "container"], [1, "row", "align-items-center", "justify-content-between"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", "nbTooltip", "close", "nbTooltipPlacement", "bottom", 1, "surface-200", "mr-2", 3, "click"], [1, "example-items-rows"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-lg-4", "col-md-4"], ["class", "col-lg-4 col-md-4", 4, "ngIf"]],
  template: function ViewVendorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewVendorComponent_Template_button_click_6_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-card-body", 3)(8, "div", 4)(9, "div", 5)(10, "label")(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Vendor Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "label")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5)(22, "label")(23, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Vendor Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ViewVendorComponent_div_27_Template, 6, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5)(29, "label")(30, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Vendor Primary Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ViewVendorComponent_div_34_Template, 6, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5)(36, "label")(37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Vendor PIC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Vendor ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedItem.VendorName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedItem.CountryName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedItem.VendorAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedItem.VendorPhonelines !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedItem.VendorPrimaryEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedItem.VendorSecondaryEmail !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedItem.VendorPIC);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
  styles: ["@media only screen and (max-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n@media only screen and (min-width: 600px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n@media only screen and (min-width: 768px) and (min-width: 1200px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}"]
});

/***/ }),

/***/ 39188:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vessel-inventory/add-vessel-inventory/add-vessel-inventory.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVesselInventoryComponent": () => (/* binding */ AddVesselInventoryComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ 32846);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 12453);




var _class;














function AddVesselInventoryComponent_ng_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r7.VesselId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r7.VesselName, "");
  }
}
function AddVesselInventoryComponent_small_22_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddVesselInventoryComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddVesselInventoryComponent_small_22_nb_hint_1_Template, 2, 0, "nb-hint", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.nbForm.get("VesselId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVesselInventoryComponent_small_29_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddVesselInventoryComponent_small_29_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Vendor Name should have at most 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddVesselInventoryComponent_small_29_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Vendor Name should have at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddVesselInventoryComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddVesselInventoryComponent_small_29_nb_hint_1_Template, 2, 0, "nb-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddVesselInventoryComponent_small_29_nb_hint_2_Template, 2, 0, "nb-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddVesselInventoryComponent_small_29_nb_hint_3_Template, 2, 0, "nb-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r2.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r2.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
  }
}
function AddVesselInventoryComponent_small_39_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddVesselInventoryComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddVesselInventoryComponent_small_39_nb_hint_1_Template, 2, 0, "nb-hint", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.nbForm.get("LastSupplyDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVesselInventoryComponent_small_46_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddVesselInventoryComponent_small_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddVesselInventoryComponent_small_46_nb_hint_1_Template, 2, 0, "nb-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.nbForm.get("ActiveInventoryCost")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_5_ng_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r21.MakerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r21.MakerName, "");
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ng-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddVesselInventoryComponent_nb_accordion_item_48_div_5_Template_ng_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](listEquipment_r14.MakerId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AddVesselInventoryComponent_nb_accordion_item_48_div_5_ng_option_4_Template, 2, 2, "ng-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", listEquipment_r14.MakerId)("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r15.makerDropdown);
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Date Supplied");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddVesselInventoryComponent_nb_accordion_item_48_div_6_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](listEquipment_r14.InventoryDateSupplied = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "nb-datepicker", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", listEquipment_r14.InventoryDateSupplied)("nbDatepicker", _r26);
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_7_ng_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r32.PortId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r32.PortName, "");
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ng-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddVesselInventoryComponent_nb_accordion_item_48_div_7_Template_ng_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](listEquipment_r14.PortSuppliedId = $event);
    })("keyup", function AddVesselInventoryComponent_nb_accordion_item_48_div_7_Template_ng_select_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.getPortListRecords(1, 100, $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AddVesselInventoryComponent_nb_accordion_item_48_div_7_ng_option_4_Template, 2, 2, "ng-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", listEquipment_r14.PortSuppliedId)("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.portDropdown);
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddVesselInventoryComponent_nb_accordion_item_48_div_8_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](listEquipment_r14.Condition = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", listEquipment_r14.Condition);
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_div_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Date of Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddVesselInventoryComponent_nb_accordion_item_48_div_9_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
      var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](listEquipment_r14.InventoryDateofExpiry = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "nb-datepicker", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    var listEquipment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", listEquipment_r14.InventoryDateofExpiry)("nbDatepicker", _r42);
  }
}
function AddVesselInventoryComponent_nb_accordion_item_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-accordion-item")(1, "nb-accordion-item-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-accordion-item-body")(4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AddVesselInventoryComponent_nb_accordion_item_48_div_5_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AddVesselInventoryComponent_nb_accordion_item_48_div_6_Template, 7, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AddVesselInventoryComponent_nb_accordion_item_48_div_7_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AddVesselInventoryComponent_nb_accordion_item_48_div_8_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddVesselInventoryComponent_nb_accordion_item_48_div_9_Template, 7, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var listEquipment_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", listEquipment_r14.EquipmentCategoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", listEquipment_r14.Maker);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", listEquipment_r14.DateSupplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", listEquipment_r14.PortSupplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", listEquipment_r14.ConditionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", listEquipment_r14.DateofExpiry);
  }
}
var AddVesselInventoryComponent = /*#__PURE__*/function () {
  function AddVesselInventoryComponent(router, messageService, confirmationService, inventoryService, vesselService, portService, formBuilder, dialogRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddVesselInventoryComponent);
    this.router = router;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.inventoryService = inventoryService;
    this.vesselService = vesselService;
    this.portService = portService;
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.formTitle = "Add";
    this.loading = false;
    this.nbForm = this.formBuilder.group({
      VesselInventoryId: [''],
      VesselId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      MinimumLevelsMaintained: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      LastSupplyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ActiveInventoryCost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      Active: true,
      IsArchived: true
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AddVesselInventoryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getVesselListRecords(1, 100, '');
      if (this.selectedItem !== undefined) {
        this.getRecordEdit(this.selectedItem.VesselId);
        this.formTitle = "Update";
        this.nbForm.setValue({
          VesselInventoryId: this.selectedItem.VesselInventoryId,
          VesselId: this.selectedItem.VesselId,
          MinimumLevelsMaintained: this.selectedItem.MinimumLevelsMaintained,
          LastSupplyDate: this.selectedItem.LastSupplyDate,
          ActiveInventoryCost: this.selectedItem.ActiveInventoryCost,
          Active: true,
          IsArchived: false
        });
        this.getVessel(this.selectedItem.VesselId);
      }
    }
  }, {
    key: "getDropdownList",
    value: function () {
      var _getDropdownList = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var _this = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.inventoryService.getMakerList().subscribe(function (res) {
                _this.makerDropdown = res;
              });
            case 2:
              _context.next = 4;
              return this.inventoryService.getConditionList().subscribe(function (res) {
                _this.conditionDropdown = res;
              });
            case 4:
              this.getPortListRecords(1, 100, '');
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getDropdownList() {
        return _getDropdownList.apply(this, arguments);
      }
      return getDropdownList;
    }()
  }, {
    key: "getRecordEdit",
    value: function getRecordEdit(selectedVessel) {
      this.inventoryService.getEditInventory(selectedVessel).subscribe(function (res) {
        console.log(res, 'Edit By id');
      });
    }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this2 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        _this2.vesselDropdown = res.VesselData;
      });
    }
  }, {
    key: "getPortListRecords",
    value: function () {
      var _getPortListRecords = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(cPage, nRows, filter) {
        var _this3 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
                _this3.portDropdown = res.PortData;
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getPortListRecords(_x, _x2, _x3) {
        return _getPortListRecords.apply(this, arguments);
      }
      return getPortListRecords;
    }()
  }, {
    key: "getVessel",
    value: function getVessel(selectedVessel) {
      var _this4 = this;
      var vessel = selectedVessel;
      console.log(vessel, 'get value id');
      this.getDropdownList();
      if (vessel !== undefined) {
        if (this.selectedItem !== undefined) {
          this.inventoryService.getEditInventory(vessel).subscribe(function (res) {
            debugger;
            _this4.equipmentField = res.VesselInventoryManagementList;
          });
        } else {
          this.inventoryService.getEquipmentFieldList(vessel).subscribe(function (res) {
            console.log(res, 'List of field');
            _this4.equipmentField = res;
          });
        }
      } else {
        this.equipmentField = null;
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.equipmentField = null;
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this5 = this;
      if (this.nbForm.valid) {
        this.loading = true;
        // const countriesCovered = this.nbForm.value.CountriesCovered1;
        // const changeCountriesCovered = countriesCovered.join(",");
        // this.nbForm.get('CountriesCovered').setValue(changeCountriesCovered);
        var inventoryDetails = this.nbForm.value;
        var inventoryVesselDetail = {
          VesselInventoryId: inventoryDetails.VesselInventoryId,
          VesselId: inventoryDetails.VesselId,
          MinimumLevelsMaintained: inventoryDetails.MinimumLevelsMaintained,
          LastSupplyDate: inventoryDetails.LastSupplyDate,
          ActiveInventoryCost: inventoryDetails.ActiveInventoryCost,
          Active: true,
          IsArchived: false,
          VesselInventoryManagementList: this.equipmentField
        };
        if (this.selectedItem !== undefined) {
          this.inventoryService.updateInventoryDetail(inventoryVesselDetail).subscribe(function (res) {
            if (res == true) {
              _this5.loading = false;
              _this5.dialogRef.close(inventoryDetails);
            } else {
              _this5.loading = false;
              _this5.showPop('warn', 'Alert', 'Somthing went wrong');
            }
          }, function (error) {
            if (error.status === 404 || error.status === 500) {
              _this5.router.navigate(['/error']);
            }
          });
        } else {
          console.log(inventoryVesselDetail, "Post Data");
          this.inventoryService.addInventoryDetail(inventoryVesselDetail).subscribe(function (res) {
            debugger;
            console.log(res, "post suc");
            if (res == true) {
              _this5.loading = false;
              _this5.dialogRef.close(inventoryDetails);
            } else {
              _this5.loading = false;
              _this5.showPop('warn', 'Alert', 'Somthing went wrong');
            }
          }, function (error) {
            if (error.status === 404 || error.status === 500) {
              _this5.router.navigate(['/error']);
            }
          });
        }
      } else {
        this.nbForm.markAllAsTouched();
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
  }]);
  return AddVesselInventoryComponent;
}();
_class = AddVesselInventoryComponent;
_class.ɵfac = function AddVesselInventoryComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_inventory_service__WEBPACK_IMPORTED_MODULE_4__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_5__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_6__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-vessel-inventory"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService])],
  decls: 50,
  vars: 11,
  consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 1, "px-3", "container", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["type", "button", "nbButton", "", "status", "basic", "type", "reset", 1, "mr-2", 3, "click"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-2"], [1, "example-items-rows"], [1, "row", "px-2"], [1, "mb-3", "col-6"], ["for", "VesselId", 1, "form-label"], [2, "color", "red"], ["formControlName", "VesselId", "placeholder", "Select Vessel", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo", "change", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "MinimumLevelsMaintained", 1, "form-label"], ["type", "text", "formControlName", "MinimumLevelsMaintained", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", " Minimum Levels Maintained "], [1, "form-label"], ["nbInput", "", "formControlName", "LastSupplyDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "nbDatepicker"], ["dateTimePicker3", ""], ["for", "ActiveInventoryCost", 1, "form-label"], ["type", "number", "formControlName", "ActiveInventoryCost", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", " Inventory Cost"], [1, "mb-3"], [4, "ngFor", "ngForOf"], [3, "value"], ["style", "color: red", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], [1, "row"], ["class", "mb-3 col-4", 4, "ngIf"], [1, "mb-3", "col-4"], ["for", "Maker", 1, "form-label"], ["placeholder", "Select Maker", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "ngModel", "appendTo", "ngModelChange"], ["nbInput", "", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "ngModel", "nbDatepicker", "ngModelChange"], ["placeholder", "Select Vessel", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "ngModel", "appendTo", "ngModelChange", "keyup"], ["type", "number", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", " Inventory Cost", 3, "ngModel", "ngModelChange"]],
  template: function AddVesselInventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AddVesselInventoryComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-card-header", 2)(3, "div")(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddVesselInventoryComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddVesselInventoryComponent_Template_button_click_9_listener() {
        return ctx.clearForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Clear Form ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "nb-card-body", 6)(14, "div", 7)(15, "div", 8)(16, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Vessel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AddVesselInventoryComponent_Template_ng_select_change_20_listener($event) {
        return ctx.getVessel($event);
      })("keyup", function AddVesselInventoryComponent_Template_ng_select_keyup_20_listener($event) {
        return ctx.getVesselListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AddVesselInventoryComponent_ng_option_21_Template, 2, 2, "ng-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AddVesselInventoryComponent_small_22_Template, 2, 1, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 8)(24, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Minimum Levels Maintained ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, AddVesselInventoryComponent_small_29_Template, 4, 3, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 8)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Supply Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br")(36, "input", 17)(37, "nb-datepicker", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, AddVesselInventoryComponent_small_39_Template, 2, 1, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 8)(41, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Inventory Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, AddVesselInventoryComponent_small_46_Template, 2, 1, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "nb-accordion", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, AddVesselInventoryComponent_nb_accordion_item_48_Template, 10, 6, "nb-accordion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "p-toast");
    }
    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](38);
      var tmp_5_0;
      var tmp_6_0;
      var tmp_8_0;
      var tmp_9_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbSpinner", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.nbForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Vessel Inventory Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.vesselDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_5_0.touched) || ((tmp_5_0 = ctx.nbForm.get("VesselId")) == null ? null : tmp_5_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx.nbForm.get("MinimumLevelsMaintained")) == null ? null : tmp_6_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbDatepicker", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.nbForm.get("LastSupplyDate")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.nbForm.get("LastSupplyDate")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.nbForm.get("LastSupplyDate")) == null ? null : tmp_8_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.nbForm.get("ActiveInventoryCost")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.nbForm.get("ActiveInventoryCost")) == null ? null : tmp_9_0.touched) || ((tmp_9_0 = ctx.nbForm.get("ActiveInventoryCost")) == null ? null : tmp_9_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.equipmentField);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbAccordionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbAccordionItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbAccordionItemHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbAccordionItemBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSpinnerDirective],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 50vw;\n  max-height: 85vh;\n  overflow-y: scroll;\n}"]
});

/***/ }),

/***/ 50979:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/inventory/vessel-inventory/consumption-log/consumption-log.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsumptionLogComponent": () => (/* binding */ ConsumptionLogComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inventory.service */ 32846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;









function ConsumptionLogComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "span", 11)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConsumptionLogComponent_ng_template_11_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ConsumptionLogComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Consumption Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Voyage Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " QTY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ConsumptionLogComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 19)(1, "td")(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 11, rowData_r8.ConsumptionDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.VoyageNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.Qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function ConsumptionLogComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["UnitName", "ConsumptionType"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var ConsumptionLogComponent = /*#__PURE__*/function () {
  function ConsumptionLogComponent(route, router, inventoryService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConsumptionLogComponent);
    this.route = route;
    this.router = router;
    this.inventoryService = inventoryService;
    this.checkListRecord = true;
    this.equipmentDetailList = [];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConsumptionLogComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.route.queryParams.subscribe(function (params) {
        _this.selectedItem = params['equipmentId'];
        _this.inventoryId = params['Id'];
        console.log(_this.vesselItemDetails, 'value of re view');
      });
      this.getEquipmentDetail();
    }
  }, {
    key: "getEquipmentDetail",
    value: function getEquipmentDetail() {
      var _this2 = this;
      this.inventoryService.getConsumption(this.selectedItem).subscribe(function (res) {
        console.log(res);
        _this2.equipmentDetailList = res;
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.router.navigate(['/pages/inventory/vessel-inventory-details'], {
        queryParams: {
          ID: this.inventoryId
        }
      });
    }
  }]);
  return ConsumptionLogComponent;
}();
_class = ConsumptionLogComponent;
_class.ɵfac = function ConsumptionLogComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_inventory_service__WEBPACK_IMPORTED_MODULE_2__.InventoryService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-consumption-log"]],
  decls: 16,
  vars: 10,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "card", "mt-4"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["type", "text", "nbInput", "", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "ConsumptionDate"], ["field", "ConsumptionDate"], ["pSortableColumn", "Maker"], ["field", "Maker"], ["pSortableColumn", "ConsumptionType"], ["field", "ConsumptionType"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], ["colspan", "7"]],
  template: function ConsumptionLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConsumptionLogComponent_Template_button_click_6_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "p-table", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ConsumptionLogComponent_ng_template_11_Template, 3, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ConsumptionLogComponent_ng_template_12_Template, 10, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ConsumptionLogComponent_ng_template_13_Template, 14, 14, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ConsumptionLogComponent_ng_template_14_Template, 3, 1, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Consumption Details ( ", ctx.equipmentDetailList[0] == null ? null : ctx.equipmentDetailList[0].EquipmentName, " )");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.equipmentDetailList)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1))("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_8__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe]
});

/***/ }),

/***/ 674:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vessel-inventory/detail-equipment/detail-equipment.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailEquipmentComponent": () => (/* binding */ DetailEquipmentComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inventory.service */ 32846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;









function DetailEquipmentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "span", 11)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function DetailEquipmentComponent_ng_template_11_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function DetailEquipmentComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Supplied date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Supplied Vendor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Supplied Port ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Supplied Maker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Supplied Qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Supplied Per Unit Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Delivery Charges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Custom/Other Charges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Tax ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Total Price (USD) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Date Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Vendor Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DetailEquipmentComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 21)(1, "td")(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td")(19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td")(23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td")(27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td")(31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td")(35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td")(39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td")(43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "td")(48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 38, rowData_r8.SupplyDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.VendorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.PortName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.MakerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.MinimumOrderQty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.PricePerUnit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.DeliveryCharges, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.OtherCharges, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.Tax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.Total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.DateOfExpiry === "0001-01-01T00:00:00" ? "NA" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](45, 41, "rowData.DateOfExpiry", "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r8.VendorRemarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function DetailEquipmentComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["EquipmentCategoryName", "UnitName", "ConsumptionType"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
var DetailEquipmentComponent = /*#__PURE__*/function () {
  function DetailEquipmentComponent(route, router, inventoryService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DetailEquipmentComponent);
    this.route = route;
    this.router = router;
    this.inventoryService = inventoryService;
    this.checkListRecord = true;
    this.equipmentDetailList = [];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DetailEquipmentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.route.queryParams.subscribe(function (params) {
        _this.selectedItem = params['equipmentId'];
        _this.inventoryId = params['Id'];
        _this.IMONumber = params['ImoNumber'];
        console.log(_this.vesselItemDetails, 'value of re view');
      });
      this.getEquipmentDetail();
    }
  }, {
    key: "getEquipmentDetail",
    value: function getEquipmentDetail() {
      var _this2 = this;
      this.inventoryService.getEquipmentDetail(this.selectedItem, this.IMONumber).subscribe(function (res) {
        console.log(res);
        _this2.equipmentDetailList = res;
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.router.navigate(['/pages/inventory/vessel-inventory-details'], {
        queryParams: {
          ID: this.inventoryId
        }
      });
    }
  }]);
  return DetailEquipmentComponent;
}();
_class = DetailEquipmentComponent;
_class.ɵfac = function DetailEquipmentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_inventory_service__WEBPACK_IMPORTED_MODULE_2__.InventoryService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-detail-equipment"]],
  decls: 16,
  vars: 11,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "card", "mt-4"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["type", "text", "nbInput", "", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "SupplyDate"], ["field", "SupplyDate"], ["pSortableColumn", "Maker"], ["field", "Maker"], ["pSortableColumn", "PortName"], ["field", "PortName"], ["pSortableColumn", "DateOfExpiry"], ["field", "DateOfExpiry"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], ["colspan", "7"]],
  template: function DetailEquipmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailEquipmentComponent_Template_button_click_6_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "p-table", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DetailEquipmentComponent_ng_template_11_Template, 3, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DetailEquipmentComponent_ng_template_12_Template, 37, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DetailEquipmentComponent_ng_template_13_Template, 51, 44, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DetailEquipmentComponent_ng_template_14_Template, 3, 1, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ( ", ctx.equipmentDetailList[0] == null ? null : ctx.equipmentDetailList[0].VesselName, " ) Equipment Details ( ", ctx.equipmentDetailList[0] == null ? null : ctx.equipmentDetailList[0].EquipmentName, " )");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.equipmentDetailList)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1))("showCurrentPageReport", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_8__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe]
});

/***/ }),

/***/ 70929:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vessel-inventory/detail-inventory/detail-inventory.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailInventoryComponent": () => (/* binding */ DetailInventoryComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 35708);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ 32846);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-pages/inventory/requisition/requisition.service */ 76970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 23243);




var _class;













function DetailInventoryComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Consumtion Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Min order Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Last ROB (as per Ship)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Ship ROB update date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "ROB");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Cost Per Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Total Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " (ROB * Per Unit)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Consumption Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DetailInventoryComponent_ng_template_14_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td")(24, "div", 14)(25, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailInventoryComponent_ng_template_14_tr_3_Template_button_click_25_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      var data_r5 = restoredCtx.$implicit;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.viewSupplyLog(data_r5.EquipmentId, data_r5.IMONumber, ctx_r6.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Supply Log ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailInventoryComponent_ng_template_14_tr_3_Template_button_click_27_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      var data_r5 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.viewConsumptionLog(data_r5.EquipmentId, ctx_r8.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Consumption Log ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.EquipmentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.ConsumptionType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.MinimumOrderQty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.DesktopROB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.LastImportedDate === "0001-01-01T00:00:00" ? "NA" : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 10, data_r5.LastImportedDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.ROB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pEditableColumn", data_r5.CostPerUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](19, 13, data_r5.CostPerUnit, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" USD ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](22, 18, (data_r5 == null ? null : data_r5.ROB) * (data_r5 == null ? null : data_r5.CostPerUnit), "USD", "symbol", "1.2-2"), " ");
  }
}
function DetailInventoryComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 10)(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DetailInventoryComponent_ng_template_14_tr_3_Template, 29, 23, "tr", 12);
  }
  if (rf & 2) {
    var rowData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", rowData_r2.EquipmentCategoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", rowData_r2.EquipmentListForItem);
  }
}
var _c0 = function _c0() {
  return {
    width: "100%"
  };
};
var DetailInventoryComponent = /*#__PURE__*/function () {
  function DetailInventoryComponent(route, portService, inventoryService, vesselService, formBuilder, router, requisitionService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DetailInventoryComponent);
    this.route = route;
    this.portService = portService;
    this.inventoryService = inventoryService;
    this.vesselService = vesselService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.requisitionService = requisitionService;
    this.nbForm = this.formBuilder.group({
      VesselInventoryId: [''],
      VesselId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      MinimumLevelsMaintained: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      LastSupplyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      ActiveInventoryCost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      Active: true,
      IsArchived: true
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(DetailInventoryComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.route.queryParams.subscribe(function (params) {
        _this.selectedItem = params['ID'];
        _this.modeByRequisition = params['data'];
        console.log(_this.modeByRequisition, 'value of re view');
        //        this.selectedItem = params['editDetails'];
        // Now you have both the ID and data in your component
      });

      this.getVesselListRecords(1, 100, '');
      this.getDataFromIdrequisitionManagement(this.selectedItem);
      this.getVessel(this.selectedItem.VesselId);
    }
  }, {
    key: "getDataFromIdrequisitionManagement",
    value: function () {
      var _getDataFromIdrequisitionManagement = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(inventoryId) {
        var _this2 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.inventoryService.getInventoryItemDetails(inventoryId).subscribe(function (res) {
                debugger;
                console.log(res[0], "result of items");
                _this2.requisitionData = res;
                // if (this.requisitionOrderDetails.DeliveryChallan !== null) {
                //   this.imageURL = this.requisitionService.RequisitionUrl + 'OrderChallan/' + this.requisitionOrderDetails.DeliveryChallan;
                // } else {
                //   this.imageURL = null
                // }
                // const updatedData = {
                //   "EquipmentManagementList": res[0].EquipmentManagementList.map(category => ({
                //     ...category,
                //     EquipmentList: category.EquipmentList.filter(equipment => equipment.MinOrderQty > 0)
                //   }))
                // };
                // const filteredCategories = updatedData.EquipmentManagementList.filter(category =>
                //   category.EquipmentList.some(equipment => equipment.MinOrderQty > 0)
                // );
                // console.log(updatedData, "this")
                // this.requisitionData = filteredCategories;
                // const totalList = this.requisitionData.flatMap(category => category.EquipmentList)
                // let totalSum = 0;
                // totalList.forEach(item => {
                //   totalSum += item.Total;
                // });
                // this.nbForm.setValue({
                //   VesselInventoryId: '',
                //   VesselId: res[0].VesselId,
                //   // PortId: res[0].PortId,
                //   LastSupplyDate: [formatDate(res[0].SupplyDate, 'MMM dd,yyyy', 'en')],
                //   // MURFixtureNo: res[0].MURFixtureNo,
                //   // AgentAddress: res[0].AgentAddress,
                //   // Contact: res[0].Contact,
                //   // TypeOfSupplyId: res[0].TypeOfSupplyId,
                //   // VendorStatusId: res[0].VendorStatusId,
                //   MinimumLevelsMaintained: '',
                //   ActiveInventoryCost: totalSum,
                //   Active: true,
                //   IsArchived: true
                // });
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getDataFromIdrequisitionManagement(_x) {
        return _getDataFromIdrequisitionManagement.apply(this, arguments);
      }
      return getDataFromIdrequisitionManagement;
    }()
  }, {
    key: "getPortListRecords",
    value: function () {
      var _getPortListRecords = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(cPage, nRows, filter) {
        var _this3 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
                _this3.portDropdown = res.PortData;
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getPortListRecords(_x2, _x3, _x4) {
        return _getPortListRecords.apply(this, arguments);
      }
      return getPortListRecords;
    }()
  }, {
    key: "getDropdownList",
    value: function () {
      var _getDropdownList = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var _this4 = this;
        return (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.inventoryService.getMakerList().subscribe(function (res) {
                _this4.makerDropdown = res;
              });
            case 2:
              _context3.next = 4;
              return this.inventoryService.getConditionList().subscribe(function (res) {
                _this4.conditionDropdown = res;
              });
            case 4:
              this.getPortListRecords(1, 100, '');
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getDropdownList() {
        return _getDropdownList.apply(this, arguments);
      }
      return getDropdownList;
    }()
  }, {
    key: "getVessel",
    value: function getVessel(selectedVessel) {
      var _this5 = this;
      var vessel = selectedVessel;
      console.log(vessel, 'get value id');
      this.getDropdownList();
      if (vessel !== undefined) {
        if (this.selectedItem !== undefined) {
          this.inventoryService.getEditInventory(vessel).subscribe(function (res) {
            debugger;
            _this5.equipmentField = res.VesselInventoryManagementList;
          });
        } else {
          this.inventoryService.getEquipmentFieldList(vessel).subscribe(function (res) {
            console.log(res, 'List of field');
            _this5.equipmentField = res;
          });
        }
      } else {
        this.equipmentField = null;
      }
    }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this6 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        _this6.vesselDropdown = res.VesselData;
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.router.navigate(['/pages/inventory/vessel-inventory']);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {}
  }, {
    key: "submit",
    value: function submit() {}
  }, {
    key: "viewSupplyLog",
    value: function viewSupplyLog(equipemntId, imo, details) {
      this.router.navigate(['/pages/inventory/equipment-details'], {
        queryParams: {
          Id: this.selectedItem,
          ImoNumber: imo,
          equipmentId: equipemntId
        }
      });
    }
  }, {
    key: "viewConsumptionLog",
    value: function viewConsumptionLog(equipemntId, details) {
      this.router.navigate(['/pages/inventory/consumption-log'], {
        queryParams: {
          Id: this.selectedItem,
          equipmentId: equipemntId
        }
      });
    }
  }]);
  return DetailInventoryComponent;
}();
_class = DetailInventoryComponent;
_class.ɵfac = function DetailInventoryComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_4__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_inventory_service__WEBPACK_IMPORTED_MODULE_5__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_6__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_pages_inventory_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_7__.RequisitionService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-detail-inventory"]],
  decls: 15,
  vars: 4,
  consts: [[1, "px-4", "py-2"], [1, "row", "align-items-center", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "row", "align-items-end", "justify-content-between"], [1, "col-12", "mt-4", "mb-4"], [1, "card"], ["dataKey", "EquipmentCategoryName", 3, "tableStyle", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "25%"], [1, "data-table"], ["colspan", "13", 2, "font-weight", "600"], [4, "ngFor", "ngForOf"], ["pEditableColumnField", "PricePerUnit", 3, "pEditableColumn"], [1, "d-flex", "justify-content-center", 2, "border-width", "0px 0px 0px 0px !important"], ["pButton", "", "pRipple", "", "nbTooltip", "View", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"]],
  template: function DetailInventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "div")(7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailInventoryComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "p-table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, DetailInventoryComponent_ng_template_13_Template, 23, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, DetailInventoryComponent_ng_template_14_Template, 4, 2, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.requisitionData[0].VesselName, " Inventory Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0))("value", ctx.requisitionData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.EditableColumn, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe]
});

/***/ }),

/***/ 32846:
/*!***********************************************************************!*\
  !*** ./src/app/pages/inventory/vessel-inventory/inventory.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryService": () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var InventoryService = /*#__PURE__*/function () {
  function InventoryService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InventoryService);
    this.http = http;
    this.inventoryUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InventoryService, [{
    key: "addInventoryDetail",
    value: function addInventoryDetail(inventoryData) {
      debugger;
      return this.http.post(this.inventoryUrl + 'InsertVesselInventory', inventoryData);
    }
  }, {
    key: "updateInventoryDetail",
    value: function updateInventoryDetail(inventoryData) {
      return this.http.put(this.inventoryUrl + 'UpdateVesselInventory', inventoryData);
    }
  }, {
    key: "deleteInventoryCategory",
    value: function deleteInventoryCategory(inventory) {
      return this.http["delete"](this.inventoryUrl + "DeleteInventory/".concat(inventory.Id));
    }
  }, {
    key: "getArchivedList",
    value: function getArchivedList(inventoryArchive) {
      return this.http["delete"](this.inventoryUrl + "ArchivedInventory?id=".concat(inventoryArchive.Id, "&archive=").concat(!inventoryArchive.IsArchived));
    }
  }, {
    key: "getEquipmentFieldList",
    value: function getEquipmentFieldList(vesselId) {
      return this.http.get(this.inventoryUrl + "VesselListById?vesselId=".concat(vesselId));
    }
  }, {
    key: "getEditInventory",
    value: function getEditInventory(vesselId) {
      return this.http.get(this.inventoryUrl + "GetByVesselId?vesselId=".concat(vesselId));
    }
  }, {
    key: "getInventoryList",
    value: function getInventoryList() {
      return this.http.get(this.inventoryUrl + 'Get');
    }
  }, {
    key: "getVesselInventoryList",
    value: function getVesselInventoryList() {
      return this.http.get(this.inventoryUrl + 'GetInventoriesList');
    }
  }, {
    key: "getMakerList",
    value: function getMakerList() {
      return this.http.get(this.inventoryUrl + 'GetMaker');
    }
  }, {
    key: "getConditionList",
    value: function getConditionList() {
      return this.http.get(this.inventoryUrl + 'GetCondition');
    }
  }, {
    key: "geVesselInventoryDetails",
    value: function geVesselInventoryDetails() {
      return this.http.get(this.inventoryUrl + 'ItemLists?imoNumber=1234567');
    }
  }, {
    key: "getInventoryItemDetails",
    value: function getInventoryItemDetails(inventoryId) {
      return this.http.get(this.inventoryUrl + "GetInventoryItem?inventoryId=".concat(inventoryId));
    }
  }, {
    key: "getEquipmentDetail",
    value: function getEquipmentDetail(equipmentId, imo) {
      return this.http.get(this.inventoryUrl + "GetEquipmentLog?equipmentid=".concat(equipmentId, "&imonumber=").concat(imo));
    }
  }, {
    key: "getConsumption",
    value: function getConsumption(equipmentId) {
      return this.http.get(this.inventoryUrl + "GetConsumptionLog?equipmentid=".concat(equipmentId));
    }
  }]);
  return InventoryService;
}();
_class = InventoryService;
_class.ɵfac = function InventoryService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 76104:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/inventory/vessel-inventory/vessel-inventory-list/vessel-inventory-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VesselInventoryListComponent": () => (/* binding */ VesselInventoryListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_shared_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/dynamic-dialog.component */ 35520);
/* harmony import */ var _app_pages_settings_vessel_license_log_license_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/settings/vessel/license-log/license-log.component */ 16383);
/* harmony import */ var _app_pages_inventory_vessel_inventory_add_vessel_inventory_add_vessel_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/inventory/vessel-inventory/add-vessel-inventory/add-vessel-inventory.component */ 39188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/inventory/vendor/vendor.service */ 83402);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../inventory.service */ 32846);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 3608);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;

















function VesselInventoryListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "span", 16)(2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function VesselInventoryListComponent_ng_template_22_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function VesselInventoryListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Vessel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Minimum Levels Maintained ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Last Supply Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Active Inventory Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Archive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function VesselInventoryListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 26)(1, "td")(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ngx-skeleton-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ngx-skeleton-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ngx-skeleton-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td")(15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "ngx-skeleton-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td")(19, "div", 27)(20, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_ng_template_24_Template_button_click_20_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.moveArchived(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "ngx-skeleton-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "td")(25, "div", 31)(26, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_ng_template_24_Template_button_click_26_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.viewLog(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_ng_template_24_Template_button_click_27_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.vesselDetials(product_r11.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_ng_template_24_Template_button_click_28_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.editDetials(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_ng_template_24_Template_button_click_29_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var product_r11 = restoredCtx.$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.deleteDetails(product_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "ngx-skeleton-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r8.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 19, rowData_r8.CreatedDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" USD ", rowData_r8.ActiveInventoryCost, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", rowData_r8.IsArchived ? "arrow-back-outline" : "arrow-forward-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.messageArchived);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.checkListRecord === true ? "d-none" : "");
  }
}
function VesselInventoryListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.emptymessage);
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
var VesselInventoryListComponent = /*#__PURE__*/function () {
  function VesselInventoryListComponent(router, primengConfig, vesselService, fb, inventoryService, messageService, confirmationService, toastrService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VesselInventoryListComponent);
    this.router = router;
    this.primengConfig = primengConfig;
    this.vesselService = vesselService;
    this.fb = fb;
    this.inventoryService = inventoryService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.toastrService = toastrService;
    this.dialogService = dialogService;
    this.activeIndex = 0;
    this.loading = true;
    this.checkListRecord = false;
    this.selectedTab = 1;
    this.dataForTable1 = [{
      column1: 'Data 1',
      column2: 'Data 2'
    }, {
      column1: 'Data 3',
      column2: 'Data 4'
    }
    // Add more data objects for Table 1 if needed
    ];

    this.dataForTable2 = [{
      columnA: 'Data A',
      columnB: 'Data B'
    }, {
      columnA: 'Data C',
      columnB: 'Data D'
    }
    // Add more data objects for Table 2 if needed
    ];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VesselInventoryListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.changeInventoryList('Active');
      this.cols = [{
        field: "Vessel",
        header: "Vessel"
      }, {
        field: "Minimum Levels Maintained",
        header: "Minimum Levels Maintained"
      }, {
        field: "FleetTypeName",
        header: "Fleet Type"
      }, {
        field: "FleetName",
        header: "Fleet Name"
      }, {
        field: "DWT_T",
        header: "DWT(T)"
      }, {
        field: "LicenseStartDate",
        header: "License Start"
      }, {
        field: "LicenseEndDate",
        header: "License Expiring "
      }];
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
    }
  }, {
    key: "changeInventoryList",
    value: function changeInventoryList(value) {
      var _this2 = this;
      this.checkListRecord = false;
      debugger;
      this.inventoryService.getVesselInventoryList().subscribe(function (res) {
        if (res) {
          if (value == "Archived") {
            _this2.activeIndex = 1;
            _this2.vesselInventory = res.filter(function (isArchived) {
              return isArchived.IsArchived == true;
            });
            // console.log(this.circular, "this.circular")
            _this2.messageArchived = 'Move to Active';
            setTimeout(function () {
              _this2.checkListRecord = true;
            }, 1000);
          } else {
            _this2.activeIndex = 0;
            _this2.vesselInventory = res.filter(function (isArchived) {
              return isArchived.IsArchived == false;
            });
            // console.log(this.circular, "this.circular2")
            _this2.messageArchived = 'Move to Archived';
            setTimeout(function () {
              _this2.checkListRecord = true;
            }, 1000);
          }
        }
        if (res.length == 0) {
          _this2.emptymessage = 'No Record Found';
        }
      });
    }
  }, {
    key: "moveArchived",
    value: function moveArchived(selected) {
      var _this3 = this;
      console.log(selected);
      this.inventoryService.getArchivedList(selected).subscribe(function (res) {
        if (res) {
          if (selected.IsArchived == true) {
            _this3.changeInventoryList("Archived");
          } else {
            _this3.changeInventoryList("Active");
          }
        }
      });
    }
  }, {
    key: "getInventoryList",
    value: function getInventoryList() {
      var _this4 = this;
      this.inventoryService.getInventoryList().subscribe(function (res) {
        _this4.messageArchived = 'Move to Archived';
        _this4.vesselInventory = res;
        if (res.length === 0) {
          _this4.emptymessage = 'No Record Found';
        }
        setTimeout(function () {
          _this4.checkListRecord = true;
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
      var _this5 = this;
      this.dialogService.open(_app_pages_inventory_vessel_inventory_add_vessel_inventory_add_vessel_inventory_component__WEBPACK_IMPORTED_MODULE_4__.AddVesselInventoryComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this5.changeInventoryList('Active');
          _this5.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
    }
  }, {
    key: "editDetials",
    value: function editDetials(editDetails) {
      var _this6 = this;
      this.dialogService.open(_app_pages_inventory_vessel_inventory_add_vessel_inventory_add_vessel_inventory_component__WEBPACK_IMPORTED_MODULE_4__.AddVesselInventoryComponent, {
        context: {
          selectedItem: editDetails
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this6.changeInventoryList('Active');
          _this6.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
      console.log(editDetails, "edits details");
    }
    // manageLicense(addLicense: License) {
    //   this.dialogService.open(AddLicenseComponent, { context: { selectedItem: addLicense }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
    //     if (data !== undefined) {
    //       this.getVesselListRecords();
    //       this.showPop('success', 'Success', 'Record Saved');
    //     }
    //   });;
    //   // this.open(false);
    //   // this.product = { ...product };
    //   // this.productDialog = true;
    // }
  }, {
    key: "deleteDetails",
    value: function deleteDetails(deleteRecord) {
      var _this7 = this;
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
          // User clicked "Yes", perform the desired action
          _this7.inventoryService.deleteInventoryCategory(deleteRecord).subscribe(function (res) {
            if (res) {
              _this7.changeInventoryList('Active');
              _this7.showPop('error', 'Delete', 'Record Deleted');
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
    key: "viewLog",
    value: function viewLog(selectedRow) {
      var _this8 = this;
      this.dialogService.open(_app_pages_settings_vessel_license_log_license_log_component__WEBPACK_IMPORTED_MODULE_3__.LicenseLogComponent, {
        context: {
          selectedItem: selectedRow
        },
        closeOnBackdropClick: false,
        autoFocus: false
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this8.getInventoryList();
          _this8.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
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
    key: "exportExcel",
    value: function exportExcel() {
      // import("xlsx").then(xlsx => {
      //   const worksheet = xlsx.utils.json_to_sheet(this.vendor);
      //   const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      //   const excelBuffer: any = xlsx.write(workbook, {
      //     bookType: "xlsx",
      //     type: "array"
      //   });
      //   this.saveAsExcelFile(excelBuffer, "products");
      // });
    }
  }, {
    key: "saveAsExcelFile",
    value: function saveAsExcelFile(buffer, fileName) {
      __webpack_require__.e(/*! import() */ "node_modules_file-saver_dist_FileSaver_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! file-saver */ 94327, 23)).then(function (FileSaver) {
        var EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        var EXCEL_EXTENSION = ".xlsx";
        var data = new Blob([buffer], {
          type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION);
      });
    }
  }, {
    key: "vesselDetials",
    value: function vesselDetials(selectedVessel) {
      this.router.navigate(['/pages/inventory/vessel-inventory-details'], {
        queryParams: {
          ID: selectedVessel
        }
      });
    }
  }]);
  return VesselInventoryListComponent;
}();
_class = VesselInventoryListComponent;
_class.ɵfac = function VesselInventoryListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_pages_inventory_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_5__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_inventory_service__WEBPACK_IMPORTED_MODULE_6__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-vessel-inventory-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService])],
  decls: 27,
  vars: 13,
  consts: [[1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "d-flex", "justify-content-between"], ["nbButton", "", 3, "click"], [1, "d-flex", "justify-content-between", "py-3"], ["nbButton", "", "label", "", 1, "mr-2", 3, "status", "ngClass", "click"], ["nbButton", "", "label", "", 3, "status", "ngClass", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file", "pTooltip", "CSV", "tooltipPosition", "bottom", 1, "mr-2", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file-excel", "pTooltip", "XLS", "tooltipPosition", "bottom", 1, "p-button-success", "mr-2", 3, "click"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle", "columns"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto"], ["nbInput", "", "type", "text", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "VesselName"], ["field", "VesselName"], ["pSortableColumn", "CreatedDate"], ["field", "CreatedDate"], ["pSortableColumn", "ActiveInventoryCost"], ["field", "ActiveInventoryCost"], [2, "width", "20%"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], ["nbButton", "", "outline", "", "status", "primary", 3, "click"], [3, "icon"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "View", "nbTooltipPlacement", "top", 1, "p-button-primary", "d-none", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "Vessel Details", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["pButton", "", "nbTooltip", "Delete", "nbTooltipPlacement", "top", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-primary", 3, "click"], ["colspan", "7"]],
  template: function VesselInventoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Vessel Inventory Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_Template_button_click_7_listener() {
        return ctx.openWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Add Vessel Inventory");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4)(10, "div")(11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_Template_button_click_11_listener() {
        return ctx.changeInventoryList("Active");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Active Inventory");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_Template_button_click_13_listener() {
        return ctx.changeInventoryList("Archived");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Archived Inventory");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div")(16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_Template_button_click_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](21);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.exportCSV());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VesselInventoryListComponent_Template_button_click_17_listener() {
        return ctx.exportExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nb-card")(20, "p-table", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, VesselInventoryListComponent_ng_template_22_Template, 3, 0, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, VesselInventoryListComponent_ng_template_23_Template, 17, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, VesselInventoryListComponent_ng_template_24_Template, 31, 22, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, VesselInventoryListComponent_ng_template_25_Template, 3, 1, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "p-toast");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.activeIndex === 0 ? "primary" : "control")("ngClass", ctx.activeIndex === 0 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.activeIndex === 1 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.vesselInventory)("rows", 5)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c1))("columns", ctx.cols);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_16__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_16__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_17__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: ["[_nghost-%COMP%]     .p-tabview .p-tabview-nav {\n  display: none;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-panels {\n  padding: 0;\n  border: none;\n}"]
});

/***/ }),

/***/ 50797:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/root.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ _root)
/* harmony export */ });
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
(function () {
  if (!_root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
  }
})();

//# sourceMappingURL=root.js.map

/***/ })

}]);