$(function () {
  const data = window.localStorage.getItem('token');

  if (!data) {
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    script_env = urlParams.get('script_env');

    window.open(getWebURL(script_env) + '/login');
    parent.window.postMessage('removetheiframe', '*');
  }
});

function getWebURL(script_env) {
  const API_URL =
    script_env === 'production'
      ? 'https://www.get-tag.com'
      : script_env === 'staging'
      ? 'https://web.global-ved.com'
      : 'http://localhost:4000';

  return API_URL;
}
