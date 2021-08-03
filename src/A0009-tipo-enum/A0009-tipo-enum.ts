enum Cores {
	VERMELHO,
	AZUL,
	AMARELO,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

enum Cores2 {
	VERMELHO = 10,
	AZUL = 100,
	AMARELO = 200,
	ROXO = 'ROXO',
	ROSA = 201,
	PRETO,
}

console.log(Cores2);
console.log(Cores2.VERMELHO);
console.log(Cores2[10]);
console.log(Cores2[0]);
console.log(Cores2.ROXO);

enum Cores {
	VERDE = 'VERDE',
}

console.log(Cores);

function escolhaACor(cor: Cores): void {
	console.log(Cores[cor]);
}

escolhaACor(Cores.AZUL);
// Isso é um problema pois a chave não existe mas ele não restringe
escolhaACor(123456);
