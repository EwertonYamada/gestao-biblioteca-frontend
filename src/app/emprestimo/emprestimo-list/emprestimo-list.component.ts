import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo-list',
  standalone: true,
  imports: [],
  templateUrl: './emprestimo-list.component.html',
  styleUrl: './emprestimo-list.component.scss'
})
export class EmprestimoListComponent {

  constructor(private router: Router) {}

  public novoEmprestimo(): void {
    this.router.navigate(['/emprestimo-form'])
  }

}
