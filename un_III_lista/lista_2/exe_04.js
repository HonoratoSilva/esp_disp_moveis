function calcularDias(altura, subida, descida){
    let alturaAtual = 0;
    let dias = 1;

    while (alturaAtual < altura) {
        dias++;
        alturaAtual += subida;
        if(alturaAtual >= altura) {
            break;
        }
        alturaAtual -= descida;
    }

    return dias;
}

const altura = 10000;
const subida = 100;
const descida = 50;

const diasTopo = calcularDias(altura, subida, descida);

console.log(`Dona Lesma levará ${diasTopo} dias para chegar ao topo do muro`);