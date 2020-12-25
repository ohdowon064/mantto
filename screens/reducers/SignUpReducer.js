const initialState = {
  signUpFields: {
    account: '',
    nickname: '',
    email: '',
    password: '',
  },
  messageTotal: {
    message: '',
    account: '',
    email: '',
    nickname: '',
  },
  authActiveMessage: '',
};

export default function SignUpReducer(state = initialState, action) {
  if (action.type === 'setSignUp') {
    const { signUpInputs } = action.payload;
    const {
      account, email, nickname, password,
    } = signUpInputs;
    return {
      ...state,
      signUpFields: {
        account,
        email,
        nickname,
        password,
      },
    };
  }
  if (action.type === 'setSignUpMessage') {
    const {
      nickname, message, account, email,
    } = action.payload;
    return {
      ...state,
      messageTotal: {
        message,
        account,
        email,
        nickname,
      },
    };
  }
  if (action.type === 'setAuthCodeMessage') {
    const { message } = action.payload;
    return {
      ...state,
      authActiveMessage: message,
    };
  }
  if (action.type === 'clearAllMessage') {
    return {
      ...state,
      messageTotal: {
        message: '',
        account: '',
        email: '',
        nickname: '',
      },
    };
  }
  return state;
}
