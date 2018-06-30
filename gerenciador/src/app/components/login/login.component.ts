import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  tipoComponent: any;
  objComponent: any;
  nomeComponent: string;

  constructor(private userService: UserService, private builder: FormBuilder, private router: Router) {
    this.form = this.builder.group({
      usuario: ['', Validators.required ],
      senha: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  formLimpo() {
    if (this.form.controls.usuario.invalid && this.form.controls.senha.invalid) {
      return false;
    }
    return true;
  }

  private enviarResposta() {
    this.userService.iniciarSessao(this.form.value);
    this.router.navigate(['/home', 'fluxoInicial']);
    // Ainda falta verificar se o usuario enviado esta cadastrado
  }
}
