import { enableProdMode } from '@angular/core';

import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
	enableProdMode();
}

// Uncomment the following lines to activate the service worker
// if (navigator.serviceWorker) {
// 	navigator.serviceWorker.register('sw.js').then(() => {
// 		console.log('Service worker installed')
// 	}, err => {
// 		console.error('Service worker error:', err);
// 	});
// }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
