import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../config/config-api";
import { EmprestimoDTO } from "../interface/emprestimo-dto";
import { Emprestimo } from "../interface/emprestimo";

@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {
  private apiUrl: string = `${API_URL}/emprestimo`

  constructor(protected http: HttpClient) { }

  public buscarTodosEmprestimos(): Observable<Array<Emprestimo>> {
    return this.http.get<Array<Emprestimo>>(`${this.apiUrl}/buscar-todos`)
  }

  public criarEmprestimo(emprestimoDTO: EmprestimoDTO): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(`${this.apiUrl}/emprestar-livro`, emprestimoDTO)
  }
}