// // if (
// //   carlosIsConnected &&
// //   guariIsConnected &&
// //   daniIsConnected &&
// //   victorIsConnected
// // ) {
// //   console.log('Vamoh Jugah PVP')
// // } else if (
// //   carlosIsConnected &&
// //   guariIsConnected &&
// //   daniIsConnected &&
// //   !victorIsConnected
// // ) {
// //   console.log('Jueguemos RANKED')
// // } else if (
// //   carlosIsConnected &&
// //   guariIsConnected &&
// //   !daniIsConnected &&
// //   !victorIsConnected
// // ) {
// //   console.log('Juguemos Valorant!')
// // } else {
// //   console.log('Que vamoh a jugah?')
// // }

// // Usuarios conectados
// const carlosIsConnected = false
// const guariIsConnected = true
// const daniIsConnected = true
// const victorIsConnected = true

// // Usuarios Con internet
// const carlosTieneInternet = true
// const guariTieneInternet = true
// const daniTieneInternet = true
// const victorTieneInternet = true

// // Usuarios esta borracho
// const carlosEstaBorracho = false
// const guariEstaBorracho = false
// const daniEstaBorracho = false
// const victorEstaBorracho = false

// /**Que vamos a jugar.. en funcion de los valores actuales de los jugadores */

// const carlosActivo = carlosIsConnected && carlosTieneInternet
// const guariActivo = guariIsConnected && guariTieneInternet
// const daniActivo = daniIsConnected && daniTieneInternet
// const victorActivo = victorIsConnected && victorTieneInternet

// if (
//   carlosActivo &&
//   daniActivo &&
//   victorActivo &&
//   !(carlosEstaBorracho && daniEstaBorracho && victorEstaBorracho) &&
//   !guariActivo
// ) {
//   console.log('jugamos forza')
// } else if (
//   carlosActivo &&
//   daniActivo &&
//   victorActivo &&
//   !guariActivo &&
//   (carlosEstaBorracho || daniEstaBorracho || victorEstaBorracho)
// ) {
//   console.log('jugamos lol')
// } else if (
//   !carlosActivo &&
//   daniActivo &&
//   victorActivo &&
//   guariActivo &&
//   !(guariEstaBorracho && daniEstaBorracho && victorEstaBorracho)
// ) {
//   console.log('jugamos cop Valorant')
// } else if (
//   !carlosActivo &&
//   daniActivo &&
//   victorActivo &&
//   guariActivo &&
//   (daniEstaBorracho || victorEstaBorracho || guariEstaBorracho)
// ) {
//   console.log('jugamos normal valorant')
// } else if (
//   carlosActivo &&
//   !daniActivo &&
//   victorActivo &&
//   guariActivo &&
//   !(guariEstaBorracho && carlosEstaBorracho && victorEstaBorracho)
// ) {
//   console.log('que jugamos?')
// } else if (
//   carlosActivo &&
//   !daniActivo &&
//   victorActivo &&
//   guariActivo &&
//   (guariEstaBorracho || carlosEstaBorracho || victorEstaBorracho)
// ) {
//   console.log('no jugamos')
// } else if (
//   carlosActivo &&
//   daniActivo &&
//   !victorActivo &&
//   guariActivo &&
//   !(guariEstaBorracho && carlosEstaBorracho && daniEstaBorracho)
// ) {
//   console.log('jugamos ranke de lol')
// } else if (
//   carlosActivo &&
//   daniActivo &&
//   !victorActivo &&
//   guariActivo &&
//   (guariEstaBorracho || carlosEstaBorracho || daniEstaBorracho)
// ) {
//   consolo.log('se ponen a hablar paja')
// } else if (
//   carlosActivo &&
//   daniActivo &&
//   victorActivo &&
//   guariActivo &&
//   !(
//     guariEstaBorracho &&
//     carlosEstaBorracho &&
//     daniEstaBorracho &&
//     victorEstaBorracho
//   )
// ) {
//   console.log('pvp de lol')
// } else if (
//   carlosActivo &&
//   daniActivo &&
//   victorActivo &&
//   guariActivo &&
//   (guariEstaBorracho ||
//     carlosEstaBorracho ||
//     daniEstaBorracho ||
//     victorEstaBorracho)
// ) {
//   console.log('video-llamada con camara')
// } else {
//   console.log('a trabajar')
// }

// const condicion = 'Victor'

// switch (condicion) {
//   case 'daniel':
//     console.log('Hola daniel, como estas?')
//     break
//   case 'jose':
//     console.log('Hola jose, como estas?')
//     break

//   default:
//     console.log('hola,No te conozco pero bienvenido!')
//     break
// }

const usuariosSeleccionados = 0

if (usuariosSeleccionados >= 1) {
  console.log('usuarios seleccionado con exito')
} else {
  console.log('debe selecionar un usuario')
}
