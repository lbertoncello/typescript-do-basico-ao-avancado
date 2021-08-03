function semRetorno(...args: string[]): void {
	console.log(args.join(' '));
}

const pessoa = {
	nome: 'Lucas',
	sobrenome: 'Andrade',
	exibirNome(): void {
		console.log(`${this.nome} ${this.sobrenome}`);
	},
};

semRetorno('Lucas', 'João');
pessoa.exibirNome();

export { pessoa };
