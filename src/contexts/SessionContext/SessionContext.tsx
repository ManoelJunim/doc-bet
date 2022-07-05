import React, { useCallback, useEffect, useState } from "react";
import { User } from "firebase/auth";

import { auth } from "../../services";
import { ISessionContext } from "./types";
import { Loading } from "@nextui-org/react";

const SessionContext = React.createContext({} as ISessionContext);

const SessionProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshSession = useCallback(() => {
    setLoading(true);
    auth.onAuthStateChanged((userData) => {
      if (userData) {
        setUser(userData);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  if (loading) {
    <Loading type="default" size="xl" />;
  }

  return (
    <SessionContext.Provider
      value={{
        user,
        refreshSession,
        loading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
