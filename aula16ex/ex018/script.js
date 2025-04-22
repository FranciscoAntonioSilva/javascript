let num = document.querySelector('input#num');
let lista = document.querySelector('select#lista');
let resultado = document.querySelector('div#res');
let valores = [];

//Verificando se o número está entre 1 e 100
function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

//Verificando se o número está na lista
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(numero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado!`;
        lista.appendChild(item);
        resultado.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior)
                maior = valores[pos];
            if(valores[pos] < menor) 
                menor = valores[pos];
        }
        media = soma / total;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor informado é ${maior}.</p>`;
        resultado.innerHTML += `<p>O menor valor informado é ${menor}.</p>`;
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`;
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
    }
}