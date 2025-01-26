import { Component } from '@angular/core';
import { Livro } from '../interface/livro';
import { Router } from '@angular/router';
import { LivroService } from '../service/livro-service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent {

  public livro: Livro = {
    titulo: "",
    autor: "",
    isbn: "",
    dataPublicacao: new Date(),
    categoria: ""
  }

  constructor(
    private livroService: LivroService,
    private router: Router
  ) { }

  public criarLivro(): void {
    if (!this.inputsValidos()) throw "É necessário preencher todos os campos"
    this.livroService.criarLivro(this.livro).subscribe({
      next: () => {
        this.retornarParaList()
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  private inputsValidos(): boolean {
    return Boolean(this.livro
      && this.livro.titulo
      && this.livro.autor
      && this.livro.dataPublicacao
      && this.livro.isbn
      && this.livro.categoria)
  }

  public retornarParaList(): void {
    this.router.navigate(['/livro-list'])
  }
}
