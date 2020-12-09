import queryString from 'query-string';
import Storage from 'lib/utils/storage';

const cacheClient = new Storage();

/**
 * Saves a users profile to cacheClient
 * @param {*} user
 */
export const persistUserProfile = (user) => {
  //unset if user is null
  if (!user) {
    return cacheClient.removeItem('profile');
  }

  const currentProfile = getPersistedUserProfile();
  const profile = { ...currentProfile, ...user };

  cacheClient.setItem('profile', profile);
};

/**
 * Saves a users token to cacheClient
 * @param {*} token
 */
export const persistUserToken = (token) => {
  //unset if token is null
  if (!token) {
    return cacheClient.removeItem('token');
  }

  cacheClient.setItem('token', token);
};

/**
 * Returns Auth token in cacheClient if avaliable
 */
export const getPersistedUserToken = () => {
  return cacheClient.getItem('token') || null;
};

/**
 * Returns user profile in cacheClient if found
 */
export const getPersistedUserProfile = () => {
  const profile = cacheClient.getItem('profile');
  return profile || null;
};

/**
 * Returns first letter capitalized
 * @param {String} name
 */
export const getInitials = (name) => {
  let initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  return initials;
};
