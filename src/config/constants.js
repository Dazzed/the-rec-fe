import api from './api';
import web from './web';

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const API_ENV = process.env.REACT_APP_API_ENV || 'development';

export const API_URL = `${api[API_ENV]}/api`;

export const WEB_URL = web[API_ENV];

export const FACEBOOK_CLIENT_ID =
  API_ENV === 'production' ? '856447731850566' : '856447731850566';
