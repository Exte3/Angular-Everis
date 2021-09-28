import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  //se declaran las variables
  categoria: Categoria = {};
  //cate = [];
  constructor(private http: HttpClient) {
    console.log('Constructor Categoria Service');
    this.cargarCategorias();
    //this.cargarCategoriasWeb();
  }
  private cargarCategorias() {
    console.log('CargarCategorias');

    //

    //estructura base this.http.get('La url').subscribe((respuesta) => {});
    this.http
      .get('assets/data/categoria.json')
      .subscribe((respuesta: Categoria) => {
        this.categoria = respuesta;
        //this.cate = respuesta[];
        console.log('Respuesta: ', this.categoria);
        //console.log('Productos: ', respuesta['productos']);
        //console.log('Pera :', respuesta['productos'][0]);
      });
    /*this.http
      .get(
        'https://raw.githubusercontent.com/learsixela/productos_json/main/productos.json'
      )
      .subscribe((respuesta) => {
        console.log('Respuesta Desde la web: ', respuesta);
        //console.log('Productos: ', respuesta['productos']);
        //console.log('Pera :', respuesta['productos'][0]);
      });*/
  }
}
