import checkResponse from './utils';

const { API_KEY } = process.env;
const baseUrl = 'https://newsapi.org/v2/everything';

const headers = {
  'X-Api-Key': API_KEY,
};

// date as YYYY-MM-DD
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

const toDate = new Date();
const fromDate = new Date();
fromDate.setDate(toDate.getDate() - 7);

const from = formatDate(fromDate);
const to = formatDate(toDate);
const pageSize = 100;

export function getNews(q) {
  const url = `${baseUrl}?q=${encodeURIComponent(q)}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  return fetch(url, {
    method: 'GET',
    headers: headers,
  }).then((res) => checkResponse(res));
}
