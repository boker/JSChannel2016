import {Injectable}			from '@angular/core';
import {Speaker}				from './speaker';

const SPEAKERS: Speaker[] = [
	{id:1, name: 'Issac Asimov'},
	{id:2, name: 'Carl Sagan'}
];

@Injectable()
export class SpeakerService{
	
	getSpeakers(){
		return Promise.resolve(SPEAKERS);
	}

	getSpeaker(id: number){
		return this.getSpeakers()
		.then(speakers=> 
			speakers.find(speaker=> speaker.id === id));
	}
}