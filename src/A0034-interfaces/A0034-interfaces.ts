/*
 * Types e interfaces são bem parecidos em TS na práticas.
 * Para se trabalhar com classes e objetos, é semanticamente preferível utilizar interfaces.
 */
interface TipoNome {
	nome: string;
}

interface TipoSobrenome {
	sobrenome: string;
}

interface TipoNomeCompleto {
	nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
	// O encapsulamento só poder ser public ao implementar um type
	constructor(public nome: string, public sobrenome: string) {}

	nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}
}

// Em TS é possível que um objeto instancie diretamente uma interface
const pessoaObj: TipoPessoa2 = {
	nome: 'Lucas',
	sobrenome: 'Bertoncello',

	nomeCompleto() {
		return this.nome + ' ' + this.sobrenome;
	},
};
const pessoa = new Pessoa('Lucas', 'Bertoncello');

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
