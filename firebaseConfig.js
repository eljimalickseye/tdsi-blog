// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCEm63a3lX4Uuy1AlC-nZw_PhdUkA0JHiQ",

  authDomain: "tdsi-blog-46c1f.firebaseapp.com",

  projectId: "tdsi-blog-46c1f",

  storageBucket: "tdsi-blog-46c1f.appspot.com",

  messagingSenderId: "719695220686",

  appId: "1:719695220686:web:0ac5a17969210aeb48e59f",

  measurementId: "G-GBXZRNP0JF"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
