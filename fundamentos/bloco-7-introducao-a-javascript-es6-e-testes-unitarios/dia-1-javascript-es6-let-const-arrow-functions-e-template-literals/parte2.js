//PARTE 2

// 1. 
const fatorial2 = (n) => {
    let result = n
    
      while (n > 2) {n === 0 ? 1 : result *= --n}
  
      console.log(result);
  }
  
  fatorial2(6);
  
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

// 3.
const btn = document.getElementById('btn');
const span = document.getElementById('clicks');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;
    span.innerText = clickCount;
})

// 4.
const func1 = (string) => {
  let tempArr = 'Tryber x aqui!'.split('');
  
  for (let i in tempArr) {
      tempArr[i] === 'x' ? tempArr[i] = string : tempArr[i] = tempArr[i];
  }
  const result = tempArr.join('');
  return result
}

const skills = ['Aprendo rapido', 'Criativo', 'HTML', 'CSS', 'JS']

const func2 = (func1) => {
  const sorted = skills.sort();

  return `${func1} Minhas cinco principais habilidades sao: ${sorted} #goTrybe`
}
console.log(func2(func1('Joao Marcelo')))
