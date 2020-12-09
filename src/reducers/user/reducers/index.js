import * as types from '../actions/actionTypes';
import initialState from '../../initialState';
import { persistUserProfile, persistUserToken } from 'lib/utils';

const reducers = (state = initialState.user, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      const profile = action.profile
        ? { ...state.profile, ...action.profile }
        : action.profile;
      persistUserProfile(profile);
      return Object.assign({}, state, { profile });

    case types.UPDATE_USER:
      const profileUpdate = { ...state.profile, ...action.profile };

      persistUserProfile(profileUpdate);
      return Object.assign({}, state, { profile: profileUpdate });

    case types.SAVE_USER_TOKEN:
      persistUserToken(action.token);
      return Object.assign({}, state, {
        token: action.token,
      });

    default:
      return state;
  }
};

export default reducers;
