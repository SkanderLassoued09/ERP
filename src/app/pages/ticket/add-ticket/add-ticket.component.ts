import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { log } from "console";
import { TableClientService } from "../../table-cliet/table-client.service";
import { LocalDataSource } from "ng2-smart-table";
import { NbToastrService } from "@nebular/theme";
import { isRequiredInputField } from "graphql";

@Component({
  selector: "ngx-add-ticket",
  templateUrl: "./add-ticket.component.html",
  styleUrls: ["./add-ticket.component.scss"],
})
export class AddTicketComponent implements OnInit {
  addTicket = new FormGroup({
    designiation: new FormControl("", []),
    typeClient: new FormControl("", []),
    numSerie: new FormControl("", []),
    emplacement: new FormControl("", []),
    numero: new FormControl("", []),
    affectedToCompany: new FormControl("empty", []),
    affectedToClient: new FormControl("empty", []),
    remarqueManager: new FormControl("", []),
    title: new FormControl("", [Validators.required]),
    image: new FormControl("", []),
  });

  emplacement;

  options1 = [
    { value: "This is value 1", label: "Oui" },
    { value: "This is value 2", label: "Non" },
  ];
  optionsType = [
    { value: "Societe", label: "Societe" },
    { value: "Client", label: "Client" },
  ];
  listOfTech: any;
  listOfClient;
  listOfCompany;
  checkedTypeClient: any;
  imageStr: string | ArrayBuffer;
  constructor(
    private ticketService: TicketService,
    private clientService: TableClientService,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef,
    private nbToastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.getAllTech();
    this.getLocation();
    this.getClientList();
  }

  onSelectFile(image: any) {
    const file = image.target.files && image.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event onload");
        this.imageStr = reader.result;
      };
    }

    console.log(this.imageStr, "pdf str");
  }

  sendTicket() {
    console.log("1");
    this.addTicket.value.createdBy = localStorage.getItem("username");
    this.addTicket.value.image = this.imageStr;
    console.log("2");
    this.ticketService.addTicket(this.addTicket.value);
    console.log("3");
    this.nbToastr.success("Ticket a été ajouté avec succès", "Ticket ajouté");
    this.addTicket.reset();
  }

  getSelectedTypeClient(data) {
    this.checkedTypeClient = data;
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

  getLocation() {
    this.apollo
      .query<any>({
        query: this.ticketService.getLocation(),
      })
      .subscribe(({ data }) => {
        console.log(data, "location");
        this.emplacement = data.getAllLocations;
      });
  }

  getClientList() {
    this.apollo
      .query<any>({
        query: this.clientService.getClient(),
      })
      .subscribe(({ data }) => {
        console.log(data, "client");
        this.listOfClient = data.getAllClient;
      });

    this.apollo
      .query<any>({
        query: this.clientService.getCompany(),
      })
      .subscribe(({ data }) => {
        console.log(data, "company");
        this.listOfCompany = data.getAllCompany;
      });
  }
}
