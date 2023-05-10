import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  settings = {
    actions: {
      add: true,
      edit: true,
      delete: true,
      custom: [
        {
          name: "passValue",
          title: `<i class="nb-compose" title="Affecte des TPEs"></i>`,
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
      nameUser: {
        title: "ID",
        type: "string",
      },

      phone: {
        title: "Fistname",
        type: "number",
      },
      test: {
        title: "Lastname",
        type: "string",
      },
      region: {
        title: "Address",
        type: "string",
      },
      address: {
        title: "Phone",
        type: "string",
      },

      email: {
        title: "email",
        type: "custom",
      },
    },
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },

    // ... list of items

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
    },
  ];

  onDeleteConfirm(event) {
    console.log("Delete Event In Console");
    console.log(event);
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console");
    console.log(event);
  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console");
    console.log(event);
  }
}
