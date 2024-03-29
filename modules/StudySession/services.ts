import {
  CreateStudySessionData,
  StudySession,
  StudySessionData,
  StudySessionResult,
} from "./models";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import db from "@/modules/Firestore";

const STUDY_SESSIONS_COLLECTION = "collections/LBz0PhXuEiPEyIy6JloU/studySessions";

export const getStudySessionData = async (collectionId: string, StudySessionId: string) => {
  const studySessionRef = doc(db, `collections/${collectionId}/studySessions/${StudySessionId}`);
  const result = await getDoc(studySessionRef);
  const StudySessionsExist = result.exists();
  if (!StudySessionsExist) {
    throw new Error("Study Session doesn't exists");
  }
  const StudySessionData = result.data() as StudySessionResult;
  const session: StudySessionResult = {
    ...StudySessionData,
  };
  console.log(session);
  return session;
};

export const createStudySession = async (data: CreateStudySessionData) => {
  const docRef = await addDoc(collection(db, STUDY_SESSIONS_COLLECTION), {
    mode: data.mode,
    date: data.date,
    completed: false,
    cardsAmount: data.cardsAmount,
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
};

export interface UpdateStudySession extends Omit<StudySessionData, "completed"> {
  sessionId: string;
}

export const updateStudySession = async (data: UpdateStudySession) => {
  const sessionRef = doc(db, STUDY_SESSIONS_COLLECTION, data.sessionId);
  await updateDoc(sessionRef, {
    mode: data.mode,
    date: data.date,
    completed: false,
    cardsAmount: data.cardsAmount,
  });
  console.log("actualizado", sessionRef.id);
};

export const deleteStudySession = async (collectionId: string, StudySessionId: string) => {
  const studySessionRef = doc(db, `collections/${collectionId}/studySessions/${StudySessionId}`);
  // TODO: detectar que sucede cuando hay ID que no existe
  // throw new error
  await deleteDoc(studySessionRef);
};
