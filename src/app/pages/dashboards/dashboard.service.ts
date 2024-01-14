import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor() {}

  getClientCompanyChart() {
    return gql`
      {
        getClientCompanyChart {
          name
          value
        }
      }
    `;
  }

  getClientByRegion() {
    return gql`
      {
        getClientByRegion {
          name
          value
        }
      }
    `;
  }

  getIssuesChart() {
    return gql`
      {
        getIssuesChart {
          name
          value
        }
      }
    `;
  }

  cardTech(givenPrice: number) {
    return gql`
      {
        getTicketByProfile(givenPrice: ${givenPrice}) {
          techName
          totalDiag
          totalRep
          moyDiag
          moyRep
          techCostRep
          techCostDiag
        }
      }
    `;
  }

  getTotality() {
    return gql`
      {
        totality {
          totality {
            name
            value
          }
          count
        }
      }
    `;
  }

  /**
   * finalPrice
   * status
   * 
 composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
          }
   */

  prices() {
    // for dashboard to get prices
    return gql`
      {
        getTicketForCoordinator {
          finalPrice
          status
          composants {
            quantity
            sellPrice
          }
        }
      }
    `;
  }

  calendarChart() {
    return gql`
      {
        getClientLastMonth {
          date
          value
        }
      }
    `;
  }
  Table_Work_Volume(givenPrice: number) {
    return gql`
      {
        getTechWorkVolume(givenPrice: ${givenPrice}) {
          techName
          totalDiag
          totalRep
          moyDiag
          moyRep
          techCostRep
          techCostDiag
          totalDiagHours
          totalRepHours
          numberDiRep
          numberDiDiag
        }
      }
    `;
  }

  filterGainWorking(filter_Mutation) {
    return gql`
      mutation {
        filterGainWorking(filterDate:{start:"${filter_Mutation.start}",end:"${filter_Mutation.end}"}) 
        {
         _id 
         status
          createdAt
          price
          finalPrice
          composants 
            {
              sellPrice
              quantity    
            }
        }
      }
    `;
  }

  priceTechPerHour() {
    return gql`
      query {
        getPriceTech
      }
    `;
  }
}
