function getURL(script_env) {
  const API_URL =
    script_env === 'production'
      ? 'https://api.get-tag.com/api'
      : script_env === 'staging'
      ? 'https://api.global-ved.com/api'
      : 'http://localhost:3000/api';

  return API_URL;
}

function getToken(script_env) {
  const data = window.localStorage.getItem('token');

  if (!data) {
    return null;
  }

  const parsed = JSON.parse(data);

  return parsed.value || null;
}

function get(script_env, url, params = {}) {
  getURL();
  let _url = new URL(url);

  Object.keys(params).forEach((key) =>
    _url.searchParams.append(key, params[key])
  );

  return fetch(_url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken(script_env)}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => error);
}

function post(script_env, url, body) {
  let _url = new URL(url);

  return fetch(_url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken(script_env)}`,
    },
    body: JSON.stringify(body || {}),
  })
    .then((response) => response.json())
    .catch((error) => error);
}

function fetchProducts(query, script_env) {
  return get(script_env, `${getURL(script_env)}/recs/suggestions`, {
    q: query,
  });
}

function checkRecExist(externaId, script_env) {
  return get(script_env, `${getURL(script_env)}/recs/check/${externaId}`);
}

function addToRec(productId, script_env) {
  return post(script_env, `${getURL(script_env)}/recs/add/${productId}`);
}

function createAndAddToRec(values, script_env) {
  return post(script_env, `${getURL(script_env)}/recs/`, values);
}
