import { NextApiRequest } from "next";

import { ClientError, Method } from "@/modules/Api/models";

export function checkAllowedMethods(allowedMethods: Method[], reqMethod: NextApiRequest["method"]) {
  if (!allowedMethods.length) throw new Error("allowedMethods can't be an empty array");
  if (!reqMethod) throw new ClientError("Method not provided!", 400);

  const isAllow = allowedMethods.includes(<Method>reqMethod);
  if (!isAllow) throw new ClientError("Method not supported", 405);
}
