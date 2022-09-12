import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription, tap, timer} from 'rxjs';
import {HighlightLoader} from "ngx-highlightjs";

const themeAndroidStudio: string = 'node_modules/highlight.js/scss/github.scss';

@Component({
  selector: 'app-observable-request',
  templateUrl: './observable-request.component.html',
  styleUrls: ['./observable-request.component.scss']
})
export class ObservableRequestComponent implements OnInit {

  public mapLoader:  Observable<number>;

  public randomNumber: String | string = '';

  public buttonString = 'Play';

  @ViewChild('selection') inputChild!: ElementRef;

  @ViewChild('codeObs') codeObs!: any;

  obsCode = `//Code example
    public mapLoader:  Observable<number>;

    public randomNumber: String | string = '';

    @ViewChild('selection') inputChild!: ElementRef;


    timerSub!: Subscription;

    constructor() {
      this.mapLoader = timer(0, 500).pipe(tap(value => {
        this.randomNumber = Math.random().toString(36)
        console.log(value)
      }));
    }

    ngOnInit(): void {

    }

    onSubClick() {
      this.inputChild.nativeElement.value = 'observable'
      if(!!this.timerSub && !this.timerSub.closed){
        this.timerSub.unsubscribe()
        return;
      }
      //start to execute
      this.timerSub = this.mapLoader.subscribe(value => {})
    }`



  timerSub!: Subscription;

  constructor(private hljsLoader: HighlightLoader) {
    this.hljsLoader.setTheme(themeAndroidStudio);
    this.mapLoader = timer(0, 500).pipe(tap(value => {
      this.randomNumber = Math.random().toString(36)
      console.log(value)
    }));


  }

  ngOnInit(): void {

  }

  onSubClick() {
    if(!!this.timerSub && !this.timerSub.closed){
      this.timerSub.unsubscribe();
      this.buttonString = 'Play';
      return;
    }
    this.buttonString = 'Pause';
    this.timerSub = this.mapLoader.subscribe(value => {
    })


  }
}
