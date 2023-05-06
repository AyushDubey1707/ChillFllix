import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRbiqyfgJ9NySsuaY_8IZx_s0NAKiCGOU",
  authDomain: "react-netflix-clone-nbdv.firebaseapp.com",
  projectId: "react-netflix-clone-nbdv",
  storageBucket: "react-netflix-clone-nbdv.appspot.com",
  messagingSenderId: "133133656893",
  appId: "1:133133656893:web:12c3c3bdbe6868e2ac9b54",
  measurementId: "G-R507PC7D72"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)