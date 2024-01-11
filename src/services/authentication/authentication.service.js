import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmKs99svyFa0ORK5Vp26yicy01ijYflWM",
  authDomain: "mealstogo-78c91.firebaseapp.com",
  projectId: "mealstogo-78c91",
  storageBucket: "mealstogo-78c91.appspot.com",
  messagingSenderId: "35242938410",
  appId: "1:35242938410:web:e189f68e6e4ef3f9a1f353",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);


