// toda vez que rola um export, sem ser default, a importação dele tem que vir com chaves
// é tipo uma desestruturação da paradinha
import { numeros } from './includes/dados.mjs'
import { somaVet, quadradoVet } from './includes/funcoes.mjs'

// nesse caso aqui, como o arquivo FUNCOES2 só tem UMA função
// e ela tá sendo exportada com export default, 
// a importação dela vem sem as chaves
import dobraVet from './includes/funcoes2.mjs'

console.log(somaVet(numeros))
console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))
