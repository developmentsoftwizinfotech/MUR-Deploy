(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_maps_maps_module_ts"],{

/***/ 92661:
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap),
/* harmony export */   "GoogleMapsModule": () => (/* binding */ GoogleMapsModule),
/* harmony export */   "MapBaseLayer": () => (/* binding */ MapBaseLayer),
/* harmony export */   "MapBicyclingLayer": () => (/* binding */ MapBicyclingLayer),
/* harmony export */   "MapCircle": () => (/* binding */ MapCircle),
/* harmony export */   "MapDirectionsRenderer": () => (/* binding */ MapDirectionsRenderer),
/* harmony export */   "MapDirectionsService": () => (/* binding */ MapDirectionsService),
/* harmony export */   "MapGeocoder": () => (/* binding */ MapGeocoder),
/* harmony export */   "MapGroundOverlay": () => (/* binding */ MapGroundOverlay),
/* harmony export */   "MapHeatmapLayer": () => (/* binding */ MapHeatmapLayer),
/* harmony export */   "MapInfoWindow": () => (/* binding */ MapInfoWindow),
/* harmony export */   "MapKmlLayer": () => (/* binding */ MapKmlLayer),
/* harmony export */   "MapMarker": () => (/* binding */ MapMarker),
/* harmony export */   "MapMarkerClusterer": () => (/* binding */ MapMarkerClusterer),
/* harmony export */   "MapPolygon": () => (/* binding */ MapPolygon),
/* harmony export */   "MapPolyline": () => (/* binding */ MapPolyline),
/* harmony export */   "MapRectangle": () => (/* binding */ MapRectangle),
/* harmony export */   "MapTrafficLayer": () => (/* binding */ MapTrafficLayer),
/* harmony export */   "MapTransitLayer": () => (/* binding */ MapTransitLayer)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 37451);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits.js */ 6360);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper.js */ 24288);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 98500);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 57451);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 87545);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 72986);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 7625);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */

var _c0 = ["*"];
var MapEventManager = /*#__PURE__*/function () {
  function MapEventManager(_ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapEventManager);
    this._ngZone = _ngZone;
    /** Pending listeners that were added before the target was set. */
    this._pending = [];
    this._listeners = [];
    this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
  }
  /** Clears all currently-registered event listeners. */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapEventManager, [{
    key: "_clearListeners",
    value: function _clearListeners() {
      var _iterator = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._listeners),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener.remove();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this._listeners = [];
    }
    /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */
  }, {
    key: "getLazyEmitter",
    value: function getLazyEmitter(name) {
      var _this = this;
      return this._targetStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (target) {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
          // If the target hasn't been initialized yet, cache the observer so it can be added later.
          if (!target) {
            _this._pending.push({
              observable: observable,
              observer: observer
            });
            return undefined;
          }
          var listener = target.addListener(name, function (event) {
            _this._ngZone.run(function () {
              return observer.next(event);
            });
          });
          _this._listeners.push(listener);
          return function () {
            return listener.remove();
          };
        });
        return observable;
      }));
    }
    /** Sets the current target that the manager should bind events to. */
  }, {
    key: "setTarget",
    value: function setTarget(target) {
      var currentTarget = this._targetStream.value;
      if (target === currentTarget) {
        return;
      }
      // Clear the listeners from the pre-existing target.
      if (currentTarget) {
        this._clearListeners();
        this._pending = [];
      }
      this._targetStream.next(target);
      // Add the listeners that were bound before the map was initialized.
      this._pending.forEach(function (subscriber) {
        return subscriber.observable.subscribe(subscriber.observer);
      });
      this._pending = [];
    }
    /** Destroys the manager and clears the event listeners. */
  }, {
    key: "destroy",
    value: function destroy() {
      this._clearListeners();
      this._pending = [];
      this._targetStream.complete();
    }
  }]);
  return MapEventManager;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** default options set to the Googleplex */
var DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: 'roadmap'
};
/** Arbitrary default height for the map element */
var DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */
var DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */
var GoogleMap = /*#__PURE__*/function () {
  function GoogleMap(_elementRef, _ngZone, platformId) {
    var _this2 = this;
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, GoogleMap);
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */
    this.height = DEFAULT_HEIGHT;
    /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */
    this.width = DEFAULT_WIDTH;
    this._options = DEFAULT_OPTIONS;
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/events#auth-errors
     */
    this.authFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
     */
    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
     */
    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
     */
    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
     */
    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
     */
    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
     */
    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
     */
    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
     */
    this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
     */
    this.idle = this._eventManager.getLazyEmitter('idle');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
     */
    this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
     */
    this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
     */
    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
     */
    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
     */
    this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
     */
    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
     */
    this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
     */
    this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
     */
    this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(platformId);
    if (this._isBrowser) {
      var googleMapsWindow = window;
      if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
      }
      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;
      googleMapsWindow.gm_authFailure = function () {
        if (_this2._existingAuthFailureCallback) {
          _this2._existingAuthFailureCallback();
        }
        _this2.authFailure.emit();
      };
    }
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(GoogleMap, [{
    key: "center",
    set: function set(center) {
      this._center = center;
    }
  }, {
    key: "zoom",
    set: function set(zoom) {
      this._zoom = zoom;
    }
  }, {
    key: "options",
    set: function set(options) {
      this._options = options || DEFAULT_OPTIONS;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['height'] || changes['width']) {
        this._setSize();
      }
      var googleMap = this.googleMap;
      if (googleMap) {
        if (changes['options']) {
          googleMap.setOptions(this._combineOptions());
        }
        if (changes['center'] && this._center) {
          googleMap.setCenter(this._center);
        }
        // Note that the zoom can be zero.
        if (changes['zoom'] && this._zoom != null) {
          googleMap.setZoom(this._zoom);
        }
        if (changes['mapTypeId'] && this.mapTypeId) {
          googleMap.setMapTypeId(this.mapTypeId);
        }
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;
      // It should be a noop during server-side rendering.
      if (this._isBrowser) {
        this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');
        this._setSize();
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this3.googleMap = new google.maps.Map(_this3._mapEl, _this3._combineOptions());
        });
        this._eventManager.setTarget(this.googleMap);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      if (this._isBrowser) {
        var googleMapsWindow = window;
        googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
      }
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
     */
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds, padding) {
      this._assertInitialized();
      this.googleMap.fitBounds(bounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
     */
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      this._assertInitialized();
      this.googleMap.panBy(x, y);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
     */
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      this._assertInitialized();
      this.googleMap.panTo(latLng);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
     */
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds, padding) {
      this._assertInitialized();
      this.googleMap.panToBounds(latLngBounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
     */
  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();
      return this.googleMap.getBounds() || null;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
     */
  }, {
    key: "getCenter",
    value: function getCenter() {
      this._assertInitialized();
      return this.googleMap.getCenter();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
     */
  }, {
    key: "getClickableIcons",
    value: function getClickableIcons() {
      this._assertInitialized();
      return this.googleMap.getClickableIcons();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
     */
  }, {
    key: "getHeading",
    value: function getHeading() {
      this._assertInitialized();
      return this.googleMap.getHeading();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
     */
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      this._assertInitialized();
      return this.googleMap.getMapTypeId();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
     */
  }, {
    key: "getProjection",
    value: function getProjection() {
      this._assertInitialized();
      return this.googleMap.getProjection();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
     */
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      this._assertInitialized();
      return this.googleMap.getStreetView();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
     */
  }, {
    key: "getTilt",
    value: function getTilt() {
      this._assertInitialized();
      return this.googleMap.getTilt();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
     */
  }, {
    key: "getZoom",
    value: function getZoom() {
      this._assertInitialized();
      return this.googleMap.getZoom();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
     */
  }, {
    key: "controls",
    get: function get() {
      this._assertInitialized();
      return this.googleMap.controls;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
     */
  }, {
    key: "data",
    get: function get() {
      this._assertInitialized();
      return this.googleMap.data;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
     */
  }, {
    key: "mapTypes",
    get: function get() {
      this._assertInitialized();
      return this.googleMap.mapTypes;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
     */
  }, {
    key: "overlayMapTypes",
    get: function get() {
      this._assertInitialized();
      return this.googleMap.overlayMapTypes;
    }
  }, {
    key: "_setSize",
    value: function _setSize() {
      if (this._mapEl) {
        var styles = this._mapEl.style;
        styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
        styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
      }
    }
    /** Combines the center and zoom and the other map options into a single object */
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _a, _b;
      var options = this._options || {};
      return Object.assign(Object.assign({}, options), {
        // It's important that we set **some** kind of `center` and `zoom`, otherwise
        // Google Maps will render a blank rectangle which looks broken.
        center: this._center || options.center || DEFAULT_OPTIONS.center,
        zoom: (_b = (_a = this._zoom) !== null && _a !== void 0 ? _a : options.zoom) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.zoom,
        // Passing in an undefined `mapTypeId` seems to break tile loading
        // so make sure that we have some kind of default (see #22082).
        mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId
      });
    }
    /** Asserts that the map has been initialized. */
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
    }
  }]);
  return GoogleMap;
}();
GoogleMap.ɵfac = function GoogleMap_Factory(t) {
  return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID));
};
GoogleMap.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: GoogleMap,
  selectors: [["google-map"]],
  inputs: {
    height: "height",
    width: "width",
    center: "center",
    zoom: "zoom",
    options: "options",
    mapTypeId: "mapTypeId"
  },
  outputs: {
    authFailure: "authFailure",
    boundsChanged: "boundsChanged",
    centerChanged: "centerChanged",
    mapClick: "mapClick",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    mapDragstart: "mapDragstart",
    headingChanged: "headingChanged",
    idle: "idle",
    maptypeidChanged: "maptypeidChanged",
    mapMousemove: "mapMousemove",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    projectionChanged: "projectionChanged",
    mapRightclick: "mapRightclick",
    tilesloaded: "tilesloaded",
    tiltChanged: "tiltChanged",
    zoomChanged: "zoomChanged"
  },
  exportAs: ["googleMap"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "map-container"]],
  template: function GoogleMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](1);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
GoogleMap.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID]
    }]
  }];
};
GoogleMap.propDecorators = {
  height: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  mapTypeId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  center: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  zoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  authFailure: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  boundsChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  centerChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDragend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDragstart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  headingChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  idle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  maptypeidChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMousemove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMouseout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMouseover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  projectionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapRightclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  tilesloaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  tiltChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  zoomChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GoogleMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component,
    args: [{
      selector: 'google-map',
      exportAs: 'googleMap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID]
      }]
    }];
  }, {
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    authFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    headingChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    maptypeidChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    projectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    tilesloaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    tiltChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    zoomChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();
var cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return cssUnitsPattern.test(value) ? value : "".concat(value, "px");
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MapBaseLayer = /*#__PURE__*/function () {
  function MapBaseLayer(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapBaseLayer);
    this._map = _map;
    this._ngZone = _ngZone;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapBaseLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this4 = this;
      if (this._map._isBrowser) {
        this._ngZone.runOutsideAngular(function () {
          _this4._initializeObject();
        });
        this._assertInitialized();
        this._setMap();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._unsetMap();
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
    }
  }, {
    key: "_initializeObject",
    value: function _initializeObject() {}
  }, {
    key: "_setMap",
    value: function _setMap() {}
  }, {
    key: "_unsetMap",
    value: function _unsetMap() {}
  }]);
  return MapBaseLayer;
}();
MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) {
  return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapBaseLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapBaseLayer,
  selectors: [["map-base-layer"]],
  exportAs: ["mapBaseLayer"]
});
MapBaseLayer.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapBaseLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-base-layer',
      exportAs: 'mapBaseLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */
var MapBicyclingLayer = /*#__PURE__*/function (_MapBaseLayer) {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MapBicyclingLayer, _MapBaseLayer);
  var _super = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MapBicyclingLayer);
  function MapBicyclingLayer() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapBicyclingLayer);
    return _super.apply(this, arguments);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapBicyclingLayer, [{
    key: "_initializeObject",
    value: function _initializeObject() {
      this.bicyclingLayer = new google.maps.BicyclingLayer();
    }
  }, {
    key: "_setMap",
    value: function _setMap() {
      this._assertLayerInitialized();
      this.bicyclingLayer.setMap(this._map.googleMap);
    }
  }, {
    key: "_unsetMap",
    value: function _unsetMap() {
      if (this.bicyclingLayer) {
        this.bicyclingLayer.setMap(null);
      }
    }
  }, {
    key: "_assertLayerInitialized",
    value: function _assertLayerInitialized() {
      if (!this.bicyclingLayer) {
        throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
      }
    }
  }]);
  return MapBicyclingLayer;
}(MapBaseLayer);
MapBicyclingLayer.ɵfac = /*@__PURE__*/function () {
  var ɵMapBicyclingLayer_BaseFactory;
  return function MapBicyclingLayer_Factory(t) {
    return (ɵMapBicyclingLayer_BaseFactory || (ɵMapBicyclingLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](MapBicyclingLayer)))(t || MapBicyclingLayer);
  };
}();
MapBicyclingLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapBicyclingLayer,
  selectors: [["map-bicycling-layer"]],
  exportAs: ["mapBicyclingLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-bicycling-layer',
      exportAs: 'mapBicyclingLayer'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */
var MapCircle = /*#__PURE__*/function () {
  function MapCircle(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapCircle);
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._center = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
     */
    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
     */
    this.circleClick = this._eventManager.getLazyEmitter('click');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
     */
    this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
     */
    this.circleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
     */
    this.circleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
     */
    this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
     */
    this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
     */
    this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
     */
    this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
     */
    this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
     */
    this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
     */
    this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
     */
    this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapCircle, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "center",
    set: function set(center) {
      this._center.next(center);
    }
  }, {
    key: "radius",
    set: function set(radius) {
      this._radius.next(radius);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this5 = this;
      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this5._ngZone.runOutsideAngular(function () {
            _this5.circle = new google.maps.Circle(options);
          });
          _this5._assertInitialized();
          _this5.circle.setMap(_this5._map.googleMap);
          _this5._eventManager.setTarget(_this5.circle);
        });
        this._watchForOptionsChanges();
        this._watchForCenterChanges();
        this._watchForRadiusChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      if (this.circle) {
        this.circle.setMap(null);
      }
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
     */
  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();
      return this.circle.getBounds();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
     */
  }, {
    key: "getCenter",
    value: function getCenter() {
      this._assertInitialized();
      return this.circle.getCenter();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
     */
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();
      return this.circle.getDraggable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
     */
  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();
      return this.circle.getEditable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
     */
  }, {
    key: "getRadius",
    value: function getRadius() {
      this._assertInitialized();
      return this.circle.getRadius();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
     */
  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();
      return this.circle.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._center, this._radius]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref) {
        var _ref2 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
          options = _ref2[0],
          center = _ref2[1],
          radius = _ref2[2];
        var combinedOptions = Object.assign(Object.assign({}, options), {
          center: center || options.center,
          radius: radius !== undefined ? radius : options.radius
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this6 = this;
      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this6._assertInitialized();
        _this6.circle.setOptions(options);
      });
    }
  }, {
    key: "_watchForCenterChanges",
    value: function _watchForCenterChanges() {
      var _this7 = this;
      this._center.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (center) {
        if (center) {
          _this7._assertInitialized();
          _this7.circle.setCenter(center);
        }
      });
    }
  }, {
    key: "_watchForRadiusChanges",
    value: function _watchForRadiusChanges() {
      var _this8 = this;
      this._radius.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (radius) {
        if (radius !== undefined) {
          _this8._assertInitialized();
          _this8.circle.setRadius(radius);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.circle) {
          throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapCircle;
}();
MapCircle.ɵfac = function MapCircle_Factory(t) {
  return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapCircle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapCircle,
  selectors: [["map-circle"]],
  inputs: {
    options: "options",
    center: "center",
    radius: "radius"
  },
  outputs: {
    centerChanged: "centerChanged",
    circleClick: "circleClick",
    circleDblclick: "circleDblclick",
    circleDrag: "circleDrag",
    circleDragend: "circleDragend",
    circleDragstart: "circleDragstart",
    circleMousedown: "circleMousedown",
    circleMousemove: "circleMousemove",
    circleMouseout: "circleMouseout",
    circleMouseover: "circleMouseover",
    circleMouseup: "circleMouseup",
    radiusChanged: "radiusChanged",
    circleRightclick: "circleRightclick"
  },
  exportAs: ["mapCircle"]
});
MapCircle.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapCircle.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  center: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  radius: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  centerChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleDragend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleDragstart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleMousemove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleMouseout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleMouseover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleMouseup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  radiusChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  circleRightclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-circle',
      exportAs: 'mapCircle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    radiusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Directions Renderer via the Google Maps
 * JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
 */
var MapDirectionsRenderer = /*#__PURE__*/function () {
  function MapDirectionsRenderer(_googleMap, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapDirectionsRenderer);
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.directions_changed
     */
    this.directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapDirectionsRenderer, [{
    key: "directions",
    set: function set(directions) {
      this._directions = directions;
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRendererOptions
     */
  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this9 = this;
      if (this._googleMap._isBrowser) {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this9.directionsRenderer = new google.maps.DirectionsRenderer(_this9._combineOptions());
        });
        this._assertInitialized();
        this.directionsRenderer.setMap(this._googleMap.googleMap);
        this._eventManager.setTarget(this.directionsRenderer);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this.directionsRenderer) {
        if (changes['options']) {
          this.directionsRenderer.setOptions(this._combineOptions());
        }
        if (changes['directions'] && this._directions !== undefined) {
          this.directionsRenderer.setDirections(this._directions);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      if (this.directionsRenderer) {
        this.directionsRenderer.setMap(null);
      }
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.getDirections
     */
  }, {
    key: "getDirections",
    value: function getDirections() {
      this._assertInitialized();
      return this.directionsRenderer.getDirections();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.getPanel
     */
  }, {
    key: "getPanel",
    value: function getPanel() {
      this._assertInitialized();
      return this.directionsRenderer.getPanel();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.getRouteIndex
     */
  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      this._assertInitialized();
      return this.directionsRenderer.getRouteIndex();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var options = this._options || {};
      return Object.assign(Object.assign({}, options), {
        directions: this._directions || options.directions,
        map: this._googleMap.googleMap
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.directionsRenderer) {
          throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
        }
      }
    }
  }]);
  return MapDirectionsRenderer;
}();
MapDirectionsRenderer.ɵfac = function MapDirectionsRenderer_Factory(t) {
  return new (t || MapDirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapDirectionsRenderer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapDirectionsRenderer,
  selectors: [["map-directions-renderer"]],
  inputs: {
    directions: "directions",
    options: "options"
  },
  outputs: {
    directionsChanged: "directionsChanged"
  },
  exportAs: ["mapDirectionsRenderer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
MapDirectionsRenderer.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapDirectionsRenderer.propDecorators = {
  directions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  directionsChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-directions-renderer',
      exportAs: 'mapDirectionsRenderer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    directionsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    directions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */
var MapGroundOverlay = /*#__PURE__*/function () {
  function MapGroundOverlay(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapGroundOverlay);
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(1);
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /** Whether the overlay is clickable */
    this.clickable = false;
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
     */
    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.dblclick
     */
    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  }
  /** URL of the image that will be shown in the overlay. */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapGroundOverlay, [{
    key: "url",
    set: function set(url) {
      this._url.next(url);
    }
    /** Bounds for the overlay. */
  }, {
    key: "bounds",
    get: function get() {
      return this._bounds.value;
    },
    set: function set(bounds) {
      this._bounds.next(bounds);
    }
    /** Opacity of the overlay. */
  }, {
    key: "opacity",
    set: function set(opacity) {
      this._opacity.next(opacity);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this10 = this;
      if (this._map._isBrowser) {
        // The ground overlay setup is slightly different from the other Google Maps objects in that
        // we have to recreate the `GroundOverlay` object whenever the bounds change, because
        // Google Maps doesn't provide an API to update the bounds of an existing overlay.
        this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (bounds) {
          if (_this10.groundOverlay) {
            _this10.groundOverlay.setMap(null);
            _this10.groundOverlay = undefined;
          }
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          if (bounds) {
            _this10._ngZone.runOutsideAngular(function () {
              _this10.groundOverlay = new google.maps.GroundOverlay(_this10._url.getValue(), bounds, {
                clickable: _this10.clickable,
                opacity: _this10._opacity.value
              });
            });
            _this10._assertInitialized();
            _this10.groundOverlay.setMap(_this10._map.googleMap);
            _this10._eventManager.setTarget(_this10.groundOverlay);
          }
        });
        this._watchForOpacityChanges();
        this._watchForUrlChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      if (this.groundOverlay) {
        this.groundOverlay.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getBounds
     */
  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();
      return this.groundOverlay.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getOpacity
     */
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      this._assertInitialized();
      return this.groundOverlay.getOpacity();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getUrl
     */
  }, {
    key: "getUrl",
    value: function getUrl() {
      this._assertInitialized();
      return this.groundOverlay.getUrl();
    }
  }, {
    key: "_watchForOpacityChanges",
    value: function _watchForOpacityChanges() {
      var _this11 = this;
      this._opacity.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (opacity) {
        if (opacity != null) {
          _this11._assertInitialized();
          _this11.groundOverlay.setOpacity(opacity);
        }
      });
    }
  }, {
    key: "_watchForUrlChanges",
    value: function _watchForUrlChanges() {
      var _this12 = this;
      this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (url) {
        _this12._assertInitialized();
        var overlay = _this12.groundOverlay;
        overlay.set('url', url);
        // Google Maps only redraws the overlay if we re-set the map.
        overlay.setMap(null);
        overlay.setMap(_this12._map.googleMap);
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.groundOverlay) {
          throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapGroundOverlay;
}();
MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) {
  return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapGroundOverlay.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapGroundOverlay,
  selectors: [["map-ground-overlay"]],
  inputs: {
    clickable: "clickable",
    url: "url",
    bounds: "bounds",
    opacity: "opacity"
  },
  outputs: {
    mapClick: "mapClick",
    mapDblclick: "mapDblclick"
  },
  exportAs: ["mapGroundOverlay"]
});
MapGroundOverlay.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapGroundOverlay.propDecorators = {
  url: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  bounds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  opacity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  mapClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapGroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-ground-overlay',
      exportAs: 'mapGroundOverlay'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */
var MapInfoWindow = /*#__PURE__*/function () {
  function MapInfoWindow(_googleMap, _elementRef, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapInfoWindow);
    this._googleMap = _googleMap;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
     */
    this.closeclick = this._eventManager.getLazyEmitter('closeclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.content_changed
     */
    this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
     */
    this.domready = this._eventManager.getLazyEmitter('domready');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.position_changed
     */
    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.zindex_changed
     */
    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapInfoWindow, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "position",
    set: function set(position) {
      this._position.next(position);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this13 = this;
      if (this._googleMap._isBrowser) {
        var combinedOptionsChanges = this._combineOptions();
        combinedOptionsChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this13._ngZone.runOutsideAngular(function () {
            _this13.infoWindow = new google.maps.InfoWindow(options);
          });
          _this13._eventManager.setTarget(_this13.infoWindow);
        });
        this._watchForOptionsChanges();
        this._watchForPositionChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroy.next();
      this._destroy.complete();
      // If no info window has been created on the server, we do not try closing it.
      // On the server, an info window cannot be created and this would cause errors.
      if (this.infoWindow) {
        this.close();
      }
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
     */
  }, {
    key: "close",
    value: function close() {
      this._assertInitialized();
      this.infoWindow.close();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
     */
  }, {
    key: "getContent",
    value: function getContent() {
      this._assertInitialized();
      return this.infoWindow.getContent();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.getPosition
     */
  }, {
    key: "getPosition",
    value: function getPosition() {
      this._assertInitialized();
      return this.infoWindow.getPosition();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
     */
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();
      return this.infoWindow.getZIndex();
    }
    /**
     * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
     * then the position property of the options input is used instead.
     */
  }, {
    key: "open",
    value: function open(anchor) {
      this._assertInitialized();
      var anchorObject = anchor ? anchor.getAnchor() : undefined;
      // Prevent the info window from initializing when trying to reopen on the same anchor.
      // Note that when the window is opened for the first time, the anchor will always be
      // undefined. If that's the case, we have to allow it to open in order to handle the
      // case where the window doesn't have an anchor, but is placed at a particular position.
      if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
        this._elementRef.nativeElement.style.display = '';
        this.infoWindow.open(this._googleMap.googleMap, anchorObject);
      }
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _this14 = this;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._position]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref3) {
        var _ref4 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
          options = _ref4[0],
          position = _ref4[1];
        var combinedOptions = Object.assign(Object.assign({}, options), {
          position: position || options.position,
          content: _this14._elementRef.nativeElement
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this15 = this;
      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(function (options) {
        _this15._assertInitialized();
        _this15.infoWindow.setOptions(options);
      });
    }
  }, {
    key: "_watchForPositionChanges",
    value: function _watchForPositionChanges() {
      var _this16 = this;
      this._position.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(function (position) {
        if (position) {
          _this16._assertInitialized();
          _this16.infoWindow.setPosition(position);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.infoWindow) {
          throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
        }
      }
    }
  }]);
  return MapInfoWindow;
}();
MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) {
  return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapInfoWindow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapInfoWindow,
  selectors: [["map-info-window"]],
  hostAttrs: [2, "display", "none"],
  inputs: {
    options: "options",
    position: "position"
  },
  outputs: {
    closeclick: "closeclick",
    contentChanged: "contentChanged",
    domready: "domready",
    positionChanged: "positionChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapInfoWindow"]
});
MapInfoWindow.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapInfoWindow.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  closeclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  contentChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  domready: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  positionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  zindexChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-info-window',
      exportAs: 'mapInfoWindow',
      host: {
        'style': 'display: none'
      }
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    closeclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    domready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */
var MapKmlLayer = /*#__PURE__*/function () {
  function MapKmlLayer(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapKmlLayer);
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
     */
    this.kmlClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml
     * #KmlLayer.defaultviewport_changed
     */
    this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
     */
    this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapKmlLayer, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "url",
    set: function set(url) {
      this._url.next(url);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this17 = this;
      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this17._ngZone.runOutsideAngular(function () {
            return _this17.kmlLayer = new google.maps.KmlLayer(options);
          });
          _this17._assertInitialized();
          _this17.kmlLayer.setMap(_this17._map.googleMap);
          _this17._eventManager.setTarget(_this17.kmlLayer);
        });
        this._watchForOptionsChanges();
        this._watchForUrlChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      if (this.kmlLayer) {
        this.kmlLayer.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
     */
  }, {
    key: "getDefaultViewport",
    value: function getDefaultViewport() {
      this._assertInitialized();
      return this.kmlLayer.getDefaultViewport();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
     */
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      this._assertInitialized();
      return this.kmlLayer.getMetadata();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
     */
  }, {
    key: "getStatus",
    value: function getStatus() {
      this._assertInitialized();
      return this.kmlLayer.getStatus();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
     */
  }, {
    key: "getUrl",
    value: function getUrl() {
      this._assertInitialized();
      return this.kmlLayer.getUrl();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
     */
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();
      return this.kmlLayer.getZIndex();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._url]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref5) {
        var _ref6 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
          options = _ref6[0],
          url = _ref6[1];
        var combinedOptions = Object.assign(Object.assign({}, options), {
          url: url || options.url
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this18 = this;
      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        if (_this18.kmlLayer) {
          _this18._assertInitialized();
          _this18.kmlLayer.setOptions(options);
        }
      });
    }
  }, {
    key: "_watchForUrlChanges",
    value: function _watchForUrlChanges() {
      var _this19 = this;
      this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (url) {
        if (url && _this19.kmlLayer) {
          _this19._assertInitialized();
          _this19.kmlLayer.setUrl(url);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.kmlLayer) {
          throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapKmlLayer;
}();
MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) {
  return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapKmlLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapKmlLayer,
  selectors: [["map-kml-layer"]],
  inputs: {
    options: "options",
    url: "url"
  },
  outputs: {
    kmlClick: "kmlClick",
    defaultviewportChanged: "defaultviewportChanged",
    statusChanged: "statusChanged"
  },
  exportAs: ["mapKmlLayer"]
});
MapKmlLayer.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapKmlLayer.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  url: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  kmlClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  defaultviewportChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  statusChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-kml-layer',
      exportAs: 'mapKmlLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    kmlClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    defaultviewportChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    statusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */
var DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */
var MapMarker = /*#__PURE__*/function () {
  function MapMarker(_googleMap, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapMarker);
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
     */
    this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
     */
    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
     */
    this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
     */
    this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
     */
    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
     */
    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
     */
    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
     */
    this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
     */
    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
     */
    this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
     */
    this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
     */
    this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
     */
    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
     */
    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
     */
    this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
     */
    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
     */
    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
     */
    this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
     */
    this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
     */
    this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
     */
    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapMarker, [{
    key: "title",
    set: function set(title) {
      this._title = title;
    }
    /**
     * Position of the marker. See:
     * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
     */
  }, {
    key: "position",
    set: function set(position) {
      this._position = position;
    }
    /**
     * Label for the marker.
     * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
     */
  }, {
    key: "label",
    set: function set(label) {
      this._label = label;
    }
    /**
     * Whether the marker is clickable. See:
     * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
     */
  }, {
    key: "clickable",
    set: function set(clickable) {
      this._clickable = clickable;
    }
    /**
     * Options used to configure the marker.
     * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
     */
  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
    /**
     * Icon to be used for the marker.
     * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
     */
  }, {
    key: "icon",
    set: function set(icon) {
      this._icon = icon;
    }
    /**
     * Whether the marker is visible.
     * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
     */
  }, {
    key: "visible",
    set: function set(value) {
      this._visible = value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this20 = this;
      if (this._googleMap._isBrowser) {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this20.marker = new google.maps.Marker(_this20._combineOptions());
        });
        this._assertInitialized();
        this.marker.setMap(this._googleMap.googleMap);
        this._eventManager.setTarget(this.marker);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var marker = this.marker,
        _title = this._title,
        _position = this._position,
        _label = this._label,
        _clickable = this._clickable,
        _icon = this._icon,
        _visible = this._visible;
      if (marker) {
        if (changes['options']) {
          marker.setOptions(this._combineOptions());
        }
        if (changes['title'] && _title !== undefined) {
          marker.setTitle(_title);
        }
        if (changes['position'] && _position) {
          marker.setPosition(_position);
        }
        if (changes['label'] && _label !== undefined) {
          marker.setLabel(_label);
        }
        if (changes['clickable'] && _clickable !== undefined) {
          marker.setClickable(_clickable);
        }
        if (changes['icon'] && _icon) {
          marker.setIcon(_icon);
        }
        if (changes['visible'] && _visible !== undefined) {
          marker.setVisible(_visible);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      if (this.marker) {
        this.marker.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
     */
  }, {
    key: "getAnimation",
    value: function getAnimation() {
      this._assertInitialized();
      return this.marker.getAnimation() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
     */
  }, {
    key: "getClickable",
    value: function getClickable() {
      this._assertInitialized();
      return this.marker.getClickable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
     */
  }, {
    key: "getCursor",
    value: function getCursor() {
      this._assertInitialized();
      return this.marker.getCursor() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
     */
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();
      return !!this.marker.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
     */
  }, {
    key: "getIcon",
    value: function getIcon() {
      this._assertInitialized();
      return this.marker.getIcon() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
     */
  }, {
    key: "getLabel",
    value: function getLabel() {
      this._assertInitialized();
      return this.marker.getLabel() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
     */
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      this._assertInitialized();
      return this.marker.getOpacity() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
     */
  }, {
    key: "getPosition",
    value: function getPosition() {
      this._assertInitialized();
      return this.marker.getPosition() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
     */
  }, {
    key: "getShape",
    value: function getShape() {
      this._assertInitialized();
      return this.marker.getShape() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
     */
  }, {
    key: "getTitle",
    value: function getTitle() {
      this._assertInitialized();
      return this.marker.getTitle() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
     */
  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();
      return this.marker.getVisible();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
     */
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();
      return this.marker.getZIndex() || null;
    }
    /** Gets the anchor point that can be used to attach other Google Maps objects. */
  }, {
    key: "getAnchor",
    value: function getAnchor() {
      this._assertInitialized();
      return this.marker;
    }
    /** Creates a combined options object using the passed-in options and the individual inputs. */
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _a, _b;
      var options = this._options || DEFAULT_MARKER_OPTIONS;
      return Object.assign(Object.assign({}, options), {
        title: this._title || options.title,
        position: this._position || options.position,
        label: this._label || options.label,
        clickable: (_a = this._clickable) !== null && _a !== void 0 ? _a : options.clickable,
        map: this._googleMap.googleMap,
        icon: this._icon || options.icon,
        visible: (_b = this._visible) !== null && _b !== void 0 ? _b : options.visible
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.marker) {
          throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapMarker;
}();
MapMarker.ɵfac = function MapMarker_Factory(t) {
  return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapMarker.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapMarker,
  selectors: [["map-marker"]],
  inputs: {
    title: "title",
    position: "position",
    label: "label",
    clickable: "clickable",
    options: "options",
    icon: "icon",
    visible: "visible"
  },
  outputs: {
    animationChanged: "animationChanged",
    mapClick: "mapClick",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    draggableChanged: "draggableChanged",
    mapDragstart: "mapDragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mapMousedown: "mapMousedown",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    mapMouseup: "mapMouseup",
    positionChanged: "positionChanged",
    mapRightclick: "mapRightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapMarker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
MapMarker.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapMarker.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  clickable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  icon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  animationChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  clickableChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  cursorChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDragend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  draggableChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapDragstart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  flatChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  iconChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMouseout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMouseover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapMouseup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  positionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  mapRightclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  shapeChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  titleChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  visibleChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  zindexChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-marker',
      exportAs: 'mapMarker'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    animationChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    clickableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    cursorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    draggableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    flatChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    iconChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    shapeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    titleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    visibleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default options for a clusterer. */
var DEFAULT_CLUSTERER_OPTIONS = {};
/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 *
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 */
var MapMarkerClusterer = /*#__PURE__*/function () {
  function MapMarkerClusterer(_googleMap, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapMarkerClusterer);
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._currentMarkers = new Set();
    this._eventManager = new MapEventManager(this._ngZone);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.ariaLabelFn = function () {
      return '';
    };
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/
     * _google_markerclustererplus.html#clusteringbegin
     */
    this.clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
     */
    this.clusteringend = this._eventManager.getLazyEmitter('clusteringend');
    /** Emits when a cluster has been clicked. */
    this.clusterClick = this._eventManager.getLazyEmitter('click');
    this._canInitialize = this._googleMap._isBrowser;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapMarkerClusterer, [{
    key: "averageCenter",
    set: function set(averageCenter) {
      this._averageCenter = averageCenter;
    }
  }, {
    key: "batchSizeIE",
    set: function set(batchSizeIE) {
      this._batchSizeIE = batchSizeIE;
    }
  }, {
    key: "calculator",
    set: function set(calculator) {
      this._calculator = calculator;
    }
  }, {
    key: "clusterClass",
    set: function set(clusterClass) {
      this._clusterClass = clusterClass;
    }
  }, {
    key: "enableRetinaIcons",
    set: function set(enableRetinaIcons) {
      this._enableRetinaIcons = enableRetinaIcons;
    }
  }, {
    key: "gridSize",
    set: function set(gridSize) {
      this._gridSize = gridSize;
    }
  }, {
    key: "ignoreHidden",
    set: function set(ignoreHidden) {
      this._ignoreHidden = ignoreHidden;
    }
  }, {
    key: "imageExtension",
    set: function set(imageExtension) {
      this._imageExtension = imageExtension;
    }
  }, {
    key: "imagePath",
    set: function set(imagePath) {
      this._imagePath = imagePath;
    }
  }, {
    key: "imageSizes",
    set: function set(imageSizes) {
      this._imageSizes = imageSizes;
    }
  }, {
    key: "maxZoom",
    set: function set(maxZoom) {
      this._maxZoom = maxZoom;
    }
  }, {
    key: "minimumClusterSize",
    set: function set(minimumClusterSize) {
      this._minimumClusterSize = minimumClusterSize;
    }
  }, {
    key: "styles",
    set: function set(styles) {
      this._styles = styles;
    }
  }, {
    key: "title",
    set: function set(title) {
      this._title = title;
    }
  }, {
    key: "zIndex",
    set: function set(zIndex) {
      this._zIndex = zIndex;
    }
  }, {
    key: "zoomOnClick",
    set: function set(zoomOnClick) {
      this._zoomOnClick = zoomOnClick;
    }
  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this21 = this;
      if (this._canInitialize) {
        var clustererWindow = window;
        if (!clustererWindow.MarkerClusterer && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
        }
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this21.markerClusterer = new MarkerClusterer(_this21._googleMap.googleMap, [], _this21._combineOptions());
        });
        this._assertInitialized();
        this._eventManager.setTarget(this.markerClusterer);
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      if (this._canInitialize) {
        this._watchForMarkerChanges();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var clusterer = this.markerClusterer,
        ariaLabelFn = this.ariaLabelFn,
        _averageCenter = this._averageCenter,
        _batchSizeIE = this._batchSizeIE,
        _calculator = this._calculator,
        _styles = this._styles,
        _clusterClass = this._clusterClass,
        _enableRetinaIcons = this._enableRetinaIcons,
        _gridSize = this._gridSize,
        _ignoreHidden = this._ignoreHidden,
        _imageExtension = this._imageExtension,
        _imagePath = this._imagePath,
        _imageSizes = this._imageSizes,
        _maxZoom = this._maxZoom,
        _minimumClusterSize = this._minimumClusterSize,
        _title = this._title,
        _zIndex = this._zIndex,
        _zoomOnClick = this._zoomOnClick;
      if (clusterer) {
        if (changes['options']) {
          clusterer.setOptions(this._combineOptions());
        }
        if (changes['ariaLabelFn']) {
          clusterer.ariaLabelFn = ariaLabelFn;
        }
        if (changes['averageCenter'] && _averageCenter !== undefined) {
          clusterer.setAverageCenter(_averageCenter);
        }
        if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
          clusterer.setBatchSizeIE(_batchSizeIE);
        }
        if (changes['calculator'] && !!_calculator) {
          clusterer.setCalculator(_calculator);
        }
        if (changes['clusterClass'] && _clusterClass !== undefined) {
          clusterer.setClusterClass(_clusterClass);
        }
        if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
          clusterer.setEnableRetinaIcons(_enableRetinaIcons);
        }
        if (changes['gridSize'] && _gridSize !== undefined) {
          clusterer.setGridSize(_gridSize);
        }
        if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
          clusterer.setIgnoreHidden(_ignoreHidden);
        }
        if (changes['imageExtension'] && _imageExtension !== undefined) {
          clusterer.setImageExtension(_imageExtension);
        }
        if (changes['imagePath'] && _imagePath !== undefined) {
          clusterer.setImagePath(_imagePath);
        }
        if (changes['imageSizes'] && _imageSizes) {
          clusterer.setImageSizes(_imageSizes);
        }
        if (changes['maxZoom'] && _maxZoom !== undefined) {
          clusterer.setMaxZoom(_maxZoom);
        }
        if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
          clusterer.setMinimumClusterSize(_minimumClusterSize);
        }
        if (changes['styles'] && _styles) {
          clusterer.setStyles(_styles);
        }
        if (changes['title'] && _title !== undefined) {
          clusterer.setTitle(_title);
        }
        if (changes['zIndex'] && _zIndex !== undefined) {
          clusterer.setZIndex(_zIndex);
        }
        if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
          clusterer.setZoomOnClick(_zoomOnClick);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy.next();
      this._destroy.complete();
      this._eventManager.destroy();
      if (this.markerClusterer) {
        this.markerClusterer.setMap(null);
      }
    }
  }, {
    key: "fitMapToMarkers",
    value: function fitMapToMarkers(padding) {
      this._assertInitialized();
      this.markerClusterer.fitMapToMarkers(padding);
    }
  }, {
    key: "getAverageCenter",
    value: function getAverageCenter() {
      this._assertInitialized();
      return this.markerClusterer.getAverageCenter();
    }
  }, {
    key: "getBatchSizeIE",
    value: function getBatchSizeIE() {
      this._assertInitialized();
      return this.markerClusterer.getBatchSizeIE();
    }
  }, {
    key: "getCalculator",
    value: function getCalculator() {
      this._assertInitialized();
      return this.markerClusterer.getCalculator();
    }
  }, {
    key: "getClusterClass",
    value: function getClusterClass() {
      this._assertInitialized();
      return this.markerClusterer.getClusterClass();
    }
  }, {
    key: "getClusters",
    value: function getClusters() {
      this._assertInitialized();
      return this.markerClusterer.getClusters();
    }
  }, {
    key: "getEnableRetinaIcons",
    value: function getEnableRetinaIcons() {
      this._assertInitialized();
      return this.markerClusterer.getEnableRetinaIcons();
    }
  }, {
    key: "getGridSize",
    value: function getGridSize() {
      this._assertInitialized();
      return this.markerClusterer.getGridSize();
    }
  }, {
    key: "getIgnoreHidden",
    value: function getIgnoreHidden() {
      this._assertInitialized();
      return this.markerClusterer.getIgnoreHidden();
    }
  }, {
    key: "getImageExtension",
    value: function getImageExtension() {
      this._assertInitialized();
      return this.markerClusterer.getImageExtension();
    }
  }, {
    key: "getImagePath",
    value: function getImagePath() {
      this._assertInitialized();
      return this.markerClusterer.getImagePath();
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      this._assertInitialized();
      return this.markerClusterer.getImageSizes();
    }
  }, {
    key: "getMaxZoom",
    value: function getMaxZoom() {
      this._assertInitialized();
      return this.markerClusterer.getMaxZoom();
    }
  }, {
    key: "getMinimumClusterSize",
    value: function getMinimumClusterSize() {
      this._assertInitialized();
      return this.markerClusterer.getMinimumClusterSize();
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      this._assertInitialized();
      return this.markerClusterer.getStyles();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      this._assertInitialized();
      return this.markerClusterer.getTitle();
    }
  }, {
    key: "getTotalClusters",
    value: function getTotalClusters() {
      this._assertInitialized();
      return this.markerClusterer.getTotalClusters();
    }
  }, {
    key: "getTotalMarkers",
    value: function getTotalMarkers() {
      this._assertInitialized();
      return this.markerClusterer.getTotalMarkers();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();
      return this.markerClusterer.getZIndex();
    }
  }, {
    key: "getZoomOnClick",
    value: function getZoomOnClick() {
      this._assertInitialized();
      return this.markerClusterer.getZoomOnClick();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
      var options = this._options || DEFAULT_CLUSTERER_OPTIONS;
      return Object.assign(Object.assign({}, options), {
        ariaLabelFn: (_a = this.ariaLabelFn) !== null && _a !== void 0 ? _a : options.ariaLabelFn,
        averageCenter: (_b = this._averageCenter) !== null && _b !== void 0 ? _b : options.averageCenter,
        batchSize: (_c = this.batchSize) !== null && _c !== void 0 ? _c : options.batchSize,
        batchSizeIE: (_d = this._batchSizeIE) !== null && _d !== void 0 ? _d : options.batchSizeIE,
        calculator: (_e = this._calculator) !== null && _e !== void 0 ? _e : options.calculator,
        clusterClass: (_f = this._clusterClass) !== null && _f !== void 0 ? _f : options.clusterClass,
        enableRetinaIcons: (_g = this._enableRetinaIcons) !== null && _g !== void 0 ? _g : options.enableRetinaIcons,
        gridSize: (_h = this._gridSize) !== null && _h !== void 0 ? _h : options.gridSize,
        ignoreHidden: (_j = this._ignoreHidden) !== null && _j !== void 0 ? _j : options.ignoreHidden,
        imageExtension: (_k = this._imageExtension) !== null && _k !== void 0 ? _k : options.imageExtension,
        imagePath: (_l = this._imagePath) !== null && _l !== void 0 ? _l : options.imagePath,
        imageSizes: (_m = this._imageSizes) !== null && _m !== void 0 ? _m : options.imageSizes,
        maxZoom: (_o = this._maxZoom) !== null && _o !== void 0 ? _o : options.maxZoom,
        minimumClusterSize: (_p = this._minimumClusterSize) !== null && _p !== void 0 ? _p : options.minimumClusterSize,
        styles: (_q = this._styles) !== null && _q !== void 0 ? _q : options.styles,
        title: (_r = this._title) !== null && _r !== void 0 ? _r : options.title,
        zIndex: (_s = this._zIndex) !== null && _s !== void 0 ? _s : options.zIndex,
        zoomOnClick: (_t = this._zoomOnClick) !== null && _t !== void 0 ? _t : options.zoomOnClick
      });
    }
  }, {
    key: "_watchForMarkerChanges",
    value: function _watchForMarkerChanges() {
      var _this22 = this;
      this._assertInitialized();
      var initialMarkers = [];
      var _iterator2 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._getInternalMarkers(this._markers.toArray())),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var marker = _step2.value;
          this._currentMarkers.add(marker);
          initialMarkers.push(marker);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.markerClusterer.addMarkers(initialMarkers);
      this._markers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(function (markerComponents) {
        _this22._assertInitialized();
        var newMarkers = new Set(_this22._getInternalMarkers(markerComponents));
        var markersToAdd = [];
        var markersToRemove = [];
        for (var _i = 0, _Array$from = Array.from(newMarkers); _i < _Array$from.length; _i++) {
          var marker = _Array$from[_i];
          if (!_this22._currentMarkers.has(marker)) {
            _this22._currentMarkers.add(marker);
            markersToAdd.push(marker);
          }
        }
        for (var _i2 = 0, _Array$from2 = Array.from(_this22._currentMarkers); _i2 < _Array$from2.length; _i2++) {
          var _marker = _Array$from2[_i2];
          if (!newMarkers.has(_marker)) {
            markersToRemove.push(_marker);
          }
        }
        _this22.markerClusterer.addMarkers(markersToAdd, true);
        _this22.markerClusterer.removeMarkers(markersToRemove, true);
        _this22.markerClusterer.repaint();
        for (var _i3 = 0, _markersToRemove = markersToRemove; _i3 < _markersToRemove.length; _i3++) {
          var _marker2 = _markersToRemove[_i3];
          _this22._currentMarkers["delete"](_marker2);
        }
      });
    }
  }, {
    key: "_getInternalMarkers",
    value: function _getInternalMarkers(markers) {
      return markers.filter(function (markerComponent) {
        return !!markerComponent.marker;
      }).map(function (markerComponent) {
        return markerComponent.marker;
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.markerClusterer) {
          throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapMarkerClusterer;
}();
MapMarkerClusterer.ɵfac = function MapMarkerClusterer_Factory(t) {
  return new (t || MapMarkerClusterer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapMarkerClusterer.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: MapMarkerClusterer,
  selectors: [["map-marker-clusterer"]],
  contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, MapMarker, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._markers = _t);
    }
  },
  inputs: {
    ariaLabelFn: "ariaLabelFn",
    averageCenter: "averageCenter",
    batchSizeIE: "batchSizeIE",
    calculator: "calculator",
    clusterClass: "clusterClass",
    enableRetinaIcons: "enableRetinaIcons",
    gridSize: "gridSize",
    ignoreHidden: "ignoreHidden",
    imageExtension: "imageExtension",
    imagePath: "imagePath",
    imageSizes: "imageSizes",
    maxZoom: "maxZoom",
    minimumClusterSize: "minimumClusterSize",
    styles: "styles",
    title: "title",
    zIndex: "zIndex",
    zoomOnClick: "zoomOnClick",
    options: "options",
    batchSize: "batchSize"
  },
  outputs: {
    clusteringbegin: "clusteringbegin",
    clusteringend: "clusteringend",
    clusterClick: "clusterClick"
  },
  exportAs: ["mapMarkerClusterer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MapMarkerClusterer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
MapMarkerClusterer.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapMarkerClusterer.propDecorators = {
  ariaLabelFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  averageCenter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  batchSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  batchSizeIE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  calculator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  clusterClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  enableRetinaIcons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  gridSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  ignoreHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  imageExtension: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  imagePath: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  imageSizes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  maxZoom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  minimumClusterSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  styles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  zIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  zoomOnClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  clusteringbegin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  clusteringend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  clusterClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  _markers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ContentChildren,
    args: [MapMarker, {
      descendants: true
    }]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component,
    args: [{
      selector: 'map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    ariaLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    batchSizeIE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    batchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */
var MapPolygon = /*#__PURE__*/function () {
  function MapPolygon(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapPolygon);
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
     */
    this.polygonClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
     */
    this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
     */
    this.polygonDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
     */
    this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
     */
    this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
     */
    this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
     */
    this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
     */
    this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
     */
    this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
     */
    this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
     */
    this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapPolygon, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "paths",
    set: function set(paths) {
      this._paths.next(paths);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this23 = this;
      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this23._ngZone.runOutsideAngular(function () {
            _this23.polygon = new google.maps.Polygon(options);
          });
          _this23._assertInitialized();
          _this23.polygon.setMap(_this23._map.googleMap);
          _this23._eventManager.setTarget(_this23.polygon);
        });
        this._watchForOptionsChanges();
        this._watchForPathChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      if (this.polygon) {
        this.polygon.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
     */
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();
      return this.polygon.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
     */
  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();
      return this.polygon.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
     */
  }, {
    key: "getPath",
    value: function getPath() {
      this._assertInitialized();
      return this.polygon.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
     */
  }, {
    key: "getPaths",
    value: function getPaths() {
      this._assertInitialized();
      return this.polygon.getPaths();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
     */
  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();
      return this.polygon.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._paths]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref7) {
        var _ref8 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, 2),
          options = _ref8[0],
          paths = _ref8[1];
        var combinedOptions = Object.assign(Object.assign({}, options), {
          paths: paths || options.paths
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this24 = this;
      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this24._assertInitialized();
        _this24.polygon.setOptions(options);
      });
    }
  }, {
    key: "_watchForPathChanges",
    value: function _watchForPathChanges() {
      var _this25 = this;
      this._paths.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (paths) {
        if (paths) {
          _this25._assertInitialized();
          _this25.polygon.setPaths(paths);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.polygon) {
          throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapPolygon;
}();
MapPolygon.ɵfac = function MapPolygon_Factory(t) {
  return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapPolygon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapPolygon,
  selectors: [["map-polygon"]],
  inputs: {
    options: "options",
    paths: "paths"
  },
  outputs: {
    polygonClick: "polygonClick",
    polygonDblclick: "polygonDblclick",
    polygonDrag: "polygonDrag",
    polygonDragend: "polygonDragend",
    polygonDragstart: "polygonDragstart",
    polygonMousedown: "polygonMousedown",
    polygonMousemove: "polygonMousemove",
    polygonMouseout: "polygonMouseout",
    polygonMouseover: "polygonMouseover",
    polygonMouseup: "polygonMouseup",
    polygonRightclick: "polygonRightclick"
  },
  exportAs: ["mapPolygon"]
});
MapPolygon.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapPolygon.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  paths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  polygonClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonDragend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonDragstart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonMousemove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonMouseout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonMouseover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonMouseup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polygonRightclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-polygon',
      exportAs: 'mapPolygon'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    polygonClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */
var MapPolyline = /*#__PURE__*/function () {
  function MapPolyline(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapPolyline);
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._path = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
     */
    this.polylineClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
     */
    this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
     */
    this.polylineDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
     */
    this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
     */
    this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
     */
    this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
     */
    this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
     */
    this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
     */
    this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
     */
    this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
     */
    this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapPolyline, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "path",
    set: function set(path) {
      this._path.next(path);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this26 = this;
      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this26._ngZone.runOutsideAngular(function () {
            return _this26.polyline = new google.maps.Polyline(options);
          });
          _this26._assertInitialized();
          _this26.polyline.setMap(_this26._map.googleMap);
          _this26._eventManager.setTarget(_this26.polyline);
        });
        this._watchForOptionsChanges();
        this._watchForPathChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      if (this.polyline) {
        this.polyline.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
     */
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();
      return this.polyline.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
     */
  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();
      return this.polyline.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
     */
  }, {
    key: "getPath",
    value: function getPath() {
      this._assertInitialized();
      return this.polyline.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
     */
  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();
      return this.polyline.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._path]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref9) {
        var _ref10 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref9, 2),
          options = _ref10[0],
          path = _ref10[1];
        var combinedOptions = Object.assign(Object.assign({}, options), {
          path: path || options.path
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this27 = this;
      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this27._assertInitialized();
        _this27.polyline.setOptions(options);
      });
    }
  }, {
    key: "_watchForPathChanges",
    value: function _watchForPathChanges() {
      var _this28 = this;
      this._path.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (path) {
        if (path) {
          _this28._assertInitialized();
          _this28.polyline.setPath(path);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.polyline) {
          throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapPolyline;
}();
MapPolyline.ɵfac = function MapPolyline_Factory(t) {
  return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapPolyline.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapPolyline,
  selectors: [["map-polyline"]],
  inputs: {
    options: "options",
    path: "path"
  },
  outputs: {
    polylineClick: "polylineClick",
    polylineDblclick: "polylineDblclick",
    polylineDrag: "polylineDrag",
    polylineDragend: "polylineDragend",
    polylineDragstart: "polylineDragstart",
    polylineMousedown: "polylineMousedown",
    polylineMousemove: "polylineMousemove",
    polylineMouseout: "polylineMouseout",
    polylineMouseover: "polylineMouseover",
    polylineMouseup: "polylineMouseup",
    polylineRightclick: "polylineRightclick"
  },
  exportAs: ["mapPolyline"]
});
MapPolyline.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapPolyline.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  path: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  polylineClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineDragend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineDragstart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineMousemove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineMouseout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineMouseover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineMouseup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  polylineRightclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-polyline',
      exportAs: 'mapPolyline'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    polylineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */
var MapRectangle = /*#__PURE__*/function () {
  function MapRectangle(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapRectangle);
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
     */
    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
     */
    this.rectangleClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
     */
    this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
     */
    this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
     */
    this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
     */
    this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
     */
    this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
     */
    this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
     */
    this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
     */
    this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
     */
    this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
     */
    this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapRectangle, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "bounds",
    set: function set(bounds) {
      this._bounds.next(bounds);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this29 = this;
      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this29._ngZone.runOutsideAngular(function () {
            _this29.rectangle = new google.maps.Rectangle(options);
          });
          _this29._assertInitialized();
          _this29.rectangle.setMap(_this29._map.googleMap);
          _this29._eventManager.setTarget(_this29.rectangle);
        });
        this._watchForOptionsChanges();
        this._watchForBoundsChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      if (this.rectangle) {
        this.rectangle.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
     */
  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();
      return this.rectangle.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
     */
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();
      return this.rectangle.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
     */
  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();
      return this.rectangle.getEditable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
     */
  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();
      return this.rectangle.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._bounds]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref11) {
        var _ref12 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref11, 2),
          options = _ref12[0],
          bounds = _ref12[1];
        var combinedOptions = Object.assign(Object.assign({}, options), {
          bounds: bounds || options.bounds
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this30 = this;
      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this30._assertInitialized();
        _this30.rectangle.setOptions(options);
      });
    }
  }, {
    key: "_watchForBoundsChanges",
    value: function _watchForBoundsChanges() {
      var _this31 = this;
      this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (bounds) {
        if (bounds) {
          _this31._assertInitialized();
          _this31.rectangle.setBounds(bounds);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.rectangle) {
          throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapRectangle;
}();
MapRectangle.ɵfac = function MapRectangle_Factory(t) {
  return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapRectangle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapRectangle,
  selectors: [["map-rectangle"]],
  inputs: {
    options: "options",
    bounds: "bounds"
  },
  outputs: {
    boundsChanged: "boundsChanged",
    rectangleClick: "rectangleClick",
    rectangleDblclick: "rectangleDblclick",
    rectangleDrag: "rectangleDrag",
    rectangleDragend: "rectangleDragend",
    rectangleDragstart: "rectangleDragstart",
    rectangleMousedown: "rectangleMousedown",
    rectangleMousemove: "rectangleMousemove",
    rectangleMouseout: "rectangleMouseout",
    rectangleMouseover: "rectangleMouseover",
    rectangleMouseup: "rectangleMouseup",
    rectangleRightclick: "rectangleRightclick"
  },
  exportAs: ["mapRectangle"]
});
MapRectangle.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapRectangle.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  bounds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  boundsChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleDblclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleDragend: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleDragstart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleMousemove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleMouseout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleMouseover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleMouseup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }],
  rectangleRightclick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-rectangle',
      exportAs: 'mapRectangle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */
var MapTrafficLayer = /*#__PURE__*/function () {
  function MapTrafficLayer(_map, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapTrafficLayer);
    this._map = _map;
    this._ngZone = _ngZone;
    this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(true);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  }
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapTrafficLayer, [{
    key: "autoRefresh",
    set: function set(autoRefresh) {
      this._autoRefresh.next(autoRefresh);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this32 = this;
      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          _this32._ngZone.runOutsideAngular(function () {
            _this32.trafficLayer = new google.maps.TrafficLayer(options);
          });
          _this32._assertInitialized();
          _this32.trafficLayer.setMap(_this32._map.googleMap);
        });
        this._watchForAutoRefreshChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();
      this._destroyed.complete();
      if (this.trafficLayer) {
        this.trafficLayer.setMap(null);
      }
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return this._autoRefresh.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (autoRefresh) {
        var combinedOptions = {
          autoRefresh: autoRefresh
        };
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForAutoRefreshChanges",
    value: function _watchForAutoRefreshChanges() {
      var _this33 = this;
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this33._assertInitialized();
        _this33.trafficLayer.setOptions(options);
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.trafficLayer) {
        throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
      }
    }
  }]);
  return MapTrafficLayer;
}();
MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) {
  return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapTrafficLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapTrafficLayer,
  selectors: [["map-traffic-layer"]],
  inputs: {
    autoRefresh: "autoRefresh"
  },
  exportAs: ["mapTrafficLayer"]
});
MapTrafficLayer.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapTrafficLayer.propDecorators = {
  autoRefresh: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapTrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-traffic-layer',
      exportAs: 'mapTrafficLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    autoRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */
var MapTransitLayer = /*#__PURE__*/function (_MapBaseLayer2) {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MapTransitLayer, _MapBaseLayer2);
  var _super2 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MapTransitLayer);
  function MapTransitLayer() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapTransitLayer);
    return _super2.apply(this, arguments);
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapTransitLayer, [{
    key: "_initializeObject",
    value: function _initializeObject() {
      this.transitLayer = new google.maps.TransitLayer();
    }
  }, {
    key: "_setMap",
    value: function _setMap() {
      this._assertLayerInitialized();
      this.transitLayer.setMap(this._map.googleMap);
    }
  }, {
    key: "_unsetMap",
    value: function _unsetMap() {
      if (this.transitLayer) {
        this.transitLayer.setMap(null);
      }
    }
  }, {
    key: "_assertLayerInitialized",
    value: function _assertLayerInitialized() {
      if (!this.transitLayer) {
        throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
      }
    }
  }]);
  return MapTransitLayer;
}(MapBaseLayer);
MapTransitLayer.ɵfac = /*@__PURE__*/function () {
  var ɵMapTransitLayer_BaseFactory;
  return function MapTransitLayer_Factory(t) {
    return (ɵMapTransitLayer_BaseFactory || (ɵMapTransitLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](MapTransitLayer)))(t || MapTransitLayer);
  };
}();
MapTransitLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapTransitLayer,
  selectors: [["map-transit-layer"]],
  exportAs: ["mapTransitLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-transit-layer',
      exportAs: 'mapTransitLayer'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
 *
 * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
 */
var MapHeatmapLayer = /*#__PURE__*/function () {
  function MapHeatmapLayer(_googleMap, _ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapHeatmapLayer);
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
  }
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapHeatmapLayer, [{
    key: "data",
    set: function set(data) {
      this._data = data;
    }
    /**
     * Options used to configure the heatmap. See:
     * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
     */
  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this34 = this;
      var _a, _b;
      if (this._googleMap._isBrowser) {
        if (!((_b = (_a = window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.visualization) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
        }
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this34.heatmap = new google.maps.visualization.HeatmapLayer(_this34._combineOptions());
        });
        this._assertInitialized();
        this.heatmap.setMap(this._googleMap.googleMap);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _data = this._data,
        heatmap = this.heatmap;
      if (heatmap) {
        if (changes['options']) {
          heatmap.setOptions(this._combineOptions());
        }
        if (changes['data'] && _data !== undefined) {
          heatmap.setData(this._normalizeData(_data));
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.heatmap) {
        this.heatmap.setMap(null);
      }
    }
    /**
     * Gets the data that is currently shown on the heatmap.
     * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
     */
  }, {
    key: "getData",
    value: function getData() {
      this._assertInitialized();
      return this.heatmap.getData();
    }
    /** Creates a combined options object using the passed-in options and the individual inputs. */
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var options = this._options || {};
      return Object.assign(Object.assign({}, options), {
        data: this._normalizeData(this._data || options.data || []),
        map: this._googleMap.googleMap
      });
    }
    /**
     * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
     * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
     * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
     * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
     * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
     * convert it to a `LatLng` object before passing it off to Google Maps.
     */
  }, {
    key: "_normalizeData",
    value: function _normalizeData(data) {
      var result = [];
      data.forEach(function (item) {
        result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
      });
      return result;
    }
    /** Asserts that the heatmap object has been initialized. */
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.heatmap) {
          throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
        }
      }
    }
  }]);
  return MapHeatmapLayer;
}();
MapHeatmapLayer.ɵfac = function MapHeatmapLayer_Factory(t) {
  return new (t || MapHeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapHeatmapLayer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapHeatmapLayer,
  selectors: [["map-heatmap-layer"]],
  inputs: {
    data: "data",
    options: "options"
  },
  exportAs: ["mapHeatmapLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
MapHeatmapLayer.ctorParameters = function () {
  return [{
    type: GoogleMap
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
MapHeatmapLayer.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapHeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-heatmap-layer',
      exportAs: 'mapHeatmapLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();
/** Asserts that an object is a `LatLngLiteral`. */
function isLatLngLiteral(value) {
  return value && typeof value.lat === 'number' && typeof value.lng === 'number';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer];
var GoogleMapsModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function GoogleMapsModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, GoogleMapsModule);
});
GoogleMapsModule.ɵfac = function GoogleMapsModule_Factory(t) {
  return new (t || GoogleMapsModule)();
};
GoogleMapsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: GoogleMapsModule
});
GoogleMapsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GoogleMapsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](GoogleMapsModule, {
    declarations: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer],
    exports: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
 * API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
 */
var MapDirectionsService = /*#__PURE__*/function () {
  function MapDirectionsService(_ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapDirectionsService);
    this._ngZone = _ngZone;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapDirectionsService, [{
    key: "route",
    value: function route(request) {
      var _this35 = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        // Initialize the `DirectionsService` lazily since the Google Maps API may
        // not have been loaded when the provider is instantiated.
        if (!_this35._directionsService) {
          _this35._directionsService = new google.maps.DirectionsService();
        }
        var callback = function callback(result, status) {
          _this35._ngZone.run(function () {
            observer.next({
              result: result,
              status: status
            });
            observer.complete();
          });
        };
        _this35._directionsService.route(request, callback);
      });
    }
  }]);
  return MapDirectionsService;
}();
MapDirectionsService.ɵfac = function MapDirectionsService_Factory(t) {
  return new (t || MapDirectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapDirectionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  factory: function MapDirectionsService_Factory() {
    return new MapDirectionsService(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
  },
  token: MapDirectionsService,
  providedIn: "root"
});
MapDirectionsService.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapDirectionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
 * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
 */
var MapGeocoder = /*#__PURE__*/function () {
  function MapGeocoder(_ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapGeocoder);
    this._ngZone = _ngZone;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapGeocoder, [{
    key: "geocode",
    value: function geocode(request) {
      var _this36 = this;
      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        // Initialize the `Geocoder` lazily since the Google Maps API may
        // not have been loaded when the provider is instantiated.
        if (!_this36._geocoder) {
          _this36._geocoder = new google.maps.Geocoder();
        }
        _this36._geocoder.geocode(request, function (results, status) {
          _this36._ngZone.run(function () {
            observer.next({
              results: results,
              status: status
            });
            observer.complete();
          });
        });
      });
    }
  }]);
  return MapGeocoder;
}();
MapGeocoder.ɵfac = function MapGeocoder_Factory(t) {
  return new (t || MapGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
MapGeocoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  factory: function MapGeocoder_Factory() {
    return new MapGeocoder(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
  },
  token: MapGeocoder,
  providedIn: "root"
});
MapGeocoder.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
  }];
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 4984:
/*!*************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletBaseLayersDirective": () => (/* reexport safe */ _leaflet_layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_7__.LeafletBaseLayersDirective),
/* harmony export */   "LeafletDirective": () => (/* reexport safe */ _leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective),
/* harmony export */   "LeafletDirectiveWrapper": () => (/* reexport safe */ _leaflet_core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__.LeafletDirectiveWrapper),
/* harmony export */   "LeafletLayerDirective": () => (/* reexport safe */ _leaflet_layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_4__.LeafletLayerDirective),
/* harmony export */   "LeafletLayersControlDirective": () => (/* reexport safe */ _leaflet_layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_6__.LeafletLayersControlDirective),
/* harmony export */   "LeafletLayersDirective": () => (/* reexport safe */ _leaflet_layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_5__.LeafletLayersDirective),
/* harmony export */   "LeafletModule": () => (/* reexport safe */ _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__.LeafletModule),
/* harmony export */   "LeafletTileLayerDefinition": () => (/* reexport safe */ _leaflet_layers_leaflet_tile_layer_definition_model__WEBPACK_IMPORTED_MODULE_3__.LeafletTileLayerDefinition)
/* harmony export */ });
/* harmony import */ var _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaflet/leaflet.module */ 46492);
/* harmony import */ var _leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet/core/leaflet.directive */ 15845);
/* harmony import */ var _leaflet_core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet/core/leaflet.directive.wrapper */ 2929);
/* harmony import */ var _leaflet_layers_leaflet_tile_layer_definition_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaflet/layers/leaflet-tile-layer-definition.model */ 11978);
/* harmony import */ var _leaflet_layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet/layers/leaflet-layer.directive */ 32297);
/* harmony import */ var _leaflet_layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaflet/layers/leaflet-layers.directive */ 26392);
/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers.directive */ 72687);
/* harmony import */ var _leaflet_layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaflet/layers/base/leaflet-baselayers.directive */ 71162);








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 15845:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/core/leaflet.directive.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletDirective": () => (/* binding */ LeafletDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);



var LeafletDirective = /** @class */function () {
  function LeafletDirective(element, zone) {
    // Nothing here
    this.element = element;
    this.zone = zone;
    this.DEFAULT_ZOOM = 1;
    this.DEFAULT_CENTER = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng)(38.907192, -77.036871);
    this.DEFAULT_FPZ_OPTIONS = {};
    this.fitBoundsOptions = this.DEFAULT_FPZ_OPTIONS;
    this.panOptions = this.DEFAULT_FPZ_OPTIONS;
    this.zoomOptions = this.DEFAULT_FPZ_OPTIONS;
    this.zoomPanOptions = this.DEFAULT_FPZ_OPTIONS;
    // Default configuration
    this.options = {};
    // Configure callback function for the map
    this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  LeafletDirective.prototype.ngOnInit = function () {
    var _this = this;
    // Create the map with some reasonable defaults
    this.zone.runOutsideAngular(function () {
      _this.map = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.map)(_this.element.nativeElement, _this.options);
    });
    // Only setView if there is a center/zoom
    if (null != this.center && null != this.zoom) {
      this.setView(this.center, this.zoom);
    }
    // Set up all the initial settings
    if (null != this.fitBounds) {
      this.setFitBounds(this.fitBounds);
    }
    this.doResize();
    // Fire map ready event
    this.mapReady.emit(this.map);
  };
  LeafletDirective.prototype.ngOnChanges = function (changes) {
    /*
             * The following code is to address an issue with our (basic) implementation of
             * zooming and panning. From our testing, it seems that a pan operation followed
             * by a zoom operation in the same thread will interfere with eachother. The zoom
             * operation interrupts/cancels the pan, resulting in a final center point that is
             * inaccurate. The solution seems to be to either separate them with a timeout or
              * to collapse them into a setView call.
             */
    // Zooming and Panning
    if (changes['zoom'] && changes['center'] && null != this.zoom && null != this.center) {
      this.setView(changes['center'].currentValue, changes['zoom'].currentValue);
    } else if (changes['zoom']) {
      this.setZoom(changes['zoom'].currentValue);
    } else if (changes['center']) {
      this.setCenter(changes['center'].currentValue);
    }
    // Fit bounds
    if (changes['fitBounds']) {
      this.setFitBounds(changes['fitBounds'].currentValue);
    }
  };
  LeafletDirective.prototype.getMap = function () {
    return this.map;
  };
  LeafletDirective.prototype.onResize = function () {
    this.delayResize();
  };
  /**
   * Resize the map to fit it's parent container
   */
  /**
       * Resize the map to fit it's parent container
       */
  LeafletDirective.prototype.doResize =
  /**
  * Resize the map to fit it's parent container
  */
  function () {
    var _this = this;
    // Invalidate the map size to trigger it to update itself
    this.zone.runOutsideAngular(function () {
      _this.map.invalidateSize({});
    });
  };
  /**
   * Manage a delayed resize of the component
   */
  /**
       * Manage a delayed resize of the component
       */
  LeafletDirective.prototype.delayResize =
  /**
  * Manage a delayed resize of the component
  */
  function () {
    if (null != this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    this.resizeTimer = setTimeout(this.doResize.bind(this), 200);
  };
  /**
   * Set the view (center/zoom) all at once
   * @param center The new center
   * @param zoom The new zoom level
   */
  /**
       * Set the view (center/zoom) all at once
       * @param center The new center
       * @param zoom The new zoom level
       */
  LeafletDirective.prototype.setView =
  /**
  * Set the view (center/zoom) all at once
  * @param center The new center
  * @param zoom The new zoom level
  */
  function (center, zoom) {
    var _this = this;
    if (this.map && null != center && null != zoom) {
      this.zone.runOutsideAngular(function () {
        _this.map.setView(center, zoom, _this.zoomPanOptions);
      });
    }
  };
  /**
   * Set the map zoom level
   * @param zoom the new zoom level for the map
   */
  /**
       * Set the map zoom level
       * @param zoom the new zoom level for the map
       */
  LeafletDirective.prototype.setZoom =
  /**
  * Set the map zoom level
  * @param zoom the new zoom level for the map
  */
  function (zoom) {
    var _this = this;
    if (this.map && null != zoom) {
      this.zone.runOutsideAngular(function () {
        _this.map.setZoom(zoom, _this.zoomOptions);
      });
    }
  };
  /**
   * Set the center of the map
   * @param center the center point
   */
  /**
       * Set the center of the map
       * @param center the center point
       */
  LeafletDirective.prototype.setCenter =
  /**
  * Set the center of the map
  * @param center the center point
  */
  function (center) {
    var _this = this;
    if (this.map && null != center) {
      this.zone.runOutsideAngular(function () {
        _this.map.panTo(center, _this.panOptions);
      });
    }
  };
  /**
   * Fit the map to the bounds
   * @param center the center point
   */
  /**
       * Fit the map to the bounds
       * @param center the center point
       */
  LeafletDirective.prototype.setFitBounds =
  /**
  * Fit the map to the bounds
  * @param center the center point
  */
  function (latLngBounds) {
    var _this = this;
    if (this.map && null != latLngBounds) {
      this.zone.runOutsideAngular(function () {
        _this.map.fitBounds(latLngBounds, _this.fitBoundsOptions);
      });
    }
  };
  /** @nocollapse */
  LeafletDirective.ctorParameters = function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  };
  LeafletDirective.propDecorators = {
    "fitBoundsOptions": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletFitBoundsOptions']
    }],
    "panOptions": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletPanOptions']
    }],
    "zoomOptions": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletZoomOptions']
    }],
    "zoomPanOptions": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletZoomPanOptions']
    }],
    "options": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletOptions']
    }],
    "mapReady": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['leafletMapReady']
    }],
    "zoom": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletZoom']
    }],
    "center": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletCenter']
    }],
    "fitBounds": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['leafletFitBounds']
    }],
    "onResize": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['window:resize', []]
    }]
  };
  LeafletDirective.ɵfac = function LeafletDirective_Factory(t) {
    return new (t || LeafletDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  LeafletDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: LeafletDirective,
    selectors: [["", "leaflet", ""]],
    hostBindings: function LeafletDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function LeafletDirective_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      fitBoundsOptions: ["leafletFitBoundsOptions", "fitBoundsOptions"],
      panOptions: ["leafletPanOptions", "panOptions"],
      zoomOptions: ["leafletZoomOptions", "zoomOptions"],
      zoomPanOptions: ["leafletZoomPanOptions", "zoomPanOptions"],
      options: ["leafletOptions", "options"],
      zoom: ["leafletZoom", "zoom"],
      center: ["leafletCenter", "center"],
      fitBounds: ["leafletFitBounds", "fitBounds"]
    },
    outputs: {
      mapReady: "leafletMapReady"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeafletDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
      args: [{
        selector: '[leaflet]'
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
      }];
    }, {
      fitBoundsOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletFitBoundsOptions']
      }],
      panOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletPanOptions']
      }],
      zoomOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletZoomOptions']
      }],
      zoomPanOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletZoomPanOptions']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletOptions']
      }],
      mapReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
        args: ['leafletMapReady']
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['window:resize', []]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletZoom']
      }],
      center: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletCenter']
      }],
      fitBounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ['leafletFitBounds']
      }]
    });
  })();
  return LeafletDirective;
}();


//# sourceMappingURL=leaflet.directive.js.map

/***/ }),

/***/ 2929:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/core/leaflet.directive.wrapper.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletDirectiveWrapper": () => (/* binding */ LeafletDirectiveWrapper)
/* harmony export */ });
/* harmony import */ var _leaflet_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaflet.directive */ 15845);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);


var LeafletDirectiveWrapper = /** @class */function () {
  function LeafletDirectiveWrapper(leafletDirective) {
    this.leafletDirective = leafletDirective;
  }
  LeafletDirectiveWrapper.prototype.init = function () {
    // Nothing for now
  };
  LeafletDirectiveWrapper.prototype.getMap = function () {
    return this.leafletDirective.getMap();
  };
  return LeafletDirectiveWrapper;
}();

//# sourceMappingURL=leaflet.directive.wrapper.js.map

/***/ }),

/***/ 84686:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/core/leaflet.util.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletUtil": () => (/* binding */ LeafletUtil)
/* harmony export */ });
var LeafletUtil = /** @class */function () {
  function LeafletUtil() {}
  LeafletUtil.mapToArray = function (map) {
    var toReturn = [];
    for (var k in map) {
      if (map.hasOwnProperty(k)) {
        toReturn.push(map[k]);
      }
    }
    return toReturn;
  };
  return LeafletUtil;
}();

//# sourceMappingURL=leaflet.util.js.map

/***/ }),

/***/ 71162:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/base/leaflet-baselayers.directive.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletBaseLayersDirective": () => (/* binding */ LeafletBaseLayersDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_leaflet_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/leaflet.util */ 84686);
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/leaflet.directive */ 15845);
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/leaflet.directive.wrapper */ 2929);
/* harmony import */ var _control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../control/leaflet-control-layers.wrapper */ 19132);






/**
 * Baselayers directive
 *
 * This directive is provided as a convenient way to add baselayers to the map. The input accepts
 * a key-value map of layer name -> layer. Mutable changed are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed. This directive
 * will also add the layers control so users can switch between available base layers.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the plugin will use the last one it sees.
 */


var LeafletBaseLayersDirective = /** @class */function () {
  function LeafletBaseLayersDirective(leafletDirective, differs, zone) {
    this.differs = differs;
    this.zone = zone;
    this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_3__.LeafletDirectiveWrapper(leafletDirective);
    this.controlLayers = new _control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_4__.LeafletControlLayersWrapper(zone);
    this.baseLayersDiffer = this.differs.find({}).create();
  }
  Object.defineProperty(LeafletBaseLayersDirective.prototype, "baseLayers", {
    get: function get() {
      return this.baseLayersValue;
    },
    set:
    // Set/get baseLayers
    function set(v) {
      this.baseLayersValue = v;
      this.updateBaseLayers();
    },
    enumerable: true,
    configurable: true
  });
  LeafletBaseLayersDirective.prototype.ngOnDestroy = function () {
    var _this = this;
    this.baseLayers = {};
    this.zone.runOutsideAngular(function () {
      _this.controlLayers.getLayersControl().remove();
    });
  };
  LeafletBaseLayersDirective.prototype.ngOnInit = function () {
    var _this = this;
    // Init the map
    this.leafletDirective.init();
    // Initially configure the controlLayers
    this.zone.runOutsideAngular(function () {
      _this.controlLayers.init({}, _this.layersControlOptions).addTo(_this.leafletDirective.getMap());
    });
    this.updateBaseLayers();
  };
  LeafletBaseLayersDirective.prototype.ngDoCheck = function () {
    this.updateBaseLayers();
  };
  LeafletBaseLayersDirective.prototype.updateBaseLayers = function () {
    var map = this.leafletDirective.getMap();
    var layersControl = this.controlLayers.getLayersControl();
    if (null != map && null != layersControl && null != this.baseLayersDiffer) {
      var changes = this.baseLayersDiffer.diff(this.baseLayersValue);
      var results = this.controlLayers.applyBaseLayerChanges(changes);
      if (results.changed()) {
        this.syncBaseLayer();
      }
    }
  };
  /**
   * Check the current base layer and change it to the new one if necessary
   */
  /**
       * Check the current base layer and change it to the new one if necessary
       */
  LeafletBaseLayersDirective.prototype.syncBaseLayer =
  /**
  * Check the current base layer and change it to the new one if necessary
  */
  function () {
    var _this = this;
    var map = this.leafletDirective.getMap();
    var layers = _core_leaflet_util__WEBPACK_IMPORTED_MODULE_1__.LeafletUtil.mapToArray(this.baseLayers);
    var foundLayer;
    // Search all the layers in the map to see if we can find them in the baselayer array
    map.eachLayer(function (l) {
      foundLayer = layers.find(function (bl) {
        return l === bl;
      });
    });
    // Did we find the layer?
    if (null != foundLayer) {
      // Yes - set the baselayer to the one we found
      this.baseLayer = foundLayer;
    } else {
      // No - set the baselayer to the first in the array and add it to the map
      if (layers.length > 0) {
        this.baseLayer = layers[0];
        this.zone.runOutsideAngular(function () {
          _this.baseLayer.addTo(map);
        });
      }
    }
  };
  /** @nocollapse */
  LeafletBaseLayersDirective.ctorParameters = function () {
    return [{
      type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
    }];
  };
  LeafletBaseLayersDirective.propDecorators = {
    "baseLayers": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['leafletBaseLayers']
    }],
    "layersControlOptions": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['leafletLayersControlOptions']
    }]
  };
  LeafletBaseLayersDirective.ɵfac = function LeafletBaseLayersDirective_Factory(t) {
    return new (t || LeafletBaseLayersDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletDirective), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone));
  };
  LeafletBaseLayersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: LeafletBaseLayersDirective,
    selectors: [["", "leafletBaseLayers", ""]],
    inputs: {
      baseLayers: ["leafletBaseLayers", "baseLayers"],
      layersControlOptions: ["leafletLayersControlOptions", "layersControlOptions"]
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](LeafletBaseLayersDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive,
      args: [{
        selector: '[leafletBaseLayers]'
      }]
    }], function () {
      return [{
        type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletDirective
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
      }];
    }, {
      baseLayers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
        args: ['leafletBaseLayers']
      }],
      layersControlOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
        args: ['leafletLayersControlOptions']
      }]
    });
  })();
  return LeafletBaseLayersDirective;
}();


//# sourceMappingURL=leaflet-baselayers.directive.js.map

/***/ }),

/***/ 96861:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers-changes.model.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletControlLayersChanges": () => (/* binding */ LeafletControlLayersChanges)
/* harmony export */ });
var LeafletControlLayersChanges = /** @class */function () {
  function LeafletControlLayersChanges() {
    this.layersRemoved = 0;
    this.layersChanged = 0;
    this.layersAdded = 0;
  }
  LeafletControlLayersChanges.prototype.changed = function () {
    return !(this.layersRemoved === 0 && this.layersChanged === 0 && this.layersAdded === 0);
  };
  return LeafletControlLayersChanges;
}();

//# sourceMappingURL=leaflet-control-layers-changes.model.js.map

/***/ }),

/***/ 22097:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers-config.model.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletControlLayersConfig": () => (/* binding */ LeafletControlLayersConfig)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

var LeafletControlLayersConfig = /** @class */function () {
  function LeafletControlLayersConfig() {
    this.baseLayers = {};
    this.overlays = {};
  }
  return LeafletControlLayersConfig;
}();

//# sourceMappingURL=leaflet-control-layers-config.model.js.map

/***/ }),

/***/ 72687:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers.directive.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletLayersControlDirective": () => (/* binding */ LeafletLayersControlDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/leaflet.directive */ 15845);
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/leaflet.directive.wrapper */ 2929);
/* harmony import */ var _leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaflet-control-layers.wrapper */ 19132);
/* harmony import */ var _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet-control-layers-config.model */ 22097);






/**
 * Layers Control
 *
 * This directive is used to configure the layers control. The input accepts an object with two
 * key-value maps of layer name -> layer. Mutable changes are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the last one it sees will be used.
 */


var LeafletLayersControlDirective = /** @class */function () {
  function LeafletLayersControlDirective(leafletDirective, differs, zone) {
    this.differs = differs;
    this.zone = zone;
    this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__.LeafletDirectiveWrapper(leafletDirective);
    this.controlLayers = new _leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_3__.LeafletControlLayersWrapper(zone);
    // Generate differs
    this.baseLayersDiffer = this.differs.find({}).create();
    this.overlaysDiffer = this.differs.find({}).create();
  }
  Object.defineProperty(LeafletLayersControlDirective.prototype, "layersControlConfig", {
    get: function get() {
      return this.layersControlConfigValue;
    },
    set: function set(v) {
      // Validation/init stuff
      if (null == v) {
        v = new _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__.LeafletControlLayersConfig();
      }
      if (null == v.baseLayers) {
        v.baseLayers = {};
      }
      if (null == v.overlays) {
        v.overlays = {};
      }
      // Store the value
      this.layersControlConfigValue = v;
      // Update the map
      this.updateLayers();
    },
    enumerable: true,
    configurable: true
  });
  LeafletLayersControlDirective.prototype.ngOnInit = function () {
    var _this = this;
    // Init the map
    this.leafletDirective.init();
    // Set up all the initial settings
    this.zone.runOutsideAngular(function () {
      _this.controlLayers.init({}, _this.layersControlOptions).addTo(_this.leafletDirective.getMap());
    });
    this.updateLayers();
  };
  LeafletLayersControlDirective.prototype.ngOnDestroy = function () {
    var _this = this;
    this.layersControlConfig = {
      baseLayers: {},
      overlays: {}
    };
    this.zone.runOutsideAngular(function () {
      _this.controlLayers.getLayersControl().remove();
    });
  };
  LeafletLayersControlDirective.prototype.ngDoCheck = function () {
    this.updateLayers();
  };
  LeafletLayersControlDirective.prototype.updateLayers = function () {
    var map = this.leafletDirective.getMap();
    var layersControl = this.controlLayers.getLayersControl();
    if (null != map && null != layersControl) {
      // Run the baselayers differ
      if (null != this.baseLayersDiffer && null != this.layersControlConfigValue.baseLayers) {
        var changes = this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);
        this.controlLayers.applyBaseLayerChanges(changes);
      }
      // Run the overlays differ
      if (null != this.overlaysDiffer && null != this.layersControlConfigValue.overlays) {
        var changes = this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);
        this.controlLayers.applyOverlayChanges(changes);
      }
    }
  };
  /** @nocollapse */
  LeafletLayersControlDirective.ctorParameters = function () {
    return [{
      type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
    }];
  };
  LeafletLayersControlDirective.propDecorators = {
    "layersControlConfig": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['leafletLayersControl']
    }],
    "layersControlOptions": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['leafletLayersControlOptions']
    }]
  };
  LeafletLayersControlDirective.ɵfac = function LeafletLayersControlDirective_Factory(t) {
    return new (t || LeafletLayersControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone));
  };
  LeafletLayersControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: LeafletLayersControlDirective,
    selectors: [["", "leafletLayersControl", ""]],
    inputs: {
      layersControlConfig: ["leafletLayersControl", "layersControlConfig"],
      layersControlOptions: ["leafletLayersControlOptions", "layersControlOptions"]
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](LeafletLayersControlDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive,
      args: [{
        selector: '[leafletLayersControl]'
      }]
    }], function () {
      return [{
        type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.KeyValueDiffers
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
      }];
    }, {
      layersControlConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
        args: ['leafletLayersControl']
      }],
      layersControlOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
        args: ['leafletLayersControlOptions']
      }]
    });
  })();
  return LeafletLayersControlDirective;
}();


//# sourceMappingURL=leaflet-control-layers.directive.js.map

/***/ }),

/***/ 19132:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletControlLayersWrapper": () => (/* binding */ LeafletControlLayersWrapper)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet-control-layers-changes.model */ 96861);



var LeafletControlLayersWrapper = /** @class */function () {
  function LeafletControlLayersWrapper(zone) {
    this.zone = zone;
  }
  LeafletControlLayersWrapper.prototype.getLayersControl = function () {
    return this.layersControl;
  };
  LeafletControlLayersWrapper.prototype.init = function (controlConfig, controlOptions) {
    var _this = this;
    var baseLayers = controlConfig.baseLayers || {};
    var overlays = controlConfig.overlays || {};
    this.zone.runOutsideAngular(function () {
      _this.layersControl = leaflet__WEBPACK_IMPORTED_MODULE_0__.control.layers(baseLayers, overlays, controlOptions);
    });
    return this.layersControl;
  };
  LeafletControlLayersWrapper.prototype.applyBaseLayerChanges = function (changes) {
    var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__.LeafletControlLayersChanges();
    if (null != this.layersControl) {
      results = this.applyChanges(changes, this.layersControl.addBaseLayer);
    }
    return results;
  };
  LeafletControlLayersWrapper.prototype.applyOverlayChanges = function (changes) {
    var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__.LeafletControlLayersChanges();
    if (null != this.layersControl) {
      results = this.applyChanges(changes, this.layersControl.addOverlay);
    }
    return results;
  };
  LeafletControlLayersWrapper.prototype.applyChanges = function (changes, addFn) {
    var _this = this;
    var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__.LeafletControlLayersChanges();
    if (null != changes) {
      changes.forEachChangedItem(function (c) {
        _this.layersControl.removeLayer(c.previousValue);
        addFn.call(_this.layersControl, c.currentValue, c.key);
        results.layersChanged++;
      });
      changes.forEachRemovedItem(function (c) {
        _this.layersControl.removeLayer(c.previousValue);
        results.layersRemoved++;
      });
      changes.forEachAddedItem(function (c) {
        addFn.call(_this.layersControl, c.currentValue, c.key);
        results.layersAdded++;
      });
    }
    return results;
  };
  return LeafletControlLayersWrapper;
}();

//# sourceMappingURL=leaflet-control-layers.wrapper.js.map

/***/ }),

/***/ 32297:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/leaflet-layer.directive.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletLayerDirective": () => (/* binding */ LeafletLayerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/leaflet.directive */ 15845);
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/leaflet.directive.wrapper */ 2929);




/**
 * Layer directive
 *
 * This directive is used to directly control a single map layer. The purpose of this directive is to
 * be used as part of a child structural directive of the map element.
 *
 */


var LeafletLayerDirective = /** @class */function () {
  function LeafletLayerDirective(leafletDirective, zone) {
    this.zone = zone;
    this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__.LeafletDirectiveWrapper(leafletDirective);
  }
  LeafletLayerDirective.prototype.ngOnInit = function () {
    // Init the map
    this.leafletDirective.init();
  };
  LeafletLayerDirective.prototype.ngOnDestroy = function () {
    var _this = this;
    this.zone.runOutsideAngular(function () {
      _this.layer.remove();
    });
  };
  LeafletLayerDirective.prototype.ngOnChanges = function (changes) {
    var _this = this;
    if (changes['layer']) {
      // Update the layer
      var p_1 = changes['layer'].previousValue;
      var n_1 = changes['layer'].currentValue;
      this.zone.runOutsideAngular(function () {
        if (null != p_1) {
          p_1.remove();
        }
        if (null != n_1) {
          _this.leafletDirective.getMap().addLayer(n_1);
        }
      });
    }
  };
  /** @nocollapse */
  LeafletLayerDirective.ctorParameters = function () {
    return [{
      type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  };
  LeafletLayerDirective.propDecorators = {
    "layer": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['leafletLayer']
    }]
  };
  LeafletLayerDirective.ɵfac = function LeafletLayerDirective_Factory(t) {
    return new (t || LeafletLayerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  LeafletLayerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: LeafletLayerDirective,
    selectors: [["", "leafletLayer", ""]],
    inputs: {
      layer: ["leafletLayer", "layer"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LeafletLayerDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
      args: [{
        selector: '[leafletLayer]'
      }]
    }], function () {
      return [{
        type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
      }];
    }, {
      layer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['leafletLayer']
      }]
    });
  })();
  return LeafletLayerDirective;
}();


//# sourceMappingURL=leaflet-layer.directive.js.map

/***/ }),

/***/ 26392:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/leaflet-layers.directive.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletLayersDirective": () => (/* binding */ LeafletLayersDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/leaflet.directive */ 15845);
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/leaflet.directive.wrapper */ 2929);




/**
 * Layers directive
 *
 * This directive is used to directly control map layers. As changes are made to the input array of
 * layers, the map is synched to the array. As layers are added or removed from the input array, they
 * are also added or removed from the map. The input array is treated as immutable. To detect changes,
 * you must change the array instance.
 *
 * Important Note: The input layers array is assumed to be immutable. This means you need to use an
 * immutable array implementation or create a new copy of your array when you make changes, otherwise
 * this directive won't detect the change. This is by design. It's for performance reasons. Change
 * detection of mutable arrays requires diffing the state of the array on every DoCheck cycle, which
 * is extremely expensive from a time complexity perspective.
 *
 */


var LeafletLayersDirective = /** @class */function () {
  function LeafletLayersDirective(leafletDirective, differs, zone) {
    this.differs = differs;
    this.zone = zone;
    this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__.LeafletDirectiveWrapper(leafletDirective);
    this.layersDiffer = this.differs.find([]).create();
  }
  Object.defineProperty(LeafletLayersDirective.prototype, "layers", {
    get: function get() {
      return this.layersValue;
    },
    set:
    // Set/get the layers
    function set(v) {
      this.layersValue = v;
      // Now that we have a differ, do an immediate layer update
      this.updateLayers();
    },
    enumerable: true,
    configurable: true
  });
  LeafletLayersDirective.prototype.ngDoCheck = function () {
    this.updateLayers();
  };
  LeafletLayersDirective.prototype.ngOnInit = function () {
    // Init the map
    this.leafletDirective.init();
    // Update layers once the map is ready
    this.updateLayers();
  };
  LeafletLayersDirective.prototype.ngOnDestroy = function () {
    this.layers = [];
  };
  /**
   * Update the state of the layers.
   * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
   * This is important because it allows us to react to changes to the contents of the array as well
   * as changes to the actual array instance.
   */
  /**
       * Update the state of the layers.
       * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
       * This is important because it allows us to react to changes to the contents of the array as well
       * as changes to the actual array instance.
       */
  LeafletLayersDirective.prototype.updateLayers =
  /**
  * Update the state of the layers.
  * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
  * This is important because it allows us to react to changes to the contents of the array as well
  * as changes to the actual array instance.
  */
  function () {
    var map = this.leafletDirective.getMap();
    if (null != map && null != this.layersDiffer) {
      var changes_1 = this.layersDiffer.diff(this.layersValue);
      if (null != changes_1) {
        this.zone.runOutsideAngular(function () {
          changes_1.forEachRemovedItem(function (c) {
            map.removeLayer(c.item);
          });
          changes_1.forEachAddedItem(function (c) {
            map.addLayer(c.item);
          });
        });
      }
    }
  };
  /** @nocollapse */
  LeafletLayersDirective.ctorParameters = function () {
    return [{
      type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  };
  LeafletLayersDirective.propDecorators = {
    "layers": [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['leafletLayers']
    }]
  };
  LeafletLayersDirective.ɵfac = function LeafletLayersDirective_Factory(t) {
    return new (t || LeafletLayersDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  LeafletLayersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: LeafletLayersDirective,
    selectors: [["", "leafletLayers", ""]],
    inputs: {
      layers: ["leafletLayers", "layers"]
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LeafletLayersDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
      args: [{
        selector: '[leafletLayers]'
      }]
    }], function () {
      return [{
        type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletDirective
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
      }];
    }, {
      layers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['leafletLayers']
      }]
    });
  })();
  return LeafletLayersDirective;
}();


//# sourceMappingURL=leaflet-layers.directive.js.map

/***/ }),

/***/ 11978:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/leaflet-tile-layer-definition.model.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletTileLayerDefinition": () => (/* binding */ LeafletTileLayerDefinition)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

var LeafletTileLayerDefinition = /** @class */function () {
  function LeafletTileLayerDefinition(type, url, options) {
    this.type = type;
    this.url = url;
    this.options = options;
  }
  /**
   * Creates a TileLayer from the provided definition. This is a convenience function
   * to help with generating layers from objects.
   *
   * @param layerDef The layer to create
   * @returns {TileLayer} The TileLayer that has been created
   */
  /**
       * Creates a TileLayer from the provided definition. This is a convenience function
       * to help with generating layers from objects.
       *
       * @param layerDef The layer to create
       * @returns {TileLayer} The TileLayer that has been created
       */
  LeafletTileLayerDefinition.createTileLayer =
  /**
  * Creates a TileLayer from the provided definition. This is a convenience function
  * to help with generating layers from objects.
  *
  * @param layerDef The layer to create
  * @returns {TileLayer} The TileLayer that has been created
  */
  function (layerDef) {
    var layer;
    switch (layerDef.type) {
      case 'xyz':
        layer = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer)(layerDef.url, layerDef.options);
        break;
      case 'wms':
      default:
        layer = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer.wms(layerDef.url, layerDef.options);
        break;
    }
    return layer;
  };
  /**
   * Creates a TileLayer for each key in the incoming map. This is a convenience function
   * for generating an associative array of layers from an associative array of objects
   *
   * @param layerDefs A map of key to tile layer definition
   * @returns {{[p: string]: TileLayer}} A new map of key to TileLayer
   */
  /**
       * Creates a TileLayer for each key in the incoming map. This is a convenience function
       * for generating an associative array of layers from an associative array of objects
       *
       * @param layerDefs A map of key to tile layer definition
       * @returns {{[p: string]: TileLayer}} A new map of key to TileLayer
       */
  LeafletTileLayerDefinition.createTileLayers =
  /**
  * Creates a TileLayer for each key in the incoming map. This is a convenience function
  * for generating an associative array of layers from an associative array of objects
  *
  * @param layerDefs A map of key to tile layer definition
  * @returns {{[p: string]: TileLayer}} A new map of key to TileLayer
  */
  function (layerDefs) {
    var layers = {};
    for (var k in layerDefs) {
      if (layerDefs.hasOwnProperty(k)) {
        layers[k] = LeafletTileLayerDefinition.createTileLayer(layerDefs[k]);
      }
    }
    return layers;
  };
  /**
   * Create a Tile Layer from the current state of this object
   *
   * @returns {TileLayer} A new TileLayer
   */
  /**
       * Create a Tile Layer from the current state of this object
       *
       * @returns {TileLayer} A new TileLayer
       */
  LeafletTileLayerDefinition.prototype.createTileLayer =
  /**
  * Create a Tile Layer from the current state of this object
  *
  * @returns {TileLayer} A new TileLayer
  */
  function () {
    return LeafletTileLayerDefinition.createTileLayer(this);
  };
  return LeafletTileLayerDefinition;
}();

//# sourceMappingURL=leaflet-tile-layer-definition.model.js.map

/***/ }),

/***/ 46492:
/*!******************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/leaflet.module.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletModule": () => (/* binding */ LeafletModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/leaflet.directive */ 15845);
/* harmony import */ var _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers/leaflet-layer.directive */ 32297);
/* harmony import */ var _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/leaflet-layers.directive */ 26392);
/* harmony import */ var _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/control/leaflet-control-layers.directive */ 72687);
/* harmony import */ var _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers/base/leaflet-baselayers.directive */ 71162);







var LeafletModule = /** @class */function () {
  function LeafletModule() {}
  LeafletModule.forRoot = function () {
    return {
      ngModule: LeafletModule,
      providers: []
    };
  };
  /** @nocollapse */
  LeafletModule.ctorParameters = function () {
    return [];
  };
  LeafletModule.ɵfac = function LeafletModule_Factory(t) {
    return new (t || LeafletModule)();
  };
  LeafletModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: LeafletModule
  });
  LeafletModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](LeafletModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
      args: [{
        exports: [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_0__.LeafletDirective, _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletLayerDirective, _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletLayersDirective, _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_3__.LeafletLayersControlDirective, _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_4__.LeafletBaseLayersDirective],
        declarations: [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_0__.LeafletDirective, _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletLayerDirective, _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletLayersDirective, _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_3__.LeafletLayersControlDirective, _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_4__.LeafletBaseLayersDirective]
      }]
    }], function () {
      return [];
    }, null);
  })();
  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LeafletModule, {
      declarations: function declarations() {
        return [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_0__.LeafletDirective, _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletLayerDirective, _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletLayersDirective, _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_3__.LeafletLayersControlDirective, _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_4__.LeafletBaseLayersDirective];
      },
      exports: function exports() {
        return [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_0__.LeafletDirective, _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_1__.LeafletLayerDirective, _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_2__.LeafletLayersDirective, _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_3__.LeafletLayersControlDirective, _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_4__.LeafletBaseLayersDirective];
      }
    });
  })();
  return LeafletModule;
}();


//# sourceMappingURL=leaflet.module.js.map

/***/ }),

/***/ 18572:
/*!***********************************************************!*\
  !*** ./src/app/pages/maps/bubble/bubble-map.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BubbleMapComponent": () => (/* binding */ BubbleMapComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 37451);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44290);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ 13347);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 85446);



var _class;







var BubbleMapComponent = /*#__PURE__*/function () {
  function BubbleMapComponent(theme, http) {
    var _this = this;
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BubbleMapComponent);
    this.theme = theme;
    this.http = http;
    this.latlong = {};
    this.max = -Infinity;
    this.min = Infinity;
    this.alive = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.http.get('assets/map/world.json'), this.theme.getJsTheme()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeWhile)(function () {
      return _this.alive;
    })).subscribe(function (_ref) {
      var _ref2 = (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        map = _ref2[0],
        config = _ref2[1];
      (0,echarts__WEBPACK_IMPORTED_MODULE_3__.registerMap)('world', map);
      var colors = config.variables;
      _this.bubbleTheme = config.variables.bubbleMap;
      _this.geoColors = [colors.primary, colors.info, colors.success, colors.warning, colors.danger];
      _this.latlong = {
        'AD': {
          'latitude': 42.5,
          'longitude': 1.5
        },
        'AE': {
          'latitude': 24,
          'longitude': 54
        },
        'AF': {
          'latitude': 33,
          'longitude': 65
        },
        'AG': {
          'latitude': 17.05,
          'longitude': -61.8
        },
        'AI': {
          'latitude': 18.25,
          'longitude': -63.1667
        },
        'AL': {
          'latitude': 41,
          'longitude': 20
        },
        'AM': {
          'latitude': 40,
          'longitude': 45
        },
        'AN': {
          'latitude': 12.25,
          'longitude': -68.75
        },
        'AO': {
          'latitude': -12.5,
          'longitude': 18.5
        },
        'AP': {
          'latitude': 35,
          'longitude': 105
        },
        'AQ': {
          'latitude': -90,
          'longitude': 0
        },
        'AR': {
          'latitude': -34,
          'longitude': -64
        },
        'AS': {
          'latitude': -14.3333,
          'longitude': -170
        },
        'AT': {
          'latitude': 47.3333,
          'longitude': 13.3333
        },
        'AU': {
          'latitude': -27,
          'longitude': 133
        },
        'AW': {
          'latitude': 12.5,
          'longitude': -69.9667
        },
        'AZ': {
          'latitude': 40.5,
          'longitude': 47.5
        },
        'BA': {
          'latitude': 44,
          'longitude': 18
        },
        'BB': {
          'latitude': 13.1667,
          'longitude': -59.5333
        },
        'BD': {
          'latitude': 24,
          'longitude': 90
        },
        'BE': {
          'latitude': 50.8333,
          'longitude': 4
        },
        'BF': {
          'latitude': 13,
          'longitude': -2
        },
        'BG': {
          'latitude': 43,
          'longitude': 25
        },
        'BH': {
          'latitude': 26,
          'longitude': 50.55
        },
        'BI': {
          'latitude': -3.5,
          'longitude': 30
        },
        'BJ': {
          'latitude': 9.5,
          'longitude': 2.25
        },
        'BM': {
          'latitude': 32.3333,
          'longitude': -64.75
        },
        'BN': {
          'latitude': 4.5,
          'longitude': 114.6667
        },
        'BO': {
          'latitude': -17,
          'longitude': -65
        },
        'BR': {
          'latitude': -10,
          'longitude': -55
        },
        'BS': {
          'latitude': 24.25,
          'longitude': -76
        },
        'BT': {
          'latitude': 27.5,
          'longitude': 90.5
        },
        'BV': {
          'latitude': -54.4333,
          'longitude': 3.4
        },
        'BW': {
          'latitude': -22,
          'longitude': 24
        },
        'BY': {
          'latitude': 53,
          'longitude': 28
        },
        'BZ': {
          'latitude': 17.25,
          'longitude': -88.75
        },
        'CA': {
          'latitude': 54,
          'longitude': -100
        },
        'CC': {
          'latitude': -12.5,
          'longitude': 96.8333
        },
        'CD': {
          'latitude': 0,
          'longitude': 25
        },
        'CF': {
          'latitude': 7,
          'longitude': 21
        },
        'CG': {
          'latitude': -1,
          'longitude': 15
        },
        'CH': {
          'latitude': 47,
          'longitude': 8
        },
        'CI': {
          'latitude': 8,
          'longitude': -5
        },
        'CK': {
          'latitude': -21.2333,
          'longitude': -159.7667
        },
        'CL': {
          'latitude': -30,
          'longitude': -71
        },
        'CM': {
          'latitude': 6,
          'longitude': 12
        },
        'CN': {
          'latitude': 35,
          'longitude': 105
        },
        'CO': {
          'latitude': 4,
          'longitude': -72
        },
        'CR': {
          'latitude': 10,
          'longitude': -84
        },
        'CU': {
          'latitude': 21.5,
          'longitude': -80
        },
        'CV': {
          'latitude': 16,
          'longitude': -24
        },
        'CX': {
          'latitude': -10.5,
          'longitude': 105.6667
        },
        'CY': {
          'latitude': 35,
          'longitude': 33
        },
        'CZ': {
          'latitude': 49.75,
          'longitude': 15.5
        },
        'DE': {
          'latitude': 51,
          'longitude': 9
        },
        'DJ': {
          'latitude': 11.5,
          'longitude': 43
        },
        'DK': {
          'latitude': 56,
          'longitude': 10
        },
        'DM': {
          'latitude': 15.4167,
          'longitude': -61.3333
        },
        'DO': {
          'latitude': 19,
          'longitude': -70.6667
        },
        'DZ': {
          'latitude': 28,
          'longitude': 3
        },
        'EC': {
          'latitude': -2,
          'longitude': -77.5
        },
        'EE': {
          'latitude': 59,
          'longitude': 26
        },
        'EG': {
          'latitude': 27,
          'longitude': 30
        },
        'EH': {
          'latitude': 24.5,
          'longitude': -13
        },
        'ER': {
          'latitude': 15,
          'longitude': 39
        },
        'ES': {
          'latitude': 40,
          'longitude': -4
        },
        'ET': {
          'latitude': 8,
          'longitude': 38
        },
        'EU': {
          'latitude': 47,
          'longitude': 8
        },
        'FI': {
          'latitude': 62,
          'longitude': 26
        },
        'FJ': {
          'latitude': -18,
          'longitude': 175
        },
        'FK': {
          'latitude': -51.75,
          'longitude': -59
        },
        'FM': {
          'latitude': 6.9167,
          'longitude': 158.25
        },
        'FO': {
          'latitude': 62,
          'longitude': -7
        },
        'FR': {
          'latitude': 46,
          'longitude': 2
        },
        'GA': {
          'latitude': -1,
          'longitude': 11.75
        },
        'GB': {
          'latitude': 54,
          'longitude': -2
        },
        'GD': {
          'latitude': 12.1167,
          'longitude': -61.6667
        },
        'GE': {
          'latitude': 42,
          'longitude': 43.5
        },
        'GF': {
          'latitude': 4,
          'longitude': -53
        },
        'GH': {
          'latitude': 8,
          'longitude': -2
        },
        'GI': {
          'latitude': 36.1833,
          'longitude': -5.3667
        },
        'GL': {
          'latitude': 72,
          'longitude': -40
        },
        'GM': {
          'latitude': 13.4667,
          'longitude': -16.5667
        },
        'GN': {
          'latitude': 11,
          'longitude': -10
        },
        'GP': {
          'latitude': 16.25,
          'longitude': -61.5833
        },
        'GQ': {
          'latitude': 2,
          'longitude': 10
        },
        'GR': {
          'latitude': 39,
          'longitude': 22
        },
        'GS': {
          'latitude': -54.5,
          'longitude': -37
        },
        'GT': {
          'latitude': 15.5,
          'longitude': -90.25
        },
        'GU': {
          'latitude': 13.4667,
          'longitude': 144.7833
        },
        'GW': {
          'latitude': 12,
          'longitude': -15
        },
        'GY': {
          'latitude': 5,
          'longitude': -59
        },
        'HK': {
          'latitude': 22.25,
          'longitude': 114.1667
        },
        'HM': {
          'latitude': -53.1,
          'longitude': 72.5167
        },
        'HN': {
          'latitude': 15,
          'longitude': -86.5
        },
        'HR': {
          'latitude': 45.1667,
          'longitude': 15.5
        },
        'HT': {
          'latitude': 19,
          'longitude': -72.4167
        },
        'HU': {
          'latitude': 47,
          'longitude': 20
        },
        'ID': {
          'latitude': -5,
          'longitude': 120
        },
        'IE': {
          'latitude': 53,
          'longitude': -8
        },
        'IL': {
          'latitude': 31.5,
          'longitude': 34.75
        },
        'IN': {
          'latitude': 20,
          'longitude': 77
        },
        'IO': {
          'latitude': -6,
          'longitude': 71.5
        },
        'IQ': {
          'latitude': 33,
          'longitude': 44
        },
        'IR': {
          'latitude': 32,
          'longitude': 53
        },
        'IS': {
          'latitude': 65,
          'longitude': -18
        },
        'IT': {
          'latitude': 42.8333,
          'longitude': 12.8333
        },
        'JM': {
          'latitude': 18.25,
          'longitude': -77.5
        },
        'JO': {
          'latitude': 31,
          'longitude': 36
        },
        'JP': {
          'latitude': 36,
          'longitude': 138
        },
        'KE': {
          'latitude': 1,
          'longitude': 38
        },
        'KG': {
          'latitude': 41,
          'longitude': 75
        },
        'KH': {
          'latitude': 13,
          'longitude': 105
        },
        'KI': {
          'latitude': 1.4167,
          'longitude': 173
        },
        'KM': {
          'latitude': -12.1667,
          'longitude': 44.25
        },
        'KN': {
          'latitude': 17.3333,
          'longitude': -62.75
        },
        'KP': {
          'latitude': 40,
          'longitude': 127
        },
        'KR': {
          'latitude': 37,
          'longitude': 127.5
        },
        'KW': {
          'latitude': 29.3375,
          'longitude': 47.6581
        },
        'KY': {
          'latitude': 19.5,
          'longitude': -80.5
        },
        'KZ': {
          'latitude': 48,
          'longitude': 68
        },
        'LA': {
          'latitude': 18,
          'longitude': 105
        },
        'LB': {
          'latitude': 33.8333,
          'longitude': 35.8333
        },
        'LC': {
          'latitude': 13.8833,
          'longitude': -61.1333
        },
        'LI': {
          'latitude': 47.1667,
          'longitude': 9.5333
        },
        'LK': {
          'latitude': 7,
          'longitude': 81
        },
        'LR': {
          'latitude': 6.5,
          'longitude': -9.5
        },
        'LS': {
          'latitude': -29.5,
          'longitude': 28.5
        },
        'LT': {
          'latitude': 55,
          'longitude': 24
        },
        'LU': {
          'latitude': 49.75,
          'longitude': 6
        },
        'LV': {
          'latitude': 57,
          'longitude': 25
        },
        'LY': {
          'latitude': 25,
          'longitude': 17
        },
        'MA': {
          'latitude': 32,
          'longitude': -5
        },
        'MC': {
          'latitude': 43.7333,
          'longitude': 7.4
        },
        'MD': {
          'latitude': 47,
          'longitude': 29
        },
        'ME': {
          'latitude': 42.5,
          'longitude': 19.4
        },
        'MG': {
          'latitude': -20,
          'longitude': 47
        },
        'MH': {
          'latitude': 9,
          'longitude': 168
        },
        'MK': {
          'latitude': 41.8333,
          'longitude': 22
        },
        'ML': {
          'latitude': 17,
          'longitude': -4
        },
        'MM': {
          'latitude': 22,
          'longitude': 98
        },
        'MN': {
          'latitude': 46,
          'longitude': 105
        },
        'MO': {
          'latitude': 22.1667,
          'longitude': 113.55
        },
        'MP': {
          'latitude': 15.2,
          'longitude': 145.75
        },
        'MQ': {
          'latitude': 14.6667,
          'longitude': -61
        },
        'MR': {
          'latitude': 20,
          'longitude': -12
        },
        'MS': {
          'latitude': 16.75,
          'longitude': -62.2
        },
        'MT': {
          'latitude': 35.8333,
          'longitude': 14.5833
        },
        'MU': {
          'latitude': -20.2833,
          'longitude': 57.55
        },
        'MV': {
          'latitude': 3.25,
          'longitude': 73
        },
        'MW': {
          'latitude': -13.5,
          'longitude': 34
        },
        'MX': {
          'latitude': 23,
          'longitude': -102
        },
        'MY': {
          'latitude': 2.5,
          'longitude': 112.5
        },
        'MZ': {
          'latitude': -18.25,
          'longitude': 35
        },
        'NA': {
          'latitude': -22,
          'longitude': 17
        },
        'NC': {
          'latitude': -21.5,
          'longitude': 165.5
        },
        'NE': {
          'latitude': 16,
          'longitude': 8
        },
        'NF': {
          'latitude': -29.0333,
          'longitude': 167.95
        },
        'NG': {
          'latitude': 10,
          'longitude': 8
        },
        'NI': {
          'latitude': 13,
          'longitude': -85
        },
        'NL': {
          'latitude': 52.5,
          'longitude': 5.75
        },
        'NO': {
          'latitude': 62,
          'longitude': 10
        },
        'NP': {
          'latitude': 28,
          'longitude': 84
        },
        'NR': {
          'latitude': -0.5333,
          'longitude': 166.9167
        },
        'NU': {
          'latitude': -19.0333,
          'longitude': -169.8667
        },
        'NZ': {
          'latitude': -41,
          'longitude': 174
        },
        'OM': {
          'latitude': 21,
          'longitude': 57
        },
        'PA': {
          'latitude': 9,
          'longitude': -80
        },
        'PE': {
          'latitude': -10,
          'longitude': -76
        },
        'PF': {
          'latitude': -15,
          'longitude': -140
        },
        'PG': {
          'latitude': -6,
          'longitude': 147
        },
        'PH': {
          'latitude': 13,
          'longitude': 122
        },
        'PK': {
          'latitude': 30,
          'longitude': 70
        },
        'PL': {
          'latitude': 52,
          'longitude': 20
        },
        'PM': {
          'latitude': 46.8333,
          'longitude': -56.3333
        },
        'PR': {
          'latitude': 18.25,
          'longitude': -66.5
        },
        'PS': {
          'latitude': 32,
          'longitude': 35.25
        },
        'PT': {
          'latitude': 39.5,
          'longitude': -8
        },
        'PW': {
          'latitude': 7.5,
          'longitude': 134.5
        },
        'PY': {
          'latitude': -23,
          'longitude': -58
        },
        'QA': {
          'latitude': 25.5,
          'longitude': 51.25
        },
        'RE': {
          'latitude': -21.1,
          'longitude': 55.6
        },
        'RO': {
          'latitude': 46,
          'longitude': 25
        },
        'RS': {
          'latitude': 44,
          'longitude': 21
        },
        'RU': {
          'latitude': 60,
          'longitude': 100
        },
        'RW': {
          'latitude': -2,
          'longitude': 30
        },
        'SA': {
          'latitude': 25,
          'longitude': 45
        },
        'SB': {
          'latitude': -8,
          'longitude': 159
        },
        'SC': {
          'latitude': -4.5833,
          'longitude': 55.6667
        },
        'SD': {
          'latitude': 15,
          'longitude': 30
        },
        'SE': {
          'latitude': 62,
          'longitude': 15
        },
        'SG': {
          'latitude': 1.3667,
          'longitude': 103.8
        },
        'SH': {
          'latitude': -15.9333,
          'longitude': -5.7
        },
        'SI': {
          'latitude': 46,
          'longitude': 15
        },
        'SJ': {
          'latitude': 78,
          'longitude': 20
        },
        'SK': {
          'latitude': 48.6667,
          'longitude': 19.5
        },
        'SL': {
          'latitude': 8.5,
          'longitude': -11.5
        },
        'SM': {
          'latitude': 43.7667,
          'longitude': 12.4167
        },
        'SN': {
          'latitude': 14,
          'longitude': -14
        },
        'SO': {
          'latitude': 10,
          'longitude': 49
        },
        'SR': {
          'latitude': 4,
          'longitude': -56
        },
        'ST': {
          'latitude': 1,
          'longitude': 7
        },
        'SV': {
          'latitude': 13.8333,
          'longitude': -88.9167
        },
        'SY': {
          'latitude': 35,
          'longitude': 38
        },
        'SZ': {
          'latitude': -26.5,
          'longitude': 31.5
        },
        'TC': {
          'latitude': 21.75,
          'longitude': -71.5833
        },
        'TD': {
          'latitude': 15,
          'longitude': 19
        },
        'TF': {
          'latitude': -43,
          'longitude': 67
        },
        'TG': {
          'latitude': 8,
          'longitude': 1.1667
        },
        'TH': {
          'latitude': 15,
          'longitude': 100
        },
        'TJ': {
          'latitude': 39,
          'longitude': 71
        },
        'TK': {
          'latitude': -9,
          'longitude': -172
        },
        'TM': {
          'latitude': 40,
          'longitude': 60
        },
        'TN': {
          'latitude': 34,
          'longitude': 9
        },
        'TO': {
          'latitude': -20,
          'longitude': -175
        },
        'TR': {
          'latitude': 39,
          'longitude': 35
        },
        'TT': {
          'latitude': 11,
          'longitude': -61
        },
        'TV': {
          'latitude': -8,
          'longitude': 178
        },
        'TW': {
          'latitude': 23.5,
          'longitude': 121
        },
        'TZ': {
          'latitude': -6,
          'longitude': 35
        },
        'UA': {
          'latitude': 49,
          'longitude': 32
        },
        'UG': {
          'latitude': 1,
          'longitude': 32
        },
        'UM': {
          'latitude': 19.2833,
          'longitude': 166.6
        },
        'US': {
          'latitude': 38,
          'longitude': -97
        },
        'UY': {
          'latitude': -33,
          'longitude': -56
        },
        'UZ': {
          'latitude': 41,
          'longitude': 64
        },
        'VA': {
          'latitude': 41.9,
          'longitude': 12.45
        },
        'VC': {
          'latitude': 13.25,
          'longitude': -61.2
        },
        'VE': {
          'latitude': 8,
          'longitude': -66
        },
        'VG': {
          'latitude': 18.5,
          'longitude': -64.5
        },
        'VI': {
          'latitude': 18.3333,
          'longitude': -64.8333
        },
        'VN': {
          'latitude': 16,
          'longitude': 106
        },
        'VU': {
          'latitude': -16,
          'longitude': 167
        },
        'WF': {
          'latitude': -13.3,
          'longitude': -176.2
        },
        'WS': {
          'latitude': -13.5833,
          'longitude': -172.3333
        },
        'YE': {
          'latitude': 15,
          'longitude': 48
        },
        'YT': {
          'latitude': -12.8333,
          'longitude': 45.1667
        },
        'ZA': {
          'latitude': -29,
          'longitude': 24
        },
        'ZM': {
          'latitude': -15,
          'longitude': 30
        },
        'ZW': {
          'latitude': -20,
          'longitude': 30
        }
      };
      _this.mapData = [{
        'code': 'AF',
        'name': 'Afghanistan',
        'value': 32358260,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AL',
        'name': 'Albania',
        'value': 3215988,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'DZ',
        'name': 'Algeria',
        'value': 35980193,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AO',
        'name': 'Angola',
        'value': 19618432,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AR',
        'name': 'Argentina',
        'value': 40764561,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AM',
        'name': 'Armenia',
        'value': 3100236,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AU',
        'name': 'Australia',
        'value': 22605732,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AT',
        'name': 'Austria',
        'value': 8413429,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AZ',
        'name': 'Azerbaijan',
        'value': 9306023,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BH',
        'name': 'Bahrain',
        'value': 1323535,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BD',
        'name': 'Bangladesh',
        'value': 150493658,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BY',
        'name': 'Belarus',
        'value': 9559441,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BE',
        'name': 'Belgium',
        'value': 10754056,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BJ',
        'name': 'Benin',
        'value': 9099922,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BT',
        'name': 'Bhutan',
        'value': 738267,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BO',
        'name': 'Bolivia',
        'value': 10088108,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BA',
        'name': 'Bosnia and Herzegovina',
        'value': 3752228,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BW',
        'name': 'Botswana',
        'value': 2030738,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BR',
        'name': 'Brazil',
        'value': 196655014,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BN',
        'name': 'Brunei',
        'value': 405938,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BG',
        'name': 'Bulgaria',
        'value': 7446135,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BF',
        'name': 'Burkina Faso',
        'value': 16967845,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'BI',
        'name': 'Burundi',
        'value': 8575172,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KH',
        'name': 'Cambodia',
        'value': 14305183,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CM',
        'name': 'Cameroon',
        'value': 20030362,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CA',
        'name': 'Canada',
        'value': 34349561,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CV',
        'name': 'Cape Verde',
        'value': 500585,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CF',
        'name': 'Central African Rep.',
        'value': 4486837,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TD',
        'name': 'Chad',
        'value': 11525496,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CL',
        'name': 'Chile',
        'value': 17269525,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CN',
        'name': 'China',
        'value': 1347565324,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CO',
        'name': 'Colombia',
        'value': 46927125,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KM',
        'name': 'Comoros',
        'value': 753943,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CD',
        'name': 'Congo, Dem. Rep.',
        'value': 67757577,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CG',
        'name': 'Congo, Rep.',
        'value': 4139748,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CR',
        'name': 'Costa Rica',
        'value': 4726575,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CI',
        'name': 'Cote d\'Ivoire',
        'value': 20152894,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'HR',
        'name': 'Croatia',
        'value': 4395560,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CU',
        'name': 'Cuba',
        'value': 11253665,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CY',
        'name': 'Cyprus',
        'value': 1116564,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CZ',
        'name': 'Czech Rep.',
        'value': 10534293,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'DK',
        'name': 'Denmark',
        'value': 5572594,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'DJ',
        'name': 'Djibouti',
        'value': 905564,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'DO',
        'name': 'Dominican Rep.',
        'value': 10056181,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'EC',
        'name': 'Ecuador',
        'value': 14666055,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'EG',
        'name': 'Egypt',
        'value': 82536770,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SV',
        'name': 'El Salvador',
        'value': 6227491,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GQ',
        'name': 'Equatorial Guinea',
        'value': 720213,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ER',
        'name': 'Eritrea',
        'value': 5415280,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'EE',
        'name': 'Estonia',
        'value': 1340537,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ET',
        'name': 'Ethiopia',
        'value': 84734262,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'FJ',
        'name': 'Fiji',
        'value': 868406,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'FI',
        'name': 'Finland',
        'value': 5384770,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'FR',
        'name': 'France',
        'value': 63125894,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GA',
        'name': 'Gabon',
        'value': 1534262,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GM',
        'name': 'Gambia',
        'value': 1776103,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GE',
        'name': 'Georgia',
        'value': 4329026,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'DE',
        'name': 'Germany',
        'value': 82162512,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GH',
        'name': 'Ghana',
        'value': 24965816,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GR',
        'name': 'Greece',
        'value': 11390031,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GT',
        'name': 'Guatemala',
        'value': 14757316,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GN',
        'name': 'Guinea',
        'value': 10221808,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GW',
        'name': 'Guinea-Bissau',
        'value': 1547061,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GY',
        'name': 'Guyana',
        'value': 756040,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'HT',
        'name': 'Haiti',
        'value': 10123787,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'HN',
        'name': 'Honduras',
        'value': 7754687,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'HK',
        'name': 'Hong Kong, China',
        'value': 7122187,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'HU',
        'name': 'Hungary',
        'value': 9966116,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IS',
        'name': 'Iceland',
        'value': 324366,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IN',
        'name': 'India',
        'value': 1241491960,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ID',
        'name': 'Indonesia',
        'value': 242325638,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IR',
        'name': 'Iran',
        'value': 74798599,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IQ',
        'name': 'Iraq',
        'value': 32664942,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IE',
        'name': 'Ireland',
        'value': 4525802,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IL',
        'name': 'Israel',
        'value': 7562194,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'IT',
        'name': 'Italy',
        'value': 60788694,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'JM',
        'name': 'Jamaica',
        'value': 2751273,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'JP',
        'name': 'Japan',
        'value': 126497241,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'JO',
        'name': 'Jordan',
        'value': 6330169,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KZ',
        'name': 'Kazakhstan',
        'value': 16206750,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KE',
        'name': 'Kenya',
        'value': 41609728,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KP',
        'name': 'Korea, Dem. Rep.',
        'value': 24451285,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KR',
        'name': 'Korea, Rep.',
        'value': 48391343,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KW',
        'name': 'Kuwait',
        'value': 2818042,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'KG',
        'name': 'Kyrgyzstan',
        'value': 5392580,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LA',
        'name': 'Laos',
        'value': 6288037,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LV',
        'name': 'Latvia',
        'value': 2243142,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LB',
        'name': 'Lebanon',
        'value': 4259405,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LS',
        'name': 'Lesotho',
        'value': 2193843,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LR',
        'name': 'Liberia',
        'value': 4128572,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LY',
        'name': 'Libya',
        'value': 6422772,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LT',
        'name': 'Lithuania',
        'value': 3307481,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LU',
        'name': 'Luxembourg',
        'value': 515941,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MK',
        'name': 'Macedonia, FYR',
        'value': 2063893,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MG',
        'name': 'Madagascar',
        'value': 21315135,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MW',
        'name': 'Malawi',
        'value': 15380888,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MY',
        'name': 'Malaysia',
        'value': 28859154,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ML',
        'name': 'Mali',
        'value': 15839538,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MR',
        'name': 'Mauritania',
        'value': 3541540,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MU',
        'name': 'Mauritius',
        'value': 1306593,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MX',
        'name': 'Mexico',
        'value': 114793341,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MD',
        'name': 'Moldova',
        'value': 3544864,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MN',
        'name': 'Mongolia',
        'value': 2800114,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ME',
        'name': 'Montenegro',
        'value': 632261,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MA',
        'name': 'Morocco',
        'value': 32272974,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MZ',
        'name': 'Mozambique',
        'value': 23929708,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'MM',
        'name': 'Myanmar',
        'value': 48336763,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NA',
        'name': 'Namibia',
        'value': 2324004,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NP',
        'name': 'Nepal',
        'value': 30485798,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NL',
        'name': 'Netherlands',
        'value': 16664746,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NZ',
        'name': 'New Zealand',
        'value': 4414509,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NI',
        'name': 'Nicaragua',
        'value': 5869859,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NE',
        'name': 'Niger',
        'value': 16068994,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NG',
        'name': 'Nigeria',
        'value': 162470737,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'NO',
        'name': 'Norway',
        'value': 4924848,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'OM',
        'name': 'Oman',
        'value': 2846145,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PK',
        'name': 'Pakistan',
        'value': 176745364,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PA',
        'name': 'Panama',
        'value': 3571185,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PG',
        'name': 'Papua New Guinea',
        'value': 7013829,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PY',
        'name': 'Paraguay',
        'value': 6568290,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PE',
        'name': 'Peru',
        'value': 29399817,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PH',
        'name': 'Philippines',
        'value': 94852030,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PL',
        'name': 'Poland',
        'value': 38298949,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PT',
        'name': 'Portugal',
        'value': 10689663,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PR',
        'name': 'Puerto Rico',
        'value': 3745526,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'QA',
        'name': 'Qatar',
        'value': 1870041,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'RO',
        'name': 'Romania',
        'value': 21436495,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'RU',
        'name': 'Russia',
        'value': 142835555,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'RW',
        'name': 'Rwanda',
        'value': 10942950,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SA',
        'name': 'Saudi Arabia',
        'value': 28082541,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SN',
        'name': 'Senegal',
        'value': 12767556,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'RS',
        'name': 'Serbia',
        'value': 9853969,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SL',
        'name': 'Sierra Leone',
        'value': 5997486,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SG',
        'name': 'Singapore',
        'value': 5187933,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SK',
        'name': 'Slovak Republic',
        'value': 5471502,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SI',
        'name': 'Slovenia',
        'value': 2035012,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SB',
        'name': 'Solomon Islands',
        'value': 552267,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SO',
        'name': 'Somalia',
        'value': 9556873,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ZA',
        'name': 'South Africa',
        'value': 50459978,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ES',
        'name': 'Spain',
        'value': 46454895,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'LK',
        'name': 'Sri Lanka',
        'value': 21045394,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SD',
        'name': 'Sudan',
        'value': 34735288,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SR',
        'name': 'Suriname',
        'value': 529419,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SZ',
        'name': 'Swaziland',
        'value': 1203330,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SE',
        'name': 'Sweden',
        'value': 9440747,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'CH',
        'name': 'Switzerland',
        'value': 7701690,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'SY',
        'name': 'Syria',
        'value': 20766037,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TW',
        'name': 'Taiwan',
        'value': 23072000,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TJ',
        'name': 'Tajikistan',
        'value': 6976958,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TZ',
        'name': 'Tanzania',
        'value': 46218486,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TH',
        'name': 'Thailand',
        'value': 69518555,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TG',
        'name': 'Togo',
        'value': 6154813,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TT',
        'name': 'Trinidad and Tobago',
        'value': 1346350,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TN',
        'name': 'Tunisia',
        'value': 10594057,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TR',
        'name': 'Turkey',
        'value': 73639596,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'TM',
        'name': 'Turkmenistan',
        'value': 5105301,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'UG',
        'name': 'Uganda',
        'value': 34509205,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'UA',
        'name': 'Ukraine',
        'value': 45190180,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'AE',
        'name': 'United Arab Emirates',
        'value': 7890924,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'GB',
        'name': 'United Kingdom',
        'value': 62417431,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'US',
        'name': 'United States',
        'value': 313085380,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'UY',
        'name': 'Uruguay',
        'value': 3380008,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'UZ',
        'name': 'Uzbekistan',
        'value': 27760267,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'VE',
        'name': 'Venezuela',
        'value': 29436891,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'PS',
        'name': 'West Bank and Gaza',
        'value': 4152369,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'VN',
        'name': 'Vietnam',
        'value': 88791996,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'YE',
        'name': 'Yemen, Rep.',
        'value': 24799880,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ZM',
        'name': 'Zambia',
        'value': 13474959,
        'color': _this.getRandomGeoColor()
      }, {
        'code': 'ZW',
        'name': 'Zimbabwe',
        'value': 12754378,
        'color': _this.getRandomGeoColor()
      }];
      _this.mapData.forEach(function (itemOpt) {
        if (itemOpt.value > _this.max) {
          _this.max = itemOpt.value;
        }
        if (itemOpt.value < _this.min) {
          _this.min = itemOpt.value;
        }
      });
      _this.options = {
        title: {
          text: 'World Population (2011)',
          left: 'center',
          top: '16px',
          textStyle: {
            color: _this.bubbleTheme.titleColor
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function formatter(params) {
            return "".concat(params.name, ": ").concat(params.value[2]);
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: _this.max,
          inRange: {
            symbolSize: [6, 60]
          }
        },
        geo: {
          name: 'World Population (2010)',
          type: 'map',
          map: 'world',
          roam: true,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: _this.bubbleTheme.areaColor,
              borderColor: _this.bubbleTheme.areaBorderColor
            },
            emphasis: {
              areaColor: _this.bubbleTheme.areaHoverColor
            }
          },
          zoom: 1.1
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          data: _this.mapData.map(function (itemOpt) {
            return {
              name: itemOpt.name,
              value: [_this.latlong[itemOpt.code].longitude, _this.latlong[itemOpt.code].latitude, itemOpt.value],
              itemStyle: {
                normal: {
                  color: itemOpt.color
                }
              }
            };
          })
        }]
      };
    });
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BubbleMapComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.alive = false;
    }
  }, {
    key: "getRandomGeoColor",
    value: function getRandomGeoColor() {
      var index = Math.round(Math.random() * this.geoColors.length);
      return this.geoColors[index];
    }
  }]);
  return BubbleMapComponent;
}();
_class = BubbleMapComponent;
_class.ɵfac = function BubbleMapComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-bubble-map"]],
  decls: 4,
  vars: 1,
  consts: [["echarts", "", 1, "echarts", 3, "options"]],
  template: function BubbleMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Bubble Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.options);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent],
  styles: ["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n}\n[_nghost-%COMP%]   .echarts[_ngcontent-%COMP%] {\n  width: 100%;\n  height: var(--card-height-large);\n}"]
});

/***/ }),

/***/ 46092:
/*!*****************************************************!*\
  !*** ./src/app/pages/maps/gmaps/gmaps.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GmapsComponent": () => (/* binding */ GmapsComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/google-maps */ 92661);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;



var GmapsComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function GmapsComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GmapsComponent);
  this.position = {
    lat: 51.678418,
    lng: 7.809007
  };
});
_class = GmapsComponent;
_class.ɵfac = function GmapsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-gmaps"]],
  decls: 6,
  vars: 3,
  consts: [["width", "100%", "height", "36.5625rem", 3, "center", "zoom"], [3, "position"]],
  template: function GmapsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Google Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "google-map", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "map-marker", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("center", ctx.position)("zoom", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx.position);
    }
  },
  dependencies: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_3__.MapMarker, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent],
  styles: ["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]     agm-map {\n  width: 100%;\n  height: var(--card-height-large);\n}"]
});

/***/ }),

/***/ 21343:
/*!*********************************************************!*\
  !*** ./src/app/pages/maps/leaflet/leaflet.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletComponent": () => (/* binding */ LeafletComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ 98407);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 4984);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 23243);


var _class;




var LeafletComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LeafletComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LeafletComponent);
  this.options = {
    layers: [leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '...'
    })],
    zoom: 5,
    center: leaflet__WEBPACK_IMPORTED_MODULE_2__.latLng({
      lat: 38.991709,
      lng: -76.886109
    })
  };
});
_class = LeafletComponent;
_class.ɵfac = function LeafletComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-leaflet"]],
  decls: 5,
  vars: 1,
  consts: [["leaflet", "", 3, "leafletOptions"]],
  template: function LeafletComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Leaflet Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("leafletOptions", ctx.options);
    }
  },
  dependencies: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__.LeafletDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent],
  styles: ["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]     .leaflet-top, [_nghost-%COMP%]     .leaflet-bottom {\n  z-index: 997;\n}\n[_nghost-%COMP%]     .leaflet-container {\n  width: 100%;\n  height: var(--card-height-large);\n}\n[_nghost-%COMP%]     .leaflet-control-zoom a {\n  text-decoration: none;\n}"]
});

/***/ }),

/***/ 62445:
/*!***************************************************!*\
  !*** ./src/app/pages/maps/maps-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsRoutingModule": () => (/* binding */ MapsRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps.component */ 92237);
/* harmony import */ var _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gmaps/gmaps.component */ 46092);
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet/leaflet.component */ 21343);
/* harmony import */ var _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bubble/bubble-map.component */ 18572);
/* harmony import */ var _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-map/search-map.component */ 20928);
/* harmony import */ var _search_map_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-map/map/map.component */ 12360);
/* harmony import */ var _search_map_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-map/search/search.component */ 13707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);


var _class;










var routes = [{
  path: '',
  component: _maps_component__WEBPACK_IMPORTED_MODULE_2__.MapsComponent,
  children: [{
    path: 'gmaps',
    component: _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_3__.GmapsComponent
  }, {
    path: 'leaflet',
    component: _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_4__.LeafletComponent
  }, {
    path: 'bubble',
    component: _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_5__.BubbleMapComponent
  }, {
    path: 'searchmap',
    component: _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_6__.SearchMapComponent
  }]
}];
var MapsRoutingModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MapsRoutingModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MapsRoutingModule);
});
_class = MapsRoutingModule;
_class.ɵfac = function MapsRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MapsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();
var routedComponents = [_maps_component__WEBPACK_IMPORTED_MODULE_2__.MapsComponent, _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_3__.GmapsComponent, _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_4__.LeafletComponent, _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_5__.BubbleMapComponent, _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_6__.SearchMapComponent, _search_map_map_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent, _search_map_search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent];

/***/ }),

/***/ 92237:
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsComponent": () => (/* binding */ MapsComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);


var _class;


var MapsComponent = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MapsComponent() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MapsComponent);
});
_class = MapsComponent;
_class.ɵfac = function MapsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-maps"]],
  decls: 1,
  vars: 0,
  template: function MapsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 5177:
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsModule": () => (/* binding */ MapsModule)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/google-maps */ 92661);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 4984);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ 85446);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-theme/theme.module */ 80268);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps-routing.module */ 62445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps.component */ 92237);
/* harmony import */ var _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gmaps/gmaps.component */ 46092);
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaflet/leaflet.component */ 21343);
/* harmony import */ var _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bubble/bubble-map.component */ 18572);
/* harmony import */ var _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-map/search-map.component */ 20928);
/* harmony import */ var _search_map_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-map/map/map.component */ 12360);
/* harmony import */ var _search_map_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-map/search/search.component */ 13707);


var _class;















var MapsModule = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MapsModule() {
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MapsModule);
});
_class = MapsModule;
_class.ɵfac = function MapsModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__.GoogleMapsModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletModule.forRoot(), _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__.MapsRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MapsModule, {
    declarations: [_maps_component__WEBPACK_IMPORTED_MODULE_5__.MapsComponent, _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_6__.GmapsComponent, _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_7__.LeafletComponent, _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_8__.BubbleMapComponent, _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_9__.SearchMapComponent, _search_map_map_map_component__WEBPACK_IMPORTED_MODULE_10__.MapComponent, _search_map_search_search_component__WEBPACK_IMPORTED_MODULE_11__.SearchComponent],
    imports: [_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__.GoogleMapsModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletModule, _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__.MapsRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_14__.NgxEchartsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbCardModule]
  });
})();

/***/ }),

/***/ 23423:
/*!****************************************************************!*\
  !*** ./src/app/pages/maps/search-map/entity/position.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionModel": () => (/* binding */ PositionModel)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);


var PositionModel = /*#__PURE__*/(0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PositionModel() {
  var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 53.9;
  var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 27.5667;
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PositionModel);
  this.lat = lat;
  this.lng = lng;
});

/***/ }),

/***/ 12360:
/*!************************************************************!*\
  !*** ./src/app/pages/maps/search-map/map/map.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _entity_position_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/position.model */ 23423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ 92661);


var _class;



var MapComponent = /*#__PURE__*/function () {
  function MapComponent() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapComponent);
    this.position = null;
    this.zoom = 1;
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MapComponent, [{
    key: "searchedPosition",
    set: function set(position) {
      if (position) {
        this.position = position;
        this.zoom = 12;
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // set up current location
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          _this.searchedPosition = new _entity_position_model__WEBPACK_IMPORTED_MODULE_2__.PositionModel(position.coords.latitude, position.coords.longitude);
        });
      }
    }
  }]);
  return MapComponent;
}();
_class = MapComponent;
_class.ɵfac = function MapComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-map"]],
  inputs: {
    searchedPosition: "searchedPosition"
  },
  decls: 2,
  vars: 3,
  consts: [["width", "100%", "height", "36.5625rem", 3, "center", "zoom"], [3, "position"]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "google-map", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "map-marker", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("center", ctx.position)("zoom", ctx.zoom);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx.position);
    }
  },
  dependencies: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.MapMarker],
  styles: ["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]     agm-map {\n  width: 100%;\n  height: var(--card-height-large);\n}"]
});

/***/ }),

/***/ 20928:
/*!***************************************************************!*\
  !*** ./src/app/pages/maps/search-map/search-map.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchMapComponent": () => (/* binding */ SearchMapComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _entity_position_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity/position.model */ 23423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 23243);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ 12360);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ 13707);


var _class;





var SearchMapComponent = /*#__PURE__*/function () {
  function SearchMapComponent() {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchMapComponent);
    this.searchedPosition = new _entity_position_model__WEBPACK_IMPORTED_MODULE_2__.PositionModel();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchMapComponent, [{
    key: "setPosition",
    value: function setPosition(position) {
      this.searchedPosition = position;
    }
  }]);
  return SearchMapComponent;
}();
_class = SearchMapComponent;
_class.ɵfac = function SearchMapComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-search-map"]],
  decls: 6,
  vars: 1,
  consts: [[3, "positionChanged"], [3, "searchedPosition"]],
  template: function SearchMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Google Maps with search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body")(4, "ngx-search", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("positionChanged", function SearchMapComponent_Template_ngx_search_positionChanged_4_listener($event) {
        return ctx.setPosition($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ngx-map", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("searchedPosition", ctx.searchedPosition);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent],
  encapsulation: 2
});

/***/ }),

/***/ 13707:
/*!******************************************************************!*\
  !*** ./src/app/pages/maps/search-map/search/search.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 56213);
/* harmony import */ var C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 28551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _entity_position_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/position.model */ 23423);


var _class;



var _c0 = ["search"];
var SearchComponent = /*#__PURE__*/function () {
  function SearchComponent(ngZone) {
    (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchComponent);
    this.ngZone = ngZone;
    this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  (0,C_Data_Nitesh_personal_Git_Pages_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      var autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', function () {
        _this.ngZone.run(function () {
          // get the place result
          var place = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          _this.positionChanged.emit(new _entity_position_model__WEBPACK_IMPORTED_MODULE_2__.PositionModel(place.geometry.location.lat(), place.geometry.location.lng()));
        });
      });
    }
  }]);
  return SearchComponent;
}();
_class = SearchComponent;
_class.ɵfac = function SearchComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-search"]],
  viewQuery: function SearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    }
  },
  outputs: {
    positionChanged: "positionChanged"
  },
  decls: 3,
  vars: 0,
  consts: [[1, "form-group"], ["placeholder", "search for location", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", "search-location"], ["search", ""]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 98407:
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

/* @preserve
 * Leaflet 1.2.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function (global, factory) {
   true ? factory(exports) : 0;
})(this, function (exports) {
  'use strict';

  var version = "1.2.0";

  /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */

  var freeze = Object.freeze;
  Object.freeze = function (obj) {
    return obj;
  };

  // @function extend(dest: Object, src?: Object): Object
  // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
  function extend(dest) {
    var i, j, len, src;
    for (j = 1, len = arguments.length; j < len; j++) {
      src = arguments[j];
      for (i in src) {
        dest[i] = src[i];
      }
    }
    return dest;
  }

  // @function create(proto: Object, properties?: Object): Object
  // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  var create = Object.create || function () {
    function F() {}
    return function (proto) {
      F.prototype = proto;
      return new F();
    };
  }();

  // @function bind(fn: Function, …): Function
  // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
  // Has a `L.bind()` shortcut.
  function bind(fn, obj) {
    var slice = Array.prototype.slice;
    if (fn.bind) {
      return fn.bind.apply(fn, slice.call(arguments, 1));
    }
    var args = slice.call(arguments, 2);
    return function () {
      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
  }

  // @property lastId: Number
  // Last unique ID used by [`stamp()`](#util-stamp)
  var lastId = 0;

  // @function stamp(obj: Object): Number
  // Returns the unique ID of an object, assiging it one if it doesn't have it.
  function stamp(obj) {
    /*eslint-disable */
    obj._leaflet_id = obj._leaflet_id || ++lastId;
    return obj._leaflet_id;
    /*eslint-enable */
  }

  // @function throttle(fn: Function, time: Number, context: Object): Function
  // Returns a function which executes function `fn` with the given scope `context`
  // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
  // `fn` will be called no more than one time per given amount of `time`. The arguments
  // received by the bound function will be any arguments passed when binding the
  // function, followed by any arguments passed when invoking the bound function.
  // Has an `L.throttle` shortcut.
  function throttle(fn, time, context) {
    var lock, args, wrapperFn, later;
    later = function later() {
      // reset lock and call if queued
      lock = false;
      if (args) {
        wrapperFn.apply(context, args);
        args = false;
      }
    };
    wrapperFn = function wrapperFn() {
      if (lock) {
        // called too soon, queue to call later
        args = arguments;
      } else {
        // call and lock until later
        fn.apply(context, arguments);
        setTimeout(later, time);
        lock = true;
      }
    };
    return wrapperFn;
  }

  // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
  // Returns the number `num` modulo `range` in such a way so it lies within
  // `range[0]` and `range[1]`. The returned value will be always smaller than
  // `range[1]` unless `includeMax` is set to `true`.
  function wrapNum(x, range, includeMax) {
    var max = range[1],
      min = range[0],
      d = max - min;
    return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
  }

  // @function falseFn(): Function
  // Returns a function which always returns `false`.
  function falseFn() {
    return false;
  }

  // @function formatNum(num: Number, digits?: Number): Number
  // Returns the number `num` rounded to `digits` decimals, or to 5 decimals by default.
  function formatNum(num, digits) {
    var pow = Math.pow(10, digits || 5);
    return Math.round(num * pow) / pow;
  }

  // @function trim(str: String): String
  // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  // @function splitWords(str: String): String[]
  // Trims and splits the string on whitespace and returns the array of parts.
  function splitWords(str) {
    return trim(str).split(/\s+/);
  }

  // @function setOptions(obj: Object, options: Object): Object
  // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
  function setOptions(obj, options) {
    if (!obj.hasOwnProperty('options')) {
      obj.options = obj.options ? create(obj.options) : {};
    }
    for (var i in options) {
      obj.options[i] = options[i];
    }
    return obj.options;
  }

  // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
  // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
  // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
  // be appended at the end. If `uppercase` is `true`, the parameter names will
  // be uppercased (e.g. `'?A=foo&B=bar'`)
  function getParamString(obj, existingUrl, uppercase) {
    var params = [];
    for (var i in obj) {
      params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
    }
    return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
  }
  var templateRe = /\{ *([\w_\-]+) *\}/g;

  // @function template(str: String, data: Object): String
  // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
  // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
  // `('Hello foo, bar')`. You can also specify functions instead of strings for
  // data values — they will be evaluated passing `data` as an argument.
  function template(str, data) {
    return str.replace(templateRe, function (str, key) {
      var value = data[key];
      if (value === undefined) {
        throw new Error('No value provided for variable ' + str);
      } else if (typeof value === 'function') {
        value = value(data);
      }
      return value;
    });
  }

  // @function isArray(obj): Boolean
  // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  // @function indexOf(array: Array, el: Object): Number
  // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  function indexOf(array, el) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === el) {
        return i;
      }
    }
    return -1;
  }

  // @property emptyImageUrl: String
  // Data URI string containing a base64-encoded empty GIF image.
  // Used as a hack to free memory from unused images on WebKit-powered
  // mobile devices (by setting image `src` to this string).
  var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

  // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  function getPrefixed(name) {
    return window['webkit' + name] || window['moz' + name] || window['ms' + name];
  }
  var lastTime = 0;

  // fallback for IE 7-8
  function timeoutDefer(fn) {
    var time = +new Date(),
      timeToCall = Math.max(0, 16 - (time - lastTime));
    lastTime = time + timeToCall;
    return window.setTimeout(fn, timeToCall);
  }
  var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
  var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
    window.clearTimeout(id);
  };

  // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
  // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
  // `context` if given. When `immediate` is set, `fn` is called immediately if
  // the browser doesn't have native support for
  // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
  // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
  function requestAnimFrame(fn, context, immediate) {
    if (immediate && requestFn === timeoutDefer) {
      fn.call(context);
    } else {
      return requestFn.call(window, bind(fn, context));
    }
  }

  // @function cancelAnimFrame(id: Number): undefined
  // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
  function cancelAnimFrame(id) {
    if (id) {
      cancelFn.call(window, id);
    }
  }
  var Util = (Object.freeze || Object)({
    freeze: freeze,
    extend: extend,
    create: create,
    bind: bind,
    lastId: lastId,
    stamp: stamp,
    throttle: throttle,
    wrapNum: wrapNum,
    falseFn: falseFn,
    formatNum: formatNum,
    trim: trim,
    splitWords: splitWords,
    setOptions: setOptions,
    getParamString: getParamString,
    template: template,
    isArray: isArray,
    indexOf: indexOf,
    emptyImageUrl: emptyImageUrl,
    requestFn: requestFn,
    cancelFn: cancelFn,
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame
  });

  // @class Class
  // @aka L.Class

  // @section
  // @uninheritable

  // Thanks to John Resig and Dean Edwards for inspiration!

  function Class() {}
  Class.extend = function (props) {
    // @function extend(props: Object): Function
    // [Extends the current class](#class-inheritance) given the properties to be included.
    // Returns a Javascript function that is a class constructor (to be called with `new`).
    var NewClass = function NewClass() {
      // call the constructor
      if (this.initialize) {
        this.initialize.apply(this, arguments);
      }

      // call all constructor hooks
      this.callInitHooks();
    };
    var parentProto = NewClass.__super__ = this.prototype;
    var proto = create(parentProto);
    proto.constructor = NewClass;
    NewClass.prototype = proto;

    // inherit parent's statics
    for (var i in this) {
      if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
        NewClass[i] = this[i];
      }
    }

    // mix static properties into the class
    if (props.statics) {
      extend(NewClass, props.statics);
      delete props.statics;
    }

    // mix includes into the prototype
    if (props.includes) {
      checkDeprecatedMixinEvents(props.includes);
      extend.apply(null, [proto].concat(props.includes));
      delete props.includes;
    }

    // merge options
    if (proto.options) {
      props.options = extend(create(proto.options), props.options);
    }

    // mix given properties into the prototype
    extend(proto, props);
    proto._initHooks = [];

    // add method for calling all hooks
    proto.callInitHooks = function () {
      if (this._initHooksCalled) {
        return;
      }
      if (parentProto.callInitHooks) {
        parentProto.callInitHooks.call(this);
      }
      this._initHooksCalled = true;
      for (var i = 0, len = proto._initHooks.length; i < len; i++) {
        proto._initHooks[i].call(this);
      }
    };
    return NewClass;
  };

  // @function include(properties: Object): this
  // [Includes a mixin](#class-includes) into the current class.
  Class.include = function (props) {
    extend(this.prototype, props);
    return this;
  };

  // @function mergeOptions(options: Object): this
  // [Merges `options`](#class-options) into the defaults of the class.
  Class.mergeOptions = function (options) {
    extend(this.prototype.options, options);
    return this;
  };

  // @function addInitHook(fn: Function): this
  // Adds a [constructor hook](#class-constructor-hooks) to the class.
  Class.addInitHook = function (fn) {
    // (Function) || (String, args...)
    var args = Array.prototype.slice.call(arguments, 1);
    var init = typeof fn === 'function' ? fn : function () {
      this[fn].apply(this, args);
    };
    this.prototype._initHooks = this.prototype._initHooks || [];
    this.prototype._initHooks.push(init);
    return this;
  };
  function checkDeprecatedMixinEvents(includes) {
    if (!L || !L.Mixin) {
      return;
    }
    includes = isArray(includes) ? includes : [includes];
    for (var i = 0; i < includes.length; i++) {
      if (includes[i] === L.Mixin.Events) {
        console.warn('Deprecated include of L.Mixin.Events: ' + 'this property will be removed in future releases, ' + 'please inherit from L.Evented instead.', new Error().stack);
      }
    }
  }

  /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */

  var Events = {
    /* @method on(type: String, fn: Function, context?: Object): this
     * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
     *
     * @alternative
     * @method on(eventMap: Object): this
     * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
     */
    on: function on(types, fn, context) {
      // types can be a map of types/handlers
      if (typeof types === 'object') {
        for (var type in types) {
          // we don't process space-separated events here for performance;
          // it's a hot path since Layer uses the on(obj) syntax
          this._on(type, types[type], fn);
        }
      } else {
        // types can be a string of space-separated words
        types = splitWords(types);
        for (var i = 0, len = types.length; i < len; i++) {
          this._on(types[i], fn, context);
        }
      }
      return this;
    },
    /* @method off(type: String, fn?: Function, context?: Object): this
     * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
     *
     * @alternative
     * @method off(eventMap: Object): this
     * Removes a set of type/listener pairs.
     *
     * @alternative
     * @method off: this
     * Removes all listeners to all events on the object.
     */
    off: function off(types, fn, context) {
      if (!types) {
        // clear all listeners if called without arguments
        delete this._events;
      } else if (typeof types === 'object') {
        for (var type in types) {
          this._off(type, types[type], fn);
        }
      } else {
        types = splitWords(types);
        for (var i = 0, len = types.length; i < len; i++) {
          this._off(types[i], fn, context);
        }
      }
      return this;
    },
    // attach listener (without syntactic sugar now)
    _on: function _on(type, fn, context) {
      this._events = this._events || {};

      /* get/init listeners for type */
      var typeListeners = this._events[type];
      if (!typeListeners) {
        typeListeners = [];
        this._events[type] = typeListeners;
      }
      if (context === this) {
        // Less memory footprint.
        context = undefined;
      }
      var newListener = {
          fn: fn,
          ctx: context
        },
        listeners = typeListeners;

      // check if fn already there
      for (var i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i].fn === fn && listeners[i].ctx === context) {
          return;
        }
      }
      listeners.push(newListener);
    },
    _off: function _off(type, fn, context) {
      var listeners, i, len;
      if (!this._events) {
        return;
      }
      listeners = this._events[type];
      if (!listeners) {
        return;
      }
      if (!fn) {
        // Set all removed listeners to noop so they are not called if remove happens in fire
        for (i = 0, len = listeners.length; i < len; i++) {
          listeners[i].fn = falseFn;
        }
        // clear all listeners for a type if function isn't specified
        delete this._events[type];
        return;
      }
      if (context === this) {
        context = undefined;
      }
      if (listeners) {
        // find fn and remove it
        for (i = 0, len = listeners.length; i < len; i++) {
          var l = listeners[i];
          if (l.ctx !== context) {
            continue;
          }
          if (l.fn === fn) {
            // set the removed listener to noop so that's not called if remove happens in fire
            l.fn = falseFn;
            if (this._firingCount) {
              /* copy array in case events are being fired */
              this._events[type] = listeners = listeners.slice();
            }
            listeners.splice(i, 1);
            return;
          }
        }
      }
    },
    // @method fire(type: String, data?: Object, propagate?: Boolean): this
    // Fires an event of the specified type. You can optionally provide an data
    // object — the first argument of the listener function will contain its
    // properties. The event can optionally be propagated to event parents.
    fire: function fire(type, data, propagate) {
      if (!this.listens(type, propagate)) {
        return this;
      }
      var event = extend({}, data, {
        type: type,
        target: this
      });
      if (this._events) {
        var listeners = this._events[type];
        if (listeners) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var i = 0, len = listeners.length; i < len; i++) {
            var l = listeners[i];
            l.fn.call(l.ctx || this, event);
          }
          this._firingCount--;
        }
      }
      if (propagate) {
        // propagate the event to parents (set with addEventParent)
        this._propagateEvent(event);
      }
      return this;
    },
    // @method listens(type: String): Boolean
    // Returns `true` if a particular event type has any listeners attached to it.
    listens: function listens(type, propagate) {
      var listeners = this._events && this._events[type];
      if (listeners && listeners.length) {
        return true;
      }
      if (propagate) {
        // also check parents for listeners if event propagates
        for (var id in this._eventParents) {
          if (this._eventParents[id].listens(type, propagate)) {
            return true;
          }
        }
      }
      return false;
    },
    // @method once(…): this
    // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
    once: function once(types, fn, context) {
      if (typeof types === 'object') {
        for (var type in types) {
          this.once(type, types[type], fn);
        }
        return this;
      }
      var handler = bind(function () {
        this.off(types, fn, context).off(types, handler, context);
      }, this);

      // add a listener that's executed once and removed after that
      return this.on(types, fn, context).on(types, handler, context);
    },
    // @method addEventParent(obj: Evented): this
    // Adds an event parent - an `Evented` that will receive propagated events
    addEventParent: function addEventParent(obj) {
      this._eventParents = this._eventParents || {};
      this._eventParents[stamp(obj)] = obj;
      return this;
    },
    // @method removeEventParent(obj: Evented): this
    // Removes an event parent, so it will stop receiving propagated events
    removeEventParent: function removeEventParent(obj) {
      if (this._eventParents) {
        delete this._eventParents[stamp(obj)];
      }
      return this;
    },
    _propagateEvent: function _propagateEvent(e) {
      for (var id in this._eventParents) {
        this._eventParents[id].fire(e.type, extend({
          layer: e.target
        }, e), true);
      }
    }
  };

  // aliases; we should ditch those eventually

  // @method addEventListener(…): this
  // Alias to [`on(…)`](#evented-on)
  Events.addEventListener = Events.on;

  // @method removeEventListener(…): this
  // Alias to [`off(…)`](#evented-off)

  // @method clearAllEventListeners(…): this
  // Alias to [`off()`](#evented-off)
  Events.removeEventListener = Events.clearAllEventListeners = Events.off;

  // @method addOneTimeEventListener(…): this
  // Alias to [`once(…)`](#evented-once)
  Events.addOneTimeEventListener = Events.once;

  // @method fireEvent(…): this
  // Alias to [`fire(…)`](#evented-fire)
  Events.fireEvent = Events.fire;

  // @method hasEventListeners(…): Boolean
  // Alias to [`listens(…)`](#evented-listens)
  Events.hasEventListeners = Events.listens;
  var Evented = Class.extend(Events);

  /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   */

  function Point(x, y, round) {
    // @property x: Number; The `x` coordinate of the point
    this.x = round ? Math.round(x) : x;
    // @property y: Number; The `y` coordinate of the point
    this.y = round ? Math.round(y) : y;
  }
  Point.prototype = {
    // @method clone(): Point
    // Returns a copy of the current point.
    clone: function clone() {
      return new Point(this.x, this.y);
    },
    // @method add(otherPoint: Point): Point
    // Returns the result of addition of the current and the given points.
    add: function add(point) {
      // non-destructive, returns a new point
      return this.clone()._add(toPoint(point));
    },
    _add: function _add(point) {
      // destructive, used directly for performance in situations where it's safe to modify existing point
      this.x += point.x;
      this.y += point.y;
      return this;
    },
    // @method subtract(otherPoint: Point): Point
    // Returns the result of subtraction of the given point from the current.
    subtract: function subtract(point) {
      return this.clone()._subtract(toPoint(point));
    },
    _subtract: function _subtract(point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    },
    // @method divideBy(num: Number): Point
    // Returns the result of division of the current point by the given number.
    divideBy: function divideBy(num) {
      return this.clone()._divideBy(num);
    },
    _divideBy: function _divideBy(num) {
      this.x /= num;
      this.y /= num;
      return this;
    },
    // @method multiplyBy(num: Number): Point
    // Returns the result of multiplication of the current point by the given number.
    multiplyBy: function multiplyBy(num) {
      return this.clone()._multiplyBy(num);
    },
    _multiplyBy: function _multiplyBy(num) {
      this.x *= num;
      this.y *= num;
      return this;
    },
    // @method scaleBy(scale: Point): Point
    // Multiply each coordinate of the current point by each coordinate of
    // `scale`. In linear algebra terms, multiply the point by the
    // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
    // defined by `scale`.
    scaleBy: function scaleBy(point) {
      return new Point(this.x * point.x, this.y * point.y);
    },
    // @method unscaleBy(scale: Point): Point
    // Inverse of `scaleBy`. Divide each coordinate of the current point by
    // each coordinate of `scale`.
    unscaleBy: function unscaleBy(point) {
      return new Point(this.x / point.x, this.y / point.y);
    },
    // @method round(): Point
    // Returns a copy of the current point with rounded coordinates.
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    // @method floor(): Point
    // Returns a copy of the current point with floored coordinates (rounded down).
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    // @method ceil(): Point
    // Returns a copy of the current point with ceiled coordinates (rounded up).
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    },
    // @method distanceTo(otherPoint: Point): Number
    // Returns the cartesian distance between the current and the given points.
    distanceTo: function distanceTo(point) {
      point = toPoint(point);
      var x = point.x - this.x,
        y = point.y - this.y;
      return Math.sqrt(x * x + y * y);
    },
    // @method equals(otherPoint: Point): Boolean
    // Returns `true` if the given point has the same coordinates.
    equals: function equals(point) {
      point = toPoint(point);
      return point.x === this.x && point.y === this.y;
    },
    // @method contains(otherPoint: Point): Boolean
    // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
    contains: function contains(point) {
      point = toPoint(point);
      return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
    },
    // @method toString(): String
    // Returns a string representation of the point for debugging purposes.
    toString: function toString() {
      return 'Point(' + formatNum(this.x) + ', ' + formatNum(this.y) + ')';
    }
  };

  // @factory L.point(x: Number, y: Number, round?: Boolean)
  // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

  // @alternative
  // @factory L.point(coords: Number[])
  // Expects an array of the form `[x, y]` instead.

  // @alternative
  // @factory L.point(coords: Object)
  // Expects a plain object of the form `{x: Number, y: Number}` instead.
  function toPoint(x, y, round) {
    if (x instanceof Point) {
      return x;
    }
    if (isArray(x)) {
      return new Point(x[0], x[1]);
    }
    if (x === undefined || x === null) {
      return x;
    }
    if (typeof x === 'object' && 'x' in x && 'y' in x) {
      return new Point(x.x, x.y);
    }
    return new Point(x, y, round);
  }

  /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   */

  function Bounds(a, b) {
    if (!a) {
      return;
    }
    var points = b ? [a, b] : a;
    for (var i = 0, len = points.length; i < len; i++) {
      this.extend(points[i]);
    }
  }
  Bounds.prototype = {
    // @method extend(point: Point): this
    // Extends the bounds to contain the given point.
    extend: function extend(point) {
      // (Point)
      point = toPoint(point);

      // @property min: Point
      // The top left corner of the rectangle.
      // @property max: Point
      // The bottom right corner of the rectangle.
      if (!this.min && !this.max) {
        this.min = point.clone();
        this.max = point.clone();
      } else {
        this.min.x = Math.min(point.x, this.min.x);
        this.max.x = Math.max(point.x, this.max.x);
        this.min.y = Math.min(point.y, this.min.y);
        this.max.y = Math.max(point.y, this.max.y);
      }
      return this;
    },
    // @method getCenter(round?: Boolean): Point
    // Returns the center point of the bounds.
    getCenter: function getCenter(round) {
      return new Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
    },
    // @method getBottomLeft(): Point
    // Returns the bottom-left point of the bounds.
    getBottomLeft: function getBottomLeft() {
      return new Point(this.min.x, this.max.y);
    },
    // @method getTopRight(): Point
    // Returns the top-right point of the bounds.
    getTopRight: function getTopRight() {
      // -> Point
      return new Point(this.max.x, this.min.y);
    },
    // @method getTopLeft(): Point
    // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
    getTopLeft: function getTopLeft() {
      return this.min; // left, top
    },

    // @method getBottomRight(): Point
    // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
    getBottomRight: function getBottomRight() {
      return this.max; // right, bottom
    },

    // @method getSize(): Point
    // Returns the size of the given bounds
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    // @method contains(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains(point: Point): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function contains(obj) {
      var min, max;
      if (typeof obj[0] === 'number' || obj instanceof Point) {
        obj = toPoint(obj);
      } else {
        obj = toBounds(obj);
      }
      if (obj instanceof Bounds) {
        min = obj.min;
        max = obj.max;
      } else {
        min = max = obj;
      }
      return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
    },
    // @method intersects(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds
    // intersect if they have at least one point in common.
    intersects: function intersects(bounds) {
      // (Bounds) -> Boolean
      bounds = toBounds(bounds);
      var min = this.min,
        max = this.max,
        min2 = bounds.min,
        max2 = bounds.max,
        xIntersects = max2.x >= min.x && min2.x <= max.x,
        yIntersects = max2.y >= min.y && min2.y <= max.y;
      return xIntersects && yIntersects;
    },
    // @method overlaps(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds
    // overlap if their intersection is an area.
    overlaps: function overlaps(bounds) {
      // (Bounds) -> Boolean
      bounds = toBounds(bounds);
      var min = this.min,
        max = this.max,
        min2 = bounds.min,
        max2 = bounds.max,
        xOverlaps = max2.x > min.x && min2.x < max.x,
        yOverlaps = max2.y > min.y && min2.y < max.y;
      return xOverlaps && yOverlaps;
    },
    isValid: function isValid() {
      return !!(this.min && this.max);
    }
  };

  // @factory L.bounds(corner1: Point, corner2: Point)
  // Creates a Bounds object from two corners coordinate pairs.
  // @alternative
  // @factory L.bounds(points: Point[])
  // Creates a Bounds object from the given array of points.
  function toBounds(a, b) {
    if (!a || a instanceof Bounds) {
      return a;
    }
    return new Bounds(a, b);
  }

  /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   */

  function LatLngBounds(corner1, corner2) {
    // (LatLng, LatLng) or (LatLng[])
    if (!corner1) {
      return;
    }
    var latlngs = corner2 ? [corner1, corner2] : corner1;
    for (var i = 0, len = latlngs.length; i < len; i++) {
      this.extend(latlngs[i]);
    }
  }
  LatLngBounds.prototype = {
    // @method extend(latlng: LatLng): this
    // Extend the bounds to contain the given point

    // @alternative
    // @method extend(otherBounds: LatLngBounds): this
    // Extend the bounds to contain the given bounds
    extend: function extend(obj) {
      var sw = this._southWest,
        ne = this._northEast,
        sw2,
        ne2;
      if (obj instanceof LatLng) {
        sw2 = obj;
        ne2 = obj;
      } else if (obj instanceof LatLngBounds) {
        sw2 = obj._southWest;
        ne2 = obj._northEast;
        if (!sw2 || !ne2) {
          return this;
        }
      } else {
        return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
      }
      if (!sw && !ne) {
        this._southWest = new LatLng(sw2.lat, sw2.lng);
        this._northEast = new LatLng(ne2.lat, ne2.lng);
      } else {
        sw.lat = Math.min(sw2.lat, sw.lat);
        sw.lng = Math.min(sw2.lng, sw.lng);
        ne.lat = Math.max(ne2.lat, ne.lat);
        ne.lng = Math.max(ne2.lng, ne.lng);
      }
      return this;
    },
    // @method pad(bufferRatio: Number): LatLngBounds
    // Returns bigger bounds created by extending the current bounds by a given percentage in each direction.
    pad: function pad(bufferRatio) {
      var sw = this._southWest,
        ne = this._northEast,
        heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
        widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
      return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
    },
    // @method getCenter(): LatLng
    // Returns the center point of the bounds.
    getCenter: function getCenter() {
      return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    // @method getSouthWest(): LatLng
    // Returns the south-west point of the bounds.
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    // @method getNorthEast(): LatLng
    // Returns the north-east point of the bounds.
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    // @method getNorthWest(): LatLng
    // Returns the north-west point of the bounds.
    getNorthWest: function getNorthWest() {
      return new LatLng(this.getNorth(), this.getWest());
    },
    // @method getSouthEast(): LatLng
    // Returns the south-east point of the bounds.
    getSouthEast: function getSouthEast() {
      return new LatLng(this.getSouth(), this.getEast());
    },
    // @method getWest(): Number
    // Returns the west longitude of the bounds
    getWest: function getWest() {
      return this._southWest.lng;
    },
    // @method getSouth(): Number
    // Returns the south latitude of the bounds
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    // @method getEast(): Number
    // Returns the east longitude of the bounds
    getEast: function getEast() {
      return this._northEast.lng;
    },
    // @method getNorth(): Number
    // Returns the north latitude of the bounds
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    // @method contains(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle contains the given one.

    // @alternative
    // @method contains (latlng: LatLng): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function contains(obj) {
      // (LatLngBounds) or (LatLng) -> Boolean
      if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
        obj = toLatLng(obj);
      } else {
        obj = toLatLngBounds(obj);
      }
      var sw = this._southWest,
        ne = this._northEast,
        sw2,
        ne2;
      if (obj instanceof LatLngBounds) {
        sw2 = obj.getSouthWest();
        ne2 = obj.getNorthEast();
      } else {
        sw2 = ne2 = obj;
      }
      return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
    },
    // @method intersects(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
    intersects: function intersects(bounds) {
      bounds = toLatLngBounds(bounds);
      var sw = this._southWest,
        ne = this._northEast,
        sw2 = bounds.getSouthWest(),
        ne2 = bounds.getNorthEast(),
        latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
        lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
      return latIntersects && lngIntersects;
    },
    // @method overlaps(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
    overlaps: function overlaps(bounds) {
      bounds = toLatLngBounds(bounds);
      var sw = this._southWest,
        ne = this._northEast,
        sw2 = bounds.getSouthWest(),
        ne2 = bounds.getNorthEast(),
        latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat,
        lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
      return latOverlaps && lngOverlaps;
    },
    // @method toBBoxString(): String
    // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
    },
    // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
    // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overriden by setting `maxMargin` to a small number.
    equals: function equals(bounds, maxMargin) {
      if (!bounds) {
        return false;
      }
      bounds = toLatLngBounds(bounds);
      return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
    },
    // @method isValid(): Boolean
    // Returns `true` if the bounds are properly initialized.
    isValid: function isValid() {
      return !!(this._southWest && this._northEast);
    }
  };

  // TODO International date line?

  // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
  // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

  // @alternative
  // @factory L.latLngBounds(latlngs: LatLng[])
  // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
  function toLatLngBounds(a, b) {
    if (a instanceof LatLngBounds) {
      return a;
    }
    return new LatLngBounds(a, b);
  }

  /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   */

  function LatLng(lat, lng, alt) {
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    }

    // @property lat: Number
    // Latitude in degrees
    this.lat = +lat;

    // @property lng: Number
    // Longitude in degrees
    this.lng = +lng;

    // @property alt: Number
    // Altitude in meters (optional)
    if (alt !== undefined) {
      this.alt = +alt;
    }
  }
  LatLng.prototype = {
    // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
    // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overriden by setting `maxMargin` to a small number.
    equals: function equals(obj, maxMargin) {
      if (!obj) {
        return false;
      }
      obj = toLatLng(obj);
      var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
      return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
    },
    // @method toString(): String
    // Returns a string representation of the point (for debugging purposes).
    toString: function toString(precision) {
      return 'LatLng(' + formatNum(this.lat, precision) + ', ' + formatNum(this.lng, precision) + ')';
    },
    // @method distanceTo(otherLatLng: LatLng): Number
    // Returns the distance (in meters) to the given `LatLng` calculated using the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula).
    distanceTo: function distanceTo(other) {
      return Earth.distance(this, toLatLng(other));
    },
    // @method wrap(): LatLng
    // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
    wrap: function wrap() {
      return Earth.wrapLatLng(this);
    },
    // @method toBounds(sizeInMeters: Number): LatLngBounds
    // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
    toBounds: function toBounds(sizeInMeters) {
      var latAccuracy = 180 * sizeInMeters / 40075017,
        lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
      return toLatLngBounds([this.lat - latAccuracy, this.lng - lngAccuracy], [this.lat + latAccuracy, this.lng + lngAccuracy]);
    },
    clone: function clone() {
      return new LatLng(this.lat, this.lng, this.alt);
    }
  };

  // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
  // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

  // @alternative
  // @factory L.latLng(coords: Array): LatLng
  // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

  // @alternative
  // @factory L.latLng(coords: Object): LatLng
  // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

  function toLatLng(a, b, c) {
    if (a instanceof LatLng) {
      return a;
    }
    if (isArray(a) && typeof a[0] !== 'object') {
      if (a.length === 3) {
        return new LatLng(a[0], a[1], a[2]);
      }
      if (a.length === 2) {
        return new LatLng(a[0], a[1]);
      }
      return null;
    }
    if (a === undefined || a === null) {
      return a;
    }
    if (typeof a === 'object' && 'lat' in a) {
      return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
    }
    if (b === undefined) {
      return null;
    }
    return new LatLng(a, b, c);
  }

  /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   */

  var CRS = {
    // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
    // Projects geographical coordinates into pixel coordinates for a given zoom.
    latLngToPoint: function latLngToPoint(latlng, zoom) {
      var projectedPoint = this.projection.project(latlng),
        scale = this.scale(zoom);
      return this.transformation._transform(projectedPoint, scale);
    },
    // @method pointToLatLng(point: Point, zoom: Number): LatLng
    // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
    // zoom into geographical coordinates.
    pointToLatLng: function pointToLatLng(point, zoom) {
      var scale = this.scale(zoom),
        untransformedPoint = this.transformation.untransform(point, scale);
      return this.projection.unproject(untransformedPoint);
    },
    // @method project(latlng: LatLng): Point
    // Projects geographical coordinates into coordinates in units accepted for
    // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
    project: function project(latlng) {
      return this.projection.project(latlng);
    },
    // @method unproject(point: Point): LatLng
    // Given a projected coordinate returns the corresponding LatLng.
    // The inverse of `project`.
    unproject: function unproject(point) {
      return this.projection.unproject(point);
    },
    // @method scale(zoom: Number): Number
    // Returns the scale used when transforming projected coordinates into
    // pixel coordinates for a particular zoom. For example, it returns
    // `256 * 2^zoom` for Mercator-based CRS.
    scale: function scale(zoom) {
      return 256 * Math.pow(2, zoom);
    },
    // @method zoom(scale: Number): Number
    // Inverse of `scale()`, returns the zoom level corresponding to a scale
    // factor of `scale`.
    zoom: function zoom(scale) {
      return Math.log(scale / 256) / Math.LN2;
    },
    // @method getProjectedBounds(zoom: Number): Bounds
    // Returns the projection's bounds scaled and transformed for the provided `zoom`.
    getProjectedBounds: function getProjectedBounds(zoom) {
      if (this.infinite) {
        return null;
      }
      var b = this.projection.bounds,
        s = this.scale(zoom),
        min = this.transformation.transform(b.min, s),
        max = this.transformation.transform(b.max, s);
      return new Bounds(min, max);
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates.

    // @property code: String
    // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
    //
    // @property wrapLng: Number[]
    // An array of two numbers defining whether the longitude (horizontal) coordinate
    // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
    // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
    //
    // @property wrapLat: Number[]
    // Like `wrapLng`, but for the latitude (vertical) axis.

    // wrapLng: [min, max],
    // wrapLat: [min, max],

    // @property infinite: Boolean
    // If true, the coordinate space will be unbounded (infinite in both axes)
    infinite: false,
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where lat and lng has been wrapped according to the
    // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
    wrapLatLng: function wrapLatLng(latlng) {
      var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
        lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
        alt = latlng.alt;
      return new LatLng(lat, lng, alt);
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring
    // that its center is within the CRS's bounds.
    // Only accepts actual `L.LatLngBounds` instances, not arrays.
    wrapLatLngBounds: function wrapLatLngBounds(bounds) {
      var center = bounds.getCenter(),
        newCenter = this.wrapLatLng(center),
        latShift = center.lat - newCenter.lat,
        lngShift = center.lng - newCenter.lng;
      if (latShift === 0 && lngShift === 0) {
        return bounds;
      }
      var sw = bounds.getSouthWest(),
        ne = bounds.getNorthEast(),
        newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
        newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
      return new LatLngBounds(newSw, newNe);
    }
  };

  /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */

  var Earth = extend({}, CRS, {
    wrapLng: [-180, 180],
    // Mean Earth Radius, as recommended for use by
    // the International Union of Geodesy and Geophysics,
    // see http://rosettacode.org/wiki/Haversine_formula
    R: 6371000,
    // distance between two geographical points using spherical law of cosines approximation
    distance: function distance(latlng1, latlng2) {
      var rad = Math.PI / 180,
        lat1 = latlng1.lat * rad,
        lat2 = latlng2.lat * rad,
        a = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);
      return this.R * Math.acos(Math.min(a, 1));
    }
  });

  /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */

  var SphericalMercator = {
    R: 6378137,
    MAX_LATITUDE: 85.0511287798,
    project: function project(latlng) {
      var d = Math.PI / 180,
        max = this.MAX_LATITUDE,
        lat = Math.max(Math.min(max, latlng.lat), -max),
        sin = Math.sin(lat * d);
      return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
    },
    unproject: function unproject(point) {
      var d = 180 / Math.PI;
      return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
    },
    bounds: function () {
      var d = 6378137 * Math.PI;
      return new Bounds([-d, -d], [d, d]);
    }()
  };

  /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */

  // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
  // Creates a `Transformation` object with the given coefficients.
  function Transformation(a, b, c, d) {
    if (isArray(a)) {
      // use array properties
      this._a = a[0];
      this._b = a[1];
      this._c = a[2];
      this._d = a[3];
      return;
    }
    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
  }
  Transformation.prototype = {
    // @method transform(point: Point, scale?: Number): Point
    // Returns a transformed point, optionally multiplied by the given scale.
    // Only accepts actual `L.Point` instances, not arrays.
    transform: function transform(point, scale) {
      // (Point, Number) -> Point
      return this._transform(point.clone(), scale);
    },
    // destructive transform (faster)
    _transform: function _transform(point, scale) {
      scale = scale || 1;
      point.x = scale * (this._a * point.x + this._b);
      point.y = scale * (this._c * point.y + this._d);
      return point;
    },
    // @method untransform(point: Point, scale?: Number): Point
    // Returns the reverse transformation of the given point, optionally divided
    // by the given scale. Only accepts actual `L.Point` instances, not arrays.
    untransform: function untransform(point, scale) {
      scale = scale || 1;
      return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
    }
  };

  // factory L.transformation(a: Number, b: Number, c: Number, d: Number)

  // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // Instantiates a Transformation object with the given coefficients.

  // @alternative
  // @factory L.transformation(coefficients: Array): Transformation
  // Expects an coeficients array of the form
  // `[a: Number, b: Number, c: Number, d: Number]`.

  function toTransformation(a, b, c, d) {
    return new Transformation(a, b, c, d);
  }

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */

  var EPSG3857 = extend({}, Earth, {
    code: 'EPSG:3857',
    projection: SphericalMercator,
    transformation: function () {
      var scale = 0.5 / (Math.PI * SphericalMercator.R);
      return toTransformation(scale, 0.5, -scale, 0.5);
    }()
  });
  var EPSG900913 = extend({}, EPSG3857, {
    code: 'EPSG:900913'
  });

  // @namespace SVG; @section
  // There are several static functions which can be called without instantiating L.SVG:

  // @function create(name: String): SVGElement
  // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
  // corresponding to the class name passed. For example, using 'line' will return
  // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
  function svgCreate(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  // @function pointsToPath(rings: Point[], closed: Boolean): String
  // Generates a SVG path string for multiple rings, with each ring turning
  // into "M..L..L.." instructions
  function pointsToPath(rings, closed) {
    var str = '',
      i,
      j,
      len,
      len2,
      points,
      p;
    for (i = 0, len = rings.length; i < len; i++) {
      points = rings[i];
      for (j = 0, len2 = points.length; j < len2; j++) {
        p = points[j];
        str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
      }

      // closes the ring for polygons; "x" is VML syntax
      str += closed ? svg ? 'z' : 'x' : '';
    }

    // SVG complains about empty path strings
    return str || 'M0 0';
  }

  /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */

  var style$1 = document.documentElement.style;

  // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
  var ie = ('ActiveXObject' in window);

  // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
  var ielt9 = ie && !document.addEventListener;

  // @property edge: Boolean; `true` for the Edge web browser.
  var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

  // @property webkit: Boolean;
  // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
  var webkit = userAgentContains('webkit');

  // @property android: Boolean
  // `true` for any browser running on an Android platform.
  var android = userAgentContains('android');

  // @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
  var android23 = userAgentContains('android 2') || userAgentContains('android 3');

  // @property opera: Boolean; `true` for the Opera browser
  var opera = !!window.opera;

  // @property chrome: Boolean; `true` for the Chrome browser.
  var chrome = userAgentContains('chrome');

  // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
  var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

  // @property safari: Boolean; `true` for the Safari browser.
  var safari = !chrome && userAgentContains('safari');
  var phantom = userAgentContains('phantom');

  // @property opera12: Boolean
  // `true` for the Opera browser supporting CSS transforms (version 12 or later).
  var opera12 = ('OTransition' in style$1);

  // @property win: Boolean; `true` when the browser is running in a Windows platform
  var win = navigator.platform.indexOf('Win') === 0;

  // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
  var ie3d = ie && 'transition' in style$1;

  // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
  var webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23;

  // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
  var gecko3d = ('MozPerspective' in style$1);

  // @property any3d: Boolean
  // `true` for all browsers supporting CSS transforms.
  var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

  // @property mobile: Boolean; `true` for all browsers running in a mobile device.
  var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

  // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
  var mobileWebkit = mobile && webkit;

  // @property mobileWebkit3d: Boolean
  // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
  var mobileWebkit3d = mobile && webkit3d;

  // @property msPointer: Boolean
  // `true` for browsers implementing the Microsoft touch events model (notably IE10).
  var msPointer = !window.PointerEvent && window.MSPointerEvent;

  // @property pointer: Boolean
  // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
  var pointer = !!(window.PointerEvent || msPointer);

  // @property touch: Boolean
  // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
  // This does not necessarily mean that the browser is running in a computer with
  // a touchscreen, it only means that the browser is capable of understanding
  // touch events.
  var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

  // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
  var mobileOpera = mobile && opera;

  // @property mobileGecko: Boolean
  // `true` for gecko-based browsers running in a mobile device.
  var mobileGecko = mobile && gecko;

  // @property retina: Boolean
  // `true` for browsers on a high-resolution "retina" screen.
  var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;

  // @property canvas: Boolean
  // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
  var canvas = function () {
    return !!document.createElement('canvas').getContext;
  }();

  // @property svg: Boolean
  // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
  var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

  // @property vml: Boolean
  // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
  var vml = !svg && function () {
    try {
      var div = document.createElement('div');
      div.innerHTML = '<v:shape adj="1"/>';
      var shape = div.firstChild;
      shape.style.behavior = 'url(#default#VML)';
      return shape && typeof shape.adj === 'object';
    } catch (e) {
      return false;
    }
  }();
  function userAgentContains(str) {
    return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
  }
  var Browser = (Object.freeze || Object)({
    ie: ie,
    ielt9: ielt9,
    edge: edge,
    webkit: webkit,
    android: android,
    android23: android23,
    opera: opera,
    chrome: chrome,
    gecko: gecko,
    safari: safari,
    phantom: phantom,
    opera12: opera12,
    win: win,
    ie3d: ie3d,
    webkit3d: webkit3d,
    gecko3d: gecko3d,
    any3d: any3d,
    mobile: mobile,
    mobileWebkit: mobileWebkit,
    mobileWebkit3d: mobileWebkit3d,
    msPointer: msPointer,
    pointer: pointer,
    touch: touch,
    mobileOpera: mobileOpera,
    mobileGecko: mobileGecko,
    retina: retina,
    canvas: canvas,
    svg: svg,
    vml: vml
  });

  /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */

  var POINTER_DOWN = msPointer ? 'MSPointerDown' : 'pointerdown';
  var POINTER_MOVE = msPointer ? 'MSPointerMove' : 'pointermove';
  var POINTER_UP = msPointer ? 'MSPointerUp' : 'pointerup';
  var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
  var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
  var _pointers = {};
  var _pointerDocListener = false;

  // DomEvent.DoubleTap needs to know about this
  var _pointersCount = 0;

  // Provides a touch events wrapper for (ms)pointer events.
  // ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

  function addPointerListener(obj, type, handler, id) {
    if (type === 'touchstart') {
      _addPointerStart(obj, handler, id);
    } else if (type === 'touchmove') {
      _addPointerMove(obj, handler, id);
    } else if (type === 'touchend') {
      _addPointerEnd(obj, handler, id);
    }
    return this;
  }
  function removePointerListener(obj, type, id) {
    var handler = obj['_leaflet_' + type + id];
    if (type === 'touchstart') {
      obj.removeEventListener(POINTER_DOWN, handler, false);
    } else if (type === 'touchmove') {
      obj.removeEventListener(POINTER_MOVE, handler, false);
    } else if (type === 'touchend') {
      obj.removeEventListener(POINTER_UP, handler, false);
      obj.removeEventListener(POINTER_CANCEL, handler, false);
    }
    return this;
  }
  function _addPointerStart(obj, handler, id) {
    var onDown = bind(function (e) {
      if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
        // In IE11, some touch events needs to fire for form controls, or
        // the controls will stop working. We keep a whitelist of tag names that
        // need these events. For other target tags, we prevent default on the event.
        if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
          preventDefault(e);
        } else {
          return;
        }
      }
      _handlePointer(e, handler);
    });
    obj['_leaflet_touchstart' + id] = onDown;
    obj.addEventListener(POINTER_DOWN, onDown, false);

    // need to keep track of what pointers and how many are active to provide e.touches emulation
    if (!_pointerDocListener) {
      // we listen documentElement as any drags that end by moving the touch off the screen get fired there
      document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
      document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
      document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
      document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
      _pointerDocListener = true;
    }
  }
  function _globalPointerDown(e) {
    _pointers[e.pointerId] = e;
    _pointersCount++;
  }
  function _globalPointerMove(e) {
    if (_pointers[e.pointerId]) {
      _pointers[e.pointerId] = e;
    }
  }
  function _globalPointerUp(e) {
    delete _pointers[e.pointerId];
    _pointersCount--;
  }
  function _handlePointer(e, handler) {
    e.touches = [];
    for (var i in _pointers) {
      e.touches.push(_pointers[i]);
    }
    e.changedTouches = [e];
    handler(e);
  }
  function _addPointerMove(obj, handler, id) {
    var onMove = function onMove(e) {
      // don't fire touch moves when mouse isn't down
      if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
        return;
      }
      _handlePointer(e, handler);
    };
    obj['_leaflet_touchmove' + id] = onMove;
    obj.addEventListener(POINTER_MOVE, onMove, false);
  }
  function _addPointerEnd(obj, handler, id) {
    var onUp = function onUp(e) {
      _handlePointer(e, handler);
    };
    obj['_leaflet_touchend' + id] = onUp;
    obj.addEventListener(POINTER_UP, onUp, false);
    obj.addEventListener(POINTER_CANCEL, onUp, false);
  }

  /*
   * Extends the event handling code with double tap support for mobile browsers.
   */

  var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
  var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
  var _pre = '_leaflet_';

  // inspired by Zepto touch code by Thomas Fuchs
  function addDoubleTapListener(obj, handler, id) {
    var last,
      touch$$1,
      doubleTap = false,
      delay = 250;
    function onTouchStart(e) {
      var count;
      if (pointer) {
        if (!edge || e.pointerType === 'mouse') {
          return;
        }
        count = _pointersCount;
      } else {
        count = e.touches.length;
      }
      if (count > 1) {
        return;
      }
      var now = Date.now(),
        delta = now - (last || now);
      touch$$1 = e.touches ? e.touches[0] : e;
      doubleTap = delta > 0 && delta <= delay;
      last = now;
    }
    function onTouchEnd(e) {
      if (doubleTap && !touch$$1.cancelBubble) {
        if (pointer) {
          if (!edge || e.pointerType === 'mouse') {
            return;
          }
          // work around .type being readonly with MSPointer* events
          var newTouch = {},
            prop,
            i;
          for (i in touch$$1) {
            prop = touch$$1[i];
            newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
          }
          touch$$1 = newTouch;
        }
        touch$$1.type = 'dblclick';
        handler(touch$$1);
        last = null;
      }
    }
    obj[_pre + _touchstart + id] = onTouchStart;
    obj[_pre + _touchend + id] = onTouchEnd;
    obj[_pre + 'dblclick' + id] = handler;
    obj.addEventListener(_touchstart, onTouchStart, false);
    obj.addEventListener(_touchend, onTouchEnd, false);

    // On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
    // the browser doesn't fire touchend/pointerup events but does fire
    // native dblclicks. See #4127.
    // Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
    obj.addEventListener('dblclick', handler, false);
    return this;
  }
  function removeDoubleTapListener(obj, id) {
    var touchstart = obj[_pre + _touchstart + id],
      touchend = obj[_pre + _touchend + id],
      dblclick = obj[_pre + 'dblclick' + id];
    obj.removeEventListener(_touchstart, touchstart, false);
    obj.removeEventListener(_touchend, touchend, false);
    if (!edge) {
      obj.removeEventListener('dblclick', dblclick, false);
    }
    return this;
  }

  /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */

  // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

  // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Adds a listener function (`fn`) to a particular DOM event type of the
  // element `el`. You can optionally specify the context of the listener
  // (object the `this` keyword will point to). You can also pass several
  // space-separated types (e.g. `'click dblclick'`).

  // @alternative
  // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
  // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  function on(obj, types, fn, context) {
    if (typeof types === 'object') {
      for (var type in types) {
        addOne(obj, type, types[type], fn);
      }
    } else {
      types = splitWords(types);
      for (var i = 0, len = types.length; i < len; i++) {
        addOne(obj, types[i], fn, context);
      }
    }
    return this;
  }
  var eventsKey = '_leaflet_events';

  // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Removes a previously added listener function. If no function is specified,
  // it will remove all the listeners of that particular DOM event from the element.
  // Note that if you passed a custom context to on, you must pass the same
  // context to `off` in order to remove the listener.

  // @alternative
  // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
  // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

  // @alternative
  // @function off(el: HTMLElement): this
  // Removes all known event listeners
  function off(obj, types, fn, context) {
    if (typeof types === 'object') {
      for (var type in types) {
        removeOne(obj, type, types[type], fn);
      }
    } else if (types) {
      types = splitWords(types);
      for (var i = 0, len = types.length; i < len; i++) {
        removeOne(obj, types[i], fn, context);
      }
    } else {
      for (var j in obj[eventsKey]) {
        removeOne(obj, j, obj[eventsKey][j]);
      }
      delete obj[eventsKey];
    }
    return this;
  }
  function addOne(obj, type, fn, context) {
    var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');
    if (obj[eventsKey] && obj[eventsKey][id]) {
      return this;
    }
    var handler = function handler(e) {
      return fn.call(context || obj, e || window.event);
    };
    var originalHandler = handler;
    if (pointer && type.indexOf('touch') === 0) {
      // Needs DomEvent.Pointer.js
      addPointerListener(obj, type, handler, id);
    } else if (touch && type === 'dblclick' && addDoubleTapListener && !(pointer && chrome)) {
      // Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
      // See #5180
      addDoubleTapListener(obj, handler, id);
    } else if ('addEventListener' in obj) {
      if (type === 'mousewheel') {
        obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
      } else if (type === 'mouseenter' || type === 'mouseleave') {
        handler = function handler(e) {
          e = e || window.event;
          if (isExternalTarget(obj, e)) {
            originalHandler(e);
          }
        };
        obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
      } else {
        if (type === 'click' && android) {
          handler = function handler(e) {
            filterClick(e, originalHandler);
          };
        }
        obj.addEventListener(type, handler, false);
      }
    } else if ('attachEvent' in obj) {
      obj.attachEvent('on' + type, handler);
    }
    obj[eventsKey] = obj[eventsKey] || {};
    obj[eventsKey][id] = handler;
  }
  function removeOne(obj, type, fn, context) {
    var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
      handler = obj[eventsKey] && obj[eventsKey][id];
    if (!handler) {
      return this;
    }
    if (pointer && type.indexOf('touch') === 0) {
      removePointerListener(obj, type, id);
    } else if (touch && type === 'dblclick' && removeDoubleTapListener) {
      removeDoubleTapListener(obj, id);
    } else if ('removeEventListener' in obj) {
      if (type === 'mousewheel') {
        obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
      } else {
        obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type, handler, false);
      }
    } else if ('detachEvent' in obj) {
      obj.detachEvent('on' + type, handler);
    }
    obj[eventsKey][id] = null;
  }

  // @function stopPropagation(ev: DOMEvent): this
  // Stop the given event from propagation to parent elements. Used inside the listener functions:
  // ```js
  // L.DomEvent.on(div, 'click', function (ev) {
  // 	L.DomEvent.stopPropagation(ev);
  // });
  // ```
  function stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (e.originalEvent) {
      // In case of Leaflet event.
      e.originalEvent._stopped = true;
    } else {
      e.cancelBubble = true;
    }
    skipped(e);
    return this;
  }

  // @function disableScrollPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
  function disableScrollPropagation(el) {
    addOne(el, 'mousewheel', stopPropagation);
    return this;
  }

  // @function disableClickPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
  // `'mousedown'` and `'touchstart'` events (plus browser variants).
  function disableClickPropagation(el) {
    on(el, 'mousedown touchstart dblclick', stopPropagation);
    addOne(el, 'click', fakeStop);
    return this;
  }

  // @function preventDefault(ev: DOMEvent): this
  // Prevents the default action of the DOM Event `ev` from happening (such as
  // following a link in the href of the a element, or doing a POST request
  // with page reload when a `<form>` is submitted).
  // Use it inside listener functions.
  function preventDefault(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    return this;
  }

  // @function stop(ev): this
  // Does `stopPropagation` and `preventDefault` at the same time.
  function stop(e) {
    preventDefault(e);
    stopPropagation(e);
    return this;
  }

  // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
  // Gets normalized mouse position from a DOM event relative to the
  // `container` or to the whole page if not specified.
  function getMousePosition(e, container) {
    if (!container) {
      return new Point(e.clientX, e.clientY);
    }
    var rect = container.getBoundingClientRect();
    return new Point(e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop);
  }

  // Chrome on Win scrolls double the pixels as in other platforms (see #4538),
  // and Firefox scrolls device pixels, not CSS pixels
  var wheelPxFactor = win && chrome ? 2 * window.devicePixelRatio : gecko ? window.devicePixelRatio : 1;

  // @function getWheelDelta(ev: DOMEvent): Number
  // Gets normalized wheel delta from a mousewheel DOM event, in vertical
  // pixels scrolled (negative if scrolling down).
  // Events from pointing devices without precise scrolling are mapped to
  // a best guess of 60 pixels.
  function getWheelDelta(e) {
    return edge ? e.wheelDeltaY / 2 :
    // Don't trust window-geometry-based delta
    e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor :
    // Pixels
    e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 :
    // Lines
    e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 :
    // Pages
    e.deltaX || e.deltaZ ? 0 :
    // Skip horizontal/depth wheel events
    e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 :
    // Legacy IE pixels
    e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 :
    // Legacy Moz lines
    e.detail ? e.detail / -32765 * 60 :
    // Legacy Moz pages
    0;
  }
  var skipEvents = {};
  function fakeStop(e) {
    // fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
    skipEvents[e.type] = true;
  }
  function skipped(e) {
    var events = skipEvents[e.type];
    // reset when checking, as it's only used in map container and propagates outside of the map
    skipEvents[e.type] = false;
    return events;
  }

  // check if element really left/entered the event target (for mouseenter/mouseleave)
  function isExternalTarget(el, e) {
    var related = e.relatedTarget;
    if (!related) {
      return true;
    }
    try {
      while (related && related !== el) {
        related = related.parentNode;
      }
    } catch (err) {
      return false;
    }
    return related !== el;
  }
  var lastClick;

  // this is a horrible workaround for a bug in Android where a single touch triggers two click events
  function filterClick(e, handler) {
    var timeStamp = e.timeStamp || e.originalEvent && e.originalEvent.timeStamp,
      elapsed = lastClick && timeStamp - lastClick;

    // are they closer together than 500ms yet more than 100ms?
    // Android typically triggers them ~300ms apart while multiple listeners
    // on the same event should be triggered far faster;
    // or check if click is simulated on the element, and if it is, reject any non-simulated events

    if (elapsed && elapsed > 100 && elapsed < 500 || e.target._simulatedClick && !e._simulated) {
      stop(e);
      return;
    }
    lastClick = timeStamp;
    handler(e);
  }
  var DomEvent = (Object.freeze || Object)({
    on: on,
    off: off,
    stopPropagation: stopPropagation,
    disableScrollPropagation: disableScrollPropagation,
    disableClickPropagation: disableClickPropagation,
    preventDefault: preventDefault,
    stop: stop,
    getMousePosition: getMousePosition,
    getWheelDelta: getWheelDelta,
    fakeStop: fakeStop,
    skipped: skipped,
    isExternalTarget: isExternalTarget,
    addListener: on,
    removeListener: off
  });

  /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */

  // @property TRANSFORM: String
  // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
  var TRANSFORM = testProp(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

  // webkitTransition comes first because some browser versions that drop vendor prefix don't do
  // the same for the transitionend event, in particular the Android 4.1 stock browser

  // @property TRANSITION: String
  // Vendor-prefixed transition style name.
  var TRANSITION = testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

  // @property TRANSITION_END: String
  // Vendor-prefixed transitionend event name.
  var TRANSITION_END = TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';

  // @function get(id: String|HTMLElement): HTMLElement
  // Returns an element given its DOM id, or returns the element itself
  // if it was passed directly.
  function get(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
  }

  // @function getStyle(el: HTMLElement, styleAttrib: String): String
  // Returns the value for a certain style attribute on an element,
  // including computed values or values set through CSS.
  function getStyle(el, style) {
    var value = el.style[style] || el.currentStyle && el.currentStyle[style];
    if ((!value || value === 'auto') && document.defaultView) {
      var css = document.defaultView.getComputedStyle(el, null);
      value = css ? css[style] : null;
    }
    return value === 'auto' ? null : value;
  }

  // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
  // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
  function create$1(tagName, className, container) {
    var el = document.createElement(tagName);
    el.className = className || '';
    if (container) {
      container.appendChild(el);
    }
    return el;
  }

  // @function remove(el: HTMLElement)
  // Removes `el` from its parent element
  function _remove(el) {
    var parent = el.parentNode;
    if (parent) {
      parent.removeChild(el);
    }
  }

  // @function empty(el: HTMLElement)
  // Removes all of `el`'s children elements from `el`
  function empty(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  // @function toFront(el: HTMLElement)
  // Makes `el` the last child of its parent, so it renders in front of the other children.
  function toFront(el) {
    var parent = el.parentNode;
    if (parent.lastChild !== el) {
      parent.appendChild(el);
    }
  }

  // @function toBack(el: HTMLElement)
  // Makes `el` the first child of its parent, so it renders behind the other children.
  function toBack(el) {
    var parent = el.parentNode;
    if (parent.firstChild !== el) {
      parent.insertBefore(el, parent.firstChild);
    }
  }

  // @function hasClass(el: HTMLElement, name: String): Boolean
  // Returns `true` if the element's class attribute contains `name`.
  function hasClass(el, name) {
    if (el.classList !== undefined) {
      return el.classList.contains(name);
    }
    var className = getClass(el);
    return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
  }

  // @function addClass(el: HTMLElement, name: String)
  // Adds `name` to the element's class attribute.
  function addClass(el, name) {
    if (el.classList !== undefined) {
      var classes = splitWords(name);
      for (var i = 0, len = classes.length; i < len; i++) {
        el.classList.add(classes[i]);
      }
    } else if (!hasClass(el, name)) {
      var className = getClass(el);
      setClass(el, (className ? className + ' ' : '') + name);
    }
  }

  // @function removeClass(el: HTMLElement, name: String)
  // Removes `name` from the element's class attribute.
  function removeClass(el, name) {
    if (el.classList !== undefined) {
      el.classList.remove(name);
    } else {
      setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
    }
  }

  // @function setClass(el: HTMLElement, name: String)
  // Sets the element's class.
  function setClass(el, name) {
    if (el.className.baseVal === undefined) {
      el.className = name;
    } else {
      // in case of SVG element
      el.className.baseVal = name;
    }
  }

  // @function getClass(el: HTMLElement): String
  // Returns the element's class.
  function getClass(el) {
    return el.className.baseVal === undefined ? el.className : el.className.baseVal;
  }

  // @function setOpacity(el: HTMLElement, opacity: Number)
  // Set the opacity of an element (including old IE support).
  // `opacity` must be a number from `0` to `1`.
  function _setOpacity(el, value) {
    if ('opacity' in el.style) {
      el.style.opacity = value;
    } else if ('filter' in el.style) {
      _setOpacityIE(el, value);
    }
  }
  function _setOpacityIE(el, value) {
    var filter = false,
      filterName = 'DXImageTransform.Microsoft.Alpha';

    // filters collection throws an error if we try to retrieve a filter that doesn't exist
    try {
      filter = el.filters.item(filterName);
    } catch (e) {
      // don't set opacity to 1 if we haven't already set an opacity,
      // it isn't needed and breaks transparent pngs.
      if (value === 1) {
        return;
      }
    }
    value = Math.round(value * 100);
    if (filter) {
      filter.Enabled = value !== 100;
      filter.Opacity = value;
    } else {
      el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
    }
  }

  // @function testProp(props: String[]): String|false
  // Goes through the array of style names and returns the first name
  // that is a valid style name for an element. If no such name is found,
  // it returns false. Useful for vendor-prefixed styles like `transform`.
  function testProp(props) {
    var style = document.documentElement.style;
    for (var i = 0; i < props.length; i++) {
      if (props[i] in style) {
        return props[i];
      }
    }
    return false;
  }

  // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
  // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
  // and optionally scaled by `scale`. Does not have an effect if the
  // browser doesn't support 3D CSS transforms.
  function setTransform(el, offset, scale) {
    var pos = offset || new Point(0, 0);
    el.style[TRANSFORM] = (ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
  }

  // @function setPosition(el: HTMLElement, position: Point)
  // Sets the position of `el` to coordinates specified by `position`,
  // using CSS translate or top/left positioning depending on the browser
  // (used by Leaflet internally to position its layers).
  function setPosition(el, point) {
    /*eslint-disable */
    el._leaflet_pos = point;
    /*eslint-enable */

    if (any3d) {
      setTransform(el, point);
    } else {
      el.style.left = point.x + 'px';
      el.style.top = point.y + 'px';
    }
  }

  // @function getPosition(el: HTMLElement): Point
  // Returns the coordinates of an element previously positioned with setPosition.
  function getPosition(el) {
    // this method is only used for elements previously positioned using setPosition,
    // so it's safe to cache the position for performance

    return el._leaflet_pos || new Point(0, 0);
  }

  // @function disableTextSelection()
  // Prevents the user from generating `selectstart` DOM events, usually generated
  // when the user drags the mouse through a page with text. Used internally
  // by Leaflet to override the behaviour of any click-and-drag interaction on
  // the map. Affects drag interactions on the whole document.

  // @function enableTextSelection()
  // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
  var disableTextSelection;
  var enableTextSelection;
  var _userSelect;
  if ('onselectstart' in document) {
    disableTextSelection = function disableTextSelection() {
      on(window, 'selectstart', preventDefault);
    };
    enableTextSelection = function enableTextSelection() {
      off(window, 'selectstart', preventDefault);
    };
  } else {
    var userSelectProperty = testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
    disableTextSelection = function disableTextSelection() {
      if (userSelectProperty) {
        var style = document.documentElement.style;
        _userSelect = style[userSelectProperty];
        style[userSelectProperty] = 'none';
      }
    };
    enableTextSelection = function enableTextSelection() {
      if (userSelectProperty) {
        document.documentElement.style[userSelectProperty] = _userSelect;
        _userSelect = undefined;
      }
    };
  }

  // @function disableImageDrag()
  // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
  // for `dragstart` DOM events, usually generated when the user drags an image.
  function disableImageDrag() {
    on(window, 'dragstart', preventDefault);
  }

  // @function enableImageDrag()
  // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
  function enableImageDrag() {
    off(window, 'dragstart', preventDefault);
  }
  var _outlineElement;
  var _outlineStyle;
  // @function preventOutline(el: HTMLElement)
  // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
  // of the element `el` invisible. Used internally by Leaflet to prevent
  // focusable elements from displaying an outline when the user performs a
  // drag interaction on them.
  function preventOutline(element) {
    while (element.tabIndex === -1) {
      element = element.parentNode;
    }
    if (!element.style) {
      return;
    }
    restoreOutline();
    _outlineElement = element;
    _outlineStyle = element.style.outline;
    element.style.outline = 'none';
    on(window, 'keydown', restoreOutline);
  }

  // @function restoreOutline()
  // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
  function restoreOutline() {
    if (!_outlineElement) {
      return;
    }
    _outlineElement.style.outline = _outlineStyle;
    _outlineElement = undefined;
    _outlineStyle = undefined;
    off(window, 'keydown', restoreOutline);
  }
  var DomUtil = (Object.freeze || Object)({
    TRANSFORM: TRANSFORM,
    TRANSITION: TRANSITION,
    TRANSITION_END: TRANSITION_END,
    get: get,
    getStyle: getStyle,
    create: create$1,
    remove: _remove,
    empty: empty,
    toFront: toFront,
    toBack: toBack,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    setClass: setClass,
    getClass: getClass,
    setOpacity: _setOpacity,
    testProp: testProp,
    setTransform: setTransform,
    setPosition: setPosition,
    getPosition: getPosition,
    disableTextSelection: disableTextSelection,
    enableTextSelection: enableTextSelection,
    disableImageDrag: disableImageDrag,
    enableImageDrag: enableImageDrag,
    preventOutline: preventOutline,
    restoreOutline: restoreOutline
  });

  /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var fx = new L.PosAnimation();
   * fx.run(el, [300, 500], 0.5);
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */

  var PosAnimation = Evented.extend({
    // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
    // Run an animation of a given element to a new position, optionally setting
    // duration in seconds (`0.25` by default) and easing linearity factor (3rd
    // argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
    // `0.5` by default).
    run: function run(el, newPos, duration, easeLinearity) {
      this.stop();
      this._el = el;
      this._inProgress = true;
      this._duration = duration || 0.25;
      this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
      this._startPos = getPosition(el);
      this._offset = newPos.subtract(this._startPos);
      this._startTime = +new Date();

      // @event start: Event
      // Fired when the animation starts
      this.fire('start');
      this._animate();
    },
    // @method stop()
    // Stops the animation (if currently running).
    stop: function stop() {
      if (!this._inProgress) {
        return;
      }
      this._step(true);
      this._complete();
    },
    _animate: function _animate() {
      // animation loop
      this._animId = requestAnimFrame(this._animate, this);
      this._step();
    },
    _step: function _step(round) {
      var elapsed = +new Date() - this._startTime,
        duration = this._duration * 1000;
      if (elapsed < duration) {
        this._runFrame(this._easeOut(elapsed / duration), round);
      } else {
        this._runFrame(1);
        this._complete();
      }
    },
    _runFrame: function _runFrame(progress, round) {
      var pos = this._startPos.add(this._offset.multiplyBy(progress));
      if (round) {
        pos._round();
      }
      setPosition(this._el, pos);

      // @event step: Event
      // Fired continuously during the animation.
      this.fire('step');
    },
    _complete: function _complete() {
      cancelAnimFrame(this._animId);
      this._inProgress = false;
      // @event end: Event
      // Fired when the animation ends.
      this.fire('end');
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  });

  /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */

  var Map = Evented.extend({
    options: {
      // @section Map State Options
      // @option crs: CRS = L.CRS.EPSG3857
      // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
      // sure what it means.
      crs: EPSG3857,
      // @option center: LatLng = undefined
      // Initial geographic center of the map
      center: undefined,
      // @option zoom: Number = undefined
      // Initial map zoom level
      zoom: undefined,
      // @option minZoom: Number = *
      // Minimum zoom level of the map.
      // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
      // the lowest of their `minZoom` options will be used instead.
      minZoom: undefined,
      // @option maxZoom: Number = *
      // Maximum zoom level of the map.
      // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
      // the highest of their `maxZoom` options will be used instead.
      maxZoom: undefined,
      // @option layers: Layer[] = []
      // Array of layers that will be added to the map initially
      layers: [],
      // @option maxBounds: LatLngBounds = null
      // When this option is set, the map restricts the view to the given
      // geographical bounds, bouncing the user back if the user tries to pan
      // outside the view. To set the restriction dynamically, use
      // [`setMaxBounds`](#map-setmaxbounds) method.
      maxBounds: undefined,
      // @option renderer: Renderer = *
      // The default method for drawing vector layers on the map. `L.SVG`
      // or `L.Canvas` by default depending on browser support.
      renderer: undefined,
      // @section Animation Options
      // @option zoomAnimation: Boolean = true
      // Whether the map zoom animation is enabled. By default it's enabled
      // in all browsers that support CSS3 Transitions except Android.
      zoomAnimation: true,
      // @option zoomAnimationThreshold: Number = 4
      // Won't animate zoom if the zoom difference exceeds this value.
      zoomAnimationThreshold: 4,
      // @option fadeAnimation: Boolean = true
      // Whether the tile fade animation is enabled. By default it's enabled
      // in all browsers that support CSS3 Transitions except Android.
      fadeAnimation: true,
      // @option markerZoomAnimation: Boolean = true
      // Whether markers animate their zoom with the zoom animation, if disabled
      // they will disappear for the length of the animation. By default it's
      // enabled in all browsers that support CSS3 Transitions except Android.
      markerZoomAnimation: true,
      // @option transform3DLimit: Number = 2^23
      // Defines the maximum size of a CSS translation transform. The default
      // value should not be changed unless a web browser positions layers in
      // the wrong place after doing a large `panBy`.
      transform3DLimit: 8388608,
      // Precision limit of a 32-bit float

      // @section Interaction Options
      // @option zoomSnap: Number = 1
      // Forces the map's zoom level to always be a multiple of this, particularly
      // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
      // By default, the zoom level snaps to the nearest integer; lower values
      // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
      // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
      zoomSnap: 1,
      // @option zoomDelta: Number = 1
      // Controls how much the map's zoom level will change after a
      // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
      // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
      // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
      zoomDelta: 1,
      // @option trackResize: Boolean = true
      // Whether the map automatically handles browser window resize to update itself.
      trackResize: true
    },
    initialize: function initialize(id, options) {
      // (HTMLElement or String, Object)
      options = setOptions(this, options);
      this._initContainer(id);
      this._initLayout();

      // hack for https://github.com/Leaflet/Leaflet/issues/1980
      this._onResize = bind(this._onResize, this);
      this._initEvents();
      if (options.maxBounds) {
        this.setMaxBounds(options.maxBounds);
      }
      if (options.zoom !== undefined) {
        this._zoom = this._limitZoom(options.zoom);
      }
      if (options.center && options.zoom !== undefined) {
        this.setView(toLatLng(options.center), options.zoom, {
          reset: true
        });
      }
      this._handlers = [];
      this._layers = {};
      this._zoomBoundLayers = {};
      this._sizeChanged = true;
      this.callInitHooks();

      // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
      this._zoomAnimated = TRANSITION && any3d && !mobileOpera && this.options.zoomAnimation;

      // zoom transitions run with the same duration for all layers, so if one of transitionend events
      // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
      if (this._zoomAnimated) {
        this._createAnimProxy();
        on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
      }
      this._addLayers(this.options.layers);
    },
    // @section Methods for modifying map state

    // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) with the given
    // animation options.
    setView: function setView(center, zoom, options) {
      zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
      center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
      options = options || {};
      this._stop();
      if (this._loaded && !options.reset && options !== true) {
        if (options.animate !== undefined) {
          options.zoom = extend({
            animate: options.animate
          }, options.zoom);
          options.pan = extend({
            animate: options.animate,
            duration: options.duration
          }, options.pan);
        }

        // try animating pan or zoom
        var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
        if (moved) {
          // prevent resize handler call, the view will refresh after animation anyway
          clearTimeout(this._sizeTimer);
          return this;
        }
      }

      // animation didn't start, just reset the map view
      this._resetView(center, zoom);
      return this;
    },
    // @method setZoom(zoom: Number, options?: Zoom/pan options): this
    // Sets the zoom of the map.
    setZoom: function setZoom(zoom, options) {
      if (!this._loaded) {
        this._zoom = zoom;
        return this;
      }
      return this.setView(this.getCenter(), zoom, {
        zoom: options
      });
    },
    // @method zoomIn(delta?: Number, options?: Zoom options): this
    // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomIn: function zoomIn(delta, options) {
      delta = delta || (any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom + delta, options);
    },
    // @method zoomOut(delta?: Number, options?: Zoom options): this
    // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomOut: function zoomOut(delta, options) {
      delta = delta || (any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom - delta, options);
    },
    // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified geographical point on the map
    // stationary (e.g. used internally for scroll zoom and double-click zoom).
    // @alternative
    // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
    setZoomAround: function setZoomAround(latlng, zoom, options) {
      var scale = this.getZoomScale(zoom),
        viewHalf = this.getSize().divideBy(2),
        containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),
        centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
        newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
      return this.setView(newCenter, zoom, {
        zoom: options
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(bounds, options) {
      options = options || {};
      bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
      var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
        paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
        zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
      zoom = typeof options.maxZoom === 'number' ? Math.min(options.maxZoom, zoom) : zoom;
      if (zoom === Infinity) {
        return {
          center: bounds.getCenter(),
          zoom: zoom
        };
      }
      var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
        swPoint = this.project(bounds.getSouthWest(), zoom),
        nePoint = this.project(bounds.getNorthEast(), zoom),
        center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
      return {
        center: center,
        zoom: zoom
      };
    },
    // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets a map view that contains the given geographical bounds with the
    // maximum zoom level possible.
    fitBounds: function fitBounds(bounds, options) {
      bounds = toLatLngBounds(bounds);
      if (!bounds.isValid()) {
        throw new Error('Bounds are not valid.');
      }
      var target = this._getBoundsCenterZoom(bounds, options);
      return this.setView(target.center, target.zoom, options);
    },
    // @method fitWorld(options?: fitBounds options): this
    // Sets a map view that mostly contains the whole world with the maximum
    // zoom level possible.
    fitWorld: function fitWorld(options) {
      return this.fitBounds([[-90, -180], [90, 180]], options);
    },
    // @method panTo(latlng: LatLng, options?: Pan options): this
    // Pans the map to a given center.
    panTo: function panTo(center, options) {
      // (LatLng)
      return this.setView(center, this._zoom, {
        pan: options
      });
    },
    // @method panBy(offset: Point, options?: Pan options): this
    // Pans the map by a given number of pixels (animated).
    panBy: function panBy(offset, options) {
      offset = toPoint(offset).round();
      options = options || {};
      if (!offset.x && !offset.y) {
        return this.fire('moveend');
      }
      // If we pan too far, Chrome gets issues with tiles
      // and makes them disappear or appear in the wrong place (slightly offset) #2602
      if (options.animate !== true && !this.getSize().contains(offset)) {
        this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
        return this;
      }
      if (!this._panAnim) {
        this._panAnim = new PosAnimation();
        this._panAnim.on({
          'step': this._onPanTransitionStep,
          'end': this._onPanTransitionEnd
        }, this);
      }

      // don't fire movestart if animating inertia
      if (!options.noMoveStart) {
        this.fire('movestart');
      }

      // animate pan unless animate: false specified
      if (options.animate !== false) {
        addClass(this._mapPane, 'leaflet-pan-anim');
        var newPos = this._getMapPanePos().subtract(offset).round();
        this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
      } else {
        this._rawPanBy(offset);
        this.fire('move').fire('moveend');
      }
      return this;
    },
    // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) performing a smooth
    // pan-zoom animation.
    flyTo: function flyTo(targetCenter, targetZoom, options) {
      options = options || {};
      if (options.animate === false || !any3d) {
        return this.setView(targetCenter, targetZoom, options);
      }
      this._stop();
      var from = this.project(this.getCenter()),
        to = this.project(targetCenter),
        size = this.getSize(),
        startZoom = this._zoom;
      targetCenter = toLatLng(targetCenter);
      targetZoom = targetZoom === undefined ? startZoom : targetZoom;
      var w0 = Math.max(size.x, size.y),
        w1 = w0 * this.getZoomScale(startZoom, targetZoom),
        u1 = to.distanceTo(from) || 1,
        rho = 1.42,
        rho2 = rho * rho;
      function r(i) {
        var s1 = i ? -1 : 1,
          s2 = i ? w1 : w0,
          t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
          b1 = 2 * s2 * rho2 * u1,
          b = t1 / b1,
          sq = Math.sqrt(b * b + 1) - b;

        // workaround for floating point precision bug when sq = 0, log = -Infinite,
        // thus triggering an infinite loop in flyTo
        var log = sq < 0.000000001 ? -18 : Math.log(sq);
        return log;
      }
      function sinh(n) {
        return (Math.exp(n) - Math.exp(-n)) / 2;
      }
      function cosh(n) {
        return (Math.exp(n) + Math.exp(-n)) / 2;
      }
      function tanh(n) {
        return sinh(n) / cosh(n);
      }
      var r0 = r(0);
      function w(s) {
        return w0 * (cosh(r0) / cosh(r0 + rho * s));
      }
      function u(s) {
        return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
      }
      function easeOut(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }
      var start = Date.now(),
        S = (r(1) - r0) / rho,
        duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
      function frame() {
        var t = (Date.now() - start) / duration,
          s = easeOut(t) * S;
        if (t <= 1) {
          this._flyToFrame = requestAnimFrame(frame, this);
          this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
            flyTo: true
          });
        } else {
          this._move(targetCenter, targetZoom)._moveEnd(true);
        }
      }
      this._moveStart(true);
      frame.call(this);
      return this;
    },
    // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
    // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
    flyToBounds: function flyToBounds(bounds, options) {
      var target = this._getBoundsCenterZoom(bounds, options);
      return this.flyTo(target.center, target.zoom, options);
    },
    // @method setMaxBounds(bounds: Bounds): this
    // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
    setMaxBounds: function setMaxBounds(bounds) {
      bounds = toLatLngBounds(bounds);
      if (!bounds.isValid()) {
        this.options.maxBounds = null;
        return this.off('moveend', this._panInsideMaxBounds);
      } else if (this.options.maxBounds) {
        this.off('moveend', this._panInsideMaxBounds);
      }
      this.options.maxBounds = bounds;
      if (this._loaded) {
        this._panInsideMaxBounds();
      }
      return this.on('moveend', this._panInsideMaxBounds);
    },
    // @method setMinZoom(zoom: Number): this
    // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
    setMinZoom: function setMinZoom(zoom) {
      this.options.minZoom = zoom;
      if (this._loaded && this.getZoom() < this.options.minZoom) {
        return this.setZoom(zoom);
      }
      return this;
    },
    // @method setMaxZoom(zoom: Number): this
    // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
    setMaxZoom: function setMaxZoom(zoom) {
      this.options.maxZoom = zoom;
      if (this._loaded && this.getZoom() > this.options.maxZoom) {
        return this.setZoom(zoom);
      }
      return this;
    },
    // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
    // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
    panInsideBounds: function panInsideBounds(bounds, options) {
      this._enforcingBounds = true;
      var center = this.getCenter(),
        newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
      if (!center.equals(newCenter)) {
        this.panTo(newCenter, options);
      }
      this._enforcingBounds = false;
      return this;
    },
    // @method invalidateSize(options: Zoom/Pan options): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default. If `options.pan` is `false`, panning will not occur.
    // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
    // that it doesn't happen often even if the method is called many
    // times in a row.

    // @alternative
    // @method invalidateSize(animate: Boolean): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default.
    invalidateSize: function invalidateSize(options) {
      if (!this._loaded) {
        return this;
      }
      options = extend({
        animate: false,
        pan: true
      }, options === true ? {
        animate: true
      } : options);
      var oldSize = this.getSize();
      this._sizeChanged = true;
      this._lastCenter = null;
      var newSize = this.getSize(),
        oldCenter = oldSize.divideBy(2).round(),
        newCenter = newSize.divideBy(2).round(),
        offset = oldCenter.subtract(newCenter);
      if (!offset.x && !offset.y) {
        return this;
      }
      if (options.animate && options.pan) {
        this.panBy(offset);
      } else {
        if (options.pan) {
          this._rawPanBy(offset);
        }
        this.fire('move');
        if (options.debounceMoveend) {
          clearTimeout(this._sizeTimer);
          this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
        } else {
          this.fire('moveend');
        }
      }

      // @section Map state change events
      // @event resize: ResizeEvent
      // Fired when the map is resized.
      return this.fire('resize', {
        oldSize: oldSize,
        newSize: newSize
      });
    },
    // @section Methods for modifying map state
    // @method stop(): this
    // Stops the currently running `panTo` or `flyTo` animation, if any.
    stop: function stop() {
      this.setZoom(this._limitZoom(this._zoom));
      if (!this.options.zoomSnap) {
        this.fire('viewreset');
      }
      return this._stop();
    },
    // @section Geolocation methods
    // @method locate(options?: Locate options): this
    // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
    // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
    // and optionally sets the map view to the user's location with respect to
    // detection accuracy (or to the world view if geolocation failed).
    // Note that, if your page doesn't use HTTPS, this method will fail in
    // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
    // See `Locate options` for more details.
    locate: function locate(options) {
      options = this._locateOptions = extend({
        timeout: 10000,
        watch: false
        // setView: false
        // maxZoom: <Number>
        // maximumAge: 0
        // enableHighAccuracy: false
      }, options);
      if (!('geolocation' in navigator)) {
        this._handleGeolocationError({
          code: 0,
          message: 'Geolocation not supported.'
        });
        return this;
      }
      var onResponse = bind(this._handleGeolocationResponse, this),
        onError = bind(this._handleGeolocationError, this);
      if (options.watch) {
        this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
      } else {
        navigator.geolocation.getCurrentPosition(onResponse, onError, options);
      }
      return this;
    },
    // @method stopLocate(): this
    // Stops watching location previously initiated by `map.locate({watch: true})`
    // and aborts resetting the map view if map.locate was called with
    // `{setView: true}`.
    stopLocate: function stopLocate() {
      if (navigator.geolocation && navigator.geolocation.clearWatch) {
        navigator.geolocation.clearWatch(this._locationWatchId);
      }
      if (this._locateOptions) {
        this._locateOptions.setView = false;
      }
      return this;
    },
    _handleGeolocationError: function _handleGeolocationError(error) {
      var c = error.code,
        message = error.message || (c === 1 ? 'permission denied' : c === 2 ? 'position unavailable' : 'timeout');
      if (this._locateOptions.setView && !this._loaded) {
        this.fitWorld();
      }

      // @section Location events
      // @event locationerror: ErrorEvent
      // Fired when geolocation (using the [`locate`](#map-locate) method) failed.
      this.fire('locationerror', {
        code: c,
        message: 'Geolocation error: ' + message + '.'
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(pos) {
      var lat = pos.coords.latitude,
        lng = pos.coords.longitude,
        latlng = new LatLng(lat, lng),
        bounds = latlng.toBounds(pos.coords.accuracy),
        options = this._locateOptions;
      if (options.setView) {
        var zoom = this.getBoundsZoom(bounds);
        this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
      }
      var data = {
        latlng: latlng,
        bounds: bounds,
        timestamp: pos.timestamp
      };
      for (var i in pos.coords) {
        if (typeof pos.coords[i] === 'number') {
          data[i] = pos.coords[i];
        }
      }

      // @event locationfound: LocationEvent
      // Fired when geolocation (using the [`locate`](#map-locate) method)
      // went successfully.
      this.fire('locationfound', data);
    },
    // TODO handler.addTo
    // TODO Appropiate docs section?
    // @section Other Methods
    // @method addHandler(name: String, HandlerClass: Function): this
    // Adds a new `Handler` to the map, given its name and constructor function.
    addHandler: function addHandler(name, HandlerClass) {
      if (!HandlerClass) {
        return this;
      }
      var handler = this[name] = new HandlerClass(this);
      this._handlers.push(handler);
      if (this.options[name]) {
        handler.enable();
      }
      return this;
    },
    // @method remove(): this
    // Destroys the map and clears all related event listeners.
    remove: function remove() {
      this._initEvents(true);
      if (this._containerId !== this._container._leaflet_id) {
        throw new Error('Map container is being reused by another instance');
      }
      try {
        // throws error in IE6-8
        delete this._container._leaflet_id;
        delete this._containerId;
      } catch (e) {
        /*eslint-disable */
        this._container._leaflet_id = undefined;
        /*eslint-enable */
        this._containerId = undefined;
      }
      _remove(this._mapPane);
      if (this._clearControlPos) {
        this._clearControlPos();
      }
      this._clearHandlers();
      if (this._loaded) {
        // @section Map state change events
        // @event unload: Event
        // Fired when the map is destroyed with [remove](#map-remove) method.
        this.fire('unload');
      }
      var i;
      for (i in this._layers) {
        this._layers[i].remove();
      }
      for (i in this._panes) {
        _remove(this._panes[i]);
      }
      this._layers = [];
      this._panes = [];
      delete this._mapPane;
      delete this._renderer;
      return this;
    },
    // @section Other Methods
    // @method createPane(name: String, container?: HTMLElement): HTMLElement
    // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
    // then returns it. The pane is created as a child of `container`, or
    // as a child of the main map pane if not set.
    createPane: function createPane(name, container) {
      var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
        pane = create$1('div', className, container || this._mapPane);
      if (name) {
        this._panes[name] = pane;
      }
      return pane;
    },
    // @section Methods for Getting Map State

    // @method getCenter(): LatLng
    // Returns the geographical center of the map view
    getCenter: function getCenter() {
      this._checkIfLoaded();
      if (this._lastCenter && !this._moved()) {
        return this._lastCenter;
      }
      return this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    // @method getZoom(): Number
    // Returns the current zoom level of the map view
    getZoom: function getZoom() {
      return this._zoom;
    },
    // @method getBounds(): LatLngBounds
    // Returns the geographical bounds visible in the current map view
    getBounds: function getBounds() {
      var bounds = this.getPixelBounds(),
        sw = this.unproject(bounds.getBottomLeft()),
        ne = this.unproject(bounds.getTopRight());
      return new LatLngBounds(sw, ne);
    },
    // @method getMinZoom(): Number
    // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
    getMinZoom: function getMinZoom() {
      return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    // @method getMaxZoom(): Number
    // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
    getMaxZoom: function getMaxZoom() {
      return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
    },
    // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean): Number
    // Returns the maximum zoom level on which the given bounds fit to the map
    // view in its entirety. If `inside` (optional) is set to `true`, the method
    // instead returns the minimum zoom level on which the map view fits into
    // the given bounds in its entirety.
    getBoundsZoom: function getBoundsZoom(bounds, inside, padding) {
      // (LatLngBounds[, Boolean, Point]) -> Number
      bounds = toLatLngBounds(bounds);
      padding = toPoint(padding || [0, 0]);
      var zoom = this.getZoom() || 0,
        min = this.getMinZoom(),
        max = this.getMaxZoom(),
        nw = bounds.getNorthWest(),
        se = bounds.getSouthEast(),
        size = this.getSize().subtract(padding),
        boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
        snap = any3d ? this.options.zoomSnap : 1,
        scalex = size.x / boundsSize.x,
        scaley = size.y / boundsSize.y,
        scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
      zoom = this.getScaleZoom(scale, zoom);
      if (snap) {
        zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
        zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
      }
      return Math.max(min, Math.min(max, zoom));
    },
    // @method getSize(): Point
    // Returns the current size of the map container (in pixels).
    getSize: function getSize() {
      if (!this._size || this._sizeChanged) {
        this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);
        this._sizeChanged = false;
      }
      return this._size.clone();
    },
    // @method getPixelBounds(): Bounds
    // Returns the bounds of the current map view in projected pixel
    // coordinates (sometimes useful in layer and overlay implementations).
    getPixelBounds: function getPixelBounds(center, zoom) {
      var topLeftPoint = this._getTopLeftPoint(center, zoom);
      return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
    },
    // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
    // the map pane? "left point of the map layer" can be confusing, specially
    // since there can be negative offsets.
    // @method getPixelOrigin(): Point
    // Returns the projected pixel coordinates of the top left point of
    // the map layer (useful in custom layer and overlay implementations).
    getPixelOrigin: function getPixelOrigin() {
      this._checkIfLoaded();
      return this._pixelOrigin;
    },
    // @method getPixelWorldBounds(zoom?: Number): Bounds
    // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
    // If `zoom` is omitted, the map's current zoom level is used.
    getPixelWorldBounds: function getPixelWorldBounds(zoom) {
      return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
    },
    // @section Other Methods

    // @method getPane(pane: String|HTMLElement): HTMLElement
    // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
    getPane: function getPane(pane) {
      return typeof pane === 'string' ? this._panes[pane] : pane;
    },
    // @method getPanes(): Object
    // Returns a plain object containing the names of all [panes](#map-pane) as keys and
    // the panes as values.
    getPanes: function getPanes() {
      return this._panes;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the map.
    getContainer: function getContainer() {
      return this._container;
    },
    // @section Conversion Methods

    // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
    // Returns the scale factor to be applied to a map transition from zoom level
    // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
    getZoomScale: function getZoomScale(toZoom, fromZoom) {
      // TODO replace with universal implementation after refactoring projections
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      return crs.scale(toZoom) / crs.scale(fromZoom);
    },
    // @method getScaleZoom(scale: Number, fromZoom: Number): Number
    // Returns the zoom level that the map would end up at, if it is at `fromZoom`
    // level and everything is scaled by a factor of `scale`. Inverse of
    // [`getZoomScale`](#map-getZoomScale).
    getScaleZoom: function getScaleZoom(scale, fromZoom) {
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      var zoom = crs.zoom(scale * crs.scale(fromZoom));
      return isNaN(zoom) ? Infinity : zoom;
    },
    // @method project(latlng: LatLng, zoom: Number): Point
    // Projects a geographical coordinate `LatLng` according to the projection
    // of the map's CRS, then scales it according to `zoom` and the CRS's
    // `Transformation`. The result is pixel coordinate relative to
    // the CRS origin.
    project: function project(latlng, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
    },
    // @method unproject(point: Point, zoom: Number): LatLng
    // Inverse of [`project`](#map-project).
    unproject: function unproject(point, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.pointToLatLng(toPoint(point), zoom);
    },
    // @method layerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding geographical coordinate (for the current zoom level).
    layerPointToLatLng: function layerPointToLatLng(point) {
      var projectedPoint = toPoint(point).add(this.getPixelOrigin());
      return this.unproject(projectedPoint);
    },
    // @method latLngToLayerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the [origin pixel](#map-getpixelorigin).
    latLngToLayerPoint: function latLngToLayerPoint(latlng) {
      var projectedPoint = this.project(toLatLng(latlng))._round();
      return projectedPoint._subtract(this.getPixelOrigin());
    },
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
    // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
    // CRS's bounds.
    // By default this means longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees.
    wrapLatLng: function wrapLatLng(latlng) {
      return this.options.crs.wrapLatLng(toLatLng(latlng));
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring that
    // its center is within the CRS's bounds.
    // By default this means the center longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees, and the majority of the bounds
    // overlaps the CRS's bounds.
    wrapLatLngBounds: function wrapLatLngBounds(latlng) {
      return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates according to
    // the map's CRS. By default this measures distance in meters.
    distance: function distance(latlng1, latlng2) {
      return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
    },
    // @method containerPointToLayerPoint(point: Point): Point
    // Given a pixel coordinate relative to the map container, returns the corresponding
    // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
    containerPointToLayerPoint: function containerPointToLayerPoint(point) {
      // (Point)
      return toPoint(point).subtract(this._getMapPanePos());
    },
    // @method layerPointToContainerPoint(point: Point): Point
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding pixel coordinate relative to the map container.
    layerPointToContainerPoint: function layerPointToContainerPoint(point) {
      // (Point)
      return toPoint(point).add(this._getMapPanePos());
    },
    // @method containerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the map container, returns
    // the corresponding geographical coordinate (for the current zoom level).
    containerPointToLatLng: function containerPointToLatLng(point) {
      var layerPoint = this.containerPointToLayerPoint(toPoint(point));
      return this.layerPointToLatLng(layerPoint);
    },
    // @method latLngToContainerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the map container.
    latLngToContainerPoint: function latLngToContainerPoint(latlng) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
    },
    // @method mouseEventToContainerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to the
    // map container where the event took place.
    mouseEventToContainerPoint: function mouseEventToContainerPoint(e) {
      return getMousePosition(e, this._container);
    },
    // @method mouseEventToLayerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to
    // the [origin pixel](#map-getpixelorigin) where the event took place.
    mouseEventToLayerPoint: function mouseEventToLayerPoint(e) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
    },
    // @method mouseEventToLatLng(ev: MouseEvent): LatLng
    // Given a MouseEvent object, returns geographical coordinate where the
    // event took place.
    mouseEventToLatLng: function mouseEventToLatLng(e) {
      // (MouseEvent)
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
    },
    // map initialization methods

    _initContainer: function _initContainer(id) {
      var container = this._container = get(id);
      if (!container) {
        throw new Error('Map container not found.');
      } else if (container._leaflet_id) {
        throw new Error('Map container is already initialized.');
      }
      on(container, 'scroll', this._onScroll, this);
      this._containerId = stamp(container);
    },
    _initLayout: function _initLayout() {
      var container = this._container;
      this._fadeAnimated = this.options.fadeAnimation && any3d;
      addClass(container, 'leaflet-container' + (touch ? ' leaflet-touch' : '') + (retina ? ' leaflet-retina' : '') + (ielt9 ? ' leaflet-oldie' : '') + (safari ? ' leaflet-safari' : '') + (this._fadeAnimated ? ' leaflet-fade-anim' : ''));
      var position = getStyle(container, 'position');
      if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
        container.style.position = 'relative';
      }
      this._initPanes();
      if (this._initControlPos) {
        this._initControlPos();
      }
    },
    _initPanes: function _initPanes() {
      var panes = this._panes = {};
      this._paneRenderers = {};

      // @section
      //
      // Panes are DOM elements used to control the ordering of layers on the map. You
      // can access panes with [`map.getPane`](#map-getpane) or
      // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
      // [`map.createPane`](#map-createpane) method.
      //
      // Every map has the following default panes that differ only in zIndex.
      //
      // @pane mapPane: HTMLElement = 'auto'
      // Pane that contains all other map panes

      this._mapPane = this.createPane('mapPane', this._container);
      setPosition(this._mapPane, new Point(0, 0));

      // @pane tilePane: HTMLElement = 200
      // Pane for `GridLayer`s and `TileLayer`s
      this.createPane('tilePane');
      // @pane overlayPane: HTMLElement = 400
      // Pane for vector overlays (`Path`s), like `Polyline`s and `Polygon`s
      this.createPane('shadowPane');
      // @pane shadowPane: HTMLElement = 500
      // Pane for overlay shadows (e.g. `Marker` shadows)
      this.createPane('overlayPane');
      // @pane markerPane: HTMLElement = 600
      // Pane for `Icon`s of `Marker`s
      this.createPane('markerPane');
      // @pane tooltipPane: HTMLElement = 650
      // Pane for tooltip.
      this.createPane('tooltipPane');
      // @pane popupPane: HTMLElement = 700
      // Pane for `Popup`s.
      this.createPane('popupPane');
      if (!this.options.markerZoomAnimation) {
        addClass(panes.markerPane, 'leaflet-zoom-hide');
        addClass(panes.shadowPane, 'leaflet-zoom-hide');
      }
    },
    // private methods that modify map state

    // @section Map state change events
    _resetView: function _resetView(center, zoom) {
      setPosition(this._mapPane, new Point(0, 0));
      var loading = !this._loaded;
      this._loaded = true;
      zoom = this._limitZoom(zoom);
      this.fire('viewprereset');
      var zoomChanged = this._zoom !== zoom;
      this._moveStart(zoomChanged)._move(center, zoom)._moveEnd(zoomChanged);

      // @event viewreset: Event
      // Fired when the map needs to redraw its content (this usually happens
      // on map zoom or load). Very useful for creating custom overlays.
      this.fire('viewreset');

      // @event load: Event
      // Fired when the map is initialized (when its center and zoom are set
      // for the first time).
      if (loading) {
        this.fire('load');
      }
    },
    _moveStart: function _moveStart(zoomChanged) {
      // @event zoomstart: Event
      // Fired when the map zoom is about to change (e.g. before zoom animation).
      // @event movestart: Event
      // Fired when the view of the map starts changing (e.g. user starts dragging the map).
      if (zoomChanged) {
        this.fire('zoomstart');
      }
      return this.fire('movestart');
    },
    _move: function _move(center, zoom, data) {
      if (zoom === undefined) {
        zoom = this._zoom;
      }
      var zoomChanged = this._zoom !== zoom;
      this._zoom = zoom;
      this._lastCenter = center;
      this._pixelOrigin = this._getNewPixelOrigin(center);

      // @event zoom: Event
      // Fired repeatedly during any change in zoom level, including zoom
      // and fly animations.
      if (zoomChanged || data && data.pinch) {
        // Always fire 'zoom' if pinching because #3530
        this.fire('zoom', data);
      }

      // @event move: Event
      // Fired repeatedly during any movement of the map, including pan and
      // fly animations.
      return this.fire('move', data);
    },
    _moveEnd: function _moveEnd(zoomChanged) {
      // @event zoomend: Event
      // Fired when the map has changed, after any animations.
      if (zoomChanged) {
        this.fire('zoomend');
      }

      // @event moveend: Event
      // Fired when the center of the map stops changing (e.g. user stopped
      // dragging the map).
      return this.fire('moveend');
    },
    _stop: function _stop() {
      cancelAnimFrame(this._flyToFrame);
      if (this._panAnim) {
        this._panAnim.stop();
      }
      return this;
    },
    _rawPanBy: function _rawPanBy(offset) {
      setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      if (!this._enforcingBounds) {
        this.panInsideBounds(this.options.maxBounds);
      }
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) {
        throw new Error('Set map center and zoom first.');
      }
    },
    // DOM event handling

    // @section Interaction events
    _initEvents: function _initEvents(remove$$1) {
      this._targets = {};
      this._targets[stamp(this._container)] = this;
      var onOff = remove$$1 ? off : on;

      // @event click: MouseEvent
      // Fired when the user clicks (or taps) the map.
      // @event dblclick: MouseEvent
      // Fired when the user double-clicks (or double-taps) the map.
      // @event mousedown: MouseEvent
      // Fired when the user pushes the mouse button on the map.
      // @event mouseup: MouseEvent
      // Fired when the user releases the mouse button on the map.
      // @event mouseover: MouseEvent
      // Fired when the mouse enters the map.
      // @event mouseout: MouseEvent
      // Fired when the mouse leaves the map.
      // @event mousemove: MouseEvent
      // Fired while the mouse moves over the map.
      // @event contextmenu: MouseEvent
      // Fired when the user pushes the right mouse button on the map, prevents
      // default browser context menu from showing if there are listeners on
      // this event. Also fired on mobile when the user holds a single touch
      // for a second (also called long press).
      // @event keypress: KeyboardEvent
      // Fired when the user presses a key from the keyboard while the map is focused.
      onOff(this._container, 'click dblclick mousedown mouseup ' + 'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);
      if (this.options.trackResize) {
        onOff(window, 'resize', this._onResize, this);
      }
      if (any3d && this.options.transform3DLimit) {
        (remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      }
    },
    _onResize: function _onResize() {
      cancelAnimFrame(this._resizeRequest);
      this._resizeRequest = requestAnimFrame(function () {
        this.invalidateSize({
          debounceMoveend: true
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0;
      this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var pos = this._getMapPanePos();
      if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
        // a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
        this._resetView(this.getCenter(), this.getZoom());
      }
    },
    _findEventTargets: function _findEventTargets(e, type) {
      var targets = [],
        target,
        isHover = type === 'mouseout' || type === 'mouseover',
        src = e.target || e.srcElement,
        dragging = false;
      while (src) {
        target = this._targets[stamp(src)];
        if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
          // Prevent firing click after you just dragged an object.
          dragging = true;
          break;
        }
        if (target && target.listens(type, true)) {
          if (isHover && !isExternalTarget(src, e)) {
            break;
          }
          targets.push(target);
          if (isHover) {
            break;
          }
        }
        if (src === this._container) {
          break;
        }
        src = src.parentNode;
      }
      if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
        targets = [this];
      }
      return targets;
    },
    _handleDOMEvent: function _handleDOMEvent(e) {
      if (!this._loaded || skipped(e)) {
        return;
      }
      var type = e.type;
      if (type === 'mousedown' || type === 'keypress') {
        // prevents outline when clicking on keyboard-focusable element
        preventOutline(e.target || e.srcElement);
      }
      this._fireDOMEvent(e, type);
    },
    _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
    _fireDOMEvent: function _fireDOMEvent(e, type, targets) {
      if (e.type === 'click') {
        // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
        // @event preclick: MouseEvent
        // Fired before mouse click on the map (sometimes useful when you
        // want something to happen on click before any existing click
        // handlers start running).
        var synth = extend({}, e);
        synth.type = 'preclick';
        this._fireDOMEvent(synth, synth.type, targets);
      }
      if (e._stopped) {
        return;
      }

      // Find the layer the event is propagating from and its parents.
      targets = (targets || []).concat(this._findEventTargets(e, type));
      if (!targets.length) {
        return;
      }
      var target = targets[0];
      if (type === 'contextmenu' && target.listens(type, true)) {
        preventDefault(e);
      }
      var data = {
        originalEvent: e
      };
      if (e.type !== 'keypress') {
        var isMarker = target.options && 'icon' in target.options;
        data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
        data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
        data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
      }
      for (var i = 0; i < targets.length; i++) {
        targets[i].fire(type, data, true);
        if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) {
          return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(obj) {
      obj = obj.dragging && obj.dragging.enabled() ? obj : this;
      return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var i = 0, len = this._handlers.length; i < len; i++) {
        this._handlers[i].disable();
      }
    },
    // @section Other Methods

    // @method whenReady(fn: Function, context?: Object): this
    // Runs the given function `fn` when the map gets initialized with
    // a view (center and zoom) and at least one layer, or immediately
    // if it's already initialized, optionally passing a function context.
    whenReady: function whenReady(callback, context) {
      if (this._loaded) {
        callback.call(context || this, {
          target: this
        });
      } else {
        this.on('load', callback, context);
      }
      return this;
    },
    // private methods for getting map state

    _getMapPanePos: function _getMapPanePos() {
      return getPosition(this._mapPane) || new Point(0, 0);
    },
    _moved: function _moved() {
      var pos = this._getMapPanePos();
      return pos && !pos.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(center, zoom) {
      var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
      return pixelOrigin.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(center, zoom) {
      var viewHalf = this.getSize()._divideBy(2);
      return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(latlng, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);
      return this.project(latlng, zoom)._subtract(topLeft);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(latLngBounds, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);
      return toBounds([this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft), this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft), this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft), this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)]);
    },
    // layer point of the current center
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    // offset of the specified place to the current center in pixels
    _getCenterOffset: function _getCenterOffset(latlng) {
      return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    },
    // adjust center for view to get inside bounds
    _limitCenter: function _limitCenter(center, zoom, bounds) {
      if (!bounds) {
        return center;
      }
      var centerPoint = this.project(center, zoom),
        viewHalf = this.getSize().divideBy(2),
        viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
        offset = this._getBoundsOffset(viewBounds, bounds, zoom);

      // If offset is less than a pixel, ignore.
      // This prevents unstable projections from getting into
      // an infinite loop of tiny offsets.
      if (offset.round().equals([0, 0])) {
        return center;
      }
      return this.unproject(centerPoint.add(offset), zoom);
    },
    // adjust offset for view to get inside bounds
    _limitOffset: function _limitOffset(offset, bounds) {
      if (!bounds) {
        return offset;
      }
      var viewBounds = this.getPixelBounds(),
        newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
      return offset.add(this._getBoundsOffset(newBounds, bounds));
    },
    // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
    _getBoundsOffset: function _getBoundsOffset(pxBounds, maxBounds, zoom) {
      var projectedMaxBounds = toBounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)),
        minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
        maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),
        dx = this._rebound(minOffset.x, -maxOffset.x),
        dy = this._rebound(minOffset.y, -maxOffset.y);
      return new Point(dx, dy);
    },
    _rebound: function _rebound(left, right) {
      return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
    },
    _limitZoom: function _limitZoom(zoom) {
      var min = this.getMinZoom(),
        max = this.getMaxZoom(),
        snap = any3d ? this.options.zoomSnap : 1;
      if (snap) {
        zoom = Math.round(zoom / snap) * snap;
      }
      return Math.max(min, Math.min(max, zoom));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire('move');
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      removeClass(this._mapPane, 'leaflet-pan-anim');
      this.fire('moveend');
    },
    _tryAnimatedPan: function _tryAnimatedPan(center, options) {
      // difference between the new and current centers in pixels
      var offset = this._getCenterOffset(center)._floor();

      // don't animate too far unless animate: true specified in options
      if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
        return false;
      }
      this.panBy(offset, options);
      return true;
    },
    _createAnimProxy: function _createAnimProxy() {
      var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
      this._panes.mapPane.appendChild(proxy);
      this.on('zoomanim', function (e) {
        var prop = TRANSFORM,
          transform = this._proxy.style[prop];
        setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

        // workaround for case when transform is the same and so transitionend event is not fired
        if (transform === this._proxy.style[prop] && this._animatingZoom) {
          this._onZoomTransitionEnd();
        }
      }, this);
      this.on('load moveend', function () {
        var c = this.getCenter(),
          z = this.getZoom();
        setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
      }, this);
      this._on('unload', this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function _destroyAnimProxy() {
      _remove(this._proxy);
      delete this._proxy;
    },
    _catchTransitionEnd: function _catchTransitionEnd(e) {
      if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
        this._onZoomTransitionEnd();
      }
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(center, zoom, options) {
      if (this._animatingZoom) {
        return true;
      }
      options = options || {};

      // don't animate if disabled, not supported or zoom difference is too large
      if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
        return false;
      }

      // offset is the pixel coords of the zoom origin relative to the current center
      var scale = this.getZoomScale(zoom),
        offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

      // don't animate if the zoom origin isn't within one screen from the current center, unless forced
      if (options.animate !== true && !this.getSize().contains(offset)) {
        return false;
      }
      requestAnimFrame(function () {
        this._moveStart(true)._animateZoom(center, zoom, true);
      }, this);
      return true;
    },
    _animateZoom: function _animateZoom(center, zoom, startAnim, noUpdate) {
      if (startAnim) {
        this._animatingZoom = true;

        // remember what center/zoom to set after animation
        this._animateToCenter = center;
        this._animateToZoom = zoom;
        addClass(this._mapPane, 'leaflet-zoom-anim');
      }

      // @event zoomanim: ZoomAnimEvent
      // Fired on every frame of a zoom animation
      this.fire('zoomanim', {
        center: center,
        zoom: zoom,
        noUpdate: noUpdate
      });

      // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
      setTimeout(bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      if (!this._animatingZoom) {
        return;
      }
      removeClass(this._mapPane, 'leaflet-zoom-anim');
      this._animatingZoom = false;
      this._move(this._animateToCenter, this._animateToZoom);

      // This anim frame should prevent an obscure iOS webkit tile loading race condition.
      requestAnimFrame(function () {
        this._moveEnd(true);
      }, this);
    }
  });

  // @section

  // @factory L.map(id: String, options?: Map options)
  // Instantiates a map object given the DOM ID of a `<div>` element
  // and optionally an object literal with `Map options`.
  //
  // @alternative
  // @factory L.map(el: HTMLElement, options?: Map options)
  // Instantiates a map object given an instance of a `<div>` HTML element
  // and optionally an object literal with `Map options`.
  function createMap(id, options) {
    return new Map(id, options);
  }

  /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */

  var Control = Class.extend({
    // @section
    // @aka Control options
    options: {
      // @option position: String = 'topright'
      // The position of the control (one of the map corners). Possible values are `'topleft'`,
      // `'topright'`, `'bottomleft'` or `'bottomright'`
      position: 'topright'
    },
    initialize: function initialize(options) {
      setOptions(this, options);
    },
    /* @section
     * Classes extending L.Control will inherit the following methods:
     *
     * @method getPosition: string
     * Returns the position of the control.
     */
    getPosition: function getPosition() {
      return this.options.position;
    },
    // @method setPosition(position: string): this
    // Sets the position of the control.
    setPosition: function setPosition(position) {
      var map = this._map;
      if (map) {
        map.removeControl(this);
      }
      this.options.position = position;
      if (map) {
        map.addControl(this);
      }
      return this;
    },
    // @method getContainer: HTMLElement
    // Returns the HTMLElement that contains the control.
    getContainer: function getContainer() {
      return this._container;
    },
    // @method addTo(map: Map): this
    // Adds the control to the given map.
    addTo: function addTo(map) {
      this.remove();
      this._map = map;
      var container = this._container = this.onAdd(map),
        pos = this.getPosition(),
        corner = map._controlCorners[pos];
      addClass(container, 'leaflet-control');
      if (pos.indexOf('bottom') !== -1) {
        corner.insertBefore(container, corner.firstChild);
      } else {
        corner.appendChild(container);
      }
      return this;
    },
    // @method remove: this
    // Removes the control from the map it is currently active on.
    remove: function remove() {
      if (!this._map) {
        return this;
      }
      _remove(this._container);
      if (this.onRemove) {
        this.onRemove(this._map);
      }
      this._map = null;
      return this;
    },
    _refocusOnMap: function _refocusOnMap(e) {
      // if map exists and event is not a keyboard event
      if (this._map && e && e.screenX > 0 && e.screenY > 0) {
        this._map.getContainer().focus();
      }
    }
  });
  var control = function control(options) {
    return new Control(options);
  };

  /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */

  /* @namespace Map
   * @section Methods for Layers and Controls
   */
  Map.include({
    // @method addControl(control: Control): this
    // Adds the given control to the map
    addControl: function addControl(control) {
      control.addTo(this);
      return this;
    },
    // @method removeControl(control: Control): this
    // Removes the given control from the map
    removeControl: function removeControl(control) {
      control.remove();
      return this;
    },
    _initControlPos: function _initControlPos() {
      var corners = this._controlCorners = {},
        l = 'leaflet-',
        container = this._controlContainer = create$1('div', l + 'control-container', this._container);
      function createCorner(vSide, hSide) {
        var className = l + vSide + ' ' + l + hSide;
        corners[vSide + hSide] = create$1('div', className, container);
      }
      createCorner('top', 'left');
      createCorner('top', 'right');
      createCorner('bottom', 'left');
      createCorner('bottom', 'right');
    },
    _clearControlPos: function _clearControlPos() {
      for (var i in this._controlCorners) {
        _remove(this._controlCorners[i]);
      }
      _remove(this._controlContainer);
      delete this._controlCorners;
      delete this._controlContainer;
    }
  });

  /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */

  var Layers = Control.extend({
    // @section
    // @aka Control.Layers options
    options: {
      // @option collapsed: Boolean = true
      // If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
      collapsed: true,
      position: 'topright',
      // @option autoZIndex: Boolean = true
      // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
      autoZIndex: true,
      // @option hideSingleBase: Boolean = false
      // If `true`, the base layers in the control will be hidden when there is only one.
      hideSingleBase: false,
      // @option sortLayers: Boolean = false
      // Whether to sort the layers. When `false`, layers will keep the order
      // in which they were added to the control.
      sortLayers: false,
      // @option sortFunction: Function = *
      // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
      // that will be used for sorting the layers, when `sortLayers` is `true`.
      // The function receives both the `L.Layer` instances and their names, as in
      // `sortFunction(layerA, layerB, nameA, nameB)`.
      // By default, it sorts layers alphabetically by their name.
      sortFunction: function sortFunction(layerA, layerB, nameA, nameB) {
        return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
      }
    },
    initialize: function initialize(baseLayers, overlays, options) {
      setOptions(this, options);
      this._layerControlInputs = [];
      this._layers = [];
      this._lastZIndex = 0;
      this._handlingClick = false;
      for (var i in baseLayers) {
        this._addLayer(baseLayers[i], i);
      }
      for (i in overlays) {
        this._addLayer(overlays[i], i, true);
      }
    },
    onAdd: function onAdd(map) {
      this._initLayout();
      this._update();
      this._map = map;
      map.on('zoomend', this._checkDisabledLayers, this);
      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on('add remove', this._onLayerChange, this);
      }
      return this._container;
    },
    addTo: function addTo(map) {
      Control.prototype.addTo.call(this, map);
      // Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
      return this._expandIfNotCollapsed();
    },
    onRemove: function onRemove() {
      this._map.off('zoomend', this._checkDisabledLayers, this);
      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.off('add remove', this._onLayerChange, this);
      }
    },
    // @method addBaseLayer(layer: Layer, name: String): this
    // Adds a base layer (radio button entry) with the given name to the control.
    addBaseLayer: function addBaseLayer(layer, name) {
      this._addLayer(layer, name);
      return this._map ? this._update() : this;
    },
    // @method addOverlay(layer: Layer, name: String): this
    // Adds an overlay (checkbox entry) with the given name to the control.
    addOverlay: function addOverlay(layer, name) {
      this._addLayer(layer, name, true);
      return this._map ? this._update() : this;
    },
    // @method removeLayer(layer: Layer): this
    // Remove the given layer from the control.
    removeLayer: function removeLayer(layer) {
      layer.off('add remove', this._onLayerChange, this);
      var obj = this._getLayer(stamp(layer));
      if (obj) {
        this._layers.splice(this._layers.indexOf(obj), 1);
      }
      return this._map ? this._update() : this;
    },
    // @method expand(): this
    // Expand the control container if collapsed.
    expand: function expand() {
      addClass(this._container, 'leaflet-control-layers-expanded');
      this._form.style.height = null;
      var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
      if (acceptableHeight < this._form.clientHeight) {
        addClass(this._form, 'leaflet-control-layers-scrollbar');
        this._form.style.height = acceptableHeight + 'px';
      } else {
        removeClass(this._form, 'leaflet-control-layers-scrollbar');
      }
      this._checkDisabledLayers();
      return this;
    },
    // @method collapse(): this
    // Collapse the control container if expanded.
    collapse: function collapse() {
      removeClass(this._container, 'leaflet-control-layers-expanded');
      return this;
    },
    _initLayout: function _initLayout() {
      var className = 'leaflet-control-layers',
        container = this._container = create$1('div', className),
        collapsed = this.options.collapsed;

      // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
      container.setAttribute('aria-haspopup', true);
      disableClickPropagation(container);
      disableScrollPropagation(container);
      var form = this._form = create$1('form', className + '-list');
      if (collapsed) {
        this._map.on('click', this.collapse, this);
        if (!android) {
          on(container, {
            mouseenter: this.expand,
            mouseleave: this.collapse
          }, this);
        }
      }
      var link = this._layersLink = create$1('a', className + '-toggle', container);
      link.href = '#';
      link.title = 'Layers';
      if (touch) {
        on(link, 'click', stop);
        on(link, 'click', this.expand, this);
      } else {
        on(link, 'focus', this.expand, this);
      }
      if (!collapsed) {
        this.expand();
      }
      this._baseLayersList = create$1('div', className + '-base', form);
      this._separator = create$1('div', className + '-separator', form);
      this._overlaysList = create$1('div', className + '-overlays', form);
      container.appendChild(form);
    },
    _getLayer: function _getLayer(id) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && stamp(this._layers[i].layer) === id) {
          return this._layers[i];
        }
      }
    },
    _addLayer: function _addLayer(layer, name, overlay) {
      if (this._map) {
        layer.on('add remove', this._onLayerChange, this);
      }
      this._layers.push({
        layer: layer,
        name: name,
        overlay: overlay
      });
      if (this.options.sortLayers) {
        this._layers.sort(bind(function (a, b) {
          return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
        }, this));
      }
      if (this.options.autoZIndex && layer.setZIndex) {
        this._lastZIndex++;
        layer.setZIndex(this._lastZIndex);
      }
      this._expandIfNotCollapsed();
    },
    _update: function _update() {
      if (!this._container) {
        return this;
      }
      empty(this._baseLayersList);
      empty(this._overlaysList);
      this._layerControlInputs = [];
      var baseLayersPresent,
        overlaysPresent,
        i,
        obj,
        baseLayersCount = 0;
      for (i = 0; i < this._layers.length; i++) {
        obj = this._layers[i];
        this._addItem(obj);
        overlaysPresent = overlaysPresent || obj.overlay;
        baseLayersPresent = baseLayersPresent || !obj.overlay;
        baseLayersCount += !obj.overlay ? 1 : 0;
      }

      // Hide base layers section if there's only one layer.
      if (this.options.hideSingleBase) {
        baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
        this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
      }
      this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
      return this;
    },
    _onLayerChange: function _onLayerChange(e) {
      if (!this._handlingClick) {
        this._update();
      }
      var obj = this._getLayer(stamp(e.target));

      // @namespace Map
      // @section Layer events
      // @event baselayerchange: LayersControlEvent
      // Fired when the base layer is changed through the [layer control](#control-layers).
      // @event overlayadd: LayersControlEvent
      // Fired when an overlay is selected through the [layer control](#control-layers).
      // @event overlayremove: LayersControlEvent
      // Fired when an overlay is deselected through the [layer control](#control-layers).
      // @namespace Control.Layers
      var type = obj.overlay ? e.type === 'add' ? 'overlayadd' : 'overlayremove' : e.type === 'add' ? 'baselayerchange' : null;
      if (type) {
        this._map.fire(type, obj);
      }
    },
    // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
    _createRadioElement: function _createRadioElement(name, checked) {
      var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : '') + '/>';
      var radioFragment = document.createElement('div');
      radioFragment.innerHTML = radioHtml;
      return radioFragment.firstChild;
    },
    _addItem: function _addItem(obj) {
      var label = document.createElement('label'),
        checked = this._map.hasLayer(obj.layer),
        input;
      if (obj.overlay) {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'leaflet-control-layers-selector';
        input.defaultChecked = checked;
      } else {
        input = this._createRadioElement('leaflet-base-layers', checked);
      }
      this._layerControlInputs.push(input);
      input.layerId = stamp(obj.layer);
      on(input, 'click', this._onInputClick, this);
      var name = document.createElement('span');
      name.innerHTML = ' ' + obj.name;

      // Helps from preventing layer control flicker when checkboxes are disabled
      // https://github.com/Leaflet/Leaflet/issues/2771
      var holder = document.createElement('div');
      label.appendChild(holder);
      holder.appendChild(input);
      holder.appendChild(name);
      var container = obj.overlay ? this._overlaysList : this._baseLayersList;
      container.appendChild(label);
      this._checkDisabledLayers();
      return label;
    },
    _onInputClick: function _onInputClick() {
      var inputs = this._layerControlInputs,
        input,
        layer;
      var addedLayers = [],
        removedLayers = [];
      this._handlingClick = true;
      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;
        if (input.checked) {
          addedLayers.push(layer);
        } else if (!input.checked) {
          removedLayers.push(layer);
        }
      }

      // Bugfix issue 2318: Should remove all old layers before readding new ones
      for (i = 0; i < removedLayers.length; i++) {
        if (this._map.hasLayer(removedLayers[i])) {
          this._map.removeLayer(removedLayers[i]);
        }
      }
      for (i = 0; i < addedLayers.length; i++) {
        if (!this._map.hasLayer(addedLayers[i])) {
          this._map.addLayer(addedLayers[i]);
        }
      }
      this._handlingClick = false;
      this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      var inputs = this._layerControlInputs,
        input,
        layer,
        zoom = this._map.getZoom();
      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;
        input.disabled = layer.options.minZoom !== undefined && zoom < layer.options.minZoom || layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      if (this._map && !this.options.collapsed) {
        this.expand();
      }
      return this;
    },
    _expand: function _expand() {
      // Backward compatibility, remove me in 1.1.
      return this.expand();
    },
    _collapse: function _collapse() {
      // Backward compatibility, remove me in 1.1.
      return this.collapse();
    }
  });

  // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
  // Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
  var layers = function layers(baseLayers, overlays, options) {
    return new Layers(baseLayers, overlays, options);
  };

  /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */

  var Zoom = Control.extend({
    // @section
    // @aka Control.Zoom options
    options: {
      position: 'topleft',
      // @option zoomInText: String = '+'
      // The text set on the 'zoom in' button.
      zoomInText: '+',
      // @option zoomInTitle: String = 'Zoom in'
      // The title set on the 'zoom in' button.
      zoomInTitle: 'Zoom in',
      // @option zoomOutText: String = '&#x2212;'
      // The text set on the 'zoom out' button.
      zoomOutText: '&#x2212;',
      // @option zoomOutTitle: String = 'Zoom out'
      // The title set on the 'zoom out' button.
      zoomOutTitle: 'Zoom out'
    },
    onAdd: function onAdd(map) {
      var zoomName = 'leaflet-control-zoom',
        container = create$1('div', zoomName + ' leaflet-bar'),
        options = this.options;
      this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + '-in', container, this._zoomIn);
      this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + '-out', container, this._zoomOut);
      this._updateDisabled();
      map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      return container;
    },
    onRemove: function onRemove(map) {
      map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },
    disable: function disable() {
      this._disabled = true;
      this._updateDisabled();
      return this;
    },
    enable: function enable() {
      this._disabled = false;
      this._updateDisabled();
      return this;
    },
    _zoomIn: function _zoomIn(e) {
      if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
        this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _zoomOut: function _zoomOut(e) {
      if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
        this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _createButton: function _createButton(html, title, className, container, fn) {
      var link = create$1('a', className, container);
      link.innerHTML = html;
      link.href = '#';
      link.title = title;

      /*
       * Will force screen readers like VoiceOver to read this as "Zoom in - button"
       */
      link.setAttribute('role', 'button');
      link.setAttribute('aria-label', title);
      disableClickPropagation(link);
      on(link, 'click', stop);
      on(link, 'click', fn, this);
      on(link, 'click', this._refocusOnMap, this);
      return link;
    },
    _updateDisabled: function _updateDisabled() {
      var map = this._map,
        className = 'leaflet-disabled';
      removeClass(this._zoomInButton, className);
      removeClass(this._zoomOutButton, className);
      if (this._disabled || map._zoom === map.getMinZoom()) {
        addClass(this._zoomOutButton, className);
      }
      if (this._disabled || map._zoom === map.getMaxZoom()) {
        addClass(this._zoomInButton, className);
      }
    }
  });

  // @namespace Map
  // @section Control options
  // @option zoomControl: Boolean = true
  // Whether a [zoom control](#control-zoom) is added to the map by default.
  Map.mergeOptions({
    zoomControl: true
  });
  Map.addInitHook(function () {
    if (this.options.zoomControl) {
      this.zoomControl = new Zoom();
      this.addControl(this.zoomControl);
    }
  });

  // @namespace Control.Zoom
  // @factory L.control.zoom(options: Control.Zoom options)
  // Creates a zoom control
  var zoom = function zoom(options) {
    return new Zoom(options);
  };

  /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */

  var Scale = Control.extend({
    // @section
    // @aka Control.Scale options
    options: {
      position: 'bottomleft',
      // @option maxWidth: Number = 100
      // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
      maxWidth: 100,
      // @option metric: Boolean = True
      // Whether to show the metric scale line (m/km).
      metric: true,
      // @option imperial: Boolean = True
      // Whether to show the imperial scale line (mi/ft).
      imperial: true

      // @option updateWhenIdle: Boolean = false
      // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
    },

    onAdd: function onAdd(map) {
      var className = 'leaflet-control-scale',
        container = create$1('div', className),
        options = this.options;
      this._addScales(options, className + '-line', container);
      map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      map.whenReady(this._update, this);
      return container;
    },
    onRemove: function onRemove(map) {
      map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
    },
    _addScales: function _addScales(options, className, container) {
      if (options.metric) {
        this._mScale = create$1('div', className, container);
      }
      if (options.imperial) {
        this._iScale = create$1('div', className, container);
      }
    },
    _update: function _update() {
      var map = this._map,
        y = map.getSize().y / 2;
      var maxMeters = map.distance(map.containerPointToLatLng([0, y]), map.containerPointToLatLng([this.options.maxWidth, y]));
      this._updateScales(maxMeters);
    },
    _updateScales: function _updateScales(maxMeters) {
      if (this.options.metric && maxMeters) {
        this._updateMetric(maxMeters);
      }
      if (this.options.imperial && maxMeters) {
        this._updateImperial(maxMeters);
      }
    },
    _updateMetric: function _updateMetric(maxMeters) {
      var meters = this._getRoundNum(maxMeters),
        label = meters < 1000 ? meters + ' m' : meters / 1000 + ' km';
      this._updateScale(this._mScale, label, meters / maxMeters);
    },
    _updateImperial: function _updateImperial(maxMeters) {
      var maxFeet = maxMeters * 3.2808399,
        maxMiles,
        miles,
        feet;
      if (maxFeet > 5280) {
        maxMiles = maxFeet / 5280;
        miles = this._getRoundNum(maxMiles);
        this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);
      } else {
        feet = this._getRoundNum(maxFeet);
        this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
      }
    },
    _updateScale: function _updateScale(scale, text, ratio) {
      scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
      scale.innerHTML = text;
    },
    _getRoundNum: function _getRoundNum(num) {
      var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
        d = num / pow10;
      d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
      return pow10 * d;
    }
  });

  // @factory L.control.scale(options?: Control.Scale options)
  // Creates an scale control with the given options.
  var scale = function scale(options) {
    return new Scale(options);
  };

  /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */

  var Attribution = Control.extend({
    // @section
    // @aka Control.Attribution options
    options: {
      position: 'bottomright',
      // @option prefix: String = 'Leaflet'
      // The HTML text shown before the attributions. Pass `false` to disable.
      prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(options) {
      setOptions(this, options);
      this._attributions = {};
    },
    onAdd: function onAdd(map) {
      map.attributionControl = this;
      this._container = create$1('div', 'leaflet-control-attribution');
      disableClickPropagation(this._container);

      // TODO ugly, refactor
      for (var i in map._layers) {
        if (map._layers[i].getAttribution) {
          this.addAttribution(map._layers[i].getAttribution());
        }
      }
      this._update();
      return this._container;
    },
    // @method setPrefix(prefix: String): this
    // Sets the text before the attributions.
    setPrefix: function setPrefix(prefix) {
      this.options.prefix = prefix;
      this._update();
      return this;
    },
    // @method addAttribution(text: String): this
    // Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
    addAttribution: function addAttribution(text) {
      if (!text) {
        return this;
      }
      if (!this._attributions[text]) {
        this._attributions[text] = 0;
      }
      this._attributions[text]++;
      this._update();
      return this;
    },
    // @method removeAttribution(text: String): this
    // Removes an attribution text.
    removeAttribution: function removeAttribution(text) {
      if (!text) {
        return this;
      }
      if (this._attributions[text]) {
        this._attributions[text]--;
        this._update();
      }
      return this;
    },
    _update: function _update() {
      if (!this._map) {
        return;
      }
      var attribs = [];
      for (var i in this._attributions) {
        if (this._attributions[i]) {
          attribs.push(i);
        }
      }
      var prefixAndAttribs = [];
      if (this.options.prefix) {
        prefixAndAttribs.push(this.options.prefix);
      }
      if (attribs.length) {
        prefixAndAttribs.push(attribs.join(', '));
      }
      this._container.innerHTML = prefixAndAttribs.join(' | ');
    }
  });

  // @namespace Map
  // @section Control options
  // @option attributionControl: Boolean = true
  // Whether a [attribution control](#control-attribution) is added to the map by default.
  Map.mergeOptions({
    attributionControl: true
  });
  Map.addInitHook(function () {
    if (this.options.attributionControl) {
      new Attribution().addTo(this);
    }
  });

  // @namespace Control.Attribution
  // @factory L.control.attribution(options: Control.Attribution options)
  // Creates an attribution control.
  var attribution = function attribution(options) {
    return new Attribution(options);
  };
  Control.Layers = Layers;
  Control.Zoom = Zoom;
  Control.Scale = Scale;
  Control.Attribution = Attribution;
  control.layers = layers;
  control.zoom = zoom;
  control.scale = scale;
  control.attribution = attribution;

  /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */

  // @class Handler
  // @aka L.Handler
  // Abstract class for map interaction handlers

  var Handler = Class.extend({
    initialize: function initialize(map) {
      this._map = map;
    },
    // @method enable(): this
    // Enables the handler
    enable: function enable() {
      if (this._enabled) {
        return this;
      }
      this._enabled = true;
      this.addHooks();
      return this;
    },
    // @method disable(): this
    // Disables the handler
    disable: function disable() {
      if (!this._enabled) {
        return this;
      }
      this._enabled = false;
      this.removeHooks();
      return this;
    },
    // @method enabled(): Boolean
    // Returns `true` if the handler is enabled
    enabled: function enabled() {
      return !!this._enabled;
    }

    // @section Extension methods
    // Classes inheriting from `Handler` must implement the two following methods:
    // @method addHooks()
    // Called when the handler is enabled, should add event hooks.
    // @method removeHooks()
    // Called when the handler is disabled, should remove the event hooks added previously.
  });

  var Mixin = {
    Events: Events
  };

  /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */

  var START = touch ? 'touchstart mousedown' : 'mousedown';
  var END = {
    mousedown: 'mouseup',
    touchstart: 'touchend',
    pointerdown: 'touchend',
    MSPointerDown: 'touchend'
  };
  var MOVE = {
    mousedown: 'mousemove',
    touchstart: 'touchmove',
    pointerdown: 'touchmove',
    MSPointerDown: 'touchmove'
  };
  var Draggable = Evented.extend({
    options: {
      // @section
      // @aka Draggable options
      // @option clickTolerance: Number = 3
      // The max number of pixels a user can shift the mouse pointer during a click
      // for it to be considered a valid click (as opposed to a mouse drag).
      clickTolerance: 3
    },
    // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
    // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
    initialize: function initialize(element, dragStartTarget, preventOutline$$1, options) {
      setOptions(this, options);
      this._element = element;
      this._dragStartTarget = dragStartTarget || element;
      this._preventOutline = preventOutline$$1;
    },
    // @method enable()
    // Enables the dragging ability
    enable: function enable() {
      if (this._enabled) {
        return;
      }
      on(this._dragStartTarget, START, this._onDown, this);
      this._enabled = true;
    },
    // @method disable()
    // Disables the dragging ability
    disable: function disable() {
      if (!this._enabled) {
        return;
      }

      // If we're currently dragging this draggable,
      // disabling it counts as first ending the drag.
      if (Draggable._dragging === this) {
        this.finishDrag();
      }
      off(this._dragStartTarget, START, this._onDown, this);
      this._enabled = false;
      this._moved = false;
    },
    _onDown: function _onDown(e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }
      this._moved = false;
      if (hasClass(this._element, 'leaflet-zoom-anim')) {
        return;
      }
      if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
        return;
      }
      Draggable._dragging = this; // Prevent dragging multiple objects at once.

      if (this._preventOutline) {
        preventOutline(this._element);
      }
      disableImageDrag();
      disableTextSelection();
      if (this._moving) {
        return;
      }

      // @event down: Event
      // Fired when a drag is about to start.
      this.fire('down');
      var first = e.touches ? e.touches[0] : e;
      this._startPoint = new Point(first.clientX, first.clientY);
      on(document, MOVE[e.type], this._onMove, this);
      on(document, END[e.type], this._onUp, this);
    },
    _onMove: function _onMove(e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }
      if (e.touches && e.touches.length > 1) {
        this._moved = true;
        return;
      }
      var first = e.touches && e.touches.length === 1 ? e.touches[0] : e,
        newPoint = new Point(first.clientX, first.clientY),
        offset = newPoint.subtract(this._startPoint);
      if (!offset.x && !offset.y) {
        return;
      }
      if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
        return;
      }
      preventDefault(e);
      if (!this._moved) {
        // @event dragstart: Event
        // Fired when a drag starts
        this.fire('dragstart');
        this._moved = true;
        this._startPos = getPosition(this._element).subtract(offset);
        addClass(document.body, 'leaflet-dragging');
        this._lastTarget = e.target || e.srcElement;
        // IE and Edge do not give the <use> element, so fetch it
        // if necessary
        if (window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance) {
          this._lastTarget = this._lastTarget.correspondingUseElement;
        }
        addClass(this._lastTarget, 'leaflet-drag-target');
      }
      this._newPos = this._startPos.add(offset);
      this._moving = true;
      cancelAnimFrame(this._animRequest);
      this._lastEvent = e;
      this._animRequest = requestAnimFrame(this._updatePosition, this, true);
    },
    _updatePosition: function _updatePosition() {
      var e = {
        originalEvent: this._lastEvent
      };

      // @event predrag: Event
      // Fired continuously during dragging *before* each corresponding
      // update of the element's position.
      this.fire('predrag', e);
      setPosition(this._element, this._newPos);

      // @event drag: Event
      // Fired continuously during dragging.
      this.fire('drag', e);
    },
    _onUp: function _onUp(e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }
      this.finishDrag();
    },
    finishDrag: function finishDrag() {
      removeClass(document.body, 'leaflet-dragging');
      if (this._lastTarget) {
        removeClass(this._lastTarget, 'leaflet-drag-target');
        this._lastTarget = null;
      }
      for (var i in MOVE) {
        off(document, MOVE[i], this._onMove, this);
        off(document, END[i], this._onUp, this);
      }
      enableImageDrag();
      enableTextSelection();
      if (this._moved && this._moving) {
        // ensure drag is not fired after dragend
        cancelAnimFrame(this._animRequest);

        // @event dragend: DragEndEvent
        // Fired when the drag ends.
        this.fire('dragend', {
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
      this._moving = false;
      Draggable._dragging = false;
    }
  });

  /*
   * @namespace LineUtil
   *
   * Various utility functions for polyine points processing, used by Leaflet internally to make polylines lightning-fast.
   */

  // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
  // Improves rendering performance dramatically by lessening the number of points to draw.

  // @function simplify(points: Point[], tolerance: Number): Point[]
  // Dramatically reduces the number of points in a polyline while retaining
  // its shape and returns a new array of simplified points, using the
  // [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
  // Used for a huge performance boost when processing/displaying Leaflet polylines for
  // each zoom level and also reducing visual noise. tolerance affects the amount of
  // simplification (lesser value means higher quality but slower and with more points).
  // Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
  function simplify(points, tolerance) {
    if (!tolerance || !points.length) {
      return points.slice();
    }
    var sqTolerance = tolerance * tolerance;

    // stage 1: vertex reduction
    points = _reducePoints(points, sqTolerance);

    // stage 2: Douglas-Peucker simplification
    points = _simplifyDP(points, sqTolerance);
    return points;
  }

  // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
  // Returns the distance between point `p` and segment `p1` to `p2`.
  function pointToSegmentDistance(p, p1, p2) {
    return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
  }

  // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
  // Returns the closest point from a point `p` on a segment `p1` to `p2`.
  function closestPointOnSegment(p, p1, p2) {
    return _sqClosestPointOnSegment(p, p1, p2);
  }

  // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
  function _simplifyDP(points, sqTolerance) {
    var len = points.length,
      ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
      markers = new ArrayConstructor(len);
    markers[0] = markers[len - 1] = 1;
    _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
    var i,
      newPoints = [];
    for (i = 0; i < len; i++) {
      if (markers[i]) {
        newPoints.push(points[i]);
      }
    }
    return newPoints;
  }
  function _simplifyDPStep(points, markers, sqTolerance, first, last) {
    var maxSqDist = 0,
      index,
      i,
      sqDist;
    for (i = first + 1; i <= last - 1; i++) {
      sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
      if (sqDist > maxSqDist) {
        index = i;
        maxSqDist = sqDist;
      }
    }
    if (maxSqDist > sqTolerance) {
      markers[index] = 1;
      _simplifyDPStep(points, markers, sqTolerance, first, index);
      _simplifyDPStep(points, markers, sqTolerance, index, last);
    }
  }

  // reduce points that are too close to each other to a single point
  function _reducePoints(points, sqTolerance) {
    var reducedPoints = [points[0]];
    for (var i = 1, prev = 0, len = points.length; i < len; i++) {
      if (_sqDist(points[i], points[prev]) > sqTolerance) {
        reducedPoints.push(points[i]);
        prev = i;
      }
    }
    if (prev < len - 1) {
      reducedPoints.push(points[len - 1]);
    }
    return reducedPoints;
  }
  var _lastCode;

  // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
  // Clips the segment a to b by rectangular bounds with the
  // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
  // (modifying the segment points directly!). Used by Leaflet to only show polyline
  // points that are on the screen or near, increasing performance.
  function clipSegment(a, b, bounds, useLastCode, round) {
    var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
      codeB = _getBitCode(b, bounds),
      codeOut,
      p,
      newCode;

    // save 2nd code to avoid calculating it on the next segment
    _lastCode = codeB;
    while (true) {
      // if a,b is inside the clip window (trivial accept)
      if (!(codeA | codeB)) {
        return [a, b];
      }

      // if a,b is outside the clip window (trivial reject)
      if (codeA & codeB) {
        return false;
      }

      // other cases
      codeOut = codeA || codeB;
      p = _getEdgeIntersection(a, b, codeOut, bounds, round);
      newCode = _getBitCode(p, bounds);
      if (codeOut === codeA) {
        a = p;
        codeA = newCode;
      } else {
        b = p;
        codeB = newCode;
      }
    }
  }
  function _getEdgeIntersection(a, b, code, bounds, round) {
    var dx = b.x - a.x,
      dy = b.y - a.y,
      min = bounds.min,
      max = bounds.max,
      x,
      y;
    if (code & 8) {
      // top
      x = a.x + dx * (max.y - a.y) / dy;
      y = max.y;
    } else if (code & 4) {
      // bottom
      x = a.x + dx * (min.y - a.y) / dy;
      y = min.y;
    } else if (code & 2) {
      // right
      x = max.x;
      y = a.y + dy * (max.x - a.x) / dx;
    } else if (code & 1) {
      // left
      x = min.x;
      y = a.y + dy * (min.x - a.x) / dx;
    }
    return new Point(x, y, round);
  }
  function _getBitCode(p, bounds) {
    var code = 0;
    if (p.x < bounds.min.x) {
      // left
      code |= 1;
    } else if (p.x > bounds.max.x) {
      // right
      code |= 2;
    }
    if (p.y < bounds.min.y) {
      // bottom
      code |= 4;
    } else if (p.y > bounds.max.y) {
      // top
      code |= 8;
    }
    return code;
  }

  // square distance (to avoid unnecessary Math.sqrt calls)
  function _sqDist(p1, p2) {
    var dx = p2.x - p1.x,
      dy = p2.y - p1.y;
    return dx * dx + dy * dy;
  }

  // return closest point on segment or distance to that point
  function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
    var x = p1.x,
      y = p1.y,
      dx = p2.x - x,
      dy = p2.y - y,
      dot = dx * dx + dy * dy,
      t;
    if (dot > 0) {
      t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
      if (t > 1) {
        x = p2.x;
        y = p2.y;
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }
    dx = p.x - x;
    dy = p.y - y;
    return sqDist ? dx * dx + dy * dy : new Point(x, y);
  }

  // @function isFlat(latlngs: LatLng[]): Boolean
  // Returns true if `latlngs` is a flat array, false is nested.
  function isFlat(latlngs) {
    return !isArray(latlngs[0]) || typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined';
  }
  function _flat(latlngs) {
    console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
    return isFlat(latlngs);
  }
  var LineUtil = (Object.freeze || Object)({
    simplify: simplify,
    pointToSegmentDistance: pointToSegmentDistance,
    closestPointOnSegment: closestPointOnSegment,
    clipSegment: clipSegment,
    _getEdgeIntersection: _getEdgeIntersection,
    _getBitCode: _getBitCode,
    _sqClosestPointOnSegment: _sqClosestPointOnSegment,
    isFlat: isFlat,
    _flat: _flat
  });

  /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */

  /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgeman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a seperate method for it.
   */
  function clipPolygon(points, bounds, round) {
    var clippedPoints,
      edges = [1, 4, 2, 8],
      i,
      j,
      k,
      a,
      b,
      len,
      edge,
      p;
    for (i = 0, len = points.length; i < len; i++) {
      points[i]._code = _getBitCode(points[i], bounds);
    }

    // for each edge (left, bottom, right, top)
    for (k = 0; k < 4; k++) {
      edge = edges[k];
      clippedPoints = [];
      for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        a = points[i];
        b = points[j];

        // if a is inside the clip window
        if (!(a._code & edge)) {
          // if b is outside the clip window (a->b goes out of screen)
          if (b._code & edge) {
            p = _getEdgeIntersection(b, a, edge, bounds, round);
            p._code = _getBitCode(p, bounds);
            clippedPoints.push(p);
          }
          clippedPoints.push(a);

          // else if b is inside the clip window (a->b enters the screen)
        } else if (!(b._code & edge)) {
          p = _getEdgeIntersection(b, a, edge, bounds, round);
          p._code = _getBitCode(p, bounds);
          clippedPoints.push(p);
        }
      }
      points = clippedPoints;
    }
    return points;
  }
  var PolyUtil = (Object.freeze || Object)({
    clipPolygon: clipPolygon
  });

  /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */

  var LonLat = {
    project: function project(latlng) {
      return new Point(latlng.lng, latlng.lat);
    },
    unproject: function unproject(point) {
      return new LatLng(point.y, point.x);
    },
    bounds: new Bounds([-180, -90], [180, 90])
  };

  /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
   */

  var Mercator = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(latlng) {
      var d = Math.PI / 180,
        r = this.R,
        y = latlng.lat * d,
        tmp = this.R_MINOR / r,
        e = Math.sqrt(1 - tmp * tmp),
        con = e * Math.sin(y);
      var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
      y = -r * Math.log(Math.max(ts, 1E-10));
      return new Point(latlng.lng * d * r, y);
    },
    unproject: function unproject(point) {
      var d = 180 / Math.PI,
        r = this.R,
        tmp = this.R_MINOR / r,
        e = Math.sqrt(1 - tmp * tmp),
        ts = Math.exp(-point.y / r),
        phi = Math.PI / 2 - 2 * Math.atan(ts);
      for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
        con = e * Math.sin(phi);
        con = Math.pow((1 - con) / (1 + con), e / 2);
        dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
        phi += dphi;
      }
      return new LatLng(phi * d, point.x * d / r);
    }
  };

  /*
   * @class Projection
  
   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).
  
   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid
  
   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.
  
   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.
  
   */

  var index = (Object.freeze || Object)({
    LonLat: LonLat,
    Mercator: Mercator,
    SphericalMercator: SphericalMercator
  });

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */
  var EPSG3395 = extend({}, Earth, {
    code: 'EPSG:3395',
    projection: Mercator,
    transformation: function () {
      var scale = 0.5 / (Math.PI * Mercator.R);
      return toTransformation(scale, 0.5, -scale, 0.5);
    }()
  });

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */

  var EPSG4326 = extend({}, Earth, {
    code: 'EPSG:4326',
    projection: LonLat,
    transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
  });

  /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */

  var Simple = extend({}, CRS, {
    projection: LonLat,
    transformation: toTransformation(1, 0, -1, 0),
    scale: function scale(zoom) {
      return Math.pow(2, zoom);
    },
    zoom: function zoom(scale) {
      return Math.log(scale) / Math.LN2;
    },
    distance: function distance(latlng1, latlng2) {
      var dx = latlng2.lng - latlng1.lng,
        dy = latlng2.lat - latlng1.lat;
      return Math.sqrt(dx * dx + dy * dy);
    },
    infinite: true
  });
  CRS.Earth = Earth;
  CRS.EPSG3395 = EPSG3395;
  CRS.EPSG3857 = EPSG3857;
  CRS.EPSG900913 = EPSG900913;
  CRS.EPSG4326 = EPSG4326;
  CRS.Simple = Simple;

  /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.Marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */

  var Layer = Evented.extend({
    // Classes extending `L.Layer` will inherit the following options:
    options: {
      // @option pane: String = 'overlayPane'
      // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
      pane: 'overlayPane',
      // @option attribution: String = null
      // String to be shown in the attribution control, describes the layer data, e.g. "© Mapbox".
      attribution: null,
      bubblingMouseEvents: true
    },
    /* @section
     * Classes extending `L.Layer` will inherit the following methods:
     *
     * @method addTo(map: Map|LayerGroup): this
     * Adds the layer to the given map or layer group.
     */
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    // @method remove: this
    // Removes the layer from the map it is currently active on.
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    // @method removeFrom(map: Map): this
    // Removes the layer from the given map
    removeFrom: function removeFrom(obj) {
      if (obj) {
        obj.removeLayer(this);
      }
      return this;
    },
    // @method getPane(name? : String): HTMLElement
    // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
    getPane: function getPane(name) {
      return this._map.getPane(name ? this.options[name] || name : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(targetEl) {
      this._map._targets[stamp(targetEl)] = this;
      return this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(targetEl) {
      delete this._map._targets[stamp(targetEl)];
      return this;
    },
    // @method getAttribution: String
    // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(e) {
      var map = e.target;

      // check in case layer gets added and then removed before the map is ready
      if (!map.hasLayer(this)) {
        return;
      }
      this._map = map;
      this._zoomAnimated = map._zoomAnimated;
      if (this.getEvents) {
        var events = this.getEvents();
        map.on(events, this);
        this.once('remove', function () {
          map.off(events, this);
        }, this);
      }
      this.onAdd(map);
      if (this.getAttribution && map.attributionControl) {
        map.attributionControl.addAttribution(this.getAttribution());
      }
      this.fire('add');
      map.fire('layeradd', {
        layer: this
      });
    }
  });

  /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */

  /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */
  Map.include({
    // @method addLayer(layer: Layer): this
    // Adds the given layer to the map
    addLayer: function addLayer(layer) {
      if (!layer._layerAdd) {
        throw new Error('The provided object is not a Layer.');
      }
      var id = stamp(layer);
      if (this._layers[id]) {
        return this;
      }
      this._layers[id] = layer;
      layer._mapToAdd = this;
      if (layer.beforeAdd) {
        layer.beforeAdd(this);
      }
      this.whenReady(layer._layerAdd, layer);
      return this;
    },
    // @method removeLayer(layer: Layer): this
    // Removes the given layer from the map.
    removeLayer: function removeLayer(layer) {
      var id = stamp(layer);
      if (!this._layers[id]) {
        return this;
      }
      if (this._loaded) {
        layer.onRemove(this);
      }
      if (layer.getAttribution && this.attributionControl) {
        this.attributionControl.removeAttribution(layer.getAttribution());
      }
      delete this._layers[id];
      if (this._loaded) {
        this.fire('layerremove', {
          layer: layer
        });
        layer.fire('remove');
      }
      layer._map = layer._mapToAdd = null;
      return this;
    },
    // @method hasLayer(layer: Layer): Boolean
    // Returns `true` if the given layer is currently added to the map
    hasLayer: function hasLayer(layer) {
      return !!layer && stamp(layer) in this._layers;
    },
    /* @method eachLayer(fn: Function, context?: Object): this
     * Iterates over the layers of the map, optionally specifying context of the iterator function.
     * ```
     * map.eachLayer(function(layer){
     *     layer.bindPopup('Hello');
     * });
     * ```
     */
    eachLayer: function eachLayer(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }
      return this;
    },
    _addLayers: function _addLayers(layers) {
      layers = layers ? isArray(layers) ? layers : [layers] : [];
      for (var i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    },
    _addZoomLimit: function _addZoomLimit(layer) {
      if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
        this._zoomBoundLayers[stamp(layer)] = layer;
        this._updateZoomLevels();
      }
    },
    _removeZoomLimit: function _removeZoomLimit(layer) {
      var id = stamp(layer);
      if (this._zoomBoundLayers[id]) {
        delete this._zoomBoundLayers[id];
        this._updateZoomLevels();
      }
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var minZoom = Infinity,
        maxZoom = -Infinity,
        oldZoomSpan = this._getZoomSpan();
      for (var i in this._zoomBoundLayers) {
        var options = this._zoomBoundLayers[i].options;
        minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
        maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
      }
      this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
      this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

      // @section Map state change events
      // @event zoomlevelschange: Event
      // Fired when the number of zoomlevels on the map is changed due
      // to adding or removing a layer.
      if (oldZoomSpan !== this._getZoomSpan()) {
        this.fire('zoomlevelschange');
      }
      if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
        this.setZoom(this._layersMaxZoom);
      }
      if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
        this.setZoom(this._layersMinZoom);
      }
    }
  });

  /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */

  var LayerGroup = Layer.extend({
    initialize: function initialize(layers) {
      this._layers = {};
      var i, len;
      if (layers) {
        for (i = 0, len = layers.length; i < len; i++) {
          this.addLayer(layers[i]);
        }
      }
    },
    // @method addLayer(layer: Layer): this
    // Adds the given layer to the group.
    addLayer: function addLayer(layer) {
      var id = this.getLayerId(layer);
      this._layers[id] = layer;
      if (this._map) {
        this._map.addLayer(layer);
      }
      return this;
    },
    // @method removeLayer(layer: Layer): this
    // Removes the given layer from the group.
    // @alternative
    // @method removeLayer(id: Number): this
    // Removes the layer with the given internal ID from the group.
    removeLayer: function removeLayer(layer) {
      var id = layer in this._layers ? layer : this.getLayerId(layer);
      if (this._map && this._layers[id]) {
        this._map.removeLayer(this._layers[id]);
      }
      delete this._layers[id];
      return this;
    },
    // @method hasLayer(layer: Layer): Boolean
    // Returns `true` if the given layer is currently added to the group.
    // @alternative
    // @method hasLayer(id: Number): Boolean
    // Returns `true` if the given internal ID is currently added to the group.
    hasLayer: function hasLayer(layer) {
      return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
    },
    // @method clearLayers(): this
    // Removes all the layers from the group.
    clearLayers: function clearLayers() {
      for (var i in this._layers) {
        this.removeLayer(this._layers[i]);
      }
      return this;
    },
    // @method invoke(methodName: String, …): this
    // Calls `methodName` on every layer contained in this group, passing any
    // additional parameters. Has no effect if the layers contained do not
    // implement `methodName`.
    invoke: function invoke(methodName) {
      var args = Array.prototype.slice.call(arguments, 1),
        i,
        layer;
      for (i in this._layers) {
        layer = this._layers[i];
        if (layer[methodName]) {
          layer[methodName].apply(layer, args);
        }
      }
      return this;
    },
    onAdd: function onAdd(map) {
      for (var i in this._layers) {
        map.addLayer(this._layers[i]);
      }
    },
    onRemove: function onRemove(map) {
      for (var i in this._layers) {
        map.removeLayer(this._layers[i]);
      }
    },
    // @method eachLayer(fn: Function, context?: Object): this
    // Iterates over the layers of the group, optionally specifying context of the iterator function.
    // ```js
    // group.eachLayer(function (layer) {
    // 	layer.bindPopup('Hello');
    // });
    // ```
    eachLayer: function eachLayer(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }
      return this;
    },
    // @method getLayer(id: Number): Layer
    // Returns the layer with the given internal ID.
    getLayer: function getLayer(id) {
      return this._layers[id];
    },
    // @method getLayers(): Layer[]
    // Returns an array of all the layers added to the group.
    getLayers: function getLayers() {
      var layers = [];
      for (var i in this._layers) {
        layers.push(this._layers[i]);
      }
      return layers;
    },
    // @method setZIndex(zIndex: Number): this
    // Calls `setZIndex` on every layer contained in this group, passing the z-index.
    setZIndex: function setZIndex(zIndex) {
      return this.invoke('setZIndex', zIndex);
    },
    // @method getLayerId(layer: Layer): Number
    // Returns the internal ID for a layer
    getLayerId: function getLayerId(layer) {
      return stamp(layer);
    }
  });

  // @factory L.layerGroup(layers?: Layer[])
  // Create a layer group, optionally given an initial set of layers.
  var layerGroup = function layerGroup(layers) {
    return new LayerGroup(layers);
  };

  /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */

  var FeatureGroup = LayerGroup.extend({
    addLayer: function addLayer(layer) {
      if (this.hasLayer(layer)) {
        return this;
      }
      layer.addEventParent(this);
      LayerGroup.prototype.addLayer.call(this, layer);

      // @event layeradd: LayerEvent
      // Fired when a layer is added to this `FeatureGroup`
      return this.fire('layeradd', {
        layer: layer
      });
    },
    removeLayer: function removeLayer(layer) {
      if (!this.hasLayer(layer)) {
        return this;
      }
      if (layer in this._layers) {
        layer = this._layers[layer];
      }
      layer.removeEventParent(this);
      LayerGroup.prototype.removeLayer.call(this, layer);

      // @event layerremove: LayerEvent
      // Fired when a layer is removed from this `FeatureGroup`
      return this.fire('layerremove', {
        layer: layer
      });
    },
    // @method setStyle(style: Path options): this
    // Sets the given path options to each layer of the group that has a `setStyle` method.
    setStyle: function setStyle(style) {
      return this.invoke('setStyle', style);
    },
    // @method bringToFront(): this
    // Brings the layer group to the top of all other layers
    bringToFront: function bringToFront() {
      return this.invoke('bringToFront');
    },
    // @method bringToBack(): this
    // Brings the layer group to the top of all other layers
    bringToBack: function bringToBack() {
      return this.invoke('bringToBack');
    },
    // @method getBounds(): LatLngBounds
    // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
    getBounds: function getBounds() {
      var bounds = new LatLngBounds();
      for (var id in this._layers) {
        var layer = this._layers[id];
        bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
      }
      return bounds;
    }
  });

  // @factory L.featureGroup(layers: Layer[])
  // Create a feature group, optionally given an initial set of layers.
  var featureGroup = function featureGroup(layers) {
    return new FeatureGroup(layers);
  };

  /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */

  var Icon = Class.extend({
    /* @section
     * @aka Icon options
     *
     * @option iconUrl: String = null
     * **(required)** The URL to the icon image (absolute or relative to your script path).
     *
     * @option iconRetinaUrl: String = null
     * The URL to a retina sized version of the icon image (absolute or relative to your
     * script path). Used for Retina screen devices.
     *
     * @option iconSize: Point = null
     * Size of the icon image in pixels.
     *
     * @option iconAnchor: Point = null
     * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
     * will be aligned so that this point is at the marker's geographical location. Centered
     * by default if size is specified, also can be set in CSS with negative margins.
     *
     * @option popupAnchor: Point = null
     * The coordinates of the point from which popups will "open", relative to the icon anchor.
     *
     * @option shadowUrl: String = null
     * The URL to the icon shadow image. If not specified, no shadow image will be created.
     *
     * @option shadowRetinaUrl: String = null
     *
     * @option shadowSize: Point = null
     * Size of the shadow image in pixels.
     *
     * @option shadowAnchor: Point = null
     * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
     * as iconAnchor if not specified).
     *
     * @option className: String = ''
     * A custom class name to assign to both icon and shadow images. Empty by default.
     */

    initialize: function initialize(options) {
      setOptions(this, options);
    },
    // @method createIcon(oldIcon?: HTMLElement): HTMLElement
    // Called internally when the icon has to be shown, returns a `<img>` HTML element
    // styled according to the options.
    createIcon: function createIcon(oldIcon) {
      return this._createIcon('icon', oldIcon);
    },
    // @method createShadow(oldIcon?: HTMLElement): HTMLElement
    // As `createIcon`, but for the shadow beneath it.
    createShadow: function createShadow(oldIcon) {
      return this._createIcon('shadow', oldIcon);
    },
    _createIcon: function _createIcon(name, oldIcon) {
      var src = this._getIconUrl(name);
      if (!src) {
        if (name === 'icon') {
          throw new Error('iconUrl not set in Icon options (see the docs).');
        }
        return null;
      }
      var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
      this._setIconStyles(img, name);
      return img;
    },
    _setIconStyles: function _setIconStyles(img, name) {
      var options = this.options;
      var sizeOption = options[name + 'Size'];
      if (typeof sizeOption === 'number') {
        sizeOption = [sizeOption, sizeOption];
      }
      var size = toPoint(sizeOption),
        anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
      img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');
      if (anchor) {
        img.style.marginLeft = -anchor.x + 'px';
        img.style.marginTop = -anchor.y + 'px';
      }
      if (size) {
        img.style.width = size.x + 'px';
        img.style.height = size.y + 'px';
      }
    },
    _createImg: function _createImg(src, el) {
      el = el || document.createElement('img');
      el.src = src;
      return el;
    },
    _getIconUrl: function _getIconUrl(name) {
      return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
    }
  });

  // @factory L.icon(options: Icon options)
  // Creates an icon instance with the given options.
  function icon(options) {
    return new Icon(options);
  }

  /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */

  var IconDefault = Icon.extend({
    options: {
      iconUrl: 'marker-icon.png',
      iconRetinaUrl: 'marker-icon-2x.png',
      shadowUrl: 'marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(name) {
      if (!IconDefault.imagePath) {
        // Deprecated, backwards-compatibility only
        IconDefault.imagePath = this._detectIconPath();
      }

      // @option imagePath: String
      // `Icon.Default` will try to auto-detect the absolute location of the
      // blue icon images. If you are placing these images in a non-standard
      // way, set this option to point to the right absolute path.
      return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
    },
    _detectIconPath: function _detectIconPath() {
      var el = create$1('div', 'leaflet-default-icon-path', document.body);
      var path = getStyle(el, 'background-image') || getStyle(el, 'backgroundImage'); // IE8

      document.body.removeChild(el);
      if (path === null || path.indexOf('url') !== 0) {
        path = '';
      } else {
        path = path.replace(/^url\([\"\']?/, '').replace(/marker-icon\.png[\"\']?\)$/, '');
      }
      return path;
    }
  });

  /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */

  /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */

  var MarkerDrag = Handler.extend({
    initialize: function initialize(marker) {
      this._marker = marker;
    },
    addHooks: function addHooks() {
      var icon = this._marker._icon;
      if (!this._draggable) {
        this._draggable = new Draggable(icon, icon, true);
      }
      this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable();
      addClass(icon, 'leaflet-marker-draggable');
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable();
      if (this._marker._icon) {
        removeClass(this._marker._icon, 'leaflet-marker-draggable');
      }
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _onDragStart: function _onDragStart() {
      // @section Dragging events
      // @event dragstart: Event
      // Fired when the user starts dragging the marker.

      // @event movestart: Event
      // Fired when the marker starts moving (because of dragging).

      this._oldLatLng = this._marker.getLatLng();
      this._marker.closePopup().fire('movestart').fire('dragstart');
    },
    _onDrag: function _onDrag(e) {
      var marker = this._marker,
        shadow = marker._shadow,
        iconPos = getPosition(marker._icon),
        latlng = marker._map.layerPointToLatLng(iconPos);

      // update shadow position
      if (shadow) {
        setPosition(shadow, iconPos);
      }
      marker._latlng = latlng;
      e.latlng = latlng;
      e.oldLatLng = this._oldLatLng;

      // @event drag: Event
      // Fired repeatedly while the user drags the marker.
      marker.fire('move', e).fire('drag', e);
    },
    _onDragEnd: function _onDragEnd(e) {
      // @event dragend: DragEndEvent
      // Fired when the user stops dragging the marker.

      // @event moveend: Event
      // Fired when the marker stops moving (because of dragging).
      delete this._oldLatLng;
      this._marker.fire('moveend').fire('dragend', e);
    }
  });

  /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */

  var Marker = Layer.extend({
    // @section
    // @aka Marker options
    options: {
      // @option icon: Icon = *
      // Icon instance to use for rendering the marker.
      // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
      // If not specified, a common instance of `L.Icon.Default` is used.
      icon: new IconDefault(),
      // Option inherited from "Interactive layer" abstract class
      interactive: true,
      // @option draggable: Boolean = false
      // Whether the marker is draggable with mouse/touch or not.
      draggable: false,
      // @option keyboard: Boolean = true
      // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
      keyboard: true,
      // @option title: String = ''
      // Text for the browser tooltip that appear on marker hover (no tooltip by default).
      title: '',
      // @option alt: String = ''
      // Text for the `alt` attribute of the icon image (useful for accessibility).
      alt: '',
      // @option zIndexOffset: Number = 0
      // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
      zIndexOffset: 0,
      // @option opacity: Number = 1.0
      // The opacity of the marker.
      opacity: 1,
      // @option riseOnHover: Boolean = false
      // If `true`, the marker will get on top of others when you hover the mouse over it.
      riseOnHover: false,
      // @option riseOffset: Number = 250
      // The z-index offset used for the `riseOnHover` feature.
      riseOffset: 250,
      // @option pane: String = 'markerPane'
      // `Map pane` where the markers icon will be added.
      pane: 'markerPane',
      // @option bubblingMouseEvents: Boolean = false
      // When `true`, a mouse event on this marker will trigger the same event on the map
      // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
      bubblingMouseEvents: false
    },
    /* @section
     *
     * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
     */

    initialize: function initialize(latlng, options) {
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
    },
    onAdd: function onAdd(map) {
      this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
      if (this._zoomAnimated) {
        map.on('zoomanim', this._animateZoom, this);
      }
      this._initIcon();
      this.update();
    },
    onRemove: function onRemove(map) {
      if (this.dragging && this.dragging.enabled()) {
        this.options.draggable = true;
        this.dragging.removeHooks();
      }
      delete this.dragging;
      if (this._zoomAnimated) {
        map.off('zoomanim', this._animateZoom, this);
      }
      this._removeIcon();
      this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    // @method getLatLng: LatLng
    // Returns the current geographical position of the marker.
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    // @method setLatLng(latlng: LatLng): this
    // Changes the marker position to the given point.
    setLatLng: function setLatLng(latlng) {
      var oldLatLng = this._latlng;
      this._latlng = toLatLng(latlng);
      this.update();

      // @event move: Event
      // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
      return this.fire('move', {
        oldLatLng: oldLatLng,
        latlng: this._latlng
      });
    },
    // @method setZIndexOffset(offset: Number): this
    // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
    setZIndexOffset: function setZIndexOffset(offset) {
      this.options.zIndexOffset = offset;
      return this.update();
    },
    // @method setIcon(icon: Icon): this
    // Changes the marker icon.
    setIcon: function setIcon(icon) {
      this.options.icon = icon;
      if (this._map) {
        this._initIcon();
        this.update();
      }
      if (this._popup) {
        this.bindPopup(this._popup, this._popup.options);
      }
      return this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      if (this._icon) {
        var pos = this._map.latLngToLayerPoint(this._latlng).round();
        this._setPos(pos);
      }
      return this;
    },
    _initIcon: function _initIcon() {
      var options = this.options,
        classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      var icon = options.icon.createIcon(this._icon),
        addIcon = false;

      // if we're not reusing the icon, remove the old one and init new one
      if (icon !== this._icon) {
        if (this._icon) {
          this._removeIcon();
        }
        addIcon = true;
        if (options.title) {
          icon.title = options.title;
        }
        if (options.alt) {
          icon.alt = options.alt;
        }
      }
      addClass(icon, classToAdd);
      if (options.keyboard) {
        icon.tabIndex = '0';
      }
      this._icon = icon;
      if (options.riseOnHover) {
        this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }
      var newShadow = options.icon.createShadow(this._shadow),
        addShadow = false;
      if (newShadow !== this._shadow) {
        this._removeShadow();
        addShadow = true;
      }
      if (newShadow) {
        addClass(newShadow, classToAdd);
        newShadow.alt = '';
      }
      this._shadow = newShadow;
      if (options.opacity < 1) {
        this._updateOpacity();
      }
      if (addIcon) {
        this.getPane().appendChild(this._icon);
      }
      this._initInteraction();
      if (newShadow && addShadow) {
        this.getPane('shadowPane').appendChild(this._shadow);
      }
    },
    _removeIcon: function _removeIcon() {
      if (this.options.riseOnHover) {
        this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }
      _remove(this._icon);
      this.removeInteractiveTarget(this._icon);
      this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      if (this._shadow) {
        _remove(this._shadow);
      }
      this._shadow = null;
    },
    _setPos: function _setPos(pos) {
      setPosition(this._icon, pos);
      if (this._shadow) {
        setPosition(this._shadow, pos);
      }
      this._zIndex = pos.y + this.options.zIndexOffset;
      this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(offset) {
      this._icon.style.zIndex = this._zIndex + offset;
    },
    _animateZoom: function _animateZoom(opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
      this._setPos(pos);
    },
    _initInteraction: function _initInteraction() {
      if (!this.options.interactive) {
        return;
      }
      addClass(this._icon, 'leaflet-interactive');
      this.addInteractiveTarget(this._icon);
      if (MarkerDrag) {
        var draggable = this.options.draggable;
        if (this.dragging) {
          draggable = this.dragging.enabled();
          this.dragging.disable();
        }
        this.dragging = new MarkerDrag(this);
        if (draggable) {
          this.dragging.enable();
        }
      }
    },
    // @method setOpacity(opacity: Number): this
    // Changes the opacity of the marker.
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      if (this._map) {
        this._updateOpacity();
      }
      return this;
    },
    _updateOpacity: function _updateOpacity() {
      var opacity = this.options.opacity;
      _setOpacity(this._icon, opacity);
      if (this._shadow) {
        _setOpacity(this._shadow, opacity);
      }
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor || [0, 0];
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor || [0, 0];
    }
  });

  // factory L.marker(latlng: LatLng, options? : Marker options)

  // @factory L.marker(latlng: LatLng, options? : Marker options)
  // Instantiates a Marker object given a geographical point and optionally an options object.
  function marker(latlng, options) {
    return new Marker(latlng, options);
  }

  /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */

  var Path = Layer.extend({
    // @section
    // @aka Path options
    options: {
      // @option stroke: Boolean = true
      // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
      stroke: true,
      // @option color: String = '#3388ff'
      // Stroke color
      color: '#3388ff',
      // @option weight: Number = 3
      // Stroke width in pixels
      weight: 3,
      // @option opacity: Number = 1.0
      // Stroke opacity
      opacity: 1,
      // @option lineCap: String= 'round'
      // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
      lineCap: 'round',
      // @option lineJoin: String = 'round'
      // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
      lineJoin: 'round',
      // @option dashArray: String = null
      // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
      dashArray: null,
      // @option dashOffset: String = null
      // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
      dashOffset: null,
      // @option fill: Boolean = depends
      // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
      fill: false,
      // @option fillColor: String = *
      // Fill color. Defaults to the value of the [`color`](#path-color) option
      fillColor: null,
      // @option fillOpacity: Number = 0.2
      // Fill opacity.
      fillOpacity: 0.2,
      // @option fillRule: String = 'evenodd'
      // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
      fillRule: 'evenodd',
      // className: '',

      // Option inherited from "Interactive layer" abstract class
      interactive: true,
      // @option bubblingMouseEvents: Boolean = true
      // When `true`, a mouse event on this path will trigger the same event on the map
      // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
      bubblingMouseEvents: true
    },
    beforeAdd: function beforeAdd(map) {
      // Renderer is set here because we need to call renderer.getEvents
      // before this.getEvents.
      this._renderer = map.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this);
      this._reset();
      this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    // @method redraw(): this
    // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
    redraw: function redraw() {
      if (this._map) {
        this._renderer._updatePath(this);
      }
      return this;
    },
    // @method setStyle(style: Path options): this
    // Changes the appearance of a Path based on the options in the `Path options` object.
    setStyle: function setStyle(style) {
      setOptions(this, style);
      if (this._renderer) {
        this._renderer._updateStyle(this);
      }
      return this;
    },
    // @method bringToFront(): this
    // Brings the layer to the top of all path layers.
    bringToFront: function bringToFront() {
      if (this._renderer) {
        this._renderer._bringToFront(this);
      }
      return this;
    },
    // @method bringToBack(): this
    // Brings the layer to the bottom of all path layers.
    bringToBack: function bringToBack() {
      if (this._renderer) {
        this._renderer._bringToBack(this);
      }
      return this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      // defined in child classes
      this._project();
      this._update();
    },
    _clickTolerance: function _clickTolerance() {
      // used when doing hit detection for Canvas layers
      return (this.options.stroke ? this.options.weight / 2 : 0) + (touch ? 10 : 0);
    }
  });

  /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */

  var CircleMarker = Path.extend({
    // @section
    // @aka CircleMarker options
    options: {
      fill: true,
      // @option radius: Number = 10
      // Radius of the circle marker, in pixels
      radius: 10
    },
    initialize: function initialize(latlng, options) {
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
      this._radius = this.options.radius;
    },
    // @method setLatLng(latLng: LatLng): this
    // Sets the position of a circle marker to a new location.
    setLatLng: function setLatLng(latlng) {
      this._latlng = toLatLng(latlng);
      this.redraw();
      return this.fire('move', {
        latlng: this._latlng
      });
    },
    // @method getLatLng(): LatLng
    // Returns the current geographical position of the circle marker
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    // @method setRadius(radius: Number): this
    // Sets the radius of a circle marker. Units are in pixels.
    setRadius: function setRadius(radius) {
      this.options.radius = this._radius = radius;
      return this.redraw();
    },
    // @method getRadius(): Number
    // Returns the current radius of the circle
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(options) {
      var radius = options && options.radius || this._radius;
      Path.prototype.setStyle.call(this, options);
      this.setRadius(radius);
      return this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng);
      this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var r = this._radius,
        r2 = this._radiusY || r,
        w = this._clickTolerance(),
        p = [r + w, r2 + w];
      this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
    },
    _update: function _update() {
      if (this._map) {
        this._updatePath();
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function _containsPoint(p) {
      return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  });

  // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
  // Instantiates a circle marker object given a geographical point, and an optional options object.
  function circleMarker(latlng, options) {
    return new CircleMarker(latlng, options);
  }

  /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */

  var Circle = CircleMarker.extend({
    initialize: function initialize(latlng, options, legacyOptions) {
      if (typeof options === 'number') {
        // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
        options = extend({}, legacyOptions, {
          radius: options
        });
      }
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
      if (isNaN(this.options.radius)) {
        throw new Error('Circle radius cannot be NaN');
      }

      // @section
      // @aka Circle options
      // @option radius: Number; Radius of the circle, in meters.
      this._mRadius = this.options.radius;
    },
    // @method setRadius(radius: Number): this
    // Sets the radius of a circle. Units are in meters.
    setRadius: function setRadius(radius) {
      this._mRadius = radius;
      return this.redraw();
    },
    // @method getRadius(): Number
    // Returns the current radius of a circle. Units are in meters.
    getRadius: function getRadius() {
      return this._mRadius;
    },
    // @method getBounds(): LatLngBounds
    // Returns the `LatLngBounds` of the path.
    getBounds: function getBounds() {
      var half = [this._radius, this._radiusY || this._radius];
      return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
    },
    setStyle: Path.prototype.setStyle,
    _project: function _project() {
      var lng = this._latlng.lng,
        lat = this._latlng.lat,
        map = this._map,
        crs = map.options.crs;
      if (crs.distance === Earth.distance) {
        var d = Math.PI / 180,
          latR = this._mRadius / Earth.R / d,
          top = map.project([lat + latR, lng]),
          bottom = map.project([lat - latR, lng]),
          p = top.add(bottom).divideBy(2),
          lat2 = map.unproject(p).lat,
          lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
        if (isNaN(lngR) || lngR === 0) {
          lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
        }

        this._point = p.subtract(map.getPixelOrigin());
        this._radius = isNaN(lngR) ? 0 : Math.max(Math.round(p.x - map.project([lat2, lng - lngR]).x), 1);
        this._radiusY = Math.max(Math.round(p.y - top.y), 1);
      } else {
        var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = map.latLngToLayerPoint(this._latlng);
        this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
      }
      this._updateBounds();
    }
  });

  // @factory L.circle(latlng: LatLng, options?: Circle options)
  // Instantiates a circle object given a geographical point, and an options object
  // which contains the circle radius.
  // @alternative
  // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
  // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
  // Do not use in new applications or plugins.
  function circle(latlng, options, legacyOptions) {
    return new Circle(latlng, options, legacyOptions);
  }

  /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */

  var Polyline = Path.extend({
    // @section
    // @aka Polyline options
    options: {
      // @option smoothFactor: Number = 1.0
      // How much to simplify the polyline on each zoom level. More means
      // better performance and smoother look, and less means more accurate representation.
      smoothFactor: 1.0,
      // @option noClip: Boolean = false
      // Disable polyline clipping.
      noClip: false
    },
    initialize: function initialize(latlngs, options) {
      setOptions(this, options);
      this._setLatLngs(latlngs);
    },
    // @method getLatLngs(): LatLng[]
    // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    // @method setLatLngs(latlngs: LatLng[]): this
    // Replaces all the points in the polyline with the given array of geographical points.
    setLatLngs: function setLatLngs(latlngs) {
      this._setLatLngs(latlngs);
      return this.redraw();
    },
    // @method isEmpty(): Boolean
    // Returns `true` if the Polyline has no LatLngs.
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(p) {
      var minDistance = Infinity,
        minPoint = null,
        closest = _sqClosestPointOnSegment,
        p1,
        p2;
      for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
        var points = this._parts[j];
        for (var i = 1, len = points.length; i < len; i++) {
          p1 = points[i - 1];
          p2 = points[i];
          var sqDist = closest(p, p1, p2, true);
          if (sqDist < minDistance) {
            minDistance = sqDist;
            minPoint = closest(p, p1, p2);
          }
        }
      }
      if (minPoint) {
        minPoint.distance = Math.sqrt(minDistance);
      }
      return minPoint;
    },
    // @method getCenter(): LatLng
    // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
    getCenter: function getCenter() {
      // throws error when not yet added to map as this center calculation requires projected coordinates
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }
      var i,
        halfDist,
        segDist,
        dist,
        p1,
        p2,
        ratio,
        points = this._rings[0],
        len = points.length;
      if (!len) {
        return null;
      }

      // polyline centroid algorithm; only uses the first ring if there are multiple

      for (i = 0, halfDist = 0; i < len - 1; i++) {
        halfDist += points[i].distanceTo(points[i + 1]) / 2;
      }

      // The line is so small in the current view that all points are on the same pixel.
      if (halfDist === 0) {
        return this._map.layerPointToLatLng(points[0]);
      }
      for (i = 0, dist = 0; i < len - 1; i++) {
        p1 = points[i];
        p2 = points[i + 1];
        segDist = p1.distanceTo(p2);
        dist += segDist;
        if (dist > halfDist) {
          ratio = (dist - halfDist) / segDist;
          return this._map.layerPointToLatLng([p2.x - ratio * (p2.x - p1.x), p2.y - ratio * (p2.y - p1.y)]);
        }
      }
    },
    // @method getBounds(): LatLngBounds
    // Returns the `LatLngBounds` of the path.
    getBounds: function getBounds() {
      return this._bounds;
    },
    // @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
    // Adds a given point to the polyline. By default, adds to the first ring of
    // the polyline in case of a multi-polyline, but can be overridden by passing
    // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
    addLatLng: function addLatLng(latlng, latlngs) {
      latlngs = latlngs || this._defaultShape();
      latlng = toLatLng(latlng);
      latlngs.push(latlng);
      this._bounds.extend(latlng);
      return this.redraw();
    },
    _setLatLngs: function _setLatLngs(latlngs) {
      this._bounds = new LatLngBounds();
      this._latlngs = this._convertLatLngs(latlngs);
    },
    _defaultShape: function _defaultShape() {
      return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
    _convertLatLngs: function _convertLatLngs(latlngs) {
      var result = [],
        flat = isFlat(latlngs);
      for (var i = 0, len = latlngs.length; i < len; i++) {
        if (flat) {
          result[i] = toLatLng(latlngs[i]);
          this._bounds.extend(result[i]);
        } else {
          result[i] = this._convertLatLngs(latlngs[i]);
        }
      }
      return result;
    },
    _project: function _project() {
      var pxBounds = new Bounds();
      this._rings = [];
      this._projectLatlngs(this._latlngs, this._rings, pxBounds);
      var w = this._clickTolerance(),
        p = new Point(w, w);
      if (this._bounds.isValid() && pxBounds.isValid()) {
        pxBounds.min._subtract(p);
        pxBounds.max._add(p);
        this._pxBounds = pxBounds;
      }
    },
    // recursively turns latlngs into a set of rings with projected coordinates
    _projectLatlngs: function _projectLatlngs(latlngs, result, projectedBounds) {
      var flat = latlngs[0] instanceof LatLng,
        len = latlngs.length,
        i,
        ring;
      if (flat) {
        ring = [];
        for (i = 0; i < len; i++) {
          ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
          projectedBounds.extend(ring[i]);
        }
        result.push(ring);
      } else {
        for (i = 0; i < len; i++) {
          this._projectLatlngs(latlngs[i], result, projectedBounds);
        }
      }
    },
    // clip polyline by renderer bounds so that we have less to render for performance
    _clipPoints: function _clipPoints() {
      var bounds = this._renderer._bounds;
      this._parts = [];
      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      var parts = this._parts,
        i,
        j,
        k,
        len,
        len2,
        segment,
        points;
      for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
        points = this._rings[i];
        for (j = 0, len2 = points.length; j < len2 - 1; j++) {
          segment = clipSegment(points[j], points[j + 1], bounds, j, true);
          if (!segment) {
            continue;
          }
          parts[k] = parts[k] || [];
          parts[k].push(segment[0]);

          // if segment goes out of screen, or it's the last one, it's the end of the line part
          if (segment[1] !== points[j + 1] || j === len2 - 2) {
            parts[k].push(segment[1]);
            k++;
          }
        }
      }
    },
    // simplify each clipped part of the polyline for performance
    _simplifyPoints: function _simplifyPoints() {
      var parts = this._parts,
        tolerance = this.options.smoothFactor;
      for (var i = 0, len = parts.length; i < len; i++) {
        parts[i] = simplify(parts[i], tolerance);
      }
    },
    _update: function _update() {
      if (!this._map) {
        return;
      }
      this._clipPoints();
      this._simplifyPoints();
      this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function _containsPoint(p, closed) {
      var i,
        j,
        k,
        len,
        len2,
        part,
        w = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(p)) {
        return false;
      }

      // hit detection for polylines
      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];
        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          if (!closed && j === 0) {
            continue;
          }
          if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
            return true;
          }
        }
      }
      return false;
    }
  });

  // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
  // Instantiates a polyline object given an array of geographical points and
  // optionally an options object. You can create a `Polyline` object with
  // multiple separate lines (`MultiPolyline`) by passing an array of arrays
  // of geographic points.
  function polyline(latlngs, options) {
    return new Polyline(latlngs, options);
  }

  // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
  Polyline._flat = _flat;

  /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */

  var Polygon = Polyline.extend({
    options: {
      fill: true
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      // throws error when not yet added to map as this center calculation requires projected coordinates
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }
      var i,
        j,
        p1,
        p2,
        f,
        area,
        x,
        y,
        center,
        points = this._rings[0],
        len = points.length;
      if (!len) {
        return null;
      }

      // polygon centroid algorithm; only uses the first ring if there are multiple

      area = x = y = 0;
      for (i = 0, j = len - 1; i < len; j = i++) {
        p1 = points[i];
        p2 = points[j];
        f = p1.y * p2.x - p2.y * p1.x;
        x += (p1.x + p2.x) * f;
        y += (p1.y + p2.y) * f;
        area += f * 3;
      }
      if (area === 0) {
        // Polygon is so small that all points are on same pixel.
        center = points[0];
      } else {
        center = [x / area, y / area];
      }
      return this._map.layerPointToLatLng(center);
    },
    _convertLatLngs: function _convertLatLngs(latlngs) {
      var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
        len = result.length;

      // remove last point if it equals first one
      if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
        result.pop();
      }
      return result;
    },
    _setLatLngs: function _setLatLngs(latlngs) {
      Polyline.prototype._setLatLngs.call(this, latlngs);
      if (isFlat(this._latlngs)) {
        this._latlngs = [this._latlngs];
      }
    },
    _defaultShape: function _defaultShape() {
      return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function _clipPoints() {
      // polygons need a different clipping algorithm so we redefine that

      var bounds = this._renderer._bounds,
        w = this.options.weight,
        p = new Point(w, w);

      // increase clip padding by stroke width to avoid stroke on clip edges
      bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
      this._parts = [];
      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
        clipped = clipPolygon(this._rings[i], bounds, true);
        if (clipped.length) {
          this._parts.push(clipped);
        }
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, true);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function _containsPoint(p) {
      var inside = false,
        part,
        p1,
        p2,
        i,
        j,
        k,
        len,
        len2;
      if (!this._pxBounds.contains(p)) {
        return false;
      }

      // ray casting algorithm for detecting if point is in polygon
      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];
        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          p1 = part[j];
          p2 = part[k];
          if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
            inside = !inside;
          }
        }
      }

      // also check if it's on polygon stroke
      return inside || Polyline.prototype._containsPoint.call(this, p, true);
    }
  });

  // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
  function polygon(latlngs, options) {
    return new Polygon(latlngs, options);
  }

  /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */

  var GeoJSON = FeatureGroup.extend({
    /* @section
     * @aka GeoJSON options
     *
     * @option pointToLayer: Function = *
     * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
     * called when data is added, passing the GeoJSON point feature and its `LatLng`.
     * The default is to spawn a default `Marker`:
     * ```js
     * function(geoJsonPoint, latlng) {
     * 	return L.marker(latlng);
     * }
     * ```
     *
     * @option style: Function = *
     * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
     * called internally when data is added.
     * The default value is to not override any defaults:
     * ```js
     * function (geoJsonFeature) {
     * 	return {}
     * }
     * ```
     *
     * @option onEachFeature: Function = *
     * A `Function` that will be called once for each created `Feature`, after it has
     * been created and styled. Useful for attaching events and popups to features.
     * The default is to do nothing with the newly created layers:
     * ```js
     * function (feature, layer) {}
     * ```
     *
     * @option filter: Function = *
     * A `Function` that will be used to decide whether to include a feature or not.
     * The default is to include all features:
     * ```js
     * function (geoJsonFeature) {
     * 	return true;
     * }
     * ```
     * Note: dynamically changing the `filter` option will have effect only on newly
     * added data. It will _not_ re-evaluate already included features.
     *
     * @option coordsToLatLng: Function = *
     * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
     * The default is the `coordsToLatLng` static method.
     */

    initialize: function initialize(geojson, options) {
      setOptions(this, options);
      this._layers = {};
      if (geojson) {
        this.addData(geojson);
      }
    },
    // @method addData( <GeoJSON> data ): this
    // Adds a GeoJSON object to the layer.
    addData: function addData(geojson) {
      var features = isArray(geojson) ? geojson : geojson.features,
        i,
        len,
        feature;
      if (features) {
        for (i = 0, len = features.length; i < len; i++) {
          // only add this if geometry or geometries are set and not null
          feature = features[i];
          if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
            this.addData(feature);
          }
        }
        return this;
      }
      var options = this.options;
      if (options.filter && !options.filter(geojson)) {
        return this;
      }
      var layer = geometryToLayer(geojson, options);
      if (!layer) {
        return this;
      }
      layer.feature = asFeature(geojson);
      layer.defaultOptions = layer.options;
      this.resetStyle(layer);
      if (options.onEachFeature) {
        options.onEachFeature(geojson, layer);
      }
      return this.addLayer(layer);
    },
    // @method resetStyle( <Path> layer ): this
    // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
    resetStyle: function resetStyle(layer) {
      // reset any custom styles
      layer.options = extend({}, layer.defaultOptions);
      this._setLayerStyle(layer, this.options.style);
      return this;
    },
    // @method setStyle( <Function> style ): this
    // Changes styles of GeoJSON vector layers with the given style function.
    setStyle: function setStyle(style) {
      return this.eachLayer(function (layer) {
        this._setLayerStyle(layer, style);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(layer, style) {
      if (typeof style === 'function') {
        style = style(layer.feature);
      }
      if (layer.setStyle) {
        layer.setStyle(style);
      }
    }
  });

  // @section
  // There are several static functions which can be called without instantiating L.GeoJSON:

  // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
  // Creates a `Layer` from a given GeoJSON feature. Can use a custom
  // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
  // functions if provided as options.
  function geometryToLayer(geojson, options) {
    var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
      coords = geometry ? geometry.coordinates : null,
      layers = [],
      pointToLayer = options && options.pointToLayer,
      _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
      latlng,
      latlngs,
      i,
      len;
    if (!coords && !geometry) {
      return null;
    }
    switch (geometry.type) {
      case 'Point':
        latlng = _coordsToLatLng(coords);
        return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);
      case 'MultiPoint':
        for (i = 0, len = coords.length; i < len; i++) {
          latlng = _coordsToLatLng(coords[i]);
          layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
        }
        return new FeatureGroup(layers);
      case 'LineString':
      case 'MultiLineString':
        latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
        return new Polyline(latlngs, options);
      case 'Polygon':
      case 'MultiPolygon':
        latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
        return new Polygon(latlngs, options);
      case 'GeometryCollection':
        for (i = 0, len = geometry.geometries.length; i < len; i++) {
          var layer = geometryToLayer({
            geometry: geometry.geometries[i],
            type: 'Feature',
            properties: geojson.properties
          }, options);
          if (layer) {
            layers.push(layer);
          }
        }
        return new FeatureGroup(layers);
      default:
        throw new Error('Invalid GeoJSON object.');
    }
  }

  // @function coordsToLatLng(coords: Array): LatLng
  // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
  // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
  function coordsToLatLng(coords) {
    return new LatLng(coords[1], coords[0], coords[2]);
  }

  // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
  // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
  // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
  // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
  function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
    var latlngs = [];
    for (var i = 0, len = coords.length, latlng; i < len; i++) {
      latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
      latlngs.push(latlng);
    }
    return latlngs;
  }

  // @function latLngToCoords(latlng: LatLng, precision?: Number): Array
  // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
  function latLngToCoords(latlng, precision) {
    precision = typeof precision === 'number' ? precision : 6;
    return latlng.alt !== undefined ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
  }

  // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
  // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
  // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
  function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
    var coords = [];
    for (var i = 0, len = latlngs.length; i < len; i++) {
      coords.push(levelsDeep ? latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
    }
    if (!levelsDeep && closed) {
      coords.push(coords[0]);
    }
    return coords;
  }
  function getFeature(layer, newGeometry) {
    return layer.feature ? extend({}, layer.feature, {
      geometry: newGeometry
    }) : asFeature(newGeometry);
  }

  // @function asFeature(geojson: Object): Object
  // Normalize GeoJSON geometries/features into GeoJSON features.
  function asFeature(geojson) {
    if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
      return geojson;
    }
    return {
      type: 'Feature',
      properties: {},
      geometry: geojson
    };
  }
  var PointToGeoJSON = {
    toGeoJSON: function toGeoJSON(precision) {
      return getFeature(this, {
        type: 'Point',
        coordinates: latLngToCoords(this.getLatLng(), precision)
      });
    }
  };

  // @namespace Marker
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
  Marker.include(PointToGeoJSON);

  // @namespace CircleMarker
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
  Circle.include(PointToGeoJSON);
  CircleMarker.include(PointToGeoJSON);

  // @namespace Polyline
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
  Polyline.include({
    toGeoJSON: function toGeoJSON(precision) {
      var multi = !isFlat(this._latlngs);
      var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
      return getFeature(this, {
        type: (multi ? 'Multi' : '') + 'LineString',
        coordinates: coords
      });
    }
  });

  // @namespace Polygon
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
  Polygon.include({
    toGeoJSON: function toGeoJSON(precision) {
      var holes = !isFlat(this._latlngs),
        multi = holes && !isFlat(this._latlngs[0]);
      var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
      if (!holes) {
        coords = [coords];
      }
      return getFeature(this, {
        type: (multi ? 'Multi' : '') + 'Polygon',
        coordinates: coords
      });
    }
  });

  // @namespace LayerGroup
  LayerGroup.include({
    toMultiPoint: function toMultiPoint(precision) {
      var coords = [];
      this.eachLayer(function (layer) {
        coords.push(layer.toGeoJSON(precision).geometry.coordinates);
      });
      return getFeature(this, {
        type: 'MultiPoint',
        coordinates: coords
      });
    },
    // @method toGeoJSON(): Object
    // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
    toGeoJSON: function toGeoJSON(precision) {
      var type = this.feature && this.feature.geometry && this.feature.geometry.type;
      if (type === 'MultiPoint') {
        return this.toMultiPoint(precision);
      }
      var isGeometryCollection = type === 'GeometryCollection',
        jsons = [];
      this.eachLayer(function (layer) {
        if (layer.toGeoJSON) {
          var json = layer.toGeoJSON(precision);
          if (isGeometryCollection) {
            jsons.push(json.geometry);
          } else {
            var feature = asFeature(json);
            // Squash nested feature collections
            if (feature.type === 'FeatureCollection') {
              jsons.push.apply(jsons, feature.features);
            } else {
              jsons.push(feature);
            }
          }
        }
      });
      if (isGeometryCollection) {
        return getFeature(this, {
          geometries: jsons,
          type: 'GeometryCollection'
        });
      }
      return {
        type: 'FeatureCollection',
        features: jsons
      };
    }
  });

  // @namespace GeoJSON
  // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
  // Creates a GeoJSON layer. Optionally accepts an object in
  // [GeoJSON format](http://geojson.org/geojson-spec.html) to display on the map
  // (you can alternatively add it later with `addData` method) and an `options` object.
  function geoJSON(geojson, options) {
    return new GeoJSON(geojson, options);
  }

  // Backward compatibility.
  var geoJson = geoJSON;

  /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */

  var ImageOverlay = Layer.extend({
    // @section
    // @aka ImageOverlay options
    options: {
      // @option opacity: Number = 1.0
      // The opacity of the image overlay.
      opacity: 1,
      // @option alt: String = ''
      // Text for the `alt` attribute of the image (useful for accessibility).
      alt: '',
      // @option interactive: Boolean = false
      // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
      interactive: false,
      // @option crossOrigin: Boolean = false
      // If true, the image will have its crossOrigin attribute set to ''. This is needed if you want to access image pixel data.
      crossOrigin: false,
      // @option errorOverlayUrl: String = ''
      // URL to the overlay image to show in place of the overlay that failed to load.
      errorOverlayUrl: '',
      // @option zIndex: Number = 1
      // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the tile layer.
      zIndex: 1,
      // @option className: String = ''
      // A custom class name to assign to the image. Empty by default.
      className: ''
    },
    initialize: function initialize(url, bounds, options) {
      // (String, LatLngBounds, Object)
      this._url = url;
      this._bounds = toLatLngBounds(bounds);
      setOptions(this, options);
    },
    onAdd: function onAdd() {
      if (!this._image) {
        this._initImage();
        if (this.options.opacity < 1) {
          this._updateOpacity();
        }
      }
      if (this.options.interactive) {
        addClass(this._image, 'leaflet-interactive');
        this.addInteractiveTarget(this._image);
      }
      this.getPane().appendChild(this._image);
      this._reset();
    },
    onRemove: function onRemove() {
      _remove(this._image);
      if (this.options.interactive) {
        this.removeInteractiveTarget(this._image);
      }
    },
    // @method setOpacity(opacity: Number): this
    // Sets the opacity of the overlay.
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      if (this._image) {
        this._updateOpacity();
      }
      return this;
    },
    setStyle: function setStyle(styleOpts) {
      if (styleOpts.opacity) {
        this.setOpacity(styleOpts.opacity);
      }
      return this;
    },
    // @method bringToFront(): this
    // Brings the layer to the top of all overlays.
    bringToFront: function bringToFront() {
      if (this._map) {
        toFront(this._image);
      }
      return this;
    },
    // @method bringToBack(): this
    // Brings the layer to the bottom of all overlays.
    bringToBack: function bringToBack() {
      if (this._map) {
        toBack(this._image);
      }
      return this;
    },
    // @method setUrl(url: String): this
    // Changes the URL of the image.
    setUrl: function setUrl(url) {
      this._url = url;
      if (this._image) {
        this._image.src = url;
      }
      return this;
    },
    // @method setBounds(bounds: LatLngBounds): this
    // Update the bounds that this ImageOverlay covers
    setBounds: function setBounds(bounds) {
      this._bounds = toLatLngBounds(bounds);
      if (this._map) {
        this._reset();
      }
      return this;
    },
    getEvents: function getEvents() {
      var events = {
        zoom: this._reset,
        viewreset: this._reset
      };
      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }
      return events;
    },
    // @method: setZIndex(value: Number) : this
    // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
    setZIndex: function setZIndex(value) {
      this.options.zIndex = value;
      this._updateZIndex();
      return this;
    },
    // @method getBounds(): LatLngBounds
    // Get the bounds that this ImageOverlay covers
    getBounds: function getBounds() {
      return this._bounds;
    },
    // @method getElement(): HTMLElement
    // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
    // used by this overlay.
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var img = this._image = create$1('img', 'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : '') + (this.options.className || ''));
      img.onselectstart = falseFn;
      img.onmousemove = falseFn;

      // @event load: Event
      // Fired when the ImageOverlay layer has loaded its image
      img.onload = bind(this.fire, this, 'load');
      img.onerror = bind(this._overlayOnError, this, 'error');
      if (this.options.crossOrigin) {
        img.crossOrigin = '';
      }
      if (this.options.zIndex) {
        this._updateZIndex();
      }
      img.src = this._url;
      img.alt = this.options.alt;
    },
    _animateZoom: function _animateZoom(e) {
      var scale = this._map.getZoomScale(e.zoom),
        offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
      setTransform(this._image, offset, scale);
    },
    _reset: function _reset() {
      var image = this._image,
        bounds = new Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
        size = bounds.getSize();
      setPosition(image, bounds.min);
      image.style.width = size.x + 'px';
      image.style.height = size.y + 'px';
    },
    _updateOpacity: function _updateOpacity() {
      _setOpacity(this._image, this.options.opacity);
    },
    _updateZIndex: function _updateZIndex() {
      if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._image.style.zIndex = this.options.zIndex;
      }
    },
    _overlayOnError: function _overlayOnError() {
      // @event error: Event
      // Fired when the ImageOverlay layer has loaded its image
      this.fire('error');
      var errorUrl = this.options.errorOverlayUrl;
      if (errorUrl && this._url !== errorUrl) {
        this._url = errorUrl;
        this._image.src = errorUrl;
      }
    }
  });

  // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
  // Instantiates an image overlay object given the URL of the image and the
  // geographical bounds it is tied to.
  var imageOverlay = function imageOverlay(url, bounds, options) {
    return new ImageOverlay(url, bounds, options);
  };

  /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.VideoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */

  var VideoOverlay = ImageOverlay.extend({
    // @section
    // @aka VideoOverlay options
    options: {
      // @option autoplay: Boolean = true
      // Whether the video starts playing automatically when loaded.
      autoplay: true,
      // @option loop: Boolean = true
      // Whether the video will loop back to the beginning when played.
      loop: true
    },
    _initImage: function _initImage() {
      var wasElementSupplied = this._url.tagName === 'VIDEO';
      var vid = this._image = wasElementSupplied ? this._url : create$1('video');
      vid["class"] = vid["class"] || '';
      vid["class"] += 'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : '');
      vid.onselectstart = falseFn;
      vid.onmousemove = falseFn;

      // @event load: Event
      // Fired when the video has finished loading the first frame
      vid.onloadeddata = bind(this.fire, this, 'load');
      if (wasElementSupplied) {
        return;
      }
      if (!isArray(this._url)) {
        this._url = [this._url];
      }
      vid.autoplay = !!this.options.autoplay;
      vid.loop = !!this.options.loop;
      for (var i = 0; i < this._url.length; i++) {
        var source = create$1('source');
        source.src = this._url[i];
        vid.appendChild(source);
      }
    }

    // @method getElement(): HTMLVideoElement
    // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
    // used by this overlay.
  });

  // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
  // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
  // geographical bounds it is tied to.

  function videoOverlay(video, bounds, options) {
    return new VideoOverlay(video, bounds, options);
  }

  /*
   * @class DivOverlay
   * @inherits Layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
   */

  // @namespace DivOverlay
  var DivOverlay = Layer.extend({
    // @section
    // @aka DivOverlay options
    options: {
      // @option offset: Point = Point(0, 7)
      // The offset of the popup position. Useful to control the anchor
      // of the popup when opening it on some overlays.
      offset: [0, 7],
      // @option className: String = ''
      // A custom CSS class name to assign to the popup.
      className: '',
      // @option pane: String = 'popupPane'
      // `Map pane` where the popup will be added.
      pane: 'popupPane'
    },
    initialize: function initialize(options, source) {
      setOptions(this, options);
      this._source = source;
    },
    onAdd: function onAdd(map) {
      this._zoomAnimated = map._zoomAnimated;
      if (!this._container) {
        this._initLayout();
      }
      if (map._fadeAnimated) {
        _setOpacity(this._container, 0);
      }
      clearTimeout(this._removeTimeout);
      this.getPane().appendChild(this._container);
      this.update();
      if (map._fadeAnimated) {
        _setOpacity(this._container, 1);
      }
      this.bringToFront();
    },
    onRemove: function onRemove(map) {
      if (map._fadeAnimated) {
        _setOpacity(this._container, 0);
        this._removeTimeout = setTimeout(bind(_remove, undefined, this._container), 200);
      } else {
        _remove(this._container);
      }
    },
    // @namespace Popup
    // @method getLatLng: LatLng
    // Returns the geographical point of popup.
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    // @method setLatLng(latlng: LatLng): this
    // Sets the geographical point where the popup will open.
    setLatLng: function setLatLng(latlng) {
      this._latlng = toLatLng(latlng);
      if (this._map) {
        this._updatePosition();
        this._adjustPan();
      }
      return this;
    },
    // @method getContent: String|HTMLElement
    // Returns the content of the popup.
    getContent: function getContent() {
      return this._content;
    },
    // @method setContent(htmlContent: String|HTMLElement|Function): this
    // Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
    setContent: function setContent(content) {
      this._content = content;
      this.update();
      return this;
    },
    // @method getElement: String|HTMLElement
    // Alias for [getContent()](#popup-getcontent)
    getElement: function getElement() {
      return this._container;
    },
    // @method update: null
    // Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
    update: function update() {
      if (!this._map) {
        return;
      }
      this._container.style.visibility = 'hidden';
      this._updateContent();
      this._updateLayout();
      this._updatePosition();
      this._container.style.visibility = '';
      this._adjustPan();
    },
    getEvents: function getEvents() {
      var events = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }
      return events;
    },
    // @method isOpen: Boolean
    // Returns `true` when the popup is visible on the map.
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    // @method bringToFront: this
    // Brings this popup in front of other popups (in the same map pane).
    bringToFront: function bringToFront() {
      if (this._map) {
        toFront(this._container);
      }
      return this;
    },
    // @method bringToBack: this
    // Brings this popup to the back of other popups (in the same map pane).
    bringToBack: function bringToBack() {
      if (this._map) {
        toBack(this._container);
      }
      return this;
    },
    _updateContent: function _updateContent() {
      if (!this._content) {
        return;
      }
      var node = this._contentNode;
      var content = typeof this._content === 'function' ? this._content(this._source || this) : this._content;
      if (typeof content === 'string') {
        node.innerHTML = content;
      } else {
        while (node.hasChildNodes()) {
          node.removeChild(node.firstChild);
        }
        node.appendChild(content);
      }
      this.fire('contentupdate');
    },
    _updatePosition: function _updatePosition() {
      if (!this._map) {
        return;
      }
      var pos = this._map.latLngToLayerPoint(this._latlng),
        offset = toPoint(this.options.offset),
        anchor = this._getAnchor();
      if (this._zoomAnimated) {
        setPosition(this._container, pos.add(anchor));
      } else {
        offset = offset.add(pos).add(anchor);
      }
      var bottom = this._containerBottom = -offset.y,
        left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

      // bottom position the popup in case the height of the popup changes (images loading etc)
      this._container.style.bottom = bottom + 'px';
      this._container.style.left = left + 'px';
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  });

  /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   * Here's a more complicated way to open a popup on a map:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */

  // @namespace Popup
  var Popup = DivOverlay.extend({
    // @section
    // @aka Popup options
    options: {
      // @option maxWidth: Number = 300
      // Max width of the popup, in pixels.
      maxWidth: 300,
      // @option minWidth: Number = 50
      // Min width of the popup, in pixels.
      minWidth: 50,
      // @option maxHeight: Number = null
      // If set, creates a scrollable container of the given height
      // inside a popup if its content exceeds it.
      maxHeight: null,
      // @option autoPan: Boolean = true
      // Set it to `false` if you don't want the map to do panning animation
      // to fit the opened popup.
      autoPan: true,
      // @option autoPanPaddingTopLeft: Point = null
      // The margin between the popup and the top left corner of the map
      // view after autopanning was performed.
      autoPanPaddingTopLeft: null,
      // @option autoPanPaddingBottomRight: Point = null
      // The margin between the popup and the bottom right corner of the map
      // view after autopanning was performed.
      autoPanPaddingBottomRight: null,
      // @option autoPanPadding: Point = Point(5, 5)
      // Equivalent of setting both top left and bottom right autopan padding to the same value.
      autoPanPadding: [5, 5],
      // @option keepInView: Boolean = false
      // Set it to `true` if you want to prevent users from panning the popup
      // off of the screen while it is open.
      keepInView: false,
      // @option closeButton: Boolean = true
      // Controls the presence of a close button in the popup.
      closeButton: true,
      // @option autoClose: Boolean = true
      // Set it to `false` if you want to override the default behavior of
      // the popup closing when another popup is opened.
      autoClose: true,
      // @option closeOnClick: Boolean = *
      // Set it if you want to override the default behavior of the popup closing when user clicks
      // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

      // @option className: String = ''
      // A custom CSS class name to assign to the popup.
      className: ''
    },
    // @namespace Popup
    // @method openOn(map: Map): this
    // Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
    openOn: function openOn(map) {
      map.openPopup(this);
      return this;
    },
    onAdd: function onAdd(map) {
      DivOverlay.prototype.onAdd.call(this, map);

      // @namespace Map
      // @section Popup events
      // @event popupopen: PopupEvent
      // Fired when a popup is opened in the map
      map.fire('popupopen', {
        popup: this
      });
      if (this._source) {
        // @namespace Layer
        // @section Popup events
        // @event popupopen: PopupEvent
        // Fired when a popup bound to this layer is opened
        this._source.fire('popupopen', {
          popup: this
        }, true);
        // For non-path layers, we toggle the popup when clicking
        // again the layer, so prevent the map to reopen it.
        if (!(this._source instanceof Path)) {
          this._source.on('preclick', stopPropagation);
        }
      }
    },
    onRemove: function onRemove(map) {
      DivOverlay.prototype.onRemove.call(this, map);

      // @namespace Map
      // @section Popup events
      // @event popupclose: PopupEvent
      // Fired when a popup in the map is closed
      map.fire('popupclose', {
        popup: this
      });
      if (this._source) {
        // @namespace Layer
        // @section Popup events
        // @event popupclose: PopupEvent
        // Fired when a popup bound to this layer is closed
        this._source.fire('popupclose', {
          popup: this
        }, true);
        if (!(this._source instanceof Path)) {
          this._source.off('preclick', stopPropagation);
        }
      }
    },
    getEvents: function getEvents() {
      var events = DivOverlay.prototype.getEvents.call(this);
      if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
        events.preclick = this._close;
      }
      if (this.options.keepInView) {
        events.moveend = this._adjustPan;
      }
      return events;
    },
    _close: function _close() {
      if (this._map) {
        this._map.closePopup(this);
      }
    },
    _initLayout: function _initLayout() {
      var prefix = 'leaflet-popup',
        container = this._container = create$1('div', prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-animated');
      var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
      this._contentNode = create$1('div', prefix + '-content', wrapper);
      disableClickPropagation(wrapper);
      disableScrollPropagation(this._contentNode);
      on(wrapper, 'contextmenu', stopPropagation);
      this._tipContainer = create$1('div', prefix + '-tip-container', container);
      this._tip = create$1('div', prefix + '-tip', this._tipContainer);
      if (this.options.closeButton) {
        var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
        closeButton.href = '#close';
        closeButton.innerHTML = '&#215;';
        on(closeButton, 'click', this._onCloseButtonClick, this);
      }
    },
    _updateLayout: function _updateLayout() {
      var container = this._contentNode,
        style = container.style;
      style.width = '';
      style.whiteSpace = 'nowrap';
      var width = container.offsetWidth;
      width = Math.min(width, this.options.maxWidth);
      width = Math.max(width, this.options.minWidth);
      style.width = width + 1 + 'px';
      style.whiteSpace = '';
      style.height = '';
      var height = container.offsetHeight,
        maxHeight = this.options.maxHeight,
        scrolledClass = 'leaflet-popup-scrolled';
      if (maxHeight && height > maxHeight) {
        style.height = maxHeight + 'px';
        addClass(container, scrolledClass);
      } else {
        removeClass(container, scrolledClass);
      }
      this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
        anchor = this._getAnchor();
      setPosition(this._container, pos.add(anchor));
    },
    _adjustPan: function _adjustPan() {
      if (!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress) {
        return;
      }
      var map = this._map,
        marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
        containerHeight = this._container.offsetHeight + marginBottom,
        containerWidth = this._containerWidth,
        layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
      layerPos._add(getPosition(this._container));
      var containerPos = map.layerPointToContainerPoint(layerPos),
        padding = toPoint(this.options.autoPanPadding),
        paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
        paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
        size = map.getSize(),
        dx = 0,
        dy = 0;
      if (containerPos.x + containerWidth + paddingBR.x > size.x) {
        // right
        dx = containerPos.x + containerWidth - size.x + paddingBR.x;
      }
      if (containerPos.x - dx - paddingTL.x < 0) {
        // left
        dx = containerPos.x - paddingTL.x;
      }
      if (containerPos.y + containerHeight + paddingBR.y > size.y) {
        // bottom
        dy = containerPos.y + containerHeight - size.y + paddingBR.y;
      }
      if (containerPos.y - dy - paddingTL.y < 0) {
        // top
        dy = containerPos.y - paddingTL.y;
      }

      // @namespace Map
      // @section Popup events
      // @event autopanstart: Event
      // Fired when the map starts autopanning when opening a popup.
      if (dx || dy) {
        map.fire('autopanstart').panBy([dx, dy]);
      }
    },
    _onCloseButtonClick: function _onCloseButtonClick(e) {
      this._close();
      stop(e);
    },
    _getAnchor: function _getAnchor() {
      // Where should we anchor the popup on the source layer?
      return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  });

  // @namespace Popup
  // @factory L.popup(options?: Popup options, source?: Layer)
  // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
  var popup = function popup(options, source) {
    return new Popup(options, source);
  };

  /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */
  Map.mergeOptions({
    closePopupOnClick: true
  });

  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({
    // @method openPopup(popup: Popup): this
    // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
    // @alternative
    // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
    // Creates a popup with the specified content and options and opens it in the given point on a map.
    openPopup: function openPopup(popup, latlng, options) {
      if (!(popup instanceof Popup)) {
        popup = new Popup(options).setContent(popup);
      }
      if (latlng) {
        popup.setLatLng(latlng);
      }
      if (this.hasLayer(popup)) {
        return this;
      }
      if (this._popup && this._popup.options.autoClose) {
        this.closePopup();
      }
      this._popup = popup;
      return this.addLayer(popup);
    },
    // @method closePopup(popup?: Popup): this
    // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
    closePopup: function closePopup(popup) {
      if (!popup || popup === this._popup) {
        popup = this._popup;
        this._popup = null;
      }
      if (popup) {
        this.removeLayer(popup);
      }
      return this;
    }
  });

  /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */

  // @section Popup methods
  Layer.include({
    // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
    // Binds a popup to the layer with the passed `content` and sets up the
    // necessary event listeners. If a `Function` is passed it will receive
    // the layer as the first argument and should return a `String` or `HTMLElement`.
    bindPopup: function bindPopup(content, options) {
      if (content instanceof Popup) {
        setOptions(content, options);
        this._popup = content;
        content._source = this;
      } else {
        if (!this._popup || options) {
          this._popup = new Popup(options, this);
        }
        this._popup.setContent(content);
      }
      if (!this._popupHandlersAdded) {
        this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = true;
      }
      return this;
    },
    // @method unbindPopup(): this
    // Removes the popup previously bound with `bindPopup`.
    unbindPopup: function unbindPopup() {
      if (this._popup) {
        this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = false;
        this._popup = null;
      }
      return this;
    },
    // @method openPopup(latlng?: LatLng): this
    // Opens the bound popup at the specificed `latlng` or at the default popup anchor if no `latlng` is passed.
    openPopup: function openPopup(layer, latlng) {
      if (!(layer instanceof Layer)) {
        latlng = layer;
        layer = this;
      }
      if (layer instanceof FeatureGroup) {
        for (var id in this._layers) {
          layer = this._layers[id];
          break;
        }
      }
      if (!latlng) {
        latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
      }
      if (this._popup && this._map) {
        // set popup source to this layer
        this._popup._source = layer;

        // update the popup (content, layout, ect...)
        this._popup.update();

        // open the popup on the map
        this._map.openPopup(this._popup, latlng);
      }
      return this;
    },
    // @method closePopup(): this
    // Closes the popup bound to this layer if it is open.
    closePopup: function closePopup() {
      if (this._popup) {
        this._popup._close();
      }
      return this;
    },
    // @method togglePopup(): this
    // Opens or closes the popup bound to this layer depending on its current state.
    togglePopup: function togglePopup(target) {
      if (this._popup) {
        if (this._popup._map) {
          this.closePopup();
        } else {
          this.openPopup(target);
        }
      }
      return this;
    },
    // @method isPopupOpen(): boolean
    // Returns `true` if the popup bound to this layer is currently open.
    isPopupOpen: function isPopupOpen() {
      return this._popup ? this._popup.isOpen() : false;
    },
    // @method setPopupContent(content: String|HTMLElement|Popup): this
    // Sets the content of the popup bound to this layer.
    setPopupContent: function setPopupContent(content) {
      if (this._popup) {
        this._popup.setContent(content);
      }
      return this;
    },
    // @method getPopup(): Popup
    // Returns the popup bound to this layer.
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(e) {
      var layer = e.layer || e.target;
      if (!this._popup) {
        return;
      }
      if (!this._map) {
        return;
      }

      // prevent map click
      stop(e);

      // if this inherits from Path its a vector and we can just
      // open the popup at the new location
      if (layer instanceof Path) {
        this.openPopup(e.layer || e.target, e.latlng);
        return;
      }

      // otherwise treat it like a marker and figure out
      // if we should toggle it open/closed
      if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
        this.closePopup();
      } else {
        this.openPopup(layer, e.latlng);
      }
    },
    _movePopup: function _movePopup(e) {
      this._popup.setLatLng(e.latlng);
    },
    _onKeyPress: function _onKeyPress(e) {
      if (e.originalEvent.keyCode === 13) {
        this._openPopup(e);
      }
    }
  });

  /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offseting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */

  // @namespace Tooltip
  var Tooltip = DivOverlay.extend({
    // @section
    // @aka Tooltip options
    options: {
      // @option pane: String = 'tooltipPane'
      // `Map pane` where the tooltip will be added.
      pane: 'tooltipPane',
      // @option offset: Point = Point(0, 0)
      // Optional offset of the tooltip position.
      offset: [0, 0],
      // @option direction: String = 'auto'
      // Direction where to open the tooltip. Possible values are: `right`, `left`,
      // `top`, `bottom`, `center`, `auto`.
      // `auto` will dynamicaly switch between `right` and `left` according to the tooltip
      // position on the map.
      direction: 'auto',
      // @option permanent: Boolean = false
      // Whether to open the tooltip permanently or only on mouseover.
      permanent: false,
      // @option sticky: Boolean = false
      // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
      sticky: false,
      // @option interactive: Boolean = false
      // If true, the tooltip will listen to the feature events.
      interactive: false,
      // @option opacity: Number = 0.9
      // Tooltip container opacity.
      opacity: 0.9
    },
    onAdd: function onAdd(map) {
      DivOverlay.prototype.onAdd.call(this, map);
      this.setOpacity(this.options.opacity);

      // @namespace Map
      // @section Tooltip events
      // @event tooltipopen: TooltipEvent
      // Fired when a tooltip is opened in the map.
      map.fire('tooltipopen', {
        tooltip: this
      });
      if (this._source) {
        // @namespace Layer
        // @section Tooltip events
        // @event tooltipopen: TooltipEvent
        // Fired when a tooltip bound to this layer is opened.
        this._source.fire('tooltipopen', {
          tooltip: this
        }, true);
      }
    },
    onRemove: function onRemove(map) {
      DivOverlay.prototype.onRemove.call(this, map);

      // @namespace Map
      // @section Tooltip events
      // @event tooltipclose: TooltipEvent
      // Fired when a tooltip in the map is closed.
      map.fire('tooltipclose', {
        tooltip: this
      });
      if (this._source) {
        // @namespace Layer
        // @section Tooltip events
        // @event tooltipclose: TooltipEvent
        // Fired when a tooltip bound to this layer is closed.
        this._source.fire('tooltipclose', {
          tooltip: this
        }, true);
      }
    },
    getEvents: function getEvents() {
      var events = DivOverlay.prototype.getEvents.call(this);
      if (touch && !this.options.permanent) {
        events.preclick = this._close;
      }
      return events;
    },
    _close: function _close() {
      if (this._map) {
        this._map.closeTooltip(this);
      }
    },
    _initLayout: function _initLayout() {
      var prefix = 'leaflet-tooltip',
        className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      this._contentNode = this._container = create$1('div', className);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(pos) {
      var map = this._map,
        container = this._container,
        centerPoint = map.latLngToContainerPoint(map.getCenter()),
        tooltipPoint = map.layerPointToContainerPoint(pos),
        direction = this.options.direction,
        tooltipWidth = container.offsetWidth,
        tooltipHeight = container.offsetHeight,
        offset = toPoint(this.options.offset),
        anchor = this._getAnchor();
      if (direction === 'top') {
        pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
      } else if (direction === 'bottom') {
        pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
      } else if (direction === 'center') {
        pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
      } else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
        direction = 'right';
        pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
      } else {
        direction = 'left';
        pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
      }
      removeClass(container, 'leaflet-tooltip-right');
      removeClass(container, 'leaflet-tooltip-left');
      removeClass(container, 'leaflet-tooltip-top');
      removeClass(container, 'leaflet-tooltip-bottom');
      addClass(container, 'leaflet-tooltip-' + direction);
      setPosition(container, pos);
    },
    _updatePosition: function _updatePosition() {
      var pos = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(pos);
    },
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      if (this._container) {
        _setOpacity(this._container, opacity);
      }
    },
    _animateZoom: function _animateZoom(e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
      this._setPosition(pos);
    },
    _getAnchor: function _getAnchor() {
      // Where should we anchor the tooltip on the source layer?
      return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  });

  // @namespace Tooltip
  // @factory L.tooltip(options?: Tooltip options, source?: Layer)
  // Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
  var tooltip = function tooltip(options, source) {
    return new Tooltip(options, source);
  };

  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({
    // @method openTooltip(tooltip: Tooltip): this
    // Opens the specified tooltip.
    // @alternative
    // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
    // Creates a tooltip with the specified content and options and open it.
    openTooltip: function openTooltip(tooltip, latlng, options) {
      if (!(tooltip instanceof Tooltip)) {
        tooltip = new Tooltip(options).setContent(tooltip);
      }
      if (latlng) {
        tooltip.setLatLng(latlng);
      }
      if (this.hasLayer(tooltip)) {
        return this;
      }
      return this.addLayer(tooltip);
    },
    // @method closeTooltip(tooltip?: Tooltip): this
    // Closes the tooltip given as parameter.
    closeTooltip: function closeTooltip(tooltip) {
      if (tooltip) {
        this.removeLayer(tooltip);
      }
      return this;
    }
  });

  /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */

  // @section Tooltip methods
  Layer.include({
    // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
    // Binds a tooltip to the layer with the passed `content` and sets up the
    // necessary event listeners. If a `Function` is passed it will receive
    // the layer as the first argument and should return a `String` or `HTMLElement`.
    bindTooltip: function bindTooltip(content, options) {
      if (content instanceof Tooltip) {
        setOptions(content, options);
        this._tooltip = content;
        content._source = this;
      } else {
        if (!this._tooltip || options) {
          this._tooltip = new Tooltip(options, this);
        }
        this._tooltip.setContent(content);
      }
      this._initTooltipInteractions();
      if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
        this.openTooltip();
      }
      return this;
    },
    // @method unbindTooltip(): this
    // Removes the tooltip previously bound with `bindTooltip`.
    unbindTooltip: function unbindTooltip() {
      if (this._tooltip) {
        this._initTooltipInteractions(true);
        this.closeTooltip();
        this._tooltip = null;
      }
      return this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(remove$$1) {
      if (!remove$$1 && this._tooltipHandlersAdded) {
        return;
      }
      var onOff = remove$$1 ? 'off' : 'on',
        events = {
          remove: this.closeTooltip,
          move: this._moveTooltip
        };
      if (!this._tooltip.options.permanent) {
        events.mouseover = this._openTooltip;
        events.mouseout = this.closeTooltip;
        if (this._tooltip.options.sticky) {
          events.mousemove = this._moveTooltip;
        }
        if (touch) {
          events.click = this._openTooltip;
        }
      } else {
        events.add = this._openTooltip;
      }
      this[onOff](events);
      this._tooltipHandlersAdded = !remove$$1;
    },
    // @method openTooltip(latlng?: LatLng): this
    // Opens the bound tooltip at the specificed `latlng` or at the default tooltip anchor if no `latlng` is passed.
    openTooltip: function openTooltip(layer, latlng) {
      if (!(layer instanceof Layer)) {
        latlng = layer;
        layer = this;
      }
      if (layer instanceof FeatureGroup) {
        for (var id in this._layers) {
          layer = this._layers[id];
          break;
        }
      }
      if (!latlng) {
        latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
      }
      if (this._tooltip && this._map) {
        // set tooltip source to this layer
        this._tooltip._source = layer;

        // update the tooltip (content, layout, ect...)
        this._tooltip.update();

        // open the tooltip on the map
        this._map.openTooltip(this._tooltip, latlng);

        // Tooltip container may not be defined if not permanent and never
        // opened.
        if (this._tooltip.options.interactive && this._tooltip._container) {
          addClass(this._tooltip._container, 'leaflet-clickable');
          this.addInteractiveTarget(this._tooltip._container);
        }
      }
      return this;
    },
    // @method closeTooltip(): this
    // Closes the tooltip bound to this layer if it is open.
    closeTooltip: function closeTooltip() {
      if (this._tooltip) {
        this._tooltip._close();
        if (this._tooltip.options.interactive && this._tooltip._container) {
          removeClass(this._tooltip._container, 'leaflet-clickable');
          this.removeInteractiveTarget(this._tooltip._container);
        }
      }
      return this;
    },
    // @method toggleTooltip(): this
    // Opens or closes the tooltip bound to this layer depending on its current state.
    toggleTooltip: function toggleTooltip(target) {
      if (this._tooltip) {
        if (this._tooltip._map) {
          this.closeTooltip();
        } else {
          this.openTooltip(target);
        }
      }
      return this;
    },
    // @method isTooltipOpen(): boolean
    // Returns `true` if the tooltip bound to this layer is currently open.
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
    // Sets the content of the tooltip bound to this layer.
    setTooltipContent: function setTooltipContent(content) {
      if (this._tooltip) {
        this._tooltip.setContent(content);
      }
      return this;
    },
    // @method getTooltip(): Tooltip
    // Returns the tooltip bound to this layer.
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(e) {
      var layer = e.layer || e.target;
      if (!this._tooltip || !this._map) {
        return;
      }
      this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
    },
    _moveTooltip: function _moveTooltip(e) {
      var latlng = e.latlng,
        containerPoint,
        layerPoint;
      if (this._tooltip.options.sticky && e.originalEvent) {
        containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
        layerPoint = this._map.containerPointToLayerPoint(containerPoint);
        latlng = this._map.layerPointToLatLng(layerPoint);
      }
      this._tooltip.setLatLng(latlng);
    }
  });

  /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */

  var DivIcon = Icon.extend({
    options: {
      // @section
      // @aka DivIcon options
      iconSize: [12, 12],
      // also can be set through CSS

      // iconAnchor: (Point),
      // popupAnchor: (Point),

      // @option html: String = ''
      // Custom HTML code to put inside the div element, empty by default.
      html: false,
      // @option bgPos: Point = [0, 0]
      // Optional relative position of the background, in pixels
      bgPos: null,
      className: 'leaflet-div-icon'
    },
    createIcon: function createIcon(oldIcon) {
      var div = oldIcon && oldIcon.tagName === 'DIV' ? oldIcon : document.createElement('div'),
        options = this.options;
      div.innerHTML = options.html !== false ? options.html : '';
      if (options.bgPos) {
        var bgPos = toPoint(options.bgPos);
        div.style.backgroundPosition = -bgPos.x + 'px ' + -bgPos.y + 'px';
      }
      this._setIconStyles(div, 'icon');
      return div;
    },
    createShadow: function createShadow() {
      return null;
    }
  });

  // @factory L.divIcon(options: DivIcon options)
  // Creates a `DivIcon` instance with the given options.
  function divIcon(options) {
    return new DivIcon(options);
  }
  Icon.Default = IconDefault;

  /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */

  var GridLayer = Layer.extend({
    // @section
    // @aka GridLayer options
    options: {
      // @option tileSize: Number|Point = 256
      // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
      tileSize: 256,
      // @option opacity: Number = 1.0
      // Opacity of the tiles. Can be used in the `createTile()` function.
      opacity: 1,
      // @option updateWhenIdle: Boolean = (depends)
      // Load new tiles only when panning ends.
      // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
      // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
      // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
      updateWhenIdle: mobile,
      // @option updateWhenZooming: Boolean = true
      // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
      updateWhenZooming: true,
      // @option updateInterval: Number = 200
      // Tiles will not update more than once every `updateInterval` milliseconds when panning.
      updateInterval: 200,
      // @option zIndex: Number = 1
      // The explicit zIndex of the tile layer.
      zIndex: 1,
      // @option bounds: LatLngBounds = undefined
      // If set, tiles will only be loaded inside the set `LatLngBounds`.
      bounds: null,
      // @option minZoom: Number = 0
      // The minimum zoom level down to which this layer will be displayed (inclusive).
      minZoom: 0,
      // @option maxZoom: Number = undefined
      // The maximum zoom level up to which this layer will be displayed (inclusive).
      maxZoom: undefined,
      // @option maxNativeZoom: Number = undefined
      // Maximum zoom number the tile source has available. If it is specified,
      // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
      // from `maxNativeZoom` level and auto-scaled.
      maxNativeZoom: undefined,
      // @option minNativeZoom: Number = undefined
      // Minimum zoom number the tile source has available. If it is specified,
      // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
      // from `minNativeZoom` level and auto-scaled.
      minNativeZoom: undefined,
      // @option noWrap: Boolean = false
      // Whether the layer is wrapped around the antimeridian. If `true`, the
      // GridLayer will only be displayed once at low zoom levels. Has no
      // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
      // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
      // tiles outside the CRS limits.
      noWrap: false,
      // @option pane: String = 'tilePane'
      // `Map pane` where the grid layer will be added.
      pane: 'tilePane',
      // @option className: String = ''
      // A custom class name to assign to the tile layer. Empty by default.
      className: '',
      // @option keepBuffer: Number = 2
      // When panning the map, keep this many rows and columns of tiles before unloading them.
      keepBuffer: 2
    },
    initialize: function initialize(options) {
      setOptions(this, options);
    },
    onAdd: function onAdd() {
      this._initContainer();
      this._levels = {};
      this._tiles = {};
      this._resetView();
      this._update();
    },
    beforeAdd: function beforeAdd(map) {
      map._addZoomLimit(this);
    },
    onRemove: function onRemove(map) {
      this._removeAllTiles();
      _remove(this._container);
      map._removeZoomLimit(this);
      this._container = null;
      this._tileZoom = null;
    },
    // @method bringToFront: this
    // Brings the tile layer to the top of all tile layers.
    bringToFront: function bringToFront() {
      if (this._map) {
        toFront(this._container);
        this._setAutoZIndex(Math.max);
      }
      return this;
    },
    // @method bringToBack: this
    // Brings the tile layer to the bottom of all tile layers.
    bringToBack: function bringToBack() {
      if (this._map) {
        toBack(this._container);
        this._setAutoZIndex(Math.min);
      }
      return this;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the tiles for this layer.
    getContainer: function getContainer() {
      return this._container;
    },
    // @method setOpacity(opacity: Number): this
    // Changes the [opacity](#gridlayer-opacity) of the grid layer.
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;
      this._updateOpacity();
      return this;
    },
    // @method setZIndex(zIndex: Number): this
    // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
    setZIndex: function setZIndex(zIndex) {
      this.options.zIndex = zIndex;
      this._updateZIndex();
      return this;
    },
    // @method isLoading: Boolean
    // Returns `true` if any tile in the grid layer has not finished loading.
    isLoading: function isLoading() {
      return this._loading;
    },
    // @method redraw: this
    // Causes the layer to clear all the tiles and request them again.
    redraw: function redraw() {
      if (this._map) {
        this._removeAllTiles();
        this._update();
      }
      return this;
    },
    getEvents: function getEvents() {
      var events = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      if (!this.options.updateWhenIdle) {
        // update tiles on move, but not more often than once per given interval
        if (!this._onMove) {
          this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
        }
        events.move = this._onMove;
      }
      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }
      return events;
    },
    // @section Extension methods
    // Layers extending `GridLayer` shall reimplement the following method.
    // @method createTile(coords: Object, done?: Function): HTMLElement
    // Called only internally, must be overriden by classes extending `GridLayer`.
    // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
    // is specified, it must be called when the tile has finished loading and drawing.
    createTile: function createTile() {
      return document.createElement('div');
    },
    // @section
    // @method getTileSize: Point
    // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
    getTileSize: function getTileSize() {
      var s = this.options.tileSize;
      return s instanceof Point ? s : new Point(s, s);
    },
    _updateZIndex: function _updateZIndex() {
      if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._container.style.zIndex = this.options.zIndex;
      }
    },
    _setAutoZIndex: function _setAutoZIndex(compare) {
      // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

      var layers = this.getPane().children,
        edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

      for (var i = 0, len = layers.length, zIndex; i < len; i++) {
        zIndex = layers[i].style.zIndex;
        if (layers[i] !== this._container && zIndex) {
          edgeZIndex = compare(edgeZIndex, +zIndex);
        }
      }
      if (isFinite(edgeZIndex)) {
        this.options.zIndex = edgeZIndex + compare(-1, 1);
        this._updateZIndex();
      }
    },
    _updateOpacity: function _updateOpacity() {
      if (!this._map) {
        return;
      }

      // IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
      if (ielt9) {
        return;
      }
      _setOpacity(this._container, this.options.opacity);
      var now = +new Date(),
        nextFrame = false,
        willPrune = false;
      for (var key in this._tiles) {
        var tile = this._tiles[key];
        if (!tile.current || !tile.loaded) {
          continue;
        }
        var fade = Math.min(1, (now - tile.loaded) / 200);
        _setOpacity(tile.el, fade);
        if (fade < 1) {
          nextFrame = true;
        } else {
          if (tile.active) {
            willPrune = true;
          } else {
            this._onOpaqueTile(tile);
          }
          tile.active = true;
        }
      }
      if (willPrune && !this._noPrune) {
        this._pruneTiles();
      }
      if (nextFrame) {
        cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
      }
    },
    _onOpaqueTile: falseFn,
    _initContainer: function _initContainer() {
      if (this._container) {
        return;
      }
      this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
      this._updateZIndex();
      if (this.options.opacity < 1) {
        this._updateOpacity();
      }
      this.getPane().appendChild(this._container);
    },
    _updateLevels: function _updateLevels() {
      var zoom = this._tileZoom,
        maxZoom = this.options.maxZoom;
      if (zoom === undefined) {
        return undefined;
      }
      for (var z in this._levels) {
        if (this._levels[z].el.children.length || z === zoom) {
          this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
          this._onUpdateLevel(z);
        } else {
          _remove(this._levels[z].el);
          this._removeTilesAtZoom(z);
          this._onRemoveLevel(z);
          delete this._levels[z];
        }
      }
      var level = this._levels[zoom],
        map = this._map;
      if (!level) {
        level = this._levels[zoom] = {};
        level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
        level.el.style.zIndex = maxZoom;
        level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
        level.zoom = zoom;
        this._setZoomTransform(level, map.getCenter(), map.getZoom());

        // force the browser to consider the newly added element for transition
        falseFn(level.el.offsetWidth);
        this._onCreateLevel(level);
      }
      this._level = level;
      return level;
    },
    _onUpdateLevel: falseFn,
    _onRemoveLevel: falseFn,
    _onCreateLevel: falseFn,
    _pruneTiles: function _pruneTiles() {
      if (!this._map) {
        return;
      }
      var key, tile;
      var zoom = this._map.getZoom();
      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        this._removeAllTiles();
        return;
      }
      for (key in this._tiles) {
        tile = this._tiles[key];
        tile.retain = tile.current;
      }
      for (key in this._tiles) {
        tile = this._tiles[key];
        if (tile.current && !tile.active) {
          var coords = tile.coords;
          if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
            this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
          }
        }
      }
      for (key in this._tiles) {
        if (!this._tiles[key].retain) {
          this._removeTile(key);
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(zoom) {
      for (var key in this._tiles) {
        if (this._tiles[key].coords.z !== zoom) {
          continue;
        }
        this._removeTile(key);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var key in this._tiles) {
        this._removeTile(key);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var z in this._levels) {
        _remove(this._levels[z].el);
        this._onRemoveLevel(z);
        delete this._levels[z];
      }
      this._removeAllTiles();
      this._tileZoom = null;
    },
    _retainParent: function _retainParent(x, y, z, minZoom) {
      var x2 = Math.floor(x / 2),
        y2 = Math.floor(y / 2),
        z2 = z - 1,
        coords2 = new Point(+x2, +y2);
      coords2.z = +z2;
      var key = this._tileCoordsToKey(coords2),
        tile = this._tiles[key];
      if (tile && tile.active) {
        tile.retain = true;
        return true;
      } else if (tile && tile.loaded) {
        tile.retain = true;
      }
      if (z2 > minZoom) {
        return this._retainParent(x2, y2, z2, minZoom);
      }
      return false;
    },
    _retainChildren: function _retainChildren(x, y, z, maxZoom) {
      for (var i = 2 * x; i < 2 * x + 2; i++) {
        for (var j = 2 * y; j < 2 * y + 2; j++) {
          var coords = new Point(i, j);
          coords.z = z + 1;
          var key = this._tileCoordsToKey(coords),
            tile = this._tiles[key];
          if (tile && tile.active) {
            tile.retain = true;
            continue;
          } else if (tile && tile.loaded) {
            tile.retain = true;
          }
          if (z + 1 < maxZoom) {
            this._retainChildren(i, j, z + 1, maxZoom);
          }
        }
      }
    },
    _resetView: function _resetView(e) {
      var animating = e && (e.pinch || e.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
    },
    _animateZoom: function _animateZoom(e) {
      this._setView(e.center, e.zoom, true, e.noUpdate);
    },
    _clampZoom: function _clampZoom(zoom) {
      var options = this.options;
      if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
        return options.minNativeZoom;
      }
      if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
        return options.maxNativeZoom;
      }
      return zoom;
    },
    _setView: function _setView(center, zoom, noPrune, noUpdate) {
      var tileZoom = this._clampZoom(Math.round(zoom));
      if (this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom || this.options.minZoom !== undefined && tileZoom < this.options.minZoom) {
        tileZoom = undefined;
      }
      var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
      if (!noUpdate || tileZoomChanged) {
        this._tileZoom = tileZoom;
        if (this._abortLoading) {
          this._abortLoading();
        }
        this._updateLevels();
        this._resetGrid();
        if (tileZoom !== undefined) {
          this._update(center);
        }
        if (!noPrune) {
          this._pruneTiles();
        }

        // Flag to prevent _updateOpacity from pruning tiles during
        // a zoom anim or a pinch gesture
        this._noPrune = !!noPrune;
      }
      this._setZoomTransforms(center, zoom);
    },
    _setZoomTransforms: function _setZoomTransforms(center, zoom) {
      for (var i in this._levels) {
        this._setZoomTransform(this._levels[i], center, zoom);
      }
    },
    _setZoomTransform: function _setZoomTransform(level, center, zoom) {
      var scale = this._map.getZoomScale(zoom, level.zoom),
        translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();
      if (any3d) {
        setTransform(level.el, translate, scale);
      } else {
        setPosition(level.el, translate);
      }
    },
    _resetGrid: function _resetGrid() {
      var map = this._map,
        crs = map.options.crs,
        tileSize = this._tileSize = this.getTileSize(),
        tileZoom = this._tileZoom;
      var bounds = this._map.getPixelWorldBounds(this._tileZoom);
      if (bounds) {
        this._globalTileRange = this._pxBoundsToTileRange(bounds);
      }
      this._wrapX = crs.wrapLng && !this.options.noWrap && [Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x), Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)];
      this._wrapY = crs.wrapLat && !this.options.noWrap && [Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x), Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      if (!this._map || this._map._animatingZoom) {
        return;
      }
      this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(center) {
      var map = this._map,
        mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
        scale = map.getZoomScale(mapZoom, this._tileZoom),
        pixelCenter = map.project(center, this._tileZoom).floor(),
        halfSize = map.getSize().divideBy(scale * 2);
      return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
    },
    // Private method to load tiles in the grid's active zoom level according to map bounds
    _update: function _update(center) {
      var map = this._map;
      if (!map) {
        return;
      }
      var zoom = this._clampZoom(map.getZoom());
      if (center === undefined) {
        center = map.getCenter();
      }
      if (this._tileZoom === undefined) {
        return;
      } // if out of minzoom/maxzoom

      var pixelBounds = this._getTiledPixelBounds(center),
        tileRange = this._pxBoundsToTileRange(pixelBounds),
        tileCenter = tileRange.getCenter(),
        queue = [],
        margin = this.options.keepBuffer,
        noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]), tileRange.getTopRight().add([margin, -margin]));

      // Sanity check: panic if the tile range contains Infinity somewhere.
      if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
        throw new Error('Attempted to load an infinite number of tiles');
      }
      for (var key in this._tiles) {
        var c = this._tiles[key].coords;
        if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
          this._tiles[key].current = false;
        }
      }

      // _update just loads more tiles. If the tile zoom level differs too much
      // from the map's, let _setView reset levels and prune old tiles.
      if (Math.abs(zoom - this._tileZoom) > 1) {
        this._setView(center, zoom);
        return;
      }

      // create a queue of coordinates to load tiles from
      for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
        for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
          var coords = new Point(i, j);
          coords.z = this._tileZoom;
          if (!this._isValidTile(coords)) {
            continue;
          }
          if (!this._tiles[this._tileCoordsToKey(coords)]) {
            queue.push(coords);
          }
        }
      }

      // sort tile queue to load tiles in order of their distance to center
      queue.sort(function (a, b) {
        return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
      });
      if (queue.length !== 0) {
        // if it's the first batch of tiles to load
        if (!this._loading) {
          this._loading = true;
          // @event loading: Event
          // Fired when the grid layer starts loading tiles.
          this.fire('loading');
        }

        // create DOM fragment to append tiles in one batch
        var fragment = document.createDocumentFragment();
        for (i = 0; i < queue.length; i++) {
          this._addTile(queue[i], fragment);
        }
        this._level.el.appendChild(fragment);
      }
    },
    _isValidTile: function _isValidTile(coords) {
      var crs = this._map.options.crs;
      if (!crs.infinite) {
        // don't load tile if it's out of bounds and not wrapped
        var bounds = this._globalTileRange;
        if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
          return false;
        }
      }
      if (!this.options.bounds) {
        return true;
      }

      // don't load tile if it doesn't intersect the bounds in options
      var tileBounds = this._tileCoordsToBounds(coords);
      return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
    },
    _keyToBounds: function _keyToBounds(key) {
      return this._tileCoordsToBounds(this._keyToTileCoords(key));
    },
    // converts tile coordinates to its geographical bounds
    _tileCoordsToBounds: function _tileCoordsToBounds(coords) {
      var map = this._map,
        tileSize = this.getTileSize(),
        nwPoint = coords.scaleBy(tileSize),
        sePoint = nwPoint.add(tileSize),
        nw = map.unproject(nwPoint, coords.z),
        se = map.unproject(sePoint, coords.z),
        bounds = new LatLngBounds(nw, se);
      if (!this.options.noWrap) {
        map.wrapLatLngBounds(bounds);
      }
      return bounds;
    },
    // converts tile coordinates to key for the tile cache
    _tileCoordsToKey: function _tileCoordsToKey(coords) {
      return coords.x + ':' + coords.y + ':' + coords.z;
    },
    // converts tile cache key to coordinates
    _keyToTileCoords: function _keyToTileCoords(key) {
      var k = key.split(':'),
        coords = new Point(+k[0], +k[1]);
      coords.z = +k[2];
      return coords;
    },
    _removeTile: function _removeTile(key) {
      var tile = this._tiles[key];
      if (!tile) {
        return;
      }
      _remove(tile.el);
      delete this._tiles[key];

      // @event tileunload: TileEvent
      // Fired when a tile is removed (e.g. when a tile goes off the screen).
      this.fire('tileunload', {
        tile: tile.el,
        coords: this._keyToTileCoords(key)
      });
    },
    _initTile: function _initTile(tile) {
      addClass(tile, 'leaflet-tile');
      var tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 'px';
      tile.style.height = tileSize.y + 'px';
      tile.onselectstart = falseFn;
      tile.onmousemove = falseFn;

      // update opacity on tiles in IE7-8 because of filter inheritance problems
      if (ielt9 && this.options.opacity < 1) {
        _setOpacity(tile, this.options.opacity);
      }

      // without this hack, tiles disappear after zoom on Chrome for Android
      // https://github.com/Leaflet/Leaflet/issues/2078
      if (android && !android23) {
        tile.style.WebkitBackfaceVisibility = 'hidden';
      }
    },
    _addTile: function _addTile(coords, container) {
      var tilePos = this._getTilePos(coords),
        key = this._tileCoordsToKey(coords);
      var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));
      this._initTile(tile);

      // if createTile is defined with a second argument ("done" callback),
      // we know that tile is async and will be ready later; otherwise
      if (this.createTile.length < 2) {
        // mark tile as ready, but delay one frame for opacity animation to happen
        requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
      }
      setPosition(tile, tilePos);

      // save tile in cache
      this._tiles[key] = {
        el: tile,
        coords: coords,
        current: true
      };
      container.appendChild(tile);
      // @event tileloadstart: TileEvent
      // Fired when a tile is requested and starts loading.
      this.fire('tileloadstart', {
        tile: tile,
        coords: coords
      });
    },
    _tileReady: function _tileReady(coords, err, tile) {
      if (!this._map) {
        return;
      }
      if (err) {
        // @event tileerror: TileErrorEvent
        // Fired when there is an error loading a tile.
        this.fire('tileerror', {
          error: err,
          tile: tile,
          coords: coords
        });
      }
      var key = this._tileCoordsToKey(coords);
      tile = this._tiles[key];
      if (!tile) {
        return;
      }
      tile.loaded = +new Date();
      if (this._map._fadeAnimated) {
        _setOpacity(tile.el, 0);
        cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
      } else {
        tile.active = true;
        this._pruneTiles();
      }
      if (!err) {
        addClass(tile.el, 'leaflet-tile-loaded');

        // @event tileload: TileEvent
        // Fired when a tile loads.
        this.fire('tileload', {
          tile: tile.el,
          coords: coords
        });
      }
      if (this._noTilesToLoad()) {
        this._loading = false;
        // @event load: Event
        // Fired when the grid layer loaded all visible tiles.
        this.fire('load');
        if (ielt9 || !this._map._fadeAnimated) {
          requestAnimFrame(this._pruneTiles, this);
        } else {
          // Wait a bit more than 0.2 secs (the duration of the tile fade-in)
          // to trigger a pruning.
          setTimeout(bind(this._pruneTiles, this), 250);
        }
      }
    },
    _getTilePos: function _getTilePos(coords) {
      return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(coords) {
      var newCoords = new Point(this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
      newCoords.z = coords.z;
      return newCoords;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(bounds) {
      var tileSize = this.getTileSize();
      return new Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var key in this._tiles) {
        if (!this._tiles[key].loaded) {
          return false;
        }
      }
      return true;
    }
  });

  // @factory L.gridLayer(options?: GridLayer options)
  // Creates a new instance of GridLayer with the supplied options.
  function gridLayer(options) {
    return new GridLayer(options);
  }

  /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */

  var TileLayer = GridLayer.extend({
    // @section
    // @aka TileLayer options
    options: {
      // @option minZoom: Number = 0
      // The minimum zoom level down to which this layer will be displayed (inclusive).
      minZoom: 0,
      // @option maxZoom: Number = 18
      // The maximum zoom level up to which this layer will be displayed (inclusive).
      maxZoom: 18,
      // @option subdomains: String|String[] = 'abc'
      // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
      subdomains: 'abc',
      // @option errorTileUrl: String = ''
      // URL to the tile image to show in place of the tile that failed to load.
      errorTileUrl: '',
      // @option zoomOffset: Number = 0
      // The zoom number used in tile URLs will be offset with this value.
      zoomOffset: 0,
      // @option tms: Boolean = false
      // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
      tms: false,
      // @option zoomReverse: Boolean = false
      // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
      zoomReverse: false,
      // @option detectRetina: Boolean = false
      // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
      detectRetina: false,
      // @option crossOrigin: Boolean = false
      // If true, all tiles will have their crossOrigin attribute set to ''. This is needed if you want to access tile pixel data.
      crossOrigin: false
    },
    initialize: function initialize(url, options) {
      this._url = url;
      options = setOptions(this, options);

      // detecting retina displays, adjusting tileSize and zoom levels
      if (options.detectRetina && retina && options.maxZoom > 0) {
        options.tileSize = Math.floor(options.tileSize / 2);
        if (!options.zoomReverse) {
          options.zoomOffset++;
          options.maxZoom--;
        } else {
          options.zoomOffset--;
          options.minZoom++;
        }
        options.minZoom = Math.max(0, options.minZoom);
      }
      if (typeof options.subdomains === 'string') {
        options.subdomains = options.subdomains.split('');
      }

      // for https://github.com/Leaflet/Leaflet/issues/137
      if (!android) {
        this.on('tileunload', this._onTileRemove);
      }
    },
    // @method setUrl(url: String, noRedraw?: Boolean): this
    // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
    setUrl: function setUrl(url, noRedraw) {
      this._url = url;
      if (!noRedraw) {
        this.redraw();
      }
      return this;
    },
    // @method createTile(coords: Object, done?: Function): HTMLElement
    // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
    // to return an `<img>` HTML element with the appropiate image URL given `coords`. The `done`
    // callback is called when the tile has been loaded.
    createTile: function createTile(coords, done) {
      var tile = document.createElement('img');
      on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
      on(tile, 'error', bind(this._tileOnError, this, done, tile));
      if (this.options.crossOrigin) {
        tile.crossOrigin = '';
      }

      /*
       Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
       http://www.w3.org/TR/WCAG20-TECHS/H67
      */
      tile.alt = '';

      /*
       Set role="presentation" to force screen readers to ignore this
       https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
      */
      tile.setAttribute('role', 'presentation');
      tile.src = this.getTileUrl(coords);
      return tile;
    },
    // @section Extension methods
    // @uninheritable
    // Layers extending `TileLayer` might reimplement the following method.
    // @method getTileUrl(coords: Object): String
    // Called only internally, returns the URL for a tile given its coordinates.
    // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
    getTileUrl: function getTileUrl(coords) {
      var data = {
        r: retina ? '@2x' : '',
        s: this._getSubdomain(coords),
        x: coords.x,
        y: coords.y,
        z: this._getZoomForUrl()
      };
      if (this._map && !this._map.options.crs.infinite) {
        var invertedY = this._globalTileRange.max.y - coords.y;
        if (this.options.tms) {
          data['y'] = invertedY;
        }
        data['-y'] = invertedY;
      }
      return template(this._url, extend(data, this.options));
    },
    _tileOnLoad: function _tileOnLoad(done, tile) {
      // For https://github.com/Leaflet/Leaflet/issues/3332
      if (ielt9) {
        setTimeout(bind(done, this, null, tile), 0);
      } else {
        done(null, tile);
      }
    },
    _tileOnError: function _tileOnError(done, tile, e) {
      var errorUrl = this.options.errorTileUrl;
      if (errorUrl && tile.src !== errorUrl) {
        tile.src = errorUrl;
      }
      done(e, tile);
    },
    _onTileRemove: function _onTileRemove(e) {
      e.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var zoom = this._tileZoom,
        maxZoom = this.options.maxZoom,
        zoomReverse = this.options.zoomReverse,
        zoomOffset = this.options.zoomOffset;
      if (zoomReverse) {
        zoom = maxZoom - zoom;
      }
      return zoom + zoomOffset;
    },
    _getSubdomain: function _getSubdomain(tilePoint) {
      var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
      return this.options.subdomains[index];
    },
    // stops loading all tiles in the background layer
    _abortLoading: function _abortLoading() {
      var i, tile;
      for (i in this._tiles) {
        if (this._tiles[i].coords.z !== this._tileZoom) {
          tile = this._tiles[i].el;
          tile.onload = falseFn;
          tile.onerror = falseFn;
          if (!tile.complete) {
            tile.src = emptyImageUrl;
            _remove(tile);
          }
        }
      }
    }
  });

  // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
  // Instantiates a tile layer object given a `URL template` and optionally an options object.

  function tileLayer(url, options) {
    return new TileLayer(url, options);
  }

  /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */

  var TileLayerWMS = TileLayer.extend({
    // @section
    // @aka TileLayer.WMS options
    // If any custom options not documented here are used, they will be sent to the
    // WMS server as extra parameters in each request URL. This can be useful for
    // [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      // @option layers: String = ''
      // **(required)** Comma-separated list of WMS layers to show.
      layers: '',
      // @option styles: String = ''
      // Comma-separated list of WMS styles.
      styles: '',
      // @option format: String = 'image/jpeg'
      // WMS image format (use `'image/png'` for layers with transparency).
      format: 'image/jpeg',
      // @option transparent: Boolean = false
      // If `true`, the WMS service will return images with transparency.
      transparent: false,
      // @option version: String = '1.1.1'
      // Version of the WMS service to use
      version: '1.1.1'
    },
    options: {
      // @option crs: CRS = null
      // Coordinate Reference System to use for the WMS requests, defaults to
      // map CRS. Don't change this if you're not sure what it means.
      crs: null,
      // @option uppercase: Boolean = false
      // If `true`, WMS request parameter keys will be uppercase.
      uppercase: false
    },
    initialize: function initialize(url, options) {
      this._url = url;
      var wmsParams = extend({}, this.defaultWmsParams);

      // all keys that are not TileLayer options go to WMS params
      for (var i in options) {
        if (!(i in this.options)) {
          wmsParams[i] = options[i];
        }
      }
      options = setOptions(this, options);
      wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && retina ? 2 : 1);
      this.wmsParams = wmsParams;
    },
    onAdd: function onAdd(map) {
      this._crs = this.options.crs || map.options.crs;
      this._wmsVersion = parseFloat(this.wmsParams.version);
      var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      this.wmsParams[projectionKey] = this._crs.code;
      TileLayer.prototype.onAdd.call(this, map);
    },
    getTileUrl: function getTileUrl(coords) {
      var tileBounds = this._tileCoordsToBounds(coords),
        nw = this._crs.project(tileBounds.getNorthWest()),
        se = this._crs.project(tileBounds.getSouthEast()),
        bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [se.y, nw.x, nw.y, se.x] : [nw.x, se.y, se.x, nw.y]).join(','),
        url = TileLayer.prototype.getTileUrl.call(this, coords);
      return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
    },
    // @method setParams(params: Object, noRedraw?: Boolean): this
    // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
    setParams: function setParams(params, noRedraw) {
      extend(this.wmsParams, params);
      if (!noRedraw) {
        this.redraw();
      }
      return this;
    }
  });

  // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
  // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
  function tileLayerWMS(url, options) {
    return new TileLayerWMS(url, options);
  }
  TileLayer.WMS = TileLayerWMS;
  tileLayer.wms = tileLayerWMS;

  /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */

  var Renderer = Layer.extend({
    // @section
    // @aka Renderer options
    options: {
      // @option padding: Number = 0.1
      // How much to extend the clip area around the map view (relative to its size)
      // e.g. 0.1 would be 10% of map view in each direction
      padding: 0.1
    },
    initialize: function initialize(options) {
      setOptions(this, options);
      stamp(this);
      this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      if (!this._container) {
        this._initContainer(); // defined by renderer implementations

        if (this._zoomAnimated) {
          addClass(this._container, 'leaflet-zoom-animated');
        }
      }
      this.getPane().appendChild(this._container);
      this._update();
      this.on('update', this._updatePaths, this);
    },
    onRemove: function onRemove() {
      this.off('update', this._updatePaths, this);
      this._destroyContainer();
    },
    getEvents: function getEvents() {
      var events = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      if (this._zoomAnimated) {
        events.zoomanim = this._onAnimZoom;
      }
      return events;
    },
    _onAnimZoom: function _onAnimZoom(ev) {
      this._updateTransform(ev.center, ev.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(center, zoom) {
      var scale = this._map.getZoomScale(zoom, this._zoom),
        position = getPosition(this._container),
        viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
        currentCenterPoint = this._map.project(this._center, zoom),
        destCenterPoint = this._map.project(center, zoom),
        centerOffset = destCenterPoint.subtract(currentCenterPoint),
        topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);
      if (any3d) {
        setTransform(this._container, topLeftOffset, scale);
      } else {
        setPosition(this._container, topLeftOffset);
      }
    },
    _reset: function _reset() {
      this._update();
      this._updateTransform(this._center, this._zoom);
      for (var id in this._layers) {
        this._layers[id]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var id in this._layers) {
        this._layers[id]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var id in this._layers) {
        this._layers[id]._update();
      }
    },
    _update: function _update() {
      // Update pixel bounds of renderer container (for positioning/sizing/clipping later)
      // Subclasses are responsible of firing the 'update' event.
      var p = this.options.padding,
        size = this._map.getSize(),
        min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
      this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
      this._center = this._map.getCenter();
      this._zoom = this._map.getZoom();
    }
  });

  /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var Canvas = Renderer.extend({
    getEvents: function getEvents() {
      var events = Renderer.prototype.getEvents.call(this);
      events.viewprereset = this._onViewPreReset;
      return events;
    },
    _onViewPreReset: function _onViewPreReset() {
      // Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
      this._postponeUpdatePaths = true;
    },
    onAdd: function onAdd() {
      Renderer.prototype.onAdd.call(this);

      // Redraw vectors since canvas is cleared upon removal,
      // in case of removing the renderer itself from the map.
      this._draw();
    },
    _initContainer: function _initContainer() {
      var container = this._container = document.createElement('canvas');
      on(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);
      on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
      on(container, 'mouseout', this._handleMouseOut, this);
      this._ctx = container.getContext('2d');
    },
    _destroyContainer: function _destroyContainer() {
      delete this._ctx;
      _remove(this._container);
      off(this._container);
      delete this._container;
    },
    _updatePaths: function _updatePaths() {
      if (this._postponeUpdatePaths) {
        return;
      }
      var layer;
      this._redrawBounds = null;
      for (var id in this._layers) {
        layer = this._layers[id];
        layer._update();
      }
      this._redraw();
    },
    _update: function _update() {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }
      this._drawnLayers = {};
      Renderer.prototype._update.call(this);
      var b = this._bounds,
        container = this._container,
        size = b.getSize(),
        m = retina ? 2 : 1;
      setPosition(container, b.min);

      // set canvas size (also clearing it); use double size on retina
      container.width = m * size.x;
      container.height = m * size.y;
      container.style.width = size.x + 'px';
      container.style.height = size.y + 'px';
      if (retina) {
        this._ctx.scale(2, 2);
      }

      // translate so we use the same path coordinates after canvas element moves
      this._ctx.translate(-b.min.x, -b.min.y);

      // Tell paths to redraw themselves
      this.fire('update');
    },
    _reset: function _reset() {
      Renderer.prototype._reset.call(this);
      if (this._postponeUpdatePaths) {
        this._postponeUpdatePaths = false;
        this._updatePaths();
      }
    },
    _initPath: function _initPath(layer) {
      this._updateDashArray(layer);
      this._layers[stamp(layer)] = layer;
      var order = layer._order = {
        layer: layer,
        prev: this._drawLast,
        next: null
      };
      if (this._drawLast) {
        this._drawLast.next = order;
      }
      this._drawLast = order;
      this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(layer) {
      this._requestRedraw(layer);
    },
    _removePath: function _removePath(layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;
      if (next) {
        next.prev = prev;
      } else {
        this._drawLast = prev;
      }
      if (prev) {
        prev.next = next;
      } else {
        this._drawFirst = next;
      }
      delete layer._order;
      delete this._layers[L.stamp(layer)];
      this._requestRedraw(layer);
    },
    _updatePath: function _updatePath(layer) {
      // Redraw the union of the layer's old pixel
      // bounds and the new pixel bounds.
      this._extendRedrawBounds(layer);
      layer._project();
      layer._update();
      // The redraw will extend the redraw bounds
      // with the new pixel bounds.
      this._requestRedraw(layer);
    },
    _updateStyle: function _updateStyle(layer) {
      this._updateDashArray(layer);
      this._requestRedraw(layer);
    },
    _updateDashArray: function _updateDashArray(layer) {
      if (layer.options.dashArray) {
        var parts = layer.options.dashArray.split(','),
          dashArray = [],
          i;
        for (i = 0; i < parts.length; i++) {
          dashArray.push(Number(parts[i]));
        }
        layer.options._dashArray = dashArray;
      }
    },
    _requestRedraw: function _requestRedraw(layer) {
      if (!this._map) {
        return;
      }
      this._extendRedrawBounds(layer);
      this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
    },
    _extendRedrawBounds: function _extendRedrawBounds(layer) {
      if (layer._pxBounds) {
        var padding = (layer.options.weight || 0) + 1;
        this._redrawBounds = this._redrawBounds || new Bounds();
        this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
        this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
      }
    },
    _redraw: function _redraw() {
      this._redrawRequest = null;
      if (this._redrawBounds) {
        this._redrawBounds.min._floor();
        this._redrawBounds.max._ceil();
      }
      this._clear(); // clear layers in redraw bounds
      this._draw(); // draw layers

      this._redrawBounds = null;
    },
    _clear: function _clear() {
      var bounds = this._redrawBounds;
      if (bounds) {
        var size = bounds.getSize();
        this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
      } else {
        this._ctx.clearRect(0, 0, this._container.width, this._container.height);
      }
    },
    _draw: function _draw() {
      var layer,
        bounds = this._redrawBounds;
      this._ctx.save();
      if (bounds) {
        var size = bounds.getSize();
        this._ctx.beginPath();
        this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
        this._ctx.clip();
      }
      this._drawing = true;
      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;
        if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) {
          layer._updatePath();
        }
      }
      this._drawing = false;
      this._ctx.restore(); // Restore state before clipping.
    },

    _updatePoly: function _updatePoly(layer, closed) {
      if (!this._drawing) {
        return;
      }
      var i,
        j,
        len2,
        p,
        parts = layer._parts,
        len = parts.length,
        ctx = this._ctx;
      if (!len) {
        return;
      }
      this._drawnLayers[layer._leaflet_id] = layer;
      ctx.beginPath();
      for (i = 0; i < len; i++) {
        for (j = 0, len2 = parts[i].length; j < len2; j++) {
          p = parts[i][j];
          ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
        }
        if (closed) {
          ctx.closePath();
        }
      }
      this._fillStroke(ctx, layer);

      // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
    },

    _updateCircle: function _updateCircle(layer) {
      if (!this._drawing || layer._empty()) {
        return;
      }
      var p = layer._point,
        ctx = this._ctx,
        r = layer._radius,
        s = (layer._radiusY || r) / r;
      this._drawnLayers[layer._leaflet_id] = layer;
      if (s !== 1) {
        ctx.save();
        ctx.scale(1, s);
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
      if (s !== 1) {
        ctx.restore();
      }
      this._fillStroke(ctx, layer);
    },
    _fillStroke: function _fillStroke(ctx, layer) {
      var options = layer.options;
      if (options.fill) {
        ctx.globalAlpha = options.fillOpacity;
        ctx.fillStyle = options.fillColor || options.color;
        ctx.fill(options.fillRule || 'evenodd');
      }
      if (options.stroke && options.weight !== 0) {
        if (ctx.setLineDash) {
          ctx.setLineDash(layer.options && layer.options._dashArray || []);
        }
        ctx.globalAlpha = options.opacity;
        ctx.lineWidth = options.weight;
        ctx.strokeStyle = options.color;
        ctx.lineCap = options.lineCap;
        ctx.lineJoin = options.lineJoin;
        ctx.stroke();
      }
    },
    // Canvas obviously doesn't have mouse events for individual drawn objects,
    // so we emulate that by calculating what's under the mouse on mousemove/click manually

    _onClick: function _onClick(e) {
      var point = this._map.mouseEventToLayerPoint(e),
        layer,
        clickedLayer;
      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;
        if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
          clickedLayer = layer;
        }
      }
      if (clickedLayer) {
        fakeStop(e);
        this._fireEvent([clickedLayer], e);
      }
    },
    _onMouseMove: function _onMouseMove(e) {
      if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
        return;
      }
      var point = this._map.mouseEventToLayerPoint(e);
      this._handleMouseHover(e, point);
    },
    _handleMouseOut: function _handleMouseOut(e) {
      var layer = this._hoveredLayer;
      if (layer) {
        // if we're leaving the layer, fire mouseout
        removeClass(this._container, 'leaflet-interactive');
        this._fireEvent([layer], e, 'mouseout');
        this._hoveredLayer = null;
      }
    },
    _handleMouseHover: function _handleMouseHover(e, point) {
      var layer, candidateHoveredLayer;
      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;
        if (layer.options.interactive && layer._containsPoint(point)) {
          candidateHoveredLayer = layer;
        }
      }
      if (candidateHoveredLayer !== this._hoveredLayer) {
        this._handleMouseOut(e);
        if (candidateHoveredLayer) {
          addClass(this._container, 'leaflet-interactive'); // change cursor
          this._fireEvent([candidateHoveredLayer], e, 'mouseover');
          this._hoveredLayer = candidateHoveredLayer;
        }
      }
      if (this._hoveredLayer) {
        this._fireEvent([this._hoveredLayer], e);
      }
    },
    _fireEvent: function _fireEvent(layers, e, type) {
      this._map._fireDOMEvent(e, type || e.type, layers);
    },
    _bringToFront: function _bringToFront(layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;
      if (next) {
        next.prev = prev;
      } else {
        // Already last
        return;
      }
      if (prev) {
        prev.next = next;
      } else if (next) {
        // Update first entry unless this is the
        // signle entry
        this._drawFirst = next;
      }
      order.prev = this._drawLast;
      this._drawLast.next = order;
      order.next = null;
      this._drawLast = order;
      this._requestRedraw(layer);
    },
    _bringToBack: function _bringToBack(layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;
      if (prev) {
        prev.next = next;
      } else {
        // Already first
        return;
      }
      if (next) {
        next.prev = prev;
      } else if (prev) {
        // Update last entry unless this is the
        // signle entry
        this._drawLast = prev;
      }
      order.prev = null;
      order.next = this._drawFirst;
      this._drawFirst.prev = order;
      this._drawFirst = order;
      this._requestRedraw(layer);
    }
  });

  // @factory L.canvas(options?: Renderer options)
  // Creates a Canvas renderer with the given options.
  function canvas$1(options) {
    return canvas ? new Canvas(options) : null;
  }

  /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */

  var vmlCreate = function () {
    try {
      document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
      return function (name) {
        return document.createElement('<lvml:' + name + ' class="lvml">');
      };
    } catch (e) {
      return function (name) {
        return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }();

  /*
   * @class SVG
   *
   * Although SVG is not available on IE7 and IE8, these browsers support [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language), and the SVG renderer will fall back to VML in this case.
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */

  // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
  var vmlMixin = {
    _initContainer: function _initContainer() {
      this._container = create$1('div', 'leaflet-vml-container');
    },
    _update: function _update() {
      if (this._map._animatingZoom) {
        return;
      }
      Renderer.prototype._update.call(this);
      this.fire('update');
    },
    _initPath: function _initPath(layer) {
      var container = layer._container = vmlCreate('shape');
      addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));
      container.coordsize = '1 1';
      layer._path = vmlCreate('path');
      container.appendChild(layer._path);
      this._updateStyle(layer);
      this._layers[stamp(layer)] = layer;
    },
    _addPath: function _addPath(layer) {
      var container = layer._container;
      this._container.appendChild(container);
      if (layer.options.interactive) {
        layer.addInteractiveTarget(container);
      }
    },
    _removePath: function _removePath(layer) {
      var container = layer._container;
      _remove(container);
      layer.removeInteractiveTarget(container);
      delete this._layers[stamp(layer)];
    },
    _updateStyle: function _updateStyle(layer) {
      var stroke = layer._stroke,
        fill = layer._fill,
        options = layer.options,
        container = layer._container;
      container.stroked = !!options.stroke;
      container.filled = !!options.fill;
      if (options.stroke) {
        if (!stroke) {
          stroke = layer._stroke = vmlCreate('stroke');
        }
        container.appendChild(stroke);
        stroke.weight = options.weight + 'px';
        stroke.color = options.color;
        stroke.opacity = options.opacity;
        if (options.dashArray) {
          stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(' ') : options.dashArray.replace(/( *, *)/g, ' ');
        } else {
          stroke.dashStyle = '';
        }
        stroke.endcap = options.lineCap.replace('butt', 'flat');
        stroke.joinstyle = options.lineJoin;
      } else if (stroke) {
        container.removeChild(stroke);
        layer._stroke = null;
      }
      if (options.fill) {
        if (!fill) {
          fill = layer._fill = vmlCreate('fill');
        }
        container.appendChild(fill);
        fill.color = options.fillColor || options.color;
        fill.opacity = options.fillOpacity;
      } else if (fill) {
        container.removeChild(fill);
        layer._fill = null;
      }
    },
    _updateCircle: function _updateCircle(layer) {
      var p = layer._point.round(),
        r = Math.round(layer._radius),
        r2 = Math.round(layer._radiusY || r);
      this._setPath(layer, layer._empty() ? 'M0 0' : 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + 65535 * 360);
    },
    _setPath: function _setPath(layer, path) {
      layer._path.v = path;
    },
    _bringToFront: function _bringToFront(layer) {
      toFront(layer._container);
    },
    _bringToBack: function _bringToBack(layer) {
      toBack(layer._container);
    }
  };
  var create$2 = vml ? vmlCreate : svgCreate;

  /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var SVG = Renderer.extend({
    getEvents: function getEvents() {
      var events = Renderer.prototype.getEvents.call(this);
      events.zoomstart = this._onZoomStart;
      return events;
    },
    _initContainer: function _initContainer() {
      this._container = create$2('svg');

      // makes it possible to click through svg root; we'll reset it back in individual paths
      this._container.setAttribute('pointer-events', 'none');
      this._rootGroup = create$2('g');
      this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function _destroyContainer() {
      _remove(this._container);
      off(this._container);
      delete this._container;
      delete this._rootGroup;
    },
    _onZoomStart: function _onZoomStart() {
      // Drag-then-pinch interactions might mess up the center and zoom.
      // In this case, the easiest way to prevent this is re-do the renderer
      //   bounds and padding when the zooming starts.
      this._update();
    },
    _update: function _update() {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }
      Renderer.prototype._update.call(this);
      var b = this._bounds,
        size = b.getSize(),
        container = this._container;

      // set size of svg-container if changed
      if (!this._svgSize || !this._svgSize.equals(size)) {
        this._svgSize = size;
        container.setAttribute('width', size.x);
        container.setAttribute('height', size.y);
      }

      // movement: update container viewBox so that we don't have to change coordinates of individual layers
      setPosition(container, b.min);
      container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));
      this.fire('update');
    },
    // methods below are called by vector layers implementations

    _initPath: function _initPath(layer) {
      var path = layer._path = create$2('path');

      // @namespace Path
      // @option className: String = null
      // Custom class name set on an element. Only for SVG renderer.
      if (layer.options.className) {
        addClass(path, layer.options.className);
      }
      if (layer.options.interactive) {
        addClass(path, 'leaflet-interactive');
      }
      this._updateStyle(layer);
      this._layers[stamp(layer)] = layer;
    },
    _addPath: function _addPath(layer) {
      if (!this._rootGroup) {
        this._initContainer();
      }
      this._rootGroup.appendChild(layer._path);
      layer.addInteractiveTarget(layer._path);
    },
    _removePath: function _removePath(layer) {
      _remove(layer._path);
      layer.removeInteractiveTarget(layer._path);
      delete this._layers[stamp(layer)];
    },
    _updatePath: function _updatePath(layer) {
      layer._project();
      layer._update();
    },
    _updateStyle: function _updateStyle(layer) {
      var path = layer._path,
        options = layer.options;
      if (!path) {
        return;
      }
      if (options.stroke) {
        path.setAttribute('stroke', options.color);
        path.setAttribute('stroke-opacity', options.opacity);
        path.setAttribute('stroke-width', options.weight);
        path.setAttribute('stroke-linecap', options.lineCap);
        path.setAttribute('stroke-linejoin', options.lineJoin);
        if (options.dashArray) {
          path.setAttribute('stroke-dasharray', options.dashArray);
        } else {
          path.removeAttribute('stroke-dasharray');
        }
        if (options.dashOffset) {
          path.setAttribute('stroke-dashoffset', options.dashOffset);
        } else {
          path.removeAttribute('stroke-dashoffset');
        }
      } else {
        path.setAttribute('stroke', 'none');
      }
      if (options.fill) {
        path.setAttribute('fill', options.fillColor || options.color);
        path.setAttribute('fill-opacity', options.fillOpacity);
        path.setAttribute('fill-rule', options.fillRule || 'evenodd');
      } else {
        path.setAttribute('fill', 'none');
      }
    },
    _updatePoly: function _updatePoly(layer, closed) {
      this._setPath(layer, pointsToPath(layer._parts, closed));
    },
    _updateCircle: function _updateCircle(layer) {
      var p = layer._point,
        r = layer._radius,
        r2 = layer._radiusY || r,
        arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

      // drawing a circle with two half-arcs
      var d = layer._empty() ? 'M0 0' : 'M' + (p.x - r) + ',' + p.y + arc + r * 2 + ',0 ' + arc + -r * 2 + ',0 ';
      this._setPath(layer, d);
    },
    _setPath: function _setPath(layer, path) {
      layer._path.setAttribute('d', path);
    },
    // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
    _bringToFront: function _bringToFront(layer) {
      toFront(layer._path);
    },
    _bringToBack: function _bringToBack(layer) {
      toBack(layer._path);
    }
  });
  if (vml) {
    SVG.include(vmlMixin);
  }

  // @factory L.svg(options?: Renderer options)
  // Creates a SVG renderer with the given options.
  function svg$1(options) {
    return svg || vml ? new SVG(options) : null;
  }
  Map.include({
    // @namespace Map; @method getRenderer(layer: Path): Renderer
    // Returns the instance of `Renderer` that should be used to render the given
    // `Path`. It will ensure that the `renderer` options of the map and paths
    // are respected, and that the renderers do exist on the map.
    getRenderer: function getRenderer(layer) {
      // @namespace Path; @option renderer: Renderer
      // Use this specific instance of `Renderer` for this path. Takes
      // precedence over the map's [default renderer](#map-renderer).
      var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
      if (!renderer) {
        // @namespace Map; @option preferCanvas: Boolean = false
        // Whether `Path`s should be rendered on a `Canvas` renderer.
        // By default, all `Path`s are rendered in a `SVG` renderer.
        renderer = this._renderer = this.options.preferCanvas && canvas$1() || svg$1();
      }
      if (!this.hasLayer(renderer)) {
        this.addLayer(renderer);
      }
      return renderer;
    },
    _getPaneRenderer: function _getPaneRenderer(name) {
      if (name === 'overlayPane' || name === undefined) {
        return false;
      }
      var renderer = this._paneRenderers[name];
      if (renderer === undefined) {
        renderer = SVG && svg$1({
          pane: name
        }) || Canvas && canvas$1({
          pane: name
        });
        this._paneRenderers[name] = renderer;
      }
      return renderer;
    }
  });

  /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */

  /*
   * @class Rectangle
   * @aka L.Retangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */

  var Rectangle = Polygon.extend({
    initialize: function initialize(latLngBounds, options) {
      Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
    },
    // @method setBounds(latLngBounds: LatLngBounds): this
    // Redraws the rectangle with the passed bounds.
    setBounds: function setBounds(latLngBounds) {
      return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
    },
    _boundsToLatLngs: function _boundsToLatLngs(latLngBounds) {
      latLngBounds = toLatLngBounds(latLngBounds);
      return [latLngBounds.getSouthWest(), latLngBounds.getNorthWest(), latLngBounds.getNorthEast(), latLngBounds.getSouthEast()];
    }
  });

  // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
  function rectangle(latLngBounds, options) {
    return new Rectangle(latLngBounds, options);
  }
  SVG.create = create$2;
  SVG.pointsToPath = pointsToPath;
  GeoJSON.geometryToLayer = geometryToLayer;
  GeoJSON.coordsToLatLng = coordsToLatLng;
  GeoJSON.coordsToLatLngs = coordsToLatLngs;
  GeoJSON.latLngToCoords = latLngToCoords;
  GeoJSON.latLngsToCoords = latLngsToCoords;
  GeoJSON.getFeature = getFeature;
  GeoJSON.asFeature = asFeature;

  /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
    // @option boxZoom: Boolean = true
    // Whether the map can be zoomed to a rectangular area specified by
    // dragging the mouse while pressing the shift key.
    boxZoom: true
  });
  var BoxZoom = Handler.extend({
    initialize: function initialize(map) {
      this._map = map;
      this._container = map._container;
      this._pane = map._panes.overlayPane;
      this._resetStateTimeout = 0;
      map.on('unload', this._destroy, this);
    },
    addHooks: function addHooks() {
      on(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      off(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _destroy: function _destroy() {
      _remove(this._pane);
      delete this._pane;
    },
    _resetState: function _resetState() {
      this._resetStateTimeout = 0;
      this._moved = false;
    },
    _clearDeferredResetState: function _clearDeferredResetState() {
      if (this._resetStateTimeout !== 0) {
        clearTimeout(this._resetStateTimeout);
        this._resetStateTimeout = 0;
      }
    },
    _onMouseDown: function _onMouseDown(e) {
      if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
        return false;
      }

      // Clear the deferred resetState if it hasn't executed yet, otherwise it
      // will interrupt the interaction and orphan a box element in the container.
      this._clearDeferredResetState();
      this._resetState();
      disableTextSelection();
      disableImageDrag();
      this._startPoint = this._map.mouseEventToContainerPoint(e);
      on(document, {
        contextmenu: stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function _onMouseMove(e) {
      if (!this._moved) {
        this._moved = true;
        this._box = create$1('div', 'leaflet-zoom-box', this._container);
        addClass(this._container, 'leaflet-crosshair');
        this._map.fire('boxzoomstart');
      }
      this._point = this._map.mouseEventToContainerPoint(e);
      var bounds = new Bounds(this._point, this._startPoint),
        size = bounds.getSize();
      setPosition(this._box, bounds.min);
      this._box.style.width = size.x + 'px';
      this._box.style.height = size.y + 'px';
    },
    _finish: function _finish() {
      if (this._moved) {
        _remove(this._box);
        removeClass(this._container, 'leaflet-crosshair');
      }
      enableTextSelection();
      enableImageDrag();
      off(document, {
        contextmenu: stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(e) {
      if (e.which !== 1 && e.button !== 1) {
        return;
      }
      this._finish();
      if (!this._moved) {
        return;
      }
      // Postpone to next JS tick so internal click event handling
      // still see it as "moved".
      this._clearDeferredResetState();
      this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
      var bounds = new LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
      this._map.fitBounds(bounds).fire('boxzoomend', {
        boxZoomBounds: bounds
      });
    },
    _onKeyDown: function _onKeyDown(e) {
      if (e.keyCode === 27) {
        this._finish();
      }
    }
  });

  // @section Handlers
  // @property boxZoom: Handler
  // Box (shift-drag with mouse) zoom handler.
  Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

  /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */

  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option doubleClickZoom: Boolean|String = true
    // Whether the map can be zoomed in by double clicking on it and
    // zoomed out by double clicking while holding shift. If passed
    // `'center'`, double-click zoom will zoom to the center of the
    //  view regardless of where the mouse was.
    doubleClickZoom: true
  });
  var DoubleClickZoom = Handler.extend({
    addHooks: function addHooks() {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(e) {
      var map = this._map,
        oldZoom = map.getZoom(),
        delta = map.options.zoomDelta,
        zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
      if (map.options.doubleClickZoom === 'center') {
        map.setZoom(zoom);
      } else {
        map.setZoomAround(e.containerPoint, zoom);
      }
    }
  });

  // @section Handlers
  //
  // Map properties include interaction handlers that allow you to control
  // interaction behavior in runtime, enabling or disabling certain features such
  // as dragging or touch zoom (see `Handler` methods). For example:
  //
  // ```js
  // map.doubleClickZoom.disable();
  // ```
  //
  // @property doubleClickZoom: Handler
  // Double click zoom handler.
  Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

  /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
    // @option dragging: Boolean = true
    // Whether the map be draggable with mouse/touch or not.
    dragging: true,
    // @section Panning Inertia Options
    // @option inertia: Boolean = *
    // If enabled, panning of the map will have an inertia effect where
    // the map builds momentum while dragging and continues moving in
    // the same direction for some time. Feels especially nice on touch
    // devices. Enabled by default unless running on old Android devices.
    inertia: !android23,
    // @option inertiaDeceleration: Number = 3000
    // The rate with which the inertial movement slows down, in pixels/second².
    inertiaDeceleration: 3400,
    // px/s^2

    // @option inertiaMaxSpeed: Number = Infinity
    // Max speed of the inertial movement, in pixels/second.
    inertiaMaxSpeed: Infinity,
    // px/s

    // @option easeLinearity: Number = 0.2
    easeLinearity: 0.2,
    // TODO refactor, move to CRS
    // @option worldCopyJump: Boolean = false
    // With this option enabled, the map tracks when you pan to another "copy"
    // of the world and seamlessly jumps to the original one so that all overlays
    // like markers and vector layers are still visible.
    worldCopyJump: false,
    // @option maxBoundsViscosity: Number = 0.0
    // If `maxBounds` is set, this option will control how solid the bounds
    // are when dragging the map around. The default value of `0.0` allows the
    // user to drag outside the bounds at normal speed, higher values will
    // slow down map dragging outside bounds, and `1.0` makes the bounds fully
    // solid, preventing the user from dragging outside the bounds.
    maxBoundsViscosity: 0.0
  });
  var Drag = Handler.extend({
    addHooks: function addHooks() {
      if (!this._draggable) {
        var map = this._map;
        this._draggable = new Draggable(map._mapPane, map._container);
        this._draggable.on({
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this);
        this._draggable.on('predrag', this._onPreDragLimit, this);
        if (map.options.worldCopyJump) {
          this._draggable.on('predrag', this._onPreDragWrap, this);
          map.on('zoomend', this._onZoomEnd, this);
          map.whenReady(this._onZoomEnd, this);
        }
      }
      addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
      this._draggable.enable();
      this._positions = [];
      this._times = [];
    },
    removeHooks: function removeHooks() {
      removeClass(this._map._container, 'leaflet-grab');
      removeClass(this._map._container, 'leaflet-touch-drag');
      this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function _onDragStart() {
      var map = this._map;
      map._stop();
      if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var bounds = toLatLngBounds(this._map.options.maxBounds);
        this._offsetLimit = toBounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
        this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
      } else {
        this._offsetLimit = null;
      }
      map.fire('movestart').fire('dragstart');
      if (map.options.inertia) {
        this._positions = [];
        this._times = [];
      }
    },
    _onDrag: function _onDrag(e) {
      if (this._map.options.inertia) {
        var time = this._lastTime = +new Date(),
          pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
        this._positions.push(pos);
        this._times.push(time);
        if (time - this._times[0] > 50) {
          this._positions.shift();
          this._times.shift();
        }
      }
      this._map.fire('move', e).fire('drag', e);
    },
    _onZoomEnd: function _onZoomEnd() {
      var pxCenter = this._map.getSize().divideBy(2),
        pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);
      this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
      this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(value, threshold) {
      return value - (value - threshold) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      if (!this._viscosity || !this._offsetLimit) {
        return;
      }
      var offset = this._draggable._newPos.subtract(this._draggable._startPos);
      var limit = this._offsetLimit;
      if (offset.x < limit.min.x) {
        offset.x = this._viscousLimit(offset.x, limit.min.x);
      }
      if (offset.y < limit.min.y) {
        offset.y = this._viscousLimit(offset.y, limit.min.y);
      }
      if (offset.x > limit.max.x) {
        offset.x = this._viscousLimit(offset.x, limit.max.x);
      }
      if (offset.y > limit.max.y) {
        offset.y = this._viscousLimit(offset.y, limit.max.y);
      }
      this._draggable._newPos = this._draggable._startPos.add(offset);
    },
    _onPreDragWrap: function _onPreDragWrap() {
      // TODO refactor to be able to adjust map pane position after zoom
      var worldWidth = this._worldWidth,
        halfWidth = Math.round(worldWidth / 2),
        dx = this._initialWorldOffset,
        x = this._draggable._newPos.x,
        newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
        newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
        newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
      this._draggable._absPos = this._draggable._newPos.clone();
      this._draggable._newPos.x = newX;
    },
    _onDragEnd: function _onDragEnd(e) {
      var map = this._map,
        options = map.options,
        noInertia = !options.inertia || this._times.length < 2;
      map.fire('dragend', e);
      if (noInertia) {
        map.fire('moveend');
      } else {
        var direction = this._lastPos.subtract(this._positions[0]),
          duration = (this._lastTime - this._times[0]) / 1000,
          ease = options.easeLinearity,
          speedVector = direction.multiplyBy(ease / duration),
          speed = speedVector.distanceTo([0, 0]),
          limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
          limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
          decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
          offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
        if (!offset.x && !offset.y) {
          map.fire('moveend');
        } else {
          offset = map._limitOffset(offset, map.options.maxBounds);
          requestAnimFrame(function () {
            map.panBy(offset, {
              duration: decelerationDuration,
              easeLinearity: ease,
              noMoveStart: true,
              animate: true
            });
          });
        }
      }
    }
  });

  // @section Handlers
  // @property dragging: Handler
  // Map dragging handler (by both mouse and touch).
  Map.addInitHook('addHandler', 'dragging', Drag);

  /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */

  // @namespace Map
  // @section Keyboard Navigation Options
  Map.mergeOptions({
    // @option keyboard: Boolean = true
    // Makes the map focusable and allows users to navigate the map with keyboard
    // arrows and `+`/`-` keys.
    keyboard: true,
    // @option keyboardPanDelta: Number = 80
    // Amount of pixels to pan when pressing an arrow key.
    keyboardPanDelta: 80
  });
  var Keyboard = Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(map) {
      this._map = map;
      this._setPanDelta(map.options.keyboardPanDelta);
      this._setZoomDelta(map.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var container = this._map._container;

      // make the container focusable by tabbing
      if (container.tabIndex <= 0) {
        container.tabIndex = '0';
      }
      on(container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);
      this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks();
      off(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);
      this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      if (this._focused) {
        return;
      }
      var body = document.body,
        docEl = document.documentElement,
        top = body.scrollTop || docEl.scrollTop,
        left = body.scrollLeft || docEl.scrollLeft;
      this._map._container.focus();
      window.scrollTo(left, top);
    },
    _onFocus: function _onFocus() {
      this._focused = true;
      this._map.fire('focus');
    },
    _onBlur: function _onBlur() {
      this._focused = false;
      this._map.fire('blur');
    },
    _setPanDelta: function _setPanDelta(panDelta) {
      var keys = this._panKeys = {},
        codes = this.keyCodes,
        i,
        len;
      for (i = 0, len = codes.left.length; i < len; i++) {
        keys[codes.left[i]] = [-1 * panDelta, 0];
      }
      for (i = 0, len = codes.right.length; i < len; i++) {
        keys[codes.right[i]] = [panDelta, 0];
      }
      for (i = 0, len = codes.down.length; i < len; i++) {
        keys[codes.down[i]] = [0, panDelta];
      }
      for (i = 0, len = codes.up.length; i < len; i++) {
        keys[codes.up[i]] = [0, -1 * panDelta];
      }
    },
    _setZoomDelta: function _setZoomDelta(zoomDelta) {
      var keys = this._zoomKeys = {},
        codes = this.keyCodes,
        i,
        len;
      for (i = 0, len = codes.zoomIn.length; i < len; i++) {
        keys[codes.zoomIn[i]] = zoomDelta;
      }
      for (i = 0, len = codes.zoomOut.length; i < len; i++) {
        keys[codes.zoomOut[i]] = -zoomDelta;
      }
    },
    _addHooks: function _addHooks() {
      on(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      off(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(e) {
      if (e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }
      var key = e.keyCode,
        map = this._map,
        offset;
      if (key in this._panKeys) {
        if (map._panAnim && map._panAnim._inProgress) {
          return;
        }
        offset = this._panKeys[key];
        if (e.shiftKey) {
          offset = toPoint(offset).multiplyBy(3);
        }
        map.panBy(offset);
        if (map.options.maxBounds) {
          map.panInsideBounds(map.options.maxBounds);
        }
      } else if (key in this._zoomKeys) {
        map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
      } else if (key === 27 && map._popup) {
        map.closePopup();
      } else {
        return;
      }
      stop(e);
    }
  });

  // @section Handlers
  // @section Handlers
  // @property keyboard: Handler
  // Keyboard navigation handler.
  Map.addInitHook('addHandler', 'keyboard', Keyboard);

  /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
    // @section Mousewheel options
    // @option scrollWheelZoom: Boolean|String = true
    // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
    // it will zoom to the center of the view regardless of where the mouse was.
    scrollWheelZoom: true,
    // @option wheelDebounceTime: Number = 40
    // Limits the rate at which a wheel can fire (in milliseconds). By default
    // user can't zoom via wheel more often than once per 40 ms.
    wheelDebounceTime: 40,
    // @option wheelPxPerZoomLevel: Number = 60
    // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
    // mean a change of one full zoom level. Smaller values will make wheel-zooming
    // faster (and vice versa).
    wheelPxPerZoomLevel: 60
  });
  var ScrollWheelZoom = Handler.extend({
    addHooks: function addHooks() {
      on(this._map._container, 'mousewheel', this._onWheelScroll, this);
      this._delta = 0;
    },
    removeHooks: function removeHooks() {
      off(this._map._container, 'mousewheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(e) {
      var delta = getWheelDelta(e);
      var debounce = this._map.options.wheelDebounceTime;
      this._delta += delta;
      this._lastMousePos = this._map.mouseEventToContainerPoint(e);
      if (!this._startTime) {
        this._startTime = +new Date();
      }
      var left = Math.max(debounce - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer);
      this._timer = setTimeout(bind(this._performZoom, this), left);
      stop(e);
    },
    _performZoom: function _performZoom() {
      var map = this._map,
        zoom = map.getZoom(),
        snap = this._map.options.zoomSnap || 0;
      map._stop(); // stop panning and fly animations if any

      // map the delta with a sigmoid function to -4..4 range leaning on -1..1
      var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
        d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
        d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
        delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
      this._delta = 0;
      this._startTime = null;
      if (!delta) {
        return;
      }
      if (map.options.scrollWheelZoom === 'center') {
        map.setZoom(zoom + delta);
      } else {
        map.setZoomAround(this._lastMousePos, zoom + delta);
      }
    }
  });

  // @section Handlers
  // @property scrollWheelZoom: Handler
  // Scroll wheel zoom handler.
  Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

  /*
   * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
    // @section Touch interaction options
    // @option tap: Boolean = true
    // Enables mobile hacks for supporting instant taps (fixing 200ms click
    // delay on iOS/Android) and touch holds (fired as `contextmenu` events).
    tap: true,
    // @option tapTolerance: Number = 15
    // The max number of pixels a user can shift his finger during touch
    // for it to be considered a valid tap.
    tapTolerance: 15
  });
  var Tap = Handler.extend({
    addHooks: function addHooks() {
      on(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function removeHooks() {
      off(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function _onDown(e) {
      if (!e.touches) {
        return;
      }
      preventDefault(e);
      this._fireClick = true;

      // don't simulate click or track longpress if more than 1 touch
      if (e.touches.length > 1) {
        this._fireClick = false;
        clearTimeout(this._holdTimeout);
        return;
      }
      var first = e.touches[0],
        el = first.target;
      this._startPos = this._newPos = new Point(first.clientX, first.clientY);

      // if touching a link, highlight it
      if (el.tagName && el.tagName.toLowerCase() === 'a') {
        addClass(el, 'leaflet-active');
      }

      // simulate long hold but setting a timeout
      this._holdTimeout = setTimeout(bind(function () {
        if (this._isTapValid()) {
          this._fireClick = false;
          this._onUp();
          this._simulateEvent('contextmenu', first);
        }
      }, this), 1000);
      this._simulateEvent('mousedown', first);
      on(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);
    },
    _onUp: function _onUp(e) {
      clearTimeout(this._holdTimeout);
      off(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);
      if (this._fireClick && e && e.changedTouches) {
        var first = e.changedTouches[0],
          el = first.target;
        if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
          removeClass(el, 'leaflet-active');
        }
        this._simulateEvent('mouseup', first);

        // simulate click if the touch didn't move too much
        if (this._isTapValid()) {
          this._simulateEvent('click', first);
        }
      }
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(e) {
      var first = e.touches[0];
      this._newPos = new Point(first.clientX, first.clientY);
      this._simulateEvent('mousemove', first);
    },
    _simulateEvent: function _simulateEvent(type, e) {
      var simulatedEvent = document.createEvent('MouseEvents');
      simulatedEvent._simulated = true;
      e.target._simulatedClick = true;
      simulatedEvent.initMouseEvent(type, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
      e.target.dispatchEvent(simulatedEvent);
    }
  });

  // @section Handlers
  // @property tap: Handler
  // Mobile touch hacks (quick tap and touch hold) handler.
  if (touch && !pointer) {
    Map.addInitHook('addHandler', 'tap', Tap);
  }

  /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
    // @section Touch interaction options
    // @option touchZoom: Boolean|String = *
    // Whether the map can be zoomed by touch-dragging with two fingers. If
    // passed `'center'`, it will zoom to the center of the view regardless of
    // where the touch events (fingers) were. Enabled for touch-capable web
    // browsers except for old Androids.
    touchZoom: touch && !android23,
    // @option bounceAtZoomLimits: Boolean = true
    // Set it to false if you don't want the map to zoom beyond min/max zoom
    // and then bounce back when pinch-zooming.
    bounceAtZoomLimits: true
  });
  var TouchZoom = Handler.extend({
    addHooks: function addHooks() {
      addClass(this._map._container, 'leaflet-touch-zoom');
      on(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      removeClass(this._map._container, 'leaflet-touch-zoom');
      off(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(e) {
      var map = this._map;
      if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
        return;
      }
      var p1 = map.mouseEventToContainerPoint(e.touches[0]),
        p2 = map.mouseEventToContainerPoint(e.touches[1]);
      this._centerPoint = map.getSize()._divideBy(2);
      this._startLatLng = map.containerPointToLatLng(this._centerPoint);
      if (map.options.touchZoom !== 'center') {
        this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
      }
      this._startDist = p1.distanceTo(p2);
      this._startZoom = map.getZoom();
      this._moved = false;
      this._zooming = true;
      map._stop();
      on(document, 'touchmove', this._onTouchMove, this);
      on(document, 'touchend', this._onTouchEnd, this);
      preventDefault(e);
    },
    _onTouchMove: function _onTouchMove(e) {
      if (!e.touches || e.touches.length !== 2 || !this._zooming) {
        return;
      }
      var map = this._map,
        p1 = map.mouseEventToContainerPoint(e.touches[0]),
        p2 = map.mouseEventToContainerPoint(e.touches[1]),
        scale = p1.distanceTo(p2) / this._startDist;
      this._zoom = map.getScaleZoom(scale, this._startZoom);
      if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale < 1 || this._zoom > map.getMaxZoom() && scale > 1)) {
        this._zoom = map._limitZoom(this._zoom);
      }
      if (map.options.touchZoom === 'center') {
        this._center = this._startLatLng;
        if (scale === 1) {
          return;
        }
      } else {
        // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
        var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
        if (scale === 1 && delta.x === 0 && delta.y === 0) {
          return;
        }
        this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
      }
      if (!this._moved) {
        map._moveStart(true);
        this._moved = true;
      }
      cancelAnimFrame(this._animRequest);
      var moveFn = bind(map._move, map, this._center, this._zoom, {
        pinch: true,
        round: false
      });
      this._animRequest = requestAnimFrame(moveFn, this, true);
      preventDefault(e);
    },
    _onTouchEnd: function _onTouchEnd() {
      if (!this._moved || !this._zooming) {
        this._zooming = false;
        return;
      }
      this._zooming = false;
      cancelAnimFrame(this._animRequest);
      off(document, 'touchmove', this._onTouchMove);
      off(document, 'touchend', this._onTouchEnd);

      // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
      if (this._map.options.zoomAnimation) {
        this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
      } else {
        this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    }
  });

  // @section Handlers
  // @property touchZoom: Handler
  // Touch zoom handler.
  Map.addInitHook('addHandler', 'touchZoom', TouchZoom);
  Map.BoxZoom = BoxZoom;
  Map.DoubleClickZoom = DoubleClickZoom;
  Map.Drag = Drag;
  Map.Keyboard = Keyboard;
  Map.ScrollWheelZoom = ScrollWheelZoom;
  Map.Tap = Tap;
  Map.TouchZoom = TouchZoom;

  // misc

  var oldL = window.L;
  function noConflict() {
    window.L = oldL;
    return this;
  }

  // Always export us to window global (see #2364)
  window.L = exports;
  Object.freeze = freeze;
  exports.version = version;
  exports.noConflict = noConflict;
  exports.Control = Control;
  exports.control = control;
  exports.Browser = Browser;
  exports.Evented = Evented;
  exports.Mixin = Mixin;
  exports.Util = Util;
  exports.Class = Class;
  exports.Handler = Handler;
  exports.extend = extend;
  exports.bind = bind;
  exports.stamp = stamp;
  exports.setOptions = setOptions;
  exports.DomEvent = DomEvent;
  exports.DomUtil = DomUtil;
  exports.PosAnimation = PosAnimation;
  exports.Draggable = Draggable;
  exports.LineUtil = LineUtil;
  exports.PolyUtil = PolyUtil;
  exports.Point = Point;
  exports.point = toPoint;
  exports.Bounds = Bounds;
  exports.bounds = toBounds;
  exports.Transformation = Transformation;
  exports.transformation = toTransformation;
  exports.Projection = index;
  exports.LatLng = LatLng;
  exports.latLng = toLatLng;
  exports.LatLngBounds = LatLngBounds;
  exports.latLngBounds = toLatLngBounds;
  exports.CRS = CRS;
  exports.GeoJSON = GeoJSON;
  exports.geoJSON = geoJSON;
  exports.geoJson = geoJson;
  exports.Layer = Layer;
  exports.LayerGroup = LayerGroup;
  exports.layerGroup = layerGroup;
  exports.FeatureGroup = FeatureGroup;
  exports.featureGroup = featureGroup;
  exports.ImageOverlay = ImageOverlay;
  exports.imageOverlay = imageOverlay;
  exports.VideoOverlay = VideoOverlay;
  exports.videoOverlay = videoOverlay;
  exports.DivOverlay = DivOverlay;
  exports.Popup = Popup;
  exports.popup = popup;
  exports.Tooltip = Tooltip;
  exports.tooltip = tooltip;
  exports.Icon = Icon;
  exports.icon = icon;
  exports.DivIcon = DivIcon;
  exports.divIcon = divIcon;
  exports.Marker = Marker;
  exports.marker = marker;
  exports.TileLayer = TileLayer;
  exports.tileLayer = tileLayer;
  exports.GridLayer = GridLayer;
  exports.gridLayer = gridLayer;
  exports.SVG = SVG;
  exports.svg = svg$1;
  exports.Renderer = Renderer;
  exports.Canvas = Canvas;
  exports.canvas = canvas$1;
  exports.Path = Path;
  exports.CircleMarker = CircleMarker;
  exports.circleMarker = circleMarker;
  exports.Circle = Circle;
  exports.circle = circle;
  exports.Polyline = Polyline;
  exports.polyline = polyline;
  exports.Polygon = Polygon;
  exports.polygon = polygon;
  exports.Rectangle = Rectangle;
  exports.rectangle = rectangle;
  exports.Map = Map;
  exports.map = createMap;
});
//# sourceMappingURL=leaflet-src.js.map

/***/ })

}]);