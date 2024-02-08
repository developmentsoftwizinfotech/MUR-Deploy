"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_pages_voyage_voyage-list_add-voyage_add-voyage_component_ts"],{

/***/ 75702:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-list/add-voyage/add-voyage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVoyageComponent": () => (/* binding */ AddVoyageComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 5480);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/internal-compatibility */ 50797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/voyage/voyage-list/voyage.service */ 72780);
/* harmony import */ var _app_pages_settings_sha_sha_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/settings/sha/sha.service */ 33267);
/* harmony import */ var _app_pages_settings_cargo_cargo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-pages/settings/cargo/cargo.service */ 62856);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _app_pages_settings_opr_type_opr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app-pages/settings/opr-type/opr.service */ 45150);
/* harmony import */ var _app_pages_settings_charterer_charterer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app-pages/settings/charterer/charterer.service */ 23380);
/* harmony import */ var _app_pages_settings_vessel_operator_vessel_operator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app-pages/settings/vessel-operator/vessel-operator.service */ 92063);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _app_pages_settings_status_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app-pages/settings/status/status.service */ 84819);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);



var _class;


















function AddVoyageComponent_ng_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r66.VesselId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r66.VesselName, "");
  }
}
function AddVoyageComponent_small_22_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_22_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.firstForm.get("VesselId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r68.LTCMURId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r68.LTCMURName, "");
  }
}
function AddVoyageComponent_small_30_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_30_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.firstForm.get("LTCMURId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r70.OwnerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r70.OwnerName, "");
  }
}
function AddVoyageComponent_small_38_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_38_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r6.firstForm.get("OwnerId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r72.TradeAreaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r72.TradeAreaName, "");
  }
}
function AddVoyageComponent_small_46_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_46_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.firstForm.get("TradeAreaId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_53_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_53_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Voyage Number should have at most 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_53_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Voyage Number should have at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_53_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_53_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AddVoyageComponent_small_53_nb_hint_3_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r9.firstForm.get("VayageNo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r9.firstForm.get("VayageNo")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r9.firstForm.get("VayageNo")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx_r9.firstForm.get("VayageNo")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r9.firstForm.get("VayageNo")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
  }
}
function AddVoyageComponent_ng_option_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r77.StatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r77.StatusName, "");
  }
}
function AddVoyageComponent_small_61_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_61_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r11.firstForm.get("StatusId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_71_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_71_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r13.firstForm.get("VoyageCommenceDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_81_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_81_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "End Date must be greater than Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_81_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_81_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r15.firstForm.get("VesselVoyageCompletedDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r15.firstForm.get("VesselVoyageCompletedDate")) == null ? null : tmp_1_0.errors.invalidDateRange);
  }
}
function AddVoyageComponent_small_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_89_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_89_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_89_nb_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Fixture should have at most 30 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_89_nb_hint_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Fixture should have at least 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_89_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_89_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AddVoyageComponent_small_89_nb_hint_3_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, AddVoyageComponent_small_89_nb_hint_4_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    var tmp_2_0;
    var tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_3_0.dirty) && ((tmp_3_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r17.firstForm.get("Fixture")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]));
  }
}
function AddVoyageComponent_ng_option_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r86.OprTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r86.OprTypeName, "");
  }
}
function AddVoyageComponent_small_103_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_103_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r19.secondForm.get("OprTypeId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r88.PortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r88.PortName, "");
  }
}
function AddVoyageComponent_small_111_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_111_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r21.secondForm.get("LoadToPort")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r90.PortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r90.PortName, "");
  }
}
function AddVoyageComponent_small_119_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_119_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r23.secondForm.get("DischargePort")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r92.CargoName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r92.CargoName, "");
  }
}
function AddVoyageComponent_small_127_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_127_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r25.secondForm.get("CargotoLoad")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r94.CargoName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r94.CargoName, "");
  }
}
function AddVoyageComponent_small_135_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_135_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r27.secondForm.get("PreviousCargo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r96.HoldPassId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r96.HoldPassName, "");
  }
}
function AddVoyageComponent_small_143_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_143_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r29.secondForm.get("HoldPassId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_170_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_170_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_170_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_170_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r30.thirdForm.get("ITDBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r30.thirdForm.get("ITDBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_173_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_173_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_173_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_173_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_173_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r31.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r31.thirdForm.get("ITDActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r31.thirdForm.get("ITDActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_176_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_176_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r32.thirdForm.get("ITDProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r103.PlanStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r103.PlanStatusName, "");
  }
}
function AddVoyageComponent_small_180_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_180_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r34.thirdForm.get("ITDStatusId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_189_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_189_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " SCG Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_189_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_189_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r35.thirdForm.get("SCGBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r35.thirdForm.get("SCGBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_192_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_192_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " SCG Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_192_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_192_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r36.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r36.thirdForm.get("SCGActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r36.thirdForm.get("SCGActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_195_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_195_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r37.thirdForm.get("SCGProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_ng_option_198_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r110.PlanStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r110.PlanStatusName, "");
  }
}
function AddVoyageComponent_small_199_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_199_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_199_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r39.thirdForm.get("SCGStatusId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_208_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_208_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_208_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_208_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_208_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r40.thirdForm.get("ITCBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r40.thirdForm.get("ITCBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_211_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_211_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_211_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_211_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r41.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r41.thirdForm.get("ITCActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r41.thirdForm.get("ITCActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_214_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_214_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_214_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r42.thirdForm.get("ITCProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_223_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_223_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " ITD Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_223_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_223_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r43.thirdForm.get("ITBBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r43.thirdForm.get("ITBBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_226_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_226_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " ITB Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_226_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_226_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_226_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r44.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r44.thirdForm.get("ITBActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r44.thirdForm.get("ITBActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_229_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_229_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_229_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r45.thirdForm.get("ITBProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_238_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_238_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " SHA Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_238_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_238_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_238_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r46.thirdForm.get("SHABudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r46.thirdForm.get("SHABudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_241_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_241_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " SHA Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_241_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_241_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_241_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r47.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r47.thirdForm.get("SHAActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r47.thirdForm.get("SHAActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_244_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_244_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_244_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r48.thirdForm.get("SHAProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_253_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_253_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCE Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_253_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_253_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_253_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r49.thirdForm.get("HCEBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r49.thirdForm.get("HCEBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_256_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_256_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCE Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_256_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_256_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_256_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r50.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r50.thirdForm.get("HCEActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r50.thirdForm.get("HCEActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_259_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_259_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_259_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r51.thirdForm.get("HCEProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_268_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_268_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCC Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_268_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_268_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_268_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r52.thirdForm.get("HCCBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r52.thirdForm.get("HCCBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_271_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_271_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCC Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_271_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_271_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_271_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r53.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r53.thirdForm.get("HCCActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r53.thirdForm.get("HCCActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_274_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_274_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_274_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r54.thirdForm.get("HCCProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_283_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_283_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCX Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_283_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_283_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_283_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r55.thirdForm.get("HCXBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r55.thirdForm.get("HCXBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_286_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_286_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCX Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_286_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_286_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_286_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r56.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r56.thirdForm.get("HCXActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r56.thirdForm.get("HCXActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_289_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_289_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_289_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r57.thirdForm.get("HCXProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_298_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_298_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCB Budget Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_298_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_298_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_298_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r58.thirdForm.get("HCBBudget")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r58.thirdForm.get("HCBBudget")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_301_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_301_nb_hint_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " HCB Actual Max 6 digits - 2 Decimal places");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_301_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_301_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddVoyageComponent_small_301_nb_hint_2_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_1_0;
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r59.statusValue === "Completed" ? "" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r59.thirdForm.get("HCBActual")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r59.thirdForm.get("HCBActual")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function AddVoyageComponent_small_304_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_304_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_304_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r60.thirdForm.get("HCBProvisions")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_329_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_329_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_329_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r63.fourthForm.get("VesselVoyageCompletingDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddVoyageComponent_small_335_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Remarks should have at most 2000 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_335_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r64.fourthForm.get("Remark")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"]);
  }
}
function AddVoyageComponent_small_340_nb_hint_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-hint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Final Remarks should have at most 2000 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function AddVoyageComponent_small_340_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddVoyageComponent_small_340_nb_hint_1_Template, 2, 0, "nb-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r65.fourthForm.get("FinalRemarks")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"]);
  }
}
var AddVoyageComponent = /*#__PURE__*/function () {
  function AddVoyageComponent(formBuilder, voyageService, shaService, cargoService, portService, oprService, chartererService, vesselOperatorService, vesselService, statusService, dialogRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddVoyageComponent);
    //  this.nbForm = this.formBuilder.group({
    this.formBuilder = formBuilder;
    this.voyageService = voyageService;
    this.shaService = shaService;
    this.cargoService = cargoService;
    this.portService = portService;
    this.oprService = oprService;
    this.chartererService = chartererService;
    this.vesselOperatorService = vesselOperatorService;
    this.vesselService = vesselService;
    this.statusService = statusService;
    this.dialogRef = dialogRef;
    this.formTitle = "Add";
    this.statusValue = "Completed";
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_3__.CustomStateError();
    this.linearMode = true;
    this.firstCount = 1;
    this.totalRows = 0;
    //   VoyageId: [''],
    //   LTCMURId: [null, Validators.required],
    //   VesselId: [null, Validators.required],
    //   VoyageCommenceDate: ['', Validators.required],
    //   VesselVoyageCompletedDate: ['', Validators.required],
    //   VesselVoyageCompletingDate: ['', Validators.required],
    //   StatusId: [null, Validators.required],
    //   VesselOperatorId: [null, Validators.required],
    //   ChartererId: [null, Validators.required],
    //   Fixture: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5), Validators.pattern(/^\S(.*\S)?$/)]],
    //   OprTypeId: [null, Validators.required],
    //   LoadToPortId: [null, Validators.required],
    //   DischargePortId: [null, Validators.required],
    //   CargotoLoadId: [null, Validators.required],
    //   PreviousCargoId: [null, Validators.required],
    //   TCCBudgetUSD: ['', [Validators.required]],
    //   TCCActual: ['', Validators.required],
    //   TCCProvisions: ['', Validators.required],
    //   ITDBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITDActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITDProvisions: ['', Validators.required],
    //   ITCBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITCActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITCProvisions: ['', Validators.required],
    //   ITBBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITBActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITBProvisions: ['', Validators.required],
    //   SCGBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SCGActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SCGProvisions: ['', Validators.required],
    //   VendorId: [null, Validators.required],
    //   SHABudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SHAActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SHAProvisions: ['', Validators.required],
    //   HCEBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCEActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCEProvisions: ['', Validators.required],
    //   HCCBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCCActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCCProvisions: ['', Validators.required],
    //   HCXBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCXActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCXProvisions: ['', Validators.required],
    //   HCBBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCBActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCBProvisions: ['', Validators.required],
    //   OwnerId: [null, Validators.required],
    //   TradeAreaId: [null, Validators.required],
    //   VayageNo: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    //   ITDStatusId: [null, Validators.required],
    //   SCGStatusId: [null, Validators.required],
    //   Remark: [''],
    //   BudgetedDetailsDate: ['', Validators.required],
    //   FinalRemarks: [''],
    //   HoldPassId: [null, Validators.required],
    // },
    //   { validators: this.customErrorStateMatcher.dateRangeValidator('VoyageCommenceDate', 'VesselVoyageCompletedDate') }
    // );
    this.firstForm = this.formBuilder.group({
      VoyageId: [''],
      LTCMURId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VesselId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VoyageCommenceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VesselVoyageCompletedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      StatusId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      TradeAreaId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      OwnerId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      VayageNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(1)]],
      Fixture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\S(.*\S)?$/)]]
    }, {
      validators: this.customErrorStateMatcher.dateRangeValidator('VoyageCommenceDate', 'VesselVoyageCompletedDate')
    });
    this.secondForm = this.formBuilder.group({
      HoldPassId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      OprTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      LoadToPort: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      DischargePort: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      CargotoLoad: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      PreviousCargo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
    });
    this.thirdForm = this.formBuilder.group({
      TCCBudgetUSD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      TCCActual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      TCCProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ITDBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITDActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITDProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ITCBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITCActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITCProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ITBBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITBActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITBProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      SCGBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SCGActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SCGProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      SHABudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SHAActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SHAProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      HCEBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCEActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCEProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      HCCBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCCActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCCProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      HCXBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCXActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCXProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      HCBBudget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCBActual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCBProvisions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      ITDStatusId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      SCGStatusId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
    });
    this.fourthForm = this.formBuilder.group({
      VesselVoyageCompletingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      BudgetedDetailsDate: [ false || null],
      Remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(2000)]],
      FinalRemarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(2000)]]
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AddVoyageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.selectedRows = "25";
      this.nextCount = 25;
      this.currentPage = 1;
      this.totalRows = 10;
      // this.getLtcList();
      // this.getPlanStatusList();
      // this.getHoldPassList();
      // this. getTradeAreaList();
      // this.getOwnerNameList();
      // VoyageId: [''],
      // , Validators.pattern('^[a-zA-Z0-9]+$')
      this.getVesselListRecords(1, 100, '');
      this.getPortList(1, 100, '');
      this.getOprTypeListRecords(1, 100, '');
      this.getCargoListRecords(1, 100, '');
      this.getAllDropDown();
      this.setFieldVal();
      // this.onSelectStatus(1004)
    }
  }, {
    key: "getOprTypeListRecords",
    value: function getOprTypeListRecords(cPage, nRows, filter) {
      var _this = this;
      this.oprService.getOprTypeList(cPage, nRows, filter).subscribe(function (res) {
        debugger;
        _this.oprDropdown = res.OprTypeData;
        console.log(_this.oprDropdown, 'oprDropdown');
      });
    }
  }, {
    key: "getCargoListRecords",
    value: function getCargoListRecords(cPage, nRows, filter) {
      var _this2 = this;
      this.cargoService.getCargoList(cPage, nRows, filter).subscribe(function (res) {
        debugger;
        _this2.cargoDropdown = res.CargoData;
        console.log(_this2.cargoDropdown, 'cargoDropdown');
      });
    }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this3 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        _this3.vesselDropdown = res.VesselData;
        console.log(_this3.vesselDropdown, 'vesselDropdown');
      });
    }
  }, {
    key: "getPortList",
    value: function getPortList(cPage, nRows, filter) {
      var _this4 = this;
      // console.log(filter.target.value,"value")
      this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
        _this4.portDropdown = res.PortData;
        console.log(_this4.portDropdown, "portDropdown");
      });
    }
  }, {
    key: "onSelectStatus",
    value: function onSelectStatus(statusValue) {
      ////debugger;
      var selectedId = statusValue;
      console.log(this.statusDropdown, "this.statusDropdownthis.statusDropdownthis.statusDropdown");
      var selectedOption = this.statusDropdown.find(function (option) {
        return option.StatusId === selectedId;
      });
      console.log(selectedOption.StatusName, "sdjfhhfdsf vakey of sleet");
      if (selectedOption) {
        var selectedName = selectedOption.StatusName;
        this.statusValue = selectedName;
        if (selectedName.toLowerCase() !== "completed") {
          this.thirdForm.get('TCCActual').setValidators(null);
          this.thirdForm.get('TCCActual').updateValueAndValidity();
          this.thirdForm.get('ITDActual').setValidators(null);
          this.thirdForm.get('ITDActual').updateValueAndValidity();
          this.thirdForm.get('ITCActual').setValidators(null);
          this.thirdForm.get('ITCActual').updateValueAndValidity();
          this.thirdForm.get('ITBActual').setValidators(null);
          this.thirdForm.get('ITBActual').updateValueAndValidity();
          this.thirdForm.get('SCGActual').setValidators(null);
          this.thirdForm.get('SCGActual').updateValueAndValidity();
          this.thirdForm.get('SHAActual').setValidators(null);
          this.thirdForm.get('SHAActual').updateValueAndValidity();
          this.thirdForm.get('HCEActual').setValidators(null);
          this.thirdForm.get('HCEActual').updateValueAndValidity();
          this.thirdForm.get('HCCActual').setValidators(null);
          this.thirdForm.get('HCCActual').updateValueAndValidity();
          this.thirdForm.get('HCXActual').setValidators(null);
          this.thirdForm.get('HCXActual').updateValueAndValidity();
          this.thirdForm.get('HCBActual').setValidators(null);
          this.thirdForm.get('HCBActual').updateValueAndValidity();
        } else {
          this.thirdForm.get('TCCActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
          this.thirdForm.get('TCCActual').updateValueAndValidity();
          this.thirdForm.get('ITDActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('ITDActual').updateValueAndValidity();
          this.thirdForm.get('ITCActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('ITCActual').updateValueAndValidity();
          this.thirdForm.get('ITBActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('ITBActual').updateValueAndValidity();
          this.thirdForm.get('SCGActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('SCGActual').updateValueAndValidity();
          this.thirdForm.get('SHAActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('SHAActual').updateValueAndValidity();
          this.thirdForm.get('HCEActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('HCEActual').updateValueAndValidity();
          this.thirdForm.get('HCCActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('HCCActual').updateValueAndValidity();
          this.thirdForm.get('HCXActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('HCXActual').updateValueAndValidity();
          this.thirdForm.get('HCBActual').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
          this.thirdForm.get('HCBActual').updateValueAndValidity();
        }
      }
    }
  }, {
    key: "setFieldVal",
    value: function setFieldVal() {
      if (this.selectedItem !== undefined) {
        var LoadToPort = this.selectedItem.LoadToPort.split(",");
        var DischargePort = this.selectedItem.DischargePort.split(",");
        var CargotoLoad = this.selectedItem.CargotoLoad.split(",");
        var PreviousCargo = this.selectedItem.PreviousCargo.split(",");
        this.formTitle = "Update";
        this.firstForm.setValue({
          VoyageId: this.selectedItem.VoyageId,
          LTCMURId: this.selectedItem.LTCMURId,
          VesselId: this.selectedItem.VesselId,
          VoyageCommenceDate: this.selectedItem.VoyageCommenceDate,
          VesselVoyageCompletedDate: this.selectedItem.VesselVoyageCompletedDate,
          StatusId: this.selectedItem.StatusId,
          Fixture: this.selectedItem.Fixture,
          OwnerId: this.selectedItem.OwnerId,
          TradeAreaId: this.selectedItem.TradeAreaId,
          VayageNo: this.selectedItem.VayageNo
        });
        this.secondForm.setValue({
          HoldPassId: this.selectedItem.HoldPassId,
          OprTypeId: this.selectedItem.OprTypeId,
          LoadToPort: LoadToPort,
          DischargePort: DischargePort,
          CargotoLoad: CargotoLoad,
          PreviousCargo: PreviousCargo
        });
        this.thirdForm.setValue({
          TCCBudgetUSD: this.selectedItem.TCCBudgetUSD,
          TCCActual: this.selectedItem.TCCActual,
          TCCProvisions: this.selectedItem.TCCBudgetUSD - this.selectedItem.TCCActual,
          ITDBudget: this.selectedItem.ITDBudget,
          ITDActual: this.selectedItem.ITDActual,
          ITDProvisions: this.selectedItem.ITDBudget - this.selectedItem.ITDActual,
          ITCBudget: this.selectedItem.ITCBudget,
          ITCActual: this.selectedItem.ITCActual,
          ITCProvisions: this.selectedItem.ITCBudget - this.selectedItem.ITCActual,
          ITBBudget: this.selectedItem.ITBBudget,
          ITBActual: this.selectedItem.ITBActual,
          ITBProvisions: this.selectedItem.ITBBudget - this.selectedItem.ITBActual,
          SCGBudget: this.selectedItem.SCGBudget,
          SCGActual: this.selectedItem.SCGActual,
          SCGProvisions: this.selectedItem.SCGBudget - this.selectedItem.SCGActual,
          SHABudget: this.selectedItem.SHABudget,
          SHAActual: this.selectedItem.SHAActual,
          SHAProvisions: this.selectedItem.SHABudget - this.selectedItem.SHAActual,
          HCEBudget: this.selectedItem.HCEBudget,
          HCEActual: this.selectedItem.HCEActual,
          HCEProvisions: this.selectedItem.HCEBudget - this.selectedItem.HCEActual,
          HCCBudget: this.selectedItem.HCCBudget,
          HCCActual: this.selectedItem.HCCActual,
          HCCProvisions: this.selectedItem.HCCBudget - this.selectedItem.HCCActual,
          HCXBudget: this.selectedItem.HCXBudget,
          HCXActual: this.selectedItem.HCXActual,
          HCXProvisions: this.selectedItem.HCXBudget - this.selectedItem.HCXActual,
          HCBBudget: this.selectedItem.HCBBudget,
          HCBActual: this.selectedItem.HCBActual,
          HCBProvisions: this.selectedItem.HCBBudget - this.selectedItem.HCBActual,
          ITDStatusId: this.selectedItem.ITDStatusId,
          SCGStatusId: this.selectedItem.SCGStatusId
        });
        this.fourthForm.setValue({
          Remark: this.selectedItem.Remark,
          FinalRemarks: this.selectedItem.FinalRemarks,
          VesselVoyageCompletingDate: this.selectedItem.VesselVoyageCompletingDate,
          BudgetedDetailsDate: this.selectedItem.BudgetedDetailsDate
        });
      }
    }
  }, {
    key: "getAllDropDown",
    value: function getAllDropDown() {
      var _this5 = this;
      this.statusService.getStatusList().subscribe(function (res) {
        _this5.statusDropdown = res;
        console.log(_this5.statusDropdown, 'statusDropdown');
        if (_this5.selectedItem !== undefined) {
          _this5.onSelectStatus(_this5.selectedItem.StatusId);
        }
        // if (this.statusDropdown.length > 0) {
        //   this.onSelectStatus(this.selectedItem.StatusId);
        // }
      });
      // this.vesselOperatorService.getOperatorList().subscribe((res: VesselOperator) => {
      //   debugger
      //   this.vesselOperatorDropdown = res
      //   console.log(this.vesselOperatorDropdown ,'vesselOperatorDropdown')
      // })
      // this.chartererService.getChartererList(1,100,"").subscribe((res: Charterer) => {
      //   debugger
      //      this.chartererDropdown = res
      //   console.log(this.chartererDropdown ,'chartererDropdown')
      // })
      // this.portService.getPortList(1,100,"").subscribe((res: Port) => {
      //   debugger
      //   this.portDropdown = res
      //   console.log(this.portDropdown ,'portDropdown')
      // })
      // this.shaService.getSHAList(1,100,'').subscribe((res: SHA) => {
      //   debugger
      //   this.shaDropdown = res
      //   console.log(this.shaDropdown ,'shaDropdown')
      // })
      this.voyageService.getLtcList().subscribe(function (res) {
        debugger;
        _this5.LtcMurList = res;
        console.log(_this5.LtcMurList, 'LtcMurList');
      });
      this.voyageService.getPlanStatusList().subscribe(function (res) {
        debugger;
        _this5.PlanStatusList = res;
        console.log(_this5.PlanStatusList, 'PlanStatusList');
      });
      this.voyageService.getOwnerNameList().subscribe(function (res) {
        _this5.OwnerNameList = res;
      });
      this.voyageService.getTradeAreaList().subscribe(function (res) {
        debugger;
        _this5.TradeAreaList = res;
        console.log(_this5.TradeAreaList, 'TradeAreaList');
      });
      this.voyageService.getHoldPassList().subscribe(function (res) {
        debugger;
        _this5.holdPassList = res;
        console.log(_this5.holdPassList, 'holdPassList');
      });
    }
  }, {
    key: "calculate",
    value: function calculate(value) {
      if (value == "TCC") {
        var input1 = this.thirdForm.value.TCCBudgetUSD;
        var input2 = this.thirdForm.value.TCCActual;
        // if (input1 !== "" && input2 !== "") {
        var calculateVal = input1 - input2;
        this.thirdForm.get('TCCProvisions').setValue(calculateVal);
        // }
      }

      if (value == "ITD") {
        var _input = this.thirdForm.value.ITDBudget;
        var _input2 = this.thirdForm.value.ITDActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal = _input - _input2;
        this.thirdForm.get('ITDProvisions').setValue(_calculateVal);
        // }
      }

      if (value == "ITC") {
        var _input3 = this.thirdForm.value.ITCBudget;
        var _input4 = this.thirdForm.value.ITCActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal2 = _input3 - _input4;
        this.thirdForm.get('ITCProvisions').setValue(_calculateVal2);
        // }
      }

      if (value == "ITB") {
        var _input5 = this.thirdForm.value.ITBBudget;
        var _input6 = this.thirdForm.value.ITBActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal3 = _input5 - _input6;
        this.thirdForm.get('ITBProvisions').setValue(_calculateVal3);
        // }
      }

      if (value == "SCG") {
        var _input7 = this.thirdForm.value.SCGBudget;
        var _input8 = this.thirdForm.value.SCGActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal4 = _input7 - _input8;
        this.thirdForm.get('SCGProvisions').setValue(_calculateVal4);
        // }
      }

      if (value == "SHA") {
        var _input9 = this.thirdForm.value.SHABudget;
        var _input10 = this.thirdForm.value.SHAActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal5 = _input9 - _input10;
        this.thirdForm.get('SHAProvisions').setValue(_calculateVal5);
        // }
      }

      if (value == "HCE") {
        var _input11 = this.thirdForm.value.HCEBudget;
        var _input12 = this.thirdForm.value.HCEActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal6 = _input11 - _input12;
        this.thirdForm.get('HCEProvisions').setValue(_calculateVal6);
        // }
      }

      if (value == "HCC") {
        var _input13 = this.thirdForm.value.HCCBudget;
        var _input14 = this.thirdForm.value.HCCActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal7 = _input13 - _input14;
        this.thirdForm.get('HCCProvisions').setValue(_calculateVal7);
        // }
      }

      if (value == "HCX") {
        var _input15 = this.thirdForm.value.HCXBudget;
        var _input16 = this.thirdForm.value.HCXActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal8 = _input15 - _input16;
        this.thirdForm.get('HCXProvisions').setValue(_calculateVal8);
        // }
      }

      if (value == "HCB") {
        var _input17 = this.thirdForm.value.HCBBudget;
        var _input18 = this.thirdForm.value.HCBActual;
        // if (input1 !== "" && input2 !== "") {
        var _calculateVal9 = _input17 - _input18;
        this.thirdForm.get('HCBProvisions').setValue(_calculateVal9);
        // }
      }

      var propertiesBudget = ['ITDBudget', 'ITCBudget', 'ITBBudget', 'SCGBudget', 'SHABudget', 'HCEBudget', 'HCCBudget', 'HCXBudget', 'HCBBudget']; // Array of property names
      var propertiesActual = ['ITDActual', 'ITCActual', 'ITBActual', 'SCGActual', 'SHAActual', 'HCEActual', 'HCCActual', 'HCXActual', 'HCBActual']; // Array of property names
      var TotalBudget = null;
      var TotalActual = null;
      for (var _i = 0, _propertiesBudget = propertiesBudget; _i < _propertiesBudget.length; _i++) {
        var property = _propertiesBudget[_i];
        if (this.thirdForm.value.hasOwnProperty(property)) {
          if (this.thirdForm.value[property] !== "") {
            TotalBudget += this.thirdForm.value[property];
          }
        }
      }
      for (var _i2 = 0, _propertiesActual = propertiesActual; _i2 < _propertiesActual.length; _i2++) {
        var propertyActual = _propertiesActual[_i2];
        if (this.thirdForm.value.hasOwnProperty(propertyActual)) {
          if (this.thirdForm.value[propertyActual] !== "") {
            TotalActual += this.thirdForm.value[propertyActual];
          }
        }
      }
      this.thirdForm.get('TCCBudgetUSD').setValue(TotalBudget);
      this.thirdForm.get('TCCActual').setValue(TotalActual);
      this.thirdForm.get('TCCProvisions').setValue(TotalBudget - TotalActual);
    }
  }, {
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }, {
    key: "changeOffsetTimeZone",
    value: function changeOffsetTimeZone(control, event) {
      // //debugger
      // this.dataPick = '' || null
      // ////debugger;
      // // let dataValu = `${{event
      // console.log(event)
      // const selectedDate: Date = new Date(event);;
      // const timeZoneOffset = selectedDate.getTimezoneOffset();
      // selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
      // // const selectedDateFormatted = selectedDate.toISOString().split('T')[0];
      // const dataPicks = selectedDate.toISOString().split('T')[0];
      // switch (control) {
      //   case control = "VoyageCommenceDate":
      //     //debugger
      //    const a= this.firstForm.get('VoyageCommenceDate').setValue('');
      //    //debugger
      //     console.log(a,"a")
      //     break;
      //   case control = "VesselVoyageCompletedDate":
      //     //debugger
      //     this.firstForm.get('VesselVoyageCompletedDate').setValue(this.dataPick);
      //     break;
      //   case control = "VesselVoyageCompletingDate":
      //     //debugger
      //     this.fourthForm.get('VesselVoyageCompletingDate').setValue(this.dataPick);
      //     break;
      //   case control = "BudgetedDetailsDate":
      //     //debugger
      //     this.fourthForm.get('BudgetedDetailsDate').setValue(dataPicks);
      //     break;
      // }
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this6 = this;
      var LoadToPort = this.secondForm.value.LoadToPort.join(",");
      var DischargePort = this.secondForm.value.DischargePort.join(",");
      var CargotoLoad = this.secondForm.value.CargotoLoad.join(",");
      var PreviousCargo = this.secondForm.value.PreviousCargo.join(",");
      this.secondForm.get('LoadToPort').setValue(LoadToPort);
      this.secondForm.get('DischargePort').setValue(DischargePort);
      this.secondForm.get('CargotoLoad').setValue(CargotoLoad);
      this.secondForm.get('PreviousCargo').setValue(PreviousCargo);
      this.allData = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.firstForm.value), this.secondForm.value), this.thirdForm.value), this.fourthForm.value);
      console.log(this.allData, "SaveData");
      if (this.allData) {
        if (this.selectedItem !== undefined) {
          this.firstForm.get('VoyageId').setValue(this.selectedItem.VoyageId);
          var voyageDetails = this.allData;
          debugger;
          this.voyageService.updateVoyageDetail(this.allData).subscribe(function (res) {
            debugger;
            if (res == true) {
              _this6.statusService.getStatusList().subscribe(function (res) {
                var StatusVal = res.filter(function (x) {
                  return x.StatusId === _this6.firstForm.value.StatusId;
                });
                _this6.dialogRef.close(StatusVal[0].StatusName);
              });
              // this.close();
            }
          });
        } else {
          debugger;
          var _voyageDetails = this.allData;
          console.log(_voyageDetails);
          this.voyageService.addVoyageDetail(_voyageDetails).subscribe(function (res) {
            debugger;
            if (res == true) {
              debugger;
              _this6.statusService.getStatusList().subscribe(function (res) {
                var StatusVal = res.filter(function (x) {
                  return x.StatusId === _this6.firstForm.value.StatusId;
                });
                _this6.dialogRef.close(StatusVal[0].StatusName);
              });
              // this.close();
            }
          });
        }
      }
      // else {
      //   this.nbForm.markAllAsTouched();
      // }
    }
  }, {
    key: "onFirstSubmit",
    value: function onFirstSubmit() {
      //debugger
      //  let v= this.firstForm.get('VoyageCommenceDate').setValue(this.dataPick);
      // let b=  this.firstForm.get('VesselVoyageCompletedDate').setValue(this.dataPick);
      //debugger
      if (this.firstForm.invalid) {
        this.firstForm.markAllAsTouched();
        // this.firstForm.markAsDirty();
      } else {
        var selectedDate = new Date(this.firstForm.value.VoyageCommenceDate);
        ;
        var timeZoneOffset = selectedDate.getTimezoneOffset();
        selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
        var dataPickVoyageCommenceDate = selectedDate.toISOString().split('T')[0];
        var selectedDate1 = new Date(this.firstForm.value.VesselVoyageCompletedDate);
        var timeZoneOffset1 = selectedDate1.getTimezoneOffset();
        selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
        var dataPickVesselVoyageCompletedDate = selectedDate1.toISOString().split('T')[0];
        this.firstForm.get('VoyageCommenceDate').setValue(dataPickVoyageCommenceDate);
        this.firstForm.get('VesselVoyageCompletedDate').setValue(dataPickVesselVoyageCompletedDate);
        console.log(this.firstForm.value, "formValue");
      }
      // this.nbForm.markAllAsTouched();
    }
  }, {
    key: "onSecondSubmit",
    value: function onSecondSubmit() {
      //debugger
      if (this.secondForm.invalid) {
        this.secondForm.markAllAsTouched();
      } else {
        console.log(this.secondForm.value, "secondForm");
      }
      // this.secondForm.markAsDirty();
    }
  }, {
    key: "onThirdSubmit",
    value: function onThirdSubmit() {
      if (this.thirdForm.invalid) {
        this.thirdForm.markAllAsTouched();
      } else {
        console.log(this.thirdForm.value, "thirdForm");
      }
    }
  }, {
    key: "onfourthSubmit",
    value: function onfourthSubmit() {
      //debugger
      if (this.fourthForm.invalid) {
        this.fourthForm.markAllAsTouched();
      } else {
        ////debugger;
        var selectedDate = new Date(this.fourthForm.value.VesselVoyageCompletingDate);
        ;
        var timeZoneOffset = selectedDate.getTimezoneOffset();
        selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
        var dataPickVesselVoyageCompletingDate = selectedDate.toISOString().split('T')[0];
        this.fourthForm.get('VesselVoyageCompletingDate').setValue(dataPickVesselVoyageCompletingDate);
        if (this.fourthForm.value.BudgetedDetailsDate !== null) {
          var selectedDate1 = new Date(this.fourthForm.value.BudgetedDetailsDate);
          ;
          var timeZoneOffset1 = selectedDate1.getTimezoneOffset();
          selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
          var dataPickBudgetedDetailsDate = selectedDate1.toISOString().split('T')[0];
          this.fourthForm.get('BudgetedDetailsDate').setValue(dataPickBudgetedDetailsDate);
        }
        console.log(this.fourthForm.value, "fourthForm");
        this.submit();
      }
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.firstForm.reset();
    }
  }, {
    key: "toggleLinearMode",
    value: function toggleLinearMode() {
      this.linearMode = !this.linearMode;
    }
  }, {
    key: "vesselDataAPI",
    value: function vesselDataAPI() {
      var VoyageData = [{
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230102,
        "Counterparty Short Name": "SABIC",
        "Voyage No": 1,
        "Voyage Status": "Completed",
        "Trade Area Name": "PG EXPORTS FERTILIZER",
        "Commence Date Gmt": "2023-02-13T13:18:00",
        "Complete Date Gmt": "2023-03-31T04:42:00",
        "Load Port Name": "JUBAIL",
        "Load Cargo Short Name": "UREA",
        "Discharge Port Name": "KOHSICHANG TPP",
        "Discharge Cargo Short Name": "UREA",
        "Cargo Grades List": ""
      }, {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": "",
        "Counterparty Short Name": "",
        "Voyage No": 2,
        "Voyage Status": "Completed",
        "Trade Area Name": "TC RELET",
        "Commence Date Gmt": "2023-03-31T04:42:00",
        "Complete Date Gmt": "2023-06-01T07:20:00",
        "Load Port Name": "",
        "Load Cargo Short Name": "",
        "Discharge Port Name": "",
        "Discharge Cargo Short Name": "",
        "Cargo Grades List": "UREA"
      }, {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230266,
        "Counterparty Short Name": "Aditya Birla Global Trading",
        "Voyage No": 3,
        "Voyage Status": "Completed",
        "Trade Area Name": "TC RELET",
        "Commence Date Gmt": "2023-06-01T07:20:00",
        "Complete Date Gmt": "2023-07-22T18:42:00",
        "Load Port Name": "RAS LAFFAN",
        "Load Cargo Short Name": "SULPHUR",
        "Discharge Port Name": "RICHARDS BAY",
        "Discharge Cargo Short Name": "SULPHUR",
        "Cargo Grades List": ""
      }, {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "RICHARDS BAY",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "ALTAMIRA",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      }, {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "RICHARDS BAY",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "NEW ORLEANS",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      }, {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "EHOALA",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "ALTAMIRA",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      }, {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "EHOALA",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "NEW ORLEANS",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      }];
      //Fixture No Code Here
      var uniqueFixtureNumbers = [];
      var uniqueFixtureObjects = [];
      for (var _i3 = 0, _VoyageData = VoyageData; _i3 < _VoyageData.length; _i3++) {
        var voyage = _VoyageData[_i3];
        var fixtureNo = voyage["Fixture No"];
        if (fixtureNo && !uniqueFixtureNumbers.includes(fixtureNo)) {
          uniqueFixtureNumbers.push(fixtureNo);
          uniqueFixtureObjects.push({
            "Fixture No": fixtureNo
          });
        }
      }
      // this.voyageService.getAllVoyageDataList().subscribe(res=>{
      //   console.log(res)
      // })
    }
  }]);
  return AddVoyageComponent;
}();
_class = AddVoyageComponent;
_class.ɵfac = function AddVoyageComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_4__.VoyageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_sha_sha_service__WEBPACK_IMPORTED_MODULE_5__.ShaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_cargo_cargo_service__WEBPACK_IMPORTED_MODULE_6__.CargoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_7__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_opr_type_opr_service__WEBPACK_IMPORTED_MODULE_8__.OprService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_charterer_charterer_service__WEBPACK_IMPORTED_MODULE_9__.ChartererService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_vessel_operator_vessel_operator_service__WEBPACK_IMPORTED_MODULE_10__.VesselOperatorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_11__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_pages_settings_status_status_service__WEBPACK_IMPORTED_MODULE_12__.StatusService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-add-voyage"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_16__.ConfirmationService, {
    provide: rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_17__.root,
    useClass: _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_3__.CustomStateError
  }])],
  decls: 346,
  vars: 91,
  consts: [[1, "px-3", "mb-0", "border-bottom-0"], [1, "row", "align-items-center", "justify-content-between"], ["type", "button", "nbButton", "", "status", "basic", 1, "mr-2", 3, "click"], ["icon", "close-outline"], [1, "example-items-rows"], ["stepper", ""], ["label", "First step ", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], [1, "row", "px-2"], [1, "mb-3", "col-md-4", "col-lg-4", "col-sm-12"], ["for", "VesselId", 1, "form-label"], [2, "color", "red"], ["formControlName", "VesselId", "placeholder", "Select Vessel", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo", "change", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "form-label"], ["formControlName", "LTCMURId", "placeholder", "Select LTC/MUR", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo"], ["formControlName", "OwnerId", "placeholder", "Select Owner Name", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo"], ["formControlName", "TradeAreaId", "placeholder", "Select Trade Area", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo"], ["type", "number", "formControlName", "VayageNo", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Enter Voyage Number"], ["for", "StatusId", 1, "form-label"], ["formControlName", "StatusId", "placeholder", "Select Status", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo", "change"], ["for", "VoyageCommenceDate", 1, "form-label"], ["nbInput", "", "formControlName", "VoyageCommenceDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "nbDatepicker"], [3, "dateChange"], ["dateTimePicker1", ""], ["for", "VesselVoyageCompletedDate", 1, "form-label"], ["nbInput", "", "formControlName", "VesselVoyageCompletedDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "nbDatepicker"], ["dateTimePicker2", ""], ["style", "color: red;", 4, "ngIf"], ["for", "Fixture", 1, "form-label"], ["type", "text", "nbInput", "", "formControlName", "Fixture", "fullWidth", "", "fieldSize", "medium", "placeholder", " Fixture"], [1, "d-flex", "justify-content-end"], ["nbButton", "", "nbStepperNext", "", "type", "submit", "status", "primary", 3, "click"], ["label", "Second step", 3, "stepControl"], ["status", "primary", 1, "step-container", 3, "formGroup", "ngSubmit"], ["for", "OprTypeId", 1, "form-label"], ["formControlName", "OprTypeId", "placeholder", "Select Opr Type", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo", "keyup"], ["for", "LoadToPort", 1, "form-label"], ["formControlName", "LoadToPort", "placeholder", "Select Load Port", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "multiple", "appendTo", "keyup"], ["for", "DischargePort", 1, "form-label"], ["formControlName", "DischargePort", "placeholder", "Select Discharge Port", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "multiple", "appendTo", "keyup"], ["for", "CargotoLoad", 1, "form-label"], ["formControlName", "CargotoLoad", "placeholder", "Select Cargo To Load", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "multiple", "appendTo", "keyup"], ["for", "PreviousCargo", 1, "form-label"], ["formControlName", "PreviousCargo", "placeholder", "Select Previous Cargo", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "multiple", "appendTo", "keyup"], ["for", "HoldPassId", 1, "form-label"], ["formControlName", "HoldPassId", "placeholder", "Select Hold", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo"], ["nbButton", "", "nbStepperPrevious", "", 1, "mr-2"], ["label", "Third step", 3, "stepControl"], [1, "mb-3", "col-12"], ["for", "ITC Budget", 1, "pl-0", "form-label", "col-12"], [1, "row", "align-items-start"], [1, "col-md-4", "col-lg-4", "col-sm-12", "mb-2", "mb-md-0", "mb-lg-0"], ["type", "number", "readonly", "", "formControlName", "TCCBudgetUSD", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "TCC Budget (USD)", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "TCCActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "TCC Actual", 3, "blur"], [1, "col-md-4", "col-lg-4", "col-sm-12"], ["type", "number", "readonly", "", "formControlName", "TCCProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "TCC Difference"], ["for", "ITDBudget", 1, "pl-0", "form-label", "col-12"], [1, "col-lg-3", "col-md-3", "col-sm-12", "mb-2", "mb-lg-0", "mb-md-0"], ["type", "number", "formControlName", "ITDBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITD Budget", 3, "blur"], ["type", "number", "formControlName", "ITDActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITD Actual", 3, "blur"], [3, "ngClass", 4, "ngIf"], ["type", "number", "readonly", "", "formControlName", "ITDProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITD Difference"], ["formControlName", "ITDStatusId", "placeholder", "Status", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo"], ["type", "number", "formControlName", "SCGBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "SCG Budget", 3, "blur"], ["type", "number", "formControlName", "SCGActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "SCG Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "SCGProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "SCG Difference"], ["formControlName", "SCGStatusId", "placeholder", "Status", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo"], [1, "mb-3", "col-md-6", "col-lg-6", "col-sm-12"], [1, "col-md-4", "col-lg-4", "col-sm-12", "mb-2", "mb-lg-0", "mb-md-0"], ["type", "number", "formControlName", "ITCBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITC Budget", 3, "blur"], ["type", "number", "formControlName", "ITCActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITC Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "ITCProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITC Difference"], ["for", "ITBBudget", 1, "pl-0", "form-label", "col-12"], ["type", "number", "formControlName", "ITBBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITB Budget", 3, "blur"], ["type", "number", "formControlName", "ITBActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITB Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "ITBProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "ITB Difference"], ["type", "number", "formControlName", "SHABudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "SHA Budget", 3, "blur"], ["type", "number", "formControlName", "SHAActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "SHA Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "SHAProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "SHA Difference"], ["type", "number", "formControlName", "HCEBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCE Budget", 3, "blur"], ["type", "number", "formControlName", "HCEActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCE Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "HCEProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCE Difference"], ["type", "number", "formControlName", "HCCBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCC Budget", 3, "blur"], ["type", "number", "formControlName", "HCCActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCC Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "HCCProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCC Difference"], ["type", "number", "formControlName", "HCXBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCX Budget", 3, "blur"], ["type", "number", "formControlName", "HCXActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCX Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "HCXProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCX Difference"], ["type", "number", "formControlName", "HCBBudget", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCB Budget", 3, "blur"], ["type", "number", "formControlName", "HCBActual", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCB Actual", 3, "blur"], ["type", "number", "readonly", "", "formControlName", "HCBProvisions", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "HCB Difference"], ["label", "Fourth step", 3, "stepControl"], ["for", "BudgetedDetailsDate", 1, "form-label"], ["nbInput", "", "formControlName", "BudgetedDetailsDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "nbDatepicker"], ["dateTimePicker3", ""], ["for", "VesselVoyageCompletingDate", 1, "form-label"], ["nbInput", "", "formControlName", "VesselVoyageCompletingDate", "placeholder", "Pick Date", "fullWidth", "", "fieldSize", "medium", 3, "nbDatepicker"], ["dateTimePicker4", ""], ["type", "text", "row", "5", "formControlName", "Remark", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Enter Remarks"], ["type", "text", "row", "5", "formControlName", "FinalRemarks", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "placeholder", "Enter Final Remarks"], ["nbButton", "", "type", "submit", "status", "primary"], [3, "value"], [3, "ngClass"]],
  template: function AddVoyageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nb-card", 0)(1, "div")(2, "nb-card-header", 1)(3, "div")(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div")(7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddVoyageComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "nb-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "nb-card-body", 4)(10, "nb-stepper", null, 5)(12, "nb-step", 6)(13, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function AddVoyageComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onFirstSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Vessel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function AddVoyageComponent_Template_ng_select_change_20_listener() {
        return ctx.vesselDataAPI();
      })("keyup", function AddVoyageComponent_Template_ng_select_keyup_20_listener($event) {
        return ctx.getVesselListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, AddVoyageComponent_ng_option_21_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, AddVoyageComponent_small_22_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 9)(24, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "LTC/MUR");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "ng-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, AddVoyageComponent_ng_option_29_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, AddVoyageComponent_small_30_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 9)(32, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Owner Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ng-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](37, AddVoyageComponent_ng_option_37_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, AddVoyageComponent_small_38_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 9)(40, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Trade Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "ng-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, AddVoyageComponent_ng_option_45_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, AddVoyageComponent_small_46_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 9)(48, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Voyage Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](52, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, AddVoyageComponent_small_53_Template, 4, 3, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 9)(55, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "ng-select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function AddVoyageComponent_Template_ng_select_change_59_listener($event) {
        return ctx.onSelectStatus($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, AddVoyageComponent_ng_option_60_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, AddVoyageComponent_small_61_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "div", 9)(63, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64, "Voyage Commence Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](67, "br")(68, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "nb-datepicker", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateChange", function AddVoyageComponent_Template_nb_datepicker_dateChange_69_listener($event) {
        return ctx.changeOffsetTimeZone("VoyageCommenceDate", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, AddVoyageComponent_small_71_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 9)(73, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Voyage Completing date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](77, "br")(78, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "nb-datepicker", 24, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateChange", function AddVoyageComponent_Template_nb_datepicker_dateChange_79_listener($event) {
        return ctx.changeOffsetTimeZone("VesselVoyageCompletedDate", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](81, AddVoyageComponent_small_81_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](82, AddVoyageComponent_small_82_Template, 2, 0, "small", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 9)(84, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, "Fixture");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](88, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](89, AddVoyageComponent_small_89_Template, 5, 4, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "div", 32)(91, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddVoyageComponent_Template_button_click_91_listener() {
        return ctx.onFirstSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "nb-step", 34)(94, "form", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function AddVoyageComponent_Template_form_ngSubmit_94_listener() {
        return ctx.onSecondSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 8)(96, "div", 9)(97, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](98, "Opr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "ng-select", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function AddVoyageComponent_Template_ng_select_keyup_101_listener($event) {
        return ctx.getOprTypeListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](102, AddVoyageComponent_ng_option_102_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](103, AddVoyageComponent_small_103_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 9)(105, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "Load Port");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "ng-select", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function AddVoyageComponent_Template_ng_select_keyup_109_listener($event) {
        return ctx.getPortList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](110, AddVoyageComponent_ng_option_110_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](111, AddVoyageComponent_small_111_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 9)(113, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114, "Discharge Port");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "ng-select", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function AddVoyageComponent_Template_ng_select_keyup_117_listener($event) {
        return ctx.getPortList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](118, AddVoyageComponent_ng_option_118_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](119, AddVoyageComponent_small_119_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "div", 9)(121, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122, "Cargo To Load");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "ng-select", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function AddVoyageComponent_Template_ng_select_keyup_125_listener($event) {
        return ctx.getCargoListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](126, AddVoyageComponent_ng_option_126_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](127, AddVoyageComponent_small_127_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "div", 9)(129, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](130, "Previous Cargo");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](132, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "ng-select", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function AddVoyageComponent_Template_ng_select_keyup_133_listener($event) {
        return ctx.getCargoListRecords(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](134, AddVoyageComponent_ng_option_134_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](135, AddVoyageComponent_small_135_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](136, "div", 9)(137, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](138, "Hold Pass/Fail");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](140, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "ng-select", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](142, AddVoyageComponent_ng_option_142_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](143, AddVoyageComponent_small_143_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](144, "div", 32)(145, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](146, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](147, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddVoyageComponent_Template_button_click_147_listener() {
        return ctx.onSecondSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "nb-step", 49)(150, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function AddVoyageComponent_Template_form_ngSubmit_150_listener() {
        return ctx.onThirdSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "div", 8)(152, "div", 50)(153, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, "Total Cleaning Costs");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "div", 52)(156, "div", 53)(157, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_157_listener() {
        return ctx.calculate("TCC");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "div", 53)(159, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_159_listener() {
        return ctx.calculate("TCC");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](160, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](161, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "div", 50)(163, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](164, "Idle Time Days For Cleaning (ITD)");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "div", 52)(168, "div", 59)(169, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_169_listener() {
        return ctx.calculate("ITD");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](170, AddVoyageComponent_small_170_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](171, "div", 59)(172, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_172_listener() {
        return ctx.calculate("ITD");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](173, AddVoyageComponent_small_173_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](174, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](175, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](176, AddVoyageComponent_small_176_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "div", 59)(178, "ng-select", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](179, AddVoyageComponent_ng_option_179_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](180, AddVoyageComponent_small_180_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](181, "div", 50)(182, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](183, "Shore Cleaning Gang (SCG)");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](184, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](185, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](186, "div", 52)(187, "div", 59)(188, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_188_listener() {
        return ctx.calculate("SCG");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](189, AddVoyageComponent_small_189_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](190, "div", 59)(191, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_191_listener() {
        return ctx.calculate("SCG");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](192, AddVoyageComponent_small_192_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](193, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](194, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](195, AddVoyageComponent_small_195_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](196, "div", 59)(197, "ng-select", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](198, AddVoyageComponent_ng_option_198_Template, 2, 2, "ng-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](199, AddVoyageComponent_small_199_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](200, "div", 69)(201, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](202, "Idle Time Cost (Fixture Costs) (ITC)");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](203, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](204, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "div", 52)(206, "div", 70)(207, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_207_listener() {
        return ctx.calculate("ITC");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](208, AddVoyageComponent_small_208_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](209, "div", 70)(210, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_210_listener() {
        return ctx.calculate("ITC");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](211, AddVoyageComponent_small_211_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](212, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](213, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](214, AddVoyageComponent_small_214_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](215, "div", 69)(216, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](217, "Idle Time Bunker $ (LSF+LSG) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](218, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](219, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](220, "div", 52)(221, "div", 70)(222, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_222_listener() {
        return ctx.calculate("ITB");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](223, AddVoyageComponent_small_223_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](224, "div", 70)(225, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_225_listener() {
        return ctx.calculate("ITB");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](226, AddVoyageComponent_small_226_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](227, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](228, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](229, AddVoyageComponent_small_229_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](230, "div", 69)(231, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](232, "Hold Advisory by Shore & Roving Supdt Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](233, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](234, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](235, "div", 52)(236, "div", 70)(237, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_237_listener() {
        return ctx.calculate("SHA");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](238, AddVoyageComponent_small_238_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](239, "div", 70)(240, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_240_listener() {
        return ctx.calculate("SHA");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](241, AddVoyageComponent_small_241_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](242, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](243, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](244, AddVoyageComponent_small_244_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](245, "div", 69)(246, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](247, "Hold Cleaning Equipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](248, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](249, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](250, "div", 52)(251, "div", 70)(252, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_252_listener() {
        return ctx.calculate("HCE");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](253, AddVoyageComponent_small_253_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](254, "div", 70)(255, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_255_listener() {
        return ctx.calculate("HCE");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](256, AddVoyageComponent_small_256_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](258, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](259, AddVoyageComponent_small_259_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](260, "div", 69)(261, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](262, "Hold Cleaning Chemicals");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](263, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](265, "div", 52)(266, "div", 70)(267, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_267_listener() {
        return ctx.calculate("HCC");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](268, AddVoyageComponent_small_268_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](269, "div", 70)(270, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_270_listener() {
        return ctx.calculate("HCC");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](271, AddVoyageComponent_small_271_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](272, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](273, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](274, AddVoyageComponent_small_274_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](275, "div", 69)(276, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](277, "Hold Cleaning Consumables");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](278, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](279, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](280, "div", 52)(281, "div", 70)(282, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_282_listener() {
        return ctx.calculate("HCX");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](283, AddVoyageComponent_small_283_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](284, "div", 70)(285, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_285_listener() {
        return ctx.calculate("HCX");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](286, AddVoyageComponent_small_286_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](287, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](288, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](289, AddVoyageComponent_small_289_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](290, "div", 69)(291, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](292, "Additional Crew Bonus $");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](293, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](294, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](295, "div", 52)(296, "div", 70)(297, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_297_listener() {
        return ctx.calculate("HCB");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](298, AddVoyageComponent_small_298_Template, 3, 2, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "div", 70)(300, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddVoyageComponent_Template_input_blur_300_listener() {
        return ctx.calculate("HCB");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](301, AddVoyageComponent_small_301_Template, 3, 3, "small", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](302, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](303, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](304, AddVoyageComponent_small_304_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](305, "div", 32)(306, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](308, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddVoyageComponent_Template_button_click_308_listener() {
        return ctx.onThirdSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](309, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](310, "nb-step", 93)(311, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function AddVoyageComponent_Template_form_ngSubmit_311_listener() {
        return ctx.onfourthSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](312, "div", 8)(313, "div", 69)(314, "label", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](315, "Budgeted details date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](316, "br")(317, "input", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](318, "nb-datepicker", 24, 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateChange", function AddVoyageComponent_Template_nb_datepicker_dateChange_318_listener($event) {
        return ctx.changeOffsetTimeZone("BudgetedDetailsDate", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](320, "div", 69)(321, "label", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](322, "Veson Entry Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](323, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](324, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](325, "br")(326, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](327, "nb-datepicker", 24, 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateChange", function AddVoyageComponent_Template_nb_datepicker_dateChange_327_listener($event) {
        return ctx.changeOffsetTimeZone("VesselVoyageCompletingDate", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](329, AddVoyageComponent_small_329_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](330, "div", 69)(331, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](332, "Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](333, "textarea", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](334, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](335, AddVoyageComponent_small_335_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](336, "div", 69)(337, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](338, "Final Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](339, "textarea", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](340, AddVoyageComponent_small_340_Template, 2, 1, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](341, "div", 32)(342, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](343, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](344, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](345, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](70);
      var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](80);
      var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](319);
      var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](328);
      var tmp_5_0;
      var tmp_8_0;
      var tmp_11_0;
      var tmp_14_0;
      var tmp_15_0;
      var tmp_18_0;
      var tmp_20_0;
      var tmp_22_0;
      var tmp_24_0;
      var tmp_29_0;
      var tmp_33_0;
      var tmp_37_0;
      var tmp_41_0;
      var tmp_45_0;
      var tmp_48_0;
      var tmp_51_0;
      var tmp_52_0;
      var tmp_53_0;
      var tmp_56_0;
      var tmp_57_0;
      var tmp_58_0;
      var tmp_59_0;
      var tmp_62_0;
      var tmp_63_0;
      var tmp_64_0;
      var tmp_65_0;
      var tmp_66_0;
      var tmp_67_0;
      var tmp_68_0;
      var tmp_69_0;
      var tmp_70_0;
      var tmp_71_0;
      var tmp_72_0;
      var tmp_73_0;
      var tmp_74_0;
      var tmp_75_0;
      var tmp_76_0;
      var tmp_77_0;
      var tmp_78_0;
      var tmp_79_0;
      var tmp_80_0;
      var tmp_81_0;
      var tmp_82_0;
      var tmp_83_0;
      var tmp_88_0;
      var tmp_89_0;
      var tmp_90_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx.formTitle, " Voyage Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.firstForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.firstForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.vesselDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.firstForm.get("VesselId")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.firstForm.get("VesselId")) == null ? null : tmp_5_0.touched) || ((tmp_5_0 = ctx.firstForm.get("VesselId")) == null ? null : tmp_5_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.LtcMurList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.firstForm.get("LTCMURId")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.firstForm.get("LTCMURId")) == null ? null : tmp_8_0.touched) || ((tmp_8_0 = ctx.firstForm.get("LTCMURId")) == null ? null : tmp_8_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.OwnerNameList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.firstForm.get("OwnerId")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.firstForm.get("OwnerId")) == null ? null : tmp_11_0.touched) || ((tmp_11_0 = ctx.firstForm.get("OwnerId")) == null ? null : tmp_11_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.TradeAreaList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.firstForm.get("TradeAreaId")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.firstForm.get("TradeAreaId")) == null ? null : tmp_14_0.touched) || ((tmp_14_0 = ctx.firstForm.get("TradeAreaId")) == null ? null : tmp_14_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.firstForm.get("VayageNo")) == null ? null : tmp_15_0.invalid) && (((tmp_15_0 = ctx.firstForm.get("VayageNo")) == null ? null : tmp_15_0.touched) || ((tmp_15_0 = ctx.firstForm.get("VayageNo")) == null ? null : tmp_15_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.statusDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.firstForm.get("StatusId")) == null ? null : tmp_18_0.invalid) && (((tmp_18_0 = ctx.firstForm.get("StatusId")) == null ? null : tmp_18_0.touched) || ((tmp_18_0 = ctx.firstForm.get("StatusId")) == null ? null : tmp_18_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nbDatepicker", _r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.firstForm.get("VoyageCommenceDate")) == null ? null : tmp_20_0.invalid) && (((tmp_20_0 = ctx.firstForm.get("VoyageCommenceDate")) == null ? null : tmp_20_0.touched) || ((tmp_20_0 = ctx.firstForm.get("VoyageCommenceDate")) == null ? null : tmp_20_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nbDatepicker", _r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.firstForm.get("VesselVoyageCompletedDate")) == null ? null : tmp_22_0.invalid) && (((tmp_22_0 = ctx.firstForm.get("VesselVoyageCompletedDate")) == null ? null : tmp_22_0.touched) || ((tmp_22_0 = ctx.firstForm.get("VesselVoyageCompletedDate")) == null ? null : tmp_22_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx.firstForm.get("VesselVoyageCompletedDate").value === "" || ctx.firstForm.get("VesselVoyageCompletedDate").value === null) && (ctx.firstForm.get("VesselVoyageCompletedDate").touched || ctx.firstForm.get("VesselVoyageCompletedDate").dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.firstForm.get("Fixture")) == null ? null : tmp_24_0.invalid) && (((tmp_24_0 = ctx.firstForm.get("Fixture")) == null ? null : tmp_24_0.touched) || ((tmp_24_0 = ctx.firstForm.get("Fixture")) == null ? null : tmp_24_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.secondForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.secondForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.oprDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_29_0 = ctx.secondForm.get("OprTypeId")) == null ? null : tmp_29_0.invalid) && (((tmp_29_0 = ctx.secondForm.get("OprTypeId")) == null ? null : tmp_29_0.touched) || ((tmp_29_0 = ctx.secondForm.get("OprTypeId")) == null ? null : tmp_29_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("multiple", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.portDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_33_0 = ctx.secondForm.get("LoadToPort")) == null ? null : tmp_33_0.invalid) && (((tmp_33_0 = ctx.secondForm.get("LoadToPort")) == null ? null : tmp_33_0.touched) || ((tmp_33_0 = ctx.secondForm.get("LoadToPort")) == null ? null : tmp_33_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("multiple", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.portDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_37_0 = ctx.secondForm.get("DischargePort")) == null ? null : tmp_37_0.invalid) && (((tmp_37_0 = ctx.secondForm.get("DischargePort")) == null ? null : tmp_37_0.touched) || ((tmp_37_0 = ctx.secondForm.get("DischargePort")) == null ? null : tmp_37_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("multiple", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.cargoDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_41_0 = ctx.secondForm.get("CargotoLoad")) == null ? null : tmp_41_0.invalid) && (((tmp_41_0 = ctx.secondForm.get("CargotoLoad")) == null ? null : tmp_41_0.touched) || ((tmp_41_0 = ctx.secondForm.get("CargotoLoad")) == null ? null : tmp_41_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("multiple", true)("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.cargoDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_45_0 = ctx.secondForm.get("PreviousCargo")) == null ? null : tmp_45_0.invalid) && (((tmp_45_0 = ctx.secondForm.get("PreviousCargo")) == null ? null : tmp_45_0.touched) || ((tmp_45_0 = ctx.secondForm.get("PreviousCargo")) == null ? null : tmp_45_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.holdPassList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_48_0 = ctx.secondForm.get("HoldPassId")) == null ? null : tmp_48_0.invalid) && (((tmp_48_0 = ctx.secondForm.get("HoldPassId")) == null ? null : tmp_48_0.touched) || ((tmp_48_0 = ctx.secondForm.get("HoldPassId")) == null ? null : tmp_48_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.thirdForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.thirdForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_51_0 = ctx.thirdForm.get("ITDBudget")) == null ? null : tmp_51_0.invalid) && (((tmp_51_0 = ctx.thirdForm.get("ITDBudget")) == null ? null : tmp_51_0.touched) || ((tmp_51_0 = ctx.thirdForm.get("ITDBudget")) == null ? null : tmp_51_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_52_0 = ctx.thirdForm.get("ITDActual")) == null ? null : tmp_52_0.invalid) && (((tmp_52_0 = ctx.thirdForm.get("ITDActual")) == null ? null : tmp_52_0.touched) || ((tmp_52_0 = ctx.thirdForm.get("ITDActual")) == null ? null : tmp_52_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_53_0 = ctx.thirdForm.get("ITDProvisions")) == null ? null : tmp_53_0.invalid) && (((tmp_53_0 = ctx.thirdForm.get("ITDProvisions")) == null ? null : tmp_53_0.touched) || ((tmp_53_0 = ctx.thirdForm.get("ITDProvisions")) == null ? null : tmp_53_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.PlanStatusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_56_0 = ctx.thirdForm.get("ITDStatusId")) == null ? null : tmp_56_0.invalid) && (((tmp_56_0 = ctx.thirdForm.get("ITDStatusId")) == null ? null : tmp_56_0.touched) || ((tmp_56_0 = ctx.thirdForm.get("ITDStatusId")) == null ? null : tmp_56_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_57_0 = ctx.thirdForm.get("SCGBudget")) == null ? null : tmp_57_0.invalid) && (((tmp_57_0 = ctx.thirdForm.get("SCGBudget")) == null ? null : tmp_57_0.touched) || ((tmp_57_0 = ctx.thirdForm.get("SCGBudget")) == null ? null : tmp_57_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_58_0 = ctx.thirdForm.get("SCGActual")) == null ? null : tmp_58_0.invalid) && (((tmp_58_0 = ctx.thirdForm.get("SCGActual")) == null ? null : tmp_58_0.touched) || ((tmp_58_0 = ctx.thirdForm.get("SCGActual")) == null ? null : tmp_58_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_59_0 = ctx.thirdForm.get("SCGProvisions")) == null ? null : tmp_59_0.invalid) && (((tmp_59_0 = ctx.thirdForm.get("SCGProvisions")) == null ? null : tmp_59_0.touched) || ((tmp_59_0 = ctx.thirdForm.get("SCGProvisions")) == null ? null : tmp_59_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.PlanStatusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_62_0 = ctx.thirdForm.get("SCGStatusId")) == null ? null : tmp_62_0.invalid) && (((tmp_62_0 = ctx.thirdForm.get("SCGStatusId")) == null ? null : tmp_62_0.touched) || ((tmp_62_0 = ctx.thirdForm.get("SCGStatusId")) == null ? null : tmp_62_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_63_0 = ctx.thirdForm.get("ITCBudget")) == null ? null : tmp_63_0.invalid) && (((tmp_63_0 = ctx.thirdForm.get("ITCBudget")) == null ? null : tmp_63_0.touched) || ((tmp_63_0 = ctx.thirdForm.get("ITCBudget")) == null ? null : tmp_63_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_64_0 = ctx.thirdForm.get("ITCActual")) == null ? null : tmp_64_0.invalid) && (((tmp_64_0 = ctx.thirdForm.get("ITCActual")) == null ? null : tmp_64_0.touched) || ((tmp_64_0 = ctx.thirdForm.get("ITCActual")) == null ? null : tmp_64_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_65_0 = ctx.thirdForm.get("ITCProvisions")) == null ? null : tmp_65_0.invalid) && (((tmp_65_0 = ctx.thirdForm.get("ITCProvisions")) == null ? null : tmp_65_0.touched) || ((tmp_65_0 = ctx.thirdForm.get("ITCProvisions")) == null ? null : tmp_65_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_66_0 = ctx.thirdForm.get("ITBBudget")) == null ? null : tmp_66_0.invalid) && (((tmp_66_0 = ctx.thirdForm.get("ITBBudget")) == null ? null : tmp_66_0.touched) || ((tmp_66_0 = ctx.thirdForm.get("ITBBudget")) == null ? null : tmp_66_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_67_0 = ctx.thirdForm.get("ITBActual")) == null ? null : tmp_67_0.invalid) && (((tmp_67_0 = ctx.thirdForm.get("ITBActual")) == null ? null : tmp_67_0.touched) || ((tmp_67_0 = ctx.thirdForm.get("ITBActual")) == null ? null : tmp_67_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_68_0 = ctx.thirdForm.get("ITBProvisions")) == null ? null : tmp_68_0.invalid) && (((tmp_68_0 = ctx.thirdForm.get("ITBProvisions")) == null ? null : tmp_68_0.touched) || ((tmp_68_0 = ctx.thirdForm.get("ITBProvisions")) == null ? null : tmp_68_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_69_0 = ctx.thirdForm.get("SHABudget")) == null ? null : tmp_69_0.invalid) && (((tmp_69_0 = ctx.thirdForm.get("SHABudget")) == null ? null : tmp_69_0.touched) || ((tmp_69_0 = ctx.thirdForm.get("SHABudget")) == null ? null : tmp_69_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_70_0 = ctx.thirdForm.get("SHAActual")) == null ? null : tmp_70_0.invalid) && (((tmp_70_0 = ctx.thirdForm.get("SHAActual")) == null ? null : tmp_70_0.touched) || ((tmp_70_0 = ctx.thirdForm.get("SHAActual")) == null ? null : tmp_70_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_71_0 = ctx.thirdForm.get("SHAProvisions")) == null ? null : tmp_71_0.invalid) && (((tmp_71_0 = ctx.thirdForm.get("SHAProvisions")) == null ? null : tmp_71_0.touched) || ((tmp_71_0 = ctx.thirdForm.get("SHAProvisions")) == null ? null : tmp_71_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_72_0 = ctx.thirdForm.get("HCEBudget")) == null ? null : tmp_72_0.invalid) && (((tmp_72_0 = ctx.thirdForm.get("HCEBudget")) == null ? null : tmp_72_0.touched) || ((tmp_72_0 = ctx.thirdForm.get("HCEBudget")) == null ? null : tmp_72_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_73_0 = ctx.thirdForm.get("HCEActual")) == null ? null : tmp_73_0.invalid) && (((tmp_73_0 = ctx.thirdForm.get("HCEActual")) == null ? null : tmp_73_0.touched) || ((tmp_73_0 = ctx.thirdForm.get("HCEActual")) == null ? null : tmp_73_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_74_0 = ctx.thirdForm.get("HCEProvisions")) == null ? null : tmp_74_0.invalid) && (((tmp_74_0 = ctx.thirdForm.get("HCEProvisions")) == null ? null : tmp_74_0.touched) || ((tmp_74_0 = ctx.thirdForm.get("HCEProvisions")) == null ? null : tmp_74_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_75_0 = ctx.thirdForm.get("HCCBudget")) == null ? null : tmp_75_0.invalid) && (((tmp_75_0 = ctx.thirdForm.get("HCCBudget")) == null ? null : tmp_75_0.touched) || ((tmp_75_0 = ctx.thirdForm.get("HCCBudget")) == null ? null : tmp_75_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_76_0 = ctx.thirdForm.get("HCCActual")) == null ? null : tmp_76_0.invalid) && (((tmp_76_0 = ctx.thirdForm.get("HCCActual")) == null ? null : tmp_76_0.touched) || ((tmp_76_0 = ctx.thirdForm.get("HCCActual")) == null ? null : tmp_76_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_77_0 = ctx.thirdForm.get("HCCProvisions")) == null ? null : tmp_77_0.invalid) && (((tmp_77_0 = ctx.thirdForm.get("HCCProvisions")) == null ? null : tmp_77_0.touched) || ((tmp_77_0 = ctx.thirdForm.get("HCCProvisions")) == null ? null : tmp_77_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_78_0 = ctx.thirdForm.get("HCXBudget")) == null ? null : tmp_78_0.invalid) && (((tmp_78_0 = ctx.thirdForm.get("HCXBudget")) == null ? null : tmp_78_0.touched) || ((tmp_78_0 = ctx.thirdForm.get("HCXBudget")) == null ? null : tmp_78_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_79_0 = ctx.thirdForm.get("HCXActual")) == null ? null : tmp_79_0.invalid) && (((tmp_79_0 = ctx.thirdForm.get("HCXActual")) == null ? null : tmp_79_0.touched) || ((tmp_79_0 = ctx.thirdForm.get("HCXActual")) == null ? null : tmp_79_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_80_0 = ctx.thirdForm.get("HCXProvisions")) == null ? null : tmp_80_0.invalid) && (((tmp_80_0 = ctx.thirdForm.get("HCXProvisions")) == null ? null : tmp_80_0.touched) || ((tmp_80_0 = ctx.thirdForm.get("HCXProvisions")) == null ? null : tmp_80_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_81_0 = ctx.thirdForm.get("HCBBudget")) == null ? null : tmp_81_0.invalid) && (((tmp_81_0 = ctx.thirdForm.get("HCBBudget")) == null ? null : tmp_81_0.touched) || ((tmp_81_0 = ctx.thirdForm.get("HCBBudget")) == null ? null : tmp_81_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_82_0 = ctx.thirdForm.get("HCBActual")) == null ? null : tmp_82_0.invalid) && (((tmp_82_0 = ctx.thirdForm.get("HCBActual")) == null ? null : tmp_82_0.touched) || ((tmp_82_0 = ctx.thirdForm.get("HCBActual")) == null ? null : tmp_82_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_83_0 = ctx.thirdForm.get("HCBProvisions")) == null ? null : tmp_83_0.invalid) && (((tmp_83_0 = ctx.thirdForm.get("HCBProvisions")) == null ? null : tmp_83_0.touched) || ((tmp_83_0 = ctx.thirdForm.get("HCBProvisions")) == null ? null : tmp_83_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.fourthForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.fourthForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nbDatepicker", _r61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nbDatepicker", _r62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_88_0 = ctx.fourthForm.get("VesselVoyageCompletingDate")) == null ? null : tmp_88_0.invalid) && (((tmp_88_0 = ctx.fourthForm.get("VesselVoyageCompletingDate")) == null ? null : tmp_88_0.touched) || ((tmp_88_0 = ctx.fourthForm.get("VesselVoyageCompletingDate")) == null ? null : tmp_88_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_89_0 = ctx.fourthForm.get("Remark")) == null ? null : tmp_89_0.invalid) && (((tmp_89_0 = ctx.fourthForm.get("Remark")) == null ? null : tmp_89_0.touched) || ((tmp_89_0 = ctx.fourthForm.get("Remark")) == null ? null : tmp_89_0.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_90_0 = ctx.fourthForm.get("FinalRemarks")) == null ? null : tmp_90_0.invalid) && (((tmp_90_0 = ctx.fourthForm.get("FinalRemarks")) == null ? null : tmp_90_0.touched) || ((tmp_90_0 = ctx.fourthForm.get("FinalRemarks")) == null ? null : tmp_90_0.dirty)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbStepperComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbStepComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbStepperNextDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbStepperPreviousDirective],
  styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 70vw;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@media screen and (max-width: 768px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 90vw;\n    max-height: 80vh;\n    overflow-y: auto;\n  }\n}\n@media screen and (max-width: 480px) {\n  nb-card[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-height: 80vh;\n    overflow-y: auto;\n  }\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}"]
});

/***/ }),

/***/ 72780:
/*!************************************************************!*\
  !*** ./src/app/pages/voyage/voyage-list/voyage.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoyageService": () => (/* binding */ VoyageService)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var VoyageService = /*#__PURE__*/function () {
  function VoyageService(http) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VoyageService);
    this.http = http;
    this.voyageUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
    this.voyageDataReports = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApplicationUrl;
    this.Voyage = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
    this.productNames = ["Bamboo Watch", "Black Watch", "Blue Band", "Blue T-Shirt", "Bracelet", "Brown Purse", "Chakra Bracelet", "Galaxy Earrings", "Game Controller", "Gaming Set", "Gold Phone Case", "Green Earbuds", "Green T-Shirt", "Grey T-Shirt", "Headphones", "Light Green T-Shirt", "Lime Band", "Mini Speakers", "Painted Phone Case", "Pink Band", "Pink Purse", "Purple Band", "Purple Gemstone Necklace", "Purple T-Shirt", "Shoes", "Sneakers", "Teal T-Shirt", "Yellow Earbuds", "Yoga Mat", "Yoga Set"];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VoyageService, [{
    key: "addVoyageDetail",
    value: function addVoyageDetail(voyageData) {
      return this.http.post(this.voyageUrl + 'InsertVoyage', voyageData);
    }
  }, {
    key: "updateVoyageDetail",
    value: function updateVoyageDetail(voyageData) {
      ////debugger;
      return this.http.put(this.voyageUrl + 'UpdateVoyage', voyageData);
    }
  }, {
    key: "deleteVoyage",
    value: function deleteVoyage(voyageData) {
      ////debugger;
      return this.http["delete"](this.voyageUrl + 'DeleteVoyage/' + voyageData.VoyageId);
    }
  }, {
    key: "getCompletedList",
    value: function getCompletedList(cPage, nRows, filter, columnFilter, orderBy) {
      // &filter=${filter/}
      return this.http.get(this.voyageUrl + "FilterByCompleted?c=".concat(cPage, "&p=").concat(nRows, "&filter=").concat(filter, "&filterColumn=").concat(columnFilter, "&orderBy=").concat(orderBy));
    }
  }, {
    key: "getCommencedList",
    value: function getCommencedList(cPage, nRows, filter, columnFilter, orderBy) {
      return this.http.get(this.voyageUrl + "FilterByStatus?c=".concat(cPage, "&p=").concat(nRows, "&filter=").concat(filter, "&filterColumn=").concat(columnFilter, "&orderBy=").concat(orderBy));
    }
  }, {
    key: "getVoyageList",
    value: function getVoyageList() {
      return this.http.get(this.voyageUrl + 'VoyageList');
    }
  }, {
    key: "getProductsSmall",
    value: function getProductsSmall() {
      return this.http.get('assets/products-small.json').toPromise().then(function (res) {
        return res.data;
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return this.http.get('assets/products.json').toPromise().then(function (res) {
        return res.data;
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getProductsWithOrdersSmall",
    value: function getProductsWithOrdersSmall() {
      return this.http.get('assets/products-orders-small.json').toPromise().then(function (res) {
        return res.data;
      }).then(function (data) {
        return data;
      });
    }
    //   generatePrduct(): Voyage {
    //       const product: Voyage =  {
    //           id: this.generateId(),
    //           name: this.generateName(),
    //           description: "Product Description",
    //           price: this.generatePrice(),
    //           quantity: this.generateQuantity(),
    //           category: "Product Category",
    //           inventoryVoyage: this.generateVoyage(),
    //           rating: this.generateRating()
    //       };
    //       product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
    //       return product;
    //   }
  }, {
    key: "generateId",
    value: function generateId() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  }, {
    key: "generateName",
    value: function generateName() {
      return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }
  }, {
    key: "generatePrice",
    value: function generatePrice() {
      return Math.floor(Math.random() * Math.floor(299) + 1);
    }
  }, {
    key: "generateQuantity",
    value: function generateQuantity() {
      return Math.floor(Math.random() * Math.floor(75) + 1);
    }
  }, {
    key: "generateVoyage",
    value: function generateVoyage() {
      return this.Voyage[Math.floor(Math.random() * Math.floor(3))];
    }
  }, {
    key: "generateRating",
    value: function generateRating() {
      return Math.floor(Math.random() * Math.floor(5) + 1);
    }
    // export interface Empty {
    //     LTCMURId:    number;
    //     LTCMURName:  string;
    //     CreatedDate: Date;
    //     UpdatedDate: Date;
    //     DeletedDate: Date;
    //     Active:      boolean;
    // }
  }, {
    key: "getLtcList",
    value: function getLtcList() {
      return this.http.get(this.voyageUrl + 'LTCMURList');
    }
  }, {
    key: "getOwnerNameList",
    value: function getOwnerNameList() {
      return this.http.get(this.voyageUrl + 'OwnerList');
    }
  }, {
    key: "getPlanStatusList",
    value: function getPlanStatusList() {
      return this.http.get(this.voyageUrl + 'PlanStatusList');
    }
  }, {
    key: "getTradeAreaList",
    value: function getTradeAreaList() {
      return this.http.get(this.voyageUrl + 'TradeAreaList');
    }
  }, {
    key: "getHoldPassList",
    value: function getHoldPassList() {
      return this.http.get(this.voyageUrl + 'HoldPassList');
    }
  }, {
    key: "getAllVoyageDataList",
    value: function getAllVoyageDataList() {
      return this.http.get(this.voyageDataReports + "v1/imos/reports/Hold%20Cleaning?apiToken=bf775b98e7850ad0a1186c9ef81155aa79e3df1024ce839be5e76280239225e2&filter=VesselName==\"AFRICAN%20ARROW\"");
    }
  }, {
    key: "getMergedVoyageList",
    value: function getMergedVoyageList(webId, DesktopId) {
      return this.http["delete"](this.voyageUrl + "MergedVoyage?voyageWebId=".concat(webId, "&voyageDesktopId=").concat(DesktopId));
    }
  }, {
    key: "getVoyageWebOfficeList",
    value: function getVoyageWebOfficeList(vesselId) {
      return this.http.get(this.voyageUrl + "VoyageWeb?vesselName=".concat(vesselId));
    }
  }, {
    key: "getVoyageDesktopList",
    value: function getVoyageDesktopList(vesselId) {
      return this.http.get(this.voyageUrl + "VoyageDesktop?vesselName=".concat(vesselId));
    }
  }, {
    key: "getMergedList",
    value: function getMergedList() {
      return this.http.get(this.voyageUrl + 'MergedVoyageList');
    }
  }]);
  return VoyageService;
}();
_class = VoyageService;
_class.ɵfac = function VoyageService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);