import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/shared/models/Aluno';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  api = `${enviroment.api}/aluno`;

  constructor(private http: HttpClient) {}

  inserir(novoAluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.api, novoAluno);
  }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.api}/all`);
  }

  deletar(idAluno: number): Observable<object> {
    return this.http.delete(`${this.api}/${idAluno}`);
  }

  pesquisarPorId(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.api}/${id}`);
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.api}/${aluno.id}`, aluno);
  }
}
