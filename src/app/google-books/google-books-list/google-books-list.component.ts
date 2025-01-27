import { Component } from '@angular/core';
import { GoogleBooksService } from '../service/google-books-service';
import { Livro } from '../../livro/interface/livro';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LivroService } from '../../livro/service/livro-service';

@Component({
  selector: 'app-google-books',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './google-books-list.component.html',
  styleUrl: './google-books-list.component.scss'
})
export class GoogleBooksListComponent {
  public titulo: string = ""
  public listaLivrosGoogle: Array<Livro> = []

  constructor(
    private googleBooksService: GoogleBooksService,
    private router: Router,
    private livroService: LivroService
  ) {}

  public buscarNoGoogleBooks(): void {
    this.listaLivrosGoogle = []
    this.googleBooksService.buscarNoGoogleBooks(this.titulo).subscribe({
      next: (response: Array<Livro>) => {        
        this.listaLivrosGoogle = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  public cadastrarLivro(livro: Livro): void {
    this.livroService.criarLivro(livro).subscribe({
      next: () => {
        this.retornarParaLivroList()      
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  public retornarParaLivroList(): void {
    this.router.navigate(['/livro-list'])        
  }
}
