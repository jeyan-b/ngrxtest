import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { decrement, increment, reset } from '../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount)
  }

  incrementClickEvent(){
    this.store.dispatch(increment());
  }

  decrementClickEvent(){
    this.store.dispatch(decrement());

  }

  resetClickEvent(){
    this.store.dispatch(reset());
  }

}
