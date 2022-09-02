import { object, date, number, mixed, SchemaOf, string } from "yup";
import { StudySessionMode, CreateStudySessionData } from "./models";

export const formSchema: SchemaOf<CreateStudySessionData> = object({
  date: string().required(),
  cardsAmount: number().required().min(0),
  mode: mixed<StudySessionMode>().oneOf(Object.values(StudySessionMode)).required(),
  collectionId: string().required(),
});
