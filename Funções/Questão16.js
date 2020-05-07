/*16º)​ Faça um algoritmo que calcule o fatorial de um número.*/

fatorial = (n) =>{
    if(n == 0){
        return 1
    }
     return n * fatorial(n -1)
}

console.log(fatorial(5))
//-> 120