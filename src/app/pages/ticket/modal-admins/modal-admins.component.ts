import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";

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

  arr = [
    { name: "test", value: 1 },
    { name: "test", value: 1 },

    { name: "test", value: 1 },

    { name: "test", value: 1 },

    { name: "test", value: 1 },

    { name: "test", value: 1 },
    { name: "test", value: 1 },
  ];

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData);
  }
  say() {
    console.log("hello");
  }

  submitTicket() {
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
          this.toastr.success("", "Prix finale affécté");
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
