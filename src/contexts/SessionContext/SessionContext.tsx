import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";

import { auth } from "../../services";
import { ISessionContext } from "./types";

const SessionContext = React.createContext({} as ISessionContext);

const SessionProvider = ({ children }: { children?: React.ReactNode }) => {
  const history = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });
  }, [history]);

  return (
    <SessionContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
