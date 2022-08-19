import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { User, UserCredential } from "firebase/auth";
import nookies from "nookies";

import { auth } from "@/firebaseConfig";

const AuthContext = createContext<{
  user: User | UserCredential | null;
  setUser: (user: User | UserCredential | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | UserCredential | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }
    return auth.onIdTokenChanged(async (fbUser) => {
      if (!fbUser) {
        setUser(null);
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", { path: "/" });
        return;
      }

      const token = await fbUser.getIdToken();
      setUser(fbUser);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, { path: "/" });
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const updatedUser = auth.currentUser;
      if (updatedUser) await updatedUser.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => {
      return clearInterval(handle);
    };
  }, []);

  const value = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
