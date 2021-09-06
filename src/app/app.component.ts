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

}
