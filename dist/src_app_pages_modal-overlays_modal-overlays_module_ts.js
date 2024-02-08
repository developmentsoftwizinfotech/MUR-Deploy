"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_modal-overlays_modal-overlays_module_ts"],{

/***/ 60856:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogNamePromptComponent": () => (/* binding */ DialogNamePromptComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;


var DialogNamePromptComponent = /*#__PURE__*/function () {
  function DialogNamePromptComponent(ref) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DialogNamePromptComponent);
    this.ref = ref;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DialogNamePromptComponent, [{
    key: "cancel",
    value: function cancel() {
      this.ref.close();
    }
  }, {
    key: "submit",
    value: function submit(name) {
      this.ref.close(name);
    }
  }]);
  return DialogNamePromptComponent;
}();
_class = DialogNamePromptComponent;
_class.ɵfac = function DialogNamePromptComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-dialog-name-prompt"]],
  decls: 11,
  vars: 0,
  consts: [["nbInput", "", "placeholder", "Name"], ["name", ""], ["nbButton", "", "status", "danger", 1, "cancel", 3, "click"], ["nbButton", "", "status", "success", 3, "click"]],
  template: function DialogNamePromptComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter your name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-footer")(7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogNamePromptComponent_Template_button_click_7_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogNamePromptComponent_Template_button_click_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.submit(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective],
  styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}"]
});

/***/ }),

/***/ 11258:
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-overlays/dialog/dialog.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _showcase_dialog_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcase-dialog/showcase-dialog.component */ 55184);
/* harmony import */ var _dialog_name_prompt_dialog_name_prompt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-name-prompt/dialog-name-prompt.component */ 60856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);


var _class;





function DialogComponent_li_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var name_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](name_r3);
  }
}
function DialogComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Template Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nb-card-footer")(6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_ng_template_49_Template_button_click_6_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      var ref_r5 = restoredCtx.dialogRef;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ref_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Close Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4);
  }
}
var DialogComponent = /*#__PURE__*/function () {
  function DialogComponent(dialogService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DialogComponent);
    this.dialogService = dialogService;
    this.names = [];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DialogComponent, [{
    key: "open",
    value: function open() {
      this.dialogService.open(_showcase_dialog_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ShowcaseDialogComponent, {
        context: {
          title: 'This is a title passed to the dialog component'
        }
      });
    }
  }, {
    key: "open2",
    value: function open2(dialog) {
      this.dialogService.open(dialog, {
        context: 'this is some additional data passed to dialog'
      });
    }
  }, {
    key: "open3",
    value: function open3() {
      var _this = this;
      this.dialogService.open(_dialog_name_prompt_dialog_name_prompt_component__WEBPACK_IMPORTED_MODULE_3__.DialogNamePromptComponent).onClose.subscribe(function (name) {
        return name && _this.names.push(name);
      });
    }
  }, {
    key: "openWithoutBackdrop",
    value: function openWithoutBackdrop(dialog) {
      this.dialogService.open(dialog, {
        context: 'this is some additional data passed to dialog',
        hasBackdrop: false
      });
    }
  }, {
    key: "openWithoutBackdropClick",
    value: function openWithoutBackdropClick(dialog) {
      this.dialogService.open(dialog, {
        context: 'this is some additional data passed to dialog',
        closeOnBackdropClick: false
      });
    }
  }, {
    key: "openWithoutEscClose",
    value: function openWithoutEscClose(dialog) {
      this.dialogService.open(dialog, {
        context: 'this is some additional data passed to dialog',
        closeOnEsc: false
      });
    }
  }]);
  return DialogComponent;
}();
_class = DialogComponent;
_class.ɵfac = function DialogComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-dialog"]],
  decls: 51,
  vars: 1,
  consts: [[1, "row"], [1, "col-md-12", "col-lg-6", "col-xxxl-3"], ["nbButton", "", 3, "click"], [1, "form-input-card"], [1, "result-from-dialog"], [1, "title"], [4, "ngFor", "ngForOf"], ["dialog", ""]],
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Open Dialog");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nb-card-body")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_6_listener() {
        return ctx.open();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Open Dialog with component");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.open2(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Open Dialog with template");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1)(11, "nb-card")(12, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Open Without Backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nb-card-body")(15, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_15_listener() {
        return ctx.open();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Open Dialog with backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openWithoutBackdrop(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Open Dialog without backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 1)(20, "nb-card")(21, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Open Without Esc Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nb-card-body")(24, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_24_listener() {
        return ctx.open();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Open Dialog with esc close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openWithoutEscClose(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Open Dialog without esc close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 1)(29, "nb-card")(30, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Open Without Backdrop Click");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "nb-card-body")(33, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_33_listener() {
        return ctx.open();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Open Dialog with backdrop click");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_35_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openWithoutBackdropClick(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Open without backdrop click");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 1)(38, "nb-card", 3)(39, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Return Result From Dialog");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "nb-card-body", 4)(42, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_42_listener() {
        return ctx.open3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Enter Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Names:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, DialogComponent_li_48_Template, 2, 1, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, DialogComponent_ng_template_49_Template, 8, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.names);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent],
  styles: ["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n  display: block;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 1199.98px) {\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n}"]
});

/***/ }),

/***/ 55184:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/modal-overlays/dialog/showcase-dialog/showcase-dialog.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseDialogComponent": () => (/* binding */ ShowcaseDialogComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;


var ShowcaseDialogComponent = /*#__PURE__*/function () {
  function ShowcaseDialogComponent(ref) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShowcaseDialogComponent);
    this.ref = ref;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ShowcaseDialogComponent, [{
    key: "dismiss",
    value: function dismiss() {
      this.ref.close();
    }
  }]);
  return ShowcaseDialogComponent;
}();
_class = ShowcaseDialogComponent;
_class.ɵfac = function ShowcaseDialogComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-showcase-dialog"]],
  inputs: {
    title: "title"
  },
  decls: 8,
  vars: 1,
  consts: [["nbButton", "", "hero", "", "status", "primary", 3, "click"]],
  template: function ShowcaseDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-footer")(6, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShowcaseDialogComponent_Template_button_click_6_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Dismiss Dialog");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent],
  styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 500px;\n}"]
});

/***/ }),

/***/ 56244:
/*!***********************************************************************!*\
  !*** ./src/app/pages/modal-overlays/modal-overlays-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOverlaysRoutingModule": () => (/* binding */ ModalOverlaysRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _modal_overlays_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-overlays.component */ 6091);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog/dialog.component */ 11258);
/* harmony import */ var _window_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window/window.component */ 108);
/* harmony import */ var _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popovers/popovers.component */ 10264);
/* harmony import */ var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toastr/toastr.component */ 17655);
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip/tooltip.component */ 18930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;









var routes = [{
  path: '',
  component: _modal_overlays_component__WEBPACK_IMPORTED_MODULE_2__.ModalOverlaysComponent,
  children: [{
    path: 'dialog',
    component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent
  }, {
    path: 'window',
    component: _window_window_component__WEBPACK_IMPORTED_MODULE_4__.WindowComponent
  }, {
    path: 'popover',
    component: _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_5__.PopoversComponent
  }, {
    path: 'tooltip',
    component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.TooltipComponent
  }, {
    path: 'toastr',
    component: _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__.ToastrComponent
  }]
}];
var ModalOverlaysRoutingModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ModalOverlaysRoutingModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalOverlaysRoutingModule);
});
_class = ModalOverlaysRoutingModule;
_class.ɵfac = function ModalOverlaysRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ModalOverlaysRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 6091:
/*!******************************************************************!*\
  !*** ./src/app/pages/modal-overlays/modal-overlays.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOverlaysComponent": () => (/* binding */ ModalOverlaysComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var ModalOverlaysComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ModalOverlaysComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalOverlaysComponent);
});
_class = ModalOverlaysComponent;
_class.ɵfac = function ModalOverlaysComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-modal-overlays"]],
  decls: 1,
  vars: 0,
  template: function ModalOverlaysComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 72998:
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-overlays/modal-overlays.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOverlaysModule": () => (/* binding */ ModalOverlaysModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _modal_overlays_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-overlays-routing.module */ 56244);
/* harmony import */ var _modal_overlays_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-overlays.component */ 6091);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ 11258);
/* harmony import */ var _dialog_showcase_dialog_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/showcase-dialog/showcase-dialog.component */ 55184);
/* harmony import */ var _dialog_dialog_name_prompt_dialog_name_prompt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/dialog-name-prompt/dialog-name-prompt.component */ 60856);
/* harmony import */ var _window_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./window/window.component */ 108);
/* harmony import */ var _window_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./window/window-form/window-form.component */ 88850);
/* harmony import */ var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toastr/toastr.component */ 17655);
/* harmony import */ var _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popovers/popovers.component */ 10264);
/* harmony import */ var _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popovers/popover-examples.component */ 13583);
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip/tooltip.component */ 18930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;


// modules


// components












var COMPONENTS = [_modal_overlays_component__WEBPACK_IMPORTED_MODULE_4__.ModalOverlaysComponent, _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_10__.ToastrComponent, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DialogComponent, _dialog_showcase_dialog_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ShowcaseDialogComponent, _dialog_dialog_name_prompt_dialog_name_prompt_component__WEBPACK_IMPORTED_MODULE_7__.DialogNamePromptComponent, _window_window_component__WEBPACK_IMPORTED_MODULE_8__.WindowComponent, _window_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_9__.WindowFormComponent, _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_11__.PopoversComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverCardComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverFormComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverTabsComponent, _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__.TooltipComponent];
var ENTRY_COMPONENTS = [_dialog_showcase_dialog_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ShowcaseDialogComponent, _dialog_dialog_name_prompt_dialog_name_prompt_component__WEBPACK_IMPORTED_MODULE_7__.DialogNamePromptComponent, _window_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_9__.WindowFormComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverCardComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverFormComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverTabsComponent];
var MODULES = [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _modal_overlays_routing_module__WEBPACK_IMPORTED_MODULE_3__.ModalOverlaysRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDialogModule.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbWindowModule.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbPopoverModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTooltipModule];
var SERVICES = [];
var ModalOverlaysModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ModalOverlaysModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalOverlaysModule);
});
_class = ModalOverlaysModule;
_class.ɵfac = function ModalOverlaysModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [].concat(SERVICES),
  imports: [MODULES]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ModalOverlaysModule, {
    declarations: [_modal_overlays_component__WEBPACK_IMPORTED_MODULE_4__.ModalOverlaysComponent, _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_10__.ToastrComponent, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DialogComponent, _dialog_showcase_dialog_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ShowcaseDialogComponent, _dialog_dialog_name_prompt_dialog_name_prompt_component__WEBPACK_IMPORTED_MODULE_7__.DialogNamePromptComponent, _window_window_component__WEBPACK_IMPORTED_MODULE_8__.WindowComponent, _window_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_9__.WindowFormComponent, _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_11__.PopoversComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverCardComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverFormComponent, _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_12__.NgxPopoverTabsComponent, _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__.TooltipComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _modal_overlays_routing_module__WEBPACK_IMPORTED_MODULE_3__.ModalOverlaysRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbDialogModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbWindowModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCheckboxModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbPopoverModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTooltipModule]
  });
})();

/***/ }),

/***/ 13583:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/modal-overlays/popovers/popover-examples.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxPopoverCardComponent": () => (/* binding */ NgxPopoverCardComponent),
/* harmony export */   "NgxPopoverFormComponent": () => (/* binding */ NgxPopoverFormComponent),
/* harmony export */   "NgxPopoverTabsComponent": () => (/* binding */ NgxPopoverTabsComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);


var _class, _class2, _class3;



var NgxPopoverTabsComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NgxPopoverTabsComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxPopoverTabsComponent);
});
_class = NgxPopoverTabsComponent;
_class.ɵfac = function NgxPopoverTabsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-popover-tabs"]],
  decls: 7,
  vars: 0,
  consts: [["tabTitle", "What's up?"], [1, "p-4"], ["tabTitle", "Second Tab"]],
  template: function NgxPopoverTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-tabset")(1, "nb-tab", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Such a wonderful day! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-tab", 2)(5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Indeed! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabComponent],
  encapsulation: 2
});
var NgxPopoverFormComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NgxPopoverFormComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxPopoverFormComponent);
});
_class2 = NgxPopoverFormComponent;
_class2.ɵfac = function NgxPopoverFormComponent_Factory(t) {
  return new (t || _class2)();
};
_class2.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["ngx-popover-form"]],
  decls: 10,
  vars: 0,
  consts: [[1, "p-4"], [1, "form-group"], ["type", "text", "placeholder", "Recipients", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100"]],
  template: function NgxPopoverFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  encapsulation: 2
});
var NgxPopoverCardComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NgxPopoverCardComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxPopoverCardComponent);
});
_class3 = NgxPopoverCardComponent;
_class3.ɵfac = function NgxPopoverCardComponent_Factory(t) {
  return new (t || _class3)();
};
_class3.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class3,
  selectors: [["ngx-popover-card"]],
  decls: 5,
  vars: 0,
  consts: [[1, "popover-card"], ["status", "warning"]],
  template: function NgxPopoverCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Hello! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
  styles: ["nb-card[_ngcontent-%COMP%] {\n      margin: 0;\n      max-width: 20rem;\n    }"]
});

/***/ }),

/***/ 10264:
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal-overlays/popovers/popovers.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoversComponent": () => (/* binding */ PopoversComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _popover_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-examples.component */ 13583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;




function PopoversComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-tabset")(1, "nb-tab", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Such a wonderful day! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-tab", 19)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Indeed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function PopoversComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "form")(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function PopoversComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 25)(1, "nb-card-header", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Hello! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
var PopoversComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PopoversComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoversComponent);
  this.tabsComponent = _popover_examples_component__WEBPACK_IMPORTED_MODULE_2__.NgxPopoverTabsComponent;
  this.cardComponent = _popover_examples_component__WEBPACK_IMPORTED_MODULE_2__.NgxPopoverCardComponent;
  this.formComponent = _popover_examples_component__WEBPACK_IMPORTED_MODULE_2__.NgxPopoverFormComponent;
});
_class = PopoversComponent;
_class.ɵfac = function PopoversComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-popovers"]],
  decls: 102,
  vars: 6,
  consts: [[1, "row"], [1, "col-lg-6"], ["size", "small"], ["nbButton", "", "status", "danger", "nbPopover", "Hello, how are you today?", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "left"], ["nbButton", "", "status", "danger", "nbPopover", "Hello, how are you today?", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "top"], ["nbButton", "", "status", "danger", "nbPopover", "Hello, how are you today?", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "bottom"], ["nbButton", "", "status", "danger", "nbPopover", "Hello, how are you today?", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "right"], ["nbButton", "", "status", "success", "nbPopover", "Hello, how are you today?"], ["nbButton", "", "status", "success", "nbPopover", "Hello, how are you today?", "nbPopoverTrigger", "hover"], ["nbButton", "", "status", "success", "nbPopover", "Hello, how are you today?", "nbPopoverTrigger", "hint"], ["tabs", ""], ["form", ""], ["card", ""], ["nbButton", "", "status", "warning", 3, "nbPopover"], [1, "col-md-12"], [1, "debounce-card"], ["nbButton", "", "nbPopover", "Popover!", "nbPopoverTrigger", "hint"], ["tabTitle", "What's up?"], [1, "p-4"], ["tabTitle", "Second Tab"], [1, "form-group"], ["type", "text", "placeholder", "Recipients", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "popover-card"], ["status", "warning"]],
  template: function PopoversComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card", 2)(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Popover Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card-body")(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "When popover has not enough space based on the configured placement, it will adjust accordingly trying to fit the screen.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 1)(17, "nb-card", 2)(18, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Simple Popovers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nb-card-body")(21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "In a simples form popover can take a string of text to render.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "on click");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "on hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "on hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 0)(30, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, PopoversComponent_ng_template_31_Template, 7, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, PopoversComponent_ng_template_33_Template, 10, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PopoversComponent_ng_template_35_Template, 5, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nb-card", 2)(38, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Template Popovers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "nb-card-body")(41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "You can pass a refference to `ng-template` to be rendered.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "With tabs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "With form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "With card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 1)(50, "nb-card", 2)(51, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Component Popovers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "nb-card-body")(54, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Same way popover can render any angular compnoent.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "With tabs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "With form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "With card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 0)(63, "div", 14)(64, "nb-card")(65, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Event Debouncing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "nb-card-body", 15)(68, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Quickly move mouse cursor over the buttons, only the last popover will be created. It allows us to avoid excess white improving page performance.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, " show hint ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbPopover", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbPopover", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbPopover", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbPopover", ctx.tabsComponent);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbPopover", ctx.formComponent);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbPopover", ctx.cardComponent);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTabComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent],
  styles: ["nb-card-body[_ngcontent-%COMP%] {\n  margin: 0 -0.5rem;\n}\nnb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0.5rem 0;\n}\n\n.popover-card[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 20rem;\n}"]
});

/***/ }),

/***/ 17655:
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-overlays/toastr/toastr.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastrComponent": () => (/* binding */ ToastrComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);


var _class;





function ToastrComponent_nb_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r2);
  }
}
function ToastrComponent_nb_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", t_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r3);
  }
}
var ToastrComponent = /*#__PURE__*/function () {
  function ToastrComponent(toastrService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToastrComponent);
    this.toastrService = toastrService;
    this.index = 1;
    this.destroyByClick = true;
    this.duration = 2000;
    this.hasIcon = true;
    this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalPhysicalPosition.TOP_RIGHT;
    this.preventDuplicates = false;
    this.status = 'primary';
    this.title = 'HI there!';
    this.content = "I'm cool toaster!";
    this.types = ['primary', 'success', 'info', 'warning', 'danger'];
    this.positions = [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalPhysicalPosition.TOP_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalPhysicalPosition.TOP_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalPhysicalPosition.BOTTOM_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalPhysicalPosition.BOTTOM_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalLogicalPosition.TOP_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalLogicalPosition.TOP_START, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalLogicalPosition.BOTTOM_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbGlobalLogicalPosition.BOTTOM_START];
    this.quotes = [{
      title: null,
      body: 'We rock at Angular'
    }, {
      title: null,
      body: 'Titles are not always needed'
    }, {
      title: null,
      body: 'Toastr rock!'
    }];
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ToastrComponent, [{
    key: "makeToast",
    value: function makeToast() {
      this.showToast(this.status, this.title, this.content);
    }
  }, {
    key: "openRandomToast",
    value: function openRandomToast() {
      var typeIndex = Math.floor(Math.random() * this.types.length);
      var quoteIndex = Math.floor(Math.random() * this.quotes.length);
      var type = this.types[typeIndex];
      var quote = this.quotes[quoteIndex];
      this.showToast(type, quote.title, quote.body);
    }
  }, {
    key: "showToast",
    value: function showToast(type, title, body) {
      var config = {
        status: type,
        destroyByClick: this.destroyByClick,
        duration: this.duration,
        hasIcon: this.hasIcon,
        position: this.position,
        preventDuplicates: this.preventDuplicates
      };
      var titleContent = title ? ". ".concat(title) : '';
      this.index += 1;
      this.toastrService.show(body, "Toast ".concat(this.index).concat(titleContent), config);
    }
  }]);
  return ToastrComponent;
}();
_class = ToastrComponent;
_class.ɵfac = function ToastrComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbToastrService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-toastr"]],
  decls: 44,
  vars: 10,
  consts: [[1, "row"], [1, "col-md-6", "col-sm-12"], [1, "form-group"], [1, "label"], [1, "position-select", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "name", "title", 3, "ngModel", "ngModelChange"], ["nbInput", "", "name", "content", 3, "ngModel", "ngModelChange"], ["nbInput", "", "type", "number", "name", "timeout", 3, "ngModel", "ngModelChange"], [3, "selected", "selectedChange"], [3, "ngModel", "ngModelChange"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], [3, "value"]],
  template: function ToastrComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Toaster configuration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Position:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nb-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedChange", function ToastrComponent_Template_nb_select_selectedChange_9_listener($event) {
        return ctx.position = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ToastrComponent_nb_option_10_Template, 2, 2, "nb-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Title:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ToastrComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form")(16, "div", 2)(17, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Content:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ToastrComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.content = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2)(21, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Time to hide toast, ms. 0 to persistent toast:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ToastrComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.duration = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 1)(25, "div", 2)(26, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Toast type:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nb-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedChange", function ToastrComponent_Template_nb_select_selectedChange_28_listener($event) {
        return ctx.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ToastrComponent_nb_option_29_Template, 2, 2, "nb-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div")(31, "nb-checkbox", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ToastrComponent_Template_nb_checkbox_ngModelChange_31_listener($event) {
        return ctx.destroyByClick = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Hide on click");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "nb-checkbox", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ToastrComponent_Template_nb_checkbox_ngModelChange_34_listener($event) {
        return ctx.preventDuplicates = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Prevent arising of duplicate toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div")(37, "nb-checkbox", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ToastrComponent_Template_nb_checkbox_ngModelChange_37_listener($event) {
        return ctx.hasIcon = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Show toast with icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "nb-card-footer")(40, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToastrComponent_Template_button_click_40_listener() {
        return ctx.makeToast();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Show toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToastrComponent_Template_button_click_42_listener() {
        return ctx.openRandomToast();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Random toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx.position);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.positions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.content);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.duration);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.destroyByClick);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.preventDuplicates);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.hasIcon);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCheckboxComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbOptionComponent],
  styles: ["[_nghost-%COMP%]   .position-select[_ngcontent-%COMP%] {\n  min-width: 13rem;\n}\n[_nghost-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  margin-right: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  margin-left: 1rem;\n}"]
});

/***/ }),

/***/ 18930:
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal-overlays/tooltip/tooltip.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;


var TooltipComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TooltipComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipComponent);
});
_class = TooltipComponent;
_class.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-tooltip"]],
  decls: 40,
  vars: 0,
  consts: [[1, "row"], [1, "col-md-12", "col-lg-6", "col-xxxl-4"], ["nbTooltip", "This is a tooltip", "nbTooltipIcon", "home-outline", "nbButton", ""], ["nbTooltip", "", "nbTooltipIcon", "alert-triangle", "nbTooltipStatus", "danger", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "right", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "bottom", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "left", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "primary", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "success", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "danger", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "info", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "warning", "nbButton", ""]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Tooltip With Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Show Tooltip");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Show Tooltip");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "nb-card")(12, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tooltip Placements");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nb-card-body")(15, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 1)(24, "nb-card")(25, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Colored Tooltips");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "nb-card-body")(28, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Default");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Success");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTooltipDirective],
  styles: ["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}"]
});

/***/ }),

/***/ 88850:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/modal-overlays/window/window-form/window-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowFormComponent": () => (/* binding */ WindowFormComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);


var _class;



var WindowFormComponent = /*#__PURE__*/function () {
  function WindowFormComponent(windowRef) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WindowFormComponent);
    this.windowRef = windowRef;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WindowFormComponent, [{
    key: "close",
    value: function close() {
      this.windowRef.close();
    }
  }]);
  return WindowFormComponent;
}();
_class = WindowFormComponent;
_class.ɵfac = function WindowFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbWindowRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 7,
  vars: 0,
  consts: [[1, "form"], ["for", "subject"], ["nbInput", "", "id", "subject", "type", "text"], ["for", "text", 1, "text-label"], ["nbInput", "", "id", "text"]],
  template: function WindowFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Subject:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Text:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective],
  styles: ["[_nghost-%COMP%]     .form {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .form .text-label {\n  margin-top: 1.5rem;\n}"]
});

/***/ }),

/***/ 108:
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-overlays/window/window.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowComponent": () => (/* binding */ WindowComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _window_form_window_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-form/window-form.component */ 88850);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;




var _c0 = ["contentTemplate"];
var _c1 = ["disabledEsc"];
function WindowComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Here is the text provided via config: \"", data_r4.text, "\"");
  }
}
function WindowComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Disabled close on escape click.\n");
  }
}
var WindowComponent = /*#__PURE__*/function () {
  function WindowComponent(windowService) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WindowComponent);
    this.windowService = windowService;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WindowComponent, [{
    key: "openWindow",
    value: function openWindow(contentTemplate) {
      this.windowService.open(contentTemplate, {
        title: 'Window content from template',
        context: {
          text: 'some text to pass into template'
        }
      });
    }
  }, {
    key: "openWindowForm",
    value: function openWindowForm() {
      this.windowService.open(_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_2__.WindowFormComponent, {
        title: "Window"
      });
    }
  }, {
    key: "openWindowWithoutBackdrop",
    value: function openWindowWithoutBackdrop() {
      this.windowService.open(this.disabledEscTemplate, {
        title: 'Window without backdrop',
        hasBackdrop: false,
        closeOnEsc: false
      });
    }
  }]);
  return WindowComponent;
}();
_class = WindowComponent;
_class.ɵfac = function WindowComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbWindowService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-window"]],
  viewQuery: function WindowComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.disabledEscTemplate = _t.first);
    }
  },
  decls: 23,
  vars: 0,
  consts: [[1, "row"], [1, "col-md-12", "col-lg-12", "col-xxxl-6"], ["nbButton", "", 3, "click"], ["contentTemplate", ""], ["disabledEsc", ""]],
  template: function WindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Window Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card-body")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WindowComponent_Template_button_click_6_listener() {
        return ctx.openWindowForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Open window form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WindowComponent_Template_button_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openWindow(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Open window with template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 1)(11, "nb-card")(12, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Window Without Backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nb-card-body")(15, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WindowComponent_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openWindow(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Open window with backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WindowComponent_Template_button_click_17_listener() {
        return ctx.openWindowWithoutBackdrop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Open window without backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, WindowComponent_ng_template_19_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, WindowComponent_ng_template_21_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonComponent],
  styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n@media (max-width: 1599.98px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 0.8rem;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin-bottom: 2rem;\n    padding: 0.75rem;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}"]
});

/***/ })

}]);