
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDTRgh5JezWPhUptC1uRb-q-FHlXFPOI-4",
  authDomain: "fir-login-24406.firebaseapp.com",
  projectId: "fir-login-24406",
  storageBucket: "fir-login-24406.appspot.com",
  messagingSenderId: "136995530531",
  appId: "1:136995530531:web:2fd58f8cdcd91974e28e96",
  measurementId: "G-9JHJYLKEFM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {app, auth, analytics};