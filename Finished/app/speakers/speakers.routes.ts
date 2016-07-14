import {RouterConfig}		               from	'@angular/router';
import {SpeakerListComponent}			   from './speakerlist.component';
import {SpeakerComponent}				   from	'./speaker.component';

export const speakerRoutes: RouterConfig= [
	{path: 'speakers', component: SpeakerListComponent },
    {path: 'speakers/:id', component: SpeakerComponent}
];