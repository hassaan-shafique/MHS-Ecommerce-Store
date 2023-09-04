
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSoab6_eWoJrlibpXmsdfzZOD_nld7OVQ",
  authDomain: "mhs-clothing-store.firebaseapp.com",
  projectId: "mhs-clothing-store",
  storageBucket: "mhs-clothing-store.appspot.com",
  messagingSenderId: "114658476707",
  appId: "1:114658476707:web:f51866bb83385f5e3c7516",
  measurementId: "G-VDSRTP59JH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);