import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC525Wqo_TvIn_Y7QD4dsBIe19QBKvpCSE",
    authDomain: "cinehub-de335.firebaseapp.com",
    projectId: "cinehub-de335",
    storageBucket: "cinehub-de335.firebasestorage.app",
    messagingSenderId: "579500834252",
    appId: "1:579500834252:web:d99f322f5c817cda6e3169"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);