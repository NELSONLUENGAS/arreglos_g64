// Arreglos
const array = ['perros', 'gatos', 'cabras'];

const array2 = ['perros', 'gatos', 'cabras', ['Frutas', 'verduras', 'Granos']];

const array3 = [
	'perros',
	'gatos',
	'cabras',
	['Frutas', 'verduras', 'Granos', ['Carros', 'Motos', 'Bicicletas']],
];

// for (let i = 0; i < array.length; i++) {
// 	console.log(`El index es: ${i}  y el valor es: ${array[i]}`);
// }

// for (const valor of array2) {
// 	console.log(`El elemento es: ${valor}  `);

// 	if (Array.isArray(valor)) {
// 		console.log(`Este es el segundo nivel`);

// 		for (const valor2 of valor) {
// 			console.log(`El elemento es: ${valor2}  `);
// 		}
// 	}
// }

// for (const index in array) {
// 	console.log(`El elemento es: ${array[index]}  `);
// }

// Objetos
const objetos_casa = ['ventanas', 'cocina', 'lavadora', 'puertas', 'comedor'];

console.log(objetos_casa.splice(0, 3));
// [clave]: valor
const casa = {};

for (const obj of objetos_casa) {
	// casa[obj]   => obj = ventana   casa ==> { ventanas: '' }
	casa[obj] = obj;
}

const casita = {
	ventanas: 3,
	puertas: 5,
	sala_comedor: ['sillas', 'comedor', 'cubiertos', 'mesa de centro'],
	habitaciones: {
		principal: [],
		invitados: [],
	},
};

for (const key in casita) {
	// console.log(`La clave es: ${key}  y el valor es: ${casita[key]}`);
	console.log(typeof casita[key]);
}

const entradas = Object.entries(casita);

// console.log(Object.keys(casita));
