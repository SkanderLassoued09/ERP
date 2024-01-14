import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { NbButtonModule, NbCardModule } from "@nebular/theme";

@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [CommonModule, NbCardModule, NbButtonModule],
})
export class ShareDataModule {}
