import { combineReducers } from 'redux';
import user from 'reducers/user/reducers';
import login from 'pages/login/reducers';
import contacts from 'pages/contacts/reducers';
import myRecs from 'pages/my-recs/reducers';
import dashboard from 'pages/dashboard/reducers';

const applicationStore = combineReducers({
  user,
  login,
  contacts,
  myRecs,
  dashboard,
});

export default applicationStore;
