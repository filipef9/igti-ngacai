import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { OpcaoModel } from '../opcao.model';

@Component({
  selector: 'app-selecionar-item',
  templateUrl: './selecionar-item.component.html',
  styleUrls: ['./selecionar-item.component.scss']
})
export class SelecionarItemComponent {

  @Input()
  id: string;

  @Input()
  titulo: string;

  @Input()
  opcoes: any[];

  @Input()
  escolhaAte: number;

  @Input()
  totalSelecionados: number;

  @Output()
  selecionarOpcao = new EventEmitter<OpcaoModel>();

  constructor() {
    this.titulo = '';
    this.escolhaAte = 1;
  }

  handleSelecionarOpcao(event: any, opcao: string): void {
    this.selecionarOpcao.emit({
      nome: opcao,
      checked: event.target.checked
    });
  }

}
