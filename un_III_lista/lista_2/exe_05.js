function calcularParcelas(valorCompra, numParcelas) {
    const valorParcela = Math.floor(valorCompra / numParcelas);
    const resto = valorCompra % numParcelas;
    const parcelas = new Array(numParcelas).fill(valorParcela);

    for (let i = 0; i < resto; i++){
        parcelas[i]++;
    }

    return parcelas;
}

const parcelas = calcularParcelas(45, 7);

console.log(`Parcelas: ${parcelas}`)