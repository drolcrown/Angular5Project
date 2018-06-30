import { Component, OnInit } from '@angular/core';
import { ModelList } from '../../models/ModelList';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criacao',
  templateUrl: './criacao.component.html',
  styleUrls: ['./criacao.component.css']
})
export class CriacaoComponent implements OnInit {
  private _lista = new ModelList().modelsList;
  private _form: FormGroup;
  private _edicao;
  private _tipo;
  private estiloPerfil = {
    // background: '#dddddd', 
    height: '120px'
  };

  constructor(private builder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this._form = this.builder.group({
      model: [''],
    });
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('tipo') == "editar"){
      this._edicao = true;
      this._tipo = "EDITAR";
    }else {
      this._edicao = false;
      this._tipo = "CRIAR";
    }
  }

  private ativarRota(model): void {
    this._form = this.builder.group(model);
    this.router.navigate(['/componente', model.toLowerCase(), this._tipo.toLowerCase()]);
  }
}
