let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let result = 0;

for (i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i]
    result = soma / numbers.length;
}

if (result <= 20) {
    console.log(result + ",", "e menor ou igual a 20")
} else {
    console.log(result + ",", "e maior que 20")
}