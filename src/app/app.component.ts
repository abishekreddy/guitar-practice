import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar = false;
  showSpinner = false;

  //TODO: Remove
  featureDefaults = {
    default: 10,
    max: 20,
    min: 0,
    step: 1
  };
  navbarToggleButtonClicked(showNavbar): void {
    this.showNavbar = showNavbar;
  }
}
