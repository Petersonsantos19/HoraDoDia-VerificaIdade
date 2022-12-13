function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var cort = document.getElementById('cortesia')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <=12) {
        img.src = 'manha.png'
        document.body.style.background = '#fee484'
        cort.innerHTML = 'Bom dia!'
    }else if (hora <=18) {
        img.src = 'tarde.png'
        document.body.style.background = '#ff931b'
        cort.innerHTML = 'Boa tarde!'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#0a2a52'
        cort.innerHTML = 'Boa noite!'
    }
}
