const pets =[
    {
        nome: 'Mel',
        especie: 'cão',
        idade: 2,
        sexo: 'F',
        peso: 5.2
    },
    {
        nome: 'Paçoca',
        especie: 'gato',
        idade: 8,
        sexo: 'F',
        peso: 3.2
    },
    {
        nome: 'Cerberus',
        especie: 'cão',
        idade: 6,
        sexo: 'M',
        peso: 22
    },
    {
        nome: 'Matusalém',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    },
    {
        nome: 'Paco',
        especie: 'papagaio',
        idade: 56,
        sexo: 'M',
        peso: 1
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    }
]

console.log('-------FIND-------')

//find(): retorna primeiro elemento com a condição
// retorna undefined caso não encontre
console.log(pets.find(pet => pet.nome === 'Cerberus'))
console.log(pets.find(pet => pet.nome === 'Mingau' && pet.especie === 'gato'))
console.log(pets.find(pet => pet.nome === 'Carlota' && pet.sexo === 'F'))

console.log('-------SOME-------')

// retorna true caso um elemento corresponda à certa condição
// retorna false caso nenhum elemento corresponda à condição
console.log(pets.some(pet => pet.nome === 'Cerberus'))
console.log(pets.some(pet => pet.especie === 'tartaruga' && pet.sexo === 'F'))

console.log('-------EVERY-------')

// retorna true caso todos os elementos correspondam ao parametro de filtragem
// retorna falso caso um elemento não corresponda ao parametro de filtragem
console.log(pets.every(pet => pet.especie === 'cão'))
console.log(pets.every(pet => pet.peso >= 1))

console.log('-------FILTER-------')

// filter(): retorna UM VETOR contendo todas as ocorrências da filtragem
// caso não tenha nenhuma ocorrência com os parametros de filtragem, retorna vetor vazio
console.log(pets.filter(x => x.especie === 'gato'))
console.log(pets.filter(x => x.idade > 20))
console.log(pets.filter(x => x.sexo === 'F' && x.especie === 'papagaio'))

console.log('-------MAP-------')
// Map(): cria um novo vetor com o mesmo número de elementos do vtor original
// correspondendo a algum tipo de transformação nos elementos
console.log(pets.map(e => e.nome.toUpperCase()))

console.log('-------MAP COM NÚMEROS-------')

const numeros = [2, 6, -3, 9, 5, -7, 1, 4]

// criando um vetor onde os elementos correspondem ao quadrado dos números do vetor original
console.log(numeros.map(x => x ** 2))

// reduce(): reduz um vetor de valores a um único valor
// PARAMETROS
// acumulador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual, que
// integrará o acumulador
console.log('-------REDUCE-------')
console.log('soma: -- ', numeros.reduce((acum, val) => acum + val))
console.log('multiplicação: -- ', numeros.reduce((acum, val) => acum * val))

let p1 = 'Bom '
let p3 = 'galera!'
console.log('concat de string: -- ', [p1, 'dia, ', p3].reduce((a, v) => a + v))

console.log('-------SOMANDO O PESO DOS PETS COM MAP E REDUCE-------')
// somando o peso de TODOS os pets
// abordagem 1:
// criando um vetor auxiliar contendo apenas os pesos dos pets
let pesos = pets.map(pet => pet.peso)
console.log(pesos, "PESOS")
console.log('SOMA DE TODOS OS PESOS', pesos.reduce((a, v) => a + v))

// abordagem 2:
// fazendo map + reduce em uma linha apenas
console.log('ENCAVALANDO TUDO JUNTO', pets.map(pet => pet.peso).reduce((acum, val) => acum + val))

// abordagem 3:
// reduce com param extra
// param 3 da arrow function = índice do elemento atual
// param 4 da arrow function =   o próprio vetor que está sendo reduzido
// param 2 do reduce = valor inicial do acumulador
console.log('ENCAVALANDO SÓ O REDUCE EXTRA', pets.reduce((acum, val, idx, vet) => acum + vet[idx].peso, 0))
console.log('SIMPLIFICANDO O ACIMA', pets.reduce((acum, val) => acum + val.peso, 0))

console.log('-------INCLUDES-------')
// includes(): retorna true caso o vetor inclua o parametro informado
console.log(numeros.includes(6))
console.log(numeros.includes(11))

// diferenca entre SOME e INCLUDES
// some() -> recebe uma fução para testar a existência de uma condição
// includes() -> recebe um valor SIMPLES (primitivo) para testar a existência