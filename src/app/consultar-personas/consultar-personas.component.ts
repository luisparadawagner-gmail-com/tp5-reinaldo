import { Component, OnInit } from '@angular/core';
import { Persona } from '../clases/persona';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { LeerListadoService } from '../servicios/leer-listado.service';

@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css']
})
export class ConsultarPersonasComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'direccion', 'accion'];
  dataSource: any[] = [];

  constructor(private router: Router, private leerListadoService: LeerListadoService, private route: ActivatedRoute ) { }

  param: any;

  ngOnInit(): void {
    this.getPersonas();
    debugger;
  }

  getPersonas() {
    debugger;
    this.leerListadoService.getPersonas().subscribe((personas) => {
      debugger;
      this.dataSource = personas;

    this.param = this.route.snapshot.params;
    if (Object.keys(this.param).length) {
			this.recibirPersona(this.param);
		}

    });
  }

  recibirPersona(persona: Persona) {
      debugger;
      this.dataSource.push(persona);
    };
  

  onModificar(elemento) {
    debugger;

    let personaTemp: Persona = {
      nombre: elemento.nombre,
      apellido: elemento.apellido,
      edad: elemento.edad,
      direccion: elemento.direccion
    }

    this.router.navigate(['app-crear-persona', personaTemp])
    debugger;
    
	}

}
