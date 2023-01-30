(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container-container-module"],{

/***/ "2BnT":
/*!********************************************************************************!*\
  !*** ./src/app/modules/container/createcontainer/createcontainer.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreatecontainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecontainerComponent", function() { return CreatecontainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_modal_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/modal/image/image.component */ "yZJs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "DejY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_component_signature_form_signature_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/component/signature-form/signature-form.component */ "tzkJ");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _shared_services_container_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/services/container.service */ "I1pp");
/* harmony import */ var _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/services/shipment.service */ "M6PE");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");






































const _c0 = ["itemTemplate"];
function CreatecontainerComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create Container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit Container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
} }
function CreatecontainerComponent_div_48_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_div_48_tr_20_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_div_48_tr_20_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatecontainerComponent_div_48_tr_20_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.openGallery(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_div_48_tr_20_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.username);
} }
function CreatecontainerComponent_div_48_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreatecontainerComponent_div_48_tr_20_button_4_Template, 3, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreatecontainerComponent_div_48_tr_20_button_5_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreatecontainerComponent_div_48_tr_20_td_6_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r18.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pms.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.date_added);
} }
function CreatecontainerComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Container History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Container Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreatecontainerComponent_div_48_th_14_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Added Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreatecontainerComponent_div_48_tr_20_Template, 11, 6, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pms.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.containerHistory);
} }
function CreatecontainerComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r26.shipment_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r26.shipment_id, " ");
} }
function CreatecontainerComponent_mat_chip_66_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CreatecontainerComponent_mat_chip_66_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r28 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.removeShipment(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r28)("selectable", false)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27, " ");
} }
function CreatecontainerComponent_mat_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r31.name, " ");
} }
function CreatecontainerComponent_mat_progress_spinner_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 50);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r10.percentCompleted);
} }
function CreatecontainerComponent_button_88_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_button_88_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatecontainerComponent_button_88_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatecontainerComponent_button_88_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatecontainerComponent_button_88_span_1_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreatecontainerComponent_button_88_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.dataForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.editMode);
} }
function CreatecontainerComponent_mat_accordion_89_li_7_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 56);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
} }
function CreatecontainerComponent_mat_accordion_89_li_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatecontainerComponent_mat_accordion_89_li_7_ng_container_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const shipper_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.sendSignatureRequest(shipper_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreatecontainerComponent_mat_accordion_89_li_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CreatecontainerComponent_mat_accordion_89_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreatecontainerComponent_mat_accordion_89_li_7_mat_progress_spinner_3_Template, 1, 1, "mat-progress-spinner", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreatecontainerComponent_mat_accordion_89_li_7_ng_container_4_Template, 4, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreatecontainerComponent_mat_accordion_89_li_7_ng_container_5_Template, 4, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shipper_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", shipper_r37.name, " - #", shipper_r37.shipment_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", shipper_r37.submited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r36.checkSentStatus(shipper_r37));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.checkSentStatus(shipper_r37));
} }
function CreatecontainerComponent_mat_accordion_89_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CreatecontainerComponent_mat_accordion_89_Template_mat_expansion_panel_opened_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.loadShippers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Signatures ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreatecontainerComponent_mat_accordion_89_li_7_Template, 6, 5, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.container_shippers);
} }
function CreatecontainerComponent_ng_template_90_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r48.src);
} }
function CreatecontainerComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreatecontainerComponent_ng_template_90_ng_container_0_Template, 2, 1, "ng-container", 1);
} if (rf & 2) {
    const index_r46 = ctx.index;
    const type_r47 = ctx.type;
    const currIndex_r49 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r47 === "imageViewer" && index_r46 === currIndex_r49);
} }
class CreatecontainerComponent {
    constructor(_snackBar, router, dialog, route, fb, _manager, containerService, shipmentService, auth, gallery, lightbox) {
        this._snackBar = _snackBar;
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this.fb = fb;
        this._manager = _manager;
        this.containerService = containerService;
        this.shipmentService = shipmentService;
        this.auth = auth;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.lightboxRef = null;
        this.containerHistory = [];
        this.history_files = [];
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.minEtaDate = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.shipper_signatures = {};
        this.shippersList = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]);
        this.shipments_source = [];
        this.original_shipments_source = [];
        this.shipments_list = [];
        this.shipments_ids = {};
        this.submitted = false;
        this.container_statuses = [];
        this.percentCompleted = 0;
        this.isUploaded = false;
        this.panelOpenState = false;
        this.editMode = false;
        this.pms = {};
        this.container_shippers = [];
        this.couriers = [];
        this.sendingRequest = false;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.pageSize = 20;
        this.searchTerms = {
            shipment_id: ''
        };
        this.loaded = false;
        if (auth.currentUserValue.permission) {
            this.pms = auth.currentUserValue.permission.container;
        }
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this.resetForm();
        this.activeNavigation();
        /*
        this.shipmentService.getShipments().subscribe(data => {
          if(data){
            this.shipments_source = data.items;
          }
    
    
        });
        */
        this.lightboxRef = this.gallery.ref('lightbox');
        this.lightboxRef.setConfig({
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["ImageSize"].Contain,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["ThumbnailsPosition"].Top,
            itemTemplate: this.itemTemplate,
            gestures: false
        });
    }
    activeNavigation() {
        this.shipmentService.getShipments({ page: 1, filter: Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|') })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => {
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(() => {
            this.isLoadingResults = false;
            this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
        })).subscribe(data => {
            this.original_shipments_source = data;
            this.shipments_source = data;
            if (!this.loaded) {
                this._manager.getContainerStatuses().subscribe(data => {
                    this.loaded = true;
                    if (data) {
                        this.container_statuses = data.data.filter(item => this.pms.statuses.indexOf(item.id) !== -1);
                        this.dataForm.patchValue({
                            history: {
                                container_status_id: this.container_statuses[0].id
                            }
                        });
                    }
                    this._manager.getCouriers().subscribe(data => {
                        if (data) {
                            this.couriers = data.data;
                            this.dataForm.patchValue({
                                container: {
                                    courier: this.couriers[0].id
                                }
                            });
                        }
                        this.handleParams();
                    });
                });
            }
        });
    }
    handleParams() {
        this.sub = this.route.params.subscribe(params => {
            this.containerId = +params['id'];
            if (!isNaN(this.containerId)) {
                this.editMode = true;
                this.getContainer(this.containerId);
            }
            else {
                this.editMode = false;
                this.containerHistory = null;
                this.containerId = null;
            }
        });
    }
    loadShippers() {
        if (!this.containerId)
            return;
        const fdata = new FormData();
        fdata.append('container_id', this.containerId.toString());
        this.containerService.getContainerShippers(fdata).subscribe(data => {
            if (data) {
                if (data.data) {
                    this.container_shippers = data.data;
                }
            }
        });
    }
    checkSentStatus(element) {
        return this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`] && this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`].user_signed == "1";
    }
    sendSignatureRequest(_shipper) {
        const dialogRef = this.dialog.open(_shared_component_signature_form_signature_form_component__WEBPACK_IMPORTED_MODULE_10__["SignatureFormComponent"], {});
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.sendingRequest = true;
                const fdata = new FormData();
                let copyShippermData = JSON.parse(JSON.stringify({ shipper: _shipper }));
                this.jsonToFormData(fdata, copyShippermData);
                if (this.containerId) {
                    fdata.append('container_id', this.containerId.toString());
                }
                fdata.append('form', JSON.stringify(result));
                fdata.append('home', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].home);
                this.containerService.requestSignature(fdata).subscribe(data => {
                    this.sendingRequest = false;
                    if (data.signatures) {
                        this.shippersList.setValue([]);
                        data.signatures.forEach(element => {
                            this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`] = element;
                        });
                    }
                });
            }
        });
        /*
        if(this.shippersList.value.length == 0) return;
        this.sendingRequest = true;
    
        const fdata:FormData = new FormData();
        let copyFormData = JSON.parse(JSON.stringify({shippers : this.shippersList.value}));
    
        this.jsonToFormData(fdata,copyFormData);
        if(this.containerId){
          fdata.append('container_id' , this.containerId.toString());
        }
        fdata.append('home' , environment.home);
        this.containerService.requestSignature(fdata).subscribe(data => {
          this.sendingRequest = false;
          if(data.signatures){
            this.shippersList.setValue([]);
            data.signatures.forEach(element => {
              this.shipper_signatures[element.shipper_id] = element;
            });
          }
        });
        */
    }
    resetForm() {
        this.shipments_ids = {};
        this.shipments_list = [];
        this.dataForm = this.fb.group({
            container: this.fb.group({
                container_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                booking_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                port_of_loading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                port_of_discharge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                sailing_date: [moment__WEBPACK_IMPORTED_MODULE_4__(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                courier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                eta: [moment__WEBPACK_IMPORTED_MODULE_4__(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            }),
            other: this.fb.group({
                shipment_id: [''],
            }),
            history: this.fb.group({
                container_status_id: [''],
                note: [''],
                file: ['']
            }),
            shipments: this.fb.array([])
        });
        this.filteredShipments = this.dataForm.get("other").get('shipment_id').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(value => this._filter(value))
        /*
        map(value => typeof value === 'string' ? value : value.shipment_id),
        map(name => {
          return name ? this._filterShipments(name) : this.shipments_source?.slice()
        })
        */
        );
    }
    _filter(value) {
        this.searchTerms.shipment_id = value;
        return this.shipmentService.getShipments({ page: 1, filter: Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|') })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((data) => {
            return data.items.filter(item => item.shipment_id.toString().includes(value));
        }));
    }
    getContainer(id) {
        const fdata = new FormData();
        fdata.append('container_id', id);
        this.containerService.getContainer(fdata).subscribe(data => {
            if (data) {
                if (data.data) {
                    const containerData = data.data.data;
                    const hisData = data.data.history;
                    const shipData = data.data.shipments;
                    this.containerHistory = hisData;
                    if (data.data.signatures) {
                        data.data.signatures.forEach(element => {
                            this.shipper_signatures[`${element.shipper_id}-${element.shipment_id}`] = element;
                        });
                    }
                    this.dataForm.patchValue({
                        container: {
                            container_no: containerData.container_no,
                            booking_no: containerData.booking_no,
                            port_of_loading: containerData.port_of_loading,
                            port_of_discharge: containerData.port_of_discharge,
                            sailing_date: moment__WEBPACK_IMPORTED_MODULE_4__(new Date(containerData.sailing_date)),
                            courier: containerData.courier,
                            eta: moment__WEBPACK_IMPORTED_MODULE_4__(new Date(containerData.eta))
                        }
                    });
                    if (moment__WEBPACK_IMPORTED_MODULE_4__(new Date(containerData.sailing_date)) < this.minDate) {
                        //this.minDate = moment(new Date(containerData.sailing_date));
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_4__(new Date(containerData.eta)) < this.minEtaDate) {
                        //this.minEtaDate = moment(new Date(containerData.eta));
                    }
                    for (let i = 0; i < shipData.length; i++) {
                        this.shipmentArray.push(this.fb.group({
                            shipment_id: [shipData[i].shipment_id]
                        }));
                        this.shipments_list.push(shipData[i].shipment_id);
                    }
                }
            }
        });
    }
    dateHandler(type, event) {
        this.dataForm.get("container").get('date').setValue(moment__WEBPACK_IMPORTED_MODULE_4__(event.value).format('MM/DD/YYYY'));
    }
    onFileChange(event) {
        //this.dataForm.get("history").get('file').setValue(event.target.files[0]);
        this.history_files = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.history_files.push(event.target.files[i]);
        }
    }
    deleteShipment(index) {
        this.shipmentArray.removeAt(index);
    }
    get shipmentArray() {
        return this.dataForm.get('shipments');
    }
    addShipment(option) {
        if (!this.shipments_ids[option]) {
            this.shipments_ids[option] = option;
            this.shipments_list.push(option);
            this.shipmentArray.push(this.fb.group({
                shipment_id: [option]
            }));
        }
    }
    displayShipments(item) {
        return item && item.shipment_id ? item.shipment_id.toString() : '';
    }
    _filterShipments(item) {
        var _a;
        this.searchTerms.shipment_id = item ? item : '';
        return (_a = this.shipments_source) === null || _a === void 0 ? void 0 : _a.filter(option => option.shipment_id.toString().indexOf(item) === 0);
    }
    onShipmentSelectionChanged($event) {
        const shpdata = $event.option.value;
        this.addShipment(shpdata);
    }
    removeShipment(index) {
        const selectedId = this.shipments_list[index];
        delete this.shipments_ids[selectedId];
        this.shipments_list.splice(index, 1);
        this.shipmentArray.removeAt(index);
    }
    openImage(url) {
        const dialogRef = this.dialog.open(_shared_modal_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"], {
            data: { url: url }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    submitForm() {
        this.submitted = true;
        let formData = new FormData();
        let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
        //copyFormData.history.file = this.dataForm.get("history").get("file").value;
        this.jsonToFormData(formData, copyFormData);
        for (var i = 0; i < this.history_files.length; i++) {
            formData.append("history_files[]", this.history_files[i]);
        }
        if (this.containerId) {
            formData.append('container_id', this.containerId.toString());
        }
        formData.append('container_link', `${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].home}admin/containers/info/`);
        this.containerService.saveContainer(formData).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                this.percentCompleted = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.isUploaded = true;
                this.submitted = false;
                this.openSnackBar('Data submited successfully', '');
                this.router.navigate(["/admin/containers/list"]);
            }
        }, error => {
            this.submitted = false;
            this.openSnackBar('Something wrong happen!', '');
            //this.router.navigate(["/admin/containers/list"]);
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
    openGallery(_item) {
        if (_item.file.length > 0) {
            this.gallery_items = _item.file.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["ImageItem"]({ src: item, thumb: item }));
            this.lightboxRef.load(this.gallery_items);
            //this.lightbox.open(0);
            this.lightbox.open(0, 'lightbox', { panelClass: 'fullscreen' });
        }
    }
    dateSailingFilter(date) {
        let odate = this.dataForm.controls.container['controls'].sailing_date.value;
        if (odate) {
            return odate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY') || new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
        }
        else {
            return new Date(date.format('MM/DD/YYYY')) >= new Date(this.minDate.format('MM/DD/YYYY'));
        }
    }
    dateEtaFilter(date) {
        let odate = this.dataForm.controls.container['controls'].eta.value;
        if (odate) {
            return odate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY') || new Date(date.format('MM/DD/YYYY')) >= new Date(this.minEtaDate.format('MM/DD/YYYY'));
        }
        else {
            return new Date(date.format('MM/DD/YYYY')) >= new Date(this.minEtaDate.format('MM/DD/YYYY'));
        }
    }
}
CreatecontainerComponent.ɵfac = function CreatecontainerComponent_Factory(t) { return new (t || CreatecontainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_15__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_container_service__WEBPACK_IMPORTED_MODULE_16__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_17__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_19__["Lightbox"])); };
CreatecontainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatecontainerComponent, selectors: [["app-createcontainer"]], viewQuery: function CreatecontainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MAT_MOMENT_DATE_FORMATS"] },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 92, vars: 22, consts: [[1, "cs-page-header"], [4, "ngIf"], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink"], ["mat-list-icon", ""], [1, "cs-box", 3, "formGroup"], [1, "col", "col3-1"], ["formGroupName", "container", 1, "col"], [1, "cs-card"], ["type", "text", "matInput", "", "formControlName", "container_no"], ["type", "text", "matInput", "", "formControlName", "booking_no"], ["type", "text", "matInput", "", "formControlName", "port_of_loading"], ["type", "text", "matInput", "", "formControlName", "port_of_discharge"], ["matInput", "", "formControlName", "sailing_date", "placeholder", "Sailing Date", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["pickpicker", ""], ["matInput", "", "formControlName", "eta", "placeholder", "ETA", 3, "matDatepickerFilter", "matDatepicker"], ["pickpicker2", ""], ["formControlName", "courier"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col", 4, "ngIf"], [1, "col"], ["formGroupName", "other", 1, "hprint"], ["type", "text", "matInput", "", "formControlName", "shipment_id", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], ["aria-label", "Shipment list", "formArrayName", "shipments"], [3, "formGroupName", "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "col", "hprint"], ["formArrayName", "history", 1, "cs-card"], ["formControlName", "container_status_id"], ["matInput", "", "formControlName", "note"], [1, "fupload"], ["for", "ifile"], ["type", "file", "id", "ifile", "multiple", "", "accept", ".png, .jpg, .jpeg", 3, "change"], [1, "form-add"], ["class", "loader_spinner", "color", "primary", "mode", "determinate", 3, "value", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["class", "signature", 4, "ngIf"], ["itemTemplate", ""], [3, "value"], [1, "ct_holder"], [1, "gtable"], [4, "ngFor", "ngForOf"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "disabled", ""], ["mat-button", "", 3, "click"], [3, "formGroupName", "selectable", "removable", "removed"], ["matChipRemove", ""], ["color", "primary", "mode", "determinate", 1, "loader_spinner", 3, "value"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], [1, "signature"], [3, "opened"], [1, "shipper_list"], [3, "diameter", 4, "ngIf"], [3, "diameter"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "disabled", ""], [3, "src"]], template: function CreatecontainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatecontainerComponent_span_1_Template, 4, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreatecontainerComponent_span_2_Template, 4, 0, "span", 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Container Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Container No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Booking No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Port Of Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Port Of Discharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Courier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CreatecontainerComponent_mat_option_47_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreatecontainerComponent_div_48_Template, 21, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Assign Shipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Search For Shipments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-autocomplete", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreatecontainerComponent_Template_mat_autocomplete_optionSelected_61_listener($event) { return ctx.onShipmentSelectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CreatecontainerComponent_mat_option_63_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-chip-list", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CreatecontainerComponent_mat_chip_66_Template, 4, 4, "mat-chip", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CreatecontainerComponent_mat_option_77_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Attach Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatecontainerComponent_Template_input_change_85_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CreatecontainerComponent_mat_progress_spinner_87_Template, 1, 1, "mat-progress-spinner", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CreatecontainerComponent_button_88_Template, 3, 3, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, CreatecontainerComponent_mat_accordion_89_Template, 8, 1, "mat-accordion", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, CreatecontainerComponent_ng_template_90_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/containers/list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.dateSailingFilter.bind(ctx))("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.dateEtaFilter.bind(ctx))("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.couriers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.containerHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayShipments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 20, ctx.filteredShipments));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shipments_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.container_statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.containerId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListIconCssMatStyler"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocomplete"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipList"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipRemove"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionPanelTitle"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_33__["ɵb"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%]     .mat-card-header-text {\n  margin: 0px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 10px 0px;\n}\n\n.long_lbl[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 15px 0px;\n}\n\n.form-add[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.form-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.loader_spinner[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n\n.signature[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.submit_signature[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.shipper_list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n}\n\n.shipper_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 54px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #ececec;\n  background: #f9f9f9;\n  border-radius: 4px;\n  padding: 0px 14px;\n}\n\n.shipper_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 17px;\n  font-weight: bold;\n}\n\n.shipper_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 7px;\n}\n\n  .mat-expansion-panel-header-title {\n  color: #198dca;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 900px) {\n  .ct_holder[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n\n  .ct_holder[_ngcontent-%COMP%]   .gtable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtBQUROOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtJO0VBQ0UsaUJBQUE7QUFITjs7QUFVSTtFQUNFLGlCQUFBO0FBUE47O0FBYUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQWFBO0VBQ0UsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZGOztBQVdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFVSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJOOztBQVVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFSTjs7QUFjRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBWEo7O0FBZUE7RUFDRTtJQUNJLGNBQUE7RUFaSjs7RUFlQTtJQUNJLG1CQUFBO0VBWko7QUFDRiIsImZpbGUiOiJjcmVhdGVjb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgOjpuZy1kZWVwe1xuICAgIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgOjpuZy1kZWVwe1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxvbmdfbGJse1xuICA6Om5nLWRlZXB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xuICAgICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgfVxuICB9XG5cbn1cblxuLmZvcm0tYWRkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZvcm0tYWRkIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9hZGVyX3NwaW5uZXIge1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnNpZ25hdHVyZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtaXRfc2lnbmF0dXJle1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2hpcHBlcl9saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbGkge1xuICAgIGhlaWdodDogNTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDBweCAxNHB4O1xuICAgID5zcGFue1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMxOThkY2E7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcbiAgLmN0X2hvbGRlciB7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5jdF9ob2xkZXIgLmd0YWJsZSB0aCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatecontainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createcontainer',
                templateUrl: './createcontainer.component.html',
                styleUrls: ['./createcontainer.component.scss'],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MAT_MOMENT_DATE_FORMATS"] },
                ],
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_15__["ManagerService"] }, { type: _shared_services_container_service__WEBPACK_IMPORTED_MODULE_16__["ContainerService"] }, { type: _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_17__["ShipmentService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_11__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_19__["Lightbox"] }]; }, { itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemTemplate']
        }] }); })();


/***/ }),

/***/ "5SmN":
/*!**********************************************************************!*\
  !*** ./src/app/modules/container/containers/containers.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersComponent", function() { return ContainersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_modal_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/confirm/confirm.component */ "AXEG");
/* harmony import */ var _shared_component_files_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/files/files.component */ "Sftj");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-export-as */ "I5r7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _shared_services_container_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/container.service */ "I1pp");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/utils/skeleton/skeleton.component */ "jsAG");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");



































const _c0 = ["itemTemplate"];
const _c1 = ["content"];
function ContainersComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Container ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/containers/add");
} }
function ContainersComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r30.name, " ");
} }
function ContainersComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ContainersComponent_div_44_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function ContainersComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainersComponent_div_44_mat_spinner_1_Template, 1, 0, "mat-spinner", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isLoadingResults);
} }
function ContainersComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Booking No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.booking_no, " ");
} }
function ContainersComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Container No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.container_no, " ");
} }
function ContainersComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Port Of Loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.port_of_loading, " ");
} }
function ContainersComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Port Of Discharge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.port_of_discharge, " ");
} }
function ContainersComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sailing Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r36.sailing_date), " ");
} }
function ContainersComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Courier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r15.generateLink(element_r37.courier_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r37.courier_name);
} }
function ContainersComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Eta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r38.eta), " ");
} }
function ContainersComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContainersComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.container_status, " ");
} }
function ContainersComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/admin/containers/info", a1]; };
function ContainersComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, element_r40.container_id));
} }
function ContainersComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a1) { return ["/admin/containers/", a1]; };
function ContainersComponent_td_75_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c3, element_r41.container_id));
} }
function ContainersComponent_td_75_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainersComponent_td_75_ng_container_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const element_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.deleteContainer(element_r41.container_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ContainersComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainersComponent_td_75_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const element_r41 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.openPhoto(element_r41.container_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainersComponent_td_75_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const element_r41 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.openFiles(element_r41.container_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContainersComponent_td_75_ng_container_16_Template, 6, 3, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContainersComponent_td_75_ng_container_17_Template, 6, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.pms.update);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.pms.delete);
} }
function ContainersComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function ContainersComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function ContainersComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skeleton", 53);
} }
function ContainersComponent_ng_template_81_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r55.src);
} }
function ContainersComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContainersComponent_ng_template_81_ng_container_0_Template, 2, 1, "ng-container", 40);
} if (rf & 2) {
    const index_r53 = ctx.index;
    const type_r54 = ctx.type;
    const currIndex_r56 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r54 === "imageViewer" && index_r53 === currIndex_r56);
} }
const _c4 = function () { return [10, 20, 30, 100]; };
class ContainersComponent {
    constructor(exportAsService, dialog, _manager, containerService, auth, gallery, lightbox) {
        this.exportAsService = exportAsService;
        this.dialog = dialog;
        this._manager = _manager;
        this.containerService = containerService;
        this.auth = auth;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'content'
        };
        this.lightboxRef = null;
        this.loaded = false;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.pageSize = 20;
        this.container_statuses = [];
        this.containerStatusId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.bookingNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.containerNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.polCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.podCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchTerms = {
            booking_no: '',
            container_no: '',
            container_status_id: '',
            port_of_loading: '',
            port_of_discharge: ''
        };
        this.displayedColumns = ['booking_no', 'id', 'port_of_loading', 'port_of_discharge', 'sailing_date', 'courier', 'eta', 'status', 'files', 'image', 'view', 'update', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.container_no = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.booking_no = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        if (auth.currentUserValue.permission) {
            this.pms = auth.currentUserValue.permission.container;
            let filteredPermission = ['booking_no', 'container_no', 'port_of_loading', 'port_of_discharge', 'sailing_date', 'courier', 'eta', 'status'];
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
    ngOnInit() {
        this.callSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.callSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.isLoadingResults = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(() => {
            this.activeNavigation();
        });
        this.bookingNo.valueChanges.subscribe(data => {
            this.searchTerms.booking_no = data;
            this.applyFilter(data);
        });
        this.containerNo.valueChanges.subscribe(data => {
            this.searchTerms.container_no = data;
            this.applyFilter(data);
        });
        this.polCtrl.valueChanges.subscribe(data => {
            this.searchTerms.port_of_loading = data;
            this.applyFilter(data);
        });
        this.podCtrl.valueChanges.subscribe(data => {
            this.searchTerms.port_of_discharge = data;
            this.applyFilter(data);
        });
        this.containerStatusId.valueChanges.subscribe(data => {
            this.searchTerms.container_status_id = data;
            this.applyFilter(data);
        });
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            this.isLoadingResults = true;
            return this.containerService.getContainers({ sort: this.sort.active, order: this.sort.direction, pagesize: this.paginator.pageSize, page: this.paginator.pageIndex + 1, filter: Object.keys(this.searchTerms).map(key => key + '___' + this.searchTerms[key]).join('|') });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.isLoadingResults = false;
            this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(data => {
            this.dataSource.data = data;
            if (!this.loaded) {
                this._manager.getContainerStatuses().subscribe(data => {
                    if (data) {
                        this.container_statuses = data.data;
                    }
                    this.loaded = true;
                    setTimeout(() => {
                        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
                    }, 0);
                });
            }
        });
    }
    applyFilter(val) {
        let filterValue = val.toString();
        this.paginator.pageIndex = 0;
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.callSubject.next();
    }
    resetFilter() {
        this.searchTerms = {
            booking_no: '',
            container_no: '',
            container_status_id: '',
            port_of_loading: '',
            port_of_discharge: ''
        };
        this.containerStatusId.setValue('');
        this.podCtrl.setValue('');
        this.polCtrl.setValue('');
        this.containerNo.setValue('');
        this.bookingNo.setValue('');
        this.paginator.pageIndex = 0;
        this.callSubject.next();
    }
    deleteContainer(id) {
        const dialogRef = this.dialog.open(_shared_modal_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
            data: { title: 'Are you sure?', id: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const fdata = new FormData();
                fdata.append('container_id', result);
                this.containerService.deleteContainer(fdata).subscribe(data => {
                    this.dataSource.data = this.dataSource.data.filter(row => row.container_id != result);
                });
            }
        });
    }
    generateLink(url) {
        if (url.indexOf('http') !== -1) {
            return url;
        }
        else if (url.indexOf('https') !== -1) {
            return url;
        }
        return `https://${url}`;
    }
    createFilter() {
        let filterFunction = (data, filter) => {
            let searchTerms = JSON.parse(filter);
            return data.shipper_name.toLowerCase().indexOf(searchTerms.shipper_name) !== -1
                && data.receiver_name.toString().toLowerCase().indexOf(searchTerms.receiver_name) !== -1
                && data.shipment_status_id.toString().toLowerCase().indexOf(searchTerms.shipment_status_id) !== -1
                && data.destination_name.toLowerCase().indexOf(searchTerms.destination_name) !== -1;
        };
        return filterFunction;
    }
    openPhoto(_container_id) {
        let formData = new FormData();
        formData.append('container_id', _container_id);
        this.containerService.getContainerHistory(formData).subscribe(data => {
            if (data) {
                let _dataImages = [];
                for (let i = 0; i < data.data.length; i++) {
                    let files = data.data[i].file;
                    if (files && files.length > 0) {
                        for (let j = 0; j < files.length; j++) {
                            _dataImages.push(files[j]);
                        }
                    }
                    //
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
        data: {container_id : $container_id}
      });
  
      dialogRef.afterClosed().subscribe(result => {
  
      });*/
    }
    openFiles($container_id) {
        const dialogRef = this.dialog.open(_shared_component_files_files_component__WEBPACK_IMPORTED_MODULE_6__["FilesComponent"], {
            data: { container_id: $container_id }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    savePDF() {
        document.body.classList.add('print_mode');
        this.exportAsService.save(this.exportAsConfig, 'containers').subscribe(() => {
            setTimeout(() => { document.body.classList.remove('print_mode'); }, 1000);
        });
    }
    printPage() {
        window.print();
    }
}
ContainersComponent.ɵfac = function ContainersComponent_Factory(t) { return new (t || ContainersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_10__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_12__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_container_service__WEBPACK_IMPORTED_MODULE_13__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__["Lightbox"])); };
ContainersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainersComponent, selectors: [["app-containers"]], viewQuery: function ContainersComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 83, vars: 17, consts: [[1, "cs-page-header"], ["mat-list-icon", ""], [1, "cs-right"], ["mat-flat-button", "", "mat-ripple", "", 3, "routerLink", 4, "ngIf"], ["mat-flat-button", "", 3, "click"], [0, "xlink", "href", "#print_ico"], [0, "xlink", "href", "#pdf_ico"], [1, "cs-box"], [1, "form-filter"], ["type", "text", "matInput", "", 3, "formControl"], [3, "formControl"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-btn"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mat-elevation-z8"], [4, "ngIf", "ngIfElse"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", "matSortActive", "shipment_id", "matSortDirection", "desc", "id", "content", 3, "hidden", "dataSource"], ["matColumnDef", "booking_no"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "container_no"], ["matColumnDef", "port_of_loading"], ["matColumnDef", "port_of_discharge"], ["matColumnDef", "sailing_date"], ["matColumnDef", "courier"], ["matColumnDef", "eta"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "view"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions"], ["rowsPlaceHolder", ""], ["itemTemplate", ""], ["mat-flat-button", "", "mat-ripple", "", 3, "routerLink"], [3, "value"], [1, "loading-shade"], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Actions", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "warn", 3, "click"], ["mat-menu-item", "", "aria-label", "Edit", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Edit", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["type", "rows"], [3, "src"]], template: function ContainersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_quilt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Containers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContainersComponent_a_6_Template, 4, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainersComponent_Template_button_click_7_listener() { return ctx.printPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainersComponent_Template_button_click_10_listener() { return ctx.savePDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Booking No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Container No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Port Of Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Port Of Discharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "All Statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ContainersComponent_mat_option_38_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainersComponent_Template_button_click_40_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ContainersComponent_div_43_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ContainersComponent_div_44_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContainersComponent_th_47_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContainersComponent_td_48_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ContainersComponent_th_50_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContainersComponent_td_51_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ContainersComponent_th_53_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ContainersComponent_td_54_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContainersComponent_th_56_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ContainersComponent_td_57_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ContainersComponent_th_59_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ContainersComponent_td_60_Template, 3, 3, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ContainersComponent_th_62_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ContainersComponent_td_63_Template, 3, 2, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ContainersComponent_th_65_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ContainersComponent_td_66_Template, 3, 3, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ContainersComponent_th_68_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ContainersComponent_td_69_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](70, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ContainersComponent_th_71_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ContainersComponent_td_72_Template, 4, 3, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](73, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ContainersComponent_th_74_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ContainersComponent_td_75_Template, 18, 3, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ContainersComponent_tr_76_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ContainersComponent_tr_77_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-paginator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ContainersComponent_ng_template_79_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ContainersComponent_ng_template_81_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pms.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.bookingNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.containerNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.polCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.podCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.containerStatusId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.container_statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && (ctx.isLoadingResults || ctx.isRateLimitReached));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loaded)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.resultsLength)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRipple"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_27__["SkeletonComponent"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_28__["ɵb"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]], styles: [".cs-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 20px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background: #fff;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-update[_ngcontent-%COMP%], .mat-column-delete[_ngcontent-%COMP%] {\n  width: 56px;\n  text-align: center !important;\n}\n\n.mat-column-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ea4141;\n}\n\n.mat-column-update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2ba7ff;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n}\n\n.filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 0px 0px 20px 0px;\n  margin-right: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 13px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFpbmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5SEFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1JO0VBQ0UsaUJBQUE7QUFKTiIsImZpbGUiOiJjb250YWluZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzLWJveHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuXG4ubWF0LWNvbHVtbi11cGRhdGUsLm1hdC1jb2x1bW4tZGVsZXRlIHtcbiAgd2lkdGg6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1kZWxldGUgbWF0LWljb24ge1xuICBjb2xvcjogI2VhNDE0MTtcbn1cblxuLm1hdC1jb2x1bW4tdXBkYXRlIG1hdC1pY29uIHtcbiAgY29sb3I6ICMyYmE3ZmY7XG59XG5cblxuLmZpbHRlci1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLmZpbHRlci1idG4gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gIDo6bmctZGVlcHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XG4gICAgICBwYWRkaW5nOiAxM3B4IDBweDtcbiAgICB9XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-containers',
                templateUrl: './containers.component.html',
                styleUrls: ['./containers.component.scss']
            }]
    }], function () { return [{ type: ngx_export_as__WEBPACK_IMPORTED_MODULE_10__["ExportAsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_12__["ManagerService"] }, { type: _shared_services_container_service__WEBPACK_IMPORTED_MODULE_13__["ContainerService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__["Lightbox"] }]; }, { sort: [{
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

/***/ "Pgwc":
/*!**********************************************************!*\
  !*** ./src/app/modules/container/info/info.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "I5r7");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _shared_services_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/container.service */ "I1pp");
/* harmony import */ var _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/shipment.service */ "M6PE");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");




















const _c0 = ["content"];
const _c1 = ["itemTemplate"];
function InfoComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_ng_container_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.printPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_ng_container_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.savePDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InfoComponent_div_11_div_38_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_11_div_38_tr_20_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_11_div_38_tr_20_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_div_11_div_38_tr_20_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.openGallery(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoComponent_div_11_div_38_tr_20_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.username);
} }
function InfoComponent_div_11_div_38_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InfoComponent_div_11_div_38_tr_20_button_4_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InfoComponent_div_11_div_38_tr_20_button_5_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoComponent_div_11_div_38_tr_20_td_6_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.pms.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.date_added);
} }
function InfoComponent_div_11_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Container History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Shipment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InfoComponent_div_11_div_38_th_14_Template, 2, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Added Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InfoComponent_div_11_div_38_tr_20_Template, 11, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.pms.show_user_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.info.history);
} }
function InfoComponent_div_11_li_47_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r21.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r21.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r21.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r21.vin);
} }
function InfoComponent_div_11_li_47_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r21.description);
} }
function InfoComponent_div_11_li_47_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoComponent_div_11_li_47_div_11_div_1_Template, 21, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoComponent_div_11_li_47_div_11_div_2_Template, 6, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r21.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r21.type == 2);
} }
function InfoComponent_div_11_li_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InfoComponent_div_11_li_47_div_11_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Shipment #", item_r19.shipment_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Container Type : ", item_r19.shipment.container_type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status : ", item_r19.shipment.shipment_status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Shipper Name : ", item_r19.shipment.shipper_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r19.packages);
} }
function InfoComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Container Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Container No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Booking No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Port Of Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Port Of Discharge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sailing Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ETA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Courier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InfoComponent_div_11_div_38_Template, 21, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Assigned Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InfoComponent_div_11_li_47_Template, 12, 5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.container_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.booking_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.port_of_loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.port_of_discharge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.sailing_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.eta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.info.container.courier_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.info.container.courier_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.containerHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.shipments_list);
} }
function InfoComponent_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r29.src);
} }
function InfoComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoComponent_ng_template_12_ng_container_0_Template, 2, 1, "ng-container", 4);
} if (rf & 2) {
    const index_r27 = ctx.index;
    const type_r28 = ctx.type;
    const currIndex_r30 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r28 === "imageViewer" && index_r27 === currIndex_r30);
} }
class InfoComponent {
    constructor(exportAsService, _snackBar, router, dialog, route, _manager, containerService, shipmentService, auth, gallery, lightbox) {
        this.exportAsService = exportAsService;
        this._snackBar = _snackBar;
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this._manager = _manager;
        this.containerService = containerService;
        this.shipmentService = shipmentService;
        this.auth = auth;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.lightboxRef = null;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'content'
        };
        this.containerHistory = [];
        this.shipments_list = [];
        this.info = {};
        this.editMode = false;
        this.pms = {};
        this.shared_container_id = +this.auth.currentUserValue.shared_container_id;
        if (auth.currentUserValue.permission) {
            this.pms = auth.currentUserValue.permission.container;
        }
    }
    ngOnInit() {
        this.info = {
            container: {
                container_no: '',
                booking_no: '',
                port_of_loading: '',
                port_of_discharge: '',
                sailing_date: '',
                courier: '',
                courier_name: '',
                courier_url: '',
                eta: ''
            },
            history: [],
        };
        this.lightboxRef = this.gallery.ref('lightbox');
        this.lightboxRef.setConfig({
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageSize"].Contain,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ThumbnailsPosition"].Top,
            itemTemplate: this.itemTemplate,
            gestures: false
        });
        this.sub = this.route.params.subscribe(params => {
            this.containerId = +params['id'];
            if (!isNaN(this.containerId)) {
                this.editMode = true;
                this.getContainer(this.containerId);
            }
            else {
                this.editMode = false;
                this.containerHistory = null;
                this.containerId = null;
            }
        });
    }
    getContainer(id) {
        const fdata = new FormData();
        fdata.append('container_id', id);
        this.containerService.getContainer(fdata).subscribe(data => {
            if (data) {
                if (data.data) {
                    const containerData = data.data.data;
                    const hisData = data.data.history;
                    const shipData = data.data.shipments;
                    this.info = {
                        container: {
                            container_no: containerData.container_no,
                            booking_no: containerData.booking_no,
                            port_of_loading: containerData.port_of_loading,
                            port_of_discharge: containerData.port_of_discharge,
                            sailing_date: moment__WEBPACK_IMPORTED_MODULE_1__(new Date(containerData.sailing_date)).format('MM/DD/YYYY'),
                            courier: containerData.courier,
                            courier_name: containerData.courier_name,
                            courier_url: containerData.courier_url,
                            eta: containerData.eta,
                        },
                        history: hisData,
                    };
                    for (let i = 0; i < shipData.length; i++) {
                        let shipdata = shipData[i];
                        let packages = [];
                        for (let j = 0; j < shipdata.packages.length; j++) {
                            let pacItem = JSON.parse(shipdata.packages[j].data);
                            if (pacItem.type == '1') {
                                packages.push({
                                    type: parseInt(pacItem.type),
                                    year: pacItem.year,
                                    model: pacItem.model,
                                    mark: pacItem.mark,
                                    vin: pacItem.vin,
                                    value: pacItem.value
                                });
                            }
                            else if (pacItem.type == '2') {
                                packages.push({
                                    type: parseInt(pacItem.type),
                                    description: pacItem.description,
                                    value: pacItem.value
                                });
                            }
                        }
                        this.shipments_list.push({
                            shipment_id: shipdata.shipment_id,
                            shipment: shipdata.shipment[0],
                            packages: packages
                        });
                    }
                }
            }
        });
    }
    savePDF() {
        document.body.classList.add('print_mode');
        this.exportAsService.save(this.exportAsConfig, 'container_' + this.containerId).subscribe(() => {
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
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_7__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_container_service__WEBPACK_IMPORTED_MODULE_8__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_9__["ShipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__["Lightbox"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], viewQuery: function InfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    } }, decls: 14, vars: 3, consts: [[1, "cs-page-header"], ["mat-list-icon", ""], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink"], [4, "ngIf"], ["class", "cs-box", "id", "content", 4, "ngIf"], ["itemTemplate", ""], ["mat-flat-button", "", 3, "click"], [0, "xlink", "href", "#print_ico"], [0, "xlink", "href", "#pdf_ico"], ["id", "content", 1, "cs-box"], [1, "col"], [1, "cs-card"], [1, "inn_link", 3, "href"], ["class", "col", 4, "ngIf"], [1, "clear_list"], [4, "ngFor", "ngForOf"], [1, "gtable"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "disabled", ""], ["mat-button", "", 3, "click"], [1, "cs-plist"], ["class", "pck1", 4, "ngIf"], ["class", "pck2", 4, "ngIf"], [1, "pck1"], [1, "pck2"], [3, "src"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Container Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InfoComponent_ng_container_10_Template, 7, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InfoComponent_div_11_Template, 48, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InfoComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/containers/list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.containerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_17__["ɵb"]], styles: [".clear_list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n.clear_list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.clear_list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0px;\n}\n.pck1[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  background: #f9f9f9;\n  border: 1px solid #ececec;\n  border-radius: 5px;\n}\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 20%;\n  vertical-align: top;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 80%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 19%;\n}\n.inn_link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  background: #ececec;\n  color: #000;\n  padding: 6px 20px;\n  border-radius: 4px;\n}\n.inn_link[_ngcontent-%COMP%]:hover {\n  background: #dadada;\n}\n@media screen and (max-width: 900px) {\n  .pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 100%;\n  }\n\n  .cs-plist[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .cs-plist[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7QUFHTjtBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBQUU7RUFDRSxVQUFBO0FBRUo7QUFFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQUdBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUFGOztFQUdBO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFBRjtFQUNFO0lBQ0UsV0FBQTtFQUNKOztFQUdBO0lBQ0UsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLGtCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJpbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFyX2xpc3R7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gID5saXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICY6bGFzdC1vZi10eXBle1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGNrMSAsIC5wY2syIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wY2sxPmRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiAyMCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDEwcHggN3B4IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlY2VjZWM7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICY6bGFzdC1vZi10eXBle1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufVxuXG4ucGNrMT5kaXY+aDIgLCAucGNrMj5kaXY+aDIge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnBjazE+ZGl2Pmg0ICwgLnBjazI+ZGl2Pmg0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wY2syPmRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggN3B4IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlY2VjZWM7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICY6bGFzdC1vZi10eXBle1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICAmOm50aC1vZi10eXBlKDIpe1xuICAgIHdpZHRoOiAxOSU7XG4gIH1cbn1cblxuLmlubl9saW5re1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcbiAgLnBjazE+ZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5wY2syPmRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgJjpudGgtb2YtdHlwZSgyKXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jcy1wbGlzdD5kaXZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5jcy1wbGlzdD5kaXY6bGFzdC1vZi10eXBle1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.scss']
            }]
    }], function () { return [{ type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_7__["ManagerService"] }, { type: _shared_services_container_service__WEBPACK_IMPORTED_MODULE_8__["ContainerService"] }, { type: _shared_services_shipment_service__WEBPACK_IMPORTED_MODULE_9__["ShipmentService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__["Lightbox"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemTemplate']
        }] }); })();


/***/ }),

/***/ "RgN6":
/*!*******************************************************!*\
  !*** ./src/app/modules/container/container.module.ts ***!
  \*******************************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modules_container_info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/container/info/info.component */ "Pgwc");
/* harmony import */ var _container_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container-routing.module */ "jHC3");
/* harmony import */ var _containers_containers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/containers.component */ "5SmN");
/* harmony import */ var _createcontainer_createcontainer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createcontainer/createcontainer.component */ "2BnT");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container.component */ "yk+j");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-material-timepicker */ "cw5Z");
/* harmony import */ var _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commonpipes/commonpipes.module */ "zRWu");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-file-uploader */ "77rt");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/material/material.module */ "jAig");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");
/* harmony import */ var _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/utils/skeleton-loader/skeleton-loader.module */ "p8Kd");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "usqr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-date-picker */ "GL1M");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.component */ "lPAV");





















class ContainerModule {
}
ContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContainerModule });
ContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContainerModule_Factory(t) { return new (t || ContainerModule)(); }, imports: [[
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _container_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContainerRoutingModule"],
            _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__["CommonpipesModule"],
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_12__["ImageViewerModule"],
            _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_13__["SkeletonLoaderModule"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["GalleryModule"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"],
            _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_16__["GallerizeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__["CommonpipesModule"],
            ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__["DpDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContainerModule, { declarations: [_containers_containers_component__WEBPACK_IMPORTED_MODULE_4__["ContainersComponent"], _createcontainer_createcontainer_component__WEBPACK_IMPORTED_MODULE_5__["CreatecontainerComponent"], _container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"], _modules_container_info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"], _shared_shared_component__WEBPACK_IMPORTED_MODULE_19__["SharedComponent"]], imports: [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _container_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContainerRoutingModule"],
        _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__["CommonpipesModule"],
        angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
        _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_12__["ImageViewerModule"],
        _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_13__["SkeletonLoaderModule"],
        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["GalleryModule"],
        _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"],
        _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_16__["GallerizeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__["CommonpipesModule"],
        ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__["DpDatePickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_containers_component__WEBPACK_IMPORTED_MODULE_4__["ContainersComponent"], _createcontainer_createcontainer_component__WEBPACK_IMPORTED_MODULE_5__["CreatecontainerComponent"], _container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"], _modules_container_info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"], _shared_shared_component__WEBPACK_IMPORTED_MODULE_19__["SharedComponent"]],
                imports: [
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _container_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContainerRoutingModule"],
                    _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__["CommonpipesModule"],
                    angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                    _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_12__["ImageViewerModule"],
                    _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_13__["SkeletonLoaderModule"],
                    _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["GalleryModule"],
                    _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"],
                    _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_16__["GallerizeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _commonpipes_commonpipes_module__WEBPACK_IMPORTED_MODULE_8__["CommonpipesModule"],
                    ng2_date_picker__WEBPACK_IMPORTED_MODULE_18__["DpDatePickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jHC3":
/*!***************************************************************!*\
  !*** ./src/app/modules/container/container-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRoutingModule", function() { return ContainerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _containers_containers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/containers.component */ "5SmN");
/* harmony import */ var _createcontainer_createcontainer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createcontainer/createcontainer.component */ "2BnT");
/* harmony import */ var _modules_container_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/container/info/info.component */ "Pgwc");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.component */ "lPAV");








const routes = [
    {
        path: '',
        redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'list',
        component: _containers_containers_component__WEBPACK_IMPORTED_MODULE_2__["ContainersComponent"],
    },
    {
        path: 'shared',
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_5__["SharedComponent"],
    },
    {
        path: 'add',
        component: _createcontainer_createcontainer_component__WEBPACK_IMPORTED_MODULE_3__["CreatecontainerComponent"],
    },
    {
        path: 'info/:id',
        component: _modules_container_info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"],
    },
    {
        path: ':id',
        component: _createcontainer_createcontainer_component__WEBPACK_IMPORTED_MODULE_3__["CreatecontainerComponent"],
    },
];
class ContainerRoutingModule {
}
ContainerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContainerRoutingModule });
ContainerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContainerRoutingModule_Factory(t) { return new (t || ContainerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContainerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lPAV":
/*!**************************************************************!*\
  !*** ./src/app/modules/container/shared/shared.component.ts ***!
  \**************************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _shared_services_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/container.service */ "I1pp");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/utils/skeleton/skeleton.component */ "jsAG");
/* harmony import */ var _shared_pipes_yesno_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/yesno.pipe */ "1Ob8");
/* harmony import */ var _shared_pipes_none_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/none.pipe */ "X62f");






















function SharedComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Shipment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/shipments/add");
} }
function SharedComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r18.name, " ");
} }
function SharedComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SharedComponent_td_29_div_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r23.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r23.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r23.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r23.vin);
} }
function SharedComponent_td_29_div_3_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r23.description);
} }
function SharedComponent_td_29_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharedComponent_td_29_div_3_div_6_div_1_Template, 21, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharedComponent_td_29_div_3_div_6_div_2_Template, 6, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r23.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", package_r23.type == 2);
} }
function SharedComponent_td_29_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "yesno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SharedComponent_td_29_div_3_div_6_Template, 3, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_package_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", itm_package_r21.shipper_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, itm_package_r21.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itm_package_r21.packages);
} }
function SharedComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SharedComponent_td_29_div_3_Template, 7, 5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r4.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r19 == ctx_r4.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r19.packages);
} }
function SharedComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.destination_name, " ");
} }
function SharedComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Warehouse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r30.warehouse_name), " ");
} }
function SharedComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Shipments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.total_shipments, " ");
} }
function SharedComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharedComponent_td_41_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.expandedElement = ctx_r33.expandedElement === element_r32 ? null : element_r32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
} }
function SharedComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sp-expanded-row", ctx_r14.expandedElement === element_r35);
} }
function SharedComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function SharedComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skeleton", 44);
} }
const _c0 = function () { return ["expandedDetail"]; };
class SharedComponent {
    constructor(containerService, _manager, auth) {
        this.containerService = containerService;
        this._manager = _manager;
        this.auth = auth;
        this.warehouseId = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.destinationName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchTerms = {
            warehouse_id: '',
            destination_name: ''
        };
        this.pms = {};
        this.loaded = false;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.warehouses_list = [];
        this.displayedColumns = ['warehouse_name', 'destination_name', 'total_shipments', 'view'];
    }
    ngOnInit() {
        this.containerService.getSharedContainers().subscribe(data => {
            if (data) {
                if (data.data) {
                    console.log(data.data);
                    this.dataSource.data = data.data;
                }
            }
            this._manager.getWarehouses().subscribe(data => {
                if (data) {
                    this.warehouses_list = data.data;
                }
                this.loaded = true;
            });
        });
        this.destinationName.valueChanges.subscribe(data => {
            this.searchTerms.destination_name = data;
            this.applyFilter(data);
        });
        this.warehouseId.valueChanges.subscribe(data => {
            this.searchTerms.warehouse_id = data;
            this.applyFilter(data);
        });
        this.dataSource.filterPredicate = (data, filter) => {
            return data.warehouse_id.toString().toLowerCase().indexOf(this.searchTerms.warehouse_id) !== -1
                && (data.destination_name && data.destination_name.toLowerCase().indexOf(this.searchTerms.destination_name) !== -1);
        };
    }
    resetFilter() {
        this.searchTerms = {
            warehouse_id: '',
            destination_name: ''
        };
        this.warehouseId.setValue('');
        this.destinationName.setValue('');
    }
    applyFilter(val) {
        let filterValue = val;
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
}
SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_container_service__WEBPACK_IMPORTED_MODULE_4__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["app-shared"]], decls: 47, vars: 12, consts: [[1, "cs-page-header"], ["mat-list-icon", ""], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink", 4, "ngIf"], [1, "cs-box"], [1, "form-filter"], [3, "formControl"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", 3, "formControl"], [1, "filter-btn"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mat-elevation-z8"], [4, "ngIf", "ngIfElse"], ["mat-table", "", "multiTemplateDataRows", "", "id", "content", 3, "hidden", "dataSource"], ["content", ""], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "destination_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "warehouse_name"], ["matColumnDef", "total_shipments"], ["matColumnDef", "view"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "sp-element-row", 3, "sp-expanded-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "sp-detail-row", 4, "matRowDef", "matRowDefColumns"], ["rowsPlaceHolder", ""], ["mat-flat-button", "", 3, "routerLink"], [3, "value"], ["mat-cell", ""], [1, "sp-element-detail"], [1, "sp-element-diagram"], [4, "ngFor", "ngForOf"], [1, "pktitle"], [2, "display", "inline-block", "padding-left", "100px"], ["class", "pck1", 4, "ngIf"], ["class", "pck2", 4, "ngIf"], [1, "pck1"], [1, "pck2"], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "sp-element-row"], ["mat-row", "", 1, "sp-detail-row"], ["type", "rows"]], template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_quilt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Shared Containers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SharedComponent_a_6_Template, 4, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SharedComponent_mat_option_16_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharedComponent_Template_button_click_22_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SharedComponent_div_25_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SharedComponent_td_29_Template, 4, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SharedComponent_th_31_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SharedComponent_td_32_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SharedComponent_th_34_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SharedComponent_td_35_Template, 3, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SharedComponent_th_37_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SharedComponent_td_38_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SharedComponent_th_40_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SharedComponent_td_41_Template, 4, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SharedComponent_tr_42_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SharedComponent_tr_43_Template, 1, 2, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SharedComponent_tr_44_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SharedComponent_ng_template_45_Template, 1, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pms.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.warehouseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.destinationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loaded)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_16__["SkeletonComponent"]], pipes: [_shared_pipes_yesno_pipe__WEBPACK_IMPORTED_MODULE_17__["YesnoPipe"], _shared_pipes_none_pipe__WEBPACK_IMPORTED_MODULE_18__["NonePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n}\n\n.mat-column-select[_ngcontent-%COMP%] {\n  width: 66px;\n}\n\n.mat-column-container_type[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-column-view[_ngcontent-%COMP%], .mat-column-print[_ngcontent-%COMP%], .mat-column-update[_ngcontent-%COMP%], .mat-column-delete[_ngcontent-%COMP%] {\n  width: 56px;\n  text-align: center !important;\n}\n\n.mat-column-note[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.mat-column-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ea4141;\n}\n\n.mat-column-update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2ba7ff;\n}\n\n.mat-column-print[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #68c362;\n}\n\n.mat-column-view[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d0b142;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]     .mat-figure {\n  align-items: start;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 0px 0px 20px 0px;\n  margin-right: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 13px 0px;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n}\n\n.filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]:not(.sp-expanded-row) {\n  background: #e0e0e0;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]:not(.sp-expanded-row):hover {\n  background: #e0e0e0;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]:not(.sp-expanded-row):active {\n  background: #efefef;\n}\n\ntr.sp-detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0px 7px;\n}\n\n.sp-element-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sp-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.sp-element-row.sp-expanded-row[_ngcontent-%COMP%]   .mat-cell.cdk-column-tracking_id[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n  top: 20px;\n}\n\n.pktitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0px;\n  font-size: 16px;\n  padding: 15px 0px 6px;\n}\n\n.sp-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: block;\n}\n\n.sp-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  font-weight: lighter;\n  margin: 8px 0;\n}\n\n.pck1[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  background: #f9f9f9;\n  border: 1px solid #ececec;\n  border-radius: 5px;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 20%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 16px;\n}\n\n.pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%], .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 80%;\n  padding: 10px 7px 10px;\n  border-right: 1px solid #ececec;\n  height: 100%;\n  position: relative;\n  word-break: break-all;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 19%;\n}\n\n@media screen and (max-width: 900px) {\n  .pck1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .pck2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 100%;\n  }\n\n  .sp-element-diagram[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .sp-element-diagram[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYmxlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNKRjs7QUExQ0E7RUFDRSxhQUFBO0VBQ0Msc0JBQUE7QUE2Q0g7O0FBdkNJO0VBQ0Usa0JBQUE7QUEwQ047O0FBbkNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQXNDRjs7QUFuQ0k7RUFDRSxpQkFBQTtBQXFDTjs7QUE5QkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0UsV0FBQTtBQWlDRjs7QUE1QkU7RUFDRSxTQUFBO0FBK0JKOztBQTlCSTtFQUNFLG1CQUFBO0FBZ0NOOztBQS9CTTtFQUNFLG1CQUFBO0FBaUNSOztBQS9CTTtFQUNFLG1CQUFBO0FBaUNSOztBQTlCSTtFQUNFLGdCQUFBO0FBZ0NOOztBQVpBO0VBQ0Usa0JBQUE7QUFlRjs7QUFkRTtFQUNFLHNCQUFBO0FBZ0JKOztBQVhNO0VBQ0Usd0JBQUE7RUFDQSxTQUFBO0FBYVI7O0FBTkE7RUFDRSxpQkFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFTSjs7QUFOQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQVNGOztBQUxBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQVFGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUpFO0VBQ0Usa0JBQUE7QUFNSjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFKRTtFQUNFLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxVQUFBO0FBTUo7O0FBQUE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBR0Y7O0VBQUE7SUFDRSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUdGO0VBRkU7SUFDRSxXQUFBO0VBSUo7O0VBQUE7SUFDRSxtQkFBQTtFQUdGOztFQUFBO0lBQ0Usa0JBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4e1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXNlbGVjdHtcbiAgd2lkdGg6IDY2cHg7XG59XG5cbi5tYXQtY29sdW1uLWNvbnRhaW5lcl90eXBle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLm1hdC1jb2x1bW4tdmlldywgLm1hdC1jb2x1bW4tcHJpbnQsLm1hdC1jb2x1bW4tdXBkYXRlLC5tYXQtY29sdW1uLWRlbGV0ZSB7XG4gIHdpZHRoOjU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1ub3Rle1xuICB3aWR0aDogMTYwcHg7XG59XG5cblxuXG5cbi5tYXQtY29sdW1uLWRlbGV0ZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjZWE0MTQxO1xufVxuXG4ubWF0LWNvbHVtbi11cGRhdGUgbWF0LWljb24ge1xuICBjb2xvcjogIzJiYTdmZjtcbn1cblxuLm1hdC1jb2x1bW4tcHJpbnQgbWF0LWljb24ge1xuICBjb2xvcjogIzY4YzM2Mjtcbn1cblxuLm1hdC1jb2x1bW4tdmlldyBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjZDBiMTQyO1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xuICB3aWR0aDogNjZweDtcbn1cblxuLm1hdC1jb2x1bW4tY29udGFpbmVyX3R5cGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY29sdW1uLXZpZXcsIC5tYXQtY29sdW1uLXByaW50LCAubWF0LWNvbHVtbi11cGRhdGUsIC5tYXQtY29sdW1uLWRlbGV0ZSB7XG4gIHdpZHRoOiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tbm90ZSB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLm1hdC1jb2x1bW4tZGVsZXRlIG1hdC1pY29uIHtcbiAgY29sb3I6ICNlYTQxNDE7XG59XG5cbi5tYXQtY29sdW1uLXVwZGF0ZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMmJhN2ZmO1xufVxuXG4ubWF0LWNvbHVtbi1wcmludCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjNjhjMzYyO1xufVxuXG4ubWF0LWNvbHVtbi12aWV3IG1hdC1pY29uIHtcbiAgY29sb3I6ICNkMGIxNDI7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cblxubWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYXQtZ3JpZC10aWxlIDo6bmctZGVlcCAubWF0LWZpZ3VyZSB7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5tYXQtZm9ybS1maWVsZCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMTNweCAwcHg7XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5maWx0ZXItYnRuIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ci5zcC1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxudHIuc3AtZGV0YWlsLXJvdzpub3QoLnNwLWV4cGFuZGVkLXJvdykge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xufVxudHIuc3AtZGV0YWlsLXJvdzpub3QoLnNwLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xufVxudHIuc3AtZGV0YWlsLXJvdzpub3QoLnNwLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbnRyLnNwLWRldGFpbC1yb3cgdGQge1xuICBwYWRkaW5nOiAwcHggN3B4O1xufVxuXG4uc3AtZWxlbWVudC1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3AtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuLnNwLWVsZW1lbnQtcm93LnNwLWV4cGFuZGVkLXJvdyAubWF0LWNlbGwuY2RrLWNvbHVtbi10cmFja2luZ19pZDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdG9wOiAyMHB4O1xufVxuXG4ucGt0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNXB4IDBweCA2cHg7XG59XG5cbi5zcC1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3AtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLnBjazEsIC5wY2syIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wY2sxID4gZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMTBweCA3cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5wY2sxID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnBjazEgPiBkaXYgPiBoMiwgLnBjazIgPiBkaXYgPiBoMiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wY2sxID4gZGl2ID4gaDQsIC5wY2syID4gZGl2ID4gaDQge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnBjazIgPiBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDdweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnBjazIgPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnBjazIgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xuICB3aWR0aDogMTklO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucGNrMSA+IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAucGNrMiA+IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBjazIgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNwLWVsZW1lbnQtZGlhZ3JhbSA+IGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5zcC1lbGVtZW50LWRpYWdyYW0gPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared',
                templateUrl: './shared.component.html',
                styleUrls: ['./shared.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ]
            }]
    }], function () { return [{ type: _shared_services_container_service__WEBPACK_IMPORTED_MODULE_4__["ContainerService"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "yk+j":
/*!**********************************************************!*\
  !*** ./src/app/modules/container/container.component.ts ***!
  \**********************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 1, vars: 0, template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=container-container-module.js.map