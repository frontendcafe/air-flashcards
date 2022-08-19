// eslint-disable-next-line import/no-unresolved
// import { applicationDefault, initializeApp } from "firebase-admin/app";

// export const app = initializeApp({
//   credential: applicationDefault(),
// });

const admin = require("firebase-admin");
const serviceAccount = require("privateKey.json");

export const verifyIdToken = (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error: any) => {
      throw error;
    });
};
