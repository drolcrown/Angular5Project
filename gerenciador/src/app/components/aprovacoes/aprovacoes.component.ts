import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprovacoes',
  templateUrl: './aprovacoes.component.html',
  styleUrls: ['./aprovacoes.component.css']
})
export class AprovacoesComponent implements OnInit {
  private _componentRoute;
  
  constructor() { }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }

  ngOnInit() {
  }

}
