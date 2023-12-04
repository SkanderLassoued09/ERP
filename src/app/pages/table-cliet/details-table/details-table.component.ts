import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TableClientService } from "../table-client.service";
import { Apollo } from "apollo-angular";

@Component({
  selector: "ngx-details-table",
  templateUrl: "./details-table.component.html",
  styleUrls: ["./details-table.component.scss"],
})
export class DetailsTableComponent implements OnInit {
  detailsCompany;
  filterData: any;
  updateValue: string = "";

  selectedItem: { [field: string]: boolean } = {};
  selectedItemSave: { [field: string]: boolean } = {};
  constructor(
    private tableClientService: TableClientService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    console.log(this.detailsCompany, "detailsCompany");
  }

  /**
   *
   * tO LEARN THIS PART
   */

  changeToggle(field: string) {
    console.log("edit is fired");
    console.log(field, "selected field");

    // Ensure that the property exists in selectedItemSave
    if (!this.selectedItemSave.hasOwnProperty(field)) {
      this.selectedItemSave[field] = false; // Initialize to a default value
    }

    this.selectedItem[field] = !this.selectedItem[field];
    this.selectedItemSave[field] = !this.selectedItemSave[field];
    console.log(
      this.selectedItem[field],
      "this.selectedItem[field] from edit , yes its hidden"
    );
  }

  send(field: string, name: string) {
    console.log(this.updateValue, "i send");
    console.log(name, "this obj---------");
    console.log("send is fired", field);

    // Ensure that the property exists in selectedItem
    if (!this.selectedItem.hasOwnProperty(field)) {
      this.selectedItem[field] = false; // Initialize to a default value
    }

    this.selectedItem[field] = !this.selectedItem[field];
    this.selectedItemSave[field] = !this.selectedItemSave[field];

    console.log(
      this.selectedItemSave[field],
      "this.selectedItemSave[field] in send "
    );

    this.apollo
      .mutate<any>({
        mutation: this.tableClientService.updateField(
          this.detailsCompany._id,
          name,
          this.updateValue
        ),
      })
      .subscribe(({ data }) => {
        console.log(data);
      });

    this.updateValue = "";
  }
}
