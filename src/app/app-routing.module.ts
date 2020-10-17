import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetalleCarritoComponent } from './componentes/detalle-carrito/detalle-carrito.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ProductosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent
  },
  {
    path: 'registro_producto',
    component: RegistroProductoComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'detalle',
    component: DetalleCarritoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
