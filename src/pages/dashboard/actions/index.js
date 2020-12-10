import * as types from './actionTypes';
import actionsFactory from 'lib/factory/actions';
import { get, post } from 'lib/request';
import { API_URL } from 'config/constants';

const listRecsSuggestionsMethods = actionsFactory({
  error: types.LIST_RECS_SUGGESTIONS_ERROR,
  data: types.LIST_RECS_SUGGESTIONS_DATA,
  loading: types.LIST_RECS_SUGGESTIONS_ERROR,
});

const listFriendsSuggestionsMethods = actionsFactory({
  error: types.LIST_FRIENDS_SUGGESTIONS_ERROR,
  data: types.LIST_FRIENDS_SUGGESTIONS_DATA,
  loading: types.LIST_FRIENDS_SUGGESTIONS_REQUEST,
});

const followFriendMethods = actionsFactory({
  error: types.FOLLOW_FRIEND_ERROR,
  success: types.FOLLOW_FRIEND_SUCCESS,
});

export const listRecsSuggestions = ({ pageIndex, pageSize, query }) => {
  return async (dispatch) => {
    try {
      dispatch(listRecsSuggestionsMethods.setError(null));
      dispatch(listRecsSuggestionsMethods.setLoading(true));
      dispatch(listRecsSuggestionsMethods.setData(null));

      const response = await get(`${API_URL}/recs/suggestions`, {
        params: {
          pageIndex,
          pageSize,
          q: query,
        },
      });

      dispatch(listRecsSuggestionsMethods.setLoading(false));
      return dispatch(listRecsSuggestionsMethods.setData(response));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get recs suggestion list';
      return dispatch(listRecsSuggestionsMethods.setError(errMsg));
    }
  };
};

export const listFriendsSuggestions = () => {
  return async (dispatch) => {
    try {
      dispatch(listFriendsSuggestionsMethods.setError(null));
      dispatch(listFriendsSuggestionsMethods.setLoading(true));
      dispatch(listFriendsSuggestionsMethods.setData(null));

      const response = await get(`${API_URL}/contacts/suggestions`);

      dispatch(listFriendsSuggestionsMethods.setLoading(false));
      return dispatch(listFriendsSuggestionsMethods.setData(response.data));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get friends suggestions list';
      return dispatch(listFriendsSuggestionsMethods.setError(errMsg));
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
