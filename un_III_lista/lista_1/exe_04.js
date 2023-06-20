const notasAlunos = [9, 8, 6, 7, 10, 5, 8, 7, 9, 7, 6, 8, 4, 9, 9, 8, 7, 6, 9, 8, 10, 9, 7, 8, 6, 5, 9, 7, 8, 6, 7, 8, 7, 6, 5, 9, 8, 6, 7, 9, 7, 8, 6, 9, 7, 8, 10, 9, 7, 8, 6, 5, 9, 7, 8, 6, 7, 8, 7, 6, 5, 9, 8, 6, 7, 9, 7, 8, 6, 9, 7, 8, 10, 9, 7, 8, 6, 5, 9, 7, 8, 6, 7, 8, 7, 6, 5];


let soma = 0;

console.log("Notas alunos: ")
for (let i = 0; i < notasAlunos.length; i++) {
  soma += notasAlunos[i];
  console.log(notasAlunos[i])
}

console.log(`Média das notas: ${soma / notasAlunos.length }`);