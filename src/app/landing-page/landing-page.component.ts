import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  activatedRoute: ActivatedRoute;
  token: string = '';

  constructor(route: ActivatedRoute) {
    this.activatedRoute = route;
  }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams['token'];
  }
}
