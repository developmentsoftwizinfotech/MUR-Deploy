"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_hold-cleaning-management_hold-cleaning-management_module_ts"],{

/***/ 80965:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hold-cleaning-management/hold-cleaning-list/hold-cleaning-list.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoldCleaningListComponent": () => (/* binding */ HoldCleaningListComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _app_pages_voyage_voyage_list_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/voyage/voyage-list/add-voyage/add-voyage.component */ 75702);
/* harmony import */ var _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/shared/dynamic-dialog/custom-error */ 47329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _app_pages_report_hold_cleaning_reports_hold_cleaning_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/report/hold-cleaning-reports/hold-cleaning-report.service */ 58028);
/* harmony import */ var _app_pages_settings_status_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-pages/settings/status/status.service */ 84819);
/* harmony import */ var _app_pages_settings_cargo_cargo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-pages/settings/cargo/cargo.service */ 62856);
/* harmony import */ var _app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-pages/settings/port/port.service */ 14239);
/* harmony import */ var _app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app-pages/voyage/voyage-list/voyage.service */ 72780);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ 12453);


var _class;




















var _c0 = ["dt"];
function HoldCleaningListComponent_ng_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r58.VesselName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r58.VesselName);
  }
}
function HoldCleaningListComponent_ng_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r59.PortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r59.PortName);
  }
}
function HoldCleaningListComponent_ng_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var option_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r60.CargoName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r60.CargoName);
  }
}
function HoldCleaningListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 29)(1, "span", 30)(2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function HoldCleaningListComponent_ng_template_32_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62);
      var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.dt1.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function HoldCleaningListComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Vessel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Cleaning Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Expected Completed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "p-sortIcon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Load Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "p-sortIcon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Cargo To Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "p-sortIcon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Previous Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HoldCleaningListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 45)(1, "td")(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td")(6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td")(11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td")(16, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td")(20, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td")(24, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td")(28, "div", 48)(29, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HoldCleaningListComponent_ng_template_34_Template_button_click_29_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r70);
      var product_r67 = restoredCtx.$implicit;
      var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r69.viewLog(product_r67.VoyageId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "ngx-skeleton-loader", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r64 = ctx.$implicit;
    var index_r66 = ctx.rowIndex;
    var product_r67 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pReorderableRow", index_r66)("pEditableRow", product_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", rowData_r64.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 22, rowData_r64.VoyageCommenceDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](13, 25, rowData_r64.VesselVoyageCompletingDate, "dd-MMM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", rowData_r64.LoadToPort, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", rowData_r64.CargoToLoad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", rowData_r64.PreviousCargo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === false ? "d-none" : "d-flex border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.checkListRecord === true ? "d-none" : "");
  }
}
function HoldCleaningListComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r8.emptymessage);
  }
}
function HoldCleaningListComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.selectedItem.VesselName);
  }
}
function HoldCleaningListComponent_p_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r10.selectedItem.LTCMURName);
  }
}
function HoldCleaningListComponent_p_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.selectedItem.OwnerName);
  }
}
function HoldCleaningListComponent_p_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r12.selectedItem.TradeAreaName);
  }
}
function HoldCleaningListComponent_p_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r13.selectedItem.VayageNo);
  }
}
function HoldCleaningListComponent_p_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ctx_r14.selectedItem.VoyageCommenceDate, "dd/MM/yyyy"), " ");
  }
}
function HoldCleaningListComponent_p_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ctx_r15.selectedItem.VesselVoyageCompletedDate, "dd/MM/yyyy"), " ");
  }
}
function HoldCleaningListComponent_p_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ctx_r16.selectedItem.VesselVoyageCompletingDate, "dd/MM/yyyy"), " ");
  }
}
function HoldCleaningListComponent_p_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r17.selectedItem.Fixture);
  }
}
function HoldCleaningListComponent_p_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r18.selectedItem.OprTypeName);
  }
}
function HoldCleaningListComponent_p_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r19.selectedItem.LoadToPortName);
  }
}
function HoldCleaningListComponent_p_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r20.selectedItem.DischargePortName);
  }
}
function HoldCleaningListComponent_p_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r21.selectedItem.CargoToLoadName);
  }
}
function HoldCleaningListComponent_p_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r22.selectedItem.PreviousCargoName);
  }
}
function HoldCleaningListComponent_p_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r23.selectedItem.HoldPassName);
  }
}
function HoldCleaningListComponent_p_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r24.selectedItem.TCCBudgetUSD);
  }
}
function HoldCleaningListComponent_p_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r25.selectedItem.TCCActual);
  }
}
function HoldCleaningListComponent_p_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r26.selectedItem.TCCBudgetUSD - ctx_r26.selectedItem.TCCActual, " ");
  }
}
function HoldCleaningListComponent_p_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r27.selectedItem.PlanStatusName);
  }
}
function HoldCleaningListComponent_p_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r28.selectedItem.ITDBudget);
  }
}
function HoldCleaningListComponent_p_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r29.selectedItem.ITDActual);
  }
}
function HoldCleaningListComponent_p_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r30.selectedItem.ITDBudget - ctx_r30.selectedItem.ITDActual, " ");
  }
}
function HoldCleaningListComponent_p_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r31.selectedItem.ITCBudget);
  }
}
function HoldCleaningListComponent_p_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r32.selectedItem.ITCActual);
  }
}
function HoldCleaningListComponent_p_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r33.selectedItem.ITCBudget - ctx_r33.selectedItem.ITCActual, " ");
  }
}
function HoldCleaningListComponent_p_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r34.selectedItem.ITBBudget);
  }
}
function HoldCleaningListComponent_p_173_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r35.selectedItem.ITBActual);
  }
}
function HoldCleaningListComponent_p_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r36.selectedItem.ITBBudget - ctx_r36.selectedItem.ITBActual, " ");
  }
}
function HoldCleaningListComponent_p_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r37.selectedItem.HCBBudget);
  }
}
function HoldCleaningListComponent_p_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r38.selectedItem.HCBActual);
  }
}
function HoldCleaningListComponent_p_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r39.selectedItem.HCBBudget - ctx_r39.selectedItem.HCBActual, " ");
  }
}
function HoldCleaningListComponent_p_198_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r40.selectedItem.PlanStatusName);
  }
}
function HoldCleaningListComponent_p_203_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r41.selectedItem.SCGBudget);
  }
}
function HoldCleaningListComponent_p_208_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r42.selectedItem.SCGActual);
  }
}
function HoldCleaningListComponent_p_213_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r43.selectedItem.SCGBudget - ctx_r43.selectedItem.SCGActual, " ");
  }
}
function HoldCleaningListComponent_p_218_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r44.selectedItem.SHABudget);
  }
}
function HoldCleaningListComponent_p_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r45.selectedItem.SHAActual);
  }
}
function HoldCleaningListComponent_p_228_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r46.selectedItem.SHABudget - ctx_r46.selectedItem.SHAActual, " ");
  }
}
function HoldCleaningListComponent_p_233_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r47.selectedItem.HCEBudget);
  }
}
function HoldCleaningListComponent_p_238_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r48.selectedItem.HCEActual);
  }
}
function HoldCleaningListComponent_p_243_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r49.selectedItem.HCEBudget - ctx_r49.selectedItem.HCEActual, " ");
  }
}
function HoldCleaningListComponent_p_248_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r50.selectedItem.HCCBudget);
  }
}
function HoldCleaningListComponent_p_253_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r51.selectedItem.HCCActual);
  }
}
function HoldCleaningListComponent_p_258_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r52.selectedItem.HCCBudget - ctx_r52.selectedItem.HCCActual, " ");
  }
}
function HoldCleaningListComponent_p_263_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r53.selectedItem.HCXBudget);
  }
}
function HoldCleaningListComponent_p_268_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r54.selectedItem.HCXActual);
  }
}
function HoldCleaningListComponent_p_273_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r55.selectedItem.HCXBudget - ctx_r55.selectedItem.HCXActual, " ");
  }
}
function HoldCleaningListComponent_ng_container_274_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Budgeted details date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 1, ctx_r71.selectedItem.BudgetedDetailsDate, "dd/MM/yyyy"));
  }
}
function HoldCleaningListComponent_ng_container_274_div_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r77.selectedItem.Remark);
  }
}
function HoldCleaningListComponent_ng_container_274_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HoldCleaningListComponent_ng_container_274_div_2_p_4_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r72.selectedItem);
  }
}
function HoldCleaningListComponent_ng_container_274_div_3_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r78.selectedItem.FinalRemarks);
  }
}
function HoldCleaningListComponent_ng_container_274_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Final Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HoldCleaningListComponent_ng_container_274_div_3_p_4_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r73.selectedItem);
  }
}
function HoldCleaningListComponent_ng_container_274_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Budgeted details date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HoldCleaningListComponent_ng_container_274_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HoldCleaningListComponent_ng_container_274_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "label")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Final Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HoldCleaningListComponent_ng_container_274_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HoldCleaningListComponent_ng_container_274_div_1_Template, 7, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HoldCleaningListComponent_ng_container_274_div_2_Template, 5, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HoldCleaningListComponent_ng_container_274_div_3_Template, 5, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HoldCleaningListComponent_ng_container_274_div_4_Template, 6, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, HoldCleaningListComponent_ng_container_274_div_5_Template, 6, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HoldCleaningListComponent_ng_container_274_div_6_Template, 6, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.selectedItem.BudgetedDetailsDate !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.selectedItem.Remark !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.selectedItem.FinalRemarks !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.selectedItem.BudgetedDetailsDate === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.selectedItem.Remark === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.selectedItem.FinalRemarks === "");
  }
}
function HoldCleaningListComponent_ng_template_275_Template(rf, ctx) {
  if (rf & 1) {
    var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HoldCleaningListComponent_ng_template_275_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r80);
      var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r79.dialogVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
var _c1 = function _c1() {
  return ["LoadToPort", "CargoToLoad", "VesselName", "VoyageCommenceDate"];
};
var _c2 = function _c2() {
  return {
    "min-width": "50rem"
  };
};
var _c3 = function _c3() {
  return {
    width: "75vw"
  };
};
var _c4 = function _c4() {
  return {
    height: "300px"
  };
};
var HoldCleaningListComponent = /*#__PURE__*/function () {
  function HoldCleaningListComponent(router, holdCleaningReportService, statusService, cargoService, portService, voyageService, vesselService, messageService, dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HoldCleaningListComponent);
    this.router = router;
    this.holdCleaningReportService = holdCleaningReportService;
    this.statusService = statusService;
    this.cargoService = cargoService;
    this.portService = portService;
    this.voyageService = voyageService;
    this.vesselService = vesselService;
    this.messageService = messageService;
    this.dialogService = dialogService;
    // @ViewChild('formpicker', { static: false, read: NbRangepickerComponent }) formpicker!: NbRangepickerComponent;
    this.checkListRecord = false;
    this.activeIndex = 0;
    this.columnCount = [1, 2, 3];
    this.customErrorStateMatcher = new _app_pages_shared_dynamic_dialog_custom_error__WEBPACK_IMPORTED_MODULE_3__.CustomStateError();
    this.holdStages = [{
      "VesselName": "xyz",
      "VoyageCommenceDate": "03/15/2023",
      "VesselVoyageCompletingDate": "03/15/2023",
      "LoadToPortName": "DEF",
      "CargoToLoadName": "rice",
      "PreviousCargoName": "iron ore",
      "holdStages": [{
        "name": "Hold 1",
        "progress": "90%",
        "stages": "DEF",
        "onSchedule": 1
      }, {
        "name": "Hold 2",
        "progress": "70%",
        "stages": "GHI",
        "onSchedule": 0
      }, {
        "name": "Hold 3",
        "progress": "85%",
        "stages": "JKL",
        "onSchedule": 1
      }]
    }];
    //new changes
    this.holdNewData = [{
      "id": "1000",
      "code": "f230fh0g3",
      "name": "Bamboo Watch",
      "description": "Product Description",
      "image": "bamboo-watch.jpg",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5,
      "orders": [{
        "id": "Hold 1",
        "productCode": "f230fh0g3",
        "date": "2020-09-13",
        "amount": 25,
        "quantity": 1,
        "customer": "This is Stage 1",
        "status": "PENDING"
      }, {
        "id": "Hold 3",
        "productCode": "f230fh0g3",
        "date": "2020-09-13",
        "amount": 45,
        "quantity": 1,
        "customer": "This is Stage 2",
        "status": "PENDING"
      }, {
        "id": "Hold 3",
        "productCode": "f230fh0g3",
        "date": "2020-09-13",
        "amount": 100,
        "quantity": 1,
        "customer": "This is Stage 3",
        "status": "Completed"
      }]
    }];
    this.dialogVisible = false;
    this.tableData = [{
      stage: 'Stage 1',
      progress: '80%',
      onSchedule: 'Yes'
    }, {
      stage: 'Stage 2',
      progress: '65%',
      onSchedule: 'No'
    }];
    this.dynamicHeaders = ['Current Stage', 'Progress %', 'On Schedule'];
    this.dynamicField = 'ITDActual';
    this.dynamicHeaderText = 'Hold 1';
    this.head = [{
      name: 1
    }, {
      name: 2
    }];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HoldCleaningListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      //data of hold cleaning on load
      // this.productService.getProductsWithOrdersSmall().then((data) => (this.holdNewData = data));
      this.getVoyageHoldCleaningList();
      this.checkListRecord = true;
      this.changeVoyageList("ONGOING");
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
        label: 'ONGOING'
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
      this.viewData();
      setTimeout(function () {
        _this.emptymessage = "No Record Found";
      }, 1000);
      this.getCargoList(1, 100, "");
      this.getVesselList(1, 100, "");
      this.getPortList(1, 100, "");
    }
    //function of new changes
  }, {
    key: "getSeverity",
    value: function getSeverity(status) {
      switch (status) {
        case 'INSTOCK':
          return 'success';
        case 'LOWSTOCK':
          return 'warning';
        case 'OUTOFSTOCK':
          return 'danger';
      }
    }
  }, {
    key: "getStatusSeverity",
    value: function getStatusSeverity(status) {
      switch (status) {
        case 'PENDING':
          return 'warning';
        case 'Completed':
          return 'success';
        case 'CANCELLED':
          return 'danger';
      }
    }
  }, {
    key: "filterBy",
    value: function filterBy(inputVal) {
      console.log(inputVal.target.value);
      var filterValue = inputVal.target.value;
      var status = this.status;
      // this.changeVoyageList(this.currentPage, this.totalRows, filterValue, status);
    }
  }, {
    key: "filterData",
    value: function filterData(selectedVal) {
      var _this2 = this;
      switch (selectedVal) {
        case 'vesselName':
          // this.vesselService.getVesselList().subscribe((res: Vessel) => {
          //   this.vesselDropdown = res
          // })
          this.vesselService.getVesselList(1, 100, '').subscribe(function (res) {
            debugger;
            _this2.vesselDropdown = res.VesselData;
          });
          break;
        case 'portName':
          // this.portService.changeVoyageList(1,100,'').subscribe((res: Port[]) => {
          //   this.port = res;
          // })
          this.portService.getPortList(1, 100, '').subscribe(function (res) {
            _this2.port = res.PortData;
          });
          break;
        case 'cargoName':
          this.cargoService.getCargoList(1, 10, "").subscribe(function (res) {
            _this2.cargo = res.CargoData;
          });
          break;
      }
    }
  }, {
    key: "getVesselList",
    value: function getVesselList(cPage, nRows, filter) {
      var _this3 = this;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        _this3.vesselDropdown = res.VesselData;
        console.log(_this3.vesselDropdown, " res.VesselData");
      });
    }
  }, {
    key: "getPortList",
    value: function getPortList(cPage, nRows, filter) {
      var _this4 = this;
      this.portService.getPortList(cPage, nRows, filter).subscribe(function (res) {
        _this4.port = res.PortData;
      });
      console.log(filter.target.value, "value");
    }
  }, {
    key: "getCargoList",
    value: function getCargoList(cPage, nRows, filter) {
      var _this5 = this;
      this.cargoService.getCargoList(cPage, nRows, filter).subscribe(function (res) {
        _this5.cargo = res.CargoData;
      });
    }
  }, {
    key: "viewData",
    value: function viewData() {
      var _this6 = this;
      // this.voyageService.getVoyageList().subscribe((res: Voyage[]) => {
      //   this.selectedItem = res
      // })
      // this.vesselService.getVesselList().subscribe((res: Vessel) => {
      //   this.vesselDropdown = res
      // })
      // this.portService.getPortList().subscribe((res: Port[]) => {
      //   this.port = res;
      // })
      // this.cargoService.getCargoList(1,100,"").subscribe((res: Cargo[]) => {
      //   ////debugger;
      //   this.cargo = res;
      //   console.log(this.cargo, "cargo")
      // })
      this.statusService.getStatusList().subscribe(function (res) {
        ////debugger;
        _this6.status = res;
        console.log(_this6.status, "status");
      });
    }
  }, {
    key: "holdCleaningList",
    value: function holdCleaningList(sara, data, data1) {}
  }, {
    key: "getVoyageHoldCleaningList",
    value: function getVoyageHoldCleaningList() {
      var _this7 = this;
      this.checkListRecord = false;
      this.holdCleaningReportService.getVoyageHoldCleaningList().subscribe(function (res) {
        _this7.holdCleaningVoyage = res;
        if (res == null) {
          _this7.emptymessage = 'No Record Found';
        } else {
          setTimeout(function () {
            _this7.checkListRecord = true;
          }, 200);
        }
        console.log(res, "voyageList");
      });
    }
  }, {
    key: "viewLog",
    value: function viewLog(voyageId) {
      console.log(voyageId, 'edit view');
      this.router.navigate(['/pages/report/hold-cleaning-reports', voyageId]);
    }
  }, {
    key: "filterGlobal",
    value: function filterGlobal(data) {
      //debugger
      console.log(data);
    }
  }, {
    key: "changeVoyageList",
    value: function changeVoyageList(value) {
      ////debugger;
      // if (value == "Completed") {
      //   this.activeIndex = 1
      //   this.voyageService.getCompletedList().subscribe((res: Voyage[]) => {
      //     this.voyageList = res
      //     console.log(res, "voyageList")
      //     if (res == null) {
      //       this.emptymessage = 'No Record Found'
      //     } else {
      //       setTimeout(() => { this.checkListRecord = true }, 200);
      //     }
      //   })
      // } else {
      //   this.activeIndex = 0
      //   this.voyageService.getCommencedList().subscribe((res: Voyage[]) => {
      //     this.voyageList = res
      //     console.log(res, "voyageList1")
      //     if (res == null) {
      //       this.emptymessage = 'No Record Found'
      //     } else {
      //       setTimeout(() => { this.checkListRecord = true }, 200);
      //     }
      //   })
      // }
    }
  }, {
    key: "exportExcel",
    value: function exportExcel() {
      var _this8 = this;
      __webpack_require__.e(/*! import() */ "node_modules_xlsx_xlsx_mjs").then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 80574)).then(function (xlsx) {
        var worksheet = xlsx.utils.json_to_sheet(_this8.holdCleaningVoyage);
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
        _this8.saveAsExcelFile(excelBuffer, "products");
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
  }, {
    key: "openWithoutBackdrop",
    value: function openWithoutBackdrop() {
      this.open(false, false);
    }
  }, {
    key: "open",
    value: function open(closeOnBackdropClick, autoFocus) {
      var _this9 = this;
      this.dialogService.open(_app_pages_voyage_voyage_list_add_voyage_add_voyage_component__WEBPACK_IMPORTED_MODULE_2__.AddVoyageComponent, {
        closeOnBackdropClick: closeOnBackdropClick,
        autoFocus: autoFocus
      }).onClose.subscribe(function (data) {
        if (data !== undefined) {
          _this9.changeVoyageList("ONGOING");
          _this9.showPop('success', 'Success', 'Record Saved');
        }
      });
      ;
    }
  }, {
    key: "viewDetails",
    value: function viewDetails(selectedRow) {
      //debugger
      this.selectedItem = selectedRow;
      this.dialogVisible = true;
      // this.dialogService.open(ViewVoyageComponent, { context: { selectedItem: selectedRow }, closeOnBackdropClick: false, autoFocus: false });
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
    key: "dateFilter",
    value: function dateFilter(event) {
      this.holdCleaningVoyage = this.customErrorStateMatcher.filterDateRangeList(event, this.holdCleaningVoyage, 'VoyageCommenceDate');
    }
  }, {
    key: "clearDateRange",
    value: function clearDateRange(value) {
      debugger;
      var clearDate = value.target.value;
      if (clearDate.length === 1) {
        this.getVoyageHoldCleaningList();
        // if (this.activeIndex === 1) {
        //   this.changeVoyageList(this.currentPage, this.selectedRows, "", "Completed")
        // } else {
        //   this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced")
        // }
      }
    }
  }, {
    key: "close",
    value: function close() {
      // this.dialogRef.close();
    }
  }, {
    key: "headerColspan",
    get: function get() {
      return this.dynamicHeaders.length;
    }
  }]);
  return HoldCleaningListComponent;
}();
_class = HoldCleaningListComponent;
_class.ɵfac = function HoldCleaningListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_report_hold_cleaning_reports_hold_cleaning_report_service__WEBPACK_IMPORTED_MODULE_4__.HoldCleaningReportService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_status_status_service__WEBPACK_IMPORTED_MODULE_5__.StatusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_cargo_cargo_service__WEBPACK_IMPORTED_MODULE_6__.CargoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_port_port_service__WEBPACK_IMPORTED_MODULE_7__.PortService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_voyage_voyage_list_voyage_service__WEBPACK_IMPORTED_MODULE_8__.VoyageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_9__.VesselService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-hold-cleaning-list"]],
  viewQuery: function HoldCleaningListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_12__.ConfirmationService])],
  decls: 276,
  vars: 77,
  consts: [[1, "px-2"], [1, "row", "align-items-center"], [1, "col-3"], [1, "row", "col-9", "align-items-center"], ["placeholder", "VESSEL", "fullWidth", "", "fieldSize", "medium", 1, "dropdown-top", 3, "appendTo", "change", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p-1"], ["nbInput", "", "placeholder", "YOY. DATE RANGE", 3, "nbDatepicker", "keydown"], [3, "rangeChange"], ["formpicker", ""], ["placeholder", "LOAD PORT", "fullWidth", "", "fieldSize", "medium", 1, "fixed-dropdown-size", 3, "appendTo", "change"], ["placeholder", "CARGO", "fullWidth", "", "fieldSize", "medium", 1, "fixed-dropdown-size", 3, "appendTo", "change"], [1, "d-flex", "justify-content-between", "py-3"], ["nbButton", "", "label", "", 1, "mr-2", 3, "status", "ngClass", "click"], ["nbButton", "", "label", "", 3, "status", "ngClass", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file", "nbTooltip", "CSV", "nbTooltipPlacement", "top", 1, "mr-2", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file-excel", "nbTooltip", "XLS", "nbTooltipPlacement", "top", 1, "p-button-success", "mr-2", 3, "click"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle", "columns"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Voyage Details", "appendTo", "body", 3, "resizable", "modal", "maximizable", "visible", "contentStyle", "visibleChange"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-4"], [4, "ngIf"], ["pTemplate", "footer"], [3, "value"], [1, "d-flex"], [1, "ml-auto"], ["nbInput", "", "type", "text", "placeholder", "Search keyword", 3, "input"], ["pSortableColumn", "VesselName"], ["field", "VesselName"], ["pSortableColumn", "VoyageCommenceDate"], ["field", "VoyageCommenceDate"], ["pSortableColumn", "VesselVoyageCompletingDate"], ["field", "VesselVoyageCompletingDate"], ["pSortableColumn", "LoadToPort"], ["field", "LoadToPort"], ["pSortableColumn", "CargoToLoad"], ["field", "CargoToLoad"], ["pSortableColumn", "PreviousCargo"], ["field", "PreviousCargo"], [2, "width", "10%"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], [1, "", 2, "border-width", "0px 0px 0px 0px !important", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "nbTooltip", "View", "nbTooltipPlacement", "top", 1, "p-button-primary", "mr-2", 3, "click"], ["colspan", "7"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-times", "label", "Dismiss", 1, "p-button-text", 3, "click"]],
  template: function HoldCleaningListComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "div", 2)(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Hold Cleaning Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3)(7, "div", 2)(8, "ng-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HoldCleaningListComponent_Template_ng_select_change_8_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r81);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31);
        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r4.filterGlobal($event, "contains"));
      })("keyup", function HoldCleaningListComponent_Template_ng_select_keyup_8_listener($event) {
        return ctx.holdCleaningList(1, 100, $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HoldCleaningListComponent_ng_option_9_Template, 2, 2, "ng-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 6)(11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function HoldCleaningListComponent_Template_input_keydown_11_listener($event) {
        return ctx.clearDateRange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "nb-rangepicker", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("rangeChange", function HoldCleaningListComponent_Template_nb_rangepicker_rangeChange_12_listener($event) {
        return ctx.dateFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 2)(15, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HoldCleaningListComponent_Template_ng_select_change_15_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r81);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31);
        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r4.filterGlobal($event, "contains"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HoldCleaningListComponent_ng_option_16_Template, 2, 2, "ng-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 2)(18, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HoldCleaningListComponent_Template_ng_select_change_18_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r81);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31);
        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r4.filterGlobal($event, "contains"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, HoldCleaningListComponent_ng_option_19_Template, 2, 2, "ng-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 12)(21, "div")(22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HoldCleaningListComponent_Template_button_click_22_listener() {
        return ctx.changeVoyageList("ONGOING");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " ONGOING ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HoldCleaningListComponent_Template_button_click_24_listener() {
        return ctx.changeVoyageList("Completed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " COMPLETED VOYAGES ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div")(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HoldCleaningListComponent_Template_button_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r81);
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31);
        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r4.exportCSV());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HoldCleaningListComponent_Template_button_click_28_listener() {
        return ctx.exportExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "nb-card")(30, "p-table", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, HoldCleaningListComponent_ng_template_32_Template, 3, 0, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HoldCleaningListComponent_ng_template_33_Template, 21, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, HoldCleaningListComponent_ng_template_34_Template, 31, 28, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, HoldCleaningListComponent_ng_template_35_Template, 3, 1, "ng-template", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "p-dialog", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function HoldCleaningListComponent_Template_p_dialog_visibleChange_37_listener($event) {
        return ctx.dialogVisible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 24)(39, "div", 25)(40, "label")(41, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Vessel Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, HoldCleaningListComponent_p_43_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 25)(45, "label")(46, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "LTC/MUR Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, HoldCleaningListComponent_p_48_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 25)(50, "label")(51, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Owner Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, HoldCleaningListComponent_p_53_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 25)(55, "label")(56, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Trade Area Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, HoldCleaningListComponent_p_58_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 25)(60, "label")(61, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Voyage Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, HoldCleaningListComponent_p_63_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 25)(65, "label")(66, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Voyage Commence Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, HoldCleaningListComponent_p_68_Template, 3, 4, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 25)(70, "label")(71, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "Vessel Voyage Completed Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, HoldCleaningListComponent_p_73_Template, 3, 4, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 25)(75, "label")(76, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Veson Entry Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](78, HoldCleaningListComponent_p_78_Template, 3, 4, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 25)(80, "label")(81, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "Fixture");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, HoldCleaningListComponent_p_83_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 25)(85, "label")(86, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Opr");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, HoldCleaningListComponent_p_88_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 25)(90, "label")(91, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "Load To Port Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](93, HoldCleaningListComponent_p_93_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "div", 25)(95, "label")(96, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "Discharge Port Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](98, HoldCleaningListComponent_p_98_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 25)(100, "label")(101, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "Cargo To Load Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](103, HoldCleaningListComponent_p_103_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 25)(105, "label")(106, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Previous Cargo Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](108, HoldCleaningListComponent_p_108_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 25)(110, "label")(111, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Hold Pass/Fail Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](113, HoldCleaningListComponent_p_113_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "div", 25)(115, "label")(116, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "TCC Budget USD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](118, HoldCleaningListComponent_p_118_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "div", 25)(120, "label")(121, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "TCC Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](123, HoldCleaningListComponent_p_123_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 25)(125, "label")(126, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "TCC Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](128, HoldCleaningListComponent_p_128_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "div", 25)(130, "label")(131, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "ITD Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](133, HoldCleaningListComponent_p_133_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "div", 25)(135, "label")(136, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, "ITD Budget");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](138, HoldCleaningListComponent_p_138_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "div", 25)(140, "label")(141, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "ITD Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](143, HoldCleaningListComponent_p_143_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "div", 25)(145, "label")(146, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "ITD Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](148, HoldCleaningListComponent_p_148_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "div", 25)(150, "label")(151, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, "ITC Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](153, HoldCleaningListComponent_p_153_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "div", 25)(155, "label")(156, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "ITC Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](158, HoldCleaningListComponent_p_158_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 25)(160, "label")(161, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, "ITC Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](163, HoldCleaningListComponent_p_163_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "div", 25)(165, "label")(166, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, "ITB Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](168, HoldCleaningListComponent_p_168_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "div", 25)(170, "label")(171, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, "ITB Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](173, HoldCleaningListComponent_p_173_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "div", 25)(175, "label")(176, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](177, "ITB Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](178, HoldCleaningListComponent_p_178_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "div", 25)(180, "label")(181, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "HCB Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](183, HoldCleaningListComponent_p_183_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "div", 25)(185, "label")(186, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](187, "HCB Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](188, HoldCleaningListComponent_p_188_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "div", 25)(190, "label")(191, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "HCB Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](193, HoldCleaningListComponent_p_193_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "div", 25)(195, "label")(196, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "SCG Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](198, HoldCleaningListComponent_p_198_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "div", 25)(200, "label")(201, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "SCG Budget");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](203, HoldCleaningListComponent_p_203_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "div", 25)(205, "label")(206, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "SCG Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](208, HoldCleaningListComponent_p_208_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](209, "div", 25)(210, "label")(211, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "SCG Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](213, HoldCleaningListComponent_p_213_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "div", 25)(215, "label")(216, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](217, "SHA Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](218, HoldCleaningListComponent_p_218_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "div", 25)(220, "label")(221, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, "SHA Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](223, HoldCleaningListComponent_p_223_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "div", 25)(225, "label")(226, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "SHA Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](228, HoldCleaningListComponent_p_228_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "div", 25)(230, "label")(231, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, "HCE Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](233, HoldCleaningListComponent_p_233_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "div", 25)(235, "label")(236, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "HCE Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](238, HoldCleaningListComponent_p_238_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "div", 25)(240, "label")(241, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, "HCE Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](243, HoldCleaningListComponent_p_243_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "div", 25)(245, "label")(246, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "HCC Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](248, HoldCleaningListComponent_p_248_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "div", 25)(250, "label")(251, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](252, "HCC Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](253, HoldCleaningListComponent_p_253_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "div", 25)(255, "label")(256, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](257, "HCC Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](258, HoldCleaningListComponent_p_258_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "div", 25)(260, "label")(261, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, "HCX Budget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](263, HoldCleaningListComponent_p_263_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "div", 25)(265, "label")(266, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, "HCX Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](268, HoldCleaningListComponent_p_268_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "div", 25)(270, "label")(271, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](272, "HCX Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](273, HoldCleaningListComponent_p_273_Template, 2, 1, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](274, HoldCleaningListComponent_ng_container_274_Template, 7, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](275, HoldCleaningListComponent_ng_template_275_Template, 1, 0, "ng-template", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.vesselDropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nbDatepicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.port);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appendTo", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.cargo);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("status", ctx.activeIndex === 0 ? "primary" : "control")("ngClass", ctx.activeIndex === 0 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("status", ctx.activeIndex === 1 ? "primary" : "control")("ngClass", ctx.activeIndex === 1 ? "" : "button-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.holdCleaningVoyage)("rows", 10)("showCurrentPageReport", true)("paginator", ctx.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](73, _c1))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](74, _c2))("columns", ctx.cols);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](75, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("resizable", false)("modal", true)("maximizable", true)("visible", ctx.dialogVisible)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](76, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedItem);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__.NgxSkeletonLoaderComponent, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.Dialog, primeng_table__WEBPACK_IMPORTED_MODULE_19__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_19__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_19__.EditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_20__.Toast, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbRangepickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe]
});

/***/ }),

/***/ 68540:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hold-cleaning-management/hold-cleaning-management-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoldCleaningManagementRoutingModule": () => (/* binding */ HoldCleaningManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _hold_cleaning_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hold-cleaning-management */ 7717);
/* harmony import */ var _hold_cleaning_list_hold_cleaning_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hold-cleaning-list/hold-cleaning-list.component */ 80965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;





var routes = [{
  path: '',
  component: _hold_cleaning_management__WEBPACK_IMPORTED_MODULE_2__.HoldCleaningManagementComponent,
  children: [{
    path: 'hold-cleaning',
    component: _hold_cleaning_list_hold_cleaning_list_component__WEBPACK_IMPORTED_MODULE_3__.HoldCleaningListComponent
  }]
}];
var HoldCleaningManagementRoutingModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HoldCleaningManagementRoutingModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HoldCleaningManagementRoutingModule);
});
_class = HoldCleaningManagementRoutingModule;
_class.ɵfac = function HoldCleaningManagementRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HoldCleaningManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 36037:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hold-cleaning-management/hold-cleaning-management.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoldCleaningManagementModule": () => (/* binding */ HoldCleaningManagementModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ 32174);
/* harmony import */ var primeng_animate__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/animate */ 25291);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autocomplete */ 3631);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/avatar */ 68271);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/badge */ 68639);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/blockui */ 17456);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/breadcrumb */ 78676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 70585);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! primeng/card */ 94247);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/carousel */ 75700);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/cascadeselect */ 61118);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/checkbox */ 61989);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/chip */ 67147);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/chips */ 16022);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/colorpicker */ 5369);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/confirmdialog */ 32137);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/contextmenu */ 34076);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dataview */ 77900);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/divider */ 15108);
/* harmony import */ var primeng_dock__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/dock */ 16600);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dragdrop */ 34937);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/dropdown */ 82210);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dynamicdialog */ 74325);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/fieldset */ 52946);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/fileupload */ 13388);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/galleria */ 15569);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/image */ 25054);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inplace */ 89073);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputmask */ 23520);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/inputnumber */ 25047);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/inputswitch */ 17913);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inputtext */ 51740);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/inputtextarea */ 63054);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/knob */ 47261);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/listbox */ 38433);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/megamenu */ 70450);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/menu */ 21327);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/menubar */ 40615);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/message */ 92665);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/messages */ 57772);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/multiselect */ 65722);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/orderlist */ 65900);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/overlaypanel */ 32435);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/paginator */ 1997);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/panel */ 9764);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/panelmenu */ 17919);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/password */ 73425);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/picklist */ 37198);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/progressbar */ 78235);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/progressspinner */ 97932);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/radiobutton */ 50613);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/rating */ 6408);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/scroller */ 93718);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/scrollpanel */ 83930);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/scrolltop */ 54216);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/selectbutton */ 85362);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/sidebar */ 23214);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/skeleton */ 17489);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/slidemenu */ 68861);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/slider */ 78177);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/speeddial */ 27963);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/spinner */ 73238);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/splitbutton */ 47463);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/splitter */ 83111);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/steps */ 1236);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/tabmenu */ 56163);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/tabview */ 58783);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/tag */ 86679);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/terminal */ 62922);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/tieredmenu */ 79512);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/timeline */ 540);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/togglebutton */ 31167);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/toolbar */ 1383);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/tree */ 14323);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/treeselect */ 56186);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/treetable */ 36237);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/tristatecheckbox */ 80630);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/virtualscroller */ 35779);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @ng-select/ng-select */ 88796);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ng2-ckeditor */ 76442);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ng2-smart-table */ 54526);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ngx-skeleton-loader */ 93553);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _app_pages_forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-pages/forms/forms-routing.module */ 83173);
/* harmony import */ var _app_pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-pages/miscellaneous/miscellaneous.module */ 13452);
/* harmony import */ var _hold_cleaning_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hold-cleaning-management-routing.module */ 68540);
/* harmony import */ var _hold_cleaning_list_hold_cleaning_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hold-cleaning-list/hold-cleaning-list.component */ 80965);
/* harmony import */ var _hold_cleaning_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hold-cleaning-management */ 7717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

































































































var NG_Prime = [primeng_avatar__WEBPACK_IMPORTED_MODULE_8__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_11__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_13__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_16__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_17__.CascadeSelectModule,
// ChartModule,
primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_19__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_20__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_23__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_24__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_25__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_26__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_27__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_28__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_29__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_30__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__.DynamicDialogModule,
// EditorModule,
primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_34__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_35__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_37__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_38__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_40__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_41__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_42__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_43__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_44__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_45__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_46__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_47__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_48__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_49__.MultiSelectModule,
// OrganizationChartModule,
primeng_orderlist__WEBPACK_IMPORTED_MODULE_50__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_52__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_53__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_55__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_56__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_57__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_58__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_59__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_60__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_61__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_62__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_63__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_64__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_65__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_66__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_67__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_68__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_69__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_70__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_71__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_73__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_74__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_76__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_77__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_78__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_79__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_80__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_81__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_82__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_83__.ToolbarModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_84__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_85__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_86__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_87__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_88__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_89__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_90__.CardModule];
var NB_Module = [_nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbAutocompleteModule];
var HoldCleaningManagementModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HoldCleaningManagementModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HoldCleaningManagementModule);
});
_class = HoldCleaningManagementModule;
_class.ɵfac = function HoldCleaningManagementModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_92__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_92__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_93__.CommonModule, _hold_cleaning_management_routing_module__WEBPACK_IMPORTED_MODULE_5__.HoldCleaningManagementRoutingModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _app_pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__.MiscellaneousModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_94__.Ng2SmartTableModule, _app_pages_forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__.FormsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_95__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__.NgSelectModule, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_97__.CKEditorModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_98__.NgxSkeletonLoaderModule, NG_Prime, NB_Module]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_92__["ɵɵsetNgModuleScope"](HoldCleaningManagementModule, {
    declarations: [_hold_cleaning_list_hold_cleaning_list_component__WEBPACK_IMPORTED_MODULE_6__.HoldCleaningListComponent, _hold_cleaning_management__WEBPACK_IMPORTED_MODULE_7__.HoldCleaningManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_93__.CommonModule, _hold_cleaning_management_routing_module__WEBPACK_IMPORTED_MODULE_5__.HoldCleaningManagementRoutingModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _app_pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__.MiscellaneousModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_94__.Ng2SmartTableModule, _app_pages_forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__.FormsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_95__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_96__.NgSelectModule, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_97__.CKEditorModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_98__.NgxSkeletonLoaderModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_8__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_11__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_13__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_16__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_17__.CascadeSelectModule,
    // ChartModule,
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_19__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_20__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_23__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_24__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_25__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_26__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_27__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_28__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_29__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_30__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_31__.DynamicDialogModule,
    // EditorModule,
    primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_34__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_35__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_37__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_38__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_40__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_41__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_42__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_43__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_44__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_45__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_46__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_47__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_48__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_49__.MultiSelectModule,
    // OrganizationChartModule,
    primeng_orderlist__WEBPACK_IMPORTED_MODULE_50__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_52__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_53__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_55__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_56__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_57__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_58__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_59__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_60__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_61__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_62__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_63__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_64__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_65__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_66__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_67__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_68__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_69__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_70__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_71__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_73__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_74__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_76__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_77__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_78__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_79__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_80__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_81__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_82__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_83__.ToolbarModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_84__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_85__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_86__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_87__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_88__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_89__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_90__.CardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_91__.NbAutocompleteModule]
  });
})();

/***/ }),

/***/ 7717:
/*!****************************************************************************!*\
  !*** ./src/app/pages/hold-cleaning-management/hold-cleaning-management.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoldCleaningManagementComponent": () => (/* binding */ HoldCleaningManagementComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var HoldCleaningManagementComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HoldCleaningManagementComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HoldCleaningManagementComponent);
});
_class = HoldCleaningManagementComponent;
_class.ɵfac = function HoldCleaningManagementComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-hold-cleaning-management"]],
  decls: 1,
  vars: 0,
  template: function HoldCleaningManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ })

}]);