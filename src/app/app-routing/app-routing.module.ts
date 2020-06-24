import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from '../crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from '../consultar-personas/consultar-personas.component';



const routes: Routes = [

        {path: 'app-crear-persona', component: CrearPersonaComponent },
        {path: 'app-consultar-personas', component: ConsultarPersonasComponent }
    ];

@NgModule({
        imports: [RouterModule.forRoot(routes) ],
        exports: [RouterModule],
        declarations: []
    })
    export class AppRoutingModule { }
