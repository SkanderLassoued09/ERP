import { Component, Input, OnInit } from "@angular/core";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-drop-down-affectation",
  templateUrl: "./drop-down-affectation.component.html",
  styleUrls: ["./drop-down-affectation.component.scss"],
})
export class DropDownAffectationComponent implements OnInit {
  @Input() rowData: any;
  listOfTech: any;
  selectedTechReadyToAffect: any;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "rowDatra");
    this.getAllTech();
  }

  getAllTech() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTech(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.listOfTech = data.getAllTech;
      });
  }

  affectTicketToTech(techSelected) {
    let payload = {
      _id: this.rowData._id,
      sentTo: techSelected,
    };
    this.ticketService.coordinatorSendTicketToTech(payload);
  }
}
