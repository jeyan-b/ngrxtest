import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsyncPipe
  ],
  providers: [
    provideStore(),
    provideState({name: 'counter', reducer: counterReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
