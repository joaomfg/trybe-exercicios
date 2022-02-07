// EXERCICIOS BONUS:

// 1


//2
function arrayOfNumbers (vector) {
    let numerosPares = [];

    for(let i in vector) {
        let vector1 = vector[i];
        for (i1 in vector1) {
            if (vector1[i1] % 2 === 0) {
                 numerosPares.push(vector1[i1]);
            }
        }
    }

    return numerosPares
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

//3
function contaFrutas () {
    const basket = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
        'Banana', 'Pera', 'Abacate', 'Uva',
      ];
    let cesta = {};
    for (let i in basket) {
        let value = basket[i];
        if (cesta[value] === undefined) {
            cesta[value] = 1;
        } else {
            cesta[value] += 1;
        }
    }
    
    let resumo = [];
    for(let index in cesta) {
        let mensagem = `${cesta[index]} ${index}`;
        if (cesta[index] > 1) {
            mensagem += 's'
            resumo.push(mensagem);
        }
    }
    console.log(`Sua cesta possui: ${resumo.join(', ')}`);
}

contaFrutas()

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

4 
console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no 
${moradores.blocoDois[1].andar} andar, apartamento ${moradores.blocoDois[1].apartamento}`);

//5
for (i = 0; i < moradores.blocoUm.length; i += 1) {
    console.log(`${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`);
}

for (i = 0; i < moradores.blocoDois.length; i += 1) {
    console.log(`${moradores.blocoDois[i].nome} ${moradores.blocoDois[i].sobrenome}`);
}




