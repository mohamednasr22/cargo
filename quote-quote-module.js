(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-quote-module"],{

/***/ "30uZ":
/*!**************************************************!*\
  !*** ./src/app/modules/quote/quote.component.ts ***!
  \**************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class QuoteComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], decls: 1, vars: 0, template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote',
                templateUrl: './quote.component.html',
                styleUrls: ['./quote.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AOf1":
/*!**********************************************************!*\
  !*** ./src/app/modules/quote/quotes/quotes.component.ts ***!
  \**********************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "I5r7");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_quote_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/quote.service */ "nz+2");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-date-picker */ "GL1M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/utils/skeleton/skeleton.component */ "jsAG");




















const _c0 = ["content"];
function QuotesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotesComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.printPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "use", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotesComponent_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.savePDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/quote/update");
} }
function QuotesComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function QuotesComponent_div_21_tr_23_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "40 HC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "45 HC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idata_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idata_r13.h40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idata_r13.h45);
} }
function QuotesComponent_div_21_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuotesComponent_div_21_tr_23_td_3_Template, 11, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.h40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.h45);
} }
function QuotesComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "USA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2 Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "3 Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "4 Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Regular Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Large Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Oversize Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "40 HC FULL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "45 HC FULL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QuotesComponent_div_21_tr_23_Template, 8, 4, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Valid until the end of the month.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.ldata);
} }
function QuotesComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skeleton", 25);
} }
class QuotesComponent {
    constructor(exportAsService, _snackBar, _manager, router, quoteService, auth) {
        this.exportAsService = exportAsService;
        this._snackBar = _snackBar;
        this._manager = _manager;
        this.router = router;
        this.quoteService = quoteService;
        this.auth = auth;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'content',
            options: {
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            }
        };
        this.loaded = false;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMM, YYYY');
        this.destinations_list = [];
        this.percentCompleted = 0;
        this.isUploaded = false;
        this.destinationInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.dateInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentDate);
        this.submitted = false;
        this.ldata = [];
        this.pms = {};
        this.userId = null;
        if (auth.currentUserValue.permission) {
            this.pms = auth.currentUserValue.permission.quotes;
            this.userId = auth.currentUserValue.user_id;
        }
    }
    ngOnInit() {
        /*
        this.ldata.push({
          name : "New York / New Jersey",
          data : [
            {'h40' : '200' , 'h45' : '220'},
            {'h40' : '359' , 'h45' : '379'},
            {'h40' : '545' , 'h45' : '565'},
            {'h40' : '644' , 'h45' : '674'},
            {'h40' : '543' , 'h45' : '573'},
            {'h40' : '886' , 'h45' : '896'},
          ],
          h40 : '956',h45 : '1200'
        });
    
        this.ldata.push({
          name : "Savannah GA",
          data : [
            {'h40' : '260' , 'h45' : '270'},
            {'h40' : '380' , 'h45' : '390'},
            {'h40' : '466' , 'h45' : '476'},
            {'h40' : '670' , 'h45' : '690'},
            {'h40' : '730' , 'h45' : '750'},
            {'h40' : '850' , 'h45' : '870'},
          ],
          h40 : '1050',h45 : '1150'
        });
    
        this.ldata.push({
          name : "Houston TX",
          data : [
            {'h40' : '320' , 'h45' : '340'},
            {'h40' : '475' , 'h45' : '495'},
            {'h40' : '533' , 'h45' : '553'},
            {'h40' : '699' , 'h45' : '749'},
            {'h40' : '740' , 'h45' : '760'},
            {'h40' : '920' , 'h45' : '940'},
          ],
          h40 : '1120',h45 : '1340'
        });
    
        this.ldata.push({
          name : "Los Angeles CA",
          data : [
            {'h40' : '240' , 'h45' : '260'},
            {'h40' : '390' , 'h45' : '410'},
            {'h40' : '588' , 'h45' : '600'},
            {'h40' : '680' , 'h45' : '700'},
            {'h40' : '575' , 'h45' : '595'},
            {'h40' : '950' , 'h45' : '970'},
          ],
          h40 : '1020',h45 : '1180'
        });
        */
        if (this.userId) {
            let _formData = new FormData();
            _formData.append('user_id', this.userId);
            this.quoteService.getAvailableQuote(_formData).subscribe(data => {
                if (data) {
                    this.destinationInput.setValue(data.data.destination_id);
                    let _dt = data.data.data;
                    _dt = _dt.replace(/&quot;/g, '"');
                    this.ldata = JSON.parse(_dt);
                }
                this._manager.getDestinations().subscribe(data => {
                    if (data) {
                        this.destinations_list = data.data;
                    }
                    this.loaded = true;
                });
            });
        }
    }
    viewQuote() {
        if (!this.destinationInput.value)
            return;
        let fd = new FormData();
        fd.append('date', this.dateInput.value);
        fd.append('destination_id', this.destinationInput.value);
        if (this.userId) {
            fd.append('user_id', this.userId);
        }
        this.quoteService.getQuote(fd).subscribe(data => {
            if (data) {
                if (data.data) {
                    let _dt = data.data.data;
                    _dt = _dt.replace(/&quot;/g, '"');
                    this.ldata = JSON.parse(_dt);
                }
                else {
                    this.openSnackBar('No records found', '');
                }
            }
        }, error => {
            this.submitted = false;
            console.log("error");
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    savePDF() {
        document.body.classList.add('print_mode');
        this.exportAsService.save(this.exportAsConfig, 'quotes').subscribe(() => {
            setTimeout(() => { document.body.classList.remove('print_mode'); }, 1000);
        });
    }
    printPage() {
        window.print();
    }
}
QuotesComponent.ɵfac = function QuotesComponent_Factory(t) { return new (t || QuotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"])); };
QuotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotesComponent, selectors: [["app-quotes"]], viewQuery: function QuotesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 24, vars: 6, consts: [[1, "cs-page-header"], ["mat-list-icon", ""], ["class", "cs-right", 4, "ngIf"], [1, "cs-box"], [1, "cs_aux_field"], [1, "cs_aux_date"], ["theme", "dp-material", "mode", "month", 3, "formControl"], ["datePicker", ""], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["class", "cs-mat-table", "id", "content", 4, "ngIf", "ngIfElse"], ["rowsPlaceHolder", ""], [1, "cs-right"], ["mat-flat-button", "", "mat-ripple", "", 3, "routerLink"], ["mat-flat-button", "", 3, "click"], [0, "xlink", "href", "#print_ico"], [0, "xlink", "href", "#pdf_ico"], [3, "value"], ["id", "content", 1, "cs-mat-table"], [4, "ngFor", "ngForOf"], [1, "pnote"], [1, "dr"], [1, "dr", "n"], ["type", "rows"]], template: function QuotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuotesComponent_div_5_Template, 11, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dp-date-picker", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuotesComponent_mat_option_18_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotesComponent_Template_button_click_19_listener() { return ctx.viewQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "VIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuotesComponent_div_21_Template, 28, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QuotesComponent_ng_template_22_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pms.update);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.dateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.destinationInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.destinations_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r4);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng2_date_picker__WEBPACK_IMPORTED_MODULE_12__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRipple"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_17__["SkeletonComponent"]], styles: [".cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #198dca;\n  color: #fff;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-right: 1px solid #25729a;\n  min-width: 120px;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(1) {\n  text-align: left;\n  background: #25729a;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #e6e6e6;\n  height: 60px;\n  padding: 0px;\n  border-bottom: 1px solid #bbbbbb;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-weight: bold;\n  text-align: left;\n  padding-left: 20px;\n  background: #25729a;\n  color: #fff;\n  border: 1px solid #1c5c7d;\n  min-width: 230px;\n}\n.csinput[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  text-align: center;\n  padding: 10px 0px;\n  width: 70%;\n}\n.cs_aux_field[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0px 0px 20px;\n}\n.cs_aux_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #25729a;\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n.cs_aux_field[_ngcontent-%COMP%]   dp-date-picker[_ngcontent-%COMP%] {\n  width: 123px;\n  margin-right: 10px;\n}\n.cs_aux_field[_ngcontent-%COMP%]     input {\n  width: 100% !important;\n  border: 1px solid #e6e6e6;\n  padding: 17px 9px !important;\n  height: auto !important;\n}\n.cs_aux_field[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: #25729a;\n}\n.cs_aux_field[_ngcontent-%COMP%]   .cs_aux_date[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n.cs_aux_field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 40px;\n  vertical-align: top;\n  margin-left: 10px;\n}\n.pnote[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 30px 0px 10px !important;\n  color: #c30b07;\n  font-size: 16px;\n}\n.pnote[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dr[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n}\n.dr[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  display: block;\n  height: 39px;\n  padding: 0px 10px;\n  background: #f0f0f0;\n  line-height: 2.9;\n  color: #000;\n}\n.dr[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%]:nth-of-type(2) {\n  background: #bbbbbb;\n}\n.dr.n[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.dr.n[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-of-type(2) {\n  border-top: 1px solid #e6e6e6;\n}\n.cs-mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxSEFBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUdWO0FBRUk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUFOO0FBTVU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSlo7QUFlQTtFQUNFLHlCQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFaSjtBQWdCQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFiRjtBQWdCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWJGO0FBaUJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBZEo7QUFtQkk7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQWpCTjtBQW9CSTtFQUNFLGNBQUE7QUFsQk47QUFzQkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBckJKO0FBNEJBO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBekJGO0FBMEJFO0VBQ0Usc0JBQUE7QUF4Qko7QUErQkE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUE1Qko7QUE2Qkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUEzQk47QUE0Qk07RUFDRSxtQkFBQTtBQTFCUjtBQThCSTtFQUNFLG1CQUFBO0FBNUJOO0FBNkJNO0VBQ0UsNkJBQUE7QUEzQlI7QUFrQ0E7RUFDRSxjQUFBO0FBL0JGIiwiZmlsZSI6InF1b3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcy1tYXQtdGFibGUge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO1xuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxOThkY2E7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI1NzI5YTtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU3MjlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiYmI7XG4gICAgfVxuXG4gICAgdGJvZHl7XG4gICAgICB0cntcbiAgICAgICAgdGR7XG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU3MjlhO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWM1YzdkO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5cblxuLmNzaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIHdpZHRoOiA3MCU7XG59XG5cblxuLmNzX2F1eF9maWVsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uY3NfYXV4X2ZpZWxkIGxhYmVsIHtcbiAgY29sb3I6ICMyNTcyOWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY3NfYXV4X2ZpZWxkIHtcbiAgZHAtZGF0ZS1waWNrZXJ7XG4gICAgd2lkdGg6IDEyM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG5cbiAgOjpuZy1kZWVwe1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgcGFkZGluZzogMTdweCA5cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogIzI1NzI5YTtcbiAgICB9XG4gIH1cblxuICAuY3NfYXV4X2RhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgYnV0dG9ue1xuICAgIHBhZGRpbmc6IDhweCA0MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuXG5cblxuLnBub3RlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMzBweCAwcHggMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2MzMGIwNztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXQtaWNvbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cblxuXG5cbi5kciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgPmIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDM5cHg7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICBsaW5lLWhlaWdodDogMi45O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2JiYmJiYjtcbiAgICB9XG4gIH1cbiAgJi5ue1xuICAgIGIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4uY3MtbWF0LXRhYmxle1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quotes',
                templateUrl: './quotes.component.html',
                styleUrls: ['./quotes.component.scss']
            }]
    }], function () { return [{ type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shared_services_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "RA5/":
/*!******************************************************!*\
  !*** ./src/app/modules/quote/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _shared_modal_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modal/confirm/confirm.component */ "AXEG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _shared_services_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/quote.service */ "nz+2");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/utils/skeleton/skeleton.component */ "jsAG");














function ListComponent_div_11_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_div_11_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
} }
function ListComponent_div_11_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_div_11_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.email, " ");
} }
function ListComponent_div_11_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/admin/quote/", a1]; };
function ListComponent_div_11_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, element_r15.user_id));
} }
function ListComponent_div_11_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_div_11_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_11_td_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.delete(element_r16.user_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_div_11_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function ListComponent_div_11_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function ListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListComponent_div_11_th_3_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_div_11_td_4_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_div_11_th_6_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_div_11_td_7_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_div_11_th_9_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_div_11_td_10_Template, 4, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_div_11_th_12_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_div_11_td_13_Template, 4, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_div_11_tr_14_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_div_11_tr_15_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function ListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skeleton", 23);
} }
class ListComponent {
    constructor(dialog, auths, quoteService) {
        this.dialog = dialog;
        this.auths = auths;
        this.quoteService = quoteService;
        this.loaded = false;
        this.displayedColumns = ['name', 'email', 'update', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.quoteService.getList().subscribe(data => {
            if (data) {
                if (data.data) {
                    this.dataSource.data = data.data;
                }
            }
            this.loaded = true;
        }, err => {
            this.loaded = true;
        });
    }
    ngOnInit() {
    }
    delete(id) {
        const dialogRef = this.dialog.open(_shared_modal_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"], {
            data: { title: 'Are you sure?', id: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const fdata = new FormData();
                fdata.append('user_id', result);
                this.quoteService.deleteQuote(fdata).subscribe(data => {
                    this.dataSource.data = this.dataSource.data.filter(row => row.user_id != result);
                });
            }
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 14, vars: 3, consts: [[1, "cs-page-header"], ["mat-list-icon", ""], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink"], [1, "cs-box"], ["class", "mat-elevation-z8", 4, "ngIf", "ngIfElse"], ["rowsPlaceHolder", ""], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "update"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Edit", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Edit", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["type", "rows"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_quilt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_div_11_Template, 16, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_ng_template_12_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/quote/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _shared_utils_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_11__["SkeletonComponent"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n}\n\n.mat-column-select[_ngcontent-%COMP%] {\n  width: 66px;\n}\n\n.mat-column-container_type[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-column-view[_ngcontent-%COMP%], .mat-column-print[_ngcontent-%COMP%], .mat-column-update[_ngcontent-%COMP%], .mat-column-delete[_ngcontent-%COMP%] {\n  width: 56px;\n  text-align: center !important;\n}\n\n.mat-column-note[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.mat-column-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ea4141;\n}\n\n.mat-column-update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2ba7ff;\n}\n\n.mat-column-print[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #68c362;\n}\n\n.mat-column-view[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d0b142;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #000;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]     .mat-figure {\n  align-items: start;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 0px 0px 20px 0px;\n  margin-right: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 13px 0px;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n}\n\n.filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYmxlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE9BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDSkY7O0FBMUNBO0VBQ0UsYUFBQTtFQUNDLHNCQUFBO0FBNkNIOztBQXZDSTtFQUNFLGtCQUFBO0FBMENOOztBQW5DQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFzQ0Y7O0FBbkNJO0VBQ0UsaUJBQUE7QUFxQ047O0FBOUJBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBaUNGOztBQTlCQTtFQUNFLFdBQUE7QUFpQ0YiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4e1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXNlbGVjdHtcbiAgd2lkdGg6IDY2cHg7XG59XG5cbi5tYXQtY29sdW1uLWNvbnRhaW5lcl90eXBle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLm1hdC1jb2x1bW4tdmlldywgLm1hdC1jb2x1bW4tcHJpbnQsLm1hdC1jb2x1bW4tdXBkYXRlLC5tYXQtY29sdW1uLWRlbGV0ZSB7XG4gIHdpZHRoOjU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1ub3Rle1xuICB3aWR0aDogMTYwcHg7XG59XG5cblxuXG5cbi5tYXQtY29sdW1uLWRlbGV0ZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjZWE0MTQxO1xufVxuXG4ubWF0LWNvbHVtbi11cGRhdGUgbWF0LWljb24ge1xuICBjb2xvcjogIzJiYTdmZjtcbn1cblxuLm1hdC1jb2x1bW4tcHJpbnQgbWF0LWljb24ge1xuICBjb2xvcjogIzY4YzM2Mjtcbn1cblxuLm1hdC1jb2x1bW4tdmlldyBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjZDBiMTQyO1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xuICB3aWR0aDogNjZweDtcbn1cblxuLm1hdC1jb2x1bW4tY29udGFpbmVyX3R5cGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY29sdW1uLXZpZXcsIC5tYXQtY29sdW1uLXByaW50LCAubWF0LWNvbHVtbi11cGRhdGUsIC5tYXQtY29sdW1uLWRlbGV0ZSB7XG4gIHdpZHRoOiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tbm90ZSB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLm1hdC1jb2x1bW4tZGVsZXRlIG1hdC1pY29uIHtcbiAgY29sb3I6ICNlYTQxNDE7XG59XG5cbi5tYXQtY29sdW1uLXVwZGF0ZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMmJhN2ZmO1xufVxuXG4ubWF0LWNvbHVtbi1wcmludCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjNjhjMzYyO1xufVxuXG4ubWF0LWNvbHVtbi12aWV3IG1hdC1pY29uIHtcbiAgY29sb3I6ICNkMGIxNDI7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cblxubWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYXQtZ3JpZC10aWxlIDo6bmctZGVlcCAubWF0LWZpZ3VyZSB7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5tYXQtZm9ybS1maWVsZCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMTNweCAwcHg7XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5maWx0ZXItYnRuIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _shared_services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"] }]; }, null); })();


/***/ }),

/***/ "T1g5":
/*!*******************************************************!*\
  !*** ./src/app/modules/quote/quote-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteRoutingModule", function() { return QuoteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes/quotes.component */ "AOf1");
/* harmony import */ var _createquote_createquote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createquote/createquote.component */ "ZT+G");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "RA5/");







const routes = [
    {
        path: '',
        redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'view',
        component: _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_2__["QuotesComponent"],
    },
    {
        path: 'add',
        component: _createquote_createquote_component__WEBPACK_IMPORTED_MODULE_3__["CreatequoteComponent"],
    },
    {
        path: ':id',
        component: _createquote_createquote_component__WEBPACK_IMPORTED_MODULE_3__["CreatequoteComponent"],
    }
];
class QuoteRoutingModule {
}
QuoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuoteRoutingModule });
QuoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuoteRoutingModule_Factory(t) { return new (t || QuoteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuoteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZT+G":
/*!********************************************************************!*\
  !*** ./src/app/modules/quote/createquote/createquote.component.ts ***!
  \********************************************************************/
/*! exports provided: CreatequoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatequoteComponent", function() { return CreatequoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/manager.service */ "5oI9");
/* harmony import */ var _shared_services_quote_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/quote.service */ "nz+2");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-date-picker */ "GL1M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "UhP/");






















function CreatequoteComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function CreatequoteComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatequoteComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.viewQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "VIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequoteComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatequoteComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.saveDuplicate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dublicate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequoteComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r12.firstname, " ", option_r12.lastname, " ");
} }
function CreatequoteComponent_tr_60_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "40 HC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "45 HC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CreatequoteComponent_tr_60_td_3_Template_input_keyup_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const j_r17 = ctx.index; const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onFirstChange(i_r14, j_r17, "h40", $event); })("change", function CreatequoteComponent_tr_60_td_3_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const j_r17 = ctx.index; const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onFirstChange(i_r14, j_r17, "h40", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CreatequoteComponent_tr_60_td_3_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const j_r17 = ctx.index; const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onFirstChange(i_r14, j_r17, "h45", $event); })("change", function CreatequoteComponent_tr_60_td_3_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const j_r17 = ctx.index; const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onFirstChange(i_r14, j_r17, "h45", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idata_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idata_r16.h40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idata_r16.h45);
} }
function CreatequoteComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreatequoteComponent_tr_60_td_3_Template, 11, 2, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CreatequoteComponent_tr_60_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r14 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onSecondChange(i_r14, "h40", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CreatequoteComponent_tr_60_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r14 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onSecondChange(i_r14, "h45", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.h40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.h45);
} }
class CreatequoteComponent {
    constructor(_snackBar, auth, route, _manager, router, quoteService) {
        this._snackBar = _snackBar;
        this.auth = auth;
        this.route = route;
        this._manager = _manager;
        this.router = router;
        this.quoteService = quoteService;
        this.userNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('MMM, YYYY');
        this.destinations_list = [];
        this.users_list = [];
        this.percentCompleted = 0;
        this.isUploaded = false;
        this.destinationInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.dateInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentDate);
        this.submitted = false;
        this.ldata = [];
        this.userParameter = false;
    }
    ngOnInit() {
        this._manager.getDestinations().subscribe(data => {
            if (data) {
                this.destinations_list = data.data;
            }
            this.auth.getUsers().subscribe(data => {
                if (data) {
                    if (data) {
                        this.users_list = data.data;
                        this.activeUsers();
                    }
                }
                this.sub = this.route.params.subscribe(params => {
                    this.userId = +params['id'];
                    if (!isNaN(this.userId)) {
                        this.userParameter = true;
                        this.getQuote(this.userId);
                    }
                    else {
                        this.getDefault();
                    }
                });
            });
        });
    }
    getDefault() {
        this.ldata.push({
            name: "New York / New Jersey",
            data: [
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' }
            ],
            h40: '0', h45: '0'
        });
        this.ldata.push({
            name: "Savannah GA",
            data: [
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' }
            ],
            h40: '0', h45: '0'
        });
        this.ldata.push({
            name: "Houston TX",
            data: [
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' }
            ],
            h40: '0', h45: '0'
        });
        this.ldata.push({
            name: "Los Angeles CA",
            data: [
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' },
                { 'h40': '0', 'h45': '0' }
            ],
            h40: '0', h45: '0'
        });
    }
    activeUsers() {
        this.filterUsers = this.userNameCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => {
            return typeof value === 'string' ? value : (value.firstname + ' ' + value.lastname);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => { var _a; return name ? this._filterUser(name) : (_a = this.users_list) === null || _a === void 0 ? void 0 : _a.slice(); }));
    }
    _filterUser(name) {
        var _a;
        const filterValue = name.toLowerCase();
        return (_a = this.users_list) === null || _a === void 0 ? void 0 : _a.filter(option => (option.firstname + ' ' + option.lastname).toLowerCase().indexOf(filterValue) === 0);
    }
    getQuote(user_id) {
        let _formData = new FormData();
        _formData.append('user_id', user_id);
        this.quoteService.getAvailableQuote(_formData).subscribe(data => {
            if (data) {
                this.userNameCtrl.setValue({ user_id: data.data.user_id, firstname: data.data.firstname, lastname: data.data.lastname });
                this.destinationInput.setValue(data.data.destination_id);
                let _dt = data.data.data;
                _dt = _dt.replace(/&quot;/g, '"');
                this.ldata = JSON.parse(_dt);
            }
        });
    }
    closeDatePicker(elem) {
        elem.close();
    }
    onFirstChange(i, j, key, event) {
        this.ldata[i]['data'][j][key] = event.target.value;
    }
    onSecondChange(i, key, event) {
        this.ldata[i][key] = event.target.value;
    }
    displayUsers(item) {
        return item && item.firstname ? (item.firstname + ' ' + item.lastname) : '';
    }
    onUserSelectionChanged($event) {
        const userData = $event.option.value;
        this.userNameCtrl.setValue(userData);
    }
    viewQuote() {
        if (!this.destinationInput.value)
            return;
        let fd = new FormData();
        fd.append('date', this.dateInput.value);
        fd.append('destination_id', this.destinationInput.value);
        if (!this.userNameCtrl.value) {
            this.openSnackBar('Missing Assigned User!', '');
            return;
        }
        else {
            this.userId = this.userNameCtrl.value.user_id;
        }
        if (this.userId) {
            fd.append('user_id', this.userId);
            this.quoteService.getQuote(fd).subscribe(data => {
                if (data) {
                    if (data.data) {
                        let _dt = data.data.data;
                        _dt = _dt.replace(/&quot;/g, '"');
                        this.ldata = JSON.parse(_dt);
                    }
                    else {
                        this.openSnackBar('No records found', '');
                    }
                }
            }, error => {
                this.submitted = false;
                console.log("error");
            });
        }
    }
    saveQuote() {
        if (!this.destinationInput.value) {
            this.openSnackBar('Missing Destination!', '');
            return;
        }
        if (!this.userNameCtrl.value) {
            this.openSnackBar('Missing Assigned User!', '');
            return;
        }
        else {
            this.userId = this.userNameCtrl.value.user_id;
        }
        let fd = new FormData();
        fd.append('date', this.dateInput.value);
        fd.append('data', JSON.stringify(this.ldata));
        fd.append('destination_id', this.destinationInput.value);
        if (this.userId) {
            fd.append('user_id', this.userId);
            this.quoteService.saveQuote(fd).subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    this.percentCompleted = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    this.isUploaded = true;
                    this.submitted = false;
                    this.openSnackBar('Data submited successfully', '');
                    this.router.navigate(["/admin/quote/list"]);
                    console.log("success");
                }
            }, error => {
                this.submitted = false;
                this.openSnackBar('Something wrong happen!', '');
                console.log("error");
            });
        }
    }
    saveDuplicate() {
        let fd = new FormData();
        fd.append('date', this.dateInput.value);
        fd.append('to_date', this.currentDate);
        fd.append('data', JSON.stringify(this.ldata));
        fd.append('destination_id', this.destinationInput.value);
        if (!this.userNameCtrl.value) {
            this.openSnackBar('Missing Assigned User!', '');
            return;
        }
        else {
            this.userId = this.userNameCtrl.value.user_id;
        }
        if (this.userId) {
            fd.append('user_id', this.userId);
            this.quoteService.saveQuote(fd).subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    this.percentCompleted = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    this.isUploaded = true;
                    this.submitted = false;
                    this.openSnackBar('Data submited successfully', '');
                    this.router.navigate(["/admin/quote/list"]);
                }
            }, error => {
                this.submitted = false;
                this.openSnackBar('Something wrong happen!', '');
                console.log("error");
            });
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
CreatequoteComponent.ɵfac = function CreatequoteComponent_Factory(t) { return new (t || CreatequoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_manager_service__WEBPACK_IMPORTED_MODULE_8__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_quote_service__WEBPACK_IMPORTED_MODULE_9__["QuoteService"])); };
CreatequoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatequoteComponent, selectors: [["app-createquote"]], decls: 61, vars: 13, consts: [[1, "cs-page-header"], ["mat-list-icon", ""], [1, "cs-right"], ["mat-flat-button", "", 3, "routerLink"], [1, "cs-box"], [1, "cs_aux_field"], [1, "cs_aux_date"], ["theme", "dp-material", "mode", "month", 3, "formControl"], ["datePicker", ""], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "cs_inline_buttons"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "cs_aux_user_field"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto_user", "matAutocomplete"], [1, "cs-mat-table"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "number", "placeholder", "0", 1, "csinput", 3, "value", "keyup"], [1, "dr"], [1, "dr", "n"], ["type", "number", "placeholder", "0", 1, "csinput", 3, "value", "keyup", "change"]], template: function CreatequoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Update Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dp-date-picker", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreatequoteComponent_mat_option_22_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreatequoteComponent_button_24_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreatequoteComponent_button_25_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatequoteComponent_Template_button_click_26_listener() { return ctx.saveQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Assigned User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-autocomplete", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreatequoteComponent_Template_mat_autocomplete_optionSelected_33_listener($event) { return ctx.onUserSelectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreatequoteComponent_mat_option_35_Template, 2, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2 Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "3 Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "4 Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Regular Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Large Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Oversize Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "40 HC FULL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "45 HC FULL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CreatequoteComponent_tr_60_Template, 8, 4, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/quote/list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.dateInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.destinationInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.destinations_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userParameter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userParameter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userNameCtrl)("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 11, ctx.filterUsers));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ldata);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], ng2_date_picker__WEBPACK_IMPORTED_MODULE_13__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], styles: [".cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #198dca;\n  color: #fff;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-right: 1px solid #25729a;\n  min-width: 120px;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(1) {\n  text-align: left;\n  background: #25729a;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #e6e6e6;\n  height: 60px;\n}\n.cs-mat-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-weight: bold;\n  text-align: left;\n  padding-left: 20px;\n  background: #25729a;\n  color: #fff;\n  border: 1px solid #1c5c7d;\n  min-width: 230px;\n}\n.csinput[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  text-align: center;\n  padding: 4px 0px;\n  width: 90%;\n}\n.cs_inline_buttons[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n.cs_aux_user_field[_ngcontent-%COMP%] {\n  float: right;\n}\n.cs_aux_field[_ngcontent-%COMP%], .cs_aux_user_field[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0px 0px 20px;\n}\n.cs_aux_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .cs_aux_user_field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #25729a;\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n.cs_aux_field[_ngcontent-%COMP%]   dp-date-picker[_ngcontent-%COMP%] {\n  width: 123px;\n  margin-right: 10px;\n}\n.cs_aux_field[_ngcontent-%COMP%]     input {\n  width: 100% !important;\n  border: 1px solid #e6e6e6;\n  padding: 17px 9px !important;\n  height: auto !important;\n}\n.cs_aux_field[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: #25729a;\n}\n.cs_aux_field[_ngcontent-%COMP%]   .cs_aux_date[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n.cs_aux_field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 40px;\n  vertical-align: top;\n  margin-left: 10px;\n}\n.cs-mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.dr[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n}\n.dr[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  display: block;\n  height: 39px;\n  padding: 0px 10px;\n  background: #f0f0f0;\n  line-height: 2.9;\n  color: #000;\n}\n.dr[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%]:nth-of-type(2) {\n  background: #bbbbbb;\n}\n.dr.n[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.dr.n[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-of-type(2) {\n  border-top: 1px solid #e6e6e6;\n}\n@media screen and (max-width: 1050px) {\n  .cs_aux_user_field[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n  }\n\n  .cs_inline_buttons[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .cs_inline_buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 8px 0px;\n    margin: 0px 3% 0px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlcXVvdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFIQUFBO0FBQUo7QUFDSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBR1Y7QUFFSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQU47QUFNVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQWNBO0VBQ0UseUJBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVhKO0FBY0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFjQTtFQUNFLFlBQUE7QUFYRjtBQWNBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQVhGO0FBYUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQW1CRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQWhCSjtBQXFCSTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsY0FBQTtBQXBCTjtBQXdCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUF0Qko7QUF5QkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUF2Qko7QUE2QkE7RUFDRSxjQUFBO0FBMUJGO0FBK0JBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBNUJGO0FBNkJFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBM0JKO0FBNEJJO0VBQ0UsbUJBQUE7QUExQk47QUE4QkU7RUFDRSxtQkFBQTtBQTVCSjtBQTZCSTtFQUNFLDZCQUFBO0FBM0JOO0FBa0NBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQS9CRjs7RUFrQ0E7SUFDRSxjQUFBO0VBL0JGO0VBZ0NFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUE5Qko7QUFDRiIsImZpbGUiOiJjcmVhdGVxdW90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcy1tYXQtdGFibGUge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO1xuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxOThkY2E7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI1NzI5YTtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU3MjlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICB0Ym9keXtcbiAgICAgIHRye1xuICAgICAgICB0ZHtcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTcyOWE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYzVjN2Q7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIzMHB4O1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLmNzaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmNzX2lubGluZV9idXR0b25ze1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jc19hdXhfdXNlcl9maWVsZHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY3NfYXV4X2ZpZWxkICwgLmNzX2F1eF91c2VyX2ZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG5cbiAgbGFiZWwge1xuICAgIGNvbG9yOiAjMjU3MjlhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuXG5cblxuXG4uY3NfYXV4X2ZpZWxkIHtcbiAgZHAtZGF0ZS1waWNrZXJ7XG4gICAgd2lkdGg6IDEyM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG5cbiAgOjpuZy1kZWVwe1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgcGFkZGluZzogMTdweCA5cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogIzI1NzI5YTtcbiAgICB9XG4gIH1cblxuICAuY3NfYXV4X2RhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgYnV0dG9ue1xuICAgIHBhZGRpbmc6IDhweCA0MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuXG5cbi5jcy1tYXQtdGFibGV7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cblxuLmRyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICA+YiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgbGluZS1oZWlnaHQ6IDIuOTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgIGJhY2tncm91bmQ6ICNiYmJiYmI7XG4gIH1cbn1cbiYubntcbiAgYiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIH1cbiAgfVxufVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA1MHB4KXtcbiAgLmNzX2F1eF91c2VyX2ZpZWxke1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNzX2lubGluZV9idXR0b25ze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJ1dHRvbntcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgbWFyZ2luOiAwcHggMyUgMHB4IDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatequoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createquote',
                templateUrl: './createquote.component.html',
                styleUrls: ['./createquote.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_8__["ManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _shared_services_quote_service__WEBPACK_IMPORTED_MODULE_9__["QuoteService"] }]; }, null); })();


/***/ }),

/***/ "nz+2":
/*!**************************************************!*\
  !*** ./src/app/shared/services/quote.service.ts ***!
  \**************************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class QuoteService {
    constructor(http) {
        this.http = http;
    }
    saveQuote(formData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/quote/save`, formData, { observe: 'events', reportProgress: true });
    }
    getList() {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/quote/list`, {});
    }
    getAvailableQuote(formData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/quote/available`, formData);
    }
    getQuote(formData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/quote/getquote`, formData);
    }
    deleteQuote(formData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/quote/delete`, formData);
    }
}
QuoteService.ɵfac = function QuoteService_Factory(t) { return new (t || QuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuoteService, factory: QuoteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sb53":
/*!***********************************************!*\
  !*** ./src/app/modules/quote/quote.module.ts ***!
  \***********************************************/
/*! exports provided: QuoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteModule", function() { return QuoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _quote_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote-routing.module */ "T1g5");
/* harmony import */ var _quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote.component */ "30uZ");
/* harmony import */ var _createquote_createquote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createquote/createquote.component */ "ZT+G");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes/quotes.component */ "AOf1");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/material/material.module */ "jAig");
/* harmony import */ var _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/skeleton-loader/skeleton-loader.module */ "p8Kd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-timepicker */ "cw5Z");
/* harmony import */ var ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-date-picker */ "GL1M");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "RA5/");













class QuoteModule {
}
QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuoteModule });
QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuoteModule_Factory(t) { return new (t || QuoteModule)(); }, imports: [[
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _quote_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuoteRoutingModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_7__["SkeletonLoaderModule"],
            ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__["DpDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuoteModule, { declarations: [_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__["QuotesComponent"], _createquote_createquote_component__WEBPACK_IMPORTED_MODULE_4__["CreatequoteComponent"], _quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"]], imports: [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _quote_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuoteRoutingModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_7__["SkeletonLoaderModule"],
        ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__["DpDatePickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__["QuotesComponent"], _createquote_createquote_component__WEBPACK_IMPORTED_MODULE_4__["CreatequoteComponent"], _quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"]],
                imports: [
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _quote_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuoteRoutingModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _shared_utils_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_7__["SkeletonLoaderModule"],
                    ng2_date_picker__WEBPACK_IMPORTED_MODULE_10__["DpDatePickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=quote-quote-module.js.map