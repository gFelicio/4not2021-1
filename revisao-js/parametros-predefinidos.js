// parametros predefinidos ou opcionais em functions
// parametros opcionais sempre vêm por último
// podem ter vários params opcionais

function calcularArea (base, altura, forma = 'Q', casasDec = 2) {
    let res
    switch (forma) {
        case 'Q':
            res = base * altura
            break
        case 'T':
            res = base * altura / 2
            break
        case 'E':
            res = (base / 2) * (altura / 2) * Math.PI
    }
    return res.toFixed(casasDec)
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))
console.log(calcularArea(30, 60))

// caso seja necessário omitir um param pre definido que não seja o útlimo
// pode se usar o valor UNDEFINED em seu lugar
console.log(calcularArea(30, 60, undefined, 3))