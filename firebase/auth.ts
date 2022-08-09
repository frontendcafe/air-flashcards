import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signUp = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
  }
};
