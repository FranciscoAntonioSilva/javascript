function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById('ano')
    var resultado = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //vai criar um elemento pr mim
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'images/criancahomem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/jovemhomem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'images/adultohomem.png')
            } else {
                img.setAttribute('src', 'images/idosohomem.png')
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'images/criancamulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/jovemmulher.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'images/adultamulher.png')
            } else {
                img.setAttribute('src', 'images/idosamulher.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br>`
        resultado.appendChild(img)
    }
}