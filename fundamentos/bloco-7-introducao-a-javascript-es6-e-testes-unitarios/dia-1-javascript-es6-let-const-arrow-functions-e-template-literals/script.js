// // PARTE 1

// // 1.

// const testing = (escopo) => {
//     if (escopo === true) {
//       let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
//   }

// testing(true)

// // 2.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os numeros ${oddsAndEvens[5]}... se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// console.log(`Os numeros ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// PARTE 2

// 1. 

// const fatorial2 = (n) => {
//   let result = n
  
//     while (n > 2) {n === 0 ? 1 : result *= --n}

//     console.log(result);
// }

// fatorial2(6);

// 2.

const longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') 

const wordCheck = (word) => {
  const wordArr = word.split(' ');
  let maior = wordArr[0];

  for (let i = 0; i < wordArr.length; i += 1) {
      wordArr[i].length > maior.length ? maior = wordArr[i] : maior = maior; 
  } 

  console.log(maior);
} 
wordCheck(longestWord);
