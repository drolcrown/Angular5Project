import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
// import {of} from 'rxjs/add/observable/of';
// import { map, timeout } from 'rxjs/operators';

@Injectable()
export class FluxoService {
  // private _ENDPOINTProducao = 'http://104.41.26.70:8080/sibot/rest/';
  private _ENDPOINT = 'http://sibot-boss.brazilsouth.cloudapp.azure.com:8080/sibot-des/rest/';
  private  _dialogos: Subject<any> = new Subject();
  private _lista = [];
  private _listaPost = [];
  private  _listObject: BehaviorSubject<any> = new BehaviorSubject([]);
  private _fluxoSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  private httpHeaders = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  get getDialogos(): Subject<any> {
    this.http.get<any>(`${this._ENDPOINT}dialogo`)
    .subscribe(response => {
      this._dialogos.next(response);
    });
    return this._dialogos;
  }

  get fluxoSubject(): any {
    this._fluxoSubject.getValue();
    return this._fluxoSubject.getValue();
  }

  get getListaDeObjetos(): Array<any> {
    return this._lista;
  }

  get getListaDeObjetosPost(): Array<any> {
    return this._listaPost;
  }

  public enviarObjeto(url, param) {
    this.http.post<any>(`${this._ENDPOINT}${url}`, param, this.httpHeaders)
      .subscribe(response => {
        this._fluxoSubject.next(response);
    });
  }

  public consultaBanco(url, param){
    if(param == 'null') {
      this.http.get<any>(`${this._ENDPOINT}${url}`)
      .subscribe(response => {
        this._lista.push(response);
        this._fluxoSubject.next(response);
      });
    }else {
      this.http.post<any>(`${this._ENDPOINT}${url}`, param)
        .subscribe(response => {
          this._listaPost.push(response);
        // this._listObject.next(response); = new BehaviorSubject([])
          this._fluxoSubject.next(response);
      });
    }
  }
}
