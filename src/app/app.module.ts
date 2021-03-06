import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServerComponent} from './serve/server.component';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
