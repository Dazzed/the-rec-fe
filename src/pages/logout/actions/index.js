import { saveUser, saveUserToken } from 'reducers/user/actions';

export const logout = () => (dispatch) => {
  dispatch(saveUser(null));
  dispatch(saveUserToken(null));
};
