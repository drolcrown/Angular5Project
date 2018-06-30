import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  private _user: Subject<any> = new Subject();
  private myUser;

  constructor() { }

  get user(): string {
    return this.myUser;
  }

  get userSubject(): Subject<any> {
    return this._user;
  }

  public iniciarSessao(usuario) {
    this.myUser = Object.values(usuario)[0];
    this._user.next(usuario);
  }

  public encerrarSessao() {
    this._user.unsubscribe();
  }


}
