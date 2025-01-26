import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-list',
  standalone: true,
  imports: [],
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.scss'
})
export class LivroListComponent {

constructor(private router: Router) {}


  public novoLivro(): void {
    this.router.navigate(['/livro-form'])
  }

  public irParaBuscaGoogle(): void {
    this.router.navigate(['/google-books'])
  }

}
