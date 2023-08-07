import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalReparationComponent } from "../modal-reparation/modal-reparation.component";

@Component({
  selector: "ngx-btn-reparation",
  templateUrl: "./btn-reparation.component.html",
  styleUrls: ["./btn-reparation.component.scss"],
})
export class BtnReparationComponent implements OnInit {
  @Input() rowData;
  disableBtn: boolean;
  constructor(
    private dialogService: NbDialogService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "fix reparation btn");
    this.handleBtn();
  }
  openModal() {
    const modal = this.dialogService.open(ModalReparationComponent, {
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
    modal.componentRef.instance.rowData = this.rowData;
    modal.onClose.subscribe((el) => {
      console.log("hello", el);
      this.disableBtn = el;
      this.cdr.detectChanges();
    });
  }

  handleBtn() {
    if (
      this.rowData.isReparationFinishedByTech === false &&
      this.rowData.isReparable === true
    ) {
      this.disableBtn = false;
    } else {
      this.disableBtn = true;
    }
  }
}
