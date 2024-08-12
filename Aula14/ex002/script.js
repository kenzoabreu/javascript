function conferir() {
    var resultado = document.getElementsByName('num')[0];
    var n = Number(resultado.value);
    var res = document.getElementById('res');
    res.innerHTML = '';  // Limpa o conteúdo anterior

    for(var m = 0; m <= 10; m++) {
        res.innerHTML += `${n} x ${m} = ${n * m} <br>`;
    }
}
/*function conferir(){
    var resultado = document.getElementsByName('num')
    var n = Number(resultado.value)
    var m = 0
    var res = document.getElementById('res')

    for(m == 0; m ==10; m++){
        res.innerHTML(`${n} x ${m}`)
    }
        
}
    */
