import { combineReducers } from 'redux';
import user from 'reducers/user/reducers';
import login from 'pages/login/reducers';
import contacts from 'pages/contacts/reducers';
import myRecs from 'pages/my-recs/reducers';
import dashboard from 'pages/dashboard/reducers';
import userProfile from 'pages/profile/reducers';

const applicationStore = combineReducers({
  user,
  login,
  contacts,
  myRecs,
  dashboard,
  userProfile,
});

export default applicationStore;
