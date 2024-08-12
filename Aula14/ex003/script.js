function gerarCorAleatoria() {
    // Gera uma cor aleatória em formato hexadecimal
    var letras = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function mudarCor() {
    // Gera uma cor aleatória e aplica ao background do body
    var corAleatoria = gerarCorAleatoria();
    document.body.style.backgroundColor = corAleatoria;
}