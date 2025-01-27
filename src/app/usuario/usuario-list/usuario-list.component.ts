import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';
import { UsuarioService } from '../service/usuario-service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.scss'
})
export class UsuarioListComponent {
  public listaTodosUsusarios: Usuario[] = []

  constructor(
    private router: Router,
    private usuarioService: UsuarioService 
  ) { }

  ngOnInit(): void {
    this.buscarTodosUsuarios()
  }

  public novoUsuario(): void {
    this.router.navigate(['/usuario-form'])
  }

  public buscarTodosUsuarios(): void {
    this.usuarioService.buscarTodosUsuarios().subscribe({
      next: (response: Array<Usuario>) => {        
        this.listaTodosUsusarios = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  public deletar(usuario: Usuario): void {
      if (usuario.id == null) return
      this.usuarioService.deletar(usuario.id).subscribe({
        next: () => {
          this.buscarTodosUsuarios()
        },
        error: (error: HttpErrorResponse) => {
          console.error(error)
        }
      })
    }
}
