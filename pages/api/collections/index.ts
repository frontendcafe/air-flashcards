import { NextApiHandler } from "next";
import { collection, getDocs } from "firebase/firestore";
import { ValidationError } from "yup";

import { ClientError, MethodHandler, ResContent } from "@/modules/Api/models";
import { createDoc } from "@/modules/Api/Services/FireStore";
import { allowedMethods } from "@/modules/Api/utils";
import { Collection, CollectionFirebaseData } from "@/modules/Collections/models";
import { createCollectionSchema } from "@/modules/Collections/schema";
import db from "@/modules/Firestore";

const COLLECTION_PATH = "collections";

export const getCollections: NextApiHandler<Collection[]> = async (request, response) => {
  const collectionsSnapshot = await getDocs(collection(db, COLLECTION_PATH));
  const collections: Collection[] = [];

  collectionsSnapshot.forEach((collectionSnapshot: any) => {
    const collectionData: CollectionFirebaseData = collectionSnapshot.data();
    const collectionToPush: Collection = {
      id: collectionSnapshot.id,
      ...collectionData,
    };

    collections.push(collectionToPush);
  });

  return response.json(collections);
};

const createCollection: NextApiHandler<Collection> = async (request, response) => {
  const { body } = request;
  const newCollection = await createCollectionSchema.validate(JSON.parse(body));

  const newCard = await createDoc<CollectionFirebaseData>(COLLECTION_PATH, newCollection);
  return response.json(newCard);
};

const collectionsHandler: NextApiHandler = async (request, response) => {
  try {
    const methodHandler: MethodHandler<ResContent<Collection>> = {
      GET: getCollections,
      POST: createCollection,
    };
    await allowedMethods(methodHandler, request, response);
  } catch (error) {
    let code = 500;
    if (error instanceof ValidationError) code = 400;
    if (error instanceof ClientError) code = error.code;
    response.status(code).send(String(error));
  }
};

export default collectionsHandler;
