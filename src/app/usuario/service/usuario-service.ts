import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../config/config-api";
import { Usuario } from "../interface/usuario";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl: string = `${API_URL}/usuario`

  constructor(protected http: HttpClient) {}

  public buscarTodosUsuarios(): Observable<Array<Usuario>> { 
    return this.http.get<Array<Usuario>>(`${this.apiUrl}/buscar-todos`)
  }

  public criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/criar-usuario`, usuario)
  }
}