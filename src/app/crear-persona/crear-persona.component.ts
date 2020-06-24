import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../clases/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}   

  param: any;
  personaForm: FormGroup;

ngOnInit() {
    debugger;

    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
			this.iniciarFormulario(this.param);
		} else {
			this.defaultFormulario();
		}
  }

    iniciarFormulario(personaImp : Persona){
      this.personaForm = this.fb.group({
        nombre: [ personaImp.nombre, Validators.required ],
        apellido: [ personaImp.apellido ],
        edad: [ personaImp.edad ],
        direccion: [ personaImp.direccion ]
      });
    }

    defaultFormulario(){
      this.personaForm = this.fb.group({
        nombre: [ 'vacio', Validators.required ],
        apellido: [ '' ],
        edad: [ '' ],
        direccion: [ '' ]
      });
    }

    onEnviarPersona(){
      let personaTemp: Persona = this.personaForm.value;
      this.router.navigate(['app-consultar-personas', personaTemp])
      debugger;
    };

}
