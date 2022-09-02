import { mixed, number, object, SchemaOf, string } from "yup";

import { FormStudySessionData, StudySessionMode } from "./models";

export const formSchema: SchemaOf<FormStudySessionData> = object({
  cardsAmount: number().required().min(0),
  mode: mixed<StudySessionMode>()
    .oneOf(Object.values(StudySessionMode), "Debes seleccionar un modo de juego")
    .required("Debes seleccionar un modo de juego"),
  collectionId: string().required("Debes seleccionar una colección"),
});
