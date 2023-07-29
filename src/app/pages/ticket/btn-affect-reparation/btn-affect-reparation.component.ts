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
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {}

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
}
