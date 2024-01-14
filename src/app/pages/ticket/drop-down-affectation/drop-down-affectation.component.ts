import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ShareDataService } from "../../../share-data.service";
import { ShareService } from "../../../share-data/share.service";
import { Router } from "@angular/router";
import { ConfirmationModalComponent } from "../../../share-data/confirmation-modal/confirmation-modal.component";

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
  arrTech: any[] = [];
  tech: any;
  toDisable: number;
  obj: { status: any; techName: string | null } = {
    status: null,
    techName: null,
  };
  caseOption: boolean;
  testTech: any;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private shareData: ShareDataService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    // console.log(this.rowData, "rowDatra");
    this.getAllTech();
    this.toHandleSelect();
  }

  getAllTech() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTech(),
      })
      .subscribe(({ data }) => {
        // console.log(data);
        this.listOfTech = data.getAllTech;
      });
  }

  affectTicketToTech(techSelected) {
    if (techSelected) {
      this.nbDialog
        .open(ConfirmationModalComponent)
        .onClose.subscribe((data) => {
          if (data) {
            this.tech = techSelected;
            let payload = {
              _id: this.rowData._id,
              sentTo: techSelected,
            };
            // this.ticketService.coordinatorSendTicketToTech(payload);
            this.apollo
              .mutate<any>({
                mutation:
                  this.ticketService.coordinatorSendTicketToTech(payload),
              })
              .subscribe(({ data }) => {
                if (data) {
                  this.isDisable = true;
                  this.router
                    .navigateByUrl("/test", { skipLocationChange: false })
                    .then(() => {
                      this.router.navigate([
                        "pages/ticket/ticket-for-coordinator",
                      ]);
                    });
                }
              });
          } else {
            this.toastr.info("", "Vous avez ignoré le processus");
          }
        });
    }
  }

  toHandleSelect() {
    console.log(this.rowData.assignedTo, "test");
    if (
      typeof this.rowData.assignedTo !== undefined &&
      this.rowData.assignedTo !== undefined &&
      this.rowData.assignedTo !== null &&
      this.rowData.assignedTo.length > 0
    ) {
      this.techName = this.rowData.assignedTo;
      this.isDisable = true;
      this.cdr.detectChanges();
    } else {
      this.isDisable = this.rowData.toMagasin;
      this.cdr.detectChanges();
    }
    this.cdr.detectChanges();
  }
}
