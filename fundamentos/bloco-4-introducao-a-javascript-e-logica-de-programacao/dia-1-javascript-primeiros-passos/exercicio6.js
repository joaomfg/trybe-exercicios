const piece = "REI";
const result = piece.toLowerCase();

if (result === "torre") {
  console.log("pode andar todas as casas na vertical e horizontal");
} 
else if (result === "peão") {
  console.log("No primeiro movimento pode andar duas casa pra frente, normalmente pode andar apenas uma casa para frente e pode comer uma casa na diagonal");    
}
else if (result === "cavalo") {
    console.log("anda em 'L' em todas as direcoes")
}
else if (result === "bispo") {
    console.log("apenas nas diagonais")
}
else if (result === "rei") {
    console.log("uma casa em todas as direcoes")
}
else if (result === "rainha") {
    console.log("movimento de todas as pecas, exceto a do cavalo")
} else {
    console.log("ERRO! PECA INVALIDA!!!")
}