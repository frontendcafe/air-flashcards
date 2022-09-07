import { object, string } from "yup";

export const createCollectionSchema = object({
  title: string().required(),
  category: string().required(),
  description: string().required(),
  userId: string().required(),
  createdAt: string().required(),
})
  .noUnknown(true)
  .strict(true);

export const updateCollectionSchema = object({
  title: string(),
  category: string(),
  description: string(),
})
  .noUnknown(true)
  .test("empty-check", "There must be at least one field to update", (obj) => {
    return Object.keys(obj).length !== 0;
  })
  .strict(true);
