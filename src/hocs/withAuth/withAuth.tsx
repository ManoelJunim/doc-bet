import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { SessionContext } from "../../contexts";

const withAuth = (WrappedComponent: React.ElementType) => {
  const WithAuth = ({ ...props }) => {
    const { user } = useContext(SessionContext);

    if (!user) return <Navigate to="/signin" />;
    else return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export { withAuth };
