import * as types from 'pages/contacts/actions/actionTypes';

const contactsState = {
  error: null,
  success: false,
  loading: false,
  contactsListData: null,
};

const contactsReducer = (state = contactsState, action) => {
  switch (action.type) {
    case types.LIST_CONTACTS_REQUEST:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    case types.LIST_CONTACTS_DATA:
      return Object.assign({}, state, {
        contactsListData: action.data,
      });

    case types.LIST_CONTACTS_ERROR:
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

    default:
      return state;
  }
};

export default contactsReducer;
