import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { DashboardService } from "../dashboard.service";
import { TicketService } from "../../ticket/ticket/ticket.service";
import * as echarts from "echarts";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  Tarif_Heure_Techs: number = 0;
  Dashboard_Date_Gain: number = 0;
  Dashboard_Date_Perte: number = 0;
  Dashboard_Date_Total_Price_Composants: number = 0;
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
  total_composants: number = 0.0;
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

  gainFrom = new FormGroup({
    filterGainWorking: new FormControl(null, [Validators.required]),
  });
  flipped: boolean;
  tableDiagRepError: string;

  constructor(
    private apollo: Apollo,
    private dashboardService: DashboardService,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit() {
    this.getTotality();
    this.getChart();
    this.getClientByRegion();
    this.getPricePerHour();
    this.getAllTech();
    this.getIssuesChart();
    this.calendarChart();
    setTimeout(() => {
      this.Table_Work_Volume();
    }, 1000);
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

  getPricePerHour() {
    this.apollo
      .query<any>({
        query: this.dashboardService.priceTechPerHour(),
      })
      .subscribe(({ data }) => {
        this.Tarif_Heure_Techs = data.getPriceTech;
      });
    (error) => {
      console.error("Error fetching price per hour:", error);
    };
  }

  getTotality() {
    this.apollo
      .query<any>({
        query: this.dashboardService.getTotality(),
      })
      .subscribe(({ data }) => {
        this.totalityCard = data.totality;
        [this.totalTicket] = data.totality.flatMap((el) => {
          return el.count;
        });

        this.totalityCard.map((el) => {
          el.totality.map((item) => {
            if (item.name === "FINISHED") {
              this.ticketFinie = item.value;
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
      .subscribe(({ data }) => {});
  }

  getClientByRegion() {
    this.apollo
      .query<any>({
        query: this.dashboardService.getClientByRegion(),
      })
      .subscribe(({ data }) => {
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
        const filteredIssues = data.getIssuesChart.filter(
          (issue) => issue.name !== null
        );
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
              data: filteredIssues,
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

  Table_Work_Volume() {
    this.apollo
      .query<any>({
        query: this.dashboardService.Table_Work_Volume(this.Tarif_Heure_Techs),
        errorPolicy: "all",
      })
      .subscribe(({ data, errors }) => {
        if (data) {
          this.techs = data.getTechWorkVolume;
        }
        if (errors) {
          this.tableDiagRepError = "Aucun DI finie";
          console.log("🍋[errors]:", errors);
        }
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
   *  in ngOnInit form is null I need to get all data
   * onChange i need to get data
   * => two steps are separate
   */

  // to filter gains in range of date
  Date_picker_Gain() {
    function formatToCustomISOString(date) {
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.slice(-2); // Months are zero-indexed
      const day = `0${date.getDate()}`.slice(-2);
      const hours = `0${date.getHours()}`.slice(-2);
      const minutes = `0${date.getMinutes()}`.slice(-2);
      const seconds = `0${date.getSeconds()}`.slice(-2);
      const milliseconds = `00${date.getMilliseconds()}`.slice(-3);
      const timezoneOffset = -date.getTimezoneOffset();
      const timezoneHours = `0${Math.abs(timezoneOffset / 60)}`.slice(-2);
      const timezoneMinutes = `0${Math.abs(timezoneOffset % 60)}`.slice(-2);
      const timezoneSign = timezoneOffset >= 0 ? "+" : "-";

      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${timezoneHours}:${timezoneMinutes}`;
    }

    let value_input = this.gainFrom.value.filterGainWorking;
    const startDate = value_input.start
      ? new Date(value_input.start)
      : new Date();
    const endDate = value_input.end ? new Date(value_input.end) : new Date();

    const filter_Mutation = {
      start: formatToCustomISOString(startDate),
      end: formatToCustomISOString(endDate),
    };

    this.apollo
      .mutate<any>({
        mutation: this.dashboardService.filterGainWorking(filter_Mutation),
      })
      .subscribe(
        ({ data }) => {
          if (data) {
            const finishedElements = data.filterGainWorking.filter(
              (item) => item.status === "FINISHED"
            );

            this.Dashboard_Date_Gain = finishedElements
              .map((item) => parseFloat(item.finalPrice))
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              );

            /**
               Number(x.toFixed(2),
            )
               */
            const RetourElements = data.filterGainWorking.filter(
              (item) => item.status === "RETOUR"
            );

            this.Dashboard_Date_Perte = RetourElements.map((item) =>
              parseFloat(item.finalPrice)
            ).reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            );

            const Liste_of_composants = data.filterGainWorking
              .flatMap((item) => item.composants) // Use flatMap to flatten the arrays
              .filter(
                (composant) =>
                  composant.sellPrice !== "null" && composant.sellPrice !== null
              );
            console.log(Liste_of_composants);
            const Di_contain_Composants = data.filterGainWorking.filter(
              (item) =>
                Array.isArray(item.composants) && item.composants.length > 0
            );
            const composantsArrays = Di_contain_Composants.map(
              (item) => item.composants
            );
            const sumPrices = [];
            // nezih correct this for array composants
            composantsArrays.forEach((composants) => {
              const filteredComposants = composants.filter(
                (c) => c.sellPrice !== null && c.sellPrice !== "null"
              );
              const sum = filteredComposants.reduce((acc, curr) => {
                if (curr.sellPrice && curr.quantity) {
                  const price =
                    parseFloat(curr.sellPrice) * parseInt(curr.quantity);
                  return acc + price;
                }
                return acc;
              }, 0);
              sumPrices.push(sum);
            });
            const Sum_composantsTotalPrice = sumPrices.reduce(
              (acc, curr) => acc + curr,
              0
            );
            this.Dashboard_Date_Total_Price_Composants =
              Sum_composantsTotalPrice;
          }
        },
        (error) => {
          console.error("Error:", error);
        }
      );
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
