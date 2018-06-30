import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FluxoService } from '../../services/fluxo.service';

@Component({
  selector: 'app-fluxo-de-conversa',
  templateUrl: './fluxo-de-conversa.component.html',
  styleUrls: ['./fluxo-de-conversa.component.css']
})
export class FluxoDeConversaComponent implements OnInit {
  private _componentRoute;
  private _userFLuxo;
  constructor(private fluxoS: FluxoService, private router: Router) { 
    this._userFLuxo = fluxoS.fluxoSubject;
    // alert(this._userFLuxo);
  }

  ngOnInit() {
  }

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }

  private enviarResposta(valor) {
    this.router.navigate(['/componente', valor]);
  }
}
