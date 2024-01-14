import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProfileService } from "../profile.service";
import { Apollo } from "apollo-angular";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.scss"],
})
export class AddProfileComponent implements OnInit {
  addProfile = new FormGroup({
    username: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    address: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
  });

  roles = [
    "ADMIN_MANAGER",
    "ADMIN_TECH",
    "MANAGER",
    "MAGASIN",
    "TECH",
    "COORDINATOR",
  ];

  constructor(
    private profileService: ProfileService,
    private apollo: Apollo,
    private nbToastr: NbToastrService,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {}

  saveProfile() {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: { data: "êtes-vous sûr ?" },
      })
      .onClose.subscribe((cl) => {
        if (cl) {
          console.log(this.addProfile.value, "form");
          this.apollo
            .mutate<any>({
              mutation: this.profileService.addProfile(this.addProfile.value),
            })
            .subscribe(({ data }) => {
              console.log(data, "profile added");
              if (data) {
                this.nbToastr.success("", "Profile added");
                this.addProfile.reset();
              }
            });
        } else {
          this.nbToastr.warning("", "Annulé");
          this.addProfile.reset();
        }
      });
  }
}
