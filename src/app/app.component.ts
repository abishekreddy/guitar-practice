import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute: string;
  showNavbar = false;
  showSpinner = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        this.currentRoute = currentRoute.snapshot.data.name;
      });
  }

  navbarToggleButtonClicked(showNavbar): void {
    this.showNavbar = showNavbar;
  }
}
