import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/productointerface';
import  {ServicesService} from '../../services/services.service';
import { Carrito } from '../../interfaces/carritointerface';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any;
  carrito: Carrito ={
    id_usuario1:0,
    id_producto1:0,
    cantidad:0,
    id_carrito:0
  };
  constructor(private serviceProductos: ServicesService){

  }
  ngOnInit(){
    this.llamarServicio();
  }
  llamarServicio(){
    this.serviceProductos.obtenerProductos().subscribe((productos:Producto[])=>{
      console.log(productos)
      this.productos = productos;
    });
  }
  agregarCantidad(id_producto) 
  {
  var mensaje;
  var cantidad = prompt("Introduzca su cantidad:", );
   
  if (cantidad == null || cantidad == "") {
          mensaje = "Has cancelado o introducido el nombre vacío";
          } else {
            this.agregarCarrito(cantidad,id_producto);
              }

              
  }
  agregarCarrito(cantidad, id_producto){
    this.carrito.id_usuario1=1;
    this.carrito.id_producto1=id_producto;
    this.carrito.cantidad=cantidad;    
    this.serviceProductos.guardarCarrito(this.carrito).subscribe(carrito => console.log(carrito));
  }
}
