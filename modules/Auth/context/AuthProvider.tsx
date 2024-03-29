import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { sendPasswordResetEmail, User, UserCredential } from "firebase/auth";
import nookies from "nookies";

import { auth } from "@/firebaseConfig";

interface AuthProviderProps {
  children?: React.ReactNode;
}

interface AuthContextType {
  user: User | UserCredential | null;
  setUser: (user: User | UserCredential | null) => void;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  forgotPassword: async () => {},
});

const refreshTokenMinutes = 10 * 60 * 1000;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | UserCredential | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }
    return auth.onIdTokenChanged(async (loggedUser) => {
      if (!loggedUser) {
        setUser(null);
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", { path: "/" });
        return;
      }

      const token = await loggedUser.getIdToken();
      setUser(loggedUser);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, { path: "/" });
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handleRefreshToken = setInterval(async () => {
      const updatedUser = auth.currentUser;
      if (updatedUser) await updatedUser.getIdToken(true);
    }, refreshTokenMinutes);
    return () => {
      return clearInterval(handleRefreshToken);
    };
  }, []);

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = useMemo(() => {
    return { user, setUser, forgotPassword };
  }, [user]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
