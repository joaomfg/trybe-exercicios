const angA = 60;
const angB = 60;
const angC = 60;

if (angA <= 0 || angB <= 0 || angC <= 0) {
    console.log("ERRO, NUMERO INVALIDO!!!")
}
else if (angA + angB + angC !== 180) {
    console.log(false)
}
else if (angA + angB + angC === 180) {
    console.log(true)
}