import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by">
      Fixtronix systeme de gestion des Demnades interventions
    </span>
    <div class="socials">
      <a href="https://fixtronix.tn/" target="_blank">
        <img src="assets/images/microsoft-edge.png" alt=""
      /></a>
      <a href="https://www.facebook.com/FixtronixTunisia/" target="_blank">
        <img src="assets/images/facebook.png" alt=""
      /></a>
      <!-- <a href="#" target="_blank" class="ion ion-social-linkedin"></a> -->
    </div>
  `,
})
export class FooterComponent {}
