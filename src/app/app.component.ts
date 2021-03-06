import { Component } from '@angular/core';
import { ProductoService } from './services/producto.service';
import { CategoriaService } from './services/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'app-sass';

  constructor(
    public productoService: ProductoService,
    public categoriesService: CategoriaService
  ) {
    //aquí se cargan los json u otras cosas que se consumen en la aplicación
    console.log('Estamos en app componente');
  }
}
