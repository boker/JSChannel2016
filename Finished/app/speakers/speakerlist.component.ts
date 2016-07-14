import {Component, OnInit}    from  '@angular/core';
import {SpeakerService}			from	'./speaker.service';
import {Speaker}					from	'./speaker';
import {ActivatedRoute}			from  '@angular/router';

@Component({
   selector: 'speakers',
   moduleId: module.id,
   templateUrl: 'speakerlist.component.html',
   providers: [ SpeakerService]
})
export class SpeakerListComponent implements OnInit{
    public speakers:Speaker[]=[];

    constructor(private speakerService: SpeakerService){}

    ngOnInit(){
    	this.speakerService.getSpeakers()
    	.then(speakers=> this.speakers= speakers);
    }

    showSpeakerDetail(speaker: Speaker){
    	console.log(speaker);
    	//router.navigate
    }
}