import { collection, getDocs } from "firebase/firestore";

import db from "@/modules/Firestore";

export default async function getCollectionCards(collectionId: string) {
  const cardsRef = collection(db, `collections/${collectionId}/cards`);
  const cardsDocs = await getDocs(cardsRef);
  return cardsDocs.docs.map((cradDoc) => {
    const result = cradDoc.data();
    result.id = cradDoc.id;
    return result;
  });
}
