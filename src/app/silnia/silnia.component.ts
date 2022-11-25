import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silnia',
  templateUrl: './silnia.component.html',
  styleUrls: ['./silnia.component.scss']
})
export class SilniaComponent{
  public number: number | null = null;
  public result: number | null = null;

  constructor() { }

  calculate(): void{
    if(this.number != null){
      this.result = 1;
      for(let i = this.number; i > 0; i--){
        this.result = this.result * i;
      }
    }
  }

}
