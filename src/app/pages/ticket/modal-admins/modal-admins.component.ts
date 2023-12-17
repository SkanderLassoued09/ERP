import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";
import { log } from "console";

function timeToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

@Component({
  selector: "ngx-modal-admins",
  templateUrl: "./modal-admins.component.html",
  styleUrls: ["./modal-admins.component.scss"],
})
export class ModalAdminsComponent implements OnInit {
  rowData;
  PriceTechSecond = 0;
  TimeTech;

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
    this.getPriceTech();
    this.TimeTech = timeToSeconds(this.rowData.diagnosticTimeByTech);
    console.log("this price per second , ", this.TimeTech);
  }
  say() {
    console.log("hello");
  }

  getPriceTech() {
    this.apollo
      .query<any>({
        query: this.ticketService.getPriceTech(),
      })
      .subscribe(({ data }) => {
        console.log(data.getPriceTech, "getPriceTech");
        this.PriceTechSecond = parseFloat(
          (data.getPriceTech / 3600).toFixed(5)
        );
      });
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
                this.toastr.success("", "Prix affecté");
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
