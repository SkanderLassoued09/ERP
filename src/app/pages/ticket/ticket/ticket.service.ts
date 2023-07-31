import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Socket, io } from "socket.io-client";
import { Ticket } from "../ticket";
import { NbToastrService } from "@nebular/theme";
import { ROLE } from "../../../roles";
import { URL } from "../../../URLs";
import { id } from "@swimlane/ngx-charts";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  socket: Socket;
  constructor(private toastr: NbToastrService) {
    this.socket = io(URL.SOCKET, {
      transports: ["websocket", "polling"],
    });
  }

  /**
   *
   * @param ticket
   *
   *  SOCKET SECTION
   *
   *
   */
  addTicket(ticket: Ticket) {
    console.log("hello");
    console.log("from service", ticket);
    this.socket.emit("send-ticket", ticket);
  }

  sendToMagasin(ticket: Ticket) {
    console.log(ticket, "ticket magasin sending");
    this.socket.emit("send-data-magasin", ticket);
  }

  coordinatorSendTicketToTech(paylodToSend) {
    this.socket.emit("send-to-tech", paylodToSend);
  }

  getNotifcationForTechFroCoordinator(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("tech-recieve-coordinator", (payloadCoo: any) => {
        observer.next(payloadCoo);
      });
    });
  }

  getNotification(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("ticket", (ticket: Ticket) => {
        observer.next(ticket);
      });
    });
  }

  getTicketForMagasin(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("magasin", (ticket: Ticket) => {
        observer.next(ticket);
      });
    });
  }

  getAllTicket() {
    return gql`
      {
        getTicketByTech {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          reparable
          pdr
          techNameSug
          isReparable
          isReadyForDiag
          typeClient
          createdBy
          assignedTo
          image
          affectedToCompany
          affectedToClient
          createdAt
          updatedAt
          status
          magasinDone
          diagnosticTimeByTech
          priority
          Devis
          facture
          bc
          bl
          titre
          isOpenByTech
          pdfComposant
          composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
            isAffected
          }
        }
      }
    `;
  }

  getTicketsForCoordinator() {
    return gql`
      {
        getTicketForCoordinator {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          reparable
          pdr
          assignedTo
          affectedToClient
          affectedToCompany
          status
          magasinDone
          assignedTo
          toMagasin
          coordinatorToAdmin
        }
      }
    `;
  }

  getAllTech() {
    return gql`
      {
        getAllTech {
          _id
          username
          ticketCount
        }
      }
    `;
  }

  getAllAdmins() {
    return gql`
      {
        getAllAdmins {
          _id
          username
        }
      }
    `;
  }

  updateTicketByTech(updateTicket) {
    const composantInputs = updateTicket.composant
      .map((el) => {
        return `{nameComposant: "${el.nameComposant}", quantity: ${el.quantiteComposant} }`;
      })
      .join(", ");

    console.log(composantInputs, "from service composant");

    return gql`
    mutation {
      updateTicket(
        _id: "${updateTicket._id}",
        updateTicketInput: {
          designiation: "${updateTicket.designiation}",
          emplacement: "${updateTicket.emplacement}",
          numero: "${updateTicket.numero}",
          remarqueTech: "${updateTicket.remarqueTech}",
          reparable: "${updateTicket.reparable}",
          pdr: "${updateTicket.pdr}",
          issue: "${updateTicket.issue}",
          diagnosticTimeByTech: "${updateTicket.lapTime}",
          composants: [${composantInputs}]
       
        }
      )
    }
  `;
  }
  updateTicketToInProgress(_id: string) {
    return gql`
      mutation {
        updateStatusToInProgress(_id:"${_id}")
      }
    `;
  }
  updateStatusToFinish(_id: string) {
    return gql`
      mutation {
        updateStatusToFinish(_id:"${_id}")
      }
    `;
  }

  isOpen(_id: string) {
    return gql`
      mutation {
        isOpen(_id: "${_id}")
      }
    `;
  }

  changeStatusSelected(_id: string, status: string) {
    return gql`
      mutation {
        changeStatus(_id: "${_id}", status: "${status}")
      }
    `;
  }

  addIssue(nameIssue: string) {
    return gql`
      mutation {
        createIssue(createIssueInput: { issueName: "${nameIssue}" }) {
          _id
        }
      }
    `;
  }

  getLocation() {
    return gql`
      {
        getAllLocations {
          _id
          locationName
        }
      }
    `;
  }

  getAllIssues() {
    return gql`
      {
        getAllIssue {
          _id
          issueName
        }
      }
    `;
  }

  addLocation(locationName: string) {
    return gql`
      mutation{createLocation(createLocationInput:{locationName:"${locationName}"}) {_id}}
    `;
  }

  addComposant(nameComposant: string, quantity: number) {
    console.log(nameComposant, "in service add composant");
    return gql`
      mutation {
        createComposant(
          createComposantInput: {  nameComposant: "${nameComposant}" , qunatity:${quantity}}
        ) {
          nameComposant
        }
      }
    `;
  }

  getAllComposant() {
    return gql`
      {
        getAllComposant {
          _id
          nameComposant
        }
      }
    `;
  }

  updateMagasin(
    _id: string,
    nameComposant: string,
    sellPrice: string,
    purchasePrice: string,
    statusComposant: string,
    comingDate: string
  ) {
    return gql`
      mutation {
        magasinUpdate(
          magasinUpdateData: {
            _id: "${_id}"
            nameComposant: "${nameComposant}"
            sellPrice: "${sellPrice}"
            purchasePrice: "${purchasePrice}"
            statusComposant: "${statusComposant}"
            comingDate: "${comingDate}"
          }
        )
      }
    `;
  }

  makeTicketAvailableForAdmin(_id) {
    return gql`
    mutation {
      makeTicketAvailableForAdmin(_id: "${_id}")
    }
  `;
  }
  getListForAdmins() {
    return gql`
      {
        getTicketMagasinFinie {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          reparable
          pdr
          finalPrice
          techNameSug
          typeClient
          createdBy
          createdAt
          updatedAt
          status
          diagnosticTimeByTech
          priority
          Devis
          facture
          bc
          bl
          titre
          pdfComposant
          composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
          }
        }
      }
    `;
  }

  affectationFinalPrice(_id: string, finalPrice: string) {
    return gql`
      mutation {
        affectationFinalPrice(_id: "${_id}", finalPrice: "${finalPrice}")
      }
    `;
  }

  updateTicketManager(
    _id: string,
    remise: string,
    statusFinal: boolean,
    bc: any,
    bl: any,
    facture: any,
    devis: any
  ) {
    return gql`
      mutation {
        updateTicketManager(
          updateTicketManager: {
            _id:"${_id}"
            remise:"${remise}"
            statusFinal:"${statusFinal}"
            bc:"${bc}"
            bl:"${bl}"
            facture:"${facture}"
            Devis:"${devis}"
          }
        )
      }
    `;
  }

  setTicketReparable(_id) {
    return gql`
    mutation {
      setIsReparable(_id: "${_id}")
    }
  `;
  }

  discount(_id: string) {
    return gql`
      mutation {
        discount(_id: "${_id}")
      }
    `;
  }

  getTicketFinished() {
    return gql`
      {
        getFinishedTicket {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          reparable
          pdr
          finalPrice
          techNameSug
          typeClient
          createdBy
          createdAt
          updatedAt
          status
          finalStatusTicket
          reparationTimeByTech
          remarqueManager
          emplacement
          assignedTo
          finalPriceToAdminManager
          finalPriceToAdminTech
          finalPrice
          diagnosticTimeByTech
          priority
          Devis
          IsFinishedAdmins
          facture
          bc
          bl
          titre
          pdfComposant
          composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
          }
        }
      }
    `;
  }

  reopenDiag(_id: string) {
    return gql`
      mutation {
        reopenDiagnostique(_id: "${_id}")
      }
    `;
  }

  updateRemarqueReparation(
    _id: string,
    remarqueTech: string,
    reparationTimeByTech: string
  ) {
    return gql`
      mutation {
        updateRemarqueTechReparation(_id: "${_id}", remarqueTech: "${remarqueTech}" , reparationTimeByTech: "${reparationTimeByTech}")
      }
    `;
  }

  isReturnTicket(_id: string, status: boolean) {
    console.log(_id, status, "in service return");
    return gql`
      mutation {
        isReturnTicket(_id: "${_id}", stauts: ${status})
      }
    `;
  }

  toAdminTech(_id: string) {
    return gql`
      mutation {
        toAdminTech(_id: "${_id}")
      }
    `;
  }

  affectToTechByCoordinator(_id: string, sentTo: string) {
    return gql`
      mutation {
        affectTechToTechByCoordinator(_id: "${_id}", sentTo: "${sentTo}")
      }
    `;
  }

  setFinalPriceAvaiblableToAdminManager(_id: string) {
    return gql`
      mutation {
        setFinalPriceAvaiblableToAdminManager(_id: "${_id}")
      }
    `;
  }

  setFinalPriceAvaiblableToAdminTech(_id: string) {
    return gql`
      mutation {
        setFinalPriceAvaiblableToAdminTech(_id: "${_id}")
      }
    `;
  }
}
