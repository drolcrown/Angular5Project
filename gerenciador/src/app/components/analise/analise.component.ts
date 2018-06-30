import {  Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {
  private _componentRoute;
  constructor() { }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }
  ngOnInit() {
  }

}
