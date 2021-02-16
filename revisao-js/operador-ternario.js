let nota = 7.2
let situacao

// if (nota >= 6) {
//     situacao = "Aprovado"
// } else {
//     situacao = "Reprovado"
// }

// console.log(situacao)

situacao = nota >= 6 ? "Aprovado" : "Reprovado"

console.log(situacao)

let user = 'admin'
let userType

userType = user ==='admin' || user === 'root' ? 'Superuser' : 'Ordinary User'

console.log(userType)