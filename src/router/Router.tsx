import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import MainRoute from "./MainRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ROUTES } from "./types";
import { selector } from "../store/selectors";

const PageLayout = React.lazy(() => import("../screens/PageLayout"));
const Login = React.lazy(() => import("../screens/Login"));
const NotFound = React.lazy(() => import("../screens/NotFound"));

const Router: React.FC = () => {
  const { auth: authed } = useSelector(selector);

  return (
    <Switch>
      <MainRoute exact authed={authed} path={ROUTES.MAIN} />
      <PublicRoute exact authed={authed} path={ROUTES.LOGIN}>
        <Suspense fallback={<CircularProgress />}>
          <Login />
        </Suspense>
      </PublicRoute>
      <PrivateRoute exact authed={authed} path={ROUTES.TASKS}>
        <Suspense fallback={<CircularProgress />}>
          <PageLayout />
        </Suspense>
      </PrivateRoute>
      <Route path={ROUTES.NOT_FOUND}>
        <Suspense fallback={<CircularProgress />}>
          <NotFound />
        </Suspense>
      </Route>
      <Route>
        <Redirect to={ROUTES.NOT_FOUND} />
      </Route>
    </Switch>
  );
};

export default Router;
