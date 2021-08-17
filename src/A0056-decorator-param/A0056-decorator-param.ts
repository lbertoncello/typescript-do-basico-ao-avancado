/*
 * --- Parameter Decorator ---
 * Permite apenas visualização do parâmetro, não permite alteração.
 */
function decorador(
	classPrototype: any,
	nomeMetodo: string | symbol,
	index: number,
): any {
	console.log('Sou o decorador de parâmetros.');
	console.log(classPrototype);
	console.log(nomeMetodo);
	console.log(index);

	return 'teste'; // Atualmente o return não faz nada no parameter decorator
}

export class Pessoa {
	nome: string;
	sobrenome: string;
	idade: number;

	constructor(
		@decorador nome: string,
		@decorador sobrenome: string,
		@decorador idade: number,
	) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
	}

	metodo(@decorador msg: string): string {
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
