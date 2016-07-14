import {RouterConfig}		                 from	'@angular/router';
import {ParticipantListComponent}			from 	'./participantlist.component';
import {ParticipantComponent}				from	'./participant.component';

export const participantRoutes: RouterConfig= [
	{path: 'participants', component: ParticipantListComponent },
    {path: 'participants/:id', component: ParticipantComponent}
];