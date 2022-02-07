//OBJETOS E FOR/IN

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1
console.log("Bem-vinda,", info.personagem)

//2
info['recorrente'] = 'Sim'
console.log(info);

//3
for (i in info) {
    console.log(i);
}

//4
for (i in info) {
    console.log(info[i]);
}

//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (i in info) {
    if(info[i] === 'Sim' && info2[i] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[i], 'e', info2[i]);
    }
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//6
console.log("O livor favorito de", leitor.nome, "se chama", leitor.livrosFavoritos[0].titulo);

//7
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })

console.log(leitor.livrosFavoritos);

//8
console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos");