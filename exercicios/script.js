function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`


if (hora >= 0 && hora < 12) {
    img.src = 'pexels-artur-roman-158558-1167355 (1).jpg'
    document.body.style.background = '#e2cd9f'
} else if ( hora >= 12 && hora < 18) {
    img.src = 'pexels-andersonmartins-retratos-2386144 (1).jpg'
    document.body.style.background = '#b9846f'
} else {
    img.src = 'pexels-enricoperini-705425.jpg'
    document.body.style.background = '#515154'
}
}