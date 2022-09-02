import { collection, getDocs } from "firebase/firestore";

import db from "@/modules/Firestore";

export default async function getCollectionStudySessions(collectionId: string) {
  const studySessionsRef = collection(db, `collections/${collectionId}/studySessions`);
  const studySessionsDocs = await getDocs(studySessionsRef);
  const studySessions = studySessionsDocs.docs.map((studySessionDoc) => {
    const result = studySessionDoc.data();
    result.id = studySessionDoc.id;
    return result;
  });
  return studySessions;
}
