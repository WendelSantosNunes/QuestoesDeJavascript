/*06º)​Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

jurosSimples = (cap,taxa,tempo) =>{
    return cap + (cap * taxa * tempo)
}

jurosComposto =(cap,taxa,tempo) => {
    return cap * Math.pow((1 + taxa),tempo)
}

console.log(jurosSimples(100,10/100,2)) //exemplo
//-> 120
console.log(jurosComposto(100,10/100,2)) //exemplo
//-> 121.00000000000001

