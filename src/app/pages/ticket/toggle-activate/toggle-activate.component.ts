import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-toggle-activate",
  templateUrl: "./toggle-activate.component.html",
  styleUrls: ["./toggle-activate.component.scss"],
})
export class ToggleActivateComponent implements OnInit {
  @Input() rowData;
  status: any;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "ROWWWWWWWWWWW");
    this.status = this.rowData.isOpenByTech;
  }

  statusToggleActivate(toggle: boolean) {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: { data: "êtes-vous sûr de reouvrir cette ticket" },
      })
      .onClose.subscribe((cl) => {
        if (cl) {
          console.log(toggle, "statusToggleActivate");
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.reopenDiag(this.rowData._id),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.toastr.success(
                  "",
                  "La fenêtre modale a été ouverte avec succès",
                  { duration: 5 }
                );
              }
            });
        } else {
          this.toastr.danger("", "Annulé");
        }

        this.status = cl;
      });
  }
}
