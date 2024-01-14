import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { URL } from "../../../URLs";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";
import { DomSanitizer } from "@angular/platform-browser";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "ngx-ticket-magasin-list",
  templateUrl: "./ticket-magasin-list.component.html",
  styleUrls: ["./ticket-magasin-list.component.scss"],
})
export class TicketMagasinListComponent implements OnInit {
  dataTicketSelected;
  composant = [];
  magasinField = new FormGroup({
    etat: new FormControl(null, [Validators.required]),
    purchasePrice: new FormControl(null, [Validators.required]),
    sellPrice: new FormControl(null, [Validators.required]),
    datePicker: new FormControl(null),
  });

  optionMagasin = ["Interne", "En stock", "Externe"];
  urlHost: any;
  checkedStatus: any;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private dialogRef: NbDialogRef<TicketMagasinListComponent>,
    private nbDilog: NbDialogService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getListOfComposant();
    this.urlHost = URL.SOCKET;
    this.magasinField.get("etat").valueChanges.subscribe((e) => {
      this.checkedStatus = e;
    });
  }
  /**
   *
   * @param _id ticket
   * @param nameComposant in array og composant existed in ticket
   * @param sellPrice feeds
   * @param purchasePrice feeds
   *
   */

  getSafeUrl() {
    this.composant.map((el) => {
      return this.sanitizer.bypassSecurityTrustUrl(
        "https://" + el.linkProvider
      );
    });
  }

  updateMagasin(nameComposant: string) {
    let toDisableBtn: boolean;
    this.magasinField.get("etat").valueChanges.subscribe((e) => {
      this.checkedStatus = e;
    });
    this.nbDilog
      .open(ConfirmationModalComponent, { context: "Voulez-vous confirmer ?" })
      .onClose.subscribe((resultat) => {
        if (resultat) {
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.updateMagasin(
                this.dataTicketSelected._id,
                nameComposant,
                this.magasinField.value.sellPrice,
                this.magasinField.value.purchasePrice,
                this.magasinField.value.etat,
                this.magasinField.value.datePicker
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                const updatedComposants = this.composant.findIndex(
                  (composant) => composant.nameComposant !== nameComposant
                );
                this.composant.splice(updatedComposants - 1, 1);
                this.toastr.success("", "Composant affecté");
                this.magasinField.reset();
                console.warn(this.composant.length, "length array composant");
                if (this.composant.length === 0) {
                  toDisableBtn = true;
                  this.dialogRef.close(toDisableBtn);
                }
              }
            });
        }
      });
  }

  getListOfComposant() {
    this.composant = this.dataTicketSelected.composants;
    this.composant.reverse();
  }
}
