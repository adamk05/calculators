import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BmiComponent } from './bmi/bmi.component';
import { SilniaComponent } from './silnia/silnia.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { SalaryComponent } from './salary/salary.component';
import { PercentComponent } from './percent/percent.component';
import { InputTextModule } from 'primeng/inputtext'
import { InputNumberModule } from 'primeng/inputnumber' 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    SilniaComponent,
    FibonacciComponent,
    SalaryComponent,
    PercentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
