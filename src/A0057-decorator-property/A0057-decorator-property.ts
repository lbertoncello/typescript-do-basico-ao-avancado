function decorador(classPrototype: any, nome: string | symbol): any {
	console.log(classPrototype);
	console.log(nome);

	let valorPropriedade: any;

	return {
		get: () => valorPropriedade,
		set: (valor: any) => {
			if (typeof valor === 'string') {
				valorPropriedade = valor.split('').reverse().join('');
			} else {
				valorPropriedade = valor;
			}
		},
	};
}

export class Pessoa {
	@decorador
	nome: string;
	@decorador
	sobrenome: string;
	@decorador
	idade: number;

	constructor(nome: string, sobrenome: string, idade: number) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
	}

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
