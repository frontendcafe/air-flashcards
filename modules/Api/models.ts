export class ClientError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "Client Error";
    this.code = code;
  }
}

export type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
