import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-modal-add-issue",
  templateUrl: "./modal-add-issue.component.html",
  styleUrls: ["./modal-add-issue.component.scss"],
})
export class ModalAddIssueComponent implements OnInit {
  isToEdit: boolean = false;
  panneInput: string;
  updatedIssue;
  issues = [
    { _id: 0, issue: "Moteur" },
    { _id: 1, issue: "Condo" },
    { _id: 2, issue: "Bobine" },
    { _id: 3, issue: "Résistance" },
    { _id: 4, issue: "Termostat" },
  ];
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private dialogRef: NbDialogRef<ModalAddIssueComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.updatedIssue, "updatedIssue");
  }

  updateIssue(_id) {
    console.log(_id, "gonna be updated");
    this.isToEdit = !status;
  }
  deleteIssue(_id) {
    console.log(_id, "gonna be deleted");
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
