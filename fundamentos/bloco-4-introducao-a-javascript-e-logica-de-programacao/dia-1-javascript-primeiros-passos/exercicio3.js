const a = 1150;
const b = 9000;
const c = 240;

if (a > b && a > c) {
    console.log("'a' e maior que 'b' e 'c'", "(" + a, ">", b, "&", c + ")")
}
else if (b > a && b > c) {
    console.log("'b' e maior que 'a' e 'c'", "(" + b, ">", a, "&", c + ")")
} else {
    console.log("'c' e maior que 'a' e 'b'", "(" + c, ">", a, "&", b + ")")
}