import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.scss"],
})
export class AddLocationComponent implements OnInit {
  locationInput;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private dialogReflocation: NbDialogRef<AddLocationComponent>
  ) {}

  ngOnInit(): void {
    console.log("Location");
  }

  addLocation() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.addLocation(this.locationInput),
      })
      .subscribe(({ data }) => {
        console.log(data, "added");
        this.dialogReflocation.close();
        console.log("working");
      });
  }
}
