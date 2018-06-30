import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FluxoService } from '../../../services/fluxo.service';

@Component({
  selector: 'app-generic-edit',
  templateUrl: './generic-edit.component.html',
  styleUrls: ['./generic-edit.component.css']
})

export class GenericEditComponent implements OnInit {
  private _form: FormGroup;
  private _obj = [];
  private _fluxos;
  
  constructor(private builder: FormBuilder, private fluxoService: FluxoService) {
    this._form = this.builder.group(this._obj);
  }

  @Input()
  set editor(value: any) {
    console.log(value);
    this.fluxoService.consultaBanco(value, 'null');
    this._obj  = this.fluxoService.getListaDeObjetos;
    // this._obj = value;
  }

  ngOnInit() {
  }

  private formLimpo() {
    const listaValObj = Object.values(this._form.value);
    for (let i = 0; i < listaValObj.length; i++) {
      if (listaValObj[i] != null) {
        return false;
      }
    }
    return true;
  }
}
