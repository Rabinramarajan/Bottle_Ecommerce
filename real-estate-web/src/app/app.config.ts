import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {
        "projectId": "real-estate-bae93",
        "appId": "1:285082439440:web:d187e089615fcf15e09f95",
        "storageBucket": "real-estate-bae93.appspot.com",
        "apiKey": "AIzaSyA6gJV9ZEjHL5lxMX1n3NaGyQODVBzgYec",
        "authDomain": "real-estate-bae93.firebaseapp.com",
        "messagingSenderId": "285082439440",
        "measurementId": "G-DQ4Q2S97FL"
      }
    ))), 
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideFirestore(() => getFirestore())), 
    importProvidersFrom(provideStorage(() => getStorage()))]
};
