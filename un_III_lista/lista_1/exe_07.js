function encontrarIndices(vetor, numero) {
    let indices = [];
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === numero) {
        indices.push(i);
      }
    }
  
    return indices;
  }
  
  let numeros = [4, 8, 8, 7, 0, 15, 100, 6, 8];
  let numeroProcurado = 8;
  
  let indicesEncontrados = encontrarIndices(numeros, numeroProcurado);
  
  console.log(`Número: ${numeroProcurado} \n Índice(s) encontrado(s): ${indicesEncontrados}`);
  