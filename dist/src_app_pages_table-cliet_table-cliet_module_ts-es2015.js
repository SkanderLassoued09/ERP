(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_table-cliet_table-cliet_module_ts"],{

/***/ 58263:
/*!**********************************************************************!*\
  !*** ./src/app/pages/table-cliet/add-client/add-client.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClientComponent": function() { return /* binding */ AddClientComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../share-data/confirmation-modal/confirmation-modal.component */ 15639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _table_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-client.service */ 49546);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









function AddClientComponent_nb_card_0_nb_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", r_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", r_r2, " ");
} }
function AddClientComponent_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Creation de client");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Prenom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Numero de telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "R\u00E9gion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "nb-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AddClientComponent_nb_card_0_nb_option_33_Template, 2, 2, "nb-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Code postale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddClientComponent_nb_card_0_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.createUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddClientComponent_nb_card_0_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.addUser.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Vider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.addUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.regions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.addUser.invalid);
} }
class AddClientComponent {
    constructor(apollo, clientService, route, toastr, router, nbDialog) {
        this.apollo = apollo;
        this.clientService = clientService;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.nbDialog = nbDialog;
        this.addUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            codePostal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.regions = [
            "Ariana",
            "Béja",
            "Ben Arous",
            "Bizerte",
            "Gabès",
            "Gafsa",
            "Jendouba",
            "Kairaouan",
            "Kasserine",
            "Kebili",
            "Kef",
            "Mahdia",
            "Manouba",
            "Mednine",
            "Monastir",
            "Nabeul",
            "Sfax",
            "Sidi Bouzid",
            "Siliana",
            "Sousse",
            "Tataouine",
            "Tozeur",
            "Tunis",
            "Zaghouan",
        ];
    }
    ngOnInit() {
        this.typeUser = this.route.snapshot.params.type;
        console.log(this.typeUser, "data");
    }
    createUser() {
        this.nbDialog
            .open(_share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationModalComponent, {
            context: { data: "êtes-vous sûr de ajouter ce client" },
        })
            .onClose.subscribe((cl) => {
            if (cl) {
                console.log(this.addUser.value, "data");
                this.apollo
                    .mutate({
                    mutation: this.clientService.addClient(this.addUser.value, this.typeUser),
                })
                    .subscribe(({ data }) => {
                    if (data) {
                        this.addUser.reset();
                        this.toastr.success("", "Vous avez ajouter nouveau client");
                        this.router.navigate(["pages/tableClient/table-user"]);
                    }
                });
            }
            else {
                this.toastr.warning("", "Annulé");
            }
        });
    }
}
AddClientComponent.ɵfac = function AddClientComponent_Factory(t) { return new (t || AddClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_table_client_service__WEBPACK_IMPORTED_MODULE_1__.TableClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService)); };
AddClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddClientComponent, selectors: [["ngx-add-client"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-lg-6"], ["for", "", 1, "label"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "lastName"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "firstName"], [1, "col-lg-12"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "email"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "phone"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "address"], ["formControlName", "region", "fullWidth", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "codePostal"], [1, "justify-btn"], ["status", "success", "nbButton", "", 3, "disabled", "click"], ["status", "danger", "nbButton", "", 3, "click"], [3, "value"]], template: function AddClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddClientComponent_nb_card_0_Template, 44, 3, "nb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.typeUser === "CLIENT");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbOptionComponent], styles: [".justify-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.justify-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQVM7RUFBVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoiYWRkLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdXN0aWZ5LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uanVzdGlmeS1idG4gYnV0dG9uIHtcclxuICB3aWR0aDogMTMlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 44433:
/*!************************************************************************!*\
  !*** ./src/app/pages/table-cliet/add-company/add-company.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCompanyComponent": function() { return /* binding */ AddCompanyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../share-data/confirmation-modal/confirmation-modal.component */ 15639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _table_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-client.service */ 49546);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









function AddCompanyComponent_nb_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", r_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", r_r4, " ");
} }
function AddCompanyComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Service Achat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Service Financier");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Service Technique");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddCompanyComponent {
    constructor(apollo, clientService, route, toastr, router, nbDialog) {
        this.apollo = apollo;
        this.clientService = clientService;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.nbDialog = nbDialog;
        this.addCompany = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            codePostal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            tva: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            localOrshore: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            etat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            conPayment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            techContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            codeFiscal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            nattestation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            swiftBic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            ibanRib: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            achat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                // Nested FormGroup
                fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
            }),
            financier: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                // Nested FormGroup
                fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
            }),
            technique: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                // Nested FormGroup
                fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(""),
            }),
            nRegisterCommerce: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.regions = [
            "Ariana",
            "Béja",
            "Ben Arous",
            "Bizerte",
            "Gabès",
            "Gafsa",
            "Jendouba",
            "Kairaouan",
            "Kasserine",
            "Kebili",
            "Kef",
            "Mahdia",
            "Manouba",
            "Mednine",
            "Monastir",
            "Nabeul",
            "Sfax",
            "Sidi Bouzid",
            "Siliana",
            "Sousse",
            "Tataouine",
            "Tozeur",
            "Tunis",
            "Zaghouan",
        ];
        this.toHideAchat = false;
        this.toHideFinancier = false;
        this.toHideTechnique = false;
    }
    ngOnInit() {
        this.typeUser = this.route.snapshot.params.type;
        console.log(this.typeUser, "data");
    }
    createCompany() {
        console.log(this.addCompany.value, "add");
        this.nbDialog
            .open(_share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationModalComponent, {
            context: { data: "êtes-vous sûr de ajouter cette société" },
        })
            .onClose.subscribe((cl) => {
            if (cl) {
                console.log(this.addCompany.value, "form data company");
                this.apollo
                    .mutate({
                    mutation: this.clientService.addClient(this.addCompany.value, this.typeUser),
                })
                    .subscribe(({ data }) => {
                    if (data) {
                        this.addCompany.reset();
                        this.toastr.success("", "Vous avez ajouter nouvelle société");
                        this.router.navigate(["pages/tableClient/table-company"]);
                    }
                });
            }
            else {
                this.toastr.danger("", "Annulé");
            }
        });
    }
    hideShowFormAchat() {
        this.toHideAchat = !this.toHideAchat;
    }
    hideShowFormFinancier() {
        this.toHideFinancier = !this.toHideFinancier;
    }
    hideShowFormTechnique() {
        this.toHideTechnique = !this.toHideTechnique;
    }
}
AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_table_client_service__WEBPACK_IMPORTED_MODULE_1__.TableClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService)); };
AddCompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["ngx-add-company"]], decls: 105, vars: 9, consts: [[3, "formGroup"], [1, "row"], [1, "col-lg-12"], ["for", "", 1, "label"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "companyName"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "tva"], ["formControlName", "localOrshore", 1, "justify-radio"], ["value", "local"], ["value", "offshore"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "address"], ["formControlName", "region", "fullWidth", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "codePostal"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "etat"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "phone"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "fax"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "email"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "website"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "conPayment"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "swiftBic"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "ibanRib"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "techContact"], [1, "caption", "status-danger"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "codeFiscal"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "nRegisterCommerce"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "nattestation"], ["class", "achat", "formGroupName", "achat", 4, "ngIf"], ["class", "financier", "formGroupName", "financier", 4, "ngIf"], ["class", "technique", "formGroupName", "technique", 4, "ngIf"], [1, "btns"], ["size", "small", "nbButton", "", 3, "status", "click"], [1, "divider"], [1, "justify-btn"], ["status", "success", "nbButton", "", 3, "disabled", "click"], ["status", "danger", "nbButton", "", 3, "click"], [3, "value"], ["formGroupName", "achat", 1, "achat"], [1, "input"], ["formControlName", "fullName", "nbInput", "", "type", "text"], ["formControlName", "email", "nbInput", "", "type", "text"], ["formControlName", "phone", "nbInput", "", "type", "text"], ["formGroupName", "financier", 1, "financier"], ["formGroupName", "technique", 1, "technique"]], template: function AddCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Creation de client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nom de l'entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Num\u00E9ro de TVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nb-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nb-radio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Locale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nb-radio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Offshore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "R\u00E9gion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AddCompanyComponent_nb_option_29_Template, 2, 2, "nb-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Code postale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Numero de telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Numero de fax");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Condition de paiement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "SWIFT / BIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Iban code / RIB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Technical contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Only for tunisian partner / uniquement pour les client - fournisseur tunisiens: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Code fiscal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Num\u00E9ro de register de commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Numero de l'attestation d'exon\u00E9ration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, AddCompanyComponent_div_88_Template, 7, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, AddCompanyComponent_div_89_Template, 7, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, AddCompanyComponent_div_90_Template, 7, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_92_listener() { return ctx.hideShowFormAchat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Achat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_94_listener() { return ctx.hideShowFormFinancier(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " Financier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_96_listener() { return ctx.hideShowFormTechnique(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Technicien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_101_listener() { return ctx.createCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Ajouter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_103_listener() { return ctx.addCompany.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Vider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toHideAchat);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toHideFinancier);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toHideTechnique);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.toHideAchat ? "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.toHideFinancier ? "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.toHideTechnique ? "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addCompany.invalid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbRadioGroupComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbRadioComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName], styles: [".justify-radio[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 1rem;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n\n.justify-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem auto;\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.input[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border: 2px solid #ccc;\n  border-radius: 1rem;\n}\n\n.btns[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFFckI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQVM7RUFBVCxTQUFTO0FBRVgiLCJmaWxlIjoiYWRkLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVzdGlmeS1yYWRpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWJ0biB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmlucHV0IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGl2aWRlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9436:
/*!****************************************************************!*\
  !*** ./src/app/pages/table-cliet/choices/choices.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoicesComponent": function() { return /* binding */ ChoicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const _c0 = function () { return ["/pages/tableClient/add-client", "CLIENT"]; };
const _c1 = function () { return ["/pages/tableClient/add-company", "COMPANY"]; };
class ChoicesComponent {
    constructor() { }
    ngOnInit() { }
    onCreateNewClient() {
        console.log("Client work");
    }
    onCreateNewSociete() {
        console.log("Societe work");
    }
}
ChoicesComponent.ɵfac = function ChoicesComponent_Factory(t) { return new (t || ChoicesComponent)(); };
ChoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChoicesComponent, selectors: [["ngx-choices"]], decls: 11, vars: 4, consts: [[1, "row", "justify-card"], ["size", "medium", 1, "col-lg-4", "animation", 3, "routerLink", "click"], [1, "cardsocieteclient"], ["icon", "people-outline", 1, "Icon", 2, "font-size", "10rem"], [1, "textunderheader"], ["icon", "home-outline", 2, "font-size", "10rem"]], template: function ChoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoicesComponent_Template_nb_card_click_1_listener() { return ctx.onCreateNewClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cr\u00E9er nouveau client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoicesComponent_Template_nb_card_click_6_listener() { return ctx.onCreateNewSociete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cr\u00E9er nouvelle soci\u00E9t\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent], styles: [".card-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card-flex-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.justify-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n\n.cardsocieteclient[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.textunderheader[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.justify-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.animation[_ngcontent-%COMP%]:hover {\n  transition: all 0.2s ease-in-out;\n  transform: scale(1.1);\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQVM7RUFBVCxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUVkOztBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUdwQjs7QUFBQTtFQUNFLGVBQWU7QUFHakI7O0FBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBR3ZCOztBQURBO0VBQ0UscUJBQXFCO0FBSXZCIiwiZmlsZSI6ImNob2ljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcmQtZmxleC1jb250YWluZXIgbmItY2FyZCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmp1c3RpZnktY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuLmNhcmRzb2NpZXRlY2xpZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRleHR1bmRlcmhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNhcmQgZGl2IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRpb246aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 54150:
/*!**************************************************************************!*\
  !*** ./src/app/pages/table-cliet/company-list/company-list.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListComponent": function() { return /* binding */ CompanyListComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _table_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table-client.service */ 49546);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 42522);






class CompanyListComponent {
    constructor(clientService, apollo) {
        this.clientService = clientService;
        this.apollo = apollo;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false,
                custom: [
                    {
                        name: "passValue",
                        title: `<i class="nb-compose" title="Affecte des TPEs"></i>`,
                    },
                ],
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"  title="Modifier" ></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"  title="Desactiver"></i>',
                confirmDelete: true,
            },
            columns: {
                _id: {
                    title: "ID",
                    type: "string",
                },
                companyName: {
                    title: "Société",
                    type: "string",
                },
                email: {
                    title: "Lastname",
                    type: "string",
                },
                address: {
                    title: "Address",
                    type: "string",
                },
                phone: {
                    title: "Phone",
                    type: "string",
                },
                type: {
                    title: "Type",
                    type: "string",
                },
            },
        };
    }
    ngOnInit() {
        this.getCompany();
    }
    getCompany() {
        this.apollo
            .query({
            query: this.clientService.getCompany(),
        })
            .subscribe(({ data }) => {
            console.log(data);
            this.listOfCompany = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource(data.getAllCompany);
        });
    }
}
CompanyListComponent.ɵfac = function CompanyListComponent_Factory(t) { return new (t || CompanyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_table_client_service__WEBPACK_IMPORTED_MODULE_0__.TableClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__.Apollo)); };
CompanyListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyListComponent, selectors: [["ngx-company-list"]], decls: 4, vars: 2, consts: [[3, "settings", "source"]], template: function CompanyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.listOfCompany);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["[_nghost-%COMP%]     .ng2-smart-title {\n  width: 4rem !important;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-edit-delete {\n  display: flex !important;\n  height: 0 !important;\n}\n\n[_nghost-%COMP%]\n \nng2-st-tbody-custom\na.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: flex;\n  width: 100%;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     ng2-smart-table .ng2-smart-actions a.ng2-smart-action {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 0%;\n  width: 100%;\n  font-size: 2rem !important;\n  color: #222b45;\n}\n\n[_nghost-%COMP%]\n \nng2-st-tbody-custom\na.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: #5dcfe3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHNCQUFzQjtBQUExQjs7QUFJQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7QUFEdEI7O0FBSUE7Ozs7RUFJRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQURwQjs7QUFJQTtFQUVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGNBQWM7QUFGbEI7O0FBTUE7Ozs7RUFJRSxjQUFjO0FBSGhCIiwiZmlsZSI6ImNvbXBhbnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLm5nMi1zbWFydC10aXRsZSB7XHJcbiAgICB3aWR0aDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdFxyXG4gIDo6bmctZGVlcFxyXG4gIG5nMi1zdC10Ym9keS1jdXN0b21cclxuICBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICBuZzItc21hcnQtdGFibGUgLm5nMi1zbWFydC1hY3Rpb25zIGEubmcyLXNtYXJ0LWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzIyMmI0NTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0XHJcbiAgOjpuZy1kZWVwXHJcbiAgbmcyLXN0LXRib2R5LWN1c3RvbVxyXG4gIGEubmcyLXNtYXJ0LWFjdGlvbi5uZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b206aG92ZXIge1xyXG4gIGNvbG9yOiAjNWRjZmUzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 97638:
/*!******************************************************************!*\
  !*** ./src/app/pages/table-cliet/table-client-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRoutingModule": function() { return /* binding */ ClientRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client/add-client.component */ 58263);
/* harmony import */ var _table_client_table_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-client/table-client.component */ 89454);
/* harmony import */ var _choices_choices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choices/choices.component */ 9436);
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-company/add-company.component */ 44433);
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-list/company-list.component */ 54150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);








const routes = [
    {
        path: "choices",
        component: _choices_choices_component__WEBPACK_IMPORTED_MODULE_2__.ChoicesComponent,
    },
    {
        path: "add-client/:type",
        component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__.AddClientComponent,
    },
    {
        path: "add-company/:type",
        component: _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__.AddCompanyComponent,
    },
    {
        path: "table-user",
        component: _table_client_table_client_component__WEBPACK_IMPORTED_MODULE_1__.TableClientComponent,
    },
    {
        path: "table-company",
        component: _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_4__.CompanyListComponent,
    },
];
class ClientRoutingModule {
}
ClientRoutingModule.ɵfac = function ClientRoutingModule_Factory(t) { return new (t || ClientRoutingModule)(); };
ClientRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ClientRoutingModule });
ClientRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 89454:
/*!**************************************************************************!*\
  !*** ./src/app/pages/table-cliet/table-client/table-client.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableClientComponent": function() { return /* binding */ TableClientComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _table_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table-client.service */ 49546);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 42522);






class TableClientComponent {
    constructor(apollo, clientService) {
        this.apollo = apollo;
        this.clientService = clientService;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false,
                custom: [
                    {
                        name: "passValue",
                        title: `<i class="nb-compose" title="Affecte des TPEs"></i>`,
                    },
                ],
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"  title="Modifier" ></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"  title="Desactiver"></i>',
                confirmDelete: true,
            },
            columns: {
                _id: {
                    title: "ID",
                    type: "string",
                },
                firstName: {
                    title: "ID",
                    type: "string",
                },
                lastName: {
                    title: "Fistname",
                    type: "string",
                },
                email: {
                    title: "Lastname",
                    type: "string",
                },
                address: {
                    title: "Address",
                    type: "string",
                },
                phone: {
                    title: "Phone",
                    type: "string",
                },
                type: {
                    title: "Type",
                    type: "string",
                },
            },
        };
    }
    ngOnInit() {
        this.getClientCompany();
    }
    // onDeleteConfirm(event) {
    //   console.log("Delete Event In Console");
    //   console.log(event);
    //   if (window.confirm("Are you sure you want to delete?")) {
    //     event.confirm.resolve();
    //   } else {
    //     event.confirm.reject();
    //   }
    // }
    // onCreateConfirm(event) {
    //   console.log("Create Event In Console");
    //   console.log(event);
    // }
    // onSaveConfirm(event) {
    //   console.log("Edit Event In Console");
    //   console.log(event);
    // }
    getClientCompany() {
        this.apollo
            .query({
            query: this.clientService.getClient(),
        })
            .subscribe(({ data }) => {
            console.log(data);
            this.listOfClient = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource(data.getAllClient);
        });
    }
}
TableClientComponent.ɵfac = function TableClientComponent_Factory(t) { return new (t || TableClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_table_client_service__WEBPACK_IMPORTED_MODULE_0__.TableClientService)); };
TableClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableClientComponent, selectors: [["ngx-table-client"]], decls: 4, vars: 2, consts: [[3, "settings", "source"]], template: function TableClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.listOfClient);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["[_nghost-%COMP%]     .ng2-smart-title {\n  width: 4rem !important;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-edit-delete {\n  display: flex !important;\n  height: 0 !important;\n}\n\n[_nghost-%COMP%]\n \nng2-st-tbody-custom\na.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: flex;\n  width: 100%;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     ng2-smart-table .ng2-smart-actions a.ng2-smart-action {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 0%;\n  width: 100%;\n  font-size: 2rem !important;\n  color: #222b45;\n}\n\n[_nghost-%COMP%]\n \nng2-st-tbody-custom\na.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: #5dcfe3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHNCQUFzQjtBQUExQjs7QUFJQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7QUFEdEI7O0FBSUE7Ozs7RUFJRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQURwQjs7QUFJQTtFQUVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGNBQWM7QUFGbEI7O0FBTUE7Ozs7RUFJRSxjQUFjO0FBSGhCIiwiZmlsZSI6InRhYmxlLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLm5nMi1zbWFydC10aXRsZSB7XHJcbiAgICB3aWR0aDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdFxyXG4gIDo6bmctZGVlcFxyXG4gIG5nMi1zdC10Ym9keS1jdXN0b21cclxuICBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICBuZzItc21hcnQtdGFibGUgLm5nMi1zbWFydC1hY3Rpb25zIGEubmcyLXNtYXJ0LWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzIyMmI0NTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0XHJcbiAgOjpuZy1kZWVwXHJcbiAgbmcyLXN0LXRib2R5LWN1c3RvbVxyXG4gIGEubmcyLXNtYXJ0LWFjdGlvbi5uZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b206aG92ZXIge1xyXG4gIGNvbG9yOiAjNWRjZmUzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 50207:
/*!*********************************************************!*\
  !*** ./src/app/pages/table-cliet/table-cliet.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableClietModule": function() { return /* binding */ TableClietModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _table_client_table_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-client/table-client.component */ 89454);
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-client/add-client.component */ 58263);
/* harmony import */ var _table_client_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-client-routing.module */ 97638);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _choices_choices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choices/choices.component */ 9436);
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-company/add-company.component */ 44433);
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-list/company-list.component */ 54150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);











class TableClietModule {
}
TableClietModule.ɵfac = function TableClietModule_Factory(t) { return new (t || TableClietModule)(); };
TableClietModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TableClietModule });
TableClietModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _table_client_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbRadioModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TableClietModule, { declarations: [_table_client_table_client_component__WEBPACK_IMPORTED_MODULE_0__.TableClientComponent,
        _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__.AddClientComponent,
        _choices_choices_component__WEBPACK_IMPORTED_MODULE_3__.ChoicesComponent,
        _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_4__.AddCompanyComponent,
        _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_5__.CompanyListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _table_client_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbRadioModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_table-cliet_table-cliet_module_ts-es2015.js.map