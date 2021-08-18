/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
	export const nomeDoNamespace = 'Lucas';

	export class PessoaDoNamespace {
		constructor(public nome: string) {}
	}

	const pessoaDoNamespace = new PessoaDoNamespace('Lucas');
	console.log(pessoaDoNamespace);

	export namespace OutroNamespace {
		export const nomeDoNamespace = 'Outro namespace';
	}
}

// Erro! Essa classe só existe dentro do namespace
// const pessoa = new PessoaDoNamespace('Lucas');

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Lucas');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
