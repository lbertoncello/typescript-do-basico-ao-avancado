/*
 * --- Type Predicate ---
 * No exemplo dado, define que a função retornará true sempre que value for do tipo number
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number';
}

console.log(isNumber(23));
console.log(isNumber('23'));

export function soma<T>(...args: T[]): number {
	const retorno = args.reduce((sum, value) => {
		if (isNumber(sum) && isNumber(value)) return sum + value;

		return sum;
	}, 0);

	return retorno;
}

console.log(soma(1, 2, 3, 4));
// ERRO! É necessário passar os argumentos como um array para que a função trate como se fosse apenas um argumento
// console.log(soma(1, 2, 3, 4, 'a'));
console.log(soma(...[1, 2, 3, 4, 'a', 1, 'b']));
console.log(soma('a', 'b', 'c'));
