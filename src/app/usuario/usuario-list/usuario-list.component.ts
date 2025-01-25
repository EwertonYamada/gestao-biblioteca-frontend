import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.scss'
})
export class UsuarioListComponent {

  constructor(private router: Router) {}


  public novoUsuario(): void {
    this.router.navigate(['/usuario-form'])
  }
}
