import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase({
		apiKey: "AIzaSyAAaDrmgSMPG-_ynUriH0RiHWrlBlDKoJQ",
		authDomain: "my-first-firebase-projec-fc115.firebaseapp.com",
		databaseURL: "https://my-first-firebase-projec-fc115.firebaseio.com",
		storageBucket: "my-first-firebase-projec-fc115.appspot.com",
    })
]);

