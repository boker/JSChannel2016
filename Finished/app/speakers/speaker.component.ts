import {Component, Output, EventEmitter}     	from '@angular/core';
import {NgForm}			from '@angular/common';
import {Speaker}				from './speaker';
import {ActivatedRoute}	from '@angular/router';
import {SpeakerService} from './speaker.service';

@Component({
	moduleId: module.id,
   selector: 'speaker',
   templateUrl: 'speaker.component.html',
   providers: [ActivatedRoute, SpeakerService]
})
export class SpeakerComponent{
   speaker: Speaker;
   subscription: any;

   constructor(private route: ActivatedRoute, private speakerService: SpeakerService){}

   ngOnInit(){
   	this.subscription = this.route.params.subscribe(params=> {
   		let id = +params['id'];
   		this.speakerService.getSpeaker(id)
   		.then(speaker=> this.speaker= speaker);
   	});
   }

   @Output() saveSpeaker= new EventEmitter<Speaker>();

   save(speaker:Speaker){
   	this.saveSpeaker.emit(this.speaker);
   }

   ngOnDestroy(){
   	this.subscription.unSubscribe();
   }
}