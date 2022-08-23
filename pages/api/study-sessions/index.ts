import { NextApiHandler } from "next";
import { createStudySession,deleteStudySession } from "@/modules/StudySession/services";

const StudySessionDetailHandler: NextApiHandler = async (request, response) => {

  const { collectionId, mode, date, cardsAmount,StudySessionId } = request.body;

 if (request.method === "POST" || request.method === "PATCH" ){
   if (!collectionId || Array.isArray(collectionId)) {
    return response.status(400).send("collectionId must be an string");
  }

  if (mode !== "normal" && mode !== "jeopardy" && mode !== "combined") {
    return response.status(400).send("Mode must be normal, jeopardy or combined.");
  }

  if (typeof date !== "string") {
    return response.status(400).send("Date must be a string.");
  }

  if (typeof cardsAmount !== "number") {
    return response.status(400).send("cardsAmount must be a number.");
  }
 }
  try {
    switch (request.method) {
      case "POST":
        const studySession = await createStudySession({
          mode: mode,
          date: date,
          cardsAmount: cardsAmount,
          collectionId: collectionId,
      });
      return response.json(studySession);

      case "DELETE":
        await deleteStudySession(collectionId, StudySessionId);
        return response.json({ message: "Study Session deleted successfully" });
        //TODO
        //dejar error cuando sesion no existe, responder 404 error

      default:
        return response.status(405).send("Method not allowed");
    }
    

  } catch (error: any) {
    return response.status(500).send(error.message);
  }
};

export default StudySessionDetailHandler;
