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
import { TicketService } from "./pages/ticket/ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";
import { ROLE } from "./roles";
import { Apollo } from "apollo-angular";
import { ProfileService } from "./pages/profile/profile.service";
import { Howl } from "howler";
@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  currentUser: any;
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private cdr: ChangeDetectorRef,
    private apollo: Apollo,
    private profileService: ProfileService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.getNotificationSocket();
    const currentUser = localStorage.getItem("username");
  }

  getNotificationSocket() {
    const currentUser = localStorage.getItem("username");
    const roleUser = localStorage.getItem("role");

    this.ngZone.run(() => {
      this.ticketService
        .getNotifcationForTechFroCoordinator()
        .subscribe((data: any) => {
          // if (data) {
          if (data.sentTo === currentUser) {
            console.log(data, "from coo");
            this.toastr.success(``, `Nouveau Ticket à ${data.sentTo}`, {
              duration: 0,
            });

            const sound = new Howl({
              src: ["assets/audio/notification.wav"],
            });
            sound.play();
          }
          // }
        });
      //--------
      this.ticketService.getNotification().subscribe((data) => {
        if (data.assignedTo === currentUser) {
          console.log("data", data);
          this.toastr.success(`${data.title} à faire`, "Nouveau Ticket", {
            duration: 0,
          });
          const audio = new Audio("assets/audio/notification.wav");
          audio.play();
        }
      });
      //--------

      this.ticketService.getTicketForMagasin().subscribe((data) => {
        console.log(roleUser, "role user");
        if (roleUser === ROLE.MAGASIN) {
          console.log("data sent to magasin", data);
          this.toastr.success(``, "Nouveau Ticket diagnostiqué", {
            duration: 0,
          });
          const audio = new Audio("assets/audio/notification.wav");
          audio.play();
        }
      });
      //---------

      console.log("user", currentUser);
      //-----------
    });
  }
}
