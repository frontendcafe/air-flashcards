import app from "@/firebaseConfig";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export default db;
