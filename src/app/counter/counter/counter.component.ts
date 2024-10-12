import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent  {
  public counter:number = 10
  increaseby(num:number):void{
    this.counter=this.counter+num
  }
  reset():void{
    this.counter=10
  }
}
