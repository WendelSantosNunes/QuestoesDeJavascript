// 25)​ Fazer um programa para encontrar todos os pares entre 1 e 100.

pares = ( ) => {
    i = 2
    while(i < 100){
        if(i % 2 == 0){
            console.log(i);
        }
        i++
    }
}

pares() // Exemplo
// 2
// 4
// 6
// ...
// 98