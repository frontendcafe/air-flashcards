import { array, object, string } from "yup";

const tags = array()
  .of(string().required())
  .min(1, "If the tags array exists, it must have at least one element.")
  .test("Unique", "Only unique values ​​are allowed in the tags array", (arr) => {
    if (arr) {
      return new Set(arr).size === arr.length;
    }
    return true;
  });

export const createCollectionSchema = object({
  title: string().required(),
  category: string().required(),
  description: string().required(),
  tags,
  userId: string().required(),
  createdAt: string().required(),
})
  .noUnknown(true)
  .strict(true);

export const updateCollectionSchema = object({
  title: string(),
  category: string(),
  description: string(),
  tags,
})
  .noUnknown(true)
  .test("empty-check", "There must be at least one field to update", (obj) => {
    return Object.keys(obj).length !== 0;
  })
  .strict(true);
