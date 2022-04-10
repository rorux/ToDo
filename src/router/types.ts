import { RouteProps } from "react-router-dom";

export interface IRouteProps extends RouteProps {
  authed: boolean;
}

export enum ROUTES {
  MAIN = "/",
  TASKS = "/tasks",
  LOGIN = "/login",
  NOT_FOUND = "/not-found",
}

export enum ROUTES_NAME {
  MAIN = "Главная",
  TASKS = "Задания",
  LOGIN = "Авторизация",
  NOT_FOUND = "Страница не найдена",
}
