let palavra = "Ifpi";
let resultado = "";

for (let i = 0; i < palavra.length; i++) {
  resultado = palavra.substr(0, i + 1);
  console.log(resultado);
}

for (let j = palavra.length - 2; j >= 0; j--) {
  resultado = palavra.substr(0, j);
  console.log(resultado);
}
