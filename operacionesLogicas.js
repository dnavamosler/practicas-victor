// Estas operaciones requieren un par de variables.. es decir elementos de ambos lados del operador 1 && 1 ó 1 || 1

// OPERACIÓN AND  que se representa con &&

// El resultado de la operación sera TRUE si y solo si! ambos lados de la operación son TRUE
// console.log(true && true) //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false

const desayune = true
const estaLloviendo = false

// console.log(desayune && !estaLloviendo)

// EJERCICIO -> con un console.log quiero comprobar si puedo lanzar la ulti de Morgana
const tengoMana = true
const estoyEnCooldown = false
const soyNivel6 = true

// console.log(tengoMana && !estoyEnCooldown && soyNivel6 )

// OPERACION OR   que se representan con ||

// Si al menos 1 elemento de la comparación es TRUE-> el resultante sera TRUE

// console.log(true || true) //true
// console.log(true || false) //false
// console.log(false || true) //false
// console.log(false || false) //false

// EJERCICIO -> con un console.log quiero comprobar si puedo ir a matar el dragon.

const elJunglaEstaMuerto = false
const laBotlineEstaMuerta = true
const elJunglaAliadoEstaVivo = true
const alMenos3AliadosVivos = false
const miInhibidorTopDestruido = false
const miTopLinePusheadaAlEnemigo = true
const elTopEnemigoEstaFeed = false
const miMidEstaAFK = false
const elDrakeEstaVivo = true

const primerasCondiciones = elJunglaEstaMuerto || laBotlineEstaMuerta
const condicionesJg = elJunglaAliadoEstaVivo || alMenos3AliadosVivos
const condicionesTop = miTopLinePusheadaAlEnemigo || !miInhibidorTopDestruido
const condicionesAdicionales = miMidEstaAFK || elTopEnemigoEstaFeed

console.log(
  primerasCondiciones &&
    condicionesJg &&
    elDrakeEstaVivo &&
    condicionesTop &&
    !condicionesAdicionales
)
