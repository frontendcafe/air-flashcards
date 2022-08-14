import { NextApiHandler } from "next";
import { collection, doc,getDoc, getDocs } from "firebase/firestore";

import { Card, CardData } from "@/modules/Cards/models";
import db from '@/modules/Firestore';

const allowedMethods = ['GET'];

const getCollectionCards = async (collectionId: string) => {
  const collectionExists = await (await getDoc(doc(db, "collections", collectionId))).exists();
  if (!collectionExists) {
    throw new Error("Collection not exists");
  }

  const cardsSnapshot  = await getDocs(collection(db, `collections/${collectionId}/cards`));
  const cards: Card[] = [];

  cardsSnapshot.forEach(cardSnap => {
    const cardsData = cardSnap.data() as CardData;
    const card: Card = {
      id: cardSnap.id,
      ...cardsData,
    };

    cards.push(card);
  });

  return cards;
};

const collectionCardsHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method|| '')) {
    return response.status(405).send('Method not supported');
  }
  const collectionId = request.query.id;
  if (!collectionId || Array.isArray(collectionId)) {
    return response.status(400).send('collectionId must be an string');
  }

  try {
    const cards = await getCollectionCards(collectionId);
    return response.json(cards);
  } catch (error: any) {
    return response.status(404).send(error.message);
  }
};

export default collectionCardsHandler;
