import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketComponent } from "./ticket/ticket.component";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { TicketComponentTraiter } from "./list-ticket-finie/list-ticket-finie.component";
import { CoordinatorAffectationComponent } from "./coordinator-affectation/coordinator-affectation.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
