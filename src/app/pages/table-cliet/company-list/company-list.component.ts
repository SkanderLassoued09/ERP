import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { TableClientService } from "../table-client.service";
import { Apollo } from "apollo-angular";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { FieldDetailsComponent } from "../field-details/field-details.component";
import { DetailsTableComponent } from "../details-table/details-table.component";

@Component({
  selector: "ngx-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
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
      companyName: {
        title: "Société",
        type: "string",
      },
      email: {
        title: "E-mail",
        type: "string",
      },
      address: {
        title: "Address",
        type: "string",
      },
      phone: {
        title: "Télephone",
        type: "string",
      },
      fax: {
        title: "Fax",
        type: "string",
      },
      website: {
        title: "Website",
        type: "string",
      },
      activitePrincipale: {
        title: "Activite Principale",
        type: "string",
      },
      activiteSecondaire: {
        title: "Activite Secondaire",
        type: "string",
      },
      raisonSociale: {
        title: "Identifiant Unique",
        type: "string",
      },
      Exoneration: {
        title: "Exoneration",
        type: "string",
      },
      region: {
        title: "Region",
        type: "string",
      },
    },
  };
  listOfCompany: LocalDataSource;

  constructor(
    private clientService: TableClientService,
    private apollo: Apollo,
    private nbToastr: NbToastrService,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.apollo
      .query<any>({
        query: this.clientService.getCompany(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.listOfCompany = new LocalDataSource(data.getAllCompany);
      });
  }

  delete(event) {
    console.log("test delet company", event.data._id);
    this.apollo;

    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: { data: "Vous-êtes sûr de supprimer ?" },
      })
      .onClose.subscribe((cl) => {
        if (cl) {
          console.log("test delet company", event.data._id);
          this.apollo
            .mutate<any>({
              mutation: this.clientService.deleteClient(event.data._id),
            })
            .subscribe(({ data }) => {
              console.log(data, "delete");
              if (data) {
                this.nbToastr.danger("", "Profil supprimé");
                event.confirm.resolve();
              }
            });
        } else {
          this.nbToastr.danger("", "Annulé");
        }
      });
  }
  editCompany(event) {
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

  seeData(data) {
    const modal = this.nbDialog.open(DetailsTableComponent);
    modal.componentRef.instance.detailsCompany = data.data;
  }
}
