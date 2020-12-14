const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYwNzUxMDY2NiwiZXhwIjoxNjM5MDQ2NjY2fQ.ceutU1IfY1dGSOXMMzE55gqKu5Vw4-xKt4jDvV8dW9A";

const API_URL = "https://api.global-ved.com/api";
// const API_URL = "http://localhost:3000/api";

function get(url, params = {}) {
  let _url = new URL(url);

  Object.keys(params).forEach((key) =>
    _url.searchParams.append(key, params[key])
  );

  return fetch(_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => error);
}

function post(url, body) {
  let _url = new URL(url);

  return fetch(_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify(body || {}),
  })
    .then((response) => response.json())
    .catch((error) => error);
}

function fetchProducts(query) {
  return get(`${API_URL}/recs/suggestions`, { q: query });
}

function checkRecExist(externaId) {
  return get(`${API_URL}/recs/check/${externaId}`);
}

function addToRec(productId) {
  return post(`${API_URL}/recs/add/${productId}`);
}

function createAndAddToRec(values) {
  return post(`${API_URL}/recs/`, values);
}
