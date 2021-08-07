/*
 * --- Composição ---
 * Relação em que uma classe depende da outra para funcionar e para existir.
 * É o tipo mais forte de relação.
 */
export class Carro {
	private readonly motor = new Motor();

	ligar(): void {
		this.motor.ligar();
	}

	acelerar(): void {
		this.motor.acelerar();
	}

	parar(): void {
		this.motor.parar();
	}

	desligar(): void {
		this.motor.desligar();
	}
}

export class Motor {
	ligar(): void {
		console.log('Motor está ligado...');
	}

	acelerar(): void {
		console.log('Motor está acelerando...');
	}

	parar(): void {
		console.log('Motor está parado...');
	}

	desligar(): void {
		console.log('Motor está desligado...');
	}
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
