(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipment-shipment-module"],{

/***/ "Cphz":
/*!*************************************************************!*\
  !*** ./src/app/modules/shipment/shipment-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShipmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentRoutingModule", function() { return ShipmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipments/shipments.component */ "oeZR");
/* harmony import */ var _createshipments_createshipments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createshipments/createshipments.component */ "vtp3");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/info.component */ "dU1m");







const routes = [
    {
        path: '',
        redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'list',
        component: _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_2__["ShipmentsComponent"],
    },
    {
        path: ':id',
        component: _createshipments_createshipments_component__WEBPACK_IMPORTED_MODULE_3__["CreateshipmentsComponent"],
    },
    {
        path: 'add',
        component: _createshipments_createshipments_component__WEBPACK_IMPORTED_MODULE_3__["CreateshipmentsComponent"],
    },
    {
        path: 'info/:id',
        component: _info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"],
    }
];
class ShipmentRoutingModule {
}
ShipmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShipmentRoutingModule });
ShipmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShipmentRoutingModule_Factory(t) { return new (t || ShipmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShipmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShipmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "GTCo":
/*!*****************************************************!*\
  !*** ./src/app/modules/shipment/shipment.module.ts ***!
  \*****************************************************/
/*! exports provided: ShipmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentModule", function() { return ShipmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shipment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipment-routing.module */ "Cphz");
/* harmony import */ var _createshipments_createshipments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createshipments/createshipments.component */ "vtp3");
/* harmony import */ var _shipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipment.component */ "v/fm");
/* harmony import */ var _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipments/shipments.component */ "oeZR");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/info.component */ "dU1m");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-material-timepicker */ "cw5Z");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-file-uploader */ "77rt");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/material/material.module */ "jAig");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");
/* harmony import */ var _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/utils/skeleton-loader/skeleton-loader.module */ "p8Kd");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "usqr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-date-picker */ "GL1M");
/* harmony import */ var _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../commonpipes/commonpipes.module */ "zRWu");




















class ShipmentModule {
}
ShipmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShipmentModule });
ShipmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShipmentModule_Factory(t) { return new (t || ShipmentModule)(); }, imports: [[
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shipment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShipmentRoutingModule"],
            _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__["CommonpipesModule"],
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__["AngularFileUploaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"],
            _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_12__["SkeletonLoaderModule"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_13__["GalleryModule"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__["LightboxModule"],
            _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_15__["GallerizeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__["CommonpipesModule"],
            ng2_date_picker__WEBPACK_IMPORTED_MODULE_17__["DpDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShipmentModule, { declarations: [_createshipments_createshipments_component__WEBPACK_IMPORTED_MODULE_3__["CreateshipmentsComponent"], _shipment_component__WEBPACK_IMPORTED_MODULE_4__["ShipmentComponent"], _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentsComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"]], imports: [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shipment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShipmentRoutingModule"],
        _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__["CommonpipesModule"],
        angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__["AngularFileUploaderModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
        _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"],
        _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_12__["SkeletonLoaderModule"],
        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_13__["GalleryModule"],
        _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__["LightboxModule"],
        _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_15__["GallerizeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__["CommonpipesModule"],
        ng2_date_picker__WEBPACK_IMPORTED_MODULE_17__["DpDatePickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShipmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_createshipments_createshipments_component__WEBPACK_IMPORTED_MODULE_3__["CreateshipmentsComponent"], _shipment_component__WEBPACK_IMPORTED_MODULE_4__["ShipmentComponent"], _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentsComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"]],
                imports: [
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shipment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShipmentRoutingModule"],
                    _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__["CommonpipesModule"],
                    angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__["AngularFileUploaderModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                    _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"],
                    _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_12__["SkeletonLoaderModule"],
                    _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_13__["GalleryModule"],
                    _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__["LightboxModule"],
                    _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_15__["GallerizeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_18__["CommonpipesModule"],
                    ng2_date_picker__WEBPACK_IMPORTED_MODULE_17__["DpDatePickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dU1m":
/*!*********************************************************!*\
  !*** ./src/app/modules/shipment/info/info.component.ts ***!
  \*********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _shared_modal_filemanager_filemanager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/modal/filemanager/filemanager.component */ "W2Xg");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "I5r7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/shipment.service */ "M6PE");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");
/* harmony import */ var _shared_pipes_yesno_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/yesno.pipe */ "1Ob8");
/* harmony import */ var _shared_pipes_zeroid_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/zeroid.pipe */ "0cSh");





















const _c0 = ["content"];
const _c1 = ["itemTemplate"];
function InfoComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Shipment Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.printPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_ng_container_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.savePDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InfoComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "zeroid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tracking ID ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r8.shipmentId), " ");
} }
function InfoComponent_div_8_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r11.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r11.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r11.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r11.vin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", package_r11.value, "");
} }
function InfoComponent_div_8_div_65_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", package_r11.value, "");
} }
function InfoComponent_div_8_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoComponent_div_8_div_65_div_1_Template, 26, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoComponent_div_8_div_65_div_2_Template, 11, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r11.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r11.type == 2);
} }
function InfoComponent_div_8_div_66_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_8_div_66_tr_25_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_8_div_66_tr_25_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_div_8_div_66_tr_25_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.openGallery(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_8_div_66_tr_25_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.username);
} }
function InfoComponent_div_8_div_66_tr_25_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_div_8_div_66_tr_25_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.openEditFiles(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_8_div_66_tr_25_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_div_8_div_66_tr_25_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.downloadGallery(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_8_div_66_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InfoComponent_div_8_div_66_tr_25_button_4_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InfoComponent_div_8_div_66_tr_25_button_5_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoComponent_div_8_div_66_tr_25_td_6_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InfoComponent_div_8_div_66_tr_25_button_12_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InfoComponent_div_8_div_66_tr_25_button_13_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r19.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.permission.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.date_added);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.permission.control_history_gallery && item_r19.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.file);
} }
function InfoComponent_div_8_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shipment History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_div_8_div_66_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.downloadShipmentGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InfoComponent_div_8_div_66_th_17_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Added Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InfoComponent_div_8_div_66_tr_25_Template, 14, 8, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.permission.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.info.history);
} }
function InfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoComponent_div_8_div_3_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shipper Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shipper Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "EIN|Passport No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Receiver Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Receiver Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Shipment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, InfoComponent_div_8_div_65_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, InfoComponent_div_8_div_66_Template, 26, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Other Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cargo Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "yesno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "yesno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.shipmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.shipper.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.shipperType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.shipper.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.shipper.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.shipper.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.shipper.ein);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.receiver.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.receiver.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.receiver.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.receiver.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.info.packages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.shipmentHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.other.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.containerType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 19, ctx_r2.info.other.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 21, ctx_r2.info.other.akey));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.other.destination_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.info.other.warehouse_name);
} }
function InfoComponent_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r39.src);
} }
function InfoComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoComponent_ng_template_9_ng_container_0_Template, 2, 1, "ng-container", 1);
} if (rf & 2) {
    const index_r37 = ctx.index;
    const type_r38 = ctx.type;
    const currIndex_r40 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r38 === "imageViewer" && index_r37 === currIndex_r40);
} }
class InfoComponent {
    constructor(exportAsService, router, dialog, route, _manager, _shipmentService, auth, gallery, lightbox) {
        this.exportAsService = exportAsService;
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this._manager = _manager;
        this._shipmentService = _shipmentService;
        this.auth = auth;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.lightboxRef = null;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'content'
        };
        this.shipmentHistory = [];
        this.editMode = false;
        this.submitted = false;
        this.info = {};
        this.shipperType = '';
        this.shipper_types = [];
        this.destinations_list = [];
        this.permission = {};
        if (auth.currentUserValue.permission) {
            this.permission = auth.currentUserValue.permission.shipment;
        }
    }
    ngOnInit() {
        this.info = {
            shipper: {
                shipper_id: '',
                name: '',
                email: '',
                phone: '',
                address: '',
                ein: '',
                shipper_type_id: '',
            },
            receiver: {
                receiver_id: '',
                name: '',
                email: '',
                phone: '',
                address: ''
            },
            other: {
                date: '',
                container_type_id: '',
                title: '',
                akey: '',
                destination_name: '',
                destination_id: '',
                warehouse_name: ''
            },
            history: [],
            packages: []
        };
        this.lightboxRef = this.gallery.ref('lightbox');
        this.lightboxRef.setConfig({
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageSize"].Contain,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ThumbnailsPosition"].Top,
            itemTemplate: this.itemTemplate,
            gestures: false
        });
        this.sub = this.route.params.subscribe(params => {
            this.shipmentId = +params['id'];
            if (!isNaN(this.shipmentId)) {
                this.editMode = true;
                this.getShipment(this.shipmentId);
            }
            else {
                this.editMode = false;
                this.shipmentHistory = null;
                this.shipmentId = null;
            }
        });
    }
    getShipment(id) {
        const fdata = new FormData();
        fdata.append('shipment_id', id);
        this._shipmentService.getShipment(fdata).subscribe(data => {
            if (data) {
                if (data.data) {
                    const shipData = data.data.data;
                    const sprData = data.data.shipper;
                    const recData = data.data.receiver;
                    const desData = data.data.destination;
                    const hisData = data.data.history;
                    const pacData = data.data.packages;
                    this.info = {
                        shipper: {
                            shipper_id: sprData.shipper_id,
                            name: sprData.name,
                            email: sprData.email,
                            phone: sprData.phone,
                            address: sprData.address,
                            ein: sprData.ein,
                            shipper_type_id: sprData.shipper_type_id
                        },
                        receiver: {
                            receiver_id: recData.receiver_id,
                            name: recData.name,
                            email: recData.email,
                            phone: recData.phone,
                            address: recData.address,
                        },
                        other: {
                            date: moment__WEBPACK_IMPORTED_MODULE_1__(new Date(shipData.date)).format('DD/MM/YYYY'),
                            container_type_id: shipData.container_type_id,
                            title: parseInt(shipData.title),
                            akey: parseInt(shipData.akey),
                            destination_name: desData.name,
                            destination_id: desData.id,
                            warehouse_name: shipData.warehouse_name,
                        },
                        history: hisData,
                        packages: []
                    };
                    for (let i = 0; i < pacData.length; i++) {
                        let pacItem = JSON.parse(pacData[i].data);
                        if (pacItem.type == '1') {
                            this.info.packages.push({
                                type: parseInt(pacItem.type),
                                year: pacItem.year,
                                model: pacItem.model,
                                mark: pacItem.mark,
                                vin: pacItem.vin,
                                value: pacItem.value
                            });
                        }
                        else if (pacItem.type == '2') {
                            this.info.packages.push({
                                type: parseInt(pacItem.type),
                                description: pacItem.description,
                                value: pacItem.value
                            });
                        }
                    }
                    this._manager.getShipperTypes().subscribe(data => {
                        if (data) {
                            this.shipper_types = data.data;
                            for (let i = 0; i < this.shipper_types.length; i++) {
                                if (this.shipper_types[i].id == sprData.shipper_type_id) {
                                    console.log(sprData.name);
                                    this.shipperType = this.shipper_types[i].name;
                                }
                            }
                        }
                    });
                    this._manager.getContainerTypes().subscribe(data => {
                        if (data) {
                            let ddt = data.data;
                            for (let i = 0; i < ddt.length; i++) {
                                if (ddt[i].id == shipData.container_type_id) {
                                    this.containerType = ddt[i].name;
                                }
                            }
                        }
                    });
                    /*
                    this.dataForm.patchValue({
                      shipper : {
                        shipper_id : sprData.shipper_id,
                        name : sprData.name,
                        email : sprData.email,
                        phone : sprData.phone,
                        address : sprData.address,
                        ein : sprData.ein,
                        shipper_type_id : sprData.shipper_type_id
                      },
                      receiver : {
                        receiver_id : recData.receiver_id,
                        name : recData.name,
                        email : recData.email,
                        phone : recData.phone,
                        address : recData.address,
                      },
                      other : {
                        date : moment(new Date(shipData.date)),
                        container_type_id : shipData.container_type_id,
                        title : parseInt(shipData.title),
                        akey : parseInt(shipData.akey),
                        destination_name : desData.name,
                        destination_id : desData.id
                      }
                    });
                    for(let i = 0 ; i < pacData.length ; i++){
                      let pacItem = JSON.parse(pacData[i].data);
          
                      if(pacItem.type == '1'){
                        this.packageArray.push(this.fb.group({
                          type:[parseInt(pacItem.type)],
                          year : [pacItem.year,Validators.required],
                          model : [pacItem.model,Validators.required],
                          mark : [pacItem.mark,Validators.required],
                          vin : [pacItem.vin,Validators.required],
                          value : [pacItem.value],
                          file : [''],
                          input : [pacItem.input]
                        }));
                      } else if(pacItem.type == '2') {
                        this.packageArray.push(this.fb.group({
                          type:[parseInt(pacItem.type)],
                          description : [pacItem.description,Validators.required],
                          value : [pacItem.value,Validators.required],
                          file : [''],
                          input : [pacItem.input]
                        }));
                      }
          
                    }
                    */
                }
            }
        });
    }
    savePDF() {
        document.body.classList.add('print_mode');
        this.exportAsService.save(this.exportAsConfig, 'shipment_' + this.shipmentId).subscribe(() => {
            setTimeout(() => { document.body.classList.remove('print_mode'); }, 1000);
        });
    }
    printPage() {
        window.print();
    }
    openGallery(_item) {
        if (_item.file.length > 0) {
            this.gallery_items = _item.file.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]({ src: item, thumb: item }));
            this.lightboxRef.load(this.gallery_items);
            //this.lightbox.open(0);
            this.lightbox.open(0, 'lightbox', { panelClass: 'fullscreen' });
        }
    }
    openEditFiles(item) {
        const dialogRef = this.dialog.open(_shared_modal_filemanager_filemanager_component__WEBPACK_IMPORTED_MODULE_3__["FilemanagerComponent"], {
            data: { item: item, type: 'shipment' }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    downloadGallery(item) {
        let formData = new FormData();
        formData.append("history_id", item.history_id);
        this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
            if (event.history_file) {
                window.open(event.history_file, "_blank");
            }
        }, error => {
            this.submitted = false;
        });
    }
    downloadShipmentGallery() {
        let formData = new FormData();
        formData.append("shipment_id", this.shipmentId.toString());
        this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
            if (event.history_file) {
                window.open(event.history_file, "_blank");
            }
        }, error => {
            this.submitted = false;
        });
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_7__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_8__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__["Lightbox"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], viewQuery: function InfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    } }, decls: 11, vars: 4, consts: [[1, "cs-page-header"], [4, "ngIf"], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink"], ["mat-list-icon", ""], ["class", "cs-box", "id", "content", 4, "ngIf"], ["itemTemplate", ""], ["mat-flat-button", "", 3, "click"], [0, "xlink", "href", "#print_ico"], [0, "xlink", "href", "#pdf_ico"], ["id", "content", 1, "cs-box"], [1, "col", "col3-1"], ["class", "main_header", 4, "ngIf"], [1, "col", "col2"], [1, "cs-card"], [1, "col"], [1, "cs-plist"], [4, "ngFor", "ngForOf"], ["class", "col", 4, "ngIf"], [1, "main_header"], ["class", "pck1", 4, "ngIf"], ["class", "pck2", 4, "ngIf"], [1, "pck1"], [1, "pck2"], ["mat-button", "", 1, "hdownload", 3, "click"], [1, "gtable"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "disabled", ""], ["mat-button", "", 3, "click"], [3, "src"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoComponent_span_1_Template, 4, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InfoComponent_ng_container_7_Template, 7, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InfoComponent_div_8_Template, 100, 23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InfoComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/shipments/list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shipmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListIconCssMatStyler"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_16__["ɵb"]], pipes: [_shared_pipes_yesno_pipe__WEBPACK_IMPORTED_MODULE_17__["YesnoPipe"], _shared_pipes_zeroid_pipe__WEBPACK_IMPORTED_MODULE_18__["ZeroidPipe"]], styles: [".pck1[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  background: #f9f9f9;\n  border: 1px solid #ececec;\n  border-radius: 5px;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 20%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 80%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 19%;\n}\n\n.hdownload[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin-top: -10px;\n  min-width: 20px;\n  padding: 0px 10px;\n}\n\n@media screen and (max-width: 900px) {\n  .pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 100%;\n  }\n\n  .cs-plist[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .cs-plist[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxVQUFBO0FBRUo7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBQUY7RUFDRTtJQUNFLFdBQUE7RUFDSjs7RUFHQTtJQUNFLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSxrQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wY2sxICwgLnBjazIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBjazE+ZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMTBweCA3cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgJjpsYXN0LW9mLXR5cGV7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG5cbi5wY2sxPmRpdj5oMiAsIC5wY2syPmRpdj5oMiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucGNrMT5kaXY+aDQgLCAucGNrMj5kaXY+aDQge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnBjazI+ZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCA3cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgJjpsYXN0LW9mLXR5cGV7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gICY6bnRoLW9mLXR5cGUoMil7XG4gICAgd2lkdGg6IDE5JTtcbiAgfVxufVxuXG4uaGRvd25sb2Fke1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCl7XG4gIC5wY2sxPmRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAucGNrMj5kaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICY6bnRoLW9mLXR5cGUoMil7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY3MtcGxpc3Q+ZGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuY3MtcGxpc3Q+ZGl2Omxhc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.scss']
            }]
    }], function () { return [{ type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_7__["ManagerService"] }, { type: _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_8__["ShipmentService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__["Lightbox"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemTemplate']
        }] }); })();


/***/ }),

/***/ "oeZR":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shipment/shipments/shipments.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsComponent", function() { return ShipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_component_files_files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/files/files.component */ "Sftj");
/* harmony import */ var _shared_modal_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modal/confirm/confirm.component */ "AXEG");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_shipmentnotes_shipmentnotes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/shipmentnotes/shipmentnotes.component */ "6HWh");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-export-as */ "I5r7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/shipment.service */ "M6PE");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/utils/skeleton/skeleton.component */ "jsAG");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");
/* harmony import */ var _shared_pipes_zeroid_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/pipes/zeroid.pipe */ "0cSh");
/* harmony import */ var _shared_pipes_customdate_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/pipes/customdate.pipe */ "D4MC");
/* harmony import */ var _shared_pipes_none_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/pipes/none.pipe */ "X62f");
/* harmony import */ var _shared_pipes_yesno_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/pipes/yesno.pipe */ "1Ob8");











































const _c0 = ["itemTemplate"];
const _c1 = ["content"];
function ShipmentsComponent_ng_template_0_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().package;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", package_r46.year, " ", package_r46.model, " ", package_r46.mark, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r46.vin);
} }
function ShipmentsComponent_ng_template_0_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().package;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r46.description);
} }
function ShipmentsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_0_td_0_Template, 6, 4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_ng_template_0_td_1_Template, 3, 1, "td", 11);
} if (rf & 2) {
    const package_r46 = ctx.package;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r46.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r46.type == 2);
} }
function ShipmentsComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Shipment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/shipments/add");
} }
function ShipmentsComponent_mat_form_field_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shipper Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.shipperName);
} }
function ShipmentsComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r51.name, " ");
} }
function ShipmentsComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r52.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r52.name, " ");
} }
function ShipmentsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ShipmentsComponent_div_57_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function ShipmentsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_div_57_mat_spinner_1_Template, 1, 0, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLoadingResults);
} }
function ShipmentsComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tracking ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_td_62_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const element_r54 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.expandedElement = ctx_r55.expandedElement === element_r54 ? null : element_r54; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "zeroid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r54.shipment_id), " ");
} }
function ShipmentsComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { package: a0 }; };
function ShipmentsComponent_td_65_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, package_r59));
} }
function ShipmentsComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShipmentsComponent_td_65_tr_2_Template, 2, 4, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r57.packages);
} }
function ShipmentsComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "customdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r61.date), " ");
} }
function ShipmentsComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shipper Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r62.shipper_name, " ");
} }
function ShipmentsComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Receiver Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r63.receiver_name, " ");
} }
function ShipmentsComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r64.destination_name, " ");
} }
function ShipmentsComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Warehouse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r65.warehouse_name), " ");
} }
function ShipmentsComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r66.shipment_status), " ");
} }
function ShipmentsComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CARGO TYPE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r67.container_type, " ");
} }
function ShipmentsComponent_th_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Container No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a1) { return ["/admin/containers/info", a1]; };
function ShipmentsComponent_td_89_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, element_r68.container_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, element_r68.container_no));
} }
function ShipmentsComponent_td_89_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r68.container_no));
} }
function ShipmentsComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_td_89_button_1_Template, 3, 6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShipmentsComponent_td_89_button_2_Template, 3, 3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r68.container_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r68.container_no);
} }
function ShipmentsComponent_th_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "yesno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r73.title), " ");
} }
function ShipmentsComponent_th_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "yesno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r74.akey), " ");
} }
function ShipmentsComponent_th_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_98_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_td_98_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const element_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.updateNotes(element_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShipmentsComponent_td_98_button_2_Template, 3, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r75 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.userId == element_r75.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r75.note);
} }
function ShipmentsComponent_th_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a1) { return ["/admin/shipments/", a1]; };
function ShipmentsComponent_td_101_ng_container_16_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c4, element_r80.shipment_id));
} }
function ShipmentsComponent_td_101_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_td_101_ng_container_16_button_1_Template, 5, 3, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r80.shipment_status_id == ctx_r82.pending_status_id);
} }
function ShipmentsComponent_td_101_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c4, element_r80.shipment_id));
} }
function ShipmentsComponent_td_101_ng_container_18_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_td_101_ng_container_18_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const element_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.deleteShipment(element_r80.shipment_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_td_101_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShipmentsComponent_td_101_ng_container_18_button_1_Template, 5, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r80.shipment_status_id == ctx_r84.pending_status_id);
} }
function ShipmentsComponent_td_101_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_td_101_ng_container_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const element_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.deleteShipment(element_r80.shipment_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ShipmentsComponent_td_101_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_td_101_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const element_r80 = ctx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.openPhoto(element_r80.shipment_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_td_101_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const element_r80 = ctx.$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.openFiles(element_r80.shipment_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShipmentsComponent_td_101_ng_container_16_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ShipmentsComponent_td_101_ng_container_17_Template, 6, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShipmentsComponent_td_101_ng_container_18_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShipmentsComponent_td_101_ng_container_19_Template, 6, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.pms.update && ctx_r37.pms.disable_after_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.pms.update && !ctx_r37.pms.disable_after_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.pms.delete && ctx_r37.pms.disable_after_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.pms.delete && !ctx_r37.pms.disable_after_pending);
} }
function ShipmentsComponent_th_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c5 = function (a1) { return ["/admin/shipments/info", a1]; };
function ShipmentsComponent_td_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c5, element_r101.shipment_id));
} }
function ShipmentsComponent_tr_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 76);
} }
function ShipmentsComponent_tr_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 77);
} }
function ShipmentsComponent_ng_template_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skeleton", 78);
} }
function ShipmentsComponent_ng_template_110_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r105.src);
} }
function ShipmentsComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_110_ng_container_0_Template, 2, 1, "ng-container", 11);
} if (rf & 2) {
    const index_r103 = ctx.index;
    const type_r104 = ctx.type;
    const currIndex_r106 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r104 === "imageViewer" && index_r103 === currIndex_r106);
} }
const _c6 = function () { return [10, 20, 30, 100]; };
class ShipmentsComponent {
    constructor(exportAsService, router, dialog, shipmentService, _manager, auth, gallery, lightbox) {
        this.exportAsService = exportAsService;
        this.router = router;
        this.dialog = dialog;
        this.shipmentService = shipmentService;
        this._manager = _manager;
        this.auth = auth;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'content'
        };
        this.lightboxRef = null;
        this.warehouses_list = [];
        this.shippment_statuses = [];
        this.shipmentStatusId = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.warehouseId = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.shipmentVehicle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.shipmentVehicleValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.shipperName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.dateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.descriptionCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.receiverName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.destinationName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.trackingId = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.pageSize = 20;
        this.searchTerms = {
            shipper_name: '',
            date: '',
            receiver_name: '',
            description: '',
            shipment_status_id: '',
            warehouse_id: '',
            package_type: '',
            package_value: '',
            destination_name: '',
            shipment_id: ''
        };
        this.loaded = false;
        this.pms = {};
        this.userId = 0;
        this.pending_status_id = 0;
        this.displayedColumns = ['shipment_id', 'receiver_name', 'destination_name', 'container_no', 'title', 'akey', 'status', 'container_type', 'files', 'image', 'view', 'update', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.pending_status_id = this.auth.currentUserValue.pending_status_id;
        if (auth.currentUserValue.permission) {
            this.userId = auth.currentUserValue.user_id;
            this.pms = auth.currentUserValue.permission.shipment;
            let filteredPermission = ['shipment_id'];
            if (this.pms.view_shipper) {
                filteredPermission.push('shipper_name');
            }
            filteredPermission.push('receiver_name', 'description', 'date', 'destination_name', 'warehouse_name', 'container_no');
            filteredPermission.push('title', 'akey', 'status', 'container_type', 'note');
            if (this.pms.view) {
                filteredPermission.push('view');
            }
            filteredPermission.push('actions');
            /*
            if(this.pms.update){
              filteredPermission.push('update');
            }
            if(this.pms.delete){
              filteredPermission.push('delete');
            }
            */
            this.displayedColumns = filteredPermission;
        }
    }
    resetFilter() {
        this.searchTerms = {
            shipper_name: '',
            date: '',
            receiver_name: '',
            description: '',
            shipment_status_id: '',
            warehouse_id: '',
            destination_name: '',
            package_type: '',
            package_value: '',
            shipment_id: ''
        };
        this.warehouseId.setValue('');
        this.shipmentStatusId.setValue('');
        this.warehouseId.setValue('');
        this.shipmentVehicle.setValue('');
        this.shipmentVehicleValue.setValue('');
        this.shipperName.setValue('');
        this.descriptionCtrl.setValue('');
        this.dateCtrl.setValue('');
        this.receiverName.setValue('');
        this.destinationName.setValue('');
        this.trackingId.setValue('');
        this.paginator.pageIndex = 0;
        this.callSubject.next();
    }
    deleteShipment(id) {
        const dialogRef = this.dialog.open(_shared_modal_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
            data: { title: 'Are you sure?', id: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const fdata = new FormData();
                fdata.append('shipment_id', result);
                this.shipmentService.deleteShipment(fdata).subscribe(data => {
                    this.dataSource.data = this.dataSource.data.filter(row => row.shipment_id != result);
                });
            }
        });
    }
    ngOnInit() {
        this.callSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.callSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(() => {
            this.isLoadingResults = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(500)).subscribe(() => {
            this.activeNavigation();
        });
        this.trackingId.valueChanges.subscribe(data => {
            this.searchTerms.shipment_id = data;
            this.applyFilter(data);
        });
        this.shipperName.valueChanges.subscribe(data => {
            this.searchTerms.shipper_name = data;
            this.applyFilter(data);
        });
        this.dateCtrl.valueChanges.subscribe(data => {
            this.searchTerms.date = data ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(data)).format('YYYY-MM-DD') : '';
            this.applyFilter(this.searchTerms.date);
        });
        this.descriptionCtrl.valueChanges.subscribe(data => {
            this.searchTerms.description = data;
            this.applyFilter(this.searchTerms.description);
        });
        this.receiverName.valueChanges.subscribe(data => {
            this.searchTerms.receiver_name = data;
            this.applyFilter(data);
        });
        this.destinationName.valueChanges.subscribe(data => {
            this.searchTerms.destination_name = data;
            this.applyFilter(data);
        });
        this.warehouseId.valueChanges.subscribe(data => {
            this.searchTerms.warehouse_id = data;
            this.applyFilter(data);
        });
        this.shipmentStatusId.valueChanges.subscribe(data => {
            this.searchTerms.shipment_status_id = data;
            this.applyFilter(data);
        });
        this.shipmentVehicle.valueChanges.subscribe(data => {
            this.searchTerms.package_type = data;
            this.applyFilter(data);
        });
        this.shipmentVehicleValue.valueChanges.subscribe(data => {
            this.searchTerms.package_value = data;
            this.applyFilter(data);
        });
        this.dataSource.filterPredicate = (data, filter) => {
            let pass_package = true;
            if (this.searchTerms.package_type) {
                if (this.searchTerms.package_type == '0') {
                    pass_package = true;
                }
                else {
                    for (let oi = 0; oi < data.packages.length; oi++) {
                        if (data.packages[oi][this.searchTerms.package_type]) {
                            if (data.packages[oi][this.searchTerms.package_type].toString().toLowerCase().indexOf(this.searchTerms.package_value) !== -1) {
                                pass_package = true;
                            }
                            else {
                                pass_package = false;
                            }
                        }
                        else {
                            pass_package = false;
                        }
                    }
                }
            }
            return (data.shipper_name && data.shipper_name.toLowerCase().indexOf(this.searchTerms.shipper_name) !== -1)
                && data.shipment_id.toString().toLowerCase().indexOf(this.searchTerms.shipment_id) !== -1
                && data.warehouse_id.toString().toLowerCase().indexOf(this.searchTerms.warehouse_id) !== -1
                && (data.receiver_name && data.receiver_name.toString().toLowerCase().indexOf(this.searchTerms.receiver_name) !== -1)
                && data.shipment_status_id.toString().toLowerCase().indexOf(this.searchTerms.shipment_status_id) !== -1
                && (data.destination_name && data.destination_name.toLowerCase().indexOf(this.searchTerms.destination_name) !== -1) && pass_package;
        };
        this.lightboxRef = this.gallery.ref('lightbox');
        this.lightboxRef.setConfig({
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["ImageSize"].Contain,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["ThumbnailsPosition"].Top,
            itemTemplate: this.itemTemplate,
            gestures: false
        });
    }
    ngAfterViewInit() {
        this.activeNavigation();
    }
    activeNavigation() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(() => {
            this.isLoadingResults = true;
            return this.shipmentService.getShipments({ sort: this.sort.active, order: this.sort.direction, pagesize: this.paginator.pageSize, page: this.paginator.pageIndex + 1, filter: Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|') });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(data => {
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(() => {
            this.isLoadingResults = false;
            this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])([]);
        })).subscribe(data => {
            this.dataSource.data = data;
            if (!this.loaded) {
                this._manager.getShipmentStatuses().subscribe(data => {
                    if (data) {
                        this.shippment_statuses = data.data;
                    }
                    this._manager.getWarehouses().subscribe(data => {
                        if (data) {
                            this.warehouses_list = data.data;
                        }
                        this.loaded = true;
                        setTimeout(() => {
                            this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
                            /*
                            this.dataSource.paginator = this.paginator;
                            this.dataSource.sort = this.sort;
                            */
                        }, 0);
                    });
                });
            }
            else {
            }
        });
    }
    applyFilter(val) {
        let filterValue = val.toString();
        this.paginator.pageIndex = 0;
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.callSubject.next();
        //this.dataSource.filter = filterValue;
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.shipment_id}`;
    }
    openPhoto(_shipment_id) {
        let formData = new FormData();
        formData.append('shipment_id', _shipment_id);
        this.shipmentService.getShipmentHistory(formData).subscribe(data => {
            if (data) {
                let _dataImages = [];
                for (let i = 0; i < data.data.length; i++) {
                    let files = data.data[i].file;
                    if (files && files.length > 0) {
                        for (let j = 0; j < files.length; j++) {
                            _dataImages.push(files[j]);
                        }
                    }
                    //this.images.push({path : data.data[i].file});
                }
                if (_dataImages.length > 0) {
                    this.gallery_items = _dataImages.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["ImageItem"]({ src: item, thumb: item }));
                    this.lightboxRef.load(this.gallery_items);
                    this.lightbox.open(0, 'lightbox', { panelClass: 'fullscreen' });
                }
            }
        });
        /*
        const dialogRef = this.dialog.open(GalleryComponent, {
          data: {shipment_id : $shipment_id}
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
        */
    }
    updateNotes(item) {
        const dialogRef = this.dialog.open(_shared_shipmentnotes_shipmentnotes_component__WEBPACK_IMPORTED_MODULE_12__["ShipmentnotesComponent"], {
            data: { item: item }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
    openFiles($shipment_id) {
        const dialogRef = this.dialog.open(_shared_component_files_files_component__WEBPACK_IMPORTED_MODULE_5__["FilesComponent"], {
            data: { shipment_id: $shipment_id }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    savePDF() {
        document.body.classList.add('print_mode');
        this.exportAsService.save(this.exportAsConfig, 'shipments').subscribe(() => {
            setTimeout(() => { document.body.classList.remove('print_mode'); }, 1000);
        });
    }
    printPage() {
        window.print();
    }
}
ShipmentsComponent.ɵfac = function ShipmentsComponent_Factory(t) { return new (t || ShipmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_13__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_16__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_19__["Lightbox"])); };
ShipmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShipmentsComponent, selectors: [["app-shipments"]], viewQuery: function ShipmentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 112, vars: 22, consts: [["packageItem", ""], [1, "cs-page-header"], ["mat-list-icon", ""], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink", 4, "ngIf"], ["mat-flat-button", "", 3, "click"], [0, "xlink", "href", "#print_ico"], [0, "xlink", "href", "#pdf_ico"], [1, "cs-box"], [1, "form-filter"], ["type", "text", "matInput", "", 3, "formControl"], [4, "ngIf"], [3, "formControl"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Date", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["pickpicker", ""], ["type", "text", "matInput", "", "autocomplete", "off", 3, "formControl"], [1, "filter-btn"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mat-elevation-z8"], [4, "ngIf", "ngIfElse"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", "matSortActive", "shipment_id", "matSortDirection", "desc", "id", "content", 3, "hidden", "dataSource"], ["content", ""], ["matColumnDef", "shipment_id"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "shipper_name"], ["matColumnDef", "receiver_name"], ["matColumnDef", "destination_name", "disableClear", ""], ["matColumnDef", "warehouse_name", "disableClear", ""], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "container_type"], ["matColumnDef", "container_no"], ["matColumnDef", "title"], ["matColumnDef", "akey"], ["matColumnDef", "note"], ["matColumnDef", "actions"], ["matColumnDef", "view"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length"], ["rowsPlaceHolder", ""], ["itemTemplate", ""], ["mat-flat-button", "", 3, "routerLink"], [3, "value"], [1, "loading-shade"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-header-cell", ""], ["mat-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], ["mat-button", "", "color", "primary", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "primary"], [1, "txtibtn"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "aria-label", "Actions", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "warn", 3, "click"], ["mat-menu-item", "", "aria-label", "Edit", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Edit", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Edit", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Edit", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], ["type", "rows"], [3, "src"]], template: function ShipmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Shipments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShipmentsComponent_a_8_Template, 4, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_Template_button_click_9_listener() { return ctx.printPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_Template_button_click_12_listener() { return ctx.savePDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "use", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ShipmentsComponent_mat_form_field_22_Template, 4, 1, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "All Statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ShipmentsComponent_mat_option_29_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "All Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ShipmentsComponent_mat_option_36_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShipmentsComponent_Template_button_click_53_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ShipmentsComponent_div_56_Template, 1, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ShipmentsComponent_div_57_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ShipmentsComponent_th_61_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ShipmentsComponent_td_62_Template, 3, 3, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ShipmentsComponent_th_64_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ShipmentsComponent_td_65_Template, 3, 1, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ShipmentsComponent_th_67_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ShipmentsComponent_td_68_Template, 3, 3, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ShipmentsComponent_th_70_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ShipmentsComponent_td_71_Template, 2, 1, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ShipmentsComponent_th_73_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ShipmentsComponent_td_74_Template, 2, 1, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ShipmentsComponent_th_76_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ShipmentsComponent_td_77_Template, 2, 1, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ShipmentsComponent_th_79_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ShipmentsComponent_td_80_Template, 3, 3, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ShipmentsComponent_th_82_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ShipmentsComponent_td_83_Template, 3, 3, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ShipmentsComponent_th_85_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ShipmentsComponent_td_86_Template, 2, 1, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ShipmentsComponent_th_88_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ShipmentsComponent_td_89_Template, 3, 2, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](90, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ShipmentsComponent_th_91_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ShipmentsComponent_td_92_Template, 3, 3, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](93, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, ShipmentsComponent_th_94_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ShipmentsComponent_td_95_Template, 3, 3, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](96, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, ShipmentsComponent_th_97_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ShipmentsComponent_td_98_Template, 5, 2, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](99, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ShipmentsComponent_th_100_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ShipmentsComponent_td_101_Template, 20, 5, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](102, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, ShipmentsComponent_th_103_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ShipmentsComponent_td_104_Template, 4, 3, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ShipmentsComponent_tr_105_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ShipmentsComponent_tr_106_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "mat-paginator", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ShipmentsComponent_ng_template_108_Template, 1, 0, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ShipmentsComponent_ng_template_110_Template, 1, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pms.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.trackingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pms.view_shipper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.shipmentStatusId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shippment_statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.warehouseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.destinationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r6)("formControl", ctx.dateCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.descriptionCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && (ctx.isLoadingResults || ctx.isRateLimitReached));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loaded)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6))("length", ctx.resultsLength);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepicker"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_31__["SkeletonComponent"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_32__["ɵb"]], pipes: [_shared_pipes_zeroid_pipe__WEBPACK_IMPORTED_MODULE_33__["ZeroidPipe"], _shared_pipes_customdate_pipe__WEBPACK_IMPORTED_MODULE_34__["CustomdatePipe"], _shared_pipes_none_pipe__WEBPACK_IMPORTED_MODULE_35__["NonePipe"], _shared_pipes_yesno_pipe__WEBPACK_IMPORTED_MODULE_36__["YesnoPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n}\n\n.mat-column-select[_ngcontent-%COMP%] {\n  width: 66px;\n}\n\n.mat-column-container_type[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-column-view[_ngcontent-%COMP%], .mat-column-print[_ngcontent-%COMP%], .mat-column-update[_ngcontent-%COMP%], .mat-column-delete[_ngcontent-%COMP%] {\n  width: 56px;\n  text-align: center !important;\n}\n\n.mat-column-note[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.mat-column-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ea4141;\n}\n\n.mat-column-update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2ba7ff;\n}\n\n.mat-column-print[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #68c362;\n}\n\n.mat-column-view[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d0b142;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]     .mat-figure {\n  align-items: start;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 0px 0px 20px 0px;\n  margin-right: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 13px 0px;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n}\n\n.filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]:not(.sp-expanded-row) {\n  background: whitesmoke;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]:not(.sp-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]:not(.sp-expanded-row):active {\n  background: #efefef;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0px 7px;\n}\n\n.sp-element-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sp-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.sp-element-row.sp-expanded-row[_ngcontent-%COMP%]   .mat-cell.cdk-column-tracking_id[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n  top: 20px;\n}\n\n.sp-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: block;\n}\n\n.txtibtn[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.txtibtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 0px;\n  width: auto;\n  min-width: auto;\n  height: auto;\n  border: 1px solid #e4e4e4;\n  min-height: auto;\n  line-height: 1;\n}\n\n.sp-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  font-weight: lighter;\n  margin: 8px 0;\n}\n\n.mat-column-destination_name[_ngcontent-%COMP%], .mat-column-container_no[_ngcontent-%COMP%], .mat-column-warehouse_name[_ngcontent-%COMP%] {\n  width: 55px;\n}\n\n.mat-column-destination_name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .mat-column-container_no[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .mat-column-warehouse_name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 0px;\n  width: 100%;\n  white-space: normal;\n  line-height: 1.5;\n}\n\n.pck1[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  background: #f9f9f9;\n  border: 1px solid #ececec;\n  border-radius: 5px;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 20%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 16px;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 80%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 19%;\n}\n\n@media screen and (max-width: 900px) {\n  .pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 100%;\n  }\n\n  .sp-element-diagram[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .sp-element-diagram[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYmxlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNoaXBtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNKRjs7QUExQ0E7RUFDRSxhQUFBO0VBQ0Msc0JBQUE7QUE2Q0g7O0FBdkNJO0VBQ0Usa0JBQUE7QUEwQ047O0FBbkNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQXNDRjs7QUFuQ0k7RUFDRSxpQkFBQTtBQXFDTjs7QUE5QkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0UsV0FBQTtBQWlDRjs7QUE1QkU7RUFDRSxTQUFBO0FBK0JKOztBQTlCSTtFQUNFLHNCQUFBO0FBZ0NOOztBQS9CTTtFQUNFLHNCQUFBO0FBaUNSOztBQS9CTTtFQUNFLG1CQUFBO0FBaUNSOztBQTlCSTtFQUNFLGdCQUFBO0FBZ0NOOztBQVpBO0VBQ0Usa0JBQUE7QUFlRjs7QUFkRTtFQUNFLHNCQUFBO0FBZ0JKOztBQVhNO0VBQ0Usd0JBQUE7RUFDQSxTQUFBO0FBYVI7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFTRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVUo7O0FBTEE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBUUY7O0FBSkE7RUFDRSxXQUFBO0FBT0Y7O0FBTkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBSkU7RUFDRSxrQkFBQTtBQU1KOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUpFO0VBQ0Usa0JBQUE7QUFNSjs7QUFKRTtFQUNFLFVBQUE7QUFNSjs7QUFBQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFHRjs7RUFBQTtJQUNFLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBR0Y7RUFGRTtJQUNFLFdBQUE7RUFJSjs7RUFBQTtJQUNFLG1CQUFBO0VBR0Y7O0VBQUE7SUFDRSxrQkFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic2hpcG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejh7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tc2VsZWN0e1xuICB3aWR0aDogNjZweDtcbn1cblxuLm1hdC1jb2x1bW4tY29udGFpbmVyX3R5cGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ubWF0LWNvbHVtbi12aWV3LCAubWF0LWNvbHVtbi1wcmludCwubWF0LWNvbHVtbi11cGRhdGUsLm1hdC1jb2x1bW4tZGVsZXRlIHtcbiAgd2lkdGg6NTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLW5vdGV7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuXG5cblxuLm1hdC1jb2x1bW4tZGVsZXRlIG1hdC1pY29uIHtcbiAgY29sb3I6ICNlYTQxNDE7XG59XG5cbi5tYXQtY29sdW1uLXVwZGF0ZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMmJhN2ZmO1xufVxuXG4ubWF0LWNvbHVtbi1wcmludCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjNjhjMzYyO1xufVxuXG4ubWF0LWNvbHVtbi12aWV3IG1hdC1pY29uIHtcbiAgY29sb3I6ICNkMGIxNDI7XG59XG5cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXNlbGVjdCB7XG4gIHdpZHRoOiA2NnB4O1xufVxuXG4ubWF0LWNvbHVtbi1jb250YWluZXJfdHlwZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1jb2x1bW4tdmlldywgLm1hdC1jb2x1bW4tcHJpbnQsIC5tYXQtY29sdW1uLXVwZGF0ZSwgLm1hdC1jb2x1bW4tZGVsZXRlIHtcbiAgd2lkdGg6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1ub3RlIHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1kZWxldGUgbWF0LWljb24ge1xuICBjb2xvcjogI2VhNDE0MTtcbn1cblxuLm1hdC1jb2x1bW4tdXBkYXRlIG1hdC1pY29uIHtcbiAgY29sb3I6ICMyYmE3ZmY7XG59XG5cbi5tYXQtY29sdW1uLXByaW50IG1hdC1pY29uIHtcbiAgY29sb3I6ICM2OGMzNjI7XG59XG5cbi5tYXQtY29sdW1uLXZpZXcgbWF0LWljb24ge1xuICBjb2xvcjogI2QwYjE0Mjtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1ncmlkLXRpbGUgOjpuZy1kZWVwIC5tYXQtZmlndXJlIHtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweCAwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbm1hdC1mb3JtLWZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAxM3B4IDBweDtcbn1cblxuLmZpbHRlci1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLmZpbHRlci1idG4gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLnNwLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG50ci5zcC1kZXRhaWwtcm93Om5vdCguc3AtZXhwYW5kZWQtcm93KSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG50ci5zcC1kZXRhaWwtcm93Om5vdCguc3AtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG50ci5zcC1kZXRhaWwtcm93Om5vdCguc3AtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxudHIuc3AtZGV0YWlsLXJvdyB0ZCB7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5zcC1lbGVtZW50LXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zcC1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4uc3AtZWxlbWVudC1yb3cuc3AtZXhwYW5kZWQtcm93IC5tYXQtY2VsbC5jZGstY29sdW1uLXRyYWNraW5nX2lkOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0b3A6IDIwcHg7XG59XG5cbi5zcC1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udHh0aWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50eHRpYnRuIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnNwLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5tYXQtY29sdW1uLWRlc3RpbmF0aW9uX25hbWUsIC5tYXQtY29sdW1uLWNvbnRhaW5lcl9ubywgLm1hdC1jb2x1bW4td2FyZWhvdXNlX25hbWUge1xuICB3aWR0aDogNTVweDtcbn1cbi5tYXQtY29sdW1uLWRlc3RpbmF0aW9uX25hbWUgYnV0dG9uLCAubWF0LWNvbHVtbi1jb250YWluZXJfbm8gYnV0dG9uLCAubWF0LWNvbHVtbi13YXJlaG91c2VfbmFtZSBidXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wY2sxLCAucGNrMiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGNrMSA+IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDEwcHggN3B4IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlY2VjZWM7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ucGNrMSA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5wY2sxID4gZGl2ID4gaDIsIC5wY2syID4gZGl2ID4gaDIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGNrMSA+IGRpdiA+IGg0LCAucGNrMiA+IGRpdiA+IGg0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wY2syID4gZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCA3cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5wY2syID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5wY2syID4gZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgd2lkdGg6IDE5JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnBjazEgPiBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLnBjazIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wY2syID4gZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zcC1lbGVtZW50LWRpYWdyYW0gPiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuc3AtZWxlbWVudC1kaWFncmFtID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShipmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shipments',
                templateUrl: './shipments.component.html',
                styleUrls: ['./shipments.component.scss']
            }]
    }], function () { return [{ type: ngx_export_as__WEBPACK_IMPORTED_MODULE_13__["ExportAsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }, { type: _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_16__["ShipmentService"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["ManagerService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_19__["Lightbox"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemTemplate']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "v/fm":
/*!********************************************************!*\
  !*** ./src/app/modules/shipment/shipment.component.ts ***!
  \********************************************************/
/*! exports provided: ShipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentComponent", function() { return ShipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class ShipmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShipmentComponent.ɵfac = function ShipmentComponent_Factory(t) { return new (t || ShipmentComponent)(); };
ShipmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShipmentComponent, selectors: [["app-shipment"]], decls: 1, vars: 0, template: function ShipmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShipmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shipment',
                templateUrl: './shipment.component.html',
                styleUrls: ['./shipment.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vtp3":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shipment/createshipments/createshipments.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateshipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateshipmentsComponent", function() { return CreateshipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_component_receiver_receiver_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/component/receiver/receiver.component */ "enEE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "DejY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _shared_modal_image_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/modal/image/image.component */ "yZJs");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_modal_filemanager_filemanager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/modal/filemanager/filemanager.component */ "W2Xg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/services/shipment.service */ "M6PE");
/* harmony import */ var _shared_services_shipper_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/services/shipper.service */ "2DQX");
/* harmony import */ var _shared_services_receiver_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/services/receiver.service */ "sORc");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");
/* harmony import */ var _shared_pipes_zeroid_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/pipes/zeroid.pipe */ "0cSh");










































const _c0 = ["itemTemplate"];
function CreateshipmentsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "zeroid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tracking ID ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.shipmentId), " ");
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function CreateshipmentsComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, (ctx_r3.shipperForm.name.touched || ctx_r3.submitted) && (ctx_r3.shipperForm.name.errors == null ? null : ctx_r3.shipperForm.name.errors.required)));
} }
function CreateshipmentsComponent_ng_container_26_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r27.name, " ");
} }
function CreateshipmentsComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateshipmentsComponent_ng_container_26_Template_mat_autocomplete_optionSelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onShipperSelectionChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateshipmentsComponent_ng_container_26_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r4.displayShipper());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r4.filteredShippers));
} }
function CreateshipmentsComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r30.name, " ");
} }
function CreateshipmentsComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreateshipmentsComponent_ng_container_61_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r33.name, " ");
} }
function CreateshipmentsComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", 54, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateshipmentsComponent_ng_container_61_Template_mat_autocomplete_optionSelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onReceiverSelectionChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateshipmentsComponent_ng_container_61_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r7.displayReceiver());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r7.filteredReceivers));
} }
function CreateshipmentsComponent_div_82_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Vin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_div_82_ng_container_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.deletePackage(i_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreateshipmentsComponent_div_82_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_div_82_ng_container_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.deletePackage(i_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreateshipmentsComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateshipmentsComponent_div_82_ng_container_1_Template, 26, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateshipmentsComponent_div_82_ng_container_2_Template, 14, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r36.value.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r36.value.type == 2);
} }
function CreateshipmentsComponent_div_92_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_92_tr_25_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_92_tr_25_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_div_92_tr_25_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.openGallery(item_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_92_tr_25_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.username);
} }
function CreateshipmentsComponent_div_92_tr_25_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_div_92_tr_25_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.openEditFiles(item_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_92_tr_25_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_div_92_tr_25_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.downloadGallery(item_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_92_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateshipmentsComponent_div_92_tr_25_button_4_Template, 3, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateshipmentsComponent_div_92_tr_25_button_5_Template, 3, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateshipmentsComponent_div_92_tr_25_td_6_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateshipmentsComponent_div_92_tr_25_button_12_Template, 3, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateshipmentsComponent_div_92_tr_25_button_13_Template, 3, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r48.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r48.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.permission.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.date_added);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.permission.control_history_gallery && item_r48.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r48.file);
} }
function CreateshipmentsComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shipment History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_div_92_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.downloadShipmentGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateshipmentsComponent_div_92_th_17_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Added Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateshipmentsComponent_div_92_tr_25_Template, 14, 8, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.permission.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.shipmentHistory);
} }
function CreateshipmentsComponent_mat_option_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r66.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r66.name, " ");
} }
function CreateshipmentsComponent_ng_container_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreateshipmentsComponent_ng_container_137_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r69.name, " ");
} }
function CreateshipmentsComponent_ng_container_137_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", 54, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateshipmentsComponent_ng_container_137_Template_mat_autocomplete_optionSelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.onDestinationSelectionChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateshipmentsComponent_ng_container_137_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r14.displayDestination());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r14.filteredDestinations));
} }
function CreateshipmentsComponent_mat_option_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r72.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r72.name, " ");
} }
function CreateshipmentsComponent_div_149_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r75.firstname, " ", option_r75.lastname, " ");
} }
function CreateshipmentsComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign To User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", 54, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateshipmentsComponent_div_149_Template_mat_autocomplete_optionSelected_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.onUserSelectionChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateshipmentsComponent_div_149_mat_option_12_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r16.userNameCtrl)("matAutocomplete", _r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r16.displayUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, ctx_r16.filterUsers));
} }
function CreateshipmentsComponent_div_150_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_div_150_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Attached)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "error_box": a0 }; };
function CreateshipmentsComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Attach File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateshipmentsComponent_div_150_span_5_Template, 2, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateshipmentsComponent_div_150_span_6_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Attach File");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateshipmentsComponent_div_150_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.onAttachFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, !ctx_r17.dataForm.controls.other["controls"].attach_file.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataForm.controls.other["controls"].attach_file.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataForm.controls.other["controls"].attach_file.value);
} }
function CreateshipmentsComponent_mat_option_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r82.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r82.name, " ");
} }
function CreateshipmentsComponent_mat_progress_spinner_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 90);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.percentCompleted);
} }
function CreateshipmentsComponent_ng_container_172_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_ng_container_172_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_ng_container_172_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_ng_container_172_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateshipmentsComponent_ng_container_172_button_1_span_1_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateshipmentsComponent_ng_container_172_button_1_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r83.dataForm.valid || !ctx_r83.userNameCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r83.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.editMode);
} }
function CreateshipmentsComponent_ng_container_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateshipmentsComponent_ng_container_172_button_1_Template, 3, 3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.submitted);
} }
function CreateshipmentsComponent_ng_template_173_button_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_ng_template_173_button_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateshipmentsComponent_ng_template_173_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_ng_template_173_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateshipmentsComponent_ng_template_173_button_0_span_1_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateshipmentsComponent_ng_template_173_button_0_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r88.dataForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r88.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.editMode);
} }
function CreateshipmentsComponent_ng_template_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateshipmentsComponent_ng_template_173_button_0_Template, 3, 3, "button", 91);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.submitted);
} }
function CreateshipmentsComponent_ng_template_175_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r95.src);
} }
function CreateshipmentsComponent_ng_template_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateshipmentsComponent_ng_template_175_ng_container_0_Template, 2, 1, "ng-container", 1);
} if (rf & 2) {
    const index_r93 = ctx.index;
    const type_r94 = ctx.type;
    const currIndex_r96 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r94 === "imageViewer" && index_r93 === currIndex_r96);
} }
class CreateshipmentsComponent {
    constructor(_snackBar, router, dialog, route, fb, _manager, _shipmentService, shipperService, receiverService, auth, gallery, lightbox) {
        this._snackBar = _snackBar;
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this.fb = fb;
        this._manager = _manager;
        this._shipmentService = _shipmentService;
        this.shipperService = shipperService;
        this.receiverService = receiverService;
        this.auth = auth;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.searchReceiverTerms = {
            name: '',
        };
        this.searchShipperTerms = {
            name: '',
        };
        this.shipmentHistory = [];
        this.lightboxRef = null;
        this.submitted = false;
        this.history_files = [];
        this.users_list = [];
        this.shippers_list = [];
        this.receivers_list = [];
        this.destinations_list = [];
        this.warehouses_list = [];
        this.shipper_types = [];
        this.container_types = [];
        this.shippment_statuses = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.shippers_list);
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.receivers_list);
        this.userNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.percentCompleted = 0;
        this.isUploaded = false;
        this.editMode = false;
        this.permission = {};
        this.isAdmin = false;
        if (auth.currentUserValue.permission) {
            this.permission = auth.currentUserValue.permission.shipment;
            if (this.permission.canassign) {
                this.isAdmin = this.permission.canassign;
            }
            else {
                if (auth.currentUserValue.user_group_id == 1) {
                    this.isAdmin = true;
                }
            }
        }
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        //this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')) : 0;
        this.resetForm();
        this._shipmentService.getBulk().subscribe(data => {
            if (data) {
                this.shippers_list = data.shippers;
                this.activeShippers();
                this.receivers_list = data.receivers;
                this.activeReceivers();
                this.destinations_list = data.destinations;
                this.activeDestinations();
                this.shipper_types = data.shipper_types;
                this.container_types = data.container_types;
                this.shippment_statuses = data.shipment_statuses.filter(item => this.permission.statuses.indexOf(item.id) !== -1);
                if (!this.shipmentId) {
                    this.dataForm.patchValue({
                        history: {
                            shipment_status_id: this.shippment_statuses[0].id
                        }
                    });
                }
                this.warehouses_list = data.warehouses;
                this.auth.getUsers().subscribe(data => {
                    if (data) {
                        if (data) {
                            this.users_list = data.data;
                            this.activeUsers();
                        }
                    }
                    this.activeParameters();
                });
            }
        });
        this.lightboxRef = this.gallery.ref('lightbox');
        this.lightboxRef.setConfig({
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["ImageSize"].Contain,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["ThumbnailsPosition"].Top,
            itemTemplate: this.itemTemplate,
            gestures: false
        });
    }
    activeParameters() {
        this.sub = this.route.params.subscribe(params => {
            this.shipmentId = +params['id'];
            if (!isNaN(this.shipmentId)) {
                this.editMode = true;
                this.getShipment(this.shipmentId);
            }
            else {
                this.editMode = false;
                this.shipmentHistory = null;
                this.shipmentId = null;
                //this.resetForm();
                this.dataForm.get("other").get('attach_file').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
    }
    activeDestinations() {
        this.filteredDestinations = this.dataForm.get("other").get('destination_name').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => { var _a; return name ? this._filterDestination(name) : (_a = this.destinations_list) === null || _a === void 0 ? void 0 : _a.slice(); }));
    }
    activeUsers() {
        this.filterUsers = this.userNameCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => {
            return typeof value === 'string' ? value : (value.firstname + ' ' + value.lastname);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => { var _a; return name ? this._filterUser(name) : (_a = this.users_list) === null || _a === void 0 ? void 0 : _a.slice(); }));
    }
    activeShippers() {
        this.filteredShippers = this.dataForm.get("shipper").get('name').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((value) => { var _a; return value ? this._filterShipper(value) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])((_a = this.shippers_list) === null || _a === void 0 ? void 0 : _a.slice()); }));
    }
    activeReceivers() {
        this.filteredReceivers = this.dataForm.get("receiver").get('name').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((value) => { var _a; return value ? this._filterReceiver(value) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])((_a = this.receivers_list) === null || _a === void 0 ? void 0 : _a.slice()); }));
    }
    resetForm() {
        this.dataForm = this.fb.group({
            shipper: this.fb.group({
                new: [''],
                shipper_id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                ein: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                shipper_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            receiver: this.fb.group({
                new: [''],
                receiver_id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
            }),
            other: this.fb.group({
                date: [moment__WEBPACK_IMPORTED_MODULE_6__(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                container_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                destination_id: [''],
                destination_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                warehouse_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                akey: [0],
                title: [0],
                new_destination: [''],
                attach_file: [''],
                note: ['']
            }),
            history: this.fb.group({
                shipment_status_id: [''],
                note: [''],
                file: ['']
            }),
            packages: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    getShipment(id) {
        const fdata = new FormData();
        fdata.append('shipment_id', id);
        this._shipmentService.getShipment(fdata).subscribe(data => {
            if (data) {
                if (data.data) {
                    const shipData = data.data.data;
                    const sprData = data.data.shipper;
                    const recData = data.data.receiver;
                    const desData = data.data.destination;
                    const hisData = data.data.history;
                    const pacData = data.data.packages;
                    this.shipmentHistory = hisData;
                    this.dataForm.patchValue({
                        shipper: {
                            shipper_id: sprData.shipper_id,
                            name: sprData.name,
                            email: sprData.email,
                            phone: sprData.phone,
                            address: sprData.address,
                            ein: sprData.ein,
                            shipper_type_id: sprData.shipper_type_id
                        },
                        receiver: {
                            receiver_id: recData.receiver_id,
                            name: recData.name,
                            email: recData.email,
                            phone: recData.phone,
                            address: recData.address,
                        },
                        other: {
                            date: moment__WEBPACK_IMPORTED_MODULE_6__(new Date(shipData.date)),
                            container_type_id: shipData.container_type_id,
                            title: parseInt(shipData.title),
                            akey: parseInt(shipData.akey),
                            warehouse_id: shipData.warehouse_id,
                            destination_name: desData.name,
                            destination_id: desData.id,
                            note: shipData.note,
                        }, history: {
                            shipment_status_id: shipData.shipment_status_id
                        }
                    });
                    if (moment__WEBPACK_IMPORTED_MODULE_6__(new Date(shipData.date)).isAfter(this.minDate)) {
                        //this.minDate = moment(new Date(shipData.date));
                    }
                    for (let i = 0; i < pacData.length; i++) {
                        let pacItem = JSON.parse(pacData[i].data);
                        if (pacItem.type == '1') {
                            this.packageArray.push(this.fb.group({
                                type: [parseInt(pacItem.type)],
                                year: [pacItem.year, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                model: [pacItem.model, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                mark: [pacItem.mark, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                vin: [pacItem.vin, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                value: [pacItem.value],
                                file: [''],
                                input: [pacItem.input]
                            }));
                        }
                        else if (pacItem.type == '2') {
                            this.packageArray.push(this.fb.group({
                                type: [parseInt(pacItem.type)],
                                description: [pacItem.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                value: [pacItem.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                file: [''],
                                input: [pacItem.input]
                            }));
                        }
                    }
                }
            }
        });
    }
    dateHandler(type, event) {
        this.dataForm.get("other").get('date').setValue(moment__WEBPACK_IMPORTED_MODULE_6__(event.value).format('MM/DD/YYYY'));
    }
    onFileChange(event) {
        this.history_files = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.history_files.push(event.target.files[i]);
        }
    }
    onAttachFileChange(event) {
        this.dataForm.get("other").get('attach_file').setValue(event.target.files[0]);
    }
    deletePackage(index) {
        this.packageArray.removeAt(index);
    }
    onPackageFileChange(event, i) {
        this.packageArray.at(i).get('file').setValue(event.target.files[0]);
        //console.log(this.dataForm.get("packages"));
        //this.dataForm.get("packages")[0].get('file').setValue(event.target.files[0]);
    }
    get packageArray() {
        return this.dataForm.get('packages');
    }
    get shipperForm() {
        return this.dataForm.controls.shipper['controls'];
    }
    get receiverForm() {
        return this.dataForm.controls.receiver['controls'];
    }
    get otherForm() {
        return this.dataForm.controls.other['controls'];
    }
    addPackage(type) {
        if (type == 1) {
            this.packageArray.push(this.fb.group({
                type: [type],
                year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                vin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                file: [''],
                input: ['']
            }));
        }
        else if (type == 2) {
            this.packageArray.push(this.fb.group({
                type: [type],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                file: [''],
                input: ['']
            }));
        }
    }
    newShipperChange(event) {
        if (event.checked) {
            this.dataForm.patchValue({
                shipper: {
                    shipper_id: '',
                    name: '',
                    phone: '',
                    address: '',
                    email: '',
                    ein: '',
                    shipper_type_id: ''
                }
            });
        }
    }
    newReceiverChange(event) {
        if (event.checked) {
            this.dataForm.patchValue({
                receiver: {
                    receiver_id: '',
                    name: '',
                    phone: '',
                    address: '',
                    email: ''
                }
            });
        }
    }
    newDestinationChange(event) {
        if (event.checked) {
            this.dataForm.patchValue({
                other: {
                    destination_id: '',
                    destination_name: ''
                }
            });
        }
    }
    removePackage(index) {
        this.packageArray.removeAt(index);
    }
    openGallery(_item) {
        if (_item.file.length > 0) {
            this.gallery_items = _item.file.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["ImageItem"]({ src: item, thumb: item }));
            this.lightboxRef.load(this.gallery_items);
            //this.lightbox.open(0);
            this.lightbox.open(0, 'lightbox', { panelClass: 'fullscreen' });
        }
    }
    openEditFiles(item) {
        const dialogRef = this.dialog.open(_shared_modal_filemanager_filemanager_component__WEBPACK_IMPORTED_MODULE_13__["FilemanagerComponent"], {
            data: { item: item, type: 'shipment' }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    downloadGallery(item) {
        let formData = new FormData();
        formData.append("history_id", item.history_id);
        this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
            if (event.history_file) {
                window.open(event.history_file, "_blank");
            }
        }, error => {
            this.submitted = false;
        });
    }
    downloadShipmentGallery() {
        let formData = new FormData();
        formData.append("shipment_id", this.shipmentId.toString());
        this._shipmentService.downloadHistoryItem(formData).subscribe(event => {
            if (event.history_file) {
                window.open(event.history_file, "_blank");
            }
        }, error => {
            this.submitted = false;
        });
    }
    openImage(url) {
        const dialogRef = this.dialog.open(_shared_modal_image_image_component__WEBPACK_IMPORTED_MODULE_10__["ImageComponent"], {
            data: { url: url }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    submitForm() {
        this.submitted = true;
        let formData = new FormData();
        let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
        copyFormData.other.attach_file = this.dataForm.get("other").get('attach_file').value;
        this.jsonToFormData(formData, copyFormData);
        for (var i = 0; i < this.history_files.length; i++) {
            formData.append("history_files[]", this.history_files[i]);
        }
        if (this.shipmentId) {
            formData.append('shipment_id', this.shipmentId.toString());
        }
        if (this.userNameCtrl.value) {
            formData.append('assigned_user_id', this.userNameCtrl.value.user_id);
        }
        formData.append('shipment_link', `${_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].home}admin/shipments/info/`);
        this._shipmentService.saveShipment(formData).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress) {
                this.percentCompleted = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpResponse"]) {
                this.isUploaded = true;
                this.submitted = false;
                this.openSnackBar('Data submited successfully', '');
                if (!this.shipmentId) {
                    this.router.navigate(["/admin/shipments/list"]);
                }
                console.log("success");
            }
        }, error => {
            this.submitted = false;
            this.openSnackBar('Something wrong happen!', '');
            //this.router.navigate(["/admin/shipments/list"]);
            console.log("error");
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    buildFormData(formData, data, parentKey) {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        }
        else {
            const value = data == null ? '' : data;
            formData.append(parentKey, value);
        }
    }
    jsonToFormData(formData, data) {
        this.buildFormData(formData, data, '');
    }
    displayShipper(user) {
        return user && user.name ? user.name : '';
    }
    displayReceiver(user) {
        return user && user.name ? user.name : '';
    }
    displayDestination(item) {
        return item && item.name ? item.name : '';
    }
    displayUsers(item) {
        return item && item.firstname ? (item.firstname + ' ' + item.lastname) : '';
    }
    onUserSelectionChanged($event) {
        const userData = $event.option.value;
        this.userNameCtrl.setValue(userData);
    }
    onDestinationSelectionChanged($event) {
        const shpdata = $event.option.value;
        this.dataForm.patchValue({
            other: {
                destination_id: shpdata.id,
                destination_name: shpdata.name
            }
        });
    }
    onShipperSelectionChanged($event) {
        const shpdata = $event.option.value;
        this.dataForm.patchValue({
            shipper: {
                shipper_id: shpdata.shipper_id,
                name: shpdata.name,
                phone: shpdata.phone,
                address: shpdata.address,
                email: shpdata.email,
                ein: shpdata.ein,
                shipper_type_id: shpdata.shipper_type_id
            }
        });
    }
    onNewShipperChange($event) {
        this.dataForm.get('shipper').get('name').setValue('');
    }
    onReceiverSelectionChanged($event) {
        this.dataForm.get('receiver').get('name').setValue($event.option.value);
        const shpdata = $event.option.value;
        this.dataForm.patchValue({
            receiver: {
                receiver_id: shpdata.receiver_id,
                name: shpdata.name,
                phone: shpdata.phone,
                address: shpdata.address,
                email: shpdata.email
            }
        });
    }
    _filterUser(name) {
        var _a;
        const filterValue = name.toLowerCase();
        return (_a = this.users_list) === null || _a === void 0 ? void 0 : _a.filter(option => (option.firstname + ' ' + option.lastname).toLowerCase().indexOf(filterValue) === 0);
    }
    _filterShipper(value) {
        this.searchShipperTerms.name = value;
        return this.shipperService.getShippers({ page: 1, filter: Object.keys(this.searchShipperTerms).map(key => key + '___' + this.searchShipperTerms[key]).join('|') })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            if (data.items) {
                return data.items;
            }
            return [];
        }));
    }
    _filterReceiver(value) {
        this.searchReceiverTerms.name = value;
        return this.receiverService.getReceivers({ page: 1, filter: Object.keys(this.searchReceiverTerms).map(key => key + '___' + this.searchReceiverTerms[key]).join('|') })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            if (data.items) {
                return data.items;
            }
            return [];
        }));
    }
    _filterDestination(name) {
        var _a;
        const filterValue = name.toLowerCase();
        return (_a = this.destinations_list) === null || _a === void 0 ? void 0 : _a.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    openReceiverDialog() {
        const dialogRef = this.dialog.open(_shared_component_receiver_receiver_component__WEBPACK_IMPORTED_MODULE_1__["ReceiverComponent"], {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    dateFilter(date) {
        let odate = this.dataForm.controls.other['controls'].date.value;
        if (odate) {
            return odate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY') || new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
        }
        else {
            return new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
        }
    }
}
CreateshipmentsComponent.ɵfac = function CreateshipmentsComponent_Factory(t) { return new (t || CreateshipmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_18__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shipper_service__WEBPACK_IMPORTED_MODULE_19__["ShipperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_receiver_service__WEBPACK_IMPORTED_MODULE_20__["ReceiverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_21__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_22__["Lightbox"])); };
CreateshipmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateshipmentsComponent, selectors: [["app-createshipments"]], viewQuery: function CreateshipmentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_FORMATS"] },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 177, vars: 36, consts: [[1, "cs-page-header"], [4, "ngIf"], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink"], ["mat-list-icon", ""], [1, "cs-box", 3, "formGroup"], [1, "col", "col3-1"], ["class", "main_header", 4, "ngIf"], [1, "col", "col2"], ["formGroupName", "shipper"], [1, "cs-card"], ["formControlName", "new", 3, "change"], ["formControlName", "shipper_type_id"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "formControlName", "phone"], ["type", "text", "matInput", "", "formControlName", "address"], ["type", "text", "matInput", "", "formControlName", "email"], ["type", "text", "matInput", "", "formControlName", "ein"], ["formGroupName", "receiver"], ["formArrayName", "packages", 1, "col"], [1, "cs-plist"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "cs-button-holder"], ["mat-raised-button", "", "color", "warn", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["class", "col", 4, "ngIf"], ["formGroupName", "other", 1, "col"], ["matInput", "", "formControlName", "date", "placeholder", "Date", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["pickpicker", ""], ["formControlName", "container_type_id"], ["formControlName", "title"], [3, "value"], ["formControlName", "akey"], [1, "frtoggle"], ["formControlName", "new_destination", 3, "change"], ["formControlName", "warehouse_id"], ["matInput", "", "formControlName", "note"], ["class", "col", 3, "ngClass", 4, "ngIf"], [1, "col", "hprint"], ["formArrayName", "history", 1, "cs-card"], ["formControlName", "shipment_status_id"], [1, "fupload"], ["for", "ifile"], ["type", "file", "id", "ifile", "multiple", "", "accept", ".png, .jpg, .jpeg", 3, "change"], [1, "form-add"], ["class", "loader_spinner", "color", "primary", "mode", "determinate", 3, "value", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["normalButton", ""], ["itemTemplate", ""], [1, "main_header"], ["type", "text", "matInput", "", "value", "", "autocomplete", "off", "formControlName", "name", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "name", "autocomplete", "off", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "name", "autocomplete", "off"], ["auto2", "matAutocomplete"], [3, "formGroupName"], ["type", "text", "matInput", "", "formControlName", "year"], ["type", "text", "matInput", "", "formControlName", "model"], ["type", "text", "matInput", "", "formControlName", "mark"], ["type", "text", "matInput", "", "formControlName", "vin"], ["type", "text", "matInput", "", "formControlName", "value"], ["matPrefix", ""], [1, "fipt"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "long_txt"], ["type", "text", "matInput", "", "formControlName", "description"], [1, "col"], ["mat-button", "", 1, "hdownload", 3, "click"], [1, "ct_holder"], [1, "gtable"], [4, "ngFor", "ngForOf"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "disabled", ""], ["mat-button", "", 3, "click"], ["type", "text", "matInput", "", "formControlName", "destination_name"], ["type", "text", "matInput", "", "formControlName", "destination_name", 3, "matAutocomplete"], ["auto3", "matAutocomplete"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto_user", "matAutocomplete"], [1, "col", 3, "ngClass"], ["class", "error_title", 4, "ngIf"], ["class", "success_title", 4, "ngIf"], ["for", "ifile2"], ["type", "file", "id", "ifile2", "accept", ".png, .jpg, .jpeg,.txt, .pdf,.doc,.docx,.zip", 3, "change"], [1, "error_title"], [1, "success_title"], ["color", "primary", "mode", "determinate", 1, "loader_spinner", 3, "value"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], [3, "src"]], template: function CreateshipmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateshipmentsComponent_span_1_Template, 4, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateshipmentsComponent_span_2_Template, 4, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateshipmentsComponent_div_11_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Shipper Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateshipmentsComponent_Template_mat_slide_toggle_change_19_listener($event) { return ctx.newShipperChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Shipper Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateshipmentsComponent_ng_container_25_Template, 2, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateshipmentsComponent_ng_container_26_Template, 6, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateshipmentsComponent_mat_option_31_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "EIN|Passport No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Receiver Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateshipmentsComponent_Template_mat_slide_toggle_change_54_listener($event) { return ctx.newReceiverChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Receiver Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CreateshipmentsComponent_ng_container_60_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CreateshipmentsComponent_ng_container_61_Template, 6, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Shipment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CreateshipmentsComponent_div_82_Template, 3, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-menu", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_Template_button_click_88_listener() { return ctx.addPackage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Vehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateshipmentsComponent_Template_button_click_90_listener() { return ctx.addPackage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Other Commodities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, CreateshipmentsComponent_div_92_Template, 26, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Other Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-datepicker-toggle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "mat-datepicker", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Cargo Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, CreateshipmentsComponent_mat_option_109_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateshipmentsComponent_Template_mat_slide_toggle_change_132_listener($event) { return ctx.newDestinationChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, CreateshipmentsComponent_ng_container_136_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, CreateshipmentsComponent_ng_container_137_Template, 6, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, CreateshipmentsComponent_mat_option_142_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Your Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, CreateshipmentsComponent_div_149_Template, 14, 6, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, CreateshipmentsComponent_div_150_Template, 12, 5, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-card", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, CreateshipmentsComponent_mat_option_161_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Attach Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateshipmentsComponent_Template_input_change_169_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, CreateshipmentsComponent_mat_progress_spinner_171_Template, 1, 1, "mat-progress-spinner", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, CreateshipmentsComponent_ng_container_172_Template, 2, 1, "ng-container", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, CreateshipmentsComponent_ng_template_173_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, CreateshipmentsComponent_ng_template_175_Template, 1, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/shipments/list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shipmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataForm.controls.shipper["controls"].new.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataForm.controls.shipper["controls"].new.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shipper_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataForm.controls.receiver["controls"].new.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataForm.controls.receiver["controls"].new.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataForm.controls.packages["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shipmentHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.dateFilter.bind(ctx))("matDatepicker", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.container_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", !ctx.permission.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", !ctx.permission.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataForm.controls.other["controls"].new_destination.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataForm.controls.other["controls"].new_destination.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shipmentId && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shipmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", !ctx.shipmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shippment_statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shipmentId && ctx.isAdmin)("ngIfElse", _r21);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListIconCssMatStyler"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardTitle"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuItem"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__["MatAutocomplete"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinner"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_36__["ɵb"]], pipes: [_shared_pipes_zeroid_pipe__WEBPACK_IMPORTED_MODULE_37__["ZeroidPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%]     .mat-card-header-text {\n  margin: 0px;\n}\n\n.hdownload[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin-top: -10px;\n  min-width: 20px;\n  padding: 0px 10px;\n}\n\n.error_title[_ngcontent-%COMP%] {\n  color: #dc0000;\n}\n\n.success_title[_ngcontent-%COMP%] {\n  color: #00c531;\n}\n\n.chk_box[_ngcontent-%COMP%] {\n  padding: 0px;\n  list-style: none;\n}\n\n.chk_box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 10px 0px;\n}\n\n.form-add[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.form-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.frtoggle[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n  margin-top: -24px;\n  transform: translateY(15px);\n}\n\n.cs-plist[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 17%;\n  padding-right: 3%;\n}\n\n.cs-plist[_ngcontent-%COMP%]   mat-form-field.long_txt[_ngcontent-%COMP%] {\n  width: 68% !important;\n}\n\n.fipt[_ngcontent-%COMP%] {\n  width: 15%;\n  display: inline-block;\n}\n\n.fipt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fipt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  background: #ececec;\n  padding: 12px 1px;\n  border-radius: 4px;\n  border: 1px solid #c7c7c7;\n  font-weight: bold;\n}\n\n.cs-plist[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.cs-button-holder[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10ox 0px;\n}\n\n.loader_spinner[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n\n@media screen and (max-width: 900px) {\n  .ct_holder[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n\n  .ct_holder[_ngcontent-%COMP%]   .gtable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n\n  .cs-plist[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .cs-plist[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 0%;\n  }\n  .cs-plist[_ngcontent-%COMP%]   mat-form-field.long_txt[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlc2hpcG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsV0FBQTtBQUZOOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPSTtFQUNFLGlCQUFBO0FBTE47O0FBVUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtBQVBGOztBQVVBO0VBQ0UscUJBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQVBKOztBQVdFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBUko7O0FBU0k7RUFDRSxxQkFBQTtBQVBOOztBQWNBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0FBWEY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7QUFYRjs7QUFlQTtFQUNFO0lBQ0ksY0FBQTtFQVpKOztFQWVBO0lBQ0ksbUJBQUE7RUFaSjs7RUFlQTtJQUNFLG1CQUFBO0VBWkY7RUFhRTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtFQVhKO0VBWUk7SUFDRSxzQkFBQTtFQVZOO0FBQ0YiLCJmaWxlIjoiY3JlYXRlc2hpcG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtY2FyZHtcbiAgOjpuZy1kZWVwe1xuICAgIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmhkb3dubG9hZHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4uZXJyb3JfdGl0bGV7XG4gIGNvbG9yOiAjZGMwMDAwO1xufVxuXG4uc3VjY2Vzc190aXRsZXtcbiAgY29sb3I6ICMwMGM1MzE7XG59XG5cbi5jaGtfYm94IHtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2hrX2JveCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIDo6bmctZGVlcHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWFkZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb3JtLWFkZCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZydG9nZ2xle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcbn1cblxuLmNzLXBsaXN0e1xuICBtYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTclO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xuICAgICYubG9uZ190eHQge1xuICAgICAgd2lkdGg6IDY4JSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLmZpcHQge1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maXB0IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpcHQgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDEycHggMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY3MtcGxpc3Q+ZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jcy1idXR0b24taG9sZGVye1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBveCAwcHg7XG59XG5cbi5sb2FkZXJfc3Bpbm5lciB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xuICAuY3RfaG9sZGVyIHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmN0X2hvbGRlciAuZ3RhYmxlIHRoIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuY3MtcGxpc3R7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZy1yaWdodDogMCU7XG4gICAgICAmLmxvbmdfdHh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateshipmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createshipments',
                templateUrl: './createshipments.component.html',
                styleUrls: ['./createshipments.component.scss'],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]] },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_FORMATS"] },
                ]
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["ManagerService"] }, { type: _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_18__["ShipmentService"] }, { type: _shared_services_shipper_service__WEBPACK_IMPORTED_MODULE_19__["ShipperService"] }, { type: _shared_services_receiver_service__WEBPACK_IMPORTED_MODULE_20__["ReceiverService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_21__["AuthenticationService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_22__["Lightbox"] }]; }, { itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemTemplate']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=shipment-shipment-module.js.map