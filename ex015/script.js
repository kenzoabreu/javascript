function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem.jpg')
            } else if (idade < 50) {

            } else {

            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {
                
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}