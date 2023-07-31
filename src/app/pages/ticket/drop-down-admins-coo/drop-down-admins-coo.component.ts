import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";
import { ShareDataService } from "../../../share-data.service";

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
    private shareData: ShareDataService
  ) {}

  ngOnInit(): void {
    console.log("row", this.rowData);
    this.getAllAdmins();
    this.handleBtn();
  }

  affectTicketToAdmin(selectedAdmin) {
    console.log(selectedAdmin, "admin");
  }

  getAllAdmins() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllAdmins(),
      })
      .subscribe(({ data }) => {
        console.log(data, "data");
        this.listOfAdmins = data.getAllAdmins;
      });
  }

  valider() {
    console.log(this.rowData._id, "_id in btn");
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
  // etat initial
  handleBtn() {
    console.log("vvvvvvvvvvvvvvvvvvvvvv", this.rowData.coordinatorToAdmin);
    // if magasin finishs his job open btn
    // if (this.rowData.coordinatorToAdmin) {
    //   this.disableBtnAffectToAdmin = true;
    //   this.cdr.detectChanges();
    // }
    // // else {
    // //   this.disableBtnAffectToAdmin = false;
    // //   this.cdr.detectChanges();
    // // }
    // if (this.rowData.magasinDone) {
    //   this.disableBtnAffectToAdmin = false;
    //   this.cdr.detectChanges();
    // } else {
    //   this.disableBtnAffectToAdmin = true;
    //   this.cdr.detectChanges();
    // }

    // if (
    //   !this.rowData.coordinatorToAdmin &&
    //   !this.rowData.magasinDone &&
    //   this.rowData.assignedTo === null
    // ) {
    //   this.disableBtnAffectToAdmin = true;
    // } else {
    //   this.disableBtnAffectToAdmin = false;
    // }
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
    this.shareData.configCoordinator$.subscribe((data) => {
      console.log(data, "$subs");

      if (data) {
        if (data._id === this.rowData._id) {
          this.disableBtnAffectToAdmin = !data.statusBtn;
          this.cdr.detectChanges();
        }
        console.log(this.disableBtnAffectToAdmin, "HEY");
      }
    });
  }
}
