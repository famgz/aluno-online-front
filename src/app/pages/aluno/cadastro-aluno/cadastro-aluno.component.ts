import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss'],
})
export class CadastroAlunoComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private alunoService: AlunoService, private router: Router) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('Nicol', Validators.required),
      cpf: new FormControl('344.400.260-28', Validators.required),
      email: new FormControl('nicol@email.com', [
        Validators.required,
        Validators.email,
      ]),
      anoNascimento: new FormControl('2001', Validators.required),
      endereco: new FormGroup({
        cep: new FormControl('58030100', Validators.required),
      }),
    });
  }

  ngOnInit(): void {}

  cadastrar() {
    const aluno: Aluno = this.formGroup.value;
    this.alunoService.inserir(aluno).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Aluno cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/aluno']);
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.detalhes,
        });
      },
    });
  }
}
