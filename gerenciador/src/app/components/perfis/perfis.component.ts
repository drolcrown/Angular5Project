import { Component, Input, OnInit, ElementRef, Renderer2, ViewChild, Directive } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent implements OnInit {
  private _componentRoute;
  estiloPerfil = {
    height: screen.height*0.6 + 'px'
  }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }
  
  constructor(render: Renderer2) { 
  }
  
  ngOnInit(){
  }

}