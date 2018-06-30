import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FluxoService } from '../../services/fluxo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  private _form;
  private _componentRoute;

  @Input()
  public set rota(value) {
    this._componentRoute = value;
  }
  constructor(private dialogoService: FluxoService, private builder: FormBuilder, private router: Router) {
    this._form = this.builder.group({
      nome: ['', Validators.required ],
      proprietario: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  formLimpo() {
    if (this._form.controls.nome.invalid && this._form.controls.proprietario.invalid) {
      return false;
    }
    return true;
  }

}
