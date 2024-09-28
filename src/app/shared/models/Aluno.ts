import { Endereco } from 'src/app/shared/models/Endereco';

export interface Aluno {
  id: number;
  name: string;
  email: string;
  anoNascimento: number;
  endereco?: Endereco;
}
