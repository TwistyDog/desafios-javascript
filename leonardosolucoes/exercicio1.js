const readline = require('readline');// para interação com usuário

//--- Funções de conversão
const celsiusToFahrenheit = (temperatura) => {
    return (temperatura * 9/5) + 32;
}

const fahrenheitToCelsius = (temperature) => {
    return (temperature - 32) * 5/9;
}

