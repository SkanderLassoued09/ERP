import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-btn-affect-reparation",
  templateUrl: "./btn-affect-reparation.component.html",
  styleUrls: ["./btn-affect-reparation.component.scss"],
})
export class BtnAffectReparationComponent implements OnInit {
  @Input() rowData: any;
  closeBtn: boolean;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "cc");
    this.handleBtn();
  }

  openToRepatation() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.setTicketReparable(this.rowData._id),
      })
      .subscribe(({ data }) => {
        console.log(data, "data");
        this.toastr.success("", "Reparation opened");
      });
  }

  handleBtn() {
    if (this.rowData.finalPrice === null) {
      this.closeBtn = true;
    } else {
      this.closeBtn = false;
    }
  }
}
