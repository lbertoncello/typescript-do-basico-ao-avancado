export class Pessoa {
	static idadePadrao = 0;
	static cpfPadrao = '000.000.000-00';

	constructor(
		public nome: string,
		public sobrenome: string,
		public idade: number,
		public cpf: string,
	) {}

	static falaOi(): void {
		console.log('OI');
	}

	static criaPessoa(nome: string, sobrenome: string): Pessoa {
		return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
	}

	metodoNormal(): void {
		console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
	}
}

const pessoa = new Pessoa('Lucas', 'Andrade', 24, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa.cpf);
pessoa.cpf = '111.111.111-11';
console.log(pessoa.cpf);
Pessoa.falaOi();
console.log(pessoa);
console.log(pessoa2);
pessoa2.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
