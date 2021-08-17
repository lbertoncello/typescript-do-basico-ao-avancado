/*
 * --- Property Descriptor ---
 * Define parâmetros de configuração para uma determinada propriedade de um objeto
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 */
function decorador(
	classPrototype: any,
	nomeMetodo: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor {
	console.log(classPrototype);
	console.log(nomeMetodo);
	console.log(descriptor);

	return {
		writable: false,
		enumerable: false,
		configurable: false,
		value: function (...args: any[]) {
			return args[0].toUpperCase();
		},
	};
}

export class Pessoa {
	nome: string;
	sobrenome: string;
	idade: number;

	constructor(nome: string, sobrenome: string, idade: number) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
	}

	@decorador
	metodo(msg: string): string {
		return `${this.nome} ${this.sobrenome}: ${msg}`;
	}

	get nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}

	set nomeCompleto(valor: string) {
		const palavras = valor.split(/\s+/g);
		const primeiroNome = palavras.shift();
		if (!primeiroNome) return;
		this.nome = primeiroNome;
		this.sobrenome = palavras.join(' ');
	}
}

const pessoa = new Pessoa('Lucas', 'Bertoncello', 30);
const metodo = pessoa.metodo('Olá mundo');

console.log(metodo);
