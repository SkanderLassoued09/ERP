import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ShareDataService } from "../../../share-data.service";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

@Component({
  selector: "ngx-drop-down-admins-coo",
  templateUrl: "./drop-down-admins-coo.component.html",
  styleUrls: ["./drop-down-admins-coo.component.scss"],
})
export class DropDownAdminsCooComponent implements OnInit {
  @Input() rowData: any;
  listOfAdmins: any;
  disableBtnAffectToAdmin: boolean;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private cdr: ChangeDetectorRef,
    private shareData: ShareDataService,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getAllAdmins();
    this.handleBtn();
  }

  affectTicketToAdmin(selectedAdmin) {}

  getAllAdmins() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllAdmins(),
      })
      .subscribe(({ data }) => {
        this.listOfAdmins = data.getAllAdmins;
      });
  }

  valider() {
    this.nbDialog
      .open(ConfirmationModalComponent, { context: "Voulez-vous confirmer ?" })
      .onClose.subscribe((result) => {
        if (result) {
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.makeTicketAvailableForAdmin(
                this.rowData._id
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.toastr.success("", "Ticket available for admins");
                this.disableBtnAffectToAdmin = true;
                this.cdr.detectChanges();
              }
            });
        }
      });
  }
  // etat initial
  handleBtn() {
    if (
      this.rowData.assignedTo === null &&
      this.rowData.magasinDone &&
      this.rowData.coordinatorToAdmin
    ) {
      this.disableBtnAffectToAdmin = true;
    }

    if (this.rowData.magasinDone) {
      this.disableBtnAffectToAdmin = false;
    } else {
      this.disableBtnAffectToAdmin = true;
    }

    if (this.rowData.coordinatorToAdmin) {
      this.disableBtnAffectToAdmin = true;
    }
    this.cdr.detectChanges();

    // to check later
    this.shareData.configCoordinator$.subscribe((data) => {
      console.log(data, "toAdmins");
      if (data) {
        if (data._id === this.rowData._id) {
          this.disableBtnAffectToAdmin = data.statusBtn;
          this.cdr.detectChanges();
        }
      }
    });
  }
}
