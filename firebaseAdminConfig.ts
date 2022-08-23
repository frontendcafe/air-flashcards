import admin, { ServiceAccount } from "firebase-admin";
// @ts-expect-error: This files in into .gitignore
import serviceAccount from "@/privateKey.json";

export const verifyIdToken = (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error: any) => {
      throw error;
    });
};
