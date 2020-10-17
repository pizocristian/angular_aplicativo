import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetalleCarritoComponent } from './componentes/detalle-carrito/detalle-carrito.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistrarseComponent,
    ProductosComponent,
    RegistroProductoComponent,
    CarritoComponent,
    DetalleCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
