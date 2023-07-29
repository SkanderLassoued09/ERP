import { Injectable } from "@angular/core";
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
}
