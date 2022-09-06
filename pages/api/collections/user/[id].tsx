import { NextApiHandler } from "next";
import { collection, getDocs, query, where } from "firebase/firestore";

import getCollectionCards from "@/modules/Cards/getCollectionCards";
import getCollectionStudySessions from "@/modules/Collections/getCollectionStudySessions";
import db from "@/modules/Firestore";

const allowedMethods = ["GET"];

export const getCollectionsByUserId = async (userId: string) => {
  const collectionsRef = collection(db, "collections");
  const q = query(collectionsRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  const collections = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const studySessions = await getCollectionStudySessions(doc.id);
      const cards = await getCollectionCards(doc.id);

      return { ...doc.data(), id: doc.id, cards, studySessions };
    })
  );

  return collections;
};

const collectionsByUserHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method || "")) {
    return response.status(405).send("Method not supported");
  }

  const collections = await getCollectionsByUserId(request.query.id as string);
  return response.json(collections);
};

export default collectionsByUserHandler;
