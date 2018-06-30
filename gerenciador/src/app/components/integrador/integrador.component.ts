import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrador',
  templateUrl: './integrador.component.html',
  styleUrls: ['./integrador.component.css']
})
export class IntegradorComponent implements OnInit {
  private _componentRoute;
  estiloPerfil = {
    height: screen.height*0.5 + 'px'
  }

  
  constructor() { }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }

  ngOnInit() {
  }

}
