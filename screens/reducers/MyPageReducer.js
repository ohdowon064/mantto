const initialState = {
  chats: [],
  registerUserInfo: {
    manttoTalent: '',
    manttiTalent: '',
    intro: '',
    reportHelp: undefined,
    examHelp: undefined,
  },
};

export default function MyPageReducer(state = initialState, action) {
  if (action.type === 'setChatList') {
    const { chats } = action.payload;
    return {
      ...state,
      chats,
    };
  }
  if (action.type === 'setRegisterValue') {
    const { label, value } = action.payload;
    if (label === 'My talent') {
      return {
        ...state,
        registerUserInfo: {
          ...state.registerUserInfo,
          manttoTalent: value,
        },
      };
    }
    if (label === 'My Passion') {
      return {
        ...state,
        registerUserInfo: {
          ...state.registerUserInfo,
          manttiTalent: value,
        },
      };
    }
  }
  if (action.type === 'setRegisterUserInfo') {
    const {
      registerUser: {
        intro, reportHelp, examHelp,
      },
    } = action.payload;
    return {
      ...state,
      registerUserInfo: {
        ...state.registerUserInfo,
        intro,
        reportHelp,
        examHelp,
      },
    };
  }

  return state;
}
