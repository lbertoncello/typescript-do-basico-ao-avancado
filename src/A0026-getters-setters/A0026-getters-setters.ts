export class Pessoa {
	constructor(
		private nome: string,
		private sobrenome: string,
		private idade: number,
		private _cpf: string,
	) {}

	set cpf(cpf: string) {
		this._cpf = cpf;
	}

	get cpf(): string {
		return this._cpf.replace(/\D/g, '');
	}
}

const pessoa = new Pessoa('Lucas', 'Andrade', 24, '000.000.000-00');
console.log(pessoa.cpf);
pessoa.cpf = '111.111.111-11';
console.log(pessoa.cpf);
