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

// Parte 2:
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    console.log(`Ola ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);
