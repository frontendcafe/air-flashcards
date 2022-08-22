import { NextApiHandler } from "next";
import { collection, getDocs } from "firebase/firestore";

import { Collection, CollectionFirebaseData } from "@/modules/Collections/models";
import db from "@/modules/Firestore";

const allowedMethods = ["GET"];

export const getCollections = async () => {
  const collectionsSnapshot = await getDocs(collection(db, "collections"));
  const collections: Collection[] = [];

  collectionsSnapshot.forEach((collectionSnapshot: any) => {
    const collectionData: CollectionFirebaseData = collectionSnapshot.data();
    const collectionToPush: Collection = {
      id: collectionSnapshot.id,
      ...collectionData,
    };

    collections.push(collectionToPush);
  });

  return collections;
};

const collectionsHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method || "")) {
    return response.status(405).send("Method not supported");
  }

  const collections = await getCollections();
  return response.json(collections);
};

export default collectionsHandler;
