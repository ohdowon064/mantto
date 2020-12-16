export async function postLogin({ account, password }) {
  const url = 'https://js6x6zb2dg.execute-api.ap-northeast-2.amazonaws.com/dev/api/sign-in';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ account, password }),
  });

  const { _W: { token: accessToken } } = await response.json();
  return accessToken;
}

export async function fetchChatList() {
  const url = 'https://mantto-app-5d71f-default-rtdb.firebaseio.com/chat.json';

  const response = await fetch(url);

  const data = response.json();

  console.log(data);

  return data;
}
