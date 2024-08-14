let valores = [8, 1, 7, 4, 2 , 9, 4, 6, 2, 56, 23, 57, 34, 64]
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
    

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let pos = valores.indexOf(6)
console.log(`O valor 6 está na posição ${pos}`)