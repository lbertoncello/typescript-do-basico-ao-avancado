// O structural typing verifica a estrutura do tipo e não a identidade.
// O TS não se preocupa com o nome do tipo, apenas com o conteúdo
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValue) => {
	return (
		user.username === sentValue.username && user.password === sentValue.password
	);
};

// Como a assinatura do objeto declarado é a mesma do type User,
// o TS infere que o objeto é do type User
const bdUser = { username: 'João', password: '123456' };
const sentUser = { username: 'João', password: '123456' };
const sentUser2 = { username: 'João', password: 123456 };
const loggedIn = VerifyUser(bdUser, sentUser);
// ERRO!
// const loggedIn2 = VerifyUser(bdUser, sentUser2);

console.log(loggedIn);
