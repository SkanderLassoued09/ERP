import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";

@Component({
  selector: "ngx-field-details",
  templateUrl: "./field-details.component.html",
  styleUrls: ["./field-details.component.scss"],
})
export class FieldDetailsComponent implements OnInit {
  // listOfClient: LocalDataSource;

  constructor(
    private apollo: Apollo,
    private clientService: TableClientService
  ) {}

  ngOnInit(): void {}

  Close() {
    console.log("close btn works");
  }

  // getClientCompany() {
  //   this.apollo
  //     .query<any>({
  //       query: this.clientService.getClient(),
  //     })
  //     .subscribe(({ data }) => {
  //       console.log(data);
  //       this.listOfClient = new LocalDataSource(data.getAllClient);
  //     });
  // }
}
