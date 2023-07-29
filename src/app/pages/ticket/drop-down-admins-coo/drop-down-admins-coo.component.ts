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
        console.log(data);
        if (data) {
          this.toastr.success("", "Ticket available for admins");
          // this.disableBtnAffectToAdmin = true;
          // this.cdr.detectChanges();
        }
      });
  }

  // toHandleSelect() {
  //   console.log(this.rowData.assignedTo, "error was here");
  //   // console.log(this.rowData.assignedTo.length, "in toHandleSelect");
  //   if (this.rowData.assignedTo) {
  //     if (this.rowData.assignedTo.length > 0) {
  //       this.techName = this.rowData.assignedTo;
  //       this.isDisable = true;
  //     } else {
  //       this.isDisable = false;
  //     }
  //   }
  // }

  handleBtn() {
    this.shareData.configCoordinator$.subscribe((data) => {
      if (data === null) {
        console.log("condion works");

        this.disableBtnAffectToAdmin = this.rowData.magasinDone;
      } else {
        if (data._id === this.rowData._id) {
          console.log(data, "in serv");
          this.disableBtnAffectToAdmin = data.statusBtn;
          this.cdr.detectChanges();
        }
      }
    });

    // if magasin finishs his job open btn
    if (this.rowData.magasinDone) {
      this.disableBtnAffectToAdmin = false;
    } else {
      this.disableBtnAffectToAdmin = true;
    }
    // this.disableBtnAffectToAdmin = this.rowData.magasinDone;

    this.cdr.detectChanges();
    console.log(this.disableBtnAffectToAdmin, "final");
  }
}
