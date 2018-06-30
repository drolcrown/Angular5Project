import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { FluxoService } from '../../services/fluxo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogofluxo',
  templateUrl: './dialogofluxo.component.html',
  styleUrls: ['./dialogofluxo.component.css']
})
export class DialogofluxoComponent implements OnInit {
  private _fluxos = [];
  private _arg = [];
  private _interE = [];
  private _interR = [];
  private _form: FormGroup;
  private id = 0;

  constructor(private fluxoService: FluxoService, private builder: FormBuilder, private router: Router) {
    this._form = this.builder.group({
      // conversa: ['' ]
      // noDialogo: ['', Validators.required ],
      // deDialogo: ['', Validators.required ],
      // coMatriculaExclusao: ['', Validators.required ],
      // coMatriculaCadastro:  ['', Validators.required ],
      // dhCadastro: ['', Validators.required ],
      // dhExclusao: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.buscarListasDeComponentes();
  }

  private enviarResposta() {
    this.router.navigate(['/home/iniciarfluxo']);
  }
  
  buscarListasDeComponentes() {
    this.fluxoService.consultaBanco('dialogo', 'null')
    this._fluxos = this.fluxoService.getListaDeObjetos;
  }

  recuperaId(fluxo, url, tamanhoDoFluxo){
    if(fluxo.value != 0){
      if(fluxo.value != this.id) {
        this.id = fluxo.value;
        this.busca(this.id, url, tamanhoDoFluxo);
      }
    }
  }

  busca(id, url, tamanhoDoFluxo){
    //Verificando se estou procurando por uma posição inexistente no vetor
    if(tamanhoDoFluxo <= this._fluxos.length) {
        this.fluxoService.consultaBanco(url, id);
        this.fluxoService.getListaDeObjetos[tamanhoDoFluxo-1] = this.fluxoService.getListaDeObjetos[this._fluxos.length-1];
        this.fluxoService.getListaDeObjetos.pop();
        if (url == 'null') {
          let nova = this.fluxoService.getListaDeObjetos[1];
          this._arg = nova[id].argumento;
          this._interE = nova[id].interlocutorEmissor;
          this._interR = nova[id].interlocutorReceptor;
        }
    }else {
      this.fluxoService.consultaBanco(url, id);
      this._fluxos = this.fluxoService.getListaDeObjetos;
    }
    console.log(this._fluxos);
  }
}
