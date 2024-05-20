import { Component } from '@angular/core';
import { NgxCurrencyConfig, NgxCurrencyInputMode } from 'ngx-currency';

@Component({
  selector: 'app-ngx-currency-example',
  templateUrl: './ngx-currency-example.component.html',
  styleUrl: './ngx-currency-example.component.scss'
})
export class NgxCurrencyExampleComponent {
  amount1: any;
  amount2: any;
  showPrefixSuffix: boolean = true;
  NgxCurrencyInputMode:any;
  customCurrencyOptions: NgxCurrencyConfig = {
    align: "right",
    allowNegative: false,
    allowZero: false,
    decimal: ".",
    precision: 2,
    prefix: "₹",
    suffix: "r",
    thousands: ",",
    nullable: false,
    min: null,
    max: null,
    inputMode: NgxCurrencyInputMode.Natural
  };

  constructor(){
    this.NgxCurrencyInputMode = NgxCurrencyInputMode
  }
}
