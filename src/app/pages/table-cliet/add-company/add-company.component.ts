import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.scss"],
})
export class AddCompanyComponent implements OnInit {
  addCompany = new FormGroup({
    companyName: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    region: new FormControl("", [Validators.required]),
    codePostal: new FormControl("", [Validators.required]),
    tva: new FormControl("", [Validators.required]),
    localOrshore: new FormControl("", [Validators.required]),
    etat: new FormControl("", [Validators.required]),
    fax: new FormControl("", [Validators.required]),
    website: new FormControl("", [Validators.required]),
    conPayment: new FormControl("", [Validators.required]),
    techContact: new FormControl("", [Validators.required]),
    codeFiscal: new FormControl("", [Validators.required]),
    nattestation: new FormControl("", [Validators.required]),
    swiftBic: new FormControl("", [Validators.required]),
    ibanRib: new FormControl("", [Validators.required]),
    achat: new FormGroup({
      // Nested FormGroup
      fullName: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
    }),
    financier: new FormGroup({
      // Nested FormGroup
      fullName: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
    }),
    technique: new FormGroup({
      // Nested FormGroup
      fullName: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
    }),
    nRegisterCommerce: new FormControl("", [Validators.required]),
  });
  typeUser: string;
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

  toHideAchat: boolean = false;
  toHideFinancier: boolean = false;
  toHideTechnique: boolean = false;
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

  createCompany() {
    console.log(this.addCompany.value, "add");
    // this.nbDialog
    //   .open(ConfirmationModalComponent, {
    //     context: { data: "êtes-vous sûr de ajouter cette société" },
    //   })
    //   .onClose.subscribe((cl) => {
    //     if (cl) {
    //       console.log(this.addCompany.value, "form data company");
    //       this.apollo
    //         .mutate<any>({
    //           mutation: this.clientService.addClient(
    //             this.addCompany.value,
    //             this.typeUser
    //           ),
    //         })
    //         .subscribe(({ data }) => {
    //           if (data) {
    //             this.addCompany.reset();
    //             this.toastr.success("", "Vous avez ajouter nouvelle société");
    //             this.router.navigate(["pages/tableClient/table-company"]);
    //           }
    //         });
    //     } else {
    //       this.toastr.danger("", "Annulé");
    //     }
    //   });
  }

  hideShowFormAchat() {
    this.toHideAchat = !this.toHideAchat;
  }
  hideShowFormFinancier() {
    this.toHideFinancier = !this.toHideFinancier;
  }
  hideShowFormTechnique() {
    this.toHideTechnique = !this.toHideTechnique;
  }
}
