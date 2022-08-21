import { NextApiHandler } from "next";
import { createStudySession,deleteStudySession } from "@/modules/StudySession/services";

const allowedMethods = ["GET", "PATCH", "DELETE","POST"];

const StudySessionDetailHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method || "")) {
    return response.status(405).send("Method not supported");
  }
  const { collectionId, mode, date, cardsAmount,StudySessionId } = request.body;

  if (!collectionId || Array.isArray(collectionId)) {
    return response.status(400).send("collectionId must be an string");
  }

  if (mode !== "normal" || mode !== "jeopardy" || mode !== "combined") {
    return response.status(400).send("Mode must be normal, jeopardy or combined.");
  }

  if (typeof date !== "string") {
    return response.status(400).send("Date must be a string.");
  }

  if (typeof cardsAmount !== "number") {
    return response.status(400).send("cardsAmount must be a number.");
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

      default:
        return new Error("Unhandled method");
    }
    

  } catch (error: any) {
    return response.status(404).send(error.message);
  }
};

export default StudySessionDetailHandler;
