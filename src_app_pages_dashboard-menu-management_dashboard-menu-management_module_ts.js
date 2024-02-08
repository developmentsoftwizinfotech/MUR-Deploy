"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_dashboard-menu-management_dashboard-menu-management_module_ts"],{

/***/ 26870:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard-menu-management/dashboard-menu-management-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardMenuManagementRoutingModule": () => (/* binding */ DashboardMenuManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _dashboard_menu_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-menu-management.component */ 10324);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 78999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;





var routes = [{
  path: '',
  component: _dashboard_menu_management_component__WEBPACK_IMPORTED_MODULE_2__.DashboardMenuManagementComponent,
  children: [{
    path: 'dashboard',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
  }]
}];
var DashboardMenuManagementRoutingModule = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardMenuManagementRoutingModule() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardMenuManagementRoutingModule);
});
_class = DashboardMenuManagementRoutingModule;
_class.ɵfac = function DashboardMenuManagementRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardMenuManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 10324:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard-menu-management/dashboard-menu-management.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardMenuManagementComponent": () => (/* binding */ DashboardMenuManagementComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var DashboardMenuManagementComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardMenuManagementComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardMenuManagementComponent);
});
_class = DashboardMenuManagementComponent;
_class.ɵfac = function DashboardMenuManagementComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-dashboard-menu-management"]],
  decls: 1,
  vars: 0,
  template: function DashboardMenuManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 81916:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard-menu-management/dashboard-menu-management.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardMenuManagementModule": () => (/* binding */ DashboardMenuManagementModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/accordion */ 32174);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autocomplete */ 3631);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/avatar */ 68271);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/badge */ 68639);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/breadcrumb */ 78676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 70585);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/carousel */ 75700);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/cascadeselect */ 61118);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ 61989);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/chip */ 67147);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/chips */ 16022);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ 32137);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/colorpicker */ 5369);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/contextmenu */ 34076);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dataview */ 77900);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/virtualscroller */ 35779);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/divider */ 15108);
/* harmony import */ var primeng_dock__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dock */ 16600);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/dragdrop */ 34937);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dropdown */ 82210);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/dynamicdialog */ 74325);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/fieldset */ 52946);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/fileupload */ 13388);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/galleria */ 15569);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inplace */ 89073);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputmask */ 23520);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputswitch */ 17913);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/inputtext */ 51740);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/inputnumber */ 25047);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inputtextarea */ 63054);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/image */ 25054);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/knob */ 47261);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/listbox */ 38433);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/megamenu */ 70450);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/menu */ 21327);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/menubar */ 40615);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/message */ 92665);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/messages */ 57772);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/multiselect */ 65722);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/orderlist */ 65900);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/organizationchart */ 86467);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/overlaypanel */ 32435);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/paginator */ 1997);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/panel */ 9764);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/panelmenu */ 17919);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/password */ 73425);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/picklist */ 37198);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/progressbar */ 78235);
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
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/tabmenu */ 56163);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/tabview */ 58783);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/tag */ 86679);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/terminal */ 62922);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/tieredmenu */ 79512);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/timeline */ 540);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/toast */ 12453);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/togglebutton */ 31167);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/toolbar */ 1383);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/tooltip */ 3608);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/tristatecheckbox */ 80630);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/tree */ 14323);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/treeselect */ 56186);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/treetable */ 36237);
/* harmony import */ var primeng_animate__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/animate */ 25291);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! primeng/card */ 94247);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/blockui */ 17456);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/progressspinner */ 97932);
/* harmony import */ var _dashboard_menu_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-menu-management-routing.module */ 26870);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 78999);
/* harmony import */ var _dashboard_menu_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-menu-management.component */ 10324);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! @swimlane/ngx-charts */ 693);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ngx-echarts */ 85446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;


// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ChartHorizontalBarDemo } from 'src/app/demo/chart-horizontal-bar-demo';
// Import PrimeNG modules









// import { ChartModule } from 'primeng/chart';














// import { EditorModule } from 'primeng/editor';






































































var NG_Prime = [primeng_avatar__WEBPACK_IMPORTED_MODULE_7__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_8__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_12__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_16__.CascadeSelectModule,
// ChartModule,
primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_18__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_19__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_23__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_24__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_25__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_26__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_27__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_30__.DynamicDialogModule,
// EditorModule,
primeng_fieldset__WEBPACK_IMPORTED_MODULE_31__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_32__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_33__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_34__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_35__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_36__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_37__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_39__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_40__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_41__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_42__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_43__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_44__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_45__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_46__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_47__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_48__.MultiSelectModule, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_49__.OrganizationChartModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_50__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_52__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_53__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_55__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_56__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_57__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_58__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_59__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_60__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_61__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_62__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_63__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_64__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_65__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_66__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_67__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_68__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_69__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_70__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_71__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_73__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_74__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_76__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_77__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_78__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_79__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_80__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_81__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_82__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_83__.ToolbarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_84__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_85__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_86__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_87__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_88__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_89__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_90__.CardModule];
var DashboardMenuManagementModule = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardMenuManagementModule() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardMenuManagementModule);
});
_class = DashboardMenuManagementModule;
_class.ɵfac = function DashboardMenuManagementModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_91__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_91__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_92__.CommonModule, _dashboard_menu_management_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardMenuManagementRoutingModule, NG_Prime, _angular_forms__WEBPACK_IMPORTED_MODULE_93__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_93__.ReactiveFormsModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__.ThemeModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_94__.NgxEchartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_95__.NgxChartsModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__.ChartModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_96__.NbCardModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_91__["ɵɵsetNgModuleScope"](DashboardMenuManagementModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _dashboard_menu_management_component__WEBPACK_IMPORTED_MODULE_4__.DashboardMenuManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_92__.CommonModule, _dashboard_menu_management_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardMenuManagementRoutingModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_7__.AvatarModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_8__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_12__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_16__.CascadeSelectModule,
    // ChartModule,
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_18__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_19__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_23__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_24__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_25__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_26__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_27__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_30__.DynamicDialogModule,
    // EditorModule,
    primeng_fieldset__WEBPACK_IMPORTED_MODULE_31__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_32__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_33__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_34__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_35__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_36__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_37__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_39__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_40__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_41__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_42__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_43__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_44__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_45__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_46__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_47__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_48__.MultiSelectModule, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_49__.OrganizationChartModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_50__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_52__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_53__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_55__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_56__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_57__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_58__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_59__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_60__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_61__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_62__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_63__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_64__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_65__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_66__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_67__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_68__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_69__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_70__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_71__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_73__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_74__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_76__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_77__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_78__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_79__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_80__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_81__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_82__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_83__.ToolbarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_84__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_85__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_86__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_87__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_88__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_89__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_90__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_93__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_93__.ReactiveFormsModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__.ThemeModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_94__.NgxEchartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_95__.NgxChartsModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__.ChartModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_96__.NbCardModule]
  });
})();

/***/ }),

/***/ 78999:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard-menu-management/dashboard/dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-pages/settings/vessel/vessel.service */ 1511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-chartjs */ 39256);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__);


var _class;








function DashboardComponent_div_0_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 14);
  }
}
function DashboardComponent_div_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Vessel Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " IMO Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Fleet Type Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Fleet Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " DWT(T)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Licence Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Licence End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "p-sortIcon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_0_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29)(1, "td")(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td")(22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td")(27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "ngx-skeleton-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var rowData_r8 = ctx.$implicit;
    var index_r10 = ctx.rowIndex;
    var product_r11 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pReorderableRow", index_r10)("pEditableRow", product_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.VesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.IMONumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.FleetTypeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.FleetName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r8.DWT_T, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](24, 23, rowData_r8.LicenseStartDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === false ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](29, 26, rowData_r8.LicenseEndDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.checkListRecord === true ? "d-none" : "");
  }
}
function DashboardComponent_div_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.emptymessage);
  }
}
var _c0 = function _c0() {
  return ["VesselName", "IMONumber", "FleetTypeName", "FleetName", "DWT_T", "LicenseStartDate", "LicenseEndDate"];
};
var _c1 = function _c1() {
  return {
    "min-width": "50rem"
  };
};
function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "nb-card")(3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Idle Time Days For Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "nb-card")(7, "nb-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Idle Time Days For Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nb-card-body", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "nb-card")(13, "nb-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Idle Time Cost For Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nb-card-body", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "p-table", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DashboardComponent_div_0_ng_template_20_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DashboardComponent_div_0_ng_template_21_Template, 22, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DashboardComponent_div_0_ng_template_22_Template, 31, 29, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DashboardComponent_div_0_ng_template_23_Template, 3, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.data)("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.data)("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.vessel)("rows", 5)("showCurrentPageReport", true)("paginator", ctx_r0.checkListRecord === true ? true : false)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c1))("columns", ctx_r0.cols)("showCurrentPageReport", true);
  }
}
function DashboardComponent_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 33)(1, "nb-card-header", 34)(2, "div", 35)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Vendor Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
var DashboardComponent = /*#__PURE__*/function () {
  function DashboardComponent(theme, vesselService) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardComponent);
    this.theme = theme;
    this.vesselService = vesselService;
    this.option = {};
    this.checkListRecord = false;
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      var currentUser = localStorage.getItem('currentUser');
      var activeUser = JSON.parse(currentUser);
      if (activeUser.email == 'Admin') {
        this.activeUser = 'Admin';
      } else {
        this.activeUser = 'Vendor';
      }
      this.barChartCode();
      var documentStyle = getComputedStyle(document.documentElement);
      var textColor = documentStyle.getPropertyValue('--text-color');
      var textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      var surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      // this.data = {
      //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      //   datasets: [
      //     {
      //       label: 'My First dataset',
      //       backgroundColor: (colors.primaryLight, 0.8),
      //       borderColor: documentStyle.getPropertyValue('--blue-500'),
      //       data: [65, 59, 80, 81, 56, 55, 40, 35, 80, 55, 69, 98]
      //     },
      //     {
      //       label: 'My Second dataset',
      //       backgroundColor: documentStyle.getPropertyValue('--pink-500'),
      //       borderColor: documentStyle.getPropertyValue('--pink-500'),
      //       data: [28, 48, 40, 19, 86, 27, 90, 80, 65, 95, 25, 40]
      //     },
      //     {
      //       label: 'My Second dataset',
      //       backgroundColor: documentStyle.getPropertyValue('--pink-500'),
      //       borderColor: documentStyle.getPropertyValue('--pink-500'),
      //       data: [28, 48, 40, 19, 86, 27, 90, 80, 65, 95, 25, 40]
      //     }
      //   ]
      // };
      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.getVesselListRecords(1, 100, '');
      // this.productService.getProducts().then((data) => {
      //   this.vessel = data});
      this.items = [{
        label: "ADD NEW CLENING STAGE"
      }];
      this.cols = [{
        field: "VesselName",
        header: "Vessel Name"
      }, {
        field: "IMONumber",
        header: "IMO Number"
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
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var echarts = config.variables.echarts;
        _this2.option = {
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
    // Bar Chart -------------------------Code
  }, {
    key: "barChartCode",
    value: function barChartCode() {
      var _this3 = this;
      this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
        var colors = config.variables;
        var chartjs = config.variables.chartjs;
        _this3.data = {
          labels: ['AFRICAN BAZA', 'AFRICAN BARI BIRD', 'AFRICAN HORNBILL', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN BAZA', 'AFRICAN BARI BIRD', 'AFRICAN HORNBILL', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO', 'AFRICAN CHEETAH', 'AFRICAN BAZA', 'AFRICAN BARI BIRD', 'AFRICAN HORNBILL'],
          datasets: [{
            data: [-6.0, -4.0, -2.0, 0, 2, 4, 6, 8, 10, 12, 11, 12, 13, 14, 15, -2.0, 0, 2, 4, 6, 12, 12, 11, 12, 12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8, 10, 12, 12, 11, 12, 13, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6, 12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8,, -2.0, 0, 2, 4, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6],
            label: 'Sum of ITD Budget',
            backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbColorHelper.hexToRgbA(colors.success, 0.8)
          }, {
            data: [4.0, -4.0, -2.0, 0, 2, 4, 6, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, 6, 12, 12, 11, 12, 12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6, 12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8,, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6, 4.0, -4.0, -2.0, 0, 2, 4, 6, 8, 10, 12, 12, 11, 12, 13],
            label: 'Sum of ITD Actual',
            backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbColorHelper.hexToRgbA(colors.infoLight, 0.8)
          }, {
            data: [12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6, 12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6, 8, 10, 12, 12, 11, 12, 13, -2.0, 0, 2, 4, -2.0, 0, 2, 4, 6, -2.0, 0, 2, 4, 6, 12.0, -4.0, -2.0, 0.0, 2.0, 4, 6, 8],
            label: 'Sum of ITC Diff.',
            backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbColorHelper.hexToRgbA(colors.primaryLight, 0.8)
          }]
        };
        _this3.options = {
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
    // getVesselListRecords() {
    // this.vesselService.getVesselList().subscribe((res: Vessel[]) => {
    //   this.vessel = res;
    //   if (res.length === 0) {
    //     this.emptymessage = 'No Record Found'
    //   }
    //   setTimeout(() => { this.checkListRecord = true }, 200);
    // })
    // }
  }, {
    key: "getVesselListRecords",
    value: function getVesselListRecords(cPage, nRows, filter) {
      var _this4 = this;
      this.checkListRecord = false;
      this.vesselService.getVesselList(cPage, nRows, filter).subscribe(function (res) {
        _this4.vessel = res.VesselData;
        //      this.totalCount = res.Count;
        // this.countValue = res.Count
        // if (res.length === 0) {
        //   this.emptymessage = 'No Record Found'
        // }
        // if (this.currentPageReportTemplate === "") {
        //   this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
        // }
        setTimeout(function () {
          _this4.checkListRecord = true;
        }, 200);
      });
    }
  }]);
  return DashboardComponent;
}();
_class = DashboardComponent;
_class.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_pages_settings_vessel_vessel_service__WEBPACK_IMPORTED_MODULE_2__.VesselService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-dashboard"]],
  decls: 2,
  vars: 2,
  consts: [["class", "row", 4, "ngIf"], ["class", "px-2", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], ["id", "barChart", 2, "height", "30vh"], ["type", "bar", 3, "data", "options"], [1, "card", "col-12", "m-3", "p-0", "mt-4"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "paginator", "globalFilterFields", "tableStyle", "columns"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], ["pSortableColumn", "VesselName"], ["field", "VesselName"], ["pSortableColumn", "IMONumber"], ["field", "IMONumber"], ["pSortableColumn", "FleetTypeName"], ["field", "FleetTypeName"], ["pSortableColumn", "FleetName"], ["field", "FleetName"], ["pSortableColumn", "DWT_T"], ["field", "DWT_T"], ["pSortableColumn", "LicenseStartDate"], ["field", "LicenseStartDate"], ["pSortableColumn", "LicenseEndDate"], ["field", "LicenseEndDate"], [3, "pReorderableRow", "pEditableRow"], [3, "ngClass"], ["count", "1", "appearance", "line", "animation", "pulse", 3, "ngClass"], ["colspan", "7"], [1, "px-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-6", "col-9"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 24, 14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DashboardComponent_nb_card_1_Template, 5, 0, "nb-card", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeUser === "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeUser !== "Admin");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ReorderableRow, primeng_table__WEBPACK_IMPORTED_MODULE_8__.EditableRow, angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["#barChart canvas.chartjs-render-monitor {\n  height: 40vh !important;\n}"]
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
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var VesselService = /*#__PURE__*/function () {
  function VesselService(http) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VesselService);
    this.http = http;
    this.vesselUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseApiUrl;
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VesselService, [{
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

/***/ })

}]);