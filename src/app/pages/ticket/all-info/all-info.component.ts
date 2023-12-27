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
  bc: string | ArrayBuffer;
  url: string | ArrayBuffer;
  devis: string | ArrayBuffer;
  bl: string | ArrayBuffer;
  facturePdf: string | ArrayBuffer;
  urlBc: string | ArrayBuffer;
  urlDevis: string | ArrayBuffer;
  urlBl: string | ArrayBuffer;
  urlFacture: string | ArrayBuffer;
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
    console.log("all data", this.allData);
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
          console.log("🥠[this.ticket ]:", this.ticket);
        }
      });
  }

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

  onSelectFile(pdf: any) {
    console.log("🥓", this.ticket);
    console.log(pdf, "bc");
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event onload");
        this.bc = reader.result;
        console.log("🥟[ this.bc ]:", this.bc);
        this.urlBc = (<FileReader>event.target).result;
        console.log("🍛[ this.urlBc]:", this.urlBc);
      };
    }
    console.log(this.ticket, "bc");
  }

  uploadBc() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateBc(this.ticket._id, this.urlBc),
      })
      .subscribe(({ data, loading }) => {
        if (data) {
          this.toastr.success("", "Succé");
        }
        if (loading) {
          this.toastr.warning("File uploading...", "Loading");
        }
      });
  }

  onSelectFileDevis(pdf: any) {
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event devis");
        this.devis = reader.result;
        this.urlDevis = (<FileReader>event.target).result;
        console.log("🍰[ this.urlDevis ]:", this.urlDevis);
      };

      /**
       * this.source = new ServerDataSource(http,
  {
 endPoint: 'full-url-for-endpoint', 
 dataKey: 'your-list-path-from-response' for example 'data.records' , 
 pagerPageKey: 'your backend param excpected for page number key', 
 pagerLimitKey: 'your backend param excpected for page size',
 totalKey: total records returned in response path for example 'data.total',
 filterFieldKey: your filter keys template should set to '#field#' if you need to send params as you set, Default is '#field#_like'
  });`
       */
    }

    console.log(this.devis, "devis");
    console.log(this.devis, "devis");
    console.log(this.devis, "devis");
  }

  uploadDevis() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateDevis(
          this.ticket._id,
          this.urlDevis
        ),
      })
      .subscribe(({ data }) => {
        console.log("🍞[data]:", data);
      });
  }

  uploadFacture() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateFacture(
          this.ticket._id,
          this.urlFacture
        ),
      })
      .subscribe(({ data }) => {
        console.log("🍞[data]:", data);
      });

    console.log(this.urlFacture, "bl");
  }

  uploadBl() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateBl(this.ticket._id, this.urlBl),
      })
      .subscribe(({ data }) => {
        console.log("🍞[data]:", data);
      });

    console.log(this.url, "bl");
  }

  onSelectFileBl(pdf: any) {
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event bl");
        this.bl = reader.result;
        this.urlBl = (<FileReader>event.target).result;
      };
    }
  }

  onSelectFileFacture(pdf: any) {
    // console.log(pdf, "facture");
    const file = pdf.target.files && pdf.target.files[0];
    // console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        // console.log(event, "event facture");
        this.facturePdf = reader.result;
        this.urlFacture = (<FileReader>event.target).result;
        console.log("🥑", this.facturePdf);
        console.log("🍝", this.url);
      };
    }

    console.log(this.facturePdf, "facture");
  }
}
