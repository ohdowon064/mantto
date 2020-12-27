const initialState = {
  loginFields: {
    account: '',
    password: '',
  },
  accessToken: '',
  message: '',
  loginUserInfo: {},
  userPatchInfo: {
    major: '',
    talent: '',
    passion: '',
  },
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
  if (action.type === 'setUserMajor') {
    const { major } = action.payload;
    return {
      ...state,
      userPatchInfo: {
        ...state.userPatchInfo,
        major,
      },
    };
  }
  if (action.type === 'setUserTalent') {
    const { talent } = action.payload;
    return {
      ...state,
      userPatchInfo: {
        ...state.userPatchInfo,
        talent,
      },
    };
  }
  if (action.type === 'setUserPassion') {
    const { passion } = action.payload;
    return {
      ...state,
      userPatchInfo: {
        ...state.userPatchInfo,
        passion,
      },
    };
  }
  return state;
}
