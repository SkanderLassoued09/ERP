import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketComponent } from "./ticket/ticket.component";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { TicketComponentTraiter } from "./list-ticket-finie/list-ticket-finie.component";
import { CoordinatorAffectationComponent } from "./coordinator-affectation/coordinator-affectation.component";
import { AllInfoComponent } from "./all-info/all-info.component";
import { TableTicketTechComponent } from "./table-ticket-profile/table-ticket-tech/table-ticket-tech.component";
import { TableTicketAdminTechComponent } from "./table-ticket-profile/table-ticket-admin-tech/table-ticket-admin-tech.component";
import { TableTicketAdminComponent } from "./table-ticket-profile/table-ticket-admin/table-ticket-admin.component";
import { TableTicketCoordinatorComponent } from "./table-ticket-profile/table-ticket-coordinator/table-ticket-coordinator.component";
import { TableTicketMagasinComponent } from "./table-ticket-profile/table-ticket-magasin/table-ticket-magasin.component";
import { TableTicketManagerComponent } from "./table-ticket-profile/table-ticket-manager/table-ticket-manager.component";

const routes: Routes = [
  {
    path: "add-ticket",
    component: AddTicketComponent,
  },
  {
    path: "ticket-list",
    component: TicketComponent,
  },
  {
    path: "ticket-list-traiter",
    component: TicketComponentTraiter,
  },
  {
    path: "coordinator",
    component: CoordinatorAffectationComponent,
  },
  {
    path: "details-ticket/:idTicket",
    component: AllInfoComponent,
  },

  {
    path: "ticket-for-tech",
    component: TableTicketTechComponent,
  },
  {
    path: "ticket-for-admin-tech",
    component: TableTicketAdminTechComponent,
  },
  {
    path: "ticket-for-admin-manager",
    component: TableTicketAdminComponent,
  },
  {
    path: "ticket-for-coordinator",
    component: TableTicketCoordinatorComponent,
  },
  {
    path: "ticket-for-magasin",
    component: TableTicketMagasinComponent,
  },
  {
    path: "ticket-for-manager",
    component: TableTicketManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
