let colorButtons = document.querySelector('#btn-div');
let body = document.querySelector('body');
let p = document.getElementById('paragraph');
let fontBtn = document.getElementById('fontBtn');
let spaceBtn = document.getElementById('space-btn');
let fonteBtn = document.getElementById('font-btn')

window.onload = body.style.backgroundColor = localStorage.getItem('cor');
window.onload = p.style.fontSize = localStorage.getItem('tamanho');
window.onload = p.style.lineHeight = localStorage.getItem('espaco');
window.onload = p.style.fontFamily = localStorage.getItem('fonte');


colorButtons.addEventListener('click', function (event) {        
    body.style.backgroundColor = event.target.innerText;
    
    localStorage.setItem('cor', body.style.backgroundColor)
})

fontBtn.addEventListener('click', function (event) {
    let evento = event.target;
    
    if (evento.innerText === 'Pequeno') {
        p.style.fontSize = 'small';
    } else if (evento.innerText === 'Normal') {
        p.style.fontSize = '16px';
    } else if (evento.innerText === 'Grande') {
        p.style.fontSize = 'Larger';
    }   

    localStorage.setItem('tamanho', p.style.fontSize)
})

spaceBtn.addEventListener('click', function (event) {
    let evento = event.target;

    if (evento.innerText === 'Normal') {
        p.style.lineHeight = 'normal';
    } else {
        p.style.lineHeight = '1.6';
    }

    localStorage.setItem('espaco', p.style.lineHeight)
})

fonteBtn.addEventListener('click', function (event) {
    let evento = event.target;

    if (evento.innerText === 'Arial') {
        p.style.fontFamily = 'Arial';
    } else {
        p.style.fontFamily = 'Times New Roman';
    }

    localStorage.setItem('fonte', p.style.fontFamily)
})