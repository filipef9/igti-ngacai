export interface Opcao {
  nome: string;
}

export interface OpcaoModel extends Opcao {
  checked: boolean;
  disabled?: boolean;
}