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

const listRecsAutoSuggestionsMethods = actionsFactory({
  error: types.LIST_RECS_AUTO_SUGGESTIONS_ERROR,
  data: types.LIST_RECS_AUTO_SUGGESTIONS_DATA,
});

const addToRecMethods = actionsFactory({
  error: types.ADD_TO_MY_REC_ERROR,
  success: types.ADD_TO_MY_REC_SUCCESS,
});

export const listRecsSuggestions = ({
  pageIndex,
  pageSize,
  query,
  category,
}) => {
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
          category,
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

export const listRecsAutoSuggestions = ({ pageSize, query }) => {
  return async (dispatch) => {
    try {
      dispatch(listRecsAutoSuggestionsMethods.setError(null));
      dispatch(listRecsAutoSuggestionsMethods.setData(null));

      const response = await get(`${API_URL}/recs/autosuggest`, {
        params: {
          pageSize,
          q: query,
        },
      });

      return dispatch(listRecsAutoSuggestionsMethods.setData(response.data));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed get recs auto suggestion list';
      return dispatch(listRecsAutoSuggestionsMethods.setError(errMsg));
    }
  };
};

export const addToMyRec = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(addToRecMethods.setError(null));
      dispatch(addToRecMethods.setSuccess(false));

      await post(`${API_URL}/recs/add/${productId}`);

      return dispatch(addToRecMethods.setSuccess(true));
    } catch (error) {
      console.error(error);
      const errMsg = 'Failed to add product';
      return dispatch(addToRecMethods.setError(errMsg));
    }
  };
};
