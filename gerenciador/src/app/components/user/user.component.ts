import { Component, OnInit } from '@angular/core';
import { FluxoService } from '../../services/fluxo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private listDialogo;

  constructor(private fluxoService: FluxoService, private http: HttpClient) {
  }

  ngOnInit() {
    this.fluxoService.getDialogos.subscribe(resposta => {
      this.listDialogo = resposta;
    });
  }
}
