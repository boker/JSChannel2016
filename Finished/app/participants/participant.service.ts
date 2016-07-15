import {Injectable}		from '@angular/core';
import {Participant}	 	from	'./participant';


const PARTICIPANTS: Participant[]=[
	{id:1, name: 'ajit', emailId: 'ajit@gmail.com'},
	{id:2, name: 'satyajit', emailId: 'satyajit@gmail.com'}
];

@Injectable()
export class ParticipantService{
	getParticipants(){
		return Promise.resolve(PARTICIPANTS);
	}

	getParticipant(id: number){
		return this.getParticipants()
		.then(participants=> participants.find(p=> p.id === id));
	}
}