import { NextApiHandler } from "next";
import { doc, getDoc } from "firebase/firestore";

import { Card, CardData } from "@/modules/Cards/models";
import db from "@/modules/Firestore";

const allowedMethods = ["GET"];

const getCardDetails = async (collectionId: string, cardId: string) => {
  const cardSnapshot = await await getDoc(doc(db, `collections/${collectionId}/cards/${cardId}`));
  const cardExist = cardSnapshot.exists();
  if (!cardExist) {
    throw new Error("Card not exists");
  }

  const cardData = cardSnapshot.data() as CardData;

  const card: Card = {
    id: cardSnapshot.id,
    ...cardData,
  };

  return card;
};

const CardDetailHandler: NextApiHandler = async (request, response) => {
  if (!allowedMethods.includes(request.method || "")) {
    return response.status(405).send("Method not supported");
  }
  const { id: collectionId, cardId } = request.query;

  if (!collectionId || Array.isArray(collectionId)) {
    return response.status(400).send("collectionI must be an string");
  }

  if (!cardId || Array.isArray(cardId)) {
    return response.status(400).send("cardId must be an string");
  }

  try {
    const card = await getCardDetails(collectionId, cardId);
    return response.json(card);
  } catch (error: any) {
    return response.status(404).send(error.message);
  }
};

export default CardDetailHandler;
