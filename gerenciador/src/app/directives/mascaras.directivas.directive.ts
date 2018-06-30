import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';
import { FluxoService } from '../services/fluxo.service';

@Directive({
  selector: '[appMascaras]'
})
export class MascarasDirectivasDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input()
  set appMascaras(value: any) {
    console.log('dsadsa',value);
    // let url = value[0].toLowerCase();
    // if(url.substring(0,2) == 'nu'){
    //   url = url.substring(2, url.length);
    // }
  }

  @HostListener('input', ['$event'])
  public onInput(e: any): void {
    if (e.data != null) {
      console.log('dsadsa', e);
      if (this.el.nativeElement.value > 10) {
        let tam = this.el.nativeElement.value.length - 1;
        this.el.nativeElement.value = this.el.nativeElement.value.substring(0, tam);
      }
    }
  }

  // addMask(mascara: any, resposta: string) {
  //   resposta = resposta.replace(mascara.fortyMask, mascara.compFortyMask);
  //   resposta = resposta.replace(mascara.thMask, mascara.compThMask);
  //   resposta = resposta.replace(mascara.secMask, mascara.compSecMask);
  //   resposta = mascara.prefix + resposta + mascara.suffix;

  //   return resposta;
  // }

  // removeAffix(resposta: string) {
  //   if (resposta.length > this.mascara.prefix.length) {
  //     resposta = resposta.substring(this.mascara.prefix.length, resposta.length);
  //     resposta = resposta.substring(0, (resposta.length - this.mascara.suffix.length));
  //   }
  //   return resposta.replace(this.mascara.ftMask, '');
  // }
}
