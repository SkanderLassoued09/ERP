import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-add-price-tech",
  templateUrl: "./add-price-tech.component.html",
  styleUrls: ["./add-price-tech.component.scss"],
})
export class AddPriceTechComponent implements OnInit {
  TarifInput: number;
  ThePriceTech: LocalDataSource;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private dialogRefPriceTech: NbDialogRef<AddPriceTechComponent>
  ) {}

  ngOnInit(): void {
    this.getPriceTech();
  }

  getPriceTech() {
    this.apollo
      .query<any>({
        query: this.ticketService.getPriceTech(),
      })
      .subscribe(({ data }) => {
        this.ThePriceTech = data.getPriceTech;
        console.log("QUERY getPriceTech =>", data.getPriceTech);
      });
  }

  updatePriceTech() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updatePriceTech(this.TarifInput),
      })
      .subscribe(({ data }) => {
        console.log(data, "TarifInput has been changed");
        this.dialogRefPriceTech.close();
        console.log("working");
      });
  }
}
