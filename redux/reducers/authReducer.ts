import {
  APP_LOGIN,
  UPDATE_AUTH_LOADING,
  UPDATE_AUTH_USER_NAME,
  UPDATE_IS_AUTHORIZED,
} from "../actions/authActions";

export interface authStateType {
  isAuthorized: boolean;
  isLoading: boolean;
  username?: string;
}

export const authInitialState: authStateType = {
  isAuthorized: false,
  isLoading: false,
  username: "",
};

export function authReducer(state = authInitialState, action: any) {
  switch (action.type) {
    case APP_LOGIN:
      return { ...state };
    case UPDATE_AUTH_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case UPDATE_AUTH_USER_NAME:
      return { ...state, username: action.payload.username };
    case UPDATE_IS_AUTHORIZED:
      return { ...state, isAuthorized: action.payload.isAuthorized };
    default:
      return state;
  }
}

export default authReducer;
