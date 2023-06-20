const alunos = [
    {nome: 'José', nota: 2},
    {nome: 'Maria', nota: 6.5},
    {nome: 'João', nota: 8.9},
    {nome: 'Carlos', nota: 10},
    {nome: 'Francisca', nota: 3.3},
]

for (let i = 0; i < alunos.length; i++) {
    alunos[i].nota > 5 ? console.log(alunos[i].nome) : "";
}