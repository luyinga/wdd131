function computeWindChilF(tempF, speed) {
    return 35.74 + (0,6215 * tempF) - (35.75 * math.pow(speed, 0.16)) + (0.4275 * tempF * math.pow(speed, 0.16));
}
function computeWindChilC(tempC, speed) {
    return 13.12 + (0,6215 * tempC) - (11.37 * math.pow(speed, 0.16)) + (0.3965 * tempF * math.pow(speed, 0.16));
}
let tempC = 10
let speed = 5
//if (tempC <= 10 && speed > 4.8) {
    //document.getElementById("wcf").innerHTML = `${computeWindChilC(tempC, speed).toFixed(1) oC}`
//}
