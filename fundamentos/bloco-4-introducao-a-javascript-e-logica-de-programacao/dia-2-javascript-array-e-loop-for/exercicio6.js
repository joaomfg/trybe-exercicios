let numbers = [70, 8, 100, 2];
let impar = 0;

for (i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 !== 0) {
       impar += 1;
    } 
}

if(impar > 0) {
    console.log(impar)
} else {
    console.log("Nao existem numeros impares")
}