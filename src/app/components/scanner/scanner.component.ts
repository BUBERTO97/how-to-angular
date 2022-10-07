import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements AfterViewInit {

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent | undefined;

  barcodeValue;

  ngAfterViewInit() {
    // @ts-ignore
    this.barcodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started) {
    console.log(started);
  }

}
