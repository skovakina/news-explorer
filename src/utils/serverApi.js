import checkResponse from './utils';

const baseUrl = 'http://localhost:3001';

const headers = {
  'Content-Type': 'application/json',
};

export function getItems() {
  return fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: headers,
  }).then((res) => checkResponse(res));
}

export function postItem(data) {
  return fetch(`${baseUrl}/articles`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => checkResponse(res));
}

export function deleteItem(itemId) {
  return fetch(`${baseUrl}/articles/${itemId}`, {
    method: 'DELETE',
    headers: headers,
  }).then((res) => checkResponse(res));
}
