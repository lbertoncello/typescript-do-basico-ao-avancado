type VotationOption = {
	numberOfVotes: number;
	option: string;
};

export class Votation {
	private _votationOptions: VotationOption[] = [];

	constructor(public details: string) {}

	addVotationOptions(VotationOption: VotationOption): void {
		this._votationOptions.push(VotationOption);
	}

	vote(votationIndex: number): void {
		if (!this._votationOptions[votationIndex]) return;
		this._votationOptions[votationIndex].numberOfVotes += 1;
	}

	get votationOptions(): VotationOption[] {
		return this._votationOptions;
	}
}

export class VotationApp {
	private _votations: Votation[] = [];

	addVotation(votation: Votation): void {
		this._votations.push(votation);
	}

	showVotations(): void {
		for (const votation of this._votations) {
			console.log(votation.details);

			for (const votationOption of votation.votationOptions) {
				console.log(votationOption.option, votationOption.numberOfVotes);
			}

			console.log('###');
			console.log('');
		}
	}
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addVotationOptions({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'TypeScript', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual a sua linguagem de programação favorita?');
votation2.addVotationOptions({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Verde', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Preto', numberOfVotes: 0 });
votation2.vote(0);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(2);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
