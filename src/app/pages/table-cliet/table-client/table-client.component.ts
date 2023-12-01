import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { LocalDataSource } from "ng2-smart-table";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  listOfClient: LocalDataSource;
  constructor(
    private apollo: Apollo,
    private clientService: TableClientService,
    private nbToastr: NbToastrService,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getClientCompany();
  }

  settings = {
    actions: {
      add: false,
      edit: true,
      delete: true,
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
        editable: false,
      },
      address: {
        title: "Address",
        type: "string",
      },
      region: {
        title: "region",
        type: "string",
      },
      email: {
        title: "email",
        type: "string",
      },
      phone: {
        title: "phone",
        type: "string",
      },
      firstName: {
        title: "firstName",
        type: "string",
      },
      lastName: {
        title: "lastName",
        type: "string",
      },
    },
  };

  delete(event) {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: { data: "Vous-êtes sûr de supprimer ?" },
      })
      .onClose.subscribe((cl) => {
        if (cl) {
          console.log("test modal client", event.data._id);
          this.apollo
            .mutate<any>({
              mutation: this.clientService.deleteClient(event.data._id),
            })
            .subscribe(({ data }) => {
              console.log(data, "delete is working");
              if (data) {
                this.nbToastr.danger("", "Client supprimé");
                event.confirm.resolve();
              }
            });
        } else {
          this.nbToastr.danger("", "Annulé");
        }
      });
  }
  editClient(event) {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: { data: "êtes-vous sûr de modifier ?" },
      })
      .onClose.subscribe((cl) => {
        if (cl) {
          this.apollo
            .mutate<any>({
              mutation: this.clientService.updateClient(
                event.newData._id,
                event.newData.address,
                event.newData.region,
                event.newData.email,
                event.newData.phone,
                event.newData.firstName,
                event.newData.lastName,
                event.newData.companyName,
                event.newData.fax,
                event.newData.website,
                event.newData.activitePrincipale,
                event.newData.activiteSecondaire,
                event.newData.raisonSociale,
                event.newData.Exoneration
              ),
            })
            .subscribe(({ data }) => {
              console.log(data, "client data");
              if (data) {
                this.nbToastr.info("", "  Client est mis à jour");
                event.confirm.resolve(event.newdata);
              }
            });
        } else {
          this.nbToastr.danger("", "Annulé");
        }
      });
    console.log("hello", event);
  }

  getClientCompany() {
    this.apollo
      .query<any>({
        query: this.clientService.getClient(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.listOfClient = new LocalDataSource(data.getAllClient);
      });
  }
}
