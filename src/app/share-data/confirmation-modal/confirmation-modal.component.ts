import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef, NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-confirmation-modal",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.scss"],
})
export class ConfirmationModalComponent implements OnInit {
  @Input() data: any;
  constructor(private ref: NbDialogRef<ConfirmationModalComponent>) {}

  ngOnInit(): void {
    console.log(this.data, "from input");
  }

  confirm() {
    this.ref.close(true);
  }
  ignore() {
    this.ref.close(false);
  }
}
