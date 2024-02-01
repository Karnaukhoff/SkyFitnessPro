import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbVQEn74h4F20gg_1fGHLMVZRLcuEVdSg",
  authDomain: "skypro-fit-b037b.firebaseapp.com",
  databaseURL: "https://skypro-fit-b037b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skypro-fit-b037b",
  storageBucket: "skypro-fit-b037b.appspot.com",
  messagingSenderId: "1046878896952",
  appId: "1:1046878896952:web:cd54539cb1d5427bebf7cd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)