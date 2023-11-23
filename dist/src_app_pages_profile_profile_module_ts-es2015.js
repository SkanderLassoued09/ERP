(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 88805:
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/add-profile/add-profile.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProfileComponent": function() { return /* binding */ AddProfileComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../share-data/confirmation-modal/confirmation-modal.component */ 15639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ 88037);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);








function AddProfileComponent_nb_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", r_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", r_r1, " ");
} }
class AddProfileComponent {
    constructor(profileService, apollo, nbToastr, nbDialog) {
        this.profileService = profileService;
        this.apollo = apollo;
        this.nbToastr = nbToastr;
        this.nbDialog = nbDialog;
        this.addProfile = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.roles = [
            "ADMIN_MANAGER",
            "ADMIN_TECH",
            "MANAGER",
            "MAGASIN",
            "TECH",
            "COORDINATOR",
        ];
    }
    ngOnInit() { }
    saveProfile() {
        this.nbDialog
            .open(_share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationModalComponent, {
            context: { data: "êtes-vous sûr ?" },
        })
            .onClose.subscribe((cl) => {
            if (cl) {
                console.log(this.addProfile.value, "form");
                this.apollo
                    .mutate({
                    mutation: this.profileService.addProfile(this.addProfile.value),
                })
                    .subscribe(({ data }) => {
                    console.log(data, "profile added");
                    if (data) {
                        this.nbToastr.success("", "Profile added");
                        this.addProfile.reset();
                    }
                });
            }
            else {
                this.nbToastr.warning("", "Annulé");
                this.addProfile.reset();
            }
        });
    }
}
AddProfileComponent.ɵfac = function AddProfileComponent_Factory(t) { return new (t || AddProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService)); };
AddProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddProfileComponent, selectors: [["ngx-add-profile"]], decls: 48, vars: 3, consts: [[3, "formGroup"], [1, "row"], [1, "col-lg-6"], [1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "username"], ["nbInput", "", "fullWidth", "", "formControlName", "firstName"], ["nbInput", "", "fullWidth", "", "formControlName", "lastName"], ["nbInput", "", "fullWidth", "", "formControlName", "email"], ["nbInput", "", "fullWidth", "", "formControlName", "phone"], ["nbInput", "", "type", "password", "fullWidth", "", "formControlName", "password"], ["nbInput", "", "fullWidth", "", "formControlName", "address"], ["fullWidth", "", "formControlName", "role"], [3, "value", 4, "ngFor", "ngForOf"], [1, "justify-btn"], ["nbButton", "", "status", "success", 3, "disabled", "click"], ["nbButton", "", "status", "danger", 3, "click"], [3, "value"]], template: function AddProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ajouter STAFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nom d'utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "T\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "nb-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AddProfileComponent_nb_option_41_Template, 2, 2, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddProfileComponent_Template_button_click_44_listener() { return ctx.saveProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Valider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddProfileComponent_Template_button_click_46_listener() { return ctx.addProfile.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Vider les champs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addProfile.invalid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbOptionComponent], styles: [".justify-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem auto;\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFTO0VBQVQsU0FBUztBQUNYIiwiZmlsZSI6ImFkZC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1c3RpZnktYnRuIHtcclxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": function() { return /* binding */ ProfileModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 89764);
/* harmony import */ var _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-profile/add-profile.component */ 88805);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.routing.module */ 97736);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSelectModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbRadioModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_1__.AddProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbRadioModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule] }); })();


/***/ }),

/***/ 97736:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile.routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": function() { return /* binding */ ProfileRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-profile/add-profile.component */ 88805);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 89764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: "add-profile",
        component: _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_0__.AddProfileComponent,
    },
    {
        path: "list-profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
    },
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 89764:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile/profile.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../share-data/confirmation-modal/confirmation-modal.component */ 15639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ 88037);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);








class ProfileComponent {
    constructor(profileService, apollo, datePipe, nbToastr, nbDialog) {
        this.profileService = profileService;
        this.apollo = apollo;
        this.datePipe = datePipe;
        this.nbToastr = nbToastr;
        this.nbDialog = nbDialog;
        this.settings = {
            actions: {
                add: false,
                edit: true,
                delete: true,
                // custom: [
                //   {
                //     name: "passValue",
                //     title: `<i class="nb-compose" title="details"></i>`,
                //   },
                // ],
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
                username: {
                    title: "Nom d'utilisateur",
                    type: "string",
                    editable: false,
                },
                firstName: {
                    title: "Prénom",
                    type: "string",
                },
                lastName: {
                    title: "Nom",
                    type: "string",
                },
                role: {
                    title: "Rôle",
                    type: "string",
                    editable: false,
                },
                email: {
                    title: "E-mail",
                    type: "string",
                    editable: false,
                },
                phone: {
                    title: "Téléphone",
                    type: "string",
                },
                createdAt: {
                    title: "Créé le",
                    type: "string",
                    valuePrepareFunction: (date) => {
                        var raw = new Date(date);
                        var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
                        return formatted;
                    },
                    editable: false,
                },
                updatedAt: {
                    title: "Dérniere modification",
                    type: "string",
                    valuePrepareFunction: (date) => {
                        var raw = new Date(date);
                        var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
                        return formatted;
                    },
                    editable: false,
                },
            },
        };
    }
    ngOnInit() {
        this.listOfProfile();
    }
    listOfProfile() {
        this.apollo
            .query({
            query: this.profileService.getListProfile(),
        })
            .subscribe(({ data }) => {
            console.log(data, "data");
            this.profileList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.LocalDataSource(data.getAllProfiles);
        });
    }
    delete(event) {
        this.nbDialog
            .open(_share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationModalComponent, {
            context: { data: "Vous-êtes sûr de supprimer ?" },
        })
            .onClose.subscribe((cl) => {
            if (cl) {
                console.log("hello", event.data._id);
                this.apollo
                    .mutate({
                    mutation: this.profileService.deleteProfile(event.data._id),
                })
                    .subscribe(({ data }) => {
                    console.log(data, "delete");
                    if (data) {
                        this.nbToastr.danger("", "Profil supprimé");
                        event.confirm.resolve();
                    }
                });
            }
            else {
                this.nbToastr.danger("", "Annulé");
            }
        });
    }
    edit(event) {
        this.nbDialog
            .open(_share_data_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationModalComponent, {
            context: { data: "êtes-vous sûr de modifier ?" },
        })
            .onClose.subscribe((cl) => {
            if (cl) {
                this.apollo
                    .mutate({
                    mutation: this.profileService.updateProfile(event.newData._id, event.newData.firstName, event.newData.lastName, event.newData.phone),
                })
                    .subscribe(({ data }) => {
                    console.log(data, "updated");
                    if (data) {
                        this.nbToastr.info("", "Profil mis à jour");
                        event.confirm.resolve(event.newdata);
                    }
                });
            }
            else {
                this.nbToastr.danger("", "Annulé");
            }
        });
        console.log("hello", event);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["ngx-profile"]], decls: 4, vars: 2, consts: [[1, "order-table", 3, "settings", "source", "deleteConfirm", "editConfirm"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("deleteConfirm", function ProfileComponent_Template_ng2_smart_table_deleteConfirm_3_listener($event) { return ctx.delete($event); })("editConfirm", function ProfileComponent_Template_ng2_smart_table_editConfirm_3_listener($event) { return ctx.edit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.profileList);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.Ng2SmartTableComponent], styles: ["[_nghost-%COMP%]     .ng2-smart-title {\n  width: 4rem !important;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-edit-delete {\n  display: flex !important;\n  height: 0 !important;\n}\n\n[_nghost-%COMP%]\n \nng2-st-tbody-custom\na.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: flex;\n  width: 100%;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     ng2-smart-table .ng2-smart-actions a.ng2-smart-action {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 0%;\n  width: 100%;\n  font-size: 2rem !important;\n  color: #222b45;\n}\n\n[_nghost-%COMP%]     ng2-smart-table .ng2-smart-actions a.ng2-smart-action i.nb-checkmark {\n  position: absolute;\n  top: 25%;\n}\n\n[_nghost-%COMP%]     ng2-smart-table .ng2-smart-actions a.ng2-smart-action i.nb-close {\n  position: absolute;\n  top: 25%;\n}\n\n[_nghost-%COMP%]\n \nng2-st-tbody-custom\na.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: #5dcfe3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBc0I7QUFBMUI7O0FBSUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0FBRHRCOztBQUlBOzs7O0VBSUUsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7QUFEcEI7O0FBSUE7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixjQUFjO0FBRmxCOztBQU1BO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7QUFKWjs7QUFPQTtFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0FBTFo7O0FBU0E7Ozs7RUFJRSxjQUFjO0FBTmhCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5uZzItc21hcnQtdGl0bGUge1xyXG4gICAgd2lkdGg6IDRyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktZWRpdC1kZWxldGUge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3RcclxuICA6Om5nLWRlZXBcclxuICBuZzItc3QtdGJvZHktY3VzdG9tXHJcbiAgYS5uZzItc21hcnQtYWN0aW9uLm5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgbmcyLXNtYXJ0LXRhYmxlIC5uZzItc21hcnQtYWN0aW9ucyBhLm5nMi1zbWFydC1hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyMjJiNDU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIG5nMi1zbWFydC10YWJsZSAubmcyLXNtYXJ0LWFjdGlvbnMgYS5uZzItc21hcnQtYWN0aW9uIGkubmItY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIG5nMi1zbWFydC10YWJsZSAubmcyLXNtYXJ0LWFjdGlvbnMgYS5uZzItc21hcnQtYWN0aW9uIGkubmItY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdFxyXG4gIDo6bmctZGVlcFxyXG4gIG5nMi1zdC10Ym9keS1jdXN0b21cclxuICBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tOmhvdmVyIHtcclxuICBjb2xvcjogIzVkY2ZlMztcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es2015.js.map