import { NextApiHandler } from "next";
import { doc, getDoc } from "firebase/firestore";
import { ValidationError } from "yup";

import { ClientError, MethodHandler, ResContent } from "@/modules/Api/models";
import { allowedMethods } from "@/modules/Api/utils";
import getCollectionCards from "@/modules/Cards/getCollectionCards";
import getCollectionStudySessions from "@/modules/Collections/getCollectionStudySessions";
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
    collectionData!.cards = await getCollectionCards(query.id as string);
  }

  if (query.studySessions) {
    collectionData!.studySessions = await getCollectionStudySessions(query.id as string);
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
