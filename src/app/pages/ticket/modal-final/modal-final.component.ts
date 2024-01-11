import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "ngx-modal-final",
  templateUrl: "./modal-final.component.html",
  styleUrls: ["./modal-final.component.scss"],
})
export class ModalFinalComponent implements OnInit {
  rowData;

  managerForm = new FormGroup({
    remise: new FormControl(null),
    statusFinal: new FormControl(false),
    bc: new FormControl(null),
    bl: new FormControl(null),
    facture: new FormControl(null),
    devis: new FormControl(null),
    updatePrice: new FormControl(null),
  });
  stautsToggle: boolean;
  finalPrice: string;
  discount: number;
  pdfStr: string | ArrayBuffer;
  url: string | ArrayBuffer;
  devis: string | ArrayBuffer;
  bl: string | ArrayBuffer;
  facturePdf: string | ArrayBuffer;
  valueSlider: number;
  role: string;
  newPrice;
  currentRole: string;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private refDialog: NbDialogRef<ModalFinalComponent>,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "hello");
    this.role = localStorage.getItem("role");
    console.log(this.role, "signed in");
    console.log(this.rowData, "row data from final modal");
    this.getFinalPrice();
    this.currentRole = localStorage.getItem("role");
  }

  caculateDiscount(price: string, percent: string) {
    let discount = (+percent / 100) * +price;
    let final = +price - discount;
    this.discount = discount;
    return { finalPrice: final.toString(), discount };
  }
  getFinalPrice(): Observable<any> {
    const fpSubject = new Subject<any>();

    console.log("🍊[getFinalPrice]:");

    this.managerForm.valueChanges.subscribe((el) => {
      console.log(el.remise, "el");
      console.log("🍹 this.rowData.finalPrice,", this.rowData.finalPrice);
      this.valueSlider = el.remise;

      console.log("🍏[ this.valueSlider]:", this.valueSlider);

      const fp = this.caculateDiscount(
        this.rowData.finalPrice,
        this.valueSlider ? this.valueSlider.toString() : "0"
      ).discount;
      console.log("🍻 finalPrice ------------", fp);

      fpSubject.next(fp);
    });

    return fpSubject.asObservable();
  }

  affectationFinalPrice() {
    let discount = this.caculateDiscount(
      this.rowData.finalPrice,
      this.valueSlider ? this.valueSlider.toString() : "0"
    ).discount;
    console.log("🥜 discount", this.valueSlider);

    this.nbDialog.open(ConfirmationModalComponent).onClose.subscribe((el) => {
      if (el) {
        this.apollo
          .mutate<any>({
            mutation: this.ticketService.affectationFinalPrice(
              this.rowData._id,
              discount.toString()
            ),
          })
          .subscribe(({ data }) => {
            console.log(data, "update prix");
            if (data) {
              this.changeFlag();
              this.refDialog.close(true);
            }
          });
      }
    });
  }

  changeFlag() {
    this.apollo
      .mutate<any>({
        mutation:
          this.ticketService.switchFalgsToHandleBtnAffectationPriceForbothRoleAdminManagerAndManger(
            this.rowData._id,
            this.currentRole
          ),
      })
      .subscribe(({ data }) => {
        console.log("🍝[data change flags]:", data);
      });
  }

  toAdminManager() {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: "Voulez-vous envoyer à Naim",
      })
      .onClose.subscribe((el) => {
        if (el) {
          //to open slide to admin tech
          //to open slide to admin manager
          this.apollo
            .mutate<any>({
              mutation:
                this.ticketService.setFinalPriceAvaiblableToAdminManager(
                  this.rowData._id
                ),
            })
            .subscribe(({ data }) => {
              console.log(data, "sent to admin manager");
            });
        }
      });
  }

  formatLabel(value: number): string {
    return `${value}%`;
  }

  statusToggle(status: boolean) {
    console.log(status, "toggle status");
    this.stautsToggle = status;
  }
}
