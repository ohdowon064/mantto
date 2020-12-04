export async function postLogin({ account, password }) {
  const url = 'https://js6x6zb2dg.execute-api.ap-northeast-2.amazonaws.com/dev/api/sign-in';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ account, password }),
  });

  console.log(response.json());

  const { _W: { token: accessToken } } = await response.json();
  return accessToken;
}
// TODO : DELETE LATER
export function XXX() {}
