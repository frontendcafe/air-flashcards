import { NextApiHandler } from "next";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ValidationError } from "yup";

import { ClientError, MethodHandler, ResContent } from "@/modules/Api/models";
import { createDoc } from "@/modules/Api/Services/FireStore";
import { allowedMethods } from "@/modules/Api/utils";
import { Card, CardData } from "@/modules/Cards/models";
import { cardDataSchema } from "@/modules/Cards/schema";
import db from "@/modules/Firestore";

const getCollectionCards = async (collectionId: string) => {
  const collectionExists = await (await getDoc(doc(db, "collections", collectionId))).exists();
  if (!collectionExists) {
    throw new ClientError("Collection not exists", 404);
  }

  const cardsSnapshot = await getDocs(collection(db, `collections/${collectionId}/cards`));
  const cards: Card[] = [];

  cardsSnapshot.forEach((cardSnap) => {
    const cardsData = cardSnap.data() as CardData;
    const card: Card = {
      id: cardSnap.id,
      ...cardsData,
    };

    cards.push(card);
  });

  return cards;
};

const getCards: NextApiHandler<Card[]> = async (request, response) => {
  const { id } = request.query;

  const collectionId = id;
  if (!collectionId || Array.isArray(collectionId)) {
    throw new ClientError("collectionId must be an string", 400);
  }

  const cards = await getCollectionCards(collectionId);
  return response.json(cards);
};

const createCard: NextApiHandler<Card> = async (request, response) => {
  const { query, body } = request;
  const card = await cardDataSchema.validate(body);
  const collectionPath = `collections/${query.id}/cards`;

  const newCard = await createDoc<CardData>(collectionPath, card);
  return response.json(newCard);
};

const collectionCardsHandler: NextApiHandler<ResContent<Card>> = async (request, response) => {
  try {
    const methodHandler: MethodHandler<ResContent<Card>> = {
      GET: getCards,
      POST: createCard,
    };
    await allowedMethods(methodHandler, request, response);
  } catch (error) {
    let code = 500;
    if (error instanceof ValidationError) code = 400;
    if (error instanceof ClientError) code = error.code;
    response.status(code).send(String(error));
  }
};

export default collectionCardsHandler;
