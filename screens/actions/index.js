import {
  postLogin,
  fetchChatList,
} from '../services/api';

export function selectCategories(category) {
  return {
    type: 'selectCategories',
    payload: { category },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function setChatList(chatList) {
  return {
    type: 'setChatList',
    payload: { chatList },
  };
}

export function loadChatList() {
  return async (dispatch) => {
    const chatList = await fetchChatList();
    console.log(chatList);
    dispatch(setChatList(chatList));
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { account, password } } = getState().LoginReducer;

    const accessToken = await postLogin({ account, password });

    dispatch(setAccessToken(accessToken));
  };
}

export function changeLoginField({ data }) {
  return {
    type: 'changeLoginField',
    payload: { data },
  };
}
