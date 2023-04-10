//

function weatherCheck(weatherInput) {
    switch(weatherInput) {
        case "ensolarado" : dayWeather = ":)"
        return dayWeather
        case "nublado" : dayWeather =  ":|"
        return dayWeather
        case "chuvoso" : dayWeather = ":("
        return dayWeather
    }
}

console.log(weatherCheck("ensolarado"))