import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent{
  number: number | null = null;
  result: number | null = null;

  constructor() { }

  calculate(): void{
    if(this.number == 0){
      this.result = 0;
    }
    else if(this.number == 1){
      this.result = 1;
    }
    else{
      let num1 = 0, num2 = 1, num3: number;
      for(let i = 1; i <= this.number!; i++){
        num3 = num2 + num1;
        num2 = num1;
        num1 = num3;
      }
      this.result = num3!;
    }
  }
}
