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

  getPriceTech() {
    return gql`
      query {
        getPriceTech
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

  filterGain(filter) {
    return gql`
      mutation {
        filterGain(filter: { start: "${filter.start}", end: "${
      filter.end ? filter.end : null
    }" }) {
          createdAt
          finalPrice
        }
      }
    `;
  }
}
