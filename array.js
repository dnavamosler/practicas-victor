const listaCompras = ['Verduras', 'Tomates', 'Pan de perros']

const listaCarros = [
  { nombre: 'Corsa' },
  { nombre: 'Optra' },
  { nombre: 'Spark' }
]

// console.log(listaCarros[0].nombre)

// Hacer una lista de al menos.. 3 elementos que contemplen personajes de rick y morty.. con al menos 3 propiedades

const personajes = [
  {
    nombre: 'rick',
    altura: 1.75,
    parentezco: 'abuelo',
    profesion: 'cientifico'
  },

  {
    nombre: 'morty',
    altura: 1.57,
    parentezco: 'nieto',
    profesion: 'estudiante'
  },
  {
    nombre: 'beft',
    altura: 1.72,
    parentezco: 'madre',
    profesion: 'medico de caballos'
  }
]

// un console.log que diga "Mi personaje favorito es rick, porque es cientifico aunque me gusta mucho como es beft como madre"

const rick = personajes[1]
const beft = personajes[0]

console.log(`
Mi personaje favorito es ${rick.nombre} porque es ${rick.profesion} aunque me gusta mucho es ${beft.nombre} como ${beft.parentezco}`)
