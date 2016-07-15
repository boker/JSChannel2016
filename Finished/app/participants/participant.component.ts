import  {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Participant} from		'./participant';

@Component({
	moduleId: module.id,
   selector: 'participant-detail',
   templateUrl: 'participant.component.html' 
})
export class ParticipantComponent{
    @Input() participant: Participant;
    @Output() OnSave = new EventEmitter<Participant>();

    editableParticipant: Participant;

    constructor(){}

    ngOnInit(){
    	 this.editableParticipant = JSON.parse(JSON.stringify(this.participant));
    }

    Save(){
    	this.OnSave.emit(this.participant);
    }

}