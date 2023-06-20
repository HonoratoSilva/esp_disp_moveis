const alunos = [
    {nome: 'José', nota1: 2, nota2: 8},
    {nome: 'Maria', nota1: 6.5, nota2: 9},
    {nome: 'João', nota1: 8.9, nota2: 3},
    {nome: 'Carlos', nota1: 10, nota2: 8},
    {nome: 'Francisca', nota1: 3.3, nota2: 1},
]

for (let i = 0; i < alunos.length; i++) {
    let mediaAlunos = (alunos[i].nota1 + alunos[i].nota2) / 2;
    console.table(`Nome: ${alunos[i].nome} | Notas: ${alunos[i].nota1} e ${alunos[i].nota2} | Média: ${mediaAlunos}`);
}