import axios from 'axios';
import {
  getPersistedUserToken,
  persistUserToken,
  persistUserProfile,
} from './utils';

export const http = axios.create({});

http.interceptors.request.use(
  (config) => {
    const token = getPersistedUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

function unauthorizedHandler(err) {
  if (err.response && err.response.status && err.response.status === 401) {
    persistUserToken(null);
    persistUserProfile(null);
    window.location.href = '/';
  }
}

export const get = (url, body) =>
  new Promise((resolve, reject) =>
    http
      .get(url, body)
      .then((response) => resolve(response.data))
      .catch((err) => {
        unauthorizedHandler(err);
        return reject(err.response);
      })
  );

export const post = (url, body) =>
  new Promise((resolve, reject) =>
    http
      .post(url, body)
      .then((response) => resolve(response.data))
      .catch((err) => {
        unauthorizedHandler(err);
        return reject(err.response);
      })
  );

export const deleteReq = (url, body) =>
  new Promise((resolve, reject) =>
    http
      .delete(url, body)
      .then((response) => resolve(response.data))
      .catch((err) => {
        unauthorizedHandler(err);
        return reject(err.response);
      })
  );

export const patch = (url, body) =>
  new Promise((resolve, reject) =>
    http
      .patch(url, body)
      .then((response) => resolve(response.data))
      .catch((err) => {
        unauthorizedHandler(err);
        return reject(err.response);
      })
  );
