import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  alert: String = 'alert-danger';
  proprietary: Object = {
    danger: false
  };
  loading: Boolean;
  constructor() { }

  ngOnInit() {
  }
  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
}
