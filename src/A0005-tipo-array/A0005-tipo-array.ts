// Array<T> ou T[]
export function multiplicaArgs(...args: Array<number>): number {
	return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
	return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
	return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

// Array imutável
const array1: readonly string[] = ['Lucas', 'Andrade'];
const array2: ReadonlyArray<string> = ['Ana', 'Andrade'];

console.log(result);
console.log(concatenacao);
console.log(upper);
console.log(array1);
console.log(array2);
