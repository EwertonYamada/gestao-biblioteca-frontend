export interface EmprestimoDTO {
    usuarioId: number | null,
    livroId: number | null,
    dataEmprestimo: Date | null,
    dataDevolucao: Date | null,
}