import * as types from 'pages/dashboard/actions/actionTypes';

const dashboardState = {
  error: null,
  success: false,
  loading: false,
  recsSuggestionListData: null,
  friendsSuggestionList: [],
  followFriendSuccess: false,
  recsAutoSuggestions: [],
  addToRecSuccess: false,
};

const dashboardReducer = (state = dashboardState, action) => {
  switch (action.type) {
    case types.LIST_RECS_SUGGESTIONS_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LIST_RECS_SUGGESTIONS_DATA:
      return Object.assign({}, state, {
        recsSuggestionListData: action.data,
      });

    case types.LIST_RECS_SUGGESTIONS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.LIST_FRIENDS_SUGGESTIONS_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LIST_FRIENDS_SUGGESTIONS_DATA:
      return Object.assign({}, state, {
        friendsSuggestionList: action.data,
      });

    case types.LIST_FRIENDS_SUGGESTIONS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.FOLLOW_FRIEND_SUCCESS:
      return Object.assign({}, state, {
        success: action.message,
        followFriendSuccess: action.message,
      });

    case types.FOLLOW_FRIEND_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.LIST_RECS_AUTO_SUGGESTIONS_DATA:
      return Object.assign({}, state, {
        recsAutoSuggestions: action.data,
      });

    case types.LIST_RECS_AUTO_SUGGESTIONS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.ADD_TO_MY_REC_SUCCESS:
      return Object.assign({}, state, {
        success: action.message,
        addToRecSuccess: action.message,
      });

    case types.ADD_TO_MY_REC_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    default:
      return state;
  }
};

export default dashboardReducer;
