const initialState = {
  chatList: [],
};

export default function MyPageReducer(state = initialState, action) {
  if (action.type === 'setChatList') {
    const { chatList } = action.payload;
    return {
      ...state,
      chatList,
    };
  }

  return state;
}
