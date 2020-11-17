import api from './api';
import web from './web';

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const API_URL = `${api[NODE_ENV]}/api`;

export const WEB_URL = web[NODE_ENV];

export const FACEBOOK_CLIENT_ID =
  NODE_ENV === 'production' ? '856447731850566' : '856447731850566';
