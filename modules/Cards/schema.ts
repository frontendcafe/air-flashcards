import { mixed, object, string } from "yup";

import { CardeSideType } from "./models";

const cardSideSchema = object({
  type: mixed<CardeSideType>().oneOf(["image", "text"]).required(),
  value: string().required(),
});

export const cardDataSchema = object({
  name: string().required(),
  sideA: cardSideSchema.required(),
  sideB: cardSideSchema.required(),
  createdAt: string().required(),
})
  .noUnknown(true)
  .strict(true);

export const cardSchema = cardDataSchema.shape({
  id: string().required(),
});
