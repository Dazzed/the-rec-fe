import * as types from 'pages/profile/actions/actionTypes';

const userProfileState = {
  error: null,
  success: false,
  loading: false,
  userRecListData: null,
  userProfileData: null,
};

const userProfileReducer = (state = userProfileState, action) => {
  switch (action.type) {
    case types.LIST_USERS_RECS_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LIST_USERS_RECS_DATA:
      return Object.assign({}, state, {
        userRecListData: action.data,
      });

    case types.LIST_USERS_RECS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.GET_USERS_PROFILE_DATA:
      return Object.assign({}, state, {
        userProfileData: action.data,
      });

    case types.GET_USERS_PROFILE_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.UNFOLLOW_FRIEND_SUCCESS:
      return Object.assign({}, state, {
        success: action.message,
      });

    case types.UNFOLLOW_FRIEND_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.FOLLOW_FRIEND_SUCCESS:
      return Object.assign({}, state, {
        success: action.message,
      });

    case types.FOLLOW_FRIEND_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    default:
      return state;
  }
};

export default userProfileReducer;
