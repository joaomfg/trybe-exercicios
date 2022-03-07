// Parte 1:

const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const resultado = document.getElementById('result');

const checkInp = () => {
    if (value1.value === '' || value2.value === '') {
        throw new Error ("Erro! Insira um numero!!!"); 
    }
}

const checkNum = () => {
    if (isNaN(value1.value) || isNaN(value2.value)) {
        throw new Error ("Erro! O valor inserido nao e um numero!")
    }
}

function sum() {
    try {
        checkNum();
        checkInp();
        const result = parseInt(value1.value) + parseInt(value2.value);
        resultado.innerHTML = `Resultado: ${result}`;
    } catch (erro) {
        result.innerHTML = erro.message;
    } finally {
        value1.value = '';
        value2.value = '';
    }
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
