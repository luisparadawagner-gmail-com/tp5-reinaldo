import { Component, OnInit } from '@angular/core';
import { Persona } from '../clases/persona';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface Tabla {
  
  posicion: number;
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
}

const ELEMENT_DATA: Tabla[] = [
  {posicion: 1, nombre: 'Pepe', apellido: 'Argento', edad: 43, direccion: 'abc'},
  {posicion: 2, nombre: 'Roberto', apellido: 'Carlos', edad: 50, direccion: 'abc'},
  {posicion: 3, nombre: 'Juan', apellido: 'Lopez', edad: 30, direccion: 'abc'},
  {posicion: 4, nombre: 'Cacho', apellido: 'Castaña', edad: 65, direccion: 'abc'},
  {posicion: 5, nombre: 'Esteban', apellido: 'Quito', edad: 18, direccion: 'abc'}
];

@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css']
})
export class ConsultarPersonasComponent implements OnInit {

  displayedColumns: string[] = ['posicion', 'nombre', 'apellido', 'edad', 'direccion', 'accion'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
