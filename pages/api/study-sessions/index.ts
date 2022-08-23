import { NextApiHandler } from "next";

import { createStudySession } from "@/modules/StudySession/services";

const allowedMethods = ["POST"];

const StudySessionDetailHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method || "")) {
    return response.status(405).send("Method not supported");
  }
  const { collectionId, mode, date, cardsAmount } = request.body;

  if (!collectionId && Array.isArray(collectionId)) {
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
  try {
    const studySession = await createStudySession({
      mode,
      date,
      cardsAmount,
      collectionId,
    });
    return response.json(studySession);
  } catch (error: any) {
    console.log(error);

    return response.status(500).send(error.message);
  }
};

export default StudySessionDetailHandler;
