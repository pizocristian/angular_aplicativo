import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    
    let menu = document.getElementById('menu');
    menu.classList.toggle('mostrar');   
    
    
  }
}
