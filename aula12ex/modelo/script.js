function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'images/fotomanha.jpg'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/fototarde.jpg'
    } else {
        img.src = 'images/fotonoite.jpg'
    }
}