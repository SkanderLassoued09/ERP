import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { Apollo } from "apollo-angular";
import { ServerDataSource } from "ng2-smart-table";
import { ConfirmationModalComponent } from "../../../../share-data/confirmation-modal/confirmation-modal.component";
import { BtnAdminsComponent } from "../../btn-admins/btn-admins.component";
import { TicketService } from "../../ticket/ticket.service";
import { ToggleActivateComponent } from "../../toggle-activate/toggle-activate.component";
import { BtnOpenTicketModalComponent } from "../../btn-open-ticket-modal/btn-open-ticket-modal.component";
import { BtnFinalComponent } from "../../btn-final/btn-final.component";

@Component({
  selector: "ngx-table-ticket-manager",
  templateUrl: "./table-ticket-manager.component.html",
  styleUrls: ["./table-ticket-manager.component.scss"],
})
export class TableTicketManagerComponent implements OnInit {
  _sourceDataWithPagination: any;

  settings = {
    actions: {
      add: false,
      edit: true,
      delete: true,
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
      editButtonContent: `<span ><img src="assets/images/edit.png" alt=""/></span>`,
      saveButtonContent: `<span ><img src="assets/images/check.png" alt=""/></span>`,
      cancelButtonContent: `<span ><img src="assets/images/cross.png" alt=""/></span>`,
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: `<span ><img src="assets/images/trash.png" alt=""/></span>`,
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: "ID",
        type: "string",
        editable: false,
      },
      title: {
        title: "Designation",
        type: "string",
      },

      affectedToCompany: {
        title: "Nom Sociéte",
        type: "string",
      },
      affectedToClient: {
        title: "Nom Client",
        type: "string",
      },

      emplacement: {
        title: "emplacement",
        type: "string",
      },

      reparable: {
        title: "reparable",
        type: "string",
        editable: false,
      },
      numero: {
        title: "N° Serie",
        type: "string",
      },

      status: {
        title: "status",
        type: "html",
        editable: false,
        valuePrepareFunction: (cell) => {
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

      createdAt: {
        title: "créé le",
        type: "string",
        editable: false,
      },
      updatedAt: {
        title: "Dérniere modification",
        type: "string",
        editable: false,
      },

      openModalAffectation: {
        title: "Prix final",
        type: "custom",
        renderComponent: BtnFinalComponent,
      },
    },
  };
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private datePipe: DatePipe,
    private nbDialog: NbDialogService,
    private route: Router,
    private toastr: NbToastrService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTicketFromController();
  }

  seeData(seeData) {
    const ticketId = seeData.data._id;
    this.route.navigate(["pages/ticket/details-ticket", ticketId]);
  }

  deleteTicket(event) {
    console.log(event, "data");
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: "Voulez-vous supprimer le ticket ?",
      })
      .onClose.subscribe((result) => {
        if (result) {
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.delete_ticket(event.data._id),
              errorPolicy: "all",
            })
            .subscribe(({ data, errors }) => {
              if (data) {
                this.toastr.danger("", "Ticket supprimé");
                event.confirm.resolve();
              }
              if (errors) {
                this.toastr.danger("", "vous n'êtes pas autorisé");
              }
            });
        }
      });
  }

  editTicket(event) {
    console.log(event, "update");
    console.log(
      event.newData._id,
      event.newData.numero,
      event.newData.emplacement,
      event.newData.designiation,
      event.newData.title,
      "update"
    );
    this.nbDialog
      .open(ConfirmationModalComponent, { context: "Voulez-vous confirmer ?" })
      .onClose.subscribe((result) => {
        if (result) {
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.updateTicket(
                event.newData._id,
                event.newData.numero,
                event.newData.emplacement,
                event.newData.designiation,
                event.newData.title
              ),
            })
            .subscribe(({ data }) => {
              console.log(data);
              this.toastr.success("", "Les champs ont changé");
              event.confirm.resolve(event.newdata);
            });
        }
      });
  }

  getTicketFromController() {
    // return this.ticketService
    //   .getTicketFromController()
    //   .subscribe((pagination) => {
    //     console.log("🎂[pagination]:", pagination);
    //   });
    // this._sourceDataWithPagination
    this._sourceDataWithPagination = new ServerDataSource(this.http, {
      endPoint: "http://localhost:3000/ticket/getTicketAdmins",
      dataKey: "getAllTicket",
      pagerPageKey: "indexPage",
      pagerLimitKey: "nbOfDocument",
      totalKey: "allTicketCount",
    });
  }
}