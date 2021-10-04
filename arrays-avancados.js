// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let pares = [2, 4, 6, 8, 10];
let impares = pares.map(n => n - 1);
console.log(impares);

// Crie um array de nomes, que possua dois índices com o nome Maria. 
// Utilize o .filter() para obter apenas esses dois índices com o nome Maria

let nomes = ['Maria', 'Carla', 'Maria', 'João', 'Jorge'];
let maria = nomes.filter(a => a == 'Maria');
console.log(maria);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados. 
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [1, 2, 3, 4, 5];
let numString = numeros.reduce((acc, el) => acc + '-' + el);
console.log(numString);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”

let animais = ['cachorro', 'gato', 'coelho', 'furão'];

let textoAnimais = animais.forEach(nome => console.log('O nome do animal é ' + nome));