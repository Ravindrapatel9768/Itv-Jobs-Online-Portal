import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  counter= signal(0);
  increment (){
    this.counter.update(()=>{
      return this.counter()+1;
    })
  }

   decrement (){
    this.counter.update(()=>{
      return this.counter()-1;
    })
  }

}
