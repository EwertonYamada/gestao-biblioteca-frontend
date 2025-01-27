import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../service/livro-service';
import { Livro } from '../interface/livro';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.scss'
})
export class LivroListComponent {
  public listTodosLivros: Livro[] = []

  constructor(
    private router: Router,
    private livroService: LivroService
  ) { }

  ngOnInit(): void {
    this.buscarTodosLivros()
  }

  public novoLivro(): void {
    this.router.navigate(['/livro-form'])
  }

  public irParaBuscaGoogle(): void {
    this.router.navigate(['/google-books'])
  }

  private buscarTodosLivros(): void {
    this.livroService.buscarTodosLivros().subscribe({
      next: (response) => {
        this.listTodosLivros = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

}
