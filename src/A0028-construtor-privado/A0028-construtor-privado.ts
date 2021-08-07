/* Singleton - GoF */
// Só permite que exista uma instância da classe
// Em outras palavras, ao tentar instanciar, a instância é criado se não houver
// E se houver, a instância existente é retornada

/* Factory Method - GoF */
// Um método que retorna uma instância de objeto da própria classe
export class Database {
	private static database: Database;

	private constructor(
		private host: string,
		private user: string,
		private password: string,
	) {}

	connect(): void {
		console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
	}

	static getDatabase(host: string, user: string, password: string): Database {
		if (Database.database) return Database.database;

		Database.database = new Database(host, user, password);
		return Database.database;
	}
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

// Agora ele semprpe vai retornar o mesmo database!
console.log(db1 === db2);
