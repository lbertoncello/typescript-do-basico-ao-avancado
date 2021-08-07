/*
 * --- Agregação ---
 * Tipo de associação em que uma classe depende da outra para funcionar corretamente mas não para existir.
 * É um tipo forte de relação.
 */
export class CarrinhoDeCompras {
	private readonly produtos: Produto[] = [];

	inserirProdutos(...produtos: Produto[]): void {
		for (const produto of produtos) {
			this.produtos.push(produto);
		}
	}

	quantidadeProdutos(): number {
		return this.produtos.length;
	}

	valorTotal(): number {
		return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
	}
}

export class Produto {
	constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
