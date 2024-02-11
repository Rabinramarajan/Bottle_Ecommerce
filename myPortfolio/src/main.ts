import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9UwKpQA8xa95eOxj7JT1nunxsvZcwnLk",
  authDomain: "myportfolio-26-67213.firebaseapp.com",
  projectId: "myportfolio-26-67213",
  storageBucket: "myportfolio-26-67213.appspot.com",
  messagingSenderId: "684882078610",
  appId: "1:684882078610:web:e3da5e57a1594d90a92f4b",
  measurementId: "G-F095TL3W7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
