import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <p [appStandOut]="'blue'">Hello world from app component</p>
  <br>
  <app-ng-class></app-ng-class>
  <br><br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
