import { collection, getDocs } from "firebase/firestore";
import { NextApiHandler } from "next";
import db from "@/modules/Firestore";
import { Collection, CollectionFirebaseData } from "@/modules/Collections/models";

const allowedMethods = ["GET"];

export const getCollections = async (options?: {
  include?: {
    cards?: boolean;
  };
}) => {
  const collectionsSnapshot = await getDocs(collection(db, "collections"));
  const collections: Collection[] = [];

  collectionsSnapshot.forEach((collectionSnapshot: any) => {
    const collectionData: CollectionFirebaseData = collectionSnapshot.data();
    const collection: Collection = {
      id: collectionSnapshot.id,
      ...collectionData,
    };

    collections.push(collection);
  });

  return collections;
};

const collectionsHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method || "")) {
    return response.status(405).send("Method not supported");
  }

  const collections = await getCollections();
  response.json(collections);
};

export default collectionsHandler;
