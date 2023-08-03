import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShareService {
  constructor() {}
  private tpeData = new BehaviorSubject<any>([]);

  currentMessage = this.tpeData.asObservable();

  changeMessage(message: any) {
    this.tpeData.next(message);
  }

  // --------------------------------
  private selectedValue = new BehaviorSubject<any>(null);

  currentValue = this.selectedValue.asObservable();

  setValue(message: any) {
    this.selectedValue.next(message);
  }
}
