import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tamanhos = [
    '300 ml',
    '500 ml'
  ];
  tamanhoSelecionado: string;

  acrescimos = [
    'Leite condensado',
    'Banana',
    'Granola',
    'Morango',
    'Leite em pó',
    'Côco',
    'Castanha de caju'
  ];
  acrescimosSelecionados: string[];

  constructor() {
    this.acrescimosSelecionados = [];
  }

  getAcrescimo(event: any, acrescimo: string): void {
    const acrescimoFoiSelecionado = event.target.checked;

    if (acrescimoFoiSelecionado) {
      this.acrescimosSelecionados = [
        ...this.acrescimosSelecionados,
        acrescimo
      ];
    } else {
      this.acrescimosSelecionados = [
        ...this.acrescimosSelecionados.filter(a => a !== acrescimo)
      ];
    }

    console.log('Acréscimos selecionados: ', this.acrescimosSelecionados);
  }

}
