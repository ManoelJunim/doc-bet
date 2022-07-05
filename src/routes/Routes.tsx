import React, { Fragment } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Dashboard, Signin } from "../pages";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
      </Switch>
    </Fragment>
  );
};

export { Routes };
