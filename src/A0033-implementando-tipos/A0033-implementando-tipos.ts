// export abstract class TipoPessoa {
// 	protected abstract nome: string;
// 	protected abstract sobrenome: string;
// 	protected abstract nomeCompleto(): string;
// }

// export class Pessoa extends TipoPessoa {
// 	// Ao alterar o encapsulamento da classe pai, não é possível passar para um nível mais restrito
// 	// Ex.: de protected para private
// 	constructor(public nome: string, public sobrenome: string) {
// 		super();
// 	}

// 	nomeCompleto(): string {
// 		return `${this.nome} ${this.sobrenome}`;
// 	}
// }

type TipoNome = {
	nome: string;
};

type TipoSobrenome = {
	sobrenome: string;
};

type TipoNomeCompleto = {
	nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
	// O encapsulamento só poder ser public ao implementar um type
	constructor(public nome: string, public sobrenome: string) {}

	nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}
}

const pessoa = new Pessoa('Lucas', 'Bertoncello');

console.log(pessoa.nomeCompleto());
