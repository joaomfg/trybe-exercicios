//EXERCICIO 1:
let number = 1;

for (i = 10; i > 0; i -= 1) {
    number *= i;
}

console.log(number)

//EXERCICIO 2:
let word = 'banana';
let reverse = '';

for (i = 0; i < word.length; i += 1) {
    reverse += word[word.length - 1 - i]
}
console.log(reverse)

//EXERCICIO 3:
let array = ['java', 'javascript', 'python', 'html', 'css', 'pneumoultramicroscopisilicovulcaniconiotico'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i]
    } else if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i]
    }
}
console.log("A maior palavra e:", maiorPalavra + ". A menor palavra e:", menorPalavra)

//EXERCICIO 4:
let maiorPrimo = 0;

for (let i = 1; i <= 50; i += 1) {
    isPrime = true;
    for (let divisor = 2; divisor < i; divisor += 1) {
        if(i % divisor === 0) {
            isPrime = false
        }
    }
        if(isPrime) {
        maiorPrimo = i;
    }
}
console.log(maiorPrimo)
