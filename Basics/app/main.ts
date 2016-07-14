import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent}	from './app.component';

bootstrap(AppComponent)
	.then(()=> console.log('Running!'))
	.catch(error=> console.log(error));