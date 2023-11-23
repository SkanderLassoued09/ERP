(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["common"],{

/***/ 49546:
/*!***********************************************************!*\
  !*** ./src/app/pages/table-cliet/table-client.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableClientService": function() { return /* binding */ TableClientService; }
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class TableClientService {
    constructor() { }
    addClient(userData, type) {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `




       mutation {createClient(compClient:"${type}",createClientInput:{firstName:"${userData.firstName}" lastName:"${userData.lastName}" email:"${userData.email}" phone:"${userData.phone}" address:"test" companyName:"${userData.companyName}" region:"${userData.region}" codePostal:"${userData.codePostal}" tva:"${userData.tva}"
       etat:"${userData.etat}" fax:"${userData.fax}" ibanRib:"${userData.ibanRib}" nRegisterCommerce:"${userData.nRegisterCommerce}" swiftBic:"${userData.swiftBic}" nattestation:"${userData.nattestation}" codeFiscal:"${userData.codeFiscal}" conPayment:"${userData.conPayment}" website:"${userData.website}" techContact:"${userData.techContact}"}) {firstName}}
    `;
    }
    getClient() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getAllClient {
          _id
          firstName
          lastName
          email
          phone
          address
          type
          companyName
          region
          codePostal
        }
      }
    `;
    }
    getCompany() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getAllCompany {
          _id
          firstName
          lastName
          email
          phone
          address
          type
          companyName
          region
          codePostal
        }
      }
    `;
    }
}
TableClientService.ɵfac = function TableClientService_Factory(t) { return new (t || TableClientService)(); };
TableClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableClientService, factory: TableClientService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map