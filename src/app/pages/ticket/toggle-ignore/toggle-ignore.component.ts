import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-toggle-ignore",
  templateUrl: "./toggle-ignore.component.html",
  styleUrls: ["./toggle-ignore.component.scss"],
})
export class ToggleIgnoreComponent implements OnInit {
  @Input() rowData;
  status: any;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.setToggle();
  }

  statusToggleIgnored(isIgnored: boolean) {
    this.nbDialog
      .open(ConfirmationModalComponent, { context: "Hello" })
      .onClose.subscribe((resultat) => {
        if (resultat) {
          console.log(isIgnored, "isIgnored");
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.isReturnTicket(
                this.rowData._id,
                isIgnored
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.toastr.danger("", "Retour de ticket");
              }
            });
        }
      });
  }

  setToggle() {
    if (this.rowData.status === "RETURN") {
      this.status = true;
    }
  }
}
