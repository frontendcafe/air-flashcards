import { StudySessionData } from "./models";
import { collection, addDoc, deleteDoc,doc } from "firebase/firestore";
import db from "@/modules/Firestore";

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

export const deleteStudySession = async(collectionId: string, StudySessionId: string)=>{
  const studySessionRef = doc(db,`collections/${collectionId}/studySessions/${StudySessionId}`);
  //TODO: detectar que sucede cuando hay ID que no existe 
  // throw new error 
  console.log(studySessionRef.converter);
  await deleteDoc(studySessionRef);
};
