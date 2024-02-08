"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_layout_layout_module_ts"],{

/***/ 92110:
/*!***************************************************************!*\
  !*** ./src/app/pages/layout/accordion/accordion.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionComponent": () => (/* binding */ AccordionComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;


var _c0 = ["item"];
var AccordionComponent = /*#__PURE__*/function () {
  function AccordionComponent() {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AccordionComponent);
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AccordionComponent, [{
    key: "toggle",
    value: function toggle() {
      this.accordion.toggle();
    }
  }]);
  return AccordionComponent;
}();
_class = AccordionComponent;
_class.ɵfac = function AccordionComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-accordion"]],
  viewQuery: function AccordionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    }
  },
  decls: 42,
  vars: 0,
  consts: [[1, "accordions-container", "row"], [1, "accordion-container", "col-md-12", "col-lg-6", "col-xxxl-6"], ["nbButton", "", 3, "click"], ["item", ""], ["multi", ""]],
  template: function AccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Toggle Accordion By Button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_6_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Toggle First Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-accordion")(9, "nb-accordion-item", null, 3)(11, "nb-accordion-item-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Product Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nb-accordion-item-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nb-accordion-item")(16, "nb-accordion-item-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Reviews ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nb-accordion-item-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nb-accordion-item")(21, "nb-accordion-item-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nb-accordion-item-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 1)(26, "nb-accordion", 4)(27, "nb-accordion-item")(28, "nb-accordion-item-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Product Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "nb-accordion-item-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "nb-accordion-item")(33, "nb-accordion-item-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Reviews ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nb-accordion-item-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nb-accordion-item")(38, "nb-accordion-item-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "nb-accordion-item-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionItemHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionItemBodyComponent],
  styles: ["[_nghost-%COMP%]   .accordion-container[_ngcontent-%COMP%]:first-child {\n  margin-bottom: var(--card-margin-bottom);\n}"]
});

/***/ }),

/***/ 99851:
/*!***********************************************************************!*\
  !*** ./src/app/pages/layout/infinite-list/infinite-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteListComponent": () => (/* binding */ InfiniteListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 45479);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ 39644);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _news_post_placeholder_news_post_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-post-placeholder/news-post-placeholder.component */ 16003);
/* harmony import */ var _news_post_news_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-post/news-post.component */ 68270);



var _class;






function InfiniteListComponent_nb_list_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-news-post", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var newsPost_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("post", newsPost_r4);
  }
}
function InfiniteListComponent_nb_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-news-post-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function InfiniteListComponent_nb_list_item_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-news-post", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var newsPost_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("post", newsPost_r6);
  }
}
function InfiniteListComponent_nb_list_item_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-news-post-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
var InfiniteListComponent = /*#__PURE__*/function () {
  function InfiniteListComponent(newsService) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InfiniteListComponent);
    this.newsService = newsService;
    this.firstCard = {
      news: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: 1
    };
    this.secondCard = {
      news: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: 1
    };
    this.pageSize = 10;
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(InfiniteListComponent, [{
    key: "loadNext",
    value: function loadNext(cardData) {
      if (cardData.loading) {
        return;
      }
      cardData.loading = true;
      cardData.placeholders = new Array(this.pageSize);
      this.newsService.load(cardData.pageToLoadNext, this.pageSize).subscribe(function (nextNews) {
        var _cardData$news;
        cardData.placeholders = [];
        (_cardData$news = cardData.news).push.apply(_cardData$news, (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nextNews));
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
    }
  }]);
  return InfiniteListComponent;
}();
_class = InfiniteListComponent;
_class.ɵfac = function InfiniteListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_3__.NewsService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-infinite-list"]],
  decls: 15,
  vars: 6,
  consts: [[1, "infinite-cards", "row"], [1, "col-md-12", "col-lg-6", "col-xxxl-6"], [1, "own-scroll"], ["nbInfiniteList", "", 3, "threshold", "bottomThreshold"], [4, "ngFor", "ngForOf"], ["nbInfiniteList", "", "listenWindowScroll", "", 3, "threshold", "bottomThreshold"], [3, "post"]],
  template: function InfiniteListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card", 2)(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Own Scroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nb-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("bottomThreshold", function InfiniteListComponent_Template_nb_list_bottomThreshold_5_listener() {
        return ctx.loadNext(ctx.firstCard);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, InfiniteListComponent_nb_list_item_6_Template, 2, 1, "nb-list-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, InfiniteListComponent_nb_list_item_7_Template, 2, 0, "nb-list-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1)(9, "nb-card")(10, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Window Scroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "nb-list", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("bottomThreshold", function InfiniteListComponent_Template_nb_list_bottomThreshold_12_listener() {
        return ctx.loadNext(ctx.secondCard);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, InfiniteListComponent_nb_list_item_13_Template, 2, 1, "nb-list-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, InfiniteListComponent_nb_list_item_14_Template, 2, 0, "nb-list-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("threshold", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.firstCard.news);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.firstCard.placeholders);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("threshold", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.secondCard.news);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.secondCard.placeholders);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInfiniteListDirective, _news_post_placeholder_news_post_placeholder_component__WEBPACK_IMPORTED_MODULE_4__.NewsPostPlaceholderComponent, _news_post_news_post_component__WEBPACK_IMPORTED_MODULE_5__.NewsPostComponent],
  styles: [".infinite-cards[_ngcontent-%COMP%]   nb-card.own-scroll[_ngcontent-%COMP%] {\n  height: 50vh;\n}"]
});

/***/ }),

/***/ 16003:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/layout/infinite-list/news-post-placeholder/news-post-placeholder.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPostPlaceholderComponent": () => (/* binding */ NewsPostPlaceholderComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var NewsPostPlaceholderComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NewsPostPlaceholderComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsPostPlaceholderComponent);
  this.label = 'Loading';
});
_class = NewsPostPlaceholderComponent;
_class.ɵfac = function NewsPostPlaceholderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-news-post-placeholder"]],
  hostVars: 1,
  hostBindings: function NewsPostPlaceholderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.label);
    }
  },
  decls: 3,
  vars: 0,
  consts: [[1, "title-placeholder"], [1, "text-placeholder"], [1, "link-placeholder"]],
  template: function NewsPostPlaceholderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .title-placeholder[_ngcontent-%COMP%] {\n  height: 1.8rem;\n  margin-bottom: 0.5rem;\n  width: 80%;\n}\n[_nghost-%COMP%]   .text-placeholder[_ngcontent-%COMP%] {\n  height: 4rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .link-placeholder[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  width: 5rem;\n}\n\n[_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%] {\n  background: var(--background-basic-color-2);\n}"]
});

/***/ }),

/***/ 68270:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout/infinite-list/news-post/news-post.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPostComponent": () => (/* binding */ NewsPostComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;

var NewsPostComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NewsPostComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsPostComponent);
});
_class = NewsPostComponent;
_class.ɵfac = function NewsPostComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-news-post"]],
  inputs: {
    post: "post"
  },
  decls: 7,
  vars: 3,
  template: function NewsPostComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article")(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Read full article");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.post.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.post.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx.post.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 82419:
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/layout-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 37703);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/tabs.component */ 16924);
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion/accordion.component */ 92110);
/* harmony import */ var _infinite_list_infinite_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infinite-list/infinite-list.component */ 99851);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ 97635);
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepper/stepper.component */ 59877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;









var routes = [{
  path: '',
  component: _layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
  children: [{
    path: 'stepper',
    component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__.StepperComponent
  }, {
    path: 'list',
    component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__.ListComponent
  }, {
    path: 'infinite-list',
    component: _infinite_list_infinite_list_component__WEBPACK_IMPORTED_MODULE_5__.InfiniteListComponent
  }, {
    path: 'accordion',
    component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__.AccordionComponent
  }, {
    path: 'tabs',
    component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__.TabsComponent,
    children: [{
      path: '',
      redirectTo: 'tab1',
      pathMatch: 'full'
    }, {
      path: 'tab1',
      component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__.Tab1Component
    }, {
      path: 'tab2',
      component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__.Tab2Component
    }]
  }]
}];
var LayoutRoutingModule = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LayoutRoutingModule() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutRoutingModule);
});
_class = LayoutRoutingModule;
_class.ɵfac = function LayoutRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 37703:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var LayoutComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LayoutComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutComponent);
});
_class = LayoutComponent;
_class.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-components"]],
  decls: 1,
  vars: 0,
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 93077:
/*!***********************************************!*\
  !*** ./src/app/pages/layout/layout.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ 82419);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ 37703);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/tabs.component */ 16924);
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper/stepper.component */ 59877);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ 97635);
/* harmony import */ var _infinite_list_infinite_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infinite-list/infinite-list.component */ 99851);
/* harmony import */ var _infinite_list_news_post_news_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infinite-list/news-post/news-post.component */ 68270);
/* harmony import */ var _infinite_list_news_post_placeholder_news_post_placeholder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./infinite-list/news-post-placeholder/news-post-placeholder.component */ 16003);
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accordion/accordion.component */ 92110);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news.service */ 39644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;














var LayoutModule = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LayoutModule() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutModule);
});
_class = LayoutModule;
_class.ɵfac = function LayoutModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  providers: [_news_service__WEBPACK_IMPORTED_MODULE_12__.NewsService],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbRouteTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbStepperModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbListModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbAccordionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbUserModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.TabsComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.Tab1Component, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.Tab2Component, _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__.StepperComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_7__.ListComponent, _infinite_list_news_post_placeholder_news_post_placeholder_component__WEBPACK_IMPORTED_MODULE_10__.NewsPostPlaceholderComponent, _infinite_list_infinite_list_component__WEBPACK_IMPORTED_MODULE_8__.InfiniteListComponent, _infinite_list_news_post_news_post_component__WEBPACK_IMPORTED_MODULE_9__.NewsPostComponent, _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_11__.AccordionComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbRouteTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbStepperModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbListModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbAccordionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbUserModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule]
  });
})();

/***/ }),

/***/ 29663:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/list/fruits-list.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fruits": () => (/* binding */ fruits)
/* harmony export */ });
var fruits = ['Lemons', 'Raspberries', 'Strawberries', 'Blackberries', 'Kiwis', 'Grapefruit', 'Avocado', 'Watermelon', 'Cantaloupe', 'Oranges', 'Peaches'];

/***/ }),

/***/ 97635:
/*!*****************************************************!*\
  !*** ./src/app/pages/layout/list/list.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _fruits_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fruits-list */ 29663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;




function ListComponent_nb_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var fruit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", fruit_r2, " ");
  }
}
function ListComponent_nb_list_item_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nb-user", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", user_r3.name)("title", user_r3.title);
  }
}
var ListComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ListComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ListComponent);
  this.fruits = _fruits_list__WEBPACK_IMPORTED_MODULE_2__.fruits;
  this.users = [{
    name: 'Carla Espinosa',
    title: 'Nurse'
  }, {
    name: 'Bob Kelso',
    title: 'Doctor of Medicine'
  }, {
    name: 'Janitor',
    title: 'Janitor'
  }, {
    name: 'Perry Cox',
    title: 'Doctor of Medicine'
  }, {
    name: 'Ben Sullivan',
    title: 'Carpenter and photographer'
  }];
});
_class = ListComponent;
_class.ɵfac = function ListComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-list"]],
  decls: 14,
  vars: 2,
  consts: [[1, "lists", "row"], [1, "col-md-12", "col-lg-6", "col-xxxl-6"], [1, "list-card"], [4, "ngFor", "ngForOf"], ["size", "small", 1, "list-card"], [3, "name", "title"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card", 2)(3, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Some Fruits");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card-body")(6, "nb-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ListComponent_nb_list_item_7_Template, 2, 1, "nb-list-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "nb-card", 4)(10, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nb-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ListComponent_nb_list_item_13_Template, 2, 2, "nb-list-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fruits);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbUserComponent],
  styles: ["[_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}"]
});

/***/ }),

/***/ 39644:
/*!**********************************************!*\
  !*** ./src/app/pages/layout/news.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPost": () => (/* binding */ NewsPost),
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 40943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 80529);


var _class;



var TOTAL_PAGES = 7;
var NewsPost = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NewsPost() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsPost);
});
var NewsService = /*#__PURE__*/function () {
  function NewsService(http) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsService);
    this.http = http;
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NewsService, [{
    key: "load",
    value: function load(page, pageSize) {
      var startIndex = (page - 1) % TOTAL_PAGES * pageSize;
      return this.http.get('assets/data/news.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (news) {
        return news.splice(startIndex, pageSize);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1500));
    }
  }]);
  return NewsService;
}();
_class = NewsService;
_class.ɵfac = function NewsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 59877:
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/stepper/stepper.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperComponent": () => (/* binding */ StepperComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;





function StepperComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "First step");
  }
}
function StepperComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second step");
  }
}
function StepperComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Fourth step");
  }
}
var _c0 = function _c0(a0) {
  return {
    "form-control-danger": a0
  };
};
var StepperComponent = /*#__PURE__*/function () {
  function StepperComponent(fb) {
    (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StepperComponent);
    this.fb = fb;
  }
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StepperComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.firstForm = this.fb.group({
        firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      });
      this.secondForm = this.fb.group({
        secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      });
      this.thirdForm = this.fb.group({
        thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      });
    }
  }, {
    key: "onFirstSubmit",
    value: function onFirstSubmit() {
      this.firstForm.markAsDirty();
    }
  }, {
    key: "onSecondSubmit",
    value: function onSecondSubmit() {
      this.secondForm.markAsDirty();
    }
  }, {
    key: "onThirdSubmit",
    value: function onThirdSubmit() {
      this.thirdForm.markAsDirty();
    }
  }]);
  return StepperComponent;
}();
_class = StepperComponent;
_class.ɵfac = function StepperComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-stepper"]],
  decls: 119,
  vars: 20,
  consts: [[1, "col-md-12", "col-lg-12", "col-xxxl-12"], ["orientation", "horizontal"], [3, "label"], ["labelOne", ""], ["nbButton", "", "disabled", "", "nbStepperNext", ""], ["nbButton", "", "nbStepperNext", ""], ["labelTwo", ""], ["nbButton", "", "nbStepperPrevious", ""], ["label", "Third step"], ["labelFour", ""], [1, "steppers-container", "row"], [1, "col-md-12", "col-lg-6", "col-xxxl-6"], ["stepper", ""], ["label", "First step", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], [1, "lorem"], [1, "input-group"], ["type", "text", "placeholder", "Enter your name", "formControlName", "firstCtrl", 1, "form-control", 3, "ngClass"], ["label", "Second step", 3, "stepControl"], ["type", "text", "placeholder", "Enter favorite movie", "formControlName", "secondCtrl", 1, "form-control", 3, "ngClass"], ["label", "Third step", 3, "stepControl"], ["type", "text", "placeholder", "Enter something", "formControlName", "thirdCtrl", 1, "form-control", 3, "ngClass"], ["label", "Third step", 3, "stepControl", "hidden"], [1, "step-container"], ["nbButton", "", 3, "click"], ["size", "medium"], ["orientation", "vertical"], ["label", "First step"], ["label", "Second step"], ["label", "Fourth step"]],
  template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-body")(2, "nb-stepper", 1)(3, "nb-step", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StepperComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Step content #1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nb-step", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, StepperComponent_ng_template_13_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Step content #2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nb-step", 8)(22, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Step content #3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nb-step", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, StepperComponent_ng_template_29_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Step content #4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "div", 11)(39, "nb-card")(40, "nb-card-body")(41, "nb-stepper", null, 12)(43, "nb-step", 13)(44, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StepperComponent_Template_form_ngSubmit_44_listener() {
        return ctx.onFirstSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down. Nullizzle sapien velizzle, my shizz pimpin', shizzle my nizzle crocodizzle shut the shizzle up, gravida vizzle, dang. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "nb-step", 18)(52, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StepperComponent_Template_form_ngSubmit_52_listener() {
        return ctx.onSecondSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Pellentesque we gonna chung tortor. Sizzle pizzle. Fizzle izzle dolor dapibus fo shizzle mah nizzle fo rizzle, mah home g-dizzle tempus tempor. Maurizzle cool nibh owned turpizzle. My shizz fo shizzle tortor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "nb-step", 20)(62, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StepperComponent_Template_form_ngSubmit_62_listener() {
        return ctx.onThirdSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Things boom shackalack rhoncus yo. In fo shizzle my nizzle gangsta platea dictumst. Check it out pot. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "nb-step", 22)(72, "div", 23)(73, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Wizard completed!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_75_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r6.reset());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Try again");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 11)(78, "nb-card", 25)(79, "nb-card-body")(80, "nb-stepper", 26)(81, "nb-step", 27)(82, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Step content #1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "nb-step", 28)(91, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Step content #2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "nb-step", 8)(100, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Step content #3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "nb-step", 29)(111, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Step content #4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.firstForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.firstForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.firstForm.invalid && (ctx.firstForm.dirty || ctx.firstForm.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.secondForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.secondForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.secondForm.invalid && (ctx.secondForm.dirty || ctx.secondForm.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.thirdForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.thirdForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ctx.thirdForm.invalid && (ctx.thirdForm.dirty || ctx.thirdForm.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.thirdForm)("hidden", true);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbStepperComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbStepComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbStepperNextDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbStepperPreviousDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent],
  styles: ["[_nghost-%COMP%]     nb-stepper .step-content {\n  text-align: center;\n}\n[_nghost-%COMP%]     nb-stepper .step-content button {\n  cursor: pointer;\n  margin: 0.5rem;\n}"]
});

/***/ }),

/***/ 16924:
/*!*****************************************************!*\
  !*** ./src/app/pages/layout/tabs/tabs.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Component": () => (/* binding */ Tab1Component),
/* harmony export */   "Tab2Component": () => (/* binding */ Tab2Component),
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class, _class2, _class3;


var Tab1Component = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Tab1Component() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tab1Component);
});
_class = Tab1Component;
_class.ɵfac = function Tab1Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-tab1"]],
  decls: 8,
  vars: 0,
  consts: [["id", "tab1"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Home_appliances"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Electric_power_distribution"]],
  template: function Tab1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Early home automation began with labor-saving machines. Self-contained electric or gas powered ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "home appliances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " became viable in the 1900s with the introduction of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "electric power distribution ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines, dishwashers, and clothes dryers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
var Tab2Component = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Tab2Component() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tab2Component);
});
_class2 = Tab2Component;
_class2.ɵfac = function Tab2Component_Factory(t) {
  return new (t || _class2)();
};
_class2.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["ngx-tab2"]],
  decls: 2,
  vars: 0,
  consts: [["id", "tab2"]],
  template: function Tab2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tab 2 works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
var TabsComponent = /*#__PURE__*/(0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TabsComponent() {
  (0,_home_runner_work_MUR_Deploy_MUR_Deploy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TabsComponent);
  this.tabs = [{
    title: 'Route tab #1',
    route: 'tab1'
  }, {
    title: 'Route tab #2',
    route: 'tab2'
  }];
});
_class3 = TabsComponent;
_class3.ɵfac = function TabsComponent_Factory(t) {
  return new (t || _class3)();
};
_class3.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class3,
  selectors: [["ngx-tabs"]],
  decls: 119,
  vars: 1,
  consts: [[1, "row"], [1, "col-md-12", "col-lg-6"], ["size", "small"], ["tabTitle", "Simple Tab #1"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/X10_(industry_standard)", "title", "X10 (industry standard)"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Electric_power_transmission", "title", "Electric power transmission"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Radio_frequency", "title", "Radio frequency"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Digital_data", "title", "Digital data"], ["id", "cite_ref-8", 1, "reference"], ["target", "_blank", "href", "https://en.wikipedia.org#cite_note-8"], ["tabTitle", "Simple Tab #2"], ["tabTitle", "Simple Tab #3"], [3, "tabs"], [1, "col-12"], ["fullWidth", ""], ["tabTitle", "Full width tab #1"], ["id", "cite_ref-Smart_Home_1-0", 1, "reference"], ["target", "_blank", "href", "https://en.wikipedia.org#cite_note-Smart_Home-1"], ["id", "cite_ref-t3_2-0", 1, "reference"], ["target", "_blank", "href", "https://en.wikipedia.org#cite_note-t3-2"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Building_automation", "title", "Building automation"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Smart_thermostat", "title", "Smart thermostat"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/HVAC", "title", "HVAC"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Home_appliance", "title", "Home appliance"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Wi-Fi", "title", "Wi-Fi"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Internet_of_Things", "title", "Internet of Things", 1, "mw-redirect"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/User_interface", "title", "User interface"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Tablet_computer", "title", "Tablet computer"], ["id", "cite_ref-3", 1, "reference"], ["target", "_blank", "href", "https://en.wikipedia.org#cite_note-3"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Communications_protocol", "title", "Communications protocol"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Ethernet", "title", "Ethernet"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/RS-485", "title", "RS-485"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/6LoWPAN", "title", "6LoWPAN"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Bluetooth_low_energy", "title", "Bluetooth low energy", 1, "mw-redirect"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/ZigBee", "title", "ZigBee", 1, "mw-redirect"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Z-Wave", "title", "Z-Wave"], ["id", "cite_ref-crhomephone_4-0", 1, "reference"], ["target", "_blank", "href", "https://en.wikipedia.org#cite_note-crhomephone-4"], ["id", "cite_ref-5", 1, "reference"], ["target", "_blank", "href", "https://en.wikipedia.org#cite_note-5"], ["tabTitle", "Full width tab #2"], ["tabTitle", "Full width tab #3"]],
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card", 2)(3, "nb-tabset")(4, "nb-tab", 3)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "In 1975, the first general purpose home automation network technology, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "X10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ", was developed. It is a communication protocol for electronic devices. It primarily uses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "electric power transmission");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " wiring for signalling and control, where the signals involve brief ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "radio frequency");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " bursts of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "digital data");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, ", and remains the most widely available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "sup", 8)(20, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "[8]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " By 1978, X10 products included a 16 channel command console, a lamp module, and an appliance module. Soon after came the wall switch module and the first X10 timer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nb-tab", 10)(24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Content #2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nb-tab", 11)(27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Content #3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1)(30, "nb-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "nb-route-tabset", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "nb-card", 2)(34, "nb-tabset", 14)(35, "nb-tab", 15)(36, "p")(37, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Home automation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "smart home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "sup", 16)(43, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "[1]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " (also known as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "domotics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "sup", 18)(49, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "[2]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, ") is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "building automation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " for the home. It involves the control and automation of lighting, heating (such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "smart thermostats");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "), ventilation, air conditioning (");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "HVAC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "), and security, as well as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "home appliances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " such as washer/dryers, ovens or refrigerators/freezers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Wi-Fi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " is often used for remote monitoring and control. Home devices, when remotely monitored and controlled via the Internet, are an important constituent of the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Internet of Things");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, ". Modern systems generally consist of switches and sensors connected to a central hub sometimes called a \"gateway\" from which the system is controlled with a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "user interface");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " that is interacted either with a wall-mounted terminal, mobile phone software, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "tablet computer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " or a web interface, often but not always via Internet cloud services.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "While there are many competing vendors, there are very few worldwide accepted industry standards and the smart home space is heavily fragmented.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "sup", 28)(79, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "[3]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Popular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "communications protocol");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " for products include ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "X10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Ethernet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "RS-485");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "6LoWPAN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Bluetooth LE (BLE)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "ZigBee");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Z-Wave");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, ", or other proprietary protocols all of which are incompatible with each other.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "sup", 37)(107, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "[4]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " Manufacturers often prevent independent implementations by withholding documentation and by litigation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "sup", 39)(111, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "[5]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "nb-tab", 41)(114, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Content #2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "nb-tab", 42)(117, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Content #3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tabs", ctx.tabs);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbRouteTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent],
  styles: ["nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]     ngx-tab1, [_nghost-%COMP%]     ngx-tab2 {\n  display: block;\n  padding: 1rem 2rem;\n}"]
});

/***/ })

}]);