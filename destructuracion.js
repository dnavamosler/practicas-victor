const deadpool = {
    nombre: 'Wade',
    apellido: 'wilson',
    poder: 'Regeneracion',
    // edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeAntiheroe({ nombre, apellido, poder, edad = 0 }) {
    
    console.log(nombre, apellido, poder, edad);
}

//const { nombre, apellido, poder, edad = 0 } = deadpool;

//imprimeAntiheroe( deadpool );

const heroes = ['Deadpool' , 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
//const[ h1, h2, h3] = heroes;
const[ , , h3] = heroes;

console.log(h3);