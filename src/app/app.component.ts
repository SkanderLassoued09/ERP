/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  NgZone,
  OnInit,
} from "@angular/core";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { SeoService } from "./@core/utils/seo.service";
import { ShareDataService } from "./share-data.service";
import { Apollo, gql } from "apollo-angular";
import { map } from "rxjs/operators";

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  currentUser: any;
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private readonly shared: ShareDataService,
    private readonly apollo: Apollo
  ) {}

  ngOnInit(): void {
    // console.log("🍸[ngOnInit]:");

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.notif();
  }

  notif() {
    console.log("🍛[notif]: app");
    const QR = gql`
      subscription {
        notificationTech {
          techname
          message
        }
      }
    `;
    let subs = this.apollo.watchQuery<any>({
      query: QR,
    });
    let data = subs.valueChanges;
    console.log("🥛[data]:", data);
  }
}
