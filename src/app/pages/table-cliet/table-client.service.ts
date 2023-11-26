import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Client } from "./client.interface";

@Injectable({
  providedIn: "root",
})
export class TableClientService {
  constructor() {}

  addClient(userData: Client, type: string) {
    return gql`
    
     mutation {
        createClient(compClient:"${type}",
        createClientInput:{
          firstName:"${userData.firstName}" 
          lastName:"${userData.lastName}" 
          email:"${userData.email}" 
          phone:"${userData.phone}" 
          address:"test" 
          companyName:"${userData.companyName}" 
          region:"${userData.region}" 
          fax:"${userData.fax}" 
          activitePrincipale:"${userData.activitePrincipale}"
          activiteSecondaire:"${userData.activiteSecondaire}"
          raisonSociale:"${userData.raisonSociale}"
          Exoneration:"${userData.Exoneration}"
          website:"${userData.website}" 
      
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
        }
      }
    `;
  }
}
