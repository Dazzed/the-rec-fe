import { combineReducers } from 'redux';
import user from 'reducers/user/reducers';
import login from 'pages/login/reducers';
import contacts from 'pages/contacts/reducers';
import myTags from 'pages/my-tags/reducers';
import dashboard from 'pages/dashboard/reducers';
import userProfile from 'pages/profile/reducers';

const applicationStore = combineReducers({
  user,
  login,
  contacts,
  myTags,
  dashboard,
  userProfile,
});

export default applicationStore;
