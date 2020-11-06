import { combineReducers } from 'redux';
import user from './user/reducers';
import login from '../pages/login/reducers';

const applicationStore = combineReducers({
  user,
  login,
});

export default applicationStore;
