import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.scss"],
})
export class AddLocationComponent implements OnInit {
  locationInput: string;
  listofLocation: LocalDataSource;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private dialogReflocation: NbDialogRef<AddLocationComponent>
  ) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.apollo
      .query<any>({
        query: this.ticketService.getLocation(),
      })
      .subscribe(({ data }) => {
        this.listofLocation = data.getAllLocations;
        console.log("loc =>", data.getAllLocations);
      });
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
  removelocation(_id: string) {
    this.apollo
      .mutate<boolean>({
        mutation: this.ticketService.removeLocation(_id),
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log(data, "location deleted ");
          this.dialogReflocation.close();
        }
      });
  }
}
