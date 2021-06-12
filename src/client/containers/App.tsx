import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { EnterUsernamePage } from "../pages/EnterUsernamePage";
import { SendNotificationPage } from "../pages/SendNotificationPage";

export const App: FC = () => {
  return (
    <Switch>
      <Route path="/welcome">
        <SendNotificationPage />
      </Route>
      <Route path="/">
        <EnterUsernamePage />
      </Route>
    </Switch>
  );
};
