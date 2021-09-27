import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { ProductoComponent } from './general/producto/producto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './general/error/error.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProductoComponent,
    HomeComponent,
    ErrorComponent,
    PruebasComponent,
  ],
  //Se debe importar el forms module para poder trabajar con formularios
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
