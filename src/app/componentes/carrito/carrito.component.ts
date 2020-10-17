import { Component, OnInit } from '@angular/core';
import  {ServicesService} from '../../services/services.service';
import { Carrito } from '../../interfaces/carritointerface';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any;
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

}
