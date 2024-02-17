import checkResponse from './utils';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://api.sko-news.mooo.com' : 'http://localhost:3001';

const headers = {
  'Content-Type': 'application/json',
};

export { baseUrl, headers };

export function getItems(token) {
  return fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

export function postItem(article, token) {
  console.log(article);
  return fetch(`${baseUrl}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  }).then((res) => checkResponse(res));
}

export function deleteItem(itemId, token) {
  return fetch(`${baseUrl}/articles/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}
