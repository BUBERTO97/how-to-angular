import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable, Subscription, tap, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HowToAngular';
  public mapLoader:  Observable<number>;

  public randomNumber: String | string = '';

  @ViewChild('selection') inputChild!: ElementRef;

  @ViewChild('codeObs') codeObs!: any;

  obsCode = "//Code example\n\n" +
    "  public mapLoader:  Observable<number>;\n" +
    "\n" +
    "  public randomNumber: String | string = '';\n" +
    "\n" +
    "  @ViewChild('selection') inputChild!: ElementRef;\n" +
    "\n" +
    "\n" +
    "  timerSub!: Subscription;\n" +
    "\n" +
    "  constructor() {\n" +
    "    this.mapLoader = timer(0, 500).pipe(tap(value => {\n" +
    "      this.randomNumber = Math.random().toString(36)\n" +
    "      console.log(value)\n" +
    "    }));\n" +
    "  }\n" +
    "\n" +
    "  ngOnInit(): void {\n" +
    "\n" +
    "  }\n" +
    "\n" +
    "  onSubClick() {\n" +
    "    this.inputChild.nativeElement.value = 'observable'\n" +
    "    if(!!this.timerSub && !this.timerSub.closed){\n" +
    "      this.timerSub.unsubscribe()\n" +
    "      return;\n" +
    "    }\n" +
    "    //start to execute\n" +
    "    this.timerSub = this.mapLoader.subscribe(value => {})\n" +
    "  }"



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
    this.timerSub = this.mapLoader.subscribe(value => {
    })


  }
}
