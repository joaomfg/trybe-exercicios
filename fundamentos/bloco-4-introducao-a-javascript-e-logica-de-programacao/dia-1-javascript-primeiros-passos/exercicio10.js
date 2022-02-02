const custo = 500;

const valorProduto = 700;

const impostoSobreCusto = custo * 0.20;

const valorTotal = custo + impostoSobreCusto;

const lucro = valorProduto - valorTotal

if (custo < 0 || valorProduto < 0) {
    console.log("ERRO! VALOR INVALIDO!!!")
} else {
    console.log("A empresa faturou", lucro * 1000, "de lucro vendendo 1000 unidades!")
}