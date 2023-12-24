import { Component, OnInit } from "@angular/core";

// import { MENU_ITEMS } from './pages-menu';
import { ProfileService } from "./profile/profile.service";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import { ROLE } from "../roles";
import {
  MENU_ITEMS_ADMIN_MANAGER,
  MENU_ITEMS_ADMIN_TECH,
  MENU_ITEMS_COORDINATOR,
  MENU_ITEMS_MAGASIN,
  MENU_ITEMS_MANAGER,
  MENU_ITEMS_TECH,
} from "./pages-menu";
import { TicketService } from "./ticket/ticket/ticket.service";
import { NbToastrService, NbToggleComponent } from "@nebular/theme";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS_ADMIN_MANAGER;
  constructor(
    private router: Router,
    private apollo: Apollo,
    private profileService: ProfileService,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}
  ngOnInit(): void {
    this.getRole();

    let token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate([""]);
    }
  }

  // notification() {
  //   this.ticketService
  //     .getNotifcationForTechFroCoordinator()
  //     .subscribe((data) => {
  //       console.log(data, "from coo");
  //       this.toastr.success(
  //         ``,
  //         "Nouveau Ticket diagnostiqué coo from pages.comp",
  //         {
  //           duration: 0,
  //         }
  //       );
  //     });
  // }

  public async getUser() {
    let profile = await this.apollo
      .query<any>({
        query: this.profileService.getUserByToken(),
      })
      .toPromise();

    // console.log(profile.data.getTokenData.role, "role");
    return profile.data.getTokenData.role;
  }

  // menu = MENU_ITEMS;

  async getRole() {
    const role = await this.getUser();
    if (!role) {
      this.router.navigate(["/"]);
    } else {
      if (role == ROLE.ADMIN_MANAGER) this.menu = MENU_ITEMS_ADMIN_MANAGER;
      else if (role == ROLE.ADMIN_TECH) this.menu = MENU_ITEMS_ADMIN_TECH;
      else if (role == ROLE.MANAGER) this.menu = MENU_ITEMS_MANAGER;
      else if (role == ROLE.MAGASIN) this.menu = MENU_ITEMS_MAGASIN;
      else if (role == ROLE.TECH) this.menu = MENU_ITEMS_TECH;
      else if (role == ROLE.COORDINATOR) this.menu = MENU_ITEMS_COORDINATOR;
    }
  }
}
