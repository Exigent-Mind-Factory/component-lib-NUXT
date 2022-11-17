import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB9iTCMIRroXGWM9MNeU9EtEOFkq2ru-w",
  authDomain: "component-lib.firebaseapp.com",
  projectId: "component-lib",
  storageBucket: "component-lib.appspot.com",
  messagingSenderId: "201425825468",
  appId: "1:201425825468:web:3949e1cf719002d4e2eab9"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const fbStore = getStorage(fbApp);

export const saveFile = () => {
  const imageRef = ref(fbStore, 'images');
}

console.log(fbApp)