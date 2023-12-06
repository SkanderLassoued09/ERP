import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Client } from "./client.interface";

@Injectable({
  providedIn: "root",
})
export class TableClientService {
  constructor() {}

  updateField(_id: string, fieldName: string, value: string) {
    return gql`
      mutation {
        updateField(_id: "${_id}", fieldName: "${fieldName}", value: "${value}")
      }
    `;
  }

  addClient(userData: Client, type: string) {
    return gql`
       mutation {
        createClient(compClient:"${type}",
        createClientInput:{
          firstName:"${userData.firstName}" 
          lastName:"${userData.lastName}" 
          email:"${userData.email}" 
          phone:"${userData.phone}" 
          address:"${userData.address}"     
          region:"${userData.region}" 
      }) 
       {firstName}}
    `;
  }

  getClient() {
    return gql`
      {
        getAllClient {
          _id
          firstName
          lastName
          email
          phone
          address
          type
          companyName
          region
        }
      }
    `;
  }

  getCompany() {
    return gql`
      {
        getAllCompany {
          _id
          firstName
          lastName
          email
          phone
          address
          type
          companyName
          region
          Exoneration
          raisonSociale
          activiteSecondaire
          activitePrincipale
          website
          fax
          technique {
            fullName
            email
            phone
          }
          financier {
            fullName
            email
            phone
          }
          achat {
            fullName
            email
            phone
          }
        }
      }
    `;
  }

  deleteClient(_id: string) {
    return gql`
      mutation {
          deleteClient(_id: "${_id}")
      }
    `;
  }

  updateClient(
    _id: string,
    address: string,
    region: string,
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    companyName: string,
    fax: string,
    website: string,
    activitePrincipale: string,
    activiteSecondaire: string,
    raisonSociale: string,
    Exoneration: string
  ) {
    console.log("my value _id", _id);
    console.log("my value lastName", lastName);
    console.log("my value firstName", firstName);
    return gql`
    mutation {
      updateClient(
        _id: "${_id}"
        updateClientInput: {
          address: "${address}"
          region: "${region}"
          email: "${email}"
          phone: "${phone}"
          firstName: "${firstName}"
          lastName: "${lastName}"
          companyName: "${companyName}"
          fax: "${fax}"
          website: "${website}"
          activitePrincipale: "${activitePrincipale}"
          activiteSecondaire: "${activiteSecondaire}"
          raisonSociale: "${raisonSociale}"
          Exoneration: "${Exoneration}"
        }
      )
    }
  `;
  }
}
