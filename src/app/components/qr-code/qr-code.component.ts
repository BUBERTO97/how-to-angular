import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BarcodeFormat} from "@zxing/library";
import {BehaviorSubject} from "rxjs";
import {BrowserCodeReader} from "@zxing/browser";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements AfterViewInit {


  availableDevices: MediaDeviceInfo[] | undefined;
  deviceCurrent: MediaDeviceInfo | undefined;
  deviceSelected: string | undefined;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean | undefined;
  hasPermission: boolean | undefined;

  qrResultString: string | null | undefined;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  constructor() { }


  ngAfterViewInit(): void {

    this.updateVideoInputDevices()
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length > 0);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  async updateVideoInputDevices() {

    // permissions aren't needed to get devices, but to access them and their info
    const devices = await BrowserCodeReader.listVideoInputDevices() || [];
    const hasDevices = devices && devices.length > 0;

    // stores discovered devices and updates information

    this.availableDevices = devices

    this.hasDevices = hasDevices;



  }

  onDeviceSelectChange(selected: string) {
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    if(!(!!this.availableDevices)) { return }
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }

  onDeviceChange(device: MediaDeviceInfo) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }

  openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled,
    };
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }







}
