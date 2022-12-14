import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// @ts-ignore
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from "ngx-highlightjs";
import { TestComponentComponent } from './test-component/test-component.component';
import {ObservableRequestComponent} from "./components/observable-request/observable-request.component";
import {PromiseRequestComponent} from "./components/promise-request/promise-request.component";
import { ScannerComponent } from './components/scanner/scanner.component';
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CameraComponent } from './components/camera/camera.component';

import {WebcamModule} from 'ngx-webcam';
import {FormsModule} from "@angular/forms";
import { DndDirective } from './components/camera/dnd.directive';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ObservableRequestComponent,
    PromiseRequestComponent,
    ScannerComponent,
    QrCodeComponent,
    CameraComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HighlightModule,
    BarcodeScannerLivestreamModule,
    ZXingScannerModule,
    WebcamModule,
    FormsModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        themePath: 'node_modules/highlight.js/styles/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/scss'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
