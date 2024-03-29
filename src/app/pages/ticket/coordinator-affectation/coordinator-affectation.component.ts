import { Component, OnInit } from "@angular/core";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { DropDownAffectationComponent } from "../drop-down-affectation/drop-down-affectation.component";
import { DropDownAdminsCooComponent } from "../drop-down-admins-coo/drop-down-admins-coo.component";
import { BtnAffectReparationComponent } from "../btn-affect-reparation/btn-affect-reparation.component";
import { AllInfoComponent } from "../all-info/all-info.component";
import { NbDialogService } from "@nebular/theme";

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
          title: `<i class="nb-compose" title="Voir toutes les informations"></i>`,
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
        title: "Status",
        type: "string",
      },

      emplacement: {
        title: "emplacement",
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
        title: "Choisir tech",
        type: "custom",
        width: "15rem",
        renderComponent: DropDownAffectationComponent,
      },
      selectAdmin: {
        title: "dop",
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
    private nbDialog: NbDialogService
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
    console.log(seeData, "see test");
    let modal = this.nbDialog.open(AllInfoComponent, {
      closeOnBackdropClick: true,
      closeOnEsc: true,
    });
    modal.componentRef.instance.allData = seeData.data;
    console.log("this is where my data come", seeData);
  }
}
