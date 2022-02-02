const salarioBruto = 10000;

//INSS
const inss1 = salarioBruto * 0.08
const inss2 = salarioBruto * 0.09
const inss3 = salarioBruto * 0.11
const inss4 = 570.88

let salarioINSS = 0;

if (salarioBruto <= 1556.94) {
    salarioINSS = salarioBruto - inss1
}
else if (salarioBruto <= 2594.92) {
    salarioINSS = salarioBruto - inss2
}
else if (salarioBruto <= 5189.82) {
    salarioINSS = salarioBruto - inss3
} else {
    salarioINSS = salarioBruto - inss4
}

//IR
const ir1 = (salarioINSS * 0.075) - 142.80;
const ir2 = (salarioINSS * 0.15) - 354.80;
const ir3 = (salarioINSS * 0.225) - 636.13;
const ir4 = (salarioINSS * 0.275) - 869.36; 

let salarioLiquido = 0;

if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS
}
else if (salarioINSS <= 2826.65) {
    salarioLiquido = salarioINSS - ir1
}
else if (salarioINSS <= 3751.05) {
    salarioLiquido = salarioINSS - ir2
}
else if (salarioINSS <= 4664.68) {
    salarioLiquido = salarioINSS - ir3
} else {
    salarioLiquido = salarioINSS - ir4
}

console.log("O salario liquido foi de R$" + salarioLiquido + "!")
