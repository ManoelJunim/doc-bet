import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "./contexts";
import "react-toastify/dist/ReactToastify.css";

import { Routes } from "./routes";
import { globalStyles } from "./styles";

const App = () => {
  globalStyles();
  return (
    <>
      <ToastContainer autoClose={4000} position="bottom-right" />
      <SessionProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SessionProvider>
    </>
  );
};

export { App };
