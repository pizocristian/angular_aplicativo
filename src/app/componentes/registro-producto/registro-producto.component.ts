import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/productointerface';
import  {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {
  producto: Producto ={
    id_producto:0,
    referencia:'',
    descripcion:'',
    valor_unitario:0
  };
  

  constructor(private serviceProductos: ServicesService) { }

  ngOnInit(): void {
  }
  mostrar(){
    console.log(this.producto);
  }
  guardarProducto(){
    this.serviceProductos.guardarProducto(this.producto).subscribe(producto => console.log(producto));
    this.producto.referencia='';
    this.producto.descripcion='';
    this.producto.valor_unitario=0;
}
}