/*18º)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

// -> Eu achei essa questão muito interessante, e por causa disso, também fiz a parte dos centavos

let cedulas = function (dinheiro,){
    let Notas = [100,50,10,5,1,0.50,0.25,0.10,0.05,0.01]
    
    console.log('NOTAS:')

    for(let i = 0; i < 10; i++){

        let resto = dinheiro % Notas[i] 
        let cedulas1 = (dinheiro - resto)/Notas[i]
       
        if(cedulas1 != 0){
        console.log(cedulas1 +' nota(s) de R$ ' + Notas[i].toFixed(2))
        dinheiro = resto
        }    
        if(i == 4){
            console.log('MOEDAS:')
        }
    }
}

cedulas(91.01) // Exemplo
//-> NOTAS:
//-> 1 nota(s) de R$ 50.00
//-> 4 nota(s) de R$ 10.00
//-> 1 nota(s) de R$ 1.00
//-> MOEDAS:
//-> 1 nota(s) de R$ 0.01
