import api from 'config/api';
import web from 'config/web';

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const API_ENV = process.env.NEXT_PUBLIC_API_ENV || 'development';

export const API_URL = `${api[API_ENV]}/api`;

export const WEB_URL = web[API_ENV];

export const FACEBOOK_CLIENT_ID =
  API_ENV === 'production' ? '389307335726485' : '856447731850566';

export const EXTENSION_ID =
  API_ENV === 'production'
    ? 'kfhjndlenffgohklkeaiaepenjipfpke'
    : 'bafhdbofpbpahpakekhmeooemjhjbgfb';
