import { NextApiHandler } from "next";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ValidationError } from "yup";

import { ClientError, MethodHandler, ResContent } from "@/modules/Api/models";
import { allowedMethods } from "@/modules/Api/utils";
import { Collection } from "@/modules/Collections/models";
import db from "@/modules/Firestore";

const getCollectionById: NextApiHandler = async (request, response) => {
  const { query } = request;
  const collectionRef = doc(db, `collections/${query.id}`);
  const collectionSnap = await getDoc(collectionRef);
  if (!collectionSnap.exists())
    return response.status(400).json({ message: "element doesn't exist" });

  const collectionData = collectionSnap.data();
  collectionData!.id = collectionSnap.id;

  if (query.cards) {
    const cardsRef = collection(db, `collections/${query.id}/cards`);
    const cardsDocs = await getDocs(cardsRef);
    const cardsData = cardsDocs.docs.map((cradDoc) => {
      const result = cradDoc.data();
      result.id = cradDoc.id;
      return result;
    });
    collectionData!.cards = cardsData;
  }

  if (query.studySessions) {
    const studySessionsRef = collection(db, `collections/${query.id}/studySessions`);
    const studySessionsDocs = await getDocs(studySessionsRef);
    const studySessionsData = studySessionsDocs.docs.map((studySessionDoc) => {
      const result = studySessionDoc.data();
      result.id = studySessionDoc.id;
      return result;
    });
    collectionData!.studySessions = studySessionsData;
  }

  return response.json(collectionData);
};

const collectionHandler: NextApiHandler<ResContent<Collection>> = async (request, response) => {
  try {
    const methodHandler: MethodHandler<ResContent<Collection>> = {
      GET: getCollectionById,
    };
    await allowedMethods(methodHandler, request, response);
  } catch (error) {
    let code = 500;
    if (error instanceof ValidationError) code = 400;
    if (error instanceof ClientError) code = error.code;
    response.status(code).send(String(error));
  }
};

export default collectionHandler;
