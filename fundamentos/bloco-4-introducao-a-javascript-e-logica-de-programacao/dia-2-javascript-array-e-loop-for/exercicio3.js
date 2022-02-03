let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let result = 0;

for (i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i]
    result = soma / numbers.length;
}

console.log(result)
