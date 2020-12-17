import * as types from 'pages/my-recs/actions/actionTypes';

const myRecsState = {
  error: null,
  success: false,
  loading: false,
  myRecsListData: null,
  deleteRecSuccess: true,
};

const myRecsReducer = (state = myRecsState, action) => {
  switch (action.type) {
    case types.LIST_MY_RECS_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LIST_MY_RECS_DATA:
      return Object.assign({}, state, {
        myRecsListData: action.data,
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

export default myRecsReducer;
