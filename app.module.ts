import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/person-input.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent, PersonComponent,PersonInputComponent,
    
   
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
