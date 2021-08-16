// Decorators são funções que modificam seu objeto/classe/etc. sem precisar alterar sua declaração

interface Constructor {
	new (...args: any[]): any;
}

//Decorator fabric
function inverteNomeECor(param1: string, param2: string) {
	// Closure
	return function (target: Constructor) {
		console.log('Sou o decorador e recebi', target);

		return class extends target {
			cor: string;
			nome: string;

			constructor(...args: any[]) {
				super(...args);
				this.nome = this.inverte(args[0]);
				this.cor = this.inverte(args[1]);
			}

			inverte(valor: string): string {
				return `${valor.split('').reverse().join('')} ${param1} ${param2}`;
			}
		};
	};
}

function outroDecorador(param1: string) {
	return (target: Constructor) => {
		console.log('Sou o outro decorador ' + param1);

		return target;
	};
}

@outroDecorador('O parâmetro do outro decorador')
@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
	constructor(public nome: string, public cor: string) {
		console.log('Sou a classe');
	}
}

const animal = new Animal('Macaco', 'roxo');
console.log(animal);
