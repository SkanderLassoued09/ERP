import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { TicketService } from "../ticket/ticket.service";
import { DatePipe } from "@angular/common";
import { NbDialogService } from "@nebular/theme";
import { BtnFinalComponent } from "../btn-final/btn-final.component";
import { ToggleIgnoreComponent } from "../toggle-ignore/toggle-ignore.component";
import { AllInfoComponent } from "../all-info/all-info.component";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-ticket",
  templateUrl: "./list-ticket-finie.component.html",
  styleUrls: ["./list-ticket-finie.component.scss"],
})
export class TicketComponentTraiter implements OnInit {
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
        title: "Emplacement",
        type: "string",
      },

      reparable: {
        title: "Reparable",
        type: "string",
      },
      status: {
        title: "Status",
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

      openModalAffectation: {
        title: "Diagnostique",
        type: "custom",
        renderComponent: BtnFinalComponent,
      },
      toggleIgnored: {
        title: "Retour",
        type: "custom",
        renderComponent: ToggleIgnoreComponent,
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
    this.getTicketForTechAdmin();
  }

  getTicketForTechAdmin() {
    this.apollo
      .query<any>({
        query: this.ticketService.getTicketFinished(),
      })
      .subscribe(({ data }) => {
        console.log(data, "tickets");
        this.listOfTicket = new LocalDataSource(data.getFinishedTicket);
      });
  }

  seeData(seeData) {
    const ticketId = seeData.data._id;
    this.route.navigate(["pages/ticket/details-ticket", ticketId]);
  }
}
