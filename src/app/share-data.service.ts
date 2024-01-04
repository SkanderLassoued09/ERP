import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShareDataService {
  constructor() {}

  private dataConfigCoordinator: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);
  public configCoordinator$ = this.dataConfigCoordinator.asObservable();

  updateDataForCoordinator(newData: any) {
    this.dataConfigCoordinator.next(newData);
  }

  notif() {
    return gql`
      subscription {
        notificationTech {
          techname
          message
        }
      }
    `;
  }
}
