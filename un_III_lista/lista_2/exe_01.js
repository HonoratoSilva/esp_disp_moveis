function numeroPerfeito (numero) {
    let divisores = 0;

    for (let i = 0; i < numero; i++) {
        if (numero % i == 0) {
            divisores += i;
        }
    }

    if (divisores == numero) {
        return `${numero} é um número perfeito`;
    } else {
        return `${numero} não é um número perfeito`;
    }
}

let verificarNumero = numeroPerfeito(28);

console.log(verificarNumero)