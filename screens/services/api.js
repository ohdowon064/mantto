/* eslint-disable consistent-return */
export async function postLogin({ account = '', password = '' }) {
  const url = 'https://4dv6lzjdu7.execute-api.ap-northeast-2.amazonaws.com/dev/api/sign-in';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ account, password }),
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function postSignUp({
  account, nickname, email, password,
}) {
  const url = 'https://4dv6lzjdu7.execute-api.ap-northeast-2.amazonaws.com/dev/api/sign-up';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account, nickname, email, password,
      }),
    });

    const data = await response.json();

    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postAuthMail({ account }) {
  const url = 'https://4dv6lzjdu7.execute-api.ap-northeast-2.amazonaws.com/dev/api/active';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account,
      }),
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postActivate({ account, authCode }) {
  const url = 'https://4dv6lzjdu7.execute-api.ap-northeast-2.amazonaws.com/dev/api/active';

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account, authCode,
      }),
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchChatList({ token }) {
  const url = 'https://4dv6lzjdu7.execute-api.ap-northeast-2.amazonaws.com/dev/api/user';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchUserList({ token }) {
  const url = 'https://4dv6lzjdu7.execute-api.ap-northeast-2.amazonaws.com/dev/api/user';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
