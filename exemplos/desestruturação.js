// Esse conceito vindo do Ecmascript 6, serve para fazer um acesso "direito" a objetos e arrays
// Segue o exemplo abaixo 

let numeros = [1,2,3,4,5]; 
let pessoa  = {nome:"rogerio",idade:"24"} 

var [posicao_1,posicao_2,posicao_3,posicao_4,posicao_5] = numeros; 
var {nome} = pessoa; 

console.log(posicao_1) // resultado: 1 
console.log(nome) // resultado : rogerio 

// Antigamente, para acessar um array ou objeto era necessário acessar seu indice para ver o conteudo // 
// Desse modo, é feito um acesso direto atráves do nome de variável que você define 
/

