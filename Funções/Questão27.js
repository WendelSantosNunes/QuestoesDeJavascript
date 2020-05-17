/* 27º)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule
se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize 
centímetros para as unidades de medida.*/

crescer = (altura1,taxa1,altura2,taxa2) => {
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        }else if(taxa1 < taxa2){
            return 'A criança 2 ultrapassara a criança 1 em 1 ano.'
        }else{
            return 'A criança 1 e 2 tem a mesma altura e taxa de crescimento.'
        }
    }else{
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                return 'A criança menor nunca irá ultrapassará a criança maior.'
            }else{
                return taxadecrescimento(altura2,taxa2,altura1,taxa1)
            }
        }else{
            if(taxa2 >= taxa1){
                return 'A criança menor nunca irá ultrapassará a criança maior.'
            }else{
                return taxadecrescimento(altura1,taxa1,altura2,taxa2)
            }
        }
    }
}

function taxadecrescimento(alturaMenor,taxaAlturaMenor,alturaMaior,taxaAlturaMaior){
   let qtdAnos = 0
   while(alturaMaior > alturaMenor){
       alturaMaior += taxaAlturaMaior
       alturaMenor += taxaAlturaMenor
       qtdAnos++
   }
   return qtdAnos
}

let tempo = crescer(1.50,0.02,1.30,0.04)// Exemplo
console.log(`${tempo} anos.`)
//-> 10 anos.
