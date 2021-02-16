// console.log(Math.min(14, 7, -3, 23, 34)) //retorna menor valor
// console.log(Math.max(14, 7, -3, 23, 34)) // retorna maior valor

let numeros = [14, 7, -3, 23, 34]

// usando espalhamento para DESMONTAR o vetor
// SIM, são só os três pontinhos mesmo
// aka spreading
// console.log(Math.min(...numeros)) //retorna menor valor
// console.log(Math.max(...numeros)) // retorna maior valor

let maisNumeros = [4, 0, 11, ...numeros, 8, 19, 26]

// console.log(Math.min(...maisNumeros)) //retorna menor valor
// console.log(Math.max(...maisNumeros)) // retorna maior valor

// Função com parametro de resto OU argumento de resto
function somaTudo (...nums) {
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

// console.log(somaTudo(...maisNumeros))

function calcular (oper, ...nums) {
    let res
    switch (oper) {
        case '+':
            // res = 0
            // for (let n of nums) soma +=n
            res = somaTudo(...nums)
            break;
        
        case '*':
            res = 1
            for (let n of nums) res *= n
    }
    return res
}

console.log(calcular('+', ...maisNumeros))
console.log(calcular('*', ...maisNumeros))