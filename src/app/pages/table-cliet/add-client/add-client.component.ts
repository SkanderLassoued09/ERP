import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NbDialogService,
  NbToastrService,
  NbToggleModule,
} from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  addUser = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl(""),
    address: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    region: new FormControl(""),
  });
  typeUser: any;

  regions = [
    "Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairaouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Mednine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  constructor(
    private apollo: Apollo,
    private clientService: TableClientService,
    private route: ActivatedRoute,
    private toastr: NbToastrService,
    private router: Router,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.typeUser = this.route.snapshot.params.type;
    console.log(this.typeUser, "data");
  }
  onToggleSwitche() {
    console.log("test Toggle button");
    setTimeout(() => {
      this.router.navigate(["/pages/tableClient/add-company/COMPANY"]);
    }, 300);
  }
  createUser() {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: { data: "êtes-vous sûr de ajouter ce client" },
      })
      .onClose.subscribe((cl) => {
        if (cl) {
          console.log(this.addUser.value, "data");
          this.apollo
            .mutate<any>({
              mutation: this.clientService.addClient(
                this.addUser.value,
                this.typeUser
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.addUser.reset();
                this.toastr.success("", "Vous avez ajouter nouveau client");
                this.router.navigate(["pages/tableClient/table-user"]);
              }
            });
        } else {
          this.toastr.warning("", "Annulé");
        }
      });
  }
}
