function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 2 // data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora <= 12) {
    // bom dia!
    img.src="/imagens/manha.png"
    document.body.style.backgroundColor = "#EAC494"
} else if (hora >= 12 && hora <= 18) {
    // boa tarde
    img.src="/imagens/tarde.png"
    document.body.style.backgroundColor = "#523049"
} else {
    // boa noite
    img.src="/imagens/noite.png"
    document.body.style.backgroundColor = "#05213E"
}
}