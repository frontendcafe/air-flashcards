import React, { useEffect, useState } from "react";
import Router from "next/router";

import { auth } from "@/firebaseConfig";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectUrl: string;
  authenticationType: string;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  redirectUrl,
  authenticationType,
}: AuthGuardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      setIsAuthenticated(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated && authenticationType === "requiresAuthentication") {
    Router.push(redirectUrl);
  } else if (isAuthenticated && authenticationType === "redirectIfAuthenticated") {
    Router.push(redirectUrl);
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
