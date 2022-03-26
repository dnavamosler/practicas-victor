/**
 * variables y constantes para las siguientes propiedades de un telefono
 * ->nombre del telefono 🆗
 * ->marca 🆗
 * ->almacenamiento total 🆗
 * ->almacenamiento utilizado 🆗
 * ->almacenamiento disponible 💔
 * ->memoria ram total 🆗
 * ->bateria total     -> valor 🆗
 * ->bateria utilizada -> porcentaje 🆗
 * ->bateria disponible -> porcentaje 💔
 * ->posee wifi
 * ->posee camara frontal
 * ->año de fabricacion
 */

// Datos generales
const NOMBRE = 'galaxy 10'
const MARCA = 'samsumg'
const ANO = 2020
const RAM = 4
// Datos de alamacenamiento
const ALMACENAMIENTO = 64
let almacenamientoUtilizado = 30
let almacenamientoDisponible = ALMACENAMIENTO - almacenamientoUtilizado
// DATOS de bateria
const BATERIA = 4000
let bateriaUtilizada = 40
let beteriaDiponible = 100 - bateriaUtilizada
// Caracteristicas adicionales
const TIENE_WIFI = true
const TIENE_CAMARA = true

/**
 * Imprime en consola con un solo console.log los datos generales del dispositivo de forma HUMANIZADA
 */
console.log('FORMA 1 --------------')
console.log(
  'Nombre del dispositivo: ' +
    NOMBRE +
    ' ' +
    'Marca: ' +
    MARCA +
    ' ' +
    'Año de Fabricacion: ' +
    ANO +
    ' ' +
    'Memoria RAM: ' +
    RAM +
    'GB'
)
console.log('FORMA 2 --------------')
console.log(`
- Nombre del dispositivo: ${NOMBRE}
- Marca: ${MARCA}
- Año del Fabricacion: ${ANO}
- Memoria ram: ${RAM}GB 
`)
