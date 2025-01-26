import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../livro/service/livro-service';
import { UsuarioService } from '../../usuario/service/usuario-service';
import { Livro } from '../../livro/interface/livro';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../usuario/interface/usuario';
import { EmprestimoDTO } from '../interface/emprestimo-dto';
import { EmprestimoService } from '../service/emprestimo-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './emprestimo-form.component.html',
  styleUrl: './emprestimo-form.component.scss'
})
export class EmprestimoFormComponent {
  public emprestimoDTO: EmprestimoDTO = {
    usuarioId: null,
    livroId: null,
    dataEmprestimo: null,
    dataDevolucao: null
  }
  public listaLivros: Livro[] = []
  public listaUsuarios: Usuario[] = []

  constructor(
    private router: Router,
    private emprestimoService: EmprestimoService,
    private livroService: LivroService,
    private usuarioService: UsuarioService
  ) {}

  public criarEmprestimo(): void {

    this.emprestimoDTO.livroId = 1
    this.emprestimoDTO.usuarioId = 2
    this.emprestimoService.criarEmprestimo(this.emprestimoDTO).subscribe({
      next: () => {         
        this.retornarParaLista()
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  public retornarParaLista(): void {
    this.router.navigate(['/empresto-list'])
  }

  public buscarLivros(): void {
    this.livroService.buscarTodosLivros().subscribe({
      next: (response) => {         
        this.listaLivros = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  public buscarUsuarios(): void {
    this.usuarioService.buscarTodosUsuarios().subscribe({
      next: (response) => {         
        this.listaUsuarios = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }
}
