import * as types from '../actions/actionTypes';

export const saveUser = (profile) => {
  return {
    type: types.SAVE_USER,
    profile,
  };
};

export const updateUser = (profile) => {
  return {
    type: types.UPDATE_USER,
    profile,
  };
};

export const saveUserToken = (token) => {
  return {
    type: types.SAVE_USER_TOKEN,
    token,
  };
};
