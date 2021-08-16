import { PollData } from './PollData';

export class Poll {
	public data: PollData = {};

	constructor(public name: string) {}

	vote(option: string): void {
		if (option in this.data) {
			this.data[option]++;
		} else {
			this.data[option] = 1;
		}
	}

	showResults(): void {
		console.log(`----- Results of the poll called ${this.name} -----`);
		for (const key of Object.keys(this.data)) {
			console.log(`${key}: ${this.data[key]}`);
		}
		console.log('--------------------------------------------');
	}
}
