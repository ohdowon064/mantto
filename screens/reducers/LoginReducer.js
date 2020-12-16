const initialState = {
  loginFields: {
    nickname: '',
    account: '',
    password: '',
  },
  accessToken: '',
};

export default function LoginReducer(state = initialState, action) {
  if (action.type === 'changeLoginField') {
    const { data } = action.payload;
    const { nickname, account, password } = data;
    return {
      ...state,
      loginFields: {
        nickname,
        account,
        password,
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
  return state;
}
