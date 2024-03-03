import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  connectAuthEmulator,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesі

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-zxDcdr1dUMqyIqGPZQ6kDgM7sRSpvt8",
  authDomain: "crm-small-business.firebaseapp.com",
  projectId: "crm-small-business",
  storageBucket: "crm-small-business.appspot.com",
  messagingSenderId: "496693737539",
  appId: "1:496693737539:web:ba34701c42644e16853cf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
