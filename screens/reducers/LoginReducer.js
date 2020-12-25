const initialState = {
  loginFields: {
    account: '',
    password: '',
  },
  accessToken: '',
  message: '',
  loginUserInfo: {},
};

export default function LoginReducer(state = initialState, action) {
  if (action.type === 'changeLoginField') {
    const { data } = action.payload;
    const { loginAccount, loginPassword } = data;
    return {
      ...state,
      loginFields: {
        account: loginAccount,
        password: loginPassword,
      },
    };
  }
  if (action.type === 'setAccessToken') {
    const { accessToken } = action.payload;
    return {
      ...state,
      accessToken,
    };
  }
  if (action.type === 'setLoginMessage') {
    const { detail, message } = action.payload;
    return {
      ...state,
      message: message || detail,
    };
  }
  if (action.type === 'setUserInfo') {
    const { user } = action.payload;
    return {
      ...state,
      loginUserInfo: user,
    };
  }
  if (action.type === 'clearAllMessage') {
    return {
      ...state,
      message: '',
    };
  }
  return state;
}
