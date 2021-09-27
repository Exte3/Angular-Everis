import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.sass'],
})
//
export class PruebasComponent implements OnInit {
  Titulo: string = 'Curso de Angular Básico';
  //Fecha formateable en HTMl
  Fecha: number = new Date().getTime();
  //fecha transformada a formato standar
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  //fecha con todos los datos;
  Fecha2: string = new Date().toString();
  // el mes empieza desde 0
  Mes: number = new Date().getMonth() + 1;
  //puede ser de uno de los tres tipos de datos
  Dia: number | null = null;
  Contador: number = 0;
  //constructor

  //variables del form
  password: string | null = '';
  email: string | null = null;

  dias_semana: string[] = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  eliminado: null | string | undefined = null;
  dia_agregar: null | string = null;

  constructor() {
    console.log('Contructor Prueba');
  }

  ngOnInit(): void {
    console.log('ngOnInit Pruebas');
  }
  //setter and getter
  get getMes(): number {
    console.log('Se llamo al mes');
    return this.Mes;
  }
  get getDiaNumber(): number | null {
    return this.Dia;
  }
  //metodos
  //Se puede hacer, pero en los metodos se debe trabajar con la logica
  /*obtenerMes(){
    return this.Mes;
  }*/
  obtenerDia(): void {
    this.Dia = new Date().getDay();
  }
  sumar(): void {
    this.Contador++;
  }
  restar(): void {
    this.Contador--;
  }
  eliminarDia(): void {
    this.eliminado = this.dias_semana.pop();
  }
  agregarDia(): void {
    if (this.dia_agregar != null) {
      this.dias_semana.push(this.dia_agregar);
    } else {
      this.dias_semana;
    }
  }
  insertar(): void {
    console.log('metodo insertar');
    console.log(this.email);
    console.log(this.password);
  }
  insertar2(event: any): void {
    console.log(' metodo insertar 2...');
    event.preventDefault();
    console.log(event);
    alert();
  }
}
