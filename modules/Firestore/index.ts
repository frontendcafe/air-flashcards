import app from "@/firebase";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export default db;
