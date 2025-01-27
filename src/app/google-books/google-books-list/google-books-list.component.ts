import { Component } from '@angular/core';
import { GoogleBooksService } from '../service/google-books-service';
import { Livro } from '../../livro/interface/livro';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private googleBooksService: GoogleBooksService) {}

  public buscarNoGoogleBooks(): void {
    this.googleBooksService.buscarNoGoogleBooks(this.titulo).subscribe({
      next: (response: Array<Livro>) => {
        console.log(response);
        
        this.listaLivrosGoogle = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }
}
