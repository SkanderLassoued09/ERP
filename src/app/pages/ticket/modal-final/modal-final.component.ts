import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

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
    this.test();
  }

  caculateDiscount(price: string, percent: string) {
    let discount = (+percent / 100) * +price;
    let final = +price - discount;
    this.discount = discount;
    return { finalPrice: final.toString(), discount };
  }

  affectationFinalPrice() {
    console.log(this.finalPrice, "final");
    this.nbDialog.open(ConfirmationModalComponent).onClose.subscribe((el) => {
      if (el) {
        this.apollo
          .mutate<any>({
            mutation: this.ticketService.affectationFinalPrice(
              this.rowData._id,
              this.managerForm.get("updatePrice").value
            ),
          })
          .subscribe(({ data }) => {
            console.log(data, "update prix");
            if (data) {
              this.refDialog.close(true);
            }
          });
      }
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

  test() {
    this.managerForm.valueChanges.subscribe((el) => {
      console.log(el.remise, "el");
      this.valueSlider = el.remise;
      this.finalPrice = this.caculateDiscount(
        this.rowData.finalPrice,
        el.remise
      ).finalPrice;
      console.log(this.finalPrice, " this.finalPrice");
    });
  }

  formatLabel(value: number): string {
    return `${value}%`;
  }

  submitManager() {
    this.nbDialog
      .open(ConfirmationModalComponent, {
        context: {
          data: "êtes-vous sûr d'affecter le prix",
        },
      })
      .onClose.subscribe((result) => {
        if (result) {
          this.apollo
            .mutate<any>({
              mutation: this.ticketService.updateTicketManager(
                this.rowData._id,
                this.caculateDiscount(
                  this.rowData.finalPrice,
                  this.managerForm.value.remise
                ).finalPrice,
                this.managerForm.value.statusFinal,
                this.pdfStr,
                this.bl,
                this.facturePdf,
                this.devis
              ),
            })
            .subscribe(({ data }) => {
              if (data) {
                this.toastr.success(
                  `la réduction est de ${
                    this.caculateDiscount(
                      this.rowData.finalPrice,
                      this.managerForm.value.remise
                    ).discount
                  }`,
                  "Réussite de l'affectation",
                  { duration: 0 }
                );
              }
            });
          this.refDialog.close(true);
        }
      });
  }

  // sendTicket() {
  //   this.nbDialog
  //     .open(ConfirmationModalComponent, {
  //       context: {
  //         data: "êtes-vous sûr d'ajouter cette demande d'intervention",
  //       },
  //     })
  //     .onClose.subscribe((result) => {
  //       if (result) {
  //         this.addTicket.value.createdBy = localStorage.getItem("username");
  //         this.addTicket.value.image = this.imageStr;

  //         this.apollo
  //           .mutate<any>({
  //             mutation: this.ticketService.addTicket(this.addTicket.value),
  //           })
  //           .subscribe(({ data }) => {
  //             console.log(data);
  //             this.nbToastr.success(
  //               "Ticket a été ajouté avec succès",
  //               "Ticket ajouté"
  //             );
  //           });

  //         this.addTicket.reset();
  //       }
  //     });
  // }

  statusToggle(status: boolean) {
    console.log(status, "toggle status");
    this.stautsToggle = status;
  }
}
