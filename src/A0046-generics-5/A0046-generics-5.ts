export class Pessoa<T, U> {
	constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('Lucas', 20);
const pessoa2 = new Pessoa(['Lucas'], 20);
const pessoa3 = new Pessoa(['Lucas'], { idade: 20 });
const pessoa4 = new Pessoa<string, number>('Lucas', 20);

export class Pilha<T> {
	private contador = 0;
	private elementos: { [k: number]: T } = {};

	push(elemento: T): void {
		this.elementos[this.contador] = elemento;
		this.contador++;
	}

	pop(): T | null {
		if (this.estaVazia()) return null;

		this.contador--;
		const elemento = this.elementos[this.contador];
		delete this.elementos[this.contador];
		return elemento;
	}

	estaVazia(): boolean {
		return this.contador === 0;
	}

	tamanho(): number {
		return this.contador;
	}

	mostrarPilha(): void {
		for (const chave in this.elementos) {
			console.log(this.elementos[chave]);
		}
	}
}

// Neste caso ele não consegue inferir automaticamente o tipo
// Geralmente quando o tipo genérico não é passado no construtor, o TS não consegue inferir
// const pilha = new Pilha();
const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push('4');
const elemento = pilha.pop();
pilha.mostrarPilha();

while (!pilha.estaVazia()) {
	console.log(pilha.pop());
}
