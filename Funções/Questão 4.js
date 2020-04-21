/*1º) Crie um função que irá recebr dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da
divisão dois valores.*/
divisao = (n1,n2) => {
    console.log('Resultado:' + Math.floor(n1/n2)) // a redonda o número
    console.log('Resto:' + n1%n2)
}

divisao(11,4) // exemplo
// -> Resultado:4
// -> Resto:3
