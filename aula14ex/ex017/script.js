function tabuada() {
    let num = document.getElementById('num').value
    let tabuada = document.getElementById('tab')

    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num)
        let c = 1
        tabuada.innerHTML = ''

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}