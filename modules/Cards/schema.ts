import { mixed, object, string } from "yup";

import { CardeSideType } from "./models";

const cardSideSchema = object({
  type: mixed<CardeSideType>().oneOf(["image", "text"]).required(),
  value: string().required(),
});

export const cardDataSchema = object({
  sideA: cardSideSchema.required(),
  sideB: cardSideSchema.required(),
})
  .noUnknown(true)
  .strict(true);

export const cardSchema = cardDataSchema.shape({
  id: string().required(),
});
