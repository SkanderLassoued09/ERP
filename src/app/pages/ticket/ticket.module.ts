import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketComponent } from "./ticket/ticket.component";
import { TicketRoutingModule } from "./ticket-routing.module";
import {
  NbActionsModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInfiniteListDirective,
  NbInputModule,
  NbLayoutScrollService,
  NbListModule,
  NbProgressBarModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
  NbTagModule,
  NbToggleModule,
  NbTooltipModule,
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { ModalTicketComponent } from "./modal-ticket/modal-ticket.component";
import { BtnOpenTicketModalComponent } from "./btn-open-ticket-modal/btn-open-ticket-modal.component";
import { BtnReparationComponent } from "./btn-reparation/btn-reparation.component";
import { ModalReparationComponent } from "./modal-reparation/modal-reparation.component";
import { TicketMagasinListComponent } from "./ticket-magasin-list/ticket-magasin-list.component";
import { TicketMagasinModalComponent } from "./ticket-magasin-modal/ticket-magasin-modal.component";
import { ModalAddIssueComponent } from "./modal-add-issue/modal-add-issue.component";
import { AddLocationComponent } from "./add-location/add-location.component";
import { BtnOpenModalMagasinComponent } from "./btn-open-modal-magasin/btn-open-modal-magasin.component";
import { BtnAdminsComponent } from "./btn-admins/btn-admins.component";
import { ModalAdminsComponent } from "./modal-admins/modal-admins.component";
import { TicketComponentTraiter } from "./list-ticket-finie/list-ticket-finie.component";
import { BtnFinalComponent } from "./btn-final/btn-final.component";
import { ModalFinalComponent } from "./modal-final/modal-final.component";
import { ToggleActivateComponent } from "./toggle-activate/toggle-activate.component";
import { ToggleIgnoreComponent } from "./toggle-ignore/toggle-ignore.component";
import { AllInfoComponent } from "./all-info/all-info.component";
import { CoordinatorAffectationComponent } from "./coordinator-affectation/coordinator-affectation.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DropDownAffectationComponent } from "./drop-down-affectation/drop-down-affectation.component";
import { DropDownAdminsCooComponent } from "./drop-down-admins-coo/drop-down-admins-coo.component";
import { BtnAffectReparationComponent } from "./btn-affect-reparation/btn-affect-reparation.component";
import { MatSliderModule } from "@angular/material/slider";
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { AddPriceTechComponent } from './add-price-tech/add-price-tech.component';

@NgModule({
  declarations: [
    TicketComponent,
    AddTicketComponent,
    ModalTicketComponent,
    BtnOpenTicketModalComponent,
    BtnReparationComponent,
    ModalReparationComponent,
    TicketMagasinListComponent,
    TicketMagasinModalComponent,
    ModalAddIssueComponent,
    AddLocationComponent,
    BtnOpenModalMagasinComponent,
    BtnAdminsComponent,
    ModalAdminsComponent,
    TicketComponentTraiter,
    BtnFinalComponent,
    ModalFinalComponent,
    ToggleActivateComponent,
    ToggleIgnoreComponent,
    AllInfoComponent,
    CoordinatorAffectationComponent,
    DropDownAffectationComponent,
    DropDownAdminsCooComponent,
    BtnAffectReparationComponent,
    TicketDetailsComponent,
    AddPriceTechComponent,
  ],
  imports: [
    DragDropModule,
    NbSelectModule,
    CommonModule,
    TicketRoutingModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    NbRadioModule,
    NbButtonModule,
    Ng2SmartTableModule,
    FormsModule,
    NbTagModule,
    NbBadgeModule,
    NbListModule,
    NbToggleModule,
    NbDatepickerModule,
    NbIconModule,
    NbActionsModule,
    NbProgressBarModule,
    MatSliderModule,
    NbTooltipModule,
  ],
})
export class TicketModule {}
