// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import { getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZV3itiD_6Z7cB-QD_xdO7QMD0YdhaSV0",
  authDomain: "jimo-71e02.firebaseapp.com",
  projectId: "jimo-71e02",
  storageBucket: "jimo-71e02.appspot.com",
  messagingSenderId: "722795993824",
  appId: "1:722795993824:web:2ac526c9409f82e5a0ce85",
  measurementId: "G-WRNWHVPX5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 