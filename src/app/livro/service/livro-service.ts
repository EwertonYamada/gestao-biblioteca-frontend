import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../config/config-api";
import { Livro } from "../interface/livro";

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  private apiUrl: string = `${API_URL}/livro`

  constructor(protected http: HttpClient) {}

  public buscarTodosLivrosDisponiveis(): Observable<Array<Livro>> { 
    return this.http.get<Array<Livro>>(`${this.apiUrl}/buscar-livros-disponiveis`)
  }

  public buscarTodosLivros(): Observable<Array<Livro>> { 
    return this.http.get<Array<Livro>>(`${this.apiUrl}/buscar-todos`)
  }

  public criarLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${this.apiUrl}/criar-livro`, livro)
  }

  public buscarRecomendacoes(usuarioId: number): Observable<Array<Livro>> { 
    return this.http.get<Array<Livro>>(`${this.apiUrl}/buscar-recomendacoes/${usuarioId}`)
  }

  public deletar(id: number): Observable<void[]> {     
    return this.http.delete<Array<void>>(`${this.apiUrl}/deletar-livro/${id}`)
  }
}