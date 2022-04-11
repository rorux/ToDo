import { IState, TAction, actionTypes } from "./types";

const initialState: IState = {
  auth: true,
};

export const reducer = (store = initialState, action: TAction) => {
  switch (action.type) {
    case actionTypes.AUTH_FALSE:
      return {
        auth: false,
      };
    case actionTypes.AUTH_TRUE:
      return {
        auth: true,
      };
    default: {
      return store;
    }
  }
};
