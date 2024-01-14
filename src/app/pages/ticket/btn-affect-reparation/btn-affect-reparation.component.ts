import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-btn-affect-reparation",
  templateUrl: "./btn-affect-reparation.component.html",
  styleUrls: ["./btn-affect-reparation.component.scss"],
})
export class BtnAffectReparationComponent implements OnInit {
  @Input() rowData: any;
  closeBtn: boolean;
  listOfTech: any;
  techName: any;
  isDisable: boolean;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private cdr: ChangeDetectorRef,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    // console.log(this.rowData, "fix reparation coordinator");
    this.getAllTech();
    this.handleBtn();
    this.toHandleSelect();
  }

  openToRepatation() {}

  getAllTech() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTech(),
      })
      .subscribe(({ data }) => {
        // console.log(data);
        this.listOfTech = data.getAllTech;
      });
  }

  affectTicketToTech(techSelected) {
    if (techSelected) {
      this.nbDialog
        .open(ConfirmationModalComponent)
        .onClose.subscribe((data) => {
          if (data) {
            this.apollo
              .mutate<any>({
                mutation: this.ticketService.setTicketReparable(
                  this.rowData._id,
                  techSelected
                ),
              })
              .subscribe(({ data }) => {
                if (data) {
                  // console.log(data, "data");
                  this.toastr.success("", "Reparation opened");
                  this.closeBtn = true;
                  this.cdr.detectChanges();
                }
              });
          } else {
            this.toastr.info("", "Vous avez ignoré le processus");
          }
        });
    }
  }

  handleBtn() {
    console.log(
      "🧀[ this.rowData.assignedToRep ]:",
      this.rowData.assignedToRep
    );
    console.log("🍷[    this.rowData.finalPrice ]:", this.rowData.finalPrice);
    if (
      (this.rowData.finalPrice !== null &&
        this.rowData.assignedToRep === null) ||
      this.rowData.assignedToRep === undefined
    ) {
      this.closeBtn = false;
    } else {
      this.closeBtn = true;
    }
  }

  toHandleSelect() {
    // console.log(this.rowData.assignedTo, "error was here");

    if (!this.rowData.isFinalPriceAffected) {
      // !TODO close reperation
      this.techName = this.rowData.assignedToRep;
      this.isDisable = true;
      this.cdr.detectChanges();
    } else {
      this.isDisable = this.rowData.toMagasin;
      this.cdr.detectChanges();
    }
    this.cdr.detectChanges();
  }
}
