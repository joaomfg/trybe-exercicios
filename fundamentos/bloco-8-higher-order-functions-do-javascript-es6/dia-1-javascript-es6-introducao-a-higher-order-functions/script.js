// // 1
// const employeeGenerator = (fullName) => {
//     const email = fullName.toLowerCase().split(' ').join('_');
//     return {fullName, email: `${email}@trybe.com`}
// }

// const newEmployees = (callback) => {
//     const employees = {
//         id1: callback('Pedro Guerra'),
//         id2: callback('Luiza Drumond'),
//         id3: callback('Carla Paiva'),
//     }
//     return employees;
// }

// console.log(newEmployees(employeeGenerator));

// // 2
// const check = (number, result) => {
//     return number === result ? 'Parabéns você ganhou' : 'Tente novamente'
// }

// const lotery = (n, callback) => {
//     const result = Math.floor((Math.random() * 5) + 1);
//     console.log(result);
//     return callback(n, result);
// }

// console.log(lotery(1, check));

// // 3
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'N.A', 'B'];

// const checkAnswers = (rightAnswers, studentAnswers) => {
//     if (rightAnswers === studentAnswers) {
//         return 1;
//     } else if (studentAnswers === 'N.A') {
//         return 0;
//     } else {
//         return -0.5
//     }
// }

// const resultadoFinal = (rightAnswers, studentAnswers, callback) => {
//     let resultado = 0;
//     for (let i in rightAnswers) {
//         const pontos = callback(rightAnswers[i], studentAnswers[i])
//         resultado += pontos;
//     }
//     return `A pontuacao final foi de: ${resultado} pontos`
// }

// console.log(resultadoFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

//BONUS
//Parte I:

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const damageGenerator = (max, min) => {
      const damage = Math.floor((Math.random() * max) + min)
      return damage;
  }

// 1
const dragonDmg = (dragon) => {
    const max = dragon.strength;
    const min = 15
    return damageGenerator(max, min);
}

// 2
const warriorDmg = (warrior) => {
    const min = warrior.strength;
    const max = min * warrior.weaponDmg;
    return damageGenerator(max, min);
}

// 3
const mageDmg = (mage) => {
    const max = mage.intelligence * 2;
    const min = mage.intelligence;

    const dano = damageGenerator(max, min);

    
    const manaObj = {
        damage: dano,
        spentMana: 15,
    }

    if (mage.mana < 15) {
        manaObj.damage = 'Nao possui mana o suficiente';
        manaObj.spentMana = 0
    }

    return manaObj;
}

// Parte II
const gameActions = {
    warriorTurn: (warriorDmg) => {
        const dmg = warriorDmg(warrior)
        dragon.healthPoints -= dmg;
        warrior.damage = dmg;
    },
    
    mageTurn: (mageDmg) => {
        const dmg = mageDmg(mage);
        dragon.healthPoints -= dmg.damage;
        mage.mana -= dmg.spentMana;
        mage.damage = dmg.damage
    },

    dragonTurn: (dragonDmg) => {
        const dmg = dragonDmg(dragon);
        warrior.healthPoints -= dmg;
        mage.healthPoints -= dmg;
        dragon.damage = dmg;
    },

    turn: () => battleMembers,
  };

  gameActions.warriorTurn(warriorDmg);
  gameActions.mageTurn(mageDmg);
  gameActions.dragonTurn(dragonDmg);
  console.log(gameActions.turn());

