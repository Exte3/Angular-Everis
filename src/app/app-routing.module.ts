import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './general/producto/producto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './general/error/error.component';
// Es convención que lleve mayuscula
//Esta es una variable generica, se pueden hacer otras 
//{ path: 'NombreRuta', component: NombreCompoente },
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto', component: ProductoComponent},
  { path: '**', component: ErrorComponent },

];
//Decorador(NgModule): no olvidar importar 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
