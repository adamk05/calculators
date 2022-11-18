import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { PercentComponent } from './percent/percent.component';
import { SalaryComponent } from './salary/salary.component';
import { SilniaComponent } from './silnia/silnia.component';

const routes: Routes = [
  { path: 'bmi', component: BmiComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'percent', component: PercentComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'silnia', component: SilniaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
