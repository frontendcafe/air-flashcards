import { addDoc, collection } from "firebase/firestore";

import db from "@/modules/Firestore";

export async function createDoc<DocData>(collectionPath: string, docData: DocData) {
  const collRef = collection(db, collectionPath);
  const newDocRef = await addDoc(collRef, docData);
  const newDoc = { ...docData, id: newDocRef.id };
  return newDoc;
}
