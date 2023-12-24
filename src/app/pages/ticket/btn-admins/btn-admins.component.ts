import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalAdminsComponent } from "../modal-admins/modal-admins.component";

@Component({
  selector: "ngx-btn-admins",
  templateUrl: "./btn-admins.component.html",
  styleUrls: ["./btn-admins.component.scss"],
})
export class BtnAdminsComponent implements OnInit {
  @Input() rowData;
  btnStatus: any;
  constructor(
    private nbDialog: NbDialogService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // console.log(this.rowData, "row");
    this.handleBtn();
  }
  openModalAdmins() {
    let modal = this.nbDialog.open(ModalAdminsComponent, {
      closeOnEsc: true,
      closeOnBackdropClick: true,
    });
    modal.componentRef.instance.rowData = this.rowData;
    modal.onClose.subscribe((el) => {
      this.btnStatus = el;
      this.cdr.detectChanges();
    });
  }

  // handleBtn() {
  //   if (this.rowData.coordinatorToAdmin) {
  //     this.btnStatus = false;
  //   } else {
  //     this.btnStatus = true;
  //   }
  // }

  handleBtn() {
    if (this.rowData.coordinatorToAdmin && this.rowData.price === null) {
      this.btnStatus = false;
    } else {
      this.btnStatus = true;
    }
  }
}
