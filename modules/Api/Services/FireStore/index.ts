import { addDoc, collection } from "firebase/firestore";

import db from "@/modules/Firestore";

/**
 * Add a document to the collection specified.
 * @param {string} collectionPath - Path of the collection.
 * @param {DocData} docData - Document content.
 */
export async function createDoc<DocData>(collectionPath: string, docData: DocData) {
  const collRef = collection(db, collectionPath);
  const newDocRef = await addDoc(collRef, docData);
  const newDoc = { ...docData, id: newDocRef.id };
  return newDoc;
}
