import { NextApiHandler } from "next";

export class ClientError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "Client Error";
    this.code = code;
  }
}

export interface MethodHandler<T> {
  POST?: NextApiHandler<T>;
  PUT?: NextApiHandler<T>;
  PATCH?: NextApiHandler<T>;
  DELETE?: NextApiHandler<T>;
  GET?: NextApiHandler<T>;
}

export type ResContent<T> = T | T[] | string;
