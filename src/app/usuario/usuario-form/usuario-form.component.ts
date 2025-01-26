import { Component } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent {
  public usuario: Usuario = {
    nome: "",
    email: "",
    telefone: "",
    dataCadastro: new Date()
  }

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}



  public criarUsuario(): void {
    if(!this.inputsValidos()) throw "É necessário preencher todos os campos"
    this.usuarioService.criarUsuario(this.usuario).subscribe({
      next: () => {
        this.retornarParaList()
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  private inputsValidos(): boolean {
    return Boolean(this.usuario 
      && this.usuario.nome 
      && this.usuario.email 
      && this.usuario.telefone 
      && this.usuario.dataCadastro) 
  }

  public retornarParaList(): void {
    this.router.navigate(['/usuario-list'])
  }
}
