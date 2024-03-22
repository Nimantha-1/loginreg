import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3R66cAGYcWL-oZg9JhbE5lxMPqBySnXg",
  authDomain: "ordersystem-5af67.firebaseapp.com",
  databaseURL: "https://ordersystem-5af67-default-rtdb.firebaseio.com",
  projectId: "ordersystem-5af67",
  storageBucket: "ordersystem-5af67.appspot.com",
  messagingSenderId: "595456723593",
  appId: "1:595456723593:web:36d5504bc4a8fffd615458",
  measurementId: "G-MYSEY03D1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };