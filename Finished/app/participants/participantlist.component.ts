import  {Component}     from    '@angular/core';
import  {Participant}	from		'./participant';
import  {ParticipantService} from './participant.service';
import  {ParticipantComponent} from './participant.component';

@Component({
	moduleId: module.id,
   selector: 'participants',
   templateUrl: 'participantlist.component.html',
   providers: [ParticipantService],
   directives: [ParticipantComponent]
})
export class ParticipantListComponent{
    participants: Participant[];
    public selectedParticipant: Participant;

    constructor(private participantService: ParticipantService){}

    ngOnInit(){
    	this.participantService.getParticipants()
    	.then(participants=> this.participants= participants);
    }

    selectParticipant(participant: Participant){
    	this.selectedParticipant = participant;
    }

    SaveParticipant(participant){
    	console.log('the participant to save is - ' + participant.name);
    }
}