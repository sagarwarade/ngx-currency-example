import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCurrencyExampleComponent } from './ngx-currency-example/ngx-currency-example.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgxCurrencyDirective } from "ngx-currency";
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
