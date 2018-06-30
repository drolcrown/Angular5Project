import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FluxoService } from '../../services/fluxo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelList } from '../../models/ModelList';
import { Servico } from '../../models/Servico';
import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-generic-component',
  templateUrl: './generic-component.component.html',
  styleUrls: ['./generic-component.component.css']
})

export class GenericComponentComponent implements OnInit  {
  private form: FormGroup;
  private models = new ModelList();
  private _modelsNames = [];
  private arrayComponent: any;
  private objComponent: any;
  private nomeComponent: string;
  private _fluxos = [];
  private _fluxoPrincipal = [];
  private _classDerived = ["interlocutorreceptor", "interlocutoremissor"];
  private arrayObjects = [];
  private _route = "";
  private _modoEditar = false;
  private _valorSelecionado = -1;
  private _name;

  constructor(private fluxoService: FluxoService
  , private builder: FormBuilder
  , private router: Router
  , private route: ActivatedRoute) {
    this.inicializaGeneric();
    this.form = this.builder.group(this.objComponent);
  }

  ngOnInit() {
  }

  private inicializaGeneric() {
    let nameModels;
    this._name = this.route.snapshot.paramMap.get('tipoDeComponent');
    this._route = this.route.snapshot.paramMap.get('tipo');
    if(this._route == "editar"){
      this._modoEditar = true;
    }
    // verifica qual é o tipo do component
    for (let i = 0; i < this.models.modelsList.length; i++) {
      //Criando uma lista de nomes das classes
      nameModels = this.models.modelsList[i].constructor.name;
      this._modelsNames.push(nameModels.toLowerCase());
      if (this._name === nameModels.toLowerCase()) {
        this.fluxoService.consultaBanco(nameModels.toLowerCase(), 'null');
        this._fluxoPrincipal = this.fluxoService.fluxoSubject;
        console.log(this._fluxoPrincipal)
        this.objComponent = this.models.modelsList[i];
        this.arrayComponent = Object.keys(this.objComponent);
        this.nomeComponent = nameModels;
      }
    }
    // Iniciar lista de fluxos
    for(let i = 0; i < this.arrayComponent.length; i++){
      let obj;
      let nameClass;
      //Verificando se o nome do componente é uma classe
      nameClass = this.arrayComponent[i].toLowerCase();
      if(this._modelsNames.includes(nameClass) || nameClass.substring(0, 2) == "nu" || this._classDerived.includes(nameClass)) {
        //retirando o sufixo nu de uma classe para pesquisar no banco
        if(nameClass.substring(0, 2) == "nu" ){
          nameClass = nameClass.substr(2);
        }
        this.fluxoService.consultaBanco(nameModels.toLowerCase(), 'null');
        obj = new Object({name: this.arrayComponent[i], fluxo:  this.fluxoService.fluxoSubject, sufixo: "nu"});
        console.log(obj)
      }
      else{
        obj = new Object({name: this.arrayComponent[i], fluxo: [], sufixo: nameClass.substring(0, 2)});
      }
      this.arrayObjects.push(obj);
    }
  }

  private formLimpo() {
    const listaValObj = Object.values(this.form.value);
    for (let i = 0; i < listaValObj.length; i++) {
      if (listaValObj[i] != null) {
        return false;
      }
    }
    return true;
  }

  private enviarResposta() {
    this.router.navigate(['/criarfluxo']);
    console.log(this.form.value);
    // this.dialogoService.enviarObjeto(this.nomeComponent.toLowerCase(), this.form.value);
  }

  private buscarFluxo(fluxo, indice) {
    if(indice) {
      return Object.values(fluxo)[0];
    }else {
      return Object.values(fluxo)[1];
    }
  }

  private renderizar(){
    if(this._route == "editar"){
      return "container col-8 mt-5";
    }else{
      return "container col-8 mt-3";
    }
  }

  private ativarEdicao(valor, html){
    if(valor != 'null' && this._valorSelecionado != valor){
      this._valorSelecionado = valor;
      // this.fluxoService.consultaBanco(this._name, valor);
      // this._fluxoPrincipal = this.fluxoService.getListaDeObjetosPost;
      // console.log(valor)
      // html.innerHTML = this.html();
    }
  }


  private html(){
    return "<div class='form-group mt-3' *ngFor='let component of arrayObjects'>" +
    "<label for='formGroupExampleInput' class='caixa-txt'>{{component.name}}:</label><div [ngSwitch]='component.sufixo'>"+
        "<input *ngSwitchDefault formControlName='{{component.name}}' type='text' class='form-control' placeholder='{{component.name}}' autocomplete='off' autofocus>"+
        "<input *ngSwitchCase=''dh'' max='2999-12-31' formControlName='{{component.name}}' type='date' class='form-control' placeholder='{{component.name}}' autocomplete='off' autofocus>"+
        "<select *ngSwitchCase=''nu'' formControlName='{{component.name}}' class='form-control' autofocus>"+
            "<option [value]='null'></option>"+ 
            "<option *ngFor='let fluxo of component.fluxo[0]; let i = index' [value]='buscarFluxo(fluxo, true)'>{{buscarFluxo(fluxo, false)}}</option>"+
        "</select>"+
      "</div>"+
    "</div>";
// "<div class='text-center mt-5'>"+
//     "<button type='submit' class='btn btn-primary mr-2 mb-5' [disabled]='formLimpo()'>"+Enviar</button>"+
//     "<button type='reset' class='btn btn-primary mb-5' [disabled]='formLimpo()'>"+Limpar</button>"+
// "</div>"+
  }
}
