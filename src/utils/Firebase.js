import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1GWU01Z33Cmdd9IE05B_ITGlTxK44gig",
  authDomain: "appvedruna.firebaseapp.com",
  projectId: "appvedruna",
  storageBucket: "appvedruna.firebasestorage.app",
  messagingSenderId: "206304936523",
  appId: "1:206304936523:web:d03eb7ed67f8cce4dd03ce"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);