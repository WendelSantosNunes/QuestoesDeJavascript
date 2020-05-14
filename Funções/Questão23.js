/*23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function colegio (codigo,nota1,nota2,nota3){
    let notas = [] 
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort()
    
    let media = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4)/10
    console.log(`Código do aluno: ${codigo}\nnotas: ${nota1}, ${nota2}, ${nota3} \n${media < 5 ? 'Reprovado.': 'Aprovado.'}`)
}

colegio(123,2.8,6,3.5)//Exemplo
//-> Código do aluno: 123
//-> notas: 2.8, 6, 3.5 
//-> Reprovado.