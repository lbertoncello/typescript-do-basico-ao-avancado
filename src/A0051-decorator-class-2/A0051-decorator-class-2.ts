// Decorators são funções que modificam seu objeto/classe/etc. sem precisar alterar sua declaração
@inverteNomeECor
export class Animal {
	constructor(public nome: string, public cor: string) {
		console.log('Sou a classe');
	}
}

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
	console.log('Sou o decorador e recebi', target);

	return class extends target {
		cor: string;

		constructor(...args: any[]) {
			super(...args);
			this.nome = this.inverte(args[0]);
			this.cor = this.inverte(args[1]);
		}

		inverte(valor: string): string {
			return valor.split('').reverse().join('');
		}
	};
}

const animal = new Animal('Macaco', 'roxo');
console.log(animal);
