import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { ProfileService } from "../profile.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: true,
      delete: true,
      custom: [
        {
          name: "passValue",
          title: `<i class="nb-compose" title="details"></i>`,
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
      username: {
        title: "Nom d'utilisateur",
        type: "string",
        editable: false,
      },

      firstName: {
        title: "Prénom",
        type: "string",
      },
      lastName: {
        title: "Nom",
        type: "string",
      },
      role: {
        title: "Rôle",
        type: "string",
        editable: false,
      },
      email: {
        title: "E-mail",
        type: "string",
        editable: false,
      },
      phone: {
        title: "Téléphone",
        type: "string",
      },

      createdAt: {
        title: "Créé le",
        type: "string",
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
          return formatted;
        },
        editable: false,
      },

      updatedAt: {
        title: "Dérniere modification",
        type: "string",
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
          return formatted;
        },
        editable: false,
      },
    },
  };

  profileList: LocalDataSource;

  constructor(
    private profileService: ProfileService,
    private apollo: Apollo,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.listOfProfile();
  }

  listOfProfile() {
    this.apollo
      .query<any>({
        query: this.profileService.getListProfile(),
      })
      .subscribe(({ data }) => {
        console.log(data, "data");

        this.profileList = new LocalDataSource(data.getAllProfiles);
      });
  }
  delete(event) {
    console.log("hello", event.data._id);
    this.apollo
      .mutate<any>({
        mutation: this.profileService.deleteProfile(event.data._id),
      })
      .subscribe(({ data }) => {
        console.log(data, "delete");
        if (data) {
          event.confirm.resolve();
        }
      });
  }
  edit(event) {
    console.log("hello", event);
    this.apollo
      .mutate<any>({
        mutation: this.profileService.updateProfile(
          event.newData._id,
          event.newData.firstName,
          event.newData.lastName,
          event.newData.phone
        ),
      })
      .subscribe(({ data }) => {
        console.log(data, "updated");
        if (data) {
          event.confirm.resolve(event.newdata);
        }
      });
  }
}
