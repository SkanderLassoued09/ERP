import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalFinalComponent } from "../modal-final/modal-final.component";

@Component({
  selector: "ngx-btn-final",
  templateUrl: "./btn-final.component.html",
  styleUrls: ["./btn-final.component.scss"],
})
export class BtnFinalComponent implements OnInit {
  @Input() rowData;
  isModalColsedFinished: any;
  constructor(
    private nbDialog: NbDialogService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "this is row data");
    this.handleBtn();
  }

  openModal() {
    let modal = this.nbDialog.open(ModalFinalComponent, {
      closeOnEsc: true,
      closeOnBackdropClick: true,
    });
    modal.componentRef.instance.rowData = this.rowData;
    modal.onClose.subscribe((res) => {
      console.log(res, "res");
      this.isModalColsedFinished = res;
      this.cdRef.detectChanges();
    });
  }

  handleBtn() {
    console.log("🍋", this.rowData.finalPrice);
    if (this.rowData.finalPrice) {
      this.isModalColsedFinished = true;
      this.cdRef.detectChanges();
    } else {
      this.isModalColsedFinished = false;
      this.cdRef.detectChanges();
    }
  }
}
