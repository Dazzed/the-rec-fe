import * as types from './actionTypes';
import actionsFactory from '../../../lib/factory/actions';
import { post } from '../../../lib/request';
import { API_URL } from '../../../config/constants';
import { saveUserToken, saveUser } from '../../../reducers/user/actions';

const loginMethods = actionsFactory({
  error: types.LOGIN_ERROR,
  success: types.LOGIN_SUCCESS,
});

export const login = ({ code, redirectUri }) => {
  return async (dispatch) => {
    try {
      dispatch(loginMethods.setError(null));
      dispatch(loginMethods.setSuccess(false));

      const response = await post(`${API_URL}/facebook/login`, {
        code,
        redirectUri,
      });

      const {
        token,
        profile: { id, email, name, profilePicUrl },
      } = response;

      dispatch(saveUserToken(token));
      dispatch(
        saveUser({
          id,
          email,
          name,
          profilePicUrl,
        })
      );
      return dispatch(loginMethods.setSuccess(true));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed to login';
      return dispatch(loginMethods.setError(errMsg));
    }
  };
};