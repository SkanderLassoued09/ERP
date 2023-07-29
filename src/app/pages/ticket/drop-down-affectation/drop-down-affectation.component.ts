import { Component, Input, OnInit } from "@angular/core";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { NbToastrService } from "@nebular/theme";
import { ShareDataService } from "../../../share-data.service";

@Component({
  selector: "ngx-drop-down-affectation",
  templateUrl: "./drop-down-affectation.component.html",
  styleUrls: ["./drop-down-affectation.component.scss"],
})
export class DropDownAffectationComponent implements OnInit {
  @Input() rowData: any;
  listOfTech: any;
  selectedTechReadyToAffect: any;
  techName: any;
  isDisable: boolean;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private shareData: ShareDataService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "rowDatra");
    this.getAllTech();
    this.toHandleSelect();
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
    this.shareData.updateDataForCoordinator({
      _id: this.rowData._id,
      statusBtn: false,
    });
  }

  toHandleSelect() {
    console.log(this.rowData.assignedTo, "error was here");
    // console.log(this.rowData.assignedTo.length, "in toHandleSelect");
    // if (this.rowData.toMagasin) {
    if (this.rowData.assignedTo.length > 0) {
      this.techName = this.rowData.assignedTo;
      this.isDisable = true;
    } else {
      this.isDisable = this.rowData.toMagasin;
    }
    // }
  }
}