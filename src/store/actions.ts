import { actionTypes, IAuthFalseAction, IAuthTrueAction } from "./types";

export const authFalseAction = (): IAuthFalseAction => ({
  type: actionTypes.AUTH_FALSE,
});

export const authTrueAction = (): IAuthTrueAction => ({
  type: actionTypes.AUTH_TRUE,
});
