import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ActivatedRoute } from "@angular/router";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { NbToastrService } from "@nebular/theme";
import { URL } from "../../../URLs";

@Component({
  selector: "ngx-all-info",
  templateUrl: "./all-info.component.html",
  styleUrls: ["./all-info.component.scss"],
})
export class AllInfoComponent implements OnInit {
  @ViewChild("printPDF", { read: ElementRef }) printPDF: ElementRef;
  allData;
  ticketId: string;
  ticket: any;
  urlHost: any;
  imageUrl: string;
  // totalPrix: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private apollo: Apollo,
    private toastr: NbToastrService
  ) {
    this.imageUrl = URL.SOCKET;
  }

  ngOnInit(): void {
    // console.log("all data", this.allData);
    // this.calculateTotalPrixTotale();
    this.urlHost = URL.SOCKET;
    console.log(this.urlHost, "gggggg");
    this.ticketId = this.activatedRoute.snapshot.paramMap.get("idTicket")
      ? this.activatedRoute.snapshot.paramMap.get("idTicket")
      : this.allData._id;

    console.log(this.ticketId, "id");

    this.getTicketById();
    this.toastr.info(
      "Pour télécharger cette page en pdf appuyer sur la lettre [p]",
      "Telecharger PDF",
      { duration: 0 }
    );
  }

  getTicketById() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.getTicketById(this.ticketId),
      })
      .subscribe(({ data }) => {
        console.log(data, "data");
        if (data) {
          this.ticket = data.getTicketById;
        }
      });
  }
  // calculateTotalPrixTotale() {
  //   let totalPrixTotale = 0;
  //   for (let c of this.allData.composants) {
  //     totalPrixTotale += c.quantity * c.sellPrice;
  //   }
  //   this.totalPrix = totalPrixTotale;
  // }

  @HostListener("document:keydown.p", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.print();
  }

  print() {
    const el = this.printPDF.nativeElement;
    console.log(el, "el");
    const doc = new jsPDF("p", "pt");
    doc.setProperties({ title: "Ticket" });
    doc.html(el, {
      html2canvas: {
        scale: 0.5,
        x: 7,
      },
      callback: (pdf) => {
        pdf.output("dataurlnewwindow");
        pdf.save("ticket");
      },
    });
  }

  // calculateTotalTemps() {
  //   let tempsTotal;
  //   console.log(
  //     typeof this.allData.reparationTimeByTech,
  //     "this.allData.reparationTimeByTech"
  //   );

  //   let diagTime = moment(this.allData.diagnosticTimeByTech).format("HH:mm:ss");
  //   let repairTime = moment(this.allData.reparationTimeByTech).format(
  //     "HH:mm:ss"
  //   );
  //   let x = new Date(diagTime);
  //   console.log("value of x ", x);
  //   console.log(repairTime, "repairTime");
  //   console.log(typeof diagTime, "diagTime");

  //   tempsTotal = repairTime + diagTime;

  //   return tempsTotal;
}
