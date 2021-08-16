import { Poll } from './Poll';

const plPoll = new Poll('Programming Languages');

plPoll.vote('TypeScript');
plPoll.vote('C++');
plPoll.vote('TypeScript');
plPoll.showResults();
