import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { LivroListComponent } from './livro/livro-list/livro-list.component';
import { LivroFormComponent } from './livro/livro-form/livro-form.component';
import { LayoutPadraoComponent } from './layout-padrao/layout-padrao.component';
import { EmprestimoListComponent } from './emprestimo/emprestimo-list/emprestimo-list.component';
import { EmprestimoFormComponent } from './emprestimo/emprestimo-form/emprestimo-form.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutPadraoComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'usuario-list', component: UsuarioListComponent, title: 'Usuário'},
            {path: 'usuario-form', component: UsuarioFormComponent, title: 'Usuário'},
            {path: 'livro-list', component: LivroListComponent, title: 'Livro'},
            {path: 'livro-form', component: LivroFormComponent, title: 'Livro'},
            {path: 'emprestimo-list', component: EmprestimoListComponent, title: 'Empréstimo'},
            {path: 'emprestimo-form', component: EmprestimoFormComponent, title: 'Empréstimo'},

        ]
      },
];
