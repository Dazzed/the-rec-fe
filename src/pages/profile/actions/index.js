import * as types from './actionTypes';
import actionsFactory from 'lib/factory/actions';
import { get, post, deleteReq } from 'lib/request';
import { API_URL } from 'config/constants';

const listUsersRecsMethods = actionsFactory({
  error: types.LIST_USERS_RECS_ERROR,
  data: types.LIST_USERS_RECS_DATA,
  loading: types.LIST_USERS_RECS_REQUEST,
});
const getUserProfileMethods = actionsFactory({
  error: types.GET_USERS_PROFILE_ERROR,
  data: types.GET_USERS_PROFILE_DATA,
});
const unfollowFriendMethods = actionsFactory({
  error: types.UNFOLLOW_FRIEND_ERROR,
  success: types.UNFOLLOW_FRIEND_SUCCESS,
});
const followFriendMethods = actionsFactory({
  error: types.FOLLOW_FRIEND_ERROR,
  success: types.FOLLOW_FRIEND_SUCCESS,
});

export const listUsersRecs = ({ profileId, pageIndex, pageSize, query }) => {
  return async (dispatch) => {
    try {
      dispatch(listUsersRecsMethods.setError(null));
      dispatch(listUsersRecsMethods.setLoading(true));
      dispatch(listUsersRecsMethods.setData(null));

      const response = await get(`${API_URL}/contacts/recs/${profileId}`, {
        params: {
          pageIndex,
          pageSize,
          q: query,
        },
      });

      dispatch(listUsersRecsMethods.setLoading(false));
      return dispatch(listUsersRecsMethods.setData(response));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get users rec list';
      return dispatch(listUsersRecsMethods.setError(errMsg));
    }
  };
};

export const getUserProfile = (profileId) => {
  return async (dispatch) => {
    try {
      dispatch(getUserProfileMethods.setError(null));
      dispatch(getUserProfileMethods.setData(null));

      const { data } = await get(`${API_URL}/contacts/profile/${profileId}`);

      return dispatch(getUserProfileMethods.setData(data));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get users profile';
      return dispatch(getUserProfileMethods.setError(errMsg));
    }
  };
};

export const unfollowFriend = (friendId) => {
  return async (dispatch) => {
    try {
      dispatch(unfollowFriendMethods.setError(null));
      dispatch(unfollowFriendMethods.setSuccess(false));

      await deleteReq(`${API_URL}/contacts/${friendId}`);

      return dispatch(unfollowFriendMethods.setSuccess(true));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed unfollow this contact';
      return dispatch(unfollowFriendMethods.setError(errMsg));
    }
  };
};

export const followFriend = (friendId) => {
  return async (dispatch) => {
    try {
      dispatch(followFriendMethods.setError(null));
      dispatch(followFriendMethods.setSuccess(false));

      await post(`${API_URL}/contacts/${friendId}`);

      return dispatch(followFriendMethods.setSuccess(true));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed follow user';
      return dispatch(followFriendMethods.setError(errMsg));
    }
  };
};
