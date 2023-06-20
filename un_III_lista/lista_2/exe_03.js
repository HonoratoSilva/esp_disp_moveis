function numeroPalindromo(numero){
    if (numero == String(numero).split("").reverse().join("")){
        return `O número ${numero} é palindromo`;
    } else {
        return `O número ${numero} não é palindromo`
    }
}

let entradaNumero = numeroPalindromo(14541);

console.log(entradaNumero);