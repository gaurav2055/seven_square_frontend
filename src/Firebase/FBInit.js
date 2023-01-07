import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const config = require("./FBConfig");

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
console.log("auth initialized");
const storage = getStorage(app, "gs://square-realtors.appspot.com");

export { db, auth, storage, app };
