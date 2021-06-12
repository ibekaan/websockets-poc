import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { EnterUsernamePage } from "../pages/EnterUsernamePage";

export const App: FC = () => {
  return (
    <Switch>
      <Route path="/">
        <EnterUsernamePage />
      </Route>
    </Switch>
  );
};
