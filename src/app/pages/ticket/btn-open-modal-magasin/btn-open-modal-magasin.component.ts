import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { TicketMagasinListComponent } from "../ticket-magasin-list/ticket-magasin-list.component";

@Component({
  selector: "ngx-btn-open-modal-magasin",
  templateUrl: "./btn-open-modal-magasin.component.html",
  styleUrls: ["./btn-open-modal-magasin.component.scss"],
})
export class BtnOpenModalMagasinComponent implements OnInit {
  @Input() rowData: any;
  disableAffectationBtn: boolean;

  constructor(
    private ngDialog: NbDialogService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "this row data");
    this.isDisableAffectationBtn();
  }
  openModalMagasin() {
    let modal = this.ngDialog.open(TicketMagasinListComponent);
    modal.componentRef.instance.dataTicketSelected = this.rowData;
    modal.onClose.subscribe((el) => {
      console.log(el, "comes from");
      this.disableAffectationBtn = el;
      this.cdRef.detectChanges();
    });
  }

  isDisableAffectationBtn() {
    let arrComposant = this.rowData.composants;
    this.disableAffectationBtn = arrComposant.every(
      (el) => el.isAffected === true
    );
    console.log(this.disableAffectationBtn, "after checking all array");
  }
}
