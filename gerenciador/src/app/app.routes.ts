import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DialogofluxoComponent } from './components/dialogofluxo/dialogofluxo.component';
import { GenericComponentComponent } from './components/generic-component/generic-component.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CriacaoComponent } from './components/criacao/criacao.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'componente/:tipoDeComponent/:tipo', component: GenericComponentComponent },
    { path: 'home/:rota', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'fluxo/:tipo', component: CriacaoComponent },
    { path: 'dialogofluxo', component: DialogofluxoComponent },
];
