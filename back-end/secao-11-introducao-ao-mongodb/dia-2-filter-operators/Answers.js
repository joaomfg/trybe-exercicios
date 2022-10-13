// Esse arquivo contem os métodos e suas repostas referentes aos exercicios do dia 2,
// seção 11 do módulo de Backend do curso da Trybe.

// (Note que só tem as questões marcadas com 'foguetes', ou seja, importantes para
// o projeto)

// Exercicio 2:
db.superheroes.find({ 'aspects.height': { $lt: 1.80 } })
// Resposta:
// [
//     {
//       _id: ObjectId("63488de1caf6619a62d2e8f2"),
//       name: 'Adam Monroe',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: {
//         eyeColor: 'blue',
//         hairColor: 'Blond',
//         height: -99,
//         weight: -44.9
//       },
//       publisher: 'NBC - Heroes'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e8f8"),
//       name: 'Abraxas',
//       alignment: 'bad',
//       gender: 'Male',
//       race: 'Cosmic Entity',
//       aspects: {
//         eyeColor: 'blue',
//         hairColor: 'Black',
//         height: -99,
//         weight: -44.9
//       },
//       publisher: 'Marvel Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e8fa"),
//       name: 'Alex Mercer',
//       alignment: 'bad',
//       gender: 'Male',
//       race: 'Human',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'Wildstorm'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e8fc"),
//       name: 'Ando Masahashi',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'NBC - Heroes'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e8ff"),
//       name: 'Angela',
//       alignment: 'bad',
//       gender: 'Female',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'Image Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e900"),
//       name: 'Angel',
//       alignment: 'good',
//       gender: 'Male',
//       race: 'Vampire',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'Dark Horse Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e909"),
//       name: 'Anti-Spawn',
//       alignment: 'bad',
//       gender: 'Male',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'Image Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e90e"),
//       name: 'Allan Quatermain',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'Wildstorm'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e90f"),
//       name: 'Alex Woolsly',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'NBC - Heroes'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e911"),
//       name: 'Aquababy',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: {
//         eyeColor: 'blue',
//         hairColor: 'Blond',
//         height: -99,
//         weight: -44.9
//       },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e91c"),
//       name: 'Atom',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e91d"),
//       name: 'Astro Boy',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: {
//         eyeColor: 'brown',
//         hairColor: 'Black',
//         height: -99,
//         weight: -44.9
//       }
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e91e"),
//       name: 'Atom III',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: { hairColor: 'Red', height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e920"),
//       name: 'Atom IV',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: {
//         eyeColor: 'brown',
//         hairColor: 'Black',
//         height: -99,
//         weight: 32.65
//       },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e922"),
//       name: 'Arsenal',
//       alignment: 'good',
//       gender: 'Male',
//       race: 'Human',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e923"),
//       name: 'Aztar',
//       alignment: 'good',
//       gender: 'Male',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e927"),
//       name: 'Azrael',
//       alignment: 'good',
//       gender: 'Male',
//       race: 'Human',
//       aspects: {
//         eyeColor: 'brown',
//         hairColor: 'Black',
//         height: -99,
//         weight: -44.9
//       },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e92e"),
//       name: 'Batgirl V',
//       alignment: 'good',
//       gender: 'Female',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e92f"),
//       name: 'Batgirl',
//       alignment: 'good',
//       gender: 'Female',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     },
//     {
//       _id: ObjectId("63488de1caf6619a62d2e931"),
//       name: 'Batgirl III',
//       alignment: 'good',
//       gender: 'Female',
//       aspects: { height: -99, weight: -44.9 },
//       publisher: 'DC Comics'
//     }
//     // ...
//   ]  

// Exercicio 3:
db.superheroes.find({ 'aspects.height': { $lt: 1.80 } }).count()
// Resposta:
215

// Exercicio 9:
db.superheroes.find({ 'aspects.hairColor': { $in: ['Black', 'No Hair'] } }).count()
// Resposta:
230

// Exercicio 12:
db.superheroes.find({ 'aspects.height': { $not: { $gt: 180 } } }).count()
// Resposta:
453

// Exercicio 19:
db.superheroes.deleteMany({ publisher: 'George Lucas' })
// Resposta:
// { acknowledged: true, deletedCount: 14 }
