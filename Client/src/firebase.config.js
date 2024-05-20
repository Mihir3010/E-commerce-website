
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCjna9EQEmzE8pusoOxSOtSwEzJ6NrxZ0Q",
  authDomain: "motif-intirior.firebaseapp.com",
  projectId: "motif-intirior",
  storageBucket: "motif-intirior.appspot.com",
  messagingSenderId: "809541030530",
  appId: "1:809541030530:web:bff78d96bedd84dca15a9b",
  measurementId: "G-K7SK0D8MVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore (app)
export const storage = getStorage(app)

export default app ;