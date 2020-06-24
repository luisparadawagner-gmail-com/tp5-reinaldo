import { Component, OnInit } from '@angular/core';
import { Persona } from '../clases/persona';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { LeerListadoService } from '../servicios/leer-listado.service';

export interface Tabla {
  
  posicion: number;
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
}


@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css']
})
export class ConsultarPersonasComponent implements OnInit {

  displayedColumns: string[] = ['posicion', 'nombre', 'apellido', 'edad', 'direccion', 'accion'];
  dataSource: any[] = [];

  constructor(private router: Router, private leerListadoService: LeerListadoService ) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    debugger;
    this.leerListadoService.getPersonas().subscribe((personas) => {
      debugger;
      this.dataSource = personas;
    });
  }

  onModificar(elemento: Tabla) {
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
