import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable, Subscription, tap, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HowToAngular';

  constructor() {


  }

  ngOnInit(): void {

  }
}
