/* eslint-disable @typescript-eslint/no-namespace */
/*
 * No TS não é recomendável a utilização de namespace, uma vez que a mesma
 * funcionalidade pode ser obtida através do uso de modules que é preferível,
 * uma vez que se trata de um recurso nativo do JS.
 */

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

const varQueVaiFuncionarEmOutroArquivo =
	'Esta variável funciona em outro arquivo porque o namespace e os arquivos que importam o namespace são compilados em um só arquivo';
