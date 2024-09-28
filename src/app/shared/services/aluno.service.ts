import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from 'src/app/shared/models/Aluno';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  api = `${enviroment.api}/aluno`;

  constructor(private http: HttpClient) {}

  getAll() {
    const url = `${this.api}/all`;
    return this.http.get(url);
  }

  getById(id: number) {
    const url = `${this.api}/${id}`;
    return this.http.get(url);
  }

  create(aluno: Aluno) {
    return this.http.post(this.api, aluno);
  }
}
