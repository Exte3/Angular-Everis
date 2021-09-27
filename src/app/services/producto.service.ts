import { Injectable } from '@angular/core';

// es como el @Service
@Injectable({
  providedIn: 'root',
})
// la clase
export class ProductoService {
  constructor() {
    console.log('Producto Service');
  }
}
