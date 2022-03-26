const telefono = {
  marca: 'Apple',
  modelo: 'iPhone 12 Pro',
  bateria: 4000,
  memoria: 16,
  almacenamiento: 512
}

// Ejercicio...
// Declarar un objeto para un campeon de league Of Legends

// Añadir.. lugar de nacimiento de forma compuesta...
// Añadir.. frases segun estado de animo..
const campeon = {
  name: 'garen',
  habilidades: 4,
  phanteon: 'demacia',
  linea: 'top',
  tipo: 'tanque',
  stats: {
    hp: 1400,
    atackDamage: 60
  },
  lugarNacimiento: {
    ciudad: 'Demacia',
    aldea: 'Aldea de los Gerreros'
  },
  frases: {
    comienzoPartida: 'rompan filas',
    utilizarHabilidad: 'por demacia',
    mediaPartida: 'por la justicia'
  },
  ataques: [
    {
      tecla: 'q',
      habilidad: 'Girar'
    },
    {
      tecla: 'w',
      habilidad: 'Escudo'
    },
    {
      tecla: 'e',
      habilidad: 'Correr'
    },
    {
      tecla: 'r',
      habilidad: 'Gritar'
    }
  ]
}

// console.log(campeon.frases.utilizarHabilidad)

// Ejercicio...
// Un objeto para un vehiculo, con las siguientes propiedades:
/**
 * info -> Marca,paisOrigen,año de fabricacion, modelo
 * caracteristicasTecnicas -> si tiene aire, tipo de transmision, modalidad de caja, si cuenta con vidrios electricos, cierre centralizado..
 * caracteristicas del motor -> caballos de fuerza,  litros del motor, tipo de acite
 *
 */

const vehiculo = {
  marca: 'Lamborghini',
  paisOrigen: 'Italia',
  anoFabricacion: 2014,
  modelo: 'huracan EVO',
  caracteristicasTecnicas: {
    aire: true,
    tipoTransmision: '4x2',
    modalidadCaja: 'automatica',
    vidriosElectricos: true,
    cierreCentralizado: true
  },
  caracteristicasMotor: {
    caballosFuerza: 610,
    litrosMotor: 100,
    tipoAceite: 'full 95'
  }
}
