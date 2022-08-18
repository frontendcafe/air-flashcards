import { NextApiRequest, NextApiResponse } from "next";

import { ClientError, MethodHandler } from "@/modules/Api/models";

/**
 * Check if the request method is in the method handler.
 * @param {MethodHandler<T>} methodHandler - Object with the allowed methods and their corresponding controllers.
 * @param {NextApiRequest} req - The request.
 * @param {NextApiResponse} res - The response.
 */
export async function allowedMethods<T>(
  methodHandler: MethodHandler<T>,
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (!req.method) throw new ClientError("Method not provided!", 400);

  const method = req.method as keyof MethodHandler<T>;
  const controller = methodHandler[method];
  if (controller) await controller(req, res);
  else throw new ClientError("Method Not Allowed", 405);
}
