import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const config = require("./FBConfig");

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };