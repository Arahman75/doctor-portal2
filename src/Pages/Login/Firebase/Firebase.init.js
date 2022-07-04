import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.Config";

const initializeFirebase = () =>{
    initializeApp(FirebaseConfig);
}
export default initializeFirebase;
