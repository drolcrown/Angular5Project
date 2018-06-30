import { Mensagem } from './Mensagem';
import { Dialogo } from './Dialogo';
import { Servico } from './Servico';
import { Interlocutor } from './Interlocutor';
import { Argumento } from './Argumento';
import { TipoArgumento } from './TipoArgumento';
import { Operador } from './Operador';
import { Regra } from './Regra';
import { DialogoServico } from './DialogoServico';
import { Conversa } from './Conversa';
import { TipoInterlocutor } from './TipoInterlocutor';
import { RegraRelacao } from './RegraRelacao';
import { Usuario } from './Usuario';

export class ModelList {
  modelsList: Array<any> = [new Dialogo(), new Conversa(), new Interlocutor(), new Argumento(), new Servico(),
    new DialogoServico(), new TipoInterlocutor(), new RegraRelacao(), new Usuario(),
    new Mensagem(), new TipoArgumento(), new Operador(), new Regra()];

    // modelsList: Array<any> = [new Dialogo(), new Conversa()];

}

