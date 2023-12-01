import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableClientComponent } from "./table-client/table-client.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { ClientRoutingModule } from "./table-client-routing.module";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbToast,
  NbToggleModule,
} from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ChoicesComponent } from "./choices/choices.component";
import { AddCompanyComponent } from "./add-company/add-company.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { FieldDetailsComponent } from './field-details/field-details.component';

@NgModule({
  declarations: [
    TableClientComponent,
    AddClientComponent,
    ChoicesComponent,
    AddCompanyComponent,
    CompanyListComponent,
    FieldDetailsComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    NbRadioModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbSelectModule,
    NbToggleModule,
  ],
})
export class TableClietModule {}
