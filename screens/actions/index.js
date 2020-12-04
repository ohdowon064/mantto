import {
  postLogin,
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
