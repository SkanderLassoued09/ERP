import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { TicketService } from "./ticket.service";
import { ModalTicketComponent } from "../modal-ticket/modal-ticket.component";
import { BtnOpenTicketModalComponent } from "../btn-open-ticket-modal/btn-open-ticket-modal.component";
import * as moment from "moment";
import { DatePipe } from "@angular/common";
import { BtnReparationComponent } from "../btn-reparation/btn-reparation.component";
import { NbDialogService } from "@nebular/theme";
import { ModalAddIssueComponent } from "../modal-add-issue/modal-add-issue.component";
import { AddLocationComponent } from "../add-location/add-location.component";
import { BtnOpenModalMagasinComponent } from "../btn-open-modal-magasin/btn-open-modal-magasin.component";
import { ROLE } from "../../../roles";
import { BtnAdminsComponent } from "../btn-admins/btn-admins.component";
import { ToggleActivateComponent } from "../toggle-activate/toggle-activate.component";
import { AllInfoComponent } from "../all-info/all-info.component";
import { Route, Router } from "@angular/router";
@Component({
  selector: "ngx-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
  firstForm;
  secondForm;
  IsBeShowen: boolean = true;
  options = [
    { value: "This is value 1", label: "Option 1" },
    { value: "This is value 2", label: "Option 2" },
  ];

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
      typeClient: {
        title: "Type",
        type: "string",
      },

      emplacement: {
        title: "emplacement",
        type: "string",
      },

      reparable: {
        title: "reparable",
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

      createdAt: {
        title: "créé le",
        type: "string",
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
          return formatted;
        },
      },
      updatedAt: {
        title: "Dérniere modification",
        type: "string",
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
          return formatted;
        },
      },
      configTicket: {
        title: "Diagnostique",
        type: "custom",
        renderComponent: BtnOpenTicketModalComponent,
      },
      modalReparation: {
        title: "Réparation",
        type: "custom",
        renderComponent: BtnReparationComponent,
      },
      openModalMagasin: {
        title: "Remplissage",
        type: "custom",
        renderComponent: BtnOpenModalMagasinComponent,
      },
      affectationPrice: {
        title: "Affectation les prix",
        type: "custom",
        renderComponent: BtnAdminsComponent,
      },
      reactivateDiagnostique: {
        title: "Reouverture diagnostique",
        type: "custom",
        renderComponent: ToggleActivateComponent,
      },
    },
  };

  listOfTicket: LocalDataSource;
  listOfTech: any;
  loggedInUser: string;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private datePipe: DatePipe,
    private nbDialog: NbDialogService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem("role");
    this.getAllTicket();
    this.getNotificationSocket();
    this.toHideColumns();
  }

  getAllTicket() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTicket(),
      })
      .subscribe(({ data }) => {
        console.log(data, "tickets");
        const filterArr = this.removeDuplicateObjects(data.getTicketByTech);
        this.listOfTicket = new LocalDataSource(filterArr);
      });
  }

  removeDuplicateObjects(arr: any[]) {
    const seenIds = new Set<number>();
    return arr.filter((obj) => {
      if (seenIds.has(obj._id)) {
        return false; // Duplicate, filter it out
      }
      seenIds.add(obj._id);
      return true;
    });
  }

  // open modal add issue
  openModal() {
    let modal = this.nbDialog.open(ModalAddIssueComponent, {
      closeOnBackdropClick: true,
      closeOnEsc: true,
    });
  }

  openModalLocation() {
    let modal = this.nbDialog.open(AddLocationComponent, {
      closeOnBackdropClick: true,
      closeOnEsc: true,
    });
  }

  getNotificationSocket() {
    // const currentUser = localStorage.getItem("username");
    // let notificationData = this.ticketService.getNotification(currentUser);
    // console.log(notificationData, "in component");
  }

  toHideColumns() {
    console.log(this.IsBeShowen, "this.loggedInUser");
    if (
      this.loggedInUser === ROLE.MANAGER ||
      this.loggedInUser === ROLE.ADMIN_MANAGER
    ) {
      delete this.settings.columns.reparable;
      delete this.settings.columns.modalReparation;
      delete this.settings.columns.openModalMagasin;
      delete this.settings.columns.configTicket;
    }

    if (
      this.loggedInUser === ROLE.ADMIN_TECH ||
      this.loggedInUser === ROLE.TECH
    ) {
      delete this.settings.columns.openModalMagasin;
    }

    if (this.loggedInUser === ROLE.MAGASIN) {
      delete this.settings.columns.reparable;
      delete this.settings.columns.modalReparation;

      delete this.settings.columns.configTicket;
    }

    if (
      this.loggedInUser === ROLE.MAGASIN ||
      this.loggedInUser === ROLE.TECH ||
      this.loggedInUser === ROLE.MANAGER
    ) {
      delete this.settings.columns.affectationPrice;
      delete this.settings.columns.reactivateDiagnostique;
    }
  }
  seeData(seeData) {
    const ticketId = seeData.data._id;
    this.route.navigate(["pages/ticket/details-ticket", ticketId]);
  }
}
