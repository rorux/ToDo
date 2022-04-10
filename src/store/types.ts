export interface IState {
  auth: boolean;
}

export enum actionTypes {
  AUTH_TRUE = "AUTH_TRUE",
  AUTH_FALSE = "AUTH_FALSE",
}

export interface IAuthFalseAction {
  type: actionTypes.AUTH_FALSE;
}

export interface IAuthTrueAction {
  type: actionTypes.AUTH_TRUE;
}

export type TAction = IAuthFalseAction | IAuthTrueAction;
