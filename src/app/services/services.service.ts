import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productointerface';
import { Carrito } from '../interfaces/carritointerface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  obtenerUsuarios(){
    return this.http.get('http://localhost:8000/api/usuario');
  }
  obtenerProductos(){
    return this.http.get('http://localhost:8000/api/producto');
  }
  obtenerCarrito(){
    return this.http.get('http://localhost:8000/api/carrito');
  }
  guardarProducto(producto:Producto): Observable<Producto>{
    return this.http.post<Producto>('http://localhost:8000/api/producto', producto);
  }
  guardarCarrito(carrito:Carrito): Observable<Carrito>{
    return this.http.post<Carrito>('http://localhost:8000/api/carrito', carrito);
  }
  ElinarCarrito(){
    return this.http.get('http://localhost:8000/api/carrito/1');
  }
  ElinarProductoCarrito(id_carrito): Observable<Carrito>{
    const url = `${'http://localhost:8000/api/carrito/'}${id_carrito}`;
    console.log(url);    
    return this.http.delete<Carrito>(url);
    
  }
}
 