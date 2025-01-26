import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmprestimoService } from '../service/emprestimo-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Emprestimo } from '../interface/emprestimo';

@Component({
  selector: 'app-emprestimo-list',
  standalone: true,
  imports: [],
  templateUrl: './emprestimo-list.component.html',
  styleUrl: './emprestimo-list.component.scss'
})
export class EmprestimoListComponent {
  public listaEmprestimos: Emprestimo[] = []
  
  constructor(
    private router: Router,
    private emprestimoService: EmprestimoService
  ) {}

  public novoEmprestimo(): void {
    this.router.navigate(['/emprestimo-form'])
  }

  public buscarTodosEmprestimos(): void {
    this.emprestimoService.buscarTodosEmprestimos().subscribe({
      next: (response) => {         
        this.listaEmprestimos = response
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }
}
