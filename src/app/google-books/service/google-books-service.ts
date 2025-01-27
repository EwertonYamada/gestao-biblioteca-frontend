import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../config/config-api";
import { Livro } from "../../livro/interface/livro";

@Injectable({
  providedIn: 'root'
})

export class GoogleBooksService {
  private apiUrl: string = `${API_URL}/livro`

  constructor(protected http: HttpClient) {}

  public buscarNoGoogleBooks(titulo: string): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.apiUrl}/buscar-titulo-google-books/${titulo}`)
  }
}