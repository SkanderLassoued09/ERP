(function () {
  var _templateObject, _templateObject2, _templateObject3;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["common"], {
    /***/
    49546:
    /*!***********************************************************!*\
      !*** ./src/app/pages/table-cliet/table-client.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableClientService": function TableClientService() {
          return (
            /* binding */
            _TableClientService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! apollo-angular */
      95979);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TableClientService = /*#__PURE__*/function () {
        function _TableClientService() {
          _classCallCheck(this, _TableClientService);
        }

        _createClass(_TableClientService, [{
          key: "addClient",
          value: function addClient(userData, type) {
            return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n\n\n\n       mutation {createClient(compClient:\"", "\",createClientInput:{firstName:\"", "\" lastName:\"", "\" email:\"", "\" phone:\"", "\" address:\"test\" companyName:\"", "\" region:\"", "\" codePostal:\"", "\" tva:\"", "\"\n       etat:\"", "\" fax:\"", "\" ibanRib:\"", "\" nRegisterCommerce:\"", "\" swiftBic:\"", "\" nattestation:\"", "\" codeFiscal:\"", "\" conPayment:\"", "\" website:\"", "\" techContact:\"", "\"}) {firstName}}\n    "])), type, userData.firstName, userData.lastName, userData.email, userData.phone, userData.companyName, userData.region, userData.codePostal, userData.tva, userData.etat, userData.fax, userData.ibanRib, userData.nRegisterCommerce, userData.swiftBic, userData.nattestation, userData.codeFiscal, userData.conPayment, userData.website, userData.techContact);
          }
        }, {
          key: "getClient",
          value: function getClient() {
            return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      {\n        getAllClient {\n          _id\n          firstName\n          lastName\n          email\n          phone\n          address\n          type\n          companyName\n          region\n          codePostal\n        }\n      }\n    "])));
          }
        }, {
          key: "getCompany",
          value: function getCompany() {
            return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      {\n        getAllCompany {\n          _id\n          firstName\n          lastName\n          email\n          phone\n          address\n          type\n          companyName\n          region\n          codePostal\n        }\n      }\n    "])));
          }
        }]);

        return _TableClientService;
      }();

      _TableClientService.ɵfac = function TableClientService_Factory(t) {
        return new (t || _TableClientService)();
      };

      _TableClientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _TableClientService,
        factory: _TableClientService.ɵfac,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map