import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IRouteProps, ROUTES } from "./types";

const MainRoute = (props: IRouteProps) => {
  const { authed, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authed ? (
          <Redirect
            to={{
              pathname: ROUTES.TASKS,
              state: { from: routeProps.location },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default MainRoute;
