/*
 * --- Record ---
 *  Generic já existente no TS. Cria uma assinatura para o objeto.
 */
const objeto1: Record<string, string | number> = {
	nome: 'Lucas',
	sobrenome: 'Andrade',
	idade: 24,
};

console.log(objeto1);

type PessoaProtocol = {
	nome?: string;
	sobrenome?: string;
	idade?: number;
};

/*
 * --- Required ---
 *  Obriga que campos opcionais se tornem obrigatórios
 */
type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
	nome: 'Lucas',
	sobrenome: 'Andrade',
	idade: 24,
};

/* ERRO! */
// const objeto2: PessoaRequired = {
// 	nome: 'Lucas',
// 	sobrenome: 'Andrade',
// };

console.log(objeto2);

/*
 * --- Partial ---
 *  Obriga que campos obrigatórios se tornem opcionais
 */
type PessoaPartial = Partial<PessoaRequired>;

const objeto3: PessoaPartial = {
	nome: 'Lucas',
	sobrenome: 'Andrade',
};

console.log(objeto3);

/*
 * --- Read Only ---
 *  Obriga que todos os campos sejam readonly
 */
type PessoaReadonly = Readonly<PessoaRequired>;

const objeto4: PessoaReadonly = {
	nome: 'Lucas',
	sobrenome: 'Andrade',
	idade: 24,
};

/* ERRO! */
// objeto4.idade = 25;

console.log(objeto4);

/*
 * --- Pick ---
 *  Pega apenas os campos especificados do tipo informado
 */
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

/* ERRO! */
// const objeto5: PessoaPick = {
// 	nome: 'Lucas',
// 	sobrenome: 'Andrade',
// 	idade: 24,
// };

const objeto5: PessoaPick = {
	nome: 'Lucas',
	sobrenome: 'Andrade',
};

console.log(objeto5);

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
/*
 * --- Exclude ---
 *  Pega apenas os campos que estão em ABC mas não estão em CDE
 */
type TipoExclude = Exclude<ABC, CDE>;
/*
 * --- Extract ---
 *  Pega apenas os campos que estão em ABC e estão em CDE
 */
type TipoExtract = Extract<ABC, CDE>;

/*
 * EXEMPLO REAL DE USO DO EXCLUDE/EXTRACT
 */
type AccountMongo = {
	_id: string;
	nome: string;
	sobrenome: string;
	idade: number;
};

// Cria um tipo AccountApi que tem todos os campos do tipo AccountMongo menos o campo _id, que é substituído por id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
	id: string;
};

const accountMongo: AccountMongo = {
	_id: 'asdaf1235adf',
	nome: 'Lucas',
	sobrenome: 'Bertoncello',
	idade: 24,
};

console.log('MONGO:');
console.log(accountMongo);

function mapAccount(accountMongo: AccountMongo): AccountApi {
	const { _id, ...accountData } = accountMongo;

	return { id: _id, ...accountData };
}

const accountApi = mapAccount(accountMongo);

console.log('API:');
console.log(accountApi);

export default 1;
