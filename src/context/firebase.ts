
import firebase, { app } from "firebase";
import { createContext } from "react";
import { firebaseInit } from "../lib/firebase";
//import { seedDatabase } from "../seed";

const firebaseContext = createContext<app.App | undefined>(undefined);
const firestoreContext= createContext<firebase.firestore.Firestore | undefined>(undefined)
//seedDatabase(firebaseInit)
export {firebaseContext,firestoreContext};
