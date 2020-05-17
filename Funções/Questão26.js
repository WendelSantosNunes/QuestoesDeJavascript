//26º) ​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function imparPares (array){
    let qtdPares = 0
    let qtdImpares = 0
     for(let i = 0; i < array.length; i++){
         if(array[i] % 2 == 0){
             qtdPares++
         }else{
             qtdImpares++
         }
     }
     console.log(`O array tem ${qtdPares} pares.`)
     console.log(`O array tem ${qtdImpares} impares.`)
}

let array  = [1,2,3,4,5,6]
imparPares(array)
//-> O array tem 3 pares.
//-> O array tem 3 impares.
