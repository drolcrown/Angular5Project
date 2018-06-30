import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-canais',
  templateUrl: './rede-social.component.html',
  styleUrls: ['./rede-social.component.css']
})
export class RedeSocialComponent implements OnInit {
  private _componentRoute;
  constructor() { }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }
  ngOnInit() {
  }

}
