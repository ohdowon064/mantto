const initialState = {
  chats: [],
};

export default function MyPageReducer(state = initialState, action) {
  if (action.type === 'setChatList') {
    const { chats } = action.payload;
    return {
      ...state,
      chats,
    };
  }

  return state;
}
