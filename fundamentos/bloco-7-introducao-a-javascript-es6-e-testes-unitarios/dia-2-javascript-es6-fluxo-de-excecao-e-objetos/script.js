// // Parte 1:

// const value1 = document.getElementById('value1');
// const value2 = document.getElementById('value2');
// const resultado = document.getElementById('result');

// const checkInp = () => {
//     if (value1.value === '' || value2.value === '') {
//         throw new Error ("Erro! Insira um numero!!!"); 
//     }
// }

// const checkNum = () => {
//     if (isNaN(value1.value) || isNaN(value2.value)) {
//         throw new Error ("Erro! O valor inserido nao e um numero!")
//     }
// }

// function sum() {
//     try {
//         checkNum();
//         checkInp();
//         const result = parseInt(value1.value) + parseInt(value2.value);
//         resultado.innerHTML = `Resultado: ${result}`;
//     } catch (erro) {
//         result.innerHTML = erro.message;
//     } finally {
//         value1.value = '';
//         value2.value = '';
//     }
//   }
//   window.onload = () => {
//     const button = document.getElementById('button');
//     button.addEventListener('click', sum);
//   }

// // Parte 2:
// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//     console.log(`Ola ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`);
  
//   }
  
//   customerInfo(order);
  
//   const orderModifier = (order) => {
//     // Adicione abaixo as informações necessárias.
  
//   }
  
//   orderModifier(order);

// Parte 3:

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   const changeObj = (obj, key, value) => {
//     return obj[key] = value;
//   }
//   changeObj(lesson2, 'turno', 'noite');

//   ////////////////////////////////

//   const objKeys = (obj) => {
//     return Object.keys(obj); 
//   }
//   console.log(objKeys(lesson1))

//     ////////////////////////////////

//   function objSize(obj) {
//     return Object.keys(obj).length
//   }
//   console.log(objSize(lesson1));

//   ////////////////////////////////

  const allLessons = {lesson1, lesson2, lesson3}
  Object.assign({}, allLessons);
//   console.log(allLessons);

//   ////////////////////////////////

//   function students(obj) {
//     return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
//   }
//   console.log(students(allLessons));

//     ////////////////////////////////

//   function getValue(obj, key) {
//     const oi = Object.values(obj);
//     return oi[key]
//   }
//   console.log(getValue(lesson1, 2));

//     ////////////////////////////////

//   function verifyObj(obj, key, value) {
//     const arr = Object.entries(obj);
//     let result = false;

//     for (let i in arr) {
//         if (arr[i][0] === key && arr[i][1] === value) {
//             result = true;
//         }
//     }
//     return result
//   }
//   console.log(verifyObj(lesson3, 'turno', 'noite'));

// Parte Bonus

  function studentsMath(obj) {
    const oi = Object.keys(obj);
    let result = 0;

    for (let i in oi) {
        if (allLessons[oi[i]].materia === 'Matemática') {
            result += allLessons[oi[i]].numeroEstudantes; 
        }
    }
    return result;
  }
  console.log(studentsMath(allLessons))

  ////////////////////////////////
  
  function report(obj, prof) {
    let result = {};
    const oi = Object.keys(obj);

    for (let i in oi) {
        const keys = Object.values(obj[oi[i]]);
        for (let j in keys) {
            if(keys[j] === prof) {
                return Object.assign(result, obj[oi[i]])
            }
        }
    }
  }
  console.log(report(allLessons, 'Maria Clara'))
