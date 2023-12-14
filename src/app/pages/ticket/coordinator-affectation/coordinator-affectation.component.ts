import { Component, OnInit } from "@angular/core";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { DropDownAffectationComponent } from "../drop-down-affectation/drop-down-affectation.component";
import { DropDownAdminsCooComponent } from "../drop-down-admins-coo/drop-down-admins-coo.component";
import { BtnAffectReparationComponent } from "../btn-affect-reparation/btn-affect-reparation.component";
import { AllInfoComponent } from "../all-info/all-info.component";
import { NbDialogService } from "@nebular/theme";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-coordinator-affectation",
  templateUrl: "./coordinator-affectation.component.html",
  styleUrls: ["./coordinator-affectation.component.scss"],
})
export class CoordinatorAffectationComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: "seeData",
          title: `<span ><img src="assets/images/document.png" alt=""/></span>`,
        },
      ],
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"  title="Modifier" ></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"  title="Desactiver"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: "ID",
        type: "string",
      },
      status: {
        title: "status",
        type: "html",
        valuePrepareFunction: (cell) => {
          console.log(cell);
          if (cell === "PENDING") {
            return '<div class="pending">' + "En attente" + "</div>";
          }
          if (cell === "IN_PROGRESS") {
            return '<div class="enCours">' + "En cours" + "</div>";
          }
          if (cell === "FINISHED") {
            return '<div class="finished">' + "Finie" + "</div>";
          }
          if (cell === "PCR") {
            return '<div class="pcr">' + "PCR" + "</div>";
          }
          if (cell === "IGNORED") {
            return '<div class="ignored">' + "Annulé" + "</div>";
          }
          if (cell === "RETURN") {
            return '<div class="ignored">' + "Retour" + "</div>";
          }
        },
      },

      emplacement: {
        title: "Emplacement",
        type: "string",
        valuePrepareFunction: (data) => {
          if (!data) {
            return "-";
          } else {
            return data;
          }
        },
      },
      affectedToClient: {
        title: "Client",
        type: "string",
        valuePrepareFunction: (data) => {
          if (data === "empty") {
            return "-";
          } else {
            return data;
          }
        },
      },
      affectedToCompany: {
        title: "Société",
        type: "string",
        valuePrepareFunction: (data) => {
          if (data === "empty") {
            return "-";
          } else {
            return data;
          }
        },
      },
      selectTech: {
        title: "Diagnostique",
        type: "custom",
        width: "15rem",
        renderComponent: DropDownAffectationComponent,
      },
      selectAdmin: {
        title: "Révision",
        type: "custom",
        renderComponent: DropDownAdminsCooComponent,
      },
      affectToReparation: {
        title: "Réparation",
        type: "custom",
        renderComponent: BtnAffectReparationComponent,
      },
    },
  };
  listOfCoordinator: any;
  constructor(
    private apollo: Apollo,
    private ticketservice: TicketService,
    private nbDialog: NbDialogService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.listOfTicketsCoordinator();
  }

  listOfTicketsCoordinator() {
    this.apollo
      .query<any>({
        query: this.ticketservice.getTicketsForCoordinator(),
      })
      .subscribe(({ data }) => {
        console.log(data, "coordinator");
        this.listOfCoordinator = data.getTicketForCoordinator;
      });
  }

  seeData(seeData) {
    const ticketId = seeData.data._id;
    this.route.navigate(["pages/ticket/details-ticket", ticketId]);
  }
}
