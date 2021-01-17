import * as types from 'pages/my-tags/actions/actionTypes';

const myTagsState = {
  error: null,
  success: false,
  loading: false,
  myTagsListData: null,
  deleteRecSuccess: true,
};

const myTagsReducer = (state = myTagsState, action) => {
  switch (action.type) {
    case types.LIST_MY_RECS_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LIST_MY_RECS_DATA:
      return Object.assign({}, state, {
        myTagsListData: action.data,
      });

    case types.LIST_MY_RECS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.DELETE_MY_REC_SUCCESS:
      return Object.assign({}, state, {
        success: action.message,
        deleteRecSuccess: action.message,
      });

    case types.DELETE_MY_REC_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    default:
      return state;
  }
};

export default myTagsReducer;
