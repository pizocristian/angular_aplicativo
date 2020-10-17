import { Component, OnInit } from '@angular/core';
import  {ServicesService} from '../../services/services.service';
import { Carrito } from '../../interfaces/carritointerface';

@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css']
})
export class DetalleCarritoComponent implements OnInit {
carrito:any;
  constructor(private serviceCarrito: ServicesService) { }
  
  ngOnInit(){
    this.llamarServicio();
  }
  llamarServicio(){
    this.serviceCarrito.obtenerCarrito().subscribe((carrito:Carrito[])=>{
      console.log(carrito)
      this.carrito = carrito;
    });
  }
  eliminarProducto(id){
    this.serviceCarrito.ElinarProductoCarrito(id).subscribe(producto => window.location.reload());
    
  }
  eliminarCarrito(){
    this.serviceCarrito.ElinarCarrito().subscribe(producto => window.location.reload());
  }


}
