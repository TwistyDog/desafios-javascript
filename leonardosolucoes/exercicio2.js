const readline = readline("readline")

const calcularIMC = (peso, altura) => {
    return peso / (altura * altura)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite seu peso (kg): ", (altura) => {
    const imc = calcularIMC(Number(peso), Number(altura))

    console.log("Seu IMC é:" + imc.toFixed(2))

    rl.Close()
})