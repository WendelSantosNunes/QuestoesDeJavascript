/*24º)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um 
inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no
mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o 
respectivo mês escolhido.*/

anuidade = (mes,valor) => {
    if(mes >= 1 && mes <= 12){
        atraso = mes - 1 
        console.log((valor * (1 + 5/100)** atraso).toFixed(2))    
    }else{
        console.log("Mês inválido!")
    }
}

anuidade(4,100) //Exemplo
//-> 115.76
