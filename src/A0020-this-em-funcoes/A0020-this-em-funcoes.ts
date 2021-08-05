// this: Date não é considerado um argumento da função
// é apenas uma forma de tipar o this dentro do escopo da função
export function funcao(this: Date, nome: string, age: number): void {
	console.log(this);
	console.log(nome);
	console.log(age);
}

funcao.call(new Date(), 'Lucas', 30);
// A diferença de call para apply é que em apply os argumentos são passados como array
funcao.apply(new Date(), ['Luiz', 30]);
// ERRO! É necessário utilizar o método call ou apply para informar o this
// funcao('Lucas', 30);
