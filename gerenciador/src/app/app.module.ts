import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoService } from './services/fluxo.service';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { DialogofluxoComponent } from './components/dialogofluxo/dialogofluxo.component';
import { FluxoDeConversaComponent } from './components/fluxo-de-conversa/fluxo-de-conversa.component';
import { GenericComponentComponent } from './components/generic-component/generic-component.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { IntegradorComponent } from './components/integrador/integrador.component';
import { AprovacoesComponent } from './components/aprovacoes/aprovacoes.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { IaComponent } from './components/ia/ia.component';
import { RedeSocialComponent } from './components/rede-social/rede-social.component';
import { UserComponent } from './components/user/user.component';
import { AnaliseComponent } from './components/analise/analise.component';
import { UserService } from './services/user.service';
import { CriacaoComponent } from './components/criacao/criacao.component';
import { MascarasDirectivasDirective } from './directives/mascaras.directivas.directive';
import { GenericEditComponent } from './components/generic-component/generic-edit/generic-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogofluxoComponent,
    FluxoDeConversaComponent,
    GenericComponentComponent,
    HomeComponent,
    LoginComponent,
    ChatbotComponent,
    IntegradorComponent,
    AprovacoesComponent,
    RedeSocialComponent,
    IaComponent,
    PerfisComponent,
    UserComponent,
    AnaliseComponent,
    CriacaoComponent,
    MascarasDirectivasDirective,
    GenericEditComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [FluxoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
