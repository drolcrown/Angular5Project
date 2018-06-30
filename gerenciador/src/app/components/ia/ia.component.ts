import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-IA',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent implements OnInit {
  private _componentRoute;
  constructor() { }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }
  ngOnInit() {
  }

}
