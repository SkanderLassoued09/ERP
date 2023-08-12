import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import {
  NbCardModule,
  NbListModule,
  NbProgressBarModule,
  NbTooltipModule,
} from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxEchartsDirective } from "ngx-echarts/lib/ngx-echarts.directive";
import { ChartModule } from "angular2-chartjs";
import { ChartsModule } from "../charts/charts.module";
import { EchartsBarComponent } from "../charts/echarts/echarts-bar.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    NbCardModule,
    NgxEchartsModule,
    ChartsModule,
    NgxEchartsModule,
    NbProgressBarModule,
    NbListModule,
    NbTooltipModule,
  ],
})
export class DashboardsModule {}
