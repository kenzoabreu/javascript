var agora = new Date()
var diaSem = agora.getDay()
/*0-Domigo , 1-Segunda, 2-Terça, 3-Quarta, 4-Quinta, 5-Sexta, 6-Sábado */

console.log(diaSem)
switch(diaSem) {
    case 0:
    console.log('Domingo')
    break

    case 1:
        console.log('Segunda-Feira')
        break

    case 2: 
        console.log('Terça-Feira')
        break

    case 5:
        console.log('Sexta-Feira')
        break
}
