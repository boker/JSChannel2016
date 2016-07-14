import {bootstrap} from '@angular/platform-browser-dynamic';
//import 'bootstrap/dist/css/bootstrap.css';

import {AppComponent}	from './app.component';
import {appRouteProviders}	from './app.routes';

bootstrap(AppComponent, [appRouteProviders])
	.then(()=> console.log('Running!'))
	.catch(error=> console.log(error));