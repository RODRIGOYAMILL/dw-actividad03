import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here Importamos FormsModule

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; //Importamos HereosComponent

//Aregamos modulos extenos en imports
//Declaramos en la matriz

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }