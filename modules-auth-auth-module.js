(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "+C3+":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/approve/approve.component.ts ***!
  \***********************************************************/
/*! exports provided: ApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveComponent", function() { return ApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






function ApproveComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your account has been successfully approved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Something wrong happen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApproveComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ApproveComponent {
    constructor(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.approved = 0;
        this.submitted = false;
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].assetsPrefix;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let codeid = params['id'];
            if (codeid) {
                this.approveUser(codeid);
            }
            else {
                this.router.navigate(["/"]);
            }
        });
    }
    approveUser(_code) {
        let formData = new FormData();
        if (_code) {
            formData.append('code', _code);
        }
        this.auth.approveUser(formData).subscribe(data => {
            this.submitted = true;
            if (data) {
                if (data.error) {
                    this.approved = 2;
                }
                else if (data.success) {
                    this.approved = 1;
                }
            }
        }, error => {
            this.approved = 2;
            this.submitted = true;
        });
    }
}
ApproveComponent.ɵfac = function ApproveComponent_Factory(t) { return new (t || ApproveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ApproveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApproveComponent, selectors: [["app-approve"]], decls: 8, vars: 5, consts: [[1, "container", "gbox"], [1, "llogo", 3, "src"], [4, "ngIf"], ["routerLink", "/", 4, "ngIf"], ["routerLink", "/"]], template: function ApproveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Approval Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApproveComponent_p_4_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApproveComponent_p_5_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApproveComponent_p_6_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApproveComponent_button_7_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approved == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approved == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.gbox[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.gbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 171px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #198dca;\n  background-color: #198dca;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwcm92ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDRCxnQkFBQTtBQUNEOztBQUNBO0VBQ0Msc0JBQUE7RUFDQSxtQkFBQTtFQUNFLDRFQUFBO0VBRUYsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRDs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNDLGtDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Msc0JBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7QUFDRCIsImZpbGUiOiJhcHByb3ZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIHdpZHRoOiA5MCU7XG5cdG1heC13aWR0aDogNDAwcHg7XG59XG4uY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbiAgXHRib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLFxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmdib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmdib3ggaW1nIHtcbiAgd2lkdGg6IDE3MXB4O1xufVxuXG5idXR0b24ge1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMTk4ZGNhO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4ZGNhO1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0cGFkZGluZzogMTJweCA0NXB4O1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5idXR0b246Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApproveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-approve',
                templateUrl: './approve.component.html',
                styleUrls: ['./approve.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "305l":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "cMCp");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/material/material.module */ "jAig");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layout_single_single_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/single/single.module */ "P8hO");







class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _layout_single_single_module__WEBPACK_IMPORTED_MODULE_5__["SingleModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _layout_single_single_module__WEBPACK_IMPORTED_MODULE_5__["SingleModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _layout_single_single_module__WEBPACK_IMPORTED_MODULE_5__["SingleModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "5xB3":
/*!********************************************************************!*\
  !*** ./src/app/modules/container/signature/signature.component.ts ***!
  \********************************************************************/
/*! exports provided: SignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureComponent", function() { return SignatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "I5r7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/container.service */ "I1pp");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");














const _c0 = ["itemTemplate"];
const _c1 = ["signPad"];
function SignatureComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HM CARGO LLC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONTAINER/RORO/LCL/AIR CARGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FMC-OTI NO: 026068NF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "6250 Westpark Dr. Suite 323");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HOUSTON IX 77057");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TEL:713 637 4363");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "FAX 713 637 4276");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignatureComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We have problem in submission process.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You already added your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_51_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r23.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r24.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_329_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_329_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_330_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r26.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_331_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r27.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_342_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r28.managersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_385_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_385_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_386_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r30.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_387_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_431_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_431_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_432_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r33.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_433_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r34.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_511_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_511_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_512_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r36.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_513_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r37.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_526_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_526_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_527_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r39.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_528_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r40.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_567_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_ng_container_567_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.viewSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add your signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SignatureComponent_ng_template_10_ng_container_568_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r42.signimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_ng_container_569_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r43.shippersignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_template_10_div_589_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_div_589_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_div_589_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.reSign(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Re-Sign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignatureComponent_ng_template_10_div_590_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_div_590_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.print(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_div_590_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.savePDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "active": a0 }; };
function SignatureComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ORDER FORM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Re: Exportation of cargo from United States ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I here authorize HM CARGO LLC & their employees to act as my forwarding agent for the export control and customs purposes. To prepare, sign, declare or swear to any Shipper's Export Declaration required by law or regulations in connection with the exportation of any commodity shipped by me. To do all the things necessary to ensure compliance with all the requirements pursuant to section 192 of the U.S. Customs Regulations. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Street Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "City, Sate ,Zip Code, Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " TAX ID (EIN) or Foreign Passport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "(Social Security, Driver license and US Passports are NOT acceptable)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SignatureComponent_ng_template_10_ng_container_51_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SignatureComponent_ng_template_10_ng_container_52_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SignatureComponent_ng_template_10_ng_container_53_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Date (mm/dd/yyyy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "By signing this form, I confirm that all the information is accurate to best of my knowledge and I have read and agreed with terms and conditions. Also by filling out this form you certify that you are the owner of the cargo or licensed freight forwarder or NVOCC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CONSIGNEE INFORMATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "(Must bo full overseas address)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Street Address (no PO Box)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "City, Postal Code, Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Local Telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "ORIGIN & DESTINATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Loading Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Destination Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "COMMODITY INFORMATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Vehicle Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "VIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "YEAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "MAKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "MODEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Other Items(# of Pieces Weight, Value) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "ADDITIONAL INFORMATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Cargo Release ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Telex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Original BL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Equipment Type(20ft,40ft,etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Vehicle Insurance Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Loading option(1/3,1/4,etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Preferred Shipping Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Pick Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Documents Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Chargers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " (For office use only)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Freight $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Insurance $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Trucking $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Mail $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Total $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Unless otherwise noted, all ocean freight quotations are: valid for 30 days from the date of original quotation, subject to equipment availability, subject to any and all tariff additions, valid at time initial shipment is received. Inland freight quotations are: subject to third party increases valid at time initial shipment is received, subject to any fuel surcharges valid at time initial shipment is received, subject to weight limitations and weight distribution requirements in accordance with the local and national rules and regulations of the country (ies) of transit, subject to availability of inland carrier at time of booking. Loading, lashing, securing, blocking and bracing of cargo is for shipper\u2019s account. Carrier reserves the right to stow cargo in the best interest of the Vessel and in compliance with local, national and international rules, regulations and conventions. On deck shipments at shipper\u2019s risk. Dangerous cargo, as defined by 49 CFR or the IMDG Code, is subject to the line\u2019s approval at time of booking. Kindly note all vessel dates are subject to changes. Equipment is subject to availability.HM Cargo LLC will make its best effort to book shipment with customer\u2019s preferred shipping line at freight rates quoted herein, but selection of shipping line may be subject to change at the discretion of HM Cargo LLC. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](255, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](258, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Negotiated Rate Arrangement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Quotation Ref.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Quotation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Quotation validity from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Port of Loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Port of Discharge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Size & Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Commodity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Carrier Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Shipper Name(Company/Name) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Rules and terms of condition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "ol", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Unless otherwise noted, all ocean freight quotations are: valid for 30 days from the date of original quotation, subject to equipment availability, subject to any and all tariff additions, valid at time initial shipment is received. Inland freight quotations are: subject to third party increases valid at time initial shipment is received, subject to any fuel surcharges valid at time initial shipment is received, subject to weight limitations and weight distribution requirements in accordance with the local and national rules and regulations of the country (ies) of transit, subject to availability of inland carrier at time of booking. Loading, lashing, securing, blocking and bracing of cargo is for shipper\u2019s account. Carrier reserves the right to stow cargo in the best interest of the Vessel and in compliance with local, national and international rules, regulations and conventions. On deck shipments at shipper\u2019s risk. Dangerous cargo, as defined by 49 CFR or the IMDG Code, is subject to the line\u2019s approval at time of booking. Kindly note all vessel dates are subject to changes. Equipment is subject to availability. See HM CARGO ORDER FORM for shipment details to which such rate will apply. Service provided to this NRA is subject to Carrier\u2019s governing rules tariff, which is accessible at www.doiusa.com in compliance with FMC Regulations as provided in 46 CFR 532.7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "CARGO INSURANCE: We advise all our customers to put insurance on their shipments either container RORO air cargo LCL as there is no insurance on shipment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Customs hold and inspection: HM CARGO LLC will not be responsible for any delay or Costs incurred due to custom investigation or hold. See bill of Lading Terms 1-34 in Rule 8 of carriers governing rules tariff.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "RORO: Vehicle shipments should be empty and operational.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "PAYMENT: We advice all customers to pay on time. Please allow 3-7 business days before we can process your payment and send you your release. HM CARGO LLC is not responsible for any demurrage or detention occurs at destination due to late payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "ETA and ETD: All dates of sailing and arriving are estimated and HM CARGO LLC will not be responsible for any delay. See bill of Lading Terms 1-34 in Rule 8 of carriers governing rules tariff.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Packing List: Customer is responsible for providing HM Cargo LLC a proper packing list of goods to be loaded at customer location. HM Cargo LLC will not be responsible for any fines, fees and penalties due to failure to provide HM Cargo LLC a proper packing list of goods. Customer will be responsible for Charges incurred due to incorrect packing list.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Declaring Values: HM Cargo LLC requires that the shipper provides values for goods being shipped for Documentary/ Customs purposes. Customer should do their best to provide as accurate information as possible. Customer will be responsible for Charges incurred due to incorrect values or holds caused.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "See HM CARGO ORDER FORM for shipment details to which such rate will apply.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "See more details for more rules and terms of condition on our website www.hmcargollc.com.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Customer and HM Cargo LLC agree that the customer\u2019s identity, the rates, charges, terms and conditions offered and/or agreed in an NRA shall be kept confidential from any other shipper or carrier or party not participating in the transportation provided under this NRA. Any breach of this confidentiality agreement may give rise to a cause of action for actual damages proven to result from such breach of confidentiality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Shipper Name (Company/Name) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](329, SignatureComponent_ng_template_10_ng_container_329_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](330, SignatureComponent_ng_template_10_ng_container_330_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](331, SignatureComponent_ng_template_10_ng_container_331_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "HM CARGO LLC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](342, SignatureComponent_ng_template_10_ng_container_342_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](346, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](349, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "WRITTEN AUTHORIZATION TO PREPARE OR TRANSMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "SHIPPER\u2019S EXPORT INFORMATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "I, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, " Authorize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Exporter (U.S. Principal Party In Interest)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " HM Cargo LLC to act as forwarding agent for export control and customs purposes and to sign any shippers export declaration (SED), or transmit such export info electronically, which may be required by law or regulation in connection with the exportation or transportation of any merchandise on behalf of said U.S. principal party in interest. The U.S principal party in interest certifies that necessary and proper documentation to accurately complete the SED or transmit the information electronically is and will be provided to HM Cargo LLC the us principal party in interest further understands that civil and criminal penalties may be imposed for making false or fraudulent statements or for the violation of any united states laws or regulation on exportation and agrees to be bound by all statements of said based upon information or documentation provided by exporter to HM Cargo LLC. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " This Authorization is to remain in full force effect until revocation in writing is duly given by the U.S. Principal Party in interest and received by HM Cargo LLC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Company/Individual name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Tel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "EIN# Or Passport # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](385, SignatureComponent_ng_template_10_ng_container_385_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](386, SignatureComponent_ng_template_10_ng_container_386_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](387, SignatureComponent_ng_template_10_ng_container_387_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](388, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](391, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "END USER STATEMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " The following information is mandatory and will be used by HM Cargo LLC to determine the appropriate export authorization. The export authorization is in compliance with the U.S. State Department's International Traffic in Arms Regulations. (ITAR 22 CFR 120-130) or U.S. Department of Commerce's Export Administration Regulation (EAR), 15 CFR 768-799. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " Please complete the following information as completely and as accurately as possible: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "END USE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " What is the specific purpose for which the material is required? (Include specific Program/End Item): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "FOREIGN END USER:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " The entity from a non U.S. location that receives and uses the exported or re-exported item, even after being incorporated into a higher level assembly. The end user may be the purchaser or ultimate consignee however; the end-user is not a forwarding agent or intermediary. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Fill out the complete information for the foreign end user (full name and address, no P.O. Box):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "City/Postal Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " I, the undersigned, hereby certify that all of the representations made herein are true and correct, and that the above-mentioned commodity(s) are for the end-use and end-user, to the best of my knowledge and belief. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](431, SignatureComponent_ng_template_10_ng_container_431_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](432, SignatureComponent_ng_template_10_ng_container_432_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](433, SignatureComponent_ng_template_10_ng_container_433_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](446, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](449, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "HM CARGO LLC ROLE AND CARRIER'S LIABILITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " Thank you for making HM CARGO LLC your top choice for your shipping needs. We appreciate your business and strive to provide premium quality service at all times. Please note, however, that while every effort is made to ensure safe delivery of your goods, sometimes loss and/damage may occur. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " By law, HM CARGO LLC arranges for the transportation of your goods, however it is the carrier who bears the responsibility for any loss/damage to your freight. The carrier\u2019s liability for freight moving over the ocean is governed by the Carriage of Goods by Sea Act (COGSA). Under the terms of COGSA, the most you could recover from shipping lines in the event they are proven negligent is $500 for each Customary Freight Unit (CFU). Measurement of the CFU is widely defined, and can vary from one container to one pallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, " COGSA is centered on the liability of the carrier. The concept of the carrier liability assumes that the carrier is not responsible for paying claims if they did not cause or contribute to the loss. In the event that HM CARGO LLC acts as an NVOCC and assumes carrier liability, recovery in the event of a claim is still limited by COGSA in the bill of lading terms and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, " In order to better define carrier liability, Hague-Visby rules were created to define 17 circumstances under which the carrier cannot be held liable. If a loss is caused by any one of the following defenses; the ocean carrier will not pay for any part of the loss: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " Any neglect default of error of the carrier in navigation or of management of the ship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, " Perils or dangers of the sea (storms etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " Inherent defect, quality or vice of the goods");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " Fire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, " Quarantine restrictions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, " Acts or omissions of the shipper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, " Strikes, lockouts or labor shortage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, " Riots or civil commotions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, " Act of God");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, " Act of war or public enemies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, " Insufficient packing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, " Arrest, restraint or seizure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, " Defects not discoverable by due diligence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, " Attempting to save life or property at sea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, " Please note: This summary is provided only for informational purposes. It does not grant or extend coverage. All coverage is governed by the terms and conditions set forth in the policy (available upon request). HM CARGO LLC is not the insurance company and therefore purchases insurance for its clients from Navigators. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Insurance Conditions are specified as follows:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " Warrant professionally packed and containerized. If any of these warranties are being breached, coverage is reverted to F.P.A. only. Warrant precondition survey with pictures taken of all four sides of the vehicle. If warranty is breached, coverage excludes marring, denting, chipping, scratching, electrical and/or mechanical derangement, rust, oxidation, discoloration and corrosion. No coverage while under own power. Coverage for manufacturer permanently installed items only. Each loss or occurrence is subject to a deductible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Please tell us how you would like to proceed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " I wish to insure this shipment. Please contact us to discuss our options.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " I do not wish to insure this shipment and I understand that my recovery will be limited in the event of loss.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Signature, Title/Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](511, SignatureComponent_ng_template_10_ng_container_511_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](512, SignatureComponent_ng_template_10_ng_container_512_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](513, SignatureComponent_ng_template_10_ng_container_513_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](514, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "Full name (Print) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, " I hereby affirm that I am the owner of the cargo that is being shipped or I have been granted a power of attorney to act on the owner\u2019s behalf. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, " I understand and agree that is my responsibility, as a shipper; to know the import laws and regulation of the country of final destination. I confirm that the container will be picked up by the receiver within 30 calendar days of the arrival. If the cargo is not picked up on time, I waive all right to the cargo and agree for it to be auctioned out in order to cover demurrage charges and custom fines. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "Signature, Title/Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](526, SignatureComponent_ng_template_10_ng_container_526_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](527, SignatureComponent_ng_template_10_ng_container_527_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](528, SignatureComponent_ng_template_10_ng_container_528_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "Full name (Print) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](533, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](536, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "Important Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "ul", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Concerning the vehicle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Fuel must be drained from the car to contain less than one quarter of the tank i.e. 5litres which is equivalent to 1.320 Gallons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Customs Inspection:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "If a shipment is selected by the U.S. Customs for examination, whether it is an import or export; the shipper of the goods will be responsible for all the fees associated with it. HM CARGO LLC is not responsible for any charges or complications that may arise as a result of dealing with the U.S. Customs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Port of destination charges:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "Please note that the ocean freight charge paid in the United States for shipping your cargo does not cover the local destination port charges. Such destination port charges including handling charges, import customs clearing charges and agency fees have to be paid to an agency at the port of destination. Please consult agencies in your country of destination about these charges before you ship your cargo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Documentation amendment fees:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "After a bill of lading is submitted to the ocean carrier, every change requested by the shipper will incur documentation amendment charges from $50.00 to $300.00, depending on which ocean carrier is used. I hereby affirm that I have read and agreed with the notes above:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Customer\u2019s Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Customer\u2019s Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](567, SignatureComponent_ng_template_10_ng_container_567_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](568, SignatureComponent_ng_template_10_ng_container_568_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](569, SignatureComponent_ng_template_10_ng_container_569_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](573, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_Template_span_click_576_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.closeSignatureBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "Add Your Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](580, "canvas", 131, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_Template_button_click_583_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureComponent_ng_template_10_Template_button_click_585_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "your signature will be added to this contract.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](589, SignatureComponent_ng_template_10_div_589_Template, 5, 0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](590, SignatureComponent_ng_template_10_div_590_Template, 5, 0, "div", 135);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r11.dataForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.managersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.signimg && ctx_r11.shippersignature == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.shippersignature != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, ctx_r11.viewSignBox));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.signimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.managersignature != "");
} }
function SignatureComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thank you");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "your signature was added successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SignatureComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function SignatureComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function SignatureComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
} }
function SignatureComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function SignatureComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function SignatureComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function SignatureComponent_ng_template_21_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-imageviewer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r73.src);
} }
function SignatureComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignatureComponent_ng_template_21_ng_container_0_Template, 2, 1, "ng-container", 31);
} if (rf & 2) {
    const index_r71 = ctx.index;
    const type_r72 = ctx.type;
    const currIndex_r74 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r72 === "imageViewer" && index_r71 === currIndex_r74);
} }
class SignatureComponent {
    constructor(exportAsService, fb, route, containerService, gallery, lightbox) {
        this.exportAsService = exportAsService;
        this.fb = fb;
        this.route = route;
        this.containerService = containerService;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'content'
        };
        this.lightboxRef = null;
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].assetsPrefix;
        this.viewSignBox = false;
        this.signimg = false;
        this.shippersignature = '';
        this.managersignature = '';
        this.mode = 1;
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.image = '';
    }
    ngOnInit() {
        console.log('welcome');
        this.dataForm = this.fb.group({
            page1: this.fb.group({
                inpt1: [''],
                inpt2: [''],
                inpt3: [''],
                inpt4: [''],
                inpt5: [''],
                inpt6: [''],
                inpt7: [''],
                inpt8: [''],
                inpt9: [''],
                inpt10: [''],
                inpt11: [''],
                inpt12: [''],
                inpt13: [''],
                inpt14: [''],
                inpt15: [''],
                inpt16: [''],
                inpt17: [''],
                inpt18: [''],
                inpt19: [''],
                inpt20: [''],
                inpt21: [''],
                inpt22: [''],
                inpt23: [''],
                inpt24: [''],
                inpt25: [''],
                inpt26: [''],
                inpt27: [''],
                inpt28: [''],
                inpt29: [''],
                inpt30: [''],
                inpt31: [''],
                inpt32: [''],
                inpt33: [''],
                inpt34: [''],
                inpt35: [''],
                inpt36: [''],
                inpt37: [''],
                inpt38: [''],
                inpt39: [''],
                inpt40: [''],
                inpt41: [''],
                inpt42: [''],
                inpt43: [''],
                inpt44: [''],
                inpt45: [''],
                inpt46: [''],
                inpt47: [''],
                inpt48: [''],
                inpt49: [''],
                inpt50: [''],
                inpt51: [''],
                inpt52: [''],
                inpt53: [''],
                inpt54: ['']
            }),
            page2: this.fb.group({
                inpt55: [''],
                inpt56: [''],
                inpt57: [''],
                inpt58: [''],
                inpt59: [''],
                inpt60: [''],
                inpt61: [''],
                inpt62: [''],
                inpt63: [''],
                inpt64: [''],
                inpt65: [''],
                inpt66: [''],
                inpt67: [''],
                inpt68: [''],
                inpt69: ['']
            }),
            page3: this.fb.group({
                inpt70: [''],
                inpt71: [''],
                inpt72: [''],
                inpt73: [''],
                inpt74: [''],
                inpt75: ['']
            }),
            page4: this.fb.group({
                inpt76: [''],
                inpt77: [''],
                inpt78: [''],
                inpt79: [''],
                inpt80: [''],
                inpt81: [''],
                inpt82: [''],
                inpt83: ['']
            }),
            page5: this.fb.group({
                inpt84: [''],
                inpt85: [''],
                inpt86: [''],
                inpt87: [''],
                inpt88: [''],
                inpt89: ['']
            }),
            page6: this.fb.group({
                inpt90: [''],
                inpt91: ['']
            })
        });
        this.sub = this.route.params.subscribe(params => {
            let codeid = params['id'];
            if (codeid) {
                this.code = codeid;
                this.getSignature();
            }
            else {
            }
        });
        this.lightboxRef = this.gallery.ref('lightbox');
        this.lightboxRef.setConfig({
            imageSize: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["ImageSize"].Contain,
            thumbPosition: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["ThumbnailsPosition"].Top,
            itemTemplate: this.itemTemplate,
            gestures: false
        });
    }
    getSignature() {
        const fdata = new FormData();
        fdata.append('code', this.code);
        this.containerService.getSignatureByCode(fdata).subscribe(data => {
            if (data.data) {
                let _dt = data.data.contract_form;
                _dt = _dt.replace(/&quot;/g, '"');
                let _ddata = JSON.parse(_dt);
                this.contract = data.contract;
                this.dataForm.patchValue(_ddata);
                if (data.data.shipper_signed == "0") {
                    this.mode = 2;
                    this._subject.next(1);
                }
                else {
                    if (data.data.user_signed == "0") {
                        this.mode = 4;
                    }
                    else {
                        this.shippersignature = data.data.shipper_signature;
                        this.managersignature = data.data.manager_signature;
                        this.mode = 6;
                    }
                }
            }
        });
    }
    viewSignatureBox() {
        this.viewSignBox = true;
    }
    closeSignatureBox() {
        this.viewSignBox = false;
    }
    ngAfterViewInit() {
        this._subject.subscribe(data => {
            if (data == 1) {
                setTimeout(() => {
                    this.signaturePad = new SignaturePad(this.signPad.nativeElement, {
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        penColor: 'rgb(0, 0, 0)',
                        velocityFilterWeight: .7,
                        minWidth: 0.5,
                        maxWidth: 2.5,
                        throttle: 16,
                        minPointDistance: 3,
                    });
                }, 0);
            }
        });
    }
    openGallery(_image) {
        this.gallery_items = [_image].map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["ImageItem"]({ src: item, thumb: item }));
        this.lightboxRef.load(this.gallery_items);
        this.lightbox.open(0, 'lightbox', { panelClass: 'fullscreen' });
    }
    save() {
        var data = this.signaturePad.toDataURL('image/png');
        this.signimg = data;
        this.viewSignBox = false;
    }
    submit() {
        this.mode = 1;
        var data = this.signaturePad.toDataURL('image/png');
        const fdata = new FormData();
        fdata.append('home', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].home);
        fdata.append('code', this.code);
        fdata.append('image', data);
        this.containerService.saveSignature(fdata).subscribe(data => {
            if (data.success) {
                this.mode = 3;
            }
            else {
                this.mode = 5;
            }
        });
    }
    clear() {
        this.signaturePad.clear();
    }
    reSign() {
        this.signimg = null;
        this.signaturePad.clear();
    }
    print() {
        window.print();
    }
    savePDF() {
        document.body.classList.add('print_mode');
        this.exportAsService.save(this.exportAsConfig, 'contract').subscribe(() => {
            setTimeout(() => { document.body.classList.remove('print_mode'); }, 1000);
        });
    }
}
SignatureComponent.ɵfac = function SignatureComponent_Factory(t) { return new (t || SignatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_container_service__WEBPACK_IMPORTED_MODULE_7__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__["Lightbox"])); };
SignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignatureComponent, selectors: [["app-signature"]], viewQuery: function SignatureComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signPad = _t.first);
    } }, decls: 23, vars: 7, consts: [["topLogo", ""], ["pageFooter", ""], ["errorTemplate", ""], ["existTemplate", ""], ["loadingTemplate", ""], ["drawTemplate", ""], ["submitedTemplate", ""], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], ["itemTemplate", ""], [1, "top_holder"], [1, "top_logo"], [3, "src"], [1, "page_footer"], [1, "container", "gbox"], [1, "llogo", 3, "src"], ["id", "content", 1, "pageContainer"], [3, "formGroup"], ["formGroupName", "page1", 1, "page"], [3, "ngTemplateOutlet"], [1, "float_right"], [1, "form_holder"], ["type", "text", "readonly", "", "formControlName", "inpt1"], [1, "div_div"], ["type", "text", "readonly", "", "formControlName", "inpt2"], ["type", "text", "readonly", "", "formControlName", "inpt3"], ["type", "text", "readonly", "", "formControlName", "inpt4"], ["type", "text", "readonly", "", "formControlName", "inpt5"], ["type", "text", "readonly", "", "formControlName", "inpt6"], ["type", "text", "readonly", "", "formControlName", "inpt7"], ["type", "text", "readonly", "", "formControlName", "inpt8"], [4, "ngIf"], ["type", "text", "readonly", "", "formControlName", "inpt9"], [1, "page_box"], [1, "page_box_title"], ["type", "text", "readonly", "", "formControlName", "inpt10"], ["type", "text", "readonly", "", "formControlName", "inpt11"], ["type", "text", "readonly", "", "formControlName", "inpt12"], ["type", "text", "readonly", "", "formControlName", "inpt13"], ["type", "text", "readonly", "", "formControlName", "inpt14"], ["type", "text", "readonly", "", "formControlName", "inpt15"], ["type", "text", "readonly", "", "formControlName", "inpt16"], ["type", "text", "readonly", "", "formControlName", "inpt17"], ["type", "text", "readonly", "", "formControlName", "inpt18"], [1, "page_table"], ["type", "text", "readonly", "", "formControlName", "inpt19"], ["type", "text", "readonly", "", "formControlName", "inpt20"], ["type", "text", "readonly", "", "formControlName", "inpt21"], ["type", "text", "readonly", "", "formControlName", "inpt22"], ["type", "text", "readonly", "", "formControlName", "inpt23"], ["type", "text", "readonly", "", "formControlName", "inpt24"], ["type", "text", "readonly", "", "formControlName", "inpt25"], ["type", "text", "readonly", "", "formControlName", "inpt26"], ["type", "text", "readonly", "", "formControlName", "inpt27"], ["type", "text", "readonly", "", "formControlName", "inpt28"], ["type", "text", "readonly", "", "formControlName", "inpt29"], ["type", "text", "readonly", "", "formControlName", "inpt30"], ["type", "text", "readonly", "", "formControlName", "inpt31"], ["type", "text", "readonly", "", "formControlName", "inpt32"], ["type", "text", "readonly", "", "formControlName", "inpt33"], ["type", "text", "readonly", "", "formControlName", "inpt34"], ["type", "text", "readonly", "", "formControlName", "inpt35"], ["type", "text", "readonly", "", "formControlName", "inpt36"], ["type", "text", "readonly", "", "formControlName", "inpt37"], ["type", "text", "readonly", "", "formControlName", "inpt38"], [1, "full_input"], ["type", "text", "readonly", "", "formControlName", "inpt39"], [1, "div_div", "full"], ["type", "checkbox", "onclick", "return false;", "formControlName", "inpt40"], ["type", "checkbox", "onclick", "return false;", "formControlName", "inpt41"], ["type", "text", "readonly", "", "formControlName", "inpt42"], ["type", "text", "readonly", "", "formControlName", "inpt43"], ["type", "text", "readonly", "", "formControlName", "inpt44"], ["type", "text", "readonly", "", "formControlName", "inpt45"], ["type", "text", "readonly", "", "formControlName", "inpt46"], ["type", "checkbox", "onclick", "return false;", "formControlName", "inpt47"], ["type", "checkbox", "onclick", "return false;", "formControlName", "inpt48"], ["type", "text", "readonly", "", "formControlName", "inpt49"], [1, "div_3_7"], ["type", "text", "readonly", "", "formControlName", "inpt50"], ["type", "text", "readonly", "", "formControlName", "inpt51"], ["type", "text", "readonly", "", "formControlName", "inpt52"], ["type", "text", "readonly", "", "formControlName", "inpt53"], ["type", "text", "readonly", "", "formControlName", "inpt54"], ["formGroupName", "page2", 1, "page"], [1, ""], ["type", "text", "readonly", "", "formControlName", "inpt55"], ["type", "text", "readonly", "", "formControlName", "inpt56"], ["type", "text", "readonly", "", "formControlName", "inpt57"], ["type", "text", "readonly", "", "formControlName", "inpt58"], ["type", "text", "readonly", "", "formControlName", "inpt59"], ["type", "text", "readonly", "", "formControlName", "inpt60"], ["type", "text", "readonly", "", "formControlName", "inpt61"], ["type", "text", "readonly", "", "formControlName", "inpt62"], ["type", "text", "readonly", "", "formControlName", "inpt63"], ["type", "text", "readonly", "", "formControlName", "inpt64"], ["type", "text", "readonly", "", "formControlName", "inpt65"], [1, "page_list"], ["type", "text", "readonly", "", "formControlName", "inpt66"], ["type", "text", "readonly", "", "formControlName", "inpt67"], ["type", "text", "readonly", "", "formControlName", "inpt68"], ["type", "text", "readonly", "", "formControlName", "inpt69"], ["formGroupName", "page3", 1, "page"], ["type", "text", "readonly", "", "formControlName", "inpt70"], ["type", "text", "readonly", "", "formControlName", "inpt71"], ["type", "text", "readonly", "", "formControlName", "inpt72"], ["type", "text", "readonly", "", "formControlName", "inpt73"], ["type", "text", "readonly", "", "formControlName", "inpt74"], ["type", "text", "readonly", "", "formControlName", "inpt75"], ["formGroupName", "page4", 1, "page"], ["type", "text", "readonly", "", "formControlName", "inpt76"], ["type", "text", "readonly", "", "formControlName", "inpt77"], ["type", "text", "readonly", "", "formControlName", "inpt78"], ["type", "text", "readonly", "", "formControlName", "inpt79"], ["type", "text", "readonly", "", "formControlName", "inpt80"], ["type", "text", "readonly", "", "formControlName", "inpt81"], ["type", "text", "readonly", "", "formControlName", "inpt82"], ["type", "text", "readonly", "", "formControlName", "inpt83"], ["formGroupName", "page5", 1, "page"], ["type", "checkbox", "onclick", "return false;", "formControlName", "inpt84"], ["type", "checkbox", "onclick", "return false;", "formControlName", "inpt85"], ["type", "text", "readonly", "", "formControlName", "inpt86"], ["type", "text", "readonly", "", "formControlName", "inpt87"], ["type", "text", "readonly", "", "formControlName", "inpt88"], ["type", "text", "readonly", "", "formControlName", "inpt89"], ["formGroupName", "page6", 1, "page"], [1, "page_list", "v2"], ["type", "text", "readonly", "", "formControlName", "inpt90"], ["type", "text", "readonly", "", "formControlName", "inpt91"], [1, "container_overlay", 3, "ngClass"], [1, "close_it", 3, "click"], ["width", "360", "height", "200"], ["signPad", ""], [1, "btns"], [3, "click"], ["class", "btn_options", 4, "ngIf"], [1, "signimg", 3, "src"], [1, "btn_options"]], template: function SignatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignatureComponent_ng_template_0_Template, 10, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignatureComponent_ng_template_2_Template, 12, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignatureComponent_ng_template_4_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignatureComponent_ng_template_6_Template, 4, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignatureComponent_ng_template_8_Template, 3, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignatureComponent_ng_template_10_Template, 591, 40, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignatureComponent_ng_template_12_Template, 6, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignatureComponent_ng_container_15_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignatureComponent_ng_container_16_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignatureComponent_ng_container_17_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignatureComponent_ng_container_18_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignatureComponent_ng_container_19_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignatureComponent_ng_container_20_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignatureComponent_ng_template_21_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ɵb"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n  width: 100%;\n}\n\n.btns[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 20px 40px;\n  border: none;\n  background: #3790d0;\n  color: #fff;\n  margin: 10px 5px;\n  font-size: 18px;\n  border-radius: 4px;\n  box-shadow: 0px 0px 10px 2px #c1c1c1;\n}\n\n.dmbtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #3790d0;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n[_nghost-%COMP%] {\n  width: 90%;\n  height: 100%;\n}\n\n.signimg[_ngcontent-%COMP%] {\n  width: 161px;\n  margin-bottom: -40px;\n}\n\n.close_it[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 5;\n  cursor: pointer;\n}\n\n.close_it[_ngcontent-%COMP%]:before, .close_it[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: 15px;\n  height: 3px;\n  background: #838383;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0) rotate(45deg);\n}\n\n.close_it[_ngcontent-%COMP%]:before {\n  transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n}\n\n.container_overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.71);\n  z-index: 999999;\n  visibility: hidden;\n}\n\n.container_overlay.active[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  max-width: 400px;\n}\n\n.gbox[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n.gbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 171px;\n}\n\n.btn_options[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 24px 10px;\n  background: #fff;\n  box-shadow: 0px 3px 10px #909090;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.btn_options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 11px;\n  width: 100px;\n  margin: 0px 10px;\n  cursor: pointer;\n  background: #4c9cff;\n  color: #fff;\n  border: 1px solid #4c9cff;\n}\n\n.btn_options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #198dca;\n  color: #fff;\n  border: 1px solid #198dca;\n}\n\n.top_logo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.top_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 305px;\n  display: inline-block;\n}\n\n.top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: 340px;\n  text-align: center;\n  font-size: 20px;\n  line-height: 1.8;\n}\n\n.top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-size: 30px;\n}\n\n.top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.top_holder[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.float_right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.page[_ngcontent-%COMP%] {\n  line-height: 1.8;\n}\n\n.page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #2697ff;\n  color: #fff;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 3px;\n  margin-right: 40px;\n  margin-left: 5px;\n  box-shadow: 0px 0px 4px #a2a2a2;\n}\n\n.page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0px 0px 0px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.page[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #000;\n  padding: 5px;\n  width: 100%;\n}\n\n.div_div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.div_div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1) {\n  padding-right: 10px;\n}\n\n.div_div.full[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.form_holder[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form_holder[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 10px 10px 0px;\n}\n\n.form_holder[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #000;\n  padding: 5px;\n}\n\n.page_box[_ngcontent-%COMP%] {\n  border-top: 4px solid #000;\n  margin-top: 20px;\n  padding: 20px 0px;\n}\n\n.page_box_title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n}\n\n.page_box_title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: inline-block;\n  padding: 0px 6px;\n}\n\n.div_3_7[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.div_3_7[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 30%;\n}\n\n.div_3_7[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1)    > div[_ngcontent-%COMP%] {\n  padding: 8px 0px;\n}\n\n.div_3_7[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 70%;\n}\n\n.div_3_7[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #000;\n  padding: 5px;\n}\n\n.page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 20%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 80%;\n  display: inline-block;\n}\n\n.page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2)   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2)   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  margin: 0px;\n}\n\n.page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2)   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2)   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px;\n  height: 30px;\n  border: 1px solid #000;\n}\n\n.full_input[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.full_input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #000;\n  padding: 5px;\n}\n\n.page_footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  padding: 50px 0px;\n  border-bottom: 1px solid;\n  margin-bottom: 80px;\n}\n\n.page_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #b8b618;\n  font-style: italic;\n  padding: 0px 10px;\n}\n\n.page_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.page_list.v2[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.page_list.v2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n  padding-left: 30px;\n}\n\n.page_list.v2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2):before {\n  content: \"\";\n  position: relative;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 1px solid #000;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.pageContainer[_ngcontent-%COMP%] {\n  display: block;\n  width: 95%;\n  max-width: 800px;\n  overflow: auto;\n  height: 100%;\n  margin: 0px auto;\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  box-shadow: 0px 0px 10px 10px #ddd;\n}\n\n@media screen and (max-width: 768px) {\n  .top_logo[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .top_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n  }\n  .top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n    font-size: 20px;\n  }\n  .top_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n    font-weight: bold;\n    font-size: 12px;\n  }\n\n  .page_box_title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 20px;\n  }\n\n  .page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1), .page_table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 100%;\n  }\n\n  .div_div[_ngcontent-%COMP%] {\n    padding: 0px !important;\n  }\n  .div_div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 10px 10px 0px;\n  }\n  .div_div.full[_ngcontent-%COMP%] {\n    padding: 0px !important;\n  }\n  .div_div.full[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 10px 10px 0px;\n  }\n\n  .div_3_7[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1), .div_3_7[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 100%;\n  }\n\n  .page_footer[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .pageContainer[_ngcontent-%COMP%] {\n    max-width: 1100px;\n    padding: 70px;\n  }\n}\n\n@media print {\n  .pageContainer[_ngcontent-%COMP%] {\n    overflow: auto;\n    height: auto;\n  }\n\n  .btn_options[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQURFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFHSjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbURBQUE7QUFESjs7QUFHRTtFQUNFLG9EQUFBO0FBREo7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBUUU7RUFDRSxtQkFBQTtBQU5KOztBQVVBO0VBQ0Msc0JBQUE7RUFDQSxtQkFBQTtFQUNFLDRFQUFBO0VBRUYsa0JBQUE7RUFDQSxnQkFBQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBUkY7O0FBV0E7RUFDRSxZQUFBO0FBUkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUFURjs7QUFVRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFSSjs7QUFTSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBUE47O0FBZ0JBO0VBQ0UscUJBQUE7QUFiRjs7QUFjRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQVpKOztBQWNFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWFJO0VBQ0UsY0FBQTtBQVhOOztBQVlNO0VBQ0UsZUFBQTtBQVZSOztBQVlNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBVlI7O0FBZUE7RUFDQSxrQkFBQTtBQVpBOztBQWVBO0VBQ0EsWUFBQTtBQVpBOztBQWVBO0VBQ0EsZ0JBQUE7QUFaQTs7QUFhQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQVhGOztBQWFBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFhQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWEY7O0FBZ0JBO0VBQ0UscUJBQUE7QUFiRjs7QUFjRTtFQUNFLG1CQUFBO0FBWko7O0FBZ0JFO0VBQ0UsVUFBQTtBQWRKOztBQW1CQTtFQUNBLG1CQUFBO0FBaEJBOztBQWlCQTtFQUNFLDJCQUFBO0FBZkY7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQWZGOztBQW9CQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWpCQTs7QUFvQkE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFqQkE7O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7O0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQW5CRjs7QUFvQkU7RUFDRSxVQUFBO0FBbEJKOztBQW1CSTtFQUNFLGdCQUFBO0FBakJOOztBQW9CRTtFQUNFLFVBQUE7QUFsQko7O0FBcUJBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQW5CRjs7QUF5Qkk7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXRCTjs7QUF3Qkk7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUF0Qk47O0FBdUJNO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBckJSOztBQXNCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXBCVjs7QUFzQlE7RUFDRSxZQUFBO0FBcEJWOztBQXNCUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFwQlY7O0FBNEJBO0VBQ0EsZ0JBQUE7QUF6QkE7O0FBMEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUF4QkY7O0FBK0JBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBNUJBOztBQTZCQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEzQkY7O0FBaUNFO0VBQ0UsbUJBQUE7QUE5Qko7O0FBZ0NFO0VBQ0UsbUJBQUE7QUE5Qko7O0FBaUNVO0VBQ0Usa0JBQUE7QUEvQlo7O0FBZ0NZO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTlCZDs7QUF1Q0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFwQ0o7O0FBdUNBO0VBQ0U7SUFDRSxtQkFBQTtFQXBDRjtFQXFDRTtJQUNFLFlBQUE7RUFuQ0o7RUFxQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQW5DSjtFQXFDTTtJQUNFLGVBQUE7RUFuQ1I7RUFxQ007SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFuQ1I7O0VBeUNBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBdENGOztFQTBDSTtJQUNFLFdBQUE7RUF2Q047O0VBMkNBO0lBQ0UsdUJBQUE7RUF4Q0Y7RUF5Q0U7SUFDRSxXQUFBO0lBQ0EsMkJBQUE7RUF2Q0o7RUF5Q0U7SUFDRSx1QkFBQTtFQXZDSjtFQXdDSTtJQUNFLFdBQUE7SUFDQSwyQkFBQTtFQXRDTjs7RUE0Q0k7SUFDRSxXQUFBO0VBekNOOztFQTZDQTtJQUNFLGVBQUE7RUExQ0Y7QUFDRjs7QUFnREE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsYUFBQTtFQTlDRjtBQUNGOztBQWtEQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFlBQUE7RUFoREY7O0VBa0RBO0lBQ0UsYUFBQTtFQS9DRjtBQUNGIiwiZmlsZSI6InNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5jYW52YXN7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggI2RjZGNkYztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG5ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJ1dHRvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMzc5MGQwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNjMWMxYzE7XG5cbiAgfVxufVxuXG4uZG1idG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMzNzkwZDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxubWF0LXNwaW5uZXJ7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cblxuOmhvc3R7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcblxufVxuXG4uc2lnbmltZyB7XG4gIHdpZHRoOiAxNjFweDtcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XG59XG5cbi5jbG9zZV9pdCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmJlZm9yZSAsICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjODM4MzgzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG59XG5cblxuXG5cbi5jb250YWluZXJfb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gNzElKTtcbiAgei1pbmRleDogOTk5OTk5O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgJi5hY3RpdmV7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbiAgXHRib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLFxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmdib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTtcbn1cblxuLmdib3ggaW1nIHtcbiAgd2lkdGg6IDE3MXB4O1xufVxuXG5cbi5idG5fb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHBhZGRpbmc6IDI0cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM5MDkwOTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNGM5Y2ZmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YzljZmY7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTk4ZGNhO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTk4ZGNhO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbi50b3BfbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaW1nIHtcbiAgICB3aWR0aDogMzA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnRvcF9ob2xkZXJ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbG9hdF9yaWdodHtcbmZsb2F0OiByaWdodDtcbn1cblxuLnBhZ2V7XG5saW5lLWhlaWdodDogMS44O1xuYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyNjk3ZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggI2EyYTJhMjtcbn1cbmgze1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG50ZXh0YXJlYXtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbn1cblxuLmRpdl9kaXZ7XG4+ZGl2e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICY6bnRoLW9mLXR5cGUoMSl7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxufVxuJi5mdWxse1xuICA+ZGl2e1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbn1cblxuLmZvcm1faG9sZGVye1xubWFyZ2luLWJvdHRvbTogMjBweDtcbj5kaXZ7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDBweDtcbn1cbmlucHV0e1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG59XG5cblxuLnBhZ2VfYm94IHtcbmJvcmRlci10b3A6IDRweCBzb2xpZCAjMDAwO1xubWFyZ2luLXRvcDogMjBweDtcbnBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4ucGFnZV9ib3hfdGl0bGUge1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zaXplOiAyMHB4O1xuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDBweCA2cHg7XG59XG59XG5cbi5kaXZfM183e1xuPmRpdntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAmOm50aC1vZi10eXBlKDEpe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgPmRpdntcbiAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgfVxuICB9XG4gICY6bnRoLW9mLXR5cGUoMil7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuaW5wdXR7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cbn1cblxuLnBhZ2VfdGFibGV7XG4gID5kaXZ7XG4gICAgJjpudGgtb2YtdHlwZSgxKXtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cbiAgICAmOm50aC1vZi10eXBlKDIpe1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRhYmxle1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdGR7XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cblxuLmZ1bGxfaW5wdXR7XG5tYXJnaW4tdG9wOiA0MHB4O1xuaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG59XG5cblxuXG5cbi5wYWdlX2Zvb3RlciB7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXNpemU6IDE2cHg7XG5wYWRkaW5nOiA1MHB4IDBweDtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbm1hcmdpbi1ib3R0b206IDgwcHg7XG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYjhiNjE4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxufVxuXG5cbi5wYWdlX2xpc3R7XG4gIGxpe1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgJi52MiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIGxpe1xuICAgICAgICA+ZGl2e1xuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMil7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuXG4ucGFnZUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMTBweCAjZGRkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgLnRvcF9sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBhZ2VfYm94X3RpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdlX3RhYmxle1xuICAgID5kaXZ7XG4gICAgICAmOm50aC1vZi10eXBlKDEpICwgJjpudGgtb2YtdHlwZSgyKXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kaXZfZGl2e1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgID5kaXZ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDBweDtcbiAgICB9XG4gICAgJi5mdWxse1xuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICA+ZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGl2XzNfN3tcbiAgICA+ZGl2e1xuICAgICAgJjpudGgtb2YtdHlwZSgxKSAsICY6bnRoLW9mLXR5cGUoMil7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucGFnZV9mb290ZXJ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KXtcbiAgLnBhZ2VDb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgcGFkZGluZzogNzBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBwcmludHtcbiAgLnBhZ2VDb250YWluZXJ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5idG5fb3B0aW9uc3tcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signature',
                templateUrl: './signature.component.html',
                styleUrls: ['./signature.component.scss']
            }]
    }], function () { return [{ type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _shared_services_container_service__WEBPACK_IMPORTED_MODULE_7__["ContainerService"] }, { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"] }, { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__["Lightbox"] }]; }, { itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemTemplate']
        }], signPad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signPad', { static: false }]
        }] }); })();


/***/ }),

/***/ "6n5F":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "UhP/");











function LoginComponent_mat_spinner_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function LoginComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.registerForm.valid);
} }
function LoginComponent_mat_spinner_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function LoginComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.loading || !ctx_r3.loginForm.valid);
} }
const _c0 = function (a0) { return { "right-panel-active": a0 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assetsPrefix;
        this.active = false;
        this.loading = false;
        this.submitted = false;
        this.regsubmitted = false;
        this.error = '';
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/admin/shipments/list']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.registerForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.MustMatch('password', 'confirmpassword') });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.login(this.f.email.value, this.f.password.value);
    }
    login(u, p) {
        debugger;
        alert(u);
        alert(p);
        this.authenticationService.login(u, p)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            if (data.access_token) {
                console.log(this.returnUrl);
                this.router.navigate([this.returnUrl || "/admin/shipments/list"]);
            }
            if (data.error) {
                alert(data.error);
            }
            this.submitted = false;
            this.loading = false;
        }, error => {
            this.error = error;
            this.loading = false;
            this.submitted = false;
        });
    }
    get rf() { return this.registerForm.controls; }
    onRegisterSubmit() {
        this.regsubmitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.rf.firstname.value, this.rf.lastname.value, this.rf.phone.value, this.rf.email.value, this.rf.password.value, `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].home}approve`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.resetRegForm();
            if (data.error) {
                alert(data.error);
            }
            else {
                console.log(data.success);
                if (data) {
                    if (data.success) {
                        alert(data.success);
                        //this.login(this.rf.email.value, this.rf.password.value);
                    }
                }
            }
            this.loading = false;
            this.regsubmitted = false;
        }, error => {
            this.error = error;
            this.loading = false;
            this.regsubmitted = false;
            this.resetRegForm();
        });
    }
    resetRegForm() {
        this.registerForm.patchValue({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            confirmpassword: ''
        });
    }
    toggleActive($value) {
        this.active = $value;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 47, vars: 29, consts: [[1, "container", 3, "ngClass"], [1, "form-container", "sign-up-container"], [3, "formGroup", "ngSubmit"], [1, "llogo", 3, "src"], [1, "form_row_2"], ["type", "text", "placeholder", "First Name", "formControlName", "firstname", "autocomplete", "off", 3, "ngClass"], ["type", "text", "placeholder", "Last Name", "formControlName", "lastname", "autocomplete", "off", 3, "ngClass"], ["type", "email", "placeholder", "Email", "formControlName", "email", "autocomplete", "off", 3, "ngClass"], ["type", "phone", "placeholder", "Phone", "formControlName", "phone", "autocomplete", "off", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "password", "autocomplete", "off", 3, "ngClass"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "confirmpassword", 3, "ngClass"], [3, "diameter", 4, "ngIf"], ["matRipple", "", 3, "disabled", 4, "ngIf"], [1, "form_link", 3, "click"], [1, "form-container", "sign-in-container"], ["type", "email", "placeholder", "Email", "formControlName", "email"], ["type", "password", "placeholder", "Password", "formControlName", "password"], ["routerLink", "forgetpassword"], [1, "overlay-container"], [1, "overlay"], [1, "overlay-panel", "overlay-left"], ["id", "signIn", 1, "ghost", 3, "click"], [1, "overlay-panel", "overlay-right"], ["id", "signUp", 1, "ghost", 3, "click"], [3, "diameter"], ["matRipple", "", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_mat_spinner_14_Template, 1, 1, "mat-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_button_15_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_16_listener() { return ctx.toggleActive(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() { return ctx.login(ctx.loginForm.get("email").value, ctx.loginForm.get("password").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginComponent_mat_spinner_27_Template, 1, 1, "mat-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_button_28_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_29_listener() { return ctx.toggleActive(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Welcome Back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "To keep connected with us please login with your personal info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() { return ctx.toggleActive(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hello, Friend!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Enter your personal details and start managing your shipments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_45_listener() { return ctx.toggleActive(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.regsubmitted && ctx.rf.firstname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.regsubmitted && ctx.rf.lastname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.regsubmitted && ctx.rf.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.regsubmitted && ctx.rf.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.regsubmitted && ctx.rf.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, ctx.regsubmitted && ctx.rf.confirmpassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regsubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.regsubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #198dca;\n  background-color: #198dca;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\nform[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\n\ninput.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px #dc0000;\n  background: #ffe1e1;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 768px;\n  max-width: 100%;\n  min-height: 480px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n\n.sign-in-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n\n.sign-up-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n  animation: show 0.6s;\n}\n\n@keyframes show {\n  0%, 49.99% {\n    opacity: 0;\n    z-index: 1;\n  }\n  50%, 100% {\n    opacity: 1;\n    z-index: 5;\n  }\n}\n\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background: #198dca;\n  background: linear-gradient(to right, #198dca, #198dca);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  color: #FFFFFF;\n  position: relative;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 40px;\n  text-align: center;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n\n.overlay-left[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.overlay-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n\n.llogo[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.form_row_2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.form_row_2[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.form_row_2[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin-left: 2%;\n}\n\n.form_link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 15px !important;\n  display: none;\n  padding: 5px;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 900px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0px 20px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .sign-in-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .form_link[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .sign-up-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sign-up-container[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n\n  .container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%] {\n    transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtFQUNBLFNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Msa0NBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDQyxzQkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsNkJBQUE7RUFDQSxxQkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0MsV0FBQTtBQUNGOztBQUFFO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSxtQkFBQTtFQUNFLDRFQUFBO0VBRUYsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRDs7QUFHQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUFEOztBQUdBO0VBQ0MsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQUQ7O0FBR0E7RUFDQywyQkFBQTtBQUFEOztBQUdBO0VBQ0MsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUFEOztBQUdBO0VBQ0MsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQUQ7O0FBR0E7RUFDQztJQUNDLFVBQUE7SUFDQSxVQUFBO0VBQUE7RUFHRDtJQUNDLFVBQUE7SUFDQSxVQUFBO0VBREE7QUFDRjs7QUFJQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FBRkQ7O0FBS0E7RUFDQyw0QkFBQTtBQUZEOztBQUtBO0VBQ0MsbUJBQUE7RUFFQSx1REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNFLHdCQUFBO0VBQ0Ysc0NBQUE7QUFGRDs7QUFLQTtFQUNHLDBCQUFBO0FBRkg7O0FBS0E7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FBRkQ7O0FBS0E7RUFDQywyQkFBQTtBQUZEOztBQUtBO0VBQ0Msd0JBQUE7QUFGRDs7QUFLQTtFQUNDLFFBQUE7RUFDQSx3QkFBQTtBQUZEOztBQUtBO0VBQ0MsMEJBQUE7QUFGRDs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU9BO0VBQ0U7SUFDRSxpQkFBQTtFQUpGOztFQU1BO0lBQ0UsWUFBQTtFQUhGOztFQUtBO0lBQ0UsYUFBQTtFQUZGOztFQUtBO0lBQ0UsV0FBQTtFQUZGOztFQUlBO0lBQ0UsY0FBQTtFQURGOztFQUlBO0lBQ0UsV0FBQTtFQURGOztFQUlBO0lBQ0UsNEJBQUE7RUFERjs7RUFJQTtJQUNFLHlCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbjogMDtcbn1cblxuaDIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdG1hcmdpbjogMjBweCAwIDMwcHg7XG59XG5cbnNwYW4ge1xuXHRmb250LXNpemU6IDEycHg7XG59XG5cbmEge1xuXHRjb2xvcjogIzMzMztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdG1hcmdpbjogMTVweCAwO1xufVxuXG5idXR0b24ge1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMTk4ZGNhO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4ZGNhO1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0cGFkZGluZzogMTJweCA0NXB4O1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5idXR0b246Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24uZ2hvc3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5mb3JtIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBhZGRpbmc6IDAgNTBweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XG5cdG1hcmdpbjogOHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAmLmlzLWludmFsaWR7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggI2RjMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZlMWUxO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcdGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksXG5cdFx0XHQwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHdpZHRoOiA3NjhweDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtaW4taGVpZ2h0OiA0ODBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGhlaWdodDogMTAwJTtcblx0dHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaWduLWluLWNvbnRhaW5lciB7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiA1MCU7XG5cdHotaW5kZXg6IDI7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLnNpZ24tdXAtY29udGFpbmVyIHtcblx0bGVmdDogMDtcblx0d2lkdGg6IDUwJTtcblx0b3BhY2l0eTogMDtcblx0ei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRvcGFjaXR5OiAxO1xuXHR6LWluZGV4OiA1O1xuXHRhbmltYXRpb246IHNob3cgMC42cztcbn1cblxuQGtleWZyYW1lcyBzaG93IHtcblx0MCUsIDQ5Ljk5JSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR6LWluZGV4OiAxO1xuXHR9XG5cblx0NTAlLCAxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHotaW5kZXg6IDU7XG5cdH1cbn1cblxuLm92ZXJsYXktY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDUwJTtcblx0d2lkdGg6IDUwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcblx0ei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXJ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5vdmVybGF5IHtcblx0YmFja2dyb3VuZDogIzE5OGRjYTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxOThkY2EsICMxOThkY2EpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxOThkY2EsICMxOThkY2EpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IC0xMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAyMDAlO1xuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcbiAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LXJpZ2h0IHtcblx0cmlnaHQ6IDA7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuLmxsb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbi5mb3JtX3Jvd18yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1fcm93XzI+aW5wdXQge1xuICB3aWR0aDogNDklO1xufVxuXG4uZm9ybV9yb3dfMj5pbnB1dDpudGgtb2YtdHlwZSgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmZvcm1fbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcbiAgZm9ybXtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAub3ZlcmxheS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zaWduLWluLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZm9ybV9saW5re1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNpZ24tdXAtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNpZ24tdXAtY29udGFpbmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cblxuICAuY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "P8hO":
/*!************************************************!*\
  !*** ./src/app/layout/single/single.module.ts ***!
  \************************************************/
/*! exports provided: SingleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleModule", function() { return SingleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _single_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single.component */ "dh6p");
/* harmony import */ var _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/auth/login/login.component */ "6n5F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/material/material.module */ "jAig");
/* harmony import */ var _modules_auth_approve_approve_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/auth/approve/approve.component */ "+C3+");
/* harmony import */ var _modules_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/auth/resetpassword/resetpassword.component */ "bGbi");
/* harmony import */ var _modules_auth_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/auth/forgetpassword/forgetpassword.component */ "gN89");
/* harmony import */ var _modules_container_signature_signature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/container/signature/signature.component */ "5xB3");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "rYkZ");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-gallery/core */ "PZgd");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "Wc6z");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "usqr");
















class SingleModule {
}
SingleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SingleModule });
SingleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SingleModule_Factory(t) { return new (t || SingleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"],
            _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_14__["GallerizeModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleModule, { declarations: [_single_component__WEBPACK_IMPORTED_MODULE_2__["SingleComponent"], _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _modules_auth_approve_approve_component__WEBPACK_IMPORTED_MODULE_7__["ApproveComponent"], _modules_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__["ResetpasswordComponent"], _modules_auth_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_9__["ForgetpasswordComponent"], _modules_container_signature_signature_component__WEBPACK_IMPORTED_MODULE_10__["SignatureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"],
        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"],
        _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"],
        _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_14__["GallerizeModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_single_component__WEBPACK_IMPORTED_MODULE_2__["SingleComponent"], _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _modules_auth_approve_approve_component__WEBPACK_IMPORTED_MODULE_7__["ApproveComponent"], _modules_auth_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__["ResetpasswordComponent"], _modules_auth_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_9__["ForgetpasswordComponent"], _modules_container_signature_signature_component__WEBPACK_IMPORTED_MODULE_10__["SignatureComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"],
                    _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"],
                    _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"],
                    _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_14__["GallerizeModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bGbi":
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/resetpassword/resetpassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ResetpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(); };
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 2, vars: 0, template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resetpassword works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpassword',
                templateUrl: './resetpassword.component.html',
                styleUrls: ['./resetpassword.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cMCp":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "6n5F");
/* harmony import */ var _approve_approve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approve/approve.component */ "+C3+");
/* harmony import */ var _container_signature_signature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/signature/signature.component */ "5xB3");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "gN89");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "bGbi");









const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'approve',
        component: _approve_approve_component__WEBPACK_IMPORTED_MODULE_3__["ApproveComponent"]
    },
    {
        path: 'approve/:id',
        component: _approve_approve_component__WEBPACK_IMPORTED_MODULE_3__["ApproveComponent"]
    },
    {
        path: 'signature',
        component: _container_signature_signature_component__WEBPACK_IMPORTED_MODULE_4__["SignatureComponent"]
    },
    {
        path: 'signature/:id',
        component: _container_signature_signature_component__WEBPACK_IMPORTED_MODULE_4__["SignatureComponent"]
    },
    {
        path: 'forgetpassword',
        component: _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpasswordComponent"]
    },
    {
        path: 'resetpassword',
        component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gN89":
/*!*************************************************************************!*\
  !*** ./src/app/modules/auth/forgetpassword/forgetpassword.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function() { return ForgetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");









function ForgetpasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please check your email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Something wrong happen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpasswordComponent_mat_spinner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function ForgetpasswordComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetpasswordComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ForgetpasswordComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.submitted = false;
        this.success = false;
        this.faild = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].assetsPrefix;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm() {
        this.dataForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    submit() {
        this.submitted = true;
        this.faild = false;
        this.success = false;
        let formData = new FormData();
        let copyFormData = JSON.parse(JSON.stringify(this.dataForm.value));
        this.jsonToFormData(formData, copyFormData);
        this.auth.resetUser(formData).subscribe(data => {
            if (data) {
                if (data.error) {
                    this.faild = true;
                }
                else if (data.success) {
                    this.success = true;
                }
            }
            this.submitted = false;
        }, error => {
            this.submitted = false;
            this.faild = true;
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
}
ForgetpasswordComponent.ɵfac = function ForgetpasswordComponent_Factory(t) { return new (t || ForgetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ForgetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpasswordComponent, selectors: [["app-forgetpassword"]], decls: 12, vars: 6, consts: [[1, "container", "gbox"], [1, "llogo", 3, "src"], ["class", "msg success", 4, "ngIf"], ["class", "msg faild", 4, "ngIf"], [1, "sform", 3, "formGroup"], ["type", "text", "formControlName", "email", "placeholder", "Email address"], ["class", "spin", 3, "diameter", 4, "ngIf"], ["class", "v2", 3, "click", 4, "ngIf"], ["routerLink", "/"], [1, "msg", "success"], [1, "msg", "faild"], [1, "spin", 3, "diameter"], [1, "v2", 3, "click"]], template: function ForgetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forget your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgetpasswordComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgetpasswordComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgetpasswordComponent_mat_spinner_8_Template, 1, 1, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgetpasswordComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.baseurl + "assets/images/logo.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.faild);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.gbox[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.gbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 171px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #198dca;\n  background-color: #198dca;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n  cursor: pointer;\n  margin-left: 5px;\n}\n\nbutton.v2[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #198dca;\n  border: none;\n}\n\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 10px;\n}\n\n.sform[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.sform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #e7e6e8;\n  padding: 10px;\n  border-radius: 8px;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e6e6e6;\n  padding: 10px 30px;\n  border-radius: 5px;\n  border: 1px solid #c1c1c1;\n  margin: 0px 0px 20px;\n  box-shadow: 0px 0px 10px #c5c5c5;\n}\n\n.msg.faild[_ngcontent-%COMP%] {\n  background: #ff9c9c;\n  border: 1px solid #f05555;\n}\n\n.msg.success[_ngcontent-%COMP%] {\n  background: #bcffbe;\n  border: 1px solid #78ea7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZ2V0cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0QsZ0JBQUE7QUFDRDs7QUFDQTtFQUNDLHNCQUFBO0VBQ0EsbUJBQUE7RUFDRSw0RUFBQTtFQUVGLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNDLGtCQUFBO0VBQ0cseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNDLHNCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0FBQUQ7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQURGIiwiZmlsZSI6ImZvcmdldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIHdpZHRoOiA5MCU7XG5cdG1heC13aWR0aDogNDAwcHg7XG59XG4uY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbiAgXHRib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLFxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmdib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmdib3ggaW1nIHtcbiAgd2lkdGg6IDE3MXB4O1xufVxuXG5idXR0b24ge1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5OGRjYTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4ZGNhO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMnB4IDQ1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmJ1dHRvbi52MiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMxOThkY2E7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNwaW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2Zvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2Zvcm0gaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlNmU4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cblxuYnV0dG9uOmFjdGl2ZSB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cblxuLm1zZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2M1YzVjNTtcbn1cblxuLm1zZy5mYWlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZjljOWM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDU1NTU7XG59XG5cbi5tc2cuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICNiY2ZmYmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3OGVhN2M7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpassword',
                templateUrl: './forgetpassword.component.html',
                styleUrls: ['./forgetpassword.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map