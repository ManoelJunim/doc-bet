import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "./contexts";
import { Dashboard, Signin } from "./pages";

import { globalStyles } from "./styles";

const App = () => {
  globalStyles();
  return (
    <>
      <ToastContainer autoClose={4000} position="bottom-right" />
      <SessionProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </SessionProvider>
    </>
  );
};

export { App };
