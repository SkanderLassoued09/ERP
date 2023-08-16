import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { DashboardService } from "../dashboard.service";
import { TicketService } from "../../ticket/ticket/ticket.service";
import * as echarts from "echarts";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  options = {
    backgroundColor: echarts.bg,
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
            shadowColor: echarts.itemHoverShadowColor,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: echarts.textColor,
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: echarts.axisLineColor,
            },
          },
        },
      },
    ],
  };
  option: {
    xAxis: { type: string; data: string[] };
    yAxis: { type: string };
    series: { data: number[]; type: string; color: string }[];
  };
  techs: any;
  cellSize = [80, 80];
  pieRadius = 30;

  issueChart: {
    backgroundColor: any;
    color: string[];
    tooltip: { trigger: string; formatter: string };
    series: {
      name: string;
      type: string;
      radius: string;
      center: string[];
      data: any;
      itemStyle: {
        emphasis: {
          shadowBlur: number;
          shadowOffsetX: number;
          shadowColor: any;
        };
      };
      label: { normal: { textStyle: { color: any } } };
      labelLine: { normal: { lineStyle: { color: any } } };
    }[];
  };
  totalityCard: any;
  totalTicket: any;
  ticketFinie: any;
  ticketEnCours: any;
  enAttente: any;
  ticketRetour: any;
  ticketAnnuler: any;
  totalPrice: number = 0.0;
  totalPriceReturn: number = 0.0;
  totalcomposants: number = 0.0;
  optionCal: {
    tooltip: {};
    legend: { data: string[]; bottom: number };
    calendar: {
      top: string;
      left: string;
      orient: string;
      cellSize: number[];
      yearLabel: { show: boolean; fontSize: number };
      dayLabel: { margin: number; firstDay: number; nameMap: string[] };
      monthLabel: { show: boolean };
      range: string[];
    };
    series: {
      id: string;
      type: string;
      coordinateSystem: string;
      symbolSize: number;
      label: {
        show: boolean;
        formatter: (params: any) => any;
        offset: number[];
        fontSize: number;
      };
      data: any;
    }[];
  };
  calendarCharts: {
    tooltip: {};
    legend: { data: string[]; bottom: number };
    calendar: {
      top: string;
      left: string;
      orient: string;
      cellSize: number[];
      yearLabel: { show: boolean; fontSize: number };
      dayLabel: { margin: number; firstDay: number; nameMap: string[] };
      monthLabel: { show: boolean };
      range: string[];
    };
    series: any[];
  };
  optionsss: {
    tooltip: {};
    legend: { data: string[]; bottom: number };
    calendar: {
      top: string;
      left: string;
      orient: string;
      cellSize: number[];
      yearLabel: { show: boolean; fontSize: number };
      dayLabel: { margin: number; firstDay: number; nameMap: string[] };
      monthLabel: { show: boolean };
      range: string[];
    };
    series: (
      | {
          type: string;
          id: string;
          center: any;
          radius: number;
          coordinateSystem: string;
          label: { formatter: string; position: string };
          data: { name: any; value: any }[];
        }
      | {
          id: string;
          type: string;
          coordinateSystem: string;
          symbolSize: number;
          label: {
            show: boolean;
          };
          data: any[];
        }
    )[];
  };
  optClient: {
    xAxis: { type: string; data: string[] };
    yAxis: { type: string };
    series: {
      data: number[];
      type: string;
      showBackground: boolean;
      backgroundStyle: { color: string };
    }[];
  };

  constructor(
    private apollo: Apollo,
    private dashboardService: DashboardService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.getTotality();
    this.getChart();
    this.getClientByRegion();
    this.cardTech();
    this.getAllTech();
    this.getIssuesChart();
    this.price();
    this.calendarChart();
  }

  getTotality() {
    this.apollo
      .query<any>({
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
      .query<any>({
        query: this.dashboardService.getClientCompanyChart(),
      })
      .subscribe(({ data }) => {
        this.options = {
          backgroundColor: echarts.bg,
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
                  shadowColor: echarts.itemHoverShadowColor,
                },
              },
              label: {
                normal: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: echarts.axisLineColor,
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
      .query<any>({
        query: this.ticketService.getAllTech(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        // this.techs = data.getAllTech;
      });
  }

  getClientByRegion() {
    this.apollo
      .query<any>({
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
      .query<any>({
        query: this.dashboardService.getIssuesChart(),
      })
      .subscribe(({ data }) => {
        console.log(data, "data chart");
        this.issueChart = {
          backgroundColor: echarts.bg,
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
                  shadowColor: echarts.itemHoverShadowColor,
                },
              },
              label: {
                normal: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: echarts.axisLineColor,
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
      .query<any>({
        query: this.dashboardService.cardTech(),
      })
      .subscribe(({ data }) => {
        console.log(data, "card tech");
        this.techs = data.getTicketByProfile;
      });
  }

  price() {
    this.apollo
      .query<any>({
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
      .query<any>({
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

  /**
   *
   * @param arr contains date as string
   */
  arrhandler(arr: string[]) {
    let arrr = [];
    arr.map((el) => {
      arrr.push([el, Math.floor(Math.random() * 10000)]);
    });
    return arrr;
  }
}
