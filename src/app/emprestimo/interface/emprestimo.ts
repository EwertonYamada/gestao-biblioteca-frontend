import { Livro } from "../../livro/interface/livro";
import { Usuario } from "../../usuario/interface/usuario";

export interface Emprestimo {
    id: number,
    usuario: Usuario,
    livro: Livro,
    dataEmprestimo: Date,
    dataDevolucao: Date,
}