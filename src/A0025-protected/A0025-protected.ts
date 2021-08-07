export class Empresa {
	readonly nome: string; // public não é necessário, é o default
	protected readonly colaboradores: Colaborador[] = [];
	// Caso fosse desejável que o array fosse imutável
	// private readonly colaboradores: readonly Colaborador[] = [];
	private readonly cnpj: string;

	constructor(nome: string, cnpj: string) {
		this.nome = nome;
		this.cnpj = cnpj;
	}

	adicionaColaborar(colaborador: Colaborador): void {
		this.colaboradores.push(colaborador);
	}

	mostrarColaboradores(): void {
		for (const colaborador of this.colaboradores) {
			console.log(colaborador);
		}
	}
}

export class Udemy extends Empresa {
	constructor() {
		super('Udemy', '11.111.111/0001-11');
	}

	popColaborador(): Colaborador | null {
		const colaborador = this.colaboradores.pop();

		if (colaborador) return colaborador;

		return null;
	}
}

export class Colaborador {
	constructor(
		public readonly nome: string,
		public readonly sobrenome: string,
	) {}
}

const empresa1 = new Udemy();
// ERRO!
// empresa1.nome = 'Facebook';
const colaborador1 = new Colaborador('Lucas', 'Bertoncello');
const colaborador2 = new Colaborador('Maria', 'Bertoncello');
const colaborador3 = new Colaborador('João', 'Bertoncello');
empresa1.adicionaColaborar(colaborador1);
empresa1.adicionaColaborar(colaborador2);
empresa1.adicionaColaborar(colaborador3);
// Isso é permitido devido ao structural typing
empresa1.adicionaColaborar({
	nome: 'José',
	sobrenome: 'Bertoncello',
});

console.log(empresa1);
console.log(empresa1.nome);
empresa1.mostrarColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
