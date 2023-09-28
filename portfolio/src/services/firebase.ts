import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDg5kyE2V4W4sugUBX8iDtj869PsYmQNzw",
	authDomain: "portfolio-projects-3d26c.firebaseapp.com",
	projectId: "portfolio-projects-3d26c",
	storageBucket: "portfolio-projects-3d26c.appspot.com",
	messagingSenderId: "137604274993",
	appId: "1:137604274993:web:b9a37e61764a80070aae10",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
