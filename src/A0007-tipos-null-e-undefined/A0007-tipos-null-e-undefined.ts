let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

// Caso algum parâmetro opcional não seja recebido, ele será
// dados com 'undefined'
export function createPerson(
	firstName: string,
	lastName?: string,
): {
	firstName: string;
	lastName?: string;
} {
	return {
		firstName,
		lastName,
	};
}

// O null pode ser usado conscientemente, diferente do undefined
export function squareOf(x: any) {
	if (typeof x === 'number') return x * x;
	return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
	console.log('Conta inválida');
	// ERRO!
	// console.log('Conta inválida', squareOfTwoNumber * 2);
} else {
	console.log(squareOfTwoNumber * 100);
}
