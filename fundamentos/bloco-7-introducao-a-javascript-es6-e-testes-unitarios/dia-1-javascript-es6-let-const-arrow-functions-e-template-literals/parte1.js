// PARTE 1

// 1.

const testing = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

testing(true)

// 2.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os numeros ${oddsAndEvens[5]}... se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

console.log(`Os numeros ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
