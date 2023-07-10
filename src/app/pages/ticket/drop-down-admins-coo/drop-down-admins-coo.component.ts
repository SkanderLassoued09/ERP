import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-drop-down-admins-coo",
  templateUrl: "./drop-down-admins-coo.component.html",
  styleUrls: ["./drop-down-admins-coo.component.scss"],
})
export class DropDownAdminsCooComponent implements OnInit {
  @Input() rowData: any;
  listOfAdmins: any;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.getAllAdmins();
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
        }
      });
  }
}
