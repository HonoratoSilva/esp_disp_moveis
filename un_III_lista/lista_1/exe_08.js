function encontrarNegativo(negativo) {
    for (let i = 0; i < negativo.length; i++) {
      if (negativo[i] < 0) {
        return negativo[i];
      }
    }
  
    return `Não foram encontrados números negativos`;
  }
  
  let numeros = [1, -2, 3, 4, 5, 6, 7, 8];
  let primeiroNegativo = encontrarNegativo(numeros);
  
  console.log(`Primeiro número negativo encontrado: ${primeiroNegativo}`);
  