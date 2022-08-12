import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const auth = getAuth();

export const signUp = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user; 
  } catch (error) {
    console.error(error);
  }
};