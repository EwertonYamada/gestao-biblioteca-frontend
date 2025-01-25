import { Component } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent {
  public usuario: Usuario = {
    nome: "",
    email: "",
    telefone: "",
    dataCadastro: ""
  }

  constructor() {}

  public salvarUsuario(): void {
    
  }

}
