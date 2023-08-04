import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalTicketComponent } from "../modal-ticket/modal-ticket.component";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-btn-open-ticket-modal",
  templateUrl: "./btn-open-ticket-modal.component.html",
  styleUrls: ["./btn-open-ticket-modal.component.scss"],
})
export class BtnOpenTicketModalComponent implements OnInit {
  @Input() rowData: any;
  toClose: boolean = false;
  constructor(
    private dialogService: NbDialogService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "to fix diagnostique ==> fixed");
    this.handlebtnDiag();
  }

  handlebtnDiag() {
    // this.toClose = this.rowData.isOpenByTech;
    if (this.rowData.isReadyForDiag && this.rowData.isOpenByTech === false) {
      this.toClose = false;
    } else {
      this.toClose = true;
    }
  }

  openModal() {
    const modal = this.dialogService.open(ModalTicketComponent, {
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
    modal.componentRef.instance.ticketId = this.rowData._id;
    modal.onClose.subscribe((data) => {
      console.log(data, "showed in button to disable");
      this.toClose = data;
      this.cdRef.detectChanges();
    });
    modal.componentRef.instance.rowData = this.rowData;
  }
}
