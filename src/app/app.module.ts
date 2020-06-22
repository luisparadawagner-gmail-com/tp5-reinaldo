import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from './consultar-personas/consultar-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ConsultarPersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
