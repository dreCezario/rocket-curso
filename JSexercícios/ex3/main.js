let celsius
let fahrenheit

function celsiusToFahrenheit (temperatura) {
    const temCelsius = temperatura.toUpperCase().includes('C')
    const temFahrenheit = temperatura.toUpperCase().includes('F')

    if(!temCelsius && !temFahrenheit){
        throw new Error('Grau não identificado')
    }
    if (temCelsius) {
        let temperaturaReal = Number(temperatura.toUpperCase().replace('C', ''))

        fahrenheit = temperaturaReal * 9/5 + 32
        console.log(`Sua temperatura é de ${fahrenheit}F`)
    }
    if (temFahrenheit) {
        let temperaturaReal = Number(temperatura.toUpperCase().replace('F', ''))

        celsius = (temperaturaReal - 32) * 5/9
        console.log(`Sua temperatura é de ${celsius}C`)
    }
    
}

celsiusToFahrenheit('104F')