import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-modal-add-issue",
  templateUrl: "./modal-add-issue.component.html",
  styleUrls: ["./modal-add-issue.component.scss"],
})
export class ModalAddIssueComponent implements OnInit {
  panneInput: string;
  listofIssue: LocalDataSource;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private dialogRef: NbDialogRef<ModalAddIssueComponent>
  ) {}

  ngOnInit(): void {
    this.getIssue();
  }

  getIssue() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllIssues(),
      })
      .subscribe(({ data }) => {
        this.listofIssue = data.getAllIssue;
        console.log("issue =>", data.getAllIssue);
      });
  }

  deleteIssue(issueId: string) {
    this.apollo
      .mutate<boolean>({
        mutation: this.ticketService.deletIssue(issueId),
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log(data, "issue deleted ");
          this.dialogRef.close();
        }
      });
  }
  addIssue() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.addIssue(this.panneInput),
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log(data, "issue added ");
          this.dialogRef.close();
        }
      });
  }
}
