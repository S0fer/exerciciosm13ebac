// Para rodar este código, foi utilizado o comando 'node index.js', porém é possível obter os resultados copiando o conteúdo e colando em um console qualquer
console.log("1. Resolva as operações:");

let a = 10
let b = 10
a++ // não foi possível incrementar fora de variáveis
b-- // não foi possível incrementar fora de variáveis

let operacoes = [
    10 + 15,
    '10' + 2,
    '10' * 2,
    '10' / 3,
    '10' % 3,
    10 + true,
    10 == '10',
    10 === '10',
    10 < 11,
    10 > 12,
    10 <= 10.1,
    10 > 9.99,
    10 != 'dez',
    10 + true,
    'dez' + true,
    10 + false,
    10 * false,
    true + true,
    a,
    b,
    1 & 1,
    1 & 0,
    0 & 0,
    1 & 0,
    0 / 1,
    5 + 5 == 10,
    '5' + '5' == 10,
    '5' * 2 > 9,
    (10 + 10) * 2,
    10 + 10 * 2,
]

for (let i = 0; i < operacoes.length; i++){
    console.log(`${operacoes[i]} ${typeof(operacoes[i])}`);
}

console.log("2. Responda as perguntas de acordo com as variáveis.");
var branco = 'preto';
var preto = 'cinza';
var cinza = 'branco';
var carro = 'preto';
var valor = 30000;
var prestacao = 750;

console.log(`${branco == 'branco'} ${typeof(branco == 'branco')}`);
console.log(`${branco == cinza} ${typeof(branco == cinza)}`);
console.log(`${carro === branco} ${typeof(carro === branco)}`);
var cavalo = carro == 'preto' ? 'cinza' : 'marron'; 'cinza' 
console.log(`${cavalo} ${typeof(cavalo)}`);

console.log("Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.");
console.log(valor/prestacao);
console.log("Somando as variáveis de cores é formada uma string de quantos caracteres?")
var c = branco + preto + cinza;
console.log(c.length);
