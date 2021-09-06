import { Component } from '@angular/core';
import { AcrescimoModel } from './acrescimo.model';

const MAXIMO_ACRESCIMOS_PERMITIDOS = 3;

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

  private acrescimos = [
    'Leite condensado',
    'Banana',
    'Granola',
    'Morango',
    'Leite em pó',
    'Côco',
    'Castanha de caju'
  ];
  acrescimosSelecionados: string[];
  acrescimosModel: AcrescimoModel[];

  constructor() {
    this.acrescimosSelecionados = [];
    this.acrescimosModel = [
      ...[...this.acrescimos].map(a => ({ nome: a, disabled: false, checked: false }))
    ];
  }

  handleSelectTamanho(event: any): void {
    this.tamanhoSelecionado = event.target.value;
  }

  handleSelectAcrescimo(event: any, acrescimo: string): void {
    const acrescimoFoiSelecionado = event.target.checked;
    console.log('acrescimosModel', this.acrescimosModel);

    const index = this.acrescimosModel.findIndex(a => a.nome === acrescimo);
    if (acrescimoFoiSelecionado) {
      this.acrescimosModel[index].checked = event.target.checked;
    } else {
      this.acrescimosModel[index].checked = false;
    }

    if (this.getTotalAcrescimosSelecionados() === MAXIMO_ACRESCIMOS_PERMITIDOS) {
      this.acrescimosModel.forEach(a => {
        if (!a.checked) {
          a.disabled = true;
        }
      });
    } else {
      this.acrescimosModel.forEach(a => a.disabled = false);
    }
  }

  getTotalAcrescimosSelecionados(): number {
    return this.acrescimosModel
      .reduce(
        (soma: number, acrescimo: AcrescimoModel): number => (acrescimo.checked ? soma + 1 : soma),
        0
      );
  }

}
