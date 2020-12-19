import * as types from '../actions/actionTypes';

const loginState = {
  loading: false,
  error: null,
  success: false,
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LOGIN_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        success: action.message,
      });

    default:
      return state;
  }
};

export default loginReducer;
