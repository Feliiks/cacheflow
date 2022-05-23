// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyA2Tl4wH9YdFroH7wnMFCNMJKIoDAf_fCg",
    authDomain: "cacheflow-ff37e.firebaseapp.com",
    projectId: "cacheflow-ff37e",
    storageBucket: "cacheflow-ff37e.appspot.com",
    messagingSenderId: "287700634485",
    appId: "1:287700634485:web:0e6d60da95ed1dcfd9a13c",
    measurementId: "G-DLCYF7NLD7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
