import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _tipoDeRota;
  private _user;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this._tipoDeRota = this.route.snapshot.paramMap.get('rota');
    this._user = this.userService.user;
    // this.userService.userSubject.subscribe( resposta => {
    //   this.user = resposta;
    //   console.log(`Este é o jornada ${this.user}`);
    // });

  }

  private alteraRota(value) {
    this._tipoDeRota = value;
  }

  private encerrarSessao() {
    // this.userService.encerrarSessao();
  }
}
