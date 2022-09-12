import { Component, OnInit } from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-observable-request',
  templateUrl: './observable-request.component.html',
  styleUrls: ['./observable-request.component.css']
})
export class ObservableRequestComponent implements OnInit {

  public mapLoader:  Observable<number>;

  constructor() {
    this.mapLoader = timer(0, 130);
  }

  ngOnInit(): void {

  }





}
