import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NbDialogRef, NbTagComponent, NbToastrService } from "@nebular/theme";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import * as moment from "moment";
import { ShareService } from "../../../share-data/share.service";
import { LocationStrategy } from "@angular/common";
import { URL } from "../../../URLs";

@Component({
  selector: "ngx-modal-ticket",
  templateUrl: "./modal-ticket.component.html",
  styleUrls: ["./modal-ticket.component.scss"],
})
export class ModalTicketComponent implements OnInit {
  updateTicket = new FormGroup({
    title: new FormControl("", [Validators.required]),
    designiation: new FormControl("", [Validators.required]),
    typeClient: new FormControl("", [Validators.required]),
    numSerie: new FormControl("", [Validators.required]),
    numero: new FormControl("", [Validators.required]),
    issue: new FormControl("", [Validators.required]),
    assignedTo: new FormControl("", [Validators.required]),
    reparable: new FormControl("", [Validators.required]),
    pdr: new FormControl("non", [Validators.required]),
    remarqueTech: new FormControl("", [Validators.required]),
    emplacement: new FormControl("", [Validators.required]),
    // pdfComposant: new FormControl("", [Validators.required]),
    // package: new FormControl("", [Validators.required]),
  });

  pdrControl: FormControl;

  ticketId: string;
  ROLE = ["ADMIN_MANAGER", "ADMIN_TECH", "MANAGER", "TECH", "MAGASIN"];
  minutes: string = "00";
  seconds: string = "00";
  milliseconds: string = "00";
  isRunning: boolean = false;
  startTime: number = 0;
  laps: string[] = [];
  lapTime: string;
  isModalOpened: any;
  listOfIssue: any;
  pdrStatus: string;
  trees: any = [];
  quantite: number;
  nomComposant: string;
  vari = "Hello";
  isReparable: any;
  rowData: any;
  title: any;
  allComposant: any;
  pdfStr: string | ArrayBuffer;
  url: string | ArrayBuffer;
  urlHost: string;

  constructor(
    private dialogRef: NbDialogRef<ModalTicketComponent>,
    private ticketService: TicketService,
    private apollo: Apollo,
    private share: ShareService,
    private cdr: ChangeDetectorRef,
    private toastr: NbToastrService,
    private location: LocationStrategy
  ) {}

  ngOnInit(): void {
    this.title = this.rowData.title;

    this.updateTicketToInProgress();
    this.startStopwatch();
    this.isOpenCheck();
    this.getAllIssue();
    this.myForm = new FormGroup({
      nomComposant: new FormControl(null),
      quantite: new FormControl(null),
      pdfComposant: new FormControl(null, [Validators.required]),
      package: new FormControl(null),
      linkProvider: new FormControl(null),
    });
    this.urlHost = URL.URL;
  }
  myForm: FormGroup;

  updatePDRValue(data) {
    console.log(data, "pdr");
    console.log("type of pdr", typeof data);
    this.cdr.detectChanges();
    this.pdrStatus = data;
  }

  updateReparableValue(data) {
    this.isReparable = data;
    this.cdr.detectChanges();
  }

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHandler(event) {
    let modalOpened = true;
    console.log("beforeunload", event);
    if (modalOpened) {
      event.returnValue = true;
    }
    // ...
  }

  @HostListener("window:unload", ["$event"])
  unloadHandler(event) {
    let modalOpened = true;
    console.log("beforeunload", event);
    if (modalOpened) {
      event.returnValue = true;
    }

    // ...
  }

  ajouterComposant() {
    console.log(this.rowData, "row data in modal");
    let objectComposant: any = {
      _id: "",
      nameComposant: "",
      quantiteComposant: 0,
      package: "",
      pdfComposant: "",
      linkProvider: "",
    };

    /**
     * Ajouter btn : for adding composant in composant entity
     * Update btn , for adding composant data in ticket
     */

    const nomComposantValue = this.myForm.get("nomComposant").value;
    const quantiteValue = this.myForm.get("quantite").value;
    const pdfComposant = this.pdfStr;
    const packageName = this.myForm.get("package").value;
    const linkProvider = this.myForm.get("linkProvider").value;

    objectComposant["nameComposant"] = nomComposantValue;
    objectComposant["quantiteComposant"] = +quantiteValue;
    objectComposant["package"] = packageName;
    objectComposant["pdfComposant"] = pdfComposant;
    objectComposant["linkProvider"] = linkProvider;
    this.trees.push(objectComposant);
    let quantity = parseInt(quantiteValue);
    console.log(this.trees, "ajout trees");
  }

  dateFormat(date: string) {
    return moment(date).format("HH:mm:ss");
  }

  onSelectFile(pdf: any) {
    console.log(pdf, "bc");
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event onload");
        this.pdfStr = reader.result;
        this.url = (<FileReader>event.target).result;
        if (this.pdfStr) {
          this.pdfStr = reader.result;
        } else {
          this.pdfStr = "";
        }
      };
    }

    console.log(this.pdfStr, "pdf str");
  }

  isOpenCheck() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.isOpen(this.ticketId),
      })
      .subscribe(({ data }) => {
        console.log("Modal opened check", data);
      });
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    const indexToRemove = this.trees.findIndex(
      (tree) => tree.nameComposant === tagToRemove.text
    );

    if (indexToRemove !== -1) {
      this.trees.splice(indexToRemove, 1);
    }

    console.log(this.trees, "Updated trees array");
  }

  updateTicketConfirm() {
    this.lap();
    let data = this.dateFormat(this.lapTime);
    console.log(data, "date");

    let dataToUpdate = {
      _id: this.ticketId,
      designiation: this.updateTicket.value.designiation,
      emplacement: this.updateTicket.value.emplacement,
      numero: this.updateTicket.value.numero,
      remarqueTech: this.updateTicket.value.remarqueTech,
      reparable: this.updateTicket.value.reparable,
      pdr: this.updateTicket.value.pdr,
      lapTime: this.lapTime,
      role: this.updateTicket.value.role,
      issue: this.updateTicket.value.issue,
      composant: this.trees,
    };

    console.log(dataToUpdate, "data to update");

    if (
      this.updateTicket.value.reparable === "oui" ||
      this.updateTicket.value.pdr === "oui"
    ) {
      this.apollo
        .mutate<any>({
          mutation: this.ticketService.updateTicketByTech(dataToUpdate),
        })
        .subscribe(({ data }) => {
          console.log(data);
          this.isModalOpened = data;
          // this.ticketService.sendToMagasin(dataToUpdate);
        });
    }

    if (
      this.updateTicket.value.reparable === "non" ||
      this.updateTicket.value.pdr === "non"
    ) {
      this.apollo
        .mutate<any>({
          mutation: this.ticketService.noPdrNoReparable(dataToUpdate._id),
        })
        .subscribe(({ data }) => {
          console.log(data, "update toMagasin");
        });
    }

    this.dialogRef.close(true);
  }

  getAllComposant() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllComposant(),
      })
      .subscribe(({ data }) => {
        this.allComposant = data.getAllComposant;
      });
  }

  getAllIssue() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllIssues(),
      })
      .subscribe(({ data }) => {
        this.listOfIssue = data.getAllIssue;
      });
  }

  updateTicketToInProgress() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateTicketToInProgress(this.ticketId),
      })
      .subscribe(({ data }) => {
        console.log(data, "ticket opened");
      });
  }

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = Date.now();
      this.updateTimer();
    } else {
      this.isRunning = false;
    }
  }

  updateTimer() {
    if (this.isRunning) {
      const elapsedTime = Date.now() - this.startTime;
      this.minutes = this.padZero(Math.floor(elapsedTime / (1000 * 60 * 60)));
      this.seconds = this.padZero(
        Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      this.milliseconds = this.padZero(
        Math.floor((elapsedTime % (1000 * 60)) / 1000)
      );

      requestAnimationFrame(() => this.updateTimer());
    }
  }

  lap() {
    if (this.isRunning) {
      this.lapTime = ` ${this.minutes}:${this.seconds}:${this.milliseconds}`;
      console.log(this.lapTime, "laptime");
    }
  }

  reset() {
    this.minutes = "00";
    this.seconds = "00";
    this.milliseconds = "00";
    this.isRunning = false;
    this.startTime = 0;
    this.laps = [];
  }

  padZero(value: number): string {
    return value.toString().padStart(2, "0");
  }
}
