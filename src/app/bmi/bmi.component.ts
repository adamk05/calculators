import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent{
  public height: number | null = null;
  public weight: number | null = null;
  public bmi: number | null = 0;

  constructor() { }

  calculateBMI(): void{
    if(this.height != null){
      this.bmi = Math.round(this.weight! / Math.pow(this.height! / 100, 2) * 100) / 100;
    }
  }
}
