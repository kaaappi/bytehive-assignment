export const APP_LOGIN = "APP_LOGIN";
export const UPDATE_AUTH_LOADING = "UPDATE_AUTH_LOADING";
export const UPDATE_AUTH_USER_NAME = "UPDATE_AUTH_USER_NAME";
export const UPDATE_IS_AUTHORIZED = "UPDATE_IS_AUTHORIZED";

export interface appLoginProps {
  email: string;
  password: string;
}

interface UpdateLoadingProps {
  isLoading: boolean;
}

interface UpdateAuthUserName {
  username?: string;
}

interface UpdateIsAuthorized {
  isAuthorized: boolean;
}

export const appLogin = (data: appLoginProps) => {
  return {
    type: APP_LOGIN,
    payload: {
      request: {
        method: "POST",
        url: `/api/app-authentication`,
        data,
      },
    },
  };
};

export const updateAuthLoading = ({ isLoading }: UpdateLoadingProps) => ({
  type: UPDATE_AUTH_LOADING,
  payload: {
    isLoading,
  },
});

export const updateAuthUserName = ({ username }: UpdateAuthUserName) => ({
  type: UPDATE_AUTH_USER_NAME,
  payload: {
    username,
  },
});

export const updateIsAuthorized = ({ isAuthorized }: UpdateIsAuthorized) => ({
  type: UPDATE_IS_AUTHORIZED,
  payload: {
    isAuthorized,
  },
});
