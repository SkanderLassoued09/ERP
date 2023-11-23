(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_dashboards_dashboards_module_ts"],{

/***/ 8390:
/*!*******************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": function() { return /* binding */ DashboardService; }
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class DashboardService {
    constructor() { }
    getClientCompanyChart() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getClientCompanyChart {
          name
          value
        }
      }
    `;
    }
    getClientByRegion() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getClientByRegion {
          name
          value
        }
      }
    `;
    }
    getIssuesChart() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getIssuesChart {
          name
          value
        }
      }
    `;
    }
    cardTech() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getTicketByProfile {
          techName
          totalDiag
          totalRep
          moyDiag
          moyRep
          techCostRep
          techCostDiag
        }
      }
    `;
    }
    getTotality() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        totality {
          totality {
            name
            value
          }
          count
        }
      }
    `;
    }
    /**
     * finalPrice
     * status
     *
   composants {
              nameComposant
              quantity
              purchasePrice
              sellPrice
              statusComposant
              comingDate
            }
     */
    prices() {
        // for dashboard to get prices
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getTicketForCoordinator {
          finalPrice
          status
          composants {
            quantity
            sellPrice
          }
        }
      }
    `;
    }
    calendarChart() {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      {
        getClientLastMonth {
          date
          value
        }
      }
    `;
    }
    filterGain(filter) {
        return apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
      mutation {
        filterGain(filter: { start: "${filter.start}", end: "${filter.end ? filter.end : null}" }) {
          createdAt
        }
      }
    `;
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 13253:
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ 95252);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ 95979);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ 8390);
/* harmony import */ var _ticket_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ticket/ticket/ticket.service */ 9848);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ 93104);










function DashboardComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r2.techName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r2.totalDiag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r2.totalRep);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r2.moyDiag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r2.moyRep);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](13, 7, tech_r2.techCostDiag, "TND", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](16, 12, tech_r2.techCostRep, "TND", "symbol", "1.2-2"), " ");
} }
class DashboardComponent {
    constructor(apollo, dashboardService, ticketService) {
        this.apollo = apollo;
        this.dashboardService = dashboardService;
        this.ticketService = ticketService;
        this.options = {
            backgroundColor: echarts__WEBPACK_IMPORTED_MODULE_0__.bg,
            color: [
                "#FF0000",
                "#0000FF",
                "#00FF00",
                "#FFFF00",
                "#FFA500",
                "#800080",
                "#FFC0CB",
            ],
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            series: [
                {
                    name: "Countries",
                    type: "pie",
                    radius: "80%",
                    center: ["50%", "50%"],
                    data: [
                        { value: 335, name: "Germany" },
                        { value: 310, name: "France" },
                        { value: 234, name: "Canada" },
                        { value: 135, name: "Russia" },
                        { value: 1548, name: "USA" },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: echarts__WEBPACK_IMPORTED_MODULE_0__.itemHoverShadowColor,
                        },
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: echarts__WEBPACK_IMPORTED_MODULE_0__.textColor,
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: echarts__WEBPACK_IMPORTED_MODULE_0__.axisLineColor,
                            },
                        },
                    },
                },
            ],
        };
        this.cellSize = [80, 80];
        this.pieRadius = 30;
        this.totalPrice = 0.0;
        this.totalPriceReturn = 0.0;
        this.totalcomposants = 0.0;
        this.gainFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            filterGain: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    ngOnInit() {
        this.getTotality();
        this.getChart();
        this.getClientByRegion();
        this.cardTech();
        this.getAllTech();
        this.getIssuesChart();
        this.price();
        this.calendarChart();
        this.filterGainByDate();
    }
    toggleView() {
        this.flipped = !this.flipped;
    }
    getTotality() {
        this.apollo
            .query({
            query: this.dashboardService.getTotality(),
        })
            .subscribe(({ data }) => {
            console.log(data, "tot");
            this.totalityCard = data.totality;
            [this.totalTicket] = data.totality.flatMap((el) => {
                return el.count;
            });
            this.totalityCard.map((el) => {
                console.log(el.totality, "el");
                el.totality.map((item) => {
                    if (item.name === "FINISHED") {
                        this.ticketFinie = item.value;
                        console.log(item.value, "test");
                    }
                    if (item.name === "PENDING") {
                        this.enAttente = +item.value;
                    }
                    if (item.name === "IN_PROGRESS") {
                        this.ticketEnCours = +item.value;
                    }
                    if (item.name === "RETURN") {
                        this.ticketRetour = +item.value;
                    }
                    if (item.name === "IGNORED") {
                        this.ticketAnnuler = +item.value;
                    }
                });
            });
        });
    }
    getChart() {
        this.apollo
            .query({
            query: this.dashboardService.getClientCompanyChart(),
        })
            .subscribe(({ data }) => {
            this.options = {
                backgroundColor: echarts__WEBPACK_IMPORTED_MODULE_0__.bg,
                color: [
                    "#00E699",
                    "#FFB400",
                    "#FF5D76",
                    "#00D992",
                    "#FFB600",
                    "#FF6A7B",
                    "#00E28D",
                    "#FFAE00",
                    "#FF777E",
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                series: [
                    {
                        name: "Type",
                        type: "pie",
                        radius: "80%",
                        center: ["50%", "50%"],
                        data: data.getClientCompanyChart,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts__WEBPACK_IMPORTED_MODULE_0__.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts__WEBPACK_IMPORTED_MODULE_0__.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts__WEBPACK_IMPORTED_MODULE_0__.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    }
    getAllTech() {
        this.apollo
            .query({
            query: this.ticketService.getAllTech(),
        })
            .subscribe(({ data }) => {
            console.log(data);
            // this.techs = data.getAllTech;
        });
    }
    getClientByRegion() {
        this.apollo
            .query({
            query: this.dashboardService.getClientByRegion(),
        })
            .subscribe(({ data }) => {
            console.log(data, "data chart");
            let names = (this.option = {
                xAxis: {
                    type: "category",
                    data: data.getClientByRegion.map((el) => {
                        return el.name;
                    }),
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: data.getClientByRegion.map((el) => {
                            return el.value;
                        }),
                        type: "bar",
                        color: "#0095ff",
                    },
                ],
            });
        });
    }
    getIssuesChart() {
        this.apollo
            .query({
            query: this.dashboardService.getIssuesChart(),
        })
            .subscribe(({ data }) => {
            console.log(data, "data chart");
            this.issueChart = {
                backgroundColor: echarts__WEBPACK_IMPORTED_MODULE_0__.bg,
                color: [
                    "#FF5D76",
                    "#00D992",
                    "#FFB600",
                    "#FF6A7B",
                    "#00E28D",
                    "#FFAE00",
                    "#FF777E",
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                series: [
                    {
                        name: "Type",
                        type: "pie",
                        radius: "80%",
                        center: ["50%", "50%"],
                        data: data.getIssuesChart,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts__WEBPACK_IMPORTED_MODULE_0__.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts__WEBPACK_IMPORTED_MODULE_0__.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts__WEBPACK_IMPORTED_MODULE_0__.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    }
    cardTech() {
        this.apollo
            .query({
            query: this.dashboardService.cardTech(),
        })
            .subscribe(({ data }) => {
            console.log(data, "card tech");
            this.techs = data.getTicketByProfile;
        });
    }
    price() {
        this.apollo
            .query({
            query: this.dashboardService.prices(),
        })
            .subscribe(({ data }) => {
            console.log(data, "prices");
            data.getTicketForCoordinator.filter((el) => {
                if (el) {
                    if (el.status === "FINISHED") {
                        this.totalPrice += parseFloat(el.finalPrice);
                        console.log(this.totalPrice, "total in");
                    }
                    if (el.status === "RETURN") {
                        this.totalPriceReturn += parseFloat(el.finalPrice);
                        console.log(this.totalPrice, "total in");
                    }
                    el.composants.map((el) => {
                        this.totalcomposants = el.sellPrice * el.quantity;
                        console.log("total composants === ", this.totalcomposants);
                    });
                }
            });
        });
    }
    calendarChart() {
        const cellSize = [80, 80];
        const pieRadius = 30;
        const transformedData = [];
        this.apollo
            .query({
            query: this.dashboardService.calendarChart(),
        })
            .subscribe(({ data }) => {
            console.log(data.getClientLastMonth, "data");
            this.optClient = {
                xAxis: {
                    type: "category",
                    data: data.getClientLastMonth.map((el) => {
                        return el.date;
                    }),
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: data.getClientLastMonth.map((el) => {
                            return el.value;
                        }),
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(180, 180, 180, 0.2)",
                        },
                    },
                ],
            };
        });
    }
    // to filter gains in range of date
    filterGainByDate() {
        console.log("HELOOOOOOOOOOOOO WORLD");
        this.gainFrom.get("filterGain").valueChanges.subscribe((f) => {
            const startDate = f.start ? new Date(f.start) : null;
            const endDate = f.end ? new Date(f.end) : null;
            console.log(startDate);
            console.log(endDate);
            const filter = {
                start: startDate.toISOString(),
                end: endDate !== null ? endDate.toISOString() : null,
            };
            console.log(filter, "date SKANDER");
            this.apollo
                .mutate({
                mutation: this.dashboardService.filterGain(filter),
            })
                .subscribe(({ data }) => {
                console.log(data, "filter result");
            });
        });
    }
    /**
     *
     * @param arr contains date as string
     */
    arrhandler(arr) {
        let arrr = [];
        arr.map((el) => {
            arrr.push([el, Math.floor(Math.random() * 10000)]);
        });
        return arrr;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ticket_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_2__.TicketService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ngx-dashboard"]], decls: 108, vars: 34, consts: [[1, "row"], [1, "col-lg-2", "card-size", "custom-border-total"], [1, "col-lg-2", "card-size", "custom-border-pending"], ["accent", "info", 1, "col-lg-2", "card-size"], ["accent", "success", 1, "col-lg-2", "card-size"], ["accent", "warning", 1, "col-lg-2", "card-size"], ["accent", "danger", 1, "col-lg-2", "card-size"], [1, "col-lg-12", "equal-width-table"], [1, "header-tech"], ["nbTooltip", "Temps total diagnostique"], ["nbTooltip", "Temps total R\u00E9paration"], ["nbTooltip", "Temps moyen diagnostique"], ["nbTooltip", "Temps moyen R\u00E9paration"], ["nbTooltip", "Prix de heure"], ["class", "list-tech", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], ["echarts", "", 1, "echart", 3, "options"], [1, "col-lg-8"], ["echarts", "", 1, "demo-chart", 3, "options"], [1, "col-lg-4", 3, "formGroup"], [1, "fix-header-flip"], ["nbInput", "", "placeholder", "Pick Date Range", "fullWidth", "", "formControlName", "filterGain", 3, "nbDatepicker"], ["formpicker", ""], ["icon", "flip-2-outline", 1, "icon", 3, "click"], [1, "subtitle"], [1, "h3"], ["status", "success", 3, "value"], [1, "caption", "description"], ["status", "warning", 3, "value"], ["status", "danger", 3, "value"], [1, "col-lg-6"], [1, "list-tech"], [1, "scrollable-cell"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Total ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "En attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "En cours");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nb-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Finie");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nb-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "nb-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Techniciens");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Total diagnostique");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Total r\u00E9paration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Moyen diagnostique");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Moyen reparation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Prix diag");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Prix rep");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, DashboardComponent_tr_50_Template, 17, 17, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "nb-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Client par region");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "nb-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Statistique des clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "nb-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "nb-rangepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "nb-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_nb_icon_click_69_listener() { return ctx.toggleView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Gain total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "nb-progress-bar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Gain des demandes d'intervention");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "nb-progress-bar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Retour des demandes d'intervention");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Total composants");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](93, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "nb-progress-bar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Les demandes d'intervention annul\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "nb-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Panne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "nb-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Nombre de client par mois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.enAttente ? ctx.enAttente : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketEnCours ? ctx.ticketEnCours : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketFinie ? ctx.ticketFinie : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketRetour ? ctx.ticketRetour : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketAnnuler ? ctx.ticketAnnuler : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.techs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.gainFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](75, 19, ctx.totalPrice, "TND", "symbol", "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.totalPrice / 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](84, 24, ctx.totalPriceReturn, "TND", "symbol", "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.totalPriceReturn / 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](93, 29, ctx.totalcomposants, "TND", "symbol", "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.totalcomposants / 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.issueChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.optClient);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbRangepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbProgressBarComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], styles: ["section[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.nb-shuffle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card-size[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 20vh;\n  text-align: center;\n}\n\n.fix-card-spacing[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.card-gain[_ngcontent-%COMP%] {\n  max-width: 65%;\n}\n\n.card-tech[_ngcontent-%COMP%] {\n  max-width: 48%;\n}\n\n.container-middle-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.list-tech[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.custom-border-pending[_ngcontent-%COMP%] {\n  border-top: 5px solid #fff200;\n}\n\n.custom-border-total[_ngcontent-%COMP%] {\n  border-top: 5px solid #000000;\n}\n\n.header-tech[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.container-items[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n  align-items: center;\n}\n\n.container-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n  display: flex;\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n  color: #ffffff;\n}\n\n.totalD[_ngcontent-%COMP%] {\n  background-color: #00a3ff;\n}\n\n.totalR[_ngcontent-%COMP%] {\n  background-color: #00e699;\n}\n\n.avergeD[_ngcontent-%COMP%] {\n  background-color: #ff3d71;\n}\n\n.averageR[_ngcontent-%COMP%] {\n  background-color: #ffaa00;\n}\n\n.averageRF[_ngcontent-%COMP%] {\n  color: #ffaa00;\n}\n\n.avergeDF[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}\n\n.totalRF[_ngcontent-%COMP%] {\n  color: #00e699;\n}\n\n.totalDF[_ngcontent-%COMP%] {\n  color: #00a3ff;\n}\n\n.equal-width-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 100%;\n}\n\n.equal-width-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .equal-width-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: calc(100% / 6);\n  \n  text-align: center;\n  \n  padding: 8px;\n  \n  border: 1px solid #edf1f7;\n  border-radius: 0.25rem;\n}\n\n.scrollable-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.fix-header-flip[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBRWIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFFaEI7O0FBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBR2hDOztBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUdoQzs7QUFBQTtFQUNFLDZCQUE2QjtBQUcvQjs7QUFBQTtFQUNFLDZCQUE2QjtBQUcvQjs7QUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBR3JCOztBQURBO0VBQ0UsYUFBYTtFQUNiLGNBQVM7RUFBVCxTQUFTO0VBQ1QsbUJBQW1CO0FBSXJCOztBQUZBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBRWIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixjQUFjO0FBSWhCOztBQURBO0VBQ0UseUJBQXlCO0FBSTNCOztBQUZBO0VBQ0UseUJBQXlCO0FBSzNCOztBQUhBO0VBQ0UseUJBQXlCO0FBTTNCOztBQUpBO0VBQ0UseUJBQXlCO0FBTzNCOztBQUpBO0VBQ0UsY0FBYztBQU9oQjs7QUFMQTtFQUNFLGNBQWM7QUFRaEI7O0FBTkE7RUFDRSxjQUFjO0FBU2hCOztBQVBBO0VBQ0UsY0FBYztBQVVoQjs7QUFQQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBVWI7O0FBUEE7O0VBRUUscUJBQXFCO0VBQUUscUJBQUE7RUFDdkIsa0JBQWtCO0VBQUUsNkNBQUE7RUFDcEIsWUFBWTtFQUFFLGdEQUFBO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQWF4Qjs7QUFYQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBY3pCOztBQVhBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBUztFQUFULFNBQVM7QUFjWDs7QUFaQTtFQUNFLGVBQWU7QUFlakIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLm5iLXNodWZmbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZC1zaXplIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZml4LWNhcmQtc3BhY2luZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNhcmQtZ2FpbiB7XHJcbiAgbWF4LXdpZHRoOiA2NSU7XHJcbn1cclxuLmNhcmQtdGVjaCB7XHJcbiAgbWF4LXdpZHRoOiA0OCU7XHJcbn1cclxuLmNvbnRhaW5lci1taWRkbGUtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5saXN0LXRlY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY3VzdG9tLWJvcmRlci1wZW5kaW5nIHtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZmZjIwMDtcclxufVxyXG5cclxuLmN1c3RvbS1ib3JkZXItdG90YWwge1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG4uaGVhZGVyLXRlY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lci1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyLWl0ZW1zIHNwYW4ge1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB3aWR0aDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50b3RhbEQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEzZmY7XHJcbn1cclxuLnRvdGFsUiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZTY5OTtcclxufVxyXG4uYXZlcmdlRCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2Q3MTtcclxufVxyXG4uYXZlcmFnZVIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDA7XHJcbn1cclxuXHJcbi5hdmVyYWdlUkYge1xyXG4gIGNvbG9yOiAjZmZhYTAwO1xyXG59XHJcbi5hdmVyZ2VERiB7XHJcbiAgY29sb3I6ICNmZjNkNzE7XHJcbn1cclxuLnRvdGFsUkYge1xyXG4gIGNvbG9yOiAjMDBlNjk5O1xyXG59XHJcbi50b3RhbERGIHtcclxuICBjb2xvcjogIzAwYTNmZjtcclxufVxyXG5cclxuLmVxdWFsLXdpZHRoLXRhYmxlIHtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXF1YWwtd2lkdGgtdGFibGUgdGgsXHJcbi5lcXVhbC13aWR0aC10YWJsZSB0ZCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpOyAvKiAxMDAlIC8gNyBjb2x1bW5zICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBPcHRpb25hbDogQ2VudGVyLWFsaWduIHRleHQgd2l0aGluIGNlbGxzICovXHJcbiAgcGFkZGluZzogOHB4OyAvKiBPcHRpb25hbDogQWRkIHBhZGRpbmcgZm9yIGJldHRlciBhcHBlYXJhbmNlICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZjFmNztcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcbi5zY3JvbGxhYmxlLWNlbGwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmZpeC1oZWFkZXItZmxpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuLmljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 23197:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboards-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardsRoutingModule": function() { return /* binding */ DashboardsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 13253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: "dashboardGlobal",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
    },
];
class DashboardsRoutingModule {
}
DashboardsRoutingModule.ɵfac = function DashboardsRoutingModule_Factory(t) { return new (t || DashboardsRoutingModule)(); };
DashboardsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardsRoutingModule });
DashboardsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 78990:
/*!*******************************************************!*\
  !*** ./src/app/pages/dashboards/dashboards.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardsModule": function() { return /* binding */ DashboardsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 13253);
/* harmony import */ var _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboards-routing.module */ 23197);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ 93104);
/* harmony import */ var _charts_charts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../charts/charts.module */ 29313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class DashboardsModule {
}
DashboardsModule.ɵfac = function DashboardsModule_Factory(t) { return new (t || DashboardsModule)(); };
DashboardsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardsModule });
DashboardsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
            _charts_charts_module__WEBPACK_IMPORTED_MODULE_2__.ChartsModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbProgressBarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTooltipModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardsModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
        _charts_charts_module__WEBPACK_IMPORTED_MODULE_2__.ChartsModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbProgressBarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTooltipModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboards_dashboards_module_ts-es2015.js.map