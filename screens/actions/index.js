import {
  postLogin,
  fetchChatList,
  postSignUp,
  postAuthMail,
  postActivate,
  fetchUserList,
  postUserPatch,
} from '../services/api';

export function selectTalent(talent) {
  return {
    type: 'selectTalent',
    payload: { talent },
  };
}

export function selectPassion(passion) {
  return {
    type: 'selectPassion',
    payload: { passion },
  };
}

export function clearAllMessage() {
  return {
    type: 'clearAllMessage',
  };
}

export function setType(type) {
  return {
    type: 'setType',
    payload: { type },
  };
}

export function setUserMajor(major) {
  return {
    type: 'setUserMajor',
    payload: { major },
  };
}

export function setUserTalent(talent) {
  return {
    type: 'setUserTalent',
    payload: { talent },
  };
}

export function setUserPassion(passion) {
  return {
    type: 'setUserPassion',
    payload: { passion },
  };
}

export function setLoginMessage({ detail, message }) {
  return {
    type: 'setLoginMessage',
    payload: { detail, message },
  };
}

export function setSignUpMessage({
  account, email, nickname, message,
}) {
  return {
    type: 'setSignUpMessage',
    payload: {
      account, email, nickname, message,
    },
  };
}

export function setAuthCodeMessage(message) {
  return {
    type: 'setAuthCodeMessage',
    payload: {
      message,
    },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function setUserInfo(user) {
  return {
    type: 'setUserInfo',
    payload: { user },
  };
}

export function setChatList(chats) {
  return {
    type: 'setChatList',
    payload: { chats },
  };
}

export function setSignUp(data) {
  return {
    type: 'setSignUp',
    payload: { signUpInputs: data },
  };
}

export function setUserList(userList) {
  return {
    type: 'setUserList',
    payload: { userList },
  };
}

export function loadChatList() {
  return async (dispatch, getState) => {
    const { loginUserInfo: { token } } = getState().LoginReducer;
    const chats = await fetchChatList({ token });

    dispatch(setChatList(chats));
  };
}

export function loadUserList() {
  return async (dispatch, getState) => {
    const { loginUserInfo: { token } } = getState().LoginReducer;

    const userList = await fetchUserList({ token });

    dispatch(setUserList(userList));
  };
}

export function requestUserPatch() {
  return async (dispatch, getState) => {
    const { userPatchInfo, loginUserInfo: { id, token } } = getState().LoginReducer;

    const user = await postUserPatch({ userPatchInfo, userId: id, token });

    console.log(user);

    dispatch(setUserInfo(user));
  };
}

export function requestLogin(navigation) {
  return async (dispatch, getState) => {
    const { loginFields: { account, password } } = getState().LoginReducer;

    const response = await postLogin({ account, password });

    if (response.status === 400 || response.status === 404) {
      console.log('로그인 실패');
      const { detail, message } = await response.json();

      await dispatch(setLoginMessage({ detail, message }));
    }
    if (response.status === 306) {
      const { message } = await response.json();

      await dispatch(setLoginMessage({ message }));
    }
    if (response.status === 200) {
      const user = await response.json();
      if (user.token) {
        if (!user.major) {
          navigation.navigate('InsertMajorPage');
        } else {
          navigation.navigate('LoginLoadingPage');
          dispatch(clearAllMessage());
        }
      }
      dispatch(setUserInfo(user));
    }
  };
}

export function requestActive(authCode) {
  return async (dispatch, getState) => {
    const { signUpFields: { account } } = getState().SignUpReducer;

    const { message } = await postActivate({ account, authCode });

    console.log(`인증 성공 / 실패 메세지 : ${message}`);

    dispatch(setAuthCodeMessage(message));
  };
}

export function requestAuth() {
  return async (dispatch, getState) => {
    const {
      signUpFields: {
        account,
      },
    } = getState().SignUpReducer;
    // 500 error test 아직 못함.
    const { message } = await postAuthMail({ account });
    console.log(`requestAuth에서 ${message} 받음`);
    if (message.indexOf('Activate') !== -1) {
      console.log(`서버 응답! ${account}에 해당하는 이메일로 메일 보냈음.`);
    }
  };
}

export function requestSignUp(navigation) {
  return async (dispatch, getState) => {
    const {
      signUpFields: {
        account: acc, nickname: nick, email: mail, password: pwd,
      },
    } = getState().SignUpReducer;

    const {
      message, nickname, account, email,
    } = await postSignUp({
      account: acc, nickname: nick, email: mail, password: pwd,
    });

    dispatch(setSignUpMessage({
      message, nickname, account, email,
    }));

    if (message === 'Sign Up Successfully.') {
      navigation.navigate('SignUpAuthPage');
      dispatch(requestAuth());
      dispatch(clearAllMessage());
    }
  };
}

export function changeLoginField({ data }) {
  return {
    type: 'changeLoginField',
    payload: { data },
  };
}
