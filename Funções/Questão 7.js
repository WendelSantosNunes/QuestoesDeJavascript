/*7) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, 
retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne:
“Aqui está, são 3 reais o quilo”. Teste com estas três opções . Crie também um default, que retornará uma mensagem de erro no
console.*/

function fruta (fruta) {
    switch(fruta){
        case 'maçã':
            return 'Não vendemos está fruta aqui'
        case 'Kiwi':
            return 'Estamos com escassez de Kiwis'
        case 'Melancia':
            return 'Aqui está, são 4 reais o quilo'   
        default:
            return 'Error no console'         
    }
}

console.log(fruta('maça'))// exemplo
// -> Error no console
