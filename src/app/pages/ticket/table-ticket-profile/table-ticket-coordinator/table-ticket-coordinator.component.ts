import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { Apollo } from "apollo-angular";
import { ServerDataSource } from "ng2-smart-table";
import { ConfirmationModalComponent } from "../../../../share-data/confirmation-modal/confirmation-modal.component";
import { TicketService } from "../../ticket/ticket.service";
import { BtnAdminsComponent } from "../../btn-admins/btn-admins.component";
import { BtnOpenModalMagasinComponent } from "../../btn-open-modal-magasin/btn-open-modal-magasin.component";
import { BtnOpenTicketModalComponent } from "../../btn-open-ticket-modal/btn-open-ticket-modal.component";
import { BtnReparationComponent } from "../../btn-reparation/btn-reparation.component";
import { ToggleActivateComponent } from "../../toggle-activate/toggle-activate.component";
import { BtnAffectReparationComponent } from "../../btn-affect-reparation/btn-affect-reparation.component";
import { DropDownAdminsCooComponent } from "../../drop-down-admins-coo/drop-down-admins-coo.component";
import { DropDownAffectationComponent } from "../../drop-down-affectation/drop-down-affectation.component";

@Component({
  selector: "ngx-table-ticket-coordinator",
  templateUrl: "./table-ticket-coordinator.component.html",
  styleUrls: ["./table-ticket-coordinator.component.scss"],
})
export class TableTicketCoordinatorComponent implements OnInit {
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
          // console.log(cell);
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
  _sourceDataWithPagination: ServerDataSource;
  constructor(
    private apollo: Apollo,
    private ticketservice: TicketService,
    private nbDialog: NbDialogService,
    private route: Router,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTicketFromController();
    this.notif();
  }

  notif() {
    console.log("🥞[notif]:");

    this.apollo
      .subscribe<any>({
        query: this.ticketservice.notif(),
      })
      .subscribe((result) => {
        if (result.data?.notificationTech) {
          console.log("🍾[result]:", result);
          const notificationTech = result.data?.notificationTech;
          console.log("Received notification:", notificationTech);
        }
      });
  }

  seeData(seeData) {
    const ticketId = seeData.data._id;
    this.route.navigate(["pages/ticket/details-ticket", ticketId]);
  }
  getTicketFromController() {
    this._sourceDataWithPagination = new ServerDataSource(this.http, {
      endPoint: "http://localhost:3000/ticket/getTicketCoordinator",
      dataKey: "getAllTicketCoorinator",
      pagerPageKey: "indexPage",
      pagerLimitKey: "nbOfDocument",
      totalKey: "allTicketCount",
    });
  }
}
