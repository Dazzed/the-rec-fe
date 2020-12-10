import * as types from './actionTypes';
import actionsFactory from 'lib/factory/actions';
import { get, deleteReq } from 'lib/request';
import { API_URL } from 'config/constants';

const listContactsMethods = actionsFactory({
  error: types.LIST_CONTACTS_ERROR,
  data: types.LIST_CONTACTS_DATA,
  loading: types.LIST_CONTACTS_REQUEST,
});

const unfollowFriendMethods = actionsFactory({
  error: types.UNFOLLOW_FRIEND_ERROR,
  success: types.UNFOLLOW_FRIEND_SUCCESS,
});

export const listContacts = ({ pageIndex, pageSize, query }) => {
  return async (dispatch) => {
    try {
      dispatch(listContactsMethods.setError(null));
      dispatch(listContactsMethods.setLoading(true));
      dispatch(listContactsMethods.setData(null));

      const response = await get(`${API_URL}/contacts`, {
        params: {
          pageIndex,
          pageSize,
          q: query,
        },
      });

      dispatch(listContactsMethods.setLoading(false));
      return dispatch(listContactsMethods.setData(response));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get contacts list';
      return dispatch(listContactsMethods.setError(errMsg));
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
