import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

// es como el @Service
@Injectable({
  providedIn: 'root',
})
// la clase
export class ProductoService {
  productos: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  public cargarProductos() {
    this.http.get('/assets/data/producto.json').subscribe((respuesta: any) => {
      this.productos = respuesta.productos;
      console.log(this.productos);
    });
  }
}
