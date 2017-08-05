import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar = false;
  showSpinner = false;

  navbarToggleButtonClicked(showNavbar): void {
    this.showNavbar = showNavbar;
  }
}
