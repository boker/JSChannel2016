import {provideRouter, RouterConfig}	from '@angular/router';
import {participantRoutes}					from './participants/participants.routes';
import {speakerRoutes}						from './speakers/speakers.routes';


const allRoutes: RouterConfig = [
    ...participantRoutes,
    ...speakerRoutes,
    {path: '', redirectTo: '/speakers', pathMatch:'full'}
];

export const appRouteProviders = [
	provideRouter(allRoutes)
];