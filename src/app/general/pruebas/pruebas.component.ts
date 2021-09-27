import { formatDate } from '@angular/common'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.sass']
})
export class PruebasComponent implements OnInit {

  Titulo:string = 'Curso de Angular Básico';
  //Fecha formateable en HTMl
  Fecha: number = new Date().getTime();
  //fecha transformada a formato standar
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  //fecha con todos los datos;
  Fecha2: string = new Date().toString();
  // el mes empieza desde 0
  Mes: number = new Date().getMonth() + 1;
  //puede ser de uno de los tres tipos de datos
  dia: number|null|string = null;
  Contador: number = 0;
  //constructor
  constructor() { 
    console.log("Contructor Prueba");
  }

  ngOnInit(): void {
    console.log("ngOnInit Pruebas")
  }
  //setter and getter
  get mes(): number { 
    console.log("Se llamo al mes");
    return this.mes;
  }
  //metodos
  //Se puede hacer, pero en los metodos se debe trabajar con la logica
  /*obtenerMes(){
    return this.Mes;
  }*/
  obtenerDia(): void {
    this.dia = new Date().getDay();
  }
  sumar(): void {
    this.Contador++;
  }
  restar(): void {
    this.Contador--;
  }
}
