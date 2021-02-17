// função ilustrativa
// se precisar realmente elevar um número ao quadrado, usar operador ** ou Math.pow
function quadrado (n) {
    return n * n
}

console.log(quadrado(9))

// reescrevendo a funcao com arrow function
const funcaoQuadrado = n => n ** 2
console.log(funcaoQuadrado(9))

// argumentos: BASE, POTENCIA
function potencia (b, e) {
    return b ** e
}

const funcaoPotencia = (b, e) => b ** e

console.log(potencia(2,2), funcaoPotencia(2,2))

// funcao sem argumentos
function megasena() {
    // retorna um aleatorio entre 1 e 60
    // Math.random() retorna um num aleatorio entre 0 e 1
    // multiplicando por 60 temos um número entre 0 e 59 (fracionario)
    // soma 1 ajusta a faixa para entre 1 e 60
    // floor() retirar as casas decimais
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena())

// // funcoes sem argumento, os parenteses demarcam que isso é uma funcao
const funcaoMegasena = () => Math.floor(Math.random() * 60 + 1)

console.log(funcaoMegasena(), funcaoMegasena(), funcaoMegasena())

// console.log(Math.ceil(35.4943))
// console.log(Math.round(35.4943))
// console.log(Math.floor(35.4943))

// Função com parametro de resto OU argumento de resto
function somaTudo (...nums) {
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

// arrow function para funcoes com mais de uma linha de código
// as chaves aparecem para encapsular a lógica
// por conta do parametro ser um parametro de resto
// os parenteses devem ser colocados para encapsular
// esse parametro, pra mostrar que isso é um arg
const funcaoSomaTudo = (...nums) => {
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

console.log(somaTudo(2,3,5), funcaoSomaTudo(2,3,5))