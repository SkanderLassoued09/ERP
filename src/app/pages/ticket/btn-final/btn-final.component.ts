import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalFinalComponent } from "../modal-final/modal-final.component";
import { ROLE } from "../../../roles";

@Component({
  selector: "ngx-btn-final",
  templateUrl: "./btn-final.component.html",
  styleUrls: ["./btn-final.component.scss"],
})
export class BtnFinalComponent implements OnInit {
  @Input() rowData;
  isModalColsedFinished: any;
  currentRole: string;
  constructor(
    private nbDialog: NbDialogService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentRole = localStorage.getItem("role");
    console.log("🍲[currentRole]:", this.currentRole);
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
    if (this.currentRole === ROLE.MANAGER) {
      if (
        this.rowData.finalPrice &&
        this.rowData.finalPriceToAdminTech &&
        this.rowData.finalPriceToAdminManager === false
      ) {
        // finalPriceToAdminTech act like administrator;
        this.isModalColsedFinished = false;
        this.cdRef.detectChanges();
      } else {
        this.isModalColsedFinished = true;
        this.cdRef.detectChanges();
      }
    }

    if (this.currentRole === ROLE.ADMIN_MANAGER) {
      console.log("🥤", this.rowData.finalPriceToAdminManager);
      if (this.rowData.finalPriceToAdminManager) {
        // finalPriceToAdminTech act like administrator;
        this.isModalColsedFinished = false;
        this.cdRef.detectChanges();
      } else {
        this.isModalColsedFinished = true;
        this.cdRef.detectChanges();
      }
    }
  }
}
