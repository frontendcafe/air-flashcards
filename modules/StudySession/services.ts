import { StudySessionData } from "./models";
import { collection, addDoc } from "firebase/firestore";
import db from "@/air-flashcards/modules/Firestore";

export interface CreateStudySessionData extends Omit<StudySessionData, "completed"> {
  collectionId: string;
}

export const createStudySession = async (data: CreateStudySessionData) => {
  const docRef = await addDoc(collection(db, `collections/${data.collectionId}/studySessions`), {
    mode: data.mode,
    date: data.date,
    completed: false,
    cardsAmount: data.cardsAmount,
  });
  console.log("Document written with ID: ", docRef.id);
};
