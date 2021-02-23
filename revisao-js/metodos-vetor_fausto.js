const pets = [
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

// find(): retorna a primeira a primeira ocorrência que corresponda ao critério informado
// Retorna undefined quando não encontra nenhum elemento coincidente
console.log(pets.find(elemento => elemento.peso > 10))
console.log(pets.find(pet => pet.idade < 4))
console.log(pets.find(pet => pet.especie === 'gato' && pet.sexo == 'M'))
console.log(pets.find(pet => pet.especie == 'calopsita'))

console.log('---------------------------------------------')

// some(): retorna true caso haja ALGUM elemento que corresponda ao critério
// ou false caso contrário
console.log(pets.some(pet => pet.nome === 'Cerberus'))
console.log(pets.some(pet => pet.especie === 'tartaruga' && pet.sexo === 'F'))

console.log('---------------------------------------------')

// every(): retorna true caso TODOS os elementos correspondam ao critério
// ou false caso contrário
console.log(pets.every(pet => pet.especie === 'cão'))
console.log(pets.every(pet => pet.peso >= 1))