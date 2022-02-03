let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = [];

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === numbers[numbers.length - 1]) {
        result.push(numbers[i] * 2)
    } else {
        let multi = numbers[i] * numbers[i + 1];
        result.push(multi)
    }
}

console.log(result)

// resultado esperado: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]