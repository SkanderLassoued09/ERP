import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-modal-admins",
  templateUrl: "./modal-admins.component.html",
  styleUrls: ["./modal-admins.component.scss"],
})
export class ModalAdminsComponent implements OnInit {
  rowData;
  AdminTechForm = new FormGroup({
    finalPrice: new FormControl("", [Validators.required]),
  });

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private refDialog: NbDialogRef<ModalAdminsComponent>,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "haha");
  }
  say() {
    console.log("hello");
  }

  submitTicket() {
    this.nbDialog
      .open(ConfirmationModalComponent, { context: "Voulez-vous confirmer ?" })
      .onClose.subscribe((resultat) => {
        if (resultat) {
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.affectPrice(
                this.rowData._id,
                this.AdminTechForm.value.finalPrice
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.AdminTechForm.reset();
                this.toastr.success("", "Prix affécté");
                this.refDialog.close(true);
              }
            });
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.affectationFinalPrice(
                this.rowData._id,
                this.AdminTechForm.value.finalPrice
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.AdminTechForm.reset();
                this.toastr.success("", "Prix affécté");
                this.refDialog.close(true);
              }
            });
        }
      });
  }

  totalPrixTotale: number = 0;

  calculateTotalPrixTotale(): number {
    let totalPrixTotale = 0;
    for (let c of this.rowData.composants) {
      totalPrixTotale += c.quantity * c.sellPrice;
    }
    return totalPrixTotale;
  }
}
