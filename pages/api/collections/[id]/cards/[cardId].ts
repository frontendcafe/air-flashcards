import { NextApiHandler } from "next";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

import { Card, CardData } from "@/modules/Cards/models";
import db from "@/modules/Firestore";

const allowedMethods = ["GET", "PATCH", "DELETE"];

const getCardDetails = async (collectionId: string, cardId: string) => {
  const cardSnapshot = await getDoc(doc(db, `collections/${collectionId}/cards/${cardId}`));
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

const updateCard = async (collectionId: string, cardId: string, update: Partial<CardData>) => {
  const cardRef = doc(db, `collections/${collectionId}/cards/${cardId}`);
  await updateDoc(cardRef, update);
};

const deleteCard = async (collectionId: string, cardId: string) => {
  const cardRef = doc(db, `collections/${collectionId}/cards/${cardId}`);
  await deleteDoc(cardRef);
};

const CardByIdHandler: NextApiHandler = async (request, response) => {
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
    let card: Card;
    switch (request.method) {
      case "GET":
        card = await getCardDetails(collectionId, cardId);
        return response.json(card);

      case "PATCH":
        await updateCard(collectionId, cardId, request.body);
        return response.json({ message: "card updated successfully" });

      case "DELETE":
        await deleteCard(collectionId, cardId);
        return response.json({ message: "card deleted successfully" });

      default:
        return new Error("unhandled method");
    }
  } catch (error: any) {
    return response.status(404).send(error.message);
  }
};

export default CardByIdHandler;
