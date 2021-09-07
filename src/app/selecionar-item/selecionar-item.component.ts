import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selecionar-item',
  templateUrl: './selecionar-item.component.html',
  styleUrls: ['./selecionar-item.component.scss']
})
export class SelecionarItemComponent implements OnInit {

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
  selecionarOpcao = new EventEmitter<{ nome: string, checked: boolean }>();

  constructor() {
    this.escolhaAte = 1;
  }

  ngOnInit(): void {
  }

  handleSelecionarOpcao(event: any, opcao: string): void {
    this.selecionarOpcao.emit({
      nome: opcao,
      checked: event.target.checked
    });
  }

}
