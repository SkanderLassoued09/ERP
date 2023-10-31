import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: "ngx-all-info",
  templateUrl: "./all-info.component.html",
  styleUrls: ["./all-info.component.scss"],
})
export class AllInfoComponent implements OnInit {
  @ViewChild("content") content: ElementRef;
  allData;
  totalPrix: number;
  constructor() {}

  ngOnInit(): void {
    console.log("all data", this.allData);
    this.calculateTotalPrixTotale();
  }

  calculateTotalPrixTotale() {
    let totalPrixTotale = 0;
    for (let c of this.allData.composants) {
      totalPrixTotale += c.quantity * c.sellPrice;
    }
    this.totalPrix = totalPrixTotale;
  }

  print() {
    const pdf = new jsPDF();

    // Get the native element of the content
    const content = this.content.nativeElement;

    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Calculate PDF page height and width based on the content's dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add the captured image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Save or display the PDF
      pdf.save("page.pdf");
    });
  }
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
// }
