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

  cardTech() {
    return gql`
      {
        getTicketByProfile {
          techName
          totalDiag
          totalRep
          moyDiag
          moyRep
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
}
