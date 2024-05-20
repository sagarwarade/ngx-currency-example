import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCurrencyExampleComponent } from './ngx-currency-example/ngx-currency-example.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgxCurrencyDirective, NgxCurrencyInputMode, provideEnvironmentNgxCurrency } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    NgxCurrencyExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCurrencyDirective
  ],
  providers: [
    provideEnvironmentNgxCurrency({
      align: "right",
      allowNegative: false,
      allowZero: false,
      decimal: ".",
      precision: 2,
      prefix: "₹",
      suffix: "",
      thousands: ",",
      nullable: false,
      min: null,
      max: null,
      inputMode: NgxCurrencyInputMode.Natural
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
