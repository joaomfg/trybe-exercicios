//FUNCOES

// //1
// function verificaPalindromo(palavra) {
//     let word = palavra.split('').reverse().join('')

//     if (word === palavra) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(verificaPalindromo('tenet')); 

// //2
// function maiorNumero(numbers) {
//     let maiorNumero = numbers[0];
    
//     for (i in numbers) {
//         if (numbers[i] > maiorNumero) {
//             maiorNumero = numbers[i];
//         }
//     }
//     return maiorNumero;
// }

// let numbers = [2, 3, 6, 7, 10, 1, 1000];

// console.log(maiorNumero(numbers));

// //3
// function menorNumero(numbers) {
//     let menorNumero = numbers[0];
    
//     for (i in numbers) {
//         if (numbers[i] < menorNumero) {
//             menorNumero = numbers[i];
//         }
//     }
//     return menorNumero;
// }

// let numbers2 = [2, 4, 6, 7, 10, 0, -3];;

// console.log(menorNumero(numbers2));

// //4
// function maiorPalavra(palavra) {
//     let maiorPalavra = palavra[0]
//     for (i in palavra) {
//         if(palavra[i].length > maiorPalavra.length) {
//             maiorPalavra = palavra[i];
//         }
//     }
//     return maiorPalavra;
// }

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Joao Marcelo'];

// console.log(maiorPalavra(nomes));

//5
// function contaNumeros(numeros) {
//     let num = {};
//     for (let i in numeros) {
//         let value = numeros[i];
//         if(num[value] === undefined) {
//             num[value] = 1;
//         } else {
//             num[value] += 1;
//         }
//     }
    
//     let contNumero = 0;
//     let contRepeat = 0;

//     for (index in num) {
//         if (num[index] > contRepeat) {
//             contRepeat = num[index];
//             contNumero = index;
//         }
//     }
//     return contNumero
// }

// let numeros = [2, 3, 2, 5, 8, 2, 3];

// console.log("O numero que mais se repete e o:", contaNumeros(numeros));

//6
// function somatorio(n) {
//     let soma = 0;
//     if (n < 1) {
//         return "INVALIDO! Numero menor ou igual a 0!"
//     } else {
//         for (i = 0; i <= n ; i += 1) {
//             soma += n - i
//         }
//     }
//     return soma;
// }
// console.log(somatorio(5));

//7
function verificaFimDaPalavra (word, ending) {
    if (ending.length >= word.length) {
        return "ERRO!!!"
    }
    
    let palavraInverse = word.split('').reverse().join('');
    let finalInverse = ending.split('').reverse().join('');
    let resultado;

    for (let i = 0; i < finalInverse.length; i += 1) {
        if (finalInverse[i] !== palavraInverse[i]) {
            resultado = false
            break;
        } else {
            resultado = true;
        }
    }
    return resultado
}

let word = 'marcelo';
let ending = 'arcelo';

console.log(verificaFimDaPalavra(word, ending));
