import { Component } from '@angular/core';
import { OpcaoModel } from './opcao.model';

const MAXIMO_ACRESCIMOS_PERMITIDOS = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tamanhos: string[] = [
    '300 ml',
    '500 ml'
  ];
  tamanhoSelecionado: OpcaoModel;
  tamanhosModel: OpcaoModel[];

  private acrescimos = [
    'Leite condensado',
    'Banana',
    'Granola',
    'Morango',
    'Leite em pó',
    'Côco',
    'Castanha de caju'
  ];
  acrescimosModel: OpcaoModel[];

  constructor() {
    this.tamanhosModel = [
      ...[...this.tamanhos].map(t => ({ nome: t, disabled: false, checked: false }))
    ];

    this.acrescimosModel = [
      ...[...this.acrescimos].map(a => ({ nome: a, disabled: false, checked: false }))
    ];
  }

  handleSelectTamanho(tamanho: { nome: string, checked: boolean }): void {
    if (tamanho.checked) {
      this.tamanhoSelecionado = { ...tamanho };
    }
  }

  handleSelectAcrescimo(acrescimo: { nome: string, checked: boolean }): void {
    const acrescimoFoiSelecionado = acrescimo.checked === true;

    const index = this.acrescimosModel.findIndex(a => a.nome === acrescimo.nome);
    if (acrescimoFoiSelecionado) {
      this.acrescimosModel[index].checked = acrescimo.checked;
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
        (soma: number, acrescimo: OpcaoModel): number => (acrescimo.checked ? soma + 1 : soma),
        0
      );
  }

}
